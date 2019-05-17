<template>
    <!-- 导航 -->
        <div class="received">
            <router-link to="/film/nowplaying" >
            <!-- 动态的绑定样式 通过路由来判断 -->
                <p class="size" :class="{tapActive : path === 'nowplaying'}">正在热映</p>
            </router-link>

            <router-link to="/film/soonplaying" >
                <p class="size" :class="{tapActive : path === 'soonplaying'}">即将热映</p>
            </router-link>
        </div>
</template>

<script>
export default {
    props:{
        path:{
            type:String,
            required:true
        }
    }
}
</script>

<style>
    .received { height: 50px; display: flex; justify-content: space-around; align-items: center; border-bottom: 1px solid #ededed;}
    .size{ font-size: 16px; height: 50px; line-height: 50px; }

    .tapActive{ color: orange;border-bottom: 2px solid orange;}
</style>
