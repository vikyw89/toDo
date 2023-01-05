(()=>{"use strict";var n={766:(n,e,t)=>{t.d(e,{Z:()=>i});var a=t(537),r=t.n(a),o=t(645),s=t.n(o)()(r());s.push([n.id,"* {\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n    /* outline: 1px solid white; */\n}\n\n:root {\n    --darkreader-neutral-background: #131516;\n    --darkreader-neutral-background2: #1d2325;\n    --darkreader-neutral-text: #d8d4cf;\n    --darkreader-selection-background: #004daa;\n    --darkreader-selection-background2: #255998;\n    --darkreader-selection-text: #e8e6e3;\n    --darkreader-done-task:#d8d4cf80;\n}\n\nbody {\n    background-color: var(--darkreader-neutral-background2);\n    color: var(--darkreader-neutral-text);\n    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    position: relative;\n    user-select: none;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    z-index: 0;\n}\n\n.overlay {\n    position: absolute;\n    top:0px;\n    left: 0px;\n    z-index:20;\n    width: 100%;\n    min-height: 100%;\n    background-color: #131516;\n}\n\n.Header {\n    display: grid;\n    grid-template-columns: 2fr 4fr 1fr 1fr;\n    background-color: var(--darkreader-neutral-background);\n    z-index: 3;\n}\n\n.Header > * {\n    padding: 15px;\n    padding-top: 20px;\n    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\n.nav-sort, .nav-notif {\n    text-align: end;\n}\n\n.task-category {\n    padding:10px;\n    font-weight: bold;\n    font-size: 24px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.TaskCard {\n    padding: 10px;\n    z-index: 2;\n    background-color: var(--darkreader-neutral-background);\n    display: flex;\n    gap:10px;\n    font-size: 18px;\n    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\n.done-task {\n    text-decoration:line-through;\n    color: var(--darkreader-done-task);\n}\n\n.task-list-today,\n.task-list-tomorrow,\n.task-list-upcoming,\n.task-list-someday {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap:1px;\n}\n\n.Main {\n}\n\n.Title {\n    text-align: center;\n    font-weight: bolder;\n    font-size: 1.3rem;\n}\n\n.Footer {\n    position: fixed;\n    bottom: 0;\n    left: 0px;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    text-align: center;\n    background-color: var(--darkreader-neutral-background);\n    z-index: 10;\n}\n\n.Footer > * {\n    padding: 10px;\n    padding-bottom: 20px;\n    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n    z-index: 5;\n}\n\n.active {\n    font-weight: bolder;\n    color: var(--darkreader-selection-background2);\n    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;\n}\n\n.AddTaskButton {\n    position: fixed;\n    bottom: 80px;\n    right: 30px;\n    font-size: 3rem;\n    scale: 3;\n    z-index: 10;\n}\n\n.AddTask {\n    background-color: var(--darkreader-neutral-background);\n}\n\n.AddTaskInput {\n    display: flex;\n    align-items: center;\n    font-size: 1.2rem;\n    margin: 10px;\n    background-color: var(--darkreader-neutral-background);\n    gap:10px;\n}\n\n.AddTaskInput > input {\n    background-color: var(--darkreader-neutral-background);\n    color: var(--darkreader-neutral-text);\n    flex: 1;\n    font-size: 1.2rem;\n    border: none;\n    outline: none;\n}\n\n.AddTaskInput > span:last-child {\n    color: var(--darkreader-selection-background2);\n    font-weight: bolder;\n}\n\n.AutoSuggestions {\n    display: grid;\n    padding: 10px;\n    gap:20px;\n    background-color: var(--darkreader-neutral-background);\n    min-height: 100vh;\n    align-content: flex-start;\n}\n\n.AutoSuggestionItem {\n    display: flex;\n    gap: 10px;\n}\n\n.AutoSuggestionItem > span:first-child {\n    color: var(--darkreader-selection-background2);\n    font-weight: bolder;\n}","",{version:3,sources:["webpack://./src/modules/style.css"],names:[],mappings:"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,wCAAwC;IACxC,yCAAyC;IACzC,kCAAkC;IAClC,0CAA0C;IAC1C,2CAA2C;IAC3C,oCAAoC;IACpC,gCAAgC;AACpC;;AAEA;IACI,uDAAuD;IACvD,qCAAqC;IACrC,mJAAmJ;IACnJ,kBAAkB;IAClB,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,OAAO;IACP,SAAS;IACT,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,sDAAsD;IACtD,UAAU;AACd;;AAEA;IACI,aAAa;IACb,iBAAiB;IACjB,iDAAiD;AACrD;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,YAAY;IACZ,iBAAiB;IACjB,eAAe;IACf,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,aAAa;IACb,UAAU;IACV,sDAAsD;IACtD,aAAa;IACb,QAAQ;IACR,eAAe;IACf,iDAAiD;AACrD;;AAEA;IACI,4BAA4B;IAC5B,kCAAkC;AACtC;;AAEA;;;;IAII,aAAa;IACb,sBAAsB;IACtB,2BAA2B;IAC3B,OAAO;AACX;;AAEA;AACA;;AAEA;IACI,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;AACrB;;AAEA;IACI,eAAe;IACf,SAAS;IACT,SAAS;IACT,WAAW;IACX,aAAa;IACb,qCAAqC;IACrC,kBAAkB;IAClB,sDAAsD;IACtD,WAAW;AACf;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,iDAAiD;IACjD,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,8CAA8C;IAC9C,4CAA4C;AAChD;;AAEA;IACI,eAAe;IACf,YAAY;IACZ,WAAW;IACX,eAAe;IACf,QAAQ;IACR,WAAW;AACf;;AAEA;IACI,sDAAsD;AAC1D;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,sDAAsD;IACtD,QAAQ;AACZ;;AAEA;IACI,sDAAsD;IACtD,qCAAqC;IACrC,OAAO;IACP,iBAAiB;IACjB,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,8CAA8C;IAC9C,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,QAAQ;IACR,sDAAsD;IACtD,iBAAiB;IACjB,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,SAAS;AACb;;AAEA;IACI,8CAA8C;IAC9C,mBAAmB;AACvB",sourcesContent:["* {\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n    /* outline: 1px solid white; */\n}\n\n:root {\n    --darkreader-neutral-background: #131516;\n    --darkreader-neutral-background2: #1d2325;\n    --darkreader-neutral-text: #d8d4cf;\n    --darkreader-selection-background: #004daa;\n    --darkreader-selection-background2: #255998;\n    --darkreader-selection-text: #e8e6e3;\n    --darkreader-done-task:#d8d4cf80;\n}\n\nbody {\n    background-color: var(--darkreader-neutral-background2);\n    color: var(--darkreader-neutral-text);\n    font-family: Roboto, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\n    position: relative;\n    user-select: none;\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    z-index: 0;\n}\n\n.overlay {\n    position: absolute;\n    top:0px;\n    left: 0px;\n    z-index:20;\n    width: 100%;\n    min-height: 100%;\n    background-color: #131516;\n}\n\n.Header {\n    display: grid;\n    grid-template-columns: 2fr 4fr 1fr 1fr;\n    background-color: var(--darkreader-neutral-background);\n    z-index: 3;\n}\n\n.Header > * {\n    padding: 15px;\n    padding-top: 20px;\n    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\n.nav-sort, .nav-notif {\n    text-align: end;\n}\n\n.task-category {\n    padding:10px;\n    font-weight: bold;\n    font-size: 24px;\n    display: flex;\n    justify-content: space-between;\n}\n\n.TaskCard {\n    padding: 10px;\n    z-index: 2;\n    background-color: var(--darkreader-neutral-background);\n    display: flex;\n    gap:10px;\n    font-size: 18px;\n    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n}\n\n.done-task {\n    text-decoration:line-through;\n    color: var(--darkreader-done-task);\n}\n\n.task-list-today,\n.task-list-tomorrow,\n.task-list-upcoming,\n.task-list-someday {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    gap:1px;\n}\n\n.Main {\n}\n\n.Title {\n    text-align: center;\n    font-weight: bolder;\n    font-size: 1.3rem;\n}\n\n.Footer {\n    position: fixed;\n    bottom: 0;\n    left: 0px;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    text-align: center;\n    background-color: var(--darkreader-neutral-background);\n    z-index: 10;\n}\n\n.Footer > * {\n    padding: 10px;\n    padding-bottom: 20px;\n    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n    z-index: 5;\n}\n\n.active {\n    font-weight: bolder;\n    color: var(--darkreader-selection-background2);\n    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;\n}\n\n.AddTaskButton {\n    position: fixed;\n    bottom: 80px;\n    right: 30px;\n    font-size: 3rem;\n    scale: 3;\n    z-index: 10;\n}\n\n.AddTask {\n    background-color: var(--darkreader-neutral-background);\n}\n\n.AddTaskInput {\n    display: flex;\n    align-items: center;\n    font-size: 1.2rem;\n    margin: 10px;\n    background-color: var(--darkreader-neutral-background);\n    gap:10px;\n}\n\n.AddTaskInput > input {\n    background-color: var(--darkreader-neutral-background);\n    color: var(--darkreader-neutral-text);\n    flex: 1;\n    font-size: 1.2rem;\n    border: none;\n    outline: none;\n}\n\n.AddTaskInput > span:last-child {\n    color: var(--darkreader-selection-background2);\n    font-weight: bolder;\n}\n\n.AutoSuggestions {\n    display: grid;\n    padding: 10px;\n    gap:20px;\n    background-color: var(--darkreader-neutral-background);\n    min-height: 100vh;\n    align-content: flex-start;\n}\n\n.AutoSuggestionItem {\n    display: flex;\n    gap: 10px;\n}\n\n.AutoSuggestionItem > span:first-child {\n    color: var(--darkreader-selection-background2);\n    font-weight: bolder;\n}"],sourceRoot:""}]);const i=s},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",a=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),a&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),a&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,a,r,o){"string"==typeof n&&(n=[[null,n,void 0]]);var s={};if(a)for(var i=0;i<this.length;i++){var d=this[i][0];null!=d&&(s[d]=!0)}for(var c=0;c<n.length;c++){var l=[].concat(n[c]);a&&s[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),r&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=r):l[4]="".concat(r)),e.push(l))}},e}},537:n=>{n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var a=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),r="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),o="/*# ".concat(r," */");return[e].concat([o]).join("\n")}return[e].join("\n")}},379:n=>{var e=[];function t(n){for(var t=-1,a=0;a<e.length;a++)if(e[a].identifier===n){t=a;break}return t}function a(n,a){for(var o={},s=[],i=0;i<n.length;i++){var d=n[i],c=a.base?d[0]+a.base:d[0],l=o[c]||0,u="".concat(c," ").concat(l);o[c]=l+1;var A=t(u),p={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==A)e[A].references++,e[A].updater(p);else{var g=r(p,a);a.byIndex=i,e.splice(i,0,{identifier:u,updater:g,references:1})}s.push(u)}return s}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var o=a(n=n||[],r=r||{});return function(n){n=n||[];for(var s=0;s<o.length;s++){var i=t(o[s]);e[i].references--}for(var d=a(n,r),c=0;c<o.length;c++){var l=t(o[c]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}o=d}}},569:n=>{var e={};n.exports=function(n,t){var a=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var a="";t.supports&&(a+="@supports (".concat(t.supports,") {")),t.media&&(a+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(a+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),a+=t.css,r&&(a+="}"),t.media&&(a+="}"),t.supports&&(a+="}");var o=t.sourceMap;o&&"undefined"!=typeof btoa&&(a+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleTagTransform(a,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(a){var r=e[a];if(void 0!==r)return r.exports;var o=e[a]={id:a,exports:{}};return n[a](o,o.exports,t),o.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var a in e)t.o(e,a)&&!t.o(n,a)&&Object.defineProperty(n,a,{enumerable:!0,get:e[a]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),a=t(795),r=t.n(a),o=t(569),s=t.n(o),i=t(565),d=t.n(i),c=t(216),l=t.n(c),u=t(589),A=t.n(u),p=t(766),g={};function m(n,e){if(e.length<n)throw new TypeError(n+" argument"+(n>1?"s":"")+" required, but only "+e.length+" present")}function v(n){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},v(n)}function f(n){m(1,arguments);var e=Object.prototype.toString.call(n);return n instanceof Date||"object"===v(n)&&"[object Date]"===e?new Date(n.getTime()):"number"==typeof n||"[object Number]"===e?new Date(n):("string"!=typeof n&&"[object String]"!==e||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))}function k(n,e){for(var t=n<0?"-":"",a=Math.abs(n).toString();a.length<e;)a="0"+a;return t+a}function I(n,e){var t,a;m(1,arguments);var r=f(n);if(isNaN(r.getTime()))throw new RangeError("Invalid time value");var o=String(null!==(t=null==e?void 0:e.format)&&void 0!==t?t:"extended"),s=String(null!==(a=null==e?void 0:e.representation)&&void 0!==a?a:"complete");if("extended"!==o&&"basic"!==o)throw new RangeError("format must be 'extended' or 'basic'");if("date"!==s&&"time"!==s&&"complete"!==s)throw new RangeError("representation must be 'date', 'time', or 'complete'");var i="",d="",c="extended"===o?"-":"",l="extended"===o?":":"";if("time"!==s){var u=k(r.getDate(),2),A=k(r.getMonth()+1,2),p=k(r.getFullYear(),4);i="".concat(p).concat(c).concat(A).concat(c).concat(u)}if("date"!==s){var g=r.getTimezoneOffset();if(0!==g){var v=Math.abs(g),I=k(Math.floor(v/60),2),y=k(v%60,2),C=g<0?"+":"-";d="".concat(C).concat(I,":").concat(y)}else d="Z";var b=k(r.getHours(),2),x=k(r.getMinutes(),2),D=k(r.getSeconds(),2),h=""===i?"":"T",U=[b,x,D].join(l);i="".concat(i).concat(h).concat(U).concat(d)}return i}g.styleTagTransform=A(),g.setAttributes=d(),g.insert=s().bind(null,"head"),g.domAPI=r(),g.insertStyleElement=l(),e()(p.Z,g),p.Z&&p.Z.locals&&p.Z.locals;const y={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let C;const b=new Uint8Array(16);function x(){if(!C&&(C="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!C))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return C(b)}const D=[];for(let n=0;n<256;++n)D.push((n+256).toString(16).slice(1));const h=function(n,e,t){if(y.randomUUID&&!e&&!n)return y.randomUUID();const a=(n=n||{}).random||(n.rng||x)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,e){t=t||0;for(let n=0;n<16;++n)e[t+n]=a[n];return e}return function(n,e=0){return(D[n[e+0]]+D[n[e+1]]+D[n[e+2]]+D[n[e+3]]+"-"+D[n[e+4]]+D[n[e+5]]+"-"+D[n[e+6]]+D[n[e+7]]+"-"+D[n[e+8]]+D[n[e+9]]+"-"+D[n[e+10]]+D[n[e+11]]+D[n[e+12]]+D[n[e+13]]+D[n[e+14]]+D[n[e+15]]).toLowerCase()}(a)};class U{static list=[];static create=({categoriesUUID:n,title:e,description:t,dueDate:a,priority:r})=>{const o=new U({categoriesUUID:n,title:e,description:t,dueDate:a,priority:r});U.list=[...U.list??[],o]};static read=()=>U.list;static update=({UUID:n,categoriesUUID:e,title:t,description:a,dueDate:r,priority:o,status:s})=>{const i=U.list.reduce(((i,d)=>(d.UUID===n&&(d.title=t??d.title,d.categoriesUUID=e??d.categoriesUUID,d.description=a??d.description,d.dueDate=r??d.dueDate,d.priority=o??d.priority,d.status=s??d.status),i.concat(d))),[]);U.list=i};static delete=({UUID:n})=>{const e=U.list.filter((e=>e.UUID!==n));U.list=e};constructor({categoriesUUID:n,title:e,description:t,dueDate:a,priority:r}){this.categoriesUUID=n,this.UUID=h(),this.title=e,this.description=t??"",this.priority=r??"Normal",this.createdDate=I(new Date,{representation:"date"}),this.dueDate=a,this.status="queue"}}class T{static list=[];static create=({name:n})=>{const e=new T({name:n});T.list=[...T.list??[],e]};static read=()=>T.list;static update=({UUID:n,name:e})=>{const t=T.list.reduce(((t,a)=>(a.UUID===n&&(a.name=e??a.name),t.concat(a))),[]);T.list=t};static delete=({UUID:n})=>{if(1===T.list.length)return;const e=T.list.filter((e=>e.UUID!==n));T.list=e};constructor({name:n}){this.UUID=h(),this.name=n}}class S{static taskList={Call:'\n        <span class="material-symbols-outlined">\n            call\n        </span>',Check:'\n        <span class="material-symbols-outlined">\n            search_check\n        </span>\n        ',Get:'\n        <span class="material-symbols-outlined">\n            approval_delegation\n        </span>\n        ',Email:'\n        <span class="material-symbols-outlined">\n            mail\n        </span>\n        ',Buy:'\n        <span class="material-symbols-outlined">\n            shopping_cart\n        </span>\n        ',"Meet / Schedule":'\n        <span class="material-symbols-outlined">\n            schedule\n        </span>\n        ',Clean:'\n        <span class="material-symbols-outlined">\n            cleaning_services\n        </span>\n        ',Take:'\n        <span class="material-symbols-outlined">\n            takeout_dining\n        </span>\n        ',Send:'\n        <span class="material-symbols-outlined">\n            send\n        </span>\n        ',Pay:'\n        <span class="material-symbols-outlined">\n            payments\n        </span>\n        ',Make:'\n        <span class="material-symbols-outlined">\n            draw\n        </span>\n        ',Pick:'\n        <span class="material-symbols-outlined">\n            hail\n        </span>\n        ',Do:'\n        <span class="material-symbols-outlined">\n            assignment\n        </span>\n        ',Read:'\n        <span class="material-symbols-outlined">\n            menu_book\n        </span>\n        ',Print:'\n        <span class="material-symbols-outlined">\n            print\n        </span>\n        ',Finish:'\n        <span class="material-symbols-outlined">\n            golf_course\n        </span>\n        ',Study:'\n        <span class="material-symbols-outlined">\n            visibility\n        </span>\n        '};static inputCheck=n=>n?Object.fromEntries(Object.entries(S.taskList).filter((([e,t])=>{if(e.toLowerCase().match(new RegExp(String.raw`${n.toLowerCase()}`),"g"))return!0}))):S.taskList}class B{static storage=n=>JSON.parse(localStorage.getItem(n));static setStorage=(n,e)=>{e?localStorage.setItem(n,JSON.stringify(e)):localStorage.removeItem(n)}}class w{static createCategories=({name:n})=>{T.create({name:n}),B.setStorage("Categories",T.list)};static readCategories=()=>(T.list=B.storage("Categories"),T.list);static updateCategories=({UUID:n,name:e})=>{T.update({UUID:n,name:e}),B.setStorage("Categories",T.list)};static deleteCategories=({UUID:n})=>{T.delete({UUID:n}),B.setStorage("Categories",T.list)};static createToDo=({categoriesUUID:n,title:e,description:t,dueDate:a,priority:r})=>{U.create({categoriesUUID:n,title:e,description:t,dueDate:a,priority:r}),B.setStorage("ToDo",U.list)};static readToDo=()=>(U.list=B.storage("ToDo"),U.list);static updateToDo=({UUID:n,categoriesUUID:e,title:t,description:a,dueDate:r,priority:o,status:s})=>{U.update({UUID:n,categoriesUUID:e,title:t,description:a,dueDate:r,priority:o,status:s}),B.setStorage("ToDo",U.list)};static deleteToDo=({UUID:n})=>{U.delete({UUID:n}),B.setStorage("ToDo",U.list)}}function E(n){if(null===n||!0===n||!1===n)return NaN;var e=Number(n);return isNaN(e)?e:e<0?Math.ceil(e):Math.floor(e)}function q(n,e){m(2,arguments);var t=f(n),a=E(e);return isNaN(a)?new Date(NaN):a?(t.setDate(t.getDate()+a),t):t}function $(n,e){m(2,arguments);var t=f(n),a=E(e);if(isNaN(a))return new Date(NaN);if(!a)return t;var r=t.getDate(),o=new Date(t.getTime());o.setMonth(t.getMonth()+a+1,0);var s=o.getDate();return r>=s?o:(t.setFullYear(o.getFullYear(),o.getMonth(),r),t)}function j(n){return j="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},j(n)}function L(n,e){if(m(2,arguments),!e||"object"!==j(e))return new Date(NaN);var t=e.years?E(e.years):0,a=e.months?E(e.months):0,r=e.weeks?E(e.weeks):0,o=e.days?E(e.days):0,s=e.hours?E(e.hours):0,i=e.minutes?E(e.minutes):0,d=e.seconds?E(e.seconds):0,c=f(n),l=a||t?$(c,a+12*t):c,u=o||r?q(l,o+7*r):l,A=i+60*s,p=d+60*A,g=1e3*p,v=new Date(u.getTime()+g);return v}class M{static nav="task";static taskDueDate=null;static render=()=>{const n=document.querySelector("#content");1==("addTask"===M.nav)?n.innerHTML=`\n                    ${this.AddTask()}\n                    ${this.AutoSuggestions()}\n                `:n.innerHTML=`\n                    ${this.Header()}\n                    ${this.Main()}\n                    ${this.Footer()}\n                `,console.log(document.querySelector(`.nav-${M.nav}`)),document.querySelector(`.nav-${M.nav}`).classList.add("active")};static EditTask=({UUID:n,categoriesUUID:e,title:t,description:a,dueDate:r,priority:o,status:s})=>`\n        <div class="EditTask">\n            <div class="EditTaskHeader">\n                <span>TASK DETAILS</span>\n                <span>Save</span>\n            </div>\n            <div>\n                TITLE\n                ${t}\n            </div>\n            <div>\n                DESCRIPTION\n                ${a}\n            </div>\n            <div>\n                DUE DATE\n                ${r}\n            </div>\n            <div>\n                CATEGORY\n                ${w.readCategories().filter((n=>n.UUID===e))[0].name}\n            </div>\n            <div>\n                PRIORITY\n                ${o}\n            </div>\n            <div>\n                STATUS\n                ${s}\n            </div>\n        </div>\n        `;static Header=()=>(setTimeout((()=>{document.querySelector(".nav-apps").addEventListener("click",(()=>{M.nav="apps",M.render()})),document.querySelector(".nav-notif").addEventListener("click",(()=>{M.nav="notif",M.render()})),document.querySelector(".nav-sort").addEventListener("click",(()=>{M.nav="sort",M.render()}))}),100),'\n        <div class=\'Header\'>\n            <span class="material-symbols-outlined nav-apps">\n                apps\n            </span>\n            <div class=\'Title\'>Title</div>\n            <span class="material-symbols-outlined nav-notif">\n                circle_notifications\n            </span>\n            <span class="material-symbols-outlined nav-sort">\n                sort\n            </span>\n        </div>\n        ');static Footer=()=>(setTimeout((()=>{document.querySelector(".nav-task").addEventListener("click",(()=>{M.nav="task",M.render()})),document.querySelector(".nav-calendar").addEventListener("click",(()=>{M.nav="calendar",M.render()})),document.querySelector(".nav-settings").addEventListener("click",(()=>{M.nav="settings",M.render()}))}),100),'\n        <div class=\'Footer\'>\n            <span class="material-symbols-outlined nav-task">\n                task_alt\n            </span>\n            <span class="material-symbols-outlined nav-calendar">\n                calendar_month\n            </span>\n            <span class="material-symbols-outlined nav-settings">\n                settings\n            </span>\n        </div>\n        ');static Main=()=>`\n        <div class='Main'>\n            ${this.Task()}\n        </div>\n        `;static AddTaskButton=()=>(setTimeout((()=>{document.querySelector(".AddTaskButton").addEventListener("click",(()=>{document.querySelector("#content").innerHTML=`\n                    ${this.AddTask()}\n                    ${this.AutoSuggestions()}\n                `}))}),100),"\n        <div class='AddTaskButton'>\n            <span class=\"material-symbols-outlined nav-addTask\">\n                add_circle\n            </span>\n        </div>\n        ");static Calendar=()=>"\n        <div class='Calendar'>\n\n        </div>\n        ";static Task=()=>{setTimeout((()=>{document.querySelectorAll(".add-task").forEach((n=>{n.addEventListener("click",(n=>{const e=new Date;let t;switch(!0){case"today"===n.target.dataset.key:t=I(e,{representation:"date"});break;case"tomorrow"===n.target.dataset.key:t=I(L(e,{days:1}),{representation:"date"});break;case"upcoming"===n.target.dataset.key:t=I(L(e,{weeks:1}),{representation:"date"});break;case"someday"===n.target.dataset.key:t=null}document.querySelector("#content").innerHTML=`\n                        ${this.AddTask({dueDate:t})}\n                        ${this.AutoSuggestions()}\n                    `,console.log(n.target.dataset.key),M.activePages="addTask",M.render()}))}))}),100);const n=new Date,e=I(n,{representation:"date"}),t=I(L(n,{days:1}),{representation:"date"}),a=w.readToDo().filter((n=>n.dueDate===e&&"end"!==n.status)),r=w.readToDo().filter((n=>n.dueDate===t&&"end"!==n.status)),o=w.readToDo().filter((n=>n.dueDate!==e&&n.dueDate!==t&&n.dueDate&&"end"!==n.status)),s=w.readToDo().filter((n=>null===n.dueDate&&"end"!==n.status)),i=w.readToDo().filter((n=>"end"===n.status));return`\n        <div class='Task'>\n            <div class='task-category'>\n                <div class='today'>Today</div>\n                <span class="material-symbols-outlined add-task" data-key='today'>\n                    add\n                </span>\n            </div>\n            <div class='task-list-today'>\n                ${a.map((n=>this.TaskCard({title:n.title,UUID:n.UUID}))).join("")}\n            </div>\n            <div class='task-category'>\n                <div class='tomorrow'>Tomorrow</div>\n                <span class="material-symbols-outlined add-task" data-key='tomorrow'>\n                    add\n                </span>\n            </div>\n            <div class='task-list-tomorrow'>\n                ${r.map((n=>this.TaskCard({title:n.title,UUID:n.UUID}))).join("")}\n            </div>\n            <div class='task-category'>\n                <div class='upcoming'>Upcoming</div>\n                <span class="material-symbols-outlined add-task" data-key='upcoming'>\n                    add\n                </span>\n            </div>\n            <div class='task-list-upcoming'>\n                ${o.map((n=>this.TaskCard({title:n.title,UUID:n.UUID}))).join("")}\n            </div>\n            <div class='task-category'>\n                <div class='someday'>Someday</div>\n                <span class="material-symbols-outlined add-task" data-key='someday'>\n                    add\n            </span>\n            </div>\n            <div class='task-list-someday'>\n                ${s.map((n=>this.TaskCard({title:n.title,UUID:n.UUID}))).join("")}\n            </div>\n            <div class='task-category'>\n            <div class='archives'>Archives</div>\n            </div>\n            <div class='task-list-archives'>\n                ${i.map((n=>this.TaskCard({title:n.title,UUID:n.UUID,status:n.status}))).join("")}\n            </div>\n        </div>\n        ${this.AddTaskButton()}\n        `};static AddTask=({dueDate:n})=>(setTimeout((()=>{const e=document.querySelector(".AddTaskInput > input");e.focus(),document.querySelector(".AddTaskInput > input").addEventListener("input",(n=>{document.querySelector(".AutoSuggestions").outerHTML=this.AutoSuggestions(n.target.value),document.querySelectorAll(".TaskSuggestionItem").forEach((n=>{n.addEventListener("click",(n=>{const t=n.currentTarget.querySelector("span:last-child").textContent;e.value=t+" ",e.focus()}))}))})),document.querySelector(".AddTaskInput > span:first-child").addEventListener("click",(()=>{M.nav="task",M.render()})),document.querySelector(".AddTaskInput > span:last-child").addEventListener("click",(()=>{const e=document.querySelector(".AddTaskInput > input");w.createToDo({categoriesUUID:w.readCategories()[0].UUID,title:e.value,dueDate:n}),console.log(w.readToDo()),M.nav="task",M.render()}))}),100),'\n            <div class=\'AddTask\'>\n                <div class="AddTaskInput">\n                    <span class="material-symbols-outlined">\n                        close\n                    </span>\n                    <input type="text" autocomplete="on" autofocus placeholder="I want to...">\n                    </input>\n                    <span class="material-symbols-outlined">\n                        add_task\n                    </span>\n                </div>\n            </div>\n        ');static AutoSuggestions=n=>(setTimeout((()=>{document.querySelectorAll(".AutoSuggestionItem").forEach((n=>{n.addEventListener("click",(n=>{const e=n.currentTarget.querySelector("span:last-child").textContent,t=document.querySelector(".AddTaskInput > input");t.value=e+" ",t.focus()}))}))}),100),`\n        <div class="AutoSuggestions">\n            ${Object.entries(S.inputCheck(n)).map((([n,e])=>this.AutoSuggestionItem({key:n,value:e}))).join("")}\n        </div>\n        `);static AutoSuggestionItem=({key:n,value:e})=>`\n        <div class="AutoSuggestionItem">\n            ${e}\n            <span>${n}</span>\n        </div>\n        `;static TaskCard=({title:n,UUID:e,status:t})=>{setTimeout((()=>{document.querySelector(`.card-title[data-uuid='${e}']`).addEventListener("click",(()=>{const n=w.readToDo().filter((n=>n.UUID===e));document.querySelector(".Main").innerHTML=`\n                    ${this.EditTask(n[0])}\n                `,document.querySelector(`.nav-${M.nav}`).classList.remove("active")})),document.querySelector(`input[data-uuid='${e}']`).addEventListener("click",(()=>{document.querySelector(`div[data-uuid='${e}']`),"queue"===w.readToDo().filter((n=>n.UUID===e))[0].status?w.updateToDo({UUID:e,status:"end"}):w.updateToDo({UUID:e,status:"queue"}),M.render()}))}),100),document.createElement("div");const a="end"===t?"done-task":null;return`\n        <div class='TaskCard'>\n            <input type='checkbox' class='task-checkmark' ${a?"checked":null} data-UUID='${e}'></input>\n            <div class='card-title ${a}' data-UUID='${e}'>${n}</div>\n        </div>\n        `}}w.readCategories(),w.readToDo(),w.readCategories()||w.createCategories({name:"personal"}),w.readToDo()||(w.createToDo({categoriesUUID:w.readCategories()[0].UUID,title:"Trials"}),w.createToDo({categoriesUUID:w.readCategories()[0].UUID,title:"Trials2"}),w.createToDo({categoriesUUID:w.readCategories()[0].UUID,title:"Trials3"}),w.createToDo({categoriesUUID:w.readCategories()[0].UUID,title:"Trials4",dueDate:20221229})),M.render()})()})();
//# sourceMappingURL=bundle.js.map