import {newArticle} from 'components/article/article-component';
import ArticleService from 'services/article-service';
import {appendComponent, goingTop} from 'utils/utils';


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
        loadArticles(articlesList, articlesContainer);
    }).catch(() => {
        articlesContainer.innerHTML = 'There was an error, please reload';
    });

    return articlesContainer;
};

export const printArticle = (article) =>{
    const articleContainer = document.getElementById('article');
    articleContainer.innerHTML = '';
    loadArticles([article], articleContainer);

    return articleContainer;
};

export const scrollControl = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById('top-button').style.display = 'block';
    } else {
        document.getElementById('top-button').style.display = 'none';
    }
};

export const topButton = () => {
    document.getElementById('top-button').addEventListener('click', function(evt) {
        evt.preventDefault();
        goingTop();
    });
};

export default {
    generateArticles, scrollControl, topButton,
};
