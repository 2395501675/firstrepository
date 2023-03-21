<template>
  <h2>yao1</h2>
  <el-tabs v-model="activeName" class="demo-tabs">
    <el-tab-pane label="药化" name="first">
      <el-tabs class="demo-tabs">
        <el-tab-pane label="总论" name="first1">
          <div>
            <img src="@/assets/yaohua.png" alt="" />
            <img src="@/assets/11.png" alt="" />
            <h5>中药化学成分的理化性质研究包括:</h5>
            <p>{{ lihuaxingzhi }}</p>
          </div>
          <b>中药化学成分的提取分离方法</b>
          <el-tree
            :data="tiqv"
            node-key="id"
            :default-expanded-keys="[1, 2, 3]"
          />
        </el-tab-pane>
        <el-tab-pane label="分论" name="second1">
          <el-collapse>
            <el-collapse-item
              v-for="(item, index) in yaohuafenlun"
              :title="`${index +1}. ${item.title}`"
              :name="index"
              :key="item.title"
            >
              <h4>{{ item.dingyi }}</h4>
              <h4>{{ item.des }}</h4>
              <p>
              <b>技巧：</b>
              天仙黄马千里川，雷公严防黄花山<br>
              天仙（天仙子）黄（黄连）马（马钱子）千里（千里光）川（川乌），<br>
              雷公（雷公藤）严（延胡索）防（防己）黄（麻黄）花（洋金花）山（山豆根）。
             </p>
              <el-tooltip
                class="box-item"
                effect="dark"
                :content="item.kuozhan"
                placement="top-start"
              >
                <el-button>扩展</el-button>
              </el-tooltip>
              <p><b>分布技巧：</b>{{ item.fenbujiqiao }}</p>
              <el-table :data="item.fenbu" style="width: 100%">
                <el-table-column prop="title" label="植物类型" />
                <el-table-column prop="content" label="科属" />
              </el-table>
              <h5>生物碱的分类及结构特征</h5>
             <img src="@/assets/1-1.png" alt="">
             <img src="@/assets/1-2.png" alt="">
             
            </el-collapse-item>
          </el-collapse>
        </el-tab-pane>
      </el-tabs>
    </el-tab-pane>
    <el-tab-pane label="鉴定" name="second">
      <el-tree
            :data="jianding"
            node-key="id"
          />
      <el-tree
            :data="keshu"
            node-key="id"
          />
    </el-tab-pane>
    <el-tab-pane label="制剂" name="third">
      <el-tree
            :data="zhiji"
            node-key="id"
          />
    </el-tab-pane>
    <el-tab-pane label="炮制" name="fourth">炮制</el-tab-pane>
  </el-tabs>
</template>
<script lang="ts" setup>
import { tiqv, lihuaxingzhi, yaohuafenlun,jianding,zhiji,keshu } from "./data.js";

import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("second");

</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
}
ul, li{
  list-style-type: none;
}
</style>
