<script src="router/index.js"></script>
<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
// import {reqAddress} from './api'
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  name: 'App',

  mounted () {
    // const result = await reqAddress()
    // console.log('111', result)
    // 分发
    // this.$store.dispatch('getAddress')
    this.getAddress()
    this.getUserInfo()
  },
  methods: {
    ...mapActions(['getAddress', 'getUserInfo'])
  },
  components: {
    FooterGuide
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
#app
  width 100%
  height 100%
  background #f5f5f5
  position relative

</style>
