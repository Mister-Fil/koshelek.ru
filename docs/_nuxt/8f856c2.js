(window.webpackJsonp=window.webpackJsonp||[]).push([[14,2,5,6],{345:function(t,e,l){"use strict";(function(t){l(16);e.a={name:"ItemTable",data:function(){return{page:3}},computed:{getItemItemsFilterSort:function(){return this.$store.getters["item/getItemItemsFilterSort"].slice(0,10*this.page)}},mounted:function(){this.handleDebouncedScroll=t.debounce(this.handleScroll,100),this.$refs.scroll.addEventListener("scroll",this.handleDebouncedScroll)},beforeDestroy:function(){this.$refs.scroll.removeEventListener("scroll",this.handleDebouncedScroll)},methods:{addFavorite:function(t){this.$store.dispatch("item/addFavorite",t)},handleScroll:function(){var t=this.$refs.scroll.scrollTop>this.$refs.scroll.clientHeight*(this.page-1),e=this.$refs.scroll.scrollTop<this.$refs.scroll.clientHeight*(this.page-3);if(t||e){var l=Math.ceil(this.$refs.scroll.scrollTop/this.$refs.scroll.clientHeight);this.page=l>2?l:3}}}}}).call(this,l(118))},346:function(t,e,l){"use strict";l.r(e);var n={name:"ItemFavoriteTable",computed:{getFavorites:function(){return this.$store.getters["item/getFavorites"]}},methods:{removeFavorite:function(t){this.$store.dispatch("item/removeFavorite",t)}}},r=l(68),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"overflow-auto h-100"},[l("table",{staticClass:"table table-hover"},[l("tbody",t._l(t.getFavorites,(function(e){return l("tr",{key:e.id},[l("td",{staticClass:"w-100"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),l("td",[0!==e.id?l("b-btn",{attrs:{variant:"outline-danger"},on:{click:function(l){return t.removeFavorite(e)}}},[t._v("\n            remove\n          ")]):t._e()],1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports},348:function(t,e,l){"use strict";l.r(e);var n=l(345).a,r=l(68),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{ref:"scroll",staticClass:"overflow-auto h-100"},[l("table",{staticClass:"table table-hover"},[l("tbody",t._l(t.getItemItemsFilterSort,(function(e){return l("tr",{key:e.id},[l("td",{staticClass:"w-100"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),l("td",[0!==e.id?l("b-btn",{attrs:{variant:"outline-primary"},on:{click:function(l){return t.addFavorite(e)}}},[t._v("\n            Add to favorites\n          ")]):t._e()],1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports},353:function(t,e,l){"use strict";l.r(e);l(23);var n={name:"ItemManage",data:function(){return{filters:{name:""}}},watch:{"filters.name":function(t){this.setItemFilter("name",t)}},mounted:function(){this.filters.name=this.$store.getters["item/getNameFilter"]},methods:{setItemFilter:function(t,e){this.$store.commit("item/setFilter",{fieldName:t,value:e})}}},r=l(68),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"flex-sm-row flex-column"},[l("div",{staticClass:"d-flex flex-column p-2 w-100 h-100 overflow-hidden"},[l("div",{staticClass:"d-flex p-2 shadow-sm"},[l("div",{staticClass:"h3 px-2 py-1 m-0"},[t._v("Все")]),t._v(" "),l("div",{staticClass:"flex-fill"},[l("b-input",{attrs:{type:"search",placeholder:"Фильтровать элементы списка"},model:{value:t.filters.name,callback:function(e){t.$set(t.filters,"name",e)},expression:"filters.name"}})],1)]),t._v(" "),l("div",{staticClass:"overflow-hidden p-2 h-100"},[l("item-table")],1)]),t._v(" "),l("div",{staticClass:"d-flex flex-column p-2 w-100 h-100 overflow-hidden"},[t._m(0),t._v(" "),l("div",{staticClass:"overflow-hidden p-2 h-100"},[l("item-favorite-table")],1)])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"p-2 shadow-sm"},[l("div",{staticClass:"h3 text-center px-2 py-1 m-0"},[t._v("Избранное")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemTable:l(348).default,ItemFavoriteTable:l(346).default})},365:function(t,e,l){"use strict";l.r(e);var n=l(68),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("item-manage")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ItemManage:l(353).default})}}]);