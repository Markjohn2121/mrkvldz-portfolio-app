document.addEventListener('DOMContentLoaded', () => {
    let menuBtn = document.getElementById('menu');
    console.log(menuBtn);

    if (menuBtn) {
        menuBtn.onclick = () => {
            let nav = document.getElementById('nav');
            nav.classList.toggle('nav-active');
        };
    } else {
        console.error("Element with ID 'hamburger' not found.");
    }
});