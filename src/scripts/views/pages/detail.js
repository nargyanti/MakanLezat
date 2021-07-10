const Detail = {
    async render() {
        return `
            <div id="content">
                <div class="content__title">
                    <h1>Detail</h1>
                </div>                
            </div>
      `;
    },

    async afterRender() {
        // Fungsi ini akan dipanggil setelah render()
    },
};

export default Detail;