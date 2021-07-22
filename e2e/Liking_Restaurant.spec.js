const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
    I.amOnPage('/#/favorite');
});

Scenario('showing empty liked restaurants', ({ I }) => {
    I.see('Anda tidak mempunyai restoran favorit', '.restaurant__none');
});

Scenario('liking one restaurant', async ({ I }) => {
    I.see('Anda tidak mempunyai restoran favorit', '.restaurant__none');

    I.amOnPage('/');

    I.seeElement('.restaurant-list__item__detail-button');

    const firstRestaurant = locate('.restaurant-list__item__detail-button').first();
    const firstRestaurantTitle = await I.grabTextFrom('.restaurant-list__item__header h2');
    I.click(firstRestaurant);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-list__item');

    const likedRestaurantTitle = await I.grabTextFrom('.restaurant-list__item__header h2');

    assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('unliking one restaurant', async ({ I }) => {
    // Like Restaurant
    I.see('Anda tidak mempunyai restoran favorit', '.restaurant__none');
    I.amOnPage('/');
    I.seeElement('.restaurant-list__item__detail-button');
    const firstRestaurant = locate('.restaurant-list__item__detail-button').first();
    I.click(firstRestaurant);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    // Go to favorite
    I.amOnPage('/#/favorite');
    I.seeElement('.restaurant-list__item');

    I.seeElement('.restaurant-list__item__detail-button');
    I.click(firstRestaurant);

    // Unlike
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/favorite');
    I.see('Anda tidak mempunyai restoran favorit', '.restaurant__none');
});