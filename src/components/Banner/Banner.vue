<template>
  <div class="wapper">
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(banner, index) in banner" :key="index">
          <a :href="banner.targetUrl">
            <img :src="banner.picUrl" alt=""/>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'

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
  }
}
</script>
<style scoped lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  .wapper
    background-color brown
    width 100%
    .swiper-container
        /*width 100%*/
        .swiper-wrapper
          /*width 100%*/
          height 190px
          background-color blueviolet
          .swiper-slide
            width 100%
            background-color antiquewhite
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            img
              width 100%

</style>
