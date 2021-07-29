import '../src/styles.css';
import menu from './menu.json';
import menuTemplate from '../src/templates/menu-items.hbs';

const menuRef = document.querySelector('.js-menu');

const menuMarkup = menuTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', menuMarkup);

const themeInput = document.querySelector('#theme-switch-toggle');

themeInput.addEventListener('change', onThemeChange);


function onThemeChange(e) {
  if (e.currentTarget.checked) {
    document.body.classList.add('dark-theme')
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
  }
}


