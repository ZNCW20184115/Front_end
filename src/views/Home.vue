<template>
<div>
<el-descriptions title="公司基本资料" direction="vertical" :column="4" border>
  <el-descriptions-item label="公司名">北极企鹅</el-descriptions-item>
  <el-descriptions-item label="联系电话">88888888</el-descriptions-item>
  <el-descriptions-item label="公司地址" :span="2">XX市</el-descriptions-item>
  <el-descriptions-item label="备注">
    <el-tag size="small">企业</el-tag>
  </el-descriptions-item>
  <el-descriptions-item label="联系地址">XX省XX市XX区XXXX 0000 号</el-descriptions-item>
</el-descriptions>
</div>
</template>