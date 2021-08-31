<template>
  <div class="flex-column">
    <div class="d-flex flex-row w-100 justify-content-around p-4">
      <!--      <b-btn :disabled="!isConnected" variant="secondary" @click="socketPing()">-->
      <!--        socketPing-->
      <!--      </b-btn>-->
      <b-btn
        :disabled="!isConnected || isUnconfirmedSub"
        variant="success"
        @click="unconfirmedSub()"
      >
        Запуск
      </b-btn>
      <b-btn
        :disabled="!isConnected || !isUnconfirmedSub"
        variant="danger"
        @click="unconfirmedUnsub()"
      >
        Остановка
      </b-btn>
      <b-btn
        :disabled="!isConnected || getSumUtx < 1"
        variant="warning"
        @click="clearUtx()"
      >
        Сброс
      </b-btn>
    </div>
    <div>
      <h4 class="text-center p-2">Сумма: {{ getSumUtx / 100000000 }} BTC</h4>
    </div>
    <div class="h-100 overflow-hidden">
      <b-table
        table-class="h-100"
        striped
        head-variant="light"
        sticky-header="100%"
        hover
        no-border-collapse
        :items="getMessageUtx"
        :fields="fields"
        show-empty
      >
        <template #empty>
          <div class="d-flex justify-content-center h-100">
            <div class="d-flex align-items-center">
              Данные отсутствуют
              <b-btn
                class="m-4"
                :disabled="!isConnected || isUnconfirmedSub"
                variant="success"
                @click="unconfirmedSub()"
              >
                Запуск
              </b-btn>
            </div>
          </div>
        </template>
        <template #emptyfiltered="scope">
          <h4>{{ scope.emptyFilteredText }}</h4>
        </template>
        <template #cell(tx)="data">
          <a
            :href="'https://www.blockchain.com/btc/tx/' + data.item.hash"
            target="_blank"
          >
            <b-badge variant="primary">tx</b-badge>
          </a>
        </template>

        <template #cell(inputs)="data">
          <template v-for="input in data.value">
            <div :key="JSON.stringify(input)">
              <a
                :href="
                  'https://www.blockchain.com/btc/address/' +
                  input.prev_out.addr
                "
                target="_blank"
              >
                {{ input.prev_out.addr }}
              </a>
            </div>
          </template>
        </template>

        <template #cell(out)="data">
          <template v-for="out in data.value">
            <div :key="JSON.stringify(out)">
              <a
                :href="'https://www.blockchain.com/btc/address/' + out.addr"
                target="_blank"
              >
                {{ out.addr }}
              </a>
            </div>
          </template>
        </template>

        <template #cell(sum)="data">
          <b-badge variant="success" class="w-100 text-nowrap">
            {{ inputSum(data.item) }} BTC
          </b-badge>
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: 'tx',
          label: '',
          class: 'align-middle text-center',
          sortable: false,
          stickyColumn: true,
        },
        {
          key: 'inputs',
          label: 'From',
          class: 'align-middle text-center',
          sortable: false,
        },
        {
          key: 'out',
          label: 'To',
          class: 'align-middle text-center',
          sortable: false,
        },
        {
          key: 'sum',
          label: 'Sum',
          class: 'align-middle text-center',
          sortable: false,
        },
      ],
    }
  },
  computed: {
    isConnected() {
      return this.$store.getters.isSocketConnected
    },
    isUnconfirmedSub() {
      return this.$store.getters['blockchain/isUnconfirmedSub']
    },
    getMessageUtx() {
      return this.$store.getters['blockchain/getMessageUtx']
    },
    getSumUtx() {
      return this.$store.getters['blockchain/getSumUtx']
    },
  },
  methods: {
    inputSum(itemUtx) {
      let sum = 0
      sum = itemUtx.out.reduce((sum, itemOut) => {
        return sum + itemOut.value
      }, 0)
      return sum / 100000000
    },
    clearUtx() {
      this.$store.commit('blockchain/clearUtx')
    },
    socketPing() {
      this.$store.dispatch('sendSocketMessage', {
        op: 'ping',
      })
    },
    unconfirmedSub() {
      this.$store.dispatch('sendSocketMessage', {
        op: 'unconfirmed_sub',
      })
      this.$store.commit('blockchain/updateStatus', {
        fieldName: 'unconfirmedSub',
        value: true,
      })
    },
    unconfirmedUnsub() {
      this.$store.dispatch('sendSocketMessage', {
        op: 'unconfirmed_unsub',
      })
      this.$store.commit('blockchain/updateStatus', {
        fieldName: 'unconfirmedSub',
        value: false,
      })
    },
  },
}
</script>
