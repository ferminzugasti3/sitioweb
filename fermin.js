document.addEventListener('DOMContentLoaded', function() {
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav');
    const backToTopButton = document.getElementById('back-to-top');


    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;


        if (scrollTop > lastScrollTop) {
            // Scroll hacia abajo
            header.style.top = "-120px"; // Ajusta según el tamaño del header
        } else {
            // Scroll hacia arriba
            if (scrollTop <= 0) {
                header.style.top = "0";
            }
        }


        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;


        // Mostrar/ocultar botón de "volver arriba"
        if (scrollTop > 100) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });


    menuToggle.addEventListener('click', function() {
        nav.classList.toggle('nav-visible');
    });


    // Ocultar el menú al hacer clic en un enlace de navegación en móviles
    nav.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', () => {
            nav.classList.remove('nav-visible');
        });
    });


    // Funcionalidad del botón de "volver arriba"
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});




type="text/javascript">
  (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
        window.voiceflow.chat.load({
          verify: { projectID: '6695bab0af693ed0b48f2e44' },
          url: 'https://general-runtime.voiceflow.com',
          versionID: 'production'
        });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs"; v.type = "text/javascript"; s.parentNode.insertBefore(v, s);
  })(document, 'script');


