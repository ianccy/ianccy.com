/*! For license information please see component---src-templates-blog-post-js-450286d665ea75ad8481.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"4M6O":function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},c=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),c&&e.apply(o,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var r,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(r=[]).concat.apply(r,(0,o.default)(i)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!a(t[r]))return!0})).length};var o=r(n("RIqP")),i=r(n("q1tI"));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},"6Z1Q":function(e,t,n){},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},DL4o:function(e,t,n){},EbDI:function(e,t){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},Ijbi:function(e,t,n){var r=n("WkPL");e.exports=function(e){if(Array.isArray(e))return r(e)}},ORnI:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("VUT9"));t.Disqus=o.default;var i=r(n("qASQ"));t.CommentCount=i.default;var a=r(n("vAJ3"));t.CommentEmbed=a.default;var c=o.default;t.default=c},PGlZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var r=n("q1tI");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var i=new Map,a=new Map,c=0;function s(e){return Object.keys(e).filter(Boolean).sort().map((function(t){return t+"_"+("root"===t?(n=e.root)?(a.has(n)||(c+=1,a.set(n,c.toString())),a.get(n)):"0":e[t]);var n})).toString()}function l(e,t,n){if(void 0===n&&(n={}),!e)return function(){};var r=function(e){var t=s(e),n=i.get(t);if(!n){var r=new Map,o=new IntersectionObserver((function(t){t.forEach((function(t){var n,i=t.isIntersecting&&o.thresholds.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(n=r.get(t.target))||n.forEach((function(e){e(i,t)}))}))}),e);n={id:t,observer:o,elements:r},i.set(t,n)}return n}(n),o=r.id,a=r.observer,c=r.elements,l=c.get(e)||[];return c.has(e)||c.set(e,l),l.push(t),a.observe(e),function(){l.splice(l.indexOf(t),1),0===l.length&&(c.delete(e),a.unobserve(e)),0===c.size&&(a.disconnect(),i.delete(o))}}function u(e){return"function"!=typeof e.children}var d=function(e){var t,n;function i(t){var n;return(n=e.call(this,t)||this).node=null,n._unobserveCb=null,n.handleNode=function(e){n.node&&(n.unobserve(),e||n.props.triggerOnce||n.props.skip||n.setState({inView:!!n.props.initialInView,entry:void 0})),n.node=e||null,n.observeNode()},n.handleChange=function(e,t){e&&n.props.triggerOnce&&n.unobserve(),u(n.props)||n.setState({inView:e,entry:t}),n.props.onChange&&n.props.onChange(e,t)},n.state={inView:!!t.initialInView,entry:void 0},n}n=e,(t=i).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n;var a=i.prototype;return a.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},a.componentWillUnmount=function(){this.unobserve(),this.node=null},a.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,n=e.root,r=e.rootMargin,o=e.trackVisibility,i=e.delay;this._unobserveCb=l(this.node,this.handleChange,{threshold:t,root:n,rootMargin:r,trackVisibility:o,delay:i})}},a.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},a.render=function(){if(!u(this.props)){var e=this.state,t=e.inView,n=e.entry;return this.props.children({inView:t,entry:n,ref:this.handleNode})}var i=this.props,a=i.children,c=i.as,s=i.tag,l=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(i,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(r.createElement)(c||s||"div",o({ref:this.handleNode},l),a)},i}(r.Component);function p(e){var t=void 0===e?{}:e,n=t.threshold,o=t.delay,i=t.trackVisibility,a=t.rootMargin,c=t.root,s=t.triggerOnce,u=t.skip,d=t.initialInView,p=Object(r.useRef)(),f=Object(r.useState)({inView:!!d}),h=f[0],m=f[1],v=Object(r.useCallback)((function(e){void 0!==p.current&&(p.current(),p.current=void 0),u||e&&(p.current=l(e,(function(e,t){m({inView:e,entry:t}),t.isIntersecting&&s&&p.current&&(p.current(),p.current=void 0)}),{root:c,rootMargin:a,threshold:n,trackVisibility:i,delay:o}))}),[Array.isArray(n)?n.toString():n,c,a,s,u,i,o]);Object(r.useEffect)((function(){p.current||!h.entry||s||u||m({inView:!!d})}));var w=[v,h.inView,h.entry];return w.ref=w[0],w.inView=w[1],w.entry=w[2],w}d.displayName="InView",d.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},RIqP:function(e,t,n){var r=n("Ijbi"),o=n("EbDI"),i=n("ZhPi"),a=n("Bnag");e.exports=function(e){return r(e)||o(e)||i(e)||a()}},TSYQ:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},VUT9:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),a=r(n("VbXa")),c=r(n("q1tI")),s=r(n("17x9")),l=n("4M6O"),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="ianchuu",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,l.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,l.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return c.default.createElement("div",(0,o.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(c.default.Component);t.default=u,u.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string,language:s.default.string,remoteAuthS3:s.default.string,apiKey:s.default.string})}},WkPL:function(e,t){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}},ZhPi:function(e,t,n){var r=n("WkPL");e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}},gtMD:function(e,t,n){},qASQ:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("pVnL")),i=r(n("8OQS")),a=r(n("VbXa")),c=r(n("q1tI")),s=r(n("17x9")),l=n("4M6O"),u=(0,l.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="ianchuu",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,l.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,l.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,l.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,r=(0,i.default)(e,["config","placeholder"]);return c.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(c.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:s.default.shape({identifier:s.default.string,title:s.default.string,url:s.default.string}),placeholder:s.default.string}},vAJ3:function(e,t,n){"use strict";var r=n("TqRt");t.__esModule=!0,t.default=void 0;var o=r(n("VbXa")),i=r(n("q1tI")),a=r(n("17x9")),c=function(e){function t(){return e.apply(this,arguments)||this}(0,o.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(i.default.Component);t.default=c,c.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},c.propTypes={commentId:a.default.string.isRequired,width:a.default.number,height:a.default.number,showMedia:a.default.bool,showParentComment:a.default.bool}},yZlL:function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return Z}));var r=n("q1tI"),o=n.n(r),i=n("9eSz"),a=n.n(i),c=n("PGlZ"),s=n("Wbzz"),l=n("Bl7J"),u=n("vrFN"),d=n("ORnI");var p=function(e){var t={url:e.url,identifier:e.identifier,title:e.title};return o.a.createElement(d.Disqus,{config:t})};var f=function(e){var t=e.list,n=void 0===t?[]:t;return o.a.createElement("div",{className:"tags-container"},n.map((function(e,t){return"object"==typeof e?null:o.a.createElement("div",{key:e},o.a.createElement(s.Link,{className:"post-tag-link",to:"/tags/"+e.replace(/\./g,"_")},o.a.createElement("span",{key:e,className:"tag-item"},e)),t<n.length-1&&"·")})))};var h=function(e){var t=e.category,n=e.categoryUrl,r=e.title,i=e.url;return o.a.createElement("ol",{className:"breadcrumb",itemScope:"",itemType:"http://schema.org/BreadcrumbList"},o.a.createElement("li",{className:"category",itemProp:"itemListElement",itemScope:"",itemType:"http://schema.org/ListItem"},o.a.createElement(s.Link,{to:n,itemType:"http://schema.org/Thing",itemProp:"item"},o.a.createElement("span",{itemProp:"name"},t)),o.a.createElement("meta",{itemProp:"position",content:"1"})),o.a.createElement("span",{className:"divider"},"/"),o.a.createElement("li",{className:"article",itemProp:"itemListElement",itemScope:"",itemType:"http://schema.org/ListItem"},o.a.createElement(s.Link,{to:i,itemType:"http://schema.org/Thing",itemProp:"item"},o.a.createElement("span",{itemProp:"name"},r)),o.a.createElement("meta",{itemProp:"position",content:"2"})))};var m=function(e){var t=e.list;return o.a.createElement("div",{className:"toc-list"},o.a.createElement("div",{className:"title"},"目錄"),t.map((function(e){e.id;var t=e.value,n=e.depth;return o.a.createElement("div",{key:t,className:"anchor-item anchor-"+n,onClick:function(){return e=""+{value:t}.value.toLowerCase().replace(/\s+/g,"-").replace(/\./g,""),void window.scroll({top:document.getElementById(e).offsetTop,behavior:"smooth"});var e}},t)})))};function v(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var w,b=n("TSYQ"),g=n.n(b),y=(w=function(e,t){return(w=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}w(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),E=function(){return(E=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},k=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{s(r.next(e))}catch(t){i(t)}}function c(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}s((r=r.apply(e,t||[])).next())}))},O=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},S=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},C=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},I=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},j=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function _(e,t,n){var r=t.height,o=t.width,i=S(t,["height","width"]),a=E({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(n)var s=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(s),n(c))}catch(e){console.error(e)}}),1e3);return c}var N=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,c=void 0===a?"windowCenter":a,s=n.windowWidth,l=void 0===s?550:s;_(e,E({height:i,width:l},"windowCenter"===c?I(l,i):j(l,i)),r)},t.handleClick=function(e){return k(t,void 0,void 0,(function(){var t,n,r,o,i,a,c,s,l,u;return O(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,c=t.openShareDialogOnClick,s=t.opts,l=o(a,s),r?[2]:(e.preventDefault(),n?(u=n(),C(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return c&&this.openShareDialog(l),i&&i(e,l),[2]}}))}))},t}return y(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,i=e.disabledStyle,a=e.forwardedRef,c=(e.networkLink,e.networkName),s=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),l=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,S(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=g()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=E(E(s?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},l),r&&i);return o.a.createElement("button",E({},u,{"aria-label":u["aria-label"]||c,className:d,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(r.Component),q=function(){return(q=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var V=function(e,t,n,i){function a(r,a){var c=n(r),s=q({},r);return Object.keys(c).forEach((function(e){delete s[e]})),o.a.createElement(N,q({},i,s,{forwardedRef:a,networkName:e,networkLink:t,opts:n(r)}))}return a.displayName="ShareButton-"+e,Object(r.forwardRef)(a)};var P=V("email",(function(e,t){var n=t.subject,r=t.body,o=t.separator;return"mailto:"+v({subject:n,body:r?r+o+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),x=function(){return(x=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},D=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function M(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,i=t.iconFillColor,a=t.round,c=t.size,s=D(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.a.createElement("svg",x({viewBox:"0 0 64 64",width:c,height:c},s),a?o.a.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):o.a.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),o.a.createElement("path",{d:e.path,fill:i}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var T=M({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"}),U=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),L=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return U(t,e),t}(Error);function R(e,t){if(!e)throw new L(t)}var z=V("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return R(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+v({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),A=M({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var W=V("line",(function(e,t){var n=t.title;return R(e,"line.url"),"https://social-plugins.line.me/lineit/share"+v({url:e,text:n})}),(function(e){return{title:e.title}}),{windowWidth:500,windowHeight:500}),B=M({color:"#00b800",networkName:"line",path:"M52.62 30.138c0 3.693-1.432 7.019-4.42 10.296h.001c-4.326 4.979-14 11.044-16.201 11.972-2.2.927-1.876-.591-1.786-1.112l.294-1.765c.069-.527.142-1.343-.066-1.865-.232-.574-1.146-.872-1.817-1.016-9.909-1.31-17.245-8.238-17.245-16.51 0-9.226 9.251-16.733 20.62-16.733 11.37 0 20.62 7.507 20.62 16.733zM27.81 25.68h-1.446a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-8.985a.402.402 0 0 0-.402-.401zm9.956 0H36.32a.402.402 0 0 0-.402.401v5.338L31.8 25.858a.39.39 0 0 0-.031-.04l-.002-.003-.024-.025-.008-.007a.313.313 0 0 0-.032-.026.255.255 0 0 1-.021-.014l-.012-.007-.021-.012-.013-.006-.023-.01-.013-.005-.024-.008-.014-.003-.023-.005-.017-.002-.021-.003-.021-.002h-1.46a.402.402 0 0 0-.402.401v8.985c0 .221.18.4.402.4h1.446a.401.401 0 0 0 .402-.4v-5.337l4.123 5.568c.028.04.063.072.101.099l.004.003a.236.236 0 0 0 .025.015l.012.006.019.01a.154.154 0 0 1 .019.008l.012.004.028.01.005.001a.442.442 0 0 0 .104.013h1.446a.4.4 0 0 0 .401-.4v-8.985a.402.402 0 0 0-.401-.401zm-13.442 7.537h-3.93v-7.136a.401.401 0 0 0-.401-.401h-1.447a.4.4 0 0 0-.401.401v8.984a.392.392 0 0 0 .123.29c.072.068.17.111.278.111h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401zm21.429-5.287c.222 0 .401-.18.401-.402v-1.446a.401.401 0 0 0-.401-.402h-5.778a.398.398 0 0 0-.279.113l-.005.004-.006.008a.397.397 0 0 0-.111.276v8.984c0 .108.043.206.112.278l.005.006a.401.401 0 0 0 .284.117h5.778a.4.4 0 0 0 .401-.401v-1.447a.401.401 0 0 0-.401-.401h-3.93v-1.519h3.93c.222 0 .401-.18.401-.402V29.85a.401.401 0 0 0-.401-.402h-3.93V27.93h3.93z"});var Q=V("telegram",(function(e,t){var n=t.title;return R(e,"telegram.url"),"https://telegram.me/share/"+v({url:e,text:n})}),(function(e){return{title:e.title}}),{windowWidth:550,windowHeight:400}),H=M({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"});var F=function(e){var t=e.url,n=e.title,r=void 0===n?"":n,i=e.description,a="分享-"+r,c=void 0===i?"":i;return o.a.createElement("div",{className:"share-container"},o.a.createElement(P,{url:t,subject:a,body:c},o.a.createElement(T,{round:!0,size:"28"})),o.a.createElement(z,{url:t},o.a.createElement(A,{round:!0,size:"28"})),o.a.createElement(W,{url:t},o.a.createElement(B,{round:!0,size:"28"})),o.a.createElement(Q,{url:t},o.a.createElement(H,{round:!0,size:"28"})))};n("DL4o"),n("gtMD"),n("6Z1Q");t.default=function(e){var t,n=e.pageContext,i=e.location,d=e.data,v=d.markdownRemark,w=d.site.siteMetadata.title,b=d.site.siteMetadata.siteUrl,g=Object(r.useState)(!1),y=g[0],E=g[1],k=Object(c.a)({threshold:0,rootMargin:"500px 0% 500px 0%"}),O=k.ref,S=k.inView,C=Object(c.a)({threshold:0}),I=C.ref,j=C.inView,_=Object(c.a)({threshold:0}),N=_.ref,q=_.inView;Object(r.useEffect)((function(){S&&E(!0)}),[S]);var V=d.site.siteMetadata.social.facebook,P=n.previous,x=n.next,D=v.frontmatter.categories,M=b+"/categories/"+v.frontmatter.categories;return o.a.createElement(l.a,((t={location:i,facebook:V,title:w}).facebook=V,t),o.a.createElement(u.a,{title:v.frontmatter.title,description:v.frontmatter.description||v.excerpt,url:""+b+i.pathname,date:v.frontmatter.date,modifyDate:v.parent.modifiedTime,category:D,categoryUrl:M,image:v.frontmatter.thumbnail&&""+b+v.frontmatter.thumbnail.childImageSharp.fluid.src}),o.a.createElement("div",{className:"post-header "+(v.frontmatter.thumbnail||"no-image")},o.a.createElement("header",{className:"post-content-header"},o.a.createElement("h1",{className:"post-content-title"},v.frontmatter.title)),v.frontmatter.thumbnail&&o.a.createElement("div",{className:"post-content-image",ref:I},o.a.createElement(a.a,{className:"kg-image",fluid:v.frontmatter.thumbnail.childImageSharp.fluid,alt:v.frontmatter.title})),o.a.createElement("div",{className:"bread-container"},o.a.createElement(h,{category:D,categoryUrl:M,title:v.frontmatter.title,url:""+b+i.pathname})),o.a.createElement("div",{className:"info-container",ref:N},o.a.createElement("div",{className:"info"},o.a.createElement("span",{className:"post-date"},v.frontmatter.date),"·",o.a.createElement("span",{className:"post-reading-time"},v.timeToRead,"min Read")),o.a.createElement(F,{url:""+b+i.pathname,title:v.frontmatter.title,description:v.frontmatter.description}))),o.a.createElement("div",null,o.a.createElement("div",{className:"toc-container "+(!j&&q?"show-toc":"")},o.a.createElement(m,{list:v.headings})),o.a.createElement("div",{className:"post-content"},o.a.createElement("article",{className:"post-content-body",dangerouslySetInnerHTML:{__html:v.html}}),o.a.createElement("div",{ref:O}),o.a.createElement(f,{list:v.frontmatter.tags}),o.a.createElement("div",{className:"related-container"},o.a.createElement("div",{className:"prev"},P&&o.a.createElement(s.Link,{to:"/"+P.fields.slug.split("-")[2],rel:"prev"},"← ",P.frontmatter.title)),o.a.createElement("div",{className:"next"},x&&o.a.createElement(s.Link,{to:"/"+x.fields.slug.split("-")[2],rel:"next"},x.frontmatter.title," →"))),y&&o.a.createElement(p,{url:""+b+i.pathname,identifier:i.pathname.slice(1),title:v.frontmatter.title}))))};var Z="536525018"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-450286d665ea75ad8481.js.map