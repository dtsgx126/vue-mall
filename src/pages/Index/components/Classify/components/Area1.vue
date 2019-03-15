<template>
  <div class="wrap border-left">
    <div class="title-img">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552480444763&di=638e5cb8fe2307cb59781dc96ecf8e30&imgtype=0&src=http%3A%2F%2Fsc.jb51.net%2Fuploads%2Fallimg%2F150716%2F14-150G6093925932.jpg" alt="">
    </div>
    <div class="info">------羊奶粉------</div>
    <div class="ico-wrap">
      <div>
        <div class="img-wrap" @click='seeDetail'>
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
        <div class="img-wrap">
          <img class="ico" src="@/assets/timg.jpg" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import '@/assets/styles/iconfont.css'
export default{
  name: 'Area1',
  methods: {
    seeDetail: function () {
      console.log('test')
    }
  }
}
</script>
<style lang='stylus' scoped>
.wrap
  display: flex
  flex-direction: column
  justify-content: space-between
  align-items: center
  margin-left: 2rem
  .title-img
    width: 80%
    img
      width: 100%
      display: block
  .info
    margin-top: 1rem
    font-size: .5rem
  .ico-wrap
    width: 80%
    .img-wrap
      width: 33.3%
      float: left
      padding-bottom: .5rem
      padding-top: .5rem
      img
        width: 100%


</style>
