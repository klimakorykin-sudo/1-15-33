// ========================================
//   КНОПКА. ОБЩАЯ. ДЛЯ ВСЕХ.
// ========================================

(function() {
    'use strict';

    window.createButton = function(text, className, onClick) {
        const btn = document.createElement('button');
        btn.className = 'ui-button ' + (className || '');
        btn.textContent = text;
        btn.setAttribute('data-hover', '');
        btn.setAttribute('data-click', '');
        
        if (onClick) {
            btn.addEventListener('click', onClick);
        }
        
        return btn;
    };

})();