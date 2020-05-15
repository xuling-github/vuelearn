import axios from 'axios'

export function request(config) {
  //1.创建axios对象实例
    const instance = axios.create({
      baseURL: "http://123.207.32.32:8000",
      timeout: 5000
    })
  // axios的拦截器，拦截哪个就use哪个,有两个参数，一个表示成功的函数，这个函数的参数就是instance的参数，一个失败的函数
  // 使用这个一定要记得return呀
  // 请求拦截
  instance.interceptors.request.use( config => {
    console.log(config);
    //拦截之后一定要记得把拦截的东西return回去不然请求发出去了但是得不到结果
    // 那些情况下需要拦截请求呢？
    // 1.当有一些不符合服务器要求的config，我们需要增加一些config的时候比如把header加进去的时候可以使用拦截
    // 2. 想要把请求过程中的一些进度动画可以先拦截
    // 3.某些网络请求（比如登录（token））一些必须携带的信息
    return config
  },err => {
    console.log(err);
  })

  // 响应拦截
  // 可以拦截之后把想要的数据return
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err);
  })

    //发送真正的网络请求
    // instance(config)就是一个axiosPromise，
    // 所以不用显性的使用return new Promise调用resolve，直接return这个instance，
    // 他会自动去调用它的then方法执行结果的
    return instance(config)
}

//   return new Promise((resolve,reject) => {
//     //1.创建axios对象实例
//     const instance = axios.create({
//       baseURL: "http://123.207.32.32:8000",
//       timeout: 5000
//     })

    // instance(config)
    //   .then(res => {
    //     // console.log(config.success);
    //     resolve(res)
    //   })
    //   .catch(err => {
    //     // console.log(config.failure);
    //     reject(err)
    //   })
//   })
//
//
//
// }
