import React from 'react';
import {Link} from 'react-router-dom';
import Parent from '../Component/Parent';
import $ from 'jquery';
import Loader from 'react-loader-spinner'
import {LOGIN,SENDMOBILEOTP,SENDEMAILOTP,REGISTER,PLATFORM,LOGOUT} from '../url';
import axios from 'axios';
class Header extends React.Component{
    state={
        login_status:true,login_type:"mobile",isLoading:false,signup_status:false,otp_status:false,mobile_num:'',btn_disable:true,email_add:'',otp:'',name:''
    }

     openNav=()=>{
        document.getElementById("mySidenav").style.width = "627px";
        document.getElementById("side_overley").style.width = "100%";
      }

    closeNav=()=> {
        this.setState({isLoading:false,login_status:true,login_type:"mobile",signup_status:false,otp_status:false,mobile_num:'',btn_disable:true,email_add:''})
      document.getElementById("mySidenav").style.width = "0";
      document.getElementById("side_overley").style.width = "0";
    }
    emailMobileChange=(value,type)=>{
        if(type=="mobile")
        {
            var val=value.replace(/[^0-9\.]/g,'');
            if(this.state.mobile_num.length==9)
            {
              this.setState({mobile_num:val,btn_disable:false})
            }
            else
            {
              this.setState({mobile_num:val,btn_disable:true})
            }
        }
        else if(type=="email")
        {
             var re = /\S+@\S+\.\S+/;
            if(re.test(value))
            {
               this.setState({email_add:value,btn_disable:false})
            }
            else
            {
              this.setState({email_add:value,btn_disable:true})  
            }
        }
        else if(type=="otp")
        {
            var val=value.replace(/[^0-9\.]/g,'');
            if(this.state.otp.length==3)
            {
              this.setState({otp:val,btn_disable:false})
            }
            else
            {
              this.setState({otp:val,btn_disable:true})
            }
        }
     }
     sendMobileOtp=(type)=>{
                        if(type=="login")
                {
                  this.setState({isLoading:false,otp_status:true,signup_status:false,login_status:true})
                }
                else
                {
                  this.setState({isLoading:false,otp_status:true,login_status:false,signup_status:true})
                }
        // $('#error_msg').html('');
        // this.setState({btn_disable:true,isLoading:true})
        // axios.post(SENDMOBILEOTP,{tag:type,phone_number:this.state.mobile_num,country_code:"+91",platform:PLATFORM}).then((res)=>{
        //     if(res.data.success==3)
        //     {
        //         this.setState({btn_disable:false})
        //     } 
        //     else if(res.data.success==1)
        //     {
        //         if(type=="login")
        //         {
        //           this.setState({isLoading:false,otp_status:true,signup_status:false,login_status:true})
        //         }
        //         else
        //         {
        //           this.setState({isLoading:false,otp_status:true,login_status:false,signup_status:true})
        //         }
        //     }
        //     else if(res.data.success==2)
        //     {
        //         this.setState({btn_disable:false,isLoading:false})
        //         $('#error_msg').html(res.data.msg)
        //     }
        // }).catch((error)=>{
        //     this.setState({btn_disable:false,isLoading:false})
        // })
     }
     sendEmailOtp=(type)=>{
         this.setState({isLoading:false,otp_status:true,signup_status:false,login_status:true})
        // $('#error_msg').html('');
        // this.setState({btn_disable:true,isLoading:true})
        // axios.post(SENDEMAILOTP,{email:this.state.email_add,platform:PLATFORM}).then((res)=>{
        //     if(res.data.success==3)
        //     {
        //         this.setState({btn_disable:false})
        //     } 
        //     else if(res.data.success==1)
        //     {
   
        //           this.setState({isLoading:false,otp_status:true,signup_status:false,login_status:true})
        //     }
        //     else if(res.data.success==2)
        //     {
        //         this.setState({btn_disable:false,isLoading:false})
        //         $('#error_msg').html(res.data.msg)
        //     }
        // }).catch((error)=>{
        //     this.setState({btn_disable:false,isLoading:false})
        // })
     }
    RegisterHandler=(type)=>{
        $('#error_msg').html('');
        this.setState({btn_disable:true,isLoading:true})
        const {mobile_num,email_add,otp,name}=this.state;
        axios.post(REGISTER,{region:"UP",mobile:mobile_num,email:email_add,name:name,otp:otp,platform:PLATFORM}).then((res)=>{
            if(res.data.success==3)
            {
                this.setState({btn_disable:false,isLoading:false})
            } 
            else if(res.data.success==1)
            {
                let response=res.data.data;
                localStorage.setItem('mobile',response.mobile);
                localStorage.setItem('email',response.email);
                localStorage.setItem('user_name',response.name);
                localStorage.setItem('eduspire_token',res.data.token);
                localStorage.setItem('user_id',response.id)
               this.setState({isLoading:false,login_status:true,login_type:"mobile",signup_status:false,otp_status:false,mobile_num:'',btn_disable:true,email_add:''})
                //window.location.href('/');
                this.props.history.replace('/')
                //setTimeout(()=>{window.location.href('/')},1000)
            }
            else if(res.data.success==2)
            {
                this.setState({btn_disable:false,isLoading:false})
                $('#error_msg').html(res.data.msg)
            }
        }).catch((error)=>{
            this.setState({btn_disable:false,isLoading:false})
        })
     }
    LoginHandler=(type,value)=>{
        $('#error_msg').html('');
        this.setState({btn_disable:true,isLoading:true})
        const {otp}=this.state;
        axios.post(LOGIN,{mobile_email:value,tag:type,otp:otp,platform:PLATFORM}).then((res)=>{
            if(res.data.success==3)
            {
                this.setState({btn_disable:false,isLoading:false})
            } 
            else if(res.data.success==1)
            {
                let response=res.data.data;
                localStorage.setItem('mobile',response.mobile);
                localStorage.setItem('email',response.email);
                localStorage.setItem('user_name',response.name);
                localStorage.setItem('eduspire_token',res.data.token)
                localStorage.setItem('user_id',response.id)
               //this.setState({isLoading:false,login_status:true,login_type:"mobile",signup_status:false,otp_status:false,mobile_num:'',btn_disable:true,email_add:''})
                //window.location.href('/');
                //this.props.history.replace('/')
                setTimeout(()=>{window.location.reload('/')},1000)
            }
            else if(res.data.success==2)
            {
                this.setState({btn_disable:false,isLoading:false})
                $('#error_msg').html(res.data.msg)
            }
        }).catch((error)=>{
            this.setState({btn_disable:false,isLoading:false})
        })
     }
     logoutHandler=()=>{
        $('#error_msg').html('');
        const HEADER = {
            headers: {
             'Content-Type': 'application/json;charset=UTF-8',
             'Accept':'application/json',
             'Authorization':"Bearer " + localStorage.getItem('eduspire_token'),
            }
            };
        const {mobile_num,email_add,otp,name}=this.state;
        axios.post(LOGOUT,{},HEADER).then((res)=>{
            if(res.data.success==3)
            {

            } 
            else if(res.data.success==1)
            {
                localStorage.clear();
               this.setState({isLoading:false,login_status:true,login_type:"mobile",signup_status:false,otp_status:false,mobile_num:'',btn_disable:true,email_add:''})
                //this.props.history.replace('/')
                setTimeout(()=>{window.location.reload('/')},1000)
            }
            else if(res.data.success==2)
            {
                $('#error_msg').html(res.data.msg)
            }
        }).catch((error)=>{

        }) 
     }

