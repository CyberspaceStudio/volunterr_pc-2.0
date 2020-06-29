/* global Vue */
Vue.use(VueRouter);


export default new VueRouter({
  routes: [
    {
      path: "/",
      redirect: "/index"
    },
    {
      path: "/index",
      redirect: "/index/login",
      name: "Index",
      component: () => import('@/pages/login/login'),
      children: [
        {
          path: "login",
          name: "Login",
          component: () => import('@/components/Login-box/login-box.vue')
        },
        {
          path: "register",
          name: "Register",
          component: ()=>import('@/components/Register-box/register-box.vue')
        }
      ]
    },
    {
      path: "/home",
      redirect: "/home/setting",
      name: "Home",
      component: () => import('@/pages/home/home'),
      meta: { requireLogin: false },
      children: [
        {
          path: "table:index",
          name: "Table",
          component: () => import('@/components/Table/infoTable')
        },
        {
          path: "setting",
          name: "Setting",
          component: () => import('@/components/Setting-box/Setting.vue')
        }
      ]
    }
  ]
});
