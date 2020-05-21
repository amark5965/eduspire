import React from 'react';
import Loadable from 'react-loadable';
import Loader from './Component/Loader/main_loader'
function Loading() {
  return (<Loader message="Please Wait"/>);
}
const HOME = Loadable({
  loader: () => import('./Container/Home.js'),
  loading: Loading,
});
const NOT_FOUND = Loadable({
  loader: () => import('./Component/not_found/not_found.js'),
  loading: Loading,
});
const GETSUBSCRIPTION = Loadable({
  loader: () => import('./Container/get_subscription'),
  loading: Loading,
});
const LIVECLASSES = Loadable({
  loader: () => import('./Container/live_classes'),
  loading: Loading,
});
const BATCHES = Loadable({
  loader: () => import('./Container/batches'),
  loading: Loading,
});
const CHOOSEYOURGOAL = Loadable({
  loader: () => import('./Container/choose_your_goal'),
  loading: Loading,
});
const TOPEDUCATOR = Loadable({
  loader: () => import('./Container/top_educator'),
  loading: Loading,
});
const UPCOMINGCOURSES = Loadable({
  loader: () => import('./Container/upcoming_courses'),
  loading: Loading,
});
const RECENTLYSTARTEDCOURSE = Loadable({
  loader: () => import('./Container/recently_started_course'),
  loading: Loading,
});
const POPULARCOURSES = Loadable({
  loader: () => import('./Container/popular_courses'),
  loading: Loading,
});
const COMPREHENSIVESYLLABUS = Loadable({
  loader: () => import('./Container/comprehensive_syllabus'),
  loading: Loading,
});
const TESTSERIES = Loadable({
  loader: () => import('./Container/test_series'),
  loading: Loading,
});
const PAYMENTPREVIEW = Loadable({
  loader: () => import('./Container/proceed_to_pay'),
  loading: Loading,
});
const INSTRUCTORHOME = Loadable({
  loader: () => import('./Component/become_instructor'),
  loading: Loading,
});
const INSTRUCTORDASHBOARD = Loadable({
  loader: () => import('./Container/InstructorDashboard/Container/dashboard_land'),
  loading: Loading,
});
const ADDNEWCOURSE = Loadable({
  loader: () => import('./Container/InstructorDashboard/Container/add_new_course'),
  loading: Loading,
});
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [

    { path:'/',exact:true,component: HOME },
    { path:'/get_subscription',exact:true,component: GETSUBSCRIPTION },
    { path:'/live_classes',exact:true,component: LIVECLASSES },
    { path:'/batches',exact:true,component: BATCHES },
    { path:'/choose_your_goal',exact:true,component: CHOOSEYOURGOAL },
    { path:'/top_educator',exact:true,component: TOPEDUCATOR },
    { path:'/upcoming_courses',exact:true,component: UPCOMINGCOURSES },
    { path:'/recently_started_course',exact:true,component: RECENTLYSTARTEDCOURSE },
    { path:'/popular_courses',exact:true,component: POPULARCOURSES },
    { path:'/comprehensive_syllabus',exact:true,component: COMPREHENSIVESYLLABUS },
    { path:'/test_series',exact:true,component: TESTSERIES },
    { path:'/proceed_to_pay',exact:true,component: PAYMENTPREVIEW },
    { path:'/become_instructor',exact:true,component: INSTRUCTORHOME },
    { path:'/dashboard',component: INSTRUCTORDASHBOARD },
    // { path:'/dashboard/add_course',exact:true,component: ADDNEWCOURSE },
    { path:'*',exact:true,name: 'Not Found',  component: NOT_FOUND },
];

export default routes;