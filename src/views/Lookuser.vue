<template>
    <div>
        <div>
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

          <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true" >
          <el-tab-pane label="基本信息" name="first" id="firstlabel">


            <el-descriptions class="margin-top" title="员工信息" :column="2" :size="size" border>
            <template slot="extra">
            <el-button @click="editopen" type="primary" size="small" icon="el-icon-edit"></el-button>
            </template>



            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                员工姓名
            </template>
            汤姆
            </el-descriptions-item>

            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                性别
            </template>
            男
            </el-descriptions-item>

            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                员工编号
            </template>
            001
            </el-descriptions-item>


            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                身份证号
            </template>
            310112200306057845
            </el-descriptions-item>

            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                手机号
            </template>
            18100000000
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-location-outline"></i>
                籍贯
            </template>
            苏州市
            </el-descriptions-item>


            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                出生日期
            </template>
            2002.3.6
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-location-outline"></i>
                户口所在地
            </template>
            浙江
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-location-outline"></i>
                是否已婚
            </template>
            是
            </el-descriptions-item>



            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                最高学历
            </template>
            研究生
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                毕业院校
            </template>
            交通大学
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-location-outline"></i>
                专业
            </template>
            软件工程
            </el-descriptions-item>




            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-tickets"></i>
                任职部门
            </template>
            <el-tag size="small">开发部</el-tag>
            </el-descriptions-item>

            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-office-building"></i>
                担任职务
            </template>
            架构师
            </el-descriptions-item>

            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-office-building"></i>
                入职时间
            </template>
            2020.1.3
            </el-descriptions-item>

            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-office-building"></i>
                备注
            </template>
            无
            </el-descriptions-item>

            </el-descriptions>



          </el-tab-pane>


          <el-tab-pane label="员工管理" name="second">暂无数据


          </el-tab-pane>
          


          </el-tabs>

        
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        activeName: 'first',
        dialogImageUrl: '',
        dialogVisible: false,
        imageUrl: '',
        size: ''
      };
    },
    methods: {
      editopen() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },



      handleClick(tab, event) {
        console.log(tab, event);
      },
       handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
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
      }
    }
  }
</script>
<style scoped>
.edf{
  text-align: center;
}
#firstlabel{
text-align: center;
}
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
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }
.idf{
  text-align: center;
  display: inline-block;
  height: 80px;
  width: 100%;
}
</style>
