import Vue from 'vue'
import Vuex from 'vuex'

//导入常量
// import { INCREMENT} from "./mutation-type";
//导入属性分离文件
import moduleA from "./modules/moduleA";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex)
const state = {
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

  }

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
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
