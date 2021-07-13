import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
    <h1 class="restaurant__name">${restaurant.name}</h1>
    <img class="restaurant__picture" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Foto restoran ${restaurant.name}" />
    <div class="restaurant__information">
        <table class="restaurant__information__table">            
            <tr>
                <td><strong>Kota</strong></td>
                <td>:</td>
                <td>${restaurant.city}</td>
            </tr>
            <tr>
                <td><strong>Alamat</strong></td>
                <td>:</td>
                <td>${restaurant.address}</td>
            </tr>
            <tr>
                <td><strong>Kategori</strong></td>
                <td>:</td>
                <td>${restaurant.categories.map((category) => `${category.name}`).join(', ')}</td>
            </tr>
            <tr>
                <td><strong>Rating</strong></td>
                <td>:</td>
                <td>${restaurant.rating}</td>
            </tr>
        </table>    
        <p class="restaurant__information__description">${restaurant.description}</p>            
    </div>    
    <div class="restaurant__menus"> 
        <h2>Menu</h2>       
        <ul class="restaurant__menus__foods">
            <h3>Makanan</h3>
            ${restaurant.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
        </ul>
        <ul class="restaurant__menus__drinks">        
            <h3>Minuman</h3>
            ${restaurant.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
        </ul>
    </div>
    <div class="restaurant__reviews"> 
        <h2>Customer Reviews</h2>           
        ${restaurant.customerReviews.map((customerReview) => `
        <div class="restaurant__reviews__item">
            <div class="restaurant__reviews__item__header">                
                <h3>${customerReview.name}</h3>
                <time>${customerReview.date}</time>
            </div>
            <div class="restaurant__reviews__item__content">
                <p>${customerReview.review}</p>
            </div>
        </div>

        `).join('')}        
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
    <section class="restaurant-list__item">
        <div class="restaurant-list__item__header">
            <h2>${restaurant.name}</h2>
            <p class="restaurant-list__item__rating">&#9733; ${restaurant.rating}</p>
            <img class="restaurant-list__item__image" src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Foto restoran ${restaurant.name}">
        </div>
        <div class="restaurant-list__item__body">
            <p class="restaurant-list__item__body__location">Lokasi: ${restaurant.city}</p>
        </div>
        <button class="restaurant-list__item__detail-button" onclick="location.href='${`/#/detail/${restaurant.id}`}'">Detail</button>
    </section>
`;

const createLikeButtonTemplate = () => `
    <button aria-label="like this restaurant" id="likeButton" class="like">
        <i class="fa fa-heart-o" aria-hidden="true"></i>
    </button>
`;

const createLikedButtonTemplate = () => `
    <button aria-label="unlike this restaurant" id="likeButton" class="like">        
        <i class="fa fa-heart" aria-hidden="true"></i>
    </button>
`;

export { createRestaurantItemTemplate, createRestaurantDetailTemplate, createLikeButtonTemplate, createLikedButtonTemplate };