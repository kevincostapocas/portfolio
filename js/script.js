var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

window.instgrm.Embeds.process()

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