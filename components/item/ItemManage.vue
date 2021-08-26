<template>
  <div class="d-flex w-100 h-100 overflow-hidden">
    <div class="d-flex flex-column p-2 w-50 h-100 overflow-hidden">
      <div class="d-flex p-2">
        <div class="h3 px-2 py-1 m-0">Все</div>
        <div class="flex-fill">
          <b-input
            v-model="filters.name"
            placeholder="Фильтровать элементы списка"
          ></b-input>
        </div>
      </div>
      <div class="overflow-hidden p-2 h-100">
        <div class="overflow-auto h-100">
          <item-table></item-table>
        </div>
      </div>
    </div>
    <div class="d-flex flex-column p-2 w-50 h-100 overflow-hidden">
      <div class="p-2">
        <div class="h3 text-center px-2 py-1 m-0">Избранное</div>
      </div>
      <div class="overflow-hidden p-2 h-100">
        <div class="overflow-auto h-100">
          <item-favorite-table></item-favorite-table>
        </div>
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
    'filter.name'(newValue) {
      this.setItemFilter('name', newValue)
    },
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
