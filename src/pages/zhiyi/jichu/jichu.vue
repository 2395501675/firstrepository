

<template>
  <a href="#top">{{ msg }}</a>
  <button id="top" @click="() =>changeData()">单位</button>
  <button @click="() =>changeData(1)">成药</button>
  <button @click="() =>showXiaojie(1)">小结</button>
  <button @click="() =>showMiaosha(2)">秒杀</button>
  <div class="container">
    <ul v-if="showXiaojieFlag" class="xiaojie">
      <li v-for="jie in xiaojie" :key="jie"><b>{{jie.title}}</b>{{jie.content}}</li>
    </ul>
    <ul v-if="showMiaoshaFlag" class="miaosha">
      <li v-for="jie in miaosha" :key="jie">
        <b>{{jie.title}}</b>
        <span>{{jie.yao}}</span>
      </li>
    </ul>
    <hello-world :list="showData"></hello-world>
  </div>
  
</template>
<script setup>
import { ref } from 'vue'
import {data,xiaojie,miaosha,chengyao} from './data.js'
import HelloWorld from '../../../components/HelloWorld.vue'

const showXiaojieFlag = ref(false)
const showMiaoshaFlag = ref(false)
let showData = ref(data)
defineProps({
  msg: String
})
function changeData(flag) {
  console.log(flag)
  showData.value = !flag?data: chengyao
}
function showXiaojie() {
showXiaojieFlag.value = !showXiaojieFlag.value
}
function showMiaosha() {
showMiaoshaFlag.value = !showMiaoshaFlag.value
}
</script>
<style scoped>
.container{
  display: flex; 
  flex-wrap: wrap;
}
a{
  z-index: 2;
  position:fixed;
  bottom:0;
  right:0;
  font-size: 25px;
  text-decoration: none;
  display: block;
  color:#fff;
  background:blue;
}
ul{
    list-style: none;
    line-height: 1.5;
    padding: 0;
  }
  .xiaojie li{
    width: 100%;
    line-height: 2;
    border-bottom: 1px solid green;
    background: pink;
  }
  .miaosha{
    width: 100%;
    
  }
  .miaosha li{
      width: 100%;
      display: flex;
    line-height: 2;
       border-bottom: 2px solid green;
      background: pink;
      justify-content: space-between;
    }
</style>
