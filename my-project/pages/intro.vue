<template>
  <div>
    <h1>Intro💩duction</h1>
    <p>{{ message }}</p>
    <p>{{ todos }}</p>
    <ul>
      <li v-for="item in todos" :key="item.id">
        {{ item.label }}
      </li>
    </ul>
    <p>
      <button @click="addTodo()">追加</button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "こんにちは",
      todos: [
        { label: "💩", id: 0 },
        { label: "🍆", id: 1 },
        { label: "😀", id: 2 }
      ]
    };
  },
  methods: {
    addTodo() {
      this.todos.push({ label: "🍉", id: this.todos.length });
    }
  }
};
</script>

<style scoped></style>
