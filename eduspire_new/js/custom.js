$(document).ready(function() {
  wow = new WOW(
    {
    animateClass: 'animated',
    offset:       100,
    callback:     function(box) {
      console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
    }
  );
  wow.init();



  $('.navbar-toggler').on('click', function(){
    $('.mobile_bg').fadeIn(function(){
      $('.navbar-collapse').animate({'right':'0'});
    });
    $('body').addClass('bfix');
  });
  $('.close_icon, .mobile_bg').on('click', function(){
    $('.navbar-collapse').animate({'right':'-280px'});
    $('.mobile_bg').fadeOut(1000);
    $('body').removeClass('bfix');
  });

  
  $('#course_slider, #stud_slider').owlCarousel({
      loop:false,
      nav:true,
      items:5,
      margin:15,
      dots:true,
      mouseDrag: true,
      navigation:true,
      navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      autoplay:false,
      autoplayTimeout:2000,
      smartSpeed: 300,
      responsive:{
          0:{
              items:2
          },
          1000:{
              items:5
          }
      }
  });

  $('body').on('mouseenter mouseleave','.dropdown',function(e){
    var _d=$(e.target).closest('.dropdown');
    if (e.type === 'mouseenter')_d.addClass('show');
    setTimeout(function(){
      _d.toggleClass('show', _d.is(':hover'));
      $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
    },0);
  });

  $('.trans_educ .educ_box .box .vdo').click(function() {
    $(this).addClass('play_i');
    $('#cours_vd')[0].play();
  });


  $(".course_slider .owl-item").hover(
    function () {
      $(this).addClass("expand");
    },
    function () {
      $(this).removeClass("expand");
    }
  );


  $('body').on('hidden.bs.modal', '.modal', function () {
      $('video').trigger('pause');
  });

  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
      $($(e.target).attr('href'))
          .find('.owl-carousel')
          .owlCarousel('invalidate', 'width')
          .owlCarousel('update')
  });
});


$(document).ready(function ($) {
  $('#pills-tab[data-mouse="hover"] a').hover(function(){
    $(this).tab('show');
  });
  $('a[data-toggle="pill"]').on('shown.bs.tab', function (e) {
    var target = $(e.relatedTarget).attr('href');
    $(target).removeClass('active');
  });
  $('.counting').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');
    
    $({ countNum: $this.text()}).animate({
      countNum: countTo
    },

    {

      duration: 3000,
      easing:'linear',
      step: function() {
        $this.text(Math.floor(this.countNum));
      },
      complete: function() {
        $this.text(this.countNum);
        //alert('finished');
      }

    });  
  });
});

$(window).scroll(function() {    
  var scroll = $(window).scrollTop();

  if (scroll >= 1) {
    $("body").addClass("headerfix");
  } else {
    $("body").removeClass("headerfix");
  }
});


$(document).ready(function() {
    var ktooltips = document.querySelectorAll(".course_slider .item");
    ktooltips.forEach(function(ktooltip, index){                // For each ktooltip
      ktooltip.addEventListener("mouseover", position_tooltip); // On hover, launch the function below
    })

    function position_tooltip(){
      // Get .ktooltiptext sibling
      var tooltip = this.parentNode.querySelector(".course_slider .item .slide_pop");
      
      // Get calculated ktooltip coordinates and size
      var ktooltip_rect = this.getBoundingClientRect();

      var tipX = ktooltip_rect.width + 5; // 5px on the right of the ktooltip
      var tipY = -40;                     // 40px on the top of the ktooltip
      // Position tooltip
      tooltip.style.top = tipY + 'px';
      tooltip.style.left = tipX + 'px';

      // Get calculated tooltip coordinates and size
      var tooltip_rect = tooltip.getBoundingClientRect();
      // Corrections if out of window
      if ((tooltip_rect.x + tooltip_rect.width) > window.innerWidth) // Out on the right
        tipX = -tooltip_rect.width - 5;  // Simulate a "right: tipX" position
      if (tooltip_rect.y < 0)            // Out on the top
        tipY = tipY - tooltip_rect.y;    // Align on the top

      // Apply corrected position
      tooltip.style.top = tipY + 'px';
      tooltip.style.left = tipX + 'px';
    }
});

