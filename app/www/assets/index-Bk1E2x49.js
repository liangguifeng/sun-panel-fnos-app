const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-C8OsxT9H.js","assets/index.vue_vue_type_script_setup_true_lang-ByGFyyTr.js","assets/index-DvrX_0iP.js","assets/index-nRupeSgu.css","assets/index-BJvB--f3.js","assets/index-Bfu5ZQ-L.js","assets/index-DhJN9nwe.js","assets/_plugin-vue_export-helper-DlAUqK2U.js","assets/proAuth-ZQs_cllT.js","assets/loader-BKsuelH6.js","assets/useMicroAppLoader-CrkiS7sh.js","assets/Space-C6DlHug9.js","assets/index-AQBZnrsx.css"])))=>i.map(i=>d[i]);
import{d as C,h as t,n as c,k as z,p as d,N as R,w as H,x as P,b$ as E,bi as A,C as N,j as T,c0 as V,P as M,Q as j,Y as B,R as w,S as p,a1 as $,U as I,aB as O,a4 as F,aE as L}from"./index-DvrX_0iP.js";import{_ as D}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Q=C({name:"ArrowBack",render(){return t("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},t("path",{d:"M0 0h24v24H0V0z",fill:"none"}),t("path",{d:"M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42-.39-.39-1.02-.39-1.41 0l-6.59 6.59c-.39.39-.39 1.02 0 1.41l6.59 6.59c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1z"}))}}),U=c([z("page-header-header",`
 margin-bottom: 20px;
 `),z("page-header",`
 display: flex;
 align-items: center;
 justify-content: space-between;
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[d("main",`
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 `),d("back",`
 display: flex;
 margin-right: 16px;
 font-size: var(--n-back-size);
 cursor: pointer;
 color: var(--n-back-color);
 transition: color .3s var(--n-bezier);
 `,[c("&:hover","color: var(--n-back-color-hover);"),c("&:active","color: var(--n-back-color-pressed);")]),d("avatar",`
 display: flex;
 margin-right: 12px
 `),d("title",`
 margin-right: 16px;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `),d("subtitle",`
 font-size: 14px;
 transition: color .3s var(--n-bezier);
 color: var(--n-subtitle-text-color);
 `)]),z("page-header-content",`
 font-size: var(--n-font-size);
 `,[c("&:not(:first-child)","margin-top: 20px;")]),z("page-header-footer",`
 font-size: var(--n-font-size);
 `,[c("&:not(:first-child)","margin-top: 20px;")])]),W=Object.assign(Object.assign({},P.props),{title:String,subtitle:String,extra:String,onBack:Function}),Y=C({name:"PageHeader",props:W,slots:Object,setup(a){const{mergedClsPrefixRef:s,mergedRtlRef:n,inlineThemeDisabled:r}=H(a),l=P("PageHeader","-page-header",U,E,a,s),e=A("PageHeader",n,s),h=T(()=>{const{self:{titleTextColor:u,subtitleTextColor:g,backColor:f,fontSize:m,titleFontSize:v,backSize:i,titleFontWeight:b,backColorHover:x,backColorPressed:_},common:{cubicBezierEaseInOut:k}}=l.value;return{"--n-title-text-color":u,"--n-title-font-size":v,"--n-title-font-weight":b,"--n-font-size":m,"--n-back-size":i,"--n-subtitle-text-color":g,"--n-back-color":f,"--n-back-color-hover":x,"--n-back-color-pressed":_,"--n-bezier":k}}),o=r?N("page-header",void 0,h,a):void 0;return{rtlEnabled:e,mergedClsPrefix:s,cssVars:r?void 0:h,themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender}},render(){var a;const{onBack:s,title:n,subtitle:r,extra:l,mergedClsPrefix:e,cssVars:h,$slots:o}=this;(a=this.onRender)===null||a===void 0||a.call(this);const{title:u,subtitle:g,extra:f,default:m,header:v,avatar:i,footer:b,back:x}=o,_=s,k=n||u,S=r||g,y=l||f;return t("div",{style:h,class:[`${e}-page-header-wrapper`,this.themeClass,this.rtlEnabled&&`${e}-page-header-wrapper--rtl`]},v?t("div",{class:`${e}-page-header-header`,key:"breadcrumb"},v()):null,(_||i||k||S||y)&&t("div",{class:`${e}-page-header`,key:"header"},t("div",{class:`${e}-page-header__main`,key:"back"},_?t("div",{class:`${e}-page-header__back`,onClick:s},x?x():t(R,{clsPrefix:e},{default:()=>t(Q,null)})):null,i?t("div",{class:`${e}-page-header__avatar`},i()):null,k?t("div",{class:`${e}-page-header__title`,key:"title"},n||u()):null,S?t("div",{class:`${e}-page-header__subtitle`,key:"subtitle"},r||g()):null),y?t("div",{class:`${e}-page-header__extra`},l||f()):null),m?t("div",{class:`${e}-page-header-content`,key:"content"},m()):null,b?t("div",{class:`${e}-page-header-footer`,key:"footer"},b()):null)}}),q={class:"min-h-screen bg-white dark:bg-[#2c2c32] p-4 sm:p-3"},G={class:"max-w-[960px] mx-auto flex flex-col gap-4 sm:gap-3"},J={class:"p-4 sm:p-3"},K=C({__name:"index",setup(a){const s=F(()=>L(()=>import("./index-C8OsxT9H.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12]))),n=V();function r(){n.push("/")}return(l,e)=>(M(),j("div",q,[B("div",G,[w(p(Y),{title:p($)("apps.microAppManagement.appName"),subtitle:p($)("apps.microAppManagement.description"),class:"rounded-lg",onBack:r},null,8,["title","subtitle"]),w(p(O),{bordered:!1,size:"small",class:"rounded-lg overflow-hidden"},{default:I(()=>[B("div",J,[w(p(s))])]),_:1})])]))}}),ee=D(K,[["__scopeId","data-v-b0da80f0"]]);export{ee as default};
