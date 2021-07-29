import '../src/styles.css';
import menu from './menu.json';
import menuTemplate from '../src/templates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');

const menuMarkup = menuTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);
console.log(`menuMarkup`, menuMarkup)


