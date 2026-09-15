// ========================================
//   СТИКЕР. ДЛЯ СКРАПБУКА.
// ========================================

(function() {
    'use strict';

    const stickers = ['🌸', '⭐', '❤️', '✨', '🌿', '☕', '🐶', '🪭', '🌙', '💫'];

    window.createSticker = function() {
        const sticker = document.createElement('div');
        sticker.className = 'scrapbook-sticker';
        sticker.textContent = stickers[Math.floor(Math.random() * stickers.length)];
        sticker.style.transform = 'rotate(' + (Math.random() * 30 - 15) + 'deg)';
        return sticker;
    };

    window.addRandomSticker = function(container) {
        if (!container) return;
        const sticker = window.createSticker();
        container.appendChild(sticker);
    };

})();