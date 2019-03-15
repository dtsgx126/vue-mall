<template>
  <div class="detail">
    <div class="content">
      我的详情
    </div>
  </div>
</template>
<script>
import '@/assets/styles/iconfont.css'
export default{
  name: 'MineDetail'
}
</script>
<style lang='stylus' scoped>
.home
  header
    height: 10vw
    line-height: 10vw
    background: #eee
    text-align: center
    font-size: .5rem
    .header-ico
      position: absolute
      left: 1vw
      width: 30px
      height: 30px
      font-size: 30px

  .content
    font-size: .5rem
    padding: 2vw
    text-indent: 1vw
  button
    display: block
    margin:0 auto
</style>
