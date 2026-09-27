const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-CIA5q2KH.js","assets/about-CMG-0PLU.js","assets/index-Bfu5ZQ-L.js","assets/index-DvrX_0iP.js","assets/index-nRupeSgu.css","assets/item-cache-CZwe0Y8B.js","assets/index-BJvB--f3.js","assets/index-DhJN9nwe.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/openness-BHlwjgFa.js","assets/index.vue_vue_type_script_setup_true_lang-ByGFyyTr.js","assets/proAuth-ZQs_cllT.js","assets/item-cache-BYsjoqlC.css","assets/index-DJKMdWZ5.css","assets/index-XLrzbUV8.js","assets/Alert-CP0AA-z2.js","assets/index-DBoQgJwp.js","assets/index-BEeA-VIT.js","assets/cardEvents-D-UTTwDk.js","assets/index-CEQ9-wRR.css","assets/index-DGi1FJaI.js","assets/index-Pj3AU0OC.js","assets/Popconfirm-Ez-HlpCb.js","assets/index-DJGjtczl.css","assets/index-7rNByZUb.js","assets/itemCardGroup-DeBL8L25.js","assets/index-DeSHHmJz.css","assets/index-C8OsxT9H.js","assets/loader-BKsuelH6.js","assets/useMicroAppLoader-CrkiS7sh.js","assets/Space-C6DlHug9.js","assets/index-AQBZnrsx.css","assets/index-Bq_quWpF.js","assets/index-BugYUnky.js","assets/itemCard-uKGaNBrS.js","assets/useMicroAppLauncher-CADFiVEJ.js","assets/useContextRecord-BJ_GRjt3.js","assets/index-tn0RQdqM.css","assets/index-DA_z_9A_.js","assets/index-DKxbDkVB.css","assets/index-BTgckiz4.js","assets/index.vue_vue_type_script_setup_true_lang-B29-7KVe.js","assets/index-CJhB03pD.js"])))=>i.map(i=>d[i]);
import{c as oe,k as a,l as A,d as V,h as t,bv as le,w as q,x as j,dB as se,dC as ne,C as J,j as R,r as S,L as Q,p as u,n as N,N as re,e as ie,O as Y,M as Z,dD as me,cn as be,cm as ye,co as xe,cl as _e,J as U,z as ae,A as ce,P as k,Q as O,R as z,S as y,U as P,E as Ce,G as Se,W as ze,X as we,Y as C,Z as Te,_ as Ee,$ as G,a0 as F,a1 as de,a2 as Ie,a3 as ee,a4 as Re,aE as _,a9 as Ae,ak as Pe,a6 as H,F as K,ac as ke,a7 as Le}from"./index-DvrX_0iP.js";import{ah as Be,p as $e,s as Oe}from"./item-cache-CZwe0Y8B.js";import{f as X,S as te}from"./index-DhJN9nwe.js";import{N as Ve}from"./index.vue_vue_type_script_setup_true_lang-ByGFyyTr.js";import{_ as ue}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{u as Me,p as je}from"./index-BJvB--f3.js";import{N as De}from"./Space-C6DlHug9.js";const Ne=oe("n-layout-sider"),pe={type:String,default:"static"},Fe=a("layout",`
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 flex: auto;
 overflow: hidden;
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
`,[a("layout-scroll-container",`
 overflow-x: hidden;
 box-sizing: border-box;
 height: 100%;
 `),A("absolute-positioned",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),We={embedded:Boolean,position:pe,nativeScrollbar:{type:Boolean,default:!0},scrollbarProps:Object,onScroll:Function,contentClass:String,contentStyle:{type:[String,Object],default:""},hasSider:Boolean,siderPlacement:{type:String,default:"left"}},ve=oe("n-layout");function fe(e){return V({name:e?"LayoutContent":"Layout",props:Object.assign(Object.assign({},j.props),We),setup(l){const o=S(null),s=S(null),{mergedClsPrefixRef:c,inlineThemeDisabled:n}=q(l),f=j("Layout","-layout",Fe,se,l,c);function d(p,h){if(l.nativeScrollbar){const{value:x}=o;x&&(h===void 0?x.scrollTo(p):x.scrollTo(p,h))}else{const{value:x}=s;x&&x.scrollTo(p,h)}}Q(ve,l);let b=0,w=0;const L=p=>{var h;const x=p.target;b=x.scrollLeft,w=x.scrollTop,(h=l.onScroll)===null||h===void 0||h.call(l,p)};ne(()=>{if(l.nativeScrollbar){const p=o.value;p&&(p.scrollTop=w,p.scrollLeft=b)}});const B={display:"flex",flexWrap:"nowrap",width:"100%",flexDirection:"row"},T={scrollTo:d},$=R(()=>{const{common:{cubicBezierEaseInOut:p},self:h}=f.value;return{"--n-bezier":p,"--n-color":l.embedded?h.colorEmbedded:h.color,"--n-text-color":h.textColor}}),m=n?J("layout",R(()=>l.embedded?"e":""),$,l):void 0;return Object.assign({mergedClsPrefix:c,scrollableElRef:o,scrollbarInstRef:s,hasSiderStyle:B,mergedTheme:f,handleNativeElScroll:L,cssVars:n?void 0:$,themeClass:m==null?void 0:m.themeClass,onRender:m==null?void 0:m.onRender},T)},render(){var l;const{mergedClsPrefix:o,hasSider:s}=this;(l=this.onRender)===null||l===void 0||l.call(this);const c=s?this.hasSiderStyle:void 0,n=[this.themeClass,e&&`${o}-layout-content`,`${o}-layout`,`${o}-layout--${this.position}-positioned`];return t("div",{class:n,style:this.cssVars},this.nativeScrollbar?t("div",{ref:"scrollableElRef",class:[`${o}-layout-scroll-container`,this.contentClass],style:[this.contentStyle,c],onScroll:this.handleNativeElScroll},this.$slots):t(le,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,contentClass:this.contentClass,contentStyle:[this.contentStyle,c]}),this.$slots))}})}const Ye=fe(!1),Ue=fe(!0),He=a("layout-sider",`
 flex-shrink: 0;
 box-sizing: border-box;
 position: relative;
 z-index: 1;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 min-width .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: flex;
 justify-content: flex-end;
`,[A("bordered",[u("border",`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 width: 1px;
 background-color: var(--n-border-color);
 transition: background-color .3s var(--n-bezier);
 `)]),u("left-placement",[A("bordered",[u("border",`
 right: 0;
 `)])]),A("right-placement",`
 justify-content: flex-start;
 `,[A("bordered",[u("border",`
 left: 0;
 `)]),A("collapsed",[a("layout-toggle-button",[a("base-icon",`
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",[N("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])])]),a("layout-toggle-button",`
 left: 0;
 transform: translateX(-50%) translateY(-50%);
 `,[a("base-icon",`
 transform: rotate(0);
 `)]),a("layout-toggle-bar",`
 left: -28px;
 transform: rotate(180deg);
 `,[N("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})])])]),A("collapsed",[a("layout-toggle-bar",[N("&:hover",[u("top",{transform:"rotate(-12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(12deg) scale(1.15) translateY(2px)"})])]),a("layout-toggle-button",[a("base-icon",`
 transform: rotate(0);
 `)])]),a("layout-toggle-button",`
 transition:
 color .3s var(--n-bezier),
 right .3s var(--n-bezier),
 left .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 cursor: pointer;
 width: 24px;
 height: 24px;
 position: absolute;
 top: 50%;
 right: 0;
 border-radius: 50%;
 display: flex;
 align-items: center;
 justify-content: center;
 font-size: 18px;
 color: var(--n-toggle-button-icon-color);
 border: var(--n-toggle-button-border);
 background-color: var(--n-toggle-button-color);
 box-shadow: 0 2px 4px 0px rgba(0, 0, 0, .06);
 transform: translateX(50%) translateY(-50%);
 z-index: 1;
 `,[a("base-icon",`
 transition: transform .3s var(--n-bezier);
 transform: rotate(180deg);
 `)]),a("layout-toggle-bar",`
 cursor: pointer;
 height: 72px;
 width: 32px;
 position: absolute;
 top: calc(50% - 36px);
 right: -28px;
 `,[u("top, bottom",`
 position: absolute;
 width: 4px;
 border-radius: 2px;
 height: 38px;
 left: 14px;
 transition: 
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `),u("bottom",`
 position: absolute;
 top: 34px;
 `),N("&:hover",[u("top",{transform:"rotate(12deg) scale(1.15) translateY(-2px)"}),u("bottom",{transform:"rotate(-12deg) scale(1.15) translateY(2px)"})]),u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color)"}),N("&:hover",[u("top, bottom",{backgroundColor:"var(--n-toggle-bar-color-hover)"})])]),u("border",`
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 width: 1px;
 transition: background-color .3s var(--n-bezier);
 `),a("layout-sider-scroll-container",`
 flex-grow: 1;
 flex-shrink: 0;
 box-sizing: border-box;
 height: 100%;
 opacity: 0;
 transition: opacity .3s var(--n-bezier);
 max-width: 100%;
 `),A("show-content",[a("layout-sider-scroll-container",{opacity:1})]),A("absolute-positioned",`
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 `)]),Ke=V({props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return t("div",{onClick:this.onClick,class:`${e}-layout-toggle-bar`},t("div",{class:`${e}-layout-toggle-bar__top`}),t("div",{class:`${e}-layout-toggle-bar__bottom`}))}}),Xe=V({name:"LayoutToggleButton",props:{clsPrefix:{type:String,required:!0},onClick:Function},render(){const{clsPrefix:e}=this;return t("div",{class:`${e}-layout-toggle-button`,onClick:this.onClick},t(re,{clsPrefix:e},{default:()=>t(Be,null)}))}}),Ge={position:pe,bordered:Boolean,collapsedWidth:{type:Number,default:48},width:{type:[Number,String],default:272},contentClass:String,contentStyle:{type:[String,Object],default:""},collapseMode:{type:String,default:"transform"},collapsed:{type:Boolean,default:void 0},defaultCollapsed:Boolean,showCollapsedContent:{type:Boolean,default:!0},showTrigger:{type:[Boolean,String],default:!1},nativeScrollbar:{type:Boolean,default:!0},inverted:Boolean,scrollbarProps:Object,triggerClass:String,triggerStyle:[String,Object],collapsedTriggerClass:String,collapsedTriggerStyle:[String,Object],"onUpdate:collapsed":[Function,Array],onUpdateCollapsed:[Function,Array],onAfterEnter:Function,onAfterLeave:Function,onExpand:[Function,Array],onCollapse:[Function,Array],onScroll:Function},qe=V({name:"LayoutSider",props:Object.assign(Object.assign({},j.props),Ge),setup(e){const l=ie(ve),o=S(null),s=S(null),c=S(e.defaultCollapsed),n=Me(Z(e,"collapsed"),c),f=R(()=>X(n.value?e.collapsedWidth:e.width)),d=R(()=>e.collapseMode!=="transform"?{}:{minWidth:X(e.width)}),b=R(()=>l?l.siderPlacement:"left");function w(r,i){if(e.nativeScrollbar){const{value:v}=o;v&&(i===void 0?v.scrollTo(r):v.scrollTo(r,i))}else{const{value:v}=s;v&&v.scrollTo(r,i)}}function L(){const{"onUpdate:collapsed":r,onUpdateCollapsed:i,onExpand:v,onCollapse:W}=e,{value:M}=n;i&&Y(i,!M),r&&Y(r,!M),c.value=!M,M?v&&Y(v):W&&Y(W)}let B=0,T=0;const $=r=>{var i;const v=r.target;B=v.scrollLeft,T=v.scrollTop,(i=e.onScroll)===null||i===void 0||i.call(e,r)};ne(()=>{if(e.nativeScrollbar){const r=o.value;r&&(r.scrollTop=T,r.scrollLeft=B)}}),Q(Ne,{collapsedRef:n,collapseModeRef:Z(e,"collapseMode")});const{mergedClsPrefixRef:m,inlineThemeDisabled:p}=q(e),h=j("Layout","-layout-sider",He,se,e,m);function x(r){var i,v;r.propertyName==="max-width"&&(n.value?(i=e.onAfterLeave)===null||i===void 0||i.call(e):(v=e.onAfterEnter)===null||v===void 0||v.call(e))}const D={scrollTo:w},E=R(()=>{const{common:{cubicBezierEaseInOut:r},self:i}=h.value,{siderToggleButtonColor:v,siderToggleButtonBorder:W,siderToggleBarColor:M,siderToggleBarColorHover:ge}=i,I={"--n-bezier":r,"--n-toggle-button-color":v,"--n-toggle-button-border":W,"--n-toggle-bar-color":M,"--n-toggle-bar-color-hover":ge};return e.inverted?(I["--n-color"]=i.siderColorInverted,I["--n-text-color"]=i.textColorInverted,I["--n-border-color"]=i.siderBorderColorInverted,I["--n-toggle-button-icon-color"]=i.siderToggleButtonIconColorInverted,I.__invertScrollbar=i.__invertScrollbar):(I["--n-color"]=i.siderColor,I["--n-text-color"]=i.textColor,I["--n-border-color"]=i.siderBorderColor,I["--n-toggle-button-icon-color"]=i.siderToggleButtonIconColor),I}),g=p?J("layout-sider",R(()=>e.inverted?"a":"b"),E,e):void 0;return Object.assign({scrollableElRef:o,scrollbarInstRef:s,mergedClsPrefix:m,mergedTheme:h,styleMaxWidth:f,mergedCollapsed:n,scrollContainerStyle:d,siderPlacement:b,handleNativeElScroll:$,handleTransitionend:x,handleTriggerClick:L,inlineThemeDisabled:p,cssVars:E,themeClass:g==null?void 0:g.themeClass,onRender:g==null?void 0:g.onRender},D)},render(){var e;const{mergedClsPrefix:l,mergedCollapsed:o,showTrigger:s}=this;return(e=this.onRender)===null||e===void 0||e.call(this),t("aside",{class:[`${l}-layout-sider`,this.themeClass,`${l}-layout-sider--${this.position}-positioned`,`${l}-layout-sider--${this.siderPlacement}-placement`,this.bordered&&`${l}-layout-sider--bordered`,o&&`${l}-layout-sider--collapsed`,(!o||this.showCollapsedContent)&&`${l}-layout-sider--show-content`],onTransitionend:this.handleTransitionend,style:[this.inlineThemeDisabled?void 0:this.cssVars,{maxWidth:this.styleMaxWidth,width:X(this.width)}]},this.nativeScrollbar?t("div",{class:[`${l}-layout-sider-scroll-container`,this.contentClass],onScroll:this.handleNativeElScroll,style:[this.scrollContainerStyle,{overflow:"auto"},this.contentStyle],ref:"scrollableElRef"},this.$slots):t(le,Object.assign({},this.scrollbarProps,{onScroll:this.onScroll,ref:"scrollbarInstRef",style:this.scrollContainerStyle,contentStyle:this.contentStyle,contentClass:this.contentClass,theme:this.mergedTheme.peers.Scrollbar,themeOverrides:this.mergedTheme.peerOverrides.Scrollbar,builtinThemeOverrides:this.inverted&&this.cssVars.__invertScrollbar==="true"?{colorHover:"rgba(255, 255, 255, .4)",color:"rgba(255, 255, 255, .3)"}:void 0}),this.$slots),s?s==="bar"?t(Ke,{clsPrefix:l,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):t(Xe,{clsPrefix:l,class:o?this.collapsedTriggerClass:this.triggerClass,style:o?this.collapsedTriggerStyle:this.triggerStyle,onClick:this.handleTriggerClick}):null,this.bordered?t("div",{class:`${l}-layout-sider__border`}):null)}});function Je(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},t("path",{fill:"#EF9645",d:"M15.5 2.965c1.381 0 2.5 1.119 2.5 2.5v.005L20.5.465c1.381 0 2.5 1.119 2.5 2.5V4.25l2.5-1.535c1.381 0 2.5 1.119 2.5 2.5V8.75L29 18H15.458L15.5 2.965z"}),t("path",{fill:"#FFDC5D",d:"M4.625 16.219c1.381-.611 3.354.208 4.75 2.188.917 1.3 1.187 3.151 2.391 3.344.46.073 1.234-.313 1.234-1.397V4.5s0-2 2-2 2 2 2 2v11.633c0-.029 1-.064 1-.082V2s0-2 2-2 2 2 2 2v14.053c0 .017 1 .041 1 .069V4.25s0-2 2-2 2 2 2 2v12.638c0 .118 1 .251 1 .398V8.75s0-2 2-2 2 2 2 2V24c0 6.627-5.373 12-12 12-4.775 0-8.06-2.598-9.896-5.292C8.547 28.423 8.096 26.051 8 25.334c0 0-.123-1.479-1.156-2.865-1.469-1.969-2.5-3.156-3.125-3.866-.317-.359-.625-1.707.906-2.384z"}))}function Qe(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},t("circle",{fill:"#FFCB4C",cx:"18",cy:"17.018",r:"17"}),t("path",{fill:"#65471B",d:"M14.524 21.036c-.145-.116-.258-.274-.312-.464-.134-.46.13-.918.59-1.021 4.528-1.021 7.577 1.363 7.706 1.465.384.306.459.845.173 1.205-.286.358-.828.401-1.211.097-.11-.084-2.523-1.923-6.182-1.098-.274.061-.554-.016-.764-.184z"}),t("ellipse",{fill:"#65471B",cx:"13.119",cy:"11.174",rx:"2.125",ry:"2.656"}),t("ellipse",{fill:"#65471B",cx:"24.375",cy:"12.236",rx:"2.125",ry:"2.656"}),t("path",{fill:"#F19020",d:"M17.276 35.149s1.265-.411 1.429-1.352c.173-.972-.624-1.167-.624-1.167s1.041-.208 1.172-1.376c.123-1.101-.861-1.363-.861-1.363s.97-.4 1.016-1.539c.038-.959-.995-1.428-.995-1.428s5.038-1.221 5.556-1.341c.516-.12 1.32-.615 1.069-1.694-.249-1.08-1.204-1.118-1.697-1.003-.494.115-6.744 1.566-8.9 2.068l-1.439.334c-.54.127-.785-.11-.404-.512.508-.536.833-1.129.946-2.113.119-1.035-.232-2.313-.433-2.809-.374-.921-1.005-1.649-1.734-1.899-1.137-.39-1.945.321-1.542 1.561.604 1.854.208 3.375-.833 4.293-2.449 2.157-3.588 3.695-2.83 6.973.828 3.575 4.377 5.876 7.952 5.048l3.152-.681z"}),t("path",{fill:"#65471B",d:"M9.296 6.351c-.164-.088-.303-.224-.391-.399-.216-.428-.04-.927.393-1.112 4.266-1.831 7.699-.043 7.843.034.433.231.608.747.391 1.154-.216.405-.74.546-1.173.318-.123-.063-2.832-1.432-6.278.047-.257.109-.547.085-.785-.042zm12.135 3.75c-.156-.098-.286-.243-.362-.424-.187-.442.023-.927.468-1.084 4.381-1.536 7.685.48 7.823.567.415.26.555.787.312 1.178-.242.39-.776.495-1.191.238-.12-.072-2.727-1.621-6.267-.379-.266.091-.553.046-.783-.096z"}))}function Ze(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},t("ellipse",{fill:"#292F33",cx:"18",cy:"26",rx:"18",ry:"10"}),t("ellipse",{fill:"#66757F",cx:"18",cy:"24",rx:"18",ry:"10"}),t("path",{fill:"#E1E8ED",d:"M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z"}),t("path",{fill:"#77B255",d:"M35 12.056c0 5.216-7.611 9.444-17 9.444S1 17.271 1 12.056C1 6.84 8.611 3.611 18 3.611s17 3.229 17 8.445z"}),t("ellipse",{fill:"#A6D388",cx:"18",cy:"13",rx:"15",ry:"7"}),t("path",{d:"M21 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z",fill:"#5C913B"}))}function et(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 36 36"},t("path",{fill:"#FFCC4D",d:"M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"}),t("ellipse",{fill:"#664500",cx:"18",cy:"27",rx:"5",ry:"6"}),t("path",{fill:"#664500",d:"M5.999 11c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4C8.462 5.05 12.816 5 13 5c.552 0 1 .448 1 1 0 .551-.445.998-.996 1-.155.002-3.568.086-6.204 3.6-.196.262-.497.4-.801.4zm24.002 0c-.305 0-.604-.138-.801-.4-2.64-3.521-6.061-3.598-6.206-3.6-.55-.006-.994-.456-.991-1.005C22.006 5.444 22.45 5 23 5c.184 0 4.537.05 7.8 4.4.332.442.242 1.069-.2 1.4-.18.135-.39.2-.599.2zm-16.087 4.5l1.793-1.793c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L12.5 14.086l-1.793-1.793c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.793 1.793-1.793 1.793c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.793-1.793 1.793 1.793c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414L13.914 15.5zm11 0l1.793-1.793c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L23.5 14.086l-1.793-1.793c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.793 1.793-1.793 1.793c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.793-1.793 1.793 1.793c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414L24.914 15.5z"}))}const tt=a("result",`
 color: var(--n-text-color);
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier);
`,[a("result-icon",`
 display: flex;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `,[u("status-image",`
 font-size: var(--n-icon-size);
 width: 1em;
 height: 1em;
 `),a("base-icon",`
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]),a("result-content",{marginTop:"24px"}),a("result-footer",`
 margin-top: 24px;
 text-align: center;
 `),a("result-header",[u("title",`
 margin-top: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 text-align: center;
 color: var(--n-title-text-color);
 font-size: var(--n-title-font-size);
 `),u("description",`
 margin-top: 4px;
 text-align: center;
 font-size: var(--n-font-size);
 `)])]),ot={403:Je,404:Qe,418:Ze,500:et,info:()=>t(_e,null),success:()=>t(xe,null),warning:()=>t(ye,null),error:()=>t(be,null)},lt=Object.assign(Object.assign({},j.props),{size:{type:String,default:"medium"},status:{type:String,default:"info"},title:String,description:String}),st=V({name:"Result",props:lt,slots:Object,setup(e){const{mergedClsPrefixRef:l,inlineThemeDisabled:o}=q(e),s=j("Result","-result",tt,me,e,l),c=R(()=>{const{size:f,status:d}=e,{common:{cubicBezierEaseInOut:b},self:{textColor:w,lineHeight:L,titleTextColor:B,titleFontWeight:T,[U("iconColor",d)]:$,[U("fontSize",f)]:m,[U("titleFontSize",f)]:p,[U("iconSize",f)]:h}}=s.value;return{"--n-bezier":b,"--n-font-size":m,"--n-icon-size":h,"--n-line-height":L,"--n-text-color":w,"--n-title-font-size":p,"--n-title-font-weight":T,"--n-title-text-color":B,"--n-icon-color":$||""}}),n=o?J("result",R(()=>{const{size:f,status:d}=e;let b="";return f&&(b+=f[0]),d&&(b+=d[0]),b}),c,e):void 0;return{mergedClsPrefix:l,cssVars:o?void 0:c,themeClass:n==null?void 0:n.themeClass,onRender:n==null?void 0:n.onRender}},render(){var e;const{status:l,$slots:o,mergedClsPrefix:s,onRender:c}=this;return c==null||c(),t("div",{class:[`${s}-result`,this.themeClass],style:this.cssVars},t("div",{class:`${s}-result-icon`},((e=o.icon)===null||e===void 0?void 0:e.call(o))||t(re,{clsPrefix:s},{default:()=>ot[l]()})),t("div",{class:`${s}-result-header`},this.title?t("div",{class:`${s}-result-header__title`},this.title):null,this.description?t("div",{class:`${s}-result-header__description`},this.description):null),o.default&&t("div",{class:`${s}-result-content`},o),o.footer&&t("div",{class:`${s}-result-footer`},o.footer()))}}),nt={class:"h-full"},rt={key:0,class:"fade-in-animation h-full"},it={key:1},at={class:"mt-[10px]"},ct=V({__name:"index",props:{componentName:{}},setup(e){const l=e,o=ee(!1),s=ee(""),c=Object.assign({"../../builtInAppsComponents/About/index.vue":()=>_(()=>import("./index-CIA5q2KH.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13])),"../../builtInAppsComponents/Adapting/index.vue":()=>_(()=>import("./index-XLrzbUV8.js"),__vite__mapDeps([14,3,4,10,6,2,7,8,11,15])),"../../builtInAppsComponents/BackupMigration/index.vue":()=>_(()=>import("./index-DBoQgJwp.js"),__vite__mapDeps([16,2,3,4,5,6,7,8,9,10,11,12,15])),"../../builtInAppsComponents/DockerManage/index.vue":()=>_(()=>import("./index-BEeA-VIT.js"),__vite__mapDeps([17,5,3,4,6,2,7,8,9,10,11,12,18,15,19])),"../../builtInAppsComponents/Gallery/index.vue":()=>_(()=>import("./index-DGi1FJaI.js"),__vite__mapDeps([20,5,3,4,6,2,7,8,9,10,11,12])),"../../builtInAppsComponents/GlobalSetting/index.vue":()=>_(()=>import("./index-Pj3AU0OC.js"),__vite__mapDeps([21,3,4,2,5,6,7,8,9,10,11,12,22,15,23])),"../../builtInAppsComponents/ItemGroupManage/index.vue":()=>_(()=>import("./index-7rNByZUb.js"),__vite__mapDeps([24,5,3,4,6,2,7,8,9,10,11,12,25,26])),"../../builtInAppsComponents/MicroAppManagement/index.vue":()=>_(()=>import("./index-C8OsxT9H.js"),__vite__mapDeps([27,10,3,4,6,2,7,8,11,28,29,30,31])),"../../builtInAppsComponents/ProAuth/index.vue":()=>_(()=>import("./index-Bq_quWpF.js"),__vite__mapDeps([32,6,3,4,2,11,5,7,8,9,10,12,15])),"../../builtInAppsComponents/Settings/index.vue":()=>_(()=>import("./index-BugYUnky.js"),__vite__mapDeps([33,3,4,34,2,25,1,10,6,7,8,11,35,29,28,36,15,30,37])),"../../builtInAppsComponents/Style/index.vue":()=>_(()=>import("./index-DA_z_9A_.js"),__vite__mapDeps([38,9,3,4,7,6,2,8,22,10,11,5,12,35,29,28,36,39])),"../../builtInAppsComponents/UserInfo/index.vue":()=>_(()=>import("./index-BTgckiz4.js"),__vite__mapDeps([40,3,4,6,2,41,9,7,8,5,10,11,12,29,28,35,36,30])),"../../builtInAppsComponents/Users/index.vue":()=>_(()=>import("./index-CJhB03pD.js"),__vite__mapDeps([42,2,3,4,5,6,7,8,9,10,11,12,15]))});function n(){o.value=!0;const f=`../../builtInAppsComponents/${l.componentName}/index.vue`,d=c[f];d?s.value=Re(()=>d().finally(()=>{o.value=!1}).catch(()=>(s.value="",null))):(o.value=!1,s.value="")}return ae(()=>l.componentName,()=>{n()}),ce(()=>{n()}),(f,d)=>(k(),O("div",nt,[z(y(Ve),{show:o.value,style:{height:"100%"},"content-style":"height: 100%;",delay:500,description:"loading..."},{default:P(()=>[s.value?Ce((k(),O("div",rt,[(k(),ze(we(s.value)))],512)),[[Se,!o.value]]):s.value?Ie("",!0):(k(),O("div",it,[C("div",at,[z(y(st),{status:"404",description:f.$t("apps.common.notFound")},{footer:P(()=>[z(y(Te),{type:"success",onClick:d[0]||(d[0]=b=>y(Ee).push({name:"login"}))},{default:P(()=>[G(F(y(de)("common.goToLogin")),1)]),_:1})]),_:1},8,["description"])])]))]),_:1},8,["show"])]))}}),dt=ue(ct,[["__scopeId","data-v-f9d52566"]]),he=Symbol("closeAppStarter");function Rt(){return{close:ie(he)}}function ut(e,l){const o=[];return e.forEach(s=>{(!s.roles||je(s.roles,l))&&o.push(s)}),o}const pt={class:"flex items-center select-none"},vt={class:"font-bold"},ft={class:"w-full h-full app-starter-modal-content"},ht={class:"w-full h-full dark:bg-[#2c2c32]"},gt=["onClick"],mt={class:"bg-white dark:bg-zinc-800 p-[10px] rounded-lg mb-[5px] font-bold cursor-pointer flex items-center hover:bg-slate-50 focus:bg-slate-50"},bt={class:"text-lg"},yt={class:"ml-2"},xt=V({__name:"index",props:{visible:{type:Boolean}},emits:["update:visible"],setup(e,{emit:l}){const o=e,s=l,c=S("UserInfo"),n=S(!1),f=S(0),d=S(!1),b=de("appLauncher.title"),w=S(""),L=S("600px"),B=S("1000px"),T=S(Oe),$=Ae(),m=R({get:()=>o.visible,set:E=>{s("update:visible",E)}});function p(){m.value=!1}Q(he,p);function h(E){c.value=E.componentName,w.value=E.name,d.value&&(n.value=!0)}function x(){return window.innerWidth}function D(){f.value=x(),f.value<640?(n.value=!0,d.value=!0):(n.value=!1,d.value=!1)}return ae(()=>o.visible,E=>{var g;E&&(T.value=ut(T.value,((g=$.userInfo)==null?void 0:g.role)||0))},{immediate:!0}),ce(()=>{window.addEventListener("resize",D),D()}),Pe(()=>{window.removeEventListener("resize",D)}),(E,g)=>(k(),O("div",null,[z(y($e),{show:m.value,"onUpdate:show":g[3]||(g[3]=r=>m.value=r),style:H([{"max-width":"1000px","border-radius":"1rem"},{maxWidth:B.value}]),size:"small",move:""},{header:P(()=>[C("div",pt,[C("div",{class:"text-3xl cursor-pointer",style:{color:"var(--n-color-target)"},onClick:g[0]||(g[0]=r=>n.value=!n.value)},[z(y(te),{class:"transition-all duration-500",icon:n.value?"tabler-layout-sidebar-right-collapse-filled":"tabler-layout-sidebar-left-collapse-filled"},null,8,["icon"])]),C("div",{class:"ml-1",onClick:g[1]||(g[1]=r=>n.value=!n.value)},[w.value===""?(k(),O(K,{key:0},[G(F(y(b)),1)],64)):(k(),O(K,{key:1},[G(F(y(b))+" / ",1),C("span",vt,F(w.value),1)],64))])])]),default:P(()=>[C("div",ft,[z(y(De),{vertical:"",size:"large",style:{height:"100%",width:"100%"}},{default:P(()=>[z(y(Ye),{"has-sider":"",style:{"border-radius":"0.75rem"}},{default:P(()=>[z(y(qe),{collapsed:n.value,"onUpdate:collapsed":g[2]||(g[2]=r=>n.value=r),"collapse-mode":"width","collapsed-width":0,width:d.value?"100%":240,style:{height:"100%"},"content-style":"overflow: hidden"},{default:P(()=>[C("div",ht,[C("div",{class:"p-[5px] rounded-xl overflow-auto border dark:border-zinc-700 bg-slate-200 dark:bg-zinc-900",style:H({width:d.value?"100%":"220px",minWidth:"200px",height:L.value})},[(k(!0),O(K,null,ke(T.value,(r,i)=>(k(),O("div",{key:i,onClick:v=>h(r)},[C("div",mt,[C("div",{class:"flex items-center justify-center",style:H({color:c.value===r.componentName?"var(--n-color-target)":""})},[C("div",bt,[z(y(te),{icon:r.icon},null,8,["icon"])]),C("span",yt,F(r.name),1)],4)])],8,gt))),128))],4)])]),_:1},8,["collapsed","width"]),z(y(Ue),{"content-style":{height:L.value}},{default:P(()=>[C("div",{class:Le(["rounded-2xl overflow-auto transition-all duration-500 min-w-[300px] h-full border dark:border-zinc-700 bg-slate-200 dark:bg-zinc-900",d.value&&!n.value?"opacity-0":"opacity-100"])},[z(dt,{"component-name":c.value,class:"h-full"},null,8,["component-name"])],2)]),_:1},8,["content-style"])]),_:1})]),_:1})])]),_:1},8,["show","style"])]))}}),_t=ue(xt,[["__scopeId","data-v-5a810014"]]),At=Object.freeze(Object.defineProperty({__proto__:null,default:_t},Symbol.toStringTag,{value:"Module"}));export{_t as A,st as N,ut as g,At as i,Rt as u};
