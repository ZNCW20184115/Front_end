<template>
<div>
  <el-tabs v-model="activeName" @tab-click="handleClick">

    <el-tab-pane label="消息栏" name="first">
        <el-table :data="in_tableData" style="width: 100%">
            <!-- 申请日期 -->
            <el-table-column prop="IN_date" label="日期" sortable width="180"></el-table-column>
            <!-- 申请人 -->
            <el-table-column prop="IN_name" label="发件人" width="120"></el-table-column>
            <!-- 转入企业 -->
            <el-table-column prop="in" label="主题" width="450"></el-table-column>
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
                    <el-button size="mini" @click="accept_in(scope.$index, scope.row)">获取权限</el-button>
                    <el-button disabled size="mini" @click="accept_in(scope.$index, scope.row)">给予权限</el-button>
                </template>
            </el-table-column>
        </el-table>


        <el-table :data="in_tableData1" style="width: 100%">
            <!-- 申请日期 -->
            <el-table-column prop="IN_date" label="日期" sortable width="180"></el-table-column>
            <!-- 申请人 -->
            <el-table-column prop="IN_name" label="发件人" width="120"></el-table-column>
            <!-- 转入企业 -->
            <el-table-column prop="in" label="主题" width="450"></el-table-column>
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
                    <el-button disabled size="mini" @click="accept_in(scope.$index, scope.row)">获取权限</el-button>
                    <el-button size="mini" @click="accept_in(scope.$index, scope.row)">给予权限</el-button>
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
          {
          IN_date: '2016-05-02',
          IN_name: 'ad',
          in: '您申请查看员工马斯克的权限已获批准！',
          IN_tag: '未处理'
        }, {
          IN_date: '2016-05-04',
          IN_name: 'ad',
          in: '您申请查看员工马云的权限已获批准！',
          IN_tag: '已处理'
        }, 
        
        ],
        in_tableData1: [ 
        {
          IN_date: '2016-05-04',
          IN_name: '001HR',
          in: '001HR申请查看员工尼克的权限！',
          IN_tag: '未处理'
        },
        {
          IN_date: '2016-05-04',
          IN_name: '002HR',
          in: '002HR申请查看员工威尔斯的权限！',
          IN_tag: '已处理'
        },
        ],


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