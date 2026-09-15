
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

// Give solution cards a useful action: clicking a card opens the consultation form
const interestMap = [
  'Reinigungsrobotik',
  'Transport & Logistik',
  'Service & Hospitality',
  'Sicherheit & Inspektion',
  'Humanoide & Speziallösungen'
];

document.querySelectorAll('.solution-panel').forEach((panel, index) => {
  panel.setAttribute('tabindex', '0');
  panel.setAttribute('role', 'button');
  panel.setAttribute('aria-label', `${interestMap[index] || 'Robotiklösung'} anfragen`);

  const openForm = () => {
    const select = document.getElementById('interest-select');
    if (select && interestMap[index]) select.value = interestMap[index];
    document.getElementById('beratung-form')?.scrollIntoView({behavior:'smooth', block:'center'});
  };

  panel.addEventListener('click', openForm);
  panel.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openForm();
    }
  });
});
