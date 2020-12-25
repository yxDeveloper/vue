<!--
 * @Author: your name
 * @Date: 2020-12-14 22:58:55
 * @LastEditTime: 2020-12-26 01:17:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my-test\hellow.vue
-->
<template>
    <div>
        <ul v-for="item in items" :key="item.id">
            {{ item }}
        </ul>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                key: value
            }
        },
        methods: {
            name() {
                
            }
        },
        computed: {
            name() {
                return this.data 
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>