<template>
<div>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <!--转入审批-->
    <el-tab-pane label="转入审批" name="first">
        <el-table :data="in_tableData" style="width: 100%">
            <!-- 申请日期 -->
            <el-table-column prop="IN_date" label="申请日期" sortable width="180"></el-table-column>
            <!-- 申请人 -->
            <el-table-column prop="IN_name" label="申请人" width="120"></el-table-column>
            <!-- 转入企业 -->
            <el-table-column prop="in" label="转入企业" width="250"></el-table-column>
            <!-- 状态 -->
            <el-table-column prop="IN_tag" label="状态" width="100" 
                 :filters="[{ text: '已处理', value: '已处理' }, { text: '未处理', value: '未处理' }]"
                 :filter-method="filterTag" filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.IN_tag === '已处理' ? 'primary' : 'success'"
                      disable-transitions>{{scope.row.IN_tag}}</el-tag>
                </template>
            </el-table-column>
            <!-- 操作 -->
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <el-button size="mini" @click="accept_in(scope.$index, scope.row)">同意</el-button>
                    <el-button size="mini" type="danger" @click="reject_in(scope.$index, scope.row)">拒绝</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-tab-pane>
    <!--转出审批-->
    <el-tab-pane label="转出审批" name="second">
        <el-table :data="out_tableData" style="width: 100%">
          <!-- 申请日期 -->
          <el-table-column prop="OUT_date" label="申请日期" sortable width="180"></el-table-column>
           <!-- 申请人 -->  
          <el-table-column prop="OUT_name" label="申请人" width="120"></el-table-column>
          <!-- 原先在职企业 -->
          <el-table-column prop="Used_in" label="原先在职企业" width="250"></el-table-column>
          <!-- 状态 -->
          <el-table-column prop="OUT_tag" label="状态" width="100" 
           :filters="[{ text: '已处理', value: '已处理' },
           { text: '未处理', value: '未处理' }]"
           :filter-method="filterTag" filter-placement="bottom-end">
              <template slot-scope="scope">
                <el-tag :type="scope.row.OUT_tag === '已处理' ? 'primary' : 'success'" disable-transitions>
                 {{scope.row.OUT_tag}}
                </el-tag>
              </template>
          </el-table-column>
          <!-- 操作 -->
          <el-table-column label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" @click="accept_out(scope.$index, scope.row)">同意</el-button>
              <el-button size="mini" type="danger" @click="reject_out(scope.$index, scope.row)">拒绝</el-button>
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
        in_tableData: [
          // 转入处理
          {
          IN_date: '2016-05-02',
          IN_name: '王小虎',
          in: '上海市普陀区金沙江路 1518 弄',
          IN_tag: '已处理'
        }, {
          IN_date: '2016-05-04',
          IN_name: '王小虎',
          in: '上海市普陀区金沙江路 1517 弄',
          IN_tag: '已处理'
        }, {
          IN_date: '2016-05-01',
          IN_name: '王小虎',
          in: '上海市普陀区金沙江路 1518 弄',
          IN_tag: '未处理' 
        }, {
          IN_date: '2016-05-04',
          IN_name: '王小虎',
          in: '上海市普陀区金沙江路 1518 弄',
          IN_tag: '未处理'
        },{
          IN_date: '2016-05-04',
          IN_name: '王小虎',
          in: '上海市普陀区金沙江路 1517 弄',
          IN_tag: '已处理'
        }, {
          IN_date: '2016-05-01',
          IN_name: '王小虎',
          in: '上海市普陀区金沙江路 1518 弄',
          IN_tag: '未处理'
        }, {
          IN_date: '2016-05-03',
          IN_name: '王小虎',
          in: '上海市普陀区金沙江路 1518 弄',
          IN_tag: '未处理'
        },
        ],
        out_tableData: [
            // 转出处理
        {
          OUT_date: '2016-05-02',
          OUT_name: '王小虎',
          Used_in: '上海市普陀区金沙江路 1518 弄',
          OUT_tag: '已处理'
        }, {
          OUT_date: '2016-05-04',
          OUT_name: '王小虎',
          Used_in: '上海市普陀区金沙江路 1517 弄',
          OUT_tag: '已处理'
        }, {
          OUT_date: '2016-05-01',
          OUT_name: '王小虎',
          Used_in: '上海市普陀区金沙江路 1518 弄',
          OUT_tag: '未处理' 
        }, {
          OUT_date: '2016-05-04',
          OUT_name: '王小虎',
          Used_in: '上海市普陀区金沙江路 1518 弄',
          OUT_tag: '未处理'
        },{
          OUT_date: '2016-05-04',
          OUT_name: '王小虎',
          Used_in: '上海市普陀区金沙江路 1517 弄',
          OUT_tag: '已处理'
        }, {
          OUT_date: '2016-05-01',
          OUT_name: '王小虎',
          Used_in: '上海市普陀区金沙江路 1518 弄',
          OUT_tag: '未处理'
        }, {
          OUT_date: '2016-05-03',
          OUT_name: '王小虎',
          Used_in: '上海市普陀区金沙江路 1518 弄',
          OUT_tag: '未处理'
        }
        ]
      };
      
    },
    methods: {
      //操作栏同意键单击响应函数in
      accept_in(tab,event){
        event.IN_tag="已处理";
        //event.tag
      },
      //操作栏同意键单击响应函数out
      accept_out(tab,event){
        event.OUT_tag="已处理";
        //event.tag
      },
      //操作栏拒绝键单击响应函数in
      reject_in(tab,event){
        event.IN_tag="已处理";
      },
      //操作栏拒绝键单击响应函数out
      reject_out(tab,event){
        event.OUT_tag="已处理";
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      filterTag(value, row) {
        return row.tag === value;
      },
    }
  };
</script>