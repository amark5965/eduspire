import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
class Dashboard extends React.Component{
	render()
	{
	return(
            <section class="dash_cont">
        <div class="dash_sidebar">
            <ul class="side_l">
                <li class="lg">
                    <a href="javascript:"><img src="images/logo_d.png" alt="" /></a>
                </li>
                <li>
                    <a href="javascript:">
                        <div class="icon">
                            <span><i class="fas menu_icon fa-school"></i></span>
                        </div>
                        Courses
                    </a>
                </li>
                <li>
                    <a href="javascript:">
                        <div class="icon">
                            <span><i class="fas fa-sms"></i></span>
                        </div>
                        Community
                    </a>
                </li>
            </ul>
        </div>
        <div class="d_cont_ar">
            <div class="d_container">
                <h2>Courses</h2>
                <div class="top_tools">
                    <div class="buttons">
                        <a href="javascript:" class="btndefault">New Course</a>
                    </div>
                    <div class="searchbox">
                        <form action="javascript:;">
                            <div class="inputbox">
                                <input type="text" placeholder="Search your courses" />
                                <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                            </div>
                            <div class="clearfix"></div>
                        </form>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="d_course_l">
                    <ul>
                        <li>
                            <div class="icon">
                                <img src="images/icon_dash_course1.png" alt="" />
                            </div>
                            <div class="info">
                                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                                <div class="box l">
                                    <p>Class 12</p>
                                    <p>DRAFT <span>Public</span></p>
                                </div>
                                <div class="box r">
                                    <div class="prog_bar">
                                        <label>Finish your course</label>
                                        <div class="bar">
                                            <span class="fill" style={{width: "5%"}}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img src="images/icon_dash_course1.png" alt="" />
                            </div>
                            <div class="info">
                                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                                <div class="box l">
                                    <p>Class 11</p>
                                    <p>DRAFT <span>Public</span></p>
                                </div>
                                <div class="box r">
                                    <div class="prog_bar">
                                        <label>Finish your course</label>
                                        <div class="bar">
                                            <span class="fill" style={{width: "5%"}}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img src="images/icon_dash_course1.png" alt="" />
                            </div>
                            <div class="info">
                                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                                <div class="box l">
                                    <p>Class 10</p>
                                    <p>DRAFT <span>Public</span></p>
                                </div>
                                <div class="box r">
                                    <div class="prog_bar">
                                        <label>Finish your course</label>
                                        <div class="bar">
                                            <span class="fill" style={{width: "5%"}}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img src="images/icon_dash_course1.png" alt="" />
                            </div>
                            <div class="info">
                                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                                <div class="box l">
                                    <p>Class 9</p>
                                    <p>DRAFT <span>Public</span></p>
                                </div>
                                <div class="box r">
                                    <div class="prog_bar">
                                        <label>Finish your course</label>
                                        <div class="bar">
                                            <span class="fill" style={{width: "5%"}}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img src="images/icon_dash_course1.png" alt="" />
                            </div>
                            <div class="info">
                                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                                <div class="box l">
                                    <p>Class 8</p>
                                    <p>DRAFT <span>Public</span></p>
                                </div>
                                <div class="box r">
                                    <div class="prog_bar">
                                        <label>Finish your course</label>
                                        <div class="bar">
                                            <span class="fill" style={{width: "5%"}}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="icon">
                                <img src="images/icon_dash_course1.png" alt="" />
                            </div>
                            <div class="info">
                                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                                <div class="box l">
                                    <p>Class 7</p>
                                    <p>DRAFT <span>Public</span></p>
                                </div>
                                <div class="box r">
                                    <div class="prog_bar">
                                        <label>Finish your course</label>
                                        <div class="bar">
                                            <span class="fill" style={{width: "5%"}}></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
        )
	}
}
export default Dashboard