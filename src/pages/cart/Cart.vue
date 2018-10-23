<template>
<div class="cart-container">
  <!--头部-->
  <section class="cart-header">
    <span class="title">购物车</span>
    <a href="javascript:;">
      <span class="coupon">领券</span>
    </a>
  </section>
  <ul class="servicePolicy">
    <li class="item">
      <i class="iconfont icon-star"></i>
      <span>30天无忧退货</span>
    </li>
    <li class="item">
      <i class="iconfont icon-star"></i>
      <span>48小时快速退款</span>
    </li>
    <li class="item">
      <i class="iconfont icon-star"></i>
      <span>88元免邮费</span>
    </li>
  </ul>
  <!--内容-->
  <section class="cart_container">
    <div class="cart_img"></div>
  </section>
  <div class="text">去添加点什么吧</div>
  <div class="login_btn">登录</div>
  <!--<Button/>-->
</div>
</template>

<script>
export default {
}
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
@import "../../common/stylus/mixins.styl"
  .cart-container
    width 100%
    text-align center
    .cart-header
      text-align center
      height: 45px
      line-height: 45px
      background: #fff
      position relative
      .coupon
        color: #B4282D
        position:absolute
        top:0
        right: 14px
        font-size:14px
    .servicePolicy
      height: 20px
      text-align center
      font-size 10px
      padding: 0 10px
      display flex
      flex-flow: row nowrap
      align-items center
      justify-content space-between
      li
        color #666
        font-size 10px

    .cart_container
      width: 100%
      height: 320px
      position relative
      top:0px
      left 0
      .cart_img
        position absolute
        top 196px
        left 50%
        transform translate(-50%)
        display: inline-block
        vertical-align middle
        margin-bottom 123px
        background-size 124px 124px
        background-position center center
        background-repeat no-repeat;
        width 124px
        height 124px
        background-image: url(//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-a8fe3f12e5.png);
    .login_btn
      width 240px
      height 46px
      line-height 46px
      font-size 16px
      margin: auto
      color #fff
      background-color #b4282d
      border-radius 3px
    .text
      margin -10px 0 20px 0
      font-size 16px
      line-height 1
      color #7f7f7f

</style>
