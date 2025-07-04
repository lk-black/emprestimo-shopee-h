window.addEventListener('DOMContentLoaded', function () {

  // Inicializa o UTMify Script com proteção a href="#"
  (function inserirScriptUtmify() {
    const script = document.createElement('script');
    script.src = "https://cdn.utmify.com.br/scripts/utms/latest.js";
    script.async = true;
    script.defer = true;
    script.setAttribute("data-utmify-prevent-xcod-sck", "");
    script.setAttribute("data-utmify-prevent-subids", "");
    document.head.appendChild(script);

    

    // Proteção contra links href="#" ou javascript:void(0)
    script.onload = () => {
      document.querySelectorAll('a[href]').forEach(link => {
        const href = link.getAttribute('href');
        const isAllowed = href === '#' || href === 'javascript:void(0)';

        if (isAllowed) {
          link.addEventListener('click', e => {
            e.preventDefault(); // Impede que a página role para o topo ou recarregue
          });
        }
      });
    };
  })();



});
