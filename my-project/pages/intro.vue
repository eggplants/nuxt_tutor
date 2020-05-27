<template>
  <div>
    <Logo />
    <h1>Intro💩duction</h1>
    <Counter :num="todos.length" @changed="changedCounter"/>
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
    {{covid19}}
  </div>
</template>

<script>
import Logo from "../components/Logo";
import Counter from "../components/Counter";
export default {
  props: {
    // num: {
    //   type: Number,
    //   required: true
    // },
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
      ],
      covid19: {}
    };
  },
  computed :{
    // プロパティの変更を用いて算出する
    myComputed() {
      return "リンゴ" + this.todos[0].label;
    }
  },
  methods: {
jsonLoader(url) {
 return new Promise((resolce, reject) => {
 fetch(url)
 .then(res => {
 if (res.ok) {
 return res.json();
 } else {
 return reject(res);
 }
 })
 .then(data => {
 resolve(data);
 });
 });
 },
    addTodo() {
      if (this === "") return;
      this.todos.push({ label: this.message, id: this.todos.length });
      this.message = "";
    },
    changedCounter(params) {
      console.log("changed", params);
    },
    created() {
      this.jsonLoader(
        "https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/staging/data/data.json"
        ).then(res =>{
          this.covid19 = res;
        });
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