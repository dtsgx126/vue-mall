<template>
  <div class="index">
    <router-view></router-view>
    <div class="footer border-top">
      <router-link class="index-btn" to='/'>
        <img src="@/assets/icos/home@2x.png" alt="">
        <span>首页</span>
      </router-link>
      <router-link class="index-btn" to='/classify'>
       <img src="@/assets/icos/home@2x.png" alt="">分类
      </router-link>
      <router-link class="index-btn" to='/cart'>
        <img src="@/assets/icos/home@2x.png" alt="">购物车
      </router-link>
      <router-link class="index-btn" to='/mine'>
         <img src="@/assets/icos/home@2x.png" alt="">我的
       </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Index'
}
</script>
<style lang='stylus' scoped>
.index
  .footer
    position: fixed
    left: 0
    bottom: 0
    right: 0
    display: flex
    justify-content: space-between
    background: #fff
    box-sizing:border-box
    border-color: #cdcdcd
    .index-btn
      width: 25%
      height: 11.8vw
      text-align: center
      display: flex
      flex-direction: column
      align-items: center
      box-sizing: border-box
      color: #ccc
      img
        width: 4.5vw
        height: 4.5vw
        margin-top:1.5vw
        margin-bottom: 1vw
</style>
