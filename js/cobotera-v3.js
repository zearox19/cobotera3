
const header = document.getElementById('site-header');
const stage = document.getElementById('compass-stage');
const needle = document.getElementById('needle');
const toggle = document.getElementById('menu-toggle');

window.addEventListener('scroll',()=>{
  header.classList.toggle('scrolled',window.scrollY>18);
},{passive:true});

toggle?.addEventListener('click',()=>{
  document.body.classList.toggle('menu-open');
  toggle.textContent = document.body.classList.contains('menu-open') ? '×' : '☰';
});

document.querySelectorAll('.desktop-nav a').forEach(a=>{
  a.addEventListener('click',()=>{
    document.body.classList.remove('menu-open');
    if(toggle) toggle.textContent='☰';
  });
});

if(stage && needle){
  const rotateNeedle=(x,y)=>{
    const r=stage.getBoundingClientRect();
    const cx=r.left+r.width/2;
    const cy=r.top+r.height/2;
    const angle=Math.atan2(y-cy,x-cx)*180/Math.PI+90;
    needle.style.transform=`rotate(${angle}deg)`;
  };
  stage.addEventListener('mousemove',e=>rotateNeedle(e.clientX,e.clientY));
  stage.addEventListener('touchmove',e=>{
    if(!e.touches[0]) return;
    rotateNeedle(e.touches[0].clientX,e.touches[0].clientY);
  },{passive:true});
}

