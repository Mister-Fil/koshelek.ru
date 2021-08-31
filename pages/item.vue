<template>
  <div class="d-flex flex-column p-2 w-100 h-100 overflow-hidden">
    <div class="d-flex">
      <div class="flex-fill">
        <b-btn to="/" variant="outline-primary" class="m-1">Задачи</b-btn>
      </div>
      <div>
        <b-btn to="/item/manage" variant="link">Главная</b-btn>
        <b-btn to="/item/history" variant="link">История</b-btn>
      </div>
    </div>
    <NuxtChild class="d-flex w-100 h-100 overflow-hidden shadow"></NuxtChild>
  </div>
</template>

<script>
export default {
  mounted() {
    this.fetchItems()
  },
  methods: {
    fetchItems() {
      this.$store.dispatch('item/fetchItems')
    },
  },
}
</script>
