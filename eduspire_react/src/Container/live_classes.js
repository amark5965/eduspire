import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery'
const responsive={
  320:{items:1},
  480:{items:1},
  600:{items:3},
  960:{items:3},
  1200:{items:3}
  }
class LiveClasses extends React.Component{
	render()
	{
	return(    <section class="inner_cont">
        <div class="container">
            <div class="sidebar_ar">
                <div class="box l sticky-top">
                    <div class="sidebar">
                        <ul>
                            <li>
                                <a href="index.html"><h4>Home</h4></a>
                            </li>
                            <li>
                                <a href="javascript:;">My Schedule</a>
                            </li>
                            <li>
                                <a href="javascript:;">Enrolled courses</a>
                            </li>
                            <li>
                                <a href="javascript:;">Syllabus</a>
                            </li>
                            <li>
                                <a href="javascript:;">Test series</a>
                            </li>
                            <li>
                                <a href="javascript:;"><h4>Free classes & tests</h4></a>
                            </li>
                            <li>
                                <a href="javascript:;"><h4>Quick courses</h4></a>
                            </li>
                            <li>
                                <a href="javascript:;">My library</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="box r">
                    <div class="live_cls_ttl">
                        <h3><span class="icon"><img src="images/icon_cbse_1.png" alt="" /></span> CBSE Class 10</h3>
                    </div>

                    <div class="watch_ar">
                        <div class="row">
                            <div class="col-md-6 col-sm-6">
                                <div class="bx l">
                                    <div class="desc">
                                        <p class="t">Unacademy UPSC Championship [All India Free Mock for Prelims 2020]</p>
                                        <h3>All India Free Full-Length Mock Test -3- Analysis By G Rajput Sir (English+Hindi)</h3>
                                        <p>Lesson 12 · Apr 26</p>
                                        <div class="buttons">
                                            <button class="btndefault big"><i class="fas fa-play"></i> Watch now</button>
                                            <button class="btndefault big nobg"><i class="fas fa-share"></i> Share</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-sm-6">
                                <div class="bx r">
                                    <div class="img">
                                        <img src="images/img_live_classes.jpg" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="live_l_ar">
                        <div class="tchr_ttl">
                            <h2>Live now</h2>
                            <a href="javascript:;" class="v_all">See all</a>
                        </div>
                        <div class="live_n_l">
                            <OwlCarousel
                                className=""
                                loop={false}
                                nav={true}
                                items={3}
                                margin={20}
                                dots={false}
                                mouseDrag={true}
                                navigation={true}
                                autoplay={false}
                                autoplayTimeout={2000}
                                smartSpeed={300}
                                navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                                responsive={responsive}
                             >
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_now_1.jpg" alt="" />
                                            <span class="live">Live</span>
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">English</span> <span class="sj">Ancient history</span></p>
                                                <h3>Ancient Indian History MCQ - Part 8</h3>
                                                <p>Lesson 1 • Started at 8:00 PM</p>
                                            </div>
                                            <p class="note">Ranganathan SVN Kondala</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_now_2.jpg" alt="" />
                                            <span class="live">Live</span>
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Indian Geography</span></p>
                                                <h3>Discussion on Northern Mountains of India</h3>
                                                <p>Lesson 1 • Started at 8:30 PM</p>
                                            </div>
                                            <p class="note">Sudarshan Gurjar</p>
                                        </div>
                                    </a>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>

                    <div class="live_l_ar">
                        <div class="tchr_ttl">
                            <h2>Test Series</h2>
                            <a href="javascript:;" class="v_all">See all</a>
                        </div>
                        <div class="live_n_l tst_series">
                            <OwlCarousel
                                className=""
                                loop={false}
                                nav={true}
                                items={3}
                                margin={20}
                                dots={false}
                                mouseDrag={true}
                                navigation={true}
                                autoplay={false}
                                autoplayTimeout={2000}
                                smartSpeed={300}
                                navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                                responsive={responsive}
                             >
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="info">
                                            <div class="desc">
                                                <h3>Unacademy UPSC Championship [All India Free Mock for Prelims 2020] </h3>
                                                <p class="free"><span>Free</span></p>
                                            </div>
                                            <p class="note">Test 4 • Mar 9, 9:30 PM</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="info">
                                            <div class="desc">
                                                <h3>Free Mock Tests on UPSC CSE Prelims 2020</h3>
                                                <p class="free"><span>Free</span></p>
                                            </div>
                                            <p class="note">Test 12 • Mar 22, 12:30 AM</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="info">
                                            <div class="desc">
                                                <h3>Free Mock Tests on UPSC CSAT Prelims 2020</h3>
                                                <p class="free"><span>Free</span></p>
                                            </div>
                                            <p class="note">Test 4 • Mar 22, 1:30 AM</p>
                                        </div>
                                    </a>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>

                    <div class="live_l_ar">
                        <div class="tchr_ttl">
                            <h2>Trending</h2>
                            <a href="javascript:;" class="v_all">See all</a>
                        </div>
                        <div class="live_n_l">
                            <OwlCarousel
                                className=""
                                loop={false}
                                nav={true}
                                items={3}
                                margin={20}
                                dots={false}
                                mouseDrag={true}
                                navigation={true}
                                autoplay={false}
                                autoplayTimeout={2000}
                                smartSpeed={300}
                                navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                                responsive={responsive}
                             >
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_trend_1.jpg" alt="" />
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">English</span> <span class="sj">Governance</span></p>
                                                <h3>Chapter wise Polity MCQ series-Day 5-D.P.S.P</h3>
                                                <p>Ended on Apr 11, 2020</p>
                                            </div>
                                            <p class="note">Dr Sidharth Arora</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_trend_2.jpg" alt="" />
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Indian Polity</span></p>
                                                <h3>Detailed Discussion on RBI & Its Functions</h3>
                                                <p>Ended on May 1, 2020</p>
                                            </div>
                                            <p class="note">Bhunesh Sharma</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_trend_3.jpg" alt="" />
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">English</span> <span class="sj">Physical Geography</span></p>
                                                <h3>Discussion on Northern Mountains of India</h3>
                                                <p>Lesson 1 • Started at 8:30 PM</p>
                                            </div>
                                            <p class="note">Sudarshan Gurjar</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_trend_1.jpg" alt="" />
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">English</span> <span class="sj">Governance</span></p>
                                                <h3>Chapter wise Polity MCQ series-Day 5-D.P.S.P</h3>
                                                <p>Ended on Apr 11, 2020</p>
                                            </div>
                                            <p class="note">Dr Sidharth Arora</p>
                                        </div>
                                    </a>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>

                    <div class="live_l_ar">
                        <div class="tchr_ttl">
                            <h2>Upcoming</h2>
                            <a href="javascript:;" class="v_all">See all</a>
                        </div>
                        <div class="live_n_l">
                            <OwlCarousel
                                className=""
                                loop={false}
                                nav={true}
                                items={3}
                                margin={20}
                                dots={false}
                                mouseDrag={true}
                                navigation={true}
                                autoplay={false}
                                autoplayTimeout={2000}
                                smartSpeed={300}
                                navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                                responsive={responsive}
                             >
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_upcming_1.jpg" alt="" />
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Ancient history</span></p>
                                                <h3>Discussion on the 'Important Sites of Harappan Culture'</h3>
                                                <p>Ended on May 1, 2020</p>
                                            </div>
                                            <p class="note">Rinku singh</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_upcming_2.jpg" alt="" />
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">English</span> <span class="sj">Indian Economy</span></p>
                                                <h3>External Sector - Basics & Current issues 1</h3>
                                                <p>Ended on May 1, 2020</p>
                                            </div>
                                            <p class="note">Rahul kumar</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_upcming_3.jpg" alt="" />
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Goverment Periodicals</span></p>
                                                <h3>GOVERNMENT SCHEMES 2020-21 For UPSC CSE (Class 9)</h3>
                                                <p>Ended on May 1, 2020</p>
                                            </div>
                                            <p class="note">Satyam shrivastav</p>
                                        </div>
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_upcming_1.jpg" alt="" />
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Ancient history</span></p>
                                                <h3>Discussion on the 'Important Sites of Harappan Culture'</h3>
                                                <p>Ended on May 1, 2020</p>
                                            </div>
                                            <p class="note">Rinku singh</p>
                                        </div>
                                    </a>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>

                    <div class="live_l_ar">
                        <div class="tchr_ttl">
                            <h2>Featured Educators</h2>
                            <a href="javascript:;" class="v_all">See all</a>
                        </div>
                        <div class="live_n_l feat_educ">
                            <ul div class="row">
                                <li class="col-md-6">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_feat_educ_1.jpg" alt="" />
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <h3>Dr Sidharth Arora <i class="fas fa-check-circle"></i></h3>
                                                <p>Pursued M.B.B.S. and L.L.B. Advocate in Supreme Court. Has been teaching UPSC Aspirants and Law students from last 10 years. </p>
                                            </div>
                                            <div class="likes">
                                                <p><span>13M</span> <span class="txt">Watch mins</span></p>
                                                <p><span>50k</span> <span class="txt">Followers</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="col-md-6">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_feat_educ_2.jpg" alt="" />
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <h3>Mrunal Patel <i class="fas fa-check-circle"></i></h3>
                                                <p>This is Mrunal of Mrunal dot Org</p>
                                            </div>
                                            <div class="likes">
                                                <p><span>13M</span> <span class="txt">Watch mins</span></p>
                                                <p><span>50k</span> <span class="txt">Followers</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="col-md-6">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_feat_educ_3.jpg" alt="" />
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <h3>Roman Saini <i class="fas fa-check-circle"></i></h3>
                                                <p>Part of a great founding team at Unacademy with Gaurav, Hemesh. Movies, Guitar, Books, Teaching. </p>
                                            </div>
                                            <div class="likes">
                                                <p><span>13M</span> <span class="txt">Watch mins</span></p>
                                                <p><span>50k</span> <span class="txt">Followers</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <li class="col-md-6">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_feat_educ_4.jpg" alt="" />
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <h3>Sunil Singh <i class="fas fa-check-circle"></i></h3>
                                                <p>I run Abhivyakti Ias Delhi/Author/Editor Abhivyakti fortnightly magazine </p>
                                            </div>
                                            <div class="likes">
                                                <p><span>13M</span> <span class="txt">Watch mins</span></p>
                                                <p><span>50k</span> <span class="txt">Followers</span></p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>)
	}
}
export default LiveClasses