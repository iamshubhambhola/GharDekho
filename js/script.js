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