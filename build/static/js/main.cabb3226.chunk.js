(this.webpackJsonpautocomplete=this.webpackJsonpautocomplete||[]).push([[0],{47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),i=n(15),l=n.n(i),u=n(9),s=n.n(u),r=n(16),v=n(3),b=n(2),j=n(5),O=n(17),d=n.n(O),p=(n(47),Object(j.cn)("Menu")),f=function(e){var t=e.isActive,n=e.children,c=e.onClick;return Object(a.jsx)("div",{className:p("Option",{isActive:t}),onClick:c,children:n})},h=function(e){var t=e.options,n=e.activeOption,o=e.isLoading,i=e.onChoice,l=Object(c.useCallback)((function(e){return function(){i(e)}}),[i]);return Object(a.jsx)("div",{className:p(),children:o?Object(a.jsx)("div",{children:"Loading..."}):t.map((function(e,t){return Object(a.jsx)(f,{isActive:(null===n||void 0===n?void 0:n.value)===e.value,onClick:l(e),children:e.content},"".concat(e.content).concat(t))}))})},C=(n(48),Object(j.cn)("Autocomplete")),x={value:"",options:[],isMenuVisible:!1,isDirty:!1},N="HIDE_MENU",m="SHOW_MENU",M="UPDATE_OPTION",k="UPDATE_OPTIONS",A="HANDLE_VALUE_CHANGE",g="HANDLE_BLUR",y="HANDLE_CHOICE",L="HANDLE_CLEAR",D=function(e,t){var n,a,c,o;switch(t.type){case N:return Object(b.a)(Object(b.a)({},e),{},{isDirty:!1,isMenuVisible:!1});case m:return Object(b.a)(Object(b.a)({},e),{},{isMenuVisible:!0});case A:return Object(b.a)(Object(b.a)({},e),{},{value:null!==(n=t.value)&&void 0!==n?n:"",isDirty:!0,options:t.options});case g:return Object(b.a)(Object(b.a)({},e),{},{value:null!==(a=t.value)&&void 0!==a?a:""});case y:return Object(b.a)(Object(b.a)({},e),{},{isDirty:!1,isMenuVisible:!1});case M:return Object(b.a)(Object(b.a)({},e),{},{value:null!==(c=null===(o=t.option)||void 0===o?void 0:o.content)&&void 0!==c?c:""});case k:return Object(b.a)(Object(b.a)({},e),{},{options:t.options});case L:return Object(b.a)(Object(b.a)({},e),{},{isDirty:!1,isMenuVisible:!1,value:""});default:return e}},I=function(e){var t=e.options,n=e.value,o=e.isClearable,i=e.disableLocalFilter,l=void 0!==i&&i,u=e.isLoading,s=e.onClear,r=e.onChange,j=e.onInputChange,O=Object(c.useRef)(null),p=Object(c.useReducer)(D,x,(function(){var e;return Object(b.a)(Object(b.a)({},x),{},{options:t,value:null!==(e=null===n||void 0===n?void 0:n.content)&&void 0!==e?e:""})})),f=Object(v.a)(p,2),I=f[0],w=f[1],E=I.isDirty,S=I.isMenuVisible,T=I.options,P=I.value;Object(c.useEffect)((function(){E||w({type:M,option:n})}),[n,E]),Object(c.useEffect)((function(){w({type:k,options:t})}),[t]);var V=Object(c.useCallback)((function(){w({type:N})}),[]),H=Object(c.useCallback)((function(){T.length&&w({type:m})}),[T.length]),F=Object(c.useCallback)((function(e){var n=j?j(e.target.value):e.target.value;w({type:A,value:n,options:l?t:t.filter((function(e){return e.content.toLowerCase().includes(n.toLowerCase())}))})}),[l,t,j]),R=Object(c.useCallback)((function(e){13===e.keyCode&&(r(T[0]),V(),O.current.blur())}),[V,r,T]),W=Object(c.useCallback)((function(){O.current.blur(),V(),w({type:g,value:null===n||void 0===n?void 0:n.content})}),[V,null===n||void 0===n?void 0:n.content]),U=Object(c.useCallback)((function(e){r(e),w({type:y})}),[r]),_=Object(c.useCallback)((function(){w({type:L}),s&&s()}),[s]);return Object(a.jsx)(d.a,{onOutsideClick:W,children:Object(a.jsxs)("div",{className:C(),children:[Object(a.jsx)("div",{className:C("Label"),children:Object(a.jsx)("label",{htmlFor:"textField",children:"Some Text"})}),Object(a.jsxs)("div",{className:C("Input"),children:[Object(a.jsx)("input",{ref:O,autoComplete:"off",onClick:H,onChange:F,onKeyDown:R,value:P,placeholder:"Type something",id:"textField",type:"text"}),S&&Object(a.jsx)(h,{onChoice:U,options:T,activeOption:n,isLoading:u})]}),o&&Object(a.jsx)("div",{className:C("ClearButton"),children:Object(a.jsx)("button",{onClick:_,children:"Clear"})})]})})},w=function(e){var t=e.loadOptions,n=e.isClearable,o=e.onInputChange,i=e.shouldLoadDefaultOptions,l=Object(c.useState)(),u=Object(v.a)(l,2),b=u[0],j=u[1],O=Object(c.useState)([]),d=Object(v.a)(O,2),p=d[0],f=d[1],h=Object(c.useState)(!1),C=Object(v.a)(h,2),x=C[0],N=C[1],m=Object(c.useState)(),M=Object(v.a)(m,2),k=M[0],A=M[1],g=Object(c.useRef)(),y=Object(c.useCallback)(Object(r.a)(s.a.mark((function e(){var n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N(!0),e.prev=1,!k){e.next=12;break}return n=t(o?o(k):k),g.current=n,e.t0=f,e.next=8,n;case 8:e.t1=e.sent,(0,e.t0)(e.t1),e.next=19;break;case 12:return n=t(),g.current=n,e.t2=f,e.next=17,n;case 17:e.t3=e.sent,(0,e.t2)(e.t3);case 19:e.next=24;break;case 21:e.prev=21,e.t4=e.catch(1),console.error(e.t4);case 24:return e.prev=24,g.current===n&&N(!1),e.finish(24);case 27:case"end":return e.stop()}}),e,null,[[1,21,24,27]])}))),[k,t,o]);Object(c.useEffect)((function(){y()}),[y]);var L=Object(c.useCallback)((function(e){j(e)}),[]),D=Object(c.useCallback)((function(e){var t=o?o(e):e;return A(t),t}),[o]),w=Object(c.useCallback)((function(){A(void 0)}),[]);return Object(c.useEffect)((function(){i&&y()}),[]),Object(a.jsx)(I,{isClearable:n,onChange:L,disableLocalFilter:!0,options:p,value:b,isLoading:x,onInputChange:D,onClear:w})},E=[{value:"AL",content:"Alabama"},{value:"AK",content:"Alaska"},{value:"AS",content:"American Samoa"},{value:"AZ",content:"Arizona"},{value:"AR",content:"Arkansas"},{value:"CA",content:"California"},{value:"CO",content:"Colorado"},{value:"CT",content:"Connecticut"},{value:"DE",content:"Delaware"},{value:"DC",content:"District Of Columbia"},{value:"FM",content:"Federated States Of Micronesia"},{value:"FL",content:"Florida"},{value:"GA",content:"Georgia"},{value:"GU",content:"Guam"},{value:"HI",content:"Hawaii"},{value:"ID",content:"Idaho"},{value:"IL",content:"Illinois"},{value:"IN",content:"Indiana"},{value:"IA",content:"Iowa"},{value:"KS",content:"Kansas"},{value:"KY",content:"Kentucky"},{value:"LA",content:"Louisiana"},{value:"ME",content:"Maine"},{value:"MH",content:"Marshall Islands"},{value:"MD",content:"Maryland"},{value:"MA",content:"Massachusetts"},{value:"MI",content:"Michigan"},{value:"MN",content:"Minnesota"},{value:"MS",content:"Mississippi"},{value:"MO",content:"Missouri"},{value:"MT",content:"Montana"},{value:"NE",content:"Nebraska"},{value:"NV",content:"Nevada"},{value:"NH",content:"New Hampshire"},{value:"NJ",content:"New Jersey"},{value:"NM",content:"New Mexico"},{value:"NY",content:"New York"},{value:"NC",content:"North Carolina"},{value:"ND",content:"North Dakota"},{value:"MP",content:"Northern Mariana Islands"},{value:"OH",content:"Ohio"},{value:"OK",content:"Oklahoma"},{value:"OR",content:"Oregon"},{value:"PW",content:"Palau"},{value:"PA",content:"Pennsylvania"},{value:"PR",content:"Puerto Rico"},{value:"RI",content:"Rhode Island"},{value:"SC",content:"South Carolina"},{value:"SD",content:"South Dakota"},{value:"TN",content:"Tennessee"},{value:"TX",content:"Texas"},{value:"UT",content:"Utah"},{value:"VT",content:"Vermont"},{value:"VI",content:"Virgin Islands"},{value:"VA",content:"Virginia"},{value:"WA",content:"Washington"},{value:"WV",content:"West Virginia"},{value:"WI",content:"Wisconsin"},{value:"WY",content:"Wyoming"}],S=function(e){return e?new Promise((function(t){setTimeout((function(){t(E.filter((function(t){return t.content.toLowerCase().includes(e.toLowerCase())})).slice(0,20))}),1e3)})):Promise.resolve(E.slice(0,20))};var T=function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)("div",{className:"window",style:{width:"300px"},children:[Object(a.jsxs)("div",{className:"title-bar",children:[Object(a.jsx)("div",{className:"title-bar-text",children:"Win XP autocomplete sample"}),Object(a.jsxs)("div",{className:"title-bar-controls",children:[Object(a.jsx)("button",{"aria-label":"Minimize"}),Object(a.jsx)("button",{"aria-label":"Maximize"}),Object(a.jsx)("button",{"aria-label":"Close"})]})]}),Object(a.jsx)("div",{className:"window-body",children:Object(a.jsx)(w,{loadOptions:S,isClearable:!0,shouldLoadDefaultOptions:!0})})]})})},P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,50)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};l.a.render(Object(a.jsxs)(o.a.StrictMode,{children:[Object(a.jsx)("link",{rel:"stylesheet",href:"https://unpkg.com/xp.css"}),Object(a.jsx)(T,{})]}),document.getElementById("root")),P()}},[[49,1,2]]]);
//# sourceMappingURL=main.cabb3226.chunk.js.map