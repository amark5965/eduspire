import React from 'react';
import Parent from '../Component/Parent';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const responsive={
  320:{items:1},
  480:{items:1},
  600:{items:2},
  960:{items:2},
  1200:{items:2}
  }
const responsive_o={
  320:{items:1},
  480:{items:2},
  600:{items:3},
  960:{items:3},
  1200:{items:3}
  }
class Home extends React.Component{
	render()
	{
	return(<Parent>  

    <section class="home_banner">
        <div class="container">
            <div class="caption">
                <h2>Crack CBSE Class 10 with</h2>
                <h2>India's largest learning platform</h2>
                <p>Get Plus subscription and access unlimited live and recorded courses from India's best educators</p>
                <div class="buttons text-center">
                    <button type="button" class="btndefault big" onClick={()=>{this.props.history.push('/get_subscription')}}>Get Subscription</button>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
    </section>


    <section class="inner_cont hm">
        <div class="container">
            <div class="what_get">
                <h2>What you'll get</h2>
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="box">
                            <div class="icon">
                                <img src="images/icon_what_you_get_1.svg" alt="" />
                            </div>
                            <div class="info">
                                <h3>Daily Live classes</h3>
                                <p>Chat with your educator, engage in discussions, ask your doubts, and answer polls - all while the class is going on</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="box">
                            <div class="icon">
                                <img src="images/icon_what_you_get_2.svg" alt="" />
                            </div>
                            <div class="info">
                                <h3>Live tests & quizzes</h3>
                                <p>Evaluate your preparation with our regular mock tests and quizzes and get detailed analysis on your performance</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="box">
                            <div class="icon">
                                <img src="images/icon_what_you_get_3.svg" alt="" />
                            </div>
                            <div class="info">
                                <h3>Structured courses</h3>
                                <p>All our courses are structured in line with your exam syllabus to help you best prepare for it</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="box">
                            <div class="icon">
                                <img src="images/icon_what_you_get_4.svg" alt="" />
                            </div>
                            <div class="info">
                                <h3>Unlimited access</h3>
                                <p>One subscription gets you access to all our live and recorded courses to watch from the comfort of any of your devices</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="v_pricing">
                    <div class="row">
                        <div class="col-md-6 col-sm-6">
                            <div class="box l">
                                <h3>CBSE Class 10 subscription starts from <span><i class="fas fa-rupee-sign"></i>1,041/month</span></h3>
                            </div>
                        </div>
                        <div class="col-md-6 col-sm-6">
                            <div class="box r">
                                <Link to="/get_subscription" class="v_p">View Pricing</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="live_class">
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="box l">
                            <h2><span>Free</span>Live Classes</h2>
                            <p>Experience Plus for free and start learning from the best</p>
                            <Link to="/live_classes" class="v_all">See all</Link>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="box r">
                            <ul>
                                <li>
                                    <div class="img">
                                        <img src="images/live_class_1.jpg" alt="" />
                                        <i class="far fa-play-circle"></i>
                                        <span>Live</span>
                                    </div>
                                    <div class="info">
                                        <h3>Quiz on Polynomial for class 10th</h3>
                                        <p>Today, 7:00 AM</p>
                                        <p class="nm">Kunal Kishor</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="img">
                                        <img src="images/live_class_2.jpg" alt="" />
                                        <i class="far fa-play-circle"></i>
                                        <span>Live</span>
                                    </div>
                                    <div class="info">
                                        <h3>Kshitij part two [second lesson]</h3>
                                        <p>Today, 7:00 AM</p>
                                        <p class="nm">Chandan Sharma</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="img">
                                        <img src="images/live_class_3.jpg" alt="" />
                                        <i class="far fa-play-circle"></i>
                                        <span>Live</span>
                                    </div>
                                    <div class="info">
                                        <h3>RS AGGARWAL CLASS 10 TEST CH-9</h3>
                                        <p>Today, 7:30 PM</p>
                                        <p class="nm">Priyanka Gupta</p>
                                    </div>
                                </li>
                                <li>
                                    <div class="img">
                                        <img src="images/live_class_4.jpg" alt="" />
                                        <i class="far fa-play-circle"></i>
                                        <span>Live</span>
                                    </div>
                                    <div class="info">
                                        <h3>Discussion On Allotropes Of carbon</h3>
                                        <p>Today, 11:30 PM</p>
                                        <p class="nm">Umo</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="stage_padng">
                <div class="sldr_ttl">
                    <h2>Prepare with Top Educators</h2>
                    <p>Access to India's best educators is just a subscription away</p>
                    <Link to="/top_educator" class="v_all">See all</Link>
                </div>
                <div class="stage_pad">
                    <OwlCarousel
                        className=""
                        stagePadding={80}
                        loop={false}
                        nav={true}
                        items={2}
                        margin={40}
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
                                    <img src="images/top_educator_1.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <h3>Devinder Singh Anand</h3>
                                        <p>I am providing specialised coaching for all competitive exams like IAS, CLAT CDS NDA SSC UGC NET etc. for more than 5 years.</p>
                                    </div>
                                    <p class="note">Teaches Current Affairs and 18 more</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/top_educator_2.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <h3>Dr Bhawna Aggarwal</h3>
                                        <p>Plus Educator on Eduspire| Full time Tutor| 3+ years of teaching experience | Explorer | Teaching is passion| Counsellor</p>
                                    </div>
                                    <p class="note">Teaches CTET Paper 1 and 17 more</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/top_educator_3.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <h3>Ankit Dhingra</h3>
                                        <p>✨B.Sc(H) in Chemistry ✨B.Ed ✨Pursuing M.Sc.(Chem) ✨Follow me for IX, X, XI, XII, IIT-JEE</p>
                                    </div>
                                    <p class="note">Teaches Chemistry and 13 more</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/top_educator_4.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <h3>Sikandar Baig</h3>
                                        <p>Experience - 5+ I am Social Science Faculty Presently Working in  Kota(Kashi of Education) Rajasthan</p>
                                    </div>
                                    <p class="note">Teaches Social Science and 8 more</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/top_educator_5.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <h3>Parshant Kumar</h3>
                                        <p>Pure mathematics ,freelancer   , movies and movies</p>
                                    </div>
                                    <p class="note">Teaches Mathematics and 6 more</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/top_educator_6.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                    <h3>Deepak</h3>
                                        <p>I've been teaching CBSE students for last 32 & DEFENCE aspirants for last 12+ years. So don't hesitate to turn your learning into 100% </p>
                                    </div>
                                    <p class="note">Teaches Mathematics and 40 more</p>
                                </div>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div class="stage_padng c_soon h_batch">
                <div class="sldr_ttl">
                    <h2>Batches for syllabus completion</h2>
                    <p>Boost your exam preparation with extensive courses by the best educators</p>
                    <Link to="/batches" class="v_all">See all</Link>
                </div>
                <div class="stage_pad">
                    <OwlCarousel
                        className="owl-carousel"
                        stagePadding={80}
                        loop={false}
                        nav={true}
                        items={2}
                        margin={40}
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
                                    <img src="images/home_batch1.jpg" alt="" />
                                    <div class="batch_icn">
                                        <span class="ar"></span>
                                        <span class="btch">Batch</span>
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">English</span></p>
                                        <h3>Mission UPSC CSE 2021: 2 year Batch Course - Part II</h3>
                                        <p>Started on Mar 29</p>
                                    </div>
                                    <p class="note">Anil tripathi</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/home_batch2.jpg" alt="" />
                                    <div class="batch_icn">
                                        <span class="ar"></span>
                                        <span class="btch">Batch</span>
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span></p>
                                        <h3>One Year Batch Course for UPSC CSE 2021: March (Hindi) - Part II</h3>
                                        <p>Started on Mar 29</p>
                                    </div>
                                    <p class="note">Sonu singh</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/home_batch3.jpg" alt="" />
                                    <div class="batch_icn">
                                        <span class="ar"></span>
                                        <span class="btch">Batch</span>
                                    </div>
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Abhishek</p>
                                </div>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div class="stage_padng c_soon">
                <div class="sldr_ttl">
                    <h2>Courses starting soon</h2>
                    <p>Enroll in upcoming courses that best suit your schedule and exam syllabus</p>
                    <Link to="/upcoming_courses" class="v_all">See all</Link>
                </div>
                <div class="stage_pad">
                    <OwlCarousel
                        className=""
                        stagePadding={80}
                        loop={false}
                        nav={true}
                        items={2}
                        margin={40}
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
                                    <img src="images/course_soon_1.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">English</span> <span class="sj">Mathematics</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Deepak</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/course_soon_2.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Mathematics</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Prakash raaj</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/course_soon_3.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Hindi</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Sulochna</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/course_soon_4.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Social Science</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Deepak</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/course_soon_5.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Mathematics</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Deepak</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/course_soon_6.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Chemical Substances - Nature and Behaviour</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Deepak</p>
                                </div>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div class="stage_padng c_soon h_recent">
                <div class="sldr_ttl">
                    <h2>Recently started courses</h2>
                    <p>Start learning live from the best of our ongoing courses</p>
                    <Link to="/recently_started_course" class="v_all">See all</Link>
                </div>
                <div class="stage_pad">
                    <OwlCarousel
                        className=""
                        stagePadding={80}
                        loop={false}
                        nav={true}
                        items={2}
                        margin={40}
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
                                    <img src="images/h_recent1.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">English</span> <span class="sj">Polity - NCERT Summary</span></p>
                                        <h3>Foundation Course on Polity through NCERTs</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Sunil singh</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/h_recent2.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Mathematics</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Aditya pandey</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/h_recent3.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Hindi</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Sachin</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/h_recent1.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">English</span> <span class="sj">Mathematics</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Deepak</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/h_recent2.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Mathematics</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Deepak</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/h_recent3.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Hindi</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Deepak</p>
                                </div>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div class="stage_padng c_soon h_popular">
                <div class="sldr_ttl">
                    <h2>Best of all time</h2>
                    <p>Get unlimited access to popular past courses from our top educators</p>
                    <Link to="/popular_courses" class="v_all">See all</Link>
                </div>
                <div class="stage_pad">
                    <OwlCarousel
                        className=""
                        stagePadding={80}
                        loop={false}
                        nav={true}
                        items={2}
                        margin={40}
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
                                    <img src="images/h_popular1.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">English</span> <span class="sj">Polity - NCERT Summary</span></p>
                                        <h3>Foundation Course on Polity through NCERTs</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Sunil singh</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/h_popular2.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Mathematics</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Aditya pandey</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/h_popular3.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Hindi</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Sachin</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/h_recent1.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">English</span> <span class="sj">Mathematics</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Deepak</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/h_recent2.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Mathematics</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Deepak</p>
                                </div>
                            </a>
                        </div>
                        <div class="item">
                            <a href="javascript:;" class="box">
                                <div class="img">
                                    <img src="images/h_recent3.jpg" alt="" />
                                </div>
                                <div class="info">
                                    <div class="desc">
                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Hindi</span></p>
                                        <h3>DComplete Course on Polynomials</h3>
                                        <p>Starts on May 2, 2020 • 7 lessons</p>
                                    </div>
                                    <p class="note">Deepak</p>
                                </div>
                            </a>
                        </div>
                    </OwlCarousel>
                </div>
            </div>
            
            <div class="stage_padng syllabus">
                <div class="sldr_ttl">
                    <h2>Comprehensive syllabus</h2>
                    <p>Our courses provide complete coverage of the topics you need to be prepared for</p>
                    <Link to="/comprehensive_syllabus" class="v_all">See all</Link>
                </div>
                <div class="stage_pad">
                    <div class="syllabus">
                        <div class="row">
                            <div class="col-md-3 col-sm-3">
                                <a href="javascript:;" class="box one">
                                    <div class="ttl">
                                        <h3>Mathematics</h3>
                                        <p>6 courses</p>
                                    </div>
                                    <div class="desc">
                                        <p>NUMBER SYSTEMS, Algebra, Coordinate Geometry and more</p>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <a href="javascript:;" class="box two">
                                    <div class="ttl">
                                        <h3>Social Science</h3>
                                        <p>5 courses</p>
                                    </div>
                                    <div class="desc">
                                        <p>Democratic Politics - II, Contemporary India - II, India and the Contemporary World - II and more</p>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <a href="javascript:;" class="box three">
                                    <div class="ttl">
                                        <h3>Science</h3>
                                        <p>4 courses</p>
                                    </div>
                                    <div class="desc">
                                        <p>Chemical Substances - Nature and Behaviour, World of Living, Natural Phenomena and more</p>
                                    </div>
                                </a>
                            </div>
                            <div class="col-md-3 col-sm-3">
                                <a href="javascript:;" class="box four">
                                    <div class="ttl">
                                        <h3>Hindi</h3>
                                        <p>3 courses</p>
                                    </div>
                                    <div class="desc">
                                        <p>Grammar, Kshitij, Practice and Strategy and more</p>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="stage_padng track_prep">
                <div class="sldr_ttl">
                    <h2>Track your preparation</h2>
                    <p>Evaluate your progress with our Mock Tests and detailed results analysis</p>
                    <Link to="/test_series" class="v_all">See all</Link>
                </div>
                <div class="stage_pad">
                    <OwlCarousel
                        className=""
                        stagePadding={150}
                        loop={false}
                        nav={true}
                        items={3}
                        margin={40}
                        dots={false}
                        mouseDrag={true}
                        navigation={true}
                        autoplay={false}
                        autoplayTimeout={2000}
                        smartSpeed={300}
                        navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                        responsive={responsive_o}
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
            <div class="side_scroll_ar">
                <div class="box l sticky-top">
                    <h2>The best way to prepare for CBSE Class 10</h2>
                    <Link to="/get_subscription" class="v_all">Get Subscription</Link>
                </div>
                <div class="box r">
                    <ul>
                        <li>
                            <div class="vd_ar">
                                <video autoplay muted loop>
                                    <source src="images/video/vdo_1.mp4" type="video/mp4" />
                                    <source src="images/video/vdo_1.webm" type="video/webm" />
                                </video>
                            </div>
                            <div class="desc">
                                <h3>Schedule that works for you</h3>
                                <p>Enroll in unlimited courses, get a personalised schedule and never miss a live class with our timely reminders</p>
                            </div>
                        </li>
                        <li>
                            <div class="vd_ar">
                                <video autoplay muted loop>
                                    <source src="images/video/vdo_2.mp4" type="video/mp4" />
                                    <source src="images/video/vdo_2.webm" type="video/webm" />
                                </video>
                            </div>
                            <div class="desc">
                                <h3>No Language barrier</h3>
                                <p>Our educators teach in English, Hindi, Malayalam, Tamil and 12 other languages, so language is never a barrier</p>
                            </div>
                        </li>
                        <li>
                            <div class="vd_ar">
                                <video autoplay muted loop>
                                    <source src="images/video/vdo_3.mp4" type="video/mp4" />
                                    <source src="images/video/vdo_3.webm" type="video/webm" />
                                </video>
                            </div>
                            <div class="desc">
                                <h3>Learn anytime, anywhere</h3>
                                <p>Watch our recorded classes, online or offline from the comfort of your mobile, PC or tablet</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="side_scroll_ar">
                <div class="box l sticky-top">
                    <h2>Feels like you are in the classroom</h2>
                    <Link to="/get_subscription" class="v_all">Get Subscription</Link>
                </div>
                <div class="box r">
                    <ul>
                        <li>
                            <div class="vd_ar">
                                <video autoplay muted loop>
                                    <source src="images/video/vdo_4.mp4" type="video/mp4" />
                                    <source src="images/video/vdo_4.webm" type="video/webm" />
                                </video>
                            </div>
                            <div class="desc">
                                <h3>Interact with your educator</h3>
                                <p>Chat with the educator, engage in discussions and ask your questions - all while the class is going on</p>
                            </div>
                        </li>
                        <li>
                            <div class="vd_ar">
                                <video autoplay muted loop>
                                    <source src="images/video/vdo_5.mp4" type="video/mp4" />
                                    <source src="images/video/vdo_5.webm" type="video/webm" />
                                </video>
                            </div>
                            <div class="desc">
                                <h3>Answer live polls</h3>
                                <p>Participate in live polls by the educator in class and compete for a place in the leaderboard</p>
                            </div>
                        </li>
                        <li>
                            <div class="vd_ar">
                                <video autoplay muted loop>
                                    <source src="images/video/vdo_6.mp4" type="video/mp4" />
                                    <source src="images/video/vdo_6.webm" type="video/webm" />
                                </video>
                            </div>
                            <div class="desc">
                                <h3>Get your doubts cleared</h3>
                                <p>Ask your doubts and get them answered immediately by the educator during classes</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="side_scroll_ar">
                <div class="box l sticky-top">
                    <h2>A subscription that's more than just classes</h2>
                    <Link to="/get_subscription" class="v_all">Get Subscription</Link>
                </div>
                <div class="box r">
                    <ul>
                        <li>
                            <div class="vd_ar">
                                <video autoplay muted loop>
                                    <source src="images/video/vdo_7.mp4" type="video/mp4" />
                                    <source src="images/video/vdo_7.webm" type="video/webm" />
                                </video>
                            </div>
                            <div class="desc">
                                <h3>Live tests and quizzes</h3>
                                <p>Take live mock tests curated in line with the exam pattern to measure your progress, and stay on track</p>
                            </div>
                        </li>
                        <li>
                            <div class="vd_ar">
                                <video autoplay muted loop>
                                    <source src="images/video/vdo_8.mp4" type="video/mp4" />
                                    <source src="images/video/vdo_8.webm" type="video/webm" />
                                </video>
                            </div>
                            <div class="desc">
                                <h3>Detailed report and analysis</h3>
                                <p>Get in-depth insights with topic wise scores, time spent per question and competitive stats</p>
                            </div>
                        </li>
                        <li>
                            <div class="vd_ar">
                                <video autoplay muted loop>
                                    <source src="images/video/vdo_9.mp4" type="video/mp4" />
                                    <source src="images/video/vdo_9.webm" type="video/webm" />
                                </video>
                            </div>
                            <div class="desc">
                                <h3>PDFs and learning material</h3>
                                <p>Get access to class notes with educator annotations for you to revisit and revise anytime</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="subscrip_ar">
                <h2>CBSE Class 10 Subscription</h2>
                <div class="scubscp_box">
                    <div class="row">
                        <div class="col-md-3 col-sm-6">
                            <div class="box">
                                <div class="off"></div>
                                <p class="month">1 month</p>
                                <p class="prce"><i class="fas fa-rupee-sign"></i>2,500</p>
                                <p class="totl">Total (Incl. of all taxes)</p>
                                <Link to="/proceed_to_pay" class="btndefault big">Get Subscription</Link>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="box">
                                <div class="off"><span>17% off</span></div>
                                <p class="month">3 months</p>
                                <p class="prce"><i class="fas fa-rupee-sign"></i>6,250</p>
                                <p class="totl">Total (Incl. of all taxes)</p>
                                <Link to="/proceed_to_pay" class="btndefault big">Get Subscription</Link>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="box">
                                <div class="off"><span>33% off</span></div>
                                <p class="month">6 months</p>
                                <p class="prce"><i class="fas fa-rupee-sign"></i>10,000</p>
                                <p class="totl">Total (Incl. of all taxes)</p>
                                <Link to="/proceed_to_pay" class="btndefault big active">Get Subscription</Link>
                            </div>
                        </div>
                        <div class="col-md-3 col-sm-6">
                            <div class="box">
                                <div class="off"><span>58% off</span></div>
                                <p class="month">12 months</p>
                                <p class="prce"><i class="fas fa-rupee-sign"></i>12,500</p>
                                <p class="totl">Total (Incl. of all taxes)</p>
                                <Link to="/proceed_to_pay" class="btndefault big">Get Subscription</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="h_ques">
                    <h3>Have questions? <a href="javascript:;" class="v_all">Read our FAQs</a></h3>
                </div>
            </div>
            <div class="learn_test">
                <h2>What our learners say about Plus</h2>
                <div class="test_box">
                    <OwlCarousel
                        className=""
                        stagePadding={150}
                        loop={false}
                        nav={true}
                        items={1}
                        margin={30}
                        dots={false}
                        mouseDrag={true}
                        navigation={true}
                        autoplay={false}
                        autoplayTimeout={2000}
                        smartSpeed={300}
                        navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                     >
                        <div class="item">
                            <div class="box">
                                <h4>Teaching style and behavior of teacher's to how to talk to student.</h4>
                                <div class="reveiw_box">
                                    <div class="left">
                                        <h4>Anant kushwaha</h4>
                                        <p>900 learning minutes • CBSE Class 10</p>
                                    </div>
                                    <div class="right">
                                        <div class="rating">
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                        </div>
                                        <p class="tm">5 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="box">
                                <h4>Teaching style and behavior of teacher's to how to talk to student.</h4>
                                <div class="reveiw_box">
                                    <div class="left">
                                        <h4>Anant kushwaha</h4>
                                        <p>900 learning minutes • CBSE Class 10</p>
                                    </div>
                                    <div class="right">
                                        <div class="rating">
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                        </div>
                                        <p class="tm">5 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="box">
                                <h4>Teaching style and behavior of teacher's to how to talk to student.</h4>
                                <div class="reveiw_box">
                                    <div class="left">
                                        <h4>Anant kushwaha</h4>
                                        <p>900 learning minutes • CBSE Class 10</p>
                                    </div>
                                    <div class="right">
                                        <div class="rating">
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                        </div>
                                        <p class="tm">5 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="item">
                            <div class="box">
                                <h4>Teaching style and behavior of teacher's to how to talk to student.</h4>
                                <div class="reveiw_box">
                                    <div class="left">
                                        <h4>Anant kushwaha</h4>
                                        <p>900 learning minutes • CBSE Class 10</p>
                                    </div>
                                    <div class="right">
                                        <div class="rating">
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                            <span><i class="fas fa-star"></i></span>
                                        </div>
                                        <p class="tm">5 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel>
                </div>
            </div>

            <div class="learn_go">
                <div class="row">
                    <div class="col-md-6 col-sm-6">
                        <div class="box l">
                            <h2>Learn on the go</h2>
                            <p>Download lessons and learn anytime, anywhere with the Eduspirelearning app</p>
                            <div class="icons">
                                <a href="javascript:;"><img src="images/icon_google_play.svg" alt="" /></a>
                                <a href="javascript:;"><img src="images/icon_google_play1.svg" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <div class="box r">
                            <div class="img">
                                <img src="images/img_learn_on_go.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section></Parent>)
	}
}
export default Home