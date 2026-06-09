document.addEventListener('DOMContentLoaded', function () {

  // ── Envio do formulário ──
  const form = document.getElementById('contactForm');
  const submitBtn = document.getElementById('submitBtn');

  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      submitBtn.textContent = '✓ Solicitação enviada!';
      submitBtn.style.background = '#4A6741';
      submitBtn.disabled = true;

      setTimeout(function () {
        submitBtn.textContent = 'Enviar solicitação';
        submitBtn.style.background = '';
        submitBtn.disabled = false;
        form.reset();
      }, 3000);
    });
  }

  // ── Scroll suave para links da nav ──
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

});
