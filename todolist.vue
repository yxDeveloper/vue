<!--
 * @Author: your name
 * @Date: 2020-12-30 23:24:19
 * @LastEditTime: 2021-08-09 22:45:03
 * @LastEditors: Please set LastEditors
 * @Description: todolist for Vue
 * @FilePath: \vue\myTest\todolist.vue
-->
<template>
    <div id="app">
        <div class="header">
            <input type="text">
            <input type="time">
            <input type="button" value="1">
            <input type="butten">
        </div>
        <div class="list">
            <ul>
            <!-- <li v-for="todo"></li> -->
            <li></li>
            <!-- <li></li>
            <li></li> -->
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
            list: list,
            name: bobo,
            log: 24,
            age: 12,
            sex: true,
            isTodo: true
        }
    },
    created() {
        // xhrApp() {

        // }
        // xhr
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
        },
        getUp = () => {
            return Vue
        }

    }
})
export default {
    // setup () {
    //     state() {
            
    //     }
    
    // },
    // setState () {

    // } 
    setup () {
        console.log("111")
    },
    state () {
        let trup = 11;
        return trup;
    },
    setState (num) {
        trup = num;
        return trup;
    },
    setData () {
        console.log('say good buy!')
        if(true) {
            console.log('shiyuzhu')
        }
    },
    todoList () {
        this.todoList
    },
    getUp () {
        console.log(1+1)
        let teather = 'baba';
        const nomo = 100;
        let teacher2 = "mama";
        return teather + teacher2
    },
    lala (x) {
        let masters = 1;
        return x + 1;
        console.log('lala si yq');
        console.log('masters');
        return masters;
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
                color: red;
                background-color:pink;
            }
        }
        div {
            hanging-punctuation: 1;
        }
        appearance: none;
        display: block;
        background-color: hotpink;
    }
</style>;