<template>
  <div class="app">
    <div class="header">
      <van-row gutter="20">
        <van-col span="8" class="va1"><img src="../../src/assets/img/tx.png" class="tu1" @click="tou"></van-col>
        <van-col span="8" class="va2"><span class="span1">找货记录</span></van-col>
        <van-col span="8" class="va3"><span class="span2" @click="sh">扫货</span></van-col>
      </van-row>
    </div>
    <div class="body">
        <img src="../assets/img/2.png" class="t2">
        <p>没有找到发货信息</p>
        <van-button color="#f73f49" class="but1">立刻找货</van-button>
        <img src="../assets/img/y1.png" class="t3">
    </div>
    <Foter></Foter>
  </div>
</template>
<script>
import Foter from "../components/Foter";
export default {
  components: {
    Foter
  },
  methods: {
      sh(){
          this.$dialog.alert({
          message: "该设备不能使用该功能。"
        });
        return false;
      },
      tou(){
          this.$router.push({
              path:'/tou'
          })
      }
  },
};
</script>
<style scoped>
.header{
    margin-top: 10px;
    border-bottom: solid 2px #f6f6f6;
}
.span1{
    font-size: 25px;
    font-weight: 700;
}
.va2{
    margin-top: 5px;
}
.span2{
    font-size: 18px;
    font-weight: 600;
}
.va3{
    margin-top: 10px;
}
.t2{
    width: 100px;
}
.but1{
    border-radius: 5px;
    width: 150px;
}
.body{
    margin-top: 200px;
}
.t3{
    width: 60px;
    position: absolute;
    bottom: 60px;
    left: 180px;
}
</style>