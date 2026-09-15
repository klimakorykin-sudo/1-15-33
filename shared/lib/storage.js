// ========================================
//   LOCALSTORAGE. ПАМЯТЬ ПРОЕКТА.
// ========================================

(function() {
    'use strict';

    window.Storage = {
        set(key, value) {
            try {
                localStorage.setItem(key, JSON.stringify(value));
            } catch (e) {
                console.warn('Storage error:', e);
            }
        },
        
        get(key, defaultValue) {
            try {
                const value = localStorage.getItem(key);
                return value ? JSON.parse(value) : defaultValue;
            } catch (e) {
                return defaultValue;
            }
        },
        
        remove(key) {
            try {
                localStorage.removeItem(key);
            } catch (e) {
                console.warn('Storage error:', e);
            }
        }
    };

})();