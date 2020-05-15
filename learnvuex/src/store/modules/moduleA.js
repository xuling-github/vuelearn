export default {
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
