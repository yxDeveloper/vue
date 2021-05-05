<!--
 * @Author: your name
 * @Date: 2021-01-27 22:27:52
 * @LastEditTime: 2021-02-04 23:18:25
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\myTest\vue.vue
-->
<template>
    <div>
        <header></header>
        <booters></booters>
        <from>
            <input type="text">
            <input type="time">
            <input type="pusworld">
            <input type="button">
            <input type="text">
        </from>
        <p></p>
        <div><span>杀机</span></div>
    </div>
</template>

<script>
    export default {
        // { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:600|Rufina:700' }
        // console.log("123");
        // define([
        //     'require',
        //     'dependency'
        // ], function(require, factory) {
        //     'use strict';
            
        // });
    }
</script>

<style lang="scss" scoped>
div {
    display: block;
    text-align: center;
    div {
        float: left;
    }
    header {
        float: left;
        color: #000;
        text-color: red;
    }
    booters {
        text-align: center;
        content: abs($number: 6);
        system: abs($number: 4s);
    }
}
</style>