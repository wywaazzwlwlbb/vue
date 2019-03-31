<template>
  <div>
    <div style="marginTop:50px">
      <mt-navbar v-model="select" fixed>
        <!-- <img src="../assets/返回.png" id="back"> -->
        <p @click="back" style="marginRight:20px">&nbsp;&nbsp;&nbsp;&nbsp;<</p>
        <mt-tab-item id="1">男生</mt-tab-item>
        <mt-tab-item id="2">女生</mt-tab-item>
        <mt-tab-item id="3">出版</mt-tab-item>
      </mt-navbar>
      <!-- tab-container -->
      <mt-tab-container v-model="select">
        <mt-tab-container-item id="1">
          <div id="left">
            <ol v-for="(item,index) in male" :key="index">
              <li @click="major(item._id)" style="textAlign:center">{{item.title}}</li>
            </ol>
          </div>
          <div id="right">
            <ul v-for="(item,index) in details" :key="index" @click="xiang(item._id)">
              <li>
                <div>
                  <p id="p1">
                    <img :src="item.cover">
                  </p>
                  <div id="dd">
                    <p id="p2">{{index+1+"."+item.title}}</p>
                    <p id="p3">{{item.author}}·{{item.minorCate}}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="2">
          <div id="left">
            <ol v-for="(item,index) in female" :key="index">
              <li @click="major2(item._id)" style="textAlign:center">{{item.title}}</li>
            </ol>
          </div>
          <div id="right">
            <ul v-for="(item,index) in femaleDet" :key="index" @click="xiang(item._id)">
              <li>
                <div>
                  <p id="p1">
                    <img :src="item.cover">
                  </p>
                  <div id="dd">
                    <p id="p2">{{index+1+"."+item.title}}</p>
                    <p id="p3">{{item.author}}·{{item.minorCate}}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>

        <mt-tab-container-item id="3">
          <div id="left">
            <ol v-for="(item,index) in press2" :key="index">
              <li @click="press(item._id)" style="textAlign:center">{{item.title}}</li>
            </ol>
          </div>
          <div id="right">
            <ul v-for="(item,index) in public2" :key="index" @click="xiang(item._id)">
              <li>
                <div>
                  <p id="p1">
                    <img :src="item.cover">
                  </p>
                  <div id="dd">
                    <p id="p2">{{index+1+"."+item.title}}</p>
                    <p id="p3">{{item.author}}·{{item.minorCate}}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { List, List2, List3, List4, List5 } from "@/api";

export default {
  data() {
    return {
      male: [],
      female: [],
      select: "1",
      details: [],
      femaleDet: [],
      press2: [],
      public2: []
    };
  },
  methods: {
    major(data) {
      console.log(data);
      List2(data).then(res => {
        // 处理图片路径
        let url = "";
        for (var key of res.data.ranking.books) {
          let str = key.cover.substring(7);
          url = unescape(str);
          // 替换原来数据的cover地址
          key.cover = url;
        }
        this.details = res.data.ranking.books;
      });
    },
    major2(data) {
      List2(data).then(res => {
        // 处理图片路径
        let url = "";
        for (var key of res.data.ranking.books) {
          let str = key.cover.substring(7);
          url = unescape(str);
          // 替换原来数据的cover地址
          key.cover = url;
        }
        this.femaleDet = res.data.ranking.books;
      });
    },

    press(data) {
      List2(data).then(res => {
        // 处理图片路径
        let url = "";
        for (var key of res.data.ranking.books) {
          let str = key.cover.substring(7);
          url = unescape(str);
          // 替换原来数据的cover地址
          key.cover = url;
        }
        this.public2 = res.data.ranking.books;
      });
    },
    xiang(a) {
      localStorage.setItem("bookId", a);
      this.$store.dispatch("detail", a);
      this.$router.push("/detail");
    },
    back() {
      this.$router.go(-1);
    }
  },
  mounted() {
    List().then(res => {
      this.male = res.data.male;
      this.female = res.data.female;
      this.press2 = res.data.picture;
    });
    //页面刚加载时，自动加载第一个
    let data = "54d42d92321052167dfb75e3";
    List2(data).then(res => {
      // 处理图片路径
      let url = "";
      for (var key of res.data.ranking.books) {
        let str = key.cover.substring(7);
        url = unescape(str);
        // 替换原来数据的cover地址
        key.cover = url;
      }
      this.details = res.data.ranking.books;
    });
    let data2 = "54d43437d47d13ff21cad58b";
    List2(data2).then(res => {
      // 处理图片路径
      let url = "";
      for (var key of res.data.ranking.books) {
        let str = key.cover.substring(7);
        url = unescape(str);
        // 替换原来数据的cover地址
        key.cover = url;
      }
      this.femaleDet = res.data.ranking.books;
    });
    let data3 = "5a322ef4fc84c2b8efaa8335";
    List2(data3).then(res => {
      // 处理图片路径
      let url = "";
      for (var key of res.data.ranking.books) {
        let str = key.cover.substring(7);
        url = unescape(str);
        // 替换原来数据的cover地址
        key.cover = url;
      }
      this.public2 = res.data.ranking.books;
    });
  }
};
</script>

<style scoped>
#left {
  width: 100px;
  background: #f4f6f9;
  /* margin-top: 5px; */
  float: left;
  /* position:relative; */
  height:750px;
  overflow: auto;
  /* height: 100%; */
}
#right {
  overflow-x: hidden;
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  margin-left: 100px;
  margin-top: -20px;
  height:780px
}
ol {
  padding: 0;
  margin-top: 3px;
  margin-bottom: 20px;
}
ol li {
  height: 28px;
}
ol:hover {
  background: white;
}
ul {
  margin-bottom: -22px;
}
img {
  height: 60px;
  width: 40px;
  border-radius: 0;
  float: left;
  margin-right: 15px;
}
#p1 {
  float: left;
}
#dd {
  float: left;
}
#p3 {
  text-align: left;
  color: #a3a6ad;
  font-size: 14px;
  margin-top: 10px !important;
}
#p2 {
  font-weight: 600;
  margin-bottom: 10px !important;
}
#back {
  width: 50px;
  height: 50px;
}
</style>