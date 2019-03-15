<template>
  <div class="cart">
    <header class="border-bottom">
      <span class="edit"></span>
      <span>购物车</span>
      <span class="edit">编辑</span>
    </header>
    <div class="content">
      <div class="info-wrap border-bottom">
        <div class="ok-box">
          <input class="ok" type="checkbox">
          <i class="bgImg"></i>
        </div>
        <div class="img-wrap">
          <img src="@/assets/timg.jpg" alt="">
        </div>
        <div class="shop-info">
          <p>美素力(frisolac)金装婴儿配方奶粉 1段 (0-6个月婴儿适用)</p>
          <p class="spec">规格：900克(荷兰原装进口)</p>
          <div class="choose">
            <span class="money">¥259.00</span>
            <div class="btns-buy">
              <span class="btn-less">-</span>
              <input type="text" value="1">
              <span class="btn-more">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="info-wrap border-bottom">
        <div class="ok-box">
          <input class="ok" type="checkbox">
          <i class="bgImg"></i>
        </div>
        <div class="img-wrap">
          <img src="@/assets/timg.jpg" alt="">
        </div>
        <div class="shop-info">
          <p>美素力(frisolac)金装婴儿配方奶粉 1段 (0-6个月婴儿适用)</p>
          <p class="spec">规格：900克(荷兰原装进口)</p>
          <div class="choose">
            <span class="money">¥259.00</span>
            <div class="btns-buy">
              <span class="btn-less">-</span>
              <input type="text" value="1">
              <span class="btn-more">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="info-wrap border-bottom">
        <div class="ok-box">
          <input class="ok" type="checkbox">
          <i class="bgImg"></i>
        </div>
        <div class="img-wrap">
          <img src="@/assets/timg.jpg" alt="">
        </div>
        <div class="shop-info">
          <p>美素力(frisolac)金装婴儿配方奶粉 1段 (0-6个月婴儿适用)</p>
          <p class="spec">规格：900克(荷兰原装进口)</p>
          <div class="choose">
            <span class="money">¥259.00</span>
            <div class="btns-buy">
              <span class="btn-less">-</span>
              <input type="text" value="1">
              <span class="btn-more">+</span>
            </div>
          </div>
        </div>
      </div>
      <div class="info-wrap border-bottom">
        <div class="ok-box">
          <input class="ok" type="checkbox">
          <i class="bgImg"></i>
        </div>
        <div class="img-wrap">
          <img src="@/assets/timg.jpg" alt="">
        </div>
        <div class="shop-info">
          <p>美素力(frisolac)金装婴儿配方奶粉 1段 (0-6个月婴儿适用)</p>
          <p class="spec">规格：900克(荷兰原装进口)</p>
          <div class="choose">
            <span class="money">¥259.00</span>
            <div class="btns-buy">
              <span class="btn-less">-</span>
              <input type="text" value="1">
              <span class="btn-more">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="content"></div>
    <footer class="border-top">
      <div class="btn allBuy ok-box">
          <input class="ok" type="checkbox">
          <i class="bgImg"></i><span>全选</span>
        </div>
      <div class="btn del">删除</div>
    </footer>
  </div>
</template>
<script>
import '@/assets/styles/iconfont.css'
export default{
  name: 'IndexHome'
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
        hegiht: 1rem
        border:1px solid gray
        overflow: hidden
        margin-right: .2rem
        img
          height: 2rem
          width: 100%
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
              border:1px solid gray
              height:.5rem
              line-height: .5rem
              width: .4rem
              text-align: center
              font-size: .5rem
            input
              width: 1rem
              height: .5rem
              border:1px solid gray
              text-align: center
              border-left: none
              border-right: none
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
