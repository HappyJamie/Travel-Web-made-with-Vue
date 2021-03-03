<template>
  <div class="list" ref="wrapper">
    <div>
    <div class="area">
      <div class="title border-topbottom">当前城市</div>
      <div class="button-list">
        <div class="button-wrapper">
          <div class="button">{{this.city}}</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title border-topbottom">热门城市</div>
      <div class="button-list">
        <div class="button-wrapper" v-for="x of hotCities" @click="handleClickCity(x.name)" :key="x.id">
          <div class="button">{{x.name}}</div>
        </div>
      </div>
    </div>
    <div class="area" v-for="(item, key) of cities" :key="key" :ref="key">
      <div class="title border-topbottom">{{key}}</div>
      <div class="item-list">
        <div class="item border-bottom" v-for="x of item"
         :key="x.id" :spell="x.spell" @click="handleClickCity(x.name)">{{x.name}}</div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapState, mapMutations} from 'vuex'
export default {
  name: 'CityList',
  props: {
    hotCities: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleClickCity (city) {
      this.cityChange(city)
      this.$router.push('/')
    },
    ...mapMutations(['cityChange'])
  },
  watch: {
    letter () {
      if (this.letter) {
        const el = this.$refs[this.letter][0]
        this.scroll.scrollToElement(el)
      }
    }
  },
  computed: {
    ...mapState(['city'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
      // 添加了better-scroll移动端点击事件会默认为touch而失效，需要在此处添加click：true
    })
  },
  updated () {
    this.scroll.refresh()
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles\/varibles.styl"
  .list
    position:absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
    overflow:hidden
    .area
      .border-topbottom
        &:before
          border-color:#ccc
        &:after
          border-color:#ccc
      .border-bottom
        &:before
          border-color:#ccc
      .title
        line-height:.54rem
        background:#eee
        padding-left:.2rem
        color:#666
        font-size:.26rem
      .button-list
        padding:.1rem .6rem .1rem .2rem
        overflow:hidden
        .button-wrapper
          float:left
          width:33.3%
          .button
            padding:.1rem 0
            margin:.1rem
            text-align:center
            border:.02rem solid #ccc
            border-radius:.06rem
      .item-list
        .item
          padding-left:.2rem
          height:.76rem
          line-height:.76rem
</style>
