<template>
  <div class="app">
    <div class="header">
      <van-nav-bar class="tou" left-arrow @click-left="onClickLeft" />
    </div>
    <div class="box1">
      <img src="../assets/img/tx.png" class="t1" />
      <span class="span1">单机版</span>
      <p class="p1">wm</p>
      <p class="p2">员工</p>
    </div>
    <div class="box2">
      <p class="p3">
        <i>
          <van-icon name="manager" class="i1" />
        </i>
        <span class="span2">供货商列表</span>
        <i>
          <van-icon name="arrow" class="i2" />
        </i>
      </p>
      <p class="p3">
        <i>
          <van-icon name="coupon" class="i1" />
        </i>
        <span class="span2">扩展字段</span>
        <i>
          <van-icon name="arrow" class="i2" />
        </i>
      </p>
      <p class="p3">
        <i>
          <van-icon name="star" class="i1" />
        </i>
        <span class="span2">公司信息</span>
        <i>
          <van-icon name="arrow" class="i2" />
        </i>
      </p>
      <p class="p3">
        <i>
          <van-icon name="friends" class="i1" />
        </i>
        <span class="span2">所属行业</span>
        <i>
          <van-icon name="arrow" class="i2" />
        </i>
      </p>
      <p class="p3">
        <i>
          <van-icon name="like" class="i1" />
        </i>
        <span class="span2">关于兔子采购</span>
        <i>
          <van-icon name="arrow" class="i2" />
        </i>
      </p>
    </div>
    <div class="box3">
      <img src="../assets/img/5.png" class="t2" />
      <van-button type="default" class="but1" @click="out">退出账户</van-button>
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
import { Toast } from "vant";
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    out() {
      Dialog.confirm({
        title: "提示",
        message: "确定要退出该账户吗"
      })
        .then(() => {
            this.$router.push({
                path:'/login'
            })
        })
        .catch(() => {});
    }
  }
};
</script>
<style scoped>
.header {
  border-bottom: solid 3px #f6f6f6;
}
.van-nav-bar .van-icon {
  font-size: 25px;
  color: gray;
}
.t1 {
  width: 70px;
}
.box1 {
  margin-top: 10px;
  position: relative;
}
.span1 {
  padding: 5px 10px;
  background-color: #f53f4b;
  color: white;
  border-radius: 5px;
  position: absolute;
  right: 20px;
  top: 5px;
}
.p1 {
  margin-top: 0px;
  font-size: 23px;
  font-weight: 600;
}
.p2 {
  margin-top: -15px;
  font-size: 16px;
}
.p3 {
  border-bottom: solid 2px #f6f6f6;
  padding-bottom: 10px;
}
.i1 {
  float: left;
  font-size: 25px;
  margin-left: 10px;
}
.i2 {
  float: right;
  margin-right: 10px;
  font-size: 25px;
}
.span2 {
  font-size: 20px;
  font-weight: 600;
}
.box2 {
  margin-top: 30px;
}
.t2 {
  width: 100%;
}
.box3 {
  background-color: #f6f6f6;
  height: 335px;
}
.but1 {
  width: 100%;
  margin-top: 45px;
  height: 45px;
}
</style>