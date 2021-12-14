<template>
<div>
<!--
<el-form id="bigform" ref="form" :model="form" label-width="85px">
  <el-form-item style="width:200px;" label="员工姓名"  >
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="性别" style="width:180px;">
    <el-select v-model="form.region" placeholder="请选择性别">
      <el-option label="男" value="男"></el-option>
      <el-option label="女" value="女"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="员工编号" style="width:280px;">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="身份证号" style="width:320px;">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="手机号" style="width:320px;">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="籍贯" style="width:180px;">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="出生日期" style="width:320px;">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
  </el-form-item>

  <el-form-item label="户口所在地" style="width:320px;">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="是否已婚">
    <el-switch v-model="form.delivery"></el-switch>
  </el-form-item>

  <el-form-item label="最高学历" style="width:280px;">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="毕业院校" style="width:380px;">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="专业" style="width:280px;">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="任职部门" style="width:280px;">
    <el-input v-model="form.name"></el-input>
  </el-form-item>

  <el-form-item label="担任职务" style="width:280px;">
    <el-input v-model="form.name"></el-input>
  </el-form-item>



  <el-form-item label="入职时间">
      <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
  </el-form-item>


  

  <el-form-item label="备注" style="width:580px;" >
    <el-input type="textarea" v-model="form.desc"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button>取消</el-button>
  </el-form-item>
</el-form>    
-->
<h1 align="center">录入员工信息</h1>
<div class="demo-type">

          <div class="idf">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          头像
          </div>


          <div class="edf">
          <el-upload
              action="https://jsonplaceholder.typicode.com/posts/"
              list-type="picture-card"
              :on-preview="handlePictureCardPreview"
              :on-remove="handleRemove">
              <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="dialogVisible">
              <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
          </div>




          </div>





<el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="员工姓名" prop="name">
    <el-input v-model="ruleForm.name"></el-input>
  </el-form-item>

  <el-form-item label="性别" prop="sex" style="width:300px;">
    <el-select v-model="ruleForm.sex" placeholder="请选择性别">
      <el-option label="男" value="男"></el-option>
      <el-option label="女" value="女"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="员工编号" prop="eid">
    <el-input v-model="ruleForm.eid"></el-input>
  </el-form-item>

  <el-form-item label="身份证号" prop="idcard">
    <el-input v-model="ruleForm.idcard"></el-input>
  </el-form-item>

  <el-form-item label="手机号" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>

  <el-form-item label="籍贯" prop="native">
    <el-input v-model="ruleForm.native"></el-input>
  </el-form-item>

  <el-form-item label="出生日期" required style="width:300px;">
      <el-form-item prop="date1">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
      </el-form-item>
  </el-form-item>

  <el-form-item label="户口所在地" prop="region">
    <el-input v-model="ruleForm.region"></el-input>
  </el-form-item>

  <el-form-item label="最高学历" prop="eb">
    <el-input v-model="ruleForm.eb"></el-input>
  </el-form-item>

  <el-form-item label="毕业院校" prop="school">
    <el-input v-model="ruleForm.school"></el-input>
  </el-form-item>

  <el-form-item label="专业" prop="major">
    <el-input v-model="ruleForm.major"></el-input>
  </el-form-item>

  <el-form-item label="任职部门" prop="apartment">
    <el-input v-model="ruleForm.apartment"></el-input>
  </el-form-item>

  <el-form-item label="担任职务" prop="job">
    <el-input v-model="ruleForm.job"></el-input>
  </el-form-item>

  <el-form-item label="入职时间" required>
      <el-form-item prop="date2">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
      </el-form-item>
  </el-form-item>

  <el-form-item label="是否已婚" prop="marry">
    <el-switch v-model="ruleForm.marry"></el-switch>
  </el-form-item>



  <el-form-item label="备注" prop="desc" style="width:580px;">
    <el-input type="textarea" v-model="ruleForm.desc"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>


</div>
</template>


<script>
  export default {
    data() {
      return {
        imageUrl: '',
        ruleForm: {
          name: '',
          sex: '',
          eid: '',
          idcard: '',
          phone: '',
          native: '',
          region: '',
          eb: '',
          school: '',
          major: '',
          apartment: '',
          job: '',
          name: '',
          name: '',
          region: '',
          date1: '',
          date2: '',
          marry: false,
          type: [],
          resource: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入员工姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          eid: [
            { required: true, message: '请输入员工编号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个数字', trigger: 'blur' }
          ],
          idcard: [
            { required: true, message: '请输入身份证号', trigger: 'blur' },
            { min: 16, max: 18, message: '长度在 16 到 18 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 8, max: 11, message: '长度在 8 到 11 个数字', trigger: 'blur' }
          ],
          native: [
            { required: true, message: '请输入籍贯', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请输入户口所在地', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          eb: [
            { required: true, message: '请输入最高学历', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          school: [
            { required: true, message: '请输入毕业院校', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          major: [
            { required: true, message: '请输入专业', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          apartment: [
            { required: true, message: '请输入任职部门', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          job: [
            { required: true, message: '请输入担任职务', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择户口所在地', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          desc: [
            { required: true, message: '请填写备注', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 98px;
    height: 98px;
    line-height: 98px;
    text-align: center;
  }
  .avatar {
    width: 98px;
    height: 98px;
    display: block;
  }
.idf{
  text-align: center;
  display: inline-block;
  height: 80px;
  width: 100%;
}
.edf{
  text-align: center;
}
#bigform{
    margin-top: 10px;
}
.el-form{
    margin-top: 38px;
    margin-left: 100px;
}
.el-form-item{
    display: inline-block;
}
</style>