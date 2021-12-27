<template>
<div id="big">

  <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark"></div>  </el-col>
  </el-row>

  <el-row :gutter="20">
  <el-col :span="16"><div class="grid-content bg-purple">
          <el-descriptions title="公司基本资料" direction="vertical" :column="4" border>
        <el-descriptions-item label="公司名">北极企鹅</el-descriptions-item>
        <el-descriptions-item label="联系电话">88888888</el-descriptions-item>
        <el-descriptions-item label="公司地址" :span="2">XX市</el-descriptions-item>
        <el-descriptions-item label="备注">
          <el-tag size="small">企业</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址">XX省XX市XX区XXXX 0000 号</el-descriptions-item>
        </el-descriptions>
    </div></el-col>
  <el-col :span="8">
    <div class="block">
    <span class="demonstration" style="text-align:center;display:block"><h5>最新资讯</h5></span>
    <el-carousel trigger="click" height="150px">
      <el-carousel-item style="text-align:center" v-for="item in 4" :key="item">
        <h3 class="small">{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
    </div>
    </el-col>
</el-row>


<el-row>
  <el-col :span="24">
  
  <div class="grid-content bg-purple-dark" id='in'>
    
<div id=fastdiv><router-link  to="/Emo"><el-button id="fast" icon="el-icon-search" circle ></el-button></router-link>员工管理</div>
  <div id=fastdiv><router-link  to="/User"><el-button id="fast" type="danger" icon="el-icon-edit" circle ></el-button></router-link>HR/主管管理</div>
  <div id=fastdiv><router-link  to="/Addemployee"><el-button id="fast" type="primary" icon="el-icon-edit" circle ></el-button></router-link>录入员工信息</div>
  <div id=fastdiv><router-link  to="/Examine_Emp"><el-button id="fast" type="warning" icon="el-icon-star-off" circle ></el-button></router-link>员工考核</div>
  
  <div id=fastdiv><router-link to="/RelationTransform"><el-button id="fast" type="primary" icon="el-icon-edit" circle ></el-button></router-link>员工关系转换</div>
  <!-- <div id=fastdiv><router-link to="/AdministratorChange"><el-button id="fast" type="success" icon="el-icon-check" circle ></el-button></router-link>主管权限变更</div> -->
  <div id=fastdiv><el-button id="fast" type="primary" icon="el-icon-edit" circle ></el-button>用户信息</div>
  
  <div id=fastdiv><router-link  to="/Inform"><el-button id="fast" type="info" icon="el-icon-message" circle ></el-button></router-link>消息</div>
  <div id=fastdiv><el-button id="fast" type="danger" icon="el-icon-delete" @click.native="logout" circle ></el-button>退出登录</div>
  
  

    </div></el-col>
</el-row>


</div>
</template>

<style scoped>

.block{
  margin-top: 30px;
}
#big{
  margin-top: 15px;
}
#fastdiv{
  display: inline-block;
  width: 125px;
  height: 138px;
  text-align:center;
  margin-left:80px;
  padding-bottom: 55px;
}
#fast{
  width:125px;
  height:125px;
  margin-bottom:15px;
  
}
#in{
  background-color: rgb(255, 255, 255);
  margin-top: 10px;
  padding-top: 30px;
  padding-left: 50px;

}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-color: #d3dce6;
  }
  
</style>

<script>
import {mapState} from 'vuex'
export default {
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
  
};
</script>
