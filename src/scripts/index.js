import 'regenerator-runtime'; /* for async await transpile */
import './components/jumbotron';
import './components/app-bar';
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('main'),
    jumbotron: document.querySelector('.jumbotron'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();
    swRegister();
});