const observer = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const roboticsSolutions = [
  {
    id:'reinigung', title:'Reinigungsrobotik', image:'assets/images/robot_cleaning_nobrand.jpg',
    description:'Autonome Bodenreinigung für kleine Flächen bis zu anspruchsvollen Industrieumgebungen.',
    models:['PUDU ET1','Gausium Phantas','Gausium Mira','iKitbot ONE S55 PRO','PUDU CC1','PUDU CC1 Pro','PUDU CC1 Pro Disc','Gausium Omnie','Gausium Vacuum 40','PUDU MT1 Serie','Gausium Beetle Pro','Gausium Scrubber 50 Pro','PUDU BG1 Pro','Gausium Scrubber 75','Gausium Marvel']
  },
  {
    id:'service', title:'Service & Empfang', image:'assets/images/robot_service_nobrand.jpg',
    description:'Service, Lieferung, Empfang, Besucherführung und Information in gewerblichen Innenbereichen.',
    models:['PUDU PuduBot 2','PUDU BellaBot Pro','PUDU KettyBot Pro','PUDU HolaBot','PUDU FlashBot Max','OrionStar LuckiBot','OrionStar LuckiBot Pro','LuckiBot Pro Autodoor','OrionStar LuckiBot Plus','OrionStar CarryBot 2','GreetingBot Mini','GreetingBot Nova','GreetingBot AD']
  },
  {
    id:'transport', title:'Transport & Intralogistik', image:'assets/images/robot-logistics.jpg',
    description:'Autonomer Materialfluss von kompakten Transporten bis zur Palettenhandhabung.',
    models:['PUDU T150','PUDU T300','PUDU T600 Serie','PUDU MP2000','DOBOT AMB-300XS AMMR']
  },
  {
    id:'cobots', title:'Kollaborative Robotik', image:'assets/images/robot-warehouse.jpg',
    description:'Roboterarme, Trainingssysteme und fertige Anwendungen für Bildung, Service und Industrie.',
    models:['DOBOT Magician','DOBOT Magician E6','DOBOT Nova 2','DOBOT Nova 5','DOBOT CR3A','DOBOT CR5A','DOBOT CR7A','DOBOT CR10A','DOBOT CR12A','DOBOT CR16A','DOBOT CR20A','DOBOT CR30H Serie','DOBOT CRAF Serie','DOBOT CRAP Serie','DOBOT MG400','DOBOT M1 Pro','DOBOT Magician E6 Station','DOBOT CR5A Ausbildungspaket','DOBOT X-Trainer','DOBOT Pocket Go','DOBOT Magician Go','DOBOT NOVA2 Coffee Bar']
  },
  {
    id:'vierbeinig', title:'Vierbeinige Robotik', image:'assets/images/robot-security.jpg',
    description:'Mobile Plattformen für Inspektion, Forschung, Sicherheit und anspruchsvolles Gelände.',
    models:['Unitree Go2','Unitree Go2 EDU','Unitree Go2W','Unitree Go2W EDU','Unitree Go2 X','Unitree AS2 Serie','Unitree AS2 EDU','Unitree A2 Serie','Unitree A2-W Serie','Unitree B2 Serie','Unitree B2-W','PUDU D5 Serie','DOBOT Rover X1 Explorer']
  },
  {
    id:'humanoide', title:'Humanoide Robotik', image:'assets/images/robot-humanoid.jpg',
    description:'Menschenähnliche Systeme für Forschung, Industrie, Interaktion und Innovation.',
    models:['Unitree G1 Serie','Unitree H1 / H1-2','Unitree H2','Unitree R1 EDU','Unitree R1-A5 Smart','Unitree R1-A5-D Smart','Unitree R1-A5-D Flagship','Unitree R1-A7 Smart','Unitree R1-A7-D Smart','UBTECH Yanshee','UBTECH AlphaMini 2','UBTECH Cruzr S2','UBTECH Cruzr Y1','UBTECH Walker Tienkung','UBTECH Tienkung DEX','UBTECH Walker S2','UBTECH Walker C1','DOBOT LUMO L1','DOBOT ATOM Max / Data','DOBOT ATOM-W','DOBOT ATOM-D Education']
  },
  {
    id:'outdoor', title:'Outdoor & Grünflächen', image:'assets/images/robot-outdoor.jpg',
    description:'Modulare Lösungen für Rasenpflege, Schneeräumung, Laub und kommunale Außenflächen.',
    models:['Yarbo Core','Yarbo Mähmodul Pro','Yarbo Schneefräsenmodul','Yarbo Gebläsemodul','OrionStar MowiBot N1000 Lite','PUDU GT3','PUDU GT5','PUDU GT7']
  },
  {
    id:'manipulation', title:'Roboterhände & Manipulatoren', image:'assets/images/robot-service.jpg',
    description:'Mobile Arme, dextröse Hände und Teleoperation für intelligente Manipulation.',
    models:['Unitree Dex3-1','Unitree Dex3-1 Tactile','Unitree D1 Arm','Unitree Z1 Air','Unitree Z1 Pro','Inspire RH5DG2','Inspire RH56DFX','Inspire RH56DFX Wrist','Inspire RH56BFX','Inspire RH56E2','Inspire RH56F1','Linker Hand L6','Linker Hand L10','Linker Hand L20','Linker Hand O6','Linker Hand L30','Linker Hand O30','Linker TA Teleoperationsarm','Linker EG Exoskelett Handschuh']
  },
  {
    id:'bildung', title:'Bildung & Forschung', image:'assets/images/robot-care.jpg',
    description:'Lern- und Entwicklungsplattformen für Schule, Hochschule, Labor und industrielle Ausbildung.',
    models:['UBTECH uKit AI','UBTECH UGOT','UBTECH Yanshee','UBTECH AlphaMini 2','DOBOT Magician','DOBOT Magician E6','Magician E6 Trainingsstation','DOBOT CR5A Ausbildungspaket','DOBOT Universal Plattform','DOBOT Magician Go','DOBOT Rover X1 Explorer','Unitree Go2 EDU','Unitree Go2W EDU','Unitree R1 EDU','Unitree G1 EDU','DOBOT ATOM-D Education']
  },
  {
    id:'marketing', title:'Marketing & Promotion', image:'assets/images/robot-mall.jpg',
    description:'Mobile Markenpräsenz, Kundenaktivierung und aufmerksamkeitsstarke Interaktion.',
    models:['OrionStar LuckiBot Plus','PUDU BellaBot Pro','PUDU KettyBot Pro','DOBOT LUMO L1','OrionStar LuckiBot Pro','OrionStar LuckiBot']
  }
];

roboticsSolutions.forEach(solution => {
  const products = window.ROBOT_PRODUCT_DATA?.[solution.id];
  if (!Array.isArray(products) || !products.length) return;
  solution.products = products;
  solution.models = products.map(product => product.name);
});

const categoryGrid = document.getElementById('robotics-category-grid');
const modelBrowser = document.getElementById('robotics-model-browser');
const modelGrid = document.getElementById('robot-model-grid');
const categorySelect = document.getElementById('solution-category-select');
const robotSelect = document.getElementById('robot-model-select');
const subjectInput = document.getElementById('consultation-form')?.querySelector('input[name="_subject"]');
const detailModal = document.getElementById('robot-detail-modal');
const detailPanel = detailModal?.querySelector('.robot-detail-panel');
let activeDetail = null;
let detailReturnFocus = null;

const populateRobotSelect = (solution, selectedModel = '') => {
  if (!robotSelect) return;
  robotSelect.innerHTML = '';
  if (!solution) {
    robotSelect.disabled = true;
    robotSelect.add(new Option('Zuerst Robotiklösung auswählen', ''));
    return;
  }
  robotSelect.disabled = false;
  robotSelect.add(new Option('Bitte Modell auswählen', ''));
  solution.models.forEach(model => robotSelect.add(new Option(model, model)));
  robotSelect.value = selectedModel;
};

