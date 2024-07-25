
const galleryImages = document.querySelectorAll('.gallery img');
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
function openModal(event) {
  const src = event.target.src;
  modalImage.src = src.replace('300', '800'); 
  modal.style.display = 'flex';
}
galleryImages.forEach(image => {
  image.addEventListener('click', openModal);
});
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});
