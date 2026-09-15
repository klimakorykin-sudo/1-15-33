// ========================================
//   АНЯ. СУЩНОСТЬ. ЦЕНТР ВСЕЛЕННОЙ.
// ========================================

(function() {
    'use strict';

    window.Anya = {
        name: 'Аня',
        fullName: 'Аня',
        emoji: '✨',
        traits: [
            'тёплая',
            'уютная',
            'домашняя',
            'свободная',
            'умелая',
            'умная',
            'нежная'
        ],
        
        getGreeting() {
            return 'Привет, ' + this.name + '!';
        },
        
        getTrait(index) {
            return this.traits[index] || 'загадочная';
        },
        
        getAllTraits() {
            return this.traits.join(', ');
        }
    };

})();