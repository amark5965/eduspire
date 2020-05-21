import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
class TestSeries extends React.Component{
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
                                <h3>Test series</h3>
                            </div>

                            <div class="select_batch" id="select1">
                                <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="selected">All</span> <span class="icon"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span></button>
                                <ul class="dropdown-menu option" role="menu">
                                    <li id="1"><a href="javascript:;">All</a></li>
                                    <li id="2"><a href="javascript:;">Ongoing</a></li>
                                    <li id="3"><a href="javascript:;">Upcoming</a></li>
                                </ul>
                            </div>

                            <div class="live_l_ar">
                                <div class="live_n_l tst_series">
                                    <ul class="row">
                                        <li class="col-md-4 col-sm-4">
                                            <a href="javascript:;" class="box">
                                                <div class="info">
                                                    <div class="desc">
                                                        <h3>Eduspire UPSC Championship [All India Free Mock for Prelims 2020] </h3>
                                                        <p class="free"><span>Free</span></p>
                                                    </div>
                                                    <p class="note">Test 4 • Mar 9, 9:30 PM</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="col-md-4 col-sm-4">
                                            <a href="javascript:;" class="box">
                                                <div class="info">
                                                    <div class="desc">
                                                        <h3>Free Mock Tests on UPSC CSE Prelims 2020</h3>
                                                        <p class="free"><span>Free</span></p>
                                                    </div>
                                                    <p class="note">Test 12 • Mar 22, 12:30 AM</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="col-md-4 col-sm-4">
                                            <a href="javascript:;" class="box">
                                                <div class="info">
                                                    <div class="desc">
                                                        <h3>Free Mock Tests on UPSC CSAT Prelims 2020</h3>
                                                        <p class="free"><span>Free</span></p>
                                                    </div>
                                                    <p class="note">Test 4 • Mar 22, 1:30 AM</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="col-md-4 col-sm-4">
                                            <a href="javascript:;" class="box">
                                                <div class="info">
                                                    <div class="desc">
                                                        <h3>Eduspire UPSC Championship [All India Free Mock for Prelims 2020] </h3>
                                                        <p class="free"><span>Free</span></p>
                                                    </div>
                                                    <p class="note">Test 4 • Mar 9, 9:30 PM</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="col-md-4 col-sm-4">
                                            <a href="javascript:;" class="box">
                                                <div class="info">
                                                    <div class="desc">
                                                        <h3>Free Mock Tests on UPSC CSE Prelims 2020</h3>
                                                        <p class="free"><span>Free</span></p>
                                                    </div>
                                                    <p class="note">Test 12 • Mar 22, 12:30 AM</p>
                                                </div>
                                            </a>
                                        </li>
                                        <li class="col-md-4 col-sm-4">
                                            <a href="javascript:;" class="box">
                                                <div class="info">
                                                    <div class="desc">
                                                        <h3>Free Mock Tests on UPSC CSAT Prelims 2020</h3>
                                                        <p class="free"><span>Free</span></p>
                                                    </div>
                                                    <p class="note">Test 4 • Mar 22, 1:30 AM</p>
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
export default TestSeries