import { createWebHashHistory, createRouter } from "vue-router";

import IndexView from "../views/IndexView.vue";
import EssayView from "../views/EssayView.vue";
import ResourceView from "../views/ResourceIndexView.vue";
import ResourceDetailView from "../views/ResourceDetailView.vue";
import ProfileView from "../views/ProfileView.vue";
const routes = [
  { path: "/", component: IndexView },
  { path: "/essay", component: EssayView },
  { path: "/resource", component: ResourceView },
  { path: "/resourceDetail", component: ResourceDetailView },
  { path: "/profile", component: ProfileView },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
