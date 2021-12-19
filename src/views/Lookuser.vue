<template>
    <div>
        <div>


          <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true" >
          <el-tab-pane label="基本信息" name="first" id="firstlabel">


            <el-descriptions class="margin-top" title="员工信息" :column="2" :size="size" border>
            <template slot="extra">
            <div>
              <!-- Form -->
            <el-button type="primary" @click="dialogFormVisible = true">编辑</el-button>

            <el-dialog style="width:1550px" :visible.sync="dialogFormVisible">
                <h2 style="text-align: center;">员工信息</h2>

            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">
                
                <el-form-item label="员工姓名" prop="name" >
                    <el-input v-model="ruleForm.name" placeholder="汤姆"></el-input>
                </el-form-item>

                <el-form-item label="性别" prop="sex" >
                    <el-select v-model="ruleForm.sex" placeholder="男">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="员工编号" prop="eid">
                    <el-input v-model="ruleForm.eid" placeholder="001"></el-input>
                </el-form-item>

                <el-form-item label="身份证号" prop="idcard">
                    <el-input v-model="ruleForm.idcard" placeholder="310112200306057845"></el-input>
                </el-form-item>

                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="ruleForm.phone" placeholder="18100000000"></el-input>
                </el-form-item>

                <el-form-item label="籍贯" prop="native">
                    <el-input v-model="ruleForm.native" placeholder="苏州市"></el-input>
                </el-form-item>

                <el-form-item label="出生日期" required >
                    <el-form-item prop="date1">
                        <el-date-picker type="date" placeholder="2002.3.6" v-model="ruleForm.date1"></el-date-picker>
                    </el-form-item>
                </el-form-item>

                <el-form-item label="户口所在地" prop="region">
                    <el-input v-model="ruleForm.region" placeholder="浙江"></el-input>
                </el-form-item>

                <el-form-item label="最高学历" prop="eb">
                    <el-input v-model="ruleForm.eb" placeholder="研究生"></el-input>
                </el-form-item>

                <el-form-item label="毕业院校" prop="school">
                    <el-input v-model="ruleForm.school" placeholder="交通大学"></el-input>
                </el-form-item>

                <el-form-item label="专业" prop="major">
                    <el-input v-model="ruleForm.major" placeholder="软件工程"></el-input>
                </el-form-item>

                <el-form-item label="任职部门" prop="apartment">
                    <el-input v-model="ruleForm.apartment" placeholder="开发部"></el-input>
                </el-form-item>

                <el-form-item label="担任职务" prop="job">
                    <el-input v-model="ruleForm.job" placeholder="架构师"></el-input>
                </el-form-item>

                <el-form-item label="入职时间" required>
                    <el-form-item prop="date2">
                        <el-date-picker type="date" placeholder="2020.1.3" v-model="ruleForm.date2"></el-date-picker>
                    </el-form-item>
                </el-form-item>

                <el-form-item label="是否已婚" prop="marry">
                    <el-switch v-model="ruleForm.marry" placeholder="是"></el-switch>
                </el-form-item>



                <el-form-item label="备注" prop="desc" style="width:580px;">
                    <el-input type="textarea" v-model="ruleForm.desc" placeholder="无"></el-input>
                </el-form-item>

                
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
            </el-dialog>
            </div>
           

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

          


          <el-tab-pane label="员工管理" name="second">
            <div id="myChart" style="height:450px;width:600px;"></div>

            <el-table
                :data="tableData"
                style="width: 100%">
                <el-table-column
                    sortable
                    prop="date"
                    label="日期"
                    width="120">
                </el-table-column>
                <el-table-column
                prop="attitude"
                label="工作态度"
                width="105">
                </el-table-column>
                <el-table-column
                prop="ability"
                label="业务水平"
                width="105">
                </el-table-column>
                <el-table-column
                prop="jichushuiping"
                label="基础水平"
                width="105">
                </el-table-column>
                <el-table-column
                prop="zerengan"
                label="责任感"
                width="105">
                </el-table-column>
                <el-table-column
                prop="teamwork"
                label="团队合作能力"
                width="105">
                </el-table-column>
                <el-table-column
                prop="study"
                label="学习能力"
                width="105">
                </el-table-column>
            </el-table>

          </el-tab-pane>



          </el-tabs>


        </div>
    </div>
</template>

<script>
import request from "../utils/request";

