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

document.addEventListener("DOMContentLoaded", function () {
  // Obtém o botão de rolagem para o topo
  var scrollTopButton = document.getElementById("scrollTopBtn");

  // Adiciona um evento de rolagem à janela
  window.onscroll = function () {
  
  };

  // Adiciona um evento de clique ao botão
  scrollTopButton.addEventListener("click", function () {
      // Rola suavemente para o topo
      scrollToTop(500); // 1000 representa a velocidade da animação em milissegundos
  });

  // Função para rolar suavemente para o topo
  function scrollToTop(duration) {
      var start = window.scrollY,
          startTime = performance.now();

      function animateScroll() {
          var now = performance.now(),
              time = now - startTime,
              percent = Math.min(time / duration, 1);

          window.scrollTo(0, easeInOutCubic(start, 0, percent));

          if (time < duration) {
              requestAnimationFrame(animateScroll);
          }
      }

      // Função de interpolação para suavizar a animação
      function easeInOutCubic(start, end, percent) {
          return start + (3 * percent * percent - 2 * percent * percent * percent) * (end - start);
      }

      requestAnimationFrame(animateScroll);
  }
});

function scrollDown (section){
  const sectionId = document.getElementById(section);
  if(sectionId){
    window.scrollTo({
      top:(sectionId.offsetTop-100),
      behavior:'smooth'
    });
}
}