import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
class Batches extends React.Component{
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
                        <h3>Batches</h3>
                    </div>

                    <div class="select_batch" id="select1">
                        <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="selected">All</span> <span class="icon"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span></button>
                        <ul class="dropdown-menu option" role="menu">
                            <li id="1"><a href="javascript:;">All</a></li>
                            <li id="2"><a href="javascript:;">Ongoing</a></li>
                            <li id="3"><a href="javascript:;">Upcoming</a></li>
                            <li id="4"><a href="javascript:;">Completed</a></li>
                        </ul>
                    </div>

                    <div class="live_l_ar">
                        <div class="live_n_l batch">
                            <ul class="row">
                                <li class="col-md-4 col-sm-4">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_trend_1.jpg" alt="" />
                                            <div class="batch_icn">
                                                <span class="ar"></span>
                                                <span class="btch">Batch</span>
                                            </div>
                                            <div class="batch_icn_add">
                                                <i class="fas fa-swatchbook"></i>
                                            </div>
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">English</span></p>
                                                <h3>Chapter wise Polity MCQ series-Day 5-D.P.S.P</h3>
                                                <p>Ended on Apr 11, 2020</p>
                                            </div>
                                            <p class="note">Dr Sidharth Arora</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="col-md-4 col-sm-4">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_trend_2.jpg" alt="" />
                                            <div class="batch_icn">
                                                <span class="ar"></span>
                                                <span class="btch">Batch</span>
                                            </div>
                                            <div class="batch_icn_add">
                                                <i class="fas fa-swatchbook"></i>
                                            </div>
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">Hindi</span></p>
                                                <h3>Detailed Discussion on RBI & Its Functions</h3>
                                                <p>Ended on May 1, 2020</p>
                                            </div>
                                            <p class="note">Bhunesh Sharma</p>
                                        </div>
                                    </a>
                                </li>
                                <li class="col-md-4 col-sm-4">
                                    <a href="javascript:;" class="box">
                                        <div class="img">
                                            <img src="images/img_live_trend_3.jpg" alt="" />
                                            <div class="batch_icn">
                                                <span class="ar"></span>
                                                <span class="btch">Batch</span>
                                            </div>
                                            <div class="batch_icn_add">
                                                <i class="fas fa-swatchbook"></i>
                                            </div>
                                        </div>
                                        <div class="info">
                                            <div class="desc">
                                                <p class="sub"><span class="sbj">English</span></p>
                                                <h3>Discussion on Northern Mountains of India</h3>
                                                <p>Lesson 1 • Started at 8:30 PM</p>
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
    </section>)
	}
}
export default Batches