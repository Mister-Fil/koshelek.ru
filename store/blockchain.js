export const state = () => ({
  messages: {
    utx: [],
    block: [],
  },
  statuses: {
    unconfirmedSub: false,
    addrSub: false,
    blocksSub: false,
    bitcoinAddress: null,
  },
  data: {
    sumUtx: 0,
  },
})

export const actions = {
  socketOnmessage({ commit }, msg) {
    switch (msg.op) {
      case 'pong':
        break
      case 'utx':
        commit('setMessageUtx', msg.x)
        commit('updateSumUtx', msg.x)
        break
      case 'block':
        break
    }
  },
}

export const mutations = {
  setMessageUtx(state, payload) {
    state.messages.utx.unshift(payload)
  },
  updateSumUtx(state, payload) {
    state.data.sumUtx = payload.out.reduce((sum, itemOut) => {
      return sum + itemOut.value
    }, state.data.sumUtx)
  },
  clearUtx(state) {
    state.messages.utx = []
    state.data.sumUtx = 0
  },
  setMessageBlock(state, payload) {
    state.messages.block.unshift(payload)
  },
  clearMessageBlock(state) {
    state.messages.block = []
  },
  updateStatus(state, { fieldName, value }) {
    state.statuses[fieldName] = value
  },
}

export const getters = {
  getMessageUtx(state) {
    return state.messages.utx.slice(0, 100)
  },
  getMessageBlock(state) {
    return state.messages.utx
  },
  getSumUtx(state) {
    return state.data.sumUtx
  },
  getLiveSumUtx(state) {
    return state.messages.utx.reduce((sum, item) => {
      return sum + item.total
    }, 0)
  },
  isUnconfirmedSub(state) {
    return state.statuses.unconfirmedSub
  },
}
