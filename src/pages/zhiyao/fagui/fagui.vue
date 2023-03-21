<template>
  <h2>综合</h2>
  <el-tree
            :data="tiqv"
            node-key="id"
          />
</template>
<script lang="ts" setup>
import { tiqv, lihuaxingzhi, yaohuafenlun,jianding } from "./data.js";

import { ref } from "vue";
import type { TabsPaneContext } from "element-plus";

const activeName = ref("first");

</script>
<style>
.demo-tabs > .el-tabs__content {
  padding: 32px;
}
ul, li{
  list-style-type: none;
}
</style>
