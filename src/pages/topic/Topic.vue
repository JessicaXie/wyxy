<template>
<div class="topic_container">
  <HeaderMain></HeaderMain>

</div>
</template>

<script>
import HeaderMain from '../../components/HeaderMain/HeaderMain'
export default {
  components: {
    HeaderMain
  },
  mounted () {

  }

}
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  .topic_container
    width: 100%
    .swipers
      bottom-border-1px(#e4e4e4)
      margin-top 45px
      height 200px
      background-color #fff
      .swiper-container
        width 100%
        height 100%
        .swiper-wrapper
          width 100%
          height 100%
          .swiper-slide
            display flex
            justify-content center
            align-items flex-start
            flex-wrap wrap
            .link_to_food
              width 25%
              .food_container
                display block
                width 100%
                text-align center
                padding-bottom 10px
                font-size 0
                img
                  display inline-block
                  width 50px
                  height 50px
              span
                display block
                width 100%
                text-align center
                font-size 13px
                color #666
        .swiper-pagination
          >span.swiper-pagination-bullet-active
            background #02a774
</style>
