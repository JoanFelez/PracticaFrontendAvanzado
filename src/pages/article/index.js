import {printArticle} from 'components/article/articles-generator';
import queryString from 'query-string';
import ArticleService from 'services/article-service';
import {menuButton} from 'components/header/header';
import 'styles/article.scss';

const articleService = new ArticleService();
const query = queryString.parse(window.location.search);
const articleId = query && query.id;

if (articleId) {
    articleService.getArticle(articleId).then((article) => {
        printArticle(article);
    });
}

window.onload = function() {
    menuButton();
};
