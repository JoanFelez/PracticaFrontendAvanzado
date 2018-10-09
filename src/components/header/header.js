
export const menuButton = () => {
    const menuButton = document.getElementById('menubtn');
    const menu = document.getElementById('menu');
    menuButton.addEventListener('click', function(e) {
        e.preventDefault();
        menuButton.classList.toggle('menu-btn_active');
        menu.classList.toggle('menu_active');
    });

    document.addEventListener('click', function(evt) {
        evt.preventDefault();
        if (evt.toElement.localName != 'span' && evt.toElement.id != 'menubtn') {
            menuButton.classList.remove('menu-btn_active');
            menu.classList.remove('menu_active');
        }
    });
};

export default {
    menuButton,
};
