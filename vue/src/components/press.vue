<template>
  <div style="marginTop:3px">
    <!-- 轮播图 -->
    <mt-swipe :auto="4000" :show-indicators="false">
      <mt-swipe-item>
        <img src="../assets/7.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/8.jpg">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/9.jpg">
      </mt-swipe-item>
    </mt-swipe>
    <!-- 导航 -->
    <ul id="uu">
      <li @click="rank">
        <div id="d11">
          <img src="@/assets/排行榜.png" alt>
        </div>排行榜
      </li>
      <li @click="rank">
        <div id="d22">
          <img src="@/assets/免费试读.png" alt>
        </div>免费
      </li>
      <li @click="rank">
        <div id="d33">
          <img src="@/assets/书单.png" alt>
        </div>书单
      </li>
      <li @click="rank">
        <div id="d44">
          <img src="@/assets/包月.png" alt>
        </div>包月
      </li>
      <li @click="rank">
        <div id="d55">
          <img src="@/assets/完本.png" alt>
        </div>完本
      </li>
    </ul>
    <h3 id="pro">精品推荐</h3>
    <ul v-for="(item,index) in List" :key="index" id="ul1" @click="detail(item._id)">
      <img :src="item.cover" id="img1">
      <li id="li1">{{item.title}}</li>
    </ul>
    <!-- 5a322ef4fc84c2b8efaa8335 -->
    <div @click="change" id="change">点击换一换</div>

    <h3>人气最热</h3>
    <ul v-for="(item,index) in List2" :key="index-20" id="ul1">
      <img :src="item.cover" id="img1">
      <li id="li1">{{item.title}}</li>
    </ul>
    <ul v-for="(item,index) in List3" :key="index-40" id="ul2">
      <li id="tit">
        <p id="pp1">{{item.title}}</p>
        <p id="pp2">{{item.minorCate}}</p>
      </li>

      <li id="pp3">{{item.shortIntro}}</li>
    </ul>
    <div @click="change2" id="change" style="marginBottom:59px">点击换一换</div>
  </div>
</template>

<script>
import { List2 } from "@/api";

export default {
  data() {
    return {
      List: [],
      List2: [],
      List3: [],
      arr: [],
      ind: [],
      shy: [],
      ind1: [],
      shy2: [],
      shy3: [],
      ind2: [],
      ind3: [],
      ind4: []
    };
  },
  methods: {
    rank() {
      this.$router.push("/rank");
    },
    change() {
      var arr = this.arr;
      this.ind = [];
      for (var i = 0; i < 8; i++) {
        var ind = parseInt(Math.random() * 93);
        this.ind.push(ind);
      }
      this.shy = [];
      for (var i = 0; i < 8; i++) {
        this.shy.push(arr[this.ind[i]]);
      }
      this.List = this.shy;
    },
    detail(data) {
      this.$store.dispatch("detail", data);
      this.$router.push("/detail");
    },

    change2() {
      var arr = this.arr;
      this.ind1 = [];
      for (var i = 0; i < 4; i++) {
        var ind = parseInt(Math.random() * 93);
        this.ind1.push(ind);
      }
      this.shy2 = [];
      for (var i = 0; i < 4; i++) {
        this.shy2.push(arr[this.ind1[i]]);
      }
      this.List2 = this.shy2;

      this.ind2 = [];
      for (var i = 0; i < 4; i++) {
        var ind = parseInt(Math.random() * 93);
        this.ind2.push(ind);
      }
      this.shy3 = [];
      for (var i = 0; i < 4; i++) {
        this.shy3.push(arr[this.ind2[i]]);
      }
      this.List3 = this.shy3;
    }
  },
  mounted() {
    List2("5a322ef4fc84c2b8efaa8335").then(res => {
      // 处理图片路径
      let url = "";
      for (var key of res.data.ranking.books) {
        let str = key.cover.substring(7);
        url = unescape(str);
        // 替换原来数据的cover地址
        key.cover = url;
      }
      var arr = res.data.ranking.books;
      this.arr = arr;
      for (var i = 0; i < 16; i++) {
        var ind = parseInt(Math.random() * 93);
        this.ind4.push(ind);
      }
      for (var i = 0; i < 8; i++) {
        this.shy.push(arr[this.ind4[i]]);
      }
      this.List = this.shy;

      for (var i = 8; i < 12; i++) {
        this.shy2.push(arr[this.ind4[i]]);
      }
      this.List2 = this.shy2;

      for (var i = 12; i < 16; i++) {
        this.shy3.push(arr[this.ind4[i]]);
      }
      this.List3 = this.shy3;
    });
  }
};
</script>

<style>
#pp1 {
  /* float:left; */
  font-size: 17px;
  color: #333333;
}
#pp2 {
  /* float:left; */
  font-size: 13px;
  padding: 2px;
  color: #999999;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
}
#pp3 {
  /* overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  height: 40px;
  letter-spacing: 2px;
  text-indent: 1rem;
  font-size: 13px;
  line-height: 20px;
  margin-bottom: 5px solid grey;
  color: #999999;
}
#tit {
  line-height: 20px;
  display: flex;
  justify-content: space-between;
}
ul {
  display: flex;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
}
ul li {
  overflow: hidden;
}
.mint-swipe {
  height: 150px !important;
  padding: 8px;
}
img {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
#ul1 {
  display: inline;
  float: left;
  text-align: center;
}
#ul2 {
  display: inline;
  float: left;
  text-align: center;
  margin-top: 0;
  border-top: 1px solid #e3e3e3;
}
.mint-navbar {
  font-size: 16px !important;
}
#pro {
  padding-left: 10px;
  margin-bottom: 0;
}
#img1 {
  /* display: inline-block; */
  width: 83px;
  height: 120px;
  border-radius: 0;
}
#li1 {
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80px;
  white-space: nowrap;
  font-size: 15px;
}
#change {
  width: 100%;
  float: left;
  /* height:40px; */
  line-height: 50px;
  text-align: center;
  /* display: inline-block */
  border-top: 1px solid #f3f3f3;
  border-bottom: 8px solid #f3f3f3;
  margin-bottom: 59px;
}
#uu li {
  padding-left: 15px;
  padding-right: 15px;
  text-align: center;
}
#uu li img {
  width: 30px;
  height: 30px;
  margin-left: 5px;
  margin-right: 5px;
  margin-top: 5px;
  border-radius: 0;
}
#uu div {
  width: 40px;
  height: 40px;
  /* background-color:#fa6484; */
  border-radius: 10px;
}
#d11 {
  background-color: #fa6484;
  margin-bottom: 5px;
}
#d22 {
  background-color: #fcc73f;
  margin-bottom: 5px;
}
#d33 {
  background-color: #ff9359;
  margin-bottom: 5px;
}
#d44 {
  background-color: #67a4e6;
  margin-bottom: 5px;
}
#d55 {
  background-color: #00c98d;
  margin-bottom: 5px;
}
</style>