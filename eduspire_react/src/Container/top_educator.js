import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
class TopEducator extends React.Component{
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
                                <h3>Educators</h3>
                            </div>

                            <div class="live_l_ar">
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
            </section>
        )
	}
}
export default TopEducator