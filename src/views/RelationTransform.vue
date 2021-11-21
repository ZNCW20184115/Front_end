<template>
<div>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <!--转入审批-->
    <el-tab-pane label="转入审批" name="first">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="申请日期" width="180">
                <template slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="申请人" width="120"></el-table-column>
            <el-table-column prop="in" label="转入企业" width="250"></el-table-column>
            <el-table-column prop="tag" label="状态" width="100"
                 :filters="[{ text: '已处理', value: '已处理' }, { text: '未处理', value: '未处理' }]"
                 :filter-method="filterTag" filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.tag === '已处理' ? 'primary' : 'success'"
                      disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">同意</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">拒绝</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-tab-pane>
    <!--转出审批-->
    <el-tab-pane label="转出审批" name="second">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column label="申请日期" width="180">
                <template  slot-scope="scope">
                    <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="申请人" width="120"></el-table-column>
            <el-table-column prop="in" label="原先在职企业" width="250"></el-table-column>
            <el-table-column prop="tag" label="状态" width="100"
                 :filters="[{ text: '已处理', value: '已处理' }, { text: '未处理', value: '未处理' }]"
                 :filter-method="filterTag" filter-placement="bottom-end">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.tag === '已处理' ? 'primary' : 'success'"
                      disable-transitions>{{scope.row.tag}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">同意</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">拒绝</el-button>
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
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          in: '上海市普陀区金沙江路 1518 弄',
          tag: '已处理'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          in: '上海市普陀区金沙江路 1517 弄',
          tag: '已处理'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          in: '上海市普陀区金沙江路 1518 弄',
          tag: '未处理'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          in: '上海市普陀区金沙江路 1518 弄',
          tag: '未处理'
        }]
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      filterTag(value, row) {
        return row.tag === value;
      },
    }
  };
</script>