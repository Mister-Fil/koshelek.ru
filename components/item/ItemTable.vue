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
    <div ref="last" class="text-center bg-light p-4">больше ничего нет</div>
  </div>
</template>

<script>
export default {
  name: 'ItemTable',
  data() {
    return {
      page: 1,
      limit: 30,
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
    this.handleThrottleScroll = _.throttle(this.handleScroll, 100)
    this.$refs.scroll.addEventListener('scroll', this.handleThrottleScroll)
  },
  beforeDestroy() {
    this.$refs.scroll.removeEventListener('scroll', this.handleThrottleScroll)
  },
  methods: {
    addFavorite(item) {
      this.$store.dispatch('item/addFavorite', item)
    },
    handleScroll() {
      if (
        this.$refs.scroll.clientHeight * 3 >
        this.$refs.last.getBoundingClientRect().top
      ) {
        this.page++
      }
    },
  },
}
</script>

<style scoped></style>
