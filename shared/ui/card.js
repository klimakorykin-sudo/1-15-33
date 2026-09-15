// ========================================
//   КАРТОЧКА. ОБЩАЯ. ДЛЯ ВСЕХ.
// ========================================

(function() {
    'use strict';

    window.createCard = function(content, className) {
        const card = document.createElement('div');
        card.className = 'ui-card ' + (className || '');
        card.setAttribute('data-hover', '');
        card.setAttribute('data-click', '');
        card.innerHTML = content;
        
        return card;
    };

})();