const toggleButton = document.querySelector('.toggle');
const linksContainer = document.querySelector('.nav-links-container');

toggleButton.addEventListener('click', () => {
  linksContainer.classList.toggle('show');
});