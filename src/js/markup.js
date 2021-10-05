import menuList from './menu.json';
import template from './template.hbs';

const menuCard = template(menuList);
const menuItem = document.querySelector('.js-menu');

menuItem.insertAdjacentHTML('beforeend', menuCard);
