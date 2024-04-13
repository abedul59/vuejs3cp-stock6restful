<script setup>
import { ref, reactive } from 'vue'

const inputText2 = ref('測試!')
const result2 = ref('')
const stock6data2 = reactive({})
const cStockName2 = ref('')
const cNewestSeason2 = ref('')
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
      cStockName2.value = cStockName
      cNewestSeason2.value = cNewestSeason

      const stock6data2 = reactive(response)

      console.log(cStockName2.value)
      console.log(cNewestSeason2.value)
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

      <p>股票名稱: {{ cStockName2 }}</p>
    </div>
  </div>
  <br />
</template>
