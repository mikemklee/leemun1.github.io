webpackJsonp([0xc19374f83753],{40:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),o=function(){return r.default.createElement("footer",{className:"footer"},r.default.createElement("div",{className:"footer__contacts"},r.default.createElement("div",{className:"footer__contactme"},"Get in touch"),r.default.createElement("div",{className:"footer__myemail"},"mikemunkyu.lee@mail.utoronto.ca"),r.default.createElement("div",{className:"footer__social"},r.default.createElement("a",{href:"https://github.com/leemun1"},r.default.createElement("span",null,r.default.createElement("i",{className:"fab fa-github"}))),r.default.createElement("a",{href:"https://www.instagram.com/_munkyu"},r.default.createElement("span",null,r.default.createElement("i",{className:"fab fa-instagram"}))))),r.default.createElement("div",{className:"footer__copyright"},"© Mike Lee. 2018"))};t.default=o,e.exports=t.default},41:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var u=a(2),c=l(u),s=a(67),f=l(s),d=function(e){function t(){var a,l,o;n(this,t);for(var u=arguments.length,c=Array(u),s=0;s<u;s++)c[s]=arguments[s];return a=l=r(this,e.call.apply(e,[this].concat(c))),l.state={currentPage:"projects"},l.onPageChange=function(e){l.setState({currentPage:e})},o=a,r(l,o)}return o(t,e),t.prototype.componentDidMount=function(){var e=this.props.pathname;console.log(e),"/"===e?this.onPageChange("projects"):"/about"===e?this.onPageChange("about"):this.onPageChange("blog")},t.prototype.render=function(){var e=this.state.currentPage;return c.default.createElement("div",{className:"header"},c.default.createElement("div",{className:"header__brand"},c.default.createElement("span",null,c.default.createElement(f.default,{to:"/"},"ML"))),c.default.createElement("ul",{className:"header__nav"},c.default.createElement("li",{className:"header__nav__link "},c.default.createElement(f.default,{className:"projects"===e&&"selected",to:"/"},"Projects")),c.default.createElement("li",{className:"header__nav__link"},c.default.createElement(f.default,{className:"about"===e&&"selected",to:"/about"},"About")),c.default.createElement("li",{className:"header__nav__link"},c.default.createElement(f.default,{className:"blog"===e&&"selected",to:"/blog"},"Blog"))),c.default.createElement("ul",{className:"header__mobilenav"},c.default.createElement("li",{className:"header__mobilenav__link"},c.default.createElement(f.default,{to:"/"},"Projects")),c.default.createElement("li",{className:"header__mobilenav__link"},c.default.createElement(f.default,{to:"/about"},"About")),c.default.createElement("li",{className:"header__mobilenav__link"},c.default.createElement(f.default,{to:"/blog"},"Blog"))))},t}(c.default.Component);t.default=d,e.exports=t.default},204:function(e,t,a){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var n=a(2),r=l(n),o=a(41),u=l(o),c=a(40),s=l(c),f=function(e){var t=e.location.pathname;return r.default.createElement("div",{className:"container"},r.default.createElement(u.default,{pathname:t}),r.default.createElement("div",{className:"alert"},r.default.createElement("h1",null,"Blog"),r.default.createElement("h3",null,"Under construction.")),r.default.createElement(s.default,null))};t.default=f,e.exports=t.default}});