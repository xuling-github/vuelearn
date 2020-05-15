export default {
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

  }
