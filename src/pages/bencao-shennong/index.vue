<template>
  <h2></h2>
  <el-row class="tac">
    <el-col :span="6">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu v-for="(menu, i) in menuList" :key="menu.title" :index="i">
          <template #title>{{ menu.title }}</template>
          <template v-for="(child, childIndex) in menu.submenu">
            {{child.submenu}}
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
    </el-col>
  </el-row>
</template>
<script lang="ts" setup>
import {
  menuList,
  lihuaxingzhi,
  yaohuafenlun,
  jianding,
  zhiji,
  keshu,
} from './data.js'

import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('second')
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
