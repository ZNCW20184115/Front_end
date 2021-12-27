<template>
<div>
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
  <el-form-item label="员工姓名" prop="empName">
    <el-input v-model="ruleForm.empName"></el-input>
  </el-form-item>

  <el-form-item label="性别" prop="empSex" style="width:300px;">
    <el-select v-model="ruleForm.empSex" placeholder="请选择性别">
      <el-option label="男" value="男"></el-option>
      <el-option label="女" value="女"></el-option>
    </el-select>
  </el-form-item>

  <el-form-item label="员工编号" prop="empNo">
    <el-input v-model="ruleForm.empNo"></el-input>
  </el-form-item>

  <el-form-item label="身份证号" prop="empId">
    <el-input v-model="ruleForm.empId"></el-input>
  </el-form-item>

  <el-form-item label="手机号" prop="phone">
    <el-input v-model="ruleForm.phone"></el-input>
  </el-form-item>

  <el-form-item label="籍贯" prop="empNp">
    <el-input v-model="ruleForm.empNp"></el-input>
  </el-form-item>

  <el-form-item label="出生日期" required style="width:300px;">
      <el-form-item prop="empBirth">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.empBirth" style="width: 100%;"></el-date-picker>
      </el-form-item>
  </el-form-item>

  <el-form-item label="户口所在地" prop="region">
    <el-input v-model="ruleForm.region"></el-input>
  </el-form-item>

  <el-form-item label="最高学历" prop="empEdu">
    <el-input v-model="ruleForm.empEdu"></el-input>
  </el-form-item>

  <el-form-item label="毕业院校" prop="empSch">
    <el-input v-model="ruleForm.empSch"></el-input>
  </el-form-item>

  <el-form-item label="专业" prop="empPro">
    <el-input v-model="ruleForm.empPro"></el-input>
  </el-form-item>

  <el-form-item label="任职部门" prop="empDep">
    <el-input v-model="ruleForm.empDep"></el-input>
  </el-form-item>

  <el-form-item label="担任职务" prop="empJob">
    <el-input v-model="ruleForm.empJob"></el-input>
  </el-form-item>

  <el-form-item label="入职时间" required>
      <el-form-item prop="empEntry">
        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.empEntry" style="width: 100%;"></el-date-picker>
      </el-form-item>
  </el-form-item>

  <el-form-item label="是否已婚" prop="empMarry">
    <el-switch v-model="ruleForm.empMarry"></el-switch>
  </el-form-item>



  <el-form-item label="备注" prop="empRemark" style="width:580px;">
    <el-input type="textarea" v-model="ruleForm.empRemark"></el-input>
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
          empName: '',
          empSex: '',
          empNo: '',
          empId: '',
          phone: '',
          empNp: '',
          region: '',
          empEdu: '',
          empSch: '',
          empPro: '',
          empDep: '',
          empJob: '',
          empName: '',
          empName: '',
          region: '',
          empBirth: '',
          empEntry: '',
          empMarry: false,
          type: [],
          resource: '',
          empRemark: ''
        },
        rules: {
          empName: [
            { required: true, message: '请输入员工姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          empSex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          empNo: [
            { required: true, message: '请输入员工编号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个数字', trigger: 'blur' }
          ],
          empId: [
            { required: true, message: '请输入身份证号', trigger: 'blur' },
            { min: 16, max: 18, message: '长度在 16 到 18 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 8, max: 11, message: '长度在 8 到 11 个数字', trigger: 'blur' }
          ],
          empNp: [
            { required: true, message: '请输入籍贯', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请输入户口所在地', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          empEdu: [
            { required: true, message: '请输入最高学历', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          empSch: [
            { required: true, message: '请输入毕业院校', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          empPro: [
            { required: true, message: '请输入专业', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          empDep: [
            { required: true, message: '请输入任职部门', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          empJob: [
            { required: true, message: '请输入担任职务', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择户口所在地', trigger: 'change' }
          ],
          empBirth: [
            { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
          ],
          empEntry: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          empRemark: [
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