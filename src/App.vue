<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "app",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    /*本地加载请求静态 json文件的形式 
    this.axios.get("/mock/user/login.json").then((res) => {
      this.res = res;
    }); */
    /* 通过easy-mock平台实现数据mock 
     this.axios.get("/user/login.json").then((res) => {
      this.res = res;
    }); */
    //本地集成mock.js实现数据mock
    /* this.axios.get("/user/login").then((res) => {
      this.res = res;
    }); */
    if (this.$cookie.get("userId")) {
      this.getUser();
      this.getCartCount();
    }
  },
  methods: {
    getUser() {
      this.axios.get("/user").then((res = {}) => {
        //保存到vuex里面
        this.$store.dispatch("saveUserName", res.username);
      });
    },
    getCartCount() {
      this.axios.get("/carts/products/sum").then((res = 0) => {
        this.$store.dispatch("saveCartCount", res);
      });
    },
  },
};
</script>
<style lang="scss">
@import "./assets/reset.scss";
</style>
