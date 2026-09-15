// ========================================
//   ПОСЛАНИЕ. ОТКРОЙ, КОГДА БУДЕШЬ ГОТОВА.
// ========================================

(function() {
    'use strict';

    const envelope = document.getElementById('messageEnvelope');
    const front = document.getElementById('messageEnvelopeFront');
    const letterText = document.getElementById('messageLetterText');
    if (!envelope || !front || !letterText) return;

    // ===== ТЕКСТ ПОСЛАНИЯ =====
    const lines = [
        'Аня...',
        'Ты — самое тёплое, что случилось в этом мире.',
        'Ты — свет, который согревает даже холодные дни.',
        'Ты — чудо. Настоящее.',
        'Спасибо, что ты есть.'
    ];

    // ===== ОТКРЫТИЕ КОНВЕРТА =====
    front.addEventListener('click', function() {
        envelope.classList.add('open');
        
        // Печатаем текст по буквам
        let fullText = lines.join('\n');
        let index = 0;
        letterText.textContent = '';
        
        function typeChar() {
            if (index < fullText.length) {
                letterText.textContent += fullText[index];
                index++;
                setTimeout(typeChar, 50);
            }
        }
        
        typeChar();
        
        // Салют при открытии
        if (window.fireConfetti) {
            window.fireConfetti(100);
        }
    });

    console.log('Послание загружено.');

})();