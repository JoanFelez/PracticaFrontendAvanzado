import { APIService } from './API-service';

class ArticleService {
  constructor() {
    this.APIServiceInstance = new APIService();
    this.model = 'article_list';
  }

  async getSongs() {
    return this.APIServiceInstance.get(this.model);
  }
}

export default ArticleService;
