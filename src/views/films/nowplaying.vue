<template>
    <!-- 正在热映列表 -->
    <div class="box">
        <Tap path = 'nowplaying'></Tap>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="gray">
            
            <div v-for="item in films" :key="item.filmId">
                <router-link :to="`/details/${item.filmId}`" class="center">
                    <img :src="item.poster" alt="">
                    <ul class="content">
                        <li class="name">
                            <span>{{item.name}}</span>
                            <span>{{item.filmType}}</span>
                        </li>
                        <li>
                            <span>观众评分</span>
                            <span>{{item.grade}}</span>
                        </li>
                        <li>主演:{{ item.actorStr }}</li>
                        <li>{{item.nation}} | {{item.runtime}}分钟</li>
                    </ul>
                    <p>购票</p>
                </router-link>
            </div>
        </van-pull-refresh>
    </div>
</template>

<script>
import Tap from './Tap'
export default {
    components:{
        Tap
    },
    data(){
        return{
            films:[],
            isLoading: false
        }
    },
    created(){
        this.getList()
    },
    methods:{
        getList(){
            let url = "/film/getList?type=1";
            this.$loading()
            this.axios.get(url).then(res=>{
                this.$clear();
                // console.log(res);
                this.films = res.data.films;
            // eslint-disable-next-line no-unused-vars
            }).catch(err =>{
                this.$clear();
            })
        },
        onRefresh() {
        setTimeout(() => {
            this.$toast('刷新成功');
            this.isLoading = false;
            this.count++;
        }, 500);
        }
    }
}
</script>

<style lang="css" scoped>
    .gray {
        background: #f4f4f4;
    }
    .box {
        margin-bottom: 50px;
    }

    .center{
        display: flex;
        height: 124px;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #ededed;
        background: #fff;
    }

    .center>img {
        width: 66px;
        height: 91px;
        margin-left: 17px;
    }

    .content{
        flex-grow: 1;
        height: 77px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        margin-left: 10px;
    }
    
    .content>li{
        font-size: 13px;
        color: #797d82;
    }

    .name>span:first-child{
        font-size: 16px;
        color: #191a1b;
    }

    .name>span:last-child{
        font-size: 9px;
        color: #fff;
        background: #d2d6dc;
        margin-left: 5px;
    }

    .content>li:nth-child(3){
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 210px;
    }

    .center>p{
        width: 50px;
        height: 27px;
        text-align: center;
        line-height: 27px;
        border: 1px solid #ff5f16;
        color: #ff5f16;
        border-radius: 4px;
        margin-right: 16px;
    }
</style>
