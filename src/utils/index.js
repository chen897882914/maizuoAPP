import Vue from 'vue'
import {Toast} from 'vant';

Vue.use(Toast);

export const loading = () => {
    // eslint-disable-next-line no-unused-vars
    const toast = Toast.loading({
    mask: true,
    duration: 0,       // 持续展示 toast
    forbidClick: true, // 禁用背景点击
    loadingType: 'spinner',
    message: '数据加载中,请稍后'
    });
    // console.log(toast)
}






export const clear = () => {
    Toast.clear();
}