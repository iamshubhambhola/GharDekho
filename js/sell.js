const slide=document.querySelector('.slide');
const slideW=document.querySelector('.slide-w');
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

document.querySelector('button').addEventListener('click',()=>{
    alert('Form Submitted successfully! We will get back to you shortly!');
});

var $input;

function onInputFocus(event) {
  var $target = $(event.target);
  var $parent = $target.parent();
  $parent.addClass('input--filled');
};

function onInputBlur(event) {
  var $target = $(event.target);
  var $parent = $target.parent();

  if (event.target.value.trim() === '') {
    $parent.removeClass('input--filled');
  }
};

$(document).ready(function() {
  $input = $('.input__field');
  
  // in case there is any value already
  $input.each(function(){
    if ($input.val().trim() !== '') {
      var $parent = $input.parent();
      $parent.addClass('input--filled');
    }
  });
  
  $input.on('focus', onInputFocus);
  $input.on('blur', onInputBlur);
});
