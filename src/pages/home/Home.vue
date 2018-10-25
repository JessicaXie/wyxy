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
      <ListScroll/>
  </header>
  <div class="content_container">
    <div class="content_header">
      <Banner/>
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
    </div>
    <section class="GoodsSale">
        <header>
          <a href="javascript:;">
            <span>品牌制造商直供</span>
            <i></i>
          </a>
        </header>
        <div class="goods">
          <ul>
            <li v-for="(item, index) in home.tagList" :key="item.id" v-if="index<=3">
              <a href="javascipt:;">
                <div class="ctn">
                  <h4 class="title">{{item.name}}</h4>
                  <span class="proce1">{{item.floorPrice}}</span><span class="proce2">元起</span>
                </div>
                <img :src="item.picUrl" alt="img">
                <!--<img v-lazy="item.picUrl" alt="img">-->
              </a>
            </li>
          </ul>
        </div>
      </section>
    <section class="indexFloor">
      <div class="move new">
        <a href="javascript:;" class="moveCont">
          <span class="title">新品首发</span>
          <div class="all">
            <span>查看全部</span>
            <i></i>
          </div>
        </a>
      </div>
      <GoodsList :data="home.newItemNewUserList"/>
    </section>
    <section class="indexFloor">
      <div class="move hot">
        <a href="javascript:;" class="moveCont">
          <span class="title">人气推荐.好物精选</span>
          <div class="all">
            <span>查看全部</span>
            <i></i>
          </div>
        </a>
      </div>
      <GoodsList :data="home.popularItemList"></GoodsList>
    </section>
    <!--<countdown :time="resetTime * 1000"  v-bind:auto-start="false" ref="countdown">-->
      <!--<template slot-scope="props">-->
        <!--<div class="countDown">-->
          <!--<a href="javascript:;">-->
            <!--<div class="itemLeft">-->
              <!--<div class="title">严选限时购</div>-->
              <!--<div class="countNum">-->
                <!--<span class="time">{{ props.hours }}</span>-->
                <!--<span class="colon">:</span>-->
                <!--<span class="time">{{ props.minutes }}</span>-->
                <!--<span class="colon">:</span>-->
                <!--<span class="time">{{ props.seconds }}</span>-->
              <!--</div>-->
              <!--<div class="nextTitle">下一场 22:00  开始</div>-->
            <!--</div>-->
            <!--<div class="itemRight">-->
              <!--<img src="../../assets/images/test2.png" alt="">-->
              <!--<div class="price">-->
                <!--<span class="now">¥42</span>-->
                <!--<span class="old">¥49</span>-->
              <!--</div>-->
            <!--</div>-->
          <!--</a>-->
        <!--</div>-->
      <!--</template>-->
    <!--</countdown>-->
    <div class="weal">
      <a href="javascript:;">
        <img src="../../assets/images/move.jpg" alt="">
      </a>
    </div>
  </div>
  <Subjects :data="home.topicList"></Subjects>
  <GoodsShow :data="home.cateList"></GoodsShow>

  <!--<div class="indexFloor"></div>-->
</div>
</template>

