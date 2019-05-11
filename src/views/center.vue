<template>
    <div class="box">
        <div class="header">
            <div class="logo">
                <img src="@/imgs/login.jpg" alt="">
            </div>

            <router-link to="/login">
                <span class="liji">131****6041</span>
            </router-link>
        </div>
        <div class="center">
            <div class="center-inn">
                <i class="iconfont icon-dingdan2"></i>
                <span>电影订单</span>
            </div>
            <div class="center-inn">
                <i class="iconfont icon-ziyuan1"></i>
                <span>拼团订单</span>
            </div>
        </div>
        <div class="business">
            <div class="business-inn">
                <i class="iconfont icon-qia"></i>
                <span>卖座卡</span>
                <i class="iconfont icon-52"></i>
            </div>
            <div class="business-inn">
                <i class="iconfont icon-hongbao"></i>
                <span>组合红包</span>
                <i class="iconfont icon-52"></i>
            </div>
            <div class="business-inn">
                <i class="iconfont icon-yue"></i>
                <span>余额</span>
                <span class="pay">x0</span>
                <i class="iconfont icon-52"></i>
            </div>
            
            <router-link to="/setup">
                <div class="business-inn">
                    <i class="iconfont icon-shezhi"></i>
                    <span>设置</span>
                    <i class="iconfont icon-52"></i>
                </div>
            </router-link>
        </div>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from '@/components/Footer'
export default {
    components:{
        Footer
    }
}
</script>

<style lang="css" scoped>
    .box{
        background: #f4f4f4;
        height: 667px;
    }
    .header{
        height: 156px;
        background-image: url("../imgs/header-bg.png");
        background-repeat: no-repeat;
        background-size: 100%;
        display: flex;
        align-items: center;
    }
    .logo>img{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-left: 23px;
        border: 2px solid #fff;
        margin-right: 20px;
        display: block;
    }
    .liji {
        color: #fff;
        font-size: 16px;
    }

    .center{
        height: 80px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: #fff;
        margin-bottom: 10px;
    }
    .center-inn{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .business{
        background: #fff;
    }
    .business-inn{
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ededed;
        padding: 0 16px;
    }
    .business-inn>i:first-child{
        font-size: 20px;
        margin-right: 17px;
    }
    .business-inn>span:nth-child(2){
        font-size: 15px;
        color: #191a1b;
        flex-grow: 1;
    }
    .business-inn>i:last-child{
        font-size: 10px;
    }
    .pay{
        font-size: 15px;
        color: #797d82;
        margin-right: 15px;
    }
</style>
