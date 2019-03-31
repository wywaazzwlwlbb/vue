<template>
  <div id="box">
    <span class="spa1">用户名：</span>
    <input type="text" v-model="username" @blur="blur" class="inp1">
    <span v-if="show" class="s1">{{this.showusn}}</span>
    <br>
    <span class="spa2">密码：</span>
    <input type="text" v-model="password" @blur="blur2" class="inp2">
    <span v-if="show2" class="s2">{{this.showpsw}}</span>
    <br>
    <span class="spa3">确认密码：</span>
    <input type="text" v-model="password2" @blur="blur3" class="inp3">
    <span v-if="show3" class="s3">{{this.showpsw2}}</span>
    <br>
    <div @click="reg" id="btn">点击注册</div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      username: "",
      password: "",
      password2: "",
      showusn: "请输入用户名",
      showpsw: "请输入密码",
      showpsw2: "密码请保持一致",
      show: false,
      show2: false,
      show3: false,
      arr: JSON.parse(localStorage.getItem("userinfo")) || []
    };
  },
  methods: {
    reg() {
      if (this.username == "" && this.password == "" && this.password2 == "") {
        Toast("注册失败，请输入正确的用户名和密码");
      } else if (this.password !== this.password2) {
        Toast("注册失败，请输入正确的用户名和密码");
      } else if (this.username !== "" && this.password == "") {
        Toast("注册失败，请输入正确的用户名和密码");
      } else {
        var obj = { username: this.username, password: this.password };
        this.arr.push(obj);

        //对新注册的用户进行去重，用户名不能重复
        var hash = {};
        var str = this.arr.reduce((item, next) => {
          hash[next.username]
            ? ""
            : (hash[next.username] = true && item.push(next));
          return item;
        }, []);

        if (this.arr.length == str.length) {
          Toast("注册成功");
          setTimeout(() => {
            this.$router.push("/login");
          }, 2000);
        } else if (this.arr.length != str.length) {
          Toast("用户名已存在");
        }

        this.arr = str;
        localStorage.setItem("userinfo", JSON.stringify(this.arr));
      }
    },
    blur() {
      if (this.username == "") {
        this.show = true;
      } else {
        this.show = false;
      }
    },
    blur2() {
      if (this.password == "") {
        this.show2 = true;
      } else {
        this.show2 = false;
      }
    },
    blur3() {
      if (this.password2 == "" || this.password2 !== this.password) {
        this.show3 = true;
      } else {
        this.show3 = false;
      }
    }
  },
  //登陆之后不再跳转登陆注册页，用路由重定向
  beforeCreate() {
    var login = localStorage.getItem("login");
    if (login == "true") {
      this.$router.push("/");
    }
  }
};
</script>

<style scoped>
span {
  color: white;
  font-size: 13px;
  margin-left: 20px;
  font-size: 16px;
}
.s1,
.s2,
.s3 {
  color: red;
  font-size: 13px;
}
.spa1 {
  position: absolute;
  top: 265px;
  left: 30px;
}
.spa2 {
  position: absolute;
  top: 310px;
  left: 30px;
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
  margin-left: 30px;
}
.spa3 {
  /* margin-top: 300xp; */
  position: absolute;
  top: 353px;
  left: 30px;
}
.inp1 {
  margin-top: 260px;
}
.inp2 {
  margin-top: 20px;
  /* margin-left:20px */
}
.inp3 {
  margin-top: 20px;
  /* margin-left:20px */
}
#box {
  background: url("../assets/book2.jpg") no-repeat;
  height: 100%;
  background-size: 100% 100%;
  text-align: center;
  color: #ffffff;
}
#btn {
  width: 80%;
  height: 40px;
  background: skyblue;
  margin: 0 auto;
  line-height: 40px;
  border-radius: 15px;
  margin-top: 50px;
}
.s1,
.s2,
.s3 {
  color: red;
  position: absolute;
}
.s1 {
  top: 265px;
}
.s2 {
  top: 310px;
}
.s3 {
  top: 353px;
}
</style>