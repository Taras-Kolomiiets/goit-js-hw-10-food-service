import menu from '../menu.json';
import menuTemplate from '../templates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');

const menuMarkup = menuTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);