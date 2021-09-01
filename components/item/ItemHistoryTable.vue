<template>
  <b-table
    thead-class="text-nowrap"
    striped
    head-variant="light"
    sticky-header="100%"
    hover
    no-border-collapse
    :items="getLogsFilter"
    :fields="fields"
  >
    <template #cell(event)="data">
      <b-badge :variant="data.value === 'added' ? 'success' : 'warning'"
        >{{ data.value }}
      </b-badge>
    </template>
    <template #cell(item.id)="data">{{ data.value }}</template>
    <template #cell(item.name)="data">{{ data.value }}</template>
    <template #cell(date)="data">
      <div class="">
        {{
          $DateTime
            .fromMillis(data.value)
            .setLocale('ru')
            .toLocaleString($DateTime.DATETIME_MED_WITH_SECONDS)
        }}
      </div>
    </template>
  </b-table>
</template>

<script>
export default {
  name: 'ItemHistoryTable',
  props: {
    filterEvent: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      fields: [
        {
          key: 'event',
          label: 'Событие',
          class: 'align-middle text-center',
          sortable: true,
        },
        {
          key: 'item.id',
          label: 'id',
          class: 'align-middle',
          sortable: true,
        },
        {
          key: 'item.name',
          label: 'Наименование',
          class: 'align-middle',
          sortable: true,
        },
        {
          key: 'date',
          label: 'Дата и время',
          class: 'align-middle',
          sortable: true,
        },
      ],
      filters: {
        event: '',
      },
    }
  },
  computed: {
    getLogs() {
      return this.$store.getters['item/getLogs']
    },
    getLogsFilter() {
      if (this.filters.event === '') {
        return this.$store.getters['item/getLogsFilter']
      }
      const items = this.getLogs.filter((item) => {
        return this.filters.event === item.event
      })
      return items[0] ? items : []
    },
  },
  mounted() {
    this.filters.event = this.filterEvent
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
