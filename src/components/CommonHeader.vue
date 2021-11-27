<template>
  <header>


    <div class="l-content">
      <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
      <el-breadcrumb >
        <el-breadcrumb-item :to="{ path: '/Home' }" id="breadcrumb">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{current.label}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>


    <!-- <div class="l-information">
      <el-button type="h-button" @click.native="c-inf">消息</el-button>
    </div> -->
         <el-badge :value="12" class="item">
          <el-button size="small">消息</el-button>
         </el-badge>
    

    <div class="l-setting">
       <el-button type="h-button" @click.native="c-set">系统设置</el-button> 
    </div>

    
    <div class="r-content">
      <el-dropdown trigger="click" size="mini">
        <span class="el-dropdown-link">
          <img :src="userImg" class="user">
        </span>
           <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
           </el-dropdown-menu>
      </el-dropdown>


    </div>
  </header>
</template>



<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      userImg: require("../assets/images/user.png"),
    };
  },
  methods: {
    handleMenu() {
      this.$store.commit("collapseMenu");
    },
    logout: function () {
				var _this = this;
				this.$confirm('确认退出吗?', '提示', {
					//type: 'warning'
				}).then(() => {
					_this.$router.push({ name: "Login" });
				}).catch(() => {
				});
			},
    
  },
  computed: {
    ...mapState({
      current: (state) => state.tab.currentMenu,
    }),
  },
};
</script>

  

<style scoped>
  header {
    display: flex;
    height: 100%;
    align-items:center;
    justify-content: space-between;
  }
  .l-content {
    display: flex;
    align-items: center;
  }
  .l-information {
    color: #fff;
    display: flex;
    align-items:center;
  }
  .l-setting {
    color: #fff;
    display: flex;
    align-items: center;
  }
  .el-button {
      margin-right: 20px;
    }
  div img.user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  #breadcrumb {
    color: rgb(255, 255, 255);
  }
</style>

<style>
      .item {
      margin-right: 20px;}
  </style>