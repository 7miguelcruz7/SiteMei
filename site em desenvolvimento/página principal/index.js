//Animações left e right

const target = document.querySelectorAll('[data-animacao]');
const animationClass = 'slide';

function slideAnimation() {
  const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 3.6);

  target.forEach(function(element)
  {
    if((windowTop) > element.offsetTop) {

      element.classList.add(animationClass)

    }
    else {

      element.classList.remove(animationClass)

    }
    console.log(element.offsetTop);
  })
}

window.addEventListener('scroll', function() {
  slideAnimation();
})

//Modo dark

const toggleButton = document.getElementById('toggle-dark-mode');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

const style = document.createElement('style');
style.innerHTML = `
  body.dark-mode {
    background: linear-gradient( #121212,rgb(37, 37, 37));
    color: #f0f0f0;
  }

  body.dark-mode header {
    background: linear-gradient(#333, #111);
    color: white;
    border-bottom: solid #555;
  }

  body.dark-mode nav a, body.dark-mode #active {
    color: #fdb840;
  }

  body.dark-mode nav a::after {
    background-color: #fdb840;
  }

  body.dark-mode .videoclinica, 
  body.dark-mode .sobre > h1,
  body.dark-mode #section-text-box,
  body.dark-mode .quote,
  body.dark-mode .content > p,
  body.dark-mode .content-2 > p,
  body.dark-mode .content-3 > p,
  body.dark-mode .content-4 > p {
    background-color: #2a2a2a;
    color: #f0f0f0;
    border-color: #fdb840;
  }

  body.dark-mode #fisio-servicos {
    background-color: #333;
    color: #fdb840;
  }

  body.dark-mode footer {
    background-color: #111;
    color: #f0f0f0;
    border-top: solid #fdb840;
  }

  body.dark-mode #button {
    background-color: #ea9808;
  }

  body.dark-mode #button a {
    color: white;
  }
`;
document.head.appendChild(style);