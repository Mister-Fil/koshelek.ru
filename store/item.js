export const state = () => ({
  item: {
    id: 1,
    name: 'Title names',
    items: [],
  },
  favorites: [],
  logs: [],
  filters: {
    name: '',
    event: '',
  },
})

export const actions = {
  fetchItems({ commit }) {
    return this.$axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(({ data }) => {
        commit('setItems', data)
      })
  },
  addFavorite({ commit }, item) {
    commit('addFavorite', item)
    commit('removeItemItems', item.id)
    commit('addLogs', { event: 'added', item })
  },
  removeFavorite({ commit }, item) {
    commit('removeFavorite', item.id)
    commit('addItemItems', item)
    commit('addLogs', { event: 'removed', item })
  },
}

export const mutations = {
  setItems(state, items) {
    state.item.items = items.slice(0, 1000).map((item) => {
      return {
        id: item.id,
        name: item.title,
      }
    })
  },
  addItemItems(state, item) {
    state.item.items.unshift(item)
  },
  addFavorite(state, item) {
    state.favorites.unshift(item)
  },
  removeItemItems(state, itemId) {
    const itemIndex = _.findIndex(state.item.items, ['id', itemId])
    if (itemIndex >= 0) state.item.items.splice(itemIndex, 1)
  },
  removeFavorite(state, itemId) {
    const itemIndex = _.findIndex(state.favorites, ['id', itemId])
    if (itemIndex >= 0) state.favorites.splice(itemIndex, 1)
  },
  addLogs(state, { event, item }) {
    state.logs.unshift({
      event,
      item,
      date: Date.now(),
    })
  },
  setFilter(state, { fieldName, value }) {
    state.filters[fieldName] = value
  },
}

export const getters = {
  getEventFilter(state) {
    return state.filters.event
  },
  getNameFilter(state) {
    return state.filters.name
  },
  getItem(state) {
    return state.item
  },
  getFavorites(state) {
    return state.favorites
  },
  getLogs(state) {
    return state.logs
  },
  getLogsFilter(state, getters) {
    const items = getters.getLogs.filter((item) => {
      if (state.filters.event !== '') {
        return state.filters.event === item.event
      }
      return true
    })
    return items[0] ? items : []
  },
  getItemItemsFilter(state, getters) {
    const items = getters.getItem.items.filter((item) => {
      if (state.filters.name.length >= 1) {
        return item.name.includes(state.filters.name)
      }
      return true
    })
    return items[0] ? items : [{ id: 0, name: 'Нет данных' }]
  },
  getItemItemsFilterSort(state, getters) {
    return getters.getItemItemsFilter.sort((a, b) => {
      if (
        a.name.split(state.filters.name).length - 1 <
        b.name.split(state.filters.name).length - 1
      ) {
        return 1
      }
      if (
        a.name.split(state.filters.name).length - 1 >
        b.name.split(state.filters.name).length - 1
      ) {
        return -1
      }
      return 0
    })
  },
}
