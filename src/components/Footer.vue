<template>
    <div class="footer">

        <router-link to="/film/nowplaying" :class="{ active : page === 'film' }">
            <div class="btn">
                <i class="iconfont icon-dianying"></i>
                <span>电影</span>
            </div>
        </router-link>

        <router-link to="/cinema" :class="{ active : page === 'cinema' }">
            <div class="btn">
                <i class="iconfont icon-yingyuana"></i>
                <span>影院</span>
            </div>
        </router-link>

        <router-link to="/pintuan" :class="{ active : page === 'pintuan'}">
            <div class="btn">
                <i class="iconfont icon-pintuandingdan"></i>
                <span>拼团</span>
            </div>
        </router-link>

        <router-link to="/my" :class="{ active : page === 'my'}">
            <div class="btn">
                <i class="iconfont icon-wode"></i>
                <span>我的</span>
            </div>
        </router-link>
    </div>
</template>

<script>
export default {
    props:{
        page:{
            type: String,
            required:true
        }
    }
}
</script>

<style lang="css" scoped>
    .footer{ 
        height: 50px;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;
        bottom: 0;
        border-top: 1px solid #ededed;
        background: #fff;
    }
    .btn{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    .active{
        color: orange;
    }
</style>
