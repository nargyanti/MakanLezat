import RestaurantDicodingSource from '../../data/restaurantdicoding-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
    async render() {
        return `                
            <div id="content">
                <div class="content__title">
                    <h1>Daftar Rekomendasi Restoran</h1>
                </div>
                <article id="restaurant-list" class="restaurant-list"></article>
            </div>
        `;
    },

    async afterRender() {
        const restaurantList = await RestaurantDicodingSource.homeRestaurantList();
        const restaurantListContainer = document.querySelector('#restaurant-list');
        restaurantList.forEach((restaurant) => {
            restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Home;