<template>
  <div>
    <div class="search">
      <input type="text" v-model="keyword" class="search-input" placeholder="请输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleClickCity(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-show="hasNoData">
          没有找到匹配数据
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import {mapMutations} from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  data () {
    return {
      list: [],
      keyword: '',
      timer: null
      // 设立timer限制搜索的频率来提高性能
    }
  },
  methods: {
    handleClickCity (city) {
      this.cityChange(city)
      this.keyword = ''
      this.$router.push('/')
    },
    ...mapMutations(['cityChange'])
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search, {
      click: true
    })
  },
  updated () {
    this.scroll.refresh()
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (let i in this.cities) {
          this.cities[i].forEach((el) => {
            if (el.spell.indexOf(this.keyword) > -1 ||
              el.name.indexOf(this.keyword) > -1) {
              result.push(el)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles\/varibles.styl"
  .search
    height:.72rem
    background:$bgcolor
    padding:0 .1rem
    .search-input
      box-sizing:border-box
      padding:0 .1rem
      width:100%
      height:.62rem
      line-height:.62rem
      text-align:center
      border-radius:.06rem
      color:#666
  .search-content
    position:absolute
    top:1.58rem
    left:0
    right:0
    bottom:0
    overflow:hidden
    z-index:1
    background:#eee
    .search-item
      color:#666
      background:#fff
      line-height:.62rem
      padding-left:.2rem
</style>
