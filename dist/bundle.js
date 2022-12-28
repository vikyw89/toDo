(()=>{"use strict";var e={766:(e,t,n)=>{n.d(t,{Z:()=>s});var r=n(537),a=n.n(r),o=n(645),i=n.n(o)()(a());i.push([e.id,"* {\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n    /* outline: 1px solid white; */\n}\n\n:root {\n    --darkreader-neutral-background: #131516;\n    --darkreader-neutral-background2: #1d2325;\n    --darkreader-neutral-text: #d8d4cf;\n    --darkreader-selection-background: #004daa;\n    --darkreader-selection-text: #e8e6e3;\n}\n\nbody {\n    background-color: var(--darkreader-neutral-background2);\n    color: var(--darkreader-neutral-text);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    z-index: 0;\n    user-select: none;\n}\n\n.Categories {\n    display: flex;\n    flex-wrap: nowrap;\n}\n\n.Category {\n    border-radius: 10px;\n    border: 1px solid white;\n    padding: 2px;\n}\n\n.Footer {\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    text-align: center;\n    background-color: var(--darkreader-neutral-background);\n}\n\n.Footer > * {\n    padding: 10px;\n    padding-bottom: 20px;\n    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n    z-index: 5;\n}\n\n.Footer > span:active {\n    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;\n}","",{version:3,sources:["webpack://./src/modules/style.css"],names:[],mappings:"AAAA;IACI,YAAY;IACZ,WAAW;IACX,sBAAsB;IACtB,8BAA8B;AAClC;;AAEA;IACI,wCAAwC;IACxC,yCAAyC;IACzC,kCAAkC;IAClC,0CAA0C;IAC1C,oCAAoC;AACxC;;AAEA;IACI,uDAAuD;IACvD,qCAAqC;AACzC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,iBAAiB;IACjB,UAAU;IACV,iBAAiB;AACrB;;AAEA;IACI,aAAa;IACb,iBAAiB;AACrB;;AAEA;IACI,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;AAChB;;AAEA;IACI,kBAAkB;IAClB,WAAW;IACX,SAAS;IACT,WAAW;IACX,aAAa;IACb,qCAAqC;IACrC,kBAAkB;IAClB,sDAAsD;AAC1D;;AAEA;IACI,aAAa;IACb,oBAAoB;IACpB,iDAAiD;IACjD,UAAU;AACd;;AAEA;IACI,4CAA4C;AAChD",sourcesContent:["* {\n    padding: 0px;\n    margin: 0px;\n    box-sizing: border-box;\n    /* outline: 1px solid white; */\n}\n\n:root {\n    --darkreader-neutral-background: #131516;\n    --darkreader-neutral-background2: #1d2325;\n    --darkreader-neutral-text: #d8d4cf;\n    --darkreader-selection-background: #004daa;\n    --darkreader-selection-text: #e8e6e3;\n}\n\nbody {\n    background-color: var(--darkreader-neutral-background2);\n    color: var(--darkreader-neutral-text);\n}\n\n#content {\n    display: flex;\n    flex-direction: column;\n    min-height: 100vh;\n    z-index: 0;\n    user-select: none;\n}\n\n.Categories {\n    display: flex;\n    flex-wrap: nowrap;\n}\n\n.Category {\n    border-radius: 10px;\n    border: 1px solid white;\n    padding: 2px;\n}\n\n.Footer {\n    position: absolute;\n    bottom: 0px;\n    left: 0px;\n    width: 100%;\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    text-align: center;\n    background-color: var(--darkreader-neutral-background);\n}\n\n.Footer > * {\n    padding: 10px;\n    padding-bottom: 20px;\n    box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;\n    z-index: 5;\n}\n\n.Footer > span:active {\n    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;\n}"],sourceRoot:""}]);const s=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,a,o){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var d=0;d<e.length;d++){var l=[].concat(e[d]);r&&i[l[0]]||(void 0!==o&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=o),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),a&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=a):l[4]="".concat(a)),t.push(l))}},t}},537:e=>{e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),o="/*# ".concat(a," */");return[t].concat([o]).join("\n")}return[t].join("\n")}},379:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],d=r.base?c[0]+r.base:c[0],l=o[d]||0,u="".concat(d," ").concat(l);o[d]=l+1;var p=n(u),A={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(A);else{var g=a(A,r);r.byIndex=s,t.splice(s,0,{identifier:u,updater:g,references:1})}i.push(u)}return i}function a(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,a){var o=r(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=n(o[i]);t[s].references--}for(var c=r(e,a),d=0;d<o.length;d++){var l=n(o[d]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}o=c}}},569:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var a=void 0!==n.layer;a&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,a&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var o=n.sourceMap;o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={id:r,exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.nc=void 0,(()=>{const e=()=>{const e=document.createElement("div");return e.innerHTML="\n    <div class='Categories'>\n        <div class='Menu'>Menu</div>\n        <div class='Title'>Title</div>\n        <div class='Notifications'>Notifications</div>\n        <div class='Filter'>Filter</div>\n    </div>",e.innerHTML};var t=n(379),r=n.n(t),a=n(795),o=n.n(a),i=n(569),s=n.n(i),c=n(565),d=n.n(c),l=n(216),u=n.n(l),p=n(589),A=n.n(p),g=n(766),f={};f.styleTagTransform=A(),f.setAttributes=d(),f.insert=s().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),r()(g.Z,f),g.Z&&g.Z.locals&&g.Z.locals;const m={randomUUID:"undefined"!=typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};let C;const v=new Uint8Array(16);function I(){if(!C&&(C="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!C))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return C(v)}const U=[];for(let e=0;e<256;++e)U.push((e+256).toString(16).slice(1));const x=function(e,t,n){if(m.randomUUID&&!t&&!e)return m.randomUUID();const r=(e=e||{}).random||(e.rng||I)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(let e=0;e<16;++e)t[n+e]=r[e];return t}return function(e,t=0){return(U[e[t+0]]+U[e[t+1]]+U[e[t+2]]+U[e[t+3]]+"-"+U[e[t+4]]+U[e[t+5]]+"-"+U[e[t+6]]+U[e[t+7]]+"-"+U[e[t+8]]+U[e[t+9]]+"-"+U[e[t+10]]+U[e[t+11]]+U[e[t+12]]+U[e[t+13]]+U[e[t+14]]+U[e[t+15]]).toLowerCase()}(r)};class D{static list=[];static create=({categoriesUUID:e,title:t,description:n,dueDate:r,priority:a})=>{const o=new D({categoriesUUID:e,title:t,description:n,dueDate:r,priority:a});D.list=[...D.list??[],o]};static read=()=>D.list;static update=({UUID:e,categoriesUUID:t,title:n,description:r,dueDate:a,priority:o})=>{const i=D.list.reduce(((i,s)=>(s.UUID===e&&(s.title=n??s.title,s.categoriesUUID=t??s.categoriesUUID,s.description=r??s.description,s.dueDate=a??s.dueDate,s.priority=o??s.priority),i.concat(s))),[]);D.list=i};static delete=({UUID:e})=>{const t=D.list.filter((t=>t.UUID!==e));D.list=t};constructor({categoriesUUID:e,title:t,description:n,dueDate:r,priority:a}){this.categoriesUUID=e,this.UUID=x(),this.title=t,this.description=n??"",this.priority=a??"Normal",this.createdDate=`${(new Date).getFullYear()}${(new Date).getMonth()+1}${(new Date).getDay()}`,this.dueDate=r??this.createdDate}}class b{static list=[];static create=({name:e})=>{const t=new b({name:e});b.list=[...b.list??[],t]};static read=()=>b.list;static update=({UUID:e,name:t})=>{const n=b.list.reduce(((n,r)=>(r.UUID===e&&(r.name=t??r.name),n.concat(r))),[]);b.list=n};static delete=({UUID:e})=>{if(1===b.list.length)return;const t=b.list.filter((t=>t.UUID!==e));b.list=t};constructor({name:e}){this.UUID=x(),this.name=e}}class y{static storage=e=>JSON.parse(localStorage.getItem(e));static setStorage=(e,t)=>{t?localStorage.setItem(e,JSON.stringify(t)):localStorage.removeItem(e)}}class h{static createCategories=({name:e})=>{b.create({name:e}),y.setStorage("Categories",b.list)};static readCategories=()=>(b.list=y.storage("Categories"),b.list);static updateCategories=({UUID:e,name:t})=>{b.update({UUID:e,name:t}),y.setStorage("Categories",b.list)};static deleteCategories=({UUID:e})=>{b.delete({UUID:e}),y.setStorage("Categories",b.list)};static createToDo=({categoriesUUID:e,title:t,description:n,dueDate:r,priority:a})=>{D.create({categoriesUUID:e,title:t,description:n,dueDate:r,priority:a}),y.setStorage("ToDo",D.list)};static readToDo=()=>(D.list=y.storage("ToDo"),D.list);static updateToDo=({UUID:e,categoriesUUID:t,title:n,description:r,dueDate:a,priority:o})=>{D.update({UUID:e,categoriesUUID:t,title:n,description:r,dueDate:a,priority:o}),y.setStorage("ToDo",D.list)};static deleteToDo=({UUID:e})=>{D.delete({UUID:e}),y.setStorage("ToDo",D.list)}}h.readCategories(),h.readToDo(),h.readCategories()||h.createCategories({name:"personal"}),h.readToDo()||h.createToDo({categoriesUUID:h.readCategories()[0].UUID,title:"Trial"}),console.log(h.readCategories()),console.log(h.readToDo()),document.querySelector("#content").innerHTML=`\n    ${(()=>{const t=document.createElement("div");return t.innerHTML=`\n        <div class='Header'>\n            ${e()}\n        </div>\n    `,t.innerHTML})()}\n    ${(()=>{const e=document.createElement("div");return e.innerHTML=" \n        <div class='Main'>\n        </div>\n    ",e.innerHTML})()}\n    ${(()=>{const e=document.createElement("div");return e.innerHTML='\n        <div class=\'Footer\'>\n            <span class="material-symbols-outlined nav-task">\n                task_alt\n            </span>\n            <span class="material-symbols-outlined nav-callendar">\n                calendar_month\n            </span>\n            <span class="material-symbols-outlined nav-settings">\n                settings\n            </span>\n        </div>\n    ',e.innerHTML})()}\n    `})()})();
//# sourceMappingURL=bundle.js.map