<template>
  <div class="detail">
    <header>
      <span @click='back'><img src="@/assets/icos/back@2x.png" alt=""></span>
      <span><img src="@/assets/icos/more@2x.png" alt=""></span>
    </header>
    <detail-swiper></detail-swiper>
    <div class="look">
      合生元超级呵护婴儿配方奶粉，领券下单省30元
      <span class="border">立即查看</span>
    </div>
    <div class="info">
      <p class="info-title">{{item.goodsName}}</p>
      <p class="info-center">1段900g 法国原灌进口(0-6个月)</p>
      <p class="info-money">￥{{item.price}}</p>
    </div>
    <div class="choose">
      <span class="title">已选</span>
      <span class="content">合生元(BIOSTIME)超级婴儿呵护配方奶粉×1</span>
      <span class="ico">
        <img src="@/assets/icos/choose@2x.png" alt="">
      </span>
    </div>
    <div class="mail">
      <span class="title">送至</span>
      <span class="content">郑州市高级技术开发区  有现货</span>
      <span class="ico">
        <img src="@/assets/icos/choose@2x.png" alt="">
      </span>
    </div>
    <div class="server-info">
      <span>
        <img src="@/assets/icos/right@2x.png" alt="">支持七天无理由退货</span>
    </div>
    <div class="user-rating">
      <header>
        <div class="title">用户评价(6093)</div>
        <div class="right">
          <span class="ok">95.8%</span>
          满意
          <img src="@/assets/icos/right@2x.png" alt="">
        </div>
      </header>
      <div class="rating-content">

        <div class="title">
          <div class="head-img-wrap">
            <img src="@/assets/icos/touxiang@2x.png" alt="">
          </div>
          过水的鱼
        </div>
        <p class="rating-info">试了一下，感觉很棒，下次还会光顾！</p>
        <div class="img-wrap">
          <img src="" alt="">
        </div>
        <p class="answer">
          <span>官方回复:&#32;</span>感谢您的回复，祝您生活愉快！
        </p>
      </div>
      <div class="rating-content">

        <div class="title">
          <div class="head-img-wrap">
            <img src="@/assets/icos/touxiang@2x.png" alt="">
          </div>
          过水的鱼
        </div>

        <p class="rating-info">试了一下，感觉很棒，下次还会光顾！</p>
        <div class="img-wrap">
          <img src="" alt="">
        </div>
        <p class="answer">
          <span>官方回复:&#32;</span>感谢您的回复，祝您生活愉快！
        </p>
      </div>
    </div>
    <div class="footer">
      <div class="btn-detail">
        <div class="btn active">图文详情</div>
        <div class="btn right">参数</div>
      </div>
      <div class="btn-buy">
        <div class="btn cart" @click='goCart'>购物车</div>
        <div class="btn add" @click='addToCart(item);dialog()'>加入购物车</div>
        <div class="btn buy" @click='buy'>付款</div>
      </div>
    </div>
    <div class="dialog-wrap" v-show="isShow">
      成功添加到购物车
    </div>
  </div>
</template>
<script>
import DetailSWiper from '@/pages/detail/components/Swiper'
import '@/assets/styles/iconfont.css'
import {mapActions} from 'vuex'
export default{
  name: 'Detail',
  components: {
    DetailSwiper: DetailSWiper
  },
  data: function () {
    return {
      item: this.$route.query.item,
      isShow: false
    }
  },
  methods: {
    dialog () {
      this.isShow = true
      // addToCart(item)
      var that= this
      setTimeout(function () {

        that.isShow = false
      },1000)
    },
    ...mapActions(['addToCart']),
    back: function () {
      this.$router.push('/classify')
    },
    buy: function () {
      this.$router.push('/checkout')
    },
    goCart: function () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.detail
  background: #eee
  padding-bottom: 15vw
  position: relative
  header
    background: #fff
    display: flex
    justify-content: space-between
    align-items: center
    padding: $leftEdge
  .look
    background: #F63515
    font-size: .2rem
    color: white
    height: .8rem
    line-height: .8rem
    text-indent: $leftIndent
    span
      margin-right: .2rem
      border:1px solid #fff
      padding:.1rem
  .info
    padding-left: $leftIndent
    padding-top: .3rem
    padding-bottom: .3rem
    background: #fff
    margin-bottom: .1rem
    .info-title
      font-size: .35rem
    .info-center
      margin-top:.1rem
      font-size: .2rem
      color: gray

    .info-money
      font-size: .9rem
      line-height: 1.2rem
      height: 1.2rem
  .choose
    padding-left: $leftIndent
    font-size: .26rem
    background: #fff
    height: .5rem
    line-height: .5rem
    margin-bottom: 1px
    .content
      margin-left: .3rem
    .ico
      float: right
      margin-right: $rightEdge
      img
        transform: scale(0.6)
    .title
      color: #ccc
  .mail
    padding-left: $leftIndent
    font-size: .26rem
    background: #fff
    height: .5rem
    line-height: .5rem
    margin-bottom: 1px
    .title
      color: #ccc
    .content
      margin-left: .3rem
    .ico
      float: right
      margin-right: $rightEdge
      img
        transform: scale(0.6)
  .server-info
    background: #fff
    padding-left: $leftEdge
    padding-top: .3rem
    padding-bottom: .3rem
    margin-bottom: .1rem
    span
      display: flex
      align-items: center
      img
        transform: scale(.6)
  .user-rating
    header
      padding-left: $leftEdge
      padding-right: $rightEdge
      padding-top: .3rem
      padding-bottom: .3rem
      display: flex
      justify-content: space-between
      align-items: center
      .right .ok
        color: red
      img
        transform: scale(.6)
    .rating-content
      padding-left: $leftEdge
      padding-top: .3rem
      padding-bottom:.3rem
      margin-top: 1px
      background: #fff
      .title
        display: flex
        justify-content: left
        align-items: center
        margin-top: 1px
        .head-img-wrap
          width: 1rem
          margin-right: .6rem
          img
            width: 100%
      .rating-info
        margin-top: .3rem
      .answer
        background: #ddd
        padding:.2rem .2rem
        width: 90%
        line-heigt: .2rem
        span
          color: orange
  .footer
    background: #fff
    /*margin-top: 2px*/
    position: fixed
    left: 0
    bottom: 0
    right: 0
    border-top:1px solid #ddd
    .btn-detail
      display: flex
      padding-top: .1rem
      padding-bottom: .1rem
      .btn
        width: 50%
        height: .5rem
        text-align: center
        line-height: .5rem
      .right
        border-left: 2px solid #eee
    .btn-buy
      display: flex
      .btn
        text-align: center
        height: .8rem
        line-height: .8rem
      .cart
        width: 30%
        background: #eee
      .add
        width: 35%
        background: green
      .buy
        width: 35%
        background: red

  .dialog-wrap
    position: fixed
    left: 50%
    top: 50%
    transform : translate(-50%,-50%)
    background: black
    color: #fff
    width: 40vw
    height: 20vw
    line-height: 20vw
    text-align: center
    border-radius: 5px
    opacity: 0.7
    z-index:100
</style>
