import {generateArticles} from 'components/article/articles-generator';
import {menuButton} from 'components/header/header';
import '../../styles/main.scss';

window.onload = function() {
    menuButton();
};


generateArticles();
