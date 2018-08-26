<template>
    <div id="head" class="head">
        <span class="title-left" @click="goBack">返回</span>
        <span class="title-mid">{{title}}</span>
        <span class="title-right"></span>
    </div>
</template>

<script>
export default {
  props: {
    title: String,
    default: '默认标题',
    required: true
  },
  methods: {
    goBack: function () {
      window.history.go(-1)
    }
  }
}
</script>

<style scoped>
.head {
  width: 100%;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: cornflowerblue;
  color: white;
}

.title-left {
  display: inline-block;
  float: left;
  height: 50px;
  line-height: 50px;
  width: 20%;
  text-align: center;
  font-size: 0.8rem;
}

.title-right {
  display: inline-block;
  float: right;
  height: 50px;
  line-height: 50px;
  width: 20%;
  text-align: center;
  font-size: 0.8rem;
}

.title-mid {
  display: inline-block;
  width: 60%;
}

a {
  text-decoration: none;
  color: white;
}

</style>
