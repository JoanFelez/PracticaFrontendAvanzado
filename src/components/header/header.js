
export const menuButton = () => {
    const menuButton = document.getElementById('menubtn');
    const menu = document.getElementById('menu');
    menuButton.addEventListener('click', function(e) {
        e.preventDefault();
        menuButton.classList.toggle('menu-btn_active');
        menu.classList.toggle('menu_active');
    });
};

export default {
    menuButton,
};
