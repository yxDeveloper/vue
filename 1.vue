<!--
 * @Author: your name
 * @Date: 2021-02-22 00:00:32
 * @LastEditTime: 2021-03-23 22:38:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\1.vue
-->
<template>
    <div>
        <ul v-for="item in items" :key="item.id">
            {{ item }}
        </ul>
    </div>
</template>

<script lang="ts">
// import { defineComponent } from 'vue';

// export default defineComponent({
//     setup () {
//         defineComponent(){
            
//         }

//         return {}
//     }
// })
// import vue for "./myTest/vue.js"
//     data() {
//                 return {
//                     key: value,
//                     name: vue
//                 }
//             }
</script>

<style scoped lang="scss">
    div {
        text-align: center;
        // box-size： 15px;
    }
</style>