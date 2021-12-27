<template>
    <div>
        <div>


          <el-tabs v-model="activeName" @tab-click="handleClick" stretch="true" >
          <el-tab-pane style="text-align: center;" label="基本信息" name="first" id="firstlabel">

            <div class="demo-image__preview">
              <el-image
                style="width: 100px; height: 100px"
                :src="url"
                :preview-src-list="srcList">
              </el-image>
            </div>



            <el-descriptions style="text-align: center;" class="margin-top" title="" :column="2" :size="size" border>


            <template slot="extra">
              <el-button type="primary" @click="dialogFormVisible = true">编辑</el-button>
            <div>
              <!-- Form -->
            <el-dialog style="width:1550px" :visible.sync="dialogFormVisible">
                <h2 style="text-align: center;">员工信息</h2>


                <div class="demo-image__preview" style="display:inline-block">

                  <div class="idf">
               <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
               头像
               </div>


                <el-upload

                  class="avatar-uploader"
                  action="https://jsonplaceholder.typicode.com/posts/"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                </div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="150px" class="demo-ruleForm">

                <el-form-item label="员工姓名" prop="empName" >
                    <el-input v-model="ruleForm.empName" placeholder="汤姆"></el-input>
                </el-form-item>

                <el-form-item label="性别" prop="empSex" >
                    <el-select v-model="ruleForm.empSex" placeholder="男">
                    <el-option label="男" value="男"></el-option>
                    <el-option label="女" value="女"></el-option>
                    </el-select>
                </el-form-item>

                <el-form-item label="员工编号" prop="empNo">
                    <el-input v-model="ruleForm.empNo" placeholder="001"></el-input>
                </el-form-item>

                <el-form-item label="身份证号" prop="empId">
                    <el-input v-model="ruleForm.empId" placeholder="310112200306057845"></el-input>
                </el-form-item>

                <el-form-item label="手机号" prop="empPhone">
                    <el-input v-model="ruleForm.empPhone" placeholder="18100000000"></el-input>
                </el-form-item>

                <el-form-item label="籍贯" prop="empNp">
                    <el-input v-model="ruleForm.empNp" placeholder="苏州市"></el-input>
                </el-form-item>

                <el-form-item label="出生日期" required >
                    <el-form-item prop="empBirth">
                        <el-date-picker type="date" placeholder="2002.3.6" v-model="ruleForm.empBirth"></el-date-picker>
                    </el-form-item>
                </el-form-item>

                <el-form-item label="户口所在地" prop="region">
                    <el-input v-model="ruleForm.region" placeholder="浙江"></el-input>
                </el-form-item>

                <el-form-item label="最高学历" prop="empEdu">
                    <el-input v-model="ruleForm.empEdu" placeholder="研究生"></el-input>
                </el-form-item>

                <el-form-item label="毕业院校" prop="empSch">
                    <el-input v-model="ruleForm.empSch" placeholder="交通大学"></el-input>
                </el-form-item>

                <el-form-item label="专业" prop="empPro">
                    <el-input v-model="ruleForm.empPro" placeholder="软件工程"></el-input>
                </el-form-item>

                <el-form-item label="任职部门" prop="empDep">
                    <el-input v-model="ruleForm.empDep" placeholder="开发部"></el-input>
                </el-form-item>

                <el-form-item label="担任职务" prop="empJob">
                    <el-input v-model="ruleForm.empJob" placeholder="架构师"></el-input>
                </el-form-item>

                <el-form-item label="入职时间" required>
                    <el-form-item prop="empEntry">
                        <el-date-picker type="date" placeholder="2020.1.3" v-model="ruleForm.empEntry"></el-date-picker>
                    </el-form-item>
                </el-form-item>

                <el-form-item label="是否已婚" prop="empMarry">
                    <el-switch v-model="ruleForm.empMarry" placeholder="是"></el-switch>
                </el-form-item>



                <el-form-item label="备注" prop="empRemark" style="width:580px;">
                    <el-input type="textarea" v-model="ruleForm.empRemark" placeholder="无"></el-input>
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
              {{ ruleForm.empName }}
            </el-descriptions-item>

            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                性别
            </template>
              {{ ruleForm.empSex }}
            </el-descriptions-item>

            <el-descriptions-item>
            <template slot="label">
                <i class="el-icon-user"></i>
                员工编号
            </template>
              {{ ruleForm.empNo }}
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
                :data="evaluateData"
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
        imageUrl: '',
        url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',

          ruleForm: {
          empName: '',
          empSex: '',
          empNo: '',
          empId: '',
          empPhone: '',
          empNp: '',
          region: '',
          empEdu: '',
          empSch: '',
          empPro: '',
          empDep: '',
          empJob: '',
          empBirth: '',
          empEntry: '',
          empMarry: true,
          type: [],
          resource: '',
          empRemark: ''
        },
        rules: {
          empName: [
            { required: true, message: '请输入员工姓名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          empSex: [
            { required: true, message: '请选择性别', trigger: 'change' }
          ],
          empNo: [
            { required: true, message: '请输入员工编号', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个数字', trigger: 'blur' }
          ],
          empId: [
            { required: true, message: '请输入身份证号', trigger: 'blur' },
            { min: 16, max: 18, message: '长度在 16 到 18 个字符', trigger: 'blur' }
          ],
          empPhone: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min: 8, max: 11, message: '长度在 8 到 11 个数字', trigger: 'blur' }
          ],
          empNp: [
            { required: true, message: '请输入籍贯', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          empEdu: [
            { required: true, message: '请输入最高学历', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          empSch: [
            { required: true, message: '请输入毕业院校', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
          ],
          empPro: [
            { required: true, message: '请输入专业', trigger: 'blur' },
            { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
          ],
          empDep: [
            { required: true, message: '请输入任职部门', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          empJob: [
            { required: true, message: '请输入担任职务', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请选择户口所在地', trigger: 'change' }
          ],
          empBirth: [
            { type: 'date', required: true, message: '请选择出生日期', trigger: 'change' }
          ],
          empEntry: [
            { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
          ],
          type: [
            { type: 'array', required: true, message: '请至少选择一个活动性质', trigger: 'change' }
          ],
          resource: [
            { required: true, message: '请选择活动资源', trigger: 'change' }
          ],
          empRemark: [
            { required: true, message: '请填写备注', trigger: 'blur' }
          ]
        },

        dialogFormVisible: false,
        formLabelWidth: '120px',




        activeName: 'first',
        dialogImageUrl: '',
        dialogVisible: false,
        size: '',
        evaluateData: {
          empNo:'',
          empAtt:'',
          empLvl:'',
          empAbl:'',
          empRes:'',
          empTeam:'',
          empLearn:'',
          empEva:'',
          evaMan:''
        }
        // tableData:[
        //     {
        //         date:'2021-01',
        //         attitude:'100',
        //         ability:'95',
        //         jichushuiping:'88',
        //         zerengan:'84',
        //         teamwork:'77',
        //         study:'78',
        //     },{
        //         date:'2021-02',
        //         attitude:'100',
        //         ability:'95',
        //         jichushuiping:'88',
        //         zerengan:'84',
        //         teamwork:'77',
        //         study:'78',
        //     },{
        //         date:'2021-03',
        //         attitude:'100',
        //         ability:'95',
        //         jichushuiping:'88',
        //         zerengan:'84',
        //         teamwork:'77',
        //         study:'78',
        //     },{
        //         date:'2021-04',
        //         attitude:'100',
        //         ability:'95',
        //         jichushuiping:'88',
        //         zerengan:'84',
        //         teamwork:'77',
        //         study:'78',
        //     },{
        //         date:'2021-05',
        //         attitude:'100',
        //         ability:'95',
        //         jichushuiping:'88',
        //         zerengan:'84',
        //         teamwork:'77',
        //         study:'78',
        //     },{
        //         date:'2021-06',
        //         attitude:'100',
        //         ability:'95',
        //         jichushuiping:'88',
        //         zerengan:'84',
        //         teamwork:'77',
        //         study:'78',
        //     },
        // ]
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
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
      load() {
        this.$api.lkUAPI.load(this).then(res =>{
        })
      },

      loadEva() {
        this.$api.lkUAPI.loadEva(this).then(res =>{
        })
      },

      update() {
        this.$api.lkUAPI.update(this.ruleForm,this).then(res =>{
        })
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
                                value: [this.evaluateData.empAtt,this.evaluateData.empLvl,this.evaluateData.empAbl, this.evaluateData.empRes, this.evaluateData.empTeam, this.evaluateData.empLearn],
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
    font-size: 38px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
.el-form{
    margin-top: 8px;

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
