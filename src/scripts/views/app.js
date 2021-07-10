import DrawerInitiator from '../utils/drawer-initiator';

class App {
    constructor({ button, drawer, content, jumbotron }) {
        this._button = button;
        this._drawer = drawer;
        this._content = content;
        this._jumbotron = jumbotron;

        this._initialAppShell();
    }

    _initialAppShell() {
        DrawerInitiator.init({
            button: this._button,
            drawer: this._drawer,
            content: this._content,
            jumbotron: this._jumbotron,
        });
    }
};

export default App;