<template>
  <div class="cart">
    <header class="border-bottom">
      <span class="edit"></span>
      <span>购物车</span>
      <span class="edit">编辑</span>
    </header>
    <div class="content">
      <div class="info-wrap border-bottom" v-for='item of cartData' :key='item.id'>
        <div class="ok-box">
          <input :checked="isSelect" class="ok" type="checkbox" @click="noAll">
          <i class="bgImg"></i>
        </div>
        <div class="img-wrap">
          <img :src="item.goodsPic" alt="">
        </div>
        <div class="shop-info">
          <p>{{item.goodsName}}</p>
          <p class="spec">规格：900克(荷兰原装进口)</p>
          <div class="choose">
            <span class="money">¥{{item.price}}</span>
            <div class="btns-buy">
              <button class="btn-less" @click='reduceToCart(item)' :disabled="!(item.num-1)">-</button>
              <input type="number" min="1" :value="item.num" @input='customToCart(item,$event)'>
              <button class="btn-more" @click='addToCart(item)'>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content"></div>
    <footer class="border-top">
      <div class="btn allBuy ok-box">
          <input class="ok" type="checkbox" @click="test" :checked="isAll">
          <i class="bgImg"></i><span >全选</span>
          <span>不含运费 合计:￥{{this.totalPrice}}</span>
      </div>
      <div class="btn del" @click='toBuy'>去结算</div>
    </footer>
  </div>
</template>
<script>
import '@/assets/styles/iconfont.css'
import { mapGetters , mapActions } from 'vuex'
export default{
  name: 'IndexHome',
  data () {
    return {
      isSelect: false,
      isAll: false
    }
  },
  watch: {
    isSelect: function () {
      console.log(this.isSelect)
    }
  },
  computed: {
    ...mapGetters({
      cartData:'addShopList',
      totalPrice: 'totalPrice',
    })
  },
  methods: {
    test () {
      this.isSelect = !this.isSelect
      this.isAll = true
      this.isSelect = true
      console.log(this.isSelect)
    },
    noAll () {
      this.isAll = false
    },
    toBuy () {
      this.$router.push('/checkout')
    },
    customToCart(item,$event) {
      if ($event.target.value <= 0) {
        alert('请输入正确的数字')
      }
      console.log($event)
      item.num = $event.target.value
      this.$store.commit('customCart',item)
    },
    ...mapActions({
      addToCart: 'addToCart',
      reduceToCart: 'reduceToCart'
    })
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.cart
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
      text-align: right
  .content
    min-height: 3rem
    background: #fff
    margin-bottom: .3rem
    .info-wrap
      display: flex
      align-items: center
      padding:$leftEdge
      .img-wrap
        width: 2rem
        hegiht: 2.3rem
        border:1px solid gray
        overflow: hidden
        margin-right: .2rem

        img
          height: 2rem
          margin:0 auto
          display: block
          /*width: 100%*/
      .shop-info
        flex: 1
        display: flex
        height: 2rem
        flex-direction: column
        align-items: flex-start
        font-size: .2rem
        .spec
          background: #ddd
          height: .7rem
          line-height: .7rem
          width: 100%
        .choose
          display: flex
          width: 100%
          justify-content: space-between
          align-items: flex-end
          .money
            color: red
            font-size: .5rem
          .btns-buy
            height: 1rem
            display: flex
            align-items: flex-end
            justify-content: center
            .btn-less,.btn-more

              height:.5rem
              line-height : .5rem
              width: .4rem
              text-align: center
              font-size: .5rem
              background: #fff
              box-sizing border-box
              vertical-align: middle
              border:1px solid gray
            input
              width: 1rem
              height: .5rem
              border:1px solid gray
              text-align: center
              border-left: none
              border-right: none
              display: inline-block
              box-sizing: border-box
  .ok-box
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
          background: url('../../../../assets/icos/gouxuan@2x.png') no-repeat
          background-size:.5rem .5rem
          border:none
  footer
    position:fixed
    bottom: $footerHeight
    display: flex
    justify-content: space-between
    width: 100%
    background: #fff
    padding-left: $leftEdge
    .btn
      height: $footerHeight
      line-height: $footerHeight
    .allBuy
      flex: 1
      display: flex
      align-items: center
      span
        margin-left: .3rem
    .del
      width: 2rem
      text-align: center
      color: #fff
      background: orange


</style>
