// v-visible directive

import Vue from "vue";

const visibility = {
  install(Vue) {
    Vue.directive("visible", (el, binding) => {
      var value = binding.value;

      if (value) {
        el.style.visibility = "visible";
      } else {
        el.style.visibility = "hidden";
      }
    });
  }
};

Vue.use(visibility);