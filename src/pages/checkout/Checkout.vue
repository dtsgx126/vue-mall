<template>
  <div class="checkout">
    <header class="border-bottom">
      <span class="edit" @click='back'><img src="@/assets/icos/back@2x.png" alt=""></span>
      <span>结算</span>
      <span class="edit"></span>
    </header>
    <div class="mail">
      <div class="name">过水的鱼 &#12288 156****8888</div>
      <div class="home-mail">
        河南 郑州市 高新技术开发区 全境 升龙又一城C区六单元1号楼25层(450001)
      </div>
      <div class="look"><img src="@/assets/icos/choose@2x.png" alt=""></div>
    </div>
    <div class="pay">
      <div class="entry border-bottom">

        <div class="word">
          <img src="@/assets/icos/weixin@2x.png" alt="">
          微信支付
          <span>推荐使用 更安全快捷</span>
        </div>
        <div class="ok-box">
          <input class="ok" type="radio" name="pay">
          <i class="bgImg"></i>
        </div>
      </div>
      <div class="entry border-bottom">

        <div class="word">
          <img src="@/assets/icos/zhifubao@2x.png" alt="">
          支付宝
          <span>支付订单 赢红包</span>
        </div>
        <div class="ok-box">
          <input class="ok" type="radio" name="pay">
          <i class="bgImg"></i>
        </div>
      </div>
      <div class="entry border-bottom">

        <div class="word">
          <img src="@/assets/icos/qianbao@2x.png" alt="">
          钱包
          <span>绑定新卡支付 享最高99元红包</span>
        </div>
        <div class="ok-box">
          <input class="ok" type="radio" name="pay">
          <i class="bgImg"></i>
        </div>
      </div>
      <div class="detail">*查看支付活动规则</div>
    </div>
    <div class="about">

      <div class="express content border-bottom">
        <span>快递配送(免运费)</span>
        <span class="by">不限送货时间<img src="@/assets/icos/choose@2x.png" alt="">
        </span>
      </div>
      <div class="bill content border-bottom">
        <span>电子发票</span>
        <img src="@/assets/icos/choose@2x.png" alt="">
      </div>
      <div class="ticket content border-bottom">
        <span>优惠券</span>
        <span class="by">无可用<img src="@/assets/icos/choose@2x.png" alt="">
        </span>
      </div>
    </div>
    <div class="shopping-wrap">
      <div class="info" v-for="item of cartData" :key="item.id">
        <img class="img-info" :src="item.goodsPic" alt="">
        <span>{{item.goodsName}}</span>
        <span>×{{item.num}}</span>
        <span>{{item.price}}元</span>
      </div>
    </div>
    <div class="total">
      <div class="price">商品价格：{{totalPrice}}元</div>
      <div class="cost">配送费用: 0元</div>
    </div>
    <footer>
      <div class="btn money">应付金额:{{totalPrice}}元</div>
      <div class="btn go-pay">去付款</div>
    </footer>
  </div>
</template>
<script>
import '@/assets/styles/iconfont.css'
import {mapGetters} from 'vuex'
export default{
  name: 'Checkout',
  computed:{
    ...mapGetters({
      cartData:'addShopList',
      totalPrice: 'totalPrice',
    })
  },
  methods: {
    back: function () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.checkout
  background: #eee
  header
    background: #fff
    display: flex
    justify-content: space-between
    align-items: center
    font-size: .5rem
    height: .7rem
    padding-right: $rightEdge
    padding-left: $rightEdge
    padding-top: .2rem
    padding-bottom: .2rem
    border-bottom:1px solid #ddd
    .edit
      font-size: .3rem
      color: gray
      width: .8rem
      text-align: left
  .mail
    position: relative
    padding-left: $leftIndent
    padding-top: .4rem
    background: #fff
    margin-top: .1rem
    padding-right: 1rem
    padding-bottom: .4rem
    .home-mail
      font-size: .3rem
    .name
      margin-bottom: .5rem
      font-size: .4rem
    .look
      position: absolute
      top: 50%
      right: $leftIndent
      transform: translateY(-50%)
  .pay
    background: #fff
    margin-top: .1rem
    .entry
      display: flex
      align-items: center
      justify-content: space-between
      font-size: .35rem
      padding-left: $leftIndent
      .word
        display: flex
        align-items: center
        img
          width: .4rem
          margin-right: .4rem
        span
          margin-left: .2rem
          font-size: .3rem
          height: 1rem
          line-height: 1rem
          color: #ddd
    .detail
      background: #eee
      text-align: right
      padding-top: .5rem
      height: .4rem
      padding-right: $rightEdge
    .entry .ok-box
      min-width: .5rem
      min-height: .5rem
      position: relative
      margin-right: .2rem
      .ok
        background: #fff
        border:1px solid gray
        border-radius: 50%
        position: absolute
        left:0
        top:0
        bottom: 0
        width:.5rem
        height:.5rem
        opacity: 0
      .bgImg
        width:.5rem
        height:.5rem
        display:inline-block
        border:1px solid gray
        box-sizing:border-box
        border-radius:50%
      .ok:checked ~ .bgImg
        background: url('../../assets/icos/gouxuan@2x.png') no-repeat
        background-size:.5rem .5rem
        border:none
  .about
    background: #fff
    margin-bottom: .2rem
    .content
      display: flex
      align-items: center
      justify-content:space-between
      height: 1rem
      padding-left: $leftIndent
      padding-right: $rightEdge
      .by
        color: #ddd
      img
        width: .2rem
        margin-left: 1rem
  .shopping-wrap .info
    background: #fff
    display: flex
    justify-content: space-between
    align-items: center
    padding:.1rem $rightEdge .1rem $leftIndent
    .img-info
      width: 8vw
  .total
    background:#fff
    margin-top: .2rem
    padding:.3rem 0 .3rem $leftIndent
    margin-bottom: $footerHeight
    .price,.cost
      height: .5rem
      line-height: .5rem

  footer
    display: flex
    justify-content: space-between
    font-size: .4rem
    position:fixed
    bottom:0
    width: 100%
    background: #fff
    .btn
      color: #ed742f
      padding: .3rem
      text-align: center
    .money
      flex: 1
      background: #ddd
    .go-pay
      background: #ed742f
      color: #fff
      width:3rem



</style>
