import {Home, LoginPage} from "../page"


const privateRoutes = {
  home: {
    path: '/home',
    component: Home,
    requiredLogin: true,
  },
  login: {
    path: '/LoginPage',
    component: LoginPage,
    requiredLogin: false,
  },
}

export default privateRoutes