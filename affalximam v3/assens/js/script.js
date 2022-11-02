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

// aos

(function() {
  AOS.init();
})();


// event pada saat klik

(function() {
  $('.page-scrool').on('click', function(e) {

    // ambil isi href
    var tujuan = $(this).attr('href');

    // ambil element yang bersangkutan

    var elemenTujuan = $(tujuan);

    // pindahkan scroll
    $('body').animate({
      scrollTop: elemenTujuan.offset().top - 100
    }, 1250, 'EaseInOutBack');
    
    e.preventDefault();


  });


  // // jumbotron scroll

  $(window).scroll(function() {

    var JumbotronScroll = $(this).scrollTop();

    $('.jumbotron h1').css({
      'transform': 'translate(0px, '+ JumbotronScroll/4 +'%)'
    });

    $('.jumbotron .lead').css({
      'transform': 'translate(0px, '+ JumbotronScroll/2 +'%)'
    });

    $('.jumbotron a.btn').css({
      'transform': 'translate(0px, '+ JumbotronScroll/4 +'%)'
    });
    

  });
  
  // button
  
  $(window).on('load', function() {
    
    $('.buttonkiri').addClass('buttonshow');
    $('.buttonkanan').addClass('buttonshow');
    
  });
  

})();




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

















































