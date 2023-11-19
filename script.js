const themeSwitch = document.querySelector('#theme-switch');
themeSwitch.addEventListener('change', changeTheme);

function changeTheme() {
  const currentTheme = document.querySelector('link[theme]');

  let theme;
  if (currentTheme.getAttribute('theme') === 'light') {
    theme = 'dark';
  }
  else {
    theme = 'light';
  }

  currentTheme.href = `./themes/${theme}.css`;
  currentTheme.setAttribute('theme', theme);
}

function scrollScreen(sectionId) {
  sectionId = (sectionId.includes('#') ? '' : '#') + sectionId;

  const section = document.querySelector(sectionId);
  console.log(section);
  if (section) {
    const navHeight = document.querySelector('nav').clientHeight;

    document.querySelector('main').scrollTo({
      top: section.offsetTop - navHeight,
      behavior: 'smooth'
    });
  }
}

function sendMe() {
  let error = false;

  const email = document.querySelector('#email');
  if (!email.checkValidity()) {
    email.classList.add('invalid');
    error = true;
  }
  else {
    email.classList.remove('invalid');
  }

  if (!error) {
    alert('Você será avisado!');
    email.value = '';
  }
}



//Aciona o dropdown

const cards = document.querySelectorAll('.card');

cards.forEach((card)=>{
  card.addEventListener('click', () => {
    card.classList.toggle('active');
  })
})