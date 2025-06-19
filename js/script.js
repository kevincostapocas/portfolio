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

const progressBars = document.querySelectorAll('.progress-bar');

const options = {
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const progressBar = entry.target;
      const finalWidth = progressBar.getAttribute('data-final-width');
      progressBar.style.width = finalWidth + '%';
      observer.unobserve(progressBar);
    }
  });
}, options);

progressBars.forEach(bar => {
  // Assure que la barre est bien à 0 au départ
  bar.style.width = '0%';
  observer.observe(bar);
});

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

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        // Ne pas réappliquer l'animation si elle est déjà appliquée
        if (!entry.target.classList.contains('animate__fadeInUp')) {
          setTimeout(() => {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }, index * 100);
        }
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -20% 0px'
  });

  elements.forEach(el => observer.observe(el));
});

window.addEventListener('load', () => {
  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top <= windowHeight * 0.9) {
      if (!el.classList.contains('animate__fadeInUp')) {
        el.classList.add('animate__animated', 'animate__fadeInUp');
      }
    }
  });
});
