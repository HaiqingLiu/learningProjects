<template>
  <div id="content">
    <head-bar v-bind:title="title"></head-bar>

    <router-link to="/mainPage">返回上一页</router-link>
    <br/>
    <router-link to="/home">登录页别名回到登录页</router-link>
    <br/>
    <router-link to="/goHome">重定向到登录页</router-link>

    <h3>链接传参实例</h3>
    <div>
      <label>姓名:</label>
      {{$route.params.name}}
    </div>
    <div>
      <label>密码:</label>
      {{$route.params.pwd}}
    </div>
  </div>
</template>

<script>
import headBar from '../components/head-bar.vue'
export default {
  components: {
    headBar
  },
  data () {
    return {
      title: '个人信息',
      message: ''
    }
  }
}
</script>

<style scoped>
  .content {
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    color: darkorange;
  }
</style>
