(this["webpackJsonpnews-viewer"]=this["webpackJsonpnews-viewer"]||[]).push([[0],{34:function(e,n,t){e.exports=t(62)},39:function(e,n,t){},62:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(28),o=t.n(c),i=t(10),l=(t(39),t(1)),u=t(5),m=t(6);function s(){var e=Object(u.a)(["\n  font-size: 1.125rem;\n  cursor: pointer;\n  white-space: pre;\n  text-decoration: none;\n  color: inherit;\n  padding-bottom: 0.25rem;\n\n  &:hover {\n    color: #490557;\n  }\n\n  /* Category+\ud074\ub798\uc2a4 \ub124\uc784 */\n  &.active {\n    font-weight: 700;\n    border-bottom: 2px solid #22b8cf;\n    color: #22b8cf;\n    &:hover {\n      color: #3bc9db;\n    }\n  }\n\n  & + & {\n    margin-left: 1rem;\n  }\n"]);return s=function(){return e},e}function p(){var e=Object(u.a)(["\n  display: flex;\n  padding: 1rem;\n  width: 768px;\n  margin: 0 auto;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    overflow-x: auto;\n  }\n"]);return p=function(){return e},e}var f=[{name:"all",text:"\uc804\uccb4\ubcf4\uae30"},{name:"business",text:"\ube44\uc988\ub2c8\uc2a4"},{name:"entertainment",text:"\uc5d4\ud130\ud14c\uc778\uba3c\ud2b8"},{name:"health",text:"\uac74\uac15"},{name:"science",text:"\uacfc\ud559"},{name:"sports",text:"\uc2a4\ud3ec\uce20"},{name:"technology",text:"\uae30\uc220"}],d=m.a.div(p()),h=Object(m.a)(i.b)(s()),b=function(){return r.a.createElement(d,null,f.map((function(e){return r.a.createElement(h,{key:e.name,activeClassName:"active",exact:"all"===e.name,to:"all"===e.name?"/":"/".concat(e.name)},e.text)})))},g=t(7);function v(){var e=Object(u.a)(["\n  display: flex;\n  .thumbnail {\n    margin-right: 1rem;\n    img {\n      display: block;\n      width: 160px;\n      height: 100px;\n      object-fit: cover; /* \ud3ed\uc5d0 \ub9de\uac8c \uc774\ubbf8\uc9c0\uac00 \uc870\uc815 */\n    }\n  }\n  .contents {\n    h2 {\n      margin: 0;\n      a {\n        color: black;\n      }\n    }\n    p {\n      margin: 0;\n      line-height: 1.5;\n      margin-top: 0.5rem;\n      white-space: normal;\n    }\n  }\n\n  & + & {\n    margin-top: 3rem;\n  }\n"]);return v=function(){return e},e}var x=m.a.div(v()),w=function(e){var n=e.article,t=n.title,a=n.description,c=n.url,o=n.urlToImage;return r.a.createElement(x,null,o&&r.a.createElement("div",{className:"thumbnail"},r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{src:o,alt:"thumbnail"}))),r.a.createElement("div",{className:"contents"},r.a.createElement("h2",null,r.a.createElement("a",{href:c,target:"_blank",rel:"noopener noreferrer"},t)),r.a.createElement("p",null,a)))},E=t(32),y=t.n(E),j=t(16),O=t.n(j),k=t(33),S=function(e,n){var t=Object(a.useState)(!1),r=Object(g.a)(t,2),c=r[0],o=r[1],i=Object(a.useState)(null),l=Object(g.a)(i,2),u=l[0],m=l[1],s=Object(a.useState)(null),p=Object(g.a)(s,2),f=p[0],d=p[1];return Object(a.useEffect)((function(){(function(){var n=Object(k.a)(O.a.mark((function n(){var t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o(!0),n.prev=1,n.next=4,e();case 4:t=n.sent,m(t),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),d(n.t0);case 11:o(!1);case 12:case"end":return n.stop()}}),n,null,[[1,8]])})));return function(){return n.apply(this,arguments)}})()()}),n),[c,u,f]};function N(){var e=Object(u.a)(["\n  box-sizing: border-box;\n  padding-bottom: 3rem;\n  width: 768px;\n  margin: 0 auto;\n  margin-top: 2rem;\n  @media screen and (max-width: 768px) {\n    width: 100%;\n    padding-left: 1rem;\n    padding-right: 1rem;\n  }\n"]);return N=function(){return e},e}var z=m.a.div(N()),B=function(e){var n=e.category,t=S((function(){var e="all"===n?"":"&category=".concat(n);return y.a.get("http://newsapi.org/v2/top-headlines?country=kr".concat(e,"&apiKey=e4116cb619b94614a1916adb70cf89e5"))}),[n]),a=Object(g.a)(t,3),c=a[0],o=a[1],i=a[2];if(c)return r.a.createElement(z,null,"\ub300\uae30 \uc911...");if(!o)return null;if(i)return r.a.createElement(z,null,"\uc5d0\ub7ec \ubc1c\uc0dd!");var l=o.data.articles;return r.a.createElement(z,null,l.map((function(e){return r.a.createElement(w,{key:l.url,article:e})})))},C=function(e){var n=e.match.params.category||"all";return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(B,{category:n}))},I=function(){return r.a.createElement(l.a,{path:"/:category?",component:C})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(i.a,null,r.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[34,1,2]]]);
//# sourceMappingURL=main.945bfd0b.chunk.js.map