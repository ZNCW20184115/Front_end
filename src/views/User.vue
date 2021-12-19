<template>
    <div id="biguser">
            <!-- <el-row :gutter="20" id="el-row1">
            
              <el-col :span="16" id="el-col1">  
              <div class="grid-content1">
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

            </el-row> -->

          
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <!--hr-->
        <el-tab-pane label="HR" name="first">
          <el-col :span="14" class="el-col2" >
                <h2>HR名单</h2>
                <el-table ref="filterTable" :data="HRtableData" style="width: 100%">
                  <el-table-column prop="HRname" label="HR名称" width="180"></el-table-column>
                  <el-table-column prop="eid" label="员工编号" width="180"></el-table-column>
                  <el-table-column prop="HRxianRenzhiWu" label="现任职务" width="180"></el-table-column>
                  <el-table-column
                    label="操作"
                    width="50">
                    <template slot-scope="scope">
                      <el-button
                        @click.native.prevent="deleteRow(scope.$index, HRtableData)"
                        type="text"
                        size="small">
                        删除
                      </el-button>
                    </template>
                  </el-table-column>
            </el-table>
          </el-col>

          <el-col :span="6.5" class="el-col1" >
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                  <h2 style="text-align:center;">添加新HR</h2>
                  <el-form-item label="HR姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>

                  <el-form-item label="性别" prop="sex" style="width:300px;">
                    <el-select v-model="ruleForm.sex" placeholder="请选择性别">
                      <el-option label="男" value="男"></el-option>
                      <el-option label="女" value="女"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-form-item label="员工编号" prop="eid">
                    <el-input v-model="ruleForm.eid"></el-input>
                  </el-form-item>

                  <el-form-item label="身份证号" prop="idcard">
                    <el-input v-model="ruleForm.idcard"></el-input>
                  </el-form-item>

                  <el-form-item label="手机号" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                  </el-form-item>

                  <el-form-item label="籍贯" prop="native">
                    <el-input v-model="ruleForm.native"></el-input>
                  </el-form-item>

                  <el-form-item label="出生日期" required style="width:300px;">
                      <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                      </el-form-item>
                  </el-form-item>

                  <el-form-item label="户口所在地" prop="region">
                    <el-input v-model="ruleForm.region"></el-input>
                  </el-form-item>

                  <el-form-item label="任职部门" prop="apartment">
                    <el-input v-model="ruleForm.apartment"></el-input>
                  </el-form-item>

                  <el-form-item label="担任职务" prop="job">
                    <el-input v-model="ruleForm.job"></el-input>
                  </el-form-item>

                  <el-form-item label="入职时间" required>
                      <el-form-item prop="date2">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                      </el-form-item>
                  </el-form-item>

                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>
            </el-col>
             
        </el-tab-pane>
        <!--主管-->
        <el-tab-pane label="主管" name="second">
          <el-col class="el-col2" :span="14">
            <h2>主管名单</h2>
            <el-table ref="filterTable" :data="ZGtableData" style="width: 100%">
              <el-table-column sortable prop="ZGdepartment" label="部门名称" width="180"></el-table-column>
              <el-table-column prop="ZGname" label="主管名称" width="180"></el-table-column>
              <el-table-column prop="ZGxianRenzhiWu" label="现任职务" width="180"></el-table-column>
              <el-table-column
                label="操作"
                width="50">
                <template slot-scope="scope">
                  <el-button
                    @click.native.prevent="deleteRow(scope.$index, ZGtableData)"
                    type="text"
                    size="small">
                    移除
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
          <el-col  class="el-col1" :span="6.5">
             <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                  <h2 style="text-align:center;">添加新主管</h2>
                  <el-form-item label="主管姓名" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                  </el-form-item>

                  <el-form-item label="性别" prop="sex" style="width:300px;">
                    <el-select v-model="ruleForm.sex" placeholder="请选择性别">
                      <el-option label="男" value="男"></el-option>
                      <el-option label="女" value="女"></el-option>
                    </el-select>
                  </el-form-item>

                  <el-form-item label="主管编号" prop="eid">
                    <el-input v-model="ruleForm.eid"></el-input>
                  </el-form-item>

                  <el-form-item label="身份证号" prop="idcard">
                    <el-input v-model="ruleForm.idcard"></el-input>
                  </el-form-item>

                  <el-form-item label="手机号" prop="phone">
                    <el-input v-model="ruleForm.phone"></el-input>
                  </el-form-item>

                  <el-form-item label="籍贯" prop="native">
                    <el-input v-model="ruleForm.native"></el-input>
                  </el-form-item>

                  <el-form-item label="出生日期" required style="width:300px;">
                      <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                      </el-form-item>
                  </el-form-item>

                  <el-form-item label="户口所在地" prop="region">
                    <el-input v-model="ruleForm.region"></el-input>
                  </el-form-item>

                  <el-form-item label="任职部门" prop="apartment">
                    <el-input v-model="ruleForm.apartment"></el-input>
                  </el-form-item>

                  <el-form-item label="担任职务" prop="job">
                    <el-input v-model="ruleForm.job"></el-input>
                  </el-form-item>

                  <el-form-item label="入职时间" required>
                      <el-form-item prop="date2">
                        <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 100%;"></el-date-picker>
                      </el-form-item>
                  </el-form-item>

                  <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
                    <el-button @click="resetForm('ruleForm')">重置</el-button>
                  </el-form-item>
                </el-form>     
          </el-col>   
          
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
          HRname:'爱德华',
          HRxianRenzhiWu:'部长',
          eid:'2020202',
        },{
          HRname:'爱丽丝',
          HRxianRenzhiWu:'部员',
          eid:'20211102',
        },{
          HRname:'贝拉',
          HRxianRenzhiWu:'部长',
          eid:'3838738',
        },{
          HRname:'雅克布',
          HRxianRenzhiWu:'部长',
          eid:'202027345',
        },{
          HRname:'爱德华',
          HRxianRenzhiWu:'部长',
          eid:'2020202',
        },{
          HRname:'爱丽丝',
          HRxianRenzhiWu:'部员',
          eid:'20211102',
        },{
          HRname:'贝拉',
          HRxianRenzhiWu:'部长',
          eid:'3838738',
        },{
          HRname:'雅克布',
          HRxianRenzhiWu:'部长',
          eid:'202027345',
        }],
        ZGtableData:[{
          ZGdepartment:'财务部',
          ZGname:'Jacob',
          ZGxianRenzhiWu:'部长',
        },{
          ZGdepartment:'技术部',
          ZGname:'Edward',
          ZGxianRenzhiWu:'部长',
        },{
          ZGdepartment:'营销部',
          ZGname:'Jacob',
          ZGxianRenzhiWu:'部长',
        },{
          ZGdepartment:'销售部',
          ZGname:'Jacob',
          ZGxianRenzhiWu:'部长',
        },{
          ZGdepartment:'财务部',
          ZGname:'Jacob',
          ZGxianRenzhiWu:'部长',
        },{
          ZGdepartment:'技术部',
          ZGname:'Edward',
          ZGxianRenzhiWu:'部长',
        },{
          ZGdepartment:'营销部',
          ZGname:'Jacob',
          ZGxianRenzhiWu:'部长',
        },{
          ZGdepartment:'销售部',
          ZGname:'Jacob',
          ZGxianRenzhiWu:'部长',
        }
        ],


        imageUrl: '',
        ruleForm: {
          name: '',
          sex: '',
          eid: '',
          idcard: '',
          phone: '',
          native: '',
          region: '',
          apartment: '',
          job: '',
          name: '',
          name: '',
          region: '',
          date1: '',
          date2: '',
          type: [],
          resource: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入员工姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          sex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          eid: [
            { required: true, message: '请输入员工编号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个数字', trigger: 'blur' }
          ],
          idcard: [
            { required: true, message: '请输入身份证号', trigger: 'blur' },
            { min: 16, max: 18, message: '长度在 16 到 18 个字符', trigger: 'blur' }
          ],
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 8, max: 11, message: '长度在 8 到 11 个数字', trigger: 'blur' }
          ],
          native: [
            { required: true, message: '请输入籍贯', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请输入户口所在地', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          apartment: [
            { required: true, message: '请输入任职部门', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          job: [
            { required: true, message: '请输入担任职务', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          name: [
            { required: true, message: '请输入活动名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择户口所在地', trigger: 'change' }
          ],
          date1: [
            { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
          ],
          date2: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],

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
  h2{
    text-align: center;
  }
  
  .el-col1{
    padding-top: 10px;
    padding-left:10px;
    padding-right: 50px;
    border:2px solid #C0C4CC;
    background-color:#DCDFE6;
    padding-bottom:20px;
    margin-bottom:40px;
  }
  .el-col2{
    padding-right:40px;
    padding-left:20px;
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