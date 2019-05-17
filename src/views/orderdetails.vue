<template>
  <!-- 电影订单详情 -->
  <div class="box">
    <!-- 点单详情 -->
    <div class="header">
      <i class="iconfont icon-xiazai6" @click="getOut"></i>
      <span>订单详情</span>
      <span></span>
    </div>
    <!-- 取消订单 -->
    <div class="cancel">
      <span>订单取消</span>
      <img src="../imgs/quxiao.png" />
    </div>
    <!-- 联系人 -->
    <div class="contacts">
      <i class="iconfont icon-dianhuaben"></i>
      <p>{{ phone }}</p>
    </div>
    <!-- 电影 -->
    <div class="movies">
      <div class="information">
        <div class="movies-inn">
          <img :src="order.imgUrl" />
        </div>
        <div class="movies-name">
          <p>{{ order.filmName }}</p>
          <ul class="day">
            <li>{{order.watchtime | orderTime}}</li>
            <li>{{ order.address }}</li>
            <li>{{ order.seats }}</li>
          </ul>
          <p class="price">
            <span>￥</span>
            <span>{{ order.price/100 }}</span>
            <span>￥{{ order.originPrice/100 }}</span>
            <span>x{{ order.count }}</span>
          </p>
        </div>
      </div>
    </div>
    <!-- 金额 -->
    <div class="pay">
      <p class="commodity">
        <span>商品金额</span>
        <span>￥</span>
        <span>{{ order.finalPrice/100 }}</span>
      </p>
      <p class="real-pay">
        <span>实付</span>
        <span>￥</span>
        <span>{{ order.finalPrice/100 }}</span>
      </p>
    </div>
    <!-- 地址 -->
    <div class="address">
      <p>{{ order.cinemaInfo && order.cinemaInfo.name }}</p>
      <div class="phone">
        <p>{{ order.cinemaInfo && order.cinemaInfo.address }}</p>
        <i class="iconfont icon-dianhua1"></i>
      </div>
    </div>
    <!-- 订单编号 -->
    <div class="number">
      <div class="order-number">
        <span>订单编号</span>
        <span>2019 0419 1610 3783 801</span>
        <p>复制</p>
      </div>
      <div class="order-time">
        <span>下单时间</span>
        <span>2019-04-19 16:07:34</span>
      </div>
    </div>
    <!-- 重新购买 -->
    <div class="footer">
      <i class="iconfont icon-kefu"></i>
      <p>重新购买</p>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      order:[],
      phone:''
    }
  },

  created() {
    this.getList()
  },

  methods: {
    //获取数据
    getList(){
      //获取通过动态路由传过来的参数
      let filmId = this.$route.params.Id;
      //在浏览器中提取储存的sessionToken
      let sessionToken = localStorage.getItem('sessionToken');
      //在浏览器中提取储存的电话号码
      let phone = localStorage.getItem('phone');
      this.phone = phone;
      let url = `/order/getDetail?sessionToken=${sessionToken}&orderId=${filmId}`;
      this.axios.get(url).then(res =>{
        // console.log(res);
        this.order = res.data.order;
      // eslint-disable-next-line no-unused-vars
      }).catch(error=>{
      })
    },

    getOut() {
      this.$router.go(-1)
    }
  },
}
</script>
<style lang="css" scoped>
.box { background-color: #f4f4f4; height: 100%; }
.header { display: flex; justify-content: space-between; height: 44px; align-items: center; width: 100%; background-color: #fff; position: fixed; top: 0; }
.header>i { margin-left: 17px; }
.header>span:nth-child(2) { font-size: 17px; color: #191a1b; }

.cancel { height: 79px; background-image: url(../imgs/bg.png); display: flex; justify-content: space-around; align-items: center; margin-top: 44px; }
.cancel>span { color: #fff; }
.cancel>img { width: 85px; height: 67px; }

.contacts { display: flex; background: #fff; height: 49px; align-items: center; margin-bottom: 10px; }
.contacts>i { margin-left: 17px; font-size: 24px; color: #bdc0c5; margin-right: 10px; }
.contacts>p { font-size: 15px; color: #191a1b; }

.information { display: flex; background-color: #fff; height: 145px; align-items: center; }
.movies-inn { width: 85px; height: 117px; background-color: #f9f9f9; display: flex; align-items: center; margin-left: 16px; margin-right: 15px; }
.movies-inn>img { width: 100%; }
.movies-name { height: 110px; display: flex; flex-direction: column; justify-content: space-between; flex-grow: 1; }
.movies-name>p:first-child { font-size: 15px; color: #191a1b; }
.day { display: flex; flex-direction: column; height: 52px; justify-content: space-between; }
.day>li { font-size: 13px; color: #797d82; }
.price { display: flex; justify-content: space-between; align-items: center; }
.price>span:first-child { font-size: 10px; color: #ff5f16; }
.price>span:nth-child(2) { color: #ff5f16; margin-right: 5px; }
.price>span:nth-child(3) { font-size: 11px; color: #bdc0c5; flex-grow: 1; text-decoration: line-through; }
.price>span:last-child { font-size: 13px; color: #bdc0c5; margin-right: 17px; }

.pay { display: flex; flex-direction: column; height: 72px; background-color: #fff; margin: 10px 0; justify-content: space-around; padding: 0 17px; }
.commodity, .real-pay { display: flex; justify-content: space-between; align-items: center; }
.commodity>span:first-child { flex-grow: 1; font-size: 13px; color: #787c82; }
.commodity>span:nth-child(2) { font-size: 8px; color: #ff5f16; }
.commodity>span:last-child { font-size: 13px; color: #ff5f16; }
.real-pay>span:first-child { font-size: 15px; color: #191a1b; flex-grow: 1; }
.real-pay>span:nth-child(2) { font-size: 10px; color: #ff5f16; }
.real-pay>span:last-child { font-size: 15px; color: #ff5f16; }

.address { background-color: #fff; margin-bottom: 10px; height: 86px; display: flex; flex-direction: column; justify-content: center; padding: 0 25px 0 15px; }
.address>p { font-size: 13px; color: #191a1b; }
.phone { display: flex; justify-content: space-between; margin-top: 10px; }
.phone>p { font-size: 13px; color: #797d82; width: 283px; }
.phone>i { font-size: 22px; color: #797d82; }

.number { background: #fff; height: 64px; padding: 0 14px; display: flex; flex-direction: column; justify-content: center; margin-bottom: 190px; }
.order-number { display: flex; justify-content: space-between; }
.order-number>span:first-child, .order-time>span:first-child { font-size: 11px;color: #bdc0c5; margin-right: 10px; }
.order-number>span:nth-child(2), .order-time>span:last-child { font-size: 11px; color: #bdc0c5; flex-grow: 1; }
.order-number>p { width: 45px; height: 20px; font-size: 11px; color: #bdc0c5; border: 1px solid #ededed; text-align: center; line-height: 20px; border-radius: 4px; }

 .footer { width: 100%; background: #fff; position: fixed; bottom: 0; display: flex; justify-content: space-between; height: 50px; align-items: center; }
 .footer>i { margin-left: 17px; color: #3880b5; font-size: 23px; }
 .footer>p { margin-right: 17px; width: 85px; height: 33px; border: 1px solid #191a1b; text-align: center; line-height: 33px; border-radius: 2px; font-size: 11px; color: #191a1b; }
</style>
