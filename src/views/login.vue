<template>
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
        getList(){
            let data = {
                phone : this.phone,
                smsCode : this.smsCode
            };
            if(this.phone === ''){
                alert('请输入手机号码')
                return;
            } else if (!/^1[34578]\d{9}$/.test(this.phone)){
                alert('手机号码不正确')
                return;
            } else if(this.smsCode === ''){
                alert('请输入验证码')
            } else {
                    this.axios.post('/user/loginBySmsCode',data).then(res =>{
                    // console.log(res)
                    this.sessionToken = res.data.user.sessionToken
                    if(res.data.code === '666'){
                    this.$router.push('/my')
                    this.$store.commit('updateLogin',true)
                    this.$store.commit('updatePhone',this.phone)
                    this.$store.commit('updatesessionToken',this.sessionToken)
                    }
                });
            }
        },
        obtain(){
            let data = {
                phone: this.phone
            };
            //获取验证码时  验证手机号码是否正确
            // this.phone = /^1[34578]\d{9}$/
            if(data.phone === '') {
                alert('号码为空')
                return;
            } else if(!/^1[34578]\d{9}$/.test(this.phone)){
                alert('手机号码不正确')
                return;
            } else {
                this.axios.post('/user/getSmsCode',data).then(res =>{
                console.log(res)
                })
            }
            //倒计时
            this.disab = true;
            this.getCode = 10;

            let clock = window.setInterval(() =>{
                 let time =this.getCode--
                if(time === 0){
                    clearTimeout(clock)
                    this.getCode = '重新获取验证码'
                    this.disab = false
                    
                    
                }
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
