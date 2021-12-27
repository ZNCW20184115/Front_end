<template>
    <div  id="app">
            <br/>
            <el-select
              v-model="value"
              filterable
              remote
              reserve-keyword
              placeholder="请输入所查找人姓名"
              :remote-method="remoteMethod"
              :loading="loading">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
              </el-option>
            </el-select>

            <!--<el-button @click="resetDateFilter">清除日期过滤器</el-button>-->
            <!--<el-button @click="clearFilter">清除所有过滤器</el-button>-->

            <el-button type="primary" style=" margin-left: 3px;">搜索</el-button>
            <router-link  to="/Addemployee"><el-button type="primary" style=" margin-left: 480px;">录入员工信息</el-button></router-link>
            

            <!-- 查看其他公司员工drawer -->
            <el-button @click="drawer = true" type="primary" style=" margin-left: 530px;" id="lookother">查看其他公司员工</el-button>
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
            <br>

      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="本公司员工" name="first">

            <template>

            <el-table :data="tableData1" style="width: 100%" max-height="1600"  ref="filterTable" id="table1">
          
          

            <el-table-column prop="empName" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="empSex" label="性别" width="120" :filters="[{text: '男', value: '男'}, {text: '女', value: '女'}]" :filter-method="filterHandler">
            </el-table-column>
            <el-table-column prop="empDep" label="任职部门" width="120">
            </el-table-column>
            <el-table-column prop="empJob" label="担任职务" width="200">
            </el-table-column>
            <el-table-column prop="empPhone" label="手机号" width="80">
            </el-table-column>
            <el-table-column prop="cz" fixed="right" label="操作" width="200">
              <template slot-scope="scope">
                
                <div id="anniu" style="margin-right:35px">
                  <router-link  to="/Lookuser">
                <el-button  size="mini" type="primary" >查看</el-button>
                </router-link>
                </div>
                

                
                <div id="anniu"><el-button size="mini" @click="deleteopen" @click.native.prevent="deleteRow(scope.$index, tableData1)" type="primary" icon="el-icon-delete"></el-button></div>


              </template>
            </el-table-column>


          </el-table>
        </template>
        </el-tab-pane>
        <el-tab-pane label="已发送请求员工" name="second">



          <template>
          

            

            <el-table :data="tableData" style="width: 100%" max-height="1600"  ref="filterTable" id="table1">
           
            <el-table-column fixed prop="date" label="请求日期" sortable width="150" column-key="date" :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler">
            </el-table-column>
            <el-table-column prop="empName" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="empSex" label="性别" width="120" :filters="[{text: '男', value: '男'}, {text: '女', value: '女'}]" :filter-method="filterHandler">
            </el-table-column>
            <el-table-column prop="cpnName" label="所属公司" width="160" >
            </el-table-column>

            <el-table-column prop="empPhone" label="手机号" width="180">
            </el-table-column>
            
            <el-table-column prop="askStatus" fixed="right" label="是否获取权限" width="120">
              
            </el-table-column>

            <el-table-column prop="cz" fixed="right" label="操作" width="200">
              <template slot-scope="scope">
                
                <div id="anniu" style="margin-right:35px">
                  <router-link  to="/Lookuser">
                <el-button  size="mini" type="primary" >查看</el-button>
                </router-link>
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
      remoteMethod(query) {
        if (query !== '') {
          this.loading = true;
          setTimeout(() => {
            this.loading = false;
            this.options = this.list.filter(item => {
              return item.label.toLowerCase()
                .indexOf(query.toLowerCase()) > -1;
            });
          }, 200);
        } else {
          this.options = [];
        }
      },



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
          { "value": "王一", "empSex": "女","birthday":"1999.5.1","company":"中国移动" },
          { "value": "李二", "empSex": "男","birthday":"1994.5.16","company":"中国移动" },
          { "value": "刘三", "empSex": "女","birthday":"1996.5.1","company":"中国移动" },
          { "value": "赵四", "empSex": "男","birthday":"1989.5.14","company":"中国移动" },
          { "value": "陈无", "empSex": "女","birthday":"1994.5.9","company":"中国移动" },
          { "value": "金星", "empSex": "男","birthday":"1993.8.1","company":"中国移动" },
          { "value": "张刘", "empSex": "男","birthday":"1999.5.1","company":"中国移动" },
          
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
        //alert(item.value+'-'+item.empSex+'-'+item.birthday+'-'+item.company);
        this.$confirm(item.value+'-'+item.empSex+'-'+item.birthday+'-'+item.company, {
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
        this.$router.push({ empName: item.empName });
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
      this.list = this.states.map(item => {
        return { value: `value:${item}`, label: `${item}` };
      });
    },
    data() {
      return {

        options: [],
        value: [],
        list: [],
        loading: false,
        states: ["汤姆汉克斯", "卢阿姨", "余华",
        "克里斯汉克斯", "玛丽莲梦露", "李六",
        "王小虎", "张大头", "贺伯伯",
        "Georgia", "Hawaii", "Idaho", "Illinois",
        "Indiana", "Iowa", "Kansas", "Kentucky",
        "Louisiana", "Maine", "Maryland",
        "Massachusetts", "Michigan", "Minnesota",
        "Mississippi", "Missouri", "Montana",
        "Nebraska", "Nevada", "New Hampshire",
        "New Jersey", "New Mexico", "New York",
        "North Carolina", "North Dakota", "Ohio",
        "Oklahoma", "Oregon", "Pennsylvania",
        "Rhode Island", "South Carolina",
        "South Dakota", "Tennessee", "Texas",
        "Utah", "Vermont", "Virginia",
        "Washington", "West Virginia", "Wisconsin",
        "Wyoming"],
        


        activeName: 'first',
        employees: [],
        state: '',
        timeout:  null,

        drawer: false,

        tableData: [{
          date: '2016-05-03',
          empName: '李六',
          empSex: '男',
          cpnName: 'A公司',
          cpnAdr: '...',
          askStatus:'是',
          empPhone: 200333
        }, {
          date: '2016-05-03',
          empName: '王小虎',
          empSex: '男',
          cpnName: 'C公司',
          cpnAdr: '...',
          askStatus:'是',
          empPhone: 200333
        },{
          date: '2016-05-03',
          empName: '王小虎',
          empSex: '男',
          cpnName: 'B公司',
          cpnAdr: '...',
          askStatus:'是',
          empPhone: 200333
        }, {
          date: '2016-05-03',
          empName: '张大头',
          empSex: '男',
          cpnName: 'A公司',
          cpnAdr: '...',
          askStatus:'是',
          empPhone: 200333
        }, {
          date: '2016-05-03',
          empName: '贺伯伯',
          empSex: '男',
          cpnName: 'B公司',
          cpnAdr: '...',
          askStatus:'是',
          empPhone: 200333
        }, {
          date: '2016-05-03',
          empName: '蒋卫慧',
          empSex: '女',
          cpnName: 'A公司',
          cpnAdr: '...',
          askStatus:'是',
          empPhone: 200333
        }, {
          date: '2016-05-03',
          empName: '王小虎',
          empSex: '男',
          cpnName: 'A公司',
          cpnAdr: '...',
          askStatus:'否',
          empPhone: 200333
        }, {
          date: '2016-05-03',
          empName: '卢阿姨',
          empSex: '女',
          cpnName: 'A公司',
          cpnAdr: '...',
          askStatus:'否',
          empPhone: 200333
        }],


        tableData1: [{
          empName: '汤姆斯克鲁斯',
          empSex: '男',
          empDep: '营销部',
          empJob: '...',
          empPhone: 200333
        }, {
          empName: '余华',
          empSex: '男',
          empDep: '管理部',
          empJob: '...',
          empPhone: 200333
        }, {
          empName: '克里斯汉克斯',
          empSex: '男',
          empDep: '销售部',
          empJob: '...',
          empPhone: 200333
        }, {
          empName: '玛丽莲梦露',
          empSex: '女',
          empDep: '后勤部',
          empJob: '...',
          empPhone: 200333
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
#lookother{
  float: right;
  margin-top: -40px;
  margin-right:115px;
}
</style>