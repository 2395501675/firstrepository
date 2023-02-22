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
          <template #title><span  @click="() =>showYunwen(menu)">{{i+1}}.{{ menu.title }}</span></template>
          <template v-for="(child, childIndex) in menu.submenu">
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
              @click="(e) =>showyao(child,e)"
            >
              {{ child.title }}
              {{child.danweiyao && child.danweiyao.filter(i =>i.changyong).length + '/'}}{{child.danweiyao && child.danweiyao.length}}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </el-menu>
    </div>
    <div style="width:100%" >
      <p><b>{{currentYW.title}}</b></p>
      <p v-for="(p, index) in currentYW.yuanwen" :key="index" :style="{color:textColor[p.person]}"> {{p.content}}</p>
    </div>
</div>
   
</template>
<script setup>
import {
  menuList,
} from './data.js'
import{ref,computed} from 'vue'
const search = ref('')
const filterTag = (value, row) => {
  return row.changyong === value
}
const textColor={
  'pangbai':'',
  'huangdi':'brown',
  'qibo':'blue'
}
const currentYW = ref({})
function showYunwen(item) {
  currentYW.value = item
  console.log(111,item,currentYW)
}

const danweiyao = ref([])
function showyao(item) {
  danweiyao.value = item.danweiyao
}

const filterTableData = computed(() =>
  danweiyao.value.filter(
    (data) =>
      !search.value ||
      data.ming.toLowerCase().includes(search.value.toLowerCase())
  )
)
</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
}
ul,
li {
  list-style-type: none;
}
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}

</style>
