<template>
  <div class="d-flex w-100 h-100 overflow-hidden">
    <div
      class="
        d-flex
        flex-column
        p-2
        h-100
        overflow-hidden
        w-100
        justify-content-center
      "
    >
      <div class="d-flex p-2">
        <div class="h4 px-2">History</div>
      </div>
      <div class="overflow-hidden h-100 w-100">
        <div class="overflow-auto h-100 w-100">
          <table class="table table-hover w-100">
            <tbody>
              <tr v-for="itemLog in getLogs" :key="itemLog.date">
                <td class="">
                  {{ itemLog.item.id }}
                </td>
                <td class="w-100">
                  {{ itemLog.item.name }}
                </td>
                <td>
                  <label>{{ itemLog.event }}</label>
                </td>
                <td>
                  <label>{{ itemLog.date }}</label>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemHistory',
  computed: {
    getLogs() {
      return this.$store.getters['item/getLogs']
    },
  },
}
</script>
