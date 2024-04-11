<script setup>
import { ref } from 'vue'

const inputText2 = ref('測試!')
const result2 = ref('')

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
      console.log(cStockName)
      console.log(cNewestSeason)
    })
}
</script>

<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <input type="text" v-model="inputText2" placeholder="輸入台股代號" />
    <button @click="handleSubmit">Submit</button>
    <div v-if="result2">
      <p>Result2: {{ result2 }}</p>
    </div>
  </div>
  <br />
</template>
