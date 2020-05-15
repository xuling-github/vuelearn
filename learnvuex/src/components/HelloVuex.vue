<template>
  <div>
    <h2>----hellovuex内容-----</h2>
    <h2>{{$store.state.counter}}</h2>
<!--    这里也可以使用奈年龄大于20的函数-->
    <h2>{{$store.getters.more20stu}}</h2>
  </div>
</template>

<script>
    export default {
        name: "HelloVuex",
        props: {
          counter: Number
        }
    }
</script>

<style scoped>

</style>
