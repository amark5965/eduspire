import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import App from './App';

// import Home from './Container/Home';
// import Dashboard from './Container/InstructorDashboard/Container/dashboard_land';
// import Header from './Component/header';
// import Footer from './Component/footer';
// import routes from './routes';
// import Parent from './Component/Parent'
class MainContainer extends React.Component{
  render()
  {
		  return(
		    <HashRouter>
		      <Route path="/" component={()=><App />} />
		    </HashRouter>)
  }
}
ReactDOM.render(
  <MainContainer />,
  document.getElementById('root')
);