const Favorite = {
    async render() {
        return `
            <div id="content">
                <div class="content__title">
                    <h1>Daftar Restoran Favorit</h1>
                </div>
                <article id="restaurant-list" class="restaurant-list"></article>
            </div>
        `;
    },

    async afterRender() {

    },
};

export default Favorite;