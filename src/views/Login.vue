<template>
  <div id="app">
    <div class="box1">
      <van-row type="flex" justify="center">
        <van-col span="24">
          <img src="../../src/assets/img/tu1.png" class="tu1" />
        </van-col>
        <van-col span="24">
          <span class="span1">找货app智能检索软件</span>
        </van-col>
      </van-row>
    </div>
    <div class="box2">
      <van-cell-group>
        <van-field v-model="value1" clearable label="网址" left-icon="aim" />
        <van-field v-model="value2" clearable label="用户名" left-icon="manager" />
        <van-field v-model="value3" label="密码" left-icon="lock" type="password" right-icon="eye" />
      </van-cell-group>
      <van-button type="danger" block class="but1" @click="dl">登录</van-button>
    </div>
    <div class="box3">
      <p class="p1" @click="go">登录体验号</p>
      <p>
        <span class="span2">服务协议</span>和
        <span class="span2">隐私政策</span>
      </p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      value3: "",
      wz: "123.com",
      yhm: "admin",
      pwd: "123"
    };
  },
  methods: {
    dl() {
      if (this.value1 == "") {
        this.$dialog.alert({
          message: "网址不能为空！"
        });
        return false;
      } else if (this.value2 == "") {
        this.$dialog.alert({
          message: "用户名不能为空！"
        });
        return false;
      } else if (this.value3 == "") {
        this.$dialog.alert({
          message: "密码不能为空！"
        });
        return false;
      } else if (
        this.value1 != this.wz ||
        this.value2 != this.yhm ||
        this.value3 != this.pwd
      ) {
        this.$dialog.alert({
          message: "请输入正确的值。"
        });
        return false;
      } else {
        this.$router.push({
          path: "/home"
        });
      }
    },
    go() {
      this.$router.push({
        path: "/xinx"
      });
    }
  }
};
</script>
<style scoped>
#app {
  padding: 10px;
}
.box1 {
  margin-top: 50px;
}
.tu1 {
  width: 23%;
}
.span1 {
  font-size: 25px;
  font-weight: 500;
}
.box2 {
  margin-top: 100px;
}
.van-cell van-field {
  line-height: 60px;
}
.but1 {
  margin-top: 50px;
  font-size: 20px;
}
.box3 {
  position: absolute;
  bottom: 20px;
  left: 135px;
}
.p1 {
  font-size: 20px;
}
.span2 {
  color: #639ce1;
}
</style>