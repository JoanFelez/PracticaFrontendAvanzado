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

    articleService.getArticles().then((articlesList2) => {
        articlesContainer.innerHTML = '';
        let articlesList = [
            {
                'title': 'Motorsport Article',
                'image': '.https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                'description': 'Article Description',
                'author': {
                    'name': 'Author Name',
                    'photo': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                    'desc': 'Author Description',
                },
                'published': 'Published Time',
                'comments': 'Comment count',
            },
            {
                'title': 'Gaming Article',
                'image': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                'description': 'Article Description',
                'author': {
                    'name': 'Author Name',
                    'photo': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                    'desc': 'Author Description',
                },
                'published': 'Published Time',
                'comments': 'Comment count',
            },
            {
                'title': 'Life Article',
                'image': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                'description': 'Article Description',
                'author': {
                    'name': 'Author Name',
                    'photo': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                    'desc': 'Author Description',
                },
                'published': 'Published Time',
                'comments': 'Comment count',
            },
            {
                'title': 'Cooking Article',
                'image': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                'description': 'Article Description',
                'author': {
                    'name': 'Author Name',
                    'photo': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                    'desc': 'Author Description',
                },
                'published': 'Published Time',
                'comments': 'Comment count',
            },
            {
                'title': 'Football Article',
                'image': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                'description': 'Article Description',
                'author': {
                    'name': 'Author Name',
                    'photo': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                    'desc': 'Author Description',
                },
                'published': 'Published Time',
                'comments': 'Comment count',
            },
            {
                'title': 'Running Article',
                'image': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                'description': 'Article Description',
                'author': {
                    'name': 'Author Name',
                    'photo': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                    'desc': 'Author Description',
                },
                'published': 'Published Time',
                'comments': 'Comment count',
            },
            {
                'title': 'Job Article',
                'image': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                'description': 'Article Description',
                'author': {
                    'name': 'Author Name',
                    'photo': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                    'desc': 'Author Description',
                },
                'published': 'Published Time',
                'comments': 'Comment count',
            },
            {
                'title': 'Political Article',
                'image': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                'description': 'Article Description',
                'author': {
                    'name': 'Author Name',
                    'photo': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                    'desc': 'Author Description',
                },
                'published': 'Published Time',
                'comments': 'Comment count',
            },
            {
                'title': 'Agriculture Article',
                'image': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                'description': 'Article Description',
                'author': {
                    'name': 'Author Name',
                    'photo': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                    'desc': 'Author Description',
                },
                'published': 'Published Time',
                'comments': 'Comment count',
            },
            {
                'title': 'Engineering Article',
                'image': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                'description': 'Article Description',
                'author': {
                    'name': 'Author Name',
                    'photo': 'https://image.shutterstock.com/image-photo/august-05-2018-elkhart-lake-450w-1152406058.jpg',
                    'desc': 'Author Description',
                },
                'published': 'Published Time',
                'comments': 'Comment count',
            },
        ];
        loadArticles(articlesList, articlesContainer);
    }).catch(() => {
        articlesContainer.innerHTML = 'There was an error, please reload';
    });

    return articlesContainer;
};

export default generateArticles;
