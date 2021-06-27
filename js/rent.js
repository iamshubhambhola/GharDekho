const slidee=document.querySelector('.slidee');
const slideeW=document.querySelector('.slidee-w');

function animeload(){
    slidee.classList.add('actives');
    setTimeout(()=>{
        animeclose();
    },1000);
}

function animeclose(){
    slidee.classList.remove('actives');
    slideeW.classList.add('actives');
    setTimeout(()=>{ 
        slideeW.classList.remove('actives'); 
    },1000);
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


document.querySelector('.socialclick').addEventListener('click',()=>{
    alert('We are currently not on any social media...just for design purpose!!');
  });

const homelogo=document.querySelector('#homelogo');
homelogo.addEventListener('click',homeGo);
function homeGo(){
    window.location.href="index.html";
}