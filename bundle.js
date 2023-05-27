(()=>{var n={426:(n,e,t)=>{"use strict";t.d(e,{Z:()=>s});var o=t(81),r=t.n(o),a=t(645),i=t.n(a)()(r());i.push([n.id,"@import url(https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800);"]),i.push([n.id,"* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\n:root {\n    --gigantic-text: 4.768rem;\n    --jumbo-text: 3.815rem;\n    --h1-text: 3.052rem;\n    --h2-text: 2.441rem;\n    --h3-text: 1.953rem;\n    --h4-text: 1.563rem;\n    --h5-text: 1.25rem;\n    --small-text: 0.8rem;\n    --smaller-text: 0.64rem;\n    --smallest-text: 0.512rem;\n    --main-color: #f5f5f5;\n    --text-color: #424242;\n    --secondary-color: #00b906;\n    --third-color: #b9e937;\n}\n\nhtml {\n    font-size: 100%;\n    scroll-behavior: smooth;\n}\n\nbody {\n    font-family: 'Poppins', sans-serif;\n    font-weight: 400;\n    color: var(--text-color);\n    background-color: var(--main-color);\n}\n\na {\n    cursor: pointer;\n}\n\nbutton {\n    cursor: pointer;\n    font-family: 'Poppins', sans-serif;\n}\n\np {margin-bottom: 1rem;}\n\nh1, h2, h3, h4, h5 {\n  margin: 3rem 0 1.38rem;\n  font-weight: 700;\n  line-height: 1;\n}\n\nh1 {\n  margin-top: 0;\n  font-size: var(--h1-text);\n  font-weight: 700;\n  text-transform: uppercase;\n}\n\nh2 {font-size: var(--h2-text);}\n\nh3 {font-size: var(--h3-text);}\n\nh4 {font-size: var(--h4-text);}\n\nh5 {font-size: var(--h5-text);}\n\n.material-symbols-outlined {\n    font-variation-settings:\n    'FILL' 1,\n    'wght' 300,\n    'GRAD' 200,\n    'opsz' 48\n}\n\nul {list-style-type: none;}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\nnav {\n    height: 100px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    gap: 5px;\n    border-bottom: 3px solid var(--secondary-color);\n}\n\n.navbar-col {\n    position: absolute;\n    left: 20px;\n}\n\n.navbar-col:hover {\n    cursor: pointer;\n    background-color:#e9e9e9;\n    border-radius: 25px;\n}\n\n.navbar-logo {\n    width: 40px;\n}\n\n.navbar-title {\n    font-weight: 700;\n    font-size: var(--h1-text);\n}\n\n.navbar-title__span {\n    color: var(--secondary-color);\n}\n\n.background-modal-form-section {\n    position: absolute;\n}\n\n.background-modal-form-section.fade {\n    background-color: rgba(0, 0, 0);\n    width: 100vw;\n    height: 100vh;\n    animation-name: fade;\n    animation-duration: 300ms;\n    animation-fill-mode:forwards; \n}\n\n.modal {\n    position: absolute;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n\n    width: 100vw;\n    height: 100vh;\n\n    transform: scale(0);\n    transition: 300ms;\n}\n\n.modal.open {\n    transform: scale(1);\n}\n\n.modal__box {\n    display: flex;\n    flex-direction: column;\n    border: 3px solid var(--text-color);\n    padding: 30px 30px 15px 30px;\n    border-radius: 10px;\n    background-color: var(--main-color);\n}\n\n.close-btn {\n    width: 30px;\n    align-self: flex-end;\n    z-index: 10;\n}\n\n#project-form {\n    display: flex;\n    flex-direction: column;\n    gap: 15px;\n    color: var(--text-color);\n    margin-top: -20px;\n}\n\n#project-form > label {\n    font-size: var(--h1-text);\n    font-weight: 500;\n}\n\n.input-name {\n    border-radius: 10px;\n    height: 75px;\n    width: 75%;\n    font-size: var(--h2-text);\n    font-weight: 400;\n    padding-left: 20px;\n    border: 3px solid var(--text-color);\n    color: var(--fourth-color);\n    align-self: center;\n}\n\n.input-name:focus {\n    border: 3px solid var(--secondary-color);\n    outline: none;\n}\n\ninput[type=submit] {\n    background-color: var(--secondary-color);\n    padding: 10px;\n    border-radius: 10px;\n    border: 3px solid var(--text-color);\n    color: var(--main-color);\n    font-size: var(--h5-text);\n    font-weight: 600;\n    outline: none;\n    align-self: center;\n}\n\n@keyframes fade {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 0.329;\n    }\n}\n\n.nav-and-content {\n    display: flex;\n}\n\n.nav-panel {\n    display: flex;\n    flex-direction: column;\n    gap: 60px;\n    \n    background-color: var(--text-color);\n    color: var(--main-color);\n\n    min-height: calc(100vh - 100px);\n    width: 450px;\n    transition-duration: 300ms;\n}\n\n.nav-panel.collapsed {\n    translate: -380px;\n    width: 0;\n}\n\n.nav-panel__top {\n    margin-top: 30px;\n}\n\n.panel-title {\n    font-weight: 600;\n    text-transform: uppercase;\n    font-size: var(--h4-text);\n    padding-left: 20px;\n}\n\n.nav-panel__ul {\n    display: flex;\n    flex-direction: column;\n    gap: 10px;\n    margin-top: 10px;\n    padding: 0 20px 0 20px;\n\n}\n\n.panel-item {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    border-radius: 4px;\n    padding: 7px 0 7px 10px;\n    border-left: 4px solid transparent;\n}\n\n.panel-item:hover {\n    background-color: #353535;\n    cursor: pointer;\n}\n\n.panel-item__icon {\n    width: 30px;\n    height: 30px;\n}\n\n.panel-item__text {\n    font-size: var(--h5-text);\n}\n\n.main-content {\n    flex: 1 1 100%;\n}\n\n.main-content__top {\n    margin: 30px 40px 30px 40px;\n}\n\n.main-content__top__title {\n    font-weight: 500;\n    font-size: var(--h1-text);\n    \n    background-color: #FFC52F;\n    color: var(--main-color);\n\n    padding: 20px;\n    border-radius: 4px;\n}\n\n.main-content__bottom {\n    display: grid;\n    grid-template-columns: 2fr 1fr;\n}\n\n.task-list {\n    display: flex;\n    flex-direction: column;\n    \n}\n\n.task-item {\n    display: flex;\n    gap: 20px;\n    border: 2px solid var(--text-color);\n    border-radius: 10px;\n    padding: 10px;\n    margin: 0 40px 30px 40px;\n    max-width: 600px;\n}\n\n.icon {\n    width: 30px;\n    height: 30px;\n}\n\n.task-toggle {\n    display: flex;\n    justify-content: center;\n    width: 30px;\n    height: 30px;\n    border: 3px solid var(--text-color);\n    border-radius: 50px;\n}\n\n.task-toggle:hover {\n    background-color: #D9D9D9;\n}\n\n.check-selected {\n    width: 16px;\n    object-fit: contain;\n}\n\n.task-title {\n    font-weight: 500;\n\n}\n\n.task-description {\n    color: #727272;\n    margin-bottom: 5px;\n}\n\n.task-date {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    color:#727272;\n}\n\n.task-item__settings {\n    margin-left: auto;\n}",""]);const s=i},645:n=>{"use strict";n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,r,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(o)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(i[l]=!0)}for(var c=0;c<n.length;c++){var d=[].concat(n[c]);o&&i[d[0]]||(void 0!==a&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=a),t&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=t):d[2]=t),r&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=r):d[4]="".concat(r)),e.push(d))}},e}},81:n=>{"use strict";n.exports=function(n){return n[1]}},379:n=>{"use strict";var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var a={},i=[],s=0;s<n.length;s++){var l=n[s],c=o.base?l[0]+o.base:l[0],d=a[c]||0,p="".concat(c," ").concat(d);a[c]=d+1;var u=t(p),m={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var f=r(m,o);o.byIndex=s,e.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function r(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,r){var a=o(n=n||[],r=r||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var l=o(n,r),c=0;c<a.length;c++){var d=t(a[c]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}a=l}}},569:n=>{"use strict";var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{"use strict";n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{"use strict";n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{"use strict";n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var r=void 0!==t.layer;r&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,r&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{"use strict";n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}},181:()=>{!function(n){let e;try{e=window.localStorage;const n="__storage_test__";return e.setItem(n,n),e.removeItem(n),!0}catch(n){return n instanceof DOMException&&(22===n.code||1014===n.code||"QuotaExceededError"===n.name||"NS_ERROR_DOM_QUOTA_REACHED"===n.name)&&e&&0!==e.length}}()?console.log("Too bad, no localStorage for us"):console.log("Yippee! Tu peux utiliser localStorage")}},e={};function t(o){var r=e[o];if(void 0!==r)return r.exports;var a=e[o]={id:o,exports:{}};return n[o](a,a.exports,t),a.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),t.nc=void 0,(()=>{"use strict";var n=t(379),e=t.n(n),o=t(795),r=t.n(o),a=t(569),i=t.n(a),s=t(565),l=t.n(s),c=t(216),d=t.n(c),p=t(589),u=t.n(p),m=t(426),f={};f.styleTagTransform=u(),f.setAttributes=l(),f.insert=i().bind(null,"head"),f.domAPI=r(),f.insertStyleElement=d(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals;let g=localStorage.getItem("data");g=JSON.parse(g||JSON.stringify([]));(()=>{const n=document.querySelectorAll(".panel-item");n.forEach((e=>{e.addEventListener("click",(()=>{const t=e.getAttribute("class");n.forEach((n=>{n.style.backgroundColor="",n.style.borderLeftColor=""})),t.includes("sun")?(e.style.backgroundColor="#ffc42f85",e.style.borderLeftColor="#FFC52F",x.taskTitle("#FFC52F","Aujourd'hui")):t.includes("moon")?(e.style.backgroundColor="#592fff85",e.style.borderLeftColor="#592FFF",x.taskTitle("#592FFF","7 jours")):t.includes("folder")&&(e.style.backgroundColor="#00b90685",e.style.borderLeftColor="#00B906",x.taskTitle("#00B906","Tous"))}))}))})(),document.querySelector(".navbar-col").addEventListener("click",(()=>{x.toggleClassList(".nav-panel","collapsed")})),document.querySelector(".panel-item.add-project").addEventListener("click",(()=>{x.toggleClassList(".background-modal-form-section","fade"),x.toggleClassList(".modal","open"),x.createForm("project-form")})),(()=>{const n=document.querySelector(".task-toggle"),e=document.createElement("img");n.addEventListener("click",(()=>{n.getAttribute("class").includes("not-selected")?(n.style.backgroundColor="var(--secondary-color)",e.setAttribute("src","/src/images/check-mark.png"),e.setAttribute("class","check-selected"),n.appendChild(e)):(n.innerHTML="",n.style.backgroundColor=""),n.classList.toggle("not-selected")}))})();const x=(()=>{const n=(n,e)=>{document.querySelector(n).classList.toggle(e)},e=()=>{n(".background-modal-form-section","fade"),n(".modal","open"),document.querySelector(".modal__box").innerHTML=""},t=n=>{const e=document.querySelector(".nav-panel__ul.project"),t=document.createElement("li"),o=document.createElement("img"),r=document.createElement("div");t.setAttribute("class","panel-item"),o.setAttribute("class","panel-item__icon"),o.setAttribute("src","/src/images/folder-2.png"),r.setAttribute("class","panel-item__text"),r.innerHTML=n.nom,t.appendChild(o),t.appendChild(r),e.insertBefore(t,document.querySelector(".panel-item.add-project"))};return{taskTitle:(n,e)=>{const t=document.querySelector(".main-content__top__title");t.style.backgroundColor=n,t.innerHTML=e},toggleClassList:n,createForm:n=>{const t=document.querySelector(".modal__box"),o=document.createElement("img"),r=document.createElement("form"),a=document.createElement("input"),i=document.createElement("label"),s=document.createElement("input");o.setAttribute("class","close-btn"),o.setAttribute("src","/src/images/close.png"),o.addEventListener("click",(()=>e())),r.setAttribute("method","get"),r.setAttribute("id",n),i.setAttribute("for","name"),i.innerHTML="Nom du projet:",a.setAttribute("type","text"),a.setAttribute("name","name"),a.setAttribute("id","name"),a.setAttribute("class","input-name"),s.setAttribute("type","submit"),s.setAttribute("value","sousmettre"),s.setAttribute("id","sousmettre"),t.appendChild(o),t.appendChild(r),r.appendChild(i),r.appendChild(a),r.appendChild(s),document.getElementById("project-form").addEventListener("submit",(n=>{const e=document.querySelector(".input-name").value;if(n.preventDefault(),""!=e){const n={tasksTable:[],nom:e};t=n,g.push(t),x.hideModal(),x.addProjectSection(n),localStorage.setItem("data",JSON.stringify(g))}else document.querySelector(".input-name").style.borderColor="#b90000";var t}))},hideModal:e,addProjectSection:t,initialiseProjects:()=>{g.forEach((n=>t(n)))}}})();t(181),x.initialiseProjects()})()})();