<template>
  <div class="index">
    <router-view></router-view>
    <div class="footer">
      <router-link class="index-btn" to='/'>首页</router-link>
      <router-link class="index-btn" to='/classify'>分类</router-link>
      <router-link class="index-btn" to='/cart'>购物车</router-link>
      <router-link class="index-btn" to='/mine'>我的</router-link>
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
    border:1px solid black
    background: #fff
    box-sizing:border-box
    .index-btn
      width: 25%
      height: 11.8vw
      line-height: 11.8vw
      text-align: center
      border-left:1px solid black
      box-sizing:border-box
    .index-btn:first-child
      border: none
</style>
