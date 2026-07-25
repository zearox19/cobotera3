/**
 * Cobotera Main Application Logic
 */

const routes = {
  '/': { pageId: 'page-home', title: 'Cobotera – Autonome Robotiklösungen für effizientere Betriebsabläufe', description: 'Cobotera unterstützt Unternehmen bei der Auswahl und Einführung professioneller Reinigungs-, Transport- und Serviceroboter.' },
  '/loesungen': { pageId: 'page-loesungen', title: 'Lösungen – Cobotera', description: 'Entdecken Sie unsere maßgeschneiderten Robotiklösungen für verschiedene Anwendungsbereiche.' },
  '/reinigungsrobotik': { pageId: 'page-reinigungsrobotik', title: 'Reinigungsrobotik – Cobotera', description: 'Professionelle Reinigungsroboter für effiziente und gründliche Bodenpflege in Unternehmen.' },
  '/logistik-servicerobotik': { pageId: 'page-logistik-servicerobotik', title: 'Logistik & Servicerobotik – Cobotera', description: 'Innovative Transport- und Serviceroboter zur Optimierung Ihrer internen Logistik.' },
  '/branchen': { pageId: 'page-branchen', title: 'Branchen – Cobotera', description: 'Robotiklösungen optimiert für Ihre Branche: Industrie, Handel, Gesundheitswesen und mehr.' },
  '/leistungen': { pageId: 'page-leistungen', title: 'Leistungen – Cobotera', description: 'Umfassende Beratung, Integration und Support für Ihre Automatisierungsprojekte.' },
  '/wirtschaftlichkeit': { pageId: 'page-wirtschaftlichkeit', title: 'Wirtschaftlichkeit – Cobotera', description: 'Berechnen Sie das Einsparpotenzial durch den Einsatz von Robotik in Ihrem Unternehmen.' },
  '/ueber-uns': { pageId: 'page-ueber-uns', title: 'Über Cobotera – Cobotera', description: 'Lernen Sie das Team hinter Cobotera kennen – Ihre Experten für Service- und Logistikrobotik.' },
  '/kontakt': { pageId: 'page-kontakt', title: 'Kontakt – Cobotera', description: 'Nehmen Sie Kontakt mit uns auf. Wir beraten Sie gerne zu unseren Robotiklösungen.' },
  '/faq': { pageId: 'page-faq', title: 'FAQ – Cobotera', description: 'Häufig gestellte Fragen und Antworten rund um den Einsatz von Robotern im Betrieb.' },
  '/solarreinigungsrobotik': { pageId: 'page-solarreinigungsrobotik', title: 'Solarreinigungsrobotik – Cobotera', description: 'Professionelle Solarreinigungsroboter für die autonome und effiziente Reinigung von Photovoltaikanlagen.' },
  '/impressum': { pageId: 'page-impressum', title: 'Impressum – Cobotera', description: 'Impressum der Cobotera Website.' },
  '/datenschutz': { pageId: 'page-datenschutz', title: 'Datenschutz – Cobotera', description: 'Datenschutzerklärung der Cobotera Website.' },
};

window.navigateTo = function(path) {
  window.location.hash = '#' + path;
};

function handleRoute() {
  let path = window.location.hash.replace('#', '') || '/';
  
  // Clean up path if it includes query params
  const queryIndex = path.indexOf('?');
  if (queryIndex !== -1) {
    path = path.substring(0, queryIndex);
  }

  const route = routes[path] || routes['/'];
  
  // Hide all pages
  document.querySelectorAll('.page-section').forEach(page => {
    page.classList.remove('active');
  });
  
  // Show target page
  const targetPage = document.getElementById(route.pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  } else {
    // If element doesn't exist, fallback to home
    const homePage = document.getElementById(routes['/'].pageId);
    if(homePage) homePage.classList.add('active');
  }
  
  // Update meta
  document.title = route.title;
  let metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) {
    metaDesc.setAttribute('content', route.description);
  }
  
  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
  
  // Update active nav links
  document.querySelectorAll('.nav-menu-link, [data-route]').forEach(link => {
    link.classList.remove('active');
    let href = link.getAttribute('onclick') || link.getAttribute('href');
    if (href && href.includes(path) && path !== '/') {
      link.classList.add('active');
    } else if (path === '/' && href && (href.includes("'/'") || href === '#/')) {
       link.classList.add('active');
    }
  });
  
  // Close mobile menu if open
  closeMobileMenu();

  // Page specific init
  if ((path === '/reinigungsrobotik' || path === '/solarreinigungsrobotik') && typeof window.renderProductCards === 'function') {
    window.renderProductCards();
  }
  
  if (path === '/wirtschaftlichkeit' && typeof window.initCalculator === 'function') {
    window.initCalculator();
  }
}

