import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

const state = {
    isLogin:false
}

const getters = {
    isLogin:state => state.isLogin
}

const mutations = {
    uodateLogin(state,payload){
        state.isLogin = payload
    }
}

// const actions = {
//     updateLogin(state,payload){
//         state.commit('updateLogin',payload)
//     }
// }

const soter = {
    state,
    getters,
    mutations,
    // actions
}

export default soter