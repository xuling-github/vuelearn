import Vue from 'vue'
import Vuex from 'vuex'

//导入常量
import { INCREMENT} from "./mutation-type";

Vue.use(Vuex)

const moduleA = {
  state: {
    //vuex会将module中的state在内部加到他的rootState中
    name: 'zhangshan'
  },
  mutations: {
    // commit方法同rootModule中的mutations属性，
    // vue会根据名字先在root的mutations中找，没有就来module中找
    updateName (state, payload){
      state.name = payload
    }

  },
  actions: {
    //异步操作,这里的context不再是store对象了，他里面的commit智慧提交到当前module中的mutations

    aUpdateName(context){
      setTimeout(() => {
        context.commit('updateName', 'wangwu')
      },1000)
    }

  },
  getters: {
    //用法同rootModule,在组件中的引用也相同
    fullName(state){
      return state.name + '1111'
    },
    fullName2(state,getters){
      return getters.fullName + '2222'
    },
    //如果我们还想在这里拿到rootstate中的数据，可以骄傲一个参数rootState
    fullName3(state,getters,rootState){
      return getters.fullName + '2222' + rootState.counter
    },

  }
}

const store = new Vuex.Store({
  state: {
    //数据。变量
    counter:1000,
    students: [
      {name:'kobe', age: 18, height: 1.67},
      {name:'kate', age: 25, height: 1.89},
      {name:'keven', age: 34, height: 1.54},
      {name:'Bob', age: 24, height: 1.76}
    ],
    info: {
      name: 'cate',
      age: 18
    }

  },
  mutations: {
    //方法,默认将state作为参数
    // increment(state){
    //   state.counter++
    // 官方推荐使用常量
    [INCREMENT](state){
      state.counter++
    },
    decrement(state){
      state.counter--
    },
    incrementCount(state, count){
      //1.普通提交获得的count就是传入的变量
      // state.counter += count

      // 特殊方式提交携带的符合就不单单是传入的变量而是一个对象了，
      // 所以在vuex实例mutatiton方法中要拿到这个变量需要使用count.count
      //console.log(count);
      state.counter += count.count
    },
    incrementStu(state, stu){
      state.students.push(stu)
    },
    updateInfo(state){
      // state属性响应式原理,必须原先state的info里面有name信息,这些信息被加入到了响应式系统中才能够修改
      state.info.name = 'carrie';
      // 不能通过索引值或者key修改，修改同过一些响应式方法进行修改
      // state.info['city'] = 'shandong'
      // vue实例有个set方法 如果修改的是对象的话 Vue.set(object,key,value)
      Vue.set(state.info, 'city', '山东')
      // 还有一个delete方法也是响应式的
      Vue.delete(state.info, 'age')

    }

  },
  actions: {
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

  },
  getters: {
    //在这里使用而不使用computed的好处是，所有组件都可以用,
    // 默认带有state参数,getters参数指代上一次的getters
    //年龄大于20的学生
    more20stu(state){
      return state.students.filter( s =>
        s.age > 20)
    },
    // 默认带有state参数,getters参数指代上一次的getters
    more20stulength(state,getters){
      return getters.more20stu.length
    },
    //构造函数，在计算属性的返回结果里返回一个函数，函数里面带参数
    moreAgeStu(state){
      return function (age) {
        return state.students.filter(s =>
          s.age > age)

      }
    }

  },
  modules: {
    a: moduleA

  }
})

export default store


// 对象解构 用于把对象中的属性像变量一样一个一个写出来
    // const obj = {
    //   name: 'carrie',
    //   age: 18,
    //   sex: '女'
    //  }
    //  const {name, age, sex} = obj
    // 这样就可以直接用 {name, age, sex} 当作obj写了
