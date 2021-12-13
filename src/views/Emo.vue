<template>
    <div  id="app">


      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="已获权限员工" name="first">


            <template>
            <br/>
            <el-button @click="resetDateFilter">清除日期过滤器</el-button>
            <el-button @click="clearFilter">清除所有过滤器</el-button>

            <!-- 查看其他公司员工drawer -->
            <el-button @click="drawer = true" type="primary" style=" margin-left: 730px;">查看其他公司员工</el-button>
            <el-drawer title="其他公司员工" :visible.sync="drawer" :with-header="false">
              <br>&nbsp;
              <el-autocomplete
                v-model="state"
                :fetch-suggestions="querySearchAsync"
                placeholder="请输入想查看的员工姓名"
                @select="handleSelect"
                style="width:280px "
              ></el-autocomplete>
            </el-drawer>
          
            <br/>

            <el-table :data="tableData1" style="width: 100%" max-height="1600"  ref="filterTable" id="table1">
          
            <el-table-column fixed prop="date" label="日期" sortable width="150" column-key="date" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="120" :filters="[{text: '男', value: '男'}, {text: '女', value: '女'}]" :filter-method="filterHandler">
            </el-table-column>
            <el-table-column prop="apartment" label="所属公司" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址" width="200">
            </el-table-column>
            <el-table-column prop="zip" label="电话" width="80">
            </el-table-column>
            <el-table-column prop="cz" fixed="right" label="操作" width="200">
              <template slot-scope="scope">
                
                <div id="anniu">
                  <router-link  to="/Lookuser">
                <el-button  size="mini" type="primary" icon="el-icon-zoom-in"></el-button>
                </router-link>
                </div>
                

                
                <div id="anniu"><el-button size="mini" @click="deleteopen" @click.native.prevent="deleteRow(scope.$index, tableData)" type="primary" icon="el-icon-delete"></el-button></div>


              </template>
            </el-table-column>


          </el-table>
        </template>
        </el-tab-pane>
        <el-tab-pane label="未获权限员工" name="second">



          <template>
            <br/>
            <el-button @click="resetDateFilter">清除日期过滤器</el-button>
            <el-button @click="clearFilter">清除所有过滤器</el-button>

            

            <el-table :data="tableData" style="width: 100%" max-height="1600"  ref="filterTable" id="table1">
          
            <el-table-column fixed prop="date" label="日期" sortable width="150" column-key="date" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="sex" label="性别" width="120" :filters="[{text: '男', value: '男'}, {text: '女', value: '女'}]" :filter-method="filterHandler">
            </el-table-column>
            <el-table-column prop="apartment" label="所属公司" width="360" >
            </el-table-column>

            <el-table-column prop="zip" label="联系电话" width="180">
            </el-table-column>
            


            <el-table-column fixed="right" label="获取权限" width="120">
              <template slot-scope="scope">
                
                <div id="anniu">
                <el-button  size="mini" type="primary" icon="el-icon-user-solid" ></el-button>

                </div>
                

                

              </template>
            </el-table-column>




          </el-table>
        </template>


        </el-tab-pane>

        </el-tabs>


    </div>
</template>

<script>
  export default {
    
    
    methods: {

      editopen() {
        this.$alert('这是一段内容', '标题名称', {
          confirmButtonText: '确定',
          callback: action => {
            this.$message({
              type: 'info',
              message: `action: ${ action }`
            });
          }
        });
      },

      deleteopen() {
        this.$confirm('此操作将永久删除该员工信息, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },

      




      loadAll() {
        return [
          { "value": "韩东", "sex": "女","birthday":"1999.5.1","company":"中国移动" },
          { "value": "韩西", "sex": "男","birthday":"1994.5.16","company":"中国移动" },
          { "value": "韩南", "sex": "女","birthday":"1996.5.1","company":"中国移动" },
          { "value": "韩北", "sex": "男","birthday":"1989.5.14","company":"中国移动" },
          { "value": "韩中", "sex": "女","birthday":"1994.5.9","company":"中国移动" },
          { "value": "韩下", "sex": "男","birthday":"1993.8.1","company":"中国移动" },
          { "value": "韩上", "sex": "男","birthday":"1999.5.1","company":"中国移动" },
          
        ];
      },
      handleClick(tab, event) {
        console.log(tab, event);
        },
      querySearchAsync(queryString, cb) {
        var employees = this.employees;
        var results = queryString ? employees.filter(this.createStateFilter(queryString)) : employees;

        clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
          cb(results);
        }, 3000 * Math.random());
      },
      createStateFilter(queryString) {
        return (state) => {
          return (state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
      },
      handleSelect(item) {
        //alert(item.value+'-'+item.sex+'-'+item.birthday+'-'+item.company);
        this.$confirm(item.value+'-'+item.sex+'-'+item.birthday+'-'+item.company, {
          confirmButtonText: '发起申请',
          cancelButtonText: '取消',
        }).then(() => {
          this.$message({
            type: 'success',
            message: '申请成功'
          });
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消操作'
          });          
        });
      },
        

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
    mounted() {
      this.employees = this.loadAll();
    },
    data() {
      return {
        activeName: 'first',
        employees: [],
        state: '',
        timeout:  null,

        drawer: false,

        tableData: [{
          date: '2016-05-03',
          name: '李六',
          sex: '男',
          apartment: 'A公司',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '王小虎',
          sex: '男',
          apartment: 'C公司',
          address: '...',
          zip: 200333
        },{
          date: '2016-05-02',
          name: '王小虎',
          sex: '男',
          apartment: 'B公司',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '张大头',
          sex: '男',
          apartment: 'A公司',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '贺伯伯',
          sex: '男',
          apartment: 'B公司',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '蒋卫慧',
          sex: '女',
          apartment: 'A公司',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '王小虎',
          sex: '男',
          apartment: 'A公司',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '卢阿姨',
          sex: '女',
          apartment: 'A公司',
          address: '...',
          zip: 200333
        }],


        tableData1: [{
          date: '2016-05-03',
          name: '汤姆斯克鲁斯',
          sex: '男',
          apartment: 'WB公司',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-08',
          name: '余华',
          sex: '男',
          apartment: 'W公司',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-06',
          name: '克里斯汉克斯',
          sex: '男',
          apartment: 'WB公司',
          address: '...',
          zip: 200333
        }, {
          date: '2016-05-07',
          name: '玛丽莲梦露',
          sex: '女',
          apartment: 'WB公司',
          address: '...',
          zip: 200333
        }]






      }
    },
    

  }
</script>


<style scoped>
#table1{
  margin-top: 10px;
}
#anniu{
  width: 20px;
  display: inline-block;
  margin-left: 3px;
  margin-right: 25px;
  margin-bottom: 5px;
}
#anniut{
  display: inline-block;
  width: 20px;
  margin-bottom: 5px;

}
#app{
  height: 500px;
}
</style>