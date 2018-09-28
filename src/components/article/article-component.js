
export const newArticle = ({title, artDescription, imageUrl, author, published, comments} =
{title: 'No title', published: 'No date', comments: '0',
    author: {name: 'No author', photo: 'No photo', desc: 'No author desciption'}}) =>{
    const article = document.createElement('div');
    articleList.classList.add('article-container');
    articleList.innerHTML = `
        <div class="article-info">
            <a class="article-link" href="./"><h3>${title}</h3></a>
            <p class="article-description">${artDescription}</p>
            <div class="author-info">
                <a class="author-name" href="#">${author.name}</a>
                <div class="author-image"><img src="${author.photo}" alt="Autor Photo">Author Photo</div>
                <p class="author-desc">${author.desc}</p>
            </div>
            <div class="time-comments">
                <time class="publish-time">${published}</time>
                <i class="far fa-comment-alt comment-icon"></i>
                <p class="comment-count">${comments}</p>
            </div>
        </div>
        <div class="image-container"><img src="${imageUrl}" alt="Image or Video"></div>
        `;
    return article;
};

export default newArticle;
