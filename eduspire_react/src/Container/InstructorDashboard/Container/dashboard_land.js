import React, { Component } from 'react';
import Header from '../Component/header';
import Footer from '../Component/footer';
import routes from '../routes';
import Parent from '../../../Component/Parent';
import Auth from './Authentication';
import AddCourse from './add_new_course';
import DashboardHome from './dashboard_home';
import Sidebar from '../Component/sidebar'
// import Authentication from './Container/Authentication/Authentication';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
 class DashboardLand extends Component{ 
  render() {
    return (
        <div class="top_div">
        <Header/>
        <section class="dash_cont">
        <Sidebar/>
        <Route path="/dashboard" exact={true} component={()=><DashboardHome {...this.props}/>}/>
        <Route path="/dashboard/add_course" component={()=><AddCourse{...this.props}/>}/> 
        <Footer/>
        </section>
        </div>
    );
  }
}

// export default Auth(DashboardLand);
export default DashboardLand;

          // {routes.map((route, idx) => {
          //     return route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
          //         <Parent><Header {...this.props} /><route.component {...props}/><Footer/></Parent>
          //       )} />)
          //       : (null);
          //   },
          // )}