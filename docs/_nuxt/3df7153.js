(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,4,5],{289:function(t,e,n){"use strict";n.r(e);var l={name:"ItemTable",computed:{getItemItemsFilterSort:function(){return this.$store.getters["item/getItemItemsFilterSort"]}},methods:{addFavorite:function(t){this.$store.dispatch("item/addFavorite",t)}}},r=n(61),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-hover"},[n("tbody",t._l(t.getItemItemsFilterSort,(function(e){return n("tr",{key:e.id},[n("td",{staticClass:"w-100"},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),n("td",[0!==e.id?n("b-btn",{attrs:{variant:"outline-primary"},on:{click:function(n){return t.addFavorite(e)}}},[t._v("\n          Add to favorites\n        ")]):t._e()],1)])})),0)])}),[],!1,null,"77f66b52",null);e.default=component.exports},290:function(t,e,n){"use strict";n.r(e);var l={name:"ItemFavoriteTable",computed:{getFavorites:function(){return this.$store.getters["item/getFavorites"]}},methods:{removeFavorite:function(t){this.$store.dispatch("item/removeFavorite",t)}}},r=n(61),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{staticClass:"table table-hover"},[n("tbody",t._l(t.getFavorites,(function(e){return n("tr",{key:e.id},[n("td",{staticClass:"w-100"},[t._v("\n        "+t._s(e.name)+"\n      ")]),t._v(" "),n("td",[0!==e.id?n("b-btn",{attrs:{variant:"outline-danger"},on:{click:function(n){return t.removeFavorite(e)}}},[t._v("\n          remove\n        ")]):t._e()],1)])})),0)])}),[],!1,null,null,null);e.default=component.exports},292:function(t,e,n){"use strict";n.r(e);var l={name:"ItemManage",data:function(){return{filters:{name:""}}},watch:{"filter.name":function(t){this.setItemFilter("name",t)}},methods:{setItemFilter:function(t,e){this.$store.commit("item/setFilter",{fieldName:t,value:e})}}},r=n(61),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"d-flex w-100 h-100 overflow-hidden"},[n("div",{staticClass:"d-flex flex-column p-2 w-50 h-100 overflow-hidden"},[n("div",{staticClass:"d-flex p-2"},[n("div",{staticClass:"h3 px-2 py-1 m-0"},[t._v("Все")]),t._v(" "),n("div",{staticClass:"flex-fill"},[n("b-input",{attrs:{placeholder:"Фильтровать элементы списка"},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}})],1)]),t._v(" "),n("div",{staticClass:"overflow-hidden p-2 h-100"},[n("div",{staticClass:"overflow-auto h-100"},[n("item-table")],1)])]),t._v(" "),n("div",{staticClass:"d-flex flex-column p-2 w-50 h-100 overflow-hidden"},[t._m(0),t._v(" "),n("div",{staticClass:"overflow-hidden p-2 h-100"},[n("div",{staticClass:"overflow-auto h-100"},[n("item-favorite-table")],1)])])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"p-2"},[n("div",{staticClass:"h3 text-center px-2 py-1 m-0"},[t._v("Избранное")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemTable:n(289).default,ItemFavoriteTable:n(290).default})},296:function(t,e,n){"use strict";n.r(e);var l=n(61),component=Object(l.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("item-manage")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemManage:n(292).default})}}]);