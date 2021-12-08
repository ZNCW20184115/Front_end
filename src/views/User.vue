<template>
    <div id="biguser">
            <el-row :gutter="20" id="el-row1">
            <el-col :span="16" id="el-col1"><div class="grid-content1">
              
              <el-descriptions class="margin-top" title="基本资料" :column="4" direction="vertical">
              <el-descriptions-item label="用户名">kooriookami</el-descriptions-item>
              <el-descriptions-item label="手机号">18100000000</el-descriptions-item>
              <el-descriptions-item label="居住地" :span="2">苏州市</el-descriptions-item>
              <el-descriptions-item label="备注">
                <el-tag size="small">学校</el-tag>
              </el-descriptions-item>
              <el-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
              </el-descriptions>
            
            
            </div></el-col>
            <el-col :span="8" id="el-col1"><div class="grid-content1">


              <el-descriptions class="margin-top" title="我的xx" :column="4" direction="vertical">
              <el-descriptions-item label=""></el-descriptions-item>
              <el-descriptions-item label=""></el-descriptions-item>
              </el-descriptions>


            </div></el-col>
            </el-row>

            <el-row :gutter="20" id="el-row1">
            <el-col :span="8" id="el-col1"><div class="grid-content1 bg-purple1">
              
              <el-descriptions class="margin-top" title="我的xx" :column="4" direction="vertical">
              <el-descriptions-item label=""></el-descriptions-item>
              <el-descriptions-item label=""></el-descriptions-item>
              </el-descriptions>
            
            </div></el-col>
            <el-col :span="8" id="el-col1"><div class="grid-content1 bg-purple1">
              
              <el-descriptions class="margin-top" title="我的xx" :column="4" direction="vertical">
              <el-descriptions-item label=""></el-descriptions-item>
              <el-descriptions-item label=""></el-descriptions-item>
              </el-descriptions>
              
            
            </div></el-col>
            <el-col :span="8" id="el-col1"><div class="grid-content1 bg-purple1">
              
              <el-descriptions class="margin-top" title="我的xx" :column="4" direction="vertical">
              <el-descriptions-item label=""></el-descriptions-item>
              <el-descriptions-item label=""></el-descriptions-item>
              </el-descriptions>
            
            
            </div></el-col>
            </el-row>

            <el-row :gutter="20" id="el-row1">
            <el-col :span="12" id="el-col1"><div class="grid-content1 bg-purple1">
              
              <el-descriptions class="margin-top" title="我的xx" :column="4" direction="vertical">
              <el-descriptions-item label=""></el-descriptions-item>
              <el-descriptions-item label=""></el-descriptions-item>
              </el-descriptions>
              
            
            
            
            </div></el-col>
            <el-col :span="12" id="el-col1"><div class="grid-content1 bg-purple1">
              
              
              <el-descriptions class="margin-top" title="我的xx" :column="4" direction="vertical">
              <el-descriptions-item label=""></el-descriptions-item>
              <el-descriptions-item label=""></el-descriptions-item>
              </el-descriptions>
              
            
            
            
            </div></el-col>

            </el-row>


    </div>
</template>
<style>
  #biguser{
    margin-right: 60px;
    width: 100%;
    height: 500px;
  }
  #el-row1 {
    margin-bottom: 50px;
    margin-top: 20px;


  }
  #el-col1 {
    border-radius: 4px;
    min-height: 190px;

  }
  .grid-content1 {
    border-radius: 4px;
    height: 180px;
    background-color: #fff;

  }
  .row-bg1 {
    padding: 20px 0;
    background-color: #f9fafc;

  }

</style>