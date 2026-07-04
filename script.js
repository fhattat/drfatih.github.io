// Mobile navigation toggle
const menuToggle = document.getElementById('menu-toggle');
const siteNav = document.getElementById('site-nav');

menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close the mobile menu after navigating
siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        siteNav.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
    });
});

// Tableau dashboard tabs
const vizTabs = document.querySelectorAll('.viz-tab');
const tableauViz = document.getElementById('tableau-viz');

if (tableauViz) {
    vizTabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            vizTabs.forEach((t) => t.classList.remove('active'));
            tab.classList.add('active');
            tableauViz.setAttribute('src', tab.dataset.src);
        });
    });
}
