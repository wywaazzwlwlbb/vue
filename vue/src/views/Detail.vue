<template>
  <div>
    <mt-header fixed>
      <mt-button icon="back" slot="left" @click="back">返回</mt-button>
      <mt-button slot="right"></mt-button>
    </mt-header>

    <div id="box">
      <div id="bigg">
        <img :src="details.cover" id="ss">
        <div id="rig">
          <h2>{{details.title}}</h2>
          <p>{{details.majorCate}}|{{details.author}}</p>
          <p>{{details.wordCount}}</p>
        </div>
      </div>
      <p class="jian">简介</p>
      <p id="bot">{{details.longIntro}}</p>
      <div @click="update(details._id)" id="xian">
        <p id="p1">查看目录连载至{{details.lastChapter}}</p>
        <p id="p2">更新于{{details.updated}}</p>
      </div>
      <div>
        <li class="ping">书友评论</li>
        <ul v-for="(item,index) in reviews" :key="index" id="speak">
          <li id="sil">
            <img :src="item.author.avatar" id="imgauth">
            <span id="nameauth">{{item.author.nickname}}</span>
          </li>
          <li id="til">{{item.title}}</li>
          <li id="uil">{{item.content}}</li>
        </ul>
      </div>
      <p id="p3" @click="free" style="color:white">免费试读</p>
      <p id="p4" @click="store" style="color:white">{{join}}</p>
    </div>
  </div>
</template>

<script>
import { List3, List5, List6 } from "@/api";
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      details: "",
      reviews: "",
      join: "加入书架"
    };
  },
  mounted() {
    // 书籍详情
    let _id = this.$store.state.List;
    let bookId = localStorage.getItem("bookId");
    let data = _id || bookId;
    List5(data).then(res => {
      let str = res.data.cover.substring(7);
      let url = unescape(str);
      res.data.cover = url;
      let n = res.data.wordCount;
      n = Math.round((n / 10000) * 100) / 100;
      n = n + "万字";
      res.data.wordCount = n;
      this.details = res.data;
    });
    //获取评论
    List3(data).then(res => {
      for (var val of res.data.reviews) {
        let head = "http://api.zhuishushenqi.com" + val.author.avatar;
        val.author.avatar = head;
      }
      this.reviews = res.data.reviews;
    });
  },
  methods: {
    update(a) {
      localStorage.setItem("list", a);
      this.$store.dispatch("chapter", a);
      this.$router.push("/list");
    },
    store() {
      let instance = Toast("加入成功");
      setTimeout(() => {
        instance.close();
      }, 2000);
      this.join = "已加入";
      let data = this.$store.state.List;
      List5(data).then(res => {
        // console.log(res);
        let str = res.data.cover.substring(7);
        let url = unescape(str);
        res.data.cover = url;
        let n = res.data.wordCount;
        n = Math.round((n / 10000) * 100) / 100;
        n = n + "万字";
        res.data.wordCount = n;
        let abc = { cover: res.data.cover, title: res.data.title };
        this.$store.dispatch("save", abc);
      });
    },
    //开始阅读
    free(a) {
      // this.$store.dispatch(a);
      // this.$router.push("/list");
    },
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
body,
html {
  height: 100%;
}

#ss {
  width: 100px;
  height: 140px;
  border-radius: 0;
  float: left;
  margin-left: 10px;
}
#box {
  margin-top: 40px;
  text-align: left;
}
#rig {
  float: left;
  text-align: left;
  margin-left: 8px;
  margin-top: -18px;
}
#bot {
  float: left;
  margin-top: -10px;
  height: 60px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  margin-left: 10px;
  text-indent: 24px;
}
#bigg {
  display: inline-block;
  text-align: left;
  width: 80%;
}
/* #but{
  float: left;
  display: inline-block;
  width:40px;
  position:fixed;
  top:220px;
  border-radius:15px
} */
#imgauth {
  width: 40px;
  height: 40px;
  border-radius: 30px;
}
#nameauth {
  color: burlywood;
  font-size: 20px;
  text-align: none;
  padding-top: 10px;
  margin-left: 10px;
}
#speak {
  text-align: left;
  display: block;
}
#sil {
  margin-top: 10px;
}
#til {
  font-size: 17px;
  font-weight: 790;
  margin-top: 5px;
}
#uil {
  margin-top: 7px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  line-height: 24px;
  color: grey;
  text-indent: 16px;
}
.jian {
  margin-left: 10px;
  font-size: 20px;
}
#xian {
  /* border-top: 1px solid red;? */
  /* height:50px */
}
#p1,
#p2 {
  margin-left: 10px;
}
.ping {
  font-size: 22px;
  margin-left: 10px;
}

#p3 {
  background-color: lightblue;
  width: 50%;
  height: 50px;
  position: fixed;
  bottom: -16px;
  line-height: 50px;
  text-align: center;
}
#p4 {
  width: 50%;
  height: 50px;
  background-color: lightblue;
  position: fixed;
  bottom: -16px;
  left: 50%;
  line-height: 50px;
  text-align: center;
  /* border-left:1px,solid,red; */
}
</style>