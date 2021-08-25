export const state = () => ({
  item: {
    id: 1,
    name: 'Title names',
    items: [],
  },
  favorites: [],
  logs: [],
})

export const actions = {
  fetchItems({ commit }) {
    return this.$axios
      .get('http://jsonplaceholder.typicode.com/photos')
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
    state.item.items.push(item)
  },
  addFavorite(state, item) {
    state.favorites.push(item)
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
    state.logs.push({
      event,
      item,
      date: Date.now(),
    })
  },
}

export const getters = {
  getItem(state) {
    return state.item
  },
  getFavorites(state) {
    return state.favorites
  },
  getLogs(state) {
    return state.logs
  },
}
