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

#firstlabel{
text-align: center;
}
#myChart{
    display: flex;
    /* align-items: center; */
    /* justify-content: center;*/
    margin-top: 20px;;
}
</style>
