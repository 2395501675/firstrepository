<template>
  <div>
    <div>
      <el-menu
        default-active="2"
        mode="horizontal"
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
              @click="(e) => showyao(child, e)"
            >
              {{ child.title }}
              {{
                child.danweiyao &&
                child.danweiyao.filter((i) => i.changyong).length + '/'
              }}{{ child.danweiyao && child.danweiyao.length }}
            </el-menu-item>
          </template>
        </el-sub-menu>
      </el-menu>
    </div>
    <div style="width: 100%; padding: 10px 0;">
      <el-table :data="zongyi.wuxing" v-if="false" style="width: 100%">
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
      <el-table
        :data="filterTableData"
        height="600"
        style="width: 100%;margin-bottom:30px;"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          prop="ming"
          label="药名"
          :filter-method="filterTag"
          :filters="[
            { text: '常用', value: 1 },
            { text: '阳药', value: 3 },
          ]"
        >
          <template #default="scope">
            {{ scope.row.index }}.
            <el-tag
              :type="scope.row.changyong === 1 ? 'success' : 'info'"
              disable-transitions
              >{{ scope.row.ming }}</el-tag
            >
            <el-icon
              title="阳药"
              style="vertical-align: middle; margin-left: 10px"
              v-if="scope.row.yangyao === 1"
              ><Sunny color="red"
            /></el-icon>
          </template>
        </el-table-column>
        <el-table-column prop="xingweiguijing" label="性味归经" />
        <el-table-column type="expand">
          <template #default="props">
            <div m="4" style="display: flex">
              <div class="left">
                <div >
                  <div v-show="!showYuanwen" v-for="(ziji, i) in props.row.ziji" :key="i">
                    <p m="t-0 b-2">
                      <b>{{ ziji[0] }}: </b> {{ ziji[1] }}
                    </p>
                  </div>
                </div>
                <el-button @click.prevent="showYuanwen = !showYuanwen"
                  >原文</el-button
                >
                <div v-show="showYuanwen">
                  <div
                    v-for="(yuanwen, i) in props.row.yuanwen.split('#')"
                    :key="i"
                  >
                    <p>{{ yuanwen }}</p>
                  </div>
                </div>
              </div>
              <div class="right">
                <img
                  v-if="props.row.img"
                  style="width: 200px"
                  :src="props.row.img"
                  alt=""
                />
                <h5>现在说明:</h5>
                <p v-for="(xiandai, i) in props.row.xiandai" :key="i">
                  <b>{{ xiandai[0] }}: </b>
                  <span>{{ xiandai[1] }} </span>
                </p>
              </div>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script setup>
import {
  Sunny,
} from '@element-plus/icons-vue'
import {
  menuList,
  zongyi
} from './data.js'
import { ref, computed } from 'vue'
const search = ref('')
const filterTag = (value, row) => {
  if (value === 3) {
    return row.yangyao === 1
  }
  return row.changyong === value
}
const showYuanwen = ref(false)

const danweiyao = ref([])
function showyao (item) {
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
.right {
  border-left: 1px solid #333;
  padding-left: 10px;
}
</style>
