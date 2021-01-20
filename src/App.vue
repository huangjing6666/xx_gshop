<template>
  <div id="app">
    <router-view/>
    <FooterGuide v-show="$route.meta.showFooter"/>
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import {reqFoodCategorys} from './api'
import FooterGuide from './components/FooterGuide/FooterGuide'

export default {
  name: 'App',

  async mounted () {
    const result = await reqFoodCategorys()
    console.log('111', result)
    // this.$store.dispatch('getAddress')
    // this.getAdress()
  },
  methods: {
    // ...mapActions(['getAddress'])
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
