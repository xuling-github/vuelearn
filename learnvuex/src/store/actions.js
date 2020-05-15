export default {
    //官方不推荐在mutation中使用异步函数，这样dev-tools调试工具，
    // 这时候可以通过actions属性进行异步函数操作方法是在Vue 组件的methods中使用dispatch,
    // 之后在vuex实例的actions属性中commit
    // 他的函数有一个参数是一个上下文对象，在这里我们可以把它看成vuex实例store
    aUpdateInfo(context, payload){
      // setTimeout(() => {
      //   // 这里commit的updateInfo是原本要在vue components的methods中commit的，
      //   // 都是要提交到vuex实例中的mutations中的updateInfo，
      //   // 但是因为需要异步操作，原先的vue commponents经过dispatch vueX实例中actions中的aUpdateInfo
      //   // 那么commit updateInfo的工作就变成vuex 实例中的actions了
      //   context.commit('updateInfo')
      //   console.log(payload);
      // },1000)

      // setTimeout(() => {
      //   // 这里commit的updateInfo是原本要在vue components的methods中commit的，
      //   // 都是要提交到vuex实例中的mutations中的updateInfo，
      //   // 但是因为需要异步操作，原先的vue commponents经过dispatch vueX实例中actions中的aUpdateInfo
      //   // 那么commit updateInfo的工作就变成vuex 实例中的actions了
      //   context.commit('updateInfo')
      //   console.log(payload.message);
      //   payload.success()
      // },1000)
      // 换一种写法
      return new Promise((resolve, reject) => {
        setTimeout(() => {
        // 这里commit的updateInfo是原本要在vue components的methods中commit的，
        // 都是要提交到vuex实例中的mutations中的updateInfo，
        // 但是因为需要异步操作，原先的vue commponents经过dispatch vueX实例中actions中的aUpdateInfo
        // 那么commit updateInfo的工作就变成vuex 实例中的actions了
        context.commit('updateInfo')
        console.log(payload);

        //一旦调用resolve，那么new promise就在任何回调了他的时候用then方法的地方执行then方法
          //这里 return new Promise 函数aUpdateInfo的结果，
          // 而这个函数被在vue components中使用dispatch调用了，所以回调到dispatch中，
          // 也就是可以在dipatch()带调用then方法
        resolve(1111)
      },1000)
      })
    }

  }
