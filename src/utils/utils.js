export const appendComponent = (parent, components) => {
    // components.forEach((component) => {
    parent.appendChild(components);
    // });
};

export const sleep = (time) => new Promise((response) => setTimeout(response, time));

export const goingTop = () => {
    document.body.scrollTop = 0; // For Safari
    window.scrollBy({top: -window.innerHeight, left: 0, behavior: 'smooth'}); ; // For Chrome, Firefox, IE and Opera
};

const isLiked = (id) => localStorage.getItem(`song-${id}`);

const toggleLike = (id) => {
    const likeValue = isLiked(id) === 'true' ? 'false' : 'true';
    localStorage.setItem(`song-${id}`, likeValue);
};

const setInitialLikeValue = (likeButton, liked) => {
    if (liked === 'true') likeButton.children[0].classList.add('fas');
};

export const likeFunction = (articleId) => {
    const likeButton = document.getElementById('like-button');

    setInitialLikeValue(likeButton, isLiked(articleId));

    likeButton.addEventListener('click', () => {
        likeButton.children[0].classList.toggle('fas');
        toggleLike(articleId);
    });
};

export default {
    appendComponent, goingTop, likeFunction,
};
