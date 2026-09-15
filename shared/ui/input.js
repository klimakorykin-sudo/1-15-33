// ========================================
//   ИНПУТ. ОБЩИЙ. ДЛЯ ВСЕХ.
// ========================================

(function() {
    'use strict';

    window.createInput = function(placeholder, className) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = placeholder || '';
        input.className = 'ui-input ' + (className || '');
        
        return input;
    };

})();