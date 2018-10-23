<template>
<div class="ucenter_container">
  <div class="logowarp"></div>
  <form class="user_form">
    <div class="u_input u_email">
      <input placeholder="邮箱账号">
    </div>
    <div class="u_input u_pwd">
      <input placeholder="密码">
    </div>
    <div>
      <ButtonRed/>
    </div>
    <div>
      <ButtonWrite/>
    </div>
  </form>
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
    height: 500px
    background-color #fff
    .logowarp
      /*padding: 60px 0*/
      height 100px
      background-repeat no-repeat
      background-position center
      background-size 130px
      background-image url("//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png")
    .user_form
      color #7f7f7
</style>
