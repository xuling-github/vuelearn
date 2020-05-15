<template>
  <div id="app">
    <h2>-----modules属性的用法------</h2>
    <p>moduleA中的内容</p>
    <h2>{{$store.state.a.name}}</h2>
    <p>修改名字按钮</p>
    <button @click="upgradeName">修改名字</button>
    <p>在名字后面加1111</p>
    <h2>{{$store.getters.fullName}}</h2>
    <p>在上面的名字后面再加2222</p>
    <h2>{{$store.getters.fullName2}}</h2>
    <p>在上面的名字后面再加上rootState中的count</p>
    <h2>{{$store.getters.fullName3}}</h2>
    <p>异步修改名字按钮</p>
    <button @click="asycUpdateName">异步修改名字</button>
    <h2>-----state属性响应式原理------</h2>
    <h2>{{$store.state.info}}</h2>
    <p>修改信息</p>
<!--    <button @click="updateInfo">修改信息</button>-->
    <h2>-----ations属性多用于操作异步函数------</h2>
    <p>异步修改信息</p>
    <button @click="updateInfo">异步修改信息</button>
    <h2>-----mutation属性------</h2>
    <h2>{{message}}</h2>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addtion">+</button>
    <button @click="subtraction">-</button>
    <p>---------mutation携带参数，载荷Payload--------</p>
    <p>数量加传入参数数量的按钮</p>
    <button @click="addCount(5)">加按钮</button>
    <p>增加学生</p>
    <button @click="addStudent">增加学生</button>
    <h2>------getters属性类似于计算属性用于一些需要变化的数据的方法演示------</h2>
    <p>显示年龄大于20的学生</p>
    <h2>{{$store.getters.more20stu}}</h2>
    <p>显示年龄大于20的学生的个数</p>
    <h2>{{$store.getters.more20stulength}}</h2>
    <p>显示我们大于我们自己输入年龄的学生</p>
    <h2>{{$store.getters.moreAgeStu(8)}}</h2>
    <hello-vuex :counter="counter"></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
// 导入非default注意要用对象
import { INCREMENT } from "./store/mutation-type";

export default {
  name: 'App',
  components: {
    HelloVuex,
  },
  data(){
    return {
      message: '我是App组件',
      counter: 0
    }
  },
  methods: {
    addtion(){
      // this.$store.commit('increment')
      // 使用常量避免跟vuex中定义的方法名不一致
      this.$store.commit(INCREMENT)
    },
    subtraction(){
      this.$store.commit('decrement')
    },
    addCount(count){
      //携带的参数叫做vuex的载荷，叫做Payload,也就是我们在标签传入的位置参数
      //1.普通提交风格
      this.$store.commit('incrementCount', count)
      //2.特色提交风格
      this.$store.commit({
        type:'incrementCount',
        // 这个时候提交携带的符合就不单单是传入的变量而是一个payload对象了，
        // 所以在vuex实例mutatiton方法中要拿到这个变量需要使用payload.count
        count
      })
    },
    addStudent(){
      const stu = {name:'wulei', age:21, height: 1.78}
      this.$store.commit('incrementStu', stu)
    },
    updateInfo(){
      //this.$store.commit('updateInfo')
      // this.$store.dispatch('aUpdateInfo', '我是payload')
      // this.$store.dispatch('aUpdateInfo',{
      //   message: "我是payload",
      //   success: () => {
      //     console.log("里面的工作完成了");
      //   }
      // })
      this.$store
        .dispatch('aUpdateInfo', '我是携带的信息')
        .then(res => {
        console.log("里面完成了");
        console.log(res);
      })
    },
    upgradeName(){
      this.$store.commit('updateName', 'lisi')
    },
    asycUpdateName(){
      this.$store.dispatch('aUpdateName')
    }
  }
}
</script>

<style>

</style>
