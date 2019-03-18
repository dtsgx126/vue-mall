<template>
  <div class="wrapper border-left" ref='wrapper'>
    <div>
      <div class="wrap">
        <div class="title-img">
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552480444763&di=638e5cb8fe2307cb59781dc96ecf8e30&imgtype=0&src=http%3A%2F%2Fsc.jb51.net%2Fuploads%2Fallimg%2F150716%2F14-150G6093925932.jpg" alt="">
        </div>
        <div class="info">------羊奶粉------</div>
        <div class="ico-wrap">
            <div class="img-wrap"
                 @click='seeDetail(item)'
                 v-for='item of shopList'
                 :key='item.id'
            >
              <img class="ico" :src="item.goodsPic" alt="">
              <span>{{item.goodsName}}</span>
            </div>
            <div class="img-wrap" @click='seeDetail'>
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>美赞臣</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>美赞臣</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>美赞臣</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>伊利金宝贝</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>伊利金宝贝</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>伊利金宝贝</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>伊利金宝贝</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>伊利金宝贝</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>伊利金宝贝</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>伊利金宝贝</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>伊利金宝贝</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>伊利金宝贝</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>伊利金宝贝</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>伊利金宝贝</span>
            </div>
            <div class="img-wrap" @click="seeDetail">
              <img class="ico" src="@/assets/timg.jpg" alt="">
              <span>伊利金宝贝</span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
import '@/assets/styles/iconfont.css'
import { mapGetters } from 'vuex'
export default{
  name: 'Area',
  computed:{
    shopList () {
      console.log(this.$store.getter)
      return this.$store.getters.getShopList
    }
  },
  methods: {
    seeDetail: function (item) {
      this.$router.push({ path:'/detail' ,query:{item:item}})
      // this.$router.push('/detail')
    }
  },
  mounted: function () {
    this.scroll = new Bscroll(this.$refs.wrapper, {click: true, tap: true })
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.wrapper
  position: absolute
  right: 0
  top: 13vw
  bottom: $footerHeight
  overflow: hidden
  width: 78.4vw
  .wrap
    display: flex
    flex-direction: column
    justify-content: space-between
    align-items: center
    width: 100%
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
        display: flex
        flex-direction: column
        align-items: center
        justify-content: space-between
        color: gray
        font-size: 12px
        span
          text-align: center
        img
          width: 11.1vw
          display: block
          margin:0 auto
          margin-bottom: 3vw




</style>
