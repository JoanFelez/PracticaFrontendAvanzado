import {ArticleService} from 'services/article-services';

export const addArticles = () =>{
    const articleContainer = document.getElementById('article-container');
    const addArticlesInstance = new ArticleService();
    addArticlesInstance.getArticles().then((articlesJson) => {
        if (articlesJson.length === 0) {
            articleContainer.innerHTML = 'No articles';
        } else {
            appendComponent(songs,
                articlesJson.map((songData) => articleContainer.innerHTML = `${<%- include('../templates/article-list.ejs') %>}`));
        }
    }).catch(() => {
        songs.innerHTML = 'There was an error, please reload';
    });
    return songs;
};

export default addArticles;
