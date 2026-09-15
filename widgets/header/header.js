// ========================================
//   ШАПКА. ВСЕГДА СВЕРХУ.
// ========================================

(function() {
    'use strict';

    function createHeader() {
        const header = document.createElement('header');
        header.className = 'site-header';
        header.innerHTML = `
            <div class="header-inner">
                <a href="#/" class="header-logo handwritten">Аня ✦</a>
                <nav class="header-nav">
                    <a href="#/portfolio" class="header-link handwritten">Портфолио</a>
                    <a href="#/scrapbook" class="header-link handwritten">Скрапбук</a>
                    <a href="#/story" class="header-link handwritten">История</a>
                    <a href="#/message" class="header-link handwritten">Послание</a>
                </nav>
            </div>
        `;
        
        const app = document.getElementById('app');
        if (app) app.prepend(header);
    }

    document.addEventListener('DOMContentLoaded', createHeader);

})();