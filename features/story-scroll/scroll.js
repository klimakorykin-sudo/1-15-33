// ========================================
//   СКРОЛЛ-ИСТОРИЯ. ГЛАВЫ ПОЯВЛЯЮТСЯ.
// ========================================

(function() {
    'use strict';

    window.initStoryScroll = function() {
        const chapters = document.querySelectorAll('.story-chapter');
        if (!chapters.length) return;

        function checkChapters() {
            const trigger = window.innerHeight * 0.8;
            
            chapters.forEach((chapter) => {
                const top = chapter.getBoundingClientRect().top;
                
                if (top < trigger) {
                    chapter.classList.add('visible');
                }
            });
        }

        window.addEventListener('scroll', checkChapters);
        setTimeout(checkChapters, 100);
    };

})();