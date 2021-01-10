Vue.directive('directiveName', {
    bind(el, binding, vnode) {
        el.style.arg = binding.value.arg;
    }
});
<template>
    <div>

    </div>
</template>

<script>
export default {
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>