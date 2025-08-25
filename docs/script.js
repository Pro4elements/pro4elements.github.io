console.log("✅ script.js cargado");

// --- utilidades ---
const byId = id => document.getElementById(id);
const genSelect = byId('genSelect');
const filtro = byId('filtro');
const collator = new Intl.Collator('es', { sensitivity: 'base', numeric: true });
const norm = s => (s || '').toString().toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
const fmt = v => (v === undefined || v === null || v === '') ? '—' : v;
const capFirst = s => (s || '').toString().replace(/^./, c => c.toUpperCase());

let GENETICS = [];
let currentList = [];

// Mapeo de IDs -> campos
const fields = {
  vTHC:       g => `${fmt(g.thc)}%`,
  vSemanas:   g => fmt(g.semanas),
  vOrigen:    g => fmt(g.origen),
  vFlor:      g => fmt(g.tipoFlor),
  vECVeg:     g => fmt(g.ecVeg),
  vECFlor:    g => fmt(g.ecFlor),
  vPPFDVeg:   g => fmt(g.ppfdVeg),
  vPPFDFlor:  g => fmt(g.ppfdFlor),
  vCO2:       g => fmt(g.co2),
  vTempDia:   g => fmt(g.tempDia),
  vTempNoche: g => fmt(g.tempNoche),
  vHRVeg:     g => fmt(g.hrVeg),
  vHRFlor:    g => fmt(g.hrFlor),
  vStretch:   g => fmt(capFirst(g.stretch)),
  vHoja:      g => fmt(capFirst(g.hoja)),
  vSens:      g => fmt(capFirst(g.sensibilidad)),
  vSecadoDias:g => fmt(g.secadoDias),
  vSecadoHR:  g => fmt(g.secadoHR),
  vSecadoTemp:g => fmt(g.secadoTemp)
};

function sortByName(arr){ return [...arr].sort((a,b)=> collator.compare(a.nombre, b.nombre)); }
function setURLParam(name, value){ const u=new URL(location.href); value?u.searchParams.set(name,value):u.searchParams.delete(name); history.replaceState({},'',u); }
function getURLParam(name){ return new URL(location.href).searchParams.get(name); }

function clearValues(){
  for (const id in fields) byId(id).textContent = '—';
  byId('badgeTipo')?.textContent    = '—';
  byId('badgeStretch')?.textContent = 'Stretch: —';
  byId('badgeHoja')?.textContent    = 'Ratio hoja: —';
  byId('badgeSens')?.textContent    = 'Sensibilidad nutrientes: —';
}

function fillValues(g){
  for (const id in fields) byId(id).textContent = fields[id](g);
  byId('badgeTipo')   && (byId('badgeTipo').textContent    = `Flor ${g.tipoFlor || '—'}`);
  byId('badgeStretch')&& (byId('badgeStretch').textContent = `Stretch: ${g.stretch || '—'}`);
  byId('badgeHoja')   && (byId('badgeHoja').textContent    = `Ratio hoja: ${g.hoja || '—'}`);
  byId('badgeSens')   && (byId('badgeSens').textContent    = `Sensibilidad nutrientes: ${g.sensibilidad || '—'}`);
}

function renderOptions(list){
  if (!genSelect) { console.error("❌ Falta #genSelect en el HTML"); return; }
  const frag = document.createDocumentFragment();
  list.forEach(g => {
    const o = document.createElement('option');
    o.value = g.nombre;
    o.textContent = g.nombre;
    frag.appendChild(o);
  });
  genSelect.innerHTML = '';
  genSelect.appendChild(frag);
}

// --- Carga de datos ---
async function loadData(){
  const r = await fetch('geneticas.json?v=' + Date.now(), { cache: 'no-store' });
  if (!r.ok) throw new Error('No se pudo cargar geneticas.json ('+r.status+')');
  const data = await r.json();
  if (!Array.isArray(data) || !data.length) throw new Error('geneticas.json vacío o mal formado');
  GENETICS = data;
  console.log(`📦 Datos cargados: ${GENETICS.length} genéticas`);
}

// --- Inicialización ---
async function init(){
  try{
    await loadData();
    currentList = sortByName(GENETICS);
    renderOptions(currentList);

    const pre = getURLParam('g');
    let initial = currentList[0];
    if (pre) {
      const found = GENETICS.find(g => norm(g.nombre) === norm(pre));
      if (found) initial = found;
    }

    if (initial && genSelect){
      genSelect.value = initial.nombre;
      fillValues(initial);
      setURLParam('g', initial.nombre);
    }
  }catch(e){
    console.error(e);
    clearValues();
  }
}

// --- Eventos ---
genSelect?.addEventListener('change', () => {
  const g = GENETICS.find(x => x.nombre === genSelect.value);
  if (g){ fillValues(g); setURLParam('g', g.nombre); }
});

filtro?.addEventListener('input', () => {
  const q = filtro.value.trim();
  currentList = !q
    ? sortByName(GENETICS)
    : sortByName(GENETICS.filter(g => norm(g.nombre).includes(norm(q))));
  renderOptions(currentList);
  if (currentList.length){
    genSelect.value = currentList[0].nombre;
    fillValues(currentList[0]);
    setURLParam('g', currentList[0].nombre);
  } else {
    clearValues();
    setURLParam('g','');
  }
});

// Go!
init();
