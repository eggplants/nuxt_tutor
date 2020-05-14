<template>
  <div class="container">
    <h1>筑波大学厚生会施設一覧表</h1>
    <!--
    <div v-for="item in kousei" v-bind:key="item.num">
      <span>{{ item.id }}</span>
      <span>{{ item.name }}</span>
    </div>
    -->
    <ul v-for="place in places" v-bind:key="place">
      <li>
        {{place}}
        <ul v-for="i in kousei" v-bind:key="i.name">
          <li v-if="i.place==place">
            <details>
              <summary>{{i.name}}</summary>
              <ul>
                <li>平日：{{i.time_weekday}}</li>
                <li>土曜：{{i.time_sat}}</li>
                <li>日祝：{{i.time_off}}</li>
              </ul>
            </details>
          </li>
        </ul>
      </li>
    </ul>
    <details>
      <summary>
        ソースは
        <a v-bind:href="sourceUrl1">ここ</a>と
        <a v-bind:href="sourceUrl2">ここ</a>
      </summary>
      <pre>
        <code class="language-js">
          {{kousei}}
        </code>
      </pre>
    </details>
  </div>
</template>

<script>
import kousei from "@/assets/json/kousei_fixed.json";

export default {
  props: {},
  components: {},
  data() {
    return {
      sourceUrl1: "http://www.tsukuba-koseikai.com/",
      sourceUrl2:
        "https://gist.github.com/eggplants/5daec400f9fef486ac18ea0efecb9071",
      kousei: kousei,
      fields: [
        { key: "num" },
        { key: "place" },
        { key: "name" },
        { key: "time(月~金)" },
        { key: "time(土)" },
        { key: "time(日・祝)" }
      ],
      places: Array.from(new Set(kousei.map(obj => obj.place))),
      place_each: Array.from(new Set(kousei.map(obj => obj.place)))
    };
  }
};
</script>

<style scoped>
table {
  border-collapse: collapse;
  border: 1px solid #666;
}

td,
th {
  border: 1px solid #666;
  padding: 0.3em 0.5em; /* 文字周りのスペース（パディング） */
}
</style>