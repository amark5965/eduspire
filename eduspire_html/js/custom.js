$(document).ready(function() {
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

  $('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
      $('.home_header').toggleClass('active');
      $('body').toggleClass('sidebar_icon_only');
  });

  $('#login_slide').owlCarousel({
      loop:true,
      nav:false,
      items:1,
      margin:0,
      dots:true,
      mouseDrag: true,
      navigation:false,
      navText : ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      autoplay:true,
      autoplayTimeout:7000,
      smartSpeed: 1500,
      responsive:{
          0:{
              items:1
          },
          1000:{
              items:1
          }
      }
  });

  $("a.l_in").click(function() {
    $("#signin").show();
    $("#signup").hide();
  });
  $("a.s_up").click(function() {
    $("#signin").hide();
    $("#signup").show();
  });

  // $('body').on('mouseenter mouseleave','.dropdown',function(e){
  //   var _d=$(e.target).closest('.dropdown');
  //   if (e.type === 'mouseenter')_d.addClass('show');
  //   setTimeout(function(){
  //     _d.toggleClass('show', _d.is(':hover'));
  //     $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
  //   },300);
  // });

  $(".cat_gal .item").hover(
    function () {
      $(this).addClass("expand");
    },
    function () {
      $(this).removeClass("expand");
    }
  );

  $('.select_lang ul li.option').click(function() {
     // $(this).siblings().addBack().children().remove();
     var a = $(this).siblings().toggle();
     $(this).parent().prepend(this);
   });

   $('.table-responsive').on('show.bs.dropdown', function () {
       $('.table-responsive').css( "overflow", "inherit" );
  });

  $('.table-responsive').on('hide.bs.dropdown', function () {
       $('.table-responsive').css( "overflow", "auto" );
  });

  function getDateTime() {
        var now     = new Date(); 
        var year    = now.getFullYear();
        var month   = now.getMonth()+1; 
        var day     = now.getDate();
        var hour    = now.getHours();
        var minute  = now.getMinutes();
        var second  = now.getSeconds(); 
        if(month.toString().length == 1) {
             month = '0'+month;
        }
        if(day.toString().length == 1) {
             day = '0'+day;
        }   
        if(hour.toString().length == 1) {
             hour = '0'+hour;
        }
        if(minute.toString().length == 1) {
             minute = '0'+minute;
        }
        if(second.toString().length == 1) {
             second = '0'+second;
        }   
        var dateTime = year+'/'+month+'/'+day+' '+hour+':'+minute+':'+second;   
         return dateTime;
    }

    setInterval(function(){
        currentTime = getDateTime();
        document.getElementById("datetime").innerHTML = currentTime;
    }, 1000);
});

// $(document).ready(function(){
//   $('ul.components li a').click(function(e) {
//       $('ul.components li.active').removeClass('active');
//       var $parent = $(this).parent();
//       $parent.addClass('active');
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
