<script setup>
import TotalScore from './TotalScore.vue'
import { ref, reactive } from 'vue'

const inputText2 = ref('測試!')
const result2 = ref('')
const stock6data2 = reactive({})
const tStockName = ref('')
const tNewestSeason = ref('')
console.log(stock6data2)

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

      const stock6data2 = response

      console.log(tStockName.value)
      console.log(tNewestSeason.value)
      console.log(stock6data2)
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

  <total-score v-bind="stock6data2"></total-score>
</template>
