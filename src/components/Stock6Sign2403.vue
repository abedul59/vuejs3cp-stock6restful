<script setup>
import TotalScore from './TotalScore.vue'
import StockS1gn from './StockS1gn.vue'
import StockS2gn from './StockS2gn.vue'
import { ref } from 'vue'

const inputText2 = ref('測試!')
const result2 = ref('')

const tStockName = ref('')
const tNewestSeason = ref('')
const tStock6data2 = ref({}) //tStock6data2為restful傳遞來的物件

defineProps({
  msg: {
    type: String,
    required: true
  }
})

function handleSubmit() {
  result2.value = `https://stock6-restfulex.onrender.com/api/Stock6Sign202402/getstockinfo/${inputText2.value}`

  console.log(`最新得到網址為${result2.value}`)
  fetch(result2.value)
    .then((data) => data.json())
    .then((response) => {
      const { cStockName, cNewestSeason } = response
      tStockName.value = cStockName
      tNewestSeason.value = cNewestSeason
      tStock6data2.value = response

      console.log(response)

      console.log(tStockName.value)
      console.log(tNewestSeason.value)
      console.log(tStock6data2.value)
    })
}
</script>

<template>
  <div class="hello">
    <input type="text" v-model="inputText2" placeholder="輸入台股代號" />
    <button @click="handleSubmit">Submit</button>
    <div v-if="result2">
      <p>Result2: {{ result2 }}</p>

      <p>股票名稱: {{ tStockName }}</p>
      <p>最新財報季度: {{ tNewestSeason }}</p>
    </div>
  </div>
  <br />

  <total-score v-bind="tStock6data2"></total-score>
  <br />
  <stock-s1gn v-bind="tStock6data2"></stock-s1gn>
  <br />
  <stock-s2gn v-bind="tStock6data2"></stock-s2gn>
</template>
