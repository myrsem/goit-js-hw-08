function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,a=/^0o[0-7]+$/i,f=parseInt,u="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=u||c||Function("return this")(),s=Object.prototype.toString,m=Math.max,d=Math.min,g=function(){return l.Date.now()};function v(e,t,n){var r,o,i,a,f,u,c=0,l=!1,s=!1,v=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=r,i=o;return r=o=void 0,c=t,a=e.apply(i,n)}function j(e){return c=e,f=setTimeout(S,t),l?y(e):a}function O(e){var n=e-u;return void 0===u||n>=t||n<0||s&&e-c>=i}function S(){var e=g();if(O(e))return T(e);f=setTimeout(S,function(e){var n=t-(e-u);return s?d(n,i-(e-c)):n}(e))}function T(e){return f=void 0,v&&r?y(e):(r=o=void 0,a)}function h(){var e=g(),n=O(e);if(r=arguments,o=this,u=e,n){if(void 0===f)return j(u);if(s)return f=setTimeout(S,t),y(u)}return void 0===f&&(f=setTimeout(S,t)),a}return t=b(t)||0,p(n)&&(l=!!n.leading,i=(s="maxWait"in n)?m(b(n.maxWait)||0,t):i,v="trailing"in n?!!n.trailing:v),h.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=u=o=f=void 0},h.flush=function(){return void 0===f?a:T(g())},h}function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(r,"");var n=i.test(e);return n||a.test(e)?f(e.slice(2),n?2:8):o.test(e)?NaN:+e}t=function(e,t,n){var r=!0,o=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return p(n)&&(r="leading"in n?!!n.leading:r,o="trailing"in n?!!n.trailing:o),v(e,t,{leading:r,maxWait:t,trailing:o})};const y={form:document.querySelector(".feedback-form")},j={email:y.form.email.value,message:y.form.message.value};!function(){const e=JSON.parse(localStorage.getItem("feedback-form-state"));if(!e)return;e.email&&(y.form.email.value=e.email);e.message&&(y.form.message.value=e.message)}(),y.form.addEventListener("input",e(t)((function(e){j[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(j))}),500)),y.form.addEventListener("submit",(e=>{e.preventDefault(),e.currentTarget.reset(),JSON.parse(localStorage.getItem("feedback-form-state")),localStorage.removeItem("feedback-form-state"),console.log(j)}));
//# sourceMappingURL=03-feedback.38897e7d.js.map
