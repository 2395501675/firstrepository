<template>
<div style="display:flex">
 <div style="min-width:270px">
     <el-switch v-model="isCollapse" active-text="收起"
    inactive-text="展示" />
      <el-menu
        :collapse="isCollapse"
        default-active="1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
      <template v-for="(menu, i) in menuList" :key="menu.title" >
        <el-sub-menu v-if="menu.submenu" :index="i">
            <template #title>
              <div @click="() =>showYunwen(menu)">
                <i v-show="isCollapse">{{i+1}}<el-icon><Sunrise color="red"/></el-icon></i>
                <span v-show="!isCollapse" >{{i+1}}.{{ menu.title }}</span>
              </div>
            </template>
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
        <el-menu-item else :index="i">
          <div @click="() =>showYunwen(menu)">
            <i v-show="isCollapse">{{i+1}}<el-icon><Sunrise color="red"/></el-icon></i>
            <span v-show="!isCollapse" >{{i+1}}.{{ menu.title }}</span>
          </div>
        </el-menu-item>
      </template>
    
        
      </el-menu>
    </div>
    <div>
 <table border style="border-collapse:collapse;">
      <tr>
        <td>木</td>
        <td>火</td>
        <td>土</td>
        <td>金</td>
        <td>水</td>
      </tr>
      <tr>
        <td>甲乙</td>
        <td>丙丁</td>
        <td>戊己</td>
        <td>庚辛</td>
        <td>壬葵</td>
      </tr>
      <tr>
        <td>子</td>
      </tr>
    </table>
     <div style="width:100%" >
      <p><b>{{currentYW.title}}</b></p>
      <p v-for="(p, index) in currentYW.yuanwen" :key="index" :style="{color:textColor[p.person]}"> {{p.content}}</p>
    </div>
    </div>
   
   
</div>
   
</template>
<script setup>
import {
  menuList,
} from './data.js'
import{ref,computed} from 'vue'
import {
  Sunrise,
} from '@element-plus/icons-vue'
const search = ref('')
const isCollapse = ref(false)
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
.el-menu-vertical-demo{
  height:calc(100vh - 50px);
  overflow:auto;
}
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
