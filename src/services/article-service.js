import APIService from 'services/API-service';

class ArticleService {
    constructor() {
        this.APIServiceInstance = new APIService();
        this.model = 'article_list';
    }

    async getArticles() {
        return this.APIServiceInstance.get(this.model);
    }
}

export default ArticleService;
