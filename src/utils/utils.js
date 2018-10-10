export const appendComponent = (parent, components) => {
    // components.forEach((component) => {
    parent.appendChild(components);
    // });
};

export const sleep = (time) => new Promise((response) => setTimeout(response, time));

export const goingTop = () => {
    document.body.scrollTop = 0; // For Safari
    console.log('something');
    window.scrollBy({top: -window.innerHeight, left: 0, behavior: 'smooth'}); ; // For Chrome, Firefox, IE and Opera
};

export default {
    appendComponent, goingTop,
};
