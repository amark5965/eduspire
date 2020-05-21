import React from 'react';
import {Link} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import $ from 'jquery'
const responsive={
  320:{items:1},
  480:{items:1},
  600:{items:1},
  960:{items:1},
  1200:{items:1}
}
const responsive1={
  320:{items:3},
  480:{items:3},
  600:{items:4},
  960:{items:5},
  1200:{items:5}
}

class BecomeInstructor extends React.Component{
	render()
	{
	return(<div>
            <section class="inner_cont instrctor">
                <div class="inst_sec f">
                    <div class="over_bg">
                        <img src="images/bg_effect_inst.svg" alt="" />
                    </div>
                    <div class="left_bg"></div>
                    <div class="right_bg"><div class="img"></div></div>
                    <div class="container">
                        <div class="cont_prt">
                            <div class="box">
                                <h2>Upskill your people with <span>virtual training</span></h2>
                                <div class="desc">
                                    <p>Upskill your people with virtual training Empower your remote workforce to learn what they need, when they need it. Online learning from global experts across tech, business, wellness and more to help your employees do whatever comes next.</p>
                                </div>
                                <form action="javascript:">
                                    <div class="req_demo">
                                        <div class="inputbox">
                                            <input type="email" placeholder="Email address *" />
                                        </div>
                                        <button type="submit" class="btndefault big">Request a demo</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inst_trust">
                    <div class="over_bg">
                        <img src="images/bg_effect_inst.svg" alt="" />
                    </div>
                    <div class="container">
                        <h3>Trusted by</h3>
                        <div class="inst_trust_slider">
                            <OwlCarousel
                                className=""
                                loop={true}
                                nav={false}
                                items={5}
                                margin={50}
                                dots={true}
                                mouseDrag={true}
                                navigation={false}
                                autoplay={false}
                                autoplayTimeout={2000}
                                smartSpeed={300}
                                navText={["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]}
                                responsive={responsive1}
                             >
                                <div class="item">
                                    <a href="javascript:" class="box">
                                        <img src="images/instr_trust_1_1.png" alt="" />
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:" class="box">
                                        <img src="images/instr_trust_2_2.png" alt="" />
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:" class="box">
                                        <img src="images/instr_trust_3_3.png" alt="" />
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:" class="box">
                                        <img src="images/instr_trust_4_4.png" alt="" />
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:" class="box">
                                        <img src="images/instr_trust_5_5.png" alt="" />
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:" class="box">
                                        <img src="images/instr_trust_1_1.png" alt="" />
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:" class="box">
                                        <img src="images/instr_trust_2_2.png" alt="" />
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:" class="box">
                                        <img src="images/instr_trust_3_3.png" alt="" />
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:" class="box">
                                        <img src="images/instr_trust_4_4.png" alt="" />
                                    </a>
                                </div>
                                <div class="item">
                                    <a href="javascript:" class="box">
                                        <img src="images/instr_trust_5_5.png" alt="" />
                                    </a>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
                <div class="inst_sec achv_lernng wttxt">
                    <div class="over_bg">
                        <img src="images/bg_effect_inst.svg" alt="" />
                    </div>
                    <div class="left_bg"></div>
                    <div class="right_bg"><div class="img"></div></div>
                    <div class="container">
                        <div class="cont_prt">
                            <div class="box">
                                <h2>Achieve learning outcomes, <span>faster</span></h2>
                                <div class="desc">
                                    <p>Everyone’s learning journey is different. Create impactful and relevant learning paths to achieve the outcomes you want. We have the tools you need to unlock knowledge at your organization.</p>
                                    <a href="javascript:" class="v_all">Learn more</a>
                                </div>
                                <div class="req_demo">
                                    <button type="submit" class="btndefault big">Request a demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inst_sec cours_coll wttxt">
                    <div class="over_bg">
                        <img src="images/bg_effect_inst.svg" alt="" />
                    </div>
                    <div class="left_bg"></div>
                    <div class="right_bg"><div class="img"></div></div>
                    <div class="container">
                        <div class="cont_prt">
                            <div class="box">
                                <p class="t">Course Collection</p>
                                <h2>4,000+ fresh & <span>in-demand</span> courses</h2>
                                <div class="desc">
                                    <p>High-quality content alone isn’t sufficient. Our marketplace content model ensures that we always have the most recent and high-quality content that makes learning enjoyable. We’ll always have the latest skills on the most important topics your employees need to stay ahead of the curve.</p>
                                    <a href="javascript:" class="v_all">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inst_sec smrt_pers wttxt">
                    <div class="over_bg">
                        <img src="images/bg_effect_inst.svg" alt="" />
                    </div>
                    <div class="left_bg"></div>
                    <div class="right_bg"><div class="img"></div></div>
                    <div class="container">
                        <div class="cont_prt">
                            <div class="box">
                                <h2>Smart & <span>personalized</span></h2>
                                <div class="desc">
                                    <p>Our sophisticated learning recommendations deepen skills and are personalized to drive employee engagement, creating a happier workforce.</p>
                                    <a href="javascript:" class="v_all">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="inst_sec int_connct wttxt">
                    <div class="over_bg">
                        <img src="images/bg_effect_inst.svg" alt="" />
                    </div>
                    <div class="left_bg"></div>
                    <div class="right_bg"><div class="img"></div></div>
                    <div class="container">
                        <div class="cont_prt">
                            <div class="box">
                                <p class="t">International Collection</p>
                                <h2>An <span>authentic learning experience</span> for your global employees</h2>
                                <div class="desc">
                                    <p>Learn from native-speaking experts around the world across critical business and technical skills. Courses available in French, German, Spanish, Brazilian Portuguese and Japanese.</p>
                                    <a href="javascript:" class="v_all">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="instrctor_str">
                    <div class="inst_story_sld">
                        <OwlCarousel
                            className=""
                            loop={false}
                            nav={true}
                            items={1}
                            margin={20}
                            dots={false}
                            mouseDrag={true}
                            navigation={true}
                            autoplay={false}
                            autoplayTimeout={2000}
                            smartSpeed={300}
                            navText={["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]}
                            responsive={responsive}
                         >
                            <div class="item">
                                <div class="icon" data-toggle="modal" data-target="#instructor_story_pop"><i class="fas fa-play"></i></div>
                                <img src="images/instructor_watch_story1.jpg" alt="" />
                                <div class="container">
                                    <div class="box">
                                        <p>Watch Pinterest's Success Story</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item" data-toggle="modal" data-target="#instructor_story_pop1">
                                <div class="icon"><i class="fas fa-play"></i></div>
                                <img src="images/instructor_watch_story2.jpg" alt="" />
                                <div class="container">
                                    <div class="box">
                                        <p>Watch on24's Success Story</p>
                                    </div>
                                </div>
                            </div>
                            <div class="item" data-toggle="modal" data-target="#instructor_story_pop2">
                                <div class="icon"><i class="fas fa-play"></i></div>
                                <img src="images/instructor_watch_story3.jpg" alt="" />
                                <div class="container">
                                    <div class="box">
                                        <p>Watch Valin's Success Story</p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>

                <div class="inst_sec mesur_roi wttxt">
                    <div class="over_bg">
                        <img src="images/bg_effect_inst.svg" alt="" />
                    </div>
                    <div class="left_bg"></div>
                    <div class="right_bg"><div class="img"></div></div>
                    <div class="container">
                        <div class="cont_prt">
                            <div class="box">
                                <h2>We deliver <span>measurable</span> ROI</h2>
                                <div class="desc">
                                    <p>According to a 2019 IDC report, companies see up to 869% ROI when partnering with us. Whether it’s increasing productivity, streamlining onboarding, or saving on costs, we partner with you to create innovative programs that make an impact at your organization.</p>
                                    <a href="javascript:" class="v_all">Read the report</a>
                                </div>
                                <div class="req_demo">
                                    <button type="submit" class="btndefault big">Request a demo</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="inst_sec learn_part wttxt">
                    <div class="over_bg">
                        <img src="images/bg_effect_inst.svg" alt="" />
                    </div>
                    <div class="left_bg"></div>
                    <div class="right_bg"><div class="img"></div></div>
                    <div class="container">
                        <div class="cont_prt">
                            <div class="box">
                                <p class="t">Learning Engagement</p>
                                <h2>Your strategic learning <span>partner</span></h2>
                                <div class="desc">
                                    <p>Driving effective learning is a challenge — but it doesn’t have to be that way. We are the true learning partner that helps impact your business from top to bottom. From strategy to execution, we’re alongside you throughout this journey.</p>
                                    <a href="javascript:" class="v_all">Learn more</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="inst_test">
                    <div class="container">
                        <div class="i_t_sl">
                            <div class="quote"><i class="fas fa-quote-left"></i></div>
                            <OwlCarousel
                                className=""
                                loop={false}
                                nav={true}
                                items={1}
                                margin={20}
                                dots={false}
                                mouseDrag={true}
                                navigation={true}
                                autoplay={false}
                                autoplayTimeout={2000}
                                smartSpeed={300}
                                navText={["<i class='fas fa-arrow-left'></i>","<i class='fas fa-arrow-right'></i>"]}
                                responsive={responsive}
                             >
                                <div class="item">
                                    <div class="box">
                                        <p>We wanted to enrich the technical and soft skills learning experience for consultants and business managers and therefore, needed an offering that met the high demands of our program.</p>
                                        <div class="ttl">
                                            <p class="hdng">Thibaut Yven</p>
                                            <p class="sub_hdng">Head of Learning at the AKKAdemy</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="item">
                                    <div class="box">
                                        <p>We wanted to enrich the technical and soft skills learning experience for consultants and business managers and therefore, needed an offering that met the high demands of our program.</p>
                                        <div class="ttl">
                                            <p class="hdng">Thibaut Yven</p>
                                            <p class="sub_hdng">Head of Learning at the AKKAdemy</p>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>

                <div class="inst_webinar">
                    <div class="container">
                        <div class="webnr_box">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="box l">
                                        <div class="tag">
                                            <span>Ebook</span>
                                        </div>
                                        <div class="desc">
                                            <p>Leader’s Guide to Navigating Change in a Remote Workplace</p>
                                            <a href="javascript:" class="v_all">Learn more</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="box r">
                                        <div class="tag">
                                            <span>Webinar</span>
                                        </div>
                                        <div class="desc">
                                            <p>Eduspire Connect: A Virtual Miniseries for People Leaders</p>
                                            <p><span>Watch webinar on demand</span></p>
                                            <a href="javascript:" class="v_all">Watch now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="request_demo">
                    <div class="container">
                        <div class="demo_box">
                            <p class="t">Empower your team. Lead the industry.</p>
                            <h3>We're your strategic learning partner to help move skills forward.</h3>
                            <div class="button">
                                <a href="javascript:" class="btndefault big">Request a free demo</a>
                            </div>
                            <div class="fr_pln">
                                <p>Have a team of 5-20? <a href="javascript:">Get a free trial of team plan here.</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <div class="modal" id="instructor_story_pop">
              <div class="modal-dialog t_vd">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <div class="modal-body">
                        <div class="video">
                            <video controls id="exp_vdo_play">
                                <source src="images/video/transcoding.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div class="modal" id="instructor_story_pop1">
              <div class="modal-dialog t_vd">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <div class="modal-body">
                        <div class="video">
                            <video controls id="exp_vdo_play1">
                                <source src="images/video/transcoding.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            <div class="modal" id="instructor_story_pop2">
              <div class="modal-dialog t_vd">
                <div class="modal-content">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <div class="modal-body">
                        <div class="video">
                            <video controls id="exp_vdo_play2">
                                <source src="images/video/transcoding.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
              </div>
            </div>

            </div>
        )
	}
}
export default BecomeInstructor