import {newArticle} from 'components/article/article-component';
import ArticleService from 'services/article-service';
import {appendComponent} from 'utils/utils';


const loadArticles = (articlesList, articles) => {
    try {
        const updatedArticles = articles;
        if (articlesList.length === 0) {
            updatedArticles.innerHTML = 'No Articles';
        } else {
            articlesList.map((article) => {
                appendComponent(updatedArticles, newArticle(article));
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const generateArticles = () =>{
    const articleService = new ArticleService();
    const articlesContainer = document.getElementById('article-list');

    articleService.getArticles().then((articlesList) => {
        articlesContainer.innerHTML = '';
        loadArticles(articlesList, articlesContainer);
    }).catch(() => {
        articlesContainer.innerHTML = 'There was an error, please reload';
    });

    return articlesContainer;
};

export default generateArticles;
