// import
import React  from 'react';
import Dashboard from "views/Dashboard/Dashboard.js";
import Category from "views/Dashboard/Category.js";
import Product from "views/Dashboard/Product.js";
import Billing from "views/Dashboard/Billing.js";
import Profile from "views/Dashboard/Profile.js";
import SignIn from "views/Pages/SignIn.js";
import SignUp from "views/Pages/SignUp.js";

import {
  HomeIcon,
  StatsIcon,
  CreditIcon,
  PersonIcon,
  DocumentIcon,
  RocketIcon,
  linearGradient
} from "components/Icons/Icons";

const dashRoutes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: <HomeIcon color='inherit' />,
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/category",
    name: "category",
    icon: <RocketIcon color='inherit' />,
    component: Category,
    layout: "/admin",
  },
  {
    path: "/product",
    name: "Product",
    icon: <StatsIcon color='inherit' />,
    component: Product,
    layout: "/admin",
  },
  // {
  //   path: "/billing",
  //   name: "Billing",
  //   icon: <CreditIcon color='inherit' />,
  //   component: Billing,
  //   layout: "/admin",
  // },
  {
    path: "/billing",
    name: "Customer",
    icon: <PersonIcon color='inherit' />,
    component: Billing,
    layout: "/admin",
  },
  {
    name: "ACCOUNT PAGES",
    category: "account",
    state: "pageCollapse",
    views: [
      {
        path: "/profile",
        name: "Profile",
  
        icon: <PersonIcon color='inherit' />,
        secondaryNavbar: true,
        component: Profile,
        layout: "/admin",
      },
      {
        path: "/signin",
        name: "Sign In",
  
        icon: <DocumentIcon color='inherit' />,
        component: SignIn,
        layout: "/auth",
      },
      {
        path: "/signup",
        name: "Sign Up",
  
        icon: <RocketIcon color='inherit' />,
        component: SignUp,
        layout: "/auth",
      },
    ],
  },
];
export default dashRoutes;
