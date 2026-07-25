/**
 * Cobotera Products Data
 */

const PRODUCT_CATEGORIES = [
  { id: 'compact', label: 'Kompakte Reinigungsroboter', description: 'Geeignet für Büros, Hotels, Arztpraxen, kleinere Einzelhandelsflächen und enge Bereiche.' },
  { id: 'multi', label: 'Multifunktionale Reinigungsroboter', description: 'Geeignet für mittelgroße Gewerbeflächen, Supermärkte, Fitnessstudios, Pflegeeinrichtungen und öffentliche Gebäude.' },
  { id: 'industrial', label: 'Industrielle Reinigungsroboter', description: 'Geeignet für große Lagerhallen, Produktionsflächen, Einkaufszentren, Flughäfen und Logistikzentren.' },
  { id: 'carpet', label: 'Teppich- und Staubsaugerroboter', description: 'Geeignet für Hotels, Büros, Konferenzbereiche und andere textile Bodenflächen.' },
  { id: 'solar', label: 'Solarreinigungsroboter', description: 'Professionelle Systeme zur autonomen oder ferngesteuerten Reinigung von Photovoltaik-Dachanlagen und Solarparks.' },
  { id: 'outdoor', label: 'Kehr- und Außenreinigungsroboter', description: 'Nur verfügbar, wenn entsprechende Produkte für den deutschen Markt bestätigt sind.' }
];

