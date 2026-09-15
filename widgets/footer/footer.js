// ========================================
//   ПОДВАЛ. ТИХО. СПОКОЙНО.
// ========================================

(function() {
    'use strict';

    function createFooter() {
        const footer = document.createElement('footer');
        footer.className = 'site-footer';
        footer.innerHTML = `
            <p class="footer-text handwritten">✧ сделано с теплом, для тебя ✧</p>
            <p class="footer-small handwritten">и если ты читаешь это — знай, это всё тебе</p>
        `;
        
        document.body.appendChild(footer);
    }

    document.addEventListener('DOMContentLoaded', createFooter);

})();