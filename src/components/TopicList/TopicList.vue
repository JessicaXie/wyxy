<template>
  <div class="wapper topicList">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in data" :key="index">
          <a href="javascript:;">
            <img :src="item.picUrl" alt="">
            <div class="tNum">
              <span class="tNumCon">{{item.articleCount}}</span>
            </div>
            <div class="title">{{item.title}}</div>
          </a>
        </div>
      </div>
    </div>
  </div>
  <!--<div class="topicList">
    <swiper :options="swiperOption" ref="mySwiper">
      <swiper-slide v-for="(item, index) in data" :key="index">
        <a href="javascript:;">
          <img v-lazy="item.picUrl" alt="">
          <div class="tNum">
            <span class="tNumCon">{{item.articleCount}}</span>
          </div>
          <div class="title">{{item.title}}</div>
        </a>
      </swiper-slide>
    </swiper>
  </div>-->
</template>

<script>
import Swiper from 'swiper'
export default {
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: true
    })
  },
  props: {
    data: Array
  }
}
</script>

<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  .topicList
    height 113px
    background-color #e2adff
    margin-bottom 10px
    padding 16px 0  14px 15px
    .swiper-slide
      width 25%
    .swiper-slide:last-of-type
      padding-right 20px
    a
      display block
      width 82px
      height 110px
      position relative
      img
        width 82px
        height 82px
        border-radius 2px
        margin-bottom 11px
      .tNum
        position absolute
        top 0
        right 0
        color #ffffff
        width 58px
        height 16px
        border-radius 0 2px 0 0
        background url('../../assets/images/bg.png') no-repeat
        background-size 100%
        .tNumCon
          position absolute
          top 0
          right 4px
          width 75px
          height 16px
          line-height 16px
          font-size 12px
          text-align right
      .title
        color #333333
        font-size 12px
        line-height 1
        text-align center
        height 15px
</style>
