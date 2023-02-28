<template>
  <div style="display: flex">
    <div style="min-width: 270px">
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
    <div style="width: 100%;padding:10px 0;">
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
      <table border style="border-collapse:collapse;">
          <tr>
            <th colspan="6">药性</th>
            <th colspan="6">归经</th>
          </tr>
          <tr>
            <th colspan="2">阳</th>
            <th colspan="2">阴</th>
            <th rowspan="2" colspan="2">相从性</th>
            <th>五行</th>
            <td>木</td>
            <td>火</td>
            <td>土</td>
            <td>金</td>
            <td>水</td>
          </tr>
           <tr>
            <th colspan="2">四气</th>
            <th colspan="2">五味</th>
            <th>五色</th>
            <td>青</td>
            <td>赤</td>
            <td>黄</td>
            <td>白</td>
            <td>黑</td>
          </tr>
          <tr>
            <td>阳</td>
            <td>阴</td>
           <td>阳</td>
            <td>阴</td>
            <td>阳</td>
            <td>阴</td>

            <th>脏经</th>
            <td>肝</td>
            <td>心</td>
            <td>脾</td>
            <td>肺</td>
            <td>肾</td>
          </tr>
          <tr>
            <td>温热</td>
            <td>寒凉</td>
           <td>辛甘淡</td>
            <td>酸苦咸</td>
            <td rowspan="4">升浮</td>
            <td rowspan="4">沉降</td>

            <th>腑经</th>
            <td>胆</td>
            <td>小肠</td>
            <td>胃</td>
            <td>大肠</td>
            <td>膀胱</td>
          </tr>
          <tr>
            <td>气厚</td>
            <td>气薄</td>
            <td>味薄</td>
            <td>味厚</td>

            <th>五味</th>
            <td>酸</td>
            <td>苦</td>
            <td>甘</td>
            <td>辛</td>
            <td>咸</td>
          </tr>
           <tr>
            <td>发热与温</td>
            <td>发泄散表</td>
            <td>通窍利渗湿</td>
            <td>泄降</td>

            <th>五味之用</th>
            <td>涩收</td>
            <td>泻燥坚</td>
            <td>补和缓</td>
            <td>散润行</td>
            <td>下软坚</td>
          </tr>
          <tr>
            <td>浮</td>
            <td>降</td>
            <td>升</td>
            <td>沉</td>

            <th></th>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
      </table>
      <el-input v-model="search" size="large" placeholder="Type to search" />
      <el-table
        :data="filterTableData"
        height="600"
        style="width: 100%;"
        :row-class-name="tableRowClassName"
      >
        <el-table-column
          prop="ming"
          label="药名"
          :filter-method="filterTag"
          :filters="[{ text: '常用', value: 1 }]"
        >
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
import { ref, computed } from 'vue'
const search = ref('')
const filterTag = (value, row) => {
  return row.changyong === value
}


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
</style>
