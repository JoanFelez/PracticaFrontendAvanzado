import {newArticle} from 'components/article/article-component';
import ArticleService from 'services/article-service';


const loadArticles = (articlesList, articles) => {
    const updatedArticles = articles;
    if (articlesList.length === 0) {
        updatedArticles.innerHTML = 'No Articles';
    } else {
        appendComponent(updatedArticles,
            articlesList.map((article) => newArticle(article)));
    }
};

export const generateArticles = () =>{
    const articleService = new ArticleService();
    const articlesContainer = document.getElementById('article-container');

    articleService.getArticles().then((articlesList) => {
        articlesContainer.innerHTML = '';
        loadArticles(articlesList, articles);
    }).catch(() => {
        articlesContainer.innerHTML = 'There was an error, please reload';
    });

    return articlesContainer;
};

export default generateArticles;
