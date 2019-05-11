<template>
    <div>
        父组件 我说
        <son list="李彬你真黑" :msg='msg'></son>
    </div>
</template>

<script>
import son from './son'
export default {
    components:{
        son
    },
    data(){
        return{
            msg:'李彬你好胖'
        }
    }
}
</script>

<style>

</style>
