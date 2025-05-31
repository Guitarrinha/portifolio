document.addEventListener('DOMContentLoaded', function() {
    // Define o ano atual no rodapé
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Inicializa os tooltips do Bootstrap
    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
      return new bootstrap.Tooltip(tooltipTriggerEl);
    });

    // Opcional: Funcionalidade para fechar o menu responsivo ao clicar em um link
    const navLinks = document.querySelectorAll('.navbar-futuristic .nav-link');
    const menuToggle = document.getElementById('navbarNavFuturistic');
    
    if (menuToggle && typeof bootstrap !== 'undefined' && bootstrap.Collapse) {
        const bsCollapse = new bootstrap.Collapse(menuToggle, {
            toggle: false // Inicializa sem abrir/fechar
        });
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (menuToggle.classList.contains('show')) {
                    bsCollapse.toggle();
                }
            });
        });
    }
});