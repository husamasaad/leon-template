
const toggleBtn = document.querySelector('.toggle');
const main = document.getElementById('main-page');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');
const links = document.querySelectorAll('#menu a');




toggleBtn.onclick = () => {
  menu.classList.toggle('show-menu');
  closeBtn.onclick = () => {
    menu.classList.toggle('show-menu');
  }
  links.forEach((link) => {
    link.onclick = () => {
      menu.classList.toggle('show-menu');
    }
  })
}