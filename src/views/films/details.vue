<template>
  <div class="box">
    <div class="header">
      <img :src="dateils.poster" />
      <router-link to="/" class="iconfont icon-xiazai6 story"></router-link>
    </div>
    <!-- 介绍 -->
    <div class="center">
      <div class="basic">
        <p class="basic-name">
          <span>{{ dateils.name }}</span><span>{{ dateils.filmType }}</span><span>{{ Number(dateils.grade).toFixed(1) }}</span><span>分</span>
        </p>
        <p>{{ dateils.category }}</p>
        <p>{{ dateils.premiereAt | filterTime }}上映</p>
        <p>{{ dateils.nation }} | {{ dateils.runtime }}分钟</p>
      </div>
      <p>
       {{ dateils.synopsis }}
      </p>
    </div>
    <!-- 演职人员 -->
    <div class="performer">
      <p>演职人员</p>
      <div class="flex">
        <div class="performer-name" v-for="(item,index) in dateils.actors" :key="index">
          <img :src="item.avatarAddress" />
          <span>{{ item.name }}</span>
          <span>{{ item.role }}</span>
        </div>
      </div>
    </div>
    <!-- 剧照 -->
    <div class="stills">
      <p class="stills-inn">
        <span>剧照</span>
        <span>全部(5)</span>
        <i class="iconfont icon-52"></i>
      </p>
      <div class="picture-flex">
        <div class="picture">
          <img src="@/imgs/jiang.jpg" />
        </div>
        <div class="picture">
          <img src="@/imgs/jiang.jpg" />
        </div>
        <div class="picture">
          <img src="@/imgs/jiang.jpg" />
        </div>
        <div class="picture">
          <img src="@/imgs/jiang.jpg" />
        </div>
        <div class="picture">
          <img src="@/imgs/jiang.jpg" />
        </div>
      </div>
    </div>
    <!-- 选座购票 -->
    <p class="footer">选座购票</p>
  </div>
</template>
<script>
export default {
  data(){
    return{
      dateils:{}
    }
  },
  created(){
    this.getDetails()
  },
  methods:{
    getDetails(){
      let filmId = this.$route.params.Id;
      let url = `/film/getDetail?filmId=${filmId}`;
      this.axios.get(url).then(res=>{
        // console.log(res)
        this.dateils = res.data.film
      })
    },
  },
}
</script>
<style lang="css" scoped>
.box { background-color: #f5f5f5; width: 100%; }
.header { position: relative; }
.header>img { width: 100%; margin-top: -340px; }
.story { position: absolute; top: 10px; left: 10px; background: #fff; width: 25px; height: 25px; text-align: center; line-height: 25px; border-radius: 50%; background: rgba(0, 0, 0, 0.2); color: #fff; font-size: 10px; }

.center { background-color: #fff; padding: 20px 16px 0; }
.basic { height: 90px; display: flex; flex-direction: column; justify-content: space-between; margin-bottom: 20px; }
.basic>p { font-size: 13px; color: #797d82; }
.basic-name { display: flex; justify-content: space-between; align-items: center; }
.basic-name>span:first-child { font-size: 18px; color: #191a1b; }
.basic-name>span:nth-child(2) { font-size: 9px; color: #fff; background-color: #d2d6dc; margin-left: 8px; }
.basic-name>span:nth-child(3) { font-size: 18px; color: #ffb232; font-style: italic; flex-grow: 1; text-align: right; }
.basic-name>span:last-child { font-size: 10px; color: #ffb232; margin-left: 3px; }
.center>p { font-size: 13px; color: #797d82; padding-bottom: 10px;}

.performer { margin-top: 10px; background-color: #fff; width: 100%; overflow-x: hidden; }
.performer>p { font-size: 16px; color: #191a1b; height: 56px; line-height: 56px; margin-left: 16px; }

.flex { display: flex; overflow-x: scroll; margin-right: 10px;}
.performer-name { display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 85px; margin-left: 10px; }
.performer-name>img { width: 85px; height: 85px; }
.performer-name>span:nth-child(2) { font-size: 12px; color: #191a1b; text-align: center; }
.performer-name>span:last-child { font-size: 10px; color: #797d82; }

.stills { background-color: #fff; margin-top: 10px; }
.stills-inn { display: flex; justify-content: space-between; height: 62px; align-items: center; padding: 0 15px; }
.stills-inn>span:first-child { flex-grow: 1; font-size: 16px; color: #191a1b; }
.stills-inn>span:nth-child(2),.stills-inn>i { font-size: 13px; color: #797d82 ; }

.picture-flex { display: flex; overflow-y: hidden; margin-right: 10px; margin-bottom: 60px;}
.picture { width: 150px; height: 100px; margin-left: 10px; }
.picture>img { width: 150px; height: 100px;}

.footer { width: 100%; position: fixed; bottom: 0; background-color: #ff5f16; height: 49px; text-align: center; line-height: 49px; color: #fff;}
</style>
