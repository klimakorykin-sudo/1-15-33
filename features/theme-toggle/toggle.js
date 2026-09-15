// ========================================
//   ПЕРЕКЛЮЧАТЕЛЬ ТЕМЫ. ТЬМА / СВЕТ.
// ========================================

(function() {
    'use strict';

    window.initThemeToggle = function() {
        const saved = localStorage.getItem('theme') || 'dark';
        document.documentElement.setAttribute('data-theme', saved);
    };

    window.toggleTheme = function() {
        const current = document.documentElement.getAttribute('data-theme') || 'dark';
        const next = current === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', next);
        localStorage.setItem('theme', next);
    };

})();