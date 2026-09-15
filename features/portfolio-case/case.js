// ========================================
//   КЕЙС ПОРТФОЛИО. КАЖДЫЙ — ИСТОРИЯ.
// ========================================

(function() {
    'use strict';

    window.renderPortfolioCase = function(caseData) {
        const card = document.createElement('div');
        card.className = 'portfolio-card';
        
        card.innerHTML = `
            <div class="portfolio-card-image">
                <img src="${caseData.image}" alt="${caseData.title}">
            </div>
            <div class="portfolio-card-content">
                <span class="portfolio-card-emoji">${caseData.emoji}</span>
                <h3 class="portfolio-card-title handwritten">${caseData.title}</h3>
                <p class="portfolio-card-text handwritten">${caseData.description}</p>
            </div>
        `;
        
        return card;
    };

})();