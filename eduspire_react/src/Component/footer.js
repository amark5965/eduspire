import React from 'react';
import {Link} from 'react-router-dom';
class Footer extends React.Component{
	render()
	{
	return( <footer class="h_footer">
        <div class="container">
            <div class="f_area">
                <div class="row">
                    <div class="col-md-3">
                        <div class="box l">
                            <div class="f_logo">
                                <Link to="/"><img src="images/logo.png" alt="" /></Link>
                            </div>
                            <div class="social_links">
                                <ul>
                                    <li>
                                        <a href="javascript:;"><i class="fab fa-facebook-f"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;"><i class="fab fa-youtube"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;"><i class="fab fa-twitter"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;"><i class="fab fa-instagram"></i></a>
                                    </li>
                                    <li>
                                        <a href="javascript:;"><i class="fab fa-linkedin-in"></i></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="copy">
                                <p>&copy; 2020 Eduspire Pvt Ltd</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                        <div class="box m">
                            <ul class="links">
                                <li>
                                    <a href="javascript:;">About us</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Careers</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Blogs</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Privacy Policy</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Terms and Conditions</a>
                                </li>
                            </ul>
                            <ul class="links">
                                <li>
                                    <a href="javascript:;">User Guidelines</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Site Map</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Refund Policy</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Legal Notices</a>
                                </li>
                                <li>
                                    <a href="javascript:;">Plus Subscriptions T&C</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="box r">
                            <div class="app_links">
                                <h4>Learner app</h4>
                                <div class="icons">
                                    <a href="javascript:;">
                                        <img src="images/icon_google_play.svg" alt="" />
                                    </a>
                                    <a href="javascript:;">
                                        <img src="images/icon_google_play1.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                            <div class="app_links">
                                <h4>Educator app</h4>
                                <div class="icons">
                                    <a href="javascript:;">
                                        <img src="images/icon_google_play.svg" alt="" />
                                    </a>
                                    <a href="javascript:;">
                                        <img src="images/icon_google_play1.svg" alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
	}
}
export default Footer