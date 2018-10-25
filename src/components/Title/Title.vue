<template>
  <h3 class="title">{{title}}</h3>
</template>

<script>
export default {
  props: {
    title: String
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
  .title
    font-size 14px
    line-height 60px
    text-align center
    background #ffffff
    color #333333
</style>
