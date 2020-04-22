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

  function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        
        reader.onload = function (e) {
            $('#stud_thumbnail').attr('src', e.target.result);
        }
        
        reader.readAsDataURL(input.files[0]);
    }
  }

  $("#stud_vimg").change(function(){
      readURL(this);
  });
});

$(function() {
  $(".datepicker").datepicker();
  $('select[multiple]').multiselect();
  $('#langOpt').multiselect({
      columns: 1,
      placeholder: 'Select Languages',
      search: true
  });
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
