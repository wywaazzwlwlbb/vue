<template>
  <div>
    <p>男生</p>
    <div id="box1">
      <ul v-for="(item,index) in male" :key="index" id="man">
      <li>{{item.name}}</li>
    </ul>
    </div>
    <p>女生</p>
    <div id="box3">
    <ul v-for="(item,index) in female" :key="index-20" id='women'>
      <li>{{item.name}}</li>
    </ul>
    </div>
    <p>出版</p>
    <div id="box3">
    <ul v-for="(item,index) in female" :key="index-80" id='publish'>
      <li>{{item.name}}</li>
    </ul>
    </div>
  </div>
</template>


<script>
import { all } from "@/api";

export default {
  data() {
    return {
      male: [],
      female: [],
      press: []
    };
  },
  mounted() {
    all().then(res => {
      this.male = res.data.male;
      this.female = res.data.female;
      this.press = res.data.press;
    });
  }
};
</script>
<style scoped>

#box1,#box2,#box3{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between
}
#man,#women,#publish{
  width:33%;
  text-align: center !important;
  /* border: 1px solid grey; */
  height:50px;
  font-size: 14px;
  margin:0;
  padding: 0;
  /* background-color: silver */
  /* margin-left:20px */
}
li{
  width:137.91px;
  line-height:50px;
 
}
p{
  font-size:16px;
  /* background-color:yellow; */
  margin:0;padding:0;
   height:50px;
   line-height:50px;
   padding-left:10px;
   font-weight: 800

}
</style>
