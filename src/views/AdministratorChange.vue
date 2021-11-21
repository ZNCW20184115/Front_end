<template>
  <div>
    <el-table
      ref="filterTable"
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="departmen"
        label="部门名称"
        width="180"
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="管理员"
        width="180">
      </el-table-column>
      <el-table-column
        prop="xianRenzhiWu"
        label="现任职务"
        width="180">
      </el-table-column>
      <el-table-column
        prop="tag"
        label="状态"
        width="100"
        :filters="[{ text: '管理中', value: '管理中' }, { text: '仅查看', value: '仅查看' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '管理中' ? 'primary' : 'success'"
            disable-transitions>{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作">
       <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">使管理</el-button>
        <el-button
          size="mini"
          @click="handleDelete(scope.$index, scope.row)">使查看</el-button>
       </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          departmen: '人力资源部',
          name: '王一',
          xianRenzhiWu: '部长',
          tag: '管理中'
        }, {
          departmen: '人力资源部',
          name: '林二',
          xianRenzhiWu: '普通员工',
          tag: '仅查看'
        }, {
          departmen: '人力资源部',
          name: '刘三',
          xianRenzhiWu: '普通员工',
          tag: '管理中'
        }, {
          departmen: '人力资源部',
          name: '王九',
          xianRenzhiWu: '普通员工',
          tag: '管理中'
        }]
      }
    },
    methods: {
      formatter(row, column) {
        return row.address;
      },
      filterTag(value, row) {
        return row.tag === value;
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }
  }
</script>
