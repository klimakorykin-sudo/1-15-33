// ========================================
//   ЭФФЕКТ КУРСОРА. СЛЕД. ИСКРЫ.
// ========================================

(function() {
    'use strict';

    const colors = ['#ffd700', '#ff6b6b', '#ff9f43', '#4d96ff', '#f368e0'];
    let lastTime = 0;
    const interval = 50; // мс

    function createSpark(x, y) {
        const spark = document.createElement('div');
        const size = 4 + Math.random() * 6;
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        spark.style.cssText = `
            position: fixed;
            left: ${x}px;
            top: ${y}px;
            width: ${size}px;
            height: ${size}px;
            background: ${color};
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            box-shadow: 0 0 10px ${color}, 0 0 20px ${color};
            animation: sparkFade 0.8s ease-out forwards;
            transform: translate(-50%, -50%);
        `;
        
        document.body.appendChild(spark);
        setTimeout(() => spark.remove(), 800);
    }

    document.addEventListener('mousemove', function(e) {
        const now = Date.now();
        if (now - lastTime < interval) return;
        lastTime = now;
        
        createSpark(e.clientX, e.clientY);
    });

    // ===== АНИМАЦИЯ =====
    const style = document.createElement('style');
    style.textContent = `
        @keyframes sparkFade {
            0% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
            100% { opacity: 0; transform: translate(-50%, -50%) scale(0) translateY(-20px); }
        }
    `;
    document.head.appendChild(style);

    console.log('Эффект курсора запущен.');

})();