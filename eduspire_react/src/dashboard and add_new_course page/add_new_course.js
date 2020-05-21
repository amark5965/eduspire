import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
class AddNewCourse extends React.Component{

    componentDidMount()
    {
      $('.dash_cont .cirrclm_l li .box .title').click(function() {
        $(this).toggleClass('active');
      });
    }

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
                        <h2>Add new course</h2>
                        <div class="add_c_fr">
                            <form action="javascript:">
                                <div class="step">
                                    <h2>How about a working title?</h2>
                                    <p class="top">It's ok if you can't think of a good title now. You can change it later.</p>
                                    <div class="field">
                                        <div class="inputbox">
                                            <select>
                                                <option>Select your class</option>
                                                <option>Class 10</option>
                                                <option>Class 9</option>
                                                <option>Class 8</option>
                                                <option>Class 7</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="step">
                                    <h2>What category best fits the knowledge you'll share?</h2>
                                    <p class="top">If you're not sure about the right category, you can change it later.</p>
                                    <div class="field">
                                        <div class="inputbox">
                                            <select>
                                                <option>Choose a subject</option>
                                                <option>English</option>
                                                <option>Hindi</option>
                                                <option>Mathmatics</option>
                                                <option>Science</option>
                                                <option>Social Science</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div class="c_cirriclm" id="cirriclm">
                                    <div class="ceirrclm_cont">
                                        <h2>Curriculum</h2>
                                        <div class="desc">
                                            <p>Start putting together your course by creating sections, lectures and practice (quizzes, coding exercises and assignments).</p>
                                            <p>If you’re intending to offer your course for free, the total length of video content must be less than 2 hours.</p>
                                            <ul class="cirrclm_l">
                                                <li>
                                                    <div class="icon">
                                                        <i class="fas fa-plus-square"></i>
                                                        <i class="fas w fa-times-circle"></i>
                                                    </div>
                                                    <div class="box">
                                                        <div class="title">
                                                            <h3>Lecture: 1</h3>
                                                            <div class="ic">
                                                                <i class="fa n fa-angle-down"></i>
                                                                <i class="fa y fa-angle-up"></i>
                                                            </div>
                                                        </div>
                                                        <div class="drop_ar">
                                                            <div class="uplar">
                                                                <div class="inputbox">
                                                                    <input type="text" placeholder="Enter a title" />
                                                                </div>
                                                                <div class="upl_box">
                                                                    <label for="gallery-photo-add">
                                                                        <span>Drag and drop your files here or</span>
                                                                        <input type="file" multiple="" id="gallery-photo-add" />
                                                                        <a href="javascript:" class="btndefault">Select multiple files</a>
                                                                        <span class="note">(.eps files or jpegs that are at least 4.0 megapixels)</span>
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
	}
}
export default AddNewCourse