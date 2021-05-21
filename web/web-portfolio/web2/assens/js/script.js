// dark mode
window.console = window.console || function(t) {};
if (document.location.search.match(/type=embed/gi)) {
  window.parent.postMessage("resize", "*");
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark'); //add this
    }
    else {
        document.documentElement.setAttribute('data-theme', 'light');
    }    
}
toggleSwitch.addEventListener('change', switchTheme, false);

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// FULL SCREEN
(function (){
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
})();

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

// skillbar

(function() {

  var SkillsBar = function(bars) {
    this.bars = document.querySelectorAll(bars);
    if (this.bars.length > 0) {
      this.init();
    }
  };

  SkillsBar.prototype = {
    init: function() {
      var self = this;
      self.index = -1;
      self.timer = setTimeout(function() {
        self.action();
      }, 500);


    },
    select: function(n) {
      var self = this,
        bar = self.bars[n];

      if (bar) {
        var width = bar.parentNode.dataset.percent;

        bar.style.width = width;
        bar.parentNode.classList.add("complete");
      }
    },
    action: function() {
      var self = this;
      self.index++;
      if (self.index == self.bars.length) {
        clearTimeout(self.timer);
      } else {
        self.select(self.index);
      }

      setTimeout(function() {
        self.action();
      }, 500);
    }
  };

  window.SkillsBar = SkillsBar;

})();

(function() {
  document.addEventListener("DOMContentLoaded", function() {
    var skills = new SkillsBar(".skillbar-bar");
  });
})();


// AOS
(function () {
  AOS.init();
})();

// page scrool

(function (){

  $('.page-scrool').on('click', function(e) {

    var tujuan = $(this).attr('href');

    var elementTujuan = $(tujuan);

    $('body').animate({

      scrollTop: elementTujuan.offset().top -150

    }, 1250, 'EaseInOutExpo');

    e.preventDefault();

  });
})();