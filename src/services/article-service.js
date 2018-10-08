import APIService from 'services/API-service';

class ArticleService {
    constructor() {
        this.APIServiceInstance = new APIService();
        this.model = 'article_list/';
    }

    async getArticles() {
        return this.APIServiceInstance.get(this.model);
    }

    async getArticle(id) {
        return this.APIServiceInstance.get(this.model+id);
    }
}

export default ArticleService;
