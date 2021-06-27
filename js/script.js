const slide=document.querySelector('.slide');
const slideW=document.querySelector('.slide-w');
const house=document.querySelector('.house'); 
const houseOptn=document.querySelector('.houseOptn'); 

house.addEventListener('mouseenter',()=>{
    houseOptn.classList.add('houseHover');
});
house.addEventListener('mouseleave',()=>{
    houseOptn.classList.remove('houseHover');
}); 
 
function animeload(){
    slide.classList.add('active');
    setTimeout(()=>{
        animestop();
    },1000);
}

function animestop(){
    slide.classList.remove('active');
    slideW.classList.add('active');
    setTimeout(()=>{ 
        slideW.classList.remove('active'); 
    },1000);
} 

/**slider */
const sliderContainer = document.querySelector('.slider-container')
const slideRight = document.querySelector('.right-slide')
const slideLeft = document.querySelector('.left-slide')
const upButton = document.querySelector('.up-button')
const downButton = document.querySelector('.down-button')
const slidesLength = slideRight.querySelectorAll('div').length

let activeSlideIndex = 0

slideLeft.style.top = `-${(slidesLength - 1) * 100}vh`

upButton.addEventListener('click', () => changeSlide('up'))
downButton.addEventListener('click', () => changeSlide('down'))

const changeSlide = (direction) => {
    const sliderHeight = sliderContainer.clientHeight
    if(direction === 'up') {
        activeSlideIndex++
        if(activeSlideIndex > slidesLength - 1) {
            activeSlideIndex = 0
        }
    } else if(direction === 'down') {
        activeSlideIndex--
        if(activeSlideIndex < 0) {
            activeSlideIndex = slidesLength - 1
        }
    }

    slideRight.style.transform = `translateY(-${activeSlideIndex * sliderHeight}px)`
    slideLeft.style.transform = `translateY(${activeSlideIndex * sliderHeight}px)`
}




 

// Setting up the Variables
var bars = document.getElementById("nav-action");
var nav = document.getElementById("nav");


//setting up the listener
bars.addEventListener("click", barClicked, false); 
bars.addEventListener("click", myfunc1); 
function myfunc1(){
    document.querySelector('main').style.paddingTop="50rem"
} 

//setting up the clicked Effect
function barClicked() {
  bars.classList.toggle('active');
  nav.classList.toggle('visible');
}
 
const mainmenu = document.querySelector('.mainmenu'); 
function show(){ 
    mainmenu.style.display = 'flex';
    mainmenu.style.top = '0'; 
}
function close(){ 
    mainmenu.style.display= 'none'; 
}