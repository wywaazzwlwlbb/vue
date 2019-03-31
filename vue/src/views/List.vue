<template>
  <div>
    <mt-header fixed>
      <mt-button icon="back" slot="left" @click="back">返回</mt-button>
      <mt-button slot="right"></mt-button>
    </mt-header>
    <ul v-for="(item,index) in arr " :key="index">
      <li @click="context(item.link)">{{item.title}}</li>
    </ul>
    {{arr}}
  </div>
</template>

<script>
import { List6, List10 } from "@/api";

export default {
  data() {
    return {
      arr: []
    };
  },
  mounted() {
    let _id = this.$store.state.chapterId;
    let list = localStorage.getItem("list");
    let ID = _id || list;
    List10(ID).then(res => {
      var arr = res.data[0]._id;
      List6(arr).then(res => {
        this.arr = res.data.chapters;
      });
    });
  },
  methods: {
    back() {
      this.$router.go(-1);
    },
    context(a) {
      localStorage.setItem("link", a);
      this.$store.dispatch("link", a);
      this.$router.push("/text");
    }
  }
};
</script>