parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"CE5M":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=["#FFFFFF","#2196F3","#4CAF50","#FF9800","#009688","#795548"];exports.default=e;
},{}],"Focm":[function(require,module,exports) {
"use strict";var t=e(require("./colors.js"));function e(t){return t&&t.__esModule?t:{default:t}}var n=document.querySelector('[data-action="start"]'),r=document.querySelector('[data-action="stop"]'),a=document.body,o=null,c=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)};function d(){o=setInterval(l,1e3),n.disabled=!0}function l(){var e=c(0,t.default.length-1);a.style.backgroundColor=t.default[e]}function u(){clearInterval(o),n.disabled=!1}n.addEventListener("click",d),r.addEventListener("click",u);
},{"./colors.js":"CE5M"}]},{},["Focm"], null)
//# sourceMappingURL=/goit-js-hw-11-color-switch/src.71087af8.js.map