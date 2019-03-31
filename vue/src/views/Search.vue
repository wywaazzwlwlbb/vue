<template>
  <div>
    <div>
      <input type="text" @focus="fn" placeholder="请输入书名或作者名" v-model="value" id="inp1">
      <img src="../assets/放大镜.png" @click="search" id="pp">
    </div>
    <h3 style="text-align:left;margin-left:30px" v-show="flag4">大家都在搜</h3>
    <!-- 搜索热词 -->
    <div>
      <ul v-for="(item,index) in hot" :key="index-10" v-show="flag" id="hot">
        <li @click="detail(item.word)" id="hotkey">{{item.word}}</li>
      </ul>
    </div>
    <!-- 搜索自动补充 -->
    <ul v-for="(item,index) in keywords" :key="index-100" v-show="flag3" style="marginLeft:20px">
      <li>{{item}}</li>
    </ul>
    <!-- 搜索结果 -->
    <ul
      v-for="(item,index) in List"
      :key="index"
      v-show="flag2"
      id="result"
      @click="detail2(item._id)"
    >
      <img :src="item.cover">
      <li id="li4">{{item.title}}</li>
      <li id="li2">{{item.shortIntro}}</li>
      <li id="li3">{{item.author}}</li>
    </ul>
  </div>
</template>


<script>
import { List9, List7, List4 } from "@/api";
export default {
  data() {
    return {
      value: "",
      List: [],
      hot: [],
      flag: true,
      keywords: [],
      flag2: false,
      flag3: true,
      flag4: true
    };
  },
  watch: {
    value(newVal) {
      this.value = newVal;
      List9(newVal).then(res => {
        console.log(res);
        for (var val of res.data.books) {
          let str = val.cover.substring(7);
          let url = unescape(str);
          val.cover = url;
        }
        this.List = res.data.books;
      });
      List4(newVal).then(res => {
        this.keywords = res.data.keywords;
      });
    }
  },
  mounted() {
    List7().then(res => {
      let arr = res.data.searchHotWords;
      let a = arr.splice(0, 10);
      this.hot = a;
    });
  },
  methods: {
    detail(val) {
      this.value = val;
      this.flag = false;
      this.flag4 = false;
    },
    fn() {
      this.flag = false;
      this.flag2 = false;
      this.flag3 = true;
      this.List = [];
      this.flag4 = false;
    },
    search() {
      this.flag2 = !this.flag2;
      this.flag3 = false;
      List9(this.value).then(res => {
        console.log(res);
        for (var val of res.data.books) {
          let str = val.cover.substring(7);
          let url = unescape(str);
          val.cover = url;
        }
        this.List = res.data.books;
      });
    },
    detail2(data) {
      console.log(data);
      this.$store.dispatch("detail", data);
      this.$router.push("/detail");
    }
  }
};
</script>

<style scoped>
.mint-search {
  height: 100% !important;
}
img {
  height: 60px;
  width: 40px;
}
#hot {
  width: 100px;
  float: left;
  margin-left: 15px;
}
#hotkey {
  text-align: center;
  display: inline-block;
  line-height: 20px;
  width: 120px;
  /* border: 1px solid grey; */
  /* border-radius: 50px; */
}
#inp1 {
  margin-top: 10px;
  margin-left: 40px;
  width: 70%;
  height: 25px;
  background-color: #f5f5f7;
  border-radius: 18px;
  outline: none;
  border: none;
  padding-left: 10px;
}
#pp {
  position: fixed;
  right: 35px;
  top: 10px;
  height: 25px;
  width: 25px;
}
input::-ms-input-placeholder {
  text-align: center;
}
input::-webkit-input-placeholder {
  text-align: center;
}
#result {
  display: block;
  height: 130px;
  text-align: center;
  margin: 0;
  border-top: 10px #f5f6f8 solid;
  padding: 10px;
}
#result img {
  float: left;
  height: 100%;
  width: 22%;
  border-radius: 0;
}
#result:first-child {
  border-top: 0;
}
#li2 {
  overflow: hidden;
  height: 40px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  font-size: 15px;
  letter-spacing: 5px;
  line-height: 24px;
  padding: 10px;
  margin-top: 5px;
  text-indent: 1rem;
  color: grey;
}
#li4 {
  font-size: 18px;
  text-align: left;
  padding-left: 11px;
}
#li3 {
  float: left;
  margin-left: 10px;
  margin-top: 20px;
  font-size: 18px;
  color: grey;
}
</style>
