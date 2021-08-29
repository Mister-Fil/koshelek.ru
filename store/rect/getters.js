export default {
  getActive: (state) => {
    for (let i = 0, l = state.rects.length; i < l; i++) {
      const rect = state.rects[i]

      if (rect.active) {
        return i
      }
    }
    return null
  },
}
