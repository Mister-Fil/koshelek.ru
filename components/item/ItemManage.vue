<template>
  <div class="d-flex w-100 h-100 overflow-hidden">
    <div class="d-flex flex-column p-2 w-50 h-100 overflow-hidden">
      <div class="d-flex p-2">
        <div class="h4 px-2">Все</div>
        <div class="flex-fill">
          <b-input
            v-model="filters.name"
            placeholder="Фильтровать элементы списка"
          ></b-input>
        </div>
      </div>
      <div class="overflow-hidden h-100">
        <div class="overflow-auto h-100">
          <table class="table table-hover">
            <tbody>
              <tr
                v-for="itemsItem in getItemItemsFilterSort"
                :key="itemsItem.id"
              >
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
      </div>
    </div>
    <div class="d-flex flex-column p-2 w-50 h-100 overflow-hidden">
      <div class="p-2">
        <div class="h4 text-center">Избранные</div>
      </div>
      <div class="overflow-hidden h-100">
        <div class="overflow-auto h-100">
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
  mounted() {
    this.fetchItems()
  },
  computed: {
    getItem() {
      return this.$store.getters['item/getItem']
    },
    getFavorites() {
      return this.$store.getters['item/getFavorites']
    },

    getItemItemsFilter() {
      const items = this.getItem.items.filter((item) => {
        if (this.filters.name.length >= 1) {
          return item.name.includes(this.filters.name)
        }
        return true
      })
      return items[0] ? items : [{ id: 0, name: 'Нет данных' }]
    },

    getItemItemsFilterSort() {
      return this.getItemItemsFilter.sort((a, b) => {
        if (
          a.name.split(this.filters.name).length - 1 <
          b.name.split(this.filters.name).length - 1
        ) {
          return 1
        }
        if (
          a.name.split(this.filters.name).length - 1 >
          b.name.split(this.filters.name).length - 1
        ) {
          return -1
        }
        return 0
      })
    },
  },
  methods: {
    fetchItems() {
      this.$store.dispatch('item/fetchItems')
    },
    addFavorite(item) {
      this.$store.dispatch('item/addFavorite', item)
    },
    removeFavorite(item) {
      this.$store.dispatch('item/removeFavorite', item)
    },
  },
}
</script>
