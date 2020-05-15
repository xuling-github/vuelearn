import {INCREMENT} from "./mutation-type";
import Vue from "vue";

export default {
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

  }
