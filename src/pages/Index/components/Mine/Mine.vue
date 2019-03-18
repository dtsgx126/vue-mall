<template>
  <div class="mine">
    <div class="header">
      <img class="header-ico" src="@/assets/icos/touxiang@2x.png" alt="">
      <div class="sign">
        <p>登录/注册</p>
        <p>优惠券&#12288;0</p>
      </div>
    </div>
    <div class="order border-bottom">
      <span>我的订单</span>
      <span>查看全部订单<img src="@/assets/icos/choose@2x.png" alt=""></span>
    </div>
    <div class="status border-top">
      <div class="box">
        <img src="@/assets/icos/daifukuan@2x.png" alt="">
        待付款
      </div>
      <div class="box">
        <img src="@/assets/icos/daifahuo@2x.png" alt="">
        待发货
      </div>
      <div class="box">
        <img src="@/assets/icos/待收货(1)@2x.png" alt="">
        待收货
      </div>
      <div class="box">
        <img src="@/assets/icos/待评论@2x.png" alt="">
        待评价
      </div>
      <div class="box">
        <img src="@/assets/icos/shouhou@2x.png" alt="">
        退货/售后
      </div>
    </div>
    <img class="bg-img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1552887003257&di=b17a64564dd38482783a9ac964b12024&imgtype=0&src=http%3A%2F%2Fwww.1288.tv%2FImg%2FImgcompany%2F2012%2F6-20%2F201262016254371234.jpg" alt="">
    <div class="info">
      <img class="ico" src="@/assets/icos/youhuiquan@2x.png" alt="">
      <div class="detail-box border-bottom">
        <span>优惠券</span>
        <img src="@/assets/icos/choose@2x.png" alt="">
      </div>
    </div>
    <div class="info">
      <img class="ico" src="@/assets/icos/qianbao_@2x.png" alt="">
      <div class="detail-box border-bottom">
        <span>我的钱包</span>
        <img src="@/assets/icos/choose@2x.png" alt="">
      </div>
    </div>
    <div class="info">
      <img class="ico" src="@/assets/icos/客户@2x.png" alt="">
      <div class="detail-box border-bottom">
        <span>账户信息</span>
        <img src="@/assets/icos/choose@2x.png" alt="">
      </div>
    </div>
    <div class="info mail">
      <img class="ico" src="@/assets/icos/定位(1)@2x.png" alt="">
      <div class="detail-box border-bottom">
        <span>收货地址</span>
        <img src="@/assets/icos/choose@2x.png" alt="">
      </div>
    </div>
    <div class="info">
      <img class="ico" src="@/assets/icos/收益@2x.png" alt="">
      <div class="detail-box border-bottom">
        <span>分销信息</span>
        <img src="@/assets/icos/choose@2x.png" alt="">
      </div>
    </div>
    <div class="info">
      <img class="ico" src="@/assets/icos/safe@2x.png" alt="">
      <div class="detail-box border-bottom">
        <span>账户安全</span>
        <img src="@/assets/icos/choose@2x.png" alt="">
      </div>
    </div>
    <div class="info">
      <img class="ico" src="@/assets/icos/setting@2x.png" alt="">
      <div class="detail-box">
        <span>设置</span>
        <img src="@/assets/icos/choose@2x.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default{
  name: 'IndexMine'
}
</script>
<style lang='stylus' scoped>
@import '~styles/mixin.styl'
.mine
  background: #f6f6f6
  padding-bottom: 20vw
  .header
    display: flex
    height: 30.3vw
    background:url('../../../../assets/icos/layer4@3x.png') no-repeat
    background-size:100vw 30.3vw
    align-items: center
    .sign p
      height: 7vw
      color: #fff
    .header-ico
      display: block
      border-radius: 50%
      width: 16vw
      height: 16vw
      margin-left: 5vw
      margin-right: 3.3vw
  .order
    display: flex
    padding:0 6.4vw
    justify-content: space-between
    align-items: center
    margin-top: 1.5vw
    background: #fff
    span
      height: 7.9vw
      line-height: 7.9vw
      vertical-align: center
      display: flex
      align-items: center
    img
      height: 3vw
      display: inline-block
      margin-left: 1vw
  .status
    padding:2.5vw 6.4vw
    display: flex
    justify-content: space-between
    align-items: center
    background: #fff
    .box
      display: flex
      flex-direction: column
      align-items: center
      img
        width: 5vw
        margin-bottom: 3vw
  .bg-img
    width:100vw
  .info
    display: flex
    align-items: center
    padding-left: 2.9vw
    background: #fff
    .ico
      margin-right: 2.7vw
      width: 5vw
      height: 5vw
    .detail-box
      flex: 1
      display: flex
      justify-content: space-between
      align-items: center
      padding-right: 2.9vw
      height: 9.7vw
      img
        width: 3vw
  .mail
    margin-bottom: 3.6vw

</style>
