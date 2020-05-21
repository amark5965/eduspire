import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
class Header extends React.Component{
 openNav=()=>{
    document.getElementById("mySidenav").style.width = "627px";
    document.getElementById("side_overley").style.width = "100%";
  }

closeNav=()=> {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("side_overley").style.width = "0";
}
  
  componentDidMount() {
    $('.dash_header').on('mouseenter mouseleave','.dropdown',function(e){
        var _d=$(e.target).closest('.dropdown');
        if (e.type === 'mouseenter')_d.addClass('show');
        setTimeout(function(){
          _d.toggleClass('show', _d.is(':hover'));
          $('[data-toggle="dropdown"]', _d).attr('aria-expanded',_d.is(':hover'));
        },0);
      });
  }

	render()
	{
	return(    <header class="home_header dash_header">
        <div class="header-top">
            <div class="box l"></div>
            <nav class="navbar navbar-expand-md">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span class="navbar-toggler-icon">X</span>
                </button>
                <div class="mobile_bg"></div>
                <div class="collapse navbar-collapse" id="collapsibleNavbar">
                    <span class="close_icon" style={{display:"none"}}>X</span>
                    <ul class="navbar-nav l">
                        <li class="nav-item std dropdown">
                            <Link to="/" class="nav-link dropdown-toggle"  >Student</Link>
                            {/*<ul class="dropdown-menu">
                                <li>
                                   <p>Switch to the student view here - get back to the courses you’re taking.</p>
                                </li>                               
                            </ul>*/}
                        </li>
                        <li class="nav-item u_lgn dropdown">
                            <a class="nav-link dropdown-toggle" href="javascript:" data-toggle="dropdown"><span>A</span></a>
                            <ul class="dropdown-menu">
                                <li>
                                   <a href="javascript:" class="usr">
                                       <div class="icon">
                                           <span>A</span>
                                       </div>
                                       <div class="inf">
                                           <span class="name">Amit</span>
                                           <span class="email">fullstackamit@outlook.com</span>
                                       </div>
                                   </a> 
                                </li>
                                <li>
                                    <a href="javascript:">Account</a>
                                </li>
                                <li>
                                    <a href="javascript:">Payout setting</a>
                                </li>
                                <li class="lgout">
                                    <a href="javascript:">Lagout</a>
                                </li>
                                <li class="ed">
                                   <a href="javascript:">
                                        <span>
                                            Eduspire for Business
                                           <span>Bring learning to your company</span>
                                       </span>
                                   </a> 
                                </li>
                            </ul>
                        </li> 
                    </ul>
                </div> 
            </nav>
        </div>
    </header>)
	}
}
export default Header