
// Sample images (replace with your own image links)
const imageLinks = [
  { src: 'images/beanieootd-wom.jpeg', tag: ''},
  {src: 'images/brownblue-adidasjacketootd.jpeg', tag: ''},
  {src: 'images/lambojacketootd-wom.jpeg',tag: ''},
  {src: 'images/scotchbuttonupootd.jpeg', tag: ''},
  {src: 'images/darkblujeaneootd.jpeg',tag: ''}
];


const gallery = document.querySelector('.gallery-grid');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const closeBtn = document.getElementById('closeBtn');
const searchInput = document.getElementById('searchInput');

// Load images into the gallery
imageLinks.forEach(src => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = "Gallery Image";
  img.addEventListener('click', () => {
    alert("Image clicked! Add more interactions here.");
  });
  gallery.appendChild(img);
});

// Lightbox open
function openLightbox(src) {
  lightboxImg.src = src;
  lightbox.classList.remove('hidden');
}

// Lightbox close
closeBtn.addEventListener('click', () => {
  lightbox.classList.add('hidden');
  lightboxImg.src = '';
});

// Close lightbox on background click
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.add('hidden');
    lightboxImg.src = '';
  }
});

// Search functionality
searchInput.addEventListener('input', () => {
  const query = searchInput.value;
  loadGallery(query);
});

// Initial load
loadGallery();

// Client Side Validation
document.getElementById('enquiryForm').addEventListener('submit', function(e) {
  const name = this.name.value.trim();
  const email = this.email.value.trim();

  if (!name || !email.includes('@')) {
    e.preventDefault();
    alert('Please enter a valid name and email.');
  }
});

// Enquiry Processing and Response
document.getElementById('enquiryForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const formData = new FormData(this);
  const response = await fetch('https://formspree.io/f/your-id', {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' }
  });

  if (response.ok) {
    alert('Thank you! Your enquiry has been submitted.');
    this.reset();
  } else {
    alert('Oops! There was a problem. Try again later.');
  }
});

