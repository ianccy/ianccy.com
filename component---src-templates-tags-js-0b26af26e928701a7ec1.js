(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{DNPW:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz");t.a=function(e){return r.a.createElement("article",{className:"post-card post-card-large "+e.postClass+" "+(e.node.frontmatter.thumbnail?"with-image":"no-image")},r.a.createElement("div",{className:"post-card-link"},r.a.createElement("div",{className:"post-card-content-container"},r.a.createElement("div",{className:"post-card-content"},r.a.createElement(i.Link,{to:"/"+e.node.fields.slug.split("-")[2],className:"post-link"},r.a.createElement("h2",{className:"post-card-title"},e.node.frontmatter.title||e.node.fields.slug))),r.a.createElement("div",null,r.a.createElement(i.Link,{to:"/"+e.node.fields.slug.split("-")[2],className:"post-link"},r.a.createElement("p",{className:"post-card-description"},e.node.frontmatter.description))),r.a.createElement("div",{className:"post-card-tag-container"},r.a.createElement("p",{className:"post-card-date"},e.node.frontmatter.date),r.a.createElement("span",{className:"dot"},"·"),r.a.createElement("p",{className:"post-card-read"},e.node.timeToRead,"min"),r.a.createElement("span",{className:"dot"},"·"),r.a.createElement(i.Link,{className:"post-card-cate-link",to:"/categories/"+e.node.frontmatter.categories},r.a.createElement("p",{className:"post-card-cate"},e.node.frontmatter.categories)))),r.a.createElement("div",{className:"post-image-container"},e.node.frontmatter.thumbnail&&r.a.createElement("div",{className:"post-bg-image",style:{backgroundImage:"url("+e.node.frontmatter.thumbnail.childImageSharp.fluid.src+")"}}))))}},"J/Hu":function(e,t,a){},K0Sf:function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("9eSz"),s=a.n(i);t.a=function(e){var t=e.imgFluid;return r.a.createElement("header",{className:"page-head"},r.a.createElement("div",{className:"banner-text"},r.a.createElement("h2",{className:"page-head-title"},"Hi，I am Ian.",r.a.createElement("br",null),"網頁技術、網路行銷",r.a.createElement("br",null),"或是任何想寫的東西。")),r.a.createElement("div",{className:"img-container"},r.a.createElement(s.a,{className:"index-img",fluid:t,alt:"A corgi smiling happily"})))}},MN1z:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",(function(){return u}));var n=a("q1tI"),r=a.n(n),i=a("PGlZ"),s=a("K0Sf"),o=a("Bl7J"),l=a("vrFN"),c=a("DNPW"),d=a("j6+Y");a("J/Hu");t.default=function(e){var t=e.pageContext,a=e.data,u=e.location,m=Object(n.useState)(1),p=m[0],h=m[1],f=a.site.siteMetadata.title,g=a.allMarkdownRemark.edges,v=a.site.siteMetadata,b=v.social,E=v.author,N=0,y=t.tag,k=Object(i.a)({threshold:0}),w=k.ref,V=k.inView;k.entry;return Object(n.useEffect)((function(){V&&g.length>10*p&&h((function(e){return e+1}))}),[V]),r.a.createElement(o.a,{location:u,title:f,social:b,author:E},r.a.createElement(l.a,{title:y}),r.a.createElement(s.a,{imgFluid:a.file.childImageSharp.fluid}),r.a.createElement("div",{className:"post-tags"},"Tag : ",y),r.a.createElement("div",{className:"index-container"},r.a.createElement(d.a,null),r.a.createElement("div",{className:"post-feed"},g.map((function(e,t){var a=e.node;return N++,t>10*p?null:r.a.createElement(c.a,{key:a.fields.slug,count:N,node:a,postClass:"post"})})))),r.a.createElement("div",{ref:w}))};var u="1332239547"},PGlZ:function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a("q1tI");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i=new Map,s=new Map,o=0;function l(e){return Object.keys(e).filter(Boolean).sort().map((function(t){return t+"_"+("root"===t?(a=e.root)?(s.has(a)||(o+=1,s.set(a,o.toString())),s.get(a)):"0":e[t]);var a})).toString()}function c(e,t,a){if(void 0===a&&(a={}),!e)return function(){};var n=function(e){var t=l(e),a=i.get(t);if(!a){var n=new Map,r=new IntersectionObserver((function(t){t.forEach((function(t){var a,i=t.isIntersecting&&r.thresholds.some((function(e){return t.intersectionRatio>=e}));e.trackVisibility&&void 0===t.isVisible&&(t.isVisible=i),null==(a=n.get(t.target))||a.forEach((function(e){e(i,t)}))}))}),e);a={id:t,observer:r,elements:n},i.set(t,a)}return a}(a),r=n.id,s=n.observer,o=n.elements,c=o.get(e)||[];return o.has(e)||o.set(e,c),c.push(t),s.observe(e),function(){c.splice(c.indexOf(t),1),0===c.length&&(o.delete(e),s.unobserve(e)),0===o.size&&(s.disconnect(),i.delete(r))}}function d(e){return"function"!=typeof e.children}var u=function(e){var t,a;function i(t){var a;return(a=e.call(this,t)||this).node=null,a._unobserveCb=null,a.handleNode=function(e){a.node&&(a.unobserve(),e||a.props.triggerOnce||a.props.skip||a.setState({inView:!!a.props.initialInView,entry:void 0})),a.node=e||null,a.observeNode()},a.handleChange=function(e,t){e&&a.props.triggerOnce&&a.unobserve(),d(a.props)||a.setState({inView:e,entry:t}),a.props.onChange&&a.props.onChange(e,t)},a.state={inView:!!t.initialInView,entry:void 0},a}a=e,(t=i).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var s=i.prototype;return s.componentDidUpdate=function(e){e.rootMargin===this.props.rootMargin&&e.root===this.props.root&&e.threshold===this.props.threshold&&e.skip===this.props.skip&&e.trackVisibility===this.props.trackVisibility&&e.delay===this.props.delay||(this.unobserve(),this.observeNode())},s.componentWillUnmount=function(){this.unobserve(),this.node=null},s.observeNode=function(){if(this.node&&!this.props.skip){var e=this.props,t=e.threshold,a=e.root,n=e.rootMargin,r=e.trackVisibility,i=e.delay;this._unobserveCb=c(this.node,this.handleChange,{threshold:t,root:a,rootMargin:n,trackVisibility:r,delay:i})}},s.unobserve=function(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)},s.render=function(){if(!d(this.props)){var e=this.state,t=e.inView,a=e.entry;return this.props.children({inView:t,entry:a,ref:this.handleNode})}var i=this.props,s=i.children,o=i.as,l=i.tag,c=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(i,["children","as","tag","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView"]);return Object(n.createElement)(o||l||"div",r({ref:this.handleNode},c),s)},i}(n.Component);function m(e){var t=void 0===e?{}:e,a=t.threshold,r=t.delay,i=t.trackVisibility,s=t.rootMargin,o=t.root,l=t.triggerOnce,d=t.skip,u=t.initialInView,m=Object(n.useRef)(),p=Object(n.useState)({inView:!!u}),h=p[0],f=p[1],g=Object(n.useCallback)((function(e){void 0!==m.current&&(m.current(),m.current=void 0),d||e&&(m.current=c(e,(function(e,t){f({inView:e,entry:t}),t.isIntersecting&&l&&m.current&&(m.current(),m.current=void 0)}),{root:o,rootMargin:s,threshold:a,trackVisibility:i,delay:r}))}),[Array.isArray(a)?a.toString():a,o,s,l,d,i,r]);Object(n.useEffect)((function(){m.current||!h.entry||l||d||f({inView:!!u})}));var v=[g,h.inView,h.entry];return v.ref=v[0],v.inView=v[1],v.entry=v[2],v}u.displayName="InView",u.defaultProps={threshold:0,triggerOnce:!1,initialInView:!1}},"j6+Y":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),i=a("Wbzz"),s=a("PGlZ"),o=a("9eSz"),l=a.n(o);t.a=function(){var e=Object(i.useStaticQuery)("2659504858"),t=e.file.childImageSharp.fluid,a=e.tagsGroup,n=e.categoriesGroup,o=Object(s.a)({threshold:.1}),c=o.ref,d=o.inView,u=Object(s.a)({threshold:.1}),m=u.ref,p=u.inView;return r.a.createElement("div",{className:"mobile-hidden"},r.a.createElement("div",{className:!d&&p?"fixed-spcae":"",ref:c}),r.a.createElement("div",{ref:m,className:"side-bar "+(!d&&p?"fixed-side":"")},r.a.createElement("div",{className:"line-side"},r.a.createElement("p",{className:"header"},"贊助創作"),r.a.createElement("div",null,r.a.createElement("a",{target:"_blank",href:"https://store.line.me/stickershop/author/1019955/zh-Hant",targer:"_blank",alt:"小河馬與牠的快樂夥伴"},r.a.createElement(l.a,{className:"index-img",fluid:t,alt:"hippo line stick"}),r.a.createElement("p",null,"Line 貼圖")))),r.a.createElement("div",{className:"categories-side"},r.a.createElement("p",{className:"header"},"Category"),r.a.createElement("div",null,n.group.map((function(e){var t=e.fieldValue;return r.a.createElement(i.Link,{to:"/categories/"+t},t)})))),r.a.createElement("div",{className:"tags-side"},r.a.createElement("p",{className:"header"},"Tag"),r.a.createElement("div",null,a.group.map((function(e,t){var n=e.fieldValue;return r.a.createElement(r.a.Fragment,null,r.a.createElement(i.Link,{to:"/tags/"+n.replace(/\./g,"_")},n),t<a.group.length-1&&r.a.createElement("span",{className:"dot"},"·"))}))))))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-0b26af26e928701a7ec1.js.map