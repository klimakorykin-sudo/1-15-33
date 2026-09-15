// ========================================
//   HOVER-ЭФФЕКТ. ВЕЗДЕ. ДЛЯ ВСЕГО.
// ========================================

(function() {
    'use strict';

    window.initMicroHover = function() {
        const elements = document.querySelectorAll('[data-hover]');
        
        elements.forEach((el) => {
            el.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
                this.style.transition = 'all 0.3s ease';
                this.style.boxShadow = '0 20px 60px rgba(255, 215, 0, 0.1)';
            });
            
            el.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = 'none';
            });
        });
    };

})();