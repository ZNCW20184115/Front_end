<template>
<div >

  <el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">2</div></el-col>
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
  <el-col :span="8"><div class="grid-content bg-purple">

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
</el-row>


<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark" id='in'>
    

  <el-button icon="el-icon-search" circle style="width:150px;height:150px;margin-bottom:15px"></el-button>
  <el-button type="primary" icon="el-icon-edit" circle style="width:150px;height:150px;margin-bottom:15px"></el-button>
  <el-button type="success" icon="el-icon-check" circle style="width:150px;height:150px;margin-bottom:15px"></el-button>
  <el-button type="info" icon="el-icon-message" circle style="width:150px;height:150px;margin-bottom:15px"></el-button>
  <el-button type="warning" icon="el-icon-star-off" circle style="width:150px;height:150px;margin-bottom:15px"></el-button>
  <el-button type="danger" icon="el-icon-delete" circle style="width:150px;height:150px;margin-bottom:15px"></el-button>
    
    
    
    </div></el-col>
</el-row>


</div>
</template>

<style scoped>
#in{
  padding-top: 50px;
  padding-left: 50px;

}

</style>
