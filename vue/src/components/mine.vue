<template>
  <div id="hq">
    <mt-header fixed>
      <mt-button icon="back" slot="left" @click="back">返回</mt-button>
      <mt-button slot="right"></mt-button>
    </mt-header>
    <div id="box">
      <div @click="login" v-if="flag1">
        <img style="width:40px;height:40px;" src="../assets/user.png">
        <span>登录/注册</span>
      </div>
      <div v-if="flag" @click="exit">
        <img style="width:40px;height:40px;" src="../assets/userLogin.png">
        <span>点击退出</span>
      </div>
    </div>
    <p v-for="(val,ind) in arr" :key="ind">{{val}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        "钱包",
        "消费记录",
        "购买的书",
        "新手会员",
        "绑兑换码",
        "阅读之约",
        "公益行动"
      ],
      flag: false,
      flag1: true
    };
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    login() {
      this.$router.push("/login");
    },
    exit() {
      localStorage.setItem("login", "false");
      this.$router.push("/login");
    }
  },
  mounted() {
    var login = localStorage.getItem("login");
    //判断是否登陆
    if (login == "true") {
      this.flag = true;
      this.flag1 = false;
    }
  }
};
</script>

<style scoped>
p {
  line-height: 80px;
  margin: 0;
  width: 100%;
  border-top: 3px solid #f5f6f8;
  padding-left: 20px;
}
#box {
  background: lightblue;
}
#box div {
  margin-top: 40px;
  padding-bottom: 10px;
}
span {
  display: inline-block;
  margin-bottom: 10px;
  margin-top: 15px;
  margin-left: 70px;
}
img {
  position: absolute;
  top: 48px;
  left: 20px;
}
</style>