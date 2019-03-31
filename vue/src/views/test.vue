<template>
  <div id="box" @click="_show" ref="ground">
    <div id="p1">{{str.title}}</div>
    <div v-html="cpContent" id="p2" ref="size"></div>

    <div class="show" v-if="show">
      <ul id="ull">
        <li @click.stop="font">字体</li>
        <li @click.stop="ground">背景</li>
      </ul>
    </div>

    <div class="show1" v-if="show2">
      <p @click.stop="minus" id="jian">-</p>
      <p style="float:left;textAlign:center;marginLeft:150px">字号{{size}}</p>
      <p @click.stop="plus" id="jia">+</p>
    </div>

    <div v-if="show3" class="show3">
      <p id="red" @click.stop="yellow" style="background:yellow;border:1px solid yellow">grey</p>
      <p id="blue" @click.stop="green" style="background:green;border:1px solid green">green</p>
      <p id="pink" @click.stop="pink" style="background:pink;border:1px solid pink">pink</p>
    </div>
  </div>
</template>