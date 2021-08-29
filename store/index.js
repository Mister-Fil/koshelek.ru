export const state = () => ({
  socket: {
    isConnected: false,
    reconnectError: false,
  },
})

export const actions = {
  sendSocketMessage({ commit }, message) {
    this.$socket.send(JSON.stringify(message))
  },
}

export const mutations = {
  SOCKET_ONOPEN(state, event) {
    this.$socket = event.currentTarget
    state.socket.isConnected = true
  },
  SOCKET_ONCLOSE(state, event) {
    state.socket.isConnected = false
  },
  SOCKET_ONERROR(state, event) {
    console.error(state, event)
  },
  // default handler called for all methods
  SOCKET_ONMESSAGE(state, message) {
    console.warn('SOCKET_ONMESSAGE', message)
  },
  // mutations for reconnect methods
  SOCKET_RECONNECT(state, count) {
    console.info(state, count)
  },
  SOCKET_RECONNECT_ERROR(state) {
    state.socket.reconnectError = true
  },
}

export const getters = {
  isSocketConnected(state) {
    return state.socket.isConnected
  },
}
