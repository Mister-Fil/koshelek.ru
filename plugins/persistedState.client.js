import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'vuex',
    paths: ['rect.rects', 'item.favorites', 'item.logs'],
  })(store)
}
