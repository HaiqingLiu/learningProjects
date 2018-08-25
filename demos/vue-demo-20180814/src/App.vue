<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <!-- 路由匹配到的组件将渲染在这个标签里 -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #555;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity .5s;
}

.fade-leave {
  opacity: 1;
}

.fade-leave-active {
  opacity: 0;
  transition: opacity .5s;
}
</style>
