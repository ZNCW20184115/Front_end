<template>
    <div>
        <div>
          

          <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true" >
          <el-tab-pane label="基本信息" name="first" id="firstlabel">


            <el-descriptions class="margin-top" title="员工信息" :column="2" :size="size" border>
            <template slot="extra">
            <router-link  to="/Addemployee"><el-button type="primary" size="small" icon="el-icon-edit"></el-button></router-link>
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
        size: ''
      };
    },
    methods: {
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
      
    }
  }
</script>
<style scoped>

#firstlabel{
text-align: center;
}

</style>
