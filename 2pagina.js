document.addEventListener('DOMContentLoaded', function() {
  const downloadBtn = document.getElementById('download-btn');
  const image = document.querySelector('main img'); // Selección correcta de la imagen

  downloadBtn.addEventListener('click', function() {
      // Crear un enlace temporal para la descarga
      const link = document.createElement('a');
      link.href = image.src;
      link.download = 'folleto.jpeg'; // Nombre del archivo descargado
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
  });

  // Integración de Voiceflow (sin cambios)
  (function(d, t) {
      var v = d.createElement(t), s = d.getElementsByTagName(t)[0];
      v.onload = function() {
          window.voiceflow.chat.load({
              verify: { projectID: '6695bab0af693ed0b48f2e44' },
              url: 'https://general-runtime.voiceflow.com',
              versionID: 'production'
          });
      }
      v.src = "https://cdn.voiceflow.com/widget/bundle.mjs";
      v.type = "text/javascript";
      s.parentNode.insertBefore(v, s);
  })(document, 'script');
});
