import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})
//axios支持Promise他内部会调用resolve，所以
// axios({
//   url: "http://123.207.32.32:8000/home/multidata",
// }).then(res => {
//   console.log(res);
// })
// axios({
//   // url: "http://123.207.32.32:8000/home/data?type=sell&page=1"
//   url: "http://123.207.32.32:8000/home/data",
//   params: {
//     type: 'pops',
//     page:1
//   }
// }).then(res => {
//   console.log(res);
// })

//axios并发请求，就是要拿到多个网络请求结果之后再执行
// axios.all([axios({
//   url: "http://123.207.32.32:8000/home/multidata"
// }),axios({
//   url: "http://123.207.32.32:8000/home/data",
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })])
//   .then(results => {
//     console.log(results);
//   })
//对结果进行展开
// axios.all([axios({
//   url: "http://123.207.32.32:8000/home/multidata"
// }),axios({
//   url: "http://123.207.32.32:8000/home/data",
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))


//axios全局配置
// axios.defaults.baseURL = "http://123.207.32.32:8000"
// // 配置超时时间
// axios.defaults.timeout = 5000
// axios.all([axios({
//   url: "/home/multidata"
// }),axios({
//   url: "home/data",
//   params: {
//     type: 'sell',
//     page: 5
//   }
// })]).then(axios.spread((res1,res2) => {
//   console.log(res1);
//   console.log(res2);
// }))
//
// //当请求方式method = 'get' 时 用params传参
// //         method = 'post' 时用data：[key:value]请求体传参


//3.创建对应的axios实例，避免被全局配置干扰出错
// const instance1 = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000
// })
//
// instance1({
//   url: '/home/multidata'
// }).then(res => {
//   console.log(res);
// })
// instance1({
//   url: "home/data",
//   params: {
//     type: 'sell',
//     page: 5
//   }
// }).then(res => {
//   console.log(res);
// })

//使用封装的axios网络请求
import {request} from "./network/request";
request({
  url:'/home/multidata'
}).then( res => {
  console.log(res);
}).catch( err => {
  console.log(err);
})