const selectRobotForInquiry = (solution, model = '') => {
  if (categorySelect) categorySelect.value = solution.title;
  populateRobotSelect(solution, model);
  if (subjectInput) subjectInput.value = model
    ? `Anfrage zu ${model} über cobotera.de`
    : `Anfrage zu ${solution.title} über cobotera.de`;
  document.getElementById('beratung-form')?.scrollIntoView({behavior:'smooth', block:'center'});
  window.setTimeout(() => (model ? robotSelect : categorySelect)?.focus(), 650);
};

const closeRobotDetail = () => {
  if (!detailModal || detailModal.hidden) return;
  detailModal.hidden = true;
  document.body.classList.remove('robot-detail-open');
  activeDetail = null;
  detailReturnFocus?.focus();
};

const openRobotDetail = (solution, product, trigger) => {
  if (!detailModal || !product) return;
  activeDetail = {solution, product};
  detailReturnFocus = trigger || document.activeElement;

  const image = document.getElementById('robot-detail-image');
  image.src = product.image;
  image.alt = `${product.name} Produktbild`;
  document.getElementById('robot-detail-category').textContent = solution.title.toUpperCase();
  document.getElementById('robot-detail-tag').textContent = product.tag || '';
  document.getElementById('robot-detail-title').textContent = product.name;
  document.getElementById('robot-detail-copy').textContent = product.intro || '';
  document.getElementById('robot-detail-fit').textContent = product.fit || '';

  const metrics = document.getElementById('robot-detail-metrics');
  metrics.innerHTML = '';
  (product.metrics || []).forEach(([value, label]) => {
    const item = document.createElement('div');
    item.innerHTML = `<strong>${value}</strong><span>${label}</span>`;
    metrics.appendChild(item);
  });

  const benefits = document.getElementById('robot-detail-benefits');
  benefits.innerHTML = '';
  (product.benefits || []).forEach(benefit => {
    const item = document.createElement('li');
    item.textContent = benefit;
    benefits.appendChild(item);
  });

  const specs = document.getElementById('robot-detail-specs');
  specs.innerHTML = '';
  (product.specs || []).forEach(([label, value]) => {
    const row = document.createElement('div');
    const term = document.createElement('dt');
    const description = document.createElement('dd');
    term.textContent = label;
    description.textContent = value;
    row.append(term, description);
    specs.appendChild(row);
  });

  detailModal.hidden = false;
  document.body.classList.add('robot-detail-open');
  detailPanel?.focus();
};

const openModelBrowser = solution => {
  if (!modelBrowser || !modelGrid) return;
  document.getElementById('model-browser-kicker').textContent = `${solution.models.length} MODELLE`;
  document.getElementById('model-browser-title').textContent = solution.title;
  document.getElementById('model-browser-copy').textContent = solution.description;
  modelGrid.innerHTML = '';
  (solution.products || solution.models.map(name => ({name}))).forEach(product => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'robot-model-option';
    button.innerHTML = product.image
      ? `<span class="robot-model-image"><img src="${product.image}" alt="${product.name} Produktbild" loading="lazy"></span><span class="robot-model-name">${product.name}</span><small>DETAILS ANSEHEN →</small>`
      : `<span class="robot-model-name">${product.name}</span><small>DETAILS ANSEHEN →</small>`;
    button.addEventListener('click', () => openRobotDetail(solution, product, button));
    modelGrid.appendChild(button);
  });
  const general = document.createElement('button');
  general.type = 'button';
  general.className = 'robot-model-option general-option';
  general.innerHTML = '<span>Allgemeine Beratung</span><small>OHNE MODELLWAHL →</small>';
  general.addEventListener('click', () => selectRobotForInquiry(solution));
  modelGrid.appendChild(general);
  modelBrowser.hidden = false;
  document.querySelectorAll('.robotics-category-card').forEach(card => card.classList.toggle('active', card.dataset.solution === solution.id));
  modelBrowser.scrollIntoView({behavior:'smooth', block:'nearest'});
};

