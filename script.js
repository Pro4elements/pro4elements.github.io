<script>
// ---------- Banner productos ----------
/* ---------- Banner con imágenes de productos ---------- */
const products = [
  {img:'hardcoreroots.png'},
  {img:'active.png'},
  {img:'apotheosic.png'},
  {img:'atomforze.png'},
  {img:'base.png'},
  {img:'bloom.png'},
  {img:'capillary.png'},
  {img:'glutton.png'},
  {img:'greenperfect.png'},
  {img:'growth.png'}
];

function fillTicker() {
  const track = document.getElementById('prodTrack');
  const wtrack = document.getElementById('wordsTrack');

  [...products, ...products].forEach(p => {
    const it = document.createElement('div');
    it.className = 'item';
    const pill = document.createElement('div');
    pill.className = 'pill';

    const img = document.createElement('img');
    img.src = p.img;
    img.alt = 'Producto 4Elements';
    img.style.maxHeight = "120px";
    img.style.objectFit = "contain";

    pill.appendChild(img);
    it.appendChild(pill);
    track.appendChild(it);
  });

  // tus palabras del banner siguen igual
  const words=['EC precisa','PPFD óptimo','CO₂ controlado','DLI calculado','VPD estable','Calidad máxima','Resina top','Aroma intacto','Cosecha pro','4ELEMENTS'];
  [...words, ...words, ...words].forEach(w => {
    const el=document.createElement('div'); 
    el.className='word'; 
    el.textContent=w; 
    wtrack.appendChild(el);
  });
}
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

