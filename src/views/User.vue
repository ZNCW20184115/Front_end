<template>
    <div id="biguser">
          
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!--hr-->
        <el-tab-pane label="HR管理" name="first">

                <el-button type="primary" class="addNew" @click="dialogFormVisible = true">添加</el-button>
                <el-dialog  style="width:1000px"  :visible.sync="dialogFormVisible" append-to-body>
                    <h2 style="text-align: center;">添加新HR</h2>

                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="add_Form_1">                    

                  <el-form-item label="HR姓名" prop="empName">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>
                  
                  <el-form-item label="员工编号" prop="empNo">
                    <el-input v-model="ruleForm.eid"></el-input>
                  </el-form-item>

                  <el-form-item label="Email" prop="Email">
                    <el-input v-model="ruleForm.job"></el-input>
                  </el-form-item>

                  <el-form-item label="账号" prop="hrAcc">
                    <el-input v-model="ruleForm.job"></el-input>
                  </el-form-item>

                  <el-form-item label="密码" prop="hrKey">
                    <el-input v-model="ruleForm.job"></el-input>
                  </el-form-item>

                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </div>
                </el-dialog>



                <el-table ref="filterTable" :data="HRtableData" style="width: 980px">
                  <el-table-column prop="empName" label="HR名称" width="180"></el-table-column>
                  <el-table-column prop="empNo" label="员工编号" width="180"></el-table-column>
                  <el-table-column prop="Email" label="Email" width="180"></el-table-column>
                  <el-table-column label="账号" prop="hrAcc"  width="180"></el-table-column>
                  <el-table-column label="密码" prop="hrKey"  width="180"></el-table-column>
                  <el-table-column
                    label="操作"
                    width="80">
                    <template slot-scope="scope">
                      <el-button
                        @click="deleteopen(scope.$index, HRtableData)"
                        type="danger"
                        size="small">
                        删除
                      </el-button>
                    </template>
                  </el-table-column>
            </el-table>
  
             
        </el-tab-pane>
        <!--主管-->
        <el-tab-pane label="员工主管管理" name="second">
   
            <el-button type="primary" class="addNew" @click="dialogFormVisible = true">添加</el-button>
                <el-dialog style="width:1000px" :visible.sync="dialogFormVisible">
                    <h2 style="text-align: center;">添加新主管</h2>

                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="add_Form_2">                    

                   <el-form-item label="主管姓名" prop="empName">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>

                  <el-form-item label="员工编号" prop="empNo">
                    <el-input v-model="ruleForm.eid"></el-input>
                  </el-form-item>

                  <el-form-item label="任职部门" prop="apartment">
                    <el-input v-model="ruleForm.apartment"></el-input>
                  </el-form-item>

                  <el-form-item label="Email" prop="Email">
                    <el-input v-model="ruleForm.job"></el-input>
                  </el-form-item>

                   <el-form-item label="账号" prop="manAcc">
                    <el-input v-model="ruleForm.job"></el-input>
                  </el-form-item>

                  <el-form-item label="密码" prop="manKey">
                    <el-input v-model="ruleForm.job"></el-input>
                  </el-form-item>

                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                  <el-button @click="resetForm('ruleForm')">重置</el-button>
                </div>
                </el-dialog>

            <el-table ref="filterTable" :data="ZGtableData" style="width: 1250px">
              <el-table-column sortable prop="ZGdepartment" label="部门名称" width="135"></el-table-column>
              <el-table-column prop="empName" label="主管名称" width="135"></el-table-column>
              <el-table-column prop="empNo" label="员工编号" width="135"></el-table-column>
              <el-table-column prop="Email" label="Email" width="200"></el-table-column>
              <el-table-column label="账号" prop="manAcc" width="150"></el-table-column>
              <el-table-column label="密码" prop="manKey" width="150"></el-table-column>
              <el-table-column prop="tag" label="状态" width="100"
              :filters="[{ text: '管理中', value: '管理中' }, 
              { text: '仅查看', value: '仅查看' }]"
              :filter-method="filterTag" filter-placement="bottom-end">
                <template slot-scope="scope"> 
                  <el-tag :type="scope.row.tag === '管理中' ? 'primary' : 'success'" disable-transitions>
                    {{scope.row.tag}}
                  </el-tag>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                width="250">
                <template slot-scope="scope">
                  <el-button size="mini" @click="toAdministrate(scope.$index, scope.row)" type="primary">使管理</el-button>
                  <el-button size="mini" @click="toRead(scope.$index, scope.row)" type="success">使查看</el-button>
                  <el-button type="danger" @click="deleteopen(scope.$index, ZGtableData)" size="mini">删除</el-button>
                   <!-- @click.native.prevent="deleteRow(scope.$index, ZGtableData)" -->
                </template>
              </el-table-column>
            </el-table>

          
        </el-tab-pane>
      </el-tabs>


    </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        HRtableData:[{
          empName:'爱德华',
          Email:'2928819291@qq.com',
          empNo:'2020202',
          hrAcc:'123414',
          hrKey:'1828288383'
        },{
          empName:'爱丽丝',
          Email:'2928819291@qq.com',
          empNo:'20211102',
          hrAcc:'123414',
          hrKey:'1828288383'
        },{
          empName:'贝拉',
          Email:'2928819291@qq.com',
          empNo:'3838738',
          hrAcc:'123414',
          hrKey:'1828288383'
        },{
          empName:'雅克布',
          Email:'2928819291@qq.com',
          empNo:'202027345',
          hrAcc:'123414',
          hrKey:'1828288383'
        },{
          empName:'爱德华',
          Email:'2928819291@qq.com',
          empNo:'2020202',
          hrAcc:'123414',
          hrKey:'1828288383'
        },{
          empName:'爱丽丝',
          Email:'2928819291@qq.com',
          empNo:'20211102',
          hrAcc:'123414',
          hrKey:'1828288383'
        },{
          empName:'贝拉',
          Email:'2928819291@qq.com',
          empNo:'3838738',
          hrAcc:'123414',
          hrKey:'1828288383'
        },{
          empName:'雅克布',
          Email:'2928819291@qq.com',
          empNo:'202027345',
          hrAcc:'123414',
          hrKey:'1828288383'
        }],
        ZGtableData:[{
          ZGdepartment:'财务部',
          empName:'Jacob',
          empNo:'12321414',
          Email:'2928819291@qq.com',
          tag:'管理中',
          manAcc:'123414',
          manKey:'1828288383'
        },{
          ZGdepartment:'技术部',
          empName:'Edward',
          empNo:'12321414',
          Email:'2928819291@qq.com',
          tag:'管理中',
          manAcc:'123414',
          manKey:'1828288383'
        },{
          ZGdepartment:'营销部',
          empName:'Jacob',
          empNo:'12321414',
          Email:'2928819291@qq.com',
          tag:'管理中',
          manAcc:'123414',
          manKey:'1828288383'
        },{
          ZGdepartment:'销售部',
          empName:'Jacob',
          empNo:'12321414',
          Email:'2928819291@qq.com',
          tag:'仅查看',
          manAcc:'123414',
          manKey:'1828288383'
        },{
          ZGdepartment:'财务部',
          empName:'Jacob',
          empNo:'12321414',
          Email:'2928819291@qq.com',
          tag:'仅查看',
          manAcc:'123414',
          manKey:'1828288383'
        },{
          ZGdepartment:'技术部',
          empName:'Edward',
          empNo:'12321414',
          Email:'2928819291@qq.com',
          tag:'管理中',
          manAcc:'123414',
          manKey:'1828288383'
        },{
          ZGdepartment:'营销部',
          empName:'Jacob',
          empNo:'12321414',
          Email:'2928819291@qq.com',
          tag:'管理中',
          manAcc:'123414',
          manKey:'1828288383'
        },{
          ZGdepartment:'销售部',
          empName:'Jacob',
          empNo:'12321414',
          Email:'2928819291@qq.com',
          tag:'管理中',
          manAcc:'123414',
          manKey:'1828288383'
        }
        ],

      dialogFormVisible: false,
      formLabelWidth: '120px',
        imageUrl: '',
        ruleForm: {
          name: '',
          sex: '',
          eid: '',
          apartment: '',
          job: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入员工姓名' },
          ],
          eid:[
             { required: true, message: '请输入员工编号' },
          ],
          apartment:[
            { required: true, message: '请输入任职部门' },
          ],
          job:[
            { required: true, message: '请输入担任职务' },
          ]
         
        }
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
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
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      },
      deleteopen(index, rows) {
        this.$confirm('此操作将永久删除该员工信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
          });
          rows.splice(index, 1);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },
      toAdministrate(tab,event) {
        event.tag="管理中";
      },
      toRead(tab,event) {
        event.tag="仅查看";
      },
      resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      }


    }
  }
</script>



<style>
  #biguser{
    margin-right: 60px;
    width: 100%;
    height: 500px;
  }
  .el-col1 h3{
    margin-bottom:40px;
  }
  
  .el-col1{
    padding-top: 20px;
    padding-left:10px;
    padding-right: 50px;
    border:2px solid #C0C4CC;
    background-color:#DCDFE6;
    padding-bottom:20px;
    margin-top: 70px;
    margin-bottom:40px;
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

  .addNew{
    margin-bottom: 20px;
  }
  
  .add_Form_1{
    height:22em;
  }
  .add_Form_2{
    height:25em;
  }

  .el-form{
      margin-top: 38px;
  }
  .el-form-item{
      display: inline-block;
  }
 
  .el-dialog{
    /* position:absolute; */
    top:100px;
    overflow:hidden;
    left:250px;
    margin:0 !important;
    display:flex;
    flex-direction:column;
  } 

  .dialog-footer{
      text-align: center;
  }

  div::-webkit-scrollbar {
    width: 0;
  }
</style>