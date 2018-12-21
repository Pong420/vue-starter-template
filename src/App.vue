<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss">
*,
*:after,
*:before {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-size: 14px;

  font-family: Helvetica, Arial, "微軟正黑體", "微软正黑体",
    "Microsoft JhengHei", "微軟雅黑體", "微软雅黑体", "Microsoft YaHei",
    "華文黑體", "华文黑体", "STHeiti", "華文細黑", "华文细黑", "STXihei",
    "儷黑 Pro", "LiHei Pro", Tahoma, sans-serif;
}

#app {
  position: relative;
  width: 100%;
  margin: 0 auto;
  background: #1a1a1a;
}

a {
  color: inherit;
  text-decoration: none;
  outline: none;
}

img {
  vertical-align: middle;
}

[v-cloak] {
  display: none;
}
</style>
