<template>
    <!-- 登录页面 -->
    <div class="box">
        <div class="logo">
            <img src="@/imgs/logo.png" alt="">
        </div>
        <!-- 输入手机号与验证码 -->
        <div class="get-login">
            <p class="phone">
                <input v-model="phone" type="number" placeholder="手机号" oninput="if(value.length>11) value=value.slice(0,11)">
                <input type="button" :disabled="disab" :value="getCode" @click="obtain">
            </p>
            <p class="phone">
                <input v-model="smsCode" type="text" placeholder="验证码">
            </p>
        </div>
        <!-- 登录 -->
        <div class="login" @click="getList">
            <p class="login-inn">登录</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            phone:'',
            smsCode:'',
            getCode:'获取验证码',
            disab:false,
            sessionToken:''
        }
    },
    methods:{
        //登录事件
        getList(){
            //获取输入的手机号与验证码,用变量装起来
            let data = {
                phone : this.phone,
                smsCode : this.smsCode
            };
            //判断用户是否输入了手机号码
            if(this.phone === ''){
                //如果用户没有输入手机号码将不能登录并提醒用户输入手机号码
                alert('请输入手机号码')
                return;
                //使用手机号码的正则判断用户输入的手机号码格式是否正确
            } else if (!/^1[34578]\d{9}$/.test(this.phone)){
                //手机号码格式不正确将不能登录,并提醒客户输入正确的手机号码
                alert('手机号码不正确')
                return;
                //判断用户是否已经输入验证码
            } else if(this.smsCode === ''){
                //用户没有输入验证码将不能登录
                alert('请输入验证码')
                return;
                //如果用户以上都没有问题即可登录
            } else {
                //获取数据.并将上面获取的电话号码与验证码拼接在接口上面
                    this.axios.post('/user/loginBySmsCode',data).then(res =>{
                    // console.log(res)
                    //在登录时把用户的通行证提取出来
                    this.sessionToken = res.data.user.sessionToken
                    //登录是手机号码与验证码没问题,并后台返回code===666是即登录成功
                    if(res.data.code === '666'){
                        //在点击登录的同时并跳转页面至个人中心
                    this.$router.push('/my')
                    //在登陆成功时,修改登录状态(isLogin的状态),存入vuex
                    this.$store.commit('updateLogin',true)
                    //在登录成功时,提取用户登录的手机号码,并存入vuex
                    this.$store.commit('updatePhone',this.phone)
                    //在登录成功时,提取用户登录的通行证,并存入vuex
                    this.$store.commit('updatesessionToken',this.sessionToken)
                    }
                });
            }
        },
        //获取验证码事件
        obtain(){
            //提取手机号码
            let data = {
                phone: this.phone
            };
            //获取验证码时  验证手机号码是否正确
            //没有输入手机号码时将不能获取验证码,并提醒用户输入手机号码
            if(data.phone === '') {
                alert('号码为空')
                return;
                //验证用户输入的手机号码格式是否符合手机号码的正则
                //如果不正确将不能获取验证码,并提醒用户输入正确的电话号码
            } else if(!/^1[34578]\d{9}$/.test(this.phone)){
                alert('手机号码不正确')
                return;
            } else {
                //当用户输入的手机号码正确时将请求后台数据发送验证码
                this.axios.post('/user/getSmsCode',data).then(res =>{
                console.log(res)
                })
            }
            //点击获取验证码是将进行倒计时
            //设置在进行倒计时时,将不可在进行点击
            this.disab = true;
            //倒计时的时长
            this.getCode = 10;
            //设置倒计时的间隔
            let clock = window.setInterval(() =>{
                //将设定的倒计时的时长赋值给一个变量
                 let time =this.getCode
                 //当倒计时到0时
                if(time === 0){
                    //关闭倒计时
                    clearTimeout(clock)
                    //并显示重新获取验证码
                    this.getCode = '重新获取验证码'
                    //倒计时完将可再次点击获取验证码
                    this.disab = false
                }
                //设置倒计时的间隔
            },1000)
        }
    }
}
</script>

<style lang="css" scoped>

    .logo{
        display: flex;
        justify-content: center;
    }
    .logo>img{
        width: 59px;
        height: 59px;
        margin-top: 80px;
    }
    /* 输入手机号码 */
    .get-login{
        margin-top: 43px;
    }
    .phone{
        margin: 0 23px;
        display: flex;
        height: 56px;
        align-items: center;
        border-bottom: 1px solid #f5f5f5;
        justify-content: space-between;
    }
    .phone>input:first-child{
        flex-grow: 1;
        width: 100%;
    }
    .phone>input:last-child{
        width: 85px;
        background: #fff;
        font-size: 12px;
        color: gray;
    }
    /* 登录 */
    .login{
        display: flex;
        justify-content: center;
        margin-top: 72px;
    }
    .login-inn{
        width: 325px;
        height: 44px;
        background: #ff6017;
        border-radius: 4px;
        text-align: center;
        line-height: 44px;
        color: #fff;
    }
</style>
