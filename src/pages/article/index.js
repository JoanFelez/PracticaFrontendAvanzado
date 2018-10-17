import {printArticle, topButton, scrollControl} from 'components/article/articles-generator';
import queryString from 'query-string';
import ArticleService from 'services/article-service';
import {menuButton} from 'components/header/header';
import {loginMenu} from 'components/header/login';
import {likeFunction} from 'utils/utils';
import 'styles/article.scss';

const articleService = new ArticleService();
const query = queryString.parse(window.location.search);
const articleId = query && query.id;
console.log(articleId);

if (articleId) {
    console.log(articleId);
    articleService.getArticle(articleId).then((article) => {
        printArticle(article);
        likeFunction(articleId);
    });
}

window.onload = function() {
    menuButton();
    loginMenu();
    topButton();
};

window.onscroll = function() {
    scrollControl();
};
