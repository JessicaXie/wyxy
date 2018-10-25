<template>
  <section class="moveTopic">
    <div class="moveTit">
      <span class="inner">更多精彩</span>
    </div>
    <a href="javascript:;" class="item" v-for="item in data" :key="item.topicId">
      <img :src="item.itemPicUrl" alt="img">
      <div class="desc">{{item.title}}</div>
    </a>
  </section>
</template>

<script>
export default {
  props: {
    data: Array
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
  .moveTopic
    margin 0 15px 15px
    .moveTit
      height 70px
      display flex
      align-items center
      &:before
        content ''
        display block
        width 132px
        height 1px
        background #d9d9d9
      &:after
        content ''
        display block
        width 132px
        height 1px
        background #d9d9d9
      .inner
        margin 0 12px
        font-size 14px
        color #333333
    >.item
      display block
      padding 12px
      background #ffffff
      color #333333
      margin-bottom 15px
      >img
        width 321px
        height 180px
      >.desc
        font-size 14px
        padding 14px 0
        line-height 1.2
        ellipsis()
</style>
