<template>
<div class="topic_container">
  <div class="topic_header">
    <HeaderMain/>
  </div>
  <div class="topic_content">
    <div class="top_banner">
      <div class="wapper">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item, index) in topic.banner" :key="index">
              <a href="javascript:;">
                <div class="content">
                  <div class="subTitle">{{item.subTitle}}</div>
                  <div class="title">{{item.title}}</div>
                  <div class="desc">{{item.desc}}</div>
                </div>
                <img :src="item.picUrl" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <TopicList :data="topic.column"/>
    <Recommend :data="topic.recommend"/>
    <TopicShow :data="topic.tenfifteen"/>
    <Recommend :data="topic.zhen"/>
    <section class="look">
      <Title title="严选LOOK"></Title>
      <a href="javascript:;">
        <img :src="topic.yxLook.picUrl" alt="">
        <div class="authorContainer">
          <div class="author">
            <div class="authorPic">
              <img :src="topic.yxLook.avatar" alt="">
            </div>
            <div class="authorName">{{topic.yxLook.nickname}}</div>
          </div>
        </div>
        <div class="desc">{{topic.yxLook.content}}</div>
      </a>
    </section>
    <MoveTopic :data="topic.yxWeek"/>
  </div>

</div>
</template>

<script>
import HeaderMain from '../../components/HeaderMain/HeaderMain'
import TopicList from '../../components/TopicList/TopicList'
import Recommend from '../../components/Recommend'
import TopicShow from '../../components/TopicShow'
import MoveTopic from '../../components/MoveTopic'
import Title from '../../components/Title/Title'
import Swiper from 'swiper'
import {mapState} from 'vuex'
export default {
  components: {
    HeaderMain,
    TopicList,
    Recommend,
    Title,
    TopicShow,
    MoveTopic
  },
  mounted () {
    this.$store.dispatch('getTopic')
    this.$store.dispatch('getBanner')
    this.$store.dispatch('getData')
    this.$store.dispatch('getItems')
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination'
      },
      loop: false,
      // spaceBetween: 20,
      autoplay: true
    })
  },
  computed: {
    ...mapState(['banner', 'home', 'alldata', 'topic', 'items'])
  }

}
</script>

<style scoped type="text/stylus" lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/mixins.styl'
  .topic_container
    width: 100%
    background-color #fff
    padding-bottom 40px
    .topic_header
      width 100%
      position fixed
      top:0
      left:0
      z-index 100
    .topic_content
      .look
        background #ffffff
        margin-bottom 10px
        img
          width 100%
          height auto
        .authorContainer
          padding 10px 0 10px 10px
          .author
            display flex
            align-items center
            font-size 10px
            .authorPic
              width 23px
              height 23px
              border-radius 50%
              margin-right 4px
              border 1px solid #d9d9d9
              overflow hidden
            .authorName
              color: #333;
              font-size 14px
              letter-spacing 2px
              margin-left 10px
              ellipsis()
      .desc
        font-size 14px
        color #7f7f7f
        line-height 1.6
        padding 5px 15px 10px
      /*padding-top 44px*/
      /*width: 100%*/
      /*position relative*/
      /*margin-left auto*/
      /*margin-right auto*/
      /*overflow hidden*/
      .wapper
        margin-top 44px
        padding 12px 0
        width 350px
        box-sizing border-box
        background #ffffff
        .swiper-slide
          width 100%
          a
            display block
            height 200px
            img
              width 100%
              height 192px
              border-radius 5px
            .content
              position absolute
              top 0
              left 0
              bottom 0
              right 0
              margin auto
              display flex
              align-items center
              justify-content center
              flex-direction column
              width 233px
              height 99px
              background-color rgba(255, 255, 255, .9)
              .subTitle
                position relative
                font-size 10px
                color #7f7f7f
                line-height 15px
                padding  0 4px
                &:before,&:after
                  content ''
                  position absolute
                  top 0
                  bottom 0
                  margin auto
                  width 12px
                  height 1px
                  background-color #999999
                &:before
                  left -12px
                &:after
                  right -12px
              .title
                font-size 16px
                line-height 24px
                color #333333
                margin-top 8px
                font-weight 700
              .desc
                font-size 12px
                color #333333
                line-height 18px
                margin-top 2px
                    /*height:200px*/


</style>
