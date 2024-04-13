<script setup>
import { ref, toRefs, reactive, unRef } from 'vue'

const inputText2 = ref('測試!')
const result2 = ref('')
const stock6data2 = reactive({})
const c2StockName = ref('')
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
      const { cStockName, cNewestSeason } = toRefs(response)
      c2StockName.value = unRef(cStockName)
      const stock6data2 = reactive(response)

      console.log(c2StockName.value)
      console.log(cNewestSeason.value)
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

      <p>股票名稱: {{ c2StockName }}</p>
    </div>
  </div>
  <br />
</template>
