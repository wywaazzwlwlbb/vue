<template>
  <div id="box">
    用户名：
    <input type="text" v-model="username" @blur="blur" style="marginTop:260px">
    <span v-if="show" style="marginTop:270px;marginLeft:10px">{{this.showusn}}</span>
    <br>密码：
    <input type="text" v-model="password" @blur="blur2" style="marginTop:20px">
    <span v-if="show2" style="marginTop:25px">{{this.showpsw}}</span>
    <br>
    <div @click="login" id="login">登录</div>
    <br>
    <div @click="reg" id="reg">注册</div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      username: "",
      password: "",
      showusn: "请输入用户名",
      showpsw: "请输入密码",
      show: false,
      show2: false,
      flag: false
    };
  },
  methods: {
    login() {
      var arr = JSON.parse(localStorage.getItem("userinfo")) || [];
      var newArr = arr.map(val => {
        if (this.username == val.username && this.password == val.password) {
          Toast("登陆成功");
          localStorage.setItem("login", "true");
          this.flag = true;
          setTimeout(() => {
            this.$router.push("/");
          }, 2000);
        }
      });
      if (this.flag == false) {
        Toast("登陆失败");
      }
    },
    reg() {
      this.$router.push("/register");
    },
    blur() {
      if (this.username == "") {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    blur2() {
      if (this.password == ";") {
        this.show2 = true;
      } else {
        this.show2 = false;
      }
    }
  },
  //登陆之后不再跳转登陆注册页
  beforeCreate() {
    var login = localStorage.getItem("login");
    if (login == "true") {
      this.$router.push("/");
    }
  }
};
</script>
<style scoped>
body,
html {
  height: 100%;
}
span {
  color: red;
  font-size: 13px;
  margin-left: 15px;
  position: absolute;
}
#box {
  background: url("../assets/book.jpg") no-repeat;
  height: 100%;
  background-size: 100% 100%;
  text-align: center;
  color: #ffffff;
}
/* #app {
  height: 100%;
} */
#login {
  width: 80%;
  height: 40px;
  background: skyblue;
  margin: 0 auto;
  line-height: 40px;
  border-radius: 15px;
  margin-top: 20px;
}
#reg {
  width: 80%;
  height: 40px;
  background: skyblue;
  margin: 0 auto;
  line-height: 40px;
  border-radius: 15px;
}
input {
  border: none;
  border-bottom: 1px solid grey;
  background-color: transparent;
  outline: none;
  width: 40%;
  height: 20px;
  color: white;
  font-size: 20px;
  text-align: center;
}
</style>