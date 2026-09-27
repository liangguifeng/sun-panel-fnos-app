import{Z as Vt,O as Tt,U as Mt,R as jt}from"./index.vue_vue_type_script_setup_true_lang-ByGFyyTr.js";import{dx as Ot,cK as Bt,e as Ut,t as Lt,c as Ft,L as Wt,d as he,h as _,w as je,dy as Xt,dm as Kt,r as N,A as Oe,aA as ft,j as y,k as Yt,p as x,n as Q,l as w,H as pt,s as Gt,V as ot,da as rt,E as Zt,G as Ht,aS as qt,B as Jt,dz as Qt,z as Ce,x as vt,dA as en,C as tn,aH as Se,I as it,br as st,M as nn,a6 as on,bf as rn,aJ as Ie,an as sn,P as j,W as Ae,S as T,aB as an,U as M,Y as E,Q as ee,F as Ze,ac as He,$ as re,a0 as ne,a2 as le,R as K,Z as Ve,a1 as Ee,as as ln,bE as Ke}from"./index-DvrX_0iP.js";import{u as mt}from"./useMicroAppLoader-CrkiS7sh.js";import{w as cn,S as Te,j as un,l as dn}from"./index-DhJN9nwe.js";import{e as fn}from"./itemCard-uKGaNBrS.js";import{c as pn}from"./useContextRecord-BJ_GRjt3.js";import{u as vn}from"./openness-BHlwjgFa.js";import{P as mn,_ as gn}from"./indexV2-DKV_55Xi.js";import{P as hn}from"./item-cache-CZwe0Y8B.js";import{u as xn}from"./index-BJvB--f3.js";import{_ as wn}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./index-Bfu5ZQ-L.js";import"./proAuth-ZQs_cllT.js";import"./loader-BKsuelH6.js";import"./itemCardGroup-DeBL8L25.js";import"./cardEvents-D-UTTwDk.js";import"./about-CMG-0PLU.js";function yn(e){return Ot(Bt(e).toLowerCase())}var at=cn(function(e,n,r){return n=n.toLowerCase(),e+(r?yn(n):n)});const gt=Ft("n-carousel-methods");function bn(e){Wt(gt,e)}function qe(e="unknown",n="component"){const r=Ut(gt);return r||Lt(e,`\`${n}\` must be placed inside \`n-carousel\`.`),r}function Sn(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M10.26 3.2a.75.75 0 0 1 .04 1.06L6.773 8l3.527 3.74a.75.75 0 1 1-1.1 1.02l-4-4.25a.75.75 0 0 1 0-1.02l4-4.25a.75.75 0 0 1 1.06-.04z",fill:"currentColor"})))}function In(){return _("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16"},_("g",{fill:"none"},_("path",{d:"M5.74 3.2a.75.75 0 0 0-.04 1.06L9.227 8L5.7 11.74a.75.75 0 1 0 1.1 1.02l4-4.25a.75.75 0 0 0 0-1.02l-4-4.25a.75.75 0 0 0-1.06-.04z",fill:"currentColor"})))}const Cn=he({name:"CarouselArrow",setup(e){const{mergedClsPrefixRef:n}=je(e),{isVertical:r,isPrevDisabled:c,isNextDisabled:p,prev:C,next:$}=qe();return{mergedClsPrefix:n,isVertical:r,isPrevDisabled:c,isNextDisabled:p,prev:C,next:$}},render(){const{mergedClsPrefix:e}=this;return _("div",{class:`${e}-carousel__arrow-group`},_("div",{class:[`${e}-carousel__arrow`,this.isPrevDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.prev},Sn()),_("div",{class:[`${e}-carousel__arrow`,this.isNextDisabled()&&`${e}-carousel__arrow--disabled`],role:"button",onClick:this.next},In()))}}),An={total:{type:Number,default:0},currentIndex:{type:Number,default:0},dotType:{type:String,default:"dot"},trigger:{type:String,default:"click"},keyboard:Boolean},zn=he({name:"CarouselDots",props:An,setup(e){const{mergedClsPrefixRef:n}=je(e),r=N([]),c=qe();function p(v,l){switch(v.key){case"Enter":case" ":v.preventDefault(),c.to(l);return}e.keyboard&&S(v)}function C(v){e.trigger==="hover"&&c.to(v)}function $(v){e.trigger==="click"&&c.to(v)}function S(v){var l;if(v.shiftKey||v.altKey||v.ctrlKey||v.metaKey)return;const I=(l=document.activeElement)===null||l===void 0?void 0:l.nodeName.toLowerCase();if(I==="input"||I==="textarea")return;const{code:k}=v,F=k==="PageUp"||k==="ArrowUp",Y=k==="PageDown"||k==="ArrowDown",P=k==="PageUp"||k==="ArrowRight",R=k==="PageDown"||k==="ArrowLeft",G=c.isVertical(),L=G?F:P,Z=G?Y:R;!L&&!Z||(v.preventDefault(),L&&!c.isNextDisabled()?(c.next(),g(c.currentIndexRef.value)):Z&&!c.isPrevDisabled()&&(c.prev(),g(c.currentIndexRef.value)))}function g(v){var l;(l=r.value[v])===null||l===void 0||l.focus()}return Kt(()=>r.value.length=0),{mergedClsPrefix:n,dotEls:r,handleKeydown:p,handleMouseenter:C,handleClick:$}},render(){const{mergedClsPrefix:e,dotEls:n}=this;return _("div",{class:[`${e}-carousel__dots`,`${e}-carousel__dots--${this.dotType}`],role:"tablist"},Xt(this.total,r=>{const c=r===this.currentIndex;return _("div",{"aria-selected":c,ref:p=>n.push(p),role:"button",tabindex:"0",class:[`${e}-carousel__dot`,c&&`${e}-carousel__dot--active`],key:r,onClick:()=>{this.handleClick(r)},onMouseenter:()=>{this.handleMouseenter(r)},onKeydown:p=>{this.handleKeydown(p,r)}})}))}}),Me="CarouselItem";function kn(e){var n;return((n=e.type)===null||n===void 0?void 0:n.name)===Me}const ht=he({name:Me,setup(e){const{mergedClsPrefixRef:n}=je(e),r=qe(at(Me),`n-${at(Me)}`),c=N(),p=y(()=>{const{value:l}=c;return l?r.getSlideIndex(l):-1}),C=y(()=>r.isPrev(p.value)),$=y(()=>r.isNext(p.value)),S=y(()=>r.isActive(p.value)),g=y(()=>r.getSlideStyle(p.value));Oe(()=>{r.addSlide(c.value)}),ft(()=>{r.removeSlide(c.value)});function v(l){const{value:I}=p;I!==void 0&&(r==null||r.onCarouselItemClick(I,l))}return{mergedClsPrefix:n,selfElRef:c,isPrev:C,isNext:$,isActive:S,index:p,style:g,handleClick:v}},render(){var e;const{$slots:n,mergedClsPrefix:r,isPrev:c,isNext:p,isActive:C,index:$,style:S}=this,g=[`${r}-carousel__slide`,{[`${r}-carousel__slide--current`]:C,[`${r}-carousel__slide--prev`]:c,[`${r}-carousel__slide--next`]:p}];return _("div",{ref:"selfElRef",class:g,role:"option",tabindex:"-1","data-index":$,"aria-hidden":!C,style:S,onClickCapture:this.handleClick},(e=n.default)===null||e===void 0?void 0:e.call(n,{isPrev:c,isNext:p,isActive:C,index:$}))}}),Pn=Yt("carousel",`
 position: relative;
 width: 100%;
 height: 100%;
 touch-action: pan-y;
 overflow: hidden;
`,[x("slides",`
 display: flex;
 width: 100%;
 height: 100%;
 transition-timing-function: var(--n-bezier);
 transition-property: transform;
 `,[x("slide",`
 flex-shrink: 0;
 position: relative;
 width: 100%;
 height: 100%;
 outline: none;
 overflow: hidden;
 `,[Q("> img",`
 display: block;
 `)])]),x("dots",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `,[w("dot",[x("dot",`
 height: var(--n-dot-size);
 width: var(--n-dot-size);
 background-color: var(--n-dot-color);
 border-radius: 50%;
 cursor: pointer;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[Q("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),w("active",`
 background-color: var(--n-dot-color-active);
 `)])]),w("line",[x("dot",`
 border-radius: 9999px;
 width: var(--n-dot-line-width);
 height: 4px;
 background-color: var(--n-dot-color);
 cursor: pointer;
 transition:
 width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[Q("&:focus",`
 background-color: var(--n-dot-color-focus);
 `),w("active",`
 width: var(--n-dot-line-width-active);
 background-color: var(--n-dot-color-active);
 `)])])]),x("arrow",`
 transition: background-color .3s var(--n-bezier);
 cursor: pointer;
 height: 28px;
 width: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 background-color: rgba(255, 255, 255, .2);
 color: var(--n-arrow-color);
 border-radius: 8px;
 user-select: none;
 -webkit-user-select: none;
 font-size: 18px;
 `,[Q("svg",`
 height: 1em;
 width: 1em;
 `),Q("&:hover",`
 background-color: rgba(255, 255, 255, .3);
 `)]),w("vertical",`
 touch-action: pan-x;
 `,[x("slides",`
 flex-direction: column;
 `),w("fade",[x("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%);
 `)]),w("card",[x("slide",`
 top: 50%;
 left: unset;
 transform: translateY(-50%) translateZ(-400px);
 `,[w("current",`
 transform: translateY(-50%) translateZ(0);
 `),w("prev",`
 transform: translateY(-100%) translateZ(-200px);
 `),w("next",`
 transform: translateY(0%) translateZ(-200px);
 `)])])]),w("usercontrol",[x("slides",[Q(">",[Q("div",`
 position: absolute;
 top: 50%;
 left: 50%;
 width: 100%;
 height: 100%;
 transform: translate(-50%, -50%);
 `)])])]),w("left",[x("dots",`
 transform: translateY(-50%);
 top: 50%;
 left: 12px;
 flex-direction: column;
 `,[w("line",[x("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[w("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),x("dot",`
 margin: 4px 0;
 `)]),x("arrow-group",`
 position: absolute;
 display: flex;
 flex-wrap: nowrap;
 `),w("vertical",[x("arrow",`
 transform: rotate(90deg);
 `)]),w("show-arrow",[w("bottom",[x("dots",`
 transform: translateX(0);
 bottom: 18px;
 left: 18px;
 `)]),w("top",[x("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),w("left",[x("dots",`
 transform: translateX(0);
 top: 18px;
 left: 18px;
 `)]),w("right",[x("dots",`
 transform: translateX(0);
 top: 18px;
 right: 18px;
 `)])]),w("left",[x("arrow-group",`
 bottom: 12px;
 left: 12px;
 flex-direction: column;
 `,[Q("> *:first-child",`
 margin-bottom: 12px;
 `)])]),w("right",[x("dots",`
 transform: translateY(-50%);
 top: 50%;
 right: 12px;
 flex-direction: column;
 `,[w("line",[x("dot",`
 width: 4px;
 height: var(--n-dot-line-width);
 margin: 4px 0;
 transition:
 height .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 outline: none;
 `,[w("active",`
 height: var(--n-dot-line-width-active);
 `)])])]),x("dot",`
 margin: 4px 0;
 `),x("arrow-group",`
 bottom: 12px;
 right: 12px;
 flex-direction: column;
 `,[Q("> *:first-child",`
 margin-bottom: 12px;
 `)])]),w("top",[x("dots",`
 transform: translateX(-50%);
 top: 12px;
 left: 50%;
 `,[w("line",[x("dot",`
 margin: 0 4px;
 `)])]),x("dot",`
 margin: 0 4px;
 `),x("arrow-group",`
 top: 12px;
 right: 12px;
 `,[Q("> *:first-child",`
 margin-right: 12px;
 `)])]),w("bottom",[x("dots",`
 transform: translateX(-50%);
 bottom: 12px;
 left: 50%;
 `,[w("line",[x("dot",`
 margin: 0 4px;
 `)])]),x("dot",`
 margin: 0 4px;
 `),x("arrow-group",`
 bottom: 12px;
 right: 12px;
 `,[Q("> *:first-child",`
 margin-right: 12px;
 `)])]),w("fade",[x("slide",`
 position: absolute;
 opacity: 0;
 transition-property: opacity;
 pointer-events: none;
 `,[w("current",`
 opacity: 1;
 pointer-events: auto;
 `)])]),w("card",[x("slides",`
 perspective: 1000px;
 `),x("slide",`
 position: absolute;
 left: 50%;
 opacity: 0;
 transform: translateX(-50%) translateZ(-400px);
 transition-property: opacity, transform;
 `,[w("current",`
 opacity: 1;
 transform: translateX(-50%) translateZ(0);
 z-index: 1;
 `),w("prev",`
 opacity: 0.4;
 transform: translateX(-100%) translateZ(-200px);
 `),w("next",`
 opacity: 0.4;
 transform: translateX(0%) translateZ(-200px);
 `)])])]);function _n(e){const{length:n}=e;return n>1&&(e.push(lt(e[0],0,"append")),e.unshift(lt(e[n-1],n-1,"prepend"))),e}function lt(e,n,r){return pt(e,{key:`carousel-item-duplicate-${n}-${r}`})}function ct(e,n,r){return n===1?0:r?e===0?n-3:e===n-1?0:e-1:e}function Ye(e,n){return n?e+1:e}function Dn(e,n,r){return e<0?null:e===0?r?n-1:null:e-1}function Rn(e,n,r){return e>n-1?null:e===n-1?r?0:null:e+1}function $n(e,n){return n&&e>3?e-2:e}function ut(e){return window.TouchEvent&&e instanceof window.TouchEvent}function dt(e,n){let{offsetWidth:r,offsetHeight:c}=e;if(n){const p=getComputedStyle(e);r=r-Number.parseFloat(p.getPropertyValue("padding-left"))-Number.parseFloat(p.getPropertyValue("padding-right")),c=c-Number.parseFloat(p.getPropertyValue("padding-top"))-Number.parseFloat(p.getPropertyValue("padding-bottom"))}return{width:r,height:c}}function Ne(e,n,r){return e<n?n:e>r?r:e}function En(e){if(e===void 0)return 0;if(typeof e=="number")return e;const n=/^((\d+)?\.?\d+?)(ms|s)?$/,r=e.match(n);if(r){const[,c,,p="ms"]=r;return Number(c)*(p==="ms"?1:1e3)}return 0}const Nn=["transitionDuration","transitionTimingFunction"],Vn=Object.assign(Object.assign({},vt.props),{defaultIndex:{type:Number,default:0},currentIndex:Number,showArrow:Boolean,dotType:{type:String,default:"dot"},dotPlacement:{type:String,default:"bottom"},slidesPerView:{type:[Number,String],default:1},spaceBetween:{type:Number,default:0},centeredSlides:Boolean,direction:{type:String,default:"horizontal"},autoplay:Boolean,interval:{type:Number,default:5e3},loop:{type:Boolean,default:!0},effect:{type:String,default:"slide"},showDots:{type:Boolean,default:!0},trigger:{type:String,default:"click"},transitionStyle:{type:Object,default:()=>({transitionDuration:"300ms"})},transitionProps:Object,draggable:Boolean,prevSlideStyle:[Object,String],nextSlideStyle:[Object,String],touchable:{type:Boolean,default:!0},mousewheel:Boolean,keyboard:Boolean,"onUpdate:currentIndex":Function,onUpdateCurrentIndex:Function});let Ge=!1;const Tn=he({name:"Carousel",props:Vn,slots:Object,setup(e){const{mergedClsPrefixRef:n,inlineThemeDisabled:r}=je(e),c=N(null),p=N(null),C=N([]),$={value:[]},S=y(()=>e.direction==="vertical"),g=y(()=>S.value?"height":"width"),v=y(()=>S.value?"bottom":"right"),l=y(()=>e.effect==="slide"),I=y(()=>e.loop&&e.slidesPerView===1&&l.value),k=y(()=>e.effect==="custom"),F=y(()=>!l.value||e.centeredSlides?1:e.slidesPerView),Y=y(()=>k.value?1:e.slidesPerView),P=y(()=>F.value==="auto"||e.slidesPerView==="auto"&&e.centeredSlides),R=N({width:0,height:0}),G=N(0),L=y(()=>{const{value:t}=C;if(!t.length)return[];G.value;const{value:o}=P;if(o)return t.map(z=>dt(z));const{value:s}=Y,{value:f}=R,{value:h}=g;let u=f[h];if(s!=="auto"){const{spaceBetween:z}=e,X=u-(s-1)*z,$e=1/Math.max(1,s);u=X*$e}const A=Object.assign(Object.assign({},f),{[h]:u});return t.map(()=>A)}),Z=y(()=>{const{value:t}=L;if(!t.length)return[];const{centeredSlides:o,spaceBetween:s}=e,{value:f}=g,{[f]:h}=R.value;let u=0;return t.map(({[f]:A})=>{let z=u;return o&&(z+=(A-h)/2),u+=A+s,z})}),xe=N(!1),ie=y(()=>{const{transitionStyle:t}=e;return t?st(t,Nn):{}}),we=y(()=>k.value?0:En(ie.value.transitionDuration)),ze=y(()=>{const{value:t}=C;if(!t.length)return[];const o=!(P.value||Y.value===1),s=A=>{if(o){const{value:z}=g;return{[z]:`${L.value[A][z]}px`}}};if(k.value)return t.map((A,z)=>s(z));const{effect:f,spaceBetween:h}=e,{value:u}=v;return t.reduce((A,z,X)=>{const $e=Object.assign(Object.assign({},s(X)),{[`margin-${u}`]:`${h}px`});return A.push($e),xe.value&&(f==="fade"||f==="card")&&Object.assign($e,ie.value),A},[])}),O=y(()=>{const{value:t}=F,{length:o}=C.value;if(t!=="auto")return Math.max(o-t,0)+1;{const{value:s}=L,{length:f}=s;if(!f)return o;const{value:h}=Z,{value:u}=g,A=R.value[u];let z=s[s.length-1][u],X=f;for(;X>1&&z<A;)X--,z+=h[X]-h[X-1];return Ne(X+1,1,f)}}),a=y(()=>$n(O.value,I.value)),d=Ye(e.defaultIndex,I.value),i=N(ct(d,O.value,I.value)),m=xn(nn(e,"currentIndex"),i),b=y(()=>Ye(m.value,I.value));function D(t){var o,s;t=Ne(t,0,O.value-1);const f=ct(t,O.value,I.value),{value:h}=m;f!==m.value&&(i.value=f,(o=e["onUpdate:currentIndex"])===null||o===void 0||o.call(e,f,h),(s=e.onUpdateCurrentIndex)===null||s===void 0||s.call(e,f,h))}function U(t=b.value){return Dn(t,O.value,e.loop)}function B(t=b.value){return Rn(t,O.value,e.loop)}function V(t){const o=pe(t);return o!==null&&U()===o&&O.value>1}function te(t){const o=pe(t);return o!==null&&B()===o&&O.value>1}function W(t){return b.value===pe(t)}function ce(t){return m.value===t}function se(){return U()===null}function H(){return B()===null}let q=0;function ae(t){const o=Ne(Ye(t,I.value),0,O.value);(t!==m.value||o!==b.value)&&D(o)}function fe(){const t=U();t!==null&&(q=-1,D(t))}function ue(){const t=B();t!==null&&(q=1,D(t))}let J=!1;function xt(){(!J||!I.value)&&fe()}function wt(){(!J||!I.value)&&ue()}let de=0;const Be=N({});function ke(t,o=0){Be.value=Object.assign({},ie.value,{transform:S.value?`translateY(${-t}px)`:`translateX(${-t}px)`,transitionDuration:`${o}ms`})}function ye(t=0){l.value?Ue(b.value,t):de!==0&&(!J&&t>0&&(J=!0),ke(de=0,t))}function Ue(t,o){const s=Je(t);s!==de&&o>0&&(J=!0),de=Je(b.value),ke(s,o)}function Je(t){let o;return t>=O.value-1?o=Qe():o=Z.value[t]||0,o}function Qe(){if(F.value==="auto"){const{value:t}=g,{[t]:o}=R.value,{value:s}=Z,f=s[s.length-1];let h;if(f===void 0)h=o;else{const{value:u}=L;h=f+u[u.length-1][t]}return h-o}else{const{value:t}=Z;return t[O.value-1]||0}}const be={currentIndexRef:m,to:ae,prev:xt,next:wt,isVertical:()=>S.value,isHorizontal:()=>!S.value,isPrev:V,isNext:te,isActive:W,isPrevDisabled:se,isNextDisabled:H,getSlideIndex:pe,getSlideStyle:St,addSlide:yt,removeSlide:bt,onCarouselItemClick:It};bn(be);function yt(t){t&&C.value.push(t)}function bt(t){if(!t)return;const o=pe(t);o!==-1&&C.value.splice(o,1)}function pe(t){return typeof t=="number"?t:t?C.value.indexOf(t):-1}function St(t){const o=pe(t);if(o!==-1){const s=[ze.value[o]],f=be.isPrev(o),h=be.isNext(o);return f&&s.push(e.prevSlideStyle||""),h&&s.push(e.nextSlideStyle||""),on(s)}}let Le=0,Fe=0,oe=0,We=0,Pe=!1,Xe=!1;function It(t,o){let s=!J&&!Pe&&!Xe;e.effect==="card"&&s&&!W(t)&&(ae(t),s=!1),s||(o.preventDefault(),o.stopPropagation())}let _e=null;function De(){_e&&(clearInterval(_e),_e=null)}function ve(){De(),!e.autoplay||a.value<2||(_e=window.setInterval(ue,e.interval))}function et(t){var o;if(Ge||!(!((o=p.value)===null||o===void 0)&&o.contains(rn(t))))return;Ge=!0,Pe=!0,Xe=!1,We=Date.now(),De(),t.type!=="touchstart"&&!t.target.isContentEditable&&t.preventDefault();const s=ut(t)?t.touches[0]:t;S.value?Fe=s.clientY:Le=s.clientX,e.touchable&&(Ie("touchmove",document,Re),Ie("touchend",document,me),Ie("touchcancel",document,me)),e.draggable&&(Ie("mousemove",document,Re),Ie("mouseup",document,me))}function Re(t){const{value:o}=S,{value:s}=g,f=ut(t)?t.touches[0]:t,h=o?f.clientY-Fe:f.clientX-Le,u=R.value[s];oe=Ne(h,-u,u),t.cancelable&&t.preventDefault(),l.value&&ke(de-oe,0)}function me(){const{value:t}=b;let o=t;if(!J&&oe!==0&&l.value){const s=de-oe,f=[...Z.value.slice(0,O.value-1),Qe()];let h=null;for(let u=0;u<f.length;u++){const A=Math.abs(f[u]-s);if(h!==null&&h<A)break;h=A,o=u}}if(o===t){const s=Date.now()-We,{value:f}=g,h=R.value[f];oe>h/2||oe/s>.4?fe():(oe<-h/2||oe/s<-.4)&&ue()}o!==null&&o!==t?(Xe=!0,D(o),it(()=>{(!I.value||i.value!==m.value)&&ye(we.value)})):ye(we.value),tt(),ve()}function tt(){Pe&&(Ge=!1),Pe=!1,Le=0,Fe=0,oe=0,We=0,Se("touchmove",document,Re),Se("touchend",document,me),Se("touchcancel",document,me),Se("mousemove",document,Re),Se("mouseup",document,me)}function Ct(){if(l.value&&J){const{value:t}=b;Ue(t,0)}else ve();l.value&&(Be.value.transitionDuration="0ms"),J=!1}function At(t){if(t.preventDefault(),J)return;let{deltaX:o,deltaY:s}=t;t.shiftKey&&!o&&(o=s);const f=-1,h=1,u=(o||s)>0?h:f;let A=0,z=0;S.value?z=u:A=u;const X=10;(z*s>=X||A*o>=X)&&(u===h&&!H()?ue():u===f&&!se()&&fe())}function zt(){R.value=dt(c.value,!0),ve()}function kt(){P.value&&G.value++}function Pt(){e.autoplay&&De()}function _t(){e.autoplay&&ve()}Oe(()=>{Jt(ve),requestAnimationFrame(()=>xe.value=!0)}),ft(()=>{tt(),De()}),Qt(()=>{const{value:t}=C,{value:o}=$,s=new Map,f=u=>s.has(u)?s.get(u):-1;let h=!1;for(let u=0;u<t.length;u++){const A=o.findIndex(z=>z.el===t[u]);A!==u&&(h=!0),s.set(t[u],A)}h&&t.sort((u,A)=>f(u)-f(A))}),Ce(b,(t,o)=>{if(t===o){q=0;return}if(ve(),l.value){if(I.value){const{value:s}=O;q===-1&&o===1&&t===s-2?t=0:q===1&&o===s-2&&t===1&&(t=s-1)}Ue(t,we.value)}else ye();q=0},{immediate:!0}),Ce([I,F],()=>void it(()=>{D(b.value)})),Ce(Z,()=>{l.value&&ye()},{deep:!0}),Ce(l,t=>{t?ye():(J=!1,ke(de=0))});const Dt=y(()=>({onTouchstartPassive:e.touchable?et:void 0,onMousedown:e.draggable?et:void 0,onWheel:e.mousewheel?At:void 0})),Rt=y(()=>Object.assign(Object.assign({},st(be,["to","prev","next","isPrevDisabled","isNextDisabled"])),{total:a.value,currentIndex:m.value})),$t=y(()=>({total:a.value,currentIndex:m.value,to:be.to})),Et={getCurrentIndex:()=>m.value,to:ae,prev:fe,next:ue},Nt=vt("Carousel","-carousel",Pn,en,e,n),nt=y(()=>{const{common:{cubicBezierEaseInOut:t},self:{dotSize:o,dotColor:s,dotColorActive:f,dotColorFocus:h,dotLineWidth:u,dotLineWidthActive:A,arrowColor:z}}=Nt.value;return{"--n-bezier":t,"--n-dot-color":s,"--n-dot-color-focus":h,"--n-dot-color-active":f,"--n-dot-size":o,"--n-dot-line-width":u,"--n-dot-line-width-active":A,"--n-arrow-color":z}}),ge=r?tn("carousel",void 0,nt,e):void 0;return Object.assign(Object.assign({mergedClsPrefix:n,selfElRef:c,slidesElRef:p,slideVNodes:$,duplicatedable:I,userWantsControl:k,autoSlideSize:P,realIndex:b,slideStyles:ze,translateStyle:Be,slidesControlListeners:Dt,handleTransitionEnd:Ct,handleResize:zt,handleSlideResize:kt,handleMouseenter:Pt,handleMouseleave:_t,isActive:ce,arrowSlotProps:Rt,dotSlotProps:$t},Et),{cssVars:r?void 0:nt,themeClass:ge==null?void 0:ge.themeClass,onRender:ge==null?void 0:ge.onRender})},render(){var e;const{mergedClsPrefix:n,showArrow:r,userWantsControl:c,slideStyles:p,dotType:C,dotPlacement:$,slidesControlListeners:S,transitionProps:g={},arrowSlotProps:v,dotSlotProps:l,$slots:{default:I,dots:k,arrow:F}}=this,Y=I&&Gt(I())||[];let P=Mn(Y);return P.length||(P=Y.map(R=>_(ht,null,{default:()=>pt(R)}))),this.duplicatedable&&(P=_n(P)),this.slideVNodes.value=P,this.autoSlideSize&&(P=P.map(R=>_(ot,{onResize:this.handleSlideResize},{default:()=>R}))),(e=this.onRender)===null||e===void 0||e.call(this),_("div",Object.assign({ref:"selfElRef",class:[this.themeClass,`${n}-carousel`,this.direction==="vertical"&&`${n}-carousel--vertical`,this.showArrow&&`${n}-carousel--show-arrow`,`${n}-carousel--${$}`,`${n}-carousel--${this.direction}`,`${n}-carousel--${this.effect}`,c&&`${n}-carousel--usercontrol`],style:this.cssVars},S,{onMouseenter:this.handleMouseenter,onMouseleave:this.handleMouseleave}),_(ot,{onResize:this.handleResize},{default:()=>_("div",{ref:"slidesElRef",class:`${n}-carousel__slides`,role:"listbox",style:this.translateStyle,onTransitionend:this.handleTransitionEnd},c?P.map((R,G)=>_("div",{style:p[G],key:G},Zt(_(qt,Object.assign({},g),{default:()=>R}),[[Ht,this.isActive(G)]]))):P)}),this.showDots&&l.total>1&&rt(k,l,()=>[_(zn,{key:C+$,total:l.total,currentIndex:l.currentIndex,dotType:C,trigger:this.trigger,keyboard:this.keyboard})]),r&&rt(F,v,()=>[_(Cn,null)]))}});function Mn(e){return e.reduce((n,r)=>(kn(r)&&n.push(r),n),[])}const jn=["title"],On={class:"flex items-center shrink-0"},Bn=["src"],Un={class:"mr-auto"},Ln={class:"text-lg font-bold"},Fn={class:"text-gray-500 text-sm ml-2 cursor-default"},Wn={class:"text-xs text-gray-500"},Xn={class:"flex flex-col gap-4"},Kn={key:0,class:"mb-2 px-1"},Yn={key:0,class:"flex justify-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-300"},Gn={key:1,class:"flex justify-center text-xs text-gray-500 dark:text-gray-400 mt-0.5"},Zn={class:"relative flex justify-center items-center h-[200px] rounded-xl overflow-hidden"},Hn={style:{position:"absolute",top:"8px",left:"8px","font-size":"12px",opacity:"0.6","z-index":"1",color:"white"}},qn={style:{position:"absolute",top:"8px",right:"8px","margin-top":"0",float:"none","z-index":"1"}},Jn={key:0,class:"flex justify-center"},Qn={key:1,class:"flex justify-center"},eo=he({__name:"widgetItemCard",props:{microApp:{},itemCardGroupId:{},developerInfos:{}},setup(e){const n=e;function r(a){var d;return a?((d=n.developerInfos[a])==null?void 0:d.name)||a:""}const c=sn(),p=mt(),C=hn(),$=vn(),S=N({}),g=N(null),v=N(null),l=N(!1),I=N({}),k=y(()=>{var i;const a=(i=n.microApp.appJson)==null?void 0:i.appJsonVersion;if(!a)return!1;const d=a.split(".").map(Number);return d.length>=2?d[0]>1||d[0]===1&&d[1]>=1:!1});function F(a){var b,D;if((b=I.value[a])!=null&&b.name)return I.value[a].name;const i=(D=n.microApp.componentInfo)==null?void 0:D.widgets[a],m=i==null?void 0:i.widgetName;if(m)return m}function Y(a){var b,D;if((b=I.value[a])!=null&&b.description)return I.value[a].description;const i=(D=n.microApp.componentInfo)==null?void 0:D.widgets[a],m=i==null?void 0:i.widgetDescription;if(m)return m}const P=y(()=>{var d;const a=Object.keys(((d=n.microApp.componentInfo)==null?void 0:d.widgets)||{});return k.value?a.sort((i,m)=>{var U,B,V,te;const b=((B=(U=n.microApp.componentInfo)==null?void 0:U.widgets[i])==null?void 0:B.sort)??Number.MAX_SAFE_INTEGER,D=((te=(V=n.microApp.componentInfo)==null?void 0:V.widgets[m])==null?void 0:te.sort)??Number.MAX_SAFE_INTEGER;return b-D}):a}),R=y(()=>P.value.length>1),G=y(()=>l.value||!R.value?P.value:P.value.slice(0,1)),L=N({id:0,onlyName:"",title:"",description:"",microAppId:n.microApp.microAppId,microAppCardSrc:"",microAppSrc:n.microApp.src,cardSize:0,background:"",itemCardGroupId:n.itemCardGroupId,sort:0,cardData:{},cardDataPrivate:{},blur:0,showTitle:!0});function Z(a,d,i){return{...L.value,cardSize:i,microAppCardSrc:d}}function xe(a){return ln[a]}function ie(a){if(!a||a.length===0||a.length===1)return 0;const d=["2x2","2x4","1x2"];for(const i of d){const m=a.indexOf(i);if(m!==-1)return m}return 0}function we(a){var m,b;const d=((b=(m=n.microApp.componentInfo)==null?void 0:m.widgets[a])==null?void 0:b.size)||[],i=S.value[a]??ie(d);return d[i]}function ze(a){return a==="1xfull"?"1 x FULL":a||""}function O(a,d=!1){var U,B;const i=(U=n.microApp.componentInfo)==null?void 0:U.widgets[a];if(!i){console.warn("Widget not found:",a);return}const m=S.value[a]??ie(i.size),b=i.size[m],D=xe(b);if(L.value={...L.value,cardSize:D,microAppCardSrc:a,itemCardGroupId:n.itemCardGroupId,title:((B=g.value)==null?void 0:B.appName)||n.microApp.microAppId,background:i.background||""},!d&&i.configComponentName){const V=pn();V.set("itemCard",L.value),v.value=p.window.createEnhanced({windowIdSuffix:"config",microAppId:n.microApp.microAppId,componentName:i.configComponentName,openWindowOptions:{componentName:i.configComponentName,customParam:{widgetTagName:a}},widgetInfo:{widgetId:"0",title:"",background:"",config:{},gridSize:b},context:V}),V.on("widgetInfoUpdated",te=>{v.value&&p.window.closeEnhanced(v.value),Ke.success(Ee("common.addSuccess")),C.triggerUpdate()})}else fn(L.value).then(()=>{Ke.success(Ee("common.addSuccess")),C.triggerUpdate()}).catch(V=>{Ke.error(`${Ee("common.failed")}: ${V.message}`),console.error("Error adding item card:",V)})}return Oe(async()=>{var a,d,i;if(g.value=await p.appManager.getLocalAppInfoOrDefault(n.microApp.microAppId,c.language),k.value&&((a=n.microApp.componentInfo)!=null&&a.widgets))try{const m=n.microApp.runPathUrl||n.microApp.src||"",{resolveString:b}=await Vt(m),D=n.microApp.componentInfo.widgets,U=((i=(d=n.microApp.appJson)==null?void 0:d.components)==null?void 0:i.widgets)||{},B={};for(const[V,te]of Object.entries(D)){const W=U[V],ce=te,se=(W==null?void 0:W.widgetName)||ce.widgetName,H=(W==null?void 0:W.widgetDescription)||ce.widgetDescription,q=se?b(se):void 0,ae=H?b(H):void 0;B[V]={name:q,description:ae}}I.value=B}catch(m){console.error("[widgetItemCard] Failed to load micro app translations:",m)}}),(a,d)=>(j(),Ae(T(an),{size:"small",class:"!rounded-2xl"},{header:M(()=>{var i,m;return[E("div",{class:"flex items-center gap-2",title:`MicroAppID: ${e.microApp.microAppId}`},[E("div",On,[E("img",{src:T(Tt)(e.microApp),alt:"",class:"w-[50px] h-[50px] rounded-[5px] object-contain"},null,8,Bn)]),E("div",Un,[E("div",Ln,[re(ne(((i=g.value)==null?void 0:i.appName)||e.microApp.microAppId)+" ",1),e.microApp.author?(j(),Ae(T(un),{key:0,trigger:"hover"},{trigger:M(()=>[E("span",Fn,ne(r(e.microApp.author)),1)]),default:M(()=>[re(" "+ne(e.microApp.author),1)]),_:1})):le("",!0),e.microApp.dev?(j(),Ae(T(dn),{key:1,type:"warning",size:"small",round:"",class:"ml-1"},{default:M(()=>[...d[2]||(d[2]=[re(" DEV ",-1)])]),_:1})):le("",!0)]),E("div",Wn,ne(((m=g.value)==null?void 0:m.description)||""),1)])],8,jn)]}),default:M(()=>[E("div",Xn,[(j(!0),ee(Ze,null,He(G.value,i=>{var m,b,D,U,B,V,te,W,ce,se;return j(),ee("div",{key:i},[F(i)||Y(i)?(j(),ee("div",Kn,[F(i)?(j(),ee("div",Yn,[d[3]||(d[3]=E("span",{class:"text-gray-500 dark:text-gray-400"}," - ",-1)),re(" "+ne(F(i))+" ",1),d[4]||(d[4]=E("span",{class:"text-gray-500 dark:text-gray-400"}," - ",-1))])):le("",!0),Y(i)?(j(),ee("div",Gn,ne(Y(i)),1)):le("",!0)])):le("",!0),E("div",Zn,[E("div",Hn,ne(ze(we(i))),1),E("div",qn,[K(T(Ve),{type:"success",size:"small",class:"!rounded-lg",onClick:H=>O(i,!0)},{icon:M(()=>[K(T(Te),{icon:"mingcute--add-fill"})]),default:M(()=>[re(" "+ne(T(Ee)("common.add")),1)]),_:1},8,["onClick"])]),K(T(Tn),{"show-arrow":(((D=(b=(m=e.microApp.componentInfo)==null?void 0:m.widgets[i])==null?void 0:b.size)==null?void 0:D.length)??0)>1,touchable:(((V=(B=(U=e.microApp.componentInfo)==null?void 0:U.widgets[i])==null?void 0:B.size)==null?void 0:V.length)??0)>1,"default-index":ie(((W=(te=e.microApp.componentInfo)==null?void 0:te.widgets[i])==null?void 0:W.size)||[]),"current-index":S.value[i]??ie(((se=(ce=e.microApp.componentInfo)==null?void 0:ce.widgets[i])==null?void 0:se.size)||[]),"onUpdate:currentIndex":H=>S.value[i]=H},{default:M(()=>{var H,q;return[(j(!0),ee(Ze,null,He((q=(H=e.microApp.componentInfo)==null?void 0:H.widgets[i])==null?void 0:q.size,(ae,fe)=>(j(),Ae(T(ht),{key:fe},{default:M(()=>[K(T(mn),{"model-value":Z(e.microApp,i,xe(ae)),scale:ae==="4x4"?.5:.7,background:"#000","hide-border":"","hide-rounded":"","preview-transparent-canvas":!0,"transparent-background-src":T($).panelConfig.backgroundImageSrc},{item:M(({item:ue})=>[K(gn,{"model-value":ue,"is-preview":!0},null,8,["model-value"])]),_:1},8,["model-value","scale","transparent-background-src"])]),_:2},1024))),128))]}),_:2},1032,["show-arrow","touchable","default-index","current-index","onUpdate:currentIndex"])])])}),128)),R.value&&!l.value?(j(),ee("div",Jn,[K(T(Ve),{quaternary:"",size:"small",onClick:d[0]||(d[0]=i=>l.value=!0)},{icon:M(()=>[K(T(Te),{icon:"mingcute--down-line"})]),default:M(()=>[re(" 展示更多 ("+ne(P.value.length-1)+") ",1)]),_:1})])):le("",!0),R.value&&l.value?(j(),ee("div",Qn,[K(T(Ve),{quaternary:"",size:"small",onClick:d[1]||(d[1]=i=>l.value=!1)},{icon:M(()=>[K(T(Te),{icon:"mingcute--up-line"})]),default:M(()=>[d[5]||(d[5]=re(" 收起 ",-1))]),_:1})])):le("",!0)])]),_:1}))}}),to={class:"flex flex-col gap-4"},no={class:"flex gap-4 items-center"},oo={class:"flex flex-col gap-4 overflow-y-auto widgets-container"},ro={key:0,class:"flex flex-col items-center justify-center text-gray-400 py-12"},io=he({__name:"index",props:{itemCardGroupId:{}},setup(e){const n=mt(),r=N(!1),c=N({}),p=y(()=>{var v;const S=n.appManager.appInfos,g={};for(const[l,I]of Object.entries(S)){const k=(v=I.componentInfo)==null?void 0:v.widgets;k&&Object.keys(k).length>0&&(g[l]=I)}return g}),C=y(()=>Object.keys(p.value).length>0);function $(){r.value=!0}return Ce(r,S=>{S||n.appManager.getList(!0)}),Oe(()=>{Promise.allSettled([n.appManager.getList(!0),Mt()]).then(([S,g])=>{var v,l;g.status==="fulfilled"&&((l=(v=g.value)==null?void 0:v.data)!=null&&l.developerInfos)&&(c.value=g.value.data.developerInfos)}).catch(S=>console.error("Failed to load developer infos:",S))}),(S,g)=>(j(),ee("div",to,[E("div",no,[g[1]||(g[1]=re(" 此处仅列出已安装的微应用小部件。更多请前往微应用市场下载 ",-1)),K(T(Ve),{size:"small",strong:"",secondary:"",type:"success",onClick:$},{icon:M(()=>[K(T(Te),{icon:"material-symbols--store-outline-rounded"})]),default:M(()=>[re(" "+ne(S.$t("microAppStore.title")),1)]),_:1})]),E("div",oo,[(j(!0),ee(Ze,null,He(p.value,(v,l)=>(j(),Ae(eo,{key:l,"item-card-group-id":e.itemCardGroupId,"micro-app":v,"developer-infos":c.value},null,8,["item-card-group-id","micro-app","developer-infos"]))),128)),C.value?le("",!0):(j(),ee("div",ro,[...g[2]||(g[2]=[E("div",null,"暂无已安装的微应用小部件",-1),E("div",{class:"text-sm mt-2"}," 可在导航首页点击右上角 [应用启动器] -> [微应用管理] 中安装离线包 ",-1),E("div",null,"需管理账号可操作",-1)])]))]),K(jt,{show:r.value,"onUpdate:show":g[0]||(g[0]=v=>r.value=v)},null,8,["show"])]))}}),Co=wn(io,[["__scopeId","data-v-abf65610"]]);export{Co as default};
