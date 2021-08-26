<template>
  <table class="table table-hover">
    <tbody>
      <tr v-for="itemsItem in getFavorites" :key="itemsItem.id">
        <td class="w-100">
          {{ itemsItem.name }}
        </td>
        <td>
          <b-btn
            v-if="itemsItem.id !== 0"
            variant="outline-danger"
            @click="removeFavorite(itemsItem)"
          >
            remove
          </b-btn>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'ItemFavoriteTable',
  computed: {
    getFavorites() {
      return this.$store.getters['item/getFavorites']
    },
  },
  methods: {
    removeFavorite(item) {
      this.$store.dispatch('item/removeFavorite', item)
    },
  },
}
</script>
