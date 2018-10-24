<template>
  <div class="login_container">
    <HeaderMain/>
    <div v-if="!HaveLoginWay" class="login_content">
      <div class="logowarp"></div>
      <div @click="goLogin(1)">
        <ButtonRed :btn_text="'短信登录'"/>
      </div>
      <div @click="goLogin(2)">
        <ButtonWrite :btn_text="'邮箱登录'"/>
      </div>
      <div class="go_reactid" @click="goLogin(4)">
        <span>手机号快速注册></span>
      </div>
    </div>
    <div class="loginWay_container" v-if="HaveLoginWay">
      <PhoneLogin v-if="LoginWay===1"></PhoneLogin>
      <EamilLogin v-if="LoginWay===2"></EamilLogin>
      <EamilRegister v-if="LoginWay===3"></EamilRegister>
      <PhoneRegister v-if=" LoginWay===4"></PhoneRegister>
    </div>

    <!--中间http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png-->
    <!--下边:http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png-->
  </div>
</template>

<script>
import ButtonRed from '../../components/ButtonRed/ButtonRed'
import HeaderMain from '../../components/HeaderMain/HeaderMain'
import ButtonWrite from '../../components/ButtonWrite/ButtonWrite'
import PhoneLogin from '../../components/PhoneLogin/PhoneLogin'
import EamilLogin from '../../components/EamilLogin/EamilLogin'
import PhoneRegister from '../../components/PhoneRegister/PhoneRegister'
import EamilRegister from '../../components/EamilRegister/EamilRegister'
export default {

  data () {
    return {
      LoginWay: 1, // 用户登录方式 手机：1; 邮箱： 2 ,邮箱注册：3， 手机注册4
      HaveLoginWay: false // 看是否有登录方式 true: 有; false: 没有
    }
  },
  components: {
    ButtonRed,
    ButtonWrite,
    PhoneLogin,
    PhoneRegister,
    EamilLogin,
    HeaderMain,
    EamilRegister
  },
  methods: {
    goTo (path) {
      // 通过路由导航跳转路由
      this.$router.replace(path)
    },
    goLogin (LoginWay) {
      this.HaveLoginWay = true
      this.LoginWay = LoginWay
    }
  }
}
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .login_container
    width 100%
    .login_content
      .logowarp
        padding: 60px 0
        /*background-color antiquewhite*/
        width 100%
        height:100px
        background-repeat no-repeat
        background-position center
        background-size 150px
        background-image url("//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png")
      .go_reactid
        width: 100%
        text-align center
        font-size :14px
        color #333
    .loginWay_container
      width 100%
      height 600px
      background-color antiquewhite
</style>
