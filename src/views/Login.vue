<template>
  <div id="login1">
    <div style="display: flex; justify-content: center">
      <el-card style="width: 400px;  margin-top: 200px;">

        <h2>登录</h2>
        <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="HR登录" name="first">

          <el-form
          ref="loginFormRef"
          :model="form"
          :rules="formRules"
          label-width="80px"
        >
          <el-form-item prop="hrAcc" label="用户名">
            <el-input
              v-model="form.hrAcc"
              autocomplete="off"
              placeholder="请输入用户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="hrKey" label="密码">
            <el-input
              v-model="form.hrKey"
              autocomplete="off"
              placeholder="请输入密码"
              show-hrKey
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round @click="login">登录 </el-button>
            <el-button round @click="register">注册</el-button>
          </el-form-item>
        </el-form>


        </el-tab-pane>


        <el-tab-pane label="主管登录" name="second">
          <el-form
          ref="loginFormRef"
          :model="form"
          :rules="formRules"
          label-width="80px"
        >
          <el-form-item prop="manAcc" label="用户名">
            <el-input
              v-model="form.manAcc"
              autocomplete="off"
              placeholder="请输入用户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="manKey" label="密码">
            <el-input
              v-model="form.manKey"
              autocomplete="off"
              placeholder="请输入密码"
              show-manKey
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" round @click="login">登录 </el-button>
            <el-button round @click="register">注册</el-button>
          </el-form-item>
          </el-form>





        </el-tab-pane>
        </el-tabs>



      </el-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import request from "../utils/request";
import index from "../../src/api/index"

export default {
  name: "Login",
  components: {},
  data() {
    return {
       activeName: 'first',

      form: {
        hrAcc: "",
        hrKey: "",
      },
      formRules: {
        hrAcc: [
          { required: true, message: "请输入用户名", trigger: "change" },
        ],
        hrKey: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
        handleClick(tab, event) {
        console.log(tab, event);
      },
    login() {
      const data={hrAcc : "123", hrKey : "123"};
      if(this.form.hrKey===data.hrKey&&this.form.hrAcc===data.hrAcc){
        this.$router.push("/index");
      }else {
        // return this.$message.error('用户名或密码错误!');
      }
    },
    // login() {
    //   request.post("/user/login", this.form).then(res => {
    //     if(res.code === '0'){
    //       this.$message({
    //         type:"success",
    //         message: "登录成功"
    //       })
    //       this.$router.push("/Home")
    //     } else {
    //       this.$message({
    //         type:"error",
    //         message: res.msg
    //       })
    //     }
    //   })
    // },

    // login(){
    //       this.$api.loginManageAPI.login(this.form,this).then(res =>{
    //       })
    // },
    // register() {
    //   this.$router.push({ name: "Register" });
    // },
  },
};
</script>
<style scoped>
#login1 {
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/bg_login.jpg");
  background-size:100% 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.el-form-item {
  margin-bottom: 30px;
}
</style>
