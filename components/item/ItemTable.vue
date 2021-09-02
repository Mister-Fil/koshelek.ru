<template>
  <div ref="scroll" class="overflow-auto h-100">
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
  </div>
</template>

<script>
export default {
  name: 'ItemTable',
  data() {
    return {
      page: 3,
      pageMin: 3,
      limit: 25,
    }
  },
  computed: {
    getItemItemsFilterSort() {
      return this.$store.getters['item/getItemItemsFilterSort'].slice(
        0,
        this.page * this.limit
      )
    },
  },
  mounted() {
    this.handleDebouncedScroll = _.debounce(this.handleScroll, 100)
    this.$refs.scroll.addEventListener('scroll', this.handleDebouncedScroll)
  },
  beforeDestroy() {
    this.$refs.scroll.removeEventListener('scroll', this.handleDebouncedScroll)
  },
  methods: {
    addFavorite(item) {
      this.$store.dispatch('item/addFavorite', item)
    },
    handleScroll() {
      const next =
        this.$refs.scroll.scrollTop >
        this.$refs.scroll.clientHeight * (this.page - 1)
      const prev =
        this.$refs.scroll.scrollTop <
        this.$refs.scroll.clientHeight * (this.page - 3)
      if (next || prev) {
        const page = Math.ceil(
          this.$refs.scroll.scrollTop / this.$refs.scroll.clientHeight
        )
        if (page > this.pageMin) {
          this.page = page
        } else {
          this.page = this.pageMin
        }
      }
    },
  },
}
</script>

<style scoped></style>
