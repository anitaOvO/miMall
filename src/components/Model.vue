<template>
  <transition name="slide">
    <div class="model" v-show="showModel">
      <div class="mask"></div>
      <div class="model-dialog">
        <div class="model-header">
          <span>{{ title }}</span>
          <a href="" class="icon-close" @click="$emit('cancel')"></a>
        </div>
        <div class="model-body">
          <slot name="body"></slot>
        </div>
        <div class="model-footer">
          <a href="" class="btn" v-if="btnType == 1" @click="$emit('submit')">{{
            sureText
          }}</a>
          <a href="" class="btn" v-if="btnType == 2" @click="$emit('cancel')">{{
            cancleText
          }}</a>
          <div class="btn-group" v-if="btnType == 3">
            <a href="" class="btn" @click="$emit('submit')">{{ sureText }}</a>
            <a href="" class="btn btn-default" @click="$emit('cancel')">{{
              cancleText
            }}</a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  name: "model",
  props: {
    //弹框类型：小small、大large、中middle、表单form
    modelType: {
      type: String,
      default: "form",
    },
    //弹框标题
    title: String,
    //按钮类型，1：只有确定按钮 2：取消按钮 3：都有
    btnType: String,
    //按钮文本
    sureText: {
      type: String,
      default: "确定",
    },
    cancleText: {
      type: String,
      default: "取消",
    },
    //是否展示弹框
    showModel: Boolean,
  },
};
</script>
<style lang="scss">
@import "./../assets/mixin.scss";
@import "./../assets/config.scss";
@import "./../assets/model.scss";
@import "./../assets/button.scss";
</style>