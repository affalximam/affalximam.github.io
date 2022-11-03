// navbar-custom

(function(){
  if( $('.navbar-custom') > $('.about')) {
	  $('.navbar-custom').css({
	    'background-color':'#00ccff00'
	  });
  }
  else if($('.navbar-custom') < $('.jumbotron')){
    $('.navbar-custom').css({
      'background-color' : 'transparent'
    });
  }
  else{
	  $('.navbar-custom').css({
	    'background-color':'rgba(0,0,0,.7)'
	  });
  }
})();

// animation on scroll

(function() {
  AOS.init();
})();

// JumbotronScroll

(function() {
  
    $(window).scroll(function() {

    var JumbotronScroll = $(this).scrollTop();

    $('.jumbotron h1').css({
      'transform': 'translate(0px, '+ JumbotronScroll/4 +'%)'
    });

    $('.jumbotron .jumbotron-logo').css({
      'transform': 'translate(0px, '+ JumbotronScroll/8 +'%)'
    });

    $('.jumbotron a.btn').css({
      'transform': 'translate(0px, '+ JumbotronScroll/4 +'%)'
    });
    

  });
})();

// page scroll
(function(){

  $('.page-scroll').on('click', function(e) {

    // ambil isi href
    var tujuan = $(this).attr('href');

    // ambil element yang bersangkutan

    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('body').animate({
      scrollTop: elemenTujuan.offset().top - 100
    }, 1250, 'EaseInOutExpo');
    
    e.preventDefault();
    
  });
})();

// FULL SCREEN
document.getElementById("full-screen").addEventListener("click", function(e) {
  toggleFullScreen();
}, false);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    }
  }
}

// music

function play() {

  var audio = document.getElementById('lagu');
  audio.play();

}

function liat() {

  document.getElementById('galiat').style.visibility = 'visible';

}

function pause() {

  var audio = document.getElementById('lagu');
  audio.pause();

}

function liat() {

  document.getElementById('galiat').style.visibility = 'visible';

}

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



// preload
var overlay = document.getElementById("overlay"); /* untuk mengambil elemen berdasarkan id yang ada id html */

window.addEventListener('load', function()
{
	overlay.style.display = 'none';
})
1
2
3
4
5
6
var overlay = document.getElementById("overlay"); /* untuk mengambil elemen berdasarkan id yang ada id html */
 
window.addEventListener('load', function()
{
	overlay.style.display = 'none';
})
// end preload