<script>
import ListScroll from '../../components/ListScroll/ListScroll'
import Banner from '../../components/Banner/Banner'
import Subjects from '../../components/Subjects/Subjects'
import GoodsList from '../../components/GoodsList/GoodsList'
import GoodsShow from '../../components/GoodsShow/GoodsShow'
import {mapState} from 'vuex'
export default {
  components: {
    ListScroll,
    Banner,
    GoodsList,
    GoodsShow,
    Subjects
  },
  data () {
    return {
      time: [2, 60, 60]
    }
  },
  created () {
    this.resetTop()
  },
  computed: {
    ...mapState(['home', 'alldata']),
    resetTime: {
      get: function () {
        let arr = []
        let result = 1
        for (const i in this.time) {
          if (this.time[i] !== 0) {
            arr.push(this.time[i])
          }
        }
        arr.forEach(item => {
          result *= item
        })
        return result
      },
      set: function () {
        let result = 1
        this.time.forEach(item => {
          result *= item
        })
        console.log(result)
        return result
      }
    }
  },
  mounted () {
    this.$store.dispatch('getHome', () => {
      this.$nextTick(() => {
        this._resetTime()
      })
    })
    this.$store.dispatch('getTopic')
    // this.$refs.countdown.start()
    this.$store.dispatch('getBanner')
    this.$store.dispatch('getData')
    this.$store.dispatch('getItems')
  },
  methods: {
    resetTop () {
      window.scrollTo(0, 0)
    },
    _resetTime () {
      this.timer = setTimeout(() => {
        clearTimeout(this.timer)
        this.time = [2, 60, 60]
      }, 2 * 60 * 60 * 1000)
    }
  }
}
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .home_container
    overflow hidden
    width 100%
    position relative
    padding-bottom 40px
    .header
      z-index 100
      position fixed
      top: 0px
      left: 0
      width 100%
      height 40px
      background #fff
      padding:20px
      .line_container
        width 100%
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
        width 100%
    .content_container
      padding-top 82px
      width 100%
      .content_header
        background-color #fff
        margin-bottom 10px
      .indexFloor
        width:100%
        .move
          width 100%
          height 130px
          margin-bottom 16px
          position relative
          &.new
            background-image url('../../assets/images/new.png')
            background-size 375px 130px
            a
              color #8ba0b6
            .all
              background #d8e5f1
          &.hot
            background-image url('../../assets/images/hot.png')
            background-size 375px 130px
            a
              color #B4A078
            .all
              background #F4E9CB
          .moveCont
            position absolute
            width 167px
            height 63px
            top 50%
            left 50%
            margin-left -83px
            margin-top -31px
            text-align center
            font-size 18px
            .all
              position relative
              margin 8px auto 0
              width 120px
              height 28px
              font-size 0
              line-height 28px
              span
                font-size 14px
              i
                display inline-block
                width 5px
                height 11px
                background-image url('../../assets/images/move.png')
                background-size 5px 11px
                margin-left 3px
        .countDown
          width 100%
          box-sizing border-box
          height 160px
          padding 15px 20px 15px 28px
          margin-bottom 10px
          background #ffffff
          overflow hidden
          a
            display block
            width 100%
            height 100%
            clearFix()
          .itemLeft
            float left
            padding-top 20px
            .title
              font-size 13px
              line-height 13px
              margin-bottom 12px
              letter-spacing 6px
              color #333333
            .countNum
              display inline
              font-size 0
              .time
                display inline-block
                font-size 16px
                text-align center
                width 31px
                height 28px
                line-height 28px
                border-radius 2px
                color #ffffff
                background #444444
              .colon
                display inline-block
                color #333333
                font-size 30px
                font-weight 700
                width 10px
                text-align center
            .nextTitle
              margin-top 20px
              color #333333
              font-size 12px
              height 12px
              line-height 12px
          .itemRight
            width 160px
            height 160px
            position relative
            float right
            img
              width 100%
              height 100%
            .price
              width 48px
              height 48px
              position absolute
              background-color rgba(244,143,24,.95)
              border-radius 50%
              bottom 13px
              right 10px
              color #ffffff
              text-align center
              display flex
              flex-direction column
              justify-content center
              span
                font-size 12px
      .weal
        width 100%
        /*height 150px*/
        margin-bottom 10px
        overflow hidden
        img
          width 100%
      .GoodsSale
        background #fff
        margin-top 10px
        header
          display flex
          flex-flow row nowrap
          align-items center
          justify-content center
          height 55px
          a
            color #333333
            span
              font-size 16px
            i
              display inline-block
              width 20px
              /*height 30px*/
              background-image url('../../assets/images/right.png')
              background-repeat no-repeat
        .goods
          padding-bottom 4px
          /*background-color blueviolet*/
          ul
            position relative
            margin  0 8px
            height 234px
            overflow hidden
            li
              display inline-block
              position relative
              float left
              margin-bottom 8px
              width 174px
              height 128px
              overflow hidden
              background-color #f4f4f4
              &:nth-child(odd)
                margin-right 10px
              >a
                color #333333
                .ctn
                  position absolute
                  left 0
                  top 0
                  padding 20px 0 0 20px
                  width 100%
                  z-index 4
                  font-size 0
                  .title
                    ellipsis()
                    font-size 14px
                    /*line-height 34px*/
                    margin-bottom 6px
                  .proce1,.proce2
                    font-size 14px
                    /*line-height 34px*/
                    margin-bottom 8px
                >img
                  width 100%
                  height 100%
    .servicePolicy
      height: 30px
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

</style>