	render()
	{
    const {login_status,login_type,signup_status,isLoading,otp_status,mobile_num,btn_disable,email_add,name,otp}=this.state;
	return(<header class="home_header">
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
                                <Link to="/become_instructor"  class="btndefault">Try Eduspire for Business</Link>
                            </ul>
                        </li> 
                        <li class="nav-item">
                            {localStorage.getItem('eduspire_token')==null && <a class="nav-link btn" href="javascript:" onClick={this.openNav}>Login</a>}
                            {localStorage.getItem('eduspire_token')!=null && <a class="nav-link btn" href="javascript:" onClick={this.logoutHandler}>Logout</a>}
                             <div class="side_overley" id="side_overley" onClick={this.closeNav}></div>
                            <div id="mySidenav" class="sidenav">
                                <div class="login_cont">
                                    <a href="javascript:" class="closebtn" onClick={this.closeNav}>&times;</a>
                                    <form action="javascript:" class="reg_form">
                                 {isLoading && <Loader
                                     type="Rings"
                                     color="#00BFFF"
                                     height={100}
                                     width={100}
                             
                                  />}
                                        {(login_status && otp_status==false && !isLoading) && <div class="login_area" id="login_area">
                                            <h2>Login</h2>
                                            <p class="o_l">or <a href="javascript:" id="create_acc" onClick={()=>{this.setState({login_status:false,signup_status:true,otp_status:false,email_add:'',mobile_num:'',btn_disable:true,otp:''})}}>create your account</a></p>
                                            <div class="field dropdown">
                                               {(login_type=="mobile" && otp_status==false) &&  <Parent><div class="flag dropdown-toggle" id="cont_code" data-toggle="dropdown">
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
                                                </div></Parent>}
                                                {(login_type=="mobile" && otp_status==false) && <input type="text" id="number" placeholder="Enter your mobile number" value={mobile_num} onChange={(e)=>{this.emailMobileChange(e.target.value,"mobile")}}/>}
                                                {(login_type=="email" && otp_status==false) &&<input type="email" id="email" placeholder="Email address" value={email_add} onChange={(e)=>{this.emailMobileChange(e.target.value,"email")}}/>}
                                            </div>
                                            <div class="buttons">
                                                {login_type=="mobile" && <button type="button" className={`btn btn_login ${btn_disable==true?"":"active"}`}  disabled={btn_disable} onClick={()=>this.sendMobileOtp('login')}>Login</button>}
                                                {login_type=="email" && <button type="button" className={`btn btn_login ${btn_disable==true?"":"active"}`}  disabled={btn_disable} onClick={()=>this.sendEmailOtp()}>Login</button>}
                                                {login_type=="mobile" && <a href="javascript:" id="log_by_email" onClick={()=>{this.setState({login_type:"email",btn_disable:true
                                                    ,mobile_num:'',email_add:''})}}>Continue with email</a>}
                                                {login_type=="email" && <a href="javascript:" id="log_by_email" onClick={()=>{this.setState({login_type:"mobile",btn_disable:true,email_add:'',mobile_num:''})}}>Continue with mobile</a>}
                                            </div>
                                            <div class="note">
                                                <p id="login_note">Having trouble? Please contact <a href="mailto:help@eduspire.com">help@eduspire.com</a> for further support.</p>
                                            </div>
                                        </div>}
                                        {(signup_status && otp_status==false && !isLoading) && <Parent>
                                        <div class="login_area signup_area" id="signup_area">
                                            <h2>Join Eduspire</h2>
                                            <p class="o_l">or <a href="javascript:" id="login_acc" onClick={()=>{this.setState({login_status:true,signup_status:false,otp_status:false,email_add:'',mobile_num:'',btn_disable:true})}}>login to your account</a></p>
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
                                                <input type="tel" id="tel" placeholder="Enter your mobile number" onChange={(e)=>{this.emailMobileChange(e.target.value,"mobile")}} value={mobile_num}/>
                                            </div>
                                            <div class="buttons">
                                                <button type="button" className={`btn btn_login ${btn_disable==true?"":"active"}`}  disabled={btn_disable} onClick={()=>this.sendMobileOtp('register')} >Continue</button>
                                            </div>

                                            <div class="note">
                                                <p id="signup_note">By signing up, you agree to <a href="javascript:">Terms & Conditions</a> and  <a href="javascript:">Privacy Policy</a>.</p>
                                            </div>
                                        </div>
                                        </Parent>}
                                        {(otp_status && login_type=="mobile" && !isLoading) && <div class="login_area otp_ar" id="otp_ar">
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
                                                <input type="tel" id="tel" placeholder="Enter your mobile number" value={mobile_num}/>
                                                <div class="icon_edit" onClick={()=>{this.setState({otp_status:false,otp:''})}}>Edit</div>
                                            </div>
                                            <div class="field">
                                                <input type="password" placeholder="One time password" value={otp} onChange={(e)=>{this.emailMobileChange(e.target.value,'otp')}}/>
                                            </div>
                                            {signup_status && <Parent><div class="field">
                                                <input type="text" placeholder="Name"  value={name} onChange={(e)=>{this.setState({name:e.target.value})}}/>
                                            </div>
                                            <div class="field">
                                                <input type="text" placeholder="Email address" value={email_add} onChange={(e)=>{this.emailMobileChange(e.target.value,'email')}}/>
                                            </div>
                                            <div class="field">
                                                <div class="select_batch" id="select1">
                                                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false"><span class="selected">State of residence</span> <span class="icon"><i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></span></button>
                                                    <ul class="dropdown-menu option" role="menu">
                                                        <li id="1"><a href="javascript:">State of residence</a></li>
                                                        <li id="2"><a href="javascript:">Delhi</a></li>
                                                        <li id="3"><a href="javascript:">Bihar</a></li>
                                                        <li id="4"><a href="javascript:">Chandigadh</a></li>
                                                    </ul>
                                                </div>
                                            </div></Parent>}
                                            <div class="buttons">
                                                {signup_status && <button type="button" class="btn btn_login" onClick={()=>{this.RegisterHandler()}}>Verify OTP</button>}
                                                {login_status && <button type="button" class="btn btn_login" className={`btn btn_login ${btn_disable==true?"":"active"}`}  disabled={btn_disable} onClick={()=>{this.LoginHandler('mobile',mobile_num)}}>Verify OTP</button>}
                                                
                                                <p>
                                                    <a href="javascript:" id="resend_otp">Resend OTP</a>  
                                                    <span>Or</span>  
                                                    <a href="callto:3984939292" id="bycall">Call</a>
                                                </p>
                                            </div>
                                            <div class="note">
                                                <p id="signup_note">By signing up, you agree to <a href="javascript:">Terms & Conditions</a> and  <a href="javascript:">Privacy Policy</a>.</p>
                                            </div>
                                        </div>}
                            {(otp_status && login_type=="email" && !isLoading) && <div class="login_area otp_ar" id="otp_ar">
                                <h2>Enter OTP</h2>
                                <p class="o_l">We've sent an OTP to your registered email </p>
                                <div class="field ">
                                    <input type="text" id="text" placeholder="Enter your email" value={email_add} onChange={(e)=>{this.emailMobileChange(e.target.value,'email')}}/>
                                    <div class="icon_edit" onClick={()=>{this.setState({otp_status:false})}}>Edit</div>
                                </div>
                                <div class="field">
                                    <input type="password" placeholder="One time password" value={otp} onChange={(e)=>{this.emailMobileChange(e.target.value,'otp')}}/>
                                </div>
                                <div class="buttons">
                                    <button type="button" class="btn btn_login" className={`btn btn_login ${btn_disable==true?"":"active"}`}  disabled={btn_disable} onClick={()=>{this.LoginHandler('email',email_add)}}>Verify OTP</button>
                                    <p>
                                        <a href="javascript:" id="resend_otp">Resend OTP</a>  
                                        <span>Or</span>  
                                        <a href="callto:3984939292" id="bycall">Call</a>
                                    </p>
                                </div>
                                <div class="note">
                                        <p id="login_note">Having trouble? Please contact <a href="mailto:help@eduspire.com">help@eduspire.com</a> for further support.</p>
                                    </div>
                                </div>}
                                <div id="error_msg" style={{color:'red'}}></div>
                                    </form>
                                   
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