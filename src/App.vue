<template>
  <div id="app">
    <router-view></router-view>
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
import FooterGuide from './components/FooterGuide/FooterGuide'
import Buttons from './components/Buttons/Buttons'
export default {
  components: {
    FooterGuide,
    Buttons
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
#app
  width: 100%
  height: 100%
  background #f4f4f4

</style>
