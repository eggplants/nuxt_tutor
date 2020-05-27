<template>
    <div>
        <h1>hoge</h1>
        <p>{{counter}}</p>

        <p>
            <button @click="clicked">こんにちは</button>
            <button @click="loadJSON">aaaa</button>
        </p>
        <ul>
            <li v-for="item in todos" :key="item.id">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    computed : {
        counter() {
            return this.$store.state.counter;
        },
        todos() {
            return this.$store.state.todos;
        }
    },
    methods : {
        clicked(){
            //mutationへのアクセスはcommit()で呼び出す
            //同期処理
            this.$store.commit("increment")
        },
        async loadJSON() {
            const p = await this.$store.dispatch("jsonLoader");
            console.log(p);
        }

    }
}
</script>