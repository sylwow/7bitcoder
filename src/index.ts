import './styles.scss'

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = 'Hello webpack';
    element.classList.add('hello');

    // Add the image to our existing div.
    return element;
}

document.body.appendChild(component());
