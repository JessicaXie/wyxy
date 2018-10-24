<template>
<div class="ucenter_container">
  <div class="logowarp"></div>
  <div class="form_container">
    <form class="user_form">
      <div class="u_input u_email">
        <input placeholder="邮箱账号">
      </div>
      <div class="u_input u_pwd">
        <input placeholder="密码">
      </div>
    </form>
  </div>
  <div>
    <ButtonRed :btn_text="'登录'"/>
  </div>
  <div>
    <ButtonWrite :btn_text="'其他方式登录'"/>
  </div>
</div>
</template>

<script>
import ButtonWrite from '../ButtonWrite/ButtonWrite'
import ButtonRed from '../ButtonRed/ButtonRed'
export default {
  components: {
    ButtonRed,
    ButtonWrite
  }
}
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .ucenter_container
    width 100%
    height: 100%
    background-color #fff
    .logowarp
      /*padding: 60px 0*/
      height 100px
      background-repeat no-repeat
      background-position center
      background-size 130px
      background-image url("//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png")
    .form_container
      position relative
      top 0
      left 18px
      .user_form
        color #7f7f7
        margin 0 auto
        .u_input
          width 90%
          padding: 15px 0
          /*background-color antiquewhite*/
          border-bottom 1px solid #ccc
          input
            height: 18px
            line-height 18px
            outline:none
            -webkit-appearance: none
            -moz-appearance: none
            appearance: none
            font-size 14px
            letter-spacing normal
</style>
