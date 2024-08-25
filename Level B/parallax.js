// parallax.js

document.addEventListener('scroll', function() {
    const layers = document.querySelectorAll('.parallax-layer');
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    layers.forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        const yPos = -(scrollTop * speed);
        layer.style.transform = `translateY(${yPos}px)`;
    });
});
