<template>
<div class="recommend">
  <Title :title="data.name"></Title>
  <div class="itemMajor">
    <a href="javascript:;">
      <img :src="data.Item[0].picUrl" alt="">
      <div class="info">
        <div class="line1">
          <div class="Linetitle">{{data.Item[0].title}}</div>
          <div class="price">{{data.Item[0].priceInfo}}元起</div>
        </div>
        <div class="line2">{{data.Item[0].subTitle}}</div>
      </div>
    </a>
  </div>
  <div class="items">
    <div class="topicInfo">
      <div class="line1">
        <div class="topicTitle">{{data.Item[1].title}}</div>
      </div>
      <div class="line2">
        <div class="cont">{{data.Item[1].subTitle}}</div>
      </div>
    </div>
    <div class="topicPic">
      <img :src="data.Item[1].picUrl" alt="">
      <div class="topicTag">
        <div class="tag">{{data.Item[1].typeName}}</div>
      </div>
    </div>
  </div>
  <div class="items">
    <div class="topicInfo">
      <div class="line1">
        <div class="topicTitle">{{data.Item[2].title}}</div>
      </div>
      <div class="line2">
        <div class="cont">{{data.Item[2].subTitle}}</div>
      </div>
    </div>
    <div class="topicPic">
      <img :src="data.Item[2].picUrl" alt="">
      <div class="topicTag">
        <div class="tag">{{data.Item[2].typeName}}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Title from '../Title/Title'
export default {
  components: {
    Title
  },
  props: {
    data: Object
  }
}
</script>

<style lang='stylus' rel='stylesheet/stylus' scoped>
@import '../../common/stylus/mixins.styl'
  .recommend
    padding 0 15px 20px
    margin-bottom 10px
    background #ffffff
    .itemMajor
      margin-bottom 15px
      position relative
      color #333333
      border 1px solid #d9d9d9
      border-radius 4px
      overflow hidden
      img
        height 193px
        border-radius 4px 4px 0 0
      .info
        box-sizing border-box
        padding 12px 10px 33px
        color #333333
        .line1
          margin-bottom 15px
          display flex
          justify-content space-between
          align-items center
          line-height 1.2
          height 21px
          .Linetitle
            flex 1
            margin-right 85px
            font-size 18px
            ellipsis()
          .price
            line-height 1
            font-size 16px
            text-align center
            min-width 57px
        .line2
          font-size 14px
          color #7f7f7f
          line-height 1.2
          ellipsis()
    .items
      display flex
      background #ffffff
      color #333333
      border 1px solid #d9d9d9
      box-sizing border-box
      border-radius 2px
      margin-bottom 15px
      .topicInfo
        flex 1
        display flex
        flex-direction column
        justify-content center
        overflow hidden
        position relative
        padding-left 10px
        padding-right 15px
        .line1
          margin-bottom 7px
          line-height 1.2
          box-sizing border-box
          >.topicTitle
            height 19px
            ellipsis()
            font-size 16px
            margin-right 15px
        .line2
          .cont
            font-size 12px
            line-height 1.5
            color #7f7f7f
            display -webkit-box
            display block
            -webkit-line-clamp: 2;
            ellipsis()
      .topicPic
        position relative
        width 120px
        height 136px
        overflow hidden
        img
          width 100%
        >.topicTag
          position absolute
          top 5px
          left 5px
          height 18px
          font-size 0
          >.tag
            display inline-block
            padding 0 8px
            height 17px
            font-size 12px
            line-height 17px
            border 1px solid #d9d9d9
            border-radius 10px
            color #333333
            background-color rgba(255,255,255,.9)
      &:last-child
        margin-bottom 0
</style>