function closeMobileMenu() {
  const hamburger = document.querySelector('.nav-hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.nav-mobile-overlay');
  
  if (hamburger) hamburger.classList.remove('active');
  if (navMenu) navMenu.classList.remove('open');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

function initNavigation() {
  // Mobile Menu Toggle
  const hamburger = document.querySelector('.nav-hamburger');
  const navMenu = document.querySelector('.nav-menu');
  const overlay = document.querySelector('.nav-mobile-overlay');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('open');
      if (overlay) overlay.classList.toggle('active');
      document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : '';
    });
  }
  
  if (overlay) {
    overlay.addEventListener('click', closeMobileMenu);
  }
  
  // Scroll Listener
  const header = document.querySelector('.site-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      if (header) header.classList.add('scrolled');
    } else {
      if (header) header.classList.remove('scrolled');
    }
  });

  // Smooth Scroll for anchor links
  document.querySelectorAll('a[href^="#/"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const path = this.getAttribute('href').substring(1);
      window.navigateTo(path);
    });
  });
}

function initCookieBanner() {
  const cookieStatus = localStorage.getItem('cobotera-cookies');
  const banner = document.querySelector('.cookie-banner');
  
  if (!cookieStatus && banner) {
    banner.classList.add('show');
    
    const btnAccept = banner.querySelector('.cookie-btn-accept');
    const btnReject = banner.querySelector('.cookie-btn-reject');
    
    if (btnAccept) {
      btnAccept.addEventListener('click', () => {
        localStorage.setItem('cobotera-cookies', 'accepted');
        banner.classList.remove('show');
      });
    }
    
    if (btnReject) {
      btnReject.addEventListener('click', () => {
        localStorage.setItem('cobotera-cookies', 'rejected');
        banner.classList.remove('show');
      });
    }
  }
}

function initAccordion() {
  const faqQuestions = document.querySelectorAll('.faq-question');
  
  faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
      const parent = question.closest('.faq-item');
      if (!parent) return;
      
      const isOpen = parent.classList.contains('open');
      
      // Close all
      document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('open');
      });
      
      // Open clicked if it wasn't open
      if (!isOpen) {
        parent.classList.add('open');
      }
    });
  });
}

function initIndustryCards() {
  const industryCards = document.querySelectorAll('.industry-card');
  const closeBtns = document.querySelectorAll('.industry-detail-close');
  
  industryCards.forEach(card => {
    card.addEventListener('click', () => {
      const targetId = card.getAttribute('data-target');
      if (!targetId) return;
      
      const targetPanel = document.getElementById(targetId);
      if (targetPanel) {
        // Close others
        document.querySelectorAll('.industry-detail').forEach(panel => {
          panel.classList.remove('active');
        });
        targetPanel.classList.add('active');
      }
    });
  });
  
  closeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const panel = btn.closest('.industry-detail');
      if (panel) panel.classList.remove('active');
    });
  });
}

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback for browsers without IntersectionObserver
    revealElements.forEach(el => el.classList.add('revealed'));
  }
}

// Global Toast function
window.showToast = function(message, type = 'success') {
  let toastContainer = document.querySelector('.toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }
  
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.textContent = message;
  
  toastContainer.appendChild(toast);
  
  // Show animation
  setTimeout(() => toast.classList.add('show'), 10);
  
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
};

// Initialize App
document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('hashchange', handleRoute);
  
  initNavigation();
  initCookieBanner();
  initAccordion();
  initIndustryCards();
  initScrollReveal();
  
  if (typeof window.initContactForm === 'function') {
    window.initContactForm();
  }
  
  // Initial route handling
  handleRoute();
});
