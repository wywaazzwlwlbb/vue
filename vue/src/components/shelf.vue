<template>
  <div>
    <div>
      <div id="dd">
        <p class="shelf">书架</p>
      </div>
      <!-- <div @click="fn" id="search" placeholder="搜索"></div> -->
      <img src="../assets/放大镜.png" @click="fn" id="search">
    </div>
    <div id="big" v-show="flag">
      <p>重拾阅读的习惯</p>
      <p>为生活埋下微小的信仰</p>
      <div id="find" @click="find">去找书</div>
    </div>
    <!-- 收藏的书 -->
    <div id="ee">
      <ul v-for="(item,index) in List" :key="index" id="ul1" @click="read">
        <img :src="item.cover" id="img1">
        <li>{{item.title}}</li>
      </ul>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      List: [],
      flag: true
    };
  },
  methods: {
    fn() {
      this.$router.push("/search");
    },
    find() {
      this.$router.push("/rank");
    },
    read() {
      this.$router.push("/detail");
    }
  },
  mounted() {
    this.List = this.$store.state.collect;
    if (this.List.length != 0) {
      this.flag = false;
    }
  }
};
</script>

<style scoped>
#big {
  text-align: center;
  margin-top: 50%;
}
img {
  width: 40px;
  height: 60px;
  margin: 0;
  padding: 0;
}
#find {
  height: 40px;
  width: 200px;
  margin: 0 auto;
  line-height: 40px;
  border-radius: 5px;
  background: #019bf5;
  margin-top: 20px;
  color: #ffff;
}
.shelf {
  font-weight: 600;
  text-align: center;
  width: 100%;
  background-color: #fff;
  height: 50px;
  line-height: 54px;
  position: fixed;
  top: -19px;
}
#search {
  width: 25px;
  height: 25px;
  position: fixed;
  right: 15px;
  top: 9px;
}
#img1 {
  width: 100px;
  height: 150px;
  border-radius: 0px;
}
#ul1 {
  display: block;
}
li {
  font-size: 16px;
  margin-top: 3px;
  width: 100px;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
#dd {
  height: 54px;
}
#ee {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  /* flex-direction: row; */
  flex-wrap: wrap;
}
</style>