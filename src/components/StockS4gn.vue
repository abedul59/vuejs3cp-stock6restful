<template>
  <div v-if="cSign4">
    <table
      border="2"
      cellpadding="1"
      cellspacing="5"
      style="border: 1px solid black; margin-left: auto; margin-right: auto"
    >
      <caption>
        <FONT SIZE="6">EPS詳細資料</FONT>
      </caption>

      <tr>
        <td align="center">
          <div><FONT SIZE="7">年季</FONT></div>
        </td>
        <td align="center">
          <div><FONT SIZE="7">單位：元</FONT></div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ffaad5">
          <div>
            <FONT SIZE="7">{{ cd1N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cd1 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ffaad5">
          <div>
            <FONT SIZE="7">{{ cd2N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cd2 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ffaad5">
          <div>
            <FONT SIZE="7">{{ cd3N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cd3 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ffaad5">
          <div>
            <FONT SIZE="7">{{ cd4N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cd4 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ffaad5">
          <div>
            <FONT SIZE="7">{{ cd5N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cd5 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ffaad5">
          <div>
            <FONT SIZE="7">{{ cd6N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cd6 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ffaad5">
          <div>
            <FONT SIZE="7">{{ cd7N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cd7 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ffaad5">
          <div>
            <FONT SIZE="7">{{ cd8N }}</FONT>
          </div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cd8 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ffaad5">
          <div><FONT SIZE="7">評等</FONT></div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cSign4 }}</FONT>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
defineProps({
  cd1N: String,
  cd2N: String,
  cd3N: String,
  cd4N: String,
  cd5N: String,
  cd6N: String,
  cd7N: String,
  cd8N: String,

  cd1: String,
  cd2: String,
  cd3: String,
  cd4: String,
  cd5: String,
  cd6: String,
  cd7: String,
  cd8: String,
  cSign4: String
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
