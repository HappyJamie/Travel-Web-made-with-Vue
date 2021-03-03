<template>
  <div class="list">
    <div class="item" v-for="item of letter" :key="item"
    :ref="item"
    @click="handleClick(item)"
    @touchstart="handlestart"
    @touchmove="handlemove"
    @touchend="handleend">{{item}}</div>
  </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  data () {
    return {
      touchStatus: false,
      startY: '',
      timer: null
    }
  },
  computed: {
    letter () {
      const letter = []
      for (let i in this.cities) {
        letter.push(i)
      }
      return letter
    }
  },
  updated () {
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleClick (data) {
      this.$emit('change', data)
    },
    handlestart () {
      this.touchStatus = true
    },
    handlemove (e) {
      if (this.touchStatus) {
        // 设立timer限制触发频率，提高性能
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 79
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index <= this.letter.length) {
            this.$emit('change', this.letter[index])
          }
        }, 16)
      }
    },
    handleend () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles\/varibles.styl"
  .list
    display:flex
    flex-direction:column
    justify-content:center
    position:absolute
    width:.4rem
    top:1.58rem
    right:0
    bottom:0
    .item
      text-align:center
      line-height:.4rem
      color:$bgcolor
</style>
