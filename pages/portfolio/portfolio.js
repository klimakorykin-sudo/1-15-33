// ========================================
//   ПОРТФОЛИО. КАЖДЫЙ КЕЙС — ЧАСТЬ ТЕБЯ.
// ========================================

(function() {
    'use strict';

    const cases = [
        {
            id: 1,
            title: 'Танец',
            emoji: '💃',
            description: 'Ты танцуешь так, что время замирает.',
            image: '../../assets/images/anya-2.jpg'
        },
        {
            id: 2,
            title: 'Собачка',
            emoji: '🐶',
            description: 'Твоя собачка спит. Не буди.',
            image: '../../assets/images/dog.jpg'
        },
        {
            id: 3,
            title: 'Поле',
            emoji: '🌳',
            description: 'Ветер в волосах. Свобода.',
            image: '../../assets/images/field.jpg'
        },
        {
            id: 4,
            title: 'Улыбка',
            emoji: '😊',
            description: 'Ты улыбаешься — и мир становится теплее.',
            image: '../../assets/images/anya-1.jpg'
        }
    ];

    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;

    function renderCases() {
        grid.innerHTML = '';
        
        cases.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'portfolio-card';
            card.style.animationDelay = (index * 0.2) + 's';
            
            card.innerHTML = `
                <div class="portfolio-card-image">
                    <img src="${item.image}" alt="${item.title}">
                </div>
                <div class="portfolio-card-content">
                    <span class="portfolio-card-emoji">${item.emoji}</span>
                    <h3 class="portfolio-card-title handwritten">${item.title}</h3>
                    <p class="portfolio-card-text handwritten">${item.description}</p>
                </div>
            `;
            
            // ===== MICRO-INTERACTION: HOVER =====
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-10px) scale(1.02)';
                this.style.boxShadow = '0 30px 80px rgba(255, 215, 0, 0.15)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
                this.style.boxShadow = '0 20px 60px rgba(0, 0, 0, 0.5)';
            });
            
            // ===== MICRO-INTERACTION: CLICK =====
            card.addEventListener('click', function() {
                this.style.transform = 'scale(0.98)';
                setTimeout(() => {
                    this.style.transform = 'translateY(-10px) scale(1.02)';
                }, 150);
            });
            
            grid.appendChild(card);
        });
    }

    // ===== ЗАПУСК =====
    renderCases();

    console.log('Портфолио загружено.');

})();