import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import Pagination from "react-js-pagination";
import {INSTRUCTORCOURSELIST,PLATFORM} from '../../../url';
import axios from 'axios';
import Loader from '../../../Component/Loader/main_loader';
class DashboardHome extends React.Component{
    state={status:0,isLoading:false,loading_msg:'Please Wait',currentPage:1,
        total:1,itemsCountPerPage:10,pageRangeDisplayed:3,courseList:[]}
    componentDidMount()
    {
     // this.getData(1,'')
      //this.setState({isLoading:true,status:1})
       setTimeout(()=>this.setState({isLoading:true}),1000)
    }
  getData=(page,keyword)=>{
      const HEADER = {
      headers: {
       'Content-Type': 'application/json;charset=UTF-8',
       'Accept':'application/json',
       'Authorization':"Bearer " + localStorage.getItem('eduspire_token'),
      }
      };
      axios.post(`${INSTRUCTORCOURSELIST}?page=${page}`,{'user_id':localStorage.getItem('user_id'),'instructor_id':localStorage.getItem('instructor_id'),'platform':PLATFORM,
      'limit':this.state.itemsCountPerPage,
      'searchKeyword':keyword,},HEADER).then((res)=>{
        if(res.data.success==1)
        {
          var response=res.data.data;
          this.setState({currentPage:response.current_page,courseList:response.data,total:response.total});
          setTimeout(()=>this.setState({isLoading:true}),1000)
        }
      }).catch((error)=>{

      })
    }
	render()
	{
     const {courseList,isLoading,loading_msg}=this.state;
     const CourseList=(courseList.length>0?courseList.map((res,key)=>{
        return(<li>
            <div class="icon">
                <img src="images/icon_dash_course1.png" alt="" />
            </div>
            <div class="info">
                <a href="javascript:" class="edit_mng"><span>Edit / manage course</span></a>
                <div class="box l">
                    <p>Class 12</p>
                    <p>DRAFT <span>Public</span></p>
                </div>
                <div class="box r">
                    <div class="prog_bar">
                        <label>Finish your course</label>
                        <div class="bar">
                            <span class="fill" style={{width: "5%"}}></span>
                        </div>
                    </div>
                </div>
            </div>
        </li>)
     }):<h3>No Result Found</h3>)
     if(isLoading)
     {
	  return(
        <div class="d_cont_ar">
            <div class="d_container">
                <h2>Courses</h2>
                <div class="top_tools">
                    <div class="buttons">
                        <Link to="/dashboard/add_course" class="btndefault">New Course</Link>
                    </div>
                    <div class="searchbox">
                        <form action="javascript:;">
                            <div class="inputbox">
                                <input type="text" placeholder="Search your courses" onChange={(e)=>{this.getData(this.state.currentPage,e.target.value)}}/>
                                <button type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
                            </div>
                            <div class="clearfix"></div>
                        </form>
                        <div class="clearfix"></div>
                    </div>
                </div>
                <div class="d_course_l">
                    <ul>
                        {CourseList}
                    </ul>
                </div>
                 <Pagination
                      activePage={this.state.currentPage}
                      itemsCountPerPage={this.state.itemsCountPerPage}
                      totalItemsCount={this.state.total}
                      pageRangeDisplayed={this.state.pageRangeDisplayed}
                      onChange={this.getData}
                      itemClass='page-item'
                      linkClass="page-link bold"
                    />
            </div>
        </div>
        )
     }
     else
     {
        return(<Loader message={loading_msg}/>)
     }
	}
}
export default DashboardHome