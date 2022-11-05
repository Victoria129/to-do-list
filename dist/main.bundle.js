"use strict";(self.webpackChunkto_do_list=self.webpackChunkto_do_list||[]).push([[179],{424:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,"* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbutton {\r\n  outline: none;\r\n  border: none;\r\n  cursor: pointer;\r\n}\r\n\r\ni {\r\n  opacity: 0.8;\r\n  color: gray;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  margin-top: 10px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.outer-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  padding: 20px;\r\n  margin: 20px 50px;\r\n  border: 2px solid rgb(168, 168, 168);\r\n  background-color: rgb(252, 246, 240);\r\n}\r\n\r\n.inner-container {\r\n  margin: 10px;\r\n  background-color: #fff;\r\n  padding: 10px;\r\n  box-shadow: 5px 5px 25px;\r\n}\r\n\r\n.subtitle {\r\n  margin: 10px 0 30px 0;\r\n  padding-left: 0;\r\n}\r\n\r\np.clear-all {\r\n  background-color: rgb(252, 246, 240);\r\n  text-align: center;\r\n  padding-top: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.to-do-list {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.to-do-item {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding: 3% 2%;\r\n  border-bottom: 1px solid black;\r\n}\r\n\r\n.add-item {\r\n  width: 45%;\r\n  height: 2rem;\r\n  border: none;\r\n}\r\n\r\n.edit-item {\r\n    width: 45%;\r\n    height: 2rem;\r\n    border: none;\r\n    display: none;\r\n}\r\n\r\n.to-do-detail {\r\n  display: flex;\r\n}\r\n\r\n.to-do-dsc {\r\n  font-weight: normal;\r\n  margin-left: 1.5rem;\r\n}\r\n\r\ni:hover {\r\n  opacity: 1;\r\n  color: #000;\r\n}\r\n",""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<t.length;d++){var l=[].concat(t[d]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],d=r.base?c[0]+r.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var p=n(u),m={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:f,references:1})}a.push(u)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var c=r(t,o),d=0;d<i.length;d++){var l=n(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},437:(t,e,n)=>{var r=n(379),o=n.n(r),i=n(795),a=n.n(i),s=n(569),c=n.n(s),d=n(565),l=n.n(d),u=n(216),p=n.n(u),m=n(589),f=n.n(m),h=n(424),g={};g.styleTagTransform=f(),g.setAttributes=l(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=p(),o()(h.Z,g),h.Z&&h.Z.locals&&h.Z.locals;class v{constructor(t,e,n=!1){this.description=t,this.index=e,this.completed=n}}class y{static setLocalStorageList=t=>{localStorage.setItem("todoListItems",JSON.stringify(t))};static getLocalStorageList=()=>{let t;return t=null===JSON.parse(localStorage.getItem("todoListItems"))?[]:JSON.parse(localStorage.getItem("todoListItems")),t};static reassignIndex=t=>{t.forEach(((t,e)=>{t.index=e+1}))};static updateTask=(t,e)=>{let n=this.getLocalStorageList(),r=n[e];n.forEach((e=>{e===r&&(r.description=t)})),this.setLocalStorageList(n),this.showToDoItems()};static deleteItem=t=>{let e=this.getLocalStorageList(),n=e[t];e=e.filter((t=>t!==n)),this.reassignIndex(e),this.setLocalStorageList(e)};static addRemoveEvent=()=>{document.querySelectorAll(".delete-btn").forEach((t=>t.addEventListener("click",(e=>{e.preventDefault();let n=t.id-1;this.deleteItem(n),this.showToDoItems()}))))};static setupEdit=t=>{let e=this.getLocalStorageList()[t];document.getElementById("to-do-input").style.display="none";let n=document.querySelector(".edit-item");n.value=e.description,n.style.display="block",n.setAttribute("id",t),n.focus()};static addEditEvent=()=>{document.querySelectorAll(".edit-btn").forEach((t=>t.addEventListener("click",(e=>{e.preventDefault();let n=t.id-1;this.setupEdit(n)}))))};static createToDoItemHtml=({description:t,index:e})=>{const n=document.createElement("div");return n.className="to-do-item",n.innerHTML=`\n          <div class="to-do-detail">\n          <input type="checkbox">\n          <h3 class="to-do-dsc">${t}</h3>\n      </div>\n      <div>\n          <button class="edit-btn" id="${e}"><i class="fa-regular fa-pen-to-square"></i></button>\n          <button class="delete-btn" id="${e}"><i class="fa-solid fa-trash-can"></i></button>\n      </div>\n      `,n};static showToDoItems=()=>{let t=this.getLocalStorageList();document.querySelector(".to-do-list").innerHTML="",t.sort(((t,e)=>t.index-e.index)),t.forEach((t=>{document.querySelector(".to-do-list").append(this.createToDoItemHtml(t))})),this.addRemoveEvent(),this.addEditEvent()};static addTodoTask=t=>{let e=this.getLocalStorageList(),n=e.length+1,r=new v(t,n);e.push(r),this.setLocalStorageList(e),this.showToDoItems()}}const b=document.getElementById("to-do-form"),x=document.getElementById("to-do-input"),L=document.getElementById("editTodo-form"),E=document.querySelector(".edit-item");b.addEventListener("submit",(t=>{t.preventDefault(),y.addTodoTask(x.value),x.value=""})),L.addEventListener("submit",(t=>{t.preventDefault();let e=Number(E.getAttribute("id"));y.updateTask(E.value,e),E.value="",E.style.display="none",document.getElementById("to-do-input").style.display="block"})),y.showToDoItems()}},t=>{t(t.s=437)}]);