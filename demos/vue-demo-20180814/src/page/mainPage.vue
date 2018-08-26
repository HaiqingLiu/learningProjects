<template>
    <div>
      <head-bar v-bind:title="pageone.title" class="head"></head-bar>
      <mcontent v-bind:mcontent="pageone.mcontent" class="mcontent"></mcontent>
      <foot-bar class="foot"></foot-bar>
    </div>
</template>

<script>
// 导入组件
import mcontent from '../components/mcontent.vue'
import headBar from '../components/head-bar.vue'
import footBar from '../components/foot-bar.vue'
export default {
  components: {
    mcontent, headBar, footBar
  },
  data () {
    return {
      pageone: {
        title: '首页',
        mcontent: '我是首页'
      },
      pagetwo: {
        title: '发现',
        mcontent: ' 我是发现'
      },
      pagethree: {
        title: '我的',
        mcontent: ' 我是我的我'
      },
      pagefour: {
        title: '设置',
        mcontent: ' 我是设置'
      }
    //   title: this.$route.query.title
    }
  }
}
</script>

<style scoped>

body {
  margin: 0;
  padding: 0;
  background-color: #fbfaf7;
}

.head {
  position: fixed;
  top: 0;
  left: 0;
}

.mcontent {
  height: 100%;
  width: 100%;
}

.foot {
  width: 100%;
  position: fixed;
  bottom: 0;
  left:0;
}
</style>
