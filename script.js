// Animação simples quando a página carrega
window.onload = function() {
    const images = document.querySelectorAll('.image-item');
    images.forEach((image, index) => {
        setTimeout(() => {
            image.style.opacity = 1;
            image.style.transform = "translateY(0)";
        }, 300 * index); // Atraso entre cada imagem
    });
};

// Script de exemplo para interatividade (poderia ser para ampliar imagens ou fazer algo mais interativo)
document.querySelectorAll('.image-item').forEach(item => {
    item.addEventListener('click', () => {
        alert('Você clicou em uma imagem! Aqui você pode adicionar mais interatividade.');
    });
});
