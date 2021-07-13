class Jumbotron extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="jumbotron">
            <div class="jumbotron__body">
                <h1 class="jumbotron__brand">MakanLezat</h1>
                <p class="jumbotron__caption">Temukan rekomendasi restoran yang menyajikan makanan dan minuman lezat di
                    sini!
                </p>
            </div>
        </div>
        `;
    }
}

customElements.define('jumbotron-brand', Jumbotron);