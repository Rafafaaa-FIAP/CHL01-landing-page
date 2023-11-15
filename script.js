let theme = 'dark'

changeTheme();

function changeTheme() {
  const currentTheme = document.querySelector('link[theme]');
  if (currentTheme) {
    currentTheme.remove();
  }

  if (theme === 'light') {
    theme = 'dark';
  }
  else {
    theme = 'light';
  }

  let link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = `./themes/${theme}.css`

  document.querySelector('head').appendChild(link);
}