/* Análisis Saber 11 · Montelíbano y el San Jorge
   Herramienta interactiva. Los datos son los del artículo (escala 0 a 100 y, donde aplica, 0 a 500).
   Todo lo que cambia en la página se recalcula desde estos datos o desde los valores que el visitante edita. */
(function () {
  'use strict';

  // ---------- Datos base ----------
  const YEARS = [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024];
  // Montelíbano, colegios oficiales, calendario A (null = sin dato completo)
  const MON = [48.79, 48.93, 50.63, 48.97, null, 48.19, null, null, 47.59, null, 48.83];
  // Córdoba, colegios oficiales, calendario A (cuadros ICFES; 2014–2015 microdatos validados)
  const DEP = [46.99, 47.03, 48.86, 48.35, 47.44, 46.32, 45.99, 45.42, 46.72, 47.70, 48.88];
  // Nacional, colegios oficiales, calendario A (cuadros ICFES; desde 2016)
  const NAL = [null, null, 50.62, 50.06, 49.08, 48.16, 48.37, 47.81, 48.72, 49.32, 49.77];
  // Promedio de los otros seis municipios (ventana 2014–2024, sin 2018/2020/2021/2023)
  const OTROS6 = [47.05, 46.50, 47.99, 47.96, null, 45.30, null, null, 45.66, null, 46.68];

  // Municipios, ventana 2014–2024 (oficiales), por año en el orden de YEARS (null = no comparable)
  const MUN = {
    'Montelíbano': [48.79, 48.93, 50.63, 48.97, null, 48.19, null, null, 47.59, null, 48.83],
    'Buenavista': [46.36, 43.82, 46.60, 46.93, null, 43.04, null, null, 43.48, null, 44.87],
    'Puerto Libertador': [48.36, 46.62, 48.65, 46.63, null, 43.59, null, null, 44.21, null, 44.89],
    'Ayapel': [45.89, 45.07, 45.22, 46.53, null, 42.89, null, null, 43.30, null, 45.66],
    'Planeta Rica': [47.24, 46.69, 48.60, 48.35, null, 46.19, null, null, 45.98, null, 46.55],
    'Pueblo Nuevo': [46.32, 46.42, 48.90, 48.48, null, 46.37, null, null, 46.29, null, 47.02],
    'La Apartada': [46.73, 47.44, 46.11, 46.97, null, 45.78, null, null, 47.39, null, 47.05],
    'Sahagún': [48.42, 49.46, 51.84, 51.84, null, 49.24, null, null, 48.99, null, 50.73]
  };
  // Correlación con Montelíbano: artículo 2005–2012 (n = 8), ventana 1 2010–2013 (n = 4),
  // ventana 2 2014–2024 (n = 7) y cambios interanuales de la ventana 2 (n = 6)
  const CORR = {
    'Buenavista': { art: 0.19, v1: 0.99, v2: 0.67, cam: 0.52 },
    'Puerto Libertador': { art: 0.47, v1: 0.93, v2: 0.77, cam: 0.75 },
    'Ayapel': { art: 0.57, v1: 0.97, v2: 0.54, cam: 0.26 },
    'Planeta Rica': { art: 0.67, v1: 0.98, v2: 0.83, cam: 0.71 },
    'Pueblo Nuevo': { art: 0.80, v1: 1.00, v2: 0.78, cam: 0.78 },
    'La Apartada': { art: 0.86, v1: 0.99, v2: -0.35, cam: -0.53 },
    'Sahagún': { art: 0.90, v1: 0.97, v2: 0.68, cam: 0.75 }
  };
  // Sensibilidad (ventana 2014–2024): oficiales, todos los colegios, 2022/2024 del archivo, con parciales
  const SENS = {
    'Buenavista': [0.67, 0.63, 0.69, 0.18],
    'Puerto Libertador': [0.77, 0.88, 0.78, 0.56],
    'Ayapel': [0.54, 0.56, 0.57, 0.03],
    'Planeta Rica': [0.83, 0.76, 0.85, 0.25],
    'Pueblo Nuevo': [0.78, 0.56, 0.88, 0.34],
    'La Apartada': [-0.35, -0.09, -0.24, -0.41],
    'Sahagún': [0.68, 0.23, 0.70, 0.16]
  };
  const T_CRIT = { 4: 0.95, 6: 0.811, 7: 0.754, 8: 0.707, 9: 0.666 };

  // ---------- Utilidades ----------
  const $ = (id) => document.getElementById(id);
  const fmt = (v, d = 2) => (v === null || v === undefined || Number.isNaN(v)) ? '—' : v.toFixed(d).replace('.', ',');
  const fmtS = (v, d = 2) => (v === null || Number.isNaN(v)) ? '—' : (v >= 0 ? '+' : '−') + Math.abs(v).toFixed(d).replace('.', ',');
  const valid = (arr) => arr.filter((v) => v !== null && v !== undefined && !Number.isNaN(v));
  const mean = (arr) => { const a = valid(arr); return a.length ? a.reduce((x, y) => x + y, 0) / a.length : null; };
  function ols(xs, ys) {
    const pts = xs.map((x, i) => [x, ys[i]]).filter((p) => p[1] !== null && p[1] !== undefined && !Number.isNaN(p[1]));
    const n = pts.length;
    if (n < 3) return null;
    const mx = pts.reduce((s, p) => s + p[0], 0) / n, my = pts.reduce((s, p) => s + p[1], 0) / n;
    let sxy = 0, sxx = 0;
    pts.forEach(([x, y]) => { sxy += (x - mx) * (y - my); sxx += (x - mx) ** 2; });
    const b = sxy / sxx, a = my - b * mx;
    let rss = 0;
    pts.forEach(([x, y]) => { rss += (y - a - b * x) ** 2; });
    const s = Math.sqrt(rss / (n - 2));
    return { a, b, n, mx, sxx, s, t: b / (s / Math.sqrt(sxx)) };
  }
  // Promedio de correlaciones con transformación z de Fisher (r = 1 se acota a 0,995 para poder promediar)
  const fisherMean = (rs) => {
    const z = rs.filter((r) => r !== null).map((r) => 0.5 * Math.log((1 + Math.min(r, 0.995)) / (1 - Math.min(r, 0.995))));
    if (!z.length) return null;
    const w = z.reduce((a, b) => a + b, 0) / z.length;
    return (Math.exp(2 * w) - 1) / (Math.exp(2 * w) + 1);
  };

  // ---------- Estado editable ----------
  const state = {
    mon: MON.slice(),
    dep: DEP.slice(),
    nal: NAL.slice(),
    escala: 1,       // 1 = 0–100 ; 5 = 0–500
    desde: 2014,
    hasta: 2024,
    series: { mon: true, dep: true, nal: true, otros: false },
    corrVentana: 'v2',
    umbral: 0.754,
    proyAnio: 2030,
    proyPend: null,  // null = pendiente observada
    proyBanda: true
  };

  // ---------- Tabla editable (valores de Montelíbano, Córdoba y nacional) ----------
  function buildEditable() {
    const tb = $('tabla-editable').querySelector('tbody');
    tb.innerHTML = '';
    YEARS.forEach((y, i) => {
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${y}</td>` + ['mon', 'dep', 'nal'].map((k) => {
        const v = state[k][i];
        return `<td><input type="number" step="0.01" min="0" max="100" data-serie="${k}" data-i="${i}" value="${v === null ? '' : v}" aria-label="${k} ${y}"></td>`;
      }).join('');
      tb.appendChild(tr);
    });
    tb.querySelectorAll('input').forEach((inp) => inp.addEventListener('input', (e) => {
      const k = e.target.dataset.serie, i = +e.target.dataset.i;
      const val = e.target.value === '' ? null : parseFloat(e.target.value.replace(',', '.'));
      state[k][i] = (val === null || Number.isNaN(val)) ? null : val;
      refresh();
    }));
  }

  // ---------- Vistas que dependen de los datos ----------
  function visibleIdx() {
    return YEARS.map((y, i) => i).filter((i) => YEARS[i] >= state.desde && YEARS[i] <= state.hasta);
  }
  function escalado(arr) { return arr.map((v) => (v === null ? null : v * state.escala)); }

  function renderLevels() {
    const idx = visibleIdx();
    const labels = idx.map((i) => String(YEARS[i]));
    const ds = [];
    const k = state.escala;
    const cfg = [
      ['mon', 'Montelíbano', state.mon, '#000', 3, []],
      ['dep', 'Córdoba, oficiales', state.dep, '#6e6e6e', 2, []],
      ['nal', 'Nacional, oficiales', state.nal, '#a6a6a6', 2, [6, 4]]
    ];
    cfg.forEach(([key, lab, arr, col, w, dash]) => {
      if (state.series[key]) ds.push({ label: lab, data: idx.map((i) => arr[i] === null ? null : arr[i] * k), borderColor: col, backgroundColor: col, borderWidth: w, borderDash: dash, pointRadius: 3, tension: 0.2, spanGaps: false });
    });
    if (state.series.otros) ds.push({ label: 'Otros seis municipios (promedio)', data: idx.map((i) => OTROS6[i] === null ? null : OTROS6[i] * k), borderColor: '#c9a86a', backgroundColor: '#c9a86a', borderWidth: 2, pointRadius: 3, tension: 0.2, spanGaps: false });
    chLevels.data.labels = labels;
    chLevels.data.datasets = ds;
    chLevels.options.scales.y.min = k === 1 ? 40 : 200;
    chLevels.options.scales.y.max = k === 1 ? 55 : 275;
    chLevels.options.scales.y.title.text = k === 1 ? 'Promedio (0 a 100)' : 'Promedio (0 a 500)';
    chLevels.update();
  }

  function trendInfo() {
    const xs = YEARS;
    const gap = YEARS.map((y, i) => (state.mon[i] !== null && state.dep[i] !== null) ? state.mon[i] - state.dep[i] : null);
    return {
      mon: ols(xs, state.mon), dep: ols(xs, state.dep), nal: ols(xs, state.nal), gap: ols(xs, gap), gapArr: gap
    };
  }

  function renderGap() {
    const T = trendInfo();
    const idx = visibleIdx().filter((i) => T.gapArr[i] !== null);
    chGap.data.labels = idx.map((i) => String(YEARS[i]));
    chGap.data.datasets[0].data = idx.map((i) => T.gapArr[i]);
    const g = T.gap;
    const line = g ? idx.map((i) => g.a + g.b * YEARS[i]) : [];
    chGap.data.datasets[1].data = line;
    chGap.data.datasets[1].label = g ? `Tendencia (${fmtS(g.b)} por año; t = ${fmtS(g.t, 2)})` : 'Tendencia (sin datos suficientes)';
    chGap.update();
    $('gap-t').textContent = g ? `Tendencia de la ventaja: ${fmtS(g.b)} puntos por año, t = ${fmtS(g.t, 2)} con ${g.n} años. ${Math.abs(g.t) >= 2.571 ? 'Significativa al 5 % (df = 5).' : 'No significativa al 5 % (df = 5).'}` : 'Faltan datos para estimar la tendencia.';
  }

  function renderProj() {
    const T = trendInfo();
    const g = T.gap;
    const xs = [];
    for (let y = 2014; y <= state.proyAnio; y++) xs.push(y);
    const b = state.proyPend === null ? (g ? g.b : 0) : state.proyPend;
    const mxX = g ? g.mx : 2019, myY = g ? g.a + g.b * mxX : 0;
    const scen = xs.map((y) => myY + b * (y - mxX));
    const sel = YEARS.map((y, i) => T.gapArr[i]);
    const datasets = [
      { label: 'Ventaja observada', data: YEARS.map((y, i) => sel[i]), borderColor: '#000', backgroundColor: '#000', pointRadius: 4, showLine: false },
      { label: 'Escenario elegido', data: scen, borderColor: '#000', borderDash: [6, 4], borderWidth: 2, pointRadius: 0, tension: 0 }
    ];
    if (state.proyBanda && g) {
      const hi = [], lo = [];
      xs.forEach((y) => {
        const s = g.s * Math.sqrt(1 + 1 / g.n + (y - g.mx) ** 2 / g.sxx) * 2.571;
        const yh = g.a + g.b * y;
        hi.push(yh + s); lo.push(yh - s);
      });
      datasets.push({ label: 'Intervalo de predicción 95 % (tendencia observada)', data: hi, borderColor: 'rgba(0,0,0,0)', backgroundColor: 'rgba(0,0,0,0.12)', pointRadius: 0, fill: '+1' });
      datasets.push({ label: 'límite inferior', data: lo, borderColor: 'rgba(0,0,0,0)', backgroundColor: 'rgba(0,0,0,0)', pointRadius: 0, fill: false });
    }
    chProj.data.labels = xs.map(String);
    chProj.data.datasets = datasets;
    chProj.update();
    const final = myY + b * (state.proyAnio - mxX);
    let txt = `Con una pendiente de ${fmtS(b)} puntos por año, la ventaja de Montelíbano frente a Córdoba sería de ${fmtS(final)} puntos en ${state.proyAnio}.`;
    if (g && state.proyPend === null) {
      const se = g.s * Math.sqrt(1 + 1 / g.n + (state.proyAnio - g.mx) ** 2 / g.sxx) * 2.571;
      const yh = g.a + g.b * state.proyAnio;
      txt += ` Con la tendencia observada, el intervalo de predicción al 95 % va de ${fmtS(yh - se)} a ${fmtS(yh + se)}.`;
    }
    txt += ' Es una extrapolación con siete observaciones: no es un pronóstico.';
    $('proy-texto').textContent = txt;
    $('proy-anio-val').textContent = state.proyAnio;
    $('proy-pend-val').textContent = fmtS(b);
  }

  function renderCorr() {
    const names = Object.keys(CORR);
    const v = state.corrVentana;
    const vals = names.map((n) => CORR[n][v]);
    const nObs = { art: 8, v1: 4, v2: 7, cam: 6 }[v];
    const lim = T_CRIT[nObs];
    state.umbral = lim;
    chCorr.data.labels = names;
    chCorr.data.datasets[0].data = vals;
    chCorr.data.datasets[0].backgroundColor = vals.map((r) => Math.abs(r) > lim ? '#000' : '#bdbdbd');
    chCorr.data.datasets[0].label = `r con Montelíbano (${v === 'art' ? '2005–2012' : v === 'v1' ? '2010–2013' : v === 'v2' ? '2014–2024' : 'cambios 2014–2024'}, n = ${nObs})`;
    chCorr.update();
    $('corr-umbral').textContent = `Umbral de significancia al 5 % con n = ${nObs}: |r| > ${fmt(lim, 3)}. Barras negras = supera el umbral.`;
  }

  // Tablas con columna de promedio general
  function renderTables() {
    // Tabla de niveles
    const body = $('tabla-niveles').querySelector('tbody');
    const rowsN = [
      ['Montelíbano', state.mon],
      ['Córdoba, oficiales', state.dep],
      ['Nacional, oficiales', state.nal]
    ];
    body.innerHTML = rowsN.map(([lab, arr]) => `<tr><td>${lab}</td>` + YEARS.map((y, i) => `<td>${fmt(arr[i] === null ? null : arr[i], 2)}</td>`).join('') + `<td class="prom">${fmt(mean(arr), 2)}</td></tr>`).join('');

    // Tabla de brechas
    const gapC = YEARS.map((y, i) => (state.mon[i] !== null && state.dep[i] !== null) ? state.mon[i] - state.dep[i] : null);
    const gapN = YEARS.map((y, i) => (state.mon[i] !== null && state.nal[i] !== null) ? state.mon[i] - state.nal[i] : null);
    const gapO = YEARS.map((y, i) => (state.mon[i] !== null && OTROS6[i] !== null) ? state.mon[i] - OTROS6[i] : null);
    const bg = $('tabla-brechas').querySelector('tbody');
    bg.innerHTML = [['Montelíbano − Córdoba oficial', gapC], ['Montelíbano − nacional oficial', gapN], ['Montelíbano − promedio de otros seis', gapO]]
      .map(([lab, arr]) => `<tr><td>${lab}</td>` + YEARS.map((y, i) => `<td>${fmtS(arr[i])}</td>`).join('') + `<td class="prom">${fmtS(mean(arr))}</td></tr>`).join('');

    // Tabla de posición (ventana 2014–2024, años con dato)
    const cols = YEARS.map((y, i) => i).filter((i) => MUN['Montelíbano'][i] !== null);
    const rankBody = $('tabla-posicion').querySelector('tbody');
    const names = Object.keys(MUN);
    const rankRows = names.map((n) => {
      const ranks = cols.map((i) => {
        const vals = names.map((m) => [m, MUN[m][i]]).filter((p) => p[1] !== null).sort((a, b) => b[1] - a[1]);
        return vals.findIndex((p) => p[0] === n) + 1;
      });
      return [n, ranks, mean(ranks)];
    });
    rankBody.innerHTML = rankRows.map(([n, ranks, avg]) => `<tr${n === 'Montelíbano' ? ' class="foco"' : ''}><td>${n}</td>` + ranks.map((r) => `<td>${r}</td>`).join('') + `<td class="prom">${fmt(avg, 1)}</td></tr>`).join('');
    $('tabla-posicion-head').innerHTML = '<th>Municipio</th>' + cols.map((i) => `<th>${YEARS[i]}</th>`).join('') + '<th>Promedio</th>';

    // Tabla de correlaciones
    const cb = $('tabla-corr').querySelector('tbody');
    cb.innerHTML = Object.keys(CORR).map((n) => {
      const c = CORR[n];
      const prom = fisherMean([c.art, c.v1, c.v2, c.cam]);
      return `<tr><td>${n}</td><td>${fmt(c.art)}</td><td>${fmt(c.v1)}</td><td>${fmt(c.v2)}</td><td>${fmt(c.cam)}</td><td class="prom">${fmt(prom)}</td></tr>`;
    }).join('');

    // Tabla de sensibilidad
    const sb = $('tabla-sens').querySelector('tbody');
    sb.innerHTML = Object.keys(SENS).map((n) => {
      const s = SENS[n];
      return `<tr><td>${n}</td>` + s.map((r) => `<td>${fmt(r)}</td>`).join('') + `<td class="prom">${fmt(fisherMean(s))}</td></tr>`;
    }).join('');
  }

  function refresh() {
    renderLevels();
    renderGap();
    renderProj();
    renderCorr();
    renderTables();
    renderTrendBox();
  }

  function renderTrendBox() {
    const T = trendInfo();
    const rows = [
      ['Montelíbano', T.mon],
      ['Córdoba, oficiales', T.dep],
      ['Nacional, oficiales', T.nal],
      ['Ventaja sobre Córdoba', T.gap]
    ];
    $('tendencias').querySelector('tbody').innerHTML = rows.map(([n, f]) => {
      if (!f) return `<tr><td>${n}</td><td>—</td><td>—</td><td>—</td></tr>`;
      const signif = Math.abs(f.t) >= 2.571 ? 'sí' : 'no';
      return `<tr><td>${n}</td><td>${fmtS(f.b, 3)}</td><td>${fmtS(f.t, 2)}</td><td>${signif}</td></tr>`;
    }).join('');
  }

  // ---------- Gráficas (Chart.js) ----------
  let chLevels, chGap, chProj, chCorr;
  function makeCharts() {
    const common = { responsive: true, maintainAspectRatio: false, interaction: { mode: 'index', intersect: false }, plugins: { legend: { position: 'bottom', labels: { boxWidth: 14, font: { family: 'Arial' } } } } };
    chLevels = new Chart($('g-niveles'), { type: 'line', data: { labels: [], datasets: [] }, options: { ...common, scales: { x: { grid: { display: false } }, y: { min: 40, max: 55, title: { display: true, text: 'Promedio (0 a 100)' } } } } });
    chGap = new Chart($('g-ventaja'), { type: 'bar', data: { labels: [], datasets: [
      { type: 'bar', label: 'Montelíbano − Córdoba', data: [], backgroundColor: '#bdbdbd', borderColor: '#000', borderWidth: 1 },
      { type: 'line', label: 'Tendencia', data: [], borderColor: '#000', borderDash: [6, 4], pointRadius: 0, borderWidth: 2 }
    ] }, options: { ...common, scales: { y: { title: { display: true, text: 'Puntos' } } } } });
    chProj = new Chart($('g-proyeccion'), { type: 'line', data: { labels: [], datasets: [] }, options: { ...common, scales: { y: { min: -4, max: 4, title: { display: true, text: 'Montelíbano − Córdoba (puntos)' } } } } });
    chCorr = new Chart($('g-correlacion'), { type: 'bar', data: { labels: [], datasets: [{ label: 'r', data: [], backgroundColor: '#000' }] }, options: { ...common, plugins: { legend: { display: true, position: 'bottom' } }, scales: { y: { min: -0.6, max: 1.05, title: { display: true, text: 'Coeficiente de Pearson' } } } } });
  }

  // ---------- Controles ----------
  function wireControls() {
    const yearSel = (id, val) => {
      const s = $(id);
      s.innerHTML = YEARS.map((y) => `<option value="${y}"${y === val ? ' selected' : ''}>${y}</option>`).join('');
    };
    yearSel('sel-desde', state.desde);
    yearSel('sel-hasta', state.hasta);
    $('sel-desde').addEventListener('change', (e) => { state.desde = +e.target.value; if (state.desde > state.hasta) { state.hasta = state.desde; $('sel-hasta').value = state.desde; } refresh(); });
    $('sel-hasta').addEventListener('change', (e) => { state.hasta = +e.target.value; if (state.hasta < state.desde) { state.desde = state.hasta; $('sel-desde').value = state.hasta; } refresh(); });
    $('sel-escala').addEventListener('change', (e) => { state.escala = +e.target.value; renderLevels(); });
    ['mon', 'dep', 'nal', 'otros'].forEach((k) => {
      $('chk-' + k).addEventListener('change', (e) => { state.series[k] = e.target.checked; renderLevels(); });
      $('chk-' + k).checked = state.series[k];
    });
    $('sel-corr').addEventListener('change', (e) => { state.corrVentana = e.target.value; renderCorr(); });
    $('proy-anio').addEventListener('input', (e) => { state.proyAnio = +e.target.value; renderProj(); });
    $('proy-pend').addEventListener('input', (e) => { state.proyPend = +e.target.value; renderProj(); });
    $('proy-usar-obs').addEventListener('click', () => { state.proyPend = null; $('proy-pend').value = (trendInfo().gap || { b: 0 }).b.toFixed(2); renderProj(); });
    $('proy-banda').addEventListener('change', (e) => { state.proyBanda = e.target.checked; renderProj(); });
    $('btn-restaurar').addEventListener('click', () => {
      state.mon = MON.slice(); state.dep = DEP.slice(); state.nal = NAL.slice();
      buildEditable(); refresh();
    });
    // Valores iniciales de los deslizadores
    $('proy-anio').value = state.proyAnio; $('proy-anio-val').textContent = state.proyAnio;
    const g = trendInfo().gap;
    $('proy-pend').value = g ? g.b.toFixed(2) : 0;
    $('sel-corr').value = state.corrVentana;
  }

  // ---------- Arranque ----------
  function start() {
    if (typeof Chart === 'undefined') { $('aviso-js').hidden = false; return; }
    makeCharts();
    buildEditable();
    wireControls();
    refresh();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
