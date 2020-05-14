<template>
  <div>
    <Logo />
    <h1>Intro💩duction</h1>
    <Counter :num="todos.length" />
    <!--
    <p>{{ message }}</p>
    <p>{{ todos }}</p>-->
    <ul>
      <li v-for="item in todos" :key="item.id">{{ item.label }}</li>
    </ul>
    <div class="control-area">
      <input type="text" v-model="message" />
      <button @click="addTodo()">追加</button>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo";
import Counter from "../components/counter";
export default {
  props: {
    num: {
      type: Number,
      required: true
    }
  },
  components: {
    Logo,
    Counter
  },
  data() {
    return {
      message: "",
      todos: [
        { label: "💩", id: 0 },
        { label: "🍆", id: 1 },
        { label: "😀", id: 2 }
      ]
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ label: this.message, id: this.todos.length });
    },
    changedCounter(params) {
      console.log("changed", params);
    },
    created() {
      fetch(
        "https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/staging/data/data.json"
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
.control-area input[type="text"] {
  width: 70vw;
  border-top: 1px solid #000;
  padding-top: 10px;
  position: fixed;
  border: 0;
  left: 0;
  width: 100vw;
}
ul {
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  list-style-type: none;
  margin: 0;
  padding: 10px;
}
</style>