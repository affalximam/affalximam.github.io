$(function(){ 
     var navMain = $(".navbar-collapse"); // avoid dependency on #id
     // "a:not([data-toggle])" - to avoid issues caused
     // when you have dropdown inside navbar
     navMain.on("click", "a:not([data-toggle])", null, function () {
         navMain.collapse('hide');
     });
 });
 
 
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
});
// end preload

// aos
(function() {
  AOS.init();
})();
// aos
