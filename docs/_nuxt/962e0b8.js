(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{346:function(t,e,n){"use strict";n.r(e);var r={name:"ItemFavoriteTable",computed:{getFavorites:function(){return this.$store.getters["item/getFavorites"]}},methods:{removeFavorite:function(t){this.$store.dispatch("item/removeFavorite",t)}}},o=n(69),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"overflow-auto h-100"},[n("table",{staticClass:"table table-hover"},[n("tbody",t._l(t.getFavorites,(function(e){return n("tr",{key:e.id},[n("td",{staticClass:"w-100"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),n("td",[0!==e.id?n("b-btn",{attrs:{variant:"outline-danger"},on:{click:function(n){return t.removeFavorite(e)}}},[t._v("\n            remove\n          ")]):t._e()],1)])})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);