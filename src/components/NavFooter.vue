<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>mimall</p>
    </div>
    <div class="footer-link">
      <a href="">mimall</a><span>|</span> <a href=""> MIUI</a><span>|</span>
      <a href="">miHome</a><span>|</span> <a href="">miTalk</a><span>|</span>
    </div>
    <div class="copyright">© mi.com 123456789</div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>
<style lang="scss" >
@import "../assets/config.scss";
.footer {
  height: 234px;
  background-color: $colorB;
  border-top: 4px solid $colorA;
  color: $colorD;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: $colorD;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
  }
  .copyright {
    margin-top: 13px;
  }
}
</style>
