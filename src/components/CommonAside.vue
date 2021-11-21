<template>
  <el-menu default-active="1-4-1" 
    class="el-menu-vertical-demo" 
    :collapse="isCollapse"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <h3 v-show="!isCollapse">员工管理系统</h3>
    <h3 v-show="isCollapse"></h3>
    <el-menu-item 
      :index="item.path" 
      v-for="item in noChildren" 
      :key="item.path"
      @click="clickMenu(item)"
    >
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>
    <el-submenu 
      :index="item.label" 
      v-for="item in hasChildren" 
      :key="item.path" 
    >
      <template slot="title">
        <i class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item 
          :index="subItem.path"
          v-for="(subItem, subIndex) in item.children"
          :key="subIndex"
        >
          <i :class="'el-icon-' + subItem.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>
<style scoped>
  .el-menu {
    height: 100%;
    border: none;
  }
  .el-menu > h3{
    color: #ffffff;
    text-align: center;
    line-height: 48px;
  }
 .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
</style>
<script>
  export default {
    data() {
      return {
        menu: [
          {
            path: "/home",
            name: "home",
            label: "首页",
            icon: "s-home",
            url: "Home/Home",
          },
          {
            path: "/emo",
            name: "emo",
            label: "员工管理",
            icon: "video-play",
          },
          {
            path: "/user",
            name: "user",
            label: "用户管理",
            icon: "user",
          },
          {
            path: "/RelationTransform",
            name: "RelationTransform",
            label: "关系转换",
            icon: "setting",
          },
          {
            path: "/AdministratorChange",
            name: "AdministratorChange",
            label: "管理员变更",
            icon: "setting" ,
          },
          {
            label: "其他",
            icon: "location",
            children: [
              {
                path: "/page1",
                name: "page1",
                label: "页面1",
                icon: "setting",
                url: "Other/PageOne",
              },
              {
                path: "/page2",
                name: "page2",
                label: "页面2",
                icon: "setting",
                url: "Other/PageTwo",
              },
            ],
          },
        ],
      };
    },
    methods: {
      clickMenu(item) {
        this.$router.push({ name: item.name });
        this.$store.commit("selectMenu", item);
      },
    },
    computed:{
      noChildren() {
        return this.menu.filter((item) => !item.children);
      },
      hasChildren() {
        return this.menu.filter((item) => item.children);
      },
      isCollapse() {
        return this.$store.state.tab.isCollapse;
      },
    }
  }
</script>