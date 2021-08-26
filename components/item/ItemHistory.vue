<template>
  <div class="d-flex flex-column w-100 h-100 overflow-hidden">
    <div class="d-flex p-2">
      <div class="h3 p-2 m-0 flex-fill">История</div>
      <div class="p-1">
        <b-btn
          :disabled="getEventFilter === ''"
          variant="link"
          @click="setItemFilter('event', '')"
        >
          Вся история
        </b-btn>
        <b-btn
          :disabled="getEventFilter === 'added'"
          variant="link"
          @click="setItemFilter('event', 'added')"
        >
          История добавлений
        </b-btn>
        <b-btn
          :disabled="getEventFilter === 'removed'"
          variant="link"
          @click="setItemFilter('event', 'removed')"
        >
          История удалений
        </b-btn>
      </div>
    </div>
    <div class="overflow-hidden h-100 w-100">
      <b-table
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
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemHistory',
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
    }
  },
  computed: {
    getEventFilter() {
      return this.$store.getters['item/getEventFilter']
    },
    getLogsFilter() {
      return this.$store.getters['item/getLogsFilter']
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
