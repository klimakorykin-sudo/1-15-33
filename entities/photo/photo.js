// ========================================
//   ФОТО. СУЩНОСТЬ. МГНОВЕНИЯ.
// ========================================

(function() {
    'use strict';

    window.Photo = {
        create(src, caption, sticker, rotation) {
            return {
                src: src,
                caption: caption || '',
                sticker: sticker || '✦',
                rotation: rotation || 0,
                
                getHTML() {
                    return `
                        <div class="photo-item" style="transform: rotate(${this.rotation}deg);">
                            <div class="photo-image">
                                <img src="${this.src}" alt="${this.caption}">
                            </div>
                            <div class="photo-sticker">${this.sticker}</div>
                            <p class="photo-caption handwritten">${this.caption}</p>
                        </div>
                    `;
                }
            };
        }
    };

})();