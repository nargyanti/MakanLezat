import FavoriteRestaurantIdb from '../../data/favoriterestaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

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
        const restaurantList = await FavoriteRestaurantIdb.getAllRestaurants();
        const restaurantListContainer = document.querySelector('#restaurant-list');
        if (restaurantList.length === 0) {
            restaurantListContainer.innerHTML = `
            <p>Anda tidak mempunyai restoran favorit</p>
            `;
        }

        restaurantList.forEach((restaurant) => {
            restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
        });
    },
};

export default Favorite;