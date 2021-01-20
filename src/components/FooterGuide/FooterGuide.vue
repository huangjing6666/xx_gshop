<template>
  <div class="footer_guide">
    <span class="guide_item " v-for="(item,index) in indexTabs" :key="index"
         :class="[indexTabsIndex === index ? 'on' : '']" @click="changeTabs(index)">
      <span class="item_icon">
        <i class="iconfont" :class="['icon-'+item.icon]"></i>
      </span>
      <span>{{item.title}}</span>
    </span>
    <!--    <span class="guide_item " :class="{on: '/msite' === $route.path}" @click="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimai"></i>
      </span>
      <span>外卖</span>
    </span>
    <a href="javascript:;" class="guide_item" :class="{on: '/search' === $route.path}" @click="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-search"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/order' === $route.path}" @click="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-dingdan"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on: '/profile' === $route.path}" @click="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-geren"></i>
      </span>
      <span>我的</span>
    </a>-->
  </div>
</template>

<script>
export default {
  name: 'FooterGuide',
  data() {
    return {
      indexTabs: [
        {
          id: 0, icon: "waimai", title: "外卖", path: "/msite"
        }, {
          id: 1, icon: "search", title: "搜索", path: "/search"
        }, {
          id: 2, icon: "dingdan", title: "订单", path: "/order"
        }, {
          id: 3, icon: "geren", title: "我的", path: "/profile"
        }
      ],
      indexTabsIndex: 0
    }
  },
  methods: {
    goTo (path) {
      this.$router.replace(path)
    },
    changeTabs(index){
      if (this.indexTabsIndex === index) {
        return;
      }
      this.indexTabsIndex = index;
      this.$router.replace(this.indexTabs[index].path);
    }
  },
  watch: {
    $route: {
      handler(to, from) {
        let currentItem = this.indexTabs.find((item, index) => item.path === to.path);
        this.indexTabsIndex = currentItem ? currentItem.id : -1;
      },
      immediate: true
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide  //footer
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
    .guide_item
      display flex
      flex 1
      text-align center
      flex-direction column
      align-items center
      margin 5px
      color #999999
      &.on
        color #02a774
      span
        font-size 12px
        margin-top 2px
        margin-bottom 2px
        .iconfont
          font-size 22px
</style>
