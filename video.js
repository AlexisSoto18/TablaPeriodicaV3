window.addEventListener('resize', function() {
    const video = document.getElementById('background-video');
    const container = document.getElementById('video-container');
    video.style.width = container.clientWidth + '100px';
    video.style.height = container.clientHeight + '100px';
});

// Llama a la función de redimensionamiento al cargar la página
window.dispatchEvent(new Event('resize'));