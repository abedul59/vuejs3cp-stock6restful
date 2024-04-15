<template>
  <div v-if="cSign3">
    <table
      border="2"
      cellpadding="1"
      cellspacing="5"
      style="border: 1px solid black; margin-left: auto; margin-right: auto"
    >
      <caption>
        <FONT SIZE="6">稅後淨利年增率詳細資料</FONT>
      </caption>

      <tr>
        <td align="center">
          <div><FONT SIZE="7">年季</FONT></div>
        </td>
        <td align="center">
          <div><FONT SIZE="7">單位：百萬 新台幣</FONT></div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ff7575">
          <div>
            <FONT SIZE="7">{{ cc1N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cc1 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ff7575">
          <div>
            <FONT SIZE="7">{{ cc2N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cc2 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ff7575">
          <div>
            <FONT SIZE="7">{{ cc3N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cc3 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ff7575">
          <div>
            <FONT SIZE="7">{{ cc4N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cc4 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ff7575">
          <div>
            <FONT SIZE="7">{{ cc5N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cc5 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ff7575">
          <div>
            <FONT SIZE="7">{{ cc6N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cc6 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ff7575">
          <div>
            <FONT SIZE="7">{{ cc7N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cc7 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ff7575">
          <div>
            <FONT SIZE="7">{{ cc8N }}</FONT>
          </div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cc8 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center">
          <div><FONT SIZE="7">年季</FONT></div>
        </td>
        <td align="center">
          <div><FONT SIZE="7">單位：%</FONT></div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #b766ad">
          <div><FONT SIZE="7">最新1季年增率</FONT></div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cpc9 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #b766ad">
          <div><FONT SIZE="7">最新2季年增率</FONT></div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cpc10 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #b766ad">
          <div><FONT SIZE="7">最新3季年增率</FONT></div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cpc11 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ff7575">
          <div><FONT SIZE="7">評等</FONT></div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cSign3 }}</FONT>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
defineProps({
  cc1N: String,
  cc2N: String,
  cc3N: String,
  cc4N: String,
  cc5N: String,
  cc6N: String,
  cc7N: String,
  cc8N: String,

  cc1: String,
  cc2: String,
  cc3: String,
  cc4: String,
  cc5: String,
  cc6: String,
  cc7: String,
  cc8: String,
  cpc9: String,
  cpc10: String,
  cpc11: String,
  cSign3: String
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
