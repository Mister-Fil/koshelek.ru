(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{345:function(t,e){t.exports=function(t){return Map.prototype.entries.call(t)}},351:function(t,e,n){var content=n(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(121).default)("6c667b26",content,!0,{sourceMap:!1})},357:function(t,e,n){"use strict";var r=n(358),o=n(359);t.exports=r("Map",(function(t){return function(){return t(this,arguments.length?arguments[0]:void 0)}}),o)},358:function(t,e,n){"use strict";var r=n(10),o=n(14),h=n(101),c=n(41),l=n(232),d=n(231),f=n(83),v=n(24),m=n(11),y=n(122),x=n(65),w=n(125);t.exports=function(t,e,n){var S=-1!==t.indexOf("Map"),M=-1!==t.indexOf("Weak"),k=S?"set":"add",R=o[t],E=R&&R.prototype,T=R,B={},D=function(t){var e=E[t];c(E,t,"add"==t?function(t){return e.call(this,0===t?0:t),this}:"delete"==t?function(t){return!(M&&!v(t))&&e.call(this,0===t?0:t)}:"get"==t?function(t){return M&&!v(t)?void 0:e.call(this,0===t?0:t)}:"has"==t?function(t){return!(M&&!v(t))&&e.call(this,0===t?0:t)}:function(t,n){return e.call(this,0===t?0:t,n),this})};if(h(t,"function"!=typeof R||!(M||E.forEach&&!m((function(){(new R).entries().next()})))))T=n.getConstructor(e,t,S,k),l.enable();else if(h(t,!0)){var I=new T,A=I[k](M?{}:-0,1)!=I,z=m((function(){I.has(1)})),C=y((function(t){new R(t)})),N=!M&&m((function(){for(var t=new R,e=5;e--;)t[k](e,e);return!t.has(-0)}));C||((T=e((function(e,n){f(e,T,t);var r=w(new R,e,T);return null!=n&&d(n,r[k],{that:r,AS_ENTRIES:S}),r}))).prototype=E,E.constructor=T),(z||N)&&(D("delete"),D("has"),S&&D("get")),(N||A)&&D(k),M&&E.clear&&delete E.clear}return B[t]=T,r({global:!0,forced:T!=R},B),x(T,t),M||n.setStrong(T,t,S),T}},359:function(t,e,n){"use strict";var r=n(33).f,o=n(61),h=n(123),c=n(70),l=n(83),d=n(231),f=n(166),v=n(124),m=n(28),y=n(232).fastKey,x=n(49),w=x.set,S=x.getterFor;t.exports={getConstructor:function(t,e,n,f){var v=t((function(t,r){l(t,v,e),w(t,{type:e,index:o(null),first:void 0,last:void 0,size:0}),m||(t.size=0),null!=r&&d(r,t[f],{that:t,AS_ENTRIES:n})})),x=S(e),M=function(t,e,n){var r,o,h=x(t),c=k(t,e);return c?c.value=n:(h.last=c={index:o=y(e,!0),key:e,value:n,previous:r=h.last,next:void 0,removed:!1},h.first||(h.first=c),r&&(r.next=c),m?h.size++:t.size++,"F"!==o&&(h.index[o]=c)),t},k=function(t,e){var n,r=x(t),o=y(e);if("F"!==o)return r.index[o];for(n=r.first;n;n=n.next)if(n.key==e)return n};return h(v.prototype,{clear:function(){for(var t=x(this),data=t.index,e=t.first;e;)e.removed=!0,e.previous&&(e.previous=e.previous.next=void 0),delete data[e.index],e=e.next;t.first=t.last=void 0,m?t.size=0:this.size=0},delete:function(t){var e=this,n=x(e),r=k(e,t);if(r){var o=r.next,h=r.previous;delete n.index[r.index],r.removed=!0,h&&(h.next=o),o&&(o.previous=h),n.first==r&&(n.first=o),n.last==r&&(n.last=h),m?n.size--:e.size--}return!!r},forEach:function(t){for(var e,n=x(this),r=c(t,arguments.length>1?arguments[1]:void 0,3);e=e?e.next:n.first;)for(r(e.value,e.key,this);e&&e.removed;)e=e.previous},has:function(t){return!!k(this,t)}}),h(v.prototype,n?{get:function(t){var e=k(this,t);return e&&e.value},set:function(t,e){return M(this,0===t?0:t,e)}}:{add:function(t){return M(this,t=0===t?0:t,t)}}),m&&r(v.prototype,"size",{get:function(){return x(this).size}}),v},setStrong:function(t,e,n){var r=e+" Iterator",o=S(e),h=S(r);f(t,e,(function(t,e){w(this,{type:r,target:t,state:o(t),kind:e,last:void 0})}),(function(){for(var t=h(this),e=t.kind,n=t.last;n&&n.removed;)n=n.previous;return t.target&&(t.last=n=n?n.next:t.state.first)?"keys"==e?{value:n.key,done:!1}:"values"==e?{value:n.value,done:!1}:{value:[n.key,n.value],done:!1}:(t.target=void 0,{value:void 0,done:!0})}),n?"entries":"values",!n,!0),v(e)}}},360:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(361);r({target:"Map",proto:!0,real:!0,forced:o},{deleteAll:function(){return h.apply(this,arguments)}})},361:function(t,e,n){"use strict";var r=n(26),o=n(55);t.exports=function(){for(var t,e=r(this),n=o(e.delete),h=!0,c=0,l=arguments.length;c<l;c++)t=n.call(e,arguments[c]),h=h&&t;return!!h}},362:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(26),c=n(70),l=n(345),d=n(231);r({target:"Map",proto:!0,real:!0,forced:o},{every:function(t){var map=h(this),e=l(map),n=c(t,arguments.length>1?arguments[1]:void 0,3);return!d(e,(function(t,e,r){if(!n(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},363:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(51),c=n(26),l=n(55),d=n(70),f=n(82),v=n(345),m=n(231);r({target:"Map",proto:!0,real:!0,forced:o},{filter:function(t){var map=c(this),e=v(map),n=d(t,arguments.length>1?arguments[1]:void 0,3),r=new(f(map,h("Map"))),o=l(r.set);return m(e,(function(t,e){n(e,t,map)&&o.call(r,t,e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},364:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(26),c=n(70),l=n(345),d=n(231);r({target:"Map",proto:!0,real:!0,forced:o},{find:function(t){var map=h(this),e=l(map),n=c(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,r){if(n(e,t,map))return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},365:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(26),c=n(70),l=n(345),d=n(231);r({target:"Map",proto:!0,real:!0,forced:o},{findKey:function(t){var map=h(this),e=l(map),n=c(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,r){if(n(e,t,map))return r(t)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},366:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(26),c=n(345),l=n(367),d=n(231);r({target:"Map",proto:!0,real:!0,forced:o},{includes:function(t){return d(c(h(this)),(function(e,n,r){if(l(n,t))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},367:function(t,e){t.exports=function(t,e){return t===e||t!=t&&e!=e}},368:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(26),c=n(345),l=n(231);r({target:"Map",proto:!0,real:!0,forced:o},{keyOf:function(t){return l(c(h(this)),(function(e,n,r){if(n===t)return r(e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).result}})},369:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(51),c=n(26),l=n(55),d=n(70),f=n(82),v=n(345),m=n(231);r({target:"Map",proto:!0,real:!0,forced:o},{mapKeys:function(t){var map=c(this),e=v(map),n=d(t,arguments.length>1?arguments[1]:void 0,3),r=new(f(map,h("Map"))),o=l(r.set);return m(e,(function(t,e){o.call(r,n(e,t,map),e)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},370:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(51),c=n(26),l=n(55),d=n(70),f=n(82),v=n(345),m=n(231);r({target:"Map",proto:!0,real:!0,forced:o},{mapValues:function(t){var map=c(this),e=v(map),n=d(t,arguments.length>1?arguments[1]:void 0,3),r=new(f(map,h("Map"))),o=l(r.set);return m(e,(function(t,e){o.call(r,t,n(e,t,map))}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),r}})},371:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(26),c=n(55),l=n(231);r({target:"Map",proto:!0,real:!0,forced:o},{merge:function(t){for(var map=h(this),e=c(map.set),n=arguments.length,i=0;i<n;)l(arguments[i++],e,{that:map,AS_ENTRIES:!0});return map}})},372:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(26),c=n(55),l=n(345),d=n(231);r({target:"Map",proto:!0,real:!0,forced:o},{reduce:function(t){var map=h(this),e=l(map),n=arguments.length<2,r=n?void 0:arguments[1];if(c(t),d(e,(function(e,o){n?(n=!1,r=o):r=t(r,o,e,map)}),{AS_ENTRIES:!0,IS_ITERATOR:!0}),n)throw TypeError("Reduce of empty map with no initial value");return r}})},373:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(26),c=n(70),l=n(345),d=n(231);r({target:"Map",proto:!0,real:!0,forced:o},{some:function(t){var map=h(this),e=l(map),n=c(t,arguments.length>1?arguments[1]:void 0,3);return d(e,(function(t,e,r){if(n(e,t,map))return r()}),{AS_ENTRIES:!0,IS_ITERATOR:!0,INTERRUPTED:!0}).stopped}})},374:function(t,e,n){"use strict";var r=n(10),o=n(54),h=n(26),c=n(55);r({target:"Map",proto:!0,real:!0,forced:o},{update:function(t,e){var map=h(this),n=arguments.length;c(e);var r=map.has(t);if(!r&&n<3)throw TypeError("Updating absent value");var o=r?map.get(t):c(n>2?arguments[2]:void 0)(t,map);return map.set(t,e(o,t,map)),map}})},375:function(t,e,n){"use strict";n(351)},376:function(t,e,n){var r=n(120)(!1);r.push([t.i,'.vdr[data-v-2c8d3e06],.vdr.active[data-v-2c8d3e06]:before{position:absolute;box-sizing:border-box}.vdr.active[data-v-2c8d3e06]:before{content:"";width:100%;height:100%;top:0;left:0;outline:1px dashed #d6d6d6}.vdr-stick[data-v-2c8d3e06]{box-sizing:border-box;position:absolute;font-size:1px;background:#fff;border:1px solid #6c6c6c;box-shadow:0 0 2px #bbb}.inactive .vdr-stick[data-v-2c8d3e06]{display:none}.vdr-stick-br[data-v-2c8d3e06],.vdr-stick-tl[data-v-2c8d3e06]{cursor:nwse-resize}.vdr-stick-bm[data-v-2c8d3e06],.vdr-stick-tm[data-v-2c8d3e06]{left:50%;cursor:ns-resize}.vdr-stick-bl[data-v-2c8d3e06],.vdr-stick-tr[data-v-2c8d3e06]{cursor:nesw-resize}.vdr-stick-ml[data-v-2c8d3e06],.vdr-stick-mr[data-v-2c8d3e06]{top:50%;cursor:ew-resize}.vdr-stick.not-resizable[data-v-2c8d3e06]{display:none}.content-container[data-v-2c8d3e06]{display:block;position:relative}',""]),t.exports=r},379:function(t,e,n){"use strict";n.r(e);var r=n(32);n(2),n(233),n(71),n(357),n(20),n(40),n(360),n(362),n(363),n(364),n(365),n(366),n(368),n(369),n(370),n(371),n(372),n(373),n(374),n(47),n(36),n(16),n(23),n(56),n(3),n(57),n(60);function o(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var c={t:"top",m:"marginTop",b:"bottom"},l={l:"left",m:"marginLeft",r:"right"};var d={name:"DragResize",props:{id:null,stickSize:{type:Number,default:8},parentScaleX:{type:Number,default:1},parentScaleY:{type:Number,default:1},isActive:{type:Boolean,default:!1},collide:{type:Boolean,default:!1},preventActiveBehavior:{type:Boolean,default:!1},isDraggable:{type:Boolean,default:!0},isResizable:{type:Boolean,default:!0},aspectRatio:{type:Boolean,default:!1},parentLimitation:{type:Boolean,default:!1},snapToGrid:{type:Boolean,default:!1},gridX:{type:Number,default:50,validator:function(t){return t>=0}},gridY:{type:Number,default:50,validator:function(t){return t>=0}},parentW:{type:Number,default:0,validator:function(t){return t>=0}},parentH:{type:Number,default:0,validator:function(t){return t>=0}},w:{type:[String,Number],default:200,validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},h:{type:[String,Number],default:200,validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},minw:{type:Number,default:50,validator:function(t){return t>=0}},minh:{type:Number,default:50,validator:function(t){return t>=0}},x:{type:Number,default:0,validator:function(t){return"number"==typeof t}},y:{type:Number,default:0,validator:function(t){return"number"==typeof t}},z:{type:[String,Number],default:"auto",validator:function(t){return"string"==typeof t?"auto"===t:t>=0}},dragHandle:{type:String,default:null},dragCancel:{type:String,default:null},sticks:{type:Array,default:function(){return["br","bl"]}},axis:{type:String,default:"both",validator:function(t){return["x","y","both","none"].includes(t)}},contentClass:{type:String,required:!1,default:""}},emits:["clicked","dragging","dragstop","resizing","resizestop","activated","deactivated"],data:function(){return{fixAspectRatio:null,active:null,zIndex:null,parentWidth:null,parentHeight:null,left:null,top:null,right:null,bottom:null,minHeight:null}},computed:{positionStyle:function(){return{top:this.top+"px",left:this.left+"px",zIndex:this.zIndex}},sizeStyle:function(){return{width:"auto"===this.w?"auto":this.width+"px",height:"auto"===this.h?"auto":this.height+"px"}},vdrStick:function(){var t=this;return function(e){var n={width:"".concat(t.stickSize/t.parentScaleX,"px"),height:"".concat(t.stickSize/t.parentScaleY,"px")};return n[c[e[0]]]="".concat(t.stickSize/t.parentScaleX/-2,"px"),n[l[e[1]]]="".concat(t.stickSize/t.parentScaleX/-2,"px"),n}},width:function(){return this.parentWidth-this.left-this.right},height:function(){return this.parentHeight-this.top-this.bottom},rect:function(){return{left:Math.round(this.left),top:Math.round(this.top),width:Math.round(this.width),height:Math.round(this.height)}}},watch:{active:function(t){t?this.$emit("activated"):this.$emit("deactivated")},isActive:{immediate:!0,handler:function(t){this.active=t}},z:{immediate:!0,handler:function(t){(t>=0||"auto"===t)&&(this.zIndex=t)}},x:{handler:function(t,e){var n=this;if(!this.stickDrag&&!this.bodyDrag&&t!==this.left){var r=e-t;this.bodyDown({pageX:this.left,pageY:this.top}),this.bodyMove({x:r,y:0}),this.$nextTick((function(){n.bodyUp()}))}}},y:{handler:function(t,e){var n=this;if(!this.stickDrag&&!this.bodyDrag&&t!==this.top){var r=e-t;this.bodyDown({pageX:this.left,pageY:this.top}),this.bodyMove({x:0,y:r}),this.$nextTick((function(){n.bodyUp()}))}}},w:{handler:function(t,e){var n=this;if(!this.stickDrag&&!this.bodyDrag&&t!==this.width){var r=e-t;this.stickDown("mr",{pageX:this.right,pageY:this.top+this.height/2},!0),this.stickMove({x:r,y:0}),this.$nextTick((function(){n.stickUp()}))}}},h:{handler:function(t,e){var n=this;if(!this.stickDrag&&!this.bodyDrag&&t!==this.height){var r=e-t;this.stickDown("bm",{pageX:this.left+this.width/2,pageY:this.bottom},!0),this.stickMove({x:0,y:r}),this.$nextTick((function(){n.stickUp()}))}}},parentW:function(t){this.right=t-this.width-this.left,this.parentWidth=t},parentH:function(t){this.bottom=t-this.height-this.top,this.parentHeight=t}},beforeCreate:function(){this.stickDrag=!1,this.bodyDrag=!1,this.dimensionsBeforeMove={pointerX:0,pointerY:0,x:0,y:0,w:0,h:0},this.limits={left:{min:null,max:null},right:{min:null,max:null},top:{min:null,max:null},bottom:{min:null,max:null}},this.currentStick=null},mounted:function(){var t=this;this.parentElement=this.$el.parentNode,this.parentWidth=this.parentW?this.parentW:this.parentElement.clientWidth,this.parentHeight=this.parentH?this.parentH:this.parentElement.clientHeight,this.left=this.x,this.top=this.y,this.right=this.parentWidth-("auto"===this.w?this.$refs.container.scrollWidth:this.w)-this.left,this.bottom=this.parentHeight-("auto"===this.h?this.$refs.container.scrollHeight:this.h)-this.top,this.domEvents=new Map([["mousemove",this.move],["mouseup",this.up],["mouseleave",this.up],["mousedown",this.deselect],["touchmove",this.move],["touchend",this.up],["touchcancel",this.up],["touchstart",this.up]]),this.domEvents.forEach((function(t,e){document.documentElement.addEventListener(e,t)})),this.dragHandle&&Object(r.a)(this.$el.querySelectorAll(this.dragHandle)).forEach((function(e){e.setAttribute("data-drag-handle",t._uid)})),this.dragCancel&&Object(r.a)(this.$el.querySelectorAll(this.dragCancel)).forEach((function(e){e.setAttribute("data-drag-cancel",t._uid)}))},beforeDestroy:function(){this.domEvents.forEach((function(t,e){document.documentElement.removeEventListener(e,t)}))},methods:{deselect:function(){this.preventActiveBehavior||(this.active=!1)},move:function(t){if(this.stickDrag||this.bodyDrag){t.stopPropagation();var e=void 0!==t.pageX?t.pageX:t.touches[0].pageX,n=void 0!==t.pageY?t.pageY:t.touches[0].pageY,r=this.dimensionsBeforeMove,o={x:(r.pointerX-e)/this.parentScaleX,y:(r.pointerY-n)/this.parentScaleY};if(this.stickDrag&&this.stickMove(o),this.bodyDrag){if("x"===this.axis)o.y=0;else if("y"===this.axis)o.x=0;else if("none"===this.axis)return;this.bodyMove(o)}}},up:function(t){this.stickDrag?this.stickUp(t):this.bodyDrag&&this.bodyUp(t)},bodyDown:function(t){var e=t.target,button=t.button;if(this.preventActiveBehavior||(this.active=!0),(!button||0===button)&&(this.$emit("clicked",t),this.active&&!(this.dragHandle&&e.getAttribute("data-drag-handle")!==this._uid.toString()||this.dragCancel&&e.getAttribute("data-drag-cancel")===this._uid.toString()))){void 0!==t.stopPropagation&&t.stopPropagation(),void 0!==t.preventDefault&&t.preventDefault(),this.isDraggable&&(this.bodyDrag=!0);var n=void 0!==t.pageX?t.pageX:t.touches[0].pageX,r=void 0!==t.pageY?t.pageY:t.touches[0].pageY;this.saveDimensionsBeforeMove({pointerX:n,pointerY:r}),this.parentLimitation&&(this.limits=this.calcDragLimitation())}},isCollides:function(rect){var t,e=!1,n=o(this.collide?this.$store.getters["rect/getRectItems"]:this.$store.getters["rect/getRectCollideItems"]);try{for(n.s();!(t=n.n()).done;){var r=t.value;this.id!==r.id&&this.isCollide(rect,r)&&(e=!0)}}catch(t){n.e(t)}finally{n.f()}return e},isCollide:function(t,e){return!(t.top+t.height<e.top||t.top>e.top+e.height||t.left+t.width<e.left||t.left>e.left+e.width)},bodyMove:function(t){var e=this.dimensionsBeforeMove,n=this.parentWidth,r=this.parentHeight,o=this.gridX,h=this.gridY,c=this.width,l=this.height,d=e.top-t.y,f=e.bottom+t.y,v=e.left-t.x,m=e.right+t.x;if(this.snapToGrid){var y=!0,x=!0,w=d-Math.floor(d/h)*h,S=r-f-Math.floor((r-f)/h)*h,M=v-Math.floor(v/o)*o,k=n-m-Math.floor((n-m)/o)*o;w>h/2&&(w-=h),S>h/2&&(S-=h),M>o/2&&(M-=o),k>o/2&&(k-=o),Math.abs(S)<Math.abs(w)&&(y=!1),Math.abs(k)<Math.abs(M)&&(x=!1),f=r-l-(d-=y?w:S),m=n-c-(v-=x?M:k)}this.isCollides({width:c-2,height:l-2,top:d+1,left:this.left+1})&&(d=this.top,f=this.bottom),this.isCollides({width:c-2,height:l-2,top:this.top+1,left:v+1})&&(v=this.left,m=this.right);var R=this.rectCorrectionByLimit({newLeft:v,newRight:m,newTop:d,newBottom:f});this.left=R.newLeft,this.right=R.newRight,this.top=R.newTop,this.bottom=R.newBottom,this.$emit("dragging",this.rect)},bodyUp:function(){this.bodyDrag=!1,this.$emit("dragging",this.rect),this.$emit("dragstop",this.rect),this.dimensionsBeforeMove={pointerX:0,pointerY:0,x:0,y:0,w:0,h:0},this.limits={left:{min:null,max:null},right:{min:null,max:null},top:{min:null,max:null},bottom:{min:null,max:null}}},stickDown:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(this.isResizable&&this.active||n){this.stickDrag=!0;var r=void 0!==e.pageX?e.pageX:e.touches[0].pageX,o=void 0!==e.pageY?e.pageY:e.touches[0].pageY;this.saveDimensionsBeforeMove({pointerX:r,pointerY:o}),this.currentStick=t,this.limits=this.calcResizeLimits()}},saveDimensionsBeforeMove:function(t){var e=t.pointerX,n=t.pointerY;this.dimensionsBeforeMove.pointerX=e,this.dimensionsBeforeMove.pointerY=n,this.dimensionsBeforeMove.left=this.left,this.dimensionsBeforeMove.right=this.right,this.dimensionsBeforeMove.top=this.top,this.dimensionsBeforeMove.bottom=this.bottom,this.dimensionsBeforeMove.width=this.width,this.dimensionsBeforeMove.height=this.height,this.aspectFactor=this.width/this.height},stickMove:function(t){var e=this.currentStick,n=this.dimensionsBeforeMove,r=this.gridY,o=this.gridX,h=this.snapToGrid,c=this.parentHeight,l=this.parentWidth,d=this.width,f=this.height,v=this.top,m=this.left,y=n.top,x=n.bottom,w=n.left,S=n.right,M=(n.top,n.bottom,n.left,n.right,l-w-S),k=c-y-x;switch(e[0]){case"b":x=n.bottom+t.y,h&&(x=c-Math.round((c-x)/r)*r),k=c-y-x,this.isCollides({width:d-2,height:k-2,top:v+1,left:m+1})&&(x=n.bottom,t.y=0);break;case"t":y=n.top-t.y,h&&(y=Math.round(y/r)*r),k=c-y-x,this.isCollides({width:d-2,height:k-2,top:y+1,left:m+1})&&(t.y=0,y=n.top)}switch(e[1]){case"r":S=n.right+t.x,h&&(S=l-Math.round((l-S)/o)*o),M=l-w-S,this.isCollides({width:M-2,height:f-2,top:v+1,left:m+1})&&(t.x=0,S=n.right);break;case"l":w=n.left-t.x,h&&(w=Math.round(w/o)*o),M=l-w-S,this.isCollides({width:M,height:f-2,top:v+1,left:w})&&(t.x=0,w=n.left)}var R=this.rectCorrectionByLimit({newLeft:w,newRight:S,newTop:y,newBottom:x});if(w=R.newLeft,S=R.newRight,y=R.newTop,x=R.newBottom,this.aspectRatio){var E=this.rectCorrectionByAspectRatio({newLeft:w,newRight:S,newTop:y,newBottom:x});w=E.newLeft,S=E.newRight,y=E.newTop,x=E.newBottom}this.top=y,this.bottom=x,this.left=w,this.right=S,this.$emit("resizing",this.rect)},stickUp:function(){this.stickDrag=!1,this.dimensionsBeforeMove={pointerX:0,pointerY:0,x:0,y:0,w:0,h:0},this.limits={left:{min:null,max:null},right:{min:null,max:null},top:{min:null,max:null},bottom:{min:null,max:null}},this.$emit("resizing",this.rect),this.$emit("resizestop",this.rect)},calcDragLimitation:function(){var t=this.parentWidth,e=this.parentHeight;return{left:{min:0,max:t-this.width},right:{min:0,max:t-this.width},top:{min:0,max:e-this.height},bottom:{min:0,max:e-this.height}}},calcResizeLimits:function(){var t=this.aspectFactor,e=this.width,n=this.height,r=this.bottom,o=this.top,h=this.left,c=this.right,l=this.minh,d=this.minw,f=this.parentLimitation?0:null;this.aspectRatio&&(d/l>t?l=d/t:d=t*l);var v={left:{min:f,max:h+(e-d)},right:{min:f,max:c+(e-d)},top:{min:f,max:o+(n-l)},bottom:{min:f,max:r+(n-l)}};if(this.aspectRatio){var m={left:{min:h-Math.min(o,r)*t*2,max:h+(n-l)/2*t*2},right:{min:c-Math.min(o,r)*t*2,max:c+(n-l)/2*t*2},top:{min:o-Math.min(h,c)/t*2,max:o+(e-d)/2/t*2},bottom:{min:r-Math.min(h,c)/t*2,max:r+(e-d)/2/t*2}};"m"===this.currentStick[0]?(v.left={min:Math.max(v.left.min,m.left.min),max:Math.min(v.left.max,m.left.max)},v.right={min:Math.max(v.right.min,m.right.min),max:Math.min(v.right.max,m.right.max)}):"m"===this.currentStick[1]&&(v.top={min:Math.max(v.top.min,m.top.min),max:Math.min(v.top.max,m.top.max)},v.bottom={min:Math.max(v.bottom.min,m.bottom.min),max:Math.min(v.bottom.max,m.bottom.max)})}return v},sideCorrectionByLimit:function(t,e){var n=e;return null!==t.min&&e<t.min?n=t.min:null!==t.max&&t.max<e&&(n=t.max),n},rectCorrectionByLimit:function(rect){var t=this.limits,e=rect.newRight,n=rect.newLeft,r=rect.newBottom,o=rect.newTop;return{newLeft:n=this.sideCorrectionByLimit(t.left,n),newRight:e=this.sideCorrectionByLimit(t.right,e),newTop:o=this.sideCorrectionByLimit(t.top,o),newBottom:r=this.sideCorrectionByLimit(t.bottom,r)}},rectCorrectionByAspectRatio:function(rect){var t=rect.newLeft,e=rect.newRight,n=rect.newTop,r=rect.newBottom,o=this.parentWidth,h=this.parentHeight,c=this.currentStick,l=this.aspectFactor,d=this.dimensionsBeforeMove,f=o-t-e,v=h-n-r;if("m"===c[1]){var m=v-d.height;t-=m*l/2,e-=m*l/2}else if("m"===c[0]){var y=f-d.width;n-=y/l/2,r-=y/l/2}else f/v>l?(f=l*v,"l"===c[1]?t=o-e-f:e=o-t-f):(v=f/l,"t"===c[0]?n=h-r-v:r=h-n-v);return{newLeft:t,newRight:e,newTop:n,newBottom:r}}}},f=(n(375),n(69)),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vdr",class:(t.active||t.isActive?"active":"inactive")+" "+(t.contentClass?t.contentClass:""),style:t.positionStyle,on:{mousedown:function(e){return t.bodyDown(e)},touchstart:function(e){return t.bodyDown(e)},touchend:function(e){return t.up(e)}}},[n("div",{ref:"container",staticClass:"content-container",style:t.sizeStyle},[t._t("default")],2),t._v(" "),t._l(t.sticks,(function(e){return n("div",{key:e,staticClass:"vdr-stick",class:["vdr-stick-"+e,t.isResizable?"":"not-resizable"],style:t.vdrStick(e),on:{mousedown:function(n){return n.stopPropagation(),n.preventDefault(),t.stickDown(e,n)},touchstart:function(n){return n.stopPropagation(),n.preventDefault(),t.stickDown(e,n)}}})}))],2)}),[],!1,null,"2c8d3e06",null);e.default=component.exports}}]);