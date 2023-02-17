<template>
<div style="display:flex">
 <div style="min-width:270px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu v-for="(menu, i) in menuList" :key="menu.title" :index="i">
          <template #title>{{ menu.title }}</template>
          <template v-for="(child, childIndex) in menu.submenu">
            {{ child.submenu }}
            <el-sub-menu
              :index="i + '-' + childIndex"
              :key="child.title"
              v-if="child.submenu"
            >
              <template #title>{{ child.title }}</template>
              <el-menu-item
                v-for="(third, thirdIndex) in child.submenu"
                :index="i + '-' + childIndex + '-' + thirdIndex"
                :key="third.title"
              >
                {{ third.title }}
              </el-menu-item>
            </el-sub-menu>
            <el-menu-item
              v-else
              :index="i + '-' + childIndex"
              :key="child.title"
            >
              {{ child.title }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </el-menu>
    </div>
    <div style="width:100%">
      <el-table :data="zongyi.wuxing" style="width: 100%">
        <el-table-column prop="weiyi" label="味义" />
        <el-table-column prop="seyi" label="色义" />
        <el-table-column prop="weiyong" label="五味之用" />
        <el-table-column prop="rujing" label="色味入经" />
        <el-table-column prop="wuzangbuxie" label="脏补泻" /> 
        <el-table-column prop="xiangsheng" label="五行相生" /> 
        <el-table-column prop="xiangke" label="五行相克" /> 
        <el-table-column prop="bingjin" label="五病所禁" /> 
        <el-table-column prop="suoshang" label="五病所伤" /> 
      </el-table>
    </div>
</div>
   
</template>
<script setup>
import {
  menuList,
  zongyi
} from './data.js'

</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
}
ul,
li {
  list-style-type: none;
}
</style>
