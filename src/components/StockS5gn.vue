<template>
  <div v-if="cSign5">
    <table
      border="2"
      cellpadding="1"
      cellspacing="5"
      style="border: 1px solid black; margin-left: auto; margin-right: auto"
    >
      <caption>
        <FONT SIZE="6">存貨週轉率詳細資料</FONT>
      </caption>

      <tr>
        <td align="center">
          <div><FONT SIZE="7">年季</FONT></div>
        </td>
        <td align="center">
          <div><FONT SIZE="7">單位：次</FONT></div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #a3d1d1">
          <div>
            <FONT SIZE="7">{{ ce1N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ ce1 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #a3d1d1">
          <div>
            <FONT SIZE="7">{{ ce2N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ ce2 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #a3d1d1">
          <div>
            <FONT SIZE="7">{{ ce3N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ ce3 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #a3d1d1">
          <div>
            <FONT SIZE="7">{{ ce4N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ ce4 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #a3d1d1">
          <div>
            <FONT SIZE="7">{{ ce5N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ ce5 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #a3d1d1">
          <div>
            <FONT SIZE="7">{{ ce6N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ ce6 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #a3d1d1">
          <div>
            <FONT SIZE="7">{{ ce7N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ ce7 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #a3d1d1">
          <div>
            <FONT SIZE="7">{{ ce8N }}</FONT>
          </div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ ce8 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #a3d1d1">
          <div><FONT SIZE="7">評等</FONT></div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cSign5 }}</FONT>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
defineProps({
  ce1N: String,
  ce2N: String,
  ce3N: String,
  ce4N: String,
  ce5N: String,
  ce6N: String,
  ce7N: String,
  ce8N: String,

  ce1: String,
  ce2: String,
  ce3: String,
  ce4: String,
  ce5: String,
  ce6: String,
  ce7: String,
  ce8: String,

  cSign5: String
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
