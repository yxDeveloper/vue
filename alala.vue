<!--
 * @Author: your name
 * @Date: 2021-02-28 00:09:36
 * @LastEditTime: 2021-02-28 00:09:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \vue\alala.vue
-->
<template>
    <div>

    </div>
</template>

<script>
import { reactive, toRefs } from '@vue/composition-api'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })
    
        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>