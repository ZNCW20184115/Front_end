<template>
  <div>
    <h1 align="center">考核评价</h1>
      <el-table
        :data="examine"
        border
        style="width: 100%">
        <el-table-column
          fixed
          prop="empName"
          label="姓名"
          width="120">
        </el-table-column>
        <el-table-column
          prop="department"
          label="所属部门"
          width="120">
        </el-table-column>
        <el-table-column
          prop="empNo"
          label="员工编号"
          width="150">
        </el-table-column>
        <el-table-column
          prop="empAtt"
          label="工作态度"
          width="80">
        </el-table-column>
        <el-table-column
          prop="empLvl"
          label="业务水平"
          width="80">
        </el-table-column>
        <el-table-column
          prop="empAbl"
          label="基础水平"
          width="80">
        </el-table-column>
        <el-table-column
          prop="empRes"
          label="责任感"
          width="80">
        </el-table-column>
        <el-table-column
          prop="empTeam"
          label="团队合作能力"
          width="80">
        </el-table-column>
        <el-table-column
          prop="empLearn"
          label="学习能力"
          width="80">
        </el-table-column>
        <el-table-column
          prop="empEva"
          label="评价"
          width="80">
        </el-table-column>
        <el-table-column
          prop="empMan"
          label="评价人"
          width="80">
        </el-table-column>
        <el-table-column
          label="操作"
          width="100">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small"><router-link  to="/Lookuser">查看</router-link></el-button>
            <!-- <el-button @click="change(scope.row)" type="text" size="small">编辑</el-button> -->
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
          empNo:'20151602',
          empAtt:'100',
          empLvl:'95',
          empAbl:'88',
          empRes:'84',
          empTeam:'77',
          empLearn:'78',
          empEva:'不错',
          empMan:'李明'
        },{
          department:'人力资源部',
          name: '王小虎',
          empNo:'20151602',
          empAtt:'100',
          empLvl:'95',
          empAbl:'88',
          empRes:'84',
          empTeam:'77',
          empLearn:'78',
          empEva:'不错',
          empMan:'李明'
        },{
          department:'人力资源部',
          name: '王小虎',
          empNo:'20151602',
          empAtt:'100',
          empLvl:'95',
          empAbl:'88',
          empRes:'84',
          empTeam:'77',
          empLearn:'78',
          empEva:'不错',
          empMan:'李明'
        },{
          department:'人力资源部',
          name: '王小虎',
          empNo:'20151602',
          empAtt:'100',
          empLvl:'95',
          empAbl:'88',
          empRes:'84',
          empTeam:'77',
          empLearn:'78',
          empEva:'不错',
          empMan:'李明'
        },{
          department:'人力资源部',
          name: '王小虎',
          empNo:'20151602',
          empAtt:'100',
          empLvl:'95',
          empAbl:'88',
          empRes:'84',
          empTeam:'77',
          empLearn:'78',
          empEva:'不错',
          empMan:'李明'
        },{
          department:'人力资源部',
          name: '王小虎',
          empNo:'20151602',
          empAtt:'100',
          empLvl:'95',
          empAbl:'88',
          empRes:'84',
          empTeam:'77',
          empLearn:'78',
          empEva:'不错',
          empMan:'李明'
        },{
          department:'人力资源部',
          name: '王小虎',
          empNo:'20151602',
          empAtt:'100',
          empLvl:'95',
          empAbl:'88',
          empRes:'84',
          empTeam:'77',
          empLearn:'78',
          empEva:'不错',
          empMan:'李明'
        },{
          department:'人力资源部',
          name: '王小虎',
          empNo:'20151602',
          empAtt:'100',
          empLvl:'95',
          empAbl:'88',
          empRes:'84',
          empTeam:'77',
          empLearn:'78',
          empEva:'不错',
          empMan:'李明'
        },{
          department:'人力资源部',
          name: '王小虎',
          empNo:'20151602',
          empAtt:'100',
          empLvl:'95',
          empAbl:'88',
          empRes:'84',
          empTeam:'77',
          empLearn:'78',
          empEva:'不错',
          empMan:'李明'
        },{
          department:'人力资源部',
          name: '王小虎',
          empNo:'20151602',
          empAtt:'100',
          empLvl:'95',
          empAbl:'88',
          empRes:'84',
          empTeam:'77',
          empLearn:'78',
          empEva:'不错',
          empMan:'李明'
        },{
          department:'人力资源部',
          name: '王小虎',
          empNo:'20151602',
          empAtt:'100',
          empLvl:'95',
          empAbl:'88',
          empRes:'84',
          empTeam:'77',
          empLearn:'78',
          empEva:'不错',
          empMan:'李明'
        },{
          department:'人力资源部',
          name: '王小虎',
          empNo:'20151602',
          empAtt:'100',
          empLvl:'95',
          empAbl:'88',
          empRes:'84',
          empTeam:'77',
          empLearn:'78',
          empEva:'不错',
          empMan:'李明'
        } 
        ]
      }
    }
  }
</script>