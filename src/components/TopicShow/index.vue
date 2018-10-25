<template>
  <div class="topicShow">
    <Title title="十点一刻"></Title>
    <div class="ShowSwiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in data" :key="index">
            <a href="javascript:;">
              <div class="lineTitle">
                <span class="inner">今日话题</span>
              </div>
              <div class="tsTitle">{{item.title}}</div>
              <div class="desc">{{item.desc}}</div>
              <div class="joinInfo">{{item.participantNum}}人参与话题</div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:;">
              <div class="move">
                <span>查看全部话题</span>
                <i></i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!--<swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide v-for="item in data" :key="item.id">
          <a href="javascript:;">
            <div class="lineTitle">
              <span class="inner">今日话题</span>
            </div>
            <div class="tsTitle">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="joinInfo">{{item.participantNum}}人参与话题</div>
          </a>
        </swiper-slide>
        <swiper-slide>
          <a href="javascript:;">
            <div class="move">
              <span>查看全部话题</span>
              <i></i>
            </div>
          </a>
        </swiper-slide>
      </swiper>-->
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import Title from '../Title/Title'
import {mapState} from 'vuex'
export default {
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true
    })
  },
  computed: {
    ...mapState(['banner', 'home', 'alldata', 'topic', 'items'])
  },
  components: {
    Title
  },
  props: {
    data: Array
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
  .topicShow
    margin-bottom 10px
    background #ffffff
    padding-left 10px
    padding-bottom 10px
    .swiper-slide
      background url('../../assets/images/qipao.png')
      background-repeat no-repeat
      background-size 100% 100%
      a
        position relative
        display block
        width 100%
        height 206px
        padding 19px 20px 40px
        box-sizing border-box
        text-align center
        color #333333
        .lineTitle
          display flex
          align-items center
          justify-content center
          margin-bottom 14px
          &:before
            content ''
            display block
            width 12px
            height 1px
            background-color #7f7f7f
          &:after
            content ''
            display block
            width 12px
            height 1px
            background-color #7f7f7f
          span
            margin 0 4px
            font-size 12px
            color #7f7f7f
        .tsTitle
          font-size 18px
          font-weight 700
          margin-top 30px
          margin-bottom 7px
        .desc
          font-size 14px
          line-height 1.5
          margin-top 10px
          margin-bottom 7px
          ellipsis()
        .joinInfo
          position absolute
          left 50%
          transform translateX(-50%)
          bottom 39px
          width 250px
          height 24px
          font-size 12px
          text-align center
      &:last-child
        background none
        a
          position relative
          width 290px
          height 192px
          border 10px solid #e6e6e6
          padding 0
          background-color #fafafa
          >.move
            position absolute
            top 0
            right 0
            left 0
            bottom 0
            margin auto
            width 120px
            height 19px
            display flex
            align-items center
            >span
              color #7f7f7f
              font-size 16px
              line-height 19px
              margin-right 9px
            >i
              display inline-block
              width 15px
              height 15px
              background url('../../assets/images/right.png')
              background-repeat no-repeat
              background-size 100% 100%
</style>
