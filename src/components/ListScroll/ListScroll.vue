<template>
  <div class="wrapper" ref="wrapper">
    <ul>
      <li v-for="(name, index) in navlist" :key="index" :class="{'active':current === index}" @click="currentIndex(index)">
        <span>{{name}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
import BScorll from 'better-scroll'
export default {
  data () {
    return {
      navlist: ['推荐', '居家', '配件', '服装', '电器', '洗护', '饮食', '餐厨', '婴童', '文体', '特色区'],
      current: 0
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.scroll = new BScorll(this.$refs.wrapper, {
        scrollX: true,
        click: true
      })
    })
  },
  methods: {
    currentIndex (index) {
      this.current = index
    }
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus'>
  @import '../../common/stylus/mixins.styl'
  .wrapper
    margin-left -10px
    width 100%
    height 100%
    overflow hidden
    display flex
    flex-flow row nowrap
    padding: 10px 0
    ul
      margin-left -8px
      display flex
      flex-direction row
      flex-wrap nowrap
      justify-content space-between
      /*background #f4bcff*/
      height 20px
      align-items center
      li
        width 76px
        /*height 10px*/
        display flex
        flex-direction row
        flex-wrap nowrap
        justify-content space-between
        &.active
          span
            color $main
            position relative
            &:after{
              content ''
              left 0
              bottom 0
              position absolute
              width 100%
              height 2px
              background-color $main
            }
        span
          display inline-block
          letter-spacing 2px
          padding 0 10px
          /*line-height 60px*/
          font-size 14px
          text-align center
          color #333333
</style>
