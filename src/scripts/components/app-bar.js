class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav class="nav">
            <div class="nav__brand">
                <h1 class="nav__brand-logo">MakanLezat</h1>
            </div>
            <div class="nav__menu">
                <button id="hamburgerButton">☰</button>
            </div>
            <div id="drawer">
                <ul class="nav__list">
                    <li class="nav__item"><a href="#/home">Home</a></li>
                    <li class="nav__item"><a href="#/favorite">Favorite</a></li>
                    <li class="nav__item"><a href="https://github.com/nargyanti/">About Us</a></li>
                </ul>
            </div>
        </nav>
        `;
    }
}

customElements.define('app-bar', AppBar);