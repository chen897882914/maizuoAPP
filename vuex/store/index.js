/**
 * vuex配置
 */
import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
 //定义state

 const state = {
     isLogin : false,
     isOpen: false
 }

 //定义getters

 const getters = {
     //获取islogin的getter
    //  isLogin: (state) =>{
    //      return state.isLogin;
    //  },
     isLogin: state => state.isLogin,
     isOpen: (state) => {
         return state.isOpen
     }
 }

 //mutations,
 const mutations = {
     /**
      * 定义一个用来修改isLogin的mutation
      * @param {atste} 上面的state对象 
      * @param {payload} isLogin要修改的值  
      */
     updateLogin(state,payload) {
         //修改state里面isLogin的值
         state.isLogin = payload;
     }
     //其他mutation
 }

 //actions,用来调用mutations里的函数,
 const actions = {
     /**
      * 定义一个action用来commit(提交)mutation里的updateLogin
      */
     updateLogin(state,payload) {
        state.commit('updaleLogin',payload);
     }
 }

 const store = new Vuex.Store({
     state,
     getters,
     mutations,
     actions,
 })

 export default store;