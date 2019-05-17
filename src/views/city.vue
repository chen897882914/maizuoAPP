<template>
<!-- 城市页面 -->
    <div class="box">
        <div class="header">
            <div class="name">
                <i class="iconfont icon-cha" @click="router"></i>
                <p class="current">
                    <span>当前城市</span>
                    <i class="iconfont icon-hengxian"><span class="fs16">{{ cityName }}</span></i>
                </p>
                <span></span>
            </div>
            <div class="search">
                <div class="search-inn">
                    <i class="iconfont icon-sousuo"></i>
                    <input type="text" placeholder="输入城市名或拼音">
                </div>
            </div>
        </div>
        <div class="location">
            <div class="location-inn">
                <span>GPS定位你所在城市</span>
                <p>定位失败</p>
            </div>
            <div class="hot">
                <span>热门城市</span>
                <div class="hot-city">
                    <p v-for="item in hotCity" :key="item.cityId" @click="pageAll(item.name)">{{ item.name }}</p>
                </div>
            </div>
        </div>
        <div class="city-list">
            <!-- 城市列表 -->
            <div class="city" v-for="(letter,index) in letters" :key="index">
                <p >{{ letter.toUpperCase() }}</p>
                <ul class="city-name">
                    <li v-for="city in allCityList(letter)" :key="city.cityId" @click="changeAll(city.name)">{{ city.name }}</li>
                </ul>
            </div>
        </div>
        <div class="right">
            <span>A</span>
            <span>B</span>
            <span>C</span>
            <span>D</span>
            <span>E</span>
            <span>F</span>
            <span>G</span>
            <span>H</span>
            <span>I</span>
            <span>J</span>
            <span>K</span>
            <span>M</span>
            <span>N</span>
            <span>L</span>
            <span>O</span>
            <span>P</span>
            <span>Q</span>
            <span>R</span>
            <span>S</span>
            <span>T</span>
            <span>U</span>
            <span>V</span>
            <span>W</span>
            <span>X</span>
            <span>Y</span>
            <span>Z</span>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return{
            cityList:[],
        }
    },
    created(){
        this.getCityList();
    },
    methods:{
        router(){
            this.$router.go(-1);
            // history.back()
        },
        //获取数据
        getCityList(){
            let url = '/city/getList';
            this.axios.get(url).then(res =>{
                // console.log(res)
                this.cityList = res.data.cityList
            })
        },
        //渲染首字母所对应的城市
        allCityList(letter){
            let list = this.cityList.filter(city =>{
                //匹配城市拼音首字母与letter相对应的城市
                return city.pinyin[0] === letter;
            });
            return list;
        },

        //点击热门城市
        pageAll(name){
            this.$store.commit('updatecityName',name)
            this.$router.go(-1)
        },
        //点击所有城市
        changeAll(name){
            this.$store.commit('updatecityName',name)
            this.$router.go(-1)
        }
    },
    //渲染热门城市
    computed:{
        hotCity(){
            let list = this.cityList.filter(city =>{
                return city.isHot === 1;
            });
            return list;
        },
        //获取首字母
        letters(){
            let firstList = this.cityList.map(city =>{
                return city.pinyin[0];
            });
            //去重
            let set = new Set(firstList);
            // console.log(set)
            //排序
            let newSet = [...set].sort();
            // console.log(newSet)
            return newSet
        },
        ...mapGetters(['cityName'])
    } 
}
</script>

<style lang="css" scoped>
    .header{
        width: 100%;
        background: #fff;
        position: fixed;
        top: 0;
    }
    .name{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 44px;
        padding: 0 11px;
    }
    .name>i:first-child{
        font-size: 19px;
        color: #191a1b;
    }
    .current>i{
        font-size: 10px;
        margin-left: 5px;
    }
    /* 搜索 */
    .search{
        height: 50px;
        background: #f4f4f4;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search-inn{
        width: 100%;
        background: #fff;
        height: 32px;
        margin: 0 15px;
        display: flex;
        align-items: center;
        padding-left: 10px;
        border-radius: 3px;
    }
    .search-inn>input{
        flex-grow: 1;
        margin-left: 10px;
    }
    /* GPS定位 */
    .location{
        padding-top: 20px;
        margin-top: 94px;
    }
    .location-inn>span{
        font-size: 13px;
        color: #797d82;
        margin-left: 15px;
    }
    .location-inn>p{
        margin-top: 13px;
        font-size: 14px;
        background: #f4f4f4;
        height: 30px;
        line-height: 30px;
        width: 33.3%;
        text-align: center;
        margin-left: 22px;
        border-radius: 3px;
        color: #191a1b;
    }
    /* 热门城市 */
    .hot{
        margin-top: 19px;
    }
    .hot>span{
        font-size: 13px;
        color: #797d82;
        margin-left: 15px;
    }
    .hot-city{
        display: flex;
        flex-flow: wrap row;
        margin-top: 10px;
        padding: 0 17px 0 15px;
        justify-content: space-between;
    }
    .hot-city>p{
        width: 27%;
        height: 30px;
        background: #f4f4f4;
        margin: 0 8px;
        text-align: center;
        line-height: 30px;
        margin-bottom: 15px;
    }

    /* 城市列表 */
    .city>p{
        background: #f4f4f4;
        height: 28px;
        line-height: 28px;
        padding-left: 17px;
        color: #797d82;
        font-size: 10px;
    }
    .city-name{
        margin: 0 19px;
    }
    .city-name>li{
        height: 48px;
        border-bottom: 1px solid #ededed;
        line-height: 48px;
        font-size: 14px;
        color: #191a1b;
    }
    /* 右边字母 */
    .right{
        display: flex;
        flex-direction: column;
        position: fixed;
        right: 0;
        top: 190px;
    }
    .right>span{
        text-align: center;
        font-size: 11px;
        color: #191a1b;
    }


    .fs16{
        font-size: 16px;
        margin-left: 5px;
    }
</style>
