<template>
  <div v-if="cSign6">
    <table
      border="2"
      cellpadding="1"
      cellspacing="5"
      style="border: 1px solid black; margin-left: auto; margin-right: auto"
    >
      <caption>
        <FONT SIZE="6">現金流量詳細資料</FONT>
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
        <td align="center" style="background-color: #d6d6ad">
          <div>
            <FONT SIZE="7">{{ cf1N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cf1 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #d6d6ad">
          <div>
            <FONT SIZE="7">{{ cf2N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cf2 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #d6d6ad">
          <div>
            <FONT SIZE="7">{{ cf3N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cf3 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #d6d6ad">
          <div>
            <FONT SIZE="7">{{ cf4N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cf4 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #d6d6ad">
          <div>
            <FONT SIZE="7">{{ cf5N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cf5 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #d6d6ad">
          <div>
            <FONT SIZE="7">{{ cf6N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cf6 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #d6d6ad">
          <div>
            <FONT SIZE="7">{{ cf7N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cf7 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #d6d6ad">
          <div>
            <FONT SIZE="7">{{ cf8N }}</FONT>
          </div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cf8 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ffffaa">
          <div><FONT SIZE="7">四季累積</FONT></div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cf9 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #ffffaa">
          <div><FONT SIZE="7">六季累積</FONT></div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cf10 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #d6d6ad">
          <div><FONT SIZE="7">評等</FONT></div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cSign6 }}</FONT>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
defineProps({
  cf1N: String,
  cf2N: String,
  cf3N: String,
  cf4N: String,
  cf5N: String,
  cf6N: String,
  cf8N: String,

  cf1: String,
  cf2: String,
  cf3: String,
  cf4: String,
  cf5: String,
  cf6: String,
  cf7: String,
  cf8: String,
  cf9: String,
  cf10: String,
  cSign6: String
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
