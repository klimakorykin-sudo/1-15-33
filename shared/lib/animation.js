// ========================================
//   АНИМАЦИИ. ОБЩЕЕ. ДЛЯ ВСЕХ.
// ========================================

(function() {
    'use strict';

    window.Animation = {
        fadeIn(element, duration) {
            duration = duration || 1000;
            element.style.opacity = '0';
            element.style.transition = 'opacity ' + duration + 'ms ease';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
            });
        },
        
        fadeInUp(element, duration, delay) {
            duration = duration || 1000;
            delay = delay || 0;
            element.style.opacity = '0';
            element.style.transform = 'translateY(20px)';
            element.style.transition = 'all ' + duration + 'ms ease ' + delay + 'ms';
            
            requestAnimationFrame(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            });
        },
        
        pulse(element, duration) {
            duration = duration || 2000;
            element.style.animation = 'pulse ' + duration + 'ms ease-in-out infinite';
        }
    };

})();