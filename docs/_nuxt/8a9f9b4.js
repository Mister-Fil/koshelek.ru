(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{345:function(t,e,r){"use strict";(function(t){r(16);e.a={name:"ItemTable",data:function(){return{page:3}},computed:{getItemItemsFilterSort:function(){return this.$store.getters["item/getItemItemsFilterSort"].slice(0,10*this.page)}},mounted:function(){this.handleDebouncedScroll=t.debounce(this.handleScroll,100),this.$refs.scroll.addEventListener("scroll",this.handleDebouncedScroll)},beforeDestroy:function(){this.$refs.scroll.removeEventListener("scroll",this.handleDebouncedScroll)},methods:{addFavorite:function(t){this.$store.dispatch("item/addFavorite",t)},handleScroll:function(){var t=this.$refs.scroll.scrollTop>this.$refs.scroll.clientHeight*(this.page-1),e=this.$refs.scroll.scrollTop<this.$refs.scroll.clientHeight*(this.page-3);if(t||e){var r=Math.ceil(this.$refs.scroll.scrollTop/this.$refs.scroll.clientHeight);this.page=r>2?r:3}}}}}).call(this,r(118))},347:function(t,e,r){"use strict";r.r(e);var l=r(345).a,o=r(68),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{ref:"scroll",staticClass:"overflow-auto h-100"},[r("table",{staticClass:"table table-hover"},[r("tbody",t._l(t.getItemItemsFilterSort,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"w-100"},[t._v("\n          "+t._s(e.name)+"\n        ")]),t._v(" "),r("td",[0!==e.id?r("b-btn",{attrs:{variant:"outline-primary"},on:{click:function(r){return t.addFavorite(e)}}},[t._v("\n            Add to favorites\n          ")]):t._e()],1)])})),0)])])}),[],!1,null,"651f033f",null);e.default=component.exports}}]);