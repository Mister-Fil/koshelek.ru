(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{351:function(t,e,c){var content=c(357);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(120).default)("7925529f",content,!0,{sourceMap:!1})},356:function(t,e,c){"use strict";c(351)},357:function(t,e,c){var o=c(119)(!1);o.push([t.i,'[data-v-ff435a6c]:root{--toolbar-width:220px}.toolbar[data-v-ff435a6c]{width:220px;box-sizing:border-box;background-color:#fff;margin:30px 30px 30px 0}.toolbar-wh-row[data-v-ff435a6c]{margin-bottom:20px}.toolbar-row-title[data-v-ff435a6c]{width:220px;font-size:14px;font-family:"Lato",sans-serif;font-weight:500;margin:0 0 3px;color:#1a173b}.toolbar-position-inp[data-v-ff435a6c],.toolbar-size-inp[data-v-ff435a6c]{width:90px;font-size:11px;color:#bbb;font-weight:300;display:inline-block;position:relative}.toolbar-position-inp input[data-v-ff435a6c],.toolbar-size-inp input[data-v-ff435a6c]{width:70px;display:inline-block;border:1px solid #bfbfca;margin-top:2px;height:16px}.toolbar-position-inp input[disabled][data-v-ff435a6c],.toolbar-size-inp input[disabled][data-v-ff435a6c]{border:1px solid #dcdce7;color:#aaa}.position-lock-icon[data-v-ff435a6c],.size-lock-icon[data-v-ff435a6c]{position:absolute;bottom:3px;right:17px;cursor:pointer}.size-lock-icon[data-v-ff435a6c]{bottom:2px;right:-3px}.toolbar-check-inp[data-v-ff435a6c]{color:#445477;font-size:13px;width:180px;display:inline-block;margin:2px 0}.toolbar-row-title+label[data-v-ff435a6c]{margin-top:5px}.toolbar-check-inp input[data-v-ff435a6c]{border:1px solid #bfbfca}.to-bottom-icon[data-v-ff435a6c],.to-top-icon[data-v-ff435a6c]{margin:10px 30px;cursor:pointer}',""]),t.exports=o},362:function(t,e,c){"use strict";c.r(e);var o={name:"Toolbar",computed:{activeRect:function(){return this.$store.getters["rect/getActive"]},width:function(){return null===this.activeRect?"":this.$store.state.rect.rects[this.activeRect].width},height:function(){return null===this.activeRect?"":this.$store.state.rect.rects[this.activeRect].height},top:function(){return null===this.activeRect?"":this.$store.state.rect.rects[this.activeRect].top},left:function(){return null===this.activeRect?"":this.$store.state.rect.rects[this.activeRect].left},minw:function(){return null===this.activeRect?"":this.$store.state.rect.rects[this.activeRect].minw},minh:function(){return null===this.activeRect?"":this.$store.state.rect.rects[this.activeRect].minh},aspectRatio:function(){return null!==this.activeRect&&this.$store.state.rect.rects[this.activeRect].aspectRatio},parentLim:function(){return null!==this.activeRect&&this.$store.state.rect.rects[this.activeRect].parentLim},draggable:function(){return null!==this.activeRect&&this.$store.state.rect.rects[this.activeRect].draggable},resizable:function(){return null!==this.activeRect&&this.$store.state.rect.rects[this.activeRect].resizable},snapToGrid:function(){return null!==this.activeRect&&this.$store.state.rect.rects[this.activeRect].snapToGrid},topIsLocked:function(){return null!==this.activeRect&&("x"===this.$store.state.rect.rects[this.activeRect].axis||"none"===this.$store.state.rect.rects[this.activeRect].axis)},leftIsLocked:function(){return null!==this.activeRect&&("y"===this.$store.state.rect.rects[this.activeRect].axis||"none"===this.$store.state.rect.rects[this.activeRect].axis)},zIndex:function(){return null===this.activeRect?null:1===this.$store.state.rect.rects[this.activeRect].zIndex?"isFirst":this.$store.state.rect.rects[this.activeRect].zIndex===this.$store.state.rect.rects.length?"isLast":"normal"}},methods:{toggleYLock:function(){null!==this.activeRect&&this.$store.dispatch("rect/changeYLock",{id:this.activeRect})},toggleXLock:function(){null!==this.activeRect&&this.$store.dispatch("rect/changeXLock",{id:this.activeRect})},toggleAspect:function(){null!==this.activeRect&&(this.$store.state.rect.rects[this.activeRect].aspectRatio?this.$store.dispatch("rect/unsetAspect",{id:this.activeRect}):this.$store.dispatch("rect/setAspect",{id:this.activeRect}))},toggleParentLimitation:function(){this.$store.dispatch("rect/toggleParentLimitation",{id:this.activeRect})},toggleResizable:function(){this.$store.dispatch("rect/toggleResizable",{id:this.activeRect})},toggleDraggable:function(){this.$store.dispatch("rect/toggleDraggable",{id:this.activeRect})},toggleSnapToGrid:function(){this.$store.dispatch("rect/toggleSnapToGrid",{id:this.activeRect})},toTop:function(){this.$store.dispatch("rect/changeZToTop",{id:this.activeRect})},toBottom:function(){this.$store.dispatch("rect/changeZToBottom",{id:this.activeRect})},changeMinWidth:function(t){var e=parseInt(t.target.value);("number"!=typeof e||isNaN(e))&&(e=1),e<=0?e=1:e>this.$store.state.rect.rects[this.activeRect].width&&(e=this.$store.state.rect.rects[this.activeRect].width),t.target.value=e,this.$store.dispatch("rect/setMinWidth",{id:this.activeRect,width:e})},changeMinHeight:function(t){var e=parseInt(t.target.value);("number"!=typeof e||isNaN(e))&&(e=1),e<=0?e=1:e>this.$store.state.rect.rects[this.activeRect].height&&(e=this.$store.state.rect.rects[this.activeRect].height),t.target.value=e,this.$store.dispatch("rect/setMinHeight",{id:this.activeRect,height:e})},changeTop:function(t){var e=parseInt(t.target.value);if("number"!=typeof e||isNaN(e))return e=this.$store.state.rect.rects[this.activeRect].top,void(t.target.value=e);this.$store.dispatch("rect/setTop",{id:this.activeRect,top:e})},changeLeft:function(t){var e=parseInt(t.target.value);("number"!=typeof e||isNaN(e))&&(e=this.$store.state.rect.rects[this.activeRect].left,t.target.value=e),this.$store.dispatch("rect/setLeft",{id:this.activeRect,left:e})},changeWidth:function(t){var e=parseInt(t.target.value);("number"!=typeof e||isNaN(e))&&(e=this.$store.state.rect.rects[this.activeRect].width,t.target.value=e),this.$store.dispatch("rect/setWidth",{id:this.activeRect,width:e})},changeHeight:function(t){var e=parseInt(t.target.value);("number"!=typeof e||isNaN(e))&&(e=this.$store.state.rect.rects[this.activeRect].height,t.target.value=e),this.$store.dispatch("rect/setHeight",{id:this.activeRect,height:e})}}},r=(c(356),c(68)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"toolbar",on:{mousedown:function(t){t.stopPropagation()}}},[c("div",{staticClass:"toolbar-wh-row"},[c("p",{staticClass:"toolbar-row-title"},[t._v("Position")]),t._v(" "),c("span",{staticClass:"toolbar-position-inp"},[t._v("top\n      "),c("input",{domProps:{value:t.top},on:{keyup:t.changeTop}}),t._v(" "),c("b-btn",{on:{click:function(e){return t.toggleYLock()}}},[t._v("toggleYLock")])],1),t._v(" "),c("span",{staticClass:"toolbar-position-inp"},[t._v("left\n      "),c("input",{domProps:{value:t.left},on:{keyup:t.changeLeft}}),t._v(" "),c("b-btn",{on:{click:function(e){return t.toggleXLock()}}},[t._v("toggleXLock")])],1)]),t._v(" "),c("div",{staticClass:"toolbar-wh-row"},[c("p",{staticClass:"toolbar-row-title"},[t._v("Size")]),t._v(" "),c("span",{staticClass:"toolbar-size-inp"},[t._v("width\n      "),c("input",{domProps:{value:t.width},on:{keyup:t.changeWidth}}),t._v(" "),c("b-btn",{on:{click:function(e){return t.toggleAspect()}}},[t._v("toggleAspect")])],1),t._v(" "),c("span",{staticClass:"toolbar-size-inp"},[t._v("height\n      "),c("input",{domProps:{value:t.height},on:{keyup:t.changeHeight}})])]),t._v(" "),c("div",{staticClass:"toolbar-wh-row"},[c("p",{staticClass:"toolbar-row-title"},[t._v("Minimal size")]),t._v(" "),c("span",{staticClass:"toolbar-size-inp"},[t._v("width\n      "),c("input",{attrs:{disabled:null===t.activeRect},domProps:{value:t.minw},on:{keyup:t.changeMinWidth}})]),t._v(" "),c("span",{staticClass:"toolbar-size-inp"},[t._v("height\n      "),c("input",{attrs:{disabled:null===t.activeRect},domProps:{value:t.minh},on:{keyup:t.changeMinHeight}})])]),t._v(" "),c("div",{staticClass:"toolbar-wh-row"},[c("p",{staticClass:"toolbar-row-title"},[t._v("Restrictions")]),t._v(" "),c("label",{staticClass:"toolbar-check-inp"},[c("input",{attrs:{type:"checkbox",disabled:null===t.activeRect},domProps:{checked:t.resizable},on:{change:t.toggleResizable}}),t._v("\n      isResizable")]),t._v(" "),c("label",{staticClass:"toolbar-check-inp"},[c("input",{attrs:{type:"checkbox",disabled:null===t.activeRect},domProps:{checked:t.draggable},on:{change:t.toggleDraggable}}),t._v("\n      isDraggable")]),t._v(" "),c("label",{staticClass:"toolbar-check-inp"},[c("input",{attrs:{type:"checkbox",disabled:null===t.activeRect},domProps:{checked:t.snapToGrid},on:{change:t.toggleSnapToGrid}}),t._v("\n      snapToGrid")]),t._v(" "),c("label",{staticClass:"toolbar-check-inp"},[c("input",{attrs:{type:"checkbox",disabled:null===t.activeRect},domProps:{checked:t.parentLim},on:{change:t.toggleParentLimitation}}),t._v("\n      parentLimitation")]),t._v(" "),c("b-btn",{on:{click:function(e){return t.toBottom()}}},[t._v("toBottom")]),t._v(" "),c("b-btn",{on:{click:function(e){return t.toTop()}}},[t._v("toTop")])],1)])}),[],!1,null,"ff435a6c",null);e.default=component.exports}}]);