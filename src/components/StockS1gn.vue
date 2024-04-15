<template>
  <div v-if="cSign1">
    <table
      border="2"
      cellpadding="1"
      cellspacing="5"
      style="border: 1px solid black; margin-left: auto; margin-right: auto"
    >
      <caption>
        <FONT SIZE="6">營收詳細資料</FONT>
      </caption>

      <tr>
        <td align="center">
          <div><FONT SIZE="7">年月</FONT></div>
        </td>
        <td align="center">
          <div><FONT SIZE="7">單位：%</FONT></div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #dcb5ff">
          <div><FONT SIZE="7">111/1,2月平均</FONT></div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cluX }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #dcb5ff">
          <div>
            <FONT SIZE="7">{{ ca1N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cna1 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #dcb5ff">
          <div>
            <FONT SIZE="7">{{ ca2N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cna2 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #dcb5ff">
          <div>
            <FONT SIZE="7">{{ ca3N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cna3 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #dcb5ff">
          <div>
            <FONT SIZE="7">{{ ca4N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cna4 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #dcb5ff">
          <div>
            <FONT SIZE="7">{{ ca5N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cna5 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #dcb5ff">
          <div>
            <FONT SIZE="7">{{ ca6N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cna6 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #dcb5ff">
          <div>
            <FONT SIZE="7">{{ ca7N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cna7 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ff0080">
          <div><FONT SIZE="7">六個月平均</FONT></div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cna9 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ff0080">
          <div><FONT SIZE="7">最新一個月月增率（一般情況）</FONT></div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cna10 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #dcb5ff">
          <div><FONT SIZE="7">評等</FONT></div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cSign1 }}</FONT>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
defineProps({
  cluX: String,
  ca1N: String,
  ca2N: String,
  ca3N: String,
  ca4N: String,
  ca5N: String,
  ca6N: String,
  ca7N: String,

  cna1: String,
  cna2: String,
  cna3: String,
  cna4: String,
  cna5: String,
  cna6: String,
  cna7: String,
  cna9: String,
  cna10: String,
  cSign1: String
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
