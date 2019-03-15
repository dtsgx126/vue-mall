<template>
<div class="wrap">
  <swiper :options="swiperOption">
    <swiper-slide>
      <img class="swiper-img" src="http://m.360buyimg.com/mobilecms/s750x750_jfs/t30229/36/423353318/102916/95c2d5e2/5bf38619Nd7956a65.jpg!q80.dpg">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="//m.360buyimg.com/mobilecms/s720x720_jfs/t26851/258/1952532152/159434/76faedb0/5bf3860dNb16229d4.jpg!q70.dpg.webp">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="//m.360buyimg.com/mobilecms/s720x720_jfs/t28165/217/429258562/93751/ea80096a/5bf38618Nfe34c142.jpg!q70.dpg.webp">
    </swiper-slide>
    <div class="swiper-pagination btn"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default{
  name: 'DetailSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
.wrap >>> .swiper-pagination-bullet-active
  background: #fff !important
.wrap
  overflow: hidden
  width: 100%
  height: 0
  padding-bottom: 100%
  .swiper-img
    width:100%
</style>
