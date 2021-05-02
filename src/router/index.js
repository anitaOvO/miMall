import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home";
import index from "../pages/index";
import Product from "../pages/product";
import Detail from "../pages/detail";
import Cart from "../pages/cart";
import Order from "../pages/order";
import OrderConfirm from "../pages/orderConfirm";
import OrderList from "../pages/orderList";
import OrderPay from "../pages/orderPay";
import AliPay from "../pages/alipay";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/index", //重定向 router-view默认跳转到index
    //二级路由
    children: [
      {
        path: "/index",
        name: "index",
        component: index,
      },
      {
        path: "/product/:id",
        name: "product",
        component: Product,
      },
      {
        path: "/detail/:id", //动态路由
        name: "detail",
        component: Detail,
      },
    ],
  },
  //一级路由
  {
    path: "/cart",
    name: "cart",
    component: Cart,
  },
  {
    path: "/order",
    name: "order",
    component: Order,
    //redirect: '/List',
    children: [
      {
        path: "confirm",
        name: "order - confirm",
        component: OrderConfirm,
      },
      {
        path: "list",
        name: "order - list",
        component: OrderList,
      },
      {
        path: "pay",
        name: "order - pay",
        component: OrderPay,
      },
      {
        path: "/alipay",
        name: "alipay",
        component: AliPay,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
