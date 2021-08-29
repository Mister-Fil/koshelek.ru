import {
  CHANGE_HEIGHT,
  CHANGE_LEFT,
  CHANGE_MINH,
  CHANGE_MINW,
  CHANGE_TOP,
  CHANGE_WIDTH,
  CHANGE_ZINDEX,
  DISABLE_ACTIVE,
  DISABLE_ASPECT,
  DISABLE_DRAGGABLE,
  DISABLE_PARENT_LIMITATION,
  DISABLE_RESIZABLE,
  DISABLE_SNAP_TO_GRID,
  ENABLE_ACTIVE,
  ENABLE_ASPECT,
  ENABLE_BOTH_AXIS,
  ENABLE_DRAGGABLE,
  ENABLE_NONE_AXIS,
  ENABLE_PARENT_LIMITATION,
  ENABLE_RESIZABLE,
  ENABLE_SNAP_TO_GRID,
  ENABLE_X_AXIS,
  ENABLE_Y_AXIS,
} from './mutation-types'

export default {
  setActive({ commit, state }, { id }) {
    for (let i = 0, l = state.rects.length; i < l; i++) {
      if (i === id) {
        commit(ENABLE_ACTIVE, i)
        continue
      }

      commit(DISABLE_ACTIVE, i)
    }
  },
  unsetActive({ commit }, { id }) {
    commit(DISABLE_ACTIVE, id)
  },

  toggleDraggable({ commit, state }, { id }) {
    if (!state.rects[id].draggable) {
      commit(ENABLE_DRAGGABLE, id)
    } else {
      commit(DISABLE_DRAGGABLE, id)
    }
  },

  toggleResizable({ commit, state }, { id }) {
    if (!state.rects[id].resizable) {
      commit(ENABLE_RESIZABLE, id)
    } else {
      commit(DISABLE_RESIZABLE, id)
    }
  },

  toggleParentLimitation({ commit, state }, { id }) {
    if (!state.rects[id].parentLim) {
      commit(ENABLE_PARENT_LIMITATION, id)
    } else {
      commit(DISABLE_PARENT_LIMITATION, id)
    }
  },

  toggleSnapToGrid({ commit, state }, { id }) {
    if (!state.rects[id].snapToGrid) {
      commit(ENABLE_SNAP_TO_GRID, id)
    } else {
      commit(DISABLE_SNAP_TO_GRID, id)
    }
  },

  setAspect({ commit }, { id }) {
    commit(ENABLE_ASPECT, id)
  },
  unsetAspect({ commit }, { id }) {
    commit(DISABLE_ASPECT, id)
  },

  setWidth({ commit }, { id, width }) {
    commit(CHANGE_WIDTH, { id, width })
  },

  setHeight({ commit }, { id, height }) {
    commit(CHANGE_HEIGHT, { id, height })
  },

  setTop({ commit }, { id, top }) {
    commit(CHANGE_TOP, { id, top })
  },

  setLeft({ commit }, { id, left }) {
    commit(CHANGE_LEFT, { id, left })
  },

  changeXLock({ commit, state }, { id }) {
    switch (state.rects[id].axis) {
      case 'both':
        commit(ENABLE_Y_AXIS, id)
        break
      case 'x':
        commit(ENABLE_NONE_AXIS, id)
        break
      case 'y':
        commit(ENABLE_BOTH_AXIS, id)
        break
      case 'none':
        commit(ENABLE_X_AXIS, id)
        break
    }
  },

  changeYLock({ commit, state }, { id }) {
    switch (state.rects[id].axis) {
      case 'both':
        commit(ENABLE_X_AXIS, id)
        break
      case 'x':
        commit(ENABLE_BOTH_AXIS, id)
        break
      case 'y':
        commit(ENABLE_NONE_AXIS, id)
        break
      case 'none':
        commit(ENABLE_Y_AXIS, id)
        break
    }
  },

  changeZToBottom({ commit, state }, { id }) {
    if (state.rects[id].zIndex === 1) {
      return
    }

    commit(CHANGE_ZINDEX, { id, zIndex: 1 })

    for (let i = 0, l = state.rects.length; i < l; i++) {
      if (i !== id) {
        if (state.rects[i].zIndex === state.rects.length) {
          continue
        }
        commit(CHANGE_ZINDEX, {
          id: i,
          zIndex: state.rects[i].zIndex + 1,
        })
      }
    }
  },

  changeZToTop({ commit, state }, { id }) {
    if (state.rects[id].zIndex === state.rects.length) {
      return
    }

    commit(CHANGE_ZINDEX, { id, zIndex: state.rects.length })

    for (let i = 0, l = state.rects.length; i < l; i++) {
      if (i !== id) {
        if (state.rects[i].zIndex === 1) {
          continue
        }
        commit(CHANGE_ZINDEX, {
          id: i,
          zIndex: state.rects[i].zIndex - 1,
        })
      }
    }
  },

  setMinWidth({ commit }, { id, width }) {
    commit(CHANGE_MINW, { id, minw: width })
  },

  setMinHeight({ commit }, { id, height }) {
    commit(CHANGE_MINH, { id, minh: height })
  },
}
