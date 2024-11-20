import './style.css';
const button = document.querySelectorAll('.button-github');
button.forEach((butt) => {
  butt.addEventListener('click', (event) => {
    alert('github');
  });
});
