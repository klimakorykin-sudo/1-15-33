// ========================================
//   CLICK-ЭФФЕКТ. ВЕЗДЕ. ДЛЯ ВСЕГО.
// ========================================

(function() {
    'use strict';

    window.initMicroClick = function() {
        document.addEventListener('click', function(e) {
            const target = e.target.closest('[data-click]');
            if (!target) return;
            
            const ripple = document.createElement('span');
            ripple.className = 'click-ripple';
            
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                width: 0;
                height: 0;
                background: radial-gradient(circle, rgba(255, 215, 0, 0.3) 0%, transparent 70%);
                border-radius: 50%;
                transform: translate(-50%, -50%);
                pointer-events: none;
                animation: rippleExpand 0.6s ease-out forwards;
            `;
            
            if (getComputedStyle(target).position === 'static') {
                target.style.position = 'relative';
            }
            
            target.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    };

})();