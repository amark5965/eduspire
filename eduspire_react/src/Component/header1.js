import React from 'react';
import {Link} from 'react-router-dom';
class Header extends React.Component{
 openNav=()=>{
    document.getElementById("mySidenav").style.width = "627px";
    document.getElementById("side_overley").style.width = "100%";
  }

closeNav=()=> {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("side_overley").style.width = "0";
}
	render()
	{
	return(    <header class="home_header">
        <div class="header-top">
            <div class="box l">
                <div class="logo">
                    <Link to="/"><img src="images/logo.png" alt="" /></Link>
                </div>
                <Link to="/choose_your_goal" class="btn btn_dropdown">CBSE Class 10 <i class="fa fa-angle-down"></i></Link>
            </div>
            <nav class="navbar navbar-expand-md">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon">X</span>
                </button>
                <div class="mobile_bg"></div>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <span class="close_icon" style={{display:"none"}}>X</span>
                    <div class="searchbox dropdown">
                        <form action="javascript:" class="dropdown-toggle" data-toggle="dropdown">
                            <div class="inputbox">
                                <input type="text" placeholder="Search for courses, lessons and educators" />
                                <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                            </div>
                            <div class="clearfix"></div>
                        </form>
                        <div class="dropdown-menu">
                            <h3>Trending</h3>
                            <ul>
                                <li>
                                    <a href="javascript:"><i class="fas fa-directions"></i> Bhunesh Sharma</a>
                                </li>
                                <li>
                                    <a href="javascript:"><i class="fas fa-directions"></i> Ankit avasthi</a>
                                </li>
                                <li>
                                    <a href="javascript:"><i class="fas fa-directions"></i> Vishal Sharma</a>
                                </li>
                            </ul>
                        </div>
                        <div class="clearfix"></div>
                    </div>
                    <ul class="navbar-nav l">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="javascript:" data-toggle="dropdown">Become an instructor</a>
                            <ul class="dropdown-menu txt">
                                <h2>Get your team access to over 4,000 top Udemy courses, anytime, anywhere.</h2>
                                <a href="javascript:" class="btndefault">Try Eduspire for Business</a>
                            </ul>
                        </li> 
                        <li class="nav-item">
                            <a class="nav-link btn" href="javascript:" onClick={this.openNav}>Login</a>
                            <div class="side_overley" id="side_overley" onClick={this.closeNav}></div>
                            <div id="mySidenav" class="sidenav">
                                <div class="login_cont">
                                    <a href="javascript:" class="closebtn" onClick={this.closeNav}>&times;</a>
                                    <form action="javascript:" class="reg_form">
                                        <div class="login_area" id="login_area">
                                            <h2>Login</h2>
                                            <p class="o_l">or <a href="javascript:" id="create_acc" onclick="createacc()">create your account</a></p>
                                            <div class="field dropdown">
                                                <div class="flag dropdown-toggle" id="cont_code" data-toggle="dropdown">
                                                    <div class="icon">
                                                        <img src="images/icon_flag_1.png" alt="" />
                                                    </div>
                                                    <span class="code">+91 <i class="fa fa-angle-down"></i></span>
                                                </div>
                                                <div class="dropdown-menu">
                                                    <ul>
                                                        <li>
                                                            <span>Afganistan</span>
                                                        </li>
                                                        <li>
                                                            <span>Afgania</span>
                                                        </li>
                                                        <li>
                                                            <span>Alberia</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <input type="tel" id="tel" placeholder="Enter your mobile number" />
                                                <input type="email" id="email" placeholder="Email address" />
                                            </div>
                                            <div class="buttons">
                                                <button type="submit" class="btn btn_login" disabled="disabled">Login</button>
                                                <a href="javascript:" id="log_by_email" onclick="loginemail()">Continue with email</a>
                                                <a href="javascript:" id="log_by_phone" onclick="loginnumber()">Continue with mobile number</a>
                                            </div>
                                        </div>
                                        <div class="login_area signup_area" id="signup_area">
                                            <h2>Join Eduspire</h2>
                                            <p class="o_l">or <a href="javascript:" id="login_acc" onclick="loginacc()">login to your account</a></p>
                                            <div class="field dropdown">
                                                <div class="flag dropdown-toggle" id="cont_code" data-toggle="dropdown">
                                                    <div class="icon">
                                                        <img src="images/icon_flag_1.png" alt="" />
                                                    </div>
                                                    <span class="code">+91 <i class="fa fa-angle-down"></i></span>
                                                </div>
                                                <div class="dropdown-menu">
                                                    <ul>
                                                        <li>
                                                            <span>Afganistan</span>
                                                        </li>
                                                        <li>
                                                            <span>Afgania</span>
                                                        </li>
                                                        <li>
                                                            <span>Alberia</span>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <input type="tel" id="tel" placeholder="Enter your mobile number" />
                                            </div>
                                            <div class="buttons">
                                                <button type="submit" class="btn btn_login" disabled="disabled">Continue</button>
                                            </div>
                                        </div>
                                    </form>
                                    <div class="note">
                                        <p id="login_note">Having trouble? Please contact <a href="mailto:help@eduspire.com">help@eduspire.com</a> for further support.</p>
                                        <p id="signup_note">By signing up, you agree to <a href="javascript:">Terms & Conditions</a> and  <a href="javascript:">Privacy Policy</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div> 
            </nav>
        </div>
    </header>)
	}
}
export default Header