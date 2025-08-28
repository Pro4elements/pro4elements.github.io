<script>
// ---------- Banner productos con imágenes ----------
const IMAGES = [
  "img/products/HardcoreRoots.png",
  "img/products/Active.png",
  "img/products/Apotheosic.png",
  "img/products/AtomForze.png",
  "img/products/Base.png",
  "img/products/Bloom.png",
  "img/products/Growth.png",
  "img/products/Glutton.png",
  "img/products/GreenPerfect.png",
  "img/products/Capillary.png",
  "img/products/ZxrRoots.png",
  "img/products/HungryBacter.png",
  "img/products/Micrococktail.png",   // cambia si tu archivo es "Micro-Cocktail.png"
  "img/products/Rootikal.png",
  "img/products/SugarRezum.png",
  "img/products/UltraBooster.png",
  "img/products/UltraSilk.png",
  "img/products/UltraBigger.png",
  "img/products/Tray.png"             // bandeja alveolos (ajusta si el nombre es distinto)
];

const words = [
  'EC precisa','PPFD óptimo','CO₂ controlado','DLI calculado',
  'VPD estable','Calidad máxima','Resina top','Aroma intacto',
  'Cosecha pro','4ELEMENTS'
];

function fillTicker() {
  const track = document.getElementById('prodTrack');
  const wtrack = document.getElementById('wordsTrack');

  // Duplicamos la lista de imágenes para scroll infinito
  const list = [...IMAGES, ...IMAGES];
  list.forEach(src => {
    const it = document.createElement('div');
    it.className = 'item';
    const img = new Image();
    img.src = src;
    img.alt = "Producto 4Elements";
    img.loading = 'lazy';
    it.appendChild(img);
    track.appendChild(it);
  });

  // Palabras en la franja inferior
  const ww = [...words, ...words, ...words];
  ww.forEach(w => {
    const el = document.createElement('div');
    el.className = 'word';
    el.textContent = w;
    wtrack.appendChild(el);
  });
}

fillTicker();

// ---------- DATA (se carga del v17) ----------
let DATA=[];

/* 
  Resto de tu script sigue igual que antes:
  - populateGeneSelect()
  - renderGene()
  - updateVPD()
  - analyzeHeuristic()
  - renderResults()
  - eventos para exportar CSV/PDF
  - botones para importar DATA del v17 y guardar HTML completo
*/
</script>