const PRODUCTS = [
  // Compact
  {
    id: 'compact-placeholder-01',
    category: 'compact',
    categoryLabel: 'Kompakte Reinigungsroboter',
    name: 'Kompakter autonomer Scheuersaugroboter',
    manufacturer: '[Hersteller auf Anfrage]',
    image: 'assets/images/robot-hotel.jpg',
    areaSize: 'Bis zu 1.000 m²/Tag',
    floorTypes: ['Hartböden', 'Fliesen', 'PVC'],
    functions: ['Scheuersaugen', 'Wischen'],
    runtime: 'Bis zu 3 Stunden',
    charging: 'Autonome Ladestation',
    dockingStation: true,
    fleetManagement: true,
    status: 'verfuegbar'
  },
  {
    id: 'compact-placeholder-02',
    category: 'compact',
    categoryLabel: 'Kompakte Reinigungsroboter',
    name: 'Autonomer Kompakt-Sauger',
    manufacturer: '[Hersteller auf Anfrage]',
    image: 'assets/images/robot-care.jpg',
    areaSize: 'Bis zu 800 m²/Tag',
    floorTypes: ['Hartböden', 'Nadelvlies'],
    functions: ['Trockensaugen'],
    runtime: 'Bis zu 4 Stunden',
    charging: 'Manuelle Ladung / Docking optional',
    dockingStation: null,
    fleetManagement: true,
    status: 'auf-anfrage'
  },
  // Multi
  {
    id: 'multi-placeholder-01',
    category: 'multi',
    categoryLabel: 'Multifunktionale Reinigungsroboter',
    name: 'Autonomer Allround-Reinigungsroboter',
    manufacturer: '[Hersteller auf Anfrage]',
    image: 'assets/images/robot-mall.jpg',
    areaSize: 'Bis zu 3.000 m²/Tag',
    floorTypes: ['Hartböden', 'Fliesen', 'Epoxidharz'],
    functions: ['Scheuersaugen', 'Kehren', 'Staubwischen'],
    runtime: 'Bis zu 5 Stunden',
    charging: 'Vollautomatische Dockingstation',
    dockingStation: true,
    fleetManagement: true,
    status: 'verfuegbar'
  },
  {
    id: 'multi-placeholder-02',
    category: 'multi',
    categoryLabel: 'Multifunktionale Reinigungsroboter',
    name: 'Mobiler Wisch- und Kehrroboter',
    manufacturer: '[Hersteller auf Anfrage]',
    image: 'assets/images/robot-supermarket.jpg',
    areaSize: 'Bis zu 2.500 m²/Tag',
    floorTypes: ['Hartböden', 'Linoleum'],
    functions: ['Kehren', 'Feuchtwischen'],
    runtime: 'Bis zu 4 Stunden',
    charging: 'Autonome Ladestation',
    dockingStation: true,
    fleetManagement: true,
    status: 'in-vorbereitung'
  },
  // Industrial
  {
    id: 'industrial-placeholder-01',
    category: 'industrial',
    categoryLabel: 'Industrielle Reinigungsroboter',
    name: 'Industrie-Scheuersaugroboter',
    manufacturer: '[Hersteller auf Anfrage]',
    image: 'assets/images/robot-warehouse.jpg',
    areaSize: 'Bis zu 10.000 m²/Tag',
    floorTypes: ['Beton', 'Estrich', 'Industrieböden'],
    functions: ['Schrubben', 'Nasssaugen'],
    runtime: 'Bis zu 6 Stunden',
    charging: 'Schnellladestation / Wasserwechsel autonom',
    dockingStation: true,
    fleetManagement: true,
    status: 'verfuegbar'
  },
  {
    id: 'industrial-placeholder-02',
    category: 'industrial',
    categoryLabel: 'Industrielle Reinigungsroboter',
    name: 'Schwerlast-Kehrsaugroboter',
    manufacturer: '[Hersteller auf Anfrage]',
    image: 'assets/images/robot-industrial-2.jpg',
    areaSize: 'Bis zu 15.000 m²/Tag',
    floorTypes: ['Industrieböden', 'Asphalt'],
    functions: ['Grobschmutz-Kehren', 'Saugen'],
    runtime: 'Bis zu 5 Stunden',
    charging: 'Manuelle Ladung',
    dockingStation: false,
    fleetManagement: true,
    status: 'auf-anfrage'
  },
  // Carpet
  {
    id: 'carpet-placeholder-01',
    category: 'carpet',
    categoryLabel: 'Teppich- und Staubsaugerroboter',
    name: 'Teppich-Saugroboter Pro',
    manufacturer: '[Hersteller auf Anfrage]',
    image: 'assets/images/robot-office.jpg',
    areaSize: 'Bis zu 1.200 m²/Tag',
    floorTypes: ['Teppichböden', 'Nadelfilz'],
    functions: ['Tiefensaugen', 'Bürsten'],
    runtime: 'Bis zu 3 Stunden',
    charging: 'Autonome Ladestation',
    dockingStation: true,
    fleetManagement: true,
    status: 'verfuegbar'
  },
  // Solar
  {
    id: 'solar-placeholder-01',
    category: 'solar',
    categoryLabel: 'Solarreinigungsroboter',
    name: 'Autonomer Solar-Reinigungsroboter (Dach)',
    manufacturer: '[Hersteller auf Anfrage]',
    image: 'assets/images/robot-solar-roof.jpg',
    areaSize: 'Bis zu 2.000 m²/Tag',
    floorTypes: ['Photovoltaik-Module (Dachanlagen)'],
    functions: ['Trockenreinigung', 'Nassreinigung mit Wasseranschluss'],
    runtime: 'Bis zu 4 Stunden',
    charging: 'Wechselakku-System',
    dockingStation: false,
    fleetManagement: false,
    status: 'verfuegbar'
  },
  {
    id: 'solar-placeholder-02',
    category: 'solar',
    categoryLabel: 'Solarreinigungsroboter',
    name: 'Schwerlast Solar-Reinigungsroboter (Freifläche)',
    manufacturer: '[Hersteller auf Anfrage]',
    image: 'assets/images/robot-solar-park.jpg',
    areaSize: 'Bis zu 5.000 m²/Tag',
    floorTypes: ['Photovoltaik-Module (Freiflächenparks)'],
    functions: ['Rotationsbürsten-Reinigung', 'Fernsteuerung / Autonomer Pfad'],
    runtime: 'Bis zu 5 Stunden',
    charging: 'Wechselakku-System',
    dockingStation: false,
    fleetManagement: true,
    status: 'auf-anfrage'
  },
  // Outdoor
  {
    id: 'outdoor-placeholder-01',
    category: 'outdoor',
    categoryLabel: 'Kehr- und Außenreinigungsroboter',
    name: 'Autonomer Außenkehrroboter',
    manufacturer: '[Hersteller auf Anfrage]',
    image: 'assets/images/robot-outdoor-1.jpg',
    areaSize: 'Bis zu 8.000 m²/Tag',
    floorTypes: ['Asphalt', 'Pflaster', 'Betonplatten'],
    functions: ['Kehren', 'Laubaufnahme'],
    runtime: 'Bis zu 5 Stunden',
    charging: 'Manuelle Ladung',
    dockingStation: false,
    fleetManagement: true,
    status: 'in-vorbereitung'
  }
];

function formatBoolean(val) {
  if (val === true) return 'Ja';
  if (val === false) return 'Nein';
  return 'Auf Anfrage';
}

function getStatusInfo(status) {
  switch(status) {
    case 'verfuegbar': return { class: 'available', label: 'Verfügbar' };
    case 'auf-anfrage': return { class: 'on-request', label: 'Auf Anfrage' };
    case 'in-vorbereitung': return { class: 'in-progress', label: 'In Vorbereitung' };
    default: return { class: 'on-request', label: 'Auf Anfrage' };
  }
}

