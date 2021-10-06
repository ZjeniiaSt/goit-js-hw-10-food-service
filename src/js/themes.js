const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkboxRef = document.querySelector('#theme-switch-toggle');
const bodyRef = document.body;

checkboxRef.addEventListener('change', onChangeTheme);

function onChangeTheme() {
  if (checkboxRef.checked) {
    toggleTheme(Theme.DARK, Theme.LIGHT);
    localStorage.setItem('theme', Theme.DARK);
  } else {
    toggleTheme(Theme.LIGHT, Theme.DARK);
    localStorage.removeItem('theme');
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

function toggleTheme(add, remove) {
  bodyRef.classList.add(add);
  bodyRef.classList.remove(remove);
}

const currentTheme = localStorage.getItem('theme');
if (currentTheme === Theme.DARK) {
  checkboxRef.checked = true;
  toggleTheme(Theme.DARK, Theme.LIGHT);
}
