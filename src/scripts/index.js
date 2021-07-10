import 'regenerator-runtime'; /* for async await transpile */
import '../styles/style.css';
import '../styles/responsive.css';
import App from './views/app';
import restaurants from '../DATA.js';

const app = new App({
    button: document.querySelector('#hamburgerButton'),
    drawer: document.querySelector('#drawer'),
    content: document.querySelector('main'),
    jumbotron: document.querySelector('.jumbotron'),
});

const renderRestaurantListItem = function() {
    console.log(restaurants);
    const restaurantListItem = document.querySelector('.restaurant-list');
    restaurantListItem.innerHTML = '';
    restaurants.forEach((restaurant) => {
        restaurantListItem.innerHTML += `
        <section class="restaurant-list__item">
            <div class="restaurant-list__item__header">
                <h2>${restaurant.name}</h2>
                <p class="restaurant-list__item__rating">&#9733; ${restaurant.rating}</p>
                <img class="restaurant-list__item__image" src="${restaurant.pictureId}" alt="Foto restoran ${restaurant.name}">
            </div>
            <div class="restaurant-list__item__body">
                <p class="restaurant-list__item__body__location">Lokasi: ${restaurant.city}</p>                
            </div>
            <button class="restaurant-list__item__detail-button" onclick="location.href='#'">Detail</button>
        </section>
        `;
    });
};

document.addEventListener('DOMContentLoaded', renderRestaurantListItem);