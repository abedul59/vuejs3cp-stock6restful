<template>
  <div v-if="cSign2">
    <table
      border="2"
      cellpadding="1"
      cellspacing="5"
      style="border: 1px solid black; margin-left: auto; margin-right: auto"
    >
      <caption>
        <FONT SIZE="6">營益率詳細資料</FONT>
      </caption>

      <tr>
        <td align="center">
          <div><FONT SIZE="7">年季</FONT></div>
        </td>
        <td align="center">
          <div><FONT SIZE="7">單位：%</FONT></div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #9999cc">
          <div>
            <FONT SIZE="7">{{ cb1N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cb1 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #9999cc">
          <div>
            <FONT SIZE="7">{{ cb2N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cb2 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #9999cc">
          <div>
            <FONT SIZE="7">{{ cb3N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cb3 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #9999cc">
          <div>
            <FONT SIZE="7">{{ cb4N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cb4 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #9999cc">
          <div>
            <FONT SIZE="7">{{ cb5N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cb5 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #9999cc">
          <div>
            <FONT SIZE="7">{{ cb6N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cb6 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #9999cc">
          <div>
            <FONT SIZE="7">{{ cb7N }}</FONT>
          </div>
        </td>
        <td align="center">
          <div>
            <FONT SIZE="7">{{ cb7 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #9999cc">
          <div>
            <FONT SIZE="7">{{ cb8N }}</FONT>
          </div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cb8 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #2894ff">
          <div><FONT SIZE="7">近四季平均</FONT></div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cb9 }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #2894ff">
          <div><FONT SIZE="7">最新一季季增率</FONT></div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cb10p }}</FONT>
          </div>
        </td>
      </tr>

      <tr>
        <td align="center" style="background-color: #9999cc">
          <div><FONT SIZE="7">評等</FONT></div>
        </td>
        <td>
          <div align="center">
            <FONT SIZE="7">{{ cSign2 }}</FONT>
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<script setup>
defineProps({
  cb1N: String,
  cb2N: String,
  cb3N: String,
  cb4N: String,
  cb5N: String,
  cb6N: String,
  cb7N: String,
  cb8N: String,

  cb1: String,
  cb2: String,
  cb3: String,
  cb4: String,
  cb5: String,
  cb6: String,
  cb7: String,
  cb8: String,
  cb9: String,
  cb10p: String,
  cSign2: String
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
