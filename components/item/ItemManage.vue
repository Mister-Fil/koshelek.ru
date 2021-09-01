<template>
  <div class="flex-sm-row flex-column">
    <div class="d-flex flex-column p-2 w-100 h-100 overflow-hidden">
      <div class="d-flex p-2 shadow-sm">
        <div class="h3 px-2 py-1 m-0">Все</div>
        <div class="flex-fill">
          <b-input
            v-model="filters.name"
            type="search"
            placeholder="Фильтровать элементы списка"
          ></b-input>
        </div>
      </div>
      <div class="overflow-hidden p-2 h-100">
        <item-table></item-table>
      </div>
    </div>
    <div class="d-flex flex-column p-2 w-100 h-100 overflow-hidden">
      <div class="p-2 shadow-sm">
        <div class="h3 text-center px-2 py-1 m-0">Избранное</div>
      </div>
      <div class="overflow-hidden p-2 h-100">
        <item-favorite-table></item-favorite-table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemManage',
  data() {
    return {
      filters: {
        name: '',
      },
    }
  },
  watch: {
    'filters.name'(newValue) {
      this.setItemFilter('name', newValue)
    },
  },
  mounted() {
    this.filters.name = this.$store.getters['item/getNameFilter']
  },
  methods: {
    setItemFilter(fieldName, value) {
      this.$store.commit('item/setFilter', {
        fieldName,
        value,
      })
    },
  },
}
</script>