if (categoryGrid) {
  roboticsSolutions.forEach((solution, index) => {
    const card = document.createElement('button');
    card.type = 'button';
    card.className = 'robotics-category-card reveal';
    card.dataset.solution = solution.id;
    card.innerHTML = `<img src="${solution.image}" alt="" loading="lazy"><span class="category-shade"></span><span class="category-content"><small>${String(index + 1).padStart(2,'0')} · ${solution.models.length} MODELLE</small><strong>${solution.title}</strong><em>${solution.description}</em><b>Modelle auswählen →</b></span>`;
    card.addEventListener('click', () => openModelBrowser(solution));
    categoryGrid.appendChild(card);
    observer.observe(card);
    categorySelect?.add(new Option(solution.title, solution.title));
  });
}

document.getElementById('model-browser-close')?.addEventListener('click', () => {
  if (modelBrowser) modelBrowser.hidden = true;
  document.querySelectorAll('.robotics-category-card').forEach(card => card.classList.remove('active'));
});

document.getElementById('robot-detail-close')?.addEventListener('click', closeRobotDetail);
detailModal?.addEventListener('click', event => {
  if (event.target === detailModal) closeRobotDetail();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && detailModal && !detailModal.hidden) closeRobotDetail();
});
document.getElementById('robot-detail-inquiry')?.addEventListener('click', () => {
  if (!activeDetail) return;
  const {solution, product} = activeDetail;
  closeRobotDetail();
  selectRobotForInquiry(solution, product.name);
});

categorySelect?.addEventListener('change', () => {
  const solution = roboticsSolutions.find(item => item.title === categorySelect.value);
  populateRobotSelect(solution);
  if (subjectInput) subjectInput.value = solution ? `Anfrage zu ${solution.title} über cobotera.de` : 'Neue Beratungsanfrage über cobotera.de';
});

robotSelect?.addEventListener('change', () => {
  if (subjectInput && robotSelect.value) subjectInput.value = `Anfrage zu ${robotSelect.value} über cobotera.de`;
});

const canvas=document.getElementById('starfield');
if(canvas){
  const ctx=canvas.getContext('2d');
  let stars=[];
  let w=0,h=0;
  const resize=()=>{
    w=canvas.width=window.innerWidth*devicePixelRatio;
    h=canvas.height=window.innerHeight*devicePixelRatio;
    canvas.style.width=window.innerWidth+'px';
    canvas.style.height=window.innerHeight+'px';
    stars=Array.from({length:140},()=>({
      x:Math.random()*w,
      y:Math.random()*h,
      r:(Math.random()*1.2+.25)*devicePixelRatio,
      a:Math.random()*.55+.1,
      d:(Math.random()*.008+.002)*(Math.random()>.5?1:-1)
    }));
  };
  resize();
  window.addEventListener('resize',resize);
  const animate=()=>{
    ctx.clearRect(0,0,w,h);
    stars.forEach(s=>{
      s.a+=s.d;
      if(s.a>.75||s.a<.08) s.d*=-1;
      ctx.beginPath();
      ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(128,205,255,${s.a})`;
      ctx.fill();
    });
    requestAnimationFrame(animate);
  };
  animate();
}


// Consultation form UX
const consultationForm = document.getElementById('consultation-form');
const formStatus = document.getElementById('form-status');

if (consultationForm) {
  consultationForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!consultationForm.checkValidity()) {
      consultationForm.reportValidity();
      return;
    }

    const submitButton = consultationForm.querySelector('button[type="submit"]');
    const formData = Object.fromEntries(new FormData(consultationForm).entries());
    delete formData._next;

    if (formStatus) {
      formStatus.className = 'form-status';
      formStatus.textContent = 'Anfrage wird gesendet …';
    }
    if (submitButton) submitButton.disabled = true;

    try {
      const response = await fetch('https://formsubmit.co/ajax/info@cobotera.de', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json().catch(() => ({}));
      if (!response.ok || result.success === false || result.success === 'false') {
        throw new Error('Form submission failed');
      }

      consultationForm.reset();
      populateRobotSelect(null);
      if (subjectInput) subjectInput.value = 'Neue Beratungsanfrage über cobotera.de';
      if (formStatus) {
        formStatus.className = 'form-status success';
        formStatus.textContent = 'Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt.';
      }
    } catch (error) {
      if (formStatus) {
        formStatus.className = 'form-status error';
        formStatus.innerHTML = 'Die Anfrage konnte nicht gesendet werden. Bitte schreiben Sie direkt an <a href="mailto:info@cobotera.de">info@cobotera.de</a>.';
      }
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  });
}

// Show success message after FormSubmit redirect
const params = new URLSearchParams(window.location.search);
if (params.get('sent') === '1' && formStatus) {
  formStatus.className = 'form-status success';
  formStatus.textContent = 'Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt.';
  document.getElementById('beratung-form')?.scrollIntoView({behavior:'smooth', block:'center'});
}
