(this.webpackJsonpexams=this.webpackJsonpexams||[]).push([[0],{10:function(e,t,a){},11:function(e,t,a){},13:function(e,t,a){"use strict";a.r(t);var s=a(1),n=a.n(s),c=a(5),i=a.n(c),r=(a(10),a(2)),u=a(3),l=(a(11),a(0)),o=function(e){var t=e.disabled,a=e.title,s=e.onClick,n=e.className;return Object(l.jsx)("button",{onClick:s,disabled:t,className:n,children:a})},j=function(e){var t=e.data,a={color:t.count===t.max?"red":""};return Object(l.jsx)("div",{className:"display",children:Object(l.jsx)("div",{className:"block_display",children:t.max<=t.min||t.min<0?Object(l.jsx)("span",{className:"message error",children:"Incorrect value!"}):t.message?Object(l.jsx)("span",{className:"message",children:"enter values and press 'set'"}):Object(l.jsx)("span",{className:"counter",style:a,children:t.count})})})},d=function(e){var t=e.data,a=e.dispatch;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j,{data:t}),Object(l.jsxs)("div",{className:"wrapper_buttons_count",children:[Object(l.jsx)(o,{title:"inc",disabled:t.count===t.max||t.message,onClick:function(){return a({type:"changeCount"})}}),Object(l.jsx)(o,{title:"reset",disabled:!(t.min>=0&&t.count>t.min),onClick:function(){return a({type:"setInitialValue",num:t.min})}}),Object(l.jsx)(o,{disabled:!1,title:"set",onClick:function(){return a({type:"showMessageAndToggle",message:!1,toggle:!0})}})]})]})},m=function(e){var t=e.title;return Object(l.jsx)("span",{className:"span_value",children:t})},b=function(e){var t=e.type,a=e.value,n=e.className,c=e.changeValue,i=e.setDisableSet,r=e.data;Object(s.useEffect)((function(){r.max<=r.min&&i(!0)}),[]);return Object(l.jsx)("span",{className:"span_input",children:Object(l.jsx)("input",{type:t,value:a,onChange:function(e){var t=e.currentTarget.valueAsNumber;e.currentTarget&&c(t),i(!1),t<0&&i(!0)},className:n})})},O=function(e){var t=e.data,a=e.dispatch,s=e.setDisableSet;return Object(l.jsxs)("div",{className:"display display_set",children:[Object(l.jsxs)("div",{className:"block_dis_set",children:[Object(l.jsx)(m,{title:"max value"}),Object(l.jsx)(b,{data:t,type:"number",changeValue:function(e){a({type:"setMaxValue",num:e})},value:t.max,className:t.min>=t.max?"error":"",setDisableSet:s})]}),Object(l.jsxs)("div",{className:"block_dis_set",children:[Object(l.jsx)(m,{title:"start value"}),Object(l.jsx)(b,{data:t,type:"number",changeValue:function(e){a({type:"setMinValue",num:e})},value:t.min,className:t.min<0||t.min>=t.max?"error":"",setDisableSet:s})]})]})},x=function(e){var t=e.data,a=e.dispatch,n=Object(s.useState)(!0),c=Object(u.a)(n,2),i=c[0],r=c[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(O,{data:t,dispatch:a,setDisableSet:r}),Object(l.jsx)("div",{className:"wrapper_buttons_count",children:Object(l.jsx)(o,{disabled:i,title:"set",onClick:function(){r(!0),a({type:"showMessageAndToggle",message:!1,toggle:!1})}})})]})},p=function(e){var t=e.value,a=e.dispatch;return Object(l.jsx)("div",{className:"counter_2",children:t.toggle?Object(l.jsx)(x,{data:t,dispatch:a}):Object(l.jsx)(d,{data:t,dispatch:a})})},v=function(e){var t=e.data,a=e.dispatch;return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(j,{data:t}),Object(l.jsxs)("div",{className:"wrapper_buttons_count",children:[Object(l.jsx)(o,{title:"inc",disabled:t.count===t.max||t.message,onClick:function(){return a({type:"changeCount"})}}),Object(l.jsx)(o,{title:"reset",disabled:!(t.min>=0&&t.count>t.min),onClick:function(){return a({type:"setInitialValue",num:t.min})}})]})]})},g=function(e){var t=e.value,a=e.dispatch;return Object(l.jsxs)("div",{className:"counter_1",children:[Object(l.jsx)(v,{data:t,dispatch:a}),Object(l.jsx)(x,{dispatch:a,data:t})]})};function h(){var e=Object(s.useState)({min:0,max:0,count:0,message:!0,variantCounters:!0,toggle:!0}),t=Object(u.a)(e,2),a=t[0],n=t[1];Object(s.useEffect)((function(){n(Object(r.a)(Object(r.a)({},a),{},{count:a.min}))}),[a.min]),Object(s.useEffect)((function(){var e=localStorage.getItem("counter");e&&n(Object(r.a)(Object(r.a)({},a),{},{max:JSON.parse(e).max,min:JSON.parse(e).min}))}),[]),Object(s.useEffect)((function(){var e={max:a.max,min:a.min};localStorage.setItem("counter",JSON.stringify(e))}),[a.max,a.min]);var c=function(e){switch(e.type){case"setMinValue":return void 0!==e.num&&n(Object(r.a)(Object(r.a)({},a),{},{min:e.num,message:!0}));case"setMaxValue":return void 0!==e.num&&n(Object(r.a)(Object(r.a)({},a),{},{max:e.num,message:!0}));case"changeCount":var t=a.count;return a.count<=a.max&&t++,n(Object(r.a)(Object(r.a)({},a),{},{count:t}));case"setInitialValue":return void 0!==e.num&&n(Object(r.a)(Object(r.a)({},a),{},{count:e.num}));case"showMessageAndToggle":return void 0!==e.message&&void 0!==e.toggle&&n(Object(r.a)(Object(r.a)({},a),{},{message:e.message,toggle:e.toggle}));default:return n(a)}};return Object(l.jsxs)("div",{className:"app",children:[Object(l.jsx)(o,{disabled:!1,title:a.variantCounters?"switch two displays":"switch one display",onClick:function(){n(Object(r.a)(Object(r.a)({},a),{},{variantCounters:!a.variantCounters}))},className:"switch_counters"}),a.variantCounters?Object(l.jsx)(p,{value:a,dispatch:c}):Object(l.jsx)(g,{value:a,dispatch:c})]})}var f=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,14)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(h,{})}),document.getElementById("root")),f()}},[[13,1,2]]]);
//# sourceMappingURL=main.268b2f0e.chunk.js.map