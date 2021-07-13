import UrlParser from '../../routes/url-parser';
import RestaurantDicodingSource from '../../data/restaurantdicoding-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const Detail = {
    async render() {
        return `
            <div id="restaurant"></div>
      `;
    },

    async afterRender() {
        const url = UrlParser.parseActiveUrlWithoutCombiner();
        const restaurant = await RestaurantDicodingSource.detailRestaurant(url.id);
        const restaurantContainer = document.querySelector('#restaurant');
        restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    },
};

export default Detail;