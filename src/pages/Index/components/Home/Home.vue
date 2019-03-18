<template>
  <div class="home">
    <header>
      <img class="search-ico" src="@/assets/icos/Search@2x.png" alt="">
      <input class="search" type="text" placeholder="商品搜索...">
    </header>
    <div class="tabs border-top">
      <div class="tab-btn">首页</div>
      <div class="tab-btn">全球购</div>
      <div class="tab-btn">奶粉</div>
      <div class="tab-btn">羊奶粉</div>
      <div class="tab-btn">营养辅食</div>
      <div class="tab-btn">营养品</div>
    </div>
    <home-swiper></home-swiper>
    <div class="items border-bottom">
      <div class="info-wrap">
        <img src="@/assets/icos/home_Coupon@2x.png" alt="">
        <span>优惠券</span>
      </div>
      <div class="info-wrap">
        <img src="@/assets/icos/home_Receiving Management@2x.png" alt="">
        <span>收货管理</span>
      </div>
      <div class="info-wrap">
        <img src="@/assets/icos/home_Wallet@2x.png" alt="">
        <span>钱包</span>
      </div>
      <div class="info-wrap">
        <img src="@/assets/icos/home_Distribution@2x.png" alt="">
        <span>分销信息</span>
      </div>
      <div class="info-wrap">
        <img src="@/assets/icos/home_Order Management@2x.png" alt="">
        <span>订单管理</span>
      </div>
    </div>
    <div class="notice border-bottom">
      <img src="@/assets/icos/broadcast@2x.png" alt="">羊奶传奇APP即将上线
    </div>
    <div class="hots">
      <!-- <div class="swiper border-right">
        轮播
      </div> -->
      <hot-swiper class="swiper border-right"></hot-swiper>
      <div class="right">
        <div class="hot border-bottom">
          <p class="title">限制抢购</p>
          <p class="reduce">奶粉抢券满899减100</p>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552843988144&di=5a14c68b3a67ab7921cab4a857ac9425&imgtype=0&src=http%3A%2F%2Ffile02.sg560.com%2Fupimg01%2F2015%2F07%2F27%2F1617331015177063567589.jpg" alt="">
        </div>
        <div class="brand border-right">
          <p class="title">限制抢购</p>
          <p class="reduce">奶粉抢券满899减100</p>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552843988144&di=5a14c68b3a67ab7921cab4a857ac9425&imgtype=0&src=http%3A%2F%2Ffile02.sg560.com%2Fupimg01%2F2015%2F07%2F27%2F1617331015177063567589.jpg" alt="">
        </div>
        <div class="new">
          <p class="title">限制抢购</p>
          <p class="reduce">奶粉抢券满899减100</p>
          <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552843988144&di=5a14c68b3a67ab7921cab4a857ac9425&imgtype=0&src=http%3A%2F%2Ffile02.sg560.com%2Fupimg01%2F2015%2F07%2F27%2F1617331015177063567589.jpg" alt="">
        </div>
      </div>
    </div>
    <div class="good">
      <div class="title">——&#12288热门好货&#12288——</div>
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552846012982&di=5f9bca4b4112673c983102aefffee09f&imgtype=0&src=http%3A%2F%2Fwww.chinadaily.com.cn%2Fhqzx%2Fimages%2Fattachement%2Fjpg%2Fsite1%2F20130127%2F001ec95b71aa126ec47410.jpg" alt="">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552846012982&di=5f9bca4b4112673c983102aefffee09f&imgtype=0&src=http%3A%2F%2Fwww.chinadaily.com.cn%2Fhqzx%2Fimages%2Fattachement%2Fjpg%2Fsite1%2F20130127%2F001ec95b71aa126ec47410.jpg" alt="">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552846012982&di=5f9bca4b4112673c983102aefffee09f&imgtype=0&src=http%3A%2F%2Fwww.chinadaily.com.cn%2Fhqzx%2Fimages%2Fattachement%2Fjpg%2Fsite1%2F20130127%2F001ec95b71aa126ec47410.jpg" alt="">
      <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552846012982&di=5f9bca4b4112673c983102aefffee09f&imgtype=0&src=http%3A%2F%2Fwww.chinadaily.com.cn%2Fhqzx%2Fimages%2Fattachement%2Fjpg%2Fsite1%2F20130127%2F001ec95b71aa126ec47410.jpg" alt="">
    </div>
    <div class="fliter">
      <div class="title">——&#12288精选优品&#12288——</div>
      <img class="title-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552846012982&di=5f9bca4b4112673c983102aefffee09f&imgtype=0&src=http%3A%2F%2Fwww.chinadaily.com.cn%2Fhqzx%2Fimages%2Fattachement%2Fjpg%2Fsite1%2F20130127%2F001ec95b71aa126ec47410.jpg" alt="">
      <div class="items-wrap">
        <div class="img-wrap">
          <img src="@/assets/detail.jpg" alt="">
        </div>
        <p class="name">美素佳儿金装婴幼儿奶粉</p>
        <p class="money">¥174.00</p>
      </div>
      <div class="items-wrap">
        <div class="img-wrap">
          <img src="@/assets/detail.jpg" alt="">
        </div>
        <p class="name">美赞臣奶粉</p>
        <p class="money">¥174.00</p>
      </div>
      <div class="items-wrap">
        <div class="img-wrap">
          <img src="@/assets/detail.jpg" alt="">
        </div>
        <p class="name">美素佳儿金装婴幼儿奶粉</p>
        <p class="money">¥174.00</p>
      </div>
       <img class="title-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552846012982&di=5f9bca4b4112673c983102aefffee09f&imgtype=0&src=http%3A%2F%2Fwww.chinadaily.com.cn%2Fhqzx%2Fimages%2Fattachement%2Fjpg%2Fsite1%2F20130127%2F001ec95b71aa126ec47410.jpg" alt="">
      <div class="items-wrap">
        <div class="img-wrap">
          <img src="@/assets/detail.jpg" alt="">
        </div>
        <p class="name">美素佳儿金装婴幼儿奶粉</p>
        <p class="money">¥174.00</p>
      </div>
      <div class="items-wrap">
        <div class="img-wrap">
          <img src="@/assets/detail.jpg" alt="">
        </div>
        <p class="name">美赞臣奶粉</p>
        <p class="money">¥174.00</p>
      </div>
      <div class="items-wrap">
        <div class="img-wrap">
          <img src="@/assets/detail.jpg" alt="">
        </div>
        <p class="name">美素佳儿金装婴幼儿奶粉</p>
        <p class="money">¥174.00</p>
      </div>
       <img class="title-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552846012982&di=5f9bca4b4112673c983102aefffee09f&imgtype=0&src=http%3A%2F%2Fwww.chinadaily.com.cn%2Fhqzx%2Fimages%2Fattachement%2Fjpg%2Fsite1%2F20130127%2F001ec95b71aa126ec47410.jpg" alt="">
      <div class="items-wrap">
        <div class="img-wrap">
          <img src="@/assets/detail.jpg" alt="">
        </div>
        <p class="name">美素佳儿金装婴幼儿奶粉</p>
        <p class="money">¥174.00</p>
      </div>
      <div class="items-wrap">
        <div class="img-wrap">
          <img src="@/assets/detail.jpg" alt="">
        </div>
        <p class="name">美赞臣奶粉</p>
        <p class="money">¥174.00</p>
      </div>
      <div class="items-wrap">
        <div class="img-wrap">
          <img src="@/assets/detail.jpg" alt="">
        </div>
        <p class="name">美素佳儿金装婴幼儿奶粉</p>
        <p class="money">¥174.00</p>
      </div>
    </div>
  </div>
</template>
<script>
import '@/assets/styles/iconfont.css'
import HomeSwiper from './components/HomeSwiper'
import HotSwiper from './components/HotSwiper'
export default{
  name: 'IndexHome',
  components: {
    HomeSwiper,
    HotSwiper
  }
}
</script>
<style lang='stylus' scoped>
@import '~styles/varibles.styl'
.home
  font-size: 16px
  background: green
  margin-bottom: $footerHeight
  header
    background: #fff
    padding:1.5vw 12.4vw
    position: relative
    display: block
    .search
      background: #faf9f7
      height: 6.8vw
      line-height: 6.8vw
      padding-left: 10vw
      width: 100%
      border-radius: 3px
      box-sizing: border-box
    .search-ico
      position: absolute
      width: 4vw
      top: 50%
      transform:translateY(-50%)
      left: 15vw
  .tabs
    display: flex
    justify-content: space-between
    padding:0 5vw
    background: #fff
    .tab-btn
      padding:1.9vw 0
      box-sizing: border-box
      border-bottom:2px solid #fff
    .tab-btn:hover
      border-color: #f8c066
      color: #f8c066
  .items
    display: flex
    padding:3vw 5.5vw 1vw 5.5vw
    justify-content: space-between
    background: #fff
    .info-wrap
      display: flex
      flex-direction: column
      align-items: center
      img
        width: 9vw
        margin-bottom: 1vw
  .notice
    height: 5.8vw
    line-height: 5.8vw
    vertical-align: middle
    padding-left: 5.8vw
    background: #fff
    img
      width: 5vw
  .hots
    display: flex
    background: #fff
    .title
      font-size: 20px
    .reduce
      margin-top: .5vw
      font-size: 16px
      color: #f8c066
    img
      height: 8vw
      position: absolute
      right: 5vw
      bottom: 2vw
    .swiper
      width: 38.6vw
      height: 41.7vw
      padding: 1.7vw
      box-sizing: border-box
    .right
      display: flex
      flex-wrap: wrap
      width: 61.4vw
      .hot
        width: 100%
        height: 21.4vw
        padding: 1.7vw
        box-sizing: border-box
      .brand
        width: 29.8vw
        height: 20.3vw
        padding: 1.7vw
        box-sizing: border-box
      .new
        width: 31.4vw
        height: 20.3vw
        padding: 1.7vw
        position: relative
        box-sizing: border-box
  .good
    display: flex
    justify-content: space-between
    flex-wrap: wrap
    margin-top: 1.5vw
    background: #fff
    .title
      width: 100%
      text-align: center
      padding:3vw 0
    img
      width: 47.5vw
      height: 23.4vw
      padding-bottom: 2.7vw
  .fliter
    display: flex
    flex-wrap: wrap
    background: #fff
    .title , .title-img
      width: 100vw
      text-align: center
    .title-img
      height: 62.7vw
    .title
      padding:3vw 0
    .items-wrap
      width: 33.3333vw
      display: flex
      flex-direction: column
      justify-content: space-between
      align-items: center
      padding:5vw 0 3vw 0
      .img-wrap
        width: 18.9vw
        height: 18.9vw
        img
          height: 100%
          display: block
          margin:0 auto
      .name
        font-size: 10px
        text-align: center
        margin-top: 4vw
        margin-bottom:1vw
      .money
        color: #e33334
</style>
