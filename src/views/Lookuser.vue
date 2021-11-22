<template>
    <div>
        <div>
          <div class="demo-type">

          <div class="idf">
          <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          头像
          </div>

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

        <el-descriptions class="margin-top" title="用户信息" :column="3" :size="size" border>
            <template slot="extra">
            <el-button type="primary" size="small">操作</el-button>
            </template>



            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                用户名
            </template>
            kooriookami
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
                居住地
            </template>
            苏州市
            </el-descriptions-item>


            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                abc
            </template>
            abc
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                abc
            </template>
            abc
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-location-outline"></i>
                abc
            </template>
            abc
            </el-descriptions-item>



            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                abc
            </template>
            abc
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-mobile-phone"></i>
                abc
            </template>
            abc
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-location-outline"></i>
                abc
            </template>
            abc
            </el-descriptions-item>




            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-tickets"></i>
                备注
            </template>
            <el-tag size="small">学校</el-tag>
            </el-descriptions-item>
            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-office-building"></i>
                联系地址
            </template>
            xx省xx市xx区xx xxxx 号
            </el-descriptions-item>
        </el-descriptions>
        </div>
    </div>
</template>

<script>
export default {
    data() {
      return {
        dialogImageUrl: '',
        dialogVisible: false,
        imageUrl: '',
        size: ''
      };
    },
    methods: {
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
  display: inline-block;
  height: 80px;
  width: 100%;
}
</style>
