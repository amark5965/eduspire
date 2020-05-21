import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
class ComprehensiveSyllabus extends React.Component{
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
                                <h3>CBSE Class 10</h3>
                            </div>


                            <div class="live_l_ar">
                                <div class="stage_pad">
                                    <div class="syllabus">
                                        <div class="row">
                                            <div class="col-md-4 col-sm-4">
                                                <a href="javascript:;" class="box">
                                                    <div class="ttl">
                                                        <h3>Mathematics</h3>
                                                        <p>6 courses</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <a href="javascript:;" class="box">
                                                    <div class="ttl">
                                                        <h3>Social Science</h3>
                                                        <p>5 courses</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <a href="javascript:;" class="box">
                                                    <div class="ttl">
                                                        <h3>Science</h3>
                                                        <p>4 courses</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <a href="javascript:;" class="box">
                                                    <div class="ttl">
                                                        <h3>Hindi</h3>
                                                        <p>3 courses</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <a href="javascript:;" class="box">
                                                    <div class="ttl">
                                                        <h3>Indian economy</h3>
                                                        <p>24 courses</p>
                                                    </div>
                                                </a>
                                            </div>
                                            <div class="col-md-4 col-sm-4">
                                                <a href="javascript:;" class="box">
                                                    <div class="ttl">
                                                        <h3>Geography</h3>
                                                        <p>30 courses</p>
                                                    </div>
                                                </a>
                                            </div>
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
}
export default ComprehensiveSyllabus