import Vue from 'vue'
import Vuex from 'vuex'
import todoApp from './modules/todoApp'

//use() 는 전역적으로 기능을 추가할 때 사용한다. &store 로 접근 가능하다.
Vue.use(Vuex);

export const store = new Vuex.Store({
  modules : {
    todoApp
  }
});
