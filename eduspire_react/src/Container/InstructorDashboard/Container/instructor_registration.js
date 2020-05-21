import React from 'react';
import {Link} from 'react-router-dom';
import $ from 'jquery';
import {INSTRUCTORREGISTRATION,PLATFORM,USERID} from '../../../url';
import Loader from '../../../Component/Loader/main_loader'
import axios from 'axios';
class InstructorRegistration extends React.Component{
    state={states:"",country:"",imgs:[],err_result:[],btn_disable:false,loading:false,loading_msg:''}
    componentDidMount() {
         function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();
                
                reader.onload = function (e) {
                    $('#user_prof_img').attr('src', e.target.result);
                }
                
                reader.readAsDataURL(input.files[0]);
            }
          }
          $("#profile_image").change(function(){
              readURL(this);
          });

    }
  _onChange= (event)=>
   {
          if(event.target.files.length>1)
          {
            alert('Maximum one file is allowed');
            return false;
          }
          this.setState({
              imgs: event.target.files
          })
   }
   createInstructor=(e)=>{
    e.preventDefault();
    this.setState({btn_disable:true,err_result:[]})
    var image = this.state.imgs[0];
    var experience=e.target.experience.value.trim();
    var first_name=e.target.fname.value.trim();
    var last_name=e.target.lname.value.trim();
    var description=e.target.description.value.trim();
    var address=e.target.address.value.trim();
    var city=3;
    var state=e.target.state.value.trim();
    var country=e.target.country.value.trim();
    var pincode=e.target.pincode.value.trim();
    // console.log(company_info+"--"+
    // first_name+"---"+
    // last_name+"---"+description+"--"+
    // address+"--"+
    // city+"--"+
    // state+"--"+
    // country+"--"+
    // pincode+"--"+
    // website_url);
    if( country=="" || state=="" || city=="" || address=='' )
    {
      alert('Please Fill Your Address Details');
      //  alert('Please Fill Your Address Details');
        this.setState({btn_disable:false});
        return false;
    }
    var formData=new FormData();
    formData.append('user_id',localStorage.getItem('user_id'));
    formData.append('platform',PLATFORM);
    formData.append('file',image);
    formData.append('first_name',first_name);
    formData.append('last_name',last_name);
    formData.append('description',description);
    formData.append('term_condition',1);
    formData.append('experience',experience);
    formData.append('address',address);
    formData.append('country',country);
    formData.append('city',city);
    formData.append('state',state);
    formData.append('pincode',pincode);
    axios.post(INSTRUCTORREGISTRATION,formData,{
    headers: {
     'Content-Type': 'application/json;charset=UTF-8',
     'Authorization':"Bearer " + localStorage.getItem('planetshare_web_token'),
    }
    })
    .then(response=>{
      if(response.data.success==3)
      {
        var err_result=response.data.data;
        this.setState({btn_disable:false,err_result:response.data.error});
            $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      }
      if(response.data.success=='1'){
          this.setState({btn_disable:false});
        localStorage.setItem('instructor_id',response.data.instructor_id);
          this.setState({loading:true,loading_msg:'Please Wait While We Are Creating Your Dashboard'});
          setTimeout(()=>{window.location.reload();},2000);
            //           this.props.history.push('/');
            // this.props.history.replace('/dashboard/vendor');
              // this.props.history.push('/dashboard/vendor/home')}
        //  setTimeout(()=>window.location.href="/dashboard/vendor",2000);
      }
      else {
        this.setState({btn_disable:false});
          alert('Something Went Wrong');
      }
    })
    .catch((error)=> {
      this.setState({btn_disable:false});
    alert('Something Went Wrong Please Try After Some Time');
    });
}
	render()
	{
        const {err_result,btn_disable,loading_msg,loading}=this.state
  const Country=(this.props.country.length>0 && this.props.country.map((res,key)=>{
    return(<option value={res.id} key={key} >{res.name}</option>);
  }));
  const State=(this.props.state.length>0 && this.props.state.map((res,key)=>{
    if(this.state.country==res.country_id)
    {
    return(<option value={res.id} key={key}>{res.name}</option>);
    }
  }));
  if(!loading)
  {
	return(
            <div>
                <div class="vend_header">
                    <div class="container">
                        <div class="logo">
                            <a href="index.html"><img src="images/logo.png" alt="" /></a>
                        </div>
                    </div>
                </div>
                <section class="inner_cont instruct_p">
                    <article class="vendor_profile">
                        <div class="container">
                        {err_result.length >0 && <div class="error_box">
                        <ul>
                          {err_result.map((res,key)=>{
                            return(<li key={key}><p>{res}</p></li>)
                          })}
                        </ul>
                      </div>}
                            <div class="vend_cont">
                                <div class="step_head">
                                    <h2>Personal Info</h2>
                                    <p>Tell us a bit about yourself. This information will appear on your public profile, so that potential service buyers can get to know you better.</p>
                                    <p class="small">* Mandatory fields</p>
                                </div>
                                <form class="form_control" onSubmit={this.createInstructor}>
                                    <div class="fields name">
                                        <div class="label req">
                                            <label>
                                                <span>Full Name</span>
                                                <small>Private</small>
                                            </label>
                                            <p class="txt">Ex. John Smith</p>
                                        </div>
                                        <div class="inputbox">
                                            <input type="text" name="first_name" class="first-name"  placeholder="First Name" name="fname" required/>
                                            <input type="text" name="last_name" class="last-name" placeholder="Last Name" name="lname" required/>
                                        </div>
                                    </div>
                                    <div class="fields u_prof">
                                        <div class="label req">
                                            <label>
                                                <span>Profile Picture</span>
                                                <small></small>
                                            </label>
                                            <p class="txt">Add a profile picture of yourself so customers will know exactly who they’ll be working with.</p>
                                        </div>
                                        <div class="inputbox">
                                <div class="prof_photo">
                                    <label for="profile_image">
                                    <input
                                        ref="file"
                                        type="file"
                                        name="user[image]"
                                        accept="image/png,image/jpeg"
                                        id="profile_image"

                                        onChange={this._onChange}/>
                                        <input type="file"  />
                                        {this.state.imgs && [...this.state.imgs].map((file)=>(
                                                      <img src="" id="upload_img"  src={URL.createObjectURL(file)} alt="" />   ))}


                                        {/*<input type="file" accept="image/png,image/jpeg" class="hidden" id="profile_image" name="profile_image" required/>
                                        <img src="" id="user_prof_img" alt="" />*/}
                                    </label>
                                </div>
                                        </div>
                                    </div>
                                    <div class="fields compi">
                                        <div class="label req">
                                            <label>
                                                <span>Instructor Info</span>
                                                <small></small>
                                            </label>
                                            <p class="txt"></p>
                                        </div>
                                        <div class="inputbox">
                                            <textarea placeholder="Write about yourself here." name="description"></textarea>
                                        </div>
                                    </div>
                                <div class="fields name">
                                        <div class="label req">
                                            <label>
                                                <span>Experience(in years)</span>
                                                <small></small>
                                            </label>
                                            <p class="txt"></p>
                                        </div>
                                        <div class="inputbox">
                                            <input type="text"  placeholder="Experience" name="experience" required/>
                                        </div>
                                    </div>
                                    <div class="fields name">
                                        <div class="label req">
                                            <label>
                                                <span>Address</span>
                                                <small></small>
                                            </label>
                                            <p class="txt"></p>
                                        </div>
                                        <div class="inputbox">
                                            <select name="country" onChange={(e)=>this.setState({country:e.target.value})} id="country_list" required>
                                                <option selected disabled value="">Select Country</option>
                                                {Country}
                                            </select>
                                            <select  name="state" onChange={(e)=>this.setState({states:e.target.value})} id="state_list" required >
                                                <option selected disabled value="">Select State</option>
                                                {State}
                                            </select>
                                            <input type="text"  placeholder="Pincode" name="pincode" required/>
                                        </div>
                                    </div>
                                    <div class="fields">
                                        <div class="label req">

                                            <p class="txt"></p>
                                        </div>
                                        <div class="inputbox">
                                            <textarea placeholder="Write your company address here." name="address" required></textarea>
                                        </div>
                                    </div>
                                    {/*<div class="fields">
                                        <div class="label req">
                                            <label>
                                                <span>Description</span>
                                                <small></small>
                                            </label>
                                            <p class="txt"></p>
                                        </div>
                                        <div class="inputbox">
                                            <textarea minlength="150" maxlength="600" placeholder="Share a bit about your work experience, cool projects you’ve completed, and your area of expertise."></textarea>
                                            <div class="inf">
                                                <span>min. 150 characters</span>
                                                <span class="char-count">0/600</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="fields">
                                        <div class="label">
                                            <label>
                                                <span>Personal Website</span>
                                                <small>Private</small>
                                            </label>
                                            <p class="txt">Include a link to your personal website or portfolio with your work samples.</p>
                                        </div>
                                        <div class="inputbox">
                                            <input type="url"  placeholder="Provide a link to your own professional website" />
                                        </div>
                                    </div>
                                    <div class="fields cont">
                                        <div class="label">
                                            <label>
                                                <span><i class="fa fa-envelope" aria-hidden="true"></i> Email</span>
                                                <small>Private</small>
                                            </label>
                                            <p class="txt"></p>
                                        </div>
                                        <div class="inputbox">
                                            <button type="button" class="btndefault">Add Email</button>
                                        </div>
                                    </div>
                                    <div class="fields cont">
                                        <div class="label">
                                            <label>
                                                <span><i class="fa fa-phone" aria-hidden="true"></i> Phone Number</span>
                                                <small>Private</small>
                                            </label>
                                            <p class="txt">We'll never share your phone number.</p>
                                        </div>
                                        <div class="inputbox">
                                            <button type="button" class="btndefault">Add Phone Number</button>
                                        </div>
                                    </div>*/}
                                    <div class="buttons">
                                        <button type="submit" class="btndefault" disabled={btn_disable}>Finish</button>
                                    </div>
                                </form>
                                <div class="clearfix"></div>
                            </div>
                        </div>
                        <div class="clearfix"></div>
                    </article>
                    <div class="clearfix"></div>
                </section>
            </div>
        )
     }
    else
    {
        return(<Loader message={loading_msg}/>)
    }
	}
}
export default InstructorRegistration