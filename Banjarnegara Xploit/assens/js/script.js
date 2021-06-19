$(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });
 
 

(function (){
 
//mencari button scroll to top
mybutton = document.getElementById("myBtn");

// mencari navbar
var myNav = document.getElementById('navbar');

// When the user scrolls down 20px
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
    myNav.style.background = "black";
  } else {
    mybutton.style.display = "none";
    myNav.style.background = "transparent";
  }
};


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

})();

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
});
// end preload

// aos
(function() {
  AOS.init();
})();
// aos
