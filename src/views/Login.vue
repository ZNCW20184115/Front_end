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
          <el-form-item prop="username" label="用户名">
            <el-input
              v-model="form.username"
              autocomplete="off"
              placeholder="请输入用户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input
              v-model="form.password"
              autocomplete="off"
              placeholder="请输入密码"
              show-password
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
          <el-form-item prop="username" label="用户名">
            <el-input
              v-model="form.username"
              autocomplete="off"
              placeholder="请输入用户名"
            >
            </el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码">
            <el-input
              v-model="form.password"
              autocomplete="off"
              placeholder="请输入密码"
              show-password
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

export default {
  name: "Login",
  components: {},
  data() {
    return {
       activeName: 'first',

      form: {
        username: "",
        password: "",
      },
      formRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "change" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "change" },
        ],
      },
    };
  },
  methods: {
        handleClick(tab, event) {
        console.log(tab, event);
      },
    // onSubmit() {
    //   const data={username : "123", password : "123"};
    //   if(this.form.password===data.password&&this.form.username===data.username){
    //     this.$router.push("/index");
    //   }else {
    //     // return this.$message.error('用户名或密码错误!');
    //   }
    // },
    login() {
      this.$refs.loginFormRef.validate(async (valid) => {
        if (valid) {
          const data = { 
            username: "123", 
            password: "123" 
          };
          if (
            this.form.password === data.password &&
            this.form.username === data.username
          ) {
             this.$router.push({ name: "home" });
          } else {
            return this.$message.error("用户名或密码错误!");
          }
        }
      });
    },
    register() {
      this.$router.push({ name: "Register" });
    },
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