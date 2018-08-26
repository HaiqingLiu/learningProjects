<template>
  <div id="content" class="content">
    <img src="../assets/logo.png"/>
    <div class="content">
      {{mcontent}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
      mcontent: String,
      required: true,
      default: '默认内容'
  }
}
</script>

<style>
  .content {
    width: 100%;
    text-align: center;
    margin-top:60px;
  }
</style>
