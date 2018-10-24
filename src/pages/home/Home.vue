<template>
<div class="home_container">
  <header class="header">
    <div class="line_container">
      <a class="logo" href="javascript:;"></a>
      <div class="seach_container">
        <i class="iconfont icon-sousuo "></i>
        <span class="placeholder">搜索商品，共16850款好物</span>
      </div>
    </div>
    <!--<div class="inner">-->
      <!--<ul class="list">-->
        <!--<li class="tab">推荐</li>-->
        <!--<li class="tab">推荐</li>-->
        <!--<li class="tab">推荐推荐推荐</li>-->
        <!--<li class="tab">推荐</li>-->
        <!--<li class="tab">推荐</li>-->
        <!--<li class="tab">推荐</li>-->
        <!--<li class="tab">推荐</li>-->
        <!--<li class="tab">推荐</li>-->
        <!--<li class="tab">推荐</li>-->
        <!--<li class="tab">推荐</li>-->
        <!--<li class="tab">推荐</li>-->
      <!--</ul>-->
    <!--</div>-->

  </header>
  <!--轮播图-->
  <div class="bg_banner">

  </div>
  <!--轮播图-->
  <div></div>
  <div class="indexFloor"></div>
</div>
</template>

<script>
export default {
}
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home_container
    width 100%
    background #7e8c8d
    position relative
    .header
      width 100%
      /*height 70px*/
      background #fff
      display flex
      flex-flow row nowrap
      align-items center
      padding:20px
      .line_container
        width 100%
        /*background #bbffaa*/
        display flex
        flex-flow row nowrap
        align-items center
        .logo
          width 80px
          height 20px
          background-image url("//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-11d65342f9.png")
          background-size: cover
          background-repeat no-repeat
          background-position center
          display inline-block
          margin-right 10px
        .seach_container
          /*flex-grow 1*/
          font-size 14px
          display flex
          flex-flow row nowrap
          align-items center
          height 30px
          width 246px
          justify-content center
          background-color #ededed
          -webkit-border-radius: 3px
          -moz-border-radius: 3px
          border-radius: 4px
          .placeholder
            margin-left 5px
            color #666
      .inner
        display flex
        flex-flow row nowrap
        position relative
        top 0
        left 0
        overflow hidden
        width 100%
        height 100%
        background-color #fff
        .list
          display flex
          flex-flow column nowrap


</style>
