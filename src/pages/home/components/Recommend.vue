<template>
  <div>
    <div class="recommend-title">热门推荐</div>
    <ul>
      <router-link tag="li" class="item" v-for="item of recommendList" :key="item.id" :to="'/detail/' + item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-des">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles'
  .recommend-title
    margin-top:.2rem
    height:.8rem
    line-height:.8rem
    text-indent:.2rem
    background:#eee
  .item
    overflow:hidden
    height:1.9rem
    display:flex
    .item-img
      width:1.7rem
      height:1.7rem
      padding:.1rem
    .item-info
      flex:1
      padding:.1rem
      min-width:0
      .item-title
        line-height:.54rem
        font-size:.32rem
        ellipsis()
      .item-des
        line-height:.4rem
        color:#ccc
        ellipsis()
      .item-button
        border-radius:.06rem
        line-height:.44rem
        margin-top:.16rem
        background:#ff9300
        color:#fff
        padding:0 .2rem
</style>
