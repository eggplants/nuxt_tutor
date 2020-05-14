<template>
  <div>
    <Logo />
    <h1>TEST★PAGE</h1>
    <ul>
      <li v-for="item in todos" :key="item.id">{{ item.label }}</li>
    </ul>
    <details>
      <summary>
        ソースは
        <a v-bind:href="source">ここ</a>
      </summary>
      <script
        src="https://gist.githubusercontent.com/eggplants/5daec400f9fef486ac18ea0efecb9071/raw/130e23543377200e412bf2ab6361bf91ba95ee91/kousei_fixed.json"
      ></script>
    </details>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  components: {},
  source() {
    return "https://gist.github.com/eggplants/5daec400f9fef486ac18ea0efecb9071";
  },
  methods: {
    createdJSON() {
      fetch(
        "https://gist.githubusercontent.com/eggplants/5daec400f9fef486ac18ea0efecb9071/raw/130e23543377200e412bf2ab6361bf91ba95ee91/kousei_fixed.json"
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(res => {
          console.log(res);
        })
        .catch(err => {});
    }
  }
};
</script>

<style scoped>
</style>