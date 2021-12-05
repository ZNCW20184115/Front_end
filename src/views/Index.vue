<template>
  <el-container style="height: 100%">
    <el-aside width="auto"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <el-main><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '../components/CommonAside.vue'
import CommonHeader from '../components/CommonHeader.vue'
export default {
  name: 'Index',
  components: { CommonAside,CommonHeader },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.common-header{
  height: 100px;
}
.el-header{
  background: #333;
}
.el-main{
  padding-top: 0;
}
</style>
