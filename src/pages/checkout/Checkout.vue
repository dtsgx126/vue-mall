<template>
  <div class="detail">
  </div>
</template>
<script>
import DetailSWiper from '@/pages/detail/components/Swiper'
import '@/assets/styles/iconfont.css'
export default{
  name: 'Detail',
  components: {
    DetailSwiper: DetailSWiper
  },
  methods: {
    back: function () {
      this.$router.push('/classify')
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'


</style>
