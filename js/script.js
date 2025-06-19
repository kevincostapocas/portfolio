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

  const modalContents = {}

  document.querySelectorAll('.modal').forEach(modal => {
    const body = modal.querySelector('[data-modal-id]')
    if (!body) return

    const modalId = body.getAttribute('data-modal-id')
    modalContents[modalId] = body.innerHTML

    modal.addEventListener('hidden.bs.modal', function () {
      body.innerHTML = modalContents[modalId]

      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    })
  })

 