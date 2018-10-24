<template>
<div class="item_container">
  <div class="search">
      <div class="seach_container">
        <i class="iconfont icon-sousuo "></i>
        <span class="placeholder">搜索商品，共16850款好物</span>
    </div>
  </div>
  <div class="list_container">
    <div class="item_type">
      <ul class="goods_list">
        <li class="goods_items" v-for="(item, index) in items.categoryL1List " :key="index">
          <a href="">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="content_container">
      <div class="nav" >
        <div class="nav1">
          <!--<img src="{{item.bannerUrl}}"/>-->
          <img src="http://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png" alt="">
        </div>
        <ul class="avatars_list">
          <li class="avatars" href="javascript:;">
            <img src="http://yanxuan.nosdn.127.net/1fa42bd292337aaaf80612b6e208099b.png"" alt="">
            <span>服装满减</span>
          </li>
          <li href="javascript:;">
            <img src="http://yanxuan.nosdn.127.net/1fa42bd292337aaaf80612b6e208099b.png"" alt="">
            <span>服装满减</span>
          </li>
        </ul>
      </div>

    </div>
  </div>
</div>
</template>

<script>
// import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      list: [] // 分类的数组
    }
  },
  computed: {
    ...mapState(['items'])
  },
  mounted () {
    this.$store.dispatch('getItems')
  }

}
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .item_container
    width: 100%
    height:300px
    .search
      align-items center
      padding:10px 0
      width 100%
      background-color #fff
    .seach_container
      font-size 14px
      display flex
      flex-flow row nowrap
      align-items center
      height 30px
      width 90%
      justify-content center
      background-color #ededed
      -webkit-border-radius: 3px
      -moz-border-radius: 3px
      border-radius: 4px
      .placeholder
        margin-left 5px
        color #666
    .list_container
      display flex
      flex-flow row nowrap
      align-items center
      justify-items center
      margin: 3px 0
      width 100%
      /*height: 300px*/
      background-color #fff
      .item_type
        width 22%
        height 100%
        background-color aqua
        margin-right 3px
        .goods_list
          width 100%
          /*background-color brown*/
          text-align center
          padding-top 10px
          .goods_items
            font-size 12px
            width 100%
            padding:15px 0
            /*background-color blue*/
      .content_container
        padding: 10px
        width 77%
        /*height: 100%*/
        background-color #feff57
        .nav
          width: 100%
          text-align center
          .nav1 img
            width 95%
          .avatars_list
            width 30%
          .avatars
            width: 100%
            display flex
            flex-flow row wrap

</style>
