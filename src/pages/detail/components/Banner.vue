<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg">
      <div class="banner-info">
        <div class="banner-title">{{sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe692;</span>
          {{imgNum}}
        </div>
      </div>
    </div>
    <fade-animation>
      <common-gallery :imgs="gallery" v-show="showGallery" @close="handleGalleryClose"></common-gallery>
    </fade-animation>
  </div>
</template>

<script>
import CommonGallery from 'common/gallery/Gallery'
import FadeAnimation from 'common/fade/FadeAnimation'
export default {
  name: 'DetailBanner',
  props: {
    sightName: String,
    bannerImg: String,
    gallery: Array
  },
  data () {
    return {
      showGallery: false
    }
  },
  computed: {
    imgNum () {
      return this.gallery.length
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  components: {
    CommonGallery,
    FadeAnimation
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    height:0
    padding-bottom:55%
    overflow:hidden
    position:relative
    .banner-img
      width:100%
    .banner-info
      display:flex
      position:absolute
      left:0
      right:0
      bottom:0
      line-height:.6rem
      color:#fff
      background-image:linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        font-size:.32rem
        flex:1
        padding:0 .2rem
      .banner-number
        height:.32rem
        padding:0 .4rem
        margin-top:.14rem
        line-height:.32rem
        font-size:.24rem
        border-radius:.2rem
        background:rgba(0, 0, 0, .8)
        .banner-icon
          font-size:.24rem
</style>
