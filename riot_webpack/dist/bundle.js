!function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="/dist/",e(0)}([/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
function(t,e,n){(function(t){"use strict";var e=function(t){return t&&t.__esModule?t:{"default":t}},r=n(/*! ./blogstore.js */2),o=e(r);n(/*! ./css/tacit.min.css */7),n(/*! ./app.html */5),t.mount("app");var i=new o["default"];console.log(i.getPost(4))}).call(e,n(/*! riot */1))},/*!************************!*\
  !*** ./~/riot/riot.js ***!
  \************************/
function(t,e,n){!function(e){function n(t){var e={val:t},n=t.split(/\s+in\s+/);return n[1]&&(e.val=k(0)+n[1],n=n[0].slice(k(0).length).trim().split(/,\s*/),e.key=n[0],e.pos=n[1]),e}function r(t,e,n){var r={};return r[t.key]=e,t.pos&&(r[t.pos]=n),r}function o(t,e,o){function i(t,e,n){d.splice(t,0,e),g.splice(t,0,n)}f(t,"each");var a,l=t.outerHTML,c=t.previousSibling,s=t.parentNode,d=[],g=[];o=n(o),e.one("update",function(){s.removeChild(t)}).one("premount",function(){s.stub&&(s=e.root)}).on("update",function(){var t=C(o.val,e);if(t){if(!Array.isArray(t)){var n=JSON.stringify(t);if(n==a)return;a=n,p(g,function(t){t.unmount()}),d=[],g=[],t=Object.keys(t).map(function(e){return r(o,e,t[e])})}p(d,function(e){if(e instanceof Object){if(t.indexOf(e)>-1)return}else{var n=m(t,e),r=m(d,e);if(n.length>=r.length)return}var o=d.indexOf(e),i=g[o];return i?(i.unmount(),d.splice(o,1),g.splice(o,1),!1):void 0});var f=[].indexOf.call(s.childNodes,c)+1;p(t,function(n,c){var p=t.indexOf(n,c),h=d.indexOf(n,c);if(0>p&&(p=t.lastIndexOf(n,c)),0>h&&(h=d.lastIndexOf(n,c)),!(n instanceof Object)){var v=m(t,n),b=m(d,n);v.length>b.length&&(h=-1)}var y=s.childNodes;if(0>h){if(!a&&o.key)var x=r(o,n,p);var w=new u({tmpl:l},{before:y[f+p],parent:e,root:s,item:x||n});return w.mount(),i(p,n,w),!0}return o.pos&&g[h][o.pos]!=p&&(g[h].one("update",function(t){t[o.pos]=p}),g[h].update()),p!=h?(s.insertBefore(y[f+h],y[f+(p>h?p+1:p)]),i(p,d.splice(h,1)[0],g.splice(h,1)[0])):void 0}),d=t.slice()}})}function i(t,e,n){h(t,function(t){if(1==t.nodeType){var r=b(t);if(r&&!t.getAttribute("each")){var o=new u(r,{root:t,parent:e}),i=t.getAttribute("name")||r.name,a=e.tags[i];a?(Array.isArray(a)||(e.tags[i]=[a]),e.tags[i].push(o)):e.tags[i]=o,t.innerHTML="",n.push(o)}p(t.attributes,function(n){/^(name|id)$/.test(n.name)&&(e[n.value]=t)})}})}function a(t,e,n){function r(t,e,r){if(e.indexOf(k(0))>=0){var o={dom:t,expr:e};n.push(d(o,r))}}h(t,function(t){var n=t.nodeType;if(3==n&&"STYLE"!=t.parentNode.tagName&&r(t,t.nodeValue),1==n){var i=t.getAttribute("each");return i?(o(t,e,i),!1):(p(t.attributes,function(e){var n=e.name,o=n.split("__")[1];return r(t,e.value,{attr:o||n,bool:o}),o?(f(t,n),!1):void 0}),b(t)?!1:void 0)}})}function u(t,e){function n(t){p(Object.keys(k),function(t){l[t]=C(k[t],f||u)})}function r(t){if(p(m,function(e){e[t?"mount":"unmount"]()}),f){var e=t?"on":"off";f[e]("update",u.update)[e]("unmount",u.unmount)}}var o,u=w.observable(this),l=v(e.opts)||{},c=g(t.tmpl),f=e.parent,h=[],m=[],b=e.root,y=e.item,x=t.fn,k={};x&&b.riot||(b.riot=!0,this._id=~~((new Date).getTime()*Math.random()),d(this,{parent:f,root:b,opts:l,tags:{}},y),p(b.attributes,function(t){k[t.name]=t.value}),this.update=function(t,e){d(u,t,y),n(),u.trigger("update",y),s(h,u,y),u.trigger("updated")},this.mount=function(){if(n(),x&&x.call(u,l),r(!0),a(c,u,h),u.update(),u.trigger("premount"),x)for(;c.firstChild;)b.appendChild(c.firstChild);else o=c.firstChild,b.insertBefore(o,e.before||null);b.stub&&(u.root=b=f.root),u.trigger("mount")},this.unmount=function(){var t=x?b:o,e=t.parentNode,n=b.tagName.toLowerCase();if(e)if(f)Array.isArray(f.tags[n])?p(f.tags[n],function(t,e){t._id==u._id&&f.tags[n].splice(e,1)}):delete f.tags[n],e.removeChild(t);else{for(;t.firstChild;)t.removeChild(t.firstChild);e.removeChild(t)}u.trigger("unmount"),r(),u.off("*"),delete b.riot},i(c,this,m))}function l(t,n,r,o,i){r[t]=function(t){t=t||e.event,t.which=t.which||t.charCode||t.keyCode,t.target=t.target||t.srcElement,t.currentTarget=r,t.item=i,n.call(o,t)===!0||/radio|check/.test(r.type)||(t.preventDefault&&t.preventDefault(),t.returnValue=!1);var a=i?o.parent:o;a.update()}}function c(t,e,n){t&&(t.insertBefore(n,e),t.removeChild(e))}function s(t,e,n){p(t,function(t){var r=t.dom,o=t.attr,i=C(t.expr,e),a=t.dom.parentNode;if(null==i&&(i=""),a&&"TEXTAREA"==a.tagName&&(i=i.replace(/riot-/g,"")),t.value!==i){if(t.value=i,!o)return r.nodeValue=i;if(f(r,o),"function"==typeof i)l(o,i,r,e,n);else if("if"==o){var u=t.stub;i?u&&c(u.parentNode,u,r):(u=t.stub=u||document.createTextNode(""),c(r.parentNode,r,u))}else if(/^(show|hide)$/.test(o))"hide"==o&&(i=!i),r.style.display=i?"":"none";else if("value"==o)r.value=i;else if("riot-"==o.slice(0,5))o=o.slice(5),i?r.setAttribute(o,i):f(r,o);else{if(t.bool){if(r[o]=i,!i)return;i=o}"object"!=typeof i&&r.setAttribute(o,i)}}})}function p(t,e){for(var n,r=0,o=(t||[]).length;o>r;r++)n=t[r],null!=n&&e(n,r)===!1&&r--;return t}function f(t,e){t.removeAttribute(e)}function d(t,e,n){return e&&p(Object.keys(e),function(n){t[n]=e[n]}),n?d(t,n):t}function g(t){var e=t.trim().slice(1,3).toLowerCase(),n=/td|th/.test(e)?"tr":"tr"==e?"tbody":"div",r=document.createElement(n);return r.stub=!0,r.innerHTML=t,r}function h(t,e){if(t)if(e(t)===!1)h(t.nextSibling,e);else for(t=t.firstChild;t;)h(t,e),t=t.nextSibling}function m(t,e){return t.filter(function(t){return t===e})}function v(t){function e(){}return e.prototype=t,new e}function b(t){return N[t.tagName.toLowerCase()]}function y(t){var e=document.createElement("style");e.innerHTML=t,document.head.appendChild(e)}function x(t,e,n){var r=N[e];return r&&t&&(r=new u(r,{root:t,opts:n})),r&&r.mount?(r.mount(),O.push(r),r.on("unmount",function(){O.splice(O.indexOf(r),1)})):void 0}var w={version:"v2.0.14",settings:{}};w.observable=function(t){t=t||{};var e={},n=0;return t.on=function(r,o){return"function"==typeof o&&(o._id="undefined"==typeof o._id?n++:o._id,r.replace(/\S+/g,function(t,n){(e[t]=e[t]||[]).push(o),o.typed=n>0})),t},t.off=function(n,r){return"*"==n?e={}:n.replace(/\S+/g,function(t){if(r)for(var n,o=e[t],i=0;n=o&&o[i];++i)n._id==r._id&&(o.splice(i,1),i--);else e[t]=[]}),t},t.one=function(e,n){function r(){t.off(e,r),n.apply(t,arguments)}return t.on(e,r)},t.trigger=function(n){for(var r,o=[].slice.call(arguments,1),i=e[n]||[],a=0;r=i[a];++a)r.busy||(r.busy=1,r.apply(t,r.typed?[n].concat(o):o),i[a]!==r&&a--,r.busy=0);return e.all&&"all"!=n&&t.trigger.apply(t,["all",n].concat(o)),t},t},function(t,e,n){function r(){return u.href.split("#")[1]||""}function o(t){return t.split("/")}function i(t){t.type&&(t=r()),t!=a&&(l.trigger.apply(null,["H"].concat(o(t))),a=t)}if(n){var a,u=n.location,l=t.observable(),c=n,s=t.route=function(t){t[0]?(u.hash=t,i(t)):l.on("H",t)};s.exec=function(t){t.apply(null,o(r()))},s.parser=function(t){o=t},c.addEventListener?c.addEventListener(e,i,!1):c.attachEvent("on"+e,i)}}(w,"hashchange",e);var k=function(t,e,n){return function(r){return e=w.settings.brackets||t,n!=e&&(n=e.split(" ")),r&&r.test?e==t?r:RegExp(r.source.replace(/\{/g,n[0].replace(/(?=.)/g,"\\")).replace(/\}/g,n[1].replace(/(?=.)/g,"\\")),r.global?"g":""):n[r]}}("{ }"),C=function(){function t(t,e){return t=(t||k(0)+k(1)).replace(k(/\\{/g),"￰").replace(k(/\\}/g),"￱"),e=o(t,i(t,k(/{/),k(/}/))),new Function("d","return "+(e[0]||e[2]||e[3]?"["+e.map(function(t,e){return e%2?n(t,!0):'"'+t.replace(/\n/g,"\\n").replace(/"/g,'\\"')+'"'}).join(",")+'].join("")':n(e[1])).replace(/\uFFF0/g,k(0)).replace(/\uFFF1/g,k(1))+";")}function n(t,e){return t=t.replace(/\n/g," ").replace(k(/^[{ ]+|[ }]+$|\/\*.+?\*\//g),""),/^\s*[\w- "']+ *:/.test(t)?"["+i(t,/["' ]*[\w- ]+["' ]*:/,/,(?=["' ]*[\w- ]+["' ]*:)|}|$/).map(function(t){return t.replace(/^[ "']*(.+?)[ "']*: *(.+?),? *$/,function(t,e,n){return n.replace(/[^&|=!><]+/g,r)+'?"'+e+'":"",'})}).join("")+'].join(" ").trim()':r(t,e)}function r(t,n){return t=t.trim(),t?"(function(v){try{v="+(t.replace(u,function(t,n,r){return r?"(d."+r+"===undefined?"+("undefined"==typeof e?"global.":"window.")+r+":d."+r+")":t})||"x")+"}finally{return "+(n===!0?'!v&&v!==0?"":v':"v")+"}}).call(d)":""}function o(t,e){var n=[];return e.map(function(e,r){r=t.indexOf(e),n.push(t.slice(0,r),e),t=t.slice(r+e.length)}),n.concat(t)}function i(t,e,n){var r,o=0,i=[],a=new RegExp("("+e.source+")|("+n.source+")","g");return t.replace(a,function(e,n,a,u){!o&&n&&(r=u),o+=n?1:-1,o||null==a||i.push(t.slice(r,u+a.length))}),i}var a={},u=/(['"\/]).*?[^\\]\1|\.\w*|\w*:|\b(?:(?:new|typeof|in|instanceof) |(?:this|true|false|null|undefined)\b|function *\()|([a-z_$]\w*)/gi;return function(e,n){return e&&(a[e]=a[e]||t(e))(n)}}(),O=[],N={};w.tag=function(t,e,n,r){return"function"==typeof n?r=n:n&&y(n),N[t]={name:t,tmpl:e,fn:r},t},w.mount=function(t,e,n){function r(t){var r=e||t.tagName.toLowerCase(),i=x(t,r,n);i&&o.push(i)}"*"==t&&(t=Object.keys(N).join(", ")),"object"==typeof e&&(n=e,e=0);var o=[];return t.tagName?(r(t),o[0]):(p("string"==typeof t?document.querySelectorAll(t):t,r),o)},w.update=function(){return p(O,function(t){t.update()})},w.mountTo=w.mount,w.util={brackets:k,tmpl:C},t.exports=w}("undefined"!=typeof window?window:void 0)},/*!**************************!*\
  !*** ./src/blogstore.js ***!
  \**************************/
function(t,e,n){"use strict";var r=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},o=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();Object.defineProperty(e,"__esModule",{value:!0});var i="riot-webpack-demo",a=function(){function t(){r(this,t);var e=window.localStorage.getItem(i);this.posts=e&&JSON.parse(e)||[]}return o(t,[{key:"addPost",value:function(t,e,n,r){this.posts.push({postId:t,title:e,content:n,category:r}),window.localStorage.setItem(i,JSON.stringify(this.posts))}},{key:"getPost",value:function(t){var e=!0,n=!1,r=void 0;try{for(var o,i=this.posts[Symbol.iterator]();!(e=(o=i.next()).done);e=!0){var a=o.value;if(a.postId==t)return a}}catch(u){n=!0,r=u}finally{try{!e&&i["return"]&&i["return"]()}finally{if(n)throw r}}}},{key:"listPosts",value:function(){return this.posts}}],[{key:"initData",value:function(){var t=[{postId:1,title:"Best xbox games",content:"Halo, GOW",category:"collection"},{postId:2,title:"Best ps games",content:"Uncharted, The Last of US",category:"collection"},{postId:3,title:"Best wii games",content:"Zelda, Mario",category:"collection"},{postId:4,title:"Review of Halo",content:"yes, cortana",category:"review"},{postId:5,title:"Review of Titanfall",content:"where is the local game?",category:"review"},{postId:6,title:"Review of portal",content:"I don't blame you",category:"review"}];window.localStorage.setItem(i,JSON.stringify(t))}}]),t}();e["default"]=a,t.exports=e["default"]},/*!**********************************************!*\
  !*** ./~/css-loader!./src/css/tacit.min.css ***!
  \**********************************************/
function(t,e,n){e=t.exports=n(/*! ./../../~/css-loader/lib/css-base.js */4)(),e.push([t.id,'label,table{display:block}h1,h4,h5,h6{font-size:36px}b,h1,strong{font-weight:500}*,pre code{line-height:29.7px}*,h3{font-size:18px}*,pre code{padding:0;border:0}section,table{max-width:100%}footer,h1,h4,h5,h6{margin-top:36px}th{font-weight:600}td,th{border-bottom:1.08px solid #ccc;padding:14.85px 18px}thead th{border-bottom-width:2.16px;padding-bottom:6.3px}table{overflow-x:auto}button,input,select,textarea{display:block;padding:9.9px}label{margin-bottom:14.76px}button,input[type=submit],input[type=reset]{background:#b3b3b3;border-radius:3.6px;color:#fff;cursor:pointer;display:inline;margin-bottom:18px;margin-right:7.2px;padding:6.53px 23.4px;text-align:center}button:hover,input[type=submit]:hover,input[type=reset]:hover{background:#a6a6a6;color:#bfbfbf}button[type=submit],input[type=submit]{background:#367ac3;color:#fff}button[type=submit]:hover,input[type=submit]:hover{background:#255587;color:#bfbfbf}input[type=date],input[type=month],input[type=color],input[type=time],input[type=search],input[type=range],input[type=file],input[type=datetime-local],input[type=text],input[type=password],input[type=email],input[type=url],input[type=phone],input[type=tel],input[type=number],input[type=datetime],select,textarea{border:1px solid #ccc;margin-bottom:18px;padding:5.4px 6.3px}input[type=checkbox]{float:left;line-height:36px;margin-right:9px;margin-top:8.1px}code,kbd,output,pre,samp,var{font-family:Menlo,Monaco,Consolas,"Courier New",monospace;font-size:16.2px}pre{border-left:1.8px solid #96bbe2;line-height:25.2px;margin-top:29.7px;overflow:auto;padding-left:18px}pre code{background:0 0}code{background:#ededed;border:1.8px solid #ccc;border-radius:3.6px;display:inline-block;line-height:18px;padding:3px 6px 2px}h1,h2,h3,h4,h5,h6{color:#000}h1{margin-bottom:18px}h2{font-size:25.2px;font-weight:400;margin-bottom:18px;margin-top:27px}h3{margin-bottom:18px;margin-top:21.6px}h4,h5,h6{margin-bottom:18px}a{color:#367ac3;text-decoration:none}a:hover{text-decoration:underline}hr{border-bottom:1px solid #ccc}small{font-size:15.3px}em,i{font-style:italic}*{border-collapse:separate;border-spacing:0;box-sizing:border-box;font-family:"Helvetica Neue",Helvetica,Arial,sans-serif;font-stretch:normal;font-style:normal;font-weight:300;margin:0;outline:0;text-align:left;vertical-align:baseline}nav,nav ul{text-align:center}body{background:#f5f5f5;color:#1a1a1a;padding:36px}address,blockquote,dl,fieldset,figure,form,hr,ol,p,pre,table,ul{margin-bottom:29.7px}section{margin-left:auto;margin-right:auto;width:900px}article{background:#fff;border:1.8px solid #d9d9d9;border-radius:7.2px;padding:43.2px}header{margin-bottom:36px}nav ul{list-style:none}nav ul li{display:inline;margin-left:9px;margin-right:9px}@media (max-width:767px){article,body{padding:18px}article{border-radius:0;margin:-18px}input,select,textarea{max-width:100%}fieldset{min-width:0}@-moz-document url-prefix(){fieldset{display:table-cell}}section{width:auto}}',""])},/*!**************************************!*\
  !*** ./~/css-loader/lib/css-base.js ***!
  \**************************************/
function(t,e,n){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];t.push(n[2]?"@media "+n[2]+"{"+n[1]+"}":n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(var o=0;o<e.length;o++){var a=e[o];"number"==typeof a[0]&&r[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),t.push(a))}},t}},/*!**********************!*\
  !*** ./src/app.html ***!
  \**********************/
function(t,e,n){(function(t){t.tag("app","<div>test riotjs12!</div>",function(t){})}).call(e,n(/*! riot */1))},/*!*************************************!*\
  !*** ./~/style-loader/addStyles.js ***!
  \*************************************/
function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],o=p[r.id];if(o){o.refs++;for(var i=0;i<o.parts.length;i++)o.parts[i](r.parts[i]);for(;i<r.parts.length;i++)o.parts.push(u(r.parts[i],e))}else{for(var a=[],i=0;i<r.parts.length;i++)a.push(u(r.parts[i],e));p[r.id]={id:r.id,refs:1,parts:a}}}}function o(t){for(var e=[],n={},r=0;r<t.length;r++){var o=t[r],i=o[0],a=o[1],u=o[2],l=o[3],c={css:a,media:u,sourceMap:l};n[i]?n[i].parts.push(c):e.push(n[i]={id:i,parts:[c]})}return e}function i(){var t=document.createElement("style"),e=g();return t.type="text/css",e.appendChild(t),t}function a(){var t=document.createElement("link"),e=g();return t.rel="stylesheet",e.appendChild(t),t}function u(t,e){var n,r,o;if(e.singleton){var u=m++;n=h||(h=i()),r=l.bind(null,n,u,!1),o=l.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=a(),r=s.bind(null,n),o=function(){n.parentNode.removeChild(n),n.href&&URL.revokeObjectURL(n.href)}):(n=i(),r=c.bind(null,n),o=function(){n.parentNode.removeChild(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}function l(t,e,n,r){var o=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=v(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function c(t,e){{var n=e.css,r=e.media;e.sourceMap}if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function s(t,e){var n=e.css,r=(e.media,e.sourceMap);r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(JSON.stringify(r))+" */");var o=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(o),i&&URL.revokeObjectURL(i)}var p={},f=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},d=f(function(){return/msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase())}),g=f(function(){return document.head||document.getElementsByTagName("head")[0]}),h=null,m=0;t.exports=function(t,e){if("object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");e=e||{},"undefined"==typeof e.singleton&&(e.singleton=d());var n=o(t);return r(n,e),function(t){for(var i=[],a=0;a<n.length;a++){var u=n[a],l=p[u.id];l.refs--,i.push(l)}if(t){var c=o(t);r(c,e)}for(var a=0;a<i.length;a++){var l=i[a];if(0===l.refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete p[l.id]}}}};var v=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},/*!*******************************!*\
  !*** ./src/css/tacit.min.css ***!
  \*******************************/
function(t,e,n){var r=n(/*! !./../../~/css-loader!./tacit.min.css */3);"string"==typeof r&&(r=[[t.id,r,""]]);n(/*! ./../../~/style-loader/addStyles.js */6)(r,{})}]);
//# sourceMappingURL=bundle.js.map