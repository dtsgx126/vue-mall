<template>
<div class="wrap">
  <swiper :options="swiperOption">
    <swiper-slide>
      <img class="swiper-img" src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/28205/19/10573/149678/5c8797a5Ec999b226/cda18160c3f982ec.jpg!cr_1125x549_0_72!q70.jpg.dpg">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="//m.360buyimg.com/mobilecms/s750x366_jfs/t29683/314/207983845/109869/66a9f8d6/5beaf905Nc366b170.jpg!cr_1125x549_0_72!q70.jpg.dpg">
    </swiper-slide>
    <swiper-slide>
      <img class="swiper-img" src="//m.360buyimg.com/mobilecms/s750x366_jfs/t1/29505/23/10819/97128/5c89f660Ef28d5eb7/11e13f47b20b1a0b.jpg!cr_1125x549_0_72!q70.jpg.dpg">
    </swiper-slide>
    <div class="swiper-pagination btn"  slot="pagination"></div>
  </swiper>
</div>
</template>
<script>
export default{
  name: 'HomeSwiper',
  data: function () {
    return {
      swiperOption: {
        pagination:'.swiper-pagination',
        loop: true,
        autoplay: true,
        speed: 900
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
  padding-bottom: 48.8%
  .swiper-img
    width:100%
</style>
