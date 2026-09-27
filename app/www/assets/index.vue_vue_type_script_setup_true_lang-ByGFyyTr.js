var sr=Object.defineProperty;var ar=(e,t,r)=>t in e?sr(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var le=(e,t,r)=>ar(e,typeof t!="symbol"?t+"":t,r);import{cd as lr,j as R,aA as cr,r as L,ce as at,G as lt,d as O,h as l,cf as qe,k as m,q as ze,n as D,l as S,p as M,w as ce,aK as dr,bi as ct,L as Ve,cg as ur,bd as dt,c as ut,M as F,O as Z,ch as At,aL as fr,aM as pr,v as gr,ci as Tt,aJ as hr,e as Ce,bg as Be,x as oe,cj as mr,C as Ie,bZ as nt,J as Re,F as Oe,ck as vr,bN as pe,bw as yr,m as Le,V as br,A as Bt,s as xr,H as vt,N as ae,cl as It,cm as _t,cn as Nt,co as zt,cp as wr,cq as Rr,cr as kr,cs as Cr,ct as Sr,bQ as $r,aS as Pr,cu as Dr,B as Lt,c9 as Ar,cv as yt,t as He,c2 as Mt,cw as bt,Z as xe,bb as Tr,aN as Br,by as Ir,cx as _r,I as Nr,bD as Et,P as G,W as ge,S as I,ah as zr,U as K,a8 as fe,$ as se,a0 as Y,R as J,a2 as ie,cy as Lr,an as ft,z as we,Q as ne,Y as B,a1 as ve,ab as Ot,ac as Mr,a7 as Er,av as Or,ak as Ur,E as jr}from"./index-DvrX_0iP.js";import{u as pt,E as Fr}from"./index-BJvB--f3.js";import{m as qr,f as Se,u as Ut,N as Vr,D as Hr,v as Gr,k as Kr,j as Wr,l as Me,S as Jr}from"./index-DhJN9nwe.js";import{p as q,a as Xr}from"./index-Bfu5ZQ-L.js";import{g as Yr}from"./proAuth-ZQs_cllT.js";function Qr(e){if(typeof e=="number")return{"":e.toString()};const t={};return e.split(/ +/).forEach(r=>{if(r==="")return;const[n,o]=r.split(":");o===void 0?t[""]=n:t[n]=o}),t}function $e(e,t){var r;if(e==null)return;const n=Qr(e);if(t===void 0)return n[""];if(typeof t=="string")return(r=n[t])!==null&&r!==void 0?r:n[""];if(Array.isArray(t)){for(let o=t.length-1;o>=0;--o){const i=t[o];if(i in n)return n[i]}return n[""]}else{let o,i=-1;return Object.keys(n).forEach(s=>{const a=Number(s);!Number.isNaN(a)&&t>=a&&a>=i&&(i=a,o=n[s])}),o}}const Zr={xs:0,s:640,m:1024,l:1280,xl:1536,"2xl":1920};function en(e){return`(min-width: ${e}px)`}const Ne={};function tn(e=Zr){if(!lr)return R(()=>[]);if(typeof window.matchMedia!="function")return R(()=>[]);const t=L({}),r=Object.keys(e),n=(o,i)=>{o.matches?t.value[i]=!0:t.value[i]=!1};return r.forEach(o=>{const i=e[o];let s,a;Ne[i]===void 0?(s=window.matchMedia(en(i)),s.addEventListener?s.addEventListener("change",u=>{a.forEach(d=>{d(u,o)})}):s.addListener&&s.addListener(u=>{a.forEach(d=>{d(u,o)})}),a=new Set,Ne[i]={mql:s,cbs:a}):(s=Ne[i].mql,a=Ne[i].cbs),a.add(n),s.matches&&a.forEach(u=>{u(s,o)})}),cr(()=>{r.forEach(o=>{const{cbs:i}=Ne[e[o]];i.has(n)&&i.delete(n)})}),R(()=>{const{value:o}=t;return r.filter(i=>o[i])})}let xt=!1;function rn(){if(at&&window.CSS&&!xt&&(xt=!0,"registerProperty"in(window==null?void 0:window.CSS)))try{CSS.registerProperty({name:"--n-color-start",syntax:"<color>",inherits:!1,initialValue:"#0000"}),CSS.registerProperty({name:"--n-color-end",syntax:"<color>",inherits:!1,initialValue:"#0000"})}catch{}}function nn(e,t="default",r=[]){const o=e.$slots[t];return o===void 0?r:o()}function on(e){var t;const r=(t=e.dirs)===null||t===void 0?void 0:t.find(({dir:n})=>n===lt);return!!(r&&r.value===!1)}const sn=O({name:"Add",render(){return l("svg",{width:"512",height:"512",viewBox:"0 0 512 512",fill:"none",xmlns:"http://www.w3.org/2000/svg"},l("path",{d:"M256 112V400M400 256H112",stroke:"currentColor","stroke-width":"32","stroke-linecap":"round","stroke-linejoin":"round"}))}}),an=qe("attach",()=>l("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},l("g",{fill:"currentColor","fill-rule":"nonzero"},l("path",{d:"M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"}))))),ln=qe("cancel",()=>l("svg",{viewBox:"0 0 16 16",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},l("g",{stroke:"none","stroke-width":"1",fill:"none","fill-rule":"evenodd"},l("g",{fill:"currentColor","fill-rule":"nonzero"},l("path",{d:"M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"}))))),cn=qe("retry",()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l("path",{d:"M320,146s24.36-12-64-12A160,160,0,1,0,416,294",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"}),l("polyline",{points:"256 58 336 138 256 218",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),dn=qe("trash",()=>l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},l("path",{d:"M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),l("rect",{x:"32",y:"64",width:"448",height:"80",rx:"16",ry:"16",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),l("line",{x1:"312",y1:"240",x2:"200",y2:"352",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}),l("line",{x1:"312",y1:"352",x2:"200",y2:"240",style:"fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"}))),H="0!important",jt="-1px!important";function Pe(e){return S(`${e}-type`,[D("& +",[m("button",{},[S(`${e}-type`,[M("border",{borderLeftWidth:H}),M("state-border",{left:jt})])])])])}function De(e){return S(`${e}-type`,[D("& +",[m("button",[S(`${e}-type`,[M("border",{borderTopWidth:H}),M("state-border",{top:jt})])])])])}const un=m("button-group",`
 flex-wrap: nowrap;
 display: inline-flex;
 position: relative;
`,[ze("vertical",{flexDirection:"row"},[ze("rtl",[m("button",[D("&:first-child:not(:last-child)",`
 margin-right: ${H};
 border-top-right-radius: ${H};
 border-bottom-right-radius: ${H};
 `),D("&:last-child:not(:first-child)",`
 margin-left: ${H};
 border-top-left-radius: ${H};
 border-bottom-left-radius: ${H};
 `),D("&:not(:first-child):not(:last-child)",`
 margin-left: ${H};
 margin-right: ${H};
 border-radius: ${H};
 `),Pe("default"),S("ghost",[Pe("primary"),Pe("info"),Pe("success"),Pe("warning"),Pe("error")])])])]),S("vertical",{flexDirection:"column"},[m("button",[D("&:first-child:not(:last-child)",`
 margin-bottom: ${H};
 margin-left: ${H};
 margin-right: ${H};
 border-bottom-left-radius: ${H};
 border-bottom-right-radius: ${H};
 `),D("&:last-child:not(:first-child)",`
 margin-top: ${H};
 margin-left: ${H};
 margin-right: ${H};
 border-top-left-radius: ${H};
 border-top-right-radius: ${H};
 `),D("&:not(:first-child):not(:last-child)",`
 margin: ${H};
 border-radius: ${H};
 `),De("default"),S("ghost",[De("primary"),De("info"),De("success"),De("warning"),De("error")])])])]),fn={size:{type:String,default:void 0},vertical:Boolean},Ni=O({name:"ButtonGroup",props:fn,setup(e){const{mergedClsPrefixRef:t,mergedRtlRef:r}=ce(e);return dr("-button-group",un,t),Ve(ur,e),{rtlEnabled:ct("ButtonGroup",r,t),mergedClsPrefix:t}},render(){const{mergedClsPrefix:e}=this;return l("div",{class:[`${e}-button-group`,this.rtlEnabled&&`${e}-button-group--rtl`,this.vertical&&`${e}-button-group--vertical`],role:"group"},this.$slots)}}),Ft=ut("n-checkbox-group"),pn={min:Number,max:Number,size:String,value:Array,defaultValue:{type:Array,default:null},disabled:{type:Boolean,default:void 0},"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array],onChange:[Function,Array]},zi=O({name:"CheckboxGroup",props:pn,setup(e){const{mergedClsPrefixRef:t}=ce(e),r=dt(e),{mergedSizeRef:n,mergedDisabledRef:o}=r,i=L(e.defaultValue),s=R(()=>e.value),a=pt(s,i),u=R(()=>{var f;return((f=a.value)===null||f===void 0?void 0:f.length)||0}),d=R(()=>Array.isArray(a.value)?new Set(a.value):new Set);function c(f,g){const{nTriggerFormInput:C,nTriggerFormChange:b}=r,{onChange:h,"onUpdate:value":$,onUpdateValue:x}=e;if(Array.isArray(a.value)){const p=Array.from(a.value),N=p.findIndex(P=>P===g);f?~N||(p.push(g),x&&Z(x,p,{actionType:"check",value:g}),$&&Z($,p,{actionType:"check",value:g}),C(),b(),i.value=p,h&&Z(h,p)):~N&&(p.splice(N,1),x&&Z(x,p,{actionType:"uncheck",value:g}),$&&Z($,p,{actionType:"uncheck",value:g}),h&&Z(h,p),i.value=p,C(),b())}else f?(x&&Z(x,[g],{actionType:"check",value:g}),$&&Z($,[g],{actionType:"check",value:g}),h&&Z(h,[g]),i.value=[g],C(),b()):(x&&Z(x,[],{actionType:"uncheck",value:g}),$&&Z($,[],{actionType:"uncheck",value:g}),h&&Z(h,[]),i.value=[],C(),b())}return Ve(Ft,{checkedCountRef:u,maxRef:F(e,"max"),minRef:F(e,"min"),valueSetRef:d,disabledRef:o,mergedSizeRef:n,toggleCheckbox:c}),{mergedClsPrefix:t}},render(){return l("div",{class:`${this.mergedClsPrefix}-checkbox-group`,role:"group"},this.$slots)}}),gn=()=>l("svg",{viewBox:"0 0 64 64",class:"check-icon"},l("path",{d:"M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"})),hn=()=>l("svg",{viewBox:"0 0 100 100",class:"line-icon"},l("path",{d:"M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"})),mn=D([m("checkbox",`
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `,[S("show-label","line-height: var(--n-label-line-height);"),D("&:hover",[m("checkbox-box",[M("border","border: var(--n-border-checked);")])]),D("&:focus:not(:active)",[m("checkbox-box",[M("border",`
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),S("inside-table",[m("checkbox-box",`
 background-color: var(--n-merged-color-table);
 `)]),S("checked",[m("checkbox-box",`
 background-color: var(--n-color-checked);
 `,[m("checkbox-icon",[D(".check-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("indeterminate",[m("checkbox-box",[m("checkbox-icon",[D(".check-icon",`
 opacity: 0;
 transform: scale(.5);
 `),D(".line-icon",`
 opacity: 1;
 transform: scale(1);
 `)])])]),S("checked, indeterminate",[D("&:focus:not(:active)",[m("checkbox-box",[M("border",`
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),m("checkbox-box",`
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `,[M("border",{border:"var(--n-border-checked)"})])]),S("disabled",{cursor:"not-allowed"},[S("checked",[m("checkbox-box",`
 background-color: var(--n-color-disabled-checked);
 `,[M("border",{border:"var(--n-border-disabled-checked)"}),m("checkbox-icon",[D(".check-icon, .line-icon",{fill:"var(--n-check-mark-color-disabled-checked)"})])])]),m("checkbox-box",`
 background-color: var(--n-color-disabled);
 `,[M("border",`
 border: var(--n-border-disabled);
 `),m("checkbox-icon",[D(".check-icon, .line-icon",`
 fill: var(--n-check-mark-color-disabled);
 `)])]),M("label",`
 color: var(--n-text-color-disabled);
 `)]),m("checkbox-box-wrapper",`
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `),m("checkbox-box",`
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `,[M("border",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `),m("checkbox-icon",`
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `,[D(".check-icon, .line-icon",`
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `),At({left:"1px",top:"1px"})])]),M("label",`
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `,[D("&:empty",{display:"none"})])]),fr(m("checkbox",`
 --n-merged-color-table: var(--n-color-table-modal);
 `)),pr(m("checkbox",`
 --n-merged-color-table: var(--n-color-table-popover);
 `))]),vn=Object.assign(Object.assign({},oe.props),{size:String,checked:{type:[Boolean,String,Number],default:void 0},defaultChecked:{type:[Boolean,String,Number],default:!1},value:[String,Number],disabled:{type:Boolean,default:void 0},indeterminate:Boolean,label:String,focusable:{type:Boolean,default:!0},checkedValue:{type:[Boolean,String,Number],default:!0},uncheckedValue:{type:[Boolean,String,Number],default:!1},"onUpdate:checked":[Function,Array],onUpdateChecked:[Function,Array],privateInsideTable:Boolean,onChange:[Function,Array]}),Li=O({name:"Checkbox",props:vn,setup(e){const t=Ce(Ft,null),r=L(null),{mergedClsPrefixRef:n,inlineThemeDisabled:o,mergedRtlRef:i}=ce(e),s=L(e.defaultChecked),a=F(e,"checked"),u=pt(a,s),d=Be(()=>{if(t){const y=t.valueSetRef.value;return y&&e.value!==void 0?y.has(e.value):!1}else return u.value===e.checkedValue}),c=dt(e,{mergedSize(y){const{size:T}=e;if(T!==void 0)return T;if(t){const{value:U}=t.mergedSizeRef;if(U!==void 0)return U}if(y){const{mergedSize:U}=y;if(U!==void 0)return U.value}return"medium"},mergedDisabled(y){const{disabled:T}=e;if(T!==void 0)return T;if(t){if(t.disabledRef.value)return!0;const{maxRef:{value:U},checkedCountRef:j}=t;if(U!==void 0&&j.value>=U&&!d.value)return!0;const{minRef:{value:X}}=t;if(X!==void 0&&j.value<=X&&d.value)return!0}return y?y.disabled.value:!1}}),{mergedDisabledRef:f,mergedSizeRef:g}=c,C=oe("Checkbox","-checkbox",mn,mr,e,n);function b(y){if(t&&e.value!==void 0)t.toggleCheckbox(!d.value,e.value);else{const{onChange:T,"onUpdate:checked":U,onUpdateChecked:j}=e,{nTriggerFormInput:X,nTriggerFormChange:w}=c,k=d.value?e.uncheckedValue:e.checkedValue;U&&Z(U,k,y),j&&Z(j,k,y),T&&Z(T,k,y),X(),w(),s.value=k}}function h(y){f.value||b(y)}function $(y){if(!f.value)switch(y.key){case" ":case"Enter":b(y)}}function x(y){switch(y.key){case" ":y.preventDefault()}}const p={focus:()=>{var y;(y=r.value)===null||y===void 0||y.focus()},blur:()=>{var y;(y=r.value)===null||y===void 0||y.blur()}},N=ct("Checkbox",i,n),P=R(()=>{const{value:y}=g,{common:{cubicBezierEaseInOut:T},self:{borderRadius:U,color:j,colorChecked:X,colorDisabled:w,colorTableHeader:k,colorTableHeaderModal:A,colorTableHeaderPopover:V,checkMarkColor:E,checkMarkColorDisabled:W,border:z,borderFocus:_,borderDisabled:ee,borderChecked:te,boxShadowFocus:re,textColor:We,textColorDisabled:Je,checkMarkColorDisabledChecked:Xe,colorDisabledChecked:Ye,borderDisabledChecked:Qe,labelPadding:tr,labelLineHeight:rr,labelFontWeight:nr,[Re("fontSize",y)]:or,[Re("size",y)]:ir}}=C.value;return{"--n-label-line-height":rr,"--n-label-font-weight":nr,"--n-size":ir,"--n-bezier":T,"--n-border-radius":U,"--n-border":z,"--n-border-checked":te,"--n-border-focus":_,"--n-border-disabled":ee,"--n-border-disabled-checked":Qe,"--n-box-shadow-focus":re,"--n-color":j,"--n-color-checked":X,"--n-color-table":k,"--n-color-table-modal":A,"--n-color-table-popover":V,"--n-color-disabled":w,"--n-color-disabled-checked":Ye,"--n-text-color":We,"--n-text-color-disabled":Je,"--n-check-mark-color":E,"--n-check-mark-color-disabled":W,"--n-check-mark-color-disabled-checked":Xe,"--n-font-size":or,"--n-label-padding":tr}}),v=o?Ie("checkbox",R(()=>g.value[0]),P,e):void 0;return Object.assign(c,p,{rtlEnabled:N,selfRef:r,mergedClsPrefix:n,mergedDisabled:f,renderedChecked:d,mergedTheme:C,labelId:nt(),handleClick:h,handleKeyUp:$,handleKeyDown:x,cssVars:o?void 0:P,themeClass:v==null?void 0:v.themeClass,onRender:v==null?void 0:v.onRender})},render(){var e;const{$slots:t,renderedChecked:r,mergedDisabled:n,indeterminate:o,privateInsideTable:i,cssVars:s,labelId:a,label:u,mergedClsPrefix:d,focusable:c,handleKeyUp:f,handleKeyDown:g,handleClick:C}=this;(e=this.onRender)===null||e===void 0||e.call(this);const b=gr(t.default,h=>u||h?l("span",{class:`${d}-checkbox__label`,id:a},u||h):null);return l("div",{ref:"selfRef",class:[`${d}-checkbox`,this.themeClass,this.rtlEnabled&&`${d}-checkbox--rtl`,r&&`${d}-checkbox--checked`,n&&`${d}-checkbox--disabled`,o&&`${d}-checkbox--indeterminate`,i&&`${d}-checkbox--inside-table`,b&&`${d}-checkbox--show-label`],tabindex:n||!c?void 0:0,role:"checkbox","aria-checked":o?"mixed":r,"aria-labelledby":a,style:s,onKeyup:f,onKeydown:g,onClick:C,onMousedown:()=>{hr("selectstart",window,h=>{h.preventDefault()},{once:!0})}},l("div",{class:`${d}-checkbox-box-wrapper`}," ",l("div",{class:`${d}-checkbox-box`},l(Tt,null,{default:()=>this.indeterminate?l("div",{key:"indeterminate",class:`${d}-checkbox-icon`},hn()):l("div",{key:"check",class:`${d}-checkbox-icon`},gn())}),l("div",{class:`${d}-checkbox-box__border`}))),b)}}),yn=m("divider",`
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`,[ze("vertical",`
 margin-top: 24px;
 margin-bottom: 24px;
 `,[ze("no-title",`
 display: flex;
 align-items: center;
 `)]),M("title",`
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `),S("title-position-left",[M("line",[S("left",{width:"28px"})])]),S("title-position-right",[M("line",[S("right",{width:"28px"})])]),S("dashed",[M("line",`
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]),S("vertical",`
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `),M("line",`
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `),ze("dashed",[M("line",{backgroundColor:"var(--n-color)"})]),S("dashed",[M("line",{borderColor:"var(--n-color)"})]),S("vertical",{backgroundColor:"var(--n-color)"})]),bn=Object.assign(Object.assign({},oe.props),{titlePlacement:{type:String,default:"center"},dashed:Boolean,vertical:Boolean}),Mi=O({name:"Divider",props:bn,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=ce(e),n=oe("Divider","-divider",yn,vr,e,t),o=R(()=>{const{common:{cubicBezierEaseInOut:s},self:{color:a,textColor:u,fontWeight:d}}=n.value;return{"--n-bezier":s,"--n-color":a,"--n-text-color":u,"--n-font-weight":d}}),i=r?Ie("divider",void 0,o,e):void 0;return{mergedClsPrefix:t,cssVars:r?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e;const{$slots:t,titlePlacement:r,vertical:n,dashed:o,cssVars:i,mergedClsPrefix:s}=this;return(e=this.onRender)===null||e===void 0||e.call(this),l("div",{role:"separator",class:[`${s}-divider`,this.themeClass,{[`${s}-divider--vertical`]:n,[`${s}-divider--no-title`]:!t.default,[`${s}-divider--dashed`]:o,[`${s}-divider--title-position-${r}`]:t.default&&r}],style:i},n?null:l("div",{class:`${s}-divider__line ${s}-divider__line--left`}),!n&&t.default?l(Oe,null,l("div",{class:`${s}-divider__title`},this.$slots),l("div",{class:`${s}-divider__line ${s}-divider__line--right`})):null)}}),wt=1,qt=ut("n-grid"),Vt=1,xn={span:{type:[Number,String],default:Vt},offset:{type:[Number,String],default:0},suffix:Boolean,privateOffset:Number,privateSpan:Number,privateColStart:Number,privateShow:{type:Boolean,default:!0}},Ei=O({__GRID_ITEM__:!0,name:"GridItem",alias:["Gi"],props:xn,setup(){const{isSsrRef:e,xGapRef:t,itemStyleRef:r,overflowRef:n,layoutShiftDisabledRef:o}=Ce(qt),i=yr();return{overflow:n,itemStyle:r,layoutShiftDisabled:o,mergedXGap:R(()=>pe(t.value||0)),deriveStyle:()=>{e.value;const{privateSpan:s=Vt,privateShow:a=!0,privateColStart:u=void 0,privateOffset:d=0}=i.vnode.props,{value:c}=t,f=pe(c||0);return{display:a?"":"none",gridColumn:`${u??`span ${s}`} / span ${s}`,marginLeft:d?`calc((100% - (${s} - 1) * ${f}) / ${s} * ${d} + ${f} * ${d})`:""}}}},render(){var e,t;if(this.layoutShiftDisabled){const{span:r,offset:n,mergedXGap:o}=this;return l("div",{style:{gridColumn:`span ${r} / span ${r}`,marginLeft:n?`calc((100% - (${r} - 1) * ${o}) / ${r} * ${n} + ${o} * ${n})`:""}},this.$slots)}return l("div",{style:[this.itemStyle,this.deriveStyle()]},(t=(e=this.$slots).default)===null||t===void 0?void 0:t.call(e,{overflow:this.overflow}))}}),wn={xs:0,s:640,m:1024,l:1280,xl:1536,xxl:1920},Ht=24,Ze="__ssr__",Rn={layoutShiftDisabled:Boolean,responsive:{type:[String,Boolean],default:"self"},cols:{type:[Number,String],default:Ht},itemResponsive:Boolean,collapsed:Boolean,collapsedRows:{type:Number,default:1},itemStyle:[Object,String],xGap:{type:[Number,String],default:0},yGap:{type:[Number,String],default:0}},Oi=O({name:"Grid",inheritAttrs:!1,props:Rn,setup(e){const{mergedClsPrefixRef:t,mergedBreakpointsRef:r}=ce(e),n=/^\d+$/,o=L(void 0),i=tn((r==null?void 0:r.value)||wn),s=Be(()=>!!(e.itemResponsive||!n.test(e.cols.toString())||!n.test(e.xGap.toString())||!n.test(e.yGap.toString()))),a=R(()=>{if(s.value)return e.responsive==="self"?o.value:i.value}),u=Be(()=>{var x;return(x=Number($e(e.cols.toString(),a.value)))!==null&&x!==void 0?x:Ht}),d=Be(()=>$e(e.xGap.toString(),a.value)),c=Be(()=>$e(e.yGap.toString(),a.value)),f=x=>{o.value=x.contentRect.width},g=x=>{qr(f,x)},C=L(!1),b=R(()=>{if(e.responsive==="self")return g}),h=L(!1),$=L();return Bt(()=>{const{value:x}=$;x&&x.hasAttribute(Ze)&&(x.removeAttribute(Ze),h.value=!0)}),Ve(qt,{layoutShiftDisabledRef:F(e,"layoutShiftDisabled"),isSsrRef:h,itemStyleRef:F(e,"itemStyle"),xGapRef:d,overflowRef:C}),{isSsr:!at,contentEl:$,mergedClsPrefix:t,style:R(()=>e.layoutShiftDisabled?{width:"100%",display:"grid",gridTemplateColumns:`repeat(${e.cols}, minmax(0, 1fr))`,columnGap:pe(e.xGap),rowGap:pe(e.yGap)}:{width:"100%",display:"grid",gridTemplateColumns:`repeat(${u.value}, minmax(0, 1fr))`,columnGap:pe(d.value),rowGap:pe(c.value)}),isResponsive:s,responsiveQuery:a,responsiveCols:u,handleResize:b,overflow:C}},render(){if(this.layoutShiftDisabled)return l("div",Le({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style},this.$attrs),this.$slots);const e=()=>{var t,r,n,o,i,s,a;this.overflow=!1;const u=xr(nn(this)),d=[],{collapsed:c,collapsedRows:f,responsiveCols:g,responsiveQuery:C}=this;u.forEach(p=>{var N,P,v,y,T;if(((N=p==null?void 0:p.type)===null||N===void 0?void 0:N.__GRID_ITEM__)!==!0)return;if(on(p)){const X=vt(p);X.props?X.props.privateShow=!1:X.props={privateShow:!1},d.push({child:X,rawChildSpan:0});return}p.dirs=((P=p.dirs)===null||P===void 0?void 0:P.filter(({dir:X})=>X!==lt))||null,((v=p.dirs)===null||v===void 0?void 0:v.length)===0&&(p.dirs=null);const U=vt(p),j=Number((T=$e((y=U.props)===null||y===void 0?void 0:y.span,C))!==null&&T!==void 0?T:wt);j!==0&&d.push({child:U,rawChildSpan:j})});let b=0;const h=(t=d[d.length-1])===null||t===void 0?void 0:t.child;if(h!=null&&h.props){const p=(r=h.props)===null||r===void 0?void 0:r.suffix;p!==void 0&&p!==!1&&(b=Number((o=$e((n=h.props)===null||n===void 0?void 0:n.span,C))!==null&&o!==void 0?o:wt),h.props.privateSpan=b,h.props.privateColStart=g+1-b,h.props.privateShow=(i=h.props.privateShow)!==null&&i!==void 0?i:!0)}let $=0,x=!1;for(const{child:p,rawChildSpan:N}of d){if(x&&(this.overflow=!0),!x){const P=Number((a=$e((s=p.props)===null||s===void 0?void 0:s.offset,C))!==null&&a!==void 0?a:0),v=Math.min(N+P,g);if(p.props?(p.props.privateSpan=v,p.props.privateOffset=P):p.props={privateSpan:v,privateOffset:P},c){const y=$%g;v+y>g&&($+=g-y),v+$+b>f*g?x=!0:$+=v}}x&&(p.props?p.props.privateShow!==!0&&(p.props.privateShow=!1):p.props={privateShow:!1})}return l("div",Le({ref:"contentEl",class:`${this.mergedClsPrefix}-grid`,style:this.style,[Ze]:this.isSsr||void 0},this.$attrs),d.map(({child:p})=>p))};return this.isResponsive&&this.responsive==="self"?l(br,{onResize:this.handleResize},{default:e}):e()}}),kn={success:l(zt,null),error:l(Nt,null),warning:l(_t,null),info:l(It,null)},Cn=O({name:"ProgressCircle",props:{clsPrefix:{type:String,required:!0},status:{type:String,required:!0},strokeWidth:{type:Number,required:!0},fillColor:[String,Object],railColor:String,railStyle:[String,Object],percentage:{type:Number,default:0},offsetDegree:{type:Number,default:0},showIndicator:{type:Boolean,required:!0},indicatorTextColor:String,unit:String,viewBoxWidth:{type:Number,required:!0},gapDegree:{type:Number,required:!0},gapOffsetDegree:{type:Number,default:0}},setup(e,{slots:t}){const r=R(()=>{const i="gradient",{fillColor:s}=e;return typeof s=="object"?`${i}-${wr(JSON.stringify(s))}`:i});function n(i,s,a,u){const{gapDegree:d,viewBoxWidth:c,strokeWidth:f}=e,g=50,C=0,b=g,h=0,$=2*g,x=50+f/2,p=`M ${x},${x} m ${C},${b}
      a ${g},${g} 0 1 1 ${h},${-$}
      a ${g},${g} 0 1 1 ${-h},${$}`,N=Math.PI*2*g,P={stroke:u==="rail"?a:typeof e.fillColor=="object"?`url(#${r.value})`:a,strokeDasharray:`${Math.min(i,100)/100*(N-d)}px ${c*8}px`,strokeDashoffset:`-${d/2}px`,transformOrigin:s?"center":void 0,transform:s?`rotate(${s}deg)`:void 0};return{pathString:p,pathStyle:P}}const o=()=>{const i=typeof e.fillColor=="object",s=i?e.fillColor.stops[0]:"",a=i?e.fillColor.stops[1]:"";return i&&l("defs",null,l("linearGradient",{id:r.value,x1:"0%",y1:"100%",x2:"100%",y2:"0%"},l("stop",{offset:"0%","stop-color":s}),l("stop",{offset:"100%","stop-color":a})))};return()=>{const{fillColor:i,railColor:s,strokeWidth:a,offsetDegree:u,status:d,percentage:c,showIndicator:f,indicatorTextColor:g,unit:C,gapOffsetDegree:b,clsPrefix:h}=e,{pathString:$,pathStyle:x}=n(100,0,s,"rail"),{pathString:p,pathStyle:N}=n(c,u,i,"fill"),P=100+a;return l("div",{class:`${h}-progress-content`,role:"none"},l("div",{class:`${h}-progress-graph`,"aria-hidden":!0},l("div",{class:`${h}-progress-graph-circle`,style:{transform:b?`rotate(${b}deg)`:void 0}},l("svg",{viewBox:`0 0 ${P} ${P}`},o(),l("g",null,l("path",{class:`${h}-progress-graph-circle-rail`,d:$,"stroke-width":a,"stroke-linecap":"round",fill:"none",style:x})),l("g",null,l("path",{class:[`${h}-progress-graph-circle-fill`,c===0&&`${h}-progress-graph-circle-fill--empty`],d:p,"stroke-width":a,"stroke-linecap":"round",fill:"none",style:N}))))),f?l("div",null,t.default?l("div",{class:`${h}-progress-custom-content`,role:"none"},t.default()):d!=="default"?l("div",{class:`${h}-progress-icon`,"aria-hidden":!0},l(ae,{clsPrefix:h},{default:()=>kn[d]})):l("div",{class:`${h}-progress-text`,style:{color:g},role:"none"},l("span",{class:`${h}-progress-text__percentage`},c),l("span",{class:`${h}-progress-text__unit`},C))):null)}}}),Sn={success:l(zt,null),error:l(Nt,null),warning:l(_t,null),info:l(It,null)},$n=O({name:"ProgressLine",props:{clsPrefix:{type:String,required:!0},percentage:{type:Number,default:0},railColor:String,railStyle:[String,Object],fillColor:[String,Object],status:{type:String,required:!0},indicatorPlacement:{type:String,required:!0},indicatorTextColor:String,unit:{type:String,default:"%"},processing:{type:Boolean,required:!0},showIndicator:{type:Boolean,required:!0},height:[String,Number],railBorderRadius:[String,Number],fillBorderRadius:[String,Number]},setup(e,{slots:t}){const r=R(()=>Se(e.height)),n=R(()=>{var s,a;return typeof e.fillColor=="object"?`linear-gradient(to right, ${(s=e.fillColor)===null||s===void 0?void 0:s.stops[0]} , ${(a=e.fillColor)===null||a===void 0?void 0:a.stops[1]})`:e.fillColor}),o=R(()=>e.railBorderRadius!==void 0?Se(e.railBorderRadius):e.height!==void 0?Se(e.height,{c:.5}):""),i=R(()=>e.fillBorderRadius!==void 0?Se(e.fillBorderRadius):e.railBorderRadius!==void 0?Se(e.railBorderRadius):e.height!==void 0?Se(e.height,{c:.5}):"");return()=>{const{indicatorPlacement:s,railColor:a,railStyle:u,percentage:d,unit:c,indicatorTextColor:f,status:g,showIndicator:C,processing:b,clsPrefix:h}=e;return l("div",{class:`${h}-progress-content`,role:"none"},l("div",{class:`${h}-progress-graph`,"aria-hidden":!0},l("div",{class:[`${h}-progress-graph-line`,{[`${h}-progress-graph-line--indicator-${s}`]:!0}]},l("div",{class:`${h}-progress-graph-line-rail`,style:[{backgroundColor:a,height:r.value,borderRadius:o.value},u]},l("div",{class:[`${h}-progress-graph-line-fill`,b&&`${h}-progress-graph-line-fill--processing`],style:{maxWidth:`${e.percentage}%`,background:n.value,height:r.value,lineHeight:r.value,borderRadius:i.value}},s==="inside"?l("div",{class:`${h}-progress-graph-line-indicator`,style:{color:f}},t.default?t.default():`${d}${c}`):null)))),C&&s==="outside"?l("div",null,t.default?l("div",{class:`${h}-progress-custom-content`,style:{color:f},role:"none"},t.default()):g==="default"?l("div",{role:"none",class:`${h}-progress-icon ${h}-progress-icon--as-text`,style:{color:f}},d,c):l("div",{class:`${h}-progress-icon`,"aria-hidden":!0},l(ae,{clsPrefix:h},{default:()=>Sn[g]}))):null)}}});function Rt(e,t,r=100){return`m ${r/2} ${r/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`}const Pn=O({name:"ProgressMultipleCircle",props:{clsPrefix:{type:String,required:!0},viewBoxWidth:{type:Number,required:!0},percentage:{type:Array,default:[0]},strokeWidth:{type:Number,required:!0},circleGap:{type:Number,required:!0},showIndicator:{type:Boolean,required:!0},fillColor:{type:Array,default:()=>[]},railColor:{type:Array,default:()=>[]},railStyle:{type:Array,default:()=>[]}},setup(e,{slots:t}){const r=R(()=>e.percentage.map((i,s)=>`${Math.PI*i/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*s)-e.circleGap*s)*2}, ${e.viewBoxWidth*8}`)),n=(o,i)=>{const s=e.fillColor[i],a=typeof s=="object"?s.stops[0]:"",u=typeof s=="object"?s.stops[1]:"";return typeof e.fillColor[i]=="object"&&l("linearGradient",{id:`gradient-${i}`,x1:"100%",y1:"0%",x2:"0%",y2:"100%"},l("stop",{offset:"0%","stop-color":a}),l("stop",{offset:"100%","stop-color":u}))};return()=>{const{viewBoxWidth:o,strokeWidth:i,circleGap:s,showIndicator:a,fillColor:u,railColor:d,railStyle:c,percentage:f,clsPrefix:g}=e;return l("div",{class:`${g}-progress-content`,role:"none"},l("div",{class:`${g}-progress-graph`,"aria-hidden":!0},l("div",{class:`${g}-progress-graph-circle`},l("svg",{viewBox:`0 0 ${o} ${o}`},l("defs",null,f.map((C,b)=>n(C,b))),f.map((C,b)=>l("g",{key:b},l("path",{class:`${g}-progress-graph-circle-rail`,d:Rt(o/2-i/2*(1+2*b)-s*b,i,o),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:[{strokeDashoffset:0,stroke:d[b]},c[b]]}),l("path",{class:[`${g}-progress-graph-circle-fill`,C===0&&`${g}-progress-graph-circle-fill--empty`],d:Rt(o/2-i/2*(1+2*b)-s*b,i,o),"stroke-width":i,"stroke-linecap":"round",fill:"none",style:{strokeDasharray:r.value[b],strokeDashoffset:0,stroke:typeof u[b]=="object"?`url(#gradient-${b})`:u[b]}})))))),a&&t.default?l("div",null,l("div",{class:`${g}-progress-text`},t.default())):null)}}}),Dn=D([m("progress",{display:"inline-block"},[m("progress-icon",`
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `),S("line",`
 width: 100%;
 display: block;
 `,[m("progress-content",`
 display: flex;
 align-items: center;
 `,[m("progress-graph",{flex:1})]),m("progress-custom-content",{marginLeft:"14px"}),m("progress-icon",`
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `,[S("as-text",`
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]),S("circle, dashboard",{width:"120px"},[m("progress-custom-content",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `),m("progress-text",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `),m("progress-icon",`
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]),S("multiple-circle",`
 width: 200px;
 color: inherit;
 `,[m("progress-text",`
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]),m("progress-content",{position:"relative"}),m("progress-graph",{position:"relative"},[m("progress-graph-circle",[D("svg",{verticalAlign:"bottom"}),m("progress-graph-circle-fill",`
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `,[S("empty",{opacity:0})]),m("progress-graph-circle-rail",`
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]),m("progress-graph-line",[S("indicator-inside",[m("progress-graph-line-rail",`
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `,[m("progress-graph-line-fill",`
 height: inherit;
 border-radius: 10px;
 `),m("progress-graph-line-indicator",`
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]),S("indicator-inside-label",`
 height: 16px;
 display: flex;
 align-items: center;
 `,[m("progress-graph-line-rail",`
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `),m("progress-graph-line-indicator",`
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),m("progress-graph-line-rail",`
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `,[m("progress-graph-line-fill",`
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `,[S("processing",[D("&::after",`
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]),D("@keyframes progress-processing-animation",`
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),An=Object.assign(Object.assign({},oe.props),{processing:Boolean,type:{type:String,default:"line"},gapDegree:Number,gapOffsetDegree:Number,status:{type:String,default:"default"},railColor:[String,Array],railStyle:[String,Array],color:[String,Array,Object],viewBoxWidth:{type:Number,default:100},strokeWidth:{type:Number,default:7},percentage:[Number,Array],unit:{type:String,default:"%"},showIndicator:{type:Boolean,default:!0},indicatorPosition:{type:String,default:"outside"},indicatorPlacement:{type:String,default:"outside"},indicatorTextColor:String,circleGap:{type:Number,default:1},height:Number,borderRadius:[String,Number],fillBorderRadius:[String,Number],offsetDegree:Number}),Tn=O({name:"Progress",props:An,setup(e){const t=R(()=>e.indicatorPlacement||e.indicatorPosition),r=R(()=>{if(e.gapDegree||e.gapDegree===0)return e.gapDegree;if(e.type==="dashboard")return 75}),{mergedClsPrefixRef:n,inlineThemeDisabled:o}=ce(e),i=oe("Progress","-progress",Dn,Rr,e,n),s=R(()=>{const{status:u}=e,{common:{cubicBezierEaseInOut:d},self:{fontSize:c,fontSizeCircle:f,railColor:g,railHeight:C,iconSizeCircle:b,iconSizeLine:h,textColorCircle:$,textColorLineInner:x,textColorLineOuter:p,lineBgProcessing:N,fontWeightCircle:P,[Re("iconColor",u)]:v,[Re("fillColor",u)]:y}}=i.value;return{"--n-bezier":d,"--n-fill-color":y,"--n-font-size":c,"--n-font-size-circle":f,"--n-font-weight-circle":P,"--n-icon-color":v,"--n-icon-size-circle":b,"--n-icon-size-line":h,"--n-line-bg-processing":N,"--n-rail-color":g,"--n-rail-height":C,"--n-text-color-circle":$,"--n-text-color-line-inner":x,"--n-text-color-line-outer":p}}),a=o?Ie("progress",R(()=>e.status[0]),s,e):void 0;return{mergedClsPrefix:n,mergedIndicatorPlacement:t,gapDeg:r,cssVars:o?void 0:s,themeClass:a==null?void 0:a.themeClass,onRender:a==null?void 0:a.onRender}},render(){const{type:e,cssVars:t,indicatorTextColor:r,showIndicator:n,status:o,railColor:i,railStyle:s,color:a,percentage:u,viewBoxWidth:d,strokeWidth:c,mergedIndicatorPlacement:f,unit:g,borderRadius:C,fillBorderRadius:b,height:h,processing:$,circleGap:x,mergedClsPrefix:p,gapDeg:N,gapOffsetDegree:P,themeClass:v,$slots:y,onRender:T}=this;return T==null||T(),l("div",{class:[v,`${p}-progress`,`${p}-progress--${e}`,`${p}-progress--${o}`],style:t,"aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":u,role:e==="circle"||e==="line"||e==="dashboard"?"progressbar":"none"},e==="circle"||e==="dashboard"?l(Cn,{clsPrefix:p,status:o,showIndicator:n,indicatorTextColor:r,railColor:i,fillColor:a,railStyle:s,offsetDegree:this.offsetDegree,percentage:u,viewBoxWidth:d,strokeWidth:c,gapDegree:N===void 0?e==="dashboard"?75:0:N,gapOffsetDegree:P,unit:g},y):e==="line"?l($n,{clsPrefix:p,status:o,showIndicator:n,indicatorTextColor:r,railColor:i,fillColor:a,railStyle:s,percentage:u,processing:$,indicatorPlacement:f,unit:g,fillBorderRadius:b,railBorderRadius:C,height:h},y):e==="multiple-circle"?l(Pn,{clsPrefix:p,strokeWidth:c,railColor:i,fillColor:a,railStyle:s,viewBoxWidth:d,percentage:u,showIndicator:n,circleGap:x},y):null)}}),Bn=D([m("skeleton",`
 height: 1em;
 width: 100%;
 transition:
 --n-color-start .3s var(--n-bezier),
 --n-color-end .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 animation: 2s skeleton-loading infinite cubic-bezier(0.36, 0, 0.64, 1);
 background-color: var(--n-color-start);
 `),D("@keyframes skeleton-loading",`
 0% {
 background: var(--n-color-start);
 }
 40% {
 background: var(--n-color-end);
 }
 80% {
 background: var(--n-color-start);
 }
 100% {
 background: var(--n-color-start);
 }
 `)]),In=Object.assign(Object.assign({},oe.props),{text:Boolean,round:Boolean,circle:Boolean,height:[String,Number],width:[String,Number],size:String,repeat:{type:Number,default:1},animated:{type:Boolean,default:!0},sharp:{type:Boolean,default:!0}}),Ae=O({name:"Skeleton",inheritAttrs:!1,props:In,setup(e){rn();const{mergedClsPrefixRef:t}=ce(e),r=oe("Skeleton","-skeleton",Bn,Cr,e,t);return{mergedClsPrefix:t,style:R(()=>{var n,o;const i=r.value,{common:{cubicBezierEaseInOut:s}}=i,a=i.self,{color:u,colorEnd:d,borderRadius:c}=a;let f;const{circle:g,sharp:C,round:b,width:h,height:$,size:x,text:p,animated:N}=e;x!==void 0&&(f=a[Re("height",x)]);const P=g?(n=h??$)!==null&&n!==void 0?n:f:h,v=(o=g?h??$:$)!==null&&o!==void 0?o:f;return{display:p?"inline-block":"",verticalAlign:p?"-0.125em":"",borderRadius:g?"50%":b?"4096px":C?"":c,width:typeof P=="number"?pe(P):P,height:typeof v=="number"?pe(v):v,animation:N?"":"none","--n-bezier":s,"--n-color-start":u,"--n-color-end":d}})}},render(){const{repeat:e,style:t,mergedClsPrefix:r,$attrs:n}=this,o=l("div",Le({class:`${r}-skeleton`,style:t},n));return e>1?l(Oe,null,kr(e,null).map(i=>[o,`
`])):o}}),_n=D([D("@keyframes spin-rotate",`
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `),m("spin-container",`
 position: relative;
 `,[m("spin-body",`
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `,[Sr()])]),m("spin-body",`
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `),m("spin",`
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `,[S("rotate",`
 animation: spin-rotate 2s linear infinite;
 `)]),m("spin-description",`
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `),m("spin-content",`
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `,[S("spinning",`
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),Nn={small:20,medium:18,large:16},zn=Object.assign(Object.assign({},oe.props),{contentClass:String,contentStyle:[Object,String],description:String,stroke:String,size:{type:[String,Number],default:"medium"},show:{type:Boolean,default:!0},strokeWidth:Number,rotate:{type:Boolean,default:!0},spinning:{type:Boolean,validator:()=>!0,default:void 0},delay:Number}),Ln=O({name:"Spin",props:zn,slots:Object,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=ce(e),n=oe("Spin","-spin",_n,Dr,e,t),o=R(()=>{const{size:u}=e,{common:{cubicBezierEaseInOut:d},self:c}=n.value,{opacitySpinning:f,color:g,textColor:C}=c,b=typeof u=="number"?pe(u):c[Re("size",u)];return{"--n-bezier":d,"--n-opacity-spinning":f,"--n-size":b,"--n-color":g,"--n-text-color":C}}),i=r?Ie("spin",R(()=>{const{size:u}=e;return typeof u=="number"?String(u):u[0]}),o,e):void 0,s=Ut(e,["spinning","show"]),a=L(!1);return Lt(u=>{let d;if(s.value){const{delay:c}=e;if(c){d=window.setTimeout(()=>{a.value=!0},c),u(()=>{clearTimeout(d)});return}}a.value=s.value}),{mergedClsPrefix:t,active:a,mergedStrokeWidth:R(()=>{const{strokeWidth:u}=e;if(u!==void 0)return u;const{size:d}=e;return Nn[typeof d=="number"?"medium":d]}),cssVars:r?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,t;const{$slots:r,mergedClsPrefix:n,description:o}=this,i=r.icon&&this.rotate,s=(o||r.description)&&l("div",{class:`${n}-spin-description`},o||((e=r.description)===null||e===void 0?void 0:e.call(r))),a=r.icon?l("div",{class:[`${n}-spin-body`,this.themeClass]},l("div",{class:[`${n}-spin`,i&&`${n}-spin--rotate`],style:r.default?"":this.cssVars},r.icon()),s):l("div",{class:[`${n}-spin-body`,this.themeClass]},l($r,{clsPrefix:n,style:r.default?"":this.cssVars,stroke:this.stroke,"stroke-width":this.mergedStrokeWidth,class:`${n}-spin`}),s);return(t=this.onRender)===null||t===void 0||t.call(this),r.default?l("div",{class:[`${n}-spin-container`,this.themeClass],style:this.cssVars},l("div",{class:[`${n}-spin-content`,this.active&&`${n}-spin-content--spinning`,this.contentClass],style:this.contentStyle},r),l(Pr,{name:"fade-in-transition"},{default:()=>this.active?a:null})):a}}),Mn=m("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[S("strong",`
 font-weight: var(--n-font-weight-strong);
 `),S("italic",{fontStyle:"italic"}),S("underline",{textDecoration:"underline"}),S("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),En=Object.assign(Object.assign({},oe.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),Ui=O({name:"Text",props:En,setup(e){const{mergedClsPrefixRef:t,inlineThemeDisabled:r}=ce(e),n=oe("Typography","-text",Mn,Ar,e,t),o=R(()=>{const{depth:s,type:a}=e,u=a==="default"?s===void 0?"textColor":`textColor${s}Depth`:Re("textColor",a),{common:{fontWeightStrong:d,fontFamilyMono:c,cubicBezierEaseInOut:f},self:{codeTextColor:g,codeBorderRadius:C,codeColor:b,codeBorder:h,[u]:$}}=n.value;return{"--n-bezier":f,"--n-text-color":$,"--n-font-weight-strong":d,"--n-font-famliy-mono":c,"--n-code-border-radius":C,"--n-code-text-color":g,"--n-code-color":b,"--n-code-border":h}}),i=r?Ie("text",R(()=>`${e.type[0]}${e.depth||""}`),o,e):void 0;return{mergedClsPrefix:t,compitableTag:Ut(e,["as","tag"]),cssVars:r?void 0:o,themeClass:i==null?void 0:i.themeClass,onRender:i==null?void 0:i.onRender}},render(){var e,t,r;const{mergedClsPrefix:n}=this;(e=this.onRender)===null||e===void 0||e.call(this);const o=[`${n}-text`,this.themeClass,{[`${n}-text--code`]:this.code,[`${n}-text--delete`]:this.delete,[`${n}-text--strong`]:this.strong,[`${n}-text--italic`]:this.italic,[`${n}-text--underline`]:this.underline}],i=(r=(t=this.$slots).default)===null||r===void 0?void 0:r.call(t);return this.code?l("code",{class:o,style:this.cssVars},this.delete?l("del",null,i):i):this.delete?l("del",{class:o,style:this.cssVars},i):l(this.compitableTag||"span",{class:o,style:this.cssVars},i)}}),_e=ut("n-upload"),On=D([m("upload","width: 100%;",[S("dragger-inside",[m("upload-trigger",`
 display: block;
 `)]),S("drag-over",[m("upload-dragger",`
 border: var(--n-dragger-border-hover);
 `)])]),m("upload-dragger",`
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `,[D("&:hover",`
 border: var(--n-dragger-border-hover);
 `),S("disabled",`
 cursor: not-allowed;
 `)]),m("upload-trigger",`
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[D("+",[m("upload-file-list","margin-top: 8px;")]),S("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `),S("image-card",`
 width: 96px;
 height: 96px;
 `,[m("base-icon",`
 font-size: 24px;
 `),m("upload-dragger",`
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]),m("upload-file-list",`
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `,[D("a, img","outline: none;"),S("disabled",`
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `,[m("upload-file","cursor: not-allowed;")]),S("grid",`
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `),m("upload-file",`
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `,[yt(),m("progress",[yt({foldPadding:!0})]),D("&:hover",`
 background-color: var(--n-item-color-hover);
 `,[m("upload-file-info",[M("action",`
 opacity: 1;
 `)])]),S("image-type",`
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `,[m("upload-file-info",`
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `,[m("progress",`
 padding: 2px 0;
 margin-bottom: 0;
 `),M("name",`
 padding: 0 8px;
 `),M("thumbnail",`
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `,[D("img",`
 width: 100%;
 `)])])]),S("text-type",[m("progress",`
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]),S("image-card-type",`
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `,[m("progress",`
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `),m("upload-file-info",`
 padding: 0;
 width: 100%;
 height: 100%;
 `,[M("thumbnail",`
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `,[D("img",`
 width: 100%;
 `)])]),D("&::before",`
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `),D("&:hover",[D("&::before","opacity: 1;"),m("upload-file-info",[M("thumbnail","opacity: .12;")])])]),S("error-status",[D("&:hover",`
 background-color: var(--n-item-color-hover-error);
 `),m("upload-file-info",[M("name","color: var(--n-item-text-color-error);"),M("thumbnail","color: var(--n-item-text-color-error);")]),S("image-card-type",`
 border: var(--n-item-border-image-card-error);
 `)]),S("with-url",`
 cursor: pointer;
 `,[m("upload-file-info",[M("name",`
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `,[D("a",`
 text-decoration: underline;
 `)])])]),m("upload-file-info",`
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `,[M("thumbnail",`
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `,[m("base-icon",`
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]),M("action",`
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `,[m("button",[D("&:not(:last-child)",{marginRight:"4px"}),m("base-icon",[D("svg",[At()])])]),S("image-type",`
 position: relative;
 max-width: 80px;
 width: auto;
 `),S("image-card-type",`
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]),M("name",`
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `,[D("a",`
 color: inherit;
 text-decoration: underline;
 `)])])])]),m("upload-file-input",`
 display: none;
 width: 0;
 height: 0;
 opacity: 0;
 `)]),Gt="__UPLOAD_DRAGGER__",Un=O({name:"UploadDragger",[Gt]:!0,setup(e,{slots:t}){const r=Ce(_e,null);return r||He("upload-dragger","`n-upload-dragger` must be placed inside `n-upload`."),()=>{const{mergedClsPrefixRef:{value:n},mergedDisabledRef:{value:o},maxReachedRef:{value:i}}=r;return l("div",{class:[`${n}-upload-dragger`,(o||i)&&`${n}-upload-dragger--disabled`]},t)}}});function jn(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},l("g",{fill:"none"},l("path",{d:"M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",fill:"currentColor"})))}function Fn(){return l("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28"},l("g",{fill:"none"},l("path",{d:"M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",fill:"currentColor"})))}const qn=O({name:"UploadProgress",props:{show:Boolean,percentage:{type:Number,required:!0},status:{type:String,required:!0}},setup(){return{mergedTheme:Ce(_e).mergedThemeRef}},render(){return l(Mt,null,{default:()=>this.show?l(Tn,{type:"line",showIndicator:!1,percentage:this.percentage,status:this.status,height:2,theme:this.mergedTheme.peers.Progress,themeOverrides:this.mergedTheme.peerOverrides.Progress}):null})}});var ot=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{d(n.next(c))}catch(f){s(f)}}function u(c){try{d(n.throw(c))}catch(f){s(f)}}function d(c){c.done?i(c.value):o(c.value).then(a,u)}d((n=n.apply(e,t||[])).next())})};function Kt(e){return e.includes("image/")}function kt(e=""){const t=e.split("/"),n=t[t.length-1].split(/#|\?/)[0];return(/\.[^./\\]*$/.exec(n)||[""])[0]}const Ct=/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i,Wt=e=>{if(e.type)return Kt(e.type);const t=kt(e.name||"");if(Ct.test(t))return!0;const r=e.thumbnailUrl||e.url||"",n=kt(r);return!!(/^data:image\//.test(r)||Ct.test(n))};function Vn(e){return ot(this,void 0,void 0,function*(){return yield new Promise(t=>{if(!e.type||!Kt(e.type)){t("");return}t(window.URL.createObjectURL(e))})})}const Hn=at&&window.FileReader&&window.File;function Gn(e){return e.isDirectory}function Kn(e){return e.isFile}function Wn(e,t){return ot(this,void 0,void 0,function*(){const r=[];function n(o){return ot(this,void 0,void 0,function*(){for(const i of o)if(i){if(t&&Gn(i)){const s=i.createReader();let a=[],u;try{do u=yield new Promise((d,c)=>{s.readEntries(d,c)}),a=a.concat(u);while(u.length>0)}catch(d){bt("upload","error happens when handling directory upload",d)}yield n(a)}else if(Kn(i))try{const s=yield new Promise((a,u)=>{i.file(a,u)});r.push({file:s,entry:i,source:"dnd"})}catch(s){bt("upload","error happens when handling file upload",s)}}})}return yield n(e),r})}function Ee(e){const{id:t,name:r,percentage:n,status:o,url:i,file:s,thumbnailUrl:a,type:u,fullPath:d,batchId:c}=e;return{id:t,name:r,percentage:n??null,status:o,url:i??null,file:s??null,thumbnailUrl:a??null,type:u??null,fullPath:d??null,batchId:c??null}}function Jn(e,t,r){return e=e.toLowerCase(),t=t.toLocaleLowerCase(),r=r.toLocaleLowerCase(),r.split(",").map(o=>o.trim()).filter(Boolean).some(o=>{if(o.startsWith(".")){if(e.endsWith(o))return!0}else if(o.includes("/")){const[i,s]=t.split("/"),[a,u]=o.split("/");if((a==="*"||i&&a&&a===i)&&(u==="*"||s&&u&&u===s))return!0}else return!0;return!1})}var St=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{d(n.next(c))}catch(f){s(f)}}function u(c){try{d(n.throw(c))}catch(f){s(f)}}function d(c){c.done?i(c.value):o(c.value).then(a,u)}d((n=n.apply(e,t||[])).next())})};const Ue={paddingMedium:"0 3px",heightMedium:"24px",iconSizeMedium:"18px"},Xn=O({name:"UploadFile",props:{clsPrefix:{type:String,required:!0},file:{type:Object,required:!0},listType:{type:String,required:!0},index:{type:Number,required:!0}},setup(e){const t=Ce(_e),r=L(null),n=L(""),o=R(()=>{const{file:v}=e;return v.status==="finished"?"success":v.status==="error"?"error":"info"}),i=R(()=>{const{file:v}=e;if(v.status==="error")return"error"}),s=R(()=>{const{file:v}=e;return v.status==="uploading"}),a=R(()=>{if(!t.showCancelButtonRef.value)return!1;const{file:v}=e;return["uploading","pending","error"].includes(v.status)}),u=R(()=>{if(!t.showRemoveButtonRef.value)return!1;const{file:v}=e;return["finished"].includes(v.status)}),d=R(()=>{if(!t.showDownloadButtonRef.value)return!1;const{file:v}=e;return["finished"].includes(v.status)}),c=R(()=>{if(!t.showRetryButtonRef.value)return!1;const{file:v}=e;return["error"].includes(v.status)}),f=Be(()=>n.value||e.file.thumbnailUrl||e.file.url),g=R(()=>{if(!t.showPreviewButtonRef.value)return!1;const{file:{status:v},listType:y}=e;return["finished"].includes(v)&&f.value&&y==="image-card"});function C(){return St(this,void 0,void 0,function*(){const v=t.onRetryRef.value;v&&(yield v({file:e.file}))===!1||t.submit(e.file.id)})}function b(v){v.preventDefault();const{file:y}=e;["finished","pending","error"].includes(y.status)?$(y):["uploading"].includes(y.status)?p(y):Tr("upload","The button clicked type is unknown.")}function h(v){v.preventDefault(),x(e.file)}function $(v){const{xhrMap:y,doChange:T,onRemoveRef:{value:U},mergedFileListRef:{value:j}}=t;Promise.resolve(U?U({file:Object.assign({},v),fileList:j,index:e.index}):!0).then(X=>{if(X===!1)return;const w=Object.assign({},v,{status:"removed"});y.delete(v.id),T(w,void 0,{remove:!0})})}function x(v){const{onDownloadRef:{value:y},customDownloadRef:{value:T}}=t;Promise.resolve(y?y(Object.assign({},v)):!0).then(U=>{U!==!1&&(T?T(Object.assign({},v)):Gr(v.url,v.name))})}function p(v){const{xhrMap:y}=t,T=y.get(v.id);T==null||T.abort(),$(Object.assign({},v))}function N(v){const{onPreviewRef:{value:y}}=t;if(y)y(e.file,{event:v});else if(e.listType==="image-card"){const{value:T}=r;if(!T)return;T.showPreview()}}const P=()=>St(this,void 0,void 0,function*(){const{listType:v}=e;v!=="image"&&v!=="image-card"||t.shouldUseThumbnailUrlRef.value(e.file)&&(n.value=yield t.getFileThumbnailUrlResolver(e.file))});return Lt(()=>{P()}),{mergedTheme:t.mergedThemeRef,progressStatus:o,buttonType:i,showProgress:s,disabled:t.mergedDisabledRef,showCancelButton:a,showRemoveButton:u,showDownloadButton:d,showRetryButton:c,showPreviewButton:g,mergedThumbnailUrl:f,shouldUseThumbnailUrl:t.shouldUseThumbnailUrlRef,renderIcon:t.renderIconRef,imageRef:r,handleRemoveOrCancelClick:b,handleDownloadClick:h,handleRetryClick:C,handlePreviewClick:N}},render(){const{clsPrefix:e,mergedTheme:t,listType:r,file:n,renderIcon:o}=this;let i;const s=r==="image";s||r==="image-card"?i=!this.shouldUseThumbnailUrl(n)||!this.mergedThumbnailUrl?l("span",{class:`${e}-upload-file-info__thumbnail`},o?o(n):Wt(n)?l(ae,{clsPrefix:e},{default:jn}):l(ae,{clsPrefix:e},{default:Fn})):l("a",{rel:"noopener noreferer",target:"_blank",href:n.url||void 0,class:`${e}-upload-file-info__thumbnail`,onClick:this.handlePreviewClick},r==="image-card"?l(Vr,{src:this.mergedThumbnailUrl||void 0,previewSrc:n.url||void 0,alt:n.name,ref:"imageRef"}):l("img",{src:this.mergedThumbnailUrl||void 0,alt:n.name})):i=l("span",{class:`${e}-upload-file-info__thumbnail`},o?o(n):l(ae,{clsPrefix:e},{default:()=>l(an,null)}));const u=l(qn,{show:this.showProgress,percentage:n.percentage||0,status:this.progressStatus}),d=r==="text"||r==="image";return l("div",{class:[`${e}-upload-file`,`${e}-upload-file--${this.progressStatus}-status`,n.url&&n.status!=="error"&&r!=="image-card"&&`${e}-upload-file--with-url`,`${e}-upload-file--${r}-type`]},l("div",{class:`${e}-upload-file-info`},i,l("div",{class:`${e}-upload-file-info__name`},d&&(n.url&&n.status!=="error"?l("a",{rel:"noopener noreferer",target:"_blank",href:n.url||void 0,onClick:this.handlePreviewClick},n.name):l("span",{onClick:this.handlePreviewClick},n.name)),s&&u),l("div",{class:[`${e}-upload-file-info__action`,`${e}-upload-file-info__action--${r}-type`]},this.showPreviewButton?l(xe,{key:"preview",quaternary:!0,type:this.buttonType,onClick:this.handlePreviewClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:Ue},{icon:()=>l(ae,{clsPrefix:e},{default:()=>l(Fr,null)})}):null,(this.showRemoveButton||this.showCancelButton)&&!this.disabled&&l(xe,{key:"cancelOrTrash",theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,quaternary:!0,builtinThemeOverrides:Ue,type:this.buttonType,onClick:this.handleRemoveOrCancelClick},{icon:()=>l(Tt,null,{default:()=>this.showRemoveButton?l(ae,{clsPrefix:e,key:"trash"},{default:()=>l(dn,null)}):l(ae,{clsPrefix:e,key:"cancel"},{default:()=>l(ln,null)})})}),this.showRetryButton&&!this.disabled&&l(xe,{key:"retry",quaternary:!0,type:this.buttonType,onClick:this.handleRetryClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:Ue},{icon:()=>l(ae,{clsPrefix:e},{default:()=>l(cn,null)})}),this.showDownloadButton?l(xe,{key:"download",quaternary:!0,type:this.buttonType,onClick:this.handleDownloadClick,theme:t.peers.Button,themeOverrides:t.peerOverrides.Button,builtinThemeOverrides:Ue},{icon:()=>l(ae,{clsPrefix:e},{default:()=>l(Hr,null)})}):null)),!s&&u)}}),Jt=O({name:"UploadTrigger",props:{abstract:Boolean},slots:Object,setup(e,{slots:t}){const r=Ce(_e,null);r||He("upload-trigger","`n-upload-trigger` must be placed inside `n-upload`.");const{mergedClsPrefixRef:n,mergedDisabledRef:o,maxReachedRef:i,listTypeRef:s,dragOverRef:a,openOpenFileDialog:u,draggerInsideRef:d,handleFileAddition:c,mergedDirectoryDndRef:f,triggerClassRef:g,triggerStyleRef:C}=r,b=R(()=>s.value==="image-card");function h(){o.value||i.value||u()}function $(P){P.preventDefault(),a.value=!0}function x(P){P.preventDefault(),a.value=!0}function p(P){P.preventDefault(),a.value=!1}function N(P){var v;if(P.preventDefault(),!d.value||o.value||i.value){a.value=!1;return}const y=(v=P.dataTransfer)===null||v===void 0?void 0:v.items;y!=null&&y.length?Wn(Array.from(y).map(T=>T.webkitGetAsEntry()),f.value).then(T=>{c(T)}).finally(()=>{a.value=!1}):a.value=!1}return()=>{var P;const{value:v}=n;return e.abstract?(P=t.default)===null||P===void 0?void 0:P.call(t,{handleClick:h,handleDrop:N,handleDragOver:$,handleDragEnter:x,handleDragLeave:p}):l("div",{class:[`${v}-upload-trigger`,(o.value||i.value)&&`${v}-upload-trigger--disabled`,b.value&&`${v}-upload-trigger--image-card`,g.value],style:C.value,onClick:h,onDrop:N,onDragover:$,onDragenter:x,onDragleave:p},b.value?l(Un,null,{default:()=>Br(t.default,()=>[l(ae,{clsPrefix:v},{default:()=>l(sn,null)})])}):t)}}}),Yn=O({name:"UploadFileList",setup(e,{slots:t}){const r=Ce(_e,null);r||He("upload-file-list","`n-upload-file-list` must be placed inside `n-upload`.");const{abstractRef:n,mergedClsPrefixRef:o,listTypeRef:i,mergedFileListRef:s,fileListClassRef:a,fileListStyleRef:u,cssVarsRef:d,themeClassRef:c,maxReachedRef:f,showTriggerRef:g,imageGroupPropsRef:C}=r,b=R(()=>i.value==="image-card"),h=()=>s.value.map((x,p)=>l(Xn,{clsPrefix:o.value,key:x.id,file:x,index:p,listType:i.value})),$=()=>b.value?l(Kr,Object.assign({},C.value),{default:h}):l(Mt,{group:!0},{default:h});return()=>{const{value:x}=o,{value:p}=n;return l("div",{class:[`${x}-upload-file-list`,b.value&&`${x}-upload-file-list--grid`,p?c==null?void 0:c.value:void 0,a.value],style:[p&&d?d.value:"",u.value]},$(),g.value&&!f.value&&b.value&&l(Jt,null,t))}}});var $t=function(e,t,r,n){function o(i){return i instanceof r?i:new r(function(s){s(i)})}return new(r||(r=Promise))(function(i,s){function a(c){try{d(n.next(c))}catch(f){s(f)}}function u(c){try{d(n.throw(c))}catch(f){s(f)}}function d(c){c.done?i(c.value):o(c.value).then(a,u)}d((n=n.apply(e,t||[])).next())})};function Qn(e,t,r){const{doChange:n,xhrMap:o}=e;let i=0;function s(u){var d;let c=Object.assign({},t,{status:"error",percentage:i});o.delete(t.id),c=Ee(((d=e.onError)===null||d===void 0?void 0:d.call(e,{file:c,event:u}))||c),n(c,u)}function a(u){var d;if(e.isErrorState){if(e.isErrorState(r)){s(u);return}}else if(r.status<200||r.status>=300){s(u);return}let c=Object.assign({},t,{status:"finished",percentage:i});o.delete(t.id),c=Ee(((d=e.onFinish)===null||d===void 0?void 0:d.call(e,{file:c,event:u}))||c),n(c,u)}return{handleXHRLoad:a,handleXHRError:s,handleXHRAbort(u){const d=Object.assign({},t,{status:"removed",file:null,percentage:i});o.delete(t.id),n(d,u)},handleXHRProgress(u){const d=Object.assign({},t,{status:"uploading"});if(u.lengthComputable){const c=Math.ceil(u.loaded/u.total*100);d.percentage=c,i=c}n(d,u)}}}function Zn(e){const{inst:t,file:r,data:n,headers:o,withCredentials:i,action:s,customRequest:a}=e,{doChange:u}=e.inst;let d=0;a({file:r,data:n,headers:o,withCredentials:i,action:s,onProgress(c){const f=Object.assign({},r,{status:"uploading"}),g=c.percent;f.percentage=g,d=g,u(f)},onFinish(){var c;let f=Object.assign({},r,{status:"finished",percentage:d});f=Ee(((c=t.onFinish)===null||c===void 0?void 0:c.call(t,{file:f}))||f),u(f)},onError(){var c;let f=Object.assign({},r,{status:"error",percentage:d});f=Ee(((c=t.onError)===null||c===void 0?void 0:c.call(t,{file:f}))||f),u(f)}})}function eo(e,t,r){const n=Qn(e,t,r);r.onabort=n.handleXHRAbort,r.onerror=n.handleXHRError,r.onload=n.handleXHRLoad,r.upload&&(r.upload.onprogress=n.handleXHRProgress)}function Xt(e,t){return typeof e=="function"?e({file:t}):e||{}}function to(e,t,r){const n=Xt(t,r);n&&Object.keys(n).forEach(o=>{e.setRequestHeader(o,n[o])})}function ro(e,t,r){const n=Xt(t,r);n&&Object.keys(n).forEach(o=>{e.append(o,n[o])})}function no(e,t,r,{method:n,action:o,withCredentials:i,responseType:s,headers:a,data:u}){const d=new XMLHttpRequest;d.responseType=s,e.xhrMap.set(r.id,d),d.withCredentials=i;const c=new FormData;if(ro(c,u,r),r.file!==null&&c.append(t,r.file),eo(e,r,d),o!==void 0){d.open(n.toUpperCase(),o),to(d,a,r),d.send(c);const f=Object.assign({},r,{status:"uploading"});e.doChange(f)}}const oo=Object.assign(Object.assign({},oe.props),{name:{type:String,default:"file"},accept:String,action:String,customRequest:Function,directory:Boolean,directoryDnd:{type:Boolean,default:void 0},method:{type:String,default:"POST"},multiple:Boolean,showFileList:{type:Boolean,default:!0},data:[Object,Function],headers:[Object,Function],withCredentials:Boolean,responseType:{type:String,default:""},disabled:{type:Boolean,default:void 0},onChange:Function,onRemove:Function,onFinish:Function,onError:Function,onRetry:Function,onBeforeUpload:Function,isErrorState:Function,onDownload:Function,customDownload:Function,defaultUpload:{type:Boolean,default:!0},fileList:Array,"onUpdate:fileList":[Function,Array],onUpdateFileList:[Function,Array],fileListClass:String,fileListStyle:[String,Object],defaultFileList:{type:Array,default:()=>[]},showCancelButton:{type:Boolean,default:!0},showRemoveButton:{type:Boolean,default:!0},showDownloadButton:Boolean,showRetryButton:{type:Boolean,default:!0},showPreviewButton:{type:Boolean,default:!0},listType:{type:String,default:"text"},onPreview:Function,shouldUseThumbnailUrl:{type:Function,default:e=>Hn?Wt(e):!1},createThumbnailUrl:Function,abstract:Boolean,max:Number,showTrigger:{type:Boolean,default:!0},imageGroupProps:Object,inputProps:Object,triggerClass:String,triggerStyle:[String,Object],renderIcon:Function}),ji=O({name:"Upload",props:oo,setup(e){e.abstract&&e.listType==="image-card"&&He("upload","when the list-type is image-card, abstract is not supported.");const{mergedClsPrefixRef:t,inlineThemeDisabled:r,mergedRtlRef:n}=ce(e),o=oe("Upload","-upload",On,_r,e,t),i=ct("Upload",n,t),s=dt(e),a=L(e.defaultFileList),u=F(e,"fileList"),d=L(null),c={value:!1},f=L(!1),g=new Map,C=pt(u,a),b=R(()=>C.value.map(Ee)),h=R(()=>{const{max:w}=e;return w!==void 0?b.value.length>=w:!1});function $(){var w;(w=d.value)===null||w===void 0||w.click()}function x(w){const k=w.target;v(k.files?Array.from(k.files).map(A=>({file:A,entry:null,source:"input"})):null,w),k.value=""}function p(w){const{"onUpdate:fileList":k,onUpdateFileList:A}=e;k&&Z(k,w),A&&Z(A,w),a.value=w}const N=R(()=>e.multiple||e.directory),P=(w,k,A={append:!1,remove:!1})=>{const{append:V,remove:E}=A,W=Array.from(b.value),z=W.findIndex(_=>_.id===w.id);if(V||E||~z){V?W.push(w):E?W.splice(z,1):W.splice(z,1,w);const{onChange:_}=e;_&&_({file:w,fileList:W,event:k}),p(W)}};function v(w,k){if(!w||w.length===0)return;const{onBeforeUpload:A}=e;w=N.value?w:[w[0]];const{max:V,accept:E}=e;w=w.filter(({file:z,source:_})=>_==="dnd"&&(E!=null&&E.trim())?Jn(z.name,z.type,E):!0),V&&(w=w.slice(0,V-b.value.length));const W=nt();Promise.all(w.map(z=>$t(this,[z],void 0,function*({file:_,entry:ee}){var te;const re={id:nt(),batchId:W,name:_.name,status:"pending",percentage:0,file:_,url:null,type:_.type,thumbnailUrl:null,fullPath:(te=ee==null?void 0:ee.fullPath)!==null&&te!==void 0?te:`/${_.webkitRelativePath||_.name}`};return!A||(yield A({file:re,fileList:b.value}))!==!1?re:null}))).then(z=>$t(this,void 0,void 0,function*(){let _=Promise.resolve();z.forEach(ee=>{_=_.then(Nr).then(()=>{ee&&P(ee,k,{append:!0})})}),yield _})).then(()=>{e.defaultUpload&&y()})}function y(w){const{method:k,action:A,withCredentials:V,headers:E,data:W,name:z}=e,_=w!==void 0?b.value.filter(te=>te.id===w):b.value,ee=w!==void 0;_.forEach(te=>{const{status:re}=te;(re==="pending"||re==="error"&&ee)&&(e.customRequest?Zn({inst:{doChange:P,xhrMap:g,onFinish:e.onFinish,onError:e.onError},file:te,action:A,withCredentials:V,headers:E,data:W,customRequest:e.customRequest}):no({doChange:P,xhrMap:g,onFinish:e.onFinish,onError:e.onError,isErrorState:e.isErrorState},z,te,{method:k,action:A,withCredentials:V,responseType:e.responseType,headers:E,data:W}))})}function T(w){var k;if(w.thumbnailUrl)return w.thumbnailUrl;const{createThumbnailUrl:A}=e;return A?(k=A(w.file,w))!==null&&k!==void 0?k:w.url||"":w.url?w.url:w.file?Vn(w.file):""}const U=R(()=>{const{common:{cubicBezierEaseInOut:w},self:{draggerColor:k,draggerBorder:A,draggerBorderHover:V,itemColorHover:E,itemColorHoverError:W,itemTextColorError:z,itemTextColorSuccess:_,itemTextColor:ee,itemIconColor:te,itemDisabledOpacity:re,lineHeight:We,borderRadius:Je,fontSize:Xe,itemBorderImageCardError:Ye,itemBorderImageCard:Qe}}=o.value;return{"--n-bezier":w,"--n-border-radius":Je,"--n-dragger-border":A,"--n-dragger-border-hover":V,"--n-dragger-color":k,"--n-font-size":Xe,"--n-item-color-hover":E,"--n-item-color-hover-error":W,"--n-item-disabled-opacity":re,"--n-item-icon-color":te,"--n-item-text-color":ee,"--n-item-text-color-error":z,"--n-item-text-color-success":_,"--n-line-height":We,"--n-item-border-image-card-error":Ye,"--n-item-border-image-card":Qe}}),j=r?Ie("upload",void 0,U,e):void 0;Ve(_e,{mergedClsPrefixRef:t,mergedThemeRef:o,showCancelButtonRef:F(e,"showCancelButton"),showDownloadButtonRef:F(e,"showDownloadButton"),showRemoveButtonRef:F(e,"showRemoveButton"),showRetryButtonRef:F(e,"showRetryButton"),onRemoveRef:F(e,"onRemove"),onDownloadRef:F(e,"onDownload"),customDownloadRef:F(e,"customDownload"),mergedFileListRef:b,triggerClassRef:F(e,"triggerClass"),triggerStyleRef:F(e,"triggerStyle"),shouldUseThumbnailUrlRef:F(e,"shouldUseThumbnailUrl"),renderIconRef:F(e,"renderIcon"),xhrMap:g,submit:y,doChange:P,showPreviewButtonRef:F(e,"showPreviewButton"),onPreviewRef:F(e,"onPreview"),getFileThumbnailUrlResolver:T,listTypeRef:F(e,"listType"),dragOverRef:f,openOpenFileDialog:$,draggerInsideRef:c,handleFileAddition:v,mergedDisabledRef:s.mergedDisabledRef,maxReachedRef:h,fileListClassRef:F(e,"fileListClass"),fileListStyleRef:F(e,"fileListStyle"),abstractRef:F(e,"abstract"),acceptRef:F(e,"accept"),cssVarsRef:r?void 0:U,themeClassRef:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender,showTriggerRef:F(e,"showTrigger"),imageGroupPropsRef:F(e,"imageGroupProps"),mergedDirectoryDndRef:R(()=>{var w;return(w=e.directoryDnd)!==null&&w!==void 0?w:e.directory}),onRetryRef:F(e,"onRetry")});const X={clear:()=>{a.value=[]},submit:y,openOpenFileDialog:$};return Object.assign({mergedClsPrefix:t,draggerInsideRef:c,rtlEnabled:i,inputElRef:d,mergedTheme:o,dragOver:f,mergedMultiple:N,cssVars:r?void 0:U,themeClass:j==null?void 0:j.themeClass,onRender:j==null?void 0:j.onRender,handleFileInputChange:x},X)},render(){var e,t;const{draggerInsideRef:r,mergedClsPrefix:n,$slots:o,directory:i,onRender:s}=this;if(o.default&&!this.abstract){const u=o.default()[0];!((e=u==null?void 0:u.type)===null||e===void 0)&&e[Gt]&&(r.value=!0)}const a=l("input",Object.assign({},this.inputProps,{ref:"inputElRef",type:"file",class:`${n}-upload-file-input`,accept:this.accept,multiple:this.mergedMultiple,onChange:this.handleFileInputChange,webkitdirectory:i||void 0,directory:i||void 0}));return this.abstract?l(Oe,null,(t=o.default)===null||t===void 0?void 0:t.call(o),l(Ir,{to:"body"},a)):(s==null||s(),l("div",{class:[`${n}-upload`,this.rtlEnabled&&`${n}-upload--rtl`,r.value&&`${n}-upload--dragger-inside`,this.dragOver&&`${n}-upload--drag-over`,this.themeClass],style:this.cssVars},a,this.showTrigger&&this.listType!=="image-card"&&l(Jt,null,o),this.showFileList&&l(Yn,null,o)))}}),et=new Map;function tt(e){return q({url:"/microApp/getList",data:e||{}})}function io(e){return q({url:"/microApp/downloadAndRead",data:e})}function Fi(e,t){return Xr("/microApp/network/templateProxy",e,t)}function qi(e,t,r){return q({url:"/microApp/dataNode/user/getByKey",headers:de(e),data:{node:t,key:r}})}function Vi(e,t,r){return q({url:"/microApp/dataNode/user/getByKeys",headers:de(e),data:{node:t,keys:r}})}function Hi(e,t,r){return q({url:"/microApp/dataNode/app/getByKey",headers:de(e),data:{node:t,key:r}})}function Gi(e,t,r){return q({url:"/microApp/dataNode/app/getByKeys",headers:de(e),data:{node:t,keys:r}})}function Ki(e,t,r,n){return q({url:"/microApp/dataNode/user/saveByKey",headers:de(e),data:{node:t,key:r,value:n}})}function Wi(e,t,r){return q({url:"/microApp/dataNode/user/saveByKeys",headers:de(e),data:{node:t,items:r}})}function Ji(e,t,r){return q({url:"/microApp/dataNode/user/removeByKey",headers:de(e),data:{node:t,key:r}})}function Xi(e,t,r,n){return q({url:"/microApp/dataNode/app/saveByKey",headers:de(e),data:{node:t,key:r,value:n}})}function Yi(e,t,r){return q({url:"/microApp/dataNode/app/saveByKeys",headers:de(e),data:{node:t,items:r}})}function Qi(e,t,r){return q({url:"/microApp/dataNode/app/removeByKey",headers:de(e),data:{node:t,key:r}})}function Zi(e){const t=et.get(e);if(t)return t;const r=q({url:"/microApp/getByMicroAppId",data:{microAppId:e}}).finally(()=>{et.delete(e)});return et.set(e,r),r}function de(e){return{microAppId:e}}const ye=new Map,rt=new Map,be="zh-CN";function gt(){try{const t=localStorage.getItem("appSetting");if(t){const r=JSON.parse(t),n=r.data||r;if(n.language)return n.language}}catch{}const e=localStorage.getItem("sun-panel-locale");return e||be}async function ht(e,t,r){const n=`${t}:${e}`;if(ye.has(n))return ye.get(n);if(rt.has(n))return rt.get(n);const o=(async()=>{try{if(r&&r[e]){const c=r[e];return ye.set(n,c),c}if(r&&r[be]&&e!==be){const c=r[be];return ye.set(n,c),c}const i=/\.(js|ts|mjs|cjs|vue|jsx|tsx)(\?.*)?$/i;let s;i.test(t)?s=`${t.replace(/\/[^/]*$/,"").replace(/\/(src|dist)$/,"")}/locales/${e}.json`:s=`${t.replace(/\/+$/,"")}/locales/${e}.json`;const a=await fetch(s);if(!a.ok)throw new Error(`Failed to load translation file: ${s} (status: ${a.status})`);if((a.headers.get("content-type")||"").includes("text/html"))throw new Error(`Translation URL returned HTML instead of JSON: ${s} (baseUrl: ${t}). For dev micro-apps, ensure the translation files are accessible on the dev server.`);const d=await a.json();return ye.set(n,d),d}catch(i){return console.error(`[MicroApp-i18n] Failed to load translation file for locale ${e}:`,i),e!==be?ht(be,t,r):{}}})();return rt.set(n,o),o}function Ge(e,t){return!e||typeof e!="string"?e:e.replace(/\$t:([A-Z_]+)/g,(r,n)=>t[n]?t[n]:(console.warn(`[MicroApp-i18n] Translation key not found: ${n}`),r))}function it(e,t){if(e==null)return e;if(typeof e=="string")return Ge(e,t);if(Array.isArray(e))return e.map(r=>it(r,t));if(typeof e=="object"){const r={};for(const[n,o]of Object.entries(e))r[n]=it(o,t);return r}return e}async function es(e,t){const r=gt(),n=await ht(r,e,t);return{resolve:o=>it(o,n),resolveString:o=>Ge(o,n),getLocale:()=>r}}function ke(e){if(!e)return!1;const t=Object.values(e);return t.length>0&&t.every(r=>typeof r=="string"&&r.startsWith("$t:"))}async function so(e,t,r,n){if(!e||!ke(e))return e;const o=r||gt(),i=await ht(o,t,n),s={};for(const[a,u]of Object.entries(e))typeof u=="string"?s[a]=Ge(u,i):s[a]=u;return s}function ao(e,t,r,n){if(!e||!ke(e))return e;const o=r||gt(),i=`${t}:${o}`;let s=ye.get(i);if(!s&&n&&(n[o]?(s=n[o],ye.set(i,s)):n[be]&&(s=n[be],ye.set(i,s))),!s)return e;const a={};for(const[u,d]of Object.entries(e))typeof d=="string"?a[u]=Ge(d,s):a[u]=d;return a}function Yt(e){var t;return((t=e.appJson)==null?void 0:t.appJsonVersion)||"1.0"}function Qt(e){var r;const t=(r=e.appJson)==null?void 0:r._translations;if(t&&typeof t=="object"&&Object.keys(t).length>0)return t}function Ke(e,t){if(!(t!=null&&t.appInfo))return null;const r=t.appInfo;if(Yt(t)==="1.1"){const s=r.default;if(s&&ke(s)){const a=t.runPathUrl||t.src||"";if(a){const u=Qt(t),d=ao(s,a,e,u);if(d!==s)return d}return s}}if(r[e])return r[e];const o=["en-US","zh-CN","en","default"];for(const s of o)if(r[s])return r[s];const i=Object.keys(r)[0];return i?r[i]:null}async function lo(e,t,r){const n=t.default;if(!n||!ke(n))return Ke(e,r);const o=r.runPathUrl||r.src||"";if(!o)return console.warn("[appInfoHelper] No baseUrl found for v1.1 app, returning raw defaultInfo"),n;try{const i=Qt(r);return await so(n,o,e,i)}catch(i){return console.warn("[appInfoHelper] Failed to resolve appInfo i18n:",i),n}}async function co(e,t){return t!=null&&t.appInfo?Yt(t)==="1.1"?lo(e,t.appInfo,t):Ke(e,t):null}function uo(e){if(e.iconBase64)return e.iconBase64;if(e.runPathUrl)return`${e.runPathUrl}/${e.icon}`;if(e.src&&/^https?:\/\/[^/]+\/.+\.js$/i.test(e.src))try{return`${new URL(e.src).origin}/${e.icon}`}catch{}return`${e.src}/${e.icon}`}const fo="1.0.16",po="1.1";function Fe(e){return e?e.split(".").map(t=>Number.parseInt(t,10)||0):[]}function go(e,t=fo){if(!e)return{compatible:!0};const r=Fe(e),n=Fe(t);return r.length>0&&n.length>0&&r[0]!==n[0]?{compatible:!1,message:`微应用 apiVersion ${e} 的主版本(${r[0]}) 与平台版本(${n[0]}) 不一致，版本不兼容`,type:"apiVersion"}:r.length>1&&n.length>1&&r[1]>n[1]?{compatible:!1,message:`微应用 apiVersion ${e} 的次版本(${r[1]}) 大于平台支持的版本(${n[1]})，版本不兼容`,type:"apiVersion"}:{compatible:!0}}function ho(e,t=po){if(!e)return{compatible:!0};const r=Fe(e),n=Fe(t);return r.length>0&&n.length>0&&r[0]>n[0]?{compatible:!1,message:`微应用 appJsonVersion ${e} 的主版本(${r[0]}) 大于平台支持的版本(${n[0]})，版本不兼容`,type:"appJsonVersion"}:{compatible:!0}}function mo(e,t){const r=go(e||"");if(!r.compatible)return r;const n=ho(t||"");return n.compatible?{compatible:!0}:n}const mt=O({__name:"index",props:{title:{},show:{type:Boolean},size:{}},emits:["update:show"],setup(e,{emit:t}){const r=e,n=t,o=Et(),i=R(()=>({class:o.class||"",style:o.style||""})),s=R({get:()=>r.show,set:a=>{n("update:show",a)}});return(a,u)=>(G(),ge(I(zr),Le({show:s.value,"onUpdate:show":u[0]||(u[0]=d=>s.value=d),preset:"card",size:e.size},i.value,{style:[{"border-radius":"1rem"},a.$parent],title:e.title}),{cover:K(()=>[fe(a.$slots,"cover")]),header:K(()=>[fe(a.$slots,"header")]),"eader-extra":K(()=>[fe(a.$slots,"header-extra")]),footer:K(()=>[fe(a.$slots,"footer")]),action:K(()=>[fe(a.$slots,"action")]),default:K(()=>[fe(a.$slots,"default")]),_:3},16,["show","size","style","title"]))}}),ts=O({__name:"index",props:{icon:{},content:{},text:{},size:{},type:{}},setup(e){return(t,r)=>(G(),ge(I(Wr),null,{trigger:K(()=>[J(I(Me),{size:e.size,style:{"border-radius":"10px","font-weight":"800"},type:e.type},{icon:K(()=>[fe(t.$slots,"icon",{},()=>[e.icon?(G(),ge(I(Jr),{key:0,icon:e.icon},null,8,["icon"])):ie("",!0)])]),default:K(()=>[se(" "+Y(e.text||""),1)]),_:3},8,["size","type"])]),default:K(()=>[fe(t.$slots,"default",{},()=>[se(Y(e.content),1)])]),_:3}))}}),rs=O({__name:"index",props:{icon:{}},setup(e){const t=Et(),r=R(()=>({class:t.class||"",style:t.style||""}));return(n,o)=>(G(),ge(I(Lr),Le({icon:e.icon??""},r.value),null,16,["icon"]))}});function vo(){return q({url:"/panel/microAppStore/getIframeLoginVerifyCode"})}function ns(){return q({url:"/panel/microAppStore/getAllInstalledAppInfo",data:{}})}function os(){return q({url:"/panel/microAppStore/getAllInstalledDeveloperInfo",data:{}})}function is(){return q({url:"/panel/microAppStore/forceRefreshStoreInfo",data:{}})}const Q=[];for(let e=0;e<256;++e)Q.push((e+256).toString(16).slice(1));function yo(e,t=0){return(Q[e[t+0]]+Q[e[t+1]]+Q[e[t+2]]+Q[e[t+3]]+"-"+Q[e[t+4]]+Q[e[t+5]]+"-"+Q[e[t+6]]+Q[e[t+7]]+"-"+Q[e[t+8]]+Q[e[t+9]]+"-"+Q[e[t+10]]+Q[e[t+11]]+Q[e[t+12]]+Q[e[t+13]]+Q[e[t+14]]+Q[e[t+15]]).toLowerCase()}const bo=new Uint8Array(16);function xo(){return crypto.getRandomValues(bo)}function Pt(e,t,r){return crypto.randomUUID?crypto.randomUUID():wo(e)}function wo(e,t,r){var o;e=e||{};const n=e.random??((o=e.rng)==null?void 0:o.call(e))??xo();if(n.length<16)throw new Error("Random bytes length must be >= 16");return n[6]=n[6]&15|64,n[8]=n[8]&63|128,yo(n)}class Ro{constructor(t=!1){le(this,"pendingRequests",new Map);le(this,"debug");this.debug=t}addRequest(t){const{message:r}=t;this.pendingRequests.set(r.id,t),this.debug&&console.log(`[RetryManager] Added request: ${r.id}, event: ${r.event}`)}removeRequest(t){const r=this.pendingRequests.get(t);r&&(r.timeoutId&&clearTimeout(r.timeoutId),r.retryId&&clearTimeout(r.retryId),this.pendingRequests.delete(t),this.debug&&console.log(`[RetryManager] Removed request: ${t}`))}getRequest(t){return this.pendingRequests.get(t)}hasRequest(t){return this.pendingRequests.has(t)}handleResponse(t){const{requestId:r}=t;if(!r)return!1;const n=this.pendingRequests.get(r);return n?(n.timeoutId&&clearTimeout(n.timeoutId),n.retryId&&clearTimeout(n.retryId),t.type==="error"?n.reject(new Error(t.error||"Request failed")):n.resolve(t.data),this.pendingRequests.delete(r),this.debug&&console.log(`[RetryManager] Handled response for request: ${r}`),!0):(this.debug&&console.log(`[RetryManager] No pending request for response: ${r}`),!1)}startTimeout(t,r,n){const o=this.pendingRequests.get(t);o&&(o.timeoutId&&clearTimeout(o.timeoutId),o.timeoutId=setTimeout(()=>{this.debug&&console.log(`[RetryManager] Request timeout: ${t}, timeout: ${r}ms`),n(o.message)},r))}startRetry(t,r,n){const o=this.pendingRequests.get(t);if(!o)return;o.retryId&&clearTimeout(o.retryId);const i=r*Math.pow(2,o.retryCount);o.retryId=setTimeout(()=>{this.debug&&console.log(`[RetryManager] Retrying request: ${t}, attempt: ${o.retryCount+1}, delay: ${i}ms`),o.retryCount++,n(o.message)},i)}clear(){this.pendingRequests.forEach((t,r)=>{t.timeoutId&&clearTimeout(t.timeoutId),t.retryId&&clearTimeout(t.retryId)}),this.pendingRequests.clear(),this.debug&&console.log("[RetryManager] Cleared all pending requests")}getPendingCount(){return this.pendingRequests.size}getPendingIds(){return Array.from(this.pendingRequests.keys())}}function ko(e,t){const{origin:r}=e;return t==="*"?!0:Array.isArray(t)?t.includes(r):r===t}function Co(e){if(!e||typeof e!="object")return!1;const t=["id","type","event","source","timestamp"];for(const o of t)if(!(o in e))return!1;if(typeof e.id!="string"||e.id.length===0||!["event","request","response","error"].includes(e.type)||typeof e.event!="string"||e.event.length===0||typeof e.source!="string"||typeof e.timestamp!="number")return!1;const r=Date.now(),n=3600*1e3;return!(Math.abs(r-e.timestamp)>n)}function je(){const e=Date.now().toString(36),t=Math.random().toString(36).substring(2,8);return`${e}-${t}`}function So(){return`corr-${Date.now()}-${Math.random().toString(36).substring(2,8)}`}function $o(e){return typeof e!="string"?"":e.replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function st(e){if(typeof e!="object"||e===null)return e;if(Array.isArray(e))return e.map(r=>st(r));const t={};for(const[r,n]of Object.entries(e))typeof n=="string"?t[r]=$o(n):typeof n=="object"&&n!==null?t[r]=st(n):t[r]=n;return t}function Po(e,t){return ko(e,t)?Co(e.data)?{valid:!0,message:st(e.data)}:{valid:!1,error:"Invalid message format"}:{valid:!1,error:`Invalid origin: ${e.origin}`}}const Do={targetOrigin:"*",timeout:5e3,maxRetries:3,retryDelay:1e3,isIframe:!1,sourceId:"main",debug:!1,postMessageKey:""},he={EVENT:"event",REQUEST:"request",RESPONSE:"response",ERROR:"error"};class Ao{constructor(t){le(this,"config");le(this,"retryManager");le(this,"eventListeners",new Map);le(this,"requestHandlers",new Map);le(this,"quickRequestHandlers",new Map);le(this,"targetWindows",new Map);le(this,"isDestroyed",!1);this.config={...Do,...t},this.retryManager=new Ro(this.config.debug),this.handleMessage=this.handleMessage.bind(this),window.addEventListener("message",this.handleMessage),this.config.debug&&console.log("[IframeChannel] Initialized with config:",this.config)}registerTarget(t,r){this.targetWindows.set(t,r),this.config.debug&&console.log(`[IframeChannel] Registered target: ${t}`)}unregisterTarget(t){this.targetWindows.delete(t),this.config.debug&&console.log(`[IframeChannel] Unregistered target: ${t}`)}getTarget(t){return this.targetWindows.get(t)}send(t,r,n){if(this.isDestroyed)throw new Error("Channel is destroyed");const o=this.targetWindows.get(t);if(!o)throw new Error(`Target not found: ${t}`);const i={id:je(),type:he.EVENT,event:r,data:n,source:this.config.sourceId,target:t,timestamp:Date.now(),needResponse:!1,postMessageKey:this.config.postMessageKey};this.postMessage(o,i),this.config.debug&&console.log(`[IframeChannel] Sent event to ${t}:`,i)}request(t,r,n,o){if(this.isDestroyed)return Promise.reject(new Error("Channel is destroyed"));const i=this.targetWindows.get(t);if(!i)return Promise.reject(new Error(`Target not found: ${t}`));const s=je(),a=So(),u=(o==null?void 0:o.timeout)??this.config.timeout,d=(o==null?void 0:o.maxRetries)??this.config.maxRetries,c=(o==null?void 0:o.retryDelay)??this.config.retryDelay,f={id:s,type:he.REQUEST,event:r,data:n,source:this.config.sourceId,target:t,timestamp:Date.now(),requestId:s,needResponse:!0,timeout:u,retryCount:0,maxRetries:d,retryDelay:c,correlationId:a,postMessageKey:this.config.postMessageKey};return new Promise((g,C)=>{const b={message:f,resolve:g,reject:C,retryCount:0};this.retryManager.addRequest(b),this.retryManager.startTimeout(s,u,h=>{this.handleTimeout(h)}),this.postMessage(i,f),this.config.debug&&console.log(`[IframeChannel] Sent request to ${t}:`,f)})}on(t,r,n=!1){if(this.isDestroyed)throw new Error("Channel is destroyed");const o=this.eventListeners.get(t)||[],i={event:t,handler:r,once:n};return o.push(i),this.eventListeners.set(t,o),this.config.debug&&console.log(`[IframeChannel] Added listener for event: ${t}`),()=>{this.off(t,r)}}once(t,r){return this.on(t,r,!0)}off(t,r){const n=this.eventListeners.get(t);if(n){const o=n.findIndex(i=>i.handler===r);o!==-1&&(n.splice(o,1),n.length===0&&this.eventListeners.delete(t))}this.config.debug&&console.log(`[IframeChannel] Removed listener for event: ${t}`)}onRequest(t,r){if(this.isDestroyed)throw new Error("Channel is destroyed");this.requestHandlers.set(t,r),this.config.debug&&console.log(`[IframeChannel] Registered request handler for event: ${t}`)}onQuickRequest(t,r){if(this.isDestroyed)throw new Error("Channel is destroyed");this.quickRequestHandlers.set(t,r),this.config.debug&&console.log(`[IframeChannel] Registered quick reply handler for event: ${t}`)}offRequest(t){this.requestHandlers.delete(t),this.quickRequestHandlers.delete(t),this.config.debug&&console.log(`[IframeChannel] Removed request handler for event: ${t}`)}handleMessage(t){if(this.isDestroyed)return;const r=Po(t,this.config.targetOrigin);if(!r.valid){this.config.debug&&console.warn("[IframeChannel] Invalid message:",r.error);return}const n=r.message;if(this.config.postMessageKey&&n.postMessageKey!==this.config.postMessageKey){this.config.debug&&console.warn("[IframeChannel] Invalid postMessageKey:",n.postMessageKey);return}if(n.type===he.RESPONSE||n.type===he.ERROR){this.retryManager.handleResponse(n);return}if(n.type===he.REQUEST){t.source&&this.handleRequestMessage(n,t.source);return}n.type===he.EVENT&&this.handleEventMessage(n)}handleEventMessage(t){const r=this.eventListeners.get(t.event);r&&(r.forEach(o=>{try{o.handler(t.data)}catch(i){console.error("[IframeChannel] Error in event handler:",i)}}),r.filter(o=>o.once).forEach(o=>{this.off(t.event,o.handler)})),this.config.debug&&console.log(`[IframeChannel] Handled event: ${t.event}`)}async handleRequestMessage(t,r){const n=this.quickRequestHandlers.get(t.event);if(n){try{const i={reply:s=>{this.sendResponse(r,t,s)},replyError:s=>{this.sendErrorResponse(r,t,s)},message:t};await n(t.data,i)}catch(i){const s=i instanceof Error?i.message:String(i);this.sendErrorResponse(r,t,s)}this.config.debug&&console.log(`[IframeChannel] Handled quick request: ${t.event}`);return}const o=this.requestHandlers.get(t.event);if(!o){this.sendErrorResponse(r,t,`No handler registered for event: ${t.event}`);return}try{const i=await o(t.data);this.sendResponse(r,t,i)}catch(i){const s=i instanceof Error?i.message:String(i);this.sendErrorResponse(r,t,s)}this.config.debug&&console.log(`[IframeChannel] Handled request: ${t.event}`)}sendResponse(t,r,n){const o={id:je(),type:he.RESPONSE,event:r.event,data:n,source:this.config.sourceId,target:r.source,timestamp:Date.now(),requestId:r.id,postMessageKey:r.postMessageKey};this.postMessage(t,o)}sendErrorResponse(t,r,n){const o={id:je(),type:he.ERROR,event:r.event,error:n,source:this.config.sourceId,target:r.source,timestamp:Date.now(),requestId:r.id,postMessageKey:r.postMessageKey};this.postMessage(t,o)}handleTimeout(t){const r=this.retryManager.getRequest(t.id);r&&(r.retryCount<(t.maxRetries||this.config.maxRetries)?this.retryManager.startRetry(t.id,t.retryDelay||this.config.retryDelay,n=>{this.retryMessage(n)}):(r.reject(new Error(`Request timeout after ${t.maxRetries||this.config.maxRetries} retries`)),this.retryManager.removeRequest(t.id)))}retryMessage(t){const r=this.targetWindows.get(t.target);if(!r){const o=this.retryManager.getRequest(t.id);o&&(o.reject(new Error(`Target not found: ${t.target}`)),this.retryManager.removeRequest(t.id));return}const n={...t,timestamp:Date.now(),retryCount:t.retryCount||0};this.retryManager.startTimeout(t.id,t.timeout||this.config.timeout,o=>{this.handleTimeout(o)}),this.postMessage(r,n),this.config.debug&&console.log(`[IframeChannel] Retried message: ${t.id}, attempt: ${n.retryCount}`)}postMessage(t,r){t.postMessage(r,this.config.targetOrigin)}destroy(){this.isDestroyed||(this.isDestroyed=!0,window.removeEventListener("message",this.handleMessage),this.retryManager.clear(),this.eventListeners.clear(),this.requestHandlers.clear(),this.quickRequestHandlers.clear(),this.targetWindows.clear(),this.config.debug&&console.log("[IframeChannel] Channel destroyed"))}}function To(e){return new Ao(e)}function Bo(...e){}function ue(e,...t){Bo(`[${e}]`,...t)}async function Io(e,t,r){var u,d,c;let n;const o=Object.values(e.appInfo)[0];if(ke(e.appInfo))n={default:e.appInfo};else if(typeof o=="string")n={default:e.appInfo};else{n={};for(const[f,g]of Object.entries(e.appInfo))g!==void 0&&(n[f]=g)}const i={network:{allowedDomains:e.networkDomains||[],isTrustAllDomains:!1},dataNode:{allowedDataNodes:_o(e.dataNodes||{})},isPublicUse:!1},s=t==null?void 0:t.permissions,a=s?{network:{allowedDomains:[...new Set([...((u=s.network)==null?void 0:u.allowedDomains)||[],...i.network.allowedDomains||[]])],isTrustAllDomains:(d=s.network)==null?void 0:d.isTrustAllDomains},dataNode:{allowedDataNodes:{...i.dataNode.allowedDataNodes,...(c=s.dataNode)==null?void 0:c.allowedDataNodes}},isPublicUse:s.isPublicUse??i.isPublicUse}:i;return{microAppId:e.microAppId,icon:e.icon,appJson:(t==null?void 0:t.appJson)||{},version:e.version,apiVersion:(t==null?void 0:t.apiVersion)||(e==null?void 0:e.apiVersion)||"1.0.0",src:(t==null?void 0:t.src)||e.entry||"",dev:(t==null?void 0:t.dev)||!1,runPath:(t==null?void 0:t.runPath)||"",componentInfo:(t==null?void 0:t.components)||(e==null?void 0:e.components)||null,permissionInfo:a,appInfo:n,author:(t==null?void 0:t.author)||e.author||"",debug:(t==null?void 0:t.debug)||e.debug||!1,runPathUrl:(t==null?void 0:t.runPath)||"",mainPageName:No((t==null?void 0:t.components)||(e==null?void 0:e.components)||null)}}function _o(e){const t={};for(const[r,n]of Object.entries(e))t[r]={scope:n.scope,isPublic:n.isPublic};return t}function No(e){if(!(e!=null&&e.pages))return"";for(const[t,r]of Object.entries(e.pages))if(r.type==="main")return t;return""}const zo={class:"app-info-card"},Lo={class:"flex items-center gap-4 mb-4"},Mo=["src","alt"],Eo={class:"flex-1 min-w-0"},Oo={class:"text-lg font-bold mb-1 truncate"},Uo={class:"text-sm text-gray-600 dark:text-gray-400"},jo={class:"space-y-2 text-sm"},Fo={class:"flex gap-2"},qo={class:"text-gray-500 dark:text-gray-400 flex-shrink-0"},Vo={class:"text-gray-700 dark:text-gray-300"},Ho={class:"flex gap-2"},Go={class:"text-gray-500 dark:text-gray-400 flex-shrink-0"},Ko={class:"text-gray-700 dark:text-gray-300"},Wo={class:"flex gap-2"},Jo={class:"text-gray-500 dark:text-gray-400 flex-shrink-0"},Xo={class:"text-gray-700 dark:text-gray-300 font-mono text-xs"},Yo={key:0,class:"flex gap-2"},Qo={class:"text-gray-500 dark:text-gray-400 flex-shrink-0"},Zo={class:"text-gray-700 dark:text-gray-300"},Zt=O({__name:"AppInfoCard",props:{app:{},showDevTag:{type:Boolean,default:!0}},setup(e){const t=e,r=ft(),n=L(null),o=L(!1),i=R(()=>Ke(r.language,t.app)),s=R(()=>n.value||i.value);we(i,async c=>{if(c&&ke(c)){o.value=!0;try{console.log("[AppInfoCard] Async i18n resolution started:",t.app);const f=await co(r.language,t.app);f&&!ke(f)&&(n.value=f)}catch(f){console.warn("[AppInfoCard] Async i18n resolution failed:",f)}finally{o.value=!1}}else n.value=null},{immediate:!0}),we([()=>t.app,()=>r.language],()=>{n.value=null});const a=R(()=>{var c;return((c=t.app.appJson)==null?void 0:c.author)||t.app.author||ve("components.appInfoCard.unknownAuthor")}),u=R(()=>{var c;return((c=s.value)==null?void 0:c.description)||ve("components.appInfoCard.noDescription")}),d=R(()=>uo(t.app));return(c,f)=>{var g;return G(),ne("div",zo,[B("div",Lo,[B("img",{src:d.value,alt:e.app.microAppId,class:"w-16 h-16 rounded-lg object-cover"},null,8,Mo),B("div",Eo,[B("h3",Oo,[se(Y(((g=s.value)==null?void 0:g.appName)||e.app.microAppId)+" ",1),fe(c.$slots,"suffix")]),B("p",Uo,[se(Y(I(ve)("components.appInfoCard.version"))+": v"+Y(e.app.version)+" ",1),e.showDevTag&&e.app.dev?(G(),ge(I(Me),{key:0,type:"warning",size:"small",round:"",class:"ml-1"},{default:K(()=>[...f[0]||(f[0]=[se(" DEV ",-1)])]),_:1})):ie("",!0),e.app.debug?(G(),ge(I(Me),{key:1,type:"error",size:"small",round:"",class:"ml-1"},{default:K(()=>[...f[1]||(f[1]=[se(" DEBUG ",-1)])]),_:1})):ie("",!0)])])]),B("div",jo,[B("div",Fo,[B("span",qo,Y(I(ve)("components.appInfoCard.description"))+":",1),B("span",Vo,Y(u.value),1)]),B("div",Ho,[B("span",Go,Y(I(ve)("components.appInfoCard.author"))+":",1),B("span",Ko,Y(a.value),1)]),B("div",Wo,[B("span",Jo,Y(I(ve)("components.appInfoCard.id"))+":",1),B("span",Xo,Y(e.app.microAppId),1)]),e.app.apiVersion?(G(),ne("div",Yo,[B("span",Qo,Y(I(ve)("components.appInfoCard.apiVersion"))+":",1),B("span",Zo,Y(e.app.apiVersion),1)])):ie("",!0)])])}}});function ss(e){return q({url:"/admin/microApp/getList",data:{}})}function as(e){return q({url:"/admin/microApp/getByMicroAppId",data:{microAppId:e}})}function ei(e){return q({url:"/admin/microApp/offlineInstall",data:e})}function ti(e,t){return q({url:"/admin/microApp/upgradeMicroAppFromOfflinePackage",data:{microAppInfo:e,offlinePackageName:t}})}function ls(e,t){return q({url:"/admin/microApp/updateNetworkPermission",data:{microAppId:e,permission:t}})}function cs(e){return q({url:"/admin/microApp/uninstall",data:{microAppID:e}})}function ds(e){return q({url:"/admin/microApp/clearData",data:{microAppID:e}})}function us(e){return q({url:"/admin/microApp/importDev",data:e})}function fs(e){return q({url:"/admin/microApp/updateImportDev",data:e})}const ri={key:0},ni={class:"flex justify-end space-x-2"},oi=O({__name:"InstallConfirmDialog",props:{show:{type:Boolean,default:!1},appInfo:{},offlinePackageName:{}},emits:["update:show","installSuccess"],setup(e,{expose:t,emit:r}){const n=e,o=r,i=L(n.show),s=Ot(),a=L(!1);we(()=>n.show,c=>{i.value=c}),we(i,c=>{o("update:show",c)});async function u(){if(!n.offlinePackageName){s.error("缺少安装包名称");return}a.value=!0;try{const c=await ei({offlinePackageName:n.offlinePackageName});c.code===0?(s.success("微应用安装成功"),i.value=!1,o("installSuccess")):s.error(`安装失败: ${c.msg}`)}catch(c){console.error("Install failed:",c),s.error(`安装失败: ${(c==null?void 0:c.msg)||"未知错误"}`)}finally{a.value=!1}}function d(){i.value=!1}return t({open:()=>{i.value=!0},close:()=>{i.value=!1}}),(c,f)=>(G(),ge(I(mt),{show:i.value,"onUpdate:show":f[0]||(f[0]=g=>i.value=g),"mask-closable":!1,style:{width:"500px"},title:"确认安装"},{footer:K(()=>[B("div",ni,[J(I(xe),{onClick:d},{default:K(()=>[...f[1]||(f[1]=[se(" 取消 ",-1)])]),_:1}),J(I(xe),{type:"primary",loading:a.value,onClick:u},{default:K(()=>[...f[2]||(f[2]=[se(" 确定安装 ",-1)])]),_:1},8,["loading"])])]),default:K(()=>[e.appInfo?(G(),ne("div",ri,[J(I(Zt),{app:e.appInfo,class:"mb-4"},null,8,["app"]),J(I(er),{"micro-app-info":e.appInfo},null,8,["micro-app-info"])])):ie("",!0)]),_:1},8,["show"]))}}),ii={key:0,class:"permission-display"},si={key:0,class:"text-base font-semibold mb-3"},ai={key:1,class:"mb-3"},li={class:"flex items-center gap-2 mb-2"},ci={key:0,class:"text-xs text-gray-500 dark:text-gray-400 mb-2 pl-2"},di={key:1,class:"pl-2"},ui={class:"flex flex-wrap gap-1"},fi={key:2,class:"text-xs text-gray-400 pl-2"},er=O({__name:"PermissionDisplay",props:{microAppInfo:{},showTitle:{type:Boolean,default:!0}},setup(e){const t=e,r=ft(),n=R(()=>Ke(r.language,t.microAppInfo)),o=R(()=>{var u,d;if(!((d=(u=t.microAppInfo)==null?void 0:u.permissionInfo)!=null&&d.network))return null;const{isTrustAllDomains:s,allowedDomains:a}=t.microAppInfo.permissionInfo.network;return{isTrustAllDomains:s,domains:a||[]}}),i=R(()=>{var s;return((s=n.value)==null?void 0:s.networkDescription)||""});return(s,a)=>{var u;return(u=e.microAppInfo)!=null&&u.permissionInfo?(G(),ne("div",ii,[e.showTitle?(G(),ne("h4",si," 权限信息 ")):ie("",!0),o.value?(G(),ne("div",ai,[B("div",li,[a[0]||(a[0]=B("span",{class:"text-sm font-medium"},"网络权限",-1)),J(I(Me),{type:o.value.isTrustAllDomains?"warning":"info",size:"small"},{default:K(()=>[se(Y(o.value.isTrustAllDomains?"信任所有域名":"受限访问"),1)]),_:1},8,["type"])]),i.value?(G(),ne("p",ci,Y(i.value),1)):ie("",!0),!o.value.isTrustAllDomains&&o.value.domains.length>0?(G(),ne("div",di,[a[1]||(a[1]=B("p",{class:"text-xs text-gray-500 mb-1"}," 允许的域名: ",-1)),B("div",ui,[(G(!0),ne(Oe,null,Mr(o.value.domains,d=>(G(),ge(I(Me),{key:d,size:"small",type:"default"},{default:K(()=>[se(Y(d),1)]),_:2},1024))),128))])])):o.value.isTrustAllDomains?ie("",!0):(G(),ne("p",fi," 未配置允许的域名 "))])):ie("",!0)])):ie("",!0)}}}),pi={key:0},gi={class:"flex justify-end space-x-2"},hi=O({__name:"UpgradeConfirmDialog",props:{show:{type:Boolean},appInfo:{},installedAppInfo:{},offlinePackageName:{}},emits:["update:show","upgradeSuccess"],setup(e,{expose:t,emit:r}){const n=e,o=r,i=L(n.show),s=Ot(),a=L(!1);we(()=>n.show,c=>{i.value=c}),we(i,c=>{o("update:show",c)});async function u(){if(!n.offlinePackageName||!n.appInfo){s.error("缺少升级包名称或应用信息");return}a.value=!0;try{const c=await ti(n.appInfo,n.offlinePackageName);c.code===0?(s.success("微应用升级成功"),i.value=!1,o("upgradeSuccess")):s.error(`升级失败: ${c.msg}`)}catch(c){console.error("Upgrade failed:",c),s.error(`升级失败: ${c instanceof Error?c.message:"未知错误"}`)}finally{a.value=!1}}function d(){i.value=!1}return t({open:()=>{i.value=!0},close:()=>{i.value=!1}}),(c,f)=>(G(),ge(I(mt),{show:i.value,"onUpdate:show":f[0]||(f[0]=g=>i.value=g),"mask-closable":!1,style:{width:"500px"},title:"确认升级"},{footer:K(()=>[B("div",gi,[J(I(xe),{onClick:d},{default:K(()=>[...f[1]||(f[1]=[se(" 取消 ",-1)])]),_:1}),J(I(xe),{type:"primary",loading:a.value,onClick:u},{default:K(()=>[...f[2]||(f[2]=[se(" 确定升级 ",-1)])]),_:1},8,["loading"])])]),default:K(()=>[e.appInfo&&e.installedAppInfo?(G(),ne("div",pi,[J(I(Zt),{app:e.appInfo,class:"mb-4"},null,8,["app"]),J(I(xi),{class:"mb-4","current-version":e.installedAppInfo.version,"new-version":e.appInfo.version},null,8,["current-version","new-version"]),J(I(er),{"micro-app-info":e.appInfo},null,8,["micro-app-info"])])):ie("",!0)]),_:1},8,["show"]))}}),mi={class:"version-comparison border border-blue-200 dark:border-blue-800 rounded-lg p-3"},vi={class:"text-sm font-semibold mb-3 text-blue-800 dark:text-blue-400"},yi={class:"grid grid-cols-2 gap-4 text-sm"},bi={class:"font-medium text-base"},xi=O({__name:"VersionComparison",props:{currentVersion:{},newVersion:{},title:{default:"版本对比"}},setup(e){const t=e,r=R(()=>t.newVersion!==t.currentVersion);return(n,o)=>(G(),ne("div",mi,[B("h4",vi,Y(e.title),1),B("div",yi,[B("div",null,[o[0]||(o[0]=B("p",{class:"mb-1 text-gray-600 dark:text-gray-400"}," 当前版本 ",-1)),B("p",bi,Y(e.currentVersion),1)]),B("div",null,[o[1]||(o[1]=B("p",{class:"mb-1 text-gray-600 dark:text-gray-400"}," 新版本 ",-1)),B("p",{class:Er(["font-medium text-base",r.value?"text-blue-600 dark:text-blue-400":""])},Y(e.newVersion),3)])])]))}}),Te={COMMUNICATION_READY:"microApp:communicationReady",INSTALL_APP:"microApp:installApp",GET_INSTALLED_APPS:"microApp:getInstalledApps"},me={LOGIN:"microAppStore:login",LOGOUT:"microAppStore:logout",INSTALLED_APPS:"microAppStore:installedApps",DOWNLOAD_SUCCESS:"microAppStore:downloadSuccess",DOWNLOAD_FAIL:"microAppStore:downloadFail",INSTALL_SUCCESS:"microAppStore:installSuccess",UPGRADE_SUCCESS:"microAppStore:upgradeSuccess"},wi={class:"relative h-full w-full overflow-hidden rounded-lg"},Ri={key:0,class:"mx-auto max-w-[500px] p-5"},ki={class:"mb-4 flex justify-center"},Ci={class:"mb-4 flex justify-center"},Si={class:"mb-4 flex justify-end"},$i={class:"flex justify-center"},Pi=["src"],Dt="v1",ps=O({__name:"index",props:{show:{type:Boolean},title:{default:ve("microAppStore.title")},host:{default:"https://appstore.sun-panel.top"},microAppId:{}},emits:["update:show","login","download","appList"],setup(e,{emit:t}){const r=e,n=t,o=L(null),i=ft(),{isDark:s}=Or(),a=L(!1),u=L(!1),d=L(null),c=L(""),f=L(null),g=L([]),C=L(r.show),b=L(!1),h=L(Pt()),$=L(null);let x=[],p=null;const N=R(()=>{const k=r.microAppId?`${r.host}/iframe/${Dt}/microApp/${r.microAppId}`:`${r.host}/iframe/${Dt}`,A=new URL(k),V=i.language||"zh-CN",E=s.value?"dark":"light";return A.searchParams.set("lang",V),A.searchParams.set("theme",E),A.searchParams.set("postMessageKey",h.value),A.searchParams.set("version","2.0.2-beta260912"),ue("iframe网址",A),A.toString()});function P(){x.forEach(E=>E()),x=[],p&&p.destroy(),p=To({targetOrigin:"*",sourceId:"microapp-store",debug:!0,postMessageKey:h.value});const k=async E=>{var W,z;if(ue("收到登录事件","loginData:",E,"proAccount:",o.value),!((W=o.value)!=null&&W.loginStatus)){p==null||p.send("microapp-store",me.LOGOUT);return}if(!(E.loggedIn&&E.account===((z=o.value)==null?void 0:z.username)))try{const{data:_}=await vo();ue("获取登录验证码",_),p==null||p.send("microapp-store",me.LOGIN,{captcha:_.captcha})}catch(_){console.error("[MicroAppStore] 获取登录验证码失败:",_)}};p.on(Te.COMMUNICATION_READY,k),x.push(()=>p==null?void 0:p.off(Te.COMMUNICATION_READY,k));const A=async E=>{var W;ue("[收到安装事件] Received install event",E);try{const{data:z}=await io({microAppId:E.microAppId,url:E.url});ue("[下载成功] Download success",z);const _=await Io(z.appJson,{appJson:z.appJson});z.iconBase64&&_&&(_.iconBase64=z.iconBase64);const ee=mo(_.apiVersion,(W=_.appJson)==null?void 0:W.appJsonVersion);if(!ee.compatible){ue("[版本不兼容]",ee.message),p==null||p.send("microapp-store",me.DOWNLOAD_FAIL,{error:ee.message});return}if(g.value.length===0)try{const{data:re}=await tt();g.value=re.list||[]}catch(re){console.error("[MicroAppStore] 获取已安装应用列表失败:",re)}const te=g.value.find(re=>re.microAppId===_.microAppId);d.value=_,c.value=z.offlinePackageName,te?(f.value=te,u.value=!0):a.value=!0,p==null||p.send("microapp-store",me.DOWNLOAD_SUCCESS,z)}catch(z){console.error("[MicroAppStore] 下载微应用失败:",z),p==null||p.send("microapp-store",me.DOWNLOAD_FAIL,{error:z instanceof Error?z.message:"下载失败"})}};p.on(Te.INSTALL_APP,A),x.push(()=>p==null?void 0:p.off(Te.INSTALL_APP,A));const V=async()=>{ue("收到获取已安装应用事件"),await w()};p.on(Te.GET_INSTALLED_APPS,V),x.push(()=>p==null?void 0:p.off(Te.GET_INSTALLED_APPS,V))}function v(){x.forEach(k=>k()),x=[],p&&(p.destroy(),p=null)}we(()=>r.show,k=>{C.value=k,k?(b.value=!1,h.value=Pt(),P()):v()}),we(C,k=>{n("update:show",k)});function y(){var k;b.value=!0,(k=$.value)!=null&&k.contentWindow&&p&&p.registerTarget("microapp-store",$.value.contentWindow)}async function T(){try{const{data:k}=await Yr();o.value=k}catch(k){console.error(k)}}async function U(){ue("[MicroAppStore] 安装成功"),await X(),p==null||p.send("microapp-store",me.INSTALL_SUCCESS),await w()}async function j(){ue("[MicroAppStore] 升级成功"),await X(),p==null||p.send("microapp-store",me.UPGRADE_SUCCESS),await w()}async function X(){try{const{data:k}=await tt();g.value=k.list||[]}catch(k){console.error("[MicroAppStore] 刷新已安装应用列表失败:",k)}}async function w(){var k;try{const{data:A}=await tt(),V=((k=A.list)==null?void 0:k.map(E=>({...E,downloadCount:E.downloadCount??0,installCount:E.installCount??0})))||[];p==null||p.send("microapp-store",me.INSTALLED_APPS,{list:V})}catch(A){console.error("[MicroAppStore] 获取已安装应用列表并通知失败:",A)}}return Bt(()=>{T()}),Ur(()=>{v()}),(k,A)=>(G(),ne(Oe,null,[J(I(mt),{show:C.value,"onUpdate:show":A[0]||(A[0]=V=>C.value=V),title:e.title,size:"small",class:"w-[90vw] h-[80vh] max-w-[1200px] overflow-hidden"},{default:K(()=>[B("div",wi,[b.value?ie("",!0):(G(),ne("div",Ri,[B("div",ki,[J(I(Ae),{height:"35px",width:"80%",class:"rounded-lg"})]),B("div",Ci,[J(I(Ae),{height:"12px",width:"30%",class:"rounded"})]),B("div",Si,[J(I(Ae),{height:"20px",width:"90%",class:"rounded-lg"})]),J(I(Ae),{height:"20px",width:"100%",class:"mb-4 rounded-lg"}),J(I(Ae),{height:"20px",width:"100%",class:"mb-4 rounded-lg"}),J(I(Ae),{height:"20px",width:"80%",class:"mb-4 rounded-lg"}),B("div",$i,[J(I(Ln),{size:"large"})])])),jr(B("iframe",{ref_key:"iframeRef",ref:$,src:N.value,frameborder:"0",class:"absolute inset-0 h-full w-full rounded-lg border-none",onLoad:y},null,40,Pi),[[lt,b.value]])])]),_:1},8,["show","title"]),J(I(oi),{show:a.value,"onUpdate:show":A[1]||(A[1]=V=>a.value=V),"app-info":d.value,"offline-package-name":c.value,onInstallSuccess:U},null,8,["show","app-info","offline-package-name"]),J(I(hi),{show:u.value,"onUpdate:show":A[2]||(A[2]=V=>u.value=V),"app-info":d.value,"installed-app-info":f.value,"offline-package-name":c.value,onUpgradeSuccess:j},null,8,["show","app-info","installed-app-info","offline-package-name"])],64))}});export{sn as A,Un as B,Zt as C,er as D,ht as E,mo as F,as as G,us as H,fs as I,Io as J,ls as K,cs as L,ds as M,Ln as N,uo as O,oi as P,hi as Q,ps as R,ss as S,ns as T,os as U,is as V,Zi as W,tt as X,co as Y,es as Z,rs as _,ji as a,mt as b,Oi as c,Ei as d,zi as e,Li as f,Tn as g,Ke as h,Xi as i,Gi as j,Hi as k,Ji as l,Wi as m,Ki as n,Vi as o,qi as p,nn as q,Qi as r,Yi as s,Fi as t,Mi as u,Ae as v,ts as w,Ui as x,Ni as y,rn as z};
