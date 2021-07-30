const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcher = document.querySelector('#theme-switch-toggle');
const bodyRef = document.querySelector('body');

themeSwitcher.addEventListener('change', onThemeChange);

onThemeLoad();

function onThemeChange(e) {
  if (e.currentTarget.checked) {
    bodyRef.classList.add(Theme.DARK);
    localStorage.setItem('Theme', JSON.stringify(Theme.DARK));
  } else {
    bodyRef.classList.remove(Theme.DARK);
    bodyRef.classList.add(Theme.LIGHT);
    localStorage.setItem('Theme', JSON.stringify(Theme.LIGHT));
  }
}

function onThemeLoad () {
  let savedSettings = localStorage.getItem('Theme');

  if (JSON.parse(savedSettings) === Theme.DARK) {
    themeSwitcher.checked = true;
    bodyRef.classList.add('dark-theme');
  }
  if (
    localStorage.getItem('Theme') === null ||
    JSON.parse(savedSettings) === Theme.LIGHT
  ) {
    themeSwitcher.checked = false;
    bodyRef.classList.remove('dark-theme');
    bodyRef.classList.add('light-theme');
  }
};

