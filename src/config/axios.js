import axios from "axios";

import store from "../store"

const whiteUrls = ["/user/login", '/user/register']


const defaultConfig = {

  timeout:10000,

  headers:{
    get: {
      "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
    },
    post: {
       "Content-Type": "application/json;charset=utf-8"
    }
  }

}

const Axios = axios.create(defaultConfig);

Axios.interceptors.request.use(
  function(config) {
    // 从vuex里获取token
    const token = store.state.token;
    // 如果token存在就在请求头里添加
    token && (config.headers.token = token);
    return config;
  },
  function(error) {
    // Do something with request error
    error.data = {};
    error.data.msg = "服务器异常";
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  function(response) {
    // 清除本地存储中的token,如果需要刷新token，在这里通过旧的token跟服务器换新token，将新的token设置的vuex中
    if (response.data.code === 401) {
      localStorage.removeItem("token");
      // 页面刷新
      parent.location.reload();
    }
    if (response.status === 200) {
      // 处理接口中的data
      if (response.data.data) {
        try {
          const dataObj = JSON.parse(response.data.data);
          if (typeof dataObj == "object" && dataObj) {
            // 为json字符串将其转为json对象
            response.data.data = dataObj;
          }
        } catch (e) {
          // 不是json字符串就不处理
          return response.data;
        }
      }
      return response.data;
    }
    response.data.code = -1;
    response.data.msg = "服务器错误";
    return response;
  },
  function(error) {
    if (error) {
      // 请求已发出，但不在2xx范围内
      errorHandle(error.status, error.data.msg);
      return Promise.reject(error);
    } else {
      // 断网
      return Promise.reject(error);
    }
  }
);

export function Axios_get(url,params){
  return new Promise(
    (resolve,reject)=>{
      Axios.get(url,{params:params})
        .then(res=>{
          console.log("封装信息的的res",res);
          resolve(res.data)
        }).catch(err=>{
        reject(err.data)
      })
    }
  )
}

export function Axios_post(url,data){
  return new Promise(
    (resolve,reject)=>{
      console.log(data);
      Axios.post(url,JSON.stringify(data))
        .then(res=>{
          console.log("封装信息的的res",res);
          resolve(res)
        }).catch(err=>{
        reject(err)
      })
    }
  )
}

export function Axios_put(url,data){
  return new Promise(
    (resolve,reject)=>{
      console.log(data);
      Axios.put(url,JSON.stringify(data))
        .then(res=>{
          console.log("封装信息的的res",res);
          resolve(res.data)
        }).catch(err=>{
        reject(err.data)
      })
    }
  )
}

export function Axios_delete(url,data){
  return new Promise(
    (resolve,reject)=>{
      console.log(data);
      Axios.delete(url,{params:data})
        .then(res=>{
          console.log("封装信息的的res",res);
          resolve(res.data)
        }).catch(err=>{
        reject(err.data)
      })
    }
  )
}


export default Axios;
