// ========================================
//   РАБОТА С DOM. ОБЩЕЕ. ДЛЯ ВСЕХ.
// ========================================

(function() {
    'use strict';

    window.DOM = {
        create(tag, className, innerHTML) {
            const el = document.createElement(tag);
            if (className) el.className = className;
            if (innerHTML) el.innerHTML = innerHTML;
            return el;
        },
        
        append(parent, child) {
            if (typeof parent === 'string') {
                parent = document.querySelector(parent);
            }
            if (typeof child === 'string') {
                child = document.querySelector(child);
            }
            if (parent && child) parent.appendChild(child);
        },
        
        remove(selector) {
            const el = typeof selector === 'string' 
                ? document.querySelector(selector) 
                : selector;
            if (el) el.remove();
        }
    };

})();