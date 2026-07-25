/**
 * Cobotera Wirtschaftlichkeitsrechner
 */

window.initCalculator = function() {
  const calcContainer = document.getElementById('calc-results');
  if (!calcContainer) return;

  const inputs = {
    area: document.getElementById('calc-area'),
    days: document.getElementById('calc-days'),
    hours: document.getElementById('calc-hours'),
    rate: document.getElementById('calc-rate'),
    model: document.getElementById('calc-model'),
    automation: document.getElementById('calc-automation')
  };
  
  const automationVal = document.getElementById('calc-automation-val');
  const btnCalculate = document.getElementById('btn-calculate');

  function formatCurrency(value) {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
  }

  function calculate() {
    const days = parseFloat(inputs.days?.value) || 5;
    const hours = parseFloat(inputs.hours?.value) || 4;
    const rate = parseFloat(inputs.rate?.value) || 28;
    const automationPercent = parseFloat(inputs.automation?.value) || 50;
    
    // Update automation label value
    if (automationVal) {
      automationVal.textContent = `${automationPercent}%`;
    }

    const weeklyHours = days * hours;
    const yearlyHours = weeklyHours * 52;
    const yearlyCost = yearlyHours * rate;
    const automationSaving = yearlyCost * (automationPercent / 100);
    const remainingCost = yearlyCost - automationSaving;

    const modelCosts = {
      'basic': 10000,
      'pro': 25000,
      'industrial': 45000
    };
    const selectedModel = inputs.model?.value || 'basic';
    const robotCost = modelCosts[selectedModel] || 10000;
    
    let amortizationText = "-";
    if (automationSaving > 0) {
      const months = Math.round((robotCost / automationSaving) * 12);
      amortizationText = `ca. ${months} Monate`;
    }

    // Render results dynamically
    calcContainer.innerHTML = `
      <h3 class="calc-result-title" style="color:var(--text-white); margin-bottom: 24px; font-family:var(--font-heading); font-size:1.2rem; font-weight:700;">Ihr Szenario</h3>
      <div class="calc-result-items" style="display:flex; flex-direction:column; gap:16px;">
        <div class="calc-result-item" style="display:flex; justify-content:space-between; align-items:center; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.1);">
          <span class="calc-result-label" style="color:rgba(255,255,255,0.7); font-size:0.9rem;">Manuelle Arbeitskosten (Jahr):</span>
          <span class="calc-result-value" style="font-family:var(--font-heading); font-weight:700; font-size:1.2rem; color:var(--text-white);">${formatCurrency(yearlyCost)}</span>
        </div>
        <div class="calc-result-item" style="display:flex; flex-direction:column; align-items:flex-start; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.1);">
          <span class="calc-result-label" style="color:rgba(255,255,255,0.7); font-size:0.9rem; margin-bottom: 0.5rem;">Geschätztes Einsparpotenzial pro Jahr (${automationPercent}%):</span>
          <span class="calc-result-value" style="font-family:var(--font-heading); font-weight:700; font-size:2.2rem; color:var(--cyan); margin-bottom: 0.5rem;">${formatCurrency(automationSaving)}</span>
          <span style="font-size: 0.85rem; color: rgba(255,255,255,0.5);">Voraussichtliche Amortisation: ${amortizationText}</span>
        </div>
        <div class="calc-result-item" style="display:flex; justify-content:space-between; align-items:center; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.1);">
          <span class="calc-result-label" style="color:rgba(255,255,255,0.7); font-size:0.9rem;">Verbleibende manuelle Kosten:</span>
          <span class="calc-result-value" style="font-family:var(--font-heading); font-weight:700; font-size:1.2rem; color:var(--text-white);">${formatCurrency(remainingCost)}</span>
        </div>
      </div>
      <div class="calc-disclaimer" style="margin-top:24px; padding:16px; bg:rgba(255,255,255,0.05); border-radius:var(--radius-sm); font-size:0.8rem; color:rgba(255,255,255,0.6); line-height:1.6; background-color:rgba(255,255,255,0.05);">
        Hinweis: Diese Berechnung stellt ein unverbindliches Szenario dar und basiert auf Ihren Angaben sowie einer angenommenen Automatisierungsquote. Eine individuelle Vor-Ort-Analyse ist zur exakten Ermittlung erforderlich.
      </div>
      <button class="btn btn-primary calc-result-cta" style="width:100%; margin-top:24px;" onclick="navigateTo('/kontakt')">Individuelle Berechnung anfragen</button>
    `;
  }

  // Update automation label live without triggering full calculation
  if (inputs.automation && automationVal) {
    inputs.automation.addEventListener('input', () => {
      automationVal.textContent = `${inputs.automation.value}%`;
    });
  }

  if (btnCalculate) {
    btnCalculate.addEventListener('click', (e) => {
      e.preventDefault();
      calculate();
    });
  }

  function renderInitialState() {
    if (automationVal) {
      automationVal.textContent = `${parseFloat(inputs.automation?.value) || 50}%`;
    }
    const zeroCurrency = formatCurrency(0);
    calcContainer.innerHTML = `
      <h3 class="calc-result-title" style="color:var(--text-white); margin-bottom: 24px; font-family:var(--font-heading); font-size:1.2rem; font-weight:700;">Ihr Szenario</h3>
      <div class="calc-result-items" style="display:flex; flex-direction:column; gap:16px;">
        <div class="calc-result-item" style="display:flex; justify-content:space-between; align-items:center; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.1);">
          <span class="calc-result-label" style="color:rgba(255,255,255,0.7); font-size:0.9rem;">Manuelle Arbeitskosten (Jahr):</span>
          <span class="calc-result-value" style="font-family:var(--font-heading); font-weight:700; font-size:1.2rem; color:var(--text-white);">${zeroCurrency}</span>
        </div>
        <div class="calc-result-item" style="display:flex; flex-direction:column; align-items:flex-start; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.1);">
          <span class="calc-result-label" style="color:rgba(255,255,255,0.7); font-size:0.9rem; margin-bottom: 0.5rem;">Geschätztes Einsparpotenzial pro Jahr:</span>
          <span class="calc-result-value" style="font-family:var(--font-heading); font-weight:700; font-size:2.2rem; color:var(--cyan); margin-bottom: 0.5rem;">${zeroCurrency}</span>
          <span style="font-size: 0.85rem; color: rgba(255,255,255,0.5);">Voraussichtliche Amortisation: -</span>
        </div>
        <div class="calc-result-item" style="display:flex; justify-content:space-between; align-items:center; padding-bottom:16px; border-bottom:1px solid rgba(255,255,255,0.1);">
          <span class="calc-result-label" style="color:rgba(255,255,255,0.7); font-size:0.9rem;">Verbleibende manuelle Kosten:</span>
          <span class="calc-result-value" style="font-family:var(--font-heading); font-weight:700; font-size:1.2rem; color:var(--text-white);">${zeroCurrency}</span>
        </div>
      </div>
      <div class="calc-disclaimer" style="margin-top:24px; padding:16px; bg:rgba(255,255,255,0.05); border-radius:var(--radius-sm); font-size:0.8rem; color:rgba(255,255,255,0.6); line-height:1.6; background-color:rgba(255,255,255,0.05);">
        Hinweis: Diese Berechnung stellt ein unverbindliches Szenario dar und basiert auf Ihren Angaben sowie einer angenommenen Automatisierungsquote. Eine individuelle Vor-Ort-Analyse ist zur exakten Ermittlung erforderlich.
      </div>
      <button class="btn btn-primary calc-result-cta" style="width:100%; margin-top:24px;" onclick="navigateTo('/kontakt')">Individuelle Berechnung anfragen</button>
    `;
  }

  // Initial calculation (Zeros)
  renderInitialState();
};
