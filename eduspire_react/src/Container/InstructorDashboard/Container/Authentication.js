import React from 'react';
import {Redirect} from 'react-router-dom';
import InstructorRegistration from "./instructor_registration.js"
import {USERID,PLATFORM,INSTRUCTOR_STATUS} from '../../../url.js';
import axios from 'axios';
import UnderReview from '../Component/under_review'
import Loader from '../../../Component/Loader/main_loader';
// import UnderReview from './under_review'
const InstructorAuth=(OldComponent)=>{
  class NewComponent extends React.Component{
    state={status:0,isLoading:false,loading_msg:'Please Wait'}
    componentDidMount()
    {
      this.getStatus();
      //this.setState({isLoading:true,status:1})
    }
    getStatus=()=>{
      const HEADER = {
      headers: {
       'Content-Type': 'application/json;charset=UTF-8',
       'Accept':'application/json',
       'Authorization':"Bearer " + localStorage.getItem('eduspire_token'),
      }
      };
      axios.post(INSTRUCTOR_STATUS,{'user_id':localStorage.getItem('user_id'),'platform':PLATFORM},HEADER).then((res)=>{
        if(res.data.success==1)
        {
          this.setState({status:1,isLoading:true});
          localStorage.setItem('instructor_id',res.data.instructor_id);
        }
        else if(res.data.success==2){
  this.setState({isLoading:true,status:2})
        }
        else {
            this.setState({isLoading:true})
        }
      }).catch((error)=>{

      })
    }
    render()
    {
      const {isLoading,status,loading_msg}=this.state;
      if(isLoading)
      {
        //return(<OldComponent {...this.props}/>)
        if(localStorage.getItem('user_id')!=0 && status==1)
        {
        return(<OldComponent {...this.props}/>)
        }
        else if(localStorage.getItem('user_id')!=0 && status==0)
        {
        return(<InstructorRegistration {...this.props}/>)
        }
        else if(localStorage.getItem('user_id')!=0 && status==2){
          return(<UnderReview {...this.props}/>)
        }
        else {
          return(<Redirect to="/login"/>)
        }
      }
      else {
        return(<Loader message={loading_msg}/>)
      }
    }
  }
  return NewComponent;
}

export default InstructorAuth;
