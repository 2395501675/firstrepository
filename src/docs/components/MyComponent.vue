<template>
  <div>
    <table border style="border-collapse: collapse;width:max-content;">
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
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    content: String,
  },
};
</script>
