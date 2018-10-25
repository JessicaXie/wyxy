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
      <ul class="goods_list" ref="typesUL">
        <li class="goods_items" :class="{current: index===currentIndex}" v-for="(item, index) in items.categoryL1List " :key="index" @click="selectItem(index)">
          <a href="">{{item.name}}</a>
        </li>
      </ul>
    </div>
    <div class="content_container">
      <div class="nav_container"  >
        <div class="nav">
          <!--<img src="{{item.bannerUrl}}"/>-->
          <img src="http://yanxuan.nosdn.127.net/cb225335d4a438564040f00b448e8db8.png" alt="">
        </div>
        <ul class="items_list" ref="itemList">
          <li class="items_container">
            <a href="javascript:;">
              <div class="items">
                <img src="http://yanxuan.nosdn.127.net/1fa42bd292337aaaf80612b6e208099b.png" alt="">
                <div class="title">丁磊推荐</div>
              </div>
            </a>
          </li>
        </ul>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState} from 'vuex'
export default {
  data () {
    return {
      scrollY: 0, // 右侧裂表Y轴方向活动的坐标
      tops: [], // 右侧分类li的top值组成的数据
      list: {} // 分类的数组,需要显示的数据
    }
  },
  computed: {
    ...mapState(['items']),

    // 得到当前分类的下标
    currentIndex () {
      const {scrollY, tops} = this
      // scrollY大于或等于当前top && 小于下一个top
      const index = tops.findIndex((top, index) => scrollY >= top && scrollY < tops[index + 1])

      if (this.index !== index) { // 只有当当前分类下标发生改变才去执行
        this.index = index
        // 让右侧滚动到index所对应的位置
        if (this.leftScroll) {
          this.leftScroll.scrollToElement(this.$refs.typesUl.children[index], 200)
        }
      }
      return index
    }
  },
  mounted () {
    this.$store.dispatch('getItems', () => { // 状态数据变化了
      this.$nextTick(() => { // 列表界面更新显示数据后执行
        // 初始化滚动现象
        this._initScroll()
      })
    })
  },
  methods: {
    _initScroll () {
      // 左侧列表滚动现象
      this.leftScroll = new BScroll('.', {
        click: true // 会派发点击事件
      })
      // 左侧列表滚动现象
      this.rightScroll = new BScroll('.', {
        click: true, // 会派发点击事件
        probeType: 1 // 非实时回调，非触摸滑动不会回调
      })
      // 绑定scroll的监听
      this.rightScroll.on('scroll', ({x, y}) => {
        // 更新scrollY
        this.scrollY = Math.abs(y)
      })
      // 绑定scroll结束的监听
      this.rightScroll.on('scrollEnd', ({x, y}) => {
        // 更新scrollY
        this.scrollY = Math.abs(y)
      })
    },
    _initTops () {
      const tops = []
      let top = 0
      tops.push(top)
      // 得到所有的分类li的位数组
      const itemList = this.$ref.itemList.querySelectorAll('.items_container')
      itemList.forEach(li => {
        top += li.childHeight
        tops.push(top)
      })
      // 更新状态
      this.tops = top
    },
    // 选择左侧某个分类项
    selectItem (index) {
      // 得到index 对应位置的y坐标
      const y = -this.tops[index]
      // 立即更新scrollY
      this.scrollY = -y
      // 让右侧列表滚动到此处
      this.rightScroll.scrollTo(0, y, 300)
    }
  }

}
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .item_container
    width: 100%
    height:630px
    overflow hidden

    .search
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
      color #333
      display flex
      flex-flow row nowrap
      align-items flex-start
      justify-items center
      margin: 3px 0
      width 100%
      height: 800px
      /*background-color #3da6ff*/
      .item_type
        width 25%
        /*height 100%*/
        background-color #fff
        margin-right 2px
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
        background-color #fff
        .nav_container
          width: 100%
          text-align center
          .nav img
            width 95%
            margin 10px 0
            padding-bottom 5px
          .items_list
            width 100%
            .items_container
              float left
              width 32%
              .items
                width 100%
                font-size 12px
                color: #333
                .title
                  width 85%
                img
                  width 85%

</style>
