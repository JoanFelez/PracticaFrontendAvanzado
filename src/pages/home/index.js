import {generateArticles} from 'components/article/articles-generator';
import {menuButton} from 'components/header/header';
import {loginMenu} from 'components/header/login';
import 'styles/main.scss';

window.onload = function() {
    menuButton();
    loginMenu();
};


generateArticles();
