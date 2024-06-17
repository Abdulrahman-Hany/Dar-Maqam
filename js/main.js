/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show-menu')
 
        toggle.classList.toggle('show-icon')
    })
 }
 showMenu('nav-toggle','nav_menu')

 /*========== SCROLL HEADER ===========*/
    window.addEventListener("scroll", function() {
        let header = document.querySelector("header");
        header.classList.toggle('sticky', this.window.scrollY > 0);
    })

 /*========== swiper-slide ===========*/
 let items = document.querySelectorAll('.slider .list .item');
 let next = document.getElementById('next');
 let prev = document.getElementById('prev');
 let thumbnails = document.querySelectorAll('.thumbnail .item');
 
 let countItem = items.length;
 let itemActive = 0;
 
 next.onclick = function(){
     itemActive = itemActive + 1;
     if(itemActive >= countItem){
         itemActive = 0;
     }
     showSlider();
 }
 prev.onclick = function(){
     itemActive = itemActive - 1;
     if(itemActive < 0){
         itemActive = countItem - 1;
     }
     showSlider();
 }
 let refreshInterval = setInterval(() => {
     next.click();
 }, 5000)
 function showSlider(){
     let itemActiveOld = document.querySelector('.slider .list .item.active');
     let thumbnailActiveOld = document.querySelector('.thumbnail .item.active');
     itemActiveOld.classList.remove('active');
     thumbnailActiveOld.classList.remove('active');
 
     items[itemActive].classList.add('active');
     thumbnails[itemActive].classList.add('active');
 
     clearInterval(refreshInterval);
     refreshInterval = setInterval(() => {
         next.click();
     }, 5000)
 }
  thumbnails.forEach((thumbnail, index) => {
     thumbnail.addEventListener('click', () => {
         itemActive = index;
         showSlider();
     })
 })
 
 /*=================== scroll TO Top =====================*/
let mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

 /*=================== NAV ACTIVE =====================*/
let switcherLis11 = document.querySelectorAll("nav a");
switcherLis11.forEach((li) => {
    li.addEventListener("click", function (e) {
        switcherLis11.forEach((li) => {
            li.classList.remove("active");
            this.classList.add("active");
        });
    });
});