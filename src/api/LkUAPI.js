import {Axios_get, Axios_post} from "../config/axios";
import {Axios_put} from "../config/axios";
import request from "../utils/request";

const lkUAPI = {
  load(self) {
    self.loading = true
    Axios_get("/api/employee/{id}",{
      params:{
        employeeId: self.ruleForm.id
      }
    }).then(res => {
      self.loading = false
      self.ruleForm = res.data.data
    })
  },

  loadEva(self) {
    self.loading = true
    Axios_get("/api/empevaluate/{id}",{
      params:{
        employeeId: self.evaluateData.empNo
      }
    }).then(res => {
      self.loading = false
      self.evaluateData = res.data.data
    })
  },

  update(params,self) {
    if(self.form.id){ //更新
      Axios_put("/employee/update", self.form).then(res => {
        console.log(res)
      })
      if(res.code === '0'){
        self.$message({
          type:"success",
          message: "操作成功"
        })
      } else {
        self.$message({
          type:"error",
          message: res.msg
        })
      }
    } else { //新增
      Axios_post("/employee/update", self.form).then(res => {
        console.log(res)
      })
      if(res.code === '0'){
        self.$message({
          type:"success",
          message: "操作成功"
        })
      } else {
        self.$message({
          type:"error",
          message: res.msg
        })
      }
    }
  }
}

export default lkUAPI
