<template>
    <div id="content" class="content">
        <img src="../assets/wa.jpg">
        <div class="tip">欢迎蛙儿回家</div>
        <div class="minput">
            <label>姓名</label>
            <input v-model="name" type="text" placeholder="请输入用户名">
        </div>

        <div class="minput">
            <label>密码</label>
            <input v-model="pwd" type="password" placeholder="请输入密码">
        </div>

        <button @click="isOk">
            <router-link v-if="ok" :to="{path:'mainPage',query:{title:'首页', mcontent:'首页内容在此'}}">点击登录</router-link>
            <div v-else>点击登录</div>
        </button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      ok: false,
      name: '',
      pwd: ''
    }
  },
  methods: {
    isOk: function () {
      console.log(this.name + '*****' + this.pwd)
      if (this.name === 'admin' && this.pwd === 'admin') {
        this.ok = true
      } else {
        alert('用户名或密码错误')
        this.ok = false
      }
      console.log('***' + this.ok)
    },
    beforeRouteEnter: (to, from, next) => {
      console.log('准备进入路由模板')
      next() // 一定要写
    },
    beforeRouteLeave: (to, from, next) => {
      console.log('准备离开param路由模板')
      next()
    }
  }
}
</script>

<style scoped>
body {
  margin: 0;
  padding: 0;
}

.content {
  width: 100%;
  text-align: center;
  margin-top: 60px;
}

a {
  text-decoration: none;
  color: white;
}

.tip {
  font-size: 1.5rem;
  padding-bottom: 50px;
}

.minput {
  padding-bottom: 10px;
}

button {
  margin-top: 20px;
  width: 200px;
  height: 50px;
  line-height: 50px;
  background-color: cornflowerblue;
  border-radius: 8px;
  color: white;
}

img {
  width: 150px;
  height: 150px;
}
</style>
