import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery'
class ProceedToPay extends React.Component{
	render()
	{
	return(
            <section class="inner_cont">
                <div class="container">
                    <div class="login_pay_ar">
                        <form action="javascript:;">
                            <div class="row">
                                <div class="col-md-8 col-sm-8">
                                    <div class="box l">
                                        <div class="login_cont">
                                            <div class="reg_form">
                                                <div class="login_area" id="login_area1">
                                                    <h2>Login</h2>
                                                    <p class="o_l">or <a href="javascript:;" id="create_acc1" onclick="createacc_n()">create your account</a></p>
                                                    <div class="field dropdown">
                                                        <div class="flag dropdown-toggle" id="cont_code1" data-toggle="dropdown">
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
                                                        <input type="tel" id="tel1" placeholder="Enter your mobile number" />
                                                        <input type="email" id="email1" placeholder="Email address" />
                                                    </div>
                                                    <div class="buttons">
                                                        <button type="submit" class="btn btn_login" disabled="disabled">Login</button>
                                                        <a href="javascript:;" id="log_by_email1" onclick="loginemail_n()">Continue with email</a>
                                                        <a href="javascript:;" id="log_by_phone1" onclick="loginnumber_n()">Continue with mobile number</a>
                                                    </div>
                                                </div>
                                                <div class="login_area signup_area" id="signup_area1">
                                                    <h2>Join Eduspire</h2>
                                                    <p class="o_l">or <a href="javascript:;" id="login_acc1" onclick="loginacc_n()">login to your account</a></p>
                                                    <div class="field dropdown">
                                                        <div class="flag dropdown-toggle" id="cont_code1" data-toggle="dropdown">
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
                                                        <input type="tel" id="tel1" placeholder="Enter your mobile number" />
                                                    </div>
                                                    <div class="buttons">
                                                        <button type="submit" class="btn btn_login" disabled="disabled">Continue</button>
                                                    </div>
                                                </div>
                                                <div class="login_area otp_ar" id="otp_ar">
                                                    <h2>Enter OTP</h2>
                                                    <p class="o_l">We've sent an OTP to your registered mobile number</p>
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
                                                        <div class="icon_edit">Edit</div>
                                                    </div>
                                                    <div class="field">
                                                        <input type="password" placeholder="One time password" />
                                                    </div>
                                                    <div class="field">
                                                        <input type="text" placeholder="Name" />
                                                    </div>
                                                    <div class="field">
                                                        <input type="text" placeholder="Email address" />
                                                    </div>
                                                    <div class="field">
                                                        <div class="select_batch" id="select1">
                                                            <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="selected">State of residence</span> <span class="icon"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span></button>
                                                            <ul class="dropdown-menu option" role="menu">
                                                                <li id="1"><a href="javascript:;">State of residence</a></li>
                                                                <li id="2"><a href="javascript:;">Delhi</a></li>
                                                                <li id="3"><a href="javascript:;">Bihar</a></li>
                                                                <li id="4"><a href="javascript:;">Chandigadh</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div class="buttons">
                                                        <button type="submit" class="btn btn_login" disabled="disabled">Verify OTP</button>
                                                        <p>
                                                            <a href="javascript:;" id="resend_otp">Resend OTP</a> 
                                                            Or 
                                                            <a href="callto:3984939292" id="bycall">Call</a>
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="note">
                                                <p id="login_note1">Having trouble? Please contact <a href="mailto:help@eduspire.com">help@eduspire.com</a> for further support.</p>
                                                <p id="signup_note1">By signing up, you agree to <a href="javascript:;">Terms & Conditions</a> and  <a href="javascript:;">Privacy Policy</a>.</p>
                                            </div>
                                        </div>
                                        <div class="pay_flow">
                                            <h3>Choose a payment method</h3>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4 col-sm-4">
                                    <div class="box r">
                                        <div class="bx pay_subs">
                                            <h3>CBSE Class 10 subscription</h3>
                                            <p>12 months</p>
                                            <div class="dur">
                                                <span>Valid till 3 May, 2021</span>
                                                <a href="javascript:;">Change duration</a>
                                            </div>
                                        </div>
                                        <div class="bx gft">
                                            <div class="gift_ar">
                                                <img src="images/icon_gift.svg" alt="" />
                                                <div class="inputbox">
                                                    <input type="text" placeholder="Have a referral code?" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="bx">
                                            <div class="pr_l">
                                                <ul>
                                                    <li>
                                                        <span>Subscription fee</span>
                                                        <span class="pr"><i class="fas fa-rupee-sign"></i>33,898</span>
                                                    </li>
                                                    <li>
                                                        <span>SGST</span>
                                                        <span class="pr"><i class="fas fa-rupee-sign"></i>3051</span>
                                                    </li>
                                                    <li>
                                                        <span>CGST</span>
                                                        <span class="pr"><i class="fas fa-rupee-sign"></i>3051</span>
                                                    </li>
                                                    <li class="total">
                                                        <span>Total<span> (Incl. of all taxes)</span></span>
                                                        <span class="pr"><i class="fas fa-rupee-sign"></i>40,000</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        )
	}
}
export default ProceedToPay