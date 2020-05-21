import React from 'react';
class Footer extends React.Component{
	render()
	{
	return( <footer class="h_footer d_footer">
        <div class="container">
            <div class="f_area">
                <div class="row">
                    <div class="col-md-5">
                        <div class="box l">
                            <div class="f_logo">
                                <a href="index.html"><img src="images/logo.png" alt="" /></a>
                            </div>
                            <div class="copy">
                                <p>&copy; 2020 Eduspire Pvt Ltd</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
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
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div class="box r">
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
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>)
	}
}
export default Footer