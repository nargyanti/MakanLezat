const Home = {
    async render() {
        return `                
            <div id="content">
                <div class="content__title">
                    <h1>Daftar Rekomendasi Restoran</h1>
                </div>
                <article class="restaurant-list"></article>
            </div>
        `;
    },

    async afterRender() {

    },
};

export default Home;