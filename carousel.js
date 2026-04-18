let currentIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');
    
    if (index >= slides.length) {
        currentIndex = 0;
    }
    if (index < 0) {
        currentIndex = slides.length - 1;
    }
    
    // Remover clase active de todas las slides
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // Agregar clase active a la slide y dot actual
    slides[currentIndex].classList.add('active');
    dots[currentIndex].classList.add('active');
}

function changeSlide(n) {
    currentIndex += n;
    showSlide(currentIndex);
}

function currentSlide(n) {
    currentIndex = n - 1;
    showSlide(currentIndex);
}

// Inicializar el carrusel
showSlide(currentIndex);
