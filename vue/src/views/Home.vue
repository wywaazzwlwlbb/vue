<template>
  <div>
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item id="书架">
        <img slot="icon" src="../assets/书架.png" style="borderRadius:0">
        书架
      </mt-tab-item>
      <mt-tab-item id="精选">
        <img slot="icon" src="../assets/精选.png" style="borderRadius:0">
        精选
      </mt-tab-item>
      <mt-tab-item id="书库">
        <img slot="icon" src="../assets/书库.png" style="borderRadius:0">
        书库
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img slot="icon" src="../assets/我的.png" style="borderRadius:0">
        我的
      </mt-tab-item>
    </mt-tabbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="书架">
        <shelf/>
      </mt-tab-container-item>
      <mt-tab-container-item id="精选">
        <!-- <ly-tab v-model="selectedId" :items="items" :options="options" ></ly-tab> -->
        <div>
          <mt-navbar v-model="select">
            <mt-tab-item id="1">男生</mt-tab-item>
            <mt-tab-item id="2">女生</mt-tab-item>
            <mt-tab-item id="3">出版</mt-tab-item>
          </mt-navbar>
          <!-- tab-container -->
          <mt-tab-container v-model="select">
            <mt-tab-container-item id="1">
              <male/>
            </mt-tab-container-item>
            <mt-tab-container-item id="2">
              <female/>
            </mt-tab-container-item>
            <mt-tab-container-item id="3">
              <press/>
            </mt-tab-container-item>
          </mt-tab-container>
        </div>
      </mt-tab-container-item>
      <mt-tab-container-item id="书库">
        <all/>
      </mt-tab-container-item>
      <mt-tab-container-item id="我的">
        <mine/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>

<script>
import male from "@/components/male.vue";
import female from "@/components/female.vue";
import mine from "@/components/mine.vue";
import shelf from "@/components/shelf.vue";
import press from "@/components/press.vue";
import all from "@/components/all.vue";
export default {
  data() {
    return {
      selected: "我的",
      select: "1",
      selectedId: 0,
      items: [
        { label: "精选" },
        { label: "男生" },
        { label: "女生" },
        { label: "出版" },
        { label: "包月" },
        { label: "漫画" },
        { label: "听书" }
      ],
      options: {
        activeColor: "#1d98bd"
        // 可在这里指定labelKey为你数据里文字对应的字段
      }
    };
  },
  components: {
    male,
    mine,
    shelf,
    female,
    press,
    all
  }
};
</script>



