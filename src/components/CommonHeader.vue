<template>
  <header>


<div id="shouye">
     <div class="l-content" >
      <el-button plain icon="el-icon-menu" size="mini" @click="handleMenu"></el-button>
      <el-breadcrumb >
        <el-breadcrumb-item :to="{ path: '/Home' }" id="breadcrumb">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="current.path" v-if="current">
          {{current.label}}
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>
</div>     

<div id="kong"></div>


      <router-link  to="/Inform">
      <el-badge :value="1" class="item" type="primary">
        <el-button size="small">消息</el-button>
        </el-badge>
        </router-link>



      <router-link  to="/Inform">
       <el-button size="small">系统设置</el-button> 
      </router-link>
     



      <el-dropdown trigger="click" size="mini" >

        <span class="el-dropdown-link" id="toux">
          <img :src="userImg" class="user">
        </span>

           <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="logout">退出</el-dropdown-item>
           </el-dropdown-menu>

      </el-dropdown>





        






  </header>
</template>

<style scoped>
header{
  display:flex;
  justify-content: space-between;
  height: 40px;
  align-items: center;
  padding-top: 10px;
}

#kong{
  display: inline-block;
  width: 650px;
}
#shouye{
  display: inline-block;
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
      margin-right: 0px;
    }
  div img.user {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
  #breadcrumb {
    color: rgb(255, 255, 255);
  }
  .item {
  margin-top: 1px;
  margin-right: 1px;
}
</style>


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

  


