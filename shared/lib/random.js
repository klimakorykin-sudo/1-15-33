// ========================================
//   СЛУЧАЙНОСТИ. ОБЩЕЕ. ДЛЯ ВСЕХ.
// ========================================

(function() {
    'use strict';

    window.Random = {
        int(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        
        float(min, max) {
            return Math.random() * (max - min) + min;
        },
        
        pick(array) {
            return array[Math.floor(Math.random() * array.length)];
        },
        
        shuffle(array) {
            const copy = [...array];
            for (let i = copy.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [copy[i], copy[j]] = [copy[j], copy[i]];
            }
            return copy;
        },
        
        bool(chance) {
            chance = chance || 0.5;
            return Math.random() < chance;
        }
    };

})();