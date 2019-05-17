<template>
    <!-- 影院页面 -->
    <div class="box">
        <div class="header">
            <div class="header-inn">
                <router-link to="/city" class="header-left">
                    <span>{{ cityName }}</span>
                    <i class="iconfont icon-jiantouxia"></i>
                </router-link>
                <span class="name">影院</span>
                <i class="iconfont icon-sousuo header-right"></i>
            </div>
            <div class="record">
                <p class="record-inn" @click="showTime">
                    <span  :class="{activeAll : isActiveAll}">{{region}}
                        <i class="iconfont icon-jiantouxia"></i>
                    </span>
                </p>
                <p class="record-inn">
                    <span>APP订票</span>
                    <i class="iconfont icon-jiantouxia"></i>
                </p>
                <p class="record-inn">
                    <span>最近去过</span>
                    <i class="iconfont icon-jiantouxia"></i>
                </p>
            </div>
            <div class="list" v-show="show">
                <div class="bargba">
                    <div class="item">
                        <p @click="change(-1)"><span class="item-inn" :class="{active : isActive === -1}">全城</span></p>
                        <p v-for="(item,index) in regionList" :key="index" @click="change(index,item)" ><span :class="{active : index === isActive}" class="item-inn">{{ item }}</span></p>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 影院列表 -->
        <div class="center">
            <ul class="cinema-name" v-for="item in allList" :key="item.cinemaId">
                <li class="cinema-top">
                    <span>{{ item.name }}</span>
                    <span>￥</span>
                    <span>{{ (item.lowPrice)/100 }}</span>
                    <span>起</span>
                </li>
                <li class="cinema-bottom">
                    <span>{{ item.address }}</span>
                    <span>{{ (item.Distance).toFixed(2) }}KM</span>
                </li>
            </ul>
        </div>
        <Footer page="cinema"></Footer>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import Footer from '@/components/Footer';
export default {
    components:{
        Footer,
    },
    data(){
        return{
            show:false,
            isActiveAll:false,
            isActive:-1,
            cinemaList:[],
            allList:[],
            region:'全城',
        }
    },
    created() {
        this.getList()
    },
    methods:{
        //获取数据
        getList(){
            let url = '/cinema/getList';
            //在获取数据前打开页面加载
            this.$loading();
            this.axios.get(url).then(res =>{
                //在获取完数据后关闭页面加载
                this.$clear();
                // console.log(res)
            this.cinemaList = res.data.cinemas;
            this.allList = res.data.cinemas;
            // eslint-disable-next-line no-unused-vars
            }).catch(err =>{
                this.$clear();
            })
        },
        showTime(){
            this.show = !this.show;
            this.isActiveAll = !this.isActiveAll;
        },

        change(index,name){
            //隐藏区域列表
            this.show = false;
            //点击区域高亮
            this.isActive = index;
            this.isActiveAll = false;
            //切换区域所对应的影院
            if(index === -1) {
                //如果index等于-1时,将所有城市赋值给allList
                this.allList = this.cinemaList;
                //区域区将显示全城
                this.region = '全城';
            } else {
                //否则将全部城市过滤出来
                this.allList = this.cinemaList.filter(cinema =>{
                //区域区将显示所点击的区域
                this.region = name;
                //返回影院区域名与点击的区域名相同的所有影院
                return cinema.districtName === name;
                })
            }
            

        }
    },
    computed:{
        ...mapGetters(['cityName']),
        regionList(){
            let list = this.cinemaList.map(region =>{
                return region.districtName;
            });
            let set = new Set(list);
            let newSet = [...set];
            // console.log(newSet)
            return newSet;
        }
    }
}
</script>

<style lang="css" scoped>
    .header{
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 2;
    }
    .header-inn{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 45px;
        border-bottom: 1px solid #ededed;
        background: #fff;
    }
    .header-left{
        margin-left: 16px;
        font-size: 13px;
        color: #191a1b;
    }
    .header-left>i{
        font-size: 10px;
        margin-left: 5px;
    }

    .name{
        color: #191a1b;
        font-size: 17px;
    }

    .header-right{
        margin-right: 16px;
        font-size: 22px;
    }

    .record{
        display: flex;
        justify-content: space-around;
        height: 50px;
        align-items: center;
        border-bottom: 1px solid #ededed;
        background: #fff;
        
    }
    .record-inn>span{
        font-size: 14px;
        /* color: #191a1b; */
    }
    .record-inn>i{
        font-size: 10px;
        margin-left: 5px;
    }

    .center{
        margin-top: 97px;
        padding: 0 22px 0 16px;
        margin-bottom: 51px;
        background: #fff;
    }

    .cinema-name{
        height: 75px;
        border-bottom: 1px solid #ededed;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .cinema-top{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .cinema-top>span{
        color: #ff5f16;
    }
    .cinema-top>span:first-child{
        flex-grow: 1;
        font-size: 15px;
        color: #191a1b;
    }
    .cinema-top>span:nth-child(2){
        font-size: 11px;
    }
    .cinema-top>span:nth-child(3){
        font-size: 15px;
    }
    .cinema-top>span:last-child{
        font-size: 10px;
    }

    .cinema-bottom{
        display: flex;
        justify-content: space-between;
    }
    .cinema-bottom>span:first-child{
        font-size: 12px;
        color: #797d82;
        width: 212px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .cinema-bottom>span:last-child{
        font-size: 11px;
        color: #797d82;
    }


    .bargba{
        width: 100%;
        height: 1000px;
        background: rgba(0, 0, 0, 0.1)
    }
    .item { 
        display: flex;
        flex-flow: wrap row;
        background: #fff;
        padding: 5px 10px 0;
        
    }

    .item>p {
        width: 21%;
        text-align: center;
        margin: 5px;
        border: 1px solid #d2d6dc80;
        height: 30px;
        line-height: 30px;
        color: #797d82;
        border-radius: 3px;
        font-size: 12px;
    }

    .active{
        color: #ff5f16;
        border: 1px solid #ff5f16;
    }
    .item-inn{
        width: 100%;
        height: 30px;
        display: block;
        border-radius: 3px;
    }
    .activeAll {
        color: #ff5f16;
    }
</style>
