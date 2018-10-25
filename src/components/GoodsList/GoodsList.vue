<template>
  <div class="goodsWrap">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item, index) in data" :key="index">
          <a href="javascript:;">
            <div class="image">
            <img :src="item.primaryPicUrl" alt="">
            </div>
            <div class="name">{{item.name}}</div>
            <div class="nameDoc">{{item.simpleDesc}}</div>
            <div class="price">¥{{item.retailPrice}}</div>
          </a>
        </div>
        <div class="swiper-slide">
          <a href="javascript:;">
            <span>查看全部</span>
          </a>
        </div>
      </div>
    </div>
  </div>
    <!--<swiper :options="swiperOption" ref="mySwiper">-->
      <!--<swiper-slide v-for="item in data" :key="item.id">-->
        <!--<a href="javascript:;">-->
          <!--<div class="image">-->
            <!--<img v-lazy="item.primaryPicUrl" alt="">-->
          <!--</div>-->
          <!--<div class="name">{{item.name}}</div>-->
          <!--<div class="nameDoc">{{item.simpleDesc}}</div>-->
          <!--<div class="price">¥{{item.retailPrice}}</div>-->
        <!--</a>-->
      <!--</swiper-slide>-->
      <!--<swiper-slide>-->
        <!--<a href="javascript:;">-->
          <!--<span>查看全部</span>-->
        <!--</a>-->
      <!--</swiper-slide>-->
    <!--</swiper>-->
  <!--</div>-->
</template>

<script>
import Swiper from 'swiper'
export default {
  props: {
    data: Array
  },
  mounted () {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: false
    })
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  .goodsWrap
    width 100%
    height 220px
    overflow hidden
    margin-bottom 10px
    background #ffffff
    .swiper-wrapper
      padding-left 20px
      .swiper-slide
        width 140px !important
        height 220px
        padding 0 5px
        .image
          width 140px
          height 140px
          background #f4f4f4
          z-index 0
          img
            width 100%
            height 100%
        .name
          margin 5px 0
          padding 0 5px
          color #333333
          font-size 14px
          line-height 34px
          ellipsis()
        .nameDoc
          margin-bottom 7px
          line-height 15px
          font-size 12px
          padding 0 5px
          color #7f7f7f
          ellipsis()
        .price
          padding 0 5px
          color $main
          line-height 1
          font-size 14px
        &:last-of-type
          border 4px solid #f4f4f4
          height 132px
          line-height 132px
          text-align center
          span
            font-size 14px
            color #333333
</style>
