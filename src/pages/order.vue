<template>
  <div>
    <order-header :title="title">
      <template #tips>
        <span>{{ tip }}</span>
      </template>
    </order-header>
    <router-view></router-view>
    <service-bar></service-bar>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import OrderHeader from "../components/OrderHeader.vue";
import NavFooter from "../components/NavFooter.vue";
import ServiceBar from "../components/ServiceBar.vue";
export default {
  name: "order",
  components: {
    OrderHeader,
    NavFooter,
    ServiceBar,
  },
  data() {
    return {
      title: "",
      tip: "",
    };
  },
  mounted() {
    let path = this.$route.path;
    if (path == "/order/confirm") {
      this.title = "订单确认";
      this.tip = "请仔细填写信息";
    } else if (path == "/order/list") {
      this.title = "订单列表";
      this.tip = "请谨防钓鱼连接或诈骗电话，了解更多>";
    } else if (path == "/order/pay") {
      this.title = "订单支付";
      this.tip = "请谨防钓鱼连接或诈骗电话，了解更多>";
    } else {
      this.title = "订单支付";
      this.tip = "请谨防钓鱼连接或诈骗电话，了解更多>";
    }
  },
};
</script>
<style scoped></style>
