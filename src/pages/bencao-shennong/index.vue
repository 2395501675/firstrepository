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
      <el-table :data="zongyi.wuxing" v-if="danweiyao.length ===0" style="width: 100%" >
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

      <el-input v-model="search" size="large" placeholder="Type to search" />
      <el-table :data="filterTableData" height="800" style="width: 100%" :row-class-name="tableRowClassName">
        <el-table-column prop="ming" label="药名"
        :filter-method="filterTag"
        :filters="[
        { text: '常用', value: 1 },
      ]">
         <template #default="scope">
        <el-tag
          :type="scope.row.changyong === 1 ? 'success' : 'info'"
          disable-transitions
          >{{ scope.row.ming }}</el-tag
        >
      </template>
      </el-table-column>
        <el-table-column prop="xingweiguijing" label="性味归经" />
        <el-table-column prop="gongneng" label="功能主治" />
        <el-table-column prop="tedian" label="特点" />
        <el-table-column prop="jinji" label="禁忌" />
        <el-table-column prop="paozhi" label="炮制" />
        <el-table-column prop="fangji" label="方剂" />
        <el-table-column prop="qita" label="其他" />
       
      </el-table>
    </div>
</div>
   
</template>
<script setup>
import {
  menuList,
  zongyi
} from './data.js'
import{ref,computed} from 'vue'
const search = ref('')
const filterTag = (value, row) => {
  return row.changyong === value
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
