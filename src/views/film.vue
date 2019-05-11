<template>
    <div class="box">
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000" class="swipe">
            <van-swipe-item v-for="(image, index) in banners" :key="index">
                <img :src="image.imgUrl" style="width:100%;" />
            </van-swipe-item>
        </van-swipe>
        <router-link to="/city" class="story">{{ cityName }}<i class="iconfont icon-jiantouxia"></i></router-link>
        
        <router-view></router-view>
        <Footer page="film"></Footer>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Footer  from '@/components/Footer';
export default {
    components:{
        Footer
    },
    data(){
        return{
            banners:[],
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            let url = '/film/getList?';
            this.axios.get(url).then(res =>{
                // console.log('res',res)
                this.banners = res.data.banners
            })
        }
    },
    computed:{
        ...mapGetters(['cityName'])
    }
}
</script>

<style lang="css" scoped>
    .box { position: relative; width: 100%; }

    .swipe{ height: 100%; }

    .story { 
        height: 30px; 
        min-width: 50px; 
        background: #fff; 
        position: absolute; 
        top: 18px; left: 7px; 
        font-size: 13px; 
        border-radius: 15px; 
        text-align: center;
        line-height: 30px; 
        background: rgba(0, 0, 0, 0.2); 
        color: #fff; 
    }

    .active{
        color: orange;
        border-bottom: 2px solid orange;
        
    }
</style>
