/**
 * Cobotera Form Validation and Handling
 */

window.initContactForm = function() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const initTime = Date.now();

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    form.querySelectorAll('.contact-field').forEach(field => field.classList.remove('error'));
    form.querySelectorAll('.contact-error-msg').forEach(msg => msg.textContent = '');

    let hasErrors = false;
    let firstErrorField = null;

    function showError(inputId, message) {
      const input = document.getElementById(inputId);
      if (input) {
        const field = input.closest('.contact-field');
        if (field) {
          field.classList.add('error');
          const errorMsg = field.querySelector('.contact-error-msg');
          if (errorMsg) {
            errorMsg.textContent = message;
          }
        }
        if (!firstErrorField) firstErrorField = input;
        hasErrors = true;
      }
    }

    // 1. Spam check (Honeypot)
    const website = document.getElementById('form-website');
    if (website && website.value !== '') {
      // Silently reject
      return false;
    }

    // 2. Spam check (Time)
    if (Date.now() - initTime < 3000) {
      // Silently reject
      return false;
    }

    // 3. Validations
    const firstname = document.getElementById('form-firstname');
    if (!firstname || firstname.value.trim().length < 2) {
      showError('form-firstname', 'Dieses Feld ist erforderlich.');
    }

    const lastname = document.getElementById('form-lastname');
    if (!lastname || lastname.value.trim().length < 2) {
      showError('form-lastname', 'Dieses Feld ist erforderlich.');
    }

    const company = document.getElementById('form-company');
    if (!company || company.value.trim().length === 0) {
      showError('form-company', 'Dieses Feld ist erforderlich.');
    }

    const email = document.getElementById('form-email');
    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    if (!email || !emailRegex.test(email.value.trim())) {
      showError('form-email', 'Bitte geben Sie eine gültige E-Mail-Adresse ein.');
    }

    const phone = document.getElementById('form-phone');
    if (phone && phone.value.trim().length > 0) {
      // Basic phone validation
      const phoneRegex = /^[\\d\\s\\+\\-\\(\\)\\/]{6,30}$/;
      if (!phoneRegex.test(phone.value.trim())) {
        showError('form-phone', 'Bitte geben Sie eine gültige Telefonnummer ein.');
      }
    }

    const privacy = document.getElementById('form-privacy');
    if (!privacy || !privacy.checked) {
      showError('form-privacy', 'Bitte stimmen Sie der Datenschutzerklärung zu.');
    }

    if (hasErrors) {
      if (firstErrorField) {
        firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return false;
    }

    // Success
    form.style.display = 'none';
    const successDiv = document.querySelector('.contact-success');
    if (successDiv) {
      successDiv.style.display = 'block';
    }
    
    if (typeof window.showToast === 'function') {
      window.showToast('Vielen Dank für Ihre Anfrage. Wir melden uns persönlich bei Ihnen.', 'success');
    }
  });
};
