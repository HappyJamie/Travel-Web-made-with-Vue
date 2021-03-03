<template>
  <div class="header">
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="!showAbs" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const Top = document.documentElement.scrollTop || document.body.scrollTop ||
       window.pageYoffset
      if (Top > 60) {
        let opacity = Top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = { opacity }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles\/varibles.styl"
  .header
    .header-fixed
      z-index:2
      position:fixed
      top:0
      left:0
      right:0
      height:$lineHeight
      line-height: $lineHeight
      background:$bgcolor
      color:#fff
      text-align:center
      font-size:.32rem
      .header-fixed-back
        position:absolute
        top:0
        left:0
        width:.64rem
        text-align:center
        font-size:.4rem
        color:#fff
    .header-abs
      position:absolute
      top:.2rem
      left:.2rem
      width:.8rem
      height:.8rem
      line-height:.8rem
      text-align:center
      border-radius:.4rem
      background:rgba(0, 0, 0, .8)
      .header-abs-back
        color:#fff
        font-size:.4rem
</style>
