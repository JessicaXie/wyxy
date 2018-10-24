<template>
  <header class="login_header">
    <div class="header_container">
      <a class="home" @click="goTo('/')" ></a>
      <a class="logo" @click="goTo('/')" ></a>
      <a class="sreach" @click="goTo('/items')"></a>
      <a class="cart" @click="goTo('/cart')"></a>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    goTo (path) {
      // 通过路由导航跳转路由
      this.$router.replace(path)
    }
  }
}
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
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
</style>
