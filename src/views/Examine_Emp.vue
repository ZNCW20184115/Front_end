<template>
  <div>
    <h1 align="center">考核评价</h1>
      <el-table
        :data="examine"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="name"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="department"
          label="所属部门"
          width="120">
        </el-table-column>
        <el-table-column
          prop="num"
          label="员工编号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="attitude"
          label="工作态度"
          width="80">
        </el-table-column>
        <el-table-column
          prop="ability"
          label="业务水平"
          width="80">
        </el-table-column>
        <el-table-column
          prop="jichushuiping"
          label="基础水平"
          width="80">
        </el-table-column>
        <el-table-column
          prop="zerengan"
          label="责任感"
          width="80">
        </el-table-column>
        <el-table-column
          prop="teamwork"
          label="团队合作能力"
          width="80">
        </el-table-column>
        <el-table-column
          prop="study"
          label="学习能力"
          width="80">
        </el-table-column>
        <el-table-column
          prop="zidingyi1"
          label="自定义"
          width="80">
        </el-table-column>
        <el-table-column
          fixed="right"
          label="操作"
          width="100">
          <template slot-scope="scope">
            <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
            <el-button @click="change(scope.row)" type="text" size="small">编辑</el-button>
          </template>
        </el-table-column>
      </el-table>
  </div>
</template>

<script>
  export default {
    methods: {
      change(row) {
        console.log(row);
      }
    },

    data() {
      return {
        examine: [{
          department:'人力资源部',
          name: '王小虎',
          num:'20151602',
          attitude:'100',
          ability:'95',
          jichushuiping:'88',
          zerengan:'84',
          teamwork:'77',
          study:'78',
          zidingyi1:'null',
        }, 
        {
          department:'人力资源部',
          name: '王小虎',
          num:'20151602',
          attitude:'100',
          ability:'95',
          jichushuiping:'88',
          zerengan:'84',
          teamwork:'77',
          study:'78',
          zidingyi1:'null',
        }, {
          department:'人力资源部',
          name: '王小虎',
          num:'20151602',
          attitude:'100',
          ability:'95',
          jichushuiping:'88',
          zerengan:'84',
          teamwork:'77',
          study:'78',
          zidingyi1:'null',
        }, {
          department:'人力资源部',
          name: '王小虎',
          num:'20151602',
          attitude:'100',
          ability:'95',
          jichushuiping:'88',
          zerengan:'84',
          teamwork:'77',
          study:'78',
          zidingyi1:'null',
        }, {
          department:'人力资源部',
          name: '王小虎',
          num:'20151602',
          attitude:'100',
          ability:'95',
          jichushuiping:'88',
          zerengan:'84',
          teamwork:'77',
          study:'78',
          zidingyi1:'null',
        }, {
          department:'人力资源部',
          name: '王小虎',
          num:'20151602',
          attitude:'100',
          ability:'95',
          jichushuiping:'88',
          zerengan:'84',
          teamwork:'77',
          study:'78',
          zidingyi1:'null',
        }]
      }
    }
  }
</script>