<template>
  <section class="GoodsSale">
    <header>
      <a href="javascript:;">
        <span>专题精选</span>
        <i></i>
      </a>
    </header>
    <div class="subjects">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item, index) in data" :key="index">
            <img :src="item.itemPicUrl" alt="">
            <div class="line">
              <h4 class="title">{{item.title}}</h4>
              <span class="price">{{item.priceInfo}}元起</span>
            </div>
            <div class="desc">{{item.subtitle}}</div>
          </div>
        </div>
      </div>
     <!-- <swiper :options="swiperOption" ref="mySwiper">
        <swiper-slide v-for="item in data" :key="item.id">
          <img v-lazy="item.itemPicUrl" alt="">
          <div class="line">
            <h4 class="title">{{item.title}}</h4>
            <span class="price">{{item.priceInfo}}元起</span>
          </div>
          <div class="desc">{{item.subtitle}}</div>
        </swiper-slide>
      </swiper>-->
    </div>
  </section>
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

<style lang='stylus' rel='stylesheet/stylus' >
  @import '../../common/stylus/mixins.styl'
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
        width 15px
        height 15px
        background-image url('../../assets/images/right.png')
        background-repeat no-repeat
  .subjects
    padding-left  15px
    padding-bottom 18px
    .swiper-wrapper
      padding-right 15px
      .swiper-slide
        width 265px
        box-sizing border-box
        padding-right 10px
        img
          width 100%
          height 161px
          border-radius 8px
          margin-bottom 8px
        .line
          height 20px
          margin-bottom 1px
          font-size 14px
          .title
            ellipsis()
            width 205px
            float left
            color #333333
          .price
            float right
            color $main
        .desc
          ellipsis()
          height 18px
          font-size 12px
          color #7f7f7f
</style>
