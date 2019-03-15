<template>
  <div class="wrapper border-left" ref='wrapper'>
    <div>
      <div class="wrap">
        <div class="title-img">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552480444763&di=638e5cb8fe2307cb59781dc96ecf8e30&imgtype=0&src=http%3A%2F%2Fsc.jb51.net%2Fuploads%2Fallimg%2F150716%2F14-150G6093925932.jpg" alt="">
        </div>
        <div class="info">------羊奶粉------</div>
        <div class="ico-wrap">
            <router-link to='/detail' class="img-wrap" v-on:click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </router-link>
            <div class="img-wrap" @click='seeDetail'>
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import '@/assets/styles/iconfont.css'
export default{
  name: 'Area',
  methods: {
    seeDetail: function () {
      this.$router.push('/cart')
    }
  },
  mounted: function () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true, tap: true })
  }
}
</script>
<style lang='stylus' scoped>
.wrapper
  position: absolute
  left: 2rem
  right: 0
  top: 10vw
  bottom: .8rem
  overflow: hidden
  .wrap
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center

    .title-img
      width: 80%
      img
        width: 100%
        display: block
    .info
      margin-top: 1rem
      font-size: .3rem
    .ico-wrap
      display: block
      width: 80%
      .img-wrap
        width: 33.3%
        float: left
        padding-bottom: .5rem
        padding-top: .5rem
        img
          width: 100%


</style>
