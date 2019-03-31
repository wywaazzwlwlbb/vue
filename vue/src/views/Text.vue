<template>
  <div id="box" @click="_show" ref="ground">
    <mt-header fixed style="marginBottom:10px">
      <mt-button icon="back" slot="left" @click="back">返回</mt-button>
      <mt-button slot="right"></mt-button>
    </mt-header>
    <div id="p1">{{str.title}}</div>
    <div v-html="cpContent" id="p2" ref="size"></div>

    <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <div id="show" v-if="show">
        <div id="font">
          <div @click.stop="minus">-</div>
          字号：{{size}}
          <div @click.stop="plus">+</div>
        </div>
        <div id="background" @click.stop="fn">
          <div>
            <p>背景：</p>
          </div>
          <div>
            <p id="yellow" @click.stop="yellow"></p>
          </div>
          <div>
            <p id="gray" @click.stop="green"></p>
          </div>
          <div>
            <p id="blue" @click.stop="pink"></p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>


<script>
import { List8 } from "@/api";
export default {
  data() {
    return {
      str: [],
      cpContent: "",
      show: false,
      size: 16,
      background: ["#ccdef6", "#9cb77f", "#f6e6eb"]
    };
  },
  mounted() {
    let url = this.$store.state.linkPath;
    let a = localStorage.getItem("link");
    let link = url || a;
    List8(link).then(res => {
      this.str = res.data.chapter;
      var cpContent = res.data.chapter.cpContent.replace(/\n/g, "<br/>");
      this.cpContent = cpContent;
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    fn() {},
    _show() {
      this.show = !this.show;
    },
    minus() {
      this.size = this.size - 1;
      this.$refs.size.style.fontSize = this.size + "px";
      if (this.size < 14) {
        this.size = this.size + 1;
      }
    },
    plus() {
      this.size = this.size + 1;
      this.$refs.size.style.fontSize = this.size + "px";
      if (this.size > 19) {
        this.size = this.size - 1;
      }
    },

    yellow() {
      this.$refs.ground.style.background = this.background[0];
    },
    green() {
      this.$refs.ground.style.background = this.background[1];
    },
    pink() {
      this.$refs.ground.style.background = this.background[2];
    }
  }
};
</script>
<style scoped>
@import url(https://cdn.bootcss.com/animate.css/3.7.0/animate.min.css);
#p1 {
  margin: 0;
  padding-top: 15px;
  font-size: 25px;
  text-align: center;
  line-height: 70px;
}
#p2 {
  font-size: 18px;
  letter-spacing: 2px;
  line-height: 34px;
  text-indent: 2.5rem;
  margin-left: 15px;
  margin-right: 15px;
}
#box {
  background-color: #e7ceaa;
}
#yellow {
  height: 30px;
  width: 30px;
  background: #ccdef6;
  border-radius: 50%;
}
#gray {
  height: 30px;
  width: 30px;
  background: #9cb77f;
  border-radius: 50%;
}
#blue {
  height: 30px;
  width: 30px;
  background: #f6e6eb;
  border-radius: 50%;
}

#background div {
  width: 25%;
  float: left;
}
#background {
  display: flex;
  flex: 1;
  justify-content: space-between;
  display: inline-block;
  width: 100%;
  flex-direction: column;
  padding: 10px;
}
#show {
  position: fixed;
  bottom: 0;
  background: #ffffff;
  width: 100%;
}
#font {
  display: flex;
  justify-content: space-between;
  padding: 10px;
}
#font div {
  width: 100px;
  height: 30px;
  background: #e5e6eb;
  text-align: center;
  line-height: 30px;
  border-radius: 5px;
  font-size: 20px;
}
</style>
