// ========================================
//   КЕЙС. СУЩНОСТЬ. ЧАСТЬ АНИ.
// ========================================

(function() {
    'use strict';

    window.Case = {
        create(data) {
            return {
                id: data.id,
                title: data.title,
                emoji: data.emoji,
                description: data.description,
                image: data.image,
                
                getShort() {
                    return this.emoji + ' ' + this.title;
                },
                
                getFull() {
                    return this.title + ': ' + this.description;
                }
            };
        }
    };

})();