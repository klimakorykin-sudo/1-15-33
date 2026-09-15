// ========================================
//   ЧАСТИЦЫ. ВЕЗДЕ. ВСЕГДА.
// ========================================

(function() {
    'use strict';

    const symbols = ['✦', '✧', '❋', '✺', '✹'];
    const count = 20;

    function createParticles() {
        const container = document.createElement('div');
        container.className = 'particles-container';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 0;
            overflow: hidden;
        `;
        document.body.appendChild(container);

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('span');
            particle.className = 'particle';
            particle.textContent = symbols[Math.floor(Math.random() * symbols.length)];
            particle.style.cssText = `
                position: absolute;
                color: rgba(255, 215, 0, ${0.05 + Math.random() * 0.15});
                font-size: ${0.8 + Math.random() * 1.5}rem;
                left: ${Math.random() * 100}%;
                top: ${Math.random() * 100}%;
                animation: particleFloat ${6 + Math.random() * 8}s ease-in-out infinite;
                animation-delay: ${Math.random() * 5}s;
            `;
            container.appendChild(particle);
        }

        // Добавляем анимацию
        const style = document.createElement('style');
        style.textContent = `
            @keyframes particleFloat {
                0%, 100% { transform: translate(0, 0) rotate(0deg); opacity: 0.2; }
                25% { transform: translate(20px, -30px) rotate(90deg); opacity: 0.6; }
                50% { transform: translate(-10px, -60px) rotate(180deg); opacity: 0.4; }
                75% { transform: translate(15px, -30px) rotate(270deg); opacity: 0.7; }
            }
        `;
        document.head.appendChild(style);
    }

    document.addEventListener('DOMContentLoaded', createParticles);

    console.log('Частицы запущены.');

})();