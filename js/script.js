AOS.init({
  duration: 1200,
  once: true
});

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

function instaLoaded() {
  if (window.instgrm && window.instgrm.Embeds) {
    window.instgrm.Embeds.process()
  }
}

document.getElementById('instagram-script').addEventListener('load', instaLoaded)

function setTextSize() {
  const items = document.querySelectorAll('.card-text');

  items.forEach(item => {
    // Réinitialise le style pour recalculer proprement
    item.style.display = '';
    item.style.webkitLineClamp = '';
    item.style.webkitBoxOrient = '';
    item.style.overflow = '';
    item.style.textOverflow = '';

    // Applique les styles nécessaires
    item.style.display = '-webkit-box';
    item.style.webkitBoxOrient = 'vertical';
    item.style.overflow = 'hidden';
    item.style.textOverflow = 'ellipsis';

    if (window.innerWidth < 400) {
      item.style.webkitLineClamp = '3';
    } else {
      item.style.webkitLineClamp = '2';
    }
  });
}

// 4. Exécute la fonction au chargement de la page
window.addEventListener('load', setTextSize);

// 5. Réexécute la fonction si on redimensionne la fenêtre (ex: orientation mobile, resize navigateur)
window.addEventListener('resize', setTextSize);



document.querySelectorAll('.modal').forEach(modalEl => {
  modalEl.addEventListener('show.bs.modal', () => {
    if (typeof AOS !== 'undefined') {
      AOS.disable();
      console.log('AOS disabled');
    }
  });
  modalEl.addEventListener('hidden.bs.modal', () => {
    if (typeof AOS !== 'undefined') {
      AOS.refresh();
      AOS.enable();
      console.log('AOS re-enabled and refreshed');
    }
  });
});