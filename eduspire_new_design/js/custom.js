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


  // $('.navbar-toggler').on('click', function(){
  //   $('.mobile_bg').fadeIn(function(){
  //     $('.navbar-collapse').animate({'right':'0'});
  //   });
  //   $('body').addClass('bfix');
  // });
  // $('.close_icon, .mobile_bg').on('click', function(){
  //   $('.navbar-collapse').animate({'right':'-280px'});
  //   $('.mobile_bg').fadeOut(1000);
  //   $('body').removeClass('bfix');
  // });

  
  $('#stage_pad_slider, #stage_pad_slider1').owlCarousel({
      stagePadding: 80,
      loop:false,
      nav:true,
      items:2,
      margin:40,
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
              items:2
          }
      }
  });

  $('#learner_test_slider').owlCarousel({
      stagePadding: 150,
      loop:false,
      nav:true,
      items:1,
      margin:30,
      dots:true,
      mouseDrag: true,
      navigation:true,
      navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      autoplay:false,
      autoplayTimeout:2000,
      smartSpeed: 300,
      responsive:{
          0:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

  $('#stage_track_slider').owlCarousel({
      stagePadding: 150,
      loop:false,
      nav:true,
      items:3,
      margin:30,
      dots:true,
      mouseDrag: true,
      navigation:true,
      navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      autoplay:false,
      autoplayTimeout:2000,
      smartSpeed: 300,
      responsive:{
          0:{
              items:3
          },
          1000:{
              items:3
          }
      }
  });

  $('#get_subscr').owlCarousel({
      loop:true,
      nav:false,
      items:1,
      margin:30,
      dots:true,
      mouseDrag: true,
      navigation:false,
      navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      autoplay:false,
      autoplayTimeout:2000,
      smartSpeed: 300,
      responsive:{
          0:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

  $('#live_trending, #live_testseries, #live_now, #live_upcoming').owlCarousel({
      loop:false,
      nav:true,
      items:3,
      margin:20,
      dots:false,
      mouseDrag: true,
      navigation:true,
      navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      autoplay:false,
      autoplayTimeout:2000,
      smartSpeed: 300,
      responsive:{
          0:{
              items:3
          },
          1000:{
              items:3
          }
      }
  });

  // $('body').on('mouseenter mouseleave','.dropdown',function(e){
  //   var _d=$(e.target).closest('.dropdown');
  //   if (e.type === 'mouseenter')_d.addClass('show');
  //   setTimeout(function(){
  //     _d.toggleClass('show', _d.is(':hover'));
  //     $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
  //   },0);
  // });

  // $('.trans_educ .educ_box .box .vdo').click(function() {
  //   $(this).addClass('play_i');
  //   $('#cours_vd')[0].play();
  // });


  // $(".course_slider .owl-item").hover(
  //   function () {
  //     $(this).addClass("expand");
  //   },
  //   function () {
  //     $(this).removeClass("expand");
  //   }
  // );


  // $('body').on('hidden.bs.modal', '.modal', function () {
  //     $('video').trigger('pause');
  // });

  // $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  //     $($(e.target).attr('href'))
  //         .find('.owl-carousel')
  //         .owlCarousel('invalidate', 'width')
  //         .owlCarousel('update')
  // });

  $(function(){
    $(".stage_pad .item .box .info p.sub .sj").each(function(i){
      len=$(this).text().length;
      if(len>20)
      {
        $(this).text($(this).text().substr(0,20)+'...');
      }
    }); 
    $(".live_class .box ul li .info h3").each(function(i){
      len=$(this).text().length;
      if(len>40)
      {
        $(this).text($(this).text().substr(0,28)+'...');
      }
    }); 
    $(".sidebar_ar .watch_ar .bx.l p.t").each(function(i){
      len=$(this).text().length;
      if(len>60)
      {
        $(this).text($(this).text().substr(0,50)+'...');
      }
    }); 
    $(".sidebar_ar .watch_ar .bx.l p.t").each(function(i){
      len=$(this).text().length;
      if(len>60)
      {
        $(this).text($(this).text().substr(0,50)+'...');
      }
    });  
    $(".sidebar_ar .watch_ar .bx.l h3").each(function(i){
      len=$(this).text().length;
      if(len>75)
      {
        $(this).text($(this).text().substr(0,75)+'...');
      }
    });
    $(".live_l_ar .live_n_l .box .info h3").each(function(i){
      len=$(this).text().length;
      if(len>65)
      {
        $(this).text($(this).text().substr(0,65)+'...');
      }
    }); 
    $(".stage_padng.c_soon .item .box .info h3").each(function(i){
      len=$(this).text().length;
      if(len>45)
      {
        $(this).text($(this).text().substr(0,45)+'...');
      }
    });       
  });

   $('body').on('click','.option li',function(){
    var i = $(this).parents('.select_batch').attr('id');
    var v = $(this).children().text();
    var o = $(this).attr('id');
    $('#'+i+' .selected').attr('id',o);
    $('#'+i+' .selected').text(v);
  });
});

function openNav() {
    document.getElementById("mySidenav").style.width = "627px";
    document.getElementById("side_overley").style.width = "100%";
  }

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("side_overley").style.width = "0";
}

function loginnumber() {
    document.getElementById("tel").style.display = "block";
    document.getElementById("email").style.display = "none";
    document.getElementById("cont_code").style.display = "block";
    document.getElementById("log_by_email").style.display = "block";
    document.getElementById("log_by_phone").style.display = "none";
  }

function loginemail() {
    document.getElementById("tel").style.display = "none";
    document.getElementById("email").style.display = "block";
    document.getElementById("cont_code").style.display = "none";
    document.getElementById("log_by_email").style.display = "none";
    document.getElementById("log_by_phone").style.display = "block";
}
function loginacc() {
    document.getElementById("signup_area").style.display = "none";
    document.getElementById("login_area").style.display = "block";
    document.getElementById("signup_note").style.display = "none";
    document.getElementById("login_note").style.display = "block";
  }

function createacc() {
    document.getElementById("signup_area").style.display = "block";
    document.getElementById("login_area").style.display = "none";
    document.getElementById("signup_note").style.display = "block";
    document.getElementById("login_note").style.display = "none";
}

//payment page
function loginnumber_n() {
    document.getElementById("tel1").style.display = "block";
    document.getElementById("email1").style.display = "none";
    document.getElementById("cont_code1").style.display = "block";
    document.getElementById("log_by_email1").style.display = "block";
    document.getElementById("log_by_phone1").style.display = "none";
  }

function loginemail_n() {
    document.getElementById("tel1").style.display = "none";
    document.getElementById("email1").style.display = "block";
    document.getElementById("cont_code1").style.display = "none";
    document.getElementById("log_by_email1").style.display = "none";
    document.getElementById("log_by_phone1").style.display = "block";
}
function loginacc_n() {
    document.getElementById("signup_area1").style.display = "none";
    document.getElementById("login_area1").style.display = "block";
    document.getElementById("signup_note1").style.display = "none";
    document.getElementById("login_note1").style.display = "block";
  }

function createacc_n() {
    document.getElementById("signup_area1").style.display = "block";
    document.getElementById("login_area1").style.display = "none";
    document.getElementById("signup_note1").style.display = "block";
    document.getElementById("login_note1").style.display = "none";
}

// $(document).ready(function(){
//     $("#teacher_video").on('hide.bs.modal', function () {
//       document.getElementById("exp_vdo_play").pause(); 
//       console.log("Video paused");
//     });
//     $("#teacher_video").on('shown.bs.modal', function () {
//       document.getElementById("exp_vdo_play").play(); 
//       console.log("Video play");
//     });
//     $("#student_parent_video").on('hide.bs.modal', function () {
//       document.getElementById("stud_parnt_vdo").pause(); 
//       console.log("Video paused");
//     });
//     $("#student_parent_video").on('shown.bs.modal', function () {
//       document.getElementById("stud_parnt_vdo").play(); 
//       console.log("Video play");
//     });
// });

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

