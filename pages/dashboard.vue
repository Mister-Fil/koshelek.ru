<template>
  <div class="d-flex flex-column p-2 w-100 h-100 overflow-hidden">
    <div class="d-flex bg-light">
      <div class="flex-fill">
        <b-btn to="/" variant="link">Задачи</b-btn>
        -> <span>задание 2</span>
      </div>
      <div>
        <b-btn to="/dashboard/manage" variant="link">Dashboard</b-btn>
        <b-btn to="/dashboard/blockchain" variant="link">Blockchain</b-btn>
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
      //
    },
  },
}
</script>
