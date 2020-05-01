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
  });

});

$(document).ready(function(){
 // let scroll_link = $('.scroll');

 //  //smooth scrolling -----------------------
 //  scroll_link.click(function(e){
 //      e.preventDefault();
 //      let url = $('body').find($(this).attr('href')).offset().top - 95;
 //      $('html, body').animate({
 //        scrollTop : url
 //      },700);
 //      $(this).parent().addClass('active');
 //      $(this).parent().siblings().removeClass('active');
 //      return false; 
 //   });

 var lastId,
    topMenu = $(".sidebar ul"),
    topMenuHeight = topMenu.outerHeight()+50,

    menuItems = topMenu.find("a"),

    scrollItems = menuItems.map(function(){
        var currentLink = $(this);
      var item = $(currentLink.attr('href'));
      if (item.length) { return item; }
    });

  menuItems.click(function(e){
  var href = $(this).attr("href")
      offsetTop = href == "#" ? 0 : $(href).offset().top - 95;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
  });

  $(window).scroll(function(){
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });

   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       
       menuItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
   }                   
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

