const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodeRef = document.body;

checkboxRef.addEventListener('change', onChangeTheme);

function onChangeTheme(event) {
  event.currentTarget.checked
    ? toggleTheme(Theme.DARK, Theme.LIGHT)
    : toggleTheme(Theme.LIGHT, Theme.DARK);
}

function toggleTheme(add, remove) {
  bodeRef.classList.add(add);
  bodeRef.classList.remove(remove);
}
