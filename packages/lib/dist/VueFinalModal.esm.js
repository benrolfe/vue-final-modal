import{ref as e,reactive as n,computed as t,watch as o,onMounted as r,onBeforeUnmount as i,nextTick as a,pushScopeId as l,popScopeId as u,withDirectives as s,openBlock as c,createElementBlock as f,normalizeStyle as d,normalizeClass as v,withKeys as p,createVNode as m,Transition as y,mergeProps as h,withCtx as b,createCommentVNode as g,createElementVNode as w,withModifiers as x,renderSlot as E,Fragment as M,renderList as S,vShow as O,createBlock as z,resolveDynamicComponent as T,toHandlers as C,createSlots as k,markRaw as A,shallowReactive as L}from"vue";function _(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function B(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?_(Object(t),!0).forEach((function(n){N(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):_(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function j(e){return(j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,n,t,o,r,i,a){try{var l=e[i](a),u=l.value}catch(e){return void t(e)}l.done?n(u):Promise.resolve(u).then(o,r)}function V(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function I(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function D(e,n,t){return n&&I(e.prototype,n),t&&I(e,t),e}function N(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function R(e){return function(e){if(Array.isArray(e))return $(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(!e)return;if("string"==typeof e)return $(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return $(e,n)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,o=new Array(n);t<n;t++)o[t]=e[t];return o}var H=function(e){return function(e,n){return R(e.querySelectorAll(n)||[])}(e,'button:not([disabled]), select:not([disabled]), a[href]:not([disabled]), area[href]:not([disabled]), [contentEditable=""]:not([disabled]), [contentEditable="true"]:not([disabled]), [contentEditable="TRUE"]:not([disabled]), textarea:not([disabled]), iframe:not([disabled]), input:not([disabled]), summary:not([disabled]), [tabindex]:not([tabindex="-1"])')},F=function(e){return e==document.activeElement},K=function(){function e(){V(this,e),this.root=null,this.elements=[],this.onKeyDown=this.onKeyDown.bind(this)}return D(e,[{key:"lastElement",get:function(){return this.elements[this.elements.length-1]||null}},{key:"firstElement",get:function(){return this.elements[0]||null}},{key:"isEnabled",get:function(){return!!this.root}},{key:"onKeyDown",value:function(e){if(function(e){return"Tab"===e.key||9===e.keyCode}(e)){if(!e.shiftKey)return!document.activeElement||F(this.lastElement)?(this.firstElement.focus(),void e.preventDefault()):void 0;F(this.firstElement)&&(this.lastElement.focus(),e.preventDefault())}}},{key:"enable",value:function(e){e&&(this.root=e,this.elements=H(this.root),this.root.addEventListener("keydown",this.onKeyDown))}},{key:"disable",value:function(){this.root.removeEventListener("keydown",this.onKeyDown),this.root=null}}]),e}(),U=null;var W=function(e){var n=e.targetTouches?e.targetTouches[0]:e;return{x:n.clientX,y:n.clientY}},Y=function(e,n,t){return"number"!=typeof e&&(e=Math.min(n,t)||n),"number"!=typeof t&&(t=Math.max(n,e)),Math.min(Math.max(n,e),t)},q=function(e){return e&&Number(e.replace(/px$/,""))||0},G={down:{pc:"mousedown",m:"touchstart"},move:{pc:"mousemove",m:"touchmove"},up:{pc:"mouseup",m:"touchend"}},X=function(e,n,t){n&&n.addEventListener(G[e].pc,t),n&&n.addEventListener(G[e].m,t,{passive:!1})},Z=function(e,n,t){n&&n.removeEventListener(G[e].pc,t),n&&n.removeEventListener(G[e].m,t)},J=!1;if("undefined"!=typeof window){var Q={get passive(){J=!0}};window.addEventListener("testPassive",null,Q),window.removeEventListener("testPassive",null,Q)}var ee,ne,te="undefined"!=typeof window&&window.navigator&&window.navigator.platform&&(/iP(ad|hone|od)/.test(window.navigator.platform)||"MacIntel"===window.navigator.platform&&window.navigator.maxTouchPoints>1),oe=[],re=!1,ie=0,ae=-1,le=function(e,n){var t=!1;return function(e){for(var n=[];e;){if(n.push(e),e.classList.contains("vfm"))return n;e=e.parentElement}return n}(e).forEach((function(e){(function(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;var n=window.getComputedStyle(e);return["auto","scroll"].includes(n.overflowY)&&e.scrollHeight>e.clientHeight})(e)&&function(e,n){return!(0===e.scrollTop&&n<0||e.scrollTop+e.clientHeight+n>=e.scrollHeight&&n>0)}(e,n)&&(t=!0)})),t},ue=function(e){return oe.some((function(){return le(e,-ie)}))},se=function(e){var n=e||window.event;return!!ue(n.target)||(n.touches.length>1||(n.preventDefault&&n.preventDefault(),!1))},ce=function(e,n){if(e){if(!oe.some((function(n){return n.targetElement===e}))){var t={targetElement:e,options:n||{}};oe=[].concat(R(oe),[t]),te?(e.ontouchstart=function(e){1===e.targetTouches.length&&(ae=e.targetTouches[0].clientY)},e.ontouchmove=function(n){1===n.targetTouches.length&&function(e,n){ie=e.targetTouches[0].clientY-ae,!ue(e.target)&&(n&&0===n.scrollTop&&ie>0||function(e){return!!e&&e.scrollHeight-e.scrollTop<=e.clientHeight}(n)&&ie<0?se(e):e.stopPropagation())}(n,e)},re||(document.addEventListener("touchmove",se,J?{passive:!1}:void 0),re=!0)):function(e){if(void 0===ne){var n=!!e&&!0===e.reserveScrollBarGap,t=window.innerWidth-document.documentElement.clientWidth;if(n&&t>0){var o=parseInt(getComputedStyle(document.body).getPropertyValue("padding-right"),10);ne=document.body.style.paddingRight,document.body.style.paddingRight="".concat(o+t,"px")}}void 0===ee&&(ee=document.body.style.overflow,document.body.style.overflow="hidden")}(n)}}else console.error("disableBodyScroll unsuccessful - targetElement must be provided when calling disableBodyScroll on IOS devices.")},fe=function(e){e?(oe=oe.filter((function(n){return n.targetElement!==e})),te?(e.ontouchstart=null,e.ontouchmove=null,re&&0===oe.length&&(document.removeEventListener("touchmove",se,J?{passive:!1}:void 0),re=!1)):oe.length||(void 0!==ne&&(document.body.style.paddingRight=ne,ne=void 0),void 0!==ee&&(document.body.style.overflow=ee,ee=void 0))):console.error("enableBodyScroll unsuccessful - targetElement must be provided when calling enableBodyScroll on IOS devices.")},de=function(){},ve="enter",pe="entering",me="leave",ye="leavng",he={t:"ns-resize",tr:"nesw-resize",r:"ew-resize",br:"nwse-resize",b:"ns-resize",bl:"nesw-resize",l:"ew-resize",tl:"nwse-resize"},be={props:{name:{type:String,default:null},modelValue:{type:Boolean,default:!1},displayDirective:{type:String,default:"show",validator:function(e){return-1!==["if","show"].indexOf(e)}},classes:{type:[String,Object,Array],default:""},overlayClass:{type:[String,Object,Array],default:""},contentClass:{type:[String,Object,Array],default:""},styles:{type:[Object,Array],default:function(){return{}}},overlayStyle:{type:[Object,Array],default:function(){return{}}},contentStyle:{type:[Object,Array],default:function(){return{}}},lockScroll:{type:Boolean,default:!0},hideOverlay:{type:Boolean,default:!1},clickToClose:{type:Boolean,default:!0},escToClose:{type:Boolean,default:!1},nonModal:{type:Boolean,default:!1},attach:{type:null,default:!1,validator:function(e){var n=j(e);return"boolean"===n||"string"===n||e.nodeType===Node.ELEMENT_NODE}},transition:{type:[String,Object],default:"vfm"},overlayTransition:{type:[String,Object],default:"vfm"},zIndexAuto:{type:Boolean,default:!0},zIndexBase:{type:[String,Number],default:1e3},zIndex:{type:[Boolean,String,Number],default:!1},focusRetain:{type:Boolean,default:!0},focusTrap:{type:Boolean,default:!1},fitParent:{type:Boolean,default:!0},drag:{type:Boolean,default:!1},dragSelector:{type:String,default:""},keepChangedStyle:{type:Boolean,default:!1},resize:{type:Boolean,default:!1},resizeDirections:{type:Array,default:function(){return["t","tr","r","br","b","bl","l","tl"]},validator:function(e){return["t","tr","r","br","b","bl","l","tl"].filter((function(n){return-1!==e.indexOf(n)})).length===e.length}},minWidth:{type:Number,default:0},minHeight:{type:Number,default:0},maxWidth:{type:Number,default:1/0},maxHeight:{type:Number,default:1/0}},emits:["update:modelValue","click-outside","before-open","opened","_before-close","before-close","closed","_before-open","_opened","_closed","drag:start","drag:move","drag:end","resize:start","resize:move","resize:end"],setup:function(l,u){var s=u.emit,c=Symbol("vfm"),f=e(null),d=e(null),v=e(null),p=e(null),m=e(null),y=e(null),h=e(null),b=(null==U&&(U=new K),U),g=e(!1),w=n({modal:!1,overlay:!1,resize:!1}),x=e(null),E=e(null),M=e(!1),S=e({}),O=e({}),z=e(null),T=e(null),C=de,k=de,A=t((function(){return"string"==typeof l.overlayTransition?{name:l.overlayTransition}:B({},l.overlayTransition)})),L=t((function(){return"string"==typeof l.transition?{name:l.transition}:B({},l.transition)})),_=t((function(){return(l.hideOverlay||x.value===me)&&E.value===me})),j=t((function(){return!1===l.zIndex?!!l.zIndexAuto&&+l.zIndexBase+2*(h.value||0):l.zIndex})),P=t((function(){return B({},!1!==j.value&&{zIndex:j.value})})),V=t((function(){var e=[O.value];return Array.isArray(l.contentStyle)?e.push.apply(e,R(l.contentStyle)):e.push(l.contentStyle),e}));function I(){return{uid:c,props:l,emit:s,vfmContainer:d,vfmContent:v,vfmResize:p,vfmOverlayTransition:m,vfmTransition:y,getAttachElement:F,modalStackIndex:h,visibility:w,handleLockScroll:H,$focusTrap:b,toggle:ee,params:S}}function D(){if(l.modelValue){if(s("_before-open",G({type:"_before-open"})),J("before-open",!1))return void k("show");var e=F();if(e||!1===l.attach){!1!==l.attach&&e.appendChild(f.value);var n=l.api.openedModals.findIndex((function(e){return e.uid===c}));-1!==n&&l.api.openedModals.splice(n,1),l.api.openedModals.push(I()),h.value=l.api.openedModals.length-1,H(),l.api.openedModals.filter((function(e){return e.uid!==c})).forEach((function(n,t){n.getAttachElement()===e&&(n.modalStackIndex.value=t,n.visibility.overlay=!1)})),g.value=!0,w.overlay=!0,w.modal=!0}else!1!==e&&console.warn("Unable to locate target ".concat(l.attach))}}function $(){var e=l.api.openedModals.findIndex((function(e){return e.uid===c}));if(-1!==e&&l.api.openedModals.splice(e,1),l.api.openedModals.length>0){var n=l.api.openedModals[l.api.openedModals.length-1];n.props.focusTrap&&a((function(){n.$focusTrap.enable(n.vfmContainer.value),n.$focusTrap.firstElement.focus()})),(n.props.focusRetain||n.props.focusTrap)&&n.vfmContainer.value.focus(),!n.props.hideOverlay&&(n.visibility.overlay=!0)}l.drag&&oe(),l.resize&&ie(),z.value=null,w.overlay=!1,w.modal=!1}function H(){l.modelValue&&a((function(){l.lockScroll?ce(d.value,{reserveScrollBarGap:!0}):fe(d.value)}))}function F(){return!1!==l.attach&&("string"==typeof l.attach?!!window&&window.document.querySelector(l.attach):l.attach)}function G(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return B({ref:I()},e)}function J(e,n){var t=!1,o=G({type:e,stop:function(){t=!0}});return s(e,o),!!t&&(M.value=!0,a((function(){s("update:modelValue",n)})),!0)}function Q(e,n,t){z.value="".concat(n,":").concat(t),s(z.value,e)}function ee(e,n){var t=arguments;return new Promise((function(o,r){C=function(e){o(e),C=de},k=function(e){r(e),k=de};var i="boolean"==typeof e?e:!l.modelValue;i&&2===t.length&&(S.value=n),s("update:modelValue",i)}))}function ne(e){e.stopPropagation();var n,t="resize",o="drag",r=e.target.getAttribute("direction");if(r)n=t;else{if(!function(e,n,t){return""===t||R(n.querySelectorAll(t)).includes(e.target)}(e,v.value,l.dragSelector))return;n=o}Q(e,n,"start");var i,a,u,s,c=W(e),f=d.value.getBoundingClientRect(),p=v.value.getBoundingClientRect(),m="absolute"===window.getComputedStyle(v.value).position,y=q(O.value.top),h=q(O.value.left),b=function(){if(l.fitParent){var e={absolute:function(){return{minTop:0,minLeft:0,maxTop:f.height-p.height,maxLeft:f.width-p.width}},relative:function(){return{minTop:y+f.top-p.top,minLeft:h+f.left-p.left,maxTop:y+f.bottom-p.bottom,maxLeft:h+f.right-p.right}}};return m?e.absolute():e.relative()}return{}}(),g=n===t&&(i=document.body,a="cursor",u=he[r],s=i.style[a],i.style[a]=u,function(){i.style[a]=s}),w=function(e){e.stopPropagation(),Q(e,n,"move");var i,a,u=W(e),s={x:u.x-c.x,y:u.y-c.y};n===t&&(s=function(e,n,t,o,r){var i=function(e){var t,o=n[e.axis];o=l.fitParent?Y(e.min,o,e.max):o;var i=Y(e.minEdge,e.getEdge(o),e.maxEdge);return o=e.getOffsetAxis(i,r),N(t={},e.edgeName,i),N(t,e.axis,o),t},a=function(e,n,r,i){var a,u=o[n],s=t[e]-o[e],c=(a=n).charAt(0).toUpperCase()+a.slice(1);return{axis:r,edgeName:n,min:i?s:-u,max:i?u:s,minEdge:l["min".concat(c)],maxEdge:l["max".concat(c)],getEdge:function(e){return o[n]-e*(i?1:-1)},getOffsetAxis:function(e,t){var r=o[n]-e;return t?i?r:0:(i?1:-1)*r/2}}},u={t:["top","height","y",!0],b:["bottom","height","y",!1],l:["left","width","x",!0],r:["right","width","x",!1]},s={x:0,y:0};return e.split("").forEach((function(e){var n=a.apply(void 0,R(u[e]));s=B(B({},s),i(n))})),s}(r,s,f,p,m)),m?(i=p.top-f.top+s.y,a=p.left-f.left+s.x):(i=y+s.y,a=h+s.x),n===o&&l.fitParent&&(i=Y(b.minTop,i,b.maxTop),a=Y(b.minLeft,a,b.maxLeft));var d=B(B(B({position:"relative",top:i+"px",left:a+"px",margin:"unset",touchAction:"none"},m&&{position:"absolute",transform:"unset",width:p.width+"px",height:p.height+"px"}),s.width&&{width:s.width+"px"}),s.height&&{height:s.height+"px"});O.value=B(B({},O.value),d)};X("move",document,w),X("up",document,(function e(o){o.stopPropagation(),n===t&&g&&g(),setTimeout((function(){Q(o,n,"end")})),Z("move",document,w),Z("up",document,e)}))}function te(){X("down",v.value,ne),O.value.touchAction="none"}function oe(){Z("down",v.value,ne)}function re(){w.resize=!0,a((function(){X("down",p.value,ne)}))}function ie(){Z("down",p.value,ne),w.resize=!1}return o((function(){return l.modelValue}),(function(e){if(M.value)M.value=!1;else if(D(),!e){if(s("_before-close",G({type:"_before-close"})),J("before-close",!0))return void k("hide");$()}})),o((function(){return l.lockScroll}),H),o((function(){return l.hideOverlay}),(function(e){l.modelValue&&!e&&(w.overlay=!0)})),o((function(){return l.attach}),D),o(_,(function(e){e&&(g.value=!1,d.value.style.display="none")}),{flush:"post"}),o((function(){return l.drag}),(function(e){g.value&&(e?te():oe())})),o((function(){return l.resize}),(function(e){g.value&&(e?re():ie())})),o((function(){return l.keepChangedStyle}),(function(e){e||(O.value={})})),l.api.modals.push(I()),r((function(){D()})),i((function(){var e;$(),l.lockScroll&&d.value&&fe(d.value),null==f||null===(e=f.value)||void 0===e||e.remove();var n=l.api.modals.findIndex((function(e){return e.uid===c}));l.api.modals.splice(n,1)})),{root:f,vfmContainer:d,vfmContent:v,vfmResize:p,vfmOverlayTransition:m,vfmTransition:y,computedOverlayTransition:A,computedTransition:L,visible:g,visibility:w,params:S,calculateZIndex:j,bindStyle:P,bindContentStyle:V,beforeOverlayEnter:function(){x.value=pe},afterOverlayEnter:function(){x.value=ve},beforeOverlayLeave:function(){x.value=ye},afterOverlayLeave:function(){x.value=me},beforeModalEnter:function(){E.value=pe},afterModalEnter:function(){E.value=ve,(l.focusRetain||l.focusTrap)&&d.value.focus(),l.focusTrap&&b.enable(d.value),l.drag&&te(),l.resize&&re(),s("_opened"),s("opened",G({type:"opened"})),C("show")},beforeModalLeave:function(){E.value=ye,b.enabled&&b.disable()},afterModalLeave:function(){E.value=me,h.value=null,l.lockScroll&&fe(d.value),l.keepChangedStyle||(O.value={});var e=!1,n=G({type:"closed",stop:function(){e=!0}});s("_closed"),s("closed",n),C("hide"),e||(S.value={})},onMousedown:function(e){T.value=null==e?void 0:e.target},onMouseupContainer:function(){T.value===d.value&&"resize:move"!==z.value&&(s("click-outside",G({type:"click-outside"})),l.clickToClose&&s("update:modelValue",!1))},onEsc:function(){g.value&&l.escToClose&&s("update:modelValue",!1)}}}};l("data-v-72c09f54");var ge=["aria-expanded"],we={key:0,ref:"vfmResize",class:"vfm__resize vfm--absolute vfm--inset vfm--prevent-none vfm--select-none vfm--touch-none"},xe=["direction"];u();!function(e,n){void 0===n&&(n={});var t=n.insertAt;if(e&&"undefined"!=typeof document){var o=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css","top"===t&&o.firstChild?o.insertBefore(r,o.firstChild):o.appendChild(r),r.styleSheet?r.styleSheet.cssText=e:r.appendChild(document.createTextNode(e))}}("\n.vfm--fixed[data-v-72c09f54] {\n  position: fixed;\n}\n.vfm--absolute[data-v-72c09f54] {\n  position: absolute;\n}\n.vfm--inset[data-v-72c09f54] {\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n}\n.vfm--overlay[data-v-72c09f54] {\n  background-color: rgba(0, 0, 0, 0.5);\n}\n.vfm--prevent-none[data-v-72c09f54] {\n  pointer-events: none;\n}\n.vfm--prevent-auto[data-v-72c09f54] {\n  pointer-events: auto;\n}\n.vfm--outline-none[data-v-72c09f54]:focus {\n  outline: none;\n}\n.vfm-enter-active[data-v-72c09f54],\n.vfm-leave-active[data-v-72c09f54] {\n  transition: opacity 0.2s;\n}\n.vfm-enter-from[data-v-72c09f54],\n.vfm-leave-to[data-v-72c09f54] {\n  opacity: 0;\n}\n.vfm--touch-none[data-v-72c09f54] {\n  touch-action: none;\n}\n.vfm--select-none[data-v-72c09f54] {\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.vfm--resize-tr[data-v-72c09f54],\n.vfm--resize-br[data-v-72c09f54],\n.vfm--resize-bl[data-v-72c09f54],\n.vfm--resize-tl[data-v-72c09f54] {\n  width: 12px;\n  height: 12px;\n  z-index: 10;\n}\n.vfm--resize-t[data-v-72c09f54] {\n  top: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-tr[data-v-72c09f54] {\n  top: -6px;\n  right: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-r[data-v-72c09f54] {\n  top: 0;\n  right: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-br[data-v-72c09f54] {\n  bottom: -6px;\n  right: -6px;\n  cursor: nwse-resize;\n}\n.vfm--resize-b[data-v-72c09f54] {\n  bottom: -6px;\n  left: 0;\n  width: 100%;\n  height: 12px;\n  cursor: ns-resize;\n}\n.vfm--resize-bl[data-v-72c09f54] {\n  bottom: -6px;\n  left: -6px;\n  cursor: nesw-resize;\n}\n.vfm--resize-l[data-v-72c09f54] {\n  top: 0;\n  left: -6px;\n  width: 12px;\n  height: 100%;\n  cursor: ew-resize;\n}\n.vfm--resize-tl[data-v-72c09f54] {\n  top: -6px;\n  left: -6px;\n  cursor: nwse-resize;\n}\n"),be.render=function(e,n,t,o,r,i){return"if"!==t.displayDirective||o.visible?s((c(),f("div",{key:0,ref:"root",style:d(o.bindStyle),class:v(["vfm vfm--inset",[!1===t.attach?"vfm--fixed":"vfm--absolute",{"vfm--prevent-none":t.nonModal}]]),onKeydown:n[3]||(n[3]=p((function(){return o.onEsc&&o.onEsc.apply(o,arguments)}),["esc"]))},[m(y,h(o.computedOverlayTransition,{onBeforeEnter:o.beforeOverlayEnter,onAfterEnter:o.afterOverlayEnter,onBeforeLeave:o.beforeOverlayLeave,onAfterLeave:o.afterOverlayLeave}),{default:b((function(){return[!t.hideOverlay&&o.visibility.overlay?(c(),f("div",{key:0,class:v(["vfm__overlay vfm--overlay vfm--absolute vfm--inset",t.overlayClass]),style:d(t.overlayStyle)},null,6)):g("v-if",!0)]})),_:1},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"]),m(y,h(o.computedTransition,{onBeforeEnter:o.beforeModalEnter,onAfterEnter:o.afterModalEnter,onBeforeLeave:o.beforeModalLeave,onAfterLeave:o.afterModalLeave}),{default:b((function(){return[s(w("div",{ref:"vfmContainer",class:v(["vfm__container vfm--absolute vfm--inset vfm--outline-none",t.classes]),style:d(t.styles),"aria-expanded":o.visibility.modal.toString(),role:"dialog","aria-modal":"true",tabindex:"-1",onMouseup:n[1]||(n[1]=x((function(){return o.onMouseupContainer&&o.onMouseupContainer.apply(o,arguments)}),["self"])),onMousedown:n[2]||(n[2]=x((function(){return o.onMousedown&&o.onMousedown.apply(o,arguments)}),["self"]))},[w("div",{ref:"vfmContent",class:v(["vfm__content",[t.contentClass,{"vfm--prevent-auto":t.nonModal}]]),style:d(o.bindContentStyle),onMousedown:n[0]||(n[0]=function(e){return o.onMousedown(null)})},[E(e.$slots,"default",{params:o.params,close:function(){return e.$emit("update:modelValue",!1)}}),o.visibility.resize&&o.visibility.modal?(c(),f("div",we,[(c(!0),f(M,null,S(t.resizeDirections,(function(e){return c(),f("div",{key:e,direction:e,class:v(["vfm--resize-".concat(e),"vfm--absolute vfm--prevent-auto"])},null,10,xe)})),128))],512)):g("v-if",!0)],38)],46,ge),[[O,o.visibility.modal]])]})),_:3},16,["onBeforeEnter","onAfterEnter","onBeforeLeave","onAfterLeave"])],38)),[[O,"show"!==t.displayDirective||o.visible]]):g("v-if",!0)},be.__scopeId="data-v-72c09f54",be.__file="src/VueFinalModal.vue";var Ee={methods:{slice:function(e){this.api.dynamicModals.splice(e,1)},closed:function(e,n){this.slice(e),n.closed&&n.closed()},beforeClose:function(e){e.value&&(null==e||e.rejectClose("hide"))},beforeOpen:function(e,n,t){var o,r=this;return(o=function*(){e.ref.params.value=n.params,yield r.$nextTick(),yield r.$nextTick(),n.value||(r.slice(t),null==n||n.reject("show"))},function(){var e=this,n=arguments;return new Promise((function(t,r){var i=o.apply(e,n);function a(e){P(i,t,r,a,l,"next",e)}function l(e){P(i,t,r,a,l,"throw",e)}a(void 0)}))})()},isString:function(e){return"string"==typeof e}}},Me={class:"modals-container"},Se=["innerHTML"];Ee.render=function(e,n,t,o,r,i){return c(),f("div",Me,[(c(!0),f(M,null,S(e.api.dynamicModals,(function(e,n){return c(),z(T(e.component),h({key:e.id},e.bind,{modelValue:e.value,"onUpdate:modelValue":function(n){return e.value=n}},C(e.on),{on_beforeClose:function(n){return i.beforeClose(e)},on_closed:function(t){return i.closed(n,e)},on_beforeOpen:function(t){return i.beforeOpen(t,e,n)},on_opened:e.opened}),k({_:2},[S(e.slots,(function(e,n){return{name:n,fn:b((function(){return[g(" eslint-disable vue/no-v-html "),i.isString(e)?(c(),f("div",{key:0,innerHTML:e},null,8,Se)):(c(),z(T(e.component),h({key:1},e.bind,C(e.on||{})),null,16))]}))}}))]),1040,["modelValue","onUpdate:modelValue","on_beforeClose","on_closed","on_beforeOpen","on_opened"])})),128))])},Ee.__file="src/ModalsContainer.vue";var Oe=function(){function e(){var n=this;V(this,e);var t=function(e){var t=B(B({},e),{},{props:B({},e.props)});return Object.assign(t.props,{api:{type:Object,default:function(){return n}}}),A(t)};this.modals=[],this.openedModals=[],this.VueFinalModal=t(be),this.dynamicModals=L([]),this.ModalsContainer=t(Ee)}return D(e,[{key:"show",value:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];switch(j(e)){case"string":return this.toggle.apply(this,[e,!0].concat(t));case"object":var r=this.useModal(e,t[0]),i=r.show;return i()}}},{key:"hide",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return this.toggle(n,!1)}},{key:"hideAll",value:function(){return this.hide.apply(this,R(this.openedModals.map((function(e){return e.props.name}))))}},{key:"toggle",value:function(e){for(var n=arguments.length,t=new Array(n>1?n-1:0),o=1;o<n;o++)t[o-1]=arguments[o];var r=Array.isArray(e)?this.get.apply(this,R(e)):this.get(e);return Promise.allSettled(r.map((function(e){return e.toggle.apply(e,t)})))}},{key:"get",value:function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return this.modals.filter((function(e){return n.includes(e.props.name)}))}},{key:"existModal",value:function(e){return-1!==this.dynamicModals.indexOf(e)}},{key:"useModal",value:function(e){var t=this,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n(B({value:!1,component:this.VueFinalModal,id:Symbol("useModal"),bind:{},slots:{},on:{},params:o},e)),i=function(){return t.existModal(r)?Promise.resolve("[Vue Final Modal] modal is already opened"):new Promise((function(e,n){r.value=!0,r.reject=n,r.opened=function(){e("show")},t.dynamicModals.push(r)}))},a=function(){return t.existModal(r)?new Promise((function(e,n){r.value=!1,r.rejectClose=n,r.closed=function(){e("hide")}})):Promise.resolve("[Vue Final Modal] modal is already closed")};return{show:i,hide:a,options:r}}}]),e}(),ze=function(){var e=new Oe;return{$vfm:e,VueFinalModal:e.VueFinalModal,ModalsContainer:e.ModalsContainer,useModal:e.useModal.bind(e)}},Te=ze(),Ce=Te.$vfm,ke=Te.VueFinalModal,Ae=Te.ModalsContainer,Le=Te.useModal;export{Ce as $vfm,Oe as ModalInstance,Ae as ModalsContainer,ke as VueFinalModal,ze as createModalInstance,Le as useModal};
//# sourceMappingURL=VueFinalModal.esm.js.map
