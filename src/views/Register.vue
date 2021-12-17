<template>
  <div id="reg1">
    <div style="display: flex; justify-content: center;">
      <el-card style="width: 400px;  margin-top: 200px">
        <h2>注册</h2>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户名">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button @click="onClick">取消</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import request from "../utils/request";

export default {
  name: "Register",
  components: {},
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    onSubmit() {
      request.post("/user", this.form).then(res => {
        console.log(res)
      })
      alert("创建成功");
      this.$router.push("/")
    },
    onClick() {
      this.$router.push("/");
    },
  },
};
</script>
<style scoped>
#reg1 {
  width: 100%;
  height: 100%;
  background-image: url("../assets/images/bg_login.jpg");
  background-size:100% 100%;
  position: fixed;
  top: 0;
  left: 0;
}
.el-form-item {
  margin-bottom: 7px;
}
</style>
