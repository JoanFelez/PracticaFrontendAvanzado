export const appendComponent = (parent, components) => {
    // components.forEach((component) => {
    console.log('Component: ' + components);
    parent.appendChild(components);
    // });
};

export const sleep = (time) => new Promise((response) => setTimeout(response, time));

export default {
    appendComponent,
};
