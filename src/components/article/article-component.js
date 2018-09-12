import {ArticleService} from '../../services/article-service.js';
import {appendComponent} from '../../utils/utils.js';
import article_list from '../../data/article_list.json';
import ejs from '../../utils/ejs';

export const addArticles = () =>{
    const articleContainer = document.getElementById('article-container');
    const articleList = document.createElement('div');
    //const template = ejs.render('<%- include("./src/pages/templates/article-list") %>');
    articleList.classList.add('article-list');

    //articleList.innerHTML = template;
    /* const addArticlesInstance = new ArticleService();
    console.log(addArticlesInstance);
    addArticlesInstance.getArticles().then((articlesJson) => {
        if (articlesJson.length === 0) {
            articleContainer.innerHTML = 'No articles';
        } else {
            articleContainer.innerHTML = `<p>Probrando</p>`;
            /*appendComponent(songs,
                articlesJson.map((songData) => articleContainer.innerHTML = ''));
        }
    }).catch(() => {
        articleContainer.innerHTML = 'There was an error, please reload';
    });
    return songs;*/
    //articleContainer.appendChild(articleList);
};

export default addArticles;
