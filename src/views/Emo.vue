<template>
    <div  id="app">
      <template>
          <el-button @click="resetDateFilter">清除日期过滤器</el-button>
          <el-button @click="clearFilter">清除所有过滤器</el-button>

          <el-table :data="tableData" style="width: 100%" max-height="1250"  ref="filterTable" >
        
          <el-table-column fixed prop="date" label="日期" sortable width="150" column-key="date" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler">
          </el-table-column>
          <el-table-column prop="name" label="姓名" width="120">
          </el-table-column>
          <el-table-column prop="sex" label="性别" width="120">
          </el-table-column>
          <el-table-column prop="apartment" label="所属部门" width="120">
          </el-table-column>
          <el-table-column prop="address" label="地址" width="360">
          </el-table-column>
          <el-table-column prop="zip" label="电话" width="280">
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button size="mini" @click.native.prevent="deleteRow(scope.$index, tableData)" type="primary" icon="el-icon-delete"></el-button>
              <el-button type="text" οnclick="location='/Lookuser'" size="small"  :to="{ path: '/Lookuser' }" >
                  查看 <router-link  to="/Lookuser">查看</router-link> 
              </el-button>
              <el-button size="mini" type="primary" icon="el-icon-edit"></el-button>
            </template>
          </el-table-column>
        </el-table>
      </template>
    </div>
</template>

<script>
  export default {
    methods: {
      clickMenu(item) {
        this.$router.push({ name: item.name });
        this.$store.commit("selectMenu", item);
      },
        resetDateFilter() {
        this.$refs.filterTable.clearFilter('date');
      },
      clearFilter() {
        this.$refs.filterTable.clearFilter();
      },
      filterHandler(value, row, column) {
        const property = column['property'];
        return row[property] === value;
      },
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
    data() {
      return {
        tableData: [{
          date: '2016-05-03',
          name: '李六',
          sex: '男',
          apartment: '人事部',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-02',
          name: '王小虎',
          sex: '男',
          apartment: '后勤部',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '张大头',
          sex: '男',
          apartment: '人事部',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '贺伯伯',
          sex: '男',
          apartment: '炊事部',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '蒋卫慧',
          sex: '女',
          apartment: '人事部',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          sex: '男',
          apartment: '人事部',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '卢阿姨',
          sex: '女',
          apartment: '董事会',
          address: '...',
          zip: 200333
        }]
      }
    }
  }
</script>