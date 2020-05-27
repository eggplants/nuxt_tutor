<template>
  <div>
    <Logo />
    <h1>Introduction</h1>
    <p>{{covid19}}</p>
    <Counter :num="todos.length" @changed="changedCounter" />
    <!-- <p>{{message}}</p>
    <p>{{todos}}</p>-->
    <ul>
      <li v-for="item in todos" :key="item.id">{{item.label}}</li>
    </ul>
    <div class="control-area">
      <input type="text" v-model="message" />
      <button @click="addTodo()">追加</button>
    </div>
  </div>
</template>

<script>
import Logo from "../components/Logo";
import Counter from "../components/Counter";
export default {
  components: {
    Logo,
    Counter
  },
  data() {
    return {
      message: "",
      todos: [
        { label: "みかん", id: 0 },
        { label: "オレンジ", id: 1 },
        { label: "バナナ", id: 2 }
      ],
      covid19: {}
    };
  },
  computed: {
    myComputed() {
      return "りんご" + this.todos[0].label;
    }
  },
  methods: {
    addTodo() {
      if (this.message === "") return; // 文字が入ってなければ、この関数を終わらせる
      this.todos.push({ label: this.message, id: this.todos.length }); // todo配列にデータを追加する
      this.message = ""; // 入力した文字を空にする
    },
    changedCounter(params) {
      console.log("changed", params);
    },
    jsonLoader(url) {
      return new Promise((resolve, reject) => {
        fetch(url)
          .then(res => {
            if (res.ok) {
              return res.json();
            } else {
              reject(res);
              //console.log(res);
            }
          })
          .then(data => {
            resolve(data);
            //console.log(data); // 成功してデータが取得できる
          });
      });
    }
  },
  created() {
    this.jsonLoader(
      "https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/staging/data/data.json"
    )
      .then(res => {
        console.log(res);
        this.covid19 = res;
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
}
li {
  border: 1px solid #ccc;
  list-style-type: none;
  margin: 5px;
  padding: 10px;
}
.control-area {
  border-top: 1px solid #000;
  padding: 10px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
}

.control-area input[type="text"] {
  width: 70vw;
  font-size: 100%;
}
</style>
