<template>
<div class="btns">
  <div class="btn_container">
    <!--短信：icon-duanxin-->
    <i class="iconfont icon-mobilephone_fill"></i>
    <span class="btn_text">{{btn_text}}</span>
  </div>
</div>
</template>
<script>
export default {
  props: {
    btn_text: String
  }
}

</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .btns
    width: 100%
    .btn_container
      margin: 10px auto
      height: 50px
      line-height 50px
      text-align center
      color #b4282d
      width 90%
      background-color #fff
      border 1px solid #b4282d
      border-radius 1px

</style>
