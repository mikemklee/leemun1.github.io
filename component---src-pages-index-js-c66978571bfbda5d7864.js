webpackJsonp([35783957827783],{334:function(e,t,n){(function(e){function n(e,t){for(var n=0,r=e.length-1;r>=0;r--){var a=e[r];"."===a?e.splice(r,1):".."===a?(e.splice(r,1),n++):n&&(e.splice(r,1),n--)}if(t)for(;n--;n)e.unshift("..");return e}function r(e,t){if(e.filter)return e.filter(t);for(var n=[],r=0;r<e.length;r++)t(e[r],r,e)&&n.push(e[r]);return n}var a=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,o=function(e){return a.exec(e).slice(1)};t.resolve=function(){for(var t="",a=!1,o=arguments.length-1;o>=-1&&!a;o--){var l=o>=0?arguments[o]:e.cwd();if("string"!=typeof l)throw new TypeError("Arguments to path.resolve must be strings");l&&(t=l+"/"+t,a="/"===l.charAt(0))}return t=n(r(t.split("/"),function(e){return!!e}),!a).join("/"),(a?"/":"")+t||"."},t.normalize=function(e){var a=t.isAbsolute(e),o="/"===l(e,-1);return e=n(r(e.split("/"),function(e){return!!e}),!a).join("/"),e||a||(e="."),e&&o&&(e+="/"),(a?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(r(e,function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e}).join("/"))},t.relative=function(e,n){function r(e){for(var t=0;t<e.length&&""===e[t];t++);for(var n=e.length-1;n>=0&&""===e[n];n--);return t>n?[]:e.slice(t,n-t+1)}e=t.resolve(e).substr(1),n=t.resolve(n).substr(1);for(var a=r(e.split("/")),o=r(n.split("/")),l=Math.min(a.length,o.length),u=l,i=0;i<l;i++)if(a[i]!==o[i]){u=i;break}for(var c=[],i=u;i<a.length;i++)c.push("..");return c=c.concat(o.slice(u)),c.join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){var t=o(e),n=t[0],r=t[1];return n||r?(r&&(r=r.substr(0,r.length-1)),n+r):"."},t.basename=function(e,t){var n=o(e)[2];return t&&n.substr(-1*t.length)===t&&(n=n.substr(0,n.length-t.length)),n},t.extname=function(e){return o(e)[3]};var l="b"==="ab".substr(-1)?function(e,t,n){return e.substr(t,n)}:function(e,t,n){return t<0&&(t=e.length+t),e.substr(t,n)}}).call(t,n(48))},48:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function o(e){if(f===clearTimeout)return clearTimeout(e);if((f===r||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function l(){h&&m&&(h=!1,m.length?p=m.concat(p):_=-1,p.length&&u())}function u(){if(!h){var e=a(l);h=!0;for(var t=p.length;t;){for(m=p,p=[];++_<t;)m&&m[_].run();_=-1,t=p.length}m=null,h=!1,o(e)}}function i(e,t){this.fun=e,this.array=t}function c(){}var s,f,d=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{f="function"==typeof clearTimeout?clearTimeout:r}catch(e){f=r}}();var m,p=[],h=!1,_=-1;d.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];p.push(new i(e,t)),1!==p.length||h||a(u)},i.prototype.run=function(){this.fun.apply(null,this.array)},d.title="browser",d.browser=!0,d.env={},d.argv=[],d.version="",d.versions={},d.on=c,d.addListener=c,d.once=c,d.off=c,d.removeListener=c,d.removeAllListeners=c,d.emit=c,d.prependListener=c,d.prependOnceListener=c,d.listeners=function(e){return[]},d.binding=function(e){throw new Error("process.binding is not supported")},d.cwd=function(){return"/"},d.chdir=function(e){throw new Error("process.chdir is not supported")},d.umask=function(){return 0}},40:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=function(){return o.default.createElement("footer",{className:"footer"},o.default.createElement("div",{className:"footer__contacts"},o.default.createElement("div",{className:"footer__contactme"},"Get in touch"),o.default.createElement("div",{className:"footer__myemail"},"mikemunkyu.lee@mail.utoronto.ca"),o.default.createElement("div",{className:"footer__social"},o.default.createElement("a",{href:"https://github.com/leemun1"},o.default.createElement("span",null,o.default.createElement("i",{className:"fab fa-github"}))),o.default.createElement("a",{href:"https://www.instagram.com/_munkyu"},o.default.createElement("span",null,o.default.createElement("i",{className:"fab fa-instagram"}))))),o.default.createElement("div",{className:"footer__copyright"},"© Mike Lee. 2018"))};t.default=l,e.exports=t.default},41:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(67),s=r(c),f=function(e){function t(){var n,r,l;a(this,t);for(var u=arguments.length,i=Array(u),c=0;c<u;c++)i[c]=arguments[c];return n=r=o(this,e.call.apply(e,[this].concat(i))),r.state={currentPage:"projects"},r.onPageChange=function(e){r.setState({currentPage:e})},l=n,o(r,l)}return l(t,e),t.prototype.componentDidMount=function(){var e=this.props.pathname;console.log(e),"/"===e?this.onPageChange("projects"):"/about"===e?this.onPageChange("about"):this.onPageChange("blog")},t.prototype.render=function(){var e=this.state.currentPage;return i.default.createElement("div",{className:"header"},i.default.createElement("div",{className:"header__brand"},i.default.createElement("span",null,i.default.createElement(s.default,{to:"/"},"ML"))),i.default.createElement("ul",{className:"header__nav"},i.default.createElement("li",{className:"header__nav__link "},i.default.createElement(s.default,{className:"projects"===e&&"selected",to:"/"},"Projects")),i.default.createElement("li",{className:"header__nav__link"},i.default.createElement(s.default,{className:"about"===e&&"selected",to:"/about"},"About")),i.default.createElement("li",{className:"header__nav__link"},i.default.createElement(s.default,{className:"blog"===e&&"selected",to:"/blog"},"Blog"))),i.default.createElement("ul",{className:"header__mobilenav"},i.default.createElement("li",{className:"header__mobilenav__link"},i.default.createElement(s.default,{to:"/"},"Projects")),i.default.createElement("li",{className:"header__mobilenav__link"},i.default.createElement(s.default,{to:"/about"},"About")),i.default.createElement("li",{className:"header__mobilenav__link"},i.default.createElement(s.default,{to:"/blog"},"Blog"))))},t}(i.default.Component);t.default=f,e.exports=t.default},198:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=function(e){var t=e.project;return o.default.createElement("div",{className:"project"},o.default.createElement("a",{href:t.link},o.default.createElement("img",{className:"project__image",src:"/static/img/"+t.img,alt:""})),o.default.createElement("div",{className:"project__title"},o.default.createElement("a",{href:t.link},o.default.createElement("span",null,t.title))),o.default.createElement("div",{className:"project__description"},t.description),t.tools.map(function(e){return o.default.createElement("div",{key:e,className:"project__tools"},o.default.createElement("span",null,"·"),o.default.createElement("span",null,e))}))};t.default=l,e.exports=t.default},199:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=n(2),i=r(u),c=n(206),s=r(c),f=n(198),d=r(f),m=function(e){function t(){return a(this,t),o(this,e.apply(this,arguments))}return l(t,e),t.prototype.render=function(){return i.default.createElement("div",{className:"projects"},i.default.createElement("div",{className:"projects__header"},"Selected Projects"),s.default.projects.map(function(e){return i.default.createElement(d.default,{key:e.id,project:e})}))},t}(u.Component);t.default=m,e.exports=t.default},200:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=function(){return o.default.createElement("div",{className:"statement"},o.default.createElement("h1",{className:"statement__title"},"Mike Lee"),o.default.createElement("h3",{className:"statement__subtitle"},"Web developer, photographer, and cat lover 🐱"))};t.default=l,e.exports=t.default},205:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),o=r(a),l=n(41),u=r(l),i=n(200),c=r(i),s=n(199),f=r(s),d=n(40),m=r(d),p=function(e){var t=e.location.pathname;return o.default.createElement("div",{className:"container"},o.default.createElement(u.default,{pathname:t}),o.default.createElement(c.default,null),o.default.createElement(f.default,null),o.default.createElement(m.default,null))};t.default=p,e.exports=t.default},206:function(e,t,n){"use strict";t.__esModule=!0;var r=(n(334),{projects:[{id:6,title:"Notes App",description:"What's on your mind today? A simple note application to capture your thoughts and inspirations.",tools:["React","Redux","Firebase","Sass"],link:"https://github.com/leemun1/react-notes-app",img:"notes.png"},{id:1,title:"Yet another Todo App",description:"Simple Todo application with CRUD functionalities. Created as an attempt to clone the example on todoMVC.com",tools:["React","Sass"],link:"https://github.com/leemun1/react-todo-app",img:"todo.png"},{id:4,title:"Weather Please",description:"A minimalistic widget to display real-time weather condition at current location.",tools:["React","Sass","OpenWeatherMap API"],link:"https://github.com/leemun1/react-weather-app",img:"weather.png"}]});t.default=r,e.exports=t.default}});