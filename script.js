document.addEventListener("DOMContentLoaded", function () {
    const fadeInElements = document.querySelectorAll('.fade-in');

    // Efeito Fade-In para os elementos
    fadeInElements.forEach((element, index) => {
        setTimeout(() => {
            element.classList.add('visible');
        }, index * 300); // Cada elemento vai aparecer com um pequeno atraso
    });

    // Efeito Scroll-In (Quando o usuário rola a página para os elementos aparecerem)
    const scrollElements = document.querySelectorAll('.scroll-in');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    document.addEventListener('scroll', function () {
        scrollElements.forEach((element) => {
            if (isInViewport(element)) {
                element.classList.add('visible');
            }
        });
    });

    // Efeito de Hover na Imagem de Perfil (faz um pequeno "shake" ou zoom)
    const profileImage = document.querySelector('.profile');
    profileImage.addEventListener('mouseenter', () => {
        profileImage.style.transition = 'transform 0.3s ease';
    });

    profileImage.addEventListener('mouseleave', () => {
        profileImage.style.transition = 'transform 0.3s ease';
        profileImage.style.transform = 'rotate(0deg)';
    });
});
