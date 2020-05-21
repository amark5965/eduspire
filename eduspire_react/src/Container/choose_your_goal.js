import React,{useEffect} from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery'
function ChooseGoal(){
  useEffect(()=>{
    var lastId,
     topMenu = $(".sidebar ul"),
     topMenuHeight = topMenu.outerHeight()+150,
     // All list items
     menuItems = topMenu.find("a"),
     // Anchors corresponding to menu items
     scrollItems = menuItems.map(function(){
         var currentLink = $(this);
       var item = $(currentLink.attr('href'));
       if (item.length) { return item; }
     });

     // Bind click handler to menu items
     // so we can get a fancy scroll animation
     menuItems.click(function(e){
       var href = $(this).attr("href")
        var offsetTop = href == "#" ? 0 : $(href).offset().top-95;
       $('html, body').stop().animate({
           scrollTop: offsetTop
       }, 300);
       e.preventDefault();
     });

     // Bind to scroll
     $(window).scroll(function(){
        // Get container scroll position
        var fromTop = $(this).scrollTop()+topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function(){
          if ($(this).offset().top < fromTop)
            return this;
        });
        // Get the id of the current element
        cur = cur[cur.length-1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems.parent().removeClass("active").end().filter("[href='#"+id+"']").parent().addClass("active");
        }
     });
  })

	return(
            <section class="inner_cont">
                <div class="container">
                    <div class="ch_goal">
                        <h3>Choose your goal</h3>
                    </div>

                    <div class="sidebar_ar">
                        <div class="box l sticky-top">
                            <div class="sidebar">
                                <ul>
                                    <li>
                                        <a href="#upsc">UPSC</a>
                                    </li>
                                    <li>
                                        <a href="#ssc_bank">SSC and Bank Exams</a>
                                    </li>
                                    <li>
                                        <a href="#jee_neet">JEE and NEET Preparation</a>
                                    </li>
                                    <li>
                                        <a href="#cbse">CBSE</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="box r">
                            <div class="cont_ar" id="upsc">
                                <h4>UPSC</h4>
                                <div class="card_l">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_upse_1.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>UPSC CSE</h4>
                                                    <p>14.8k courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cont_ar" id="ssc_bank">
                                <h4>SSC and Bank Exams</h4>
                                <div class="card_l">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_ssc_1.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>Bank Exams</h4>
                                                    <p>9.2k courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_ssc_2.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>SSE Exams</h4>
                                                    <p>13.6k courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cont_ar" id="jee_neet">
                                <h4>JEE and NEET Preparation</h4>
                                <div class="card_l">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_jee_1.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>IIT JEE</h4>
                                                    <p>5.8k courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_jee_2.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>NEET UG</h4>
                                                    <p>4.6k courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_jee_3.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>Foundation & NTSE</h4>
                                                    <p>1.1k courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="cont_ar" id="cbse">
                                <h4>CBSE</h4>
                                <div class="card_l">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_cbse_1.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>CBSE Class 10</h4>
                                                    <p>1.8k courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_cbse_1.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>CBSE Class 11</h4>
                                                    <p>2.1k courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_cbse_1.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>CBSE Class 9</h4>
                                                    <p>1.1k courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_cbse_1.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>CBSE Class 12</h4>
                                                    <p>3.3k courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_cbse_2.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>CBSE Class 6</h4>
                                                    <p>27 courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_cbse_2.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>CBSE Class 7</h4>
                                                    <p>26 courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                        <div class="col-md-4">
                                            <Link to="/" class="box">
                                                <div class="add_icon"><i class="fas fa-plus"></i></div>
                                                <div class="icon">
                                                    <img src="images/icon_cbse_2.png" alt="" />
                                                </div>
                                                <div class="desc">
                                                    <h4>CBSE Class 8</h4>
                                                    <p>27 courses</p>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
}
export default ChooseGoal