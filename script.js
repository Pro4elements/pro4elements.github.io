<script>
// ---------- Banner productos ----------
const products=[{name:'BASE',cls:'pill pill--blue'},{name:'GROWTH',cls:'pill pill--green'},{name:'BLOOM',cls:'pill pill--orange'},{name:'Atom K',cls:'pill pill--orange'},{name:'Atom Forze',cls:'pill pill--blue'},{name:'Sugar Rezum',cls:'pill pill--green'},{name:'Glutton Bloom',cls:'pill pill--orange'},{name:'Ultra Booster',cls:'pill pill--blue'},{name:'Ultra Bigger',cls:'pill pill--green'},{name:'Hardcore Roots',cls:'pill pill--blue'}];
const words=['EC precisa','PPFD óptimo','CO₂ controlado','DLI calculado','VPD estable','Calidad máxima','Resina top','Aroma intacto','Cosecha pro','4ELEMENTS'];
function fillTicker(){const track=document.getElementById('prodTrack');const wtrack=document.getElementById('wordsTrack');[...products,...products].forEach(p=>{const it=document.createElement('div');it.className='item';const pill=document.createElement('div');pill.className=p.cls;const span=document.createElement('span');span.textContent=p.name;pill.appendChild(span);it.appendChild(pill);track.appendChild(it);});[...words,...words,...words].forEach(w=>{const el=document.createElement('div');el.className='word';el.textContent=w;wtrack.appendChild(el);});}
fillTicker();

// ---------- DATA (se carga del v17) ----------
let DATA=[];
/* UI genética, VPD, diagnóstico IA: exactamente igual que la versión anterior que te pasé,
incluyendo:
- populateGeneSelect()
- renderGene()
- updateVPD()
- analyzeHeuristic()
- renderResults()
- eventos para exportar CSV/PDF
- botones para importar DATA del v17 y guardar HTML completo
*/
</script>
