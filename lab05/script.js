function showPage(pageId) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));

    document.getElementById(pageId).classList.add('active');
}

function toggleMenu() {
    const nav = document.getElementById('navlinks');
    nav.classList.toggle('show');
}
