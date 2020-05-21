import React from 'react';
import {Link} from 'react-router-dom'
class Sidebar extends React.Component{
render()
    {
    return(  
    <div class="dash_sidebar">
            <ul class="side_l">
                <li class="lg">
                    <Link to="/dashboard" ><img src="images/logo_d.png" alt="" /></Link>
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
        </div>)
    }
  }
export default Sidebar;