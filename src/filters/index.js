/**
 * 配置全局的过滤器
 */
import Vue from 'vue';


Vue.filter('filterTime', function (time) {
    let date = new Date(time*1000);
      let Y = date.getFullYear();
      let M = date.getMonth() + 1;
      let D = date.getDate();
      M = M<10?'0' + M : M;
      D = D<10?'0' + D : D;
      return `${Y}-${M}-${D}`
  })


  Vue.filter('orderTime', function (time) {
    let date = new Date(time*1000);
      let Y = date.getFullYear();
      let M = date.getMonth() + 1;
      let D = date.getDate();
      let week = date.getDay();
      let H = date.getHours()
      let Min = date.getMinutes()
      M = M<10?'0' + M : M;
      D = D<10?'0' + D : D;
      let weeks = ['星期天','星期一','星期二','星期三','星期四','星期五','星期六',]
      return `${weeks[week]} ${Y}-${M}-${D} ${H}:${Min}`
  })
