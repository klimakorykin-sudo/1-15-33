// ========================================
//   ГЛАВНАЯ. ПРОСТО АНЯ.
// ========================================

(function() {
    'use strict';

    console.log('Аня. Просто Аня.');

    // ===== ЗОЛОТЫЕ ИСКОРКИ =====
    function createSparkles() {
        const container = document.createElement('div');
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

        for (let i = 0; i < 30; i++) {
            const spark = document.createElement('div');
            spark.className = 'sparkle-bg';
            spark.style.left = Math.random() * 100 + '%';
            spark.style.top = Math.random() * 100 + '%';
            spark.style.animationDelay = Math.random() * 6 + 's';
            spark.style.animationDuration = 4 + Math.random() * 4 + 's';
            spark.style.width = 2 + Math.random() * 4 + 'px';
            spark.style.height = spark.style.width;
            container.appendChild(spark);
        }
    }

    // ===== ПЛАВНОЕ ПОЯВЛЕНИЕ =====
    function fadeIn() {
        const elements = document.querySelectorAll('.home > *');
        elements.forEach((el, index) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'all 1.5s ease ' + (index * 0.3) + 's';
            
            requestAnimationFrame(() => {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            });
        });
    }

    // ===== ЗАПУСК =====
    createSparkles();
    fadeIn();

})();