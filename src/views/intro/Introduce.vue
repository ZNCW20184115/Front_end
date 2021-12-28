<template>
  <el-container>
  <el-header><intro_header></intro_header></el-header>
  <el-main><router-view></router-view></el-main>
  <el-footer><intro_footer></intro_footer></el-footer>
</el-container>
</template>

<script>
import intro_header from '../../components/intro_header.vue'
import intro_footer from '../../components/intro_footer.vue'
export default {
  name: 'Introduce',
  components: { intro_header,intro_footer },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.common-header{
  height: 100px;
}
.el-header{
  width: 100%;
  padding-left: 0px;
  padding-right: 0px;
}
.el-main{
  padding: 0%;
}
.el-footer{
  padding-left: 0px;
  padding-right: 0px; 
}
.el-container {
  min-height: 70vh;
}
body {
    margin: 0;
  }
</style>
