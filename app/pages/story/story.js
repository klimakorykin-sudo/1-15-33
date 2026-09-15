// ========================================
//   ИСТОРИЯ. ИНТЕРАКТИВНЫЙ СКРОЛЛ.
// ========================================

(function() {
    'use strict';

    console.log('История загружена.');

    const chapters = document.querySelectorAll('.story-chapter');
    const progressBar = document.getElementById('storyProgress');
    if (!chapters.length || !progressBar) return;

    // ===== ПРОГРЕСС ПРИ СКРОЛЛЕ =====
    function updateProgress() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
        
        progressBar.style.width = progress + '%';
    }

    // ===== ПОЯВЛЕНИЕ ГЛАВ =====
    function checkChapters() {
        const trigger = window.innerHeight * 0.8;
        
        chapters.forEach((chapter, index) => {
            const top = chapter.getBoundingClientRect().top;
            
            if (top < trigger) {
                chapter.classList.add('visible');
            }
        });
    }

    // ===== ЗАПУСК =====
    window.addEventListener('scroll', () => {
        updateProgress();
        checkChapters();
    });

    // Первая проверка
    setTimeout(() => {
        updateProgress();
        checkChapters();
    }, 100);

})();