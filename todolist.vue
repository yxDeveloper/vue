<!--
 * @Author: your name
 * @Date: 2020-12-30 23:24:19
 * @LastEditTime: 2021-01-04 23:59:47
 * @LastEditors: Please set LastEditors
 * @Description: todolist for Vue
 * @FilePath: \vue\myTest\todolist.vue
-->
<template>
    <div id="app">
        <div class="header">
            <input type="text">
            <input type="butten">
        </div>
        <div class="list">
            <ul v-for="todo">
            <!-- <li v-for="todo"></li> -->
            </ul>
        </div>
        <div class="booder">
            
        </div>
    </div>
</template>

<script>
let vm = new Vue({
    el: "#app",
    data() {
        return {
            todo: [state,data],
            list: list
        }
    },
    created() {
        xhrApp()
    },
    methods() {
        setState = () => {
            return reacte
        },
        setData = () => {
            return Vue
        },
        xhrApp = () => {
            console.log(xhr)
        }
    }
})
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
    #app {
        background-color: #00ffff;
        ul {
            float: left;
        }
    }
</style>