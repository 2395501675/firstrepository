<script setup>
import { ref } from 'vue'

defineProps({
  list:Array
})

const detailName = ref({})
function showDetail(yao) {
  detailName.value = detailName.value===yao.name ?'':yao.name
}
</script>

<template>
    <ul v-for="(lei,index) in list" :key="lei.name" >
      <h4>{{index+1}}. {{lei.name}}
        -{{lei.list ?lei.list.length:(lei.children?lei.children.length:0)}}
        </h4>
      <div v-if="lei.children" class="container">
        <hello-world :list="lei.children"></hello-world>
      </div>
      <li v-else v-for="yao in lei.list" :key="yao.name" @click="showDetail(yao)">
        <span :style="yao.name === detailName?'color:red':''">{{yao.name}}</span>
        <div class="detail" v-show="yao.name === detailName">
         {{yao.name}}
          <p v-if="yao.xingwei"><b>性味归经：</b>  {{yao.xingwei}}</p>
          <p v-if="yao.gongneng"><b>功能：</b>  {{yao.gongneng}}</p>
          <p v-if="yao.tedian"><b> 特点</b>：{{yao.tedian}}</p>
          <p v-if="yao.bingzhen"><b>病证：</b> <span v-html="yao.bingzhen"></span></p>
          <p v-if="yao.zhuyi"><b>注意：</b>  {{yao.zhuyi}}</p>
          <p v-if="yao.jiqiao"><b>技巧：</b> {{yao.jiqiao}}</p>
          <p v-if="yao.jiqiao"><b>配伍：</b> {{yao.peiwu}}</p>
          <p v-if="yao.qita">：{{yao.qita}}</p>
        </div>
        </li>
    </ul>
      
</template>

<style scoped>
.container{
  display: flex; 
  flex-wrap: wrap;

}
.detail{
  width: 100%;
  border:1px solid red;
  position: fixed;
  box-sizing: border-box;
  top:60px;
  left:0;
  z-index: 1;
  background: yellow;
  padding: 5px;
}
ul{
    list-style: none;
    line-height: 1.5;
  }
  li{
    position: relative;
  }
</style>
