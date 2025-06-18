document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initGallery();
    initLightbox();
    initSearch();
    initBackToTop();
    initInteractiveElements();
});

// Gallery Functionality
function initGallery() {
    const gallery = document.getElementById('gallery');
    const images = [
        { src: 'images/example1.jpg', alt: 'Vintage denim jacket', tags: 'denim jacket vintage' },
        { src: 'images/example2.jpg', alt: 'Floral summer dress', tags: 'dress floral summer' },
        // Add more images with tags as needed
    ];

    function loadGallery(query = '') {
        gallery.innerHTML = '';
        const filtered = query ? 
            images.filter(img => img.tags.includes(query.toLowerCase())) : 
            images;

        filtered.forEach(img => {
            const imgElement = document.createElement('img');
            imgElement.src = img.src;
            imgElement.alt = img.alt;
            imgElement.classList.add('gallery-item');
            imgElement.setAttribute('data-tags', img.tags);
            imgElement.addEventListener('click', () => openLightbox(img.src, img.alt));
            gallery.appendChild(imgElement);
        });
    }

    loadGallery();
     window.loadGallery = loadGallery; // Make available for search
}

//Lightbox Functionality
function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightboxImg');
    const closeBtn = document.getElementById('closeBtn');
  

    window.openLightbox = function(src, alt) {
       lightboxImg.src = src;
       lightboxImg.alt = alt;
       lightbox.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling
    };

    closeBtn.add('click', ()=>{
      lightbox.classList.add('hidden');
      document.body.style.overflow ='';
    });
    
    lightbox.addEventListener('', (e) => {
      if (e.target === lightbox){
        lightbox.classList.add('hidden');
        document.body.style.overflow = '';
      }
    });
  }


// Searching
function initSearch(){
  const searchInput = document.getElementById('searchInput');

  searchInput.addEventListener('input', () => {
    const query = searchInput.value.trim();
  loadGallery(query);

  })
}

// Back to top button 
function initBackToTop(){
  const backToTopBtn = document.getElementById('backToTopBtn');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300){
      backToTopBtn.style.display = 'block';
    } else {
      backToTopBtn.style.display = 'none';
    }
  });

  backToTopBtn.addEventListener('click', () => {
   window.scrollTo({ top: 0, behavior: 'smooth' });
  })
}

// Form Validation for Contact & Enquiry
function validateForm(formId) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;
   // field validation
   form.querySelectorAll('[required]').forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add('error');
            } else {
                field.classList.remove('error');
            }
        });
  // email validation
        const email = form.querySelector('[type="email"]');
        if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            isValid = false;
            email.classList.add('error');
        }
    });
}
 
// Initialize form Validation
document.addEventListener('DOMContentLoaded', function() {
    validateForm('contactForm');
    validateForm('enquiryForm');
});
// succesful validation message
 alert('Thank you! We will get in get in touch as soon as possible.')
 form.reset();
  
  

