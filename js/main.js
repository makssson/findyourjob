const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar");
const closeMenuButton = document.querySelector(".close-button");
// 1 вариант Добавляем и убираем класс .is-open для открытия закрытия меню.
const toggleMenu = (event) => {
    menu.classList.toggle("is-open");
};

menuButton.addEventListener('click', toggleMenu);
closeMenuButton.addEventListener('click',toggleMenu);


// 2 вариант
//menuButton.addEventListener('click', (event) => {
//    menu.classList.toggle('is-open');
//});
//closeMenuButton.addEventListener('click', (event) => {
  //  menu.classList.toggle('is-open');
//});