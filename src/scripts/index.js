import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import restaurants from '../DATA.js'

const hamburgerButtonElement = document.querySelector("#hamburger");
const drawerElement = document.querySelector("#drawer");
const mainElement = document.querySelector("main");
const jumbotronElement = document.querySelector(".jumbotron");

hamburgerButtonElement.addEventListener("click", event => {
    drawerElement.classList.toggle("open");
    event.stopPropagation();
});

mainElement.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
});

jumbotronElement.addEventListener("click", event => {
    drawerElement.classList.remove("open");
    event.stopPropagation();
});

const renderRestaurantListItem = function () {
    console.log(restaurants)
    const restaurantListItem = document.querySelector(".restaurant-list");
    restaurantListItem.innerHTML = "";
    restaurants.forEach(restaurant => {
        restaurantListItem.innerHTML += `
        <article class="restaurant-list__item">
            <div class="restaurant-list__item__header">
                <h2>${restaurant.name}</h2>
                <p class="rating">&#9733; ${restaurant.rating}</p>
                <img src="${restaurant.pictureId}" alt="Foto restoran ${restaurant.name}">
            </div>
            <div class="restaurant-list__item__body">
                <p class="location">Lokasi: ${restaurant.city}</p>
                <p class="restaurant-list__item__body__caption">${restaurant.description}</p>
            </div>
        </article>
        `;
    });
}

document.addEventListener("DOMContentLoaded", renderRestaurantListItem);