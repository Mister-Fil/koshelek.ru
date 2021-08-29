import Vue from 'vue'
import VueNativeSock from 'vue-native-websocket'

export default ({ store }) => {
  Vue.use(VueNativeSock, 'wss://ws.blockchain.info/inv', {
    connectManually: false,
    reconnection: true,
    reconnectionAttempts: 0,
    reconnectionDelay: 1000,
    store,
    format: 'json',
    passToStoreHandler(eventName, event) {
      if (!eventName.startsWith('SOCKET_')) {
        return
      }
      let method = 'commit'
      let target = eventName.toUpperCase()
      let msg = event
      if (this.format === 'json' && event.data) {
        msg = JSON.parse(event.data)
        if (msg.op) {
          method = 'dispatch'
          target = 'blockchain/socketOnmessage'
        } else if (msg.mutation) {
          target = [msg.namespace || '', msg.mutation]
            .filter((e) => !!e)
            .join('/')
        } else if (msg.action) {
          method = 'dispatch'
          target = [msg.namespace || '', msg.action]
            .filter((e) => !!e)
            .join('/')
        }
      }
      this.store[method](target, msg)
    },
  })
}
