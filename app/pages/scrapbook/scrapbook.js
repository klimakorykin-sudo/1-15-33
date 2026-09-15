// ========================================
//   СКРАПБУК. СТРАНИЦЫ ТВОЕЙ ЖИЗНИ.
// ========================================

(function() {
    'use strict';

    const pages = [
        {
            id: 1,
            image: '../../assets/images/anya-1.jpg',
            caption: 'Ты улыбаешься',
            sticker: '🌸',
            rotation: -3
        },
        {
            id: 2,
            image: '../../assets/images/anya-2.jpg',
            caption: 'Ты танцуешь',
            sticker: '🪭',
            rotation: 2
        },
        {
            id: 3,
            image: '../../assets/images/anya-3.jpg',
            caption: 'Ты уютная',
            sticker: '☕',
            rotation: -1
        },
        {
            id: 4,
            image: '../../assets/images/anya-4.jpg',
            caption: 'Ты — свет',
            sticker: '⭐',
            rotation: 4
        },
        {
            id: 5,
            image: '../../assets/images/dog.jpg',
            caption: 'Твоя собачка',
            sticker: '🐶',
            rotation: -2
        },
        {
            id: 6,
            image: '../../assets/images/field.jpg',
            caption: 'Ты в поле',
            sticker: '🌿',
            rotation: 3
        }
    ];

    const grid = document.getElementById('scrapbookGrid');
    if (!grid) return;

    function renderPages() {
        grid.innerHTML = '';
        
        pages.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'scrapbook-card';
            card.style.transform = 'rotate(' + item.rotation + 'deg)';
            card.style.animationDelay = (index * 0.15) + 's';
            
            card.innerHTML = `
                <div class="scrapbook-card-image">
                    <img src="${item.image}" alt="${item.caption}">
                </div>
                <div class="scrapbook-card-sticker">${item.sticker}</div>
                <p class="scrapbook-card-caption handwritten">${item.caption}</p>
            `;
            
            // ===== MICRO-INTERACTION: HOVER =====
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'rotate(0deg) scale(1.05)';
                this.style.zIndex = '10';
                this.style.boxShadow = '0 30px 80px rgba(255, 215, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'rotate(' + item.rotation + 'deg) scale(1)';
                this.style.zIndex = '1';
                this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
            });
            
            grid.appendChild(card);
        });
    }

    // ===== ЗАПУСК =====
    renderPages();

    console.log('Скрапбук загружен.');

})();