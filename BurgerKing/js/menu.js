function toggleMenu() {
    const hamburgerIcon = document.querySelector('.hamburger-icon');
    const menuList = document.getElementById('menuList');
    
    hamburgerIcon.classList.toggle('active');
    menuList.classList.toggle('active');
}