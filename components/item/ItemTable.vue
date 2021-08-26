<template>
  <table class="table table-hover">
    <tbody>
      <tr v-for="itemsItem in getItemItemsFilterSort" :key="itemsItem.id">
        <td class="w-100">
          {{ itemsItem.name }}
        </td>
        <td>
          <b-btn
            v-if="itemsItem.id !== 0"
            variant="outline-primary"
            @click="addFavorite(itemsItem)"
          >
            Add to favorites
          </b-btn>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ItemTable',
  computed: {
    getItemItemsFilterSort() {
      return this.$store.getters['item/getItemItemsFilterSort']
    },
  },
  methods: {
    addFavorite(item) {
      this.$store.dispatch('item/addFavorite', item)
    },
  },
}
</script>

<style scoped></style>
