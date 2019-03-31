import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    List: '',
    chapterId: '',
    linkPath: '',
    collect: []
  },
  mutations: {
    detail(state, payload) {
      state.List = payload
    },
    chapter(state, payload) {
      state.chapterId = payload
    },
    link(state, payload) {
      state.linkPath = payload
    },
    save(state, payload) {
      //对添加进来的对象根据title进行去重
      state.collect.push(payload)
      let arr = state.collect
      let obj = {}
      let newArr = arr.reduce((cur, next) => {
        obj[next.title] ? "" : obj[next.title] = true && cur.push(next);
        return cur;
      }, []) //设置cur默认类型为数组，并且初始值为空的数组
      state.collect = newArr
    }
  },
  actions: {
    detail(context, payload) {
      context.commit("detail", payload)
    },
    chapter(context, payload) {
      context.commit("chapter", payload)
    },
    link(context, payload) {
      context.commit("link", payload)
    },
    save(context, payload) {
      context.commit("save", payload)
    }
  }
});
