import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);



const state = {
    isLogin:localStorage.getItem('isLogin'),
    phone:localStorage.getItem('phone'),
    sessionToken:localStorage.getItem('sessionToken'),
    cityName:localStorage.getItem('cityName') || '深圳',
}

const getters = {
    isLogin:state => state.isLogin,
    phone:state => state.phone,
    cityName:state => state.cityName,
}


const mutations = {
    updateLogin(state,payload) {
        state.isLogin = payload
        localStorage.setItem('isLogin',payload)
    },
    updatePhone(state,payload) {
        state.phone = payload
        localStorage.setItem('phone',payload)
    },
    updatesessionToken(state,payload) {
        state.sessionToken = payload
        localStorage.setItem('sessionToken',payload)
    },
    updatecityName(state,payload) {
        state.cityName = payload
        localStorage.setItem('cityName',payload)
    },
}


// const actions = {
//     updateLogin(state,payload){
//         state.commit('updatedLogin',payload);
//     }
// }


const store = new Vuex.Store({
    state,
    getters,
    mutations,
    // actions
})

export default store;
