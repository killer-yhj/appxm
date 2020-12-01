<template>
  <div class="app">
    <div class="box1">
      <p>
        <span class="span1" @click="back">
          <van-icon name="arrow-left" />
        </span>
        <span class="span2">登录体验号</span>
      </p>
    </div>
    <div class="box2">
      <p class="p1">请输入您的试用信息</p>
      <van-cell-group>
        <van-field v-model="gsmc" required label="所在公司名" placeholder="必填" />
        <van-field v-model="username" required label="试用人姓名" placeholder="必填" />
        <van-field v-model="phone" required label="手机号" placeholder="请输入手机号" />
      </van-cell-group>
      <van-field v-model="wx" required label="微信号" placeholder="必填" />
      <van-button type="danger" block class="but1" @click="go">去体验</van-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      gsmc: "",
      username: "",
      phone: "",
      wx: ""
    };
  },
  methods: {
    back() {
      this.$router.push({
        path: "/login"
      });
    },
    go() {
      if (
        this.gsmc == "" ||
        this.username == "" ||
        this.phone == "" ||
        this.wx == ""
      ) {
        this.$dialog.alert({
          message: "选项不能为空！"
        });
      } else {
        this.$router.push({
          path: "/home"
        });
      }
    }
  }
};
</script>
<style scoped>
.app {
  padding: 10;
}
.span2 {
  font-weight: 600;
  font-size: 23px;
}
.span1 {
  font-weight: 600;
  font-size: 23px;
  position: absolute;
  left: 20px;
  top: 23px;
}
.box1 {
  border-bottom: solid 2px #f6f6f6;
}
.box2 {
  margin-top: 40px;
}
.p1 {
  font-size: 25px;
  color: #777;
  margin-bottom: 30px;
}
.but1 {
  margin-top: 30px;
  width: 90%;
  margin-left: 17px;
}
</style>