(this["webpackJsonpdemo-crud-1"]=this["webpackJsonpdemo-crud-1"]||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var c=n(1),r=n.n(c),i=n(8),o=n.n(i),u=(n(14),n(9)),a=n(5),j=(n(15),n(0));var l=function(t){return Object(j.jsx)("header",{children:Object(j.jsx)("h1",{children:"NoteKeeper"})})},d=n(4),s=n(7);var b=function(t){var e=Object(c.useState)({title:"",content:""}),n=Object(a.a)(e,2),r=n[0],i=n[1];function o(t){var e=t.target,n=e.name,c=e.value;i((function(t){return Object(s.a)(Object(s.a)({},t),{},Object(d.a)({},n,c))}))}return Object(j.jsx)("div",{children:Object(j.jsxs)("form",{children:[Object(j.jsx)("input",{name:"title",onChange:o,value:r.title,placeholder:"Title"}),Object(j.jsx)("textarea",{name:"content",onChange:o,value:r.content,placeholder:"Take a note...",rows:"3"}),Object(j.jsx)("button",{onClick:function(e){t.onAdd(r),i({title:"",content:""}),e.preventDefault()},children:"Add"})]})})};var O=function(t){return Object(j.jsxs)("div",{className:"note",children:[Object(j.jsx)("h1",{children:t.title}),Object(j.jsx)("p",{children:t.content}),Object(j.jsx)("button",{onClick:function(){t.onDelete(t.id)},children:"DELETE"})]})};var f=function(){var t=Object(c.useState)([]),e=Object(a.a)(t,2),n=e[0],r=e[1];function i(t){r((function(e){return e.filter((function(e,n){return n!==t}))}))}return Object(j.jsxs)("div",{children:[Object(j.jsx)(l,{}),Object(j.jsx)(b,{onAdd:function(t){r((function(e){return[].concat(Object(u.a)(e),[t])}))}}),n.map((function(t,e){return Object(j.jsx)(O,{id:e,title:t.title,content:t.content,onDelete:i},e)}))]})},h=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(e){var n=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),r(t),i(t),o(t)}))};o.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),h()}},[[17,1,2]]]);
//# sourceMappingURL=main.8b82a3f9.chunk.js.map