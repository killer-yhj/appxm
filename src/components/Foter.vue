<template>
  <div class="app">
    <van-tabbar v-model="active" active-color="#f73e4e">
      <van-tabbar-item icon="wap-home" @click="zh">找货</van-tabbar-item>
      <van-tabbar-item icon="good-job">下单</van-tabbar-item>
      <van-tabbar-item icon="shop">采购车</van-tabbar-item>
      <van-tabbar-item icon="bill">采购单</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: 0
    };
  },
  methods: {
    zh(){
      this.$router.push({
        path:'/home'
      })
    }
  },
};
</script>
<style scoped>
  .app{
    font-size: 20px;
  }
</style>