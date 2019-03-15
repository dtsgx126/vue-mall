<template>
  <div class="mine">
    <div class="header">
      <router-link to='/home' class='header-ico'>
        <span class="iconfont">&#xe624;</span>
      </router-link>
      我的我的
    </div>
    <router-link to='/mine/detail' class='link'>查看详情</router-link>
  </div>
</template>
<script>
export default{
  name: 'IndexMine'
}
</script>
<style lang='stylus' scoped>
.mine
  background: #ddd
  .header
    display: block
    height: 10vw
    line-height: 10vw
    background: #eee
    text-align: center
    font-size: .5rem
    .header-ico
      position: absolute
      left: 1vw
      font-size: 30px
  .link
    display: block
    font-size: 40px
    margin:20px
    padding: 20px
    width: 300px
    text-align: center
    border:1px solid #333
</style>
