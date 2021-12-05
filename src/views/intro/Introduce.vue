<template>
  <el-container>
  <el-header><intro_header></intro_header></el-header>
  <el-main><router-view /></el-main>
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
  box-sizing: border-box;
  min-height: 100%; 
  padding-bottom: 300px;  
  padding-top: 0;
}
.el-footer{
  height: 400px;
  padding-left: 0px;
  padding-right: 0px;
  margin-top: -200px;   
}
body {
    margin: 0;
  }
</style>