export default {
    data() {
      return {
          ruleForm: {
          name: '',
          sex: '',
          eid: '',
          idcard: '',
          phone: '',
          native: '',
          region: '',
          eb: '',
          school: '',
          major: '',
          apartment: '',
          job: '',
          name: '',
          name: '',
          region: '',
          date1: '',
          date2: '',
          marry: true,
          type: [],
          resource: '',
          desc: ''
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
          eb: [
            { required: true, message: '请输入最高学历', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          school: [
            { required: true, message: '请输入毕业院校', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          major: [
            { required: true, message: '请输入专业', trigger: 'blur' },
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
          desc: [
            { required: true, message: '请填写备注', trigger: 'blur' }
          ]
        },

        dialogFormVisible: false,
        formLabelWidth: '120px',




        activeName: 'first',
        dialogImageUrl: '',
        dialogVisible: false,
        size: '',
        tableData:[
            {
                date:'2021-01',
                attitude:'100',
                ability:'95',
                jichushuiping:'88',
                zerengan:'84',
                teamwork:'77',
                study:'78',
            },{
                date:'2021-02',
                attitude:'100',
                ability:'95',
                jichushuiping:'88',
                zerengan:'84',
                teamwork:'77',
                study:'78',
            },{
                date:'2021-03',
                attitude:'100',
                ability:'95',
                jichushuiping:'88',
                zerengan:'84',
                teamwork:'77',
                study:'78',
            },{
                date:'2021-04',
                attitude:'100',
                ability:'95',
                jichushuiping:'88',
                zerengan:'84',
                teamwork:'77',
                study:'78',
            },{
                date:'2021-05',
                attitude:'100',
                ability:'95',
                jichushuiping:'88',
                zerengan:'84',
                teamwork:'77',
                study:'78',
            },{
                date:'2021-06',
                attitude:'100',
                ability:'95',
                jichushuiping:'88',
                zerengan:'84',
                teamwork:'77',
                study:'78',
            },
        ]
      };
    },
    methods: {
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
      load(){
        this.loading = true
        request.get("/employee/{id}",{
          params:{
            employeeId: this.form.id
          }
        }).then(res => {
          this.loading = false
          this.tableData = res.data.records
        })
      },

      update(){
        if(this.form.id){ //更新
          request.put("/employee/update", this.form).then(res => {
            console.log(res)
          })
          if(res.code === '0'){
            this.$message({
              type:"success",
              message: "操作成功"
            })
          } else {
            this.$message({
              type:"error",
              message: res.msg
            })
          }
        } else { //新增
          request.post("/employee/update", this.form).then(res => {
            console.log(res)
          })
          if(res.code === '0'){
            this.$message({
              type:"success",
              message: "操作成功"
            })
          } else {
            this.$message({
              type:"error",
              message: res.msg
            })
          }
        }


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
      draw() {
            //初始化echarts实例
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            //绘制图表
            var option = {
                title: {
                    text: '员工历史考核数据',
                    x:'center',
                    y:'top'
                },
                grid:{//同radar里的center[]
                    position:"center"
                },
                tooltip:{
                    confine:true,
                    enterable:true //鼠标是否可以移动到tooltip区域内
                },
                //多个线条时，使用时name:'图一'区分
                // legend: {
                //     // data: ['图一', '图二']
                // },
                radar: {
                        //center: ['50%', '40%'],//调位置
                        radius: '50%',//调大小
                        startAngle: 90,
                        splitNumber: 5,//雷达图圈数设置
                        //雷达图形状圆形
                        // shape:'circle',
                        name: {
                            formatter: '{value}',
                            textStyle: {
                                color: '#36648B',
                                fontWeight: 'bold'
                            }
                        },
                        //雷达图的指示器，指定雷达图的多个维度
                        indicator: [{
                                text: '工作态度',
                                max: 100
                            },
                            {
                                text: '业务水平',
                                max: 100
                            },
                            {
                                text: '基础水平',
                                max: 100
                            },
                            {
                                text: '责任感',
                                max: 100
                            },
                            {
                                text: '团队合作能力',
                                max: 100
                            },
                            {
                                text: '学习能力',
                                max: 100
                            }
                        ],

                        splitArea: {
                            show:true,
                            areaStyle: {
                                color: ['#CCCCCC',//图表背景颜色
                                ]
                            }
                        },
                        splitLine: {
                            show:true,
                            lineStyle: {
                                width:1,
                                color: '#666666	'//网格颜色
                            }
                        },
                        //雷达图中间射线的颜色
                        axisLine: {
                            show:true,
                            lineStyle: {
                                color: '#666666	'
                            }
                        },

                    },

                series: [{
                        name: '详细信息',
                        type: 'radar',
                        symbol: 'circle',//拐点样式
                        symbolSize:6,//拐点大小\
                        areaStyle:{  //拐点颜色
                            normal:{
                                width:1,
                                opacity:0.3,
                                color:'#36648B',
                            }
                        },
                        data: [{
                            //设置各个指标的值
                                value: [67, 76,67, 88, 87],
    //									name: '图一',
                                //让数值在拐点处显示
                                label:{
                                    show:true,
                                    formatter:function(params){
                                        return params.value
                                    }
                                },
                                //设置区域边框和区域的颜色
                                itemStyle:{
                                    normal:{
                                       // color:'rgba(255, 255, 0, 1)',
                                        color:'#36648B',
                                        lineStyle:{
                                            color:'rgba(255, 255, 0, 1)'
                                        }
                                    }
                                }
                        },
                        ]
                },
                ]
            }
            //防止越界，重绘echarts（例如屏幕缩小，图标随屏幕适应）
            window.onresize = myChart.resize;
            myChart.setOption(option);; //设置option
        }

    },
    mounted() {
        this.draw()
    },
  }
</script>
<style scoped>
.el-form{
    margin-top: 38px;

}
.el-form-item{
    display: inline-block;
}
.dialog-footer{
    text-align: center;
}
#myChart{
    display: flex;
    /* align-items: center; */
    /* justify-content: center;*/
    margin-top: 20px;;
}
</style>
