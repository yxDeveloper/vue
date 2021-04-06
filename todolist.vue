<!--
 * @Author: your name
 * @Date: 2020-12-30 23:24:19
 * @LastEditTime: 2021-04-06 21:43:41
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
            <ul>
            <!-- <li v-for="todo"></li> -->
            </ul>
        </div>
        <div class="booder">
            <div><span></span></div>
            <div><p></p></div>
            <form action="" method="get">
                <input type="button" value="">
            </form>

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
        },
        setState = () => {
            return reacte_state
        },
        getState = () => {
            return reacte
        }

    }
})
export default {
    setup () {
        state() {
            
        }
    
    },
    setState () {

    } 
}
</script>

<style lang="scss" scoped>
    #app {
        background-color: #00ffff;
        ul {
            float: left;
            li {
                float: left;
                text-align: center;
            }
            a {
                text-align: block;
            }
        }
        div {
            hanging-punctuation: 1;
        }
        appearance: none;
    }
</style>