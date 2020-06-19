<template>
  <div class="books">
    <header>
      <h1>本の検索 in Google Books API</h1>
      Keyword:
      <input type="text" class="form-control" v-model="key" />
      <button @click="getBooks">検索</button>
    </header>
    <ul>
      <div class="book" v-for="item in books.items" :key="item.id">
        <li>{{ item.volumeInfo.title }}</li>
        <div class="thumb">
          <img
            :src="item.volumeInfo.imageLinks.thumbnail"
            v-if="item.volumeInfo.imageLinks"
          />
          <div class="no-photo" v-else>404...</div>
        </div>
        <div class="content">
          <div class="title">{{ item.volumeInfo.title }}</div>
          <div class="sub-title">{{ item.volumeInfo.subtitle }}</div>
          <div class="description">{{ item.volumeInfo.description }}</div>
        </div>
      </div>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //返り値はオブジェクトなので{}で受ける
      books: {},
      keyword: "nuxt"
    };
  },
  methods: {
    getBooks() {
      fetch(
        "https://www.googleapis.com/books/v1/volumes?q=intitle:" + this.keyword
      )
        .then(res => {
          if (res.ok) {
            return res.json();
          }
        })
        .then(res => {
          this.books = res;
        });
    }
  },
  mounted() {
    //画面が開かれた状態でこの関数が呼ばれる
    this.getBooks();
  }
};
</script>

<style lang="scss" scoped>
$text-color: #333;
.books {
  width: 800px;
  margin: auto;
  color: $text-color;
  .book {
    display: flex;
    .thumb {
      margin-right: 10px;
    }
    .content {
      .title {
        font-size: 140%;
      }
      .sub-title {
        color: #888;
        margin-bottom: 20px;
      }
      .description {
        font-size: 80%;
        height: 4em;
        overflow: hidden;
      }
    }
  }
}
</style>
