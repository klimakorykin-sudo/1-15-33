// ========================================
//   РОУТИНГ. КУДА ИДЁМ.
// ========================================

const routes = {
    '/': 'pages/home/index.html',
    '/portfolio': 'pages/portfolio/index.html',
    '/scrapbook': 'pages/scrapbook/index.html',
    '/story': 'pages/story/index.html',
    '/message': 'pages/message/index.html'
};

export function initRouter() {
    window.addEventListener('hashchange', loadRoute);
    loadRoute();
}

async function loadRoute() {
    const path = window.location.hash.slice(1) || '/';
    const route = routes[path] || routes['/'];
    const app = document.getElementById('app');
    
    if (!app) return;
    
    try {
        const response = await fetch(route);
        if (!response.ok) throw new Error('Not found');
        const html = await response.text();
        app.innerHTML = html;
        
        // Перезапускаем скрипты страницы
        const scripts = app.querySelectorAll('script');
        scripts.forEach(oldScript => {
            const newScript = document.createElement('script');
            newScript.textContent = oldScript.textContent;
            document.body.appendChild(newScript);
            newScript.remove();
        });
    } catch (e) {
        app.innerHTML = '<p style="color:#fff;text-align:center;padding:50px;">Ошибка загрузки</p>';
        console.error('Router error:', e);
    }
}