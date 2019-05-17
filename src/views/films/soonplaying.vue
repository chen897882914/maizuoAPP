<template>
    <!-- 即将热映列表 -->
    <div class="box">
        <!-- 导入Tap栏组件 -->
        <tap path = 'soonplaying'></tap>
        <!-- Vant组件 作用为页面加载 -->
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh" class="gray">
            <!-- 即将热映的电影列表 -->
            <div class="center" v-for="item in films" :key="item.filmId">
                <img :src="item.poster" alt="">
                <ul class="content">
                    <li class="name">
                        <span>{{ item.name }}</span>
                        <span>{{ item.filmType }}</span>
                    </li>
                    <li>
                        <span>观众评分</span>
                        <span>{{ item.grade }}</span>
                    </li>
                    <li>主演：{{ item.actorStr }}</li>
                    <li>{{ item.nation }} | {{ item.runtime }}分钟</li>
                </ul>
                <p>预购</p>
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
        // 获取后台数据
        getList(){
            let url = '/film/getList?type=2';
            // 在获取到数据之前打开页面加载
            this.$loading()
            this.axios.get(url).then(res =>{
                // 在获取到数据之后关闭页面加载
                this.$clear()
                console.log(res)
                this.films = res.data.films
            }).catch(err =>{
                console.log(err)
                // 获取数据失败也将关闭页面加载
                this.$clear();
            })
        },
        // 下拉刷新列表
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
