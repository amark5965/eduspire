import React, { Component } from 'react';
import Header from './Component/header';
import Footer from './Component/footer';
import routes from './routes';
import Parent from './Component/Parent'
// import Authentication from './Container/Authentication/Authentication';
import {BrowserRouter, Router,Link,Route,Switch,HashRouter,Redirect} from "react-router-dom";
import axios from 'axios';
import {PLATFORM,USERID,GETHOMEDATA} from './url';
import Loader from './Component/Loader/main_loader'
 class App extends Component{ 
  state={city:[],country:[],state:[],subjects:[],courses:[],languages:[],lang_array:[],isLoading:false}
  componentDidMount()
  {
    setTimeout(()=>{this.setState({isLoading:true})},200)
    // axios.get(GETHOMEDATA).then((res)=>{
    //   if(res.data.success==1)
    //   {
    //     let response=res.data;
    //     this.setState({city:response.cities,country:response.countries,state:response.states,subjects:response.subjects,courses:response.courses,languages:response.languages,lang_array:response.lang_array,isLoading:true})
    //   }
    // }).catch((error)=>{

    // })
  }
  render() {
    const {state,city,country,subjects,courses,languages,lang_array,isLoading}=this.state
    if(isLoading)
    {
    return (
        <div class="top_div">
        <Switch>
          {routes.map((route, idx) => {
            const Url=route.path.split('/')[1];
            if(Url=="dashboard")
            {
              return(route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                  <route.component {...this.props} state={state} country={country} subjects={subjects} courses={courses} city={city} languages={languages} lang_array={lang_array}/>
                )} />)
                : (null))
            }
            else
            {
              return(route.component ? (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={props => (
                  <Parent><Header {...this.props} /><route.component {...props} state={state} country={country} subjects={subjects} courses={courses} city={city} languages={languages} lang_array={lang_array}/><Footer/></Parent>
                )} />)
                : (null))
            }
            }
          )}
        </Switch>  
        </div>
    );
    }
    else
    {
      return(<Loader />)
    }
  }
}

export default App;