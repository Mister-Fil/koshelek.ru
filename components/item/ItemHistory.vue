<template>
  <div class="flex-column">
    <div class="d-flex p-2">
      <div class="p-1 text-nowrap overflow-auto">
        <b-btn
          v-show="getEventFilter !== ''"
          variant="link"
          @click="setPageFilter('event', '')"
        >
          Вся история
        </b-btn>
        <b-btn
          v-show="getEventFilter !== 'added'"
          variant="link"
          @click="setPageFilter('event', 'added')"
        >
          История добавлений
        </b-btn>
        <b-btn
          v-show="getEventFilter !== 'removed'"
          variant="link"
          @click="setPageFilter('event', 'removed')"
        >
          История удалений
        </b-btn>
      </div>
    </div>
    <div class="overflow-hidden h-100 w-100">
      <item-history-table></item-history-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemHistory',
  computed: {
    getEventFilter() {
      return this.$store.getters['item/getEventFilter']
    },
    getLogsFilter() {
      return this.$store.getters['item/getLogsFilter']
    },
  },
  mounted() {
    if (this.$route.query.event) {
      this.setItemFilter('event', this.$route.query.event)
    }
  },
  methods: {
    setPageFilter(fieldName, value) {
      this.$router.push('/item/history?event=' + value)
      this.setItemFilter(fieldName, value)
    },
    setItemFilter(fieldName, value) {
      this.$store.commit('item/setFilter', {
        fieldName,
        value,
      })
    },
  },
}
</script>
