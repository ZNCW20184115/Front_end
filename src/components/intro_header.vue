<template>
 <el-menu
  :default-active="activeIndex2"
  class="el-menu-demo"
  mode="horizontal"
  @select="handleSelect"
  background-color="#7B7B7B"
  text-color="#fff"
  active-text-color="#ffd04b">
   <el-button id="login" size="mini" round @click="login">登录</el-button>
  <el-menu-item>
    <img src="../assets/images/intro_logo.jpeg" height="60px" width="auto" alt="">
  </el-menu-item>
  <el-menu-item 
      :index="item.path" 
      v-for="item in noChildren" 
      :key="item.path"
      @click="clickMenu(item)"
    >
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
</el-menu>
</template>
<style scoped>
  .el-menu  {
    height: 100%;
    border: none;
  }
  .el-menu > h3{
    color: #ffffff;
    text-align: center;
    line-height: 48px;
  }
  #login{
      position: absolute;
      right: 10%;
      top: 30%;
  }
</style>
<script>
  export default {
    data() {
      return {
        menu: [
          {
            path: "/",
            name: "intro_main",
            label: "首页",
            url: "/intro_main",
          },
          {
            path: "/intro_buy",
            name: "intro_buy",
            label: "购买服务",
          },
          {
            path: "/intro_about",
            name: "intro_about",
            label: "关于我们",
          },
        ],
      }
    },
    methods: {
      clickMenu(item) {
        this.$router.push({ name: item.name });
        this.$store.commit("selectMenu", item);
      },
      login () {
                this.$router.push({name:'Login'})
            },
    },
    computed:{
      noChildren() {
        return this.menu.filter((item) => !item.children);
      }
    }
  }
</script>