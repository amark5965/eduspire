import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
class PopularCourses extends React.Component{
	render()
	{
	return(
            <section class="inner_cont">
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
                            <div class="live_cls_ttl no_ic">
                                <ul class="breadcrumb">
                                    <li class="bk">
                                        <a href="javascript:;"><i class="fas fa-arrow-left"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;"><span>CBSE Class 10</span></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;"><span>Plus</span></a>
                                    </li>       
                                </ul>
                                <h3>Popular courses</h3>
                            </div>


                            <div class="live_l_ar">
                                <div class="live_n_l popular_course">
                                    <ul class="row">
                                        <li class="col-md-4 col-sm-4">
                                            <a href="javascript:;" class="box">
                                                <div class="img">
                                                    <img src="images/img_live_trend_1.jpg" alt="" />
                                                    <div class="batch_icn_add">
                                                        <i class="fas fa-swatchbook"></i>
                                                    </div>
                                                </div>
                                                <div class="info">
                                                    <div class="desc">
                                                        <p class="sub"><span class="sbj">English</span> <span class="sj">Indian Economy</span></p>
                                                        <h3>Complete Course on Economics Optional Paper - II</h3>
                                                        <p>Starts on May 2, 2020 • 13 lessons</p>
                                                    </div>
                                                    <p class="note">Dr Sidharth Arora</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="col-md-4 col-sm-4">
                                            <a href="javascript:;" class="box">
                                                <div class="img">
                                                    <img src="images/img_live_trend_2.jpg" alt="" />
                                                    <div class="batch_icn_add">
                                                        <i class="fas fa-swatchbook"></i>
                                                    </div>
                                                </div>
                                                <div class="info">
                                                    <div class="desc">
                                                        <p class="sub"><span class="sbj">Hindi</span> <span class="sj">Sociology Optional</span></p>
                                                        <h3>Course on Sociology Optional - Paper I</h3>
                                                        <p>Starts on May 2, 2020 • 45 lessons</p>
                                                    </div>
                                                    <p class="note">Bhunesh Sharma</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="col-md-4 col-sm-4">
                                            <a href="javascript:;" class="box">
                                                <div class="img">
                                                    <img src="images/img_live_trend_3.jpg" alt="" />
                                                    <div class="batch_icn_add">
                                                        <i class="fas fa-swatchbook"></i>
                                                    </div>
                                                </div>
                                                <div class="info">
                                                    <div class="desc">
                                                        <p class="sub"><span class="sbj">English</span> <span class="sj">Newspapers</span></p>
                                                        <h3>Crash Course on Current Affairs for UPSC Prelims 2020</h3>
                                                        <p>Starts on May 3, 2020 • 24 lessons</p>
                                                    </div>
                                                    <p class="note">Sudarshan Gurjar</p>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
	}
}
export default PopularCourses