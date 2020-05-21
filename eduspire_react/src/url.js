const baseurl="http://localhost/OTT_LIVE_WORK/OfficeProject/ATUL/edusphere_api/public/api"
export const PLATFORM="WEB";
export const USERID=localStorage.getItem('user_id')==null?0:localStorage.getItem('user_id');
export const SENDMOBILEOTP=baseurl+"/sendMobileOtp"
export const SENDEMAILOTP=baseurl+"/sendMailOtp";
export const LOGIN=baseurl+"/verifyLogin";
export const REGISTER=baseurl+"/verifyRegister";
export const LOGOUT=baseurl+"/logout";
export const INSTRUCTOR_STATUS=baseurl+"/authenticate_instructor";
export const GETHOMEDATA=baseurl+"/getHomeData";
export const INSTRUCTORREGISTRATION=baseurl+"/create_instructor";
export const INSTRUCTORCOURSELIST=baseurl+"/get/instructor/cousreList";


