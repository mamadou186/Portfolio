const ratio = 0.1;
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
};

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible');
    } else {
      entry.target.classList.remove('reveal-visible');
    }
  });
};

document.documentElement.classList.add('reveal-loaded');

window.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(handleIntersect, options);
  document.querySelectorAll('.reveal').forEach(function (r) {
    observer.observe(r);
  });
});

function toggleInfo(event, button) {
  event.preventDefault(); // Empêche le comportement par défaut du lien
  var project = button.parentNode;
  var additionalInfo = project.querySelector('.additional-info');
  additionalInfo.classList.toggle('show');
  
}



