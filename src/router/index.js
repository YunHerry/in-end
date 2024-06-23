import { createWebHashHistory, createRouter } from "vue-router";

import IndexView from "../views/IndexView.vue";
import EssayView from "../views/EssayView.vue";
import ResourceView from "../views/ResourceIndexView.vue";
import ResourceDetailView from "../views/ResourceDetailView.vue";
import ProfileView from "../views/ProfileView.vue";
import MyView from "../views/MyView.vue";
import CampusNewView from "../views/index/CampusNewView.vue";
import HotRcommendView from "../views/index/HotRcommendView.vue";
import LoginView from "../views/LoginView.vue";
import LoginIndex from "../views/login/LoginIndex.vue";
import Register from "../views/login/Register.vue";
import ModifyPwd from "../views/login/ModifyPwd.vue";
import VailSuccess from "../views/login/VailSuccess.vue";
import VailFail from "../views/login/VailFail.vue"
const routes = [
  {
    path: "/",
    component: IndexView,
    redirect: "hotRemmend",
    children: [{path: "hotRemmend",component: HotRcommendView},{ path: "campusNew", component: CampusNewView }],
  },
  { path: "/essay", component: EssayView },
  { path: "/resource", component: ResourceView },
  { path: "/resourceDetail", component: ResourceDetailView },
  { path: "/profile", component: ProfileView },
  { path: "/my", component: MyView },
  { path: "/login",component: LoginView,
    redirect: "/login/index",
    children: [{
      path: "index",component: LoginIndex
    },{
      path: "register",
      component: Register,
    },{
      path: "modifyPwd",
      component: ModifyPwd
    },{
      path: "mailSuccess",
      component: VailSuccess,
    },{
      path: "mailFail",
      component: VailFail,
    }]
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
