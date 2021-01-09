Vue.directive('directiveName', {
    bind(el, binding, vnode) {
        el.style.arg = binding.value.arg;
    }
});