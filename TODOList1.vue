<!--
 * @Author: your name
 * @Date: 2021-01-09 12:34:37
 * @LastEditTime: 2021-02-18 22:52:56
 * @LastEditors: Please set LastEditors
 * @Description:  theSpiritOfResistanceToDisease
 * @FilePath: \vue\TODOList1.vue
-->
<template>
  <div id="epidemicPreventionAndControl">
    <p>{{ title }}</p>
    <div>
        {{ theSpiritOfResistanceToDisease }}
        <span v-text="theSpiritOfResistanceToDiseaseHead"></span>
        <epidemicPreventionAndControl></epidemicPreventionAndControl>
        <div></div>
    </div>
  </div>
</template>
<script>
    import vue from './myTest/vue'
    const vm = new Vue({
        el: "#epidemicPreventionAndControl",
        data() {
            return {
                flag: false,
                title: "同志们、朋友们！",
                theSpiritOfResistanceToDisease: "在这场同严重疫情的殊死较量中，中国人民和中华民族以敢于斗争、敢于胜利的大无畏气概，铸就了",
                theSpiritOfResistanceToDiseaseHead: "生命至上、举国同心、舍身忘死、尊重科学、命运与共的伟大抗疫精神。"
            }
        }
    })
    Vue.component('epidemicPreventionAndControl',{
        template: ""
    })
    export default {
        
    }
    console.log("Actually,I'm just bored!");
</script>
<style lang="scss" scoped>
    div {
        text-align: center;
        font-size: 11;
        font-family: "simfang";
        span {
            clear: red;
            overflow: hidden;
            float: left;
        }
    }
</style>