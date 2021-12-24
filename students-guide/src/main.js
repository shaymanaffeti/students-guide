import Vue from 'vue'
import App from './App.vue'

import Router from "vue-router";
import courses from "./components/courses.vue";
import editP from "./components/editProfil.vue";
import profile from "./components/profile.vue";
//import 'bootstrap/dist/css/bootstrap.css'
import TeacherPost from './components/Teacher-Post.vue'
import teacherChangePassword from "./components/changePass.vue";
import studentChangePassword from "./components/studentChangePassword.vue";
import signin from "./components/signin.vue";
import studentProfile from "./components/studentProfil.vue";
import about from "./components/about.vue";
import detail from "./components/coursedetail.vue";
import signUp from "./components/signUp.vue";
import forgotPassword from "./components/forgotPassword.vue"


Vue.use(Router);
var router = new Router({
  mode: "history",

  routes: [
    {
      path: "/edit",
      name: "edit",

      component: editP
    },
    {
      path: "/profile",
      name: "profil",
      component: profile
    },
    {
      path: "/teacherChangePass",
      name: "teacherChangePassword",
      component: teacherChangePassword
    },
    {
      path: "/homeT",
      name: "courses",
      component: courses
    },
    {
      path: "/details",
      name: "detail",
      component: detail
    },
    {
      path: "/signin",
      name: "signin",
      component: signin
    },
    {
      path: "/forgot password",
      name: "forgotPassword",
      component: forgotPassword
    },
    {
      path: "/",
      name: "signup",
      component: signUp
    },
    {
      path: "/post",
      name: "post",

      component: TeacherPost
    },
    {
      path: "/studentChangePass",
      name: "studentChangePassword",
      component: studentChangePassword
    },
    {
      path: "/studentProfile",
      name: "studentProfile",
      component: studentProfile
    },
   
    {
      path: "/about",
      name: "about",
      component: about
    }
  ]
});

new Vue({
  router,
  el: "#app",
  render: h => h(App)
});
