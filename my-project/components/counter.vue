<template>
  <div class="counter">
    <button>-</button>
    <div class="num">{{ count }}</div>
    <button @click="buttonClicked(1)">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    buttonClicked(_val) {
      this.count += _val;
      if (this.count < 0) {
        this.count = 0;
      }
      this.$emit("changed", this.count);
    }
  },
  created() {
    this.count = this.num;
  }
};
</script>

<style scoped>
.counter {
  display: flex;
}
.num {
  font-size: 120%;
  margin: 10px;
}
</style>