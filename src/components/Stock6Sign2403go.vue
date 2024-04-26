<script setup>
import TotalScore from './TotalScore.vue'
import StockS1gn from './StockS1gn.vue'
import StockS2gn from './StockS2gn.vue'
import StockS3gn from './StockS3gn.vue'
import StockS4gn from './StockS4gn.vue'
import StockS5gn from './StockS5gn.vue'
import StockS6gn from './StockS6gn.vue'
import { ref } from 'vue'

const inputText2 = ref('')
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
  result2.value = `https://golang-stock6ex-restful-render.onrender.com/s6r202403/${inputText2.value}`

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
    <input type="text" v-model="inputText2" placeholder="請輸入台股代號" />
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
  <br />
  <stock-s3gn v-bind="tStock6data2"></stock-s3gn>
  <br />
  <stock-s4gn v-bind="tStock6data2"></stock-s4gn>
  <br />
  <stock-s5gn v-bind="tStock6data2"></stock-s5gn>
  <br />
  <stock-s6gn v-bind="tStock6data2"></stock-s6gn>
</template>
