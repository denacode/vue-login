import GuestLayout from "@/views/guest";
import LoggedLayout from "@/views/logged";
import store from "@/store";

const loginGuard = (to, from, next) => {
  let loggedIn = store.getters["auth/loggedIn"];
  if (loggedIn) {
    next({ name: "home" });
  } else {
    next();
  }
};

const loggedGuard = (to, from, next) => {
  let loggedIn = store.getters["auth/loggedIn"];
  if (!loggedIn) {
    next({ name: "dashboard" });
  } else {
    next();
  }
};

const routes = [
  {
    path: "/",
    redirect: "home",
    component: GuestLayout,
    beforeEnter: loginGuard,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("@/views/guest/home")
      },
      {
        path: "/about",
        name: "about",
        component: () => import("@/views/guest/about")
      },
      {
        path: "/login",
        name: "login",
        component: () => import("@/views/guest/login")
      }
    ]
  },
  {
    path: "/",
    redirect: "dashboard",
    component: LoggedLayout,
    beforeEnter: loggedGuard,
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/logged/dashboard")
      },
      {
        path: "/customers",
        name: "customers",
        component: () => import("@/views/logged/customers")
      },
      {
        path: "/logout",
        name: "logout",
        component: () => import("@/views/logged/logout")
      }
    ]
  }
];

export default routes;
