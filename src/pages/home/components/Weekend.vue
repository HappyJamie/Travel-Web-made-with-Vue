<template>
  <div>
    <div class="weekend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of weekendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-des">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles'
  .weekend-title
    height:.8rem
    line-height:.8rem
    text-indent:.2rem
    background:#eee
  .item
    .item-img-wrapper
      overflow:hidden
      height:0
      width:100%
      padding-bottom:33.5%
      .item-img
        width:100%
    .item-info
      padding:.1rem
      .item-title
        line-height:.54rem
        font-size:.32rem
        ellipsis()
      .item-des
        line-height:.4rem
        color:#ccc
        ellipsis()
</style>
