(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{359:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{fields:[{key:"tx",label:"",class:"align-middle text-center",sortable:!1,stickyColumn:!0},{key:"inputs",label:"From",class:"align-middle text-center",sortable:!1},{key:"out",label:"To",class:"align-middle text-center",sortable:!1},{key:"sum",label:"Sum",class:"align-middle text-center",sortable:!1}]}},computed:{isConnected:function(){return this.$store.getters.isSocketConnected},isUnconfirmedSub:function(){return this.$store.getters["blockchain/isUnconfirmedSub"]},getMessageUtx:function(){return this.$store.getters["blockchain/getMessageUtx"]},getSumUtx:function(){return this.$store.getters["blockchain/getSumUtx"]}},methods:{inputSum:function(t){return t.out.reduce((function(t,e){return t+e.value}),0)/1e8},clearUtx:function(){this.$store.commit("blockchain/clearUtx")},socketPing:function(){this.$store.dispatch("sendSocketMessage",{op:"ping"})},unconfirmedSub:function(){this.$store.dispatch("sendSocketMessage",{op:"unconfirmed_sub"}),this.$store.commit("blockchain/updateStatus",{fieldName:"unconfirmedSub",value:!0})},unconfirmedUnsub:function(){this.$store.dispatch("sendSocketMessage",{op:"unconfirmed_unsub"}),this.$store.commit("blockchain/updateStatus",{fieldName:"unconfirmedSub",value:!1})}}},c=n(68),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex-column"},[n("div",{staticClass:"d-flex flex-row w-100 justify-content-around p-4"},[n("b-btn",{attrs:{disabled:!t.isConnected||t.isUnconfirmedSub,variant:"success"},on:{click:function(e){return t.unconfirmedSub()}}},[t._v("\n      Запуск\n    ")]),t._v(" "),n("b-btn",{attrs:{disabled:!t.isConnected||!t.isUnconfirmedSub,variant:"danger"},on:{click:function(e){return t.unconfirmedUnsub()}}},[t._v("\n      Остановка\n    ")]),t._v(" "),n("b-btn",{attrs:{disabled:!t.isConnected||t.getSumUtx<1,variant:"warning"},on:{click:function(e){return t.clearUtx()}}},[t._v("\n      Сброс\n    ")])],1),t._v(" "),n("div",[n("h4",{staticClass:"text-center p-2"},[t._v("Сумма: "+t._s(t.getSumUtx/1e8)+" BTC")])]),t._v(" "),n("div",{staticClass:"h-100 overflow-hidden"},[n("b-table",{attrs:{"table-class":"h-100",striped:"","head-variant":"light","sticky-header":"100%",hover:"","no-border-collapse":"",items:t.getMessageUtx,fields:t.fields,"show-empty":""},scopedSlots:t._u([{key:"empty",fn:function(){return[n("div",{staticClass:"d-flex justify-content-center h-100"},[n("div",{staticClass:"d-flex align-items-center"},[t._v("\n            Данные отсутствуют\n            "),n("b-btn",{staticClass:"m-4",attrs:{disabled:!t.isConnected||t.isUnconfirmedSub,variant:"success"},on:{click:function(e){return t.unconfirmedSub()}}},[t._v("\n              Запуск\n            ")])],1)])]},proxy:!0},{key:"emptyfiltered",fn:function(e){return[n("h4",[t._v(t._s(e.emptyFilteredText))])]}},{key:"cell(tx)",fn:function(data){return[n("a",{attrs:{href:"https://www.blockchain.com/btc/tx/"+data.item.hash,target:"_blank"}},[n("b-badge",{attrs:{variant:"primary"}},[t._v("tx")])],1)]}},{key:"cell(inputs)",fn:function(data){return[t._l(data.value,(function(input){return[n("div",{key:JSON.stringify(input)},[n("a",{attrs:{href:"https://www.blockchain.com/btc/address/"+input.prev_out.addr,target:"_blank"}},[t._v("\n              "+t._s(input.prev_out.addr)+"\n            ")])])]}))]}},{key:"cell(out)",fn:function(data){return[t._l(data.value,(function(e){return[n("div",{key:JSON.stringify(e)},[n("a",{attrs:{href:"https://www.blockchain.com/btc/address/"+e.addr,target:"_blank"}},[t._v("\n              "+t._s(e.addr)+"\n            ")])])]}))]}},{key:"cell(sum)",fn:function(data){return[n("b-badge",{staticClass:"w-100 text-nowrap",attrs:{variant:"success"}},[t._v("\n          "+t._s(t.inputSum(data.item))+" BTC\n        ")])]}}])})],1)])}),[],!1,null,null,null);e.default=component.exports}}]);