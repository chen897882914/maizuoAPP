<template>
    <!-- 电影订单列表 -->
    <div class="box">
        <div class="name">
            <i class="iconfont icon-xiazai6" @click="topOut"></i>
            <span>电影订单</span>
            <span></span>
        </div>

        <div class="mt45" v-for="item in orderList" :key="item.orderId">
            <!-- 电影 -->
            <router-link :to="`/orderdetails/${item.orderId}`">
            <div class="mover">
                <div class="mover-name">
                    <div class="mover-img">
                        <img :src="item.imgUrl" alt="">
                    </div>
                    <ul class="infor">
                        <li>{{ item.filmName }}</li>
                        <li>{{ item.watchtime | orderTime }}</li>
                        <li class="price">
                            <span>￥</span>
                            <span>{{ item.price/100 }}</span>
                            <span>￥{{ item.originPrice/100 }}</span>
                            <span>x{{ item.count }}</span>
                        </li>
                    </ul>
                </div>
            </div>
            </router-link>
            <!-- 件数 价格 -->
            <div class="pay">
                <span>共1件商品</span>
                <span>实付</span>
                <span>￥</span>
                <span>38</span>
            </div>
            <!-- 购买 -->
            <div class="purchase">
                <span>订单取消</span>
                <p>重新购买</p>
            </div>
            
        </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            orderList:[]
        }
    },
    created() {
        this.getList()
    },
    methods:{
        //获取数据
        getList(){
            let sessionToken = localStorage.getItem('sessionToken')
            // console.log(sessionToken)
            let url = `/order/getList?sessionToken=${sessionToken}`;
            this.axios.get(url).then(res =>{
                // console.log(res)
                this.orderList = res.data.orders
            })
        },
        topOut() {
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="css" scoped>
    .box{
        background: #f4f4f4;
    }

    .name{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 44px;
        border-bottom: 1px solid #f5f5f5;
        background: #fff;
        position: fixed;
        top: 0;
        width: 100%;
    }
    .name>i:first-child{
        margin-left: 16px;
    }
    /* 电影 */
    .mt45{
        margin-top: 45px;
    }
    .mover{
        background: #fff;
    }
    .mover-name{
        border-bottom: 1px solid #f5f5f5;
        display: flex;
        height: 100px;
        align-items: center;
    }
    .mover-img{
        height: 71px;
        width: 52px;
        display: flex; 
        align-items: center;
        background: #f9f9f9;
        margin-left: 15px;
        margin-right: 15px;
    }
    .mover-img>img{
        width: 100%;
    }
    .infor{
        height: 65px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-grow: 1;
    }
    .infor>li:first-child{
        font-size: 15px;
        color: #191a1b;
    }
    .infor>li:nth-child(2){
        font-size: 13px;
        color: #797d82;
    }
    .price{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .price>span:first-child{
        font-size: 11px;
        color: #ff5f16;
    }
    .price>span:nth-child(2){
        font-size: 15px;
        color: #ff5f16;
    }
    .price>span:nth-child(3){
        font-size: 11px;
        color: #bdc0c5;
        flex-grow: 1;
        text-decoration: line-through;
        margin-left: 5px;
    }
    .price>span:last-child{
        font-size: 13px;
        color: #bdc0c5;
        margin-right: 17px;
    }
    /* 件数 价格 */
    .pay{
        display: flex;
        justify-content: flex-end;
        height: 40px;
        align-items: center;
        border-bottom: 1px solid #f5f5f5;
        padding-right: 17px;
        background: #fff;
    }
    .pay>span:first-child{
        font-size: 13px;
        color: #191a1b;
        margin-right: 20px;
    }
    .pay>span:nth-child(2){
        font-size: 13px;
        color: #191a1b;
    }
    .pay>span:nth-child(3){
        font-size: 11px;
        color: #ff5f16;
    }
    .pay>span:last-child{
        font-size: 15px;
        color: #ff5f16;
    }
    /* 购买 */
    .purchase{
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 15px;
        background: #fff;
        margin-bottom: 10px;
    }
    .purchase>span{
        font-size: 13px;
        color: #bdc0c5;
    }
    .purchase>p{
        width: 85px;
        height: 33px;
        border: 1px solid #191a1b;
        border-radius: 3px;
        text-align: center;
        line-height: 33px;
        font-size: 11px;
        color: #191a1b;
    }
</style>
