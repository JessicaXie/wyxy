<template>
  <div class="login_container">
    <header class="login_header">
      <div class="header_container">
        <a class="home" @click="goTo('/')" ></a>
        <a class="logo" @click="goTo('/')" ></a>
        <a class="sreach" @click="goTo('/items')"></a>
        <a class="cart" @click="goTo('/cart')"></a>
      </div>
    </header>
    <div v-if="!HaveLoginWay" class="login_content">
      <div class="logowarp"></div>
      <div @click="goLogin(1)"><ButtonRed/></div>
      <div @click="goLogin(2)"><ButtonWrite/></div>
      <div class="go_reactid" @click="goLogin(4)">
        <span>手机号快速注册></span>
        <!--<i class=""></i>-->
      </div>
    </div>
    <div v-if="HaveLoginWay">
      <PhoneLogin v-if="LoginWay===1"></PhoneLogin>
      <EamilLogin v-if="LoginWay===2"></EamilLogin>
      <EamilReactid v-if="LoginWay===3"></EamilReactid>
      <PhoneReactid v-if=" LoginWay===4"></PhoneReactid>
    </div>

    <!--中间http://yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png-->
    <!--下边:http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/login-s2d0d826858-b284a621da.png-->
  </div>
</template>

<script>
import ButtonRed from '../../components/ButtonRed/ButtonRed'
import ButtonWrite from '../../components/ButtonWrite/ButtonWrite'
import PhoneLogin from '../../components/PhoneLogin/PhoneLogin'
import EamilLogin from '../../components/EamilLogin/EamilLogin'
import PhoneReactid from '../../components/PhoneReactid/PhoneReactid'
import EamilReactid from '../../components/EamilReactid/EamilReactid'
export default {
  data () {
    return {
      LoginWay: 2, // 用户登录方式 手机：1; 邮箱： 2 ,邮箱注册：3， 手机注册4
      HaveLoginWay: true // 看是否有登录方式 true: 有; false: 没有
    }
  },
  components: {
    ButtonRed,
    ButtonWrite,
    PhoneLogin,
    PhoneReactid,
    EamilLogin,
    EamilReactid
  },
  methods: {
    text () {
      return ''
    },
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
    height 500px
    .login_header
      position relative
      background-color #fafafa
      width 100%
      height 44px
      display flex
      flex-flow row nowrap
      .header_container
        margin: 0 5px
        .logo,.sreach,.cart,.home
          height 30px
          position absolute
          top: 7px
          vertical-align middle
          display inline-block
          background-repeat no-repeat
          background-size 80px auto
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s28ce1ea0be-3d137edb2d.png")
        .logo
          left: 40%
          width:80px
          background-position 0 -56px
        .sreach
          right: 35px
          width:35px
          background-position 0 -142px
        .cart
          right: 5px
          width:35px
          background-position 0 1px
        .home
          margin-left 10px
          left: 5px
          width:30px
          background-position 0 -28px
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

</style>
