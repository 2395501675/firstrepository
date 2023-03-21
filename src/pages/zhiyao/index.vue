<template>
  <div style="text-align: center;min-height:80vh;">
    <div class="router">
      <router-link v-for="(router,index) in zhiyaoChildren" :to="`/zhiyao/${router.path}`" :key="router.path">{{index+1}}.{{router.meta.title}}</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<script setup>
import { zhiyaoChildren } from '../../router'
</script>

<style scoped>
.router {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
a {
  line-height: 2;
  display: block;
  margin-right: 20px;
}
p {
  text-align: left;
}
</style>