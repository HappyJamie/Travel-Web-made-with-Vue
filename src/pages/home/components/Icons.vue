<template>
  <div class="icons">
  <swiper :options="swiperOption">
    <swiper-slide v-for="(page,index) of pages" :key="index">
    <div class="icon" v-for="item of page" :key="item.id">
      <div class="icon-img">
        <img class="icon-img-content" :src="item.imgUrl">
      </div>
      <p class="icon-desc">{{item.desc}}</p>
    </div>
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles"
  .icons >>> .swiper-container
    width:100%
    height:0
    padding-bottom:50%
  .icons >>> .swiper-pagination-bullet-active
    background:#ff9300
  .icons
    margin-top:.2rem
    .icon
      float:left
      position:relative
      width:25%
      height:0
      padding-bottom:25%
      .icon-img
        position:absolute
        bottom:.44rem
        right:0
        left:0
        top:0
        .icon-img-content
          display:block
          height:100%
          margin:0 auto
      .icon-desc
        position:absolute
        right:0
        left:0
        bottom:0
        text-align:center
        color:$darkcolor
        ellipsis()
</style>
