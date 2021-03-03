<template>
  <div class="header">
    <div class="header-left"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles\/varibles.styl"
  .header
    display:flex
    height:$lineHeight
    line-height: $lineHeight
    background:$bgcolor
    color:#fff
    .header-left
      width: .64rem
      float: left
      .back-icon
        font-size:.4rem
        text-align:center
    .header-input
      flex: 1
      height:.62rem
      line-height:.62rem
      margin-top:.12rem
      margin-right:.2rem
      padding-left:.2rem
      background:#fff
      border-radius:.1rem
      color:#ccc
    .header-right
      min-width: 1.04rem
      padding:0 .1rem
      float: right
      text-align:center
      color:#fff
      .arrow-icon
        width:.24rem
        font-size:.24rem
        padding-left:-.04rem
</style>