window.renderProductCards = function() {
  const container = document.getElementById('product-cards-container');
  if (!container) return;

  container.innerHTML = '';

  // Render by category
  PRODUCT_CATEGORIES.forEach(category => {
    const categoryProducts = PRODUCTS.filter(p => p.category === category.id);
    if (categoryProducts.length === 0) return;

    // Create Category Section
    const catSection = document.createElement('div');
    catSection.className = 'product-category';
    catSection.style.marginBottom = '48px';
    catSection.style.width = '100%';

    catSection.innerHTML = `
      <div class="product-category-header" style="margin-bottom:24px; border-bottom:1px solid var(--border); padding-bottom:12px;">
        <h3 class="product-category-title" style="font-family:var(--font-heading); font-size:1.35rem; font-weight:700; color:var(--text-primary); margin-bottom:6px;">${category.label}</h3>
        <p class="product-category-desc" style="color:var(--text-muted); font-size:0.92rem; max-width:680px; line-height:1.6;">${category.description}</p>
      </div>
      <div class="product-grid" style="display:grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap:24px; width:100%;"></div>
    `;

    const grid = catSection.querySelector('.product-grid');

    categoryProducts.forEach(product => {
      const statusInfo = getStatusInfo(product.status);
      const card = document.createElement('div');
      card.className = 'product-card';
      
      card.innerHTML = `
        <div class="product-card-image" style="width:100%; height:200px; overflow:hidden; background-color:var(--bg-dark-surface); display:flex; align-items:center; justify-content:center; position:relative; border-bottom:1px solid var(--border-tech);">
          <img src="${product.image}" alt="${product.name}" loading="lazy" style="width:100%; height:100%; object-fit:cover;" onerror="this.parentElement.innerHTML='<div style=\\'padding:20px; text-align:center; color:var(--text-muted); font-size:0.85rem;\\'>🤖 Bildplatzhalter<br><span style=\\'font-size:0.75rem;\\'>Portfolio im Aufbau</span></div>'">
        </div>
        <div class="product-card-body" style="padding:24px;">
          <h4 class="product-card-name" style="font-family:var(--font-heading); font-size:1.05rem; font-weight:700; color:var(--text-primary); margin-bottom:4px;">${product.name}</h4>
          <p class="product-card-manufacturer" style="color:var(--text-muted); font-size:0.82rem; margin-bottom:12px;">${product.manufacturer}</p>
          <div class="product-card-status" style="margin-bottom:16px;">
            <span class="status-badge status-${statusInfo.class}">${statusInfo.label}</span>
          </div>
          <ul class="product-card-specs" style="list-style:none; padding:12px 0 0 0; margin-bottom:20px; border-top:1px solid var(--border-tech); display:flex; flex-direction:column; gap:8px;">
            <li class="product-card-spec" style="display:flex; justify-content:space-between; font-size:0.85rem;"><span class="product-card-spec-label" style="color:var(--text-muted);">Empfehlung</span><span class="product-card-spec-value" style="font-weight:500; color:var(--text-primary);">${product.areaSize}</span></li>
            <li class="product-card-spec" style="display:flex; justify-content:space-between; font-size:0.85rem;"><span class="product-card-spec-label" style="color:var(--text-muted);">Einsatzbereich</span><span class="product-card-spec-value" style="font-weight:500; color:var(--text-primary);">${Array.isArray(product.floorTypes) ? product.floorTypes.join(', ') : product.floorTypes}</span></li>
            <li class="product-card-spec" style="display:flex; justify-content:space-between; font-size:0.85rem;"><span class="product-card-spec-label" style="color:var(--text-muted);">Funktionen</span><span class="product-card-spec-value" style="font-weight:500; color:var(--text-primary);">${Array.isArray(product.functions) ? product.functions.join(', ') : product.functions}</span></li>
            <li class="product-card-spec" style="display:flex; justify-content:space-between; font-size:0.85rem;"><span class="product-card-spec-label" style="color:var(--text-muted);">Laufzeit</span><span class="product-card-spec-value" style="font-weight:500; color:var(--text-primary);">${product.runtime}</span></li>
            <li class="product-card-spec" style="display:flex; justify-content:space-between; font-size:0.85rem;"><span class="product-card-spec-label" style="color:var(--text-muted);">Dockingstation</span><span class="product-card-spec-value" style="font-weight:500; color:var(--text-primary);">${formatBoolean(product.dockingStation)}</span></li>
            <li class="product-card-spec" style="display:flex; justify-content:space-between; font-size:0.85rem;"><span class="product-card-spec-label" style="color:var(--text-muted);">Flottensoftware</span><span class="product-card-spec-value" style="font-weight:500; color:var(--text-primary);">${formatBoolean(product.fleetManagement)}</span></li>
          </ul>
          <div class="product-card-actions" style="display:flex; gap:8px;">
            <button class="btn btn-sm btn-secondary" style="width:100%;" onclick="window.navigateTo('/kontakt')">Beratung anfragen</button>
          </div>
        </div>
      `;
      
      grid.appendChild(card);
    });

    container.appendChild(catSection);
  });
};
