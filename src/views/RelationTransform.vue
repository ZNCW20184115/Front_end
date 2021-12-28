<template>
<div>
  <el-tabs v-model="activeName" @tab-click="handleClick" > 
    <!--转入申请-->
     <el-tab-pane label="转入申请" name="first">
        <el-table :data="in_tableData" style="width: 100%" :row-class-name="tableRowClassName">
            <!-- 申请日期 -->
            <el-table-column prop="empEntry" label="申请日期" sortable width="180"></el-table-column>
            <!-- 申请人 -->
            <el-table-column prop="empName" label="申请人" width="120"></el-table-column>
            <!-- 转入企业 -->
            <el-table-column prop="cpnName" label="转入企业" width="250"></el-table-column>
            <!-- 状态 -->
            <el-table-column prop="IN_tag" label="状态" width="100" 
                 :filters="[{ text: '已同意', value: '已同意' },
                 { text: '未处理', value: '未处理' },
                { text: '未同意', value: '未同意' }]"
                 :filter-method="filterTag" filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.IN_tag === '未处理' ? 'primary' : 'success'"
                      disable-transitions>{{scope.row.IN_tag}}</el-tag>
                </template>
            </el-table-column>
            <!-- 操作 -->
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button size="mini" 
                    @click="accept_in(scope.$index, scope.row)">同意</el-button>
                    <el-button size="mini" type="danger" @click="reject_in(scope.$index, scope.row)">拒绝</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-tab-pane>
    <!-- 发起转出 -->
     <el-tab-pane label="发起转出" name="second">
        <el-form ref="out_tableData" :model="out_tableData" label-width="100px" style="margin-top:40px">
          <el-form-item label="员工姓名" prop="empName">
            <el-input v-model="out_tableData.empName"></el-input>
          </el-form-item><br>
          <el-form-item label="员工编号" prop="empNo">
            <el-input v-model="out_tableData.empNo"></el-input>
          </el-form-item><br>
          <el-form-item label="担任职务" prop="empJob">
            <el-input v-model="out_tableData.empJob"></el-input>
          </el-form-item><br>
          <el-form-item label="转出企业" prop="out_cpn">
            <el-input v-model="out_tableData.out_cpn"></el-input>
          </el-form-item><br>
          <el-form-item style="margin-top:30px">
            <el-button type="primary" @click="onSubmit">发起请求</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
    </el-tab-pane>  
   </el-tabs>
</div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'first',
        in_tableData: [
          // 转入处理
          {
          empEntry: '2016-05-02',
          empName: '王小虎',
          cpnName: '上海市普陀区金沙江路 1518 弄',
          IN_tag: '已同意'
        }, {
          empEntry: '2016-05-04',
          empName: '王小虎',
          cpnName: '上海市普陀区金沙江路 1517 弄',
          IN_tag: '已拒绝'
        }, {
          empEntry: '2016-05-01',
          empName: '王小虎',
          cpnName: '上海市普陀区金沙江路 1518 弄',
          IN_tag: '未处理' 
        }, {
          empEntry: '2016-05-04',
          empName: '王小虎',
          cpnName: '上海市普陀区金沙江路 1518 弄',
          IN_tag: '未处理'
        },{
          empEntry: '2016-05-04',
          empName: '王小虎',
          cpnName: '上海市普陀区金沙江路 1517 弄',
          IN_tag: '已同意'
        }, {
          empEntry: '2016-05-01',
          empName: '王小虎',
          cpnName: '上海市普陀区金沙江路 1518 弄',
          IN_tag: '未处理'
        }, {
          empEntry: '2016-05-03',
          empName: '王小虎',
          cpnName: '上海市普陀区金沙江路 1518 弄',
          IN_tag: '未处理'
        },
        ],
        out_tableData: [
        // 发起转出
        {
          empName: '',
          empNo: '',
          empJob: '',
          out_cpn:''
        }
        ]
      };  
    },
    methods: {
      //操作栏同意键单击响应函数in
      accept_in(tab,event){
        event.IN_tag="已同意";
      },
      reject_in(tab,event){
        event.IN_tag="已拒绝";
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      onSubmit() {
        console.log('submit!');
      },
      tableRowClassName: function({row, rowIndex}) {
        if (row.IN_tag == '已同意') {
          return 'hidden-row';
        }
        return '';
      }
    }
  }
</script>
<style>
.el-tabs .hidden-row{
  display: none;
}
</style>