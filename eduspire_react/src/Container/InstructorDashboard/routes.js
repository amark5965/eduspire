import React from 'react';
import Loadable from 'react-loadable';
import Loader from '../../Component/Loader/main_loader'
function Loading() {
  return (<Loader message="Please Wait"/>);
}
const DASHBOARDHOME = Loadable({
  loader: () => import('./Container/dashboard_home.js'),
  loading: Loading,
});
const NOT_FOUND = Loadable({
  loader: () => import('../../Component/not_found/not_found.js'),
  loading: Loading,
});
const ADDNEWCOURSE = Loadable({
  loader: () => import('./Container/add_new_course.js'),
  loading: Loading,
});

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [

    { path:'/dashboard',exact:true,component: DASHBOARDHOME },
    { path:'/dashboard/add_course',exact:true,component: ADDNEWCOURSE },
    { path:'*',exact:true,name: 'Not Found',  component: NOT_FOUND },
];
export default routes;