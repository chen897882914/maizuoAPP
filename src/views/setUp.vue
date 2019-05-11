<template>
    <div class="box">
        <div class="name">
            <i class="iconfont icon-xiazai6" @click="getTop"></i>
            <span>设置</span>
            <span></span>
        </div>
        <!-- ID -->
        <div class="num-name">
            <span>账号ID</span>
            <span class="right">230333613</span>
        </div>
        <!-- 密码 -->
        <div class="pass">
            <p class="pass-inn">
                <span>登录密码</span>
                <span class="right">未设置</span>
                <i class="iconfont icon-52"></i>
            </p>
            <p class="pass-inn">
                <span>安全密码</span>
                <span class="right">未设置</span>
                <i class="iconfont icon-52"></i>
            </p>
        </div>
        <!-- 版本 -->
        <div class="pass">
            <p class="pass-inn">
                <span>软件版本</span>
                <i class="iconfont icon-52"></i>
            </p>
            <p class="pass-inn">
                <span>意见反馈</span>
                <i class="iconfont icon-52"></i>
            </p>
        </div>
        <!-- 清除缓存 -->
        <div class="num-name">
            <span>清除缓存</span>
            <span class="right">0.1KB</span>
        </div>
        <!-- 退出登录 -->
        <div class="sign-out" @click="loginOut">退出登录</div>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        loginOut(){
            this.$store.commit('updateLogin',false);
            this.$store.commit('updatePhone','');
            this.$router.push('/my');
            localStorage.clear();
        },
        
        getTop(){
            this.$router.go(-1)
        }
    }
}
</script>

<style lang="css" scoped>
    .box {
        background: #f4f4f4;
        height: 655px;
    }
    .name{
        display: flex;
        height: 45px;
        align-items: center;
        justify-content: space-between;
        padding: 0 16px;
        background: #fff;
    }
    /* 账号 */
    .num-name{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        margin-top: 10px;
        background: #fff;
        padding: 0 16px;
    }
    .right{
        color: #797d82;
        font-size: 12px;
    }
    /* 密码 */
    .pass{
        margin-top: 10px;
        background: #fff;
        padding: 0 16px;
    }
    .pass-inn{
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #f5f5f5;
    }
    .pass-inn>span:first-child{
        flex-grow: 1;
    }
    .pass-inn>i:last-child{
        font-size: 10px;
        margin-left: 15px;
    }
    /* 退出登录 */
    .sign-out{
        position: fixed;
        bottom: 0;
        width: 100%;
        background: #fff;
        text-align: center;
        height: 50px;
        line-height: 50px;
        color: #ff5f16;
    }
</style>
