/*NAVBAR SECTION*/ 
const navbar = document.getElementById('navbar');
var prevScrollPos = window.pageYOffset;
function toggleNavbar() {
    var currentScrollPos = window.pageYOffset;
    
    if(currentScrollPos === 0){
      navbar.classList.remove('scroll-nav')

    }else if (prevScrollPos > currentScrollPos) {
      navbar.classList.add('scroll-nav');
      navbar.style.height = 'fit-content'
    } else {
      navbar.classList.remove('scroll-nav');
    }
    prevScrollPos = currentScrollPos;
  }
window.addEventListener('scroll', toggleNavbar)

/*Navbar Section End*/ 
/*MOBILE NAVBAR SECTION*/
const mobileToggle = document.getElementById('mobile-toggle');
const mobileLinks = document.getElementById('mobile-links');

mobileToggle.addEventListener('click',openMobile)
function openMobile(){
  // mobileLinks.classList.remove('mobile-links')
  // mobileLinks.classList.add('open-m')
  if(mobileLinks.classList.contains('mobile-links')){
    mobileLinks.classList.remove('mobile-links')
    mobileLinks.classList.add('open-m')
  }else{
    mobileLinks.classList.add('mobile-links')
    mobileLinks.classList.remove('open-m')
  }
}
const box = document.getElementById('bg-box');
const card1 = document.getElementById('card-1');
const card2 = document.getElementById('card-2');
const card3 = document.getElementById('card-3');
const original = box.style.backgroundColor;
const textArea = document.getElementById('text-area')
const cardArea = document.getElementById('cardArea')
const cards = document.querySelectorAll('.card');

card1.addEventListener('mouseover',changeColor1);
card1.addEventListener('mouseleave',originalC);
card2.addEventListener('mouseover',changeColor2);
card2.addEventListener('mouseleave',originalC);
card3.addEventListener('mouseover',changeColor3);
card3.addEventListener('mouseleave',originalC);

function changeColor1(){
        box.style.backgroundColor = '#fffb0051'  
}
function changeColor2(){
    box.style.backgroundColor = 'rgba(0,195,255,0.5)'
    textArea.classList.remove('card-3-txt')
    textArea.classList.add('card-2-txt')
}
function changeColor3(){
    box.style.backgroundColor = 'rgba(217, 5, 5,0.5)'
    textArea.classList.remove('card-2-txt')
    textArea.classList.add('card-3-txt')
}
function originalC(){
    box.style.backgroundColor = original;
    textArea.classList.remove('card-3-txt','card-2-txt')
    textArea.classList.add('txt-normal');
}

/*HOME SLIDER*/ 
let ac = document.getElementById('ac')
let elden = document.getElementById('elden')
let forza = document.getElementById('forza')
let acSpan = document.getElementById('acSpan')
let eldenSpan = document.getElementById('eldenSpan')
let forzaSpan = document.getElementById('forzaSpan')


acSpan.addEventListener('click',acFunction );

function acFunction() {
  elden.classList.remove('active-slider');
  forza.classList.remove('active-slider');
  ac.classList.add('active-slider');
  eldenSpan.classList.remove('activeSpan')
  forzaSpan.classList.remove('activeSpan');
  acSpan.classList.add('activeSpan');
}
  eldenSpan.addEventListener('click',eldenFunction);
  function eldenFunction(){
    ac.classList.remove('active-slider');
    forza.classList.remove('active-slider');
    elden.classList.add('active-slider');
    acSpan.classList.remove('activeSpan');
    forzaSpan.classList.remove('activeSpan');
    eldenSpan.classList.add('activeSpan')
  }
  forzaSpan.addEventListener('click', forzaFunction);

  function forzaFunction() {
    ac.classList.remove('active-slider');
    elden.classList.remove('active-slider');
    forza.classList.add('active-slider');
    acSpan.classList.remove('activeSpan');
    eldenSpan.classList.remove('activeSpan');
    forzaSpan.classList.add('activeSpan')
  }



const leftArrow = document.getElementById('l-arrow');
const rightArrow = document.getElementById('r-arrow');

leftArrow.addEventListener('click', function () {
  if (ac.classList.contains('active-slider')) {
    forzaFunction();
  } else if (elden.classList.contains('active-slider')) {
    acFunction();
  } else if (forza.classList.contains('active-slider')) {
    eldenFunction();
  }
});

rightArrow.addEventListener('click', function () {
  if (ac.classList.contains('active-slider')) {
    eldenFunction();
  } else if (elden.classList.contains('active-slider')) {
    forzaFunction();
  } else if (forza.classList.contains('active-slider')) {
    acFunction();
  }
});




/*HOME SLIDER END*/ 