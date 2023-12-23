"use strict";(self.webpackChunkgatsby_tailwindcss_typescript=self.webpackChunkgatsby_tailwindcss_typescript||[]).push([[975],{4270:function(e,t,a){var c=a(7294),n=a(8032);t.Z=()=>c.createElement("div",{className:"grid grid-cols-2 gap-4 py-4 pb-20"},c.createElement("div",{className:"flex content-center justify-center justify-self-end flex-col md:pr-12"},c.createElement("p",{className:"text-xl pb-2"},"Keep curiosity alive.")),c.createElement("div",{className:"flex items-center\tjustify-start"},c.createElement(n.S,{src:"../images/banner.png",alt:"ian and hippo",width:240,__imageData:a(9648)})))},6605:function(e,t,a){var c=a(1883),n=a(8032),l=a(7294),s=a(5594);t.Z=e=>{let{slug:t,title:a,description:r,postImage:i,date:m,category:p,readingTimeText:o}=e;return l.createElement("article",{key:t,className:"grid grid-cols-3 gap-4 pb-20",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("div",{className:"col-span-2 flex flex-col"},l.createElement("header",{className:"pb-2"},l.createElement("h2",null,l.createElement(c.Link,{to:`/${(0,s.u)(t)}`,itemProp:"url"},l.createElement("h2",{className:"text-lg font-bold text-ellipsis overflow-hidden",itemProp:"headline"},a)))),l.createElement("section",{className:"pb-2 grow"},l.createElement(c.Link,{to:`/${(0,s.u)(t)}`,itemProp:"url"},l.createElement("p",{className:"line-clamp-3",dangerouslySetInnerHTML:{__html:r},itemProp:"description"}))),l.createElement("div",{className:"flex gap-1 items-center text-sm flex-wrap"},l.createElement("div",null,m),l.createElement("div",null,"·"),l.createElement(c.Link,{to:`/categories/${p}`},p),l.createElement("div",null,"·"),l.createElement("div",null,o))),l.createElement("div",{className:"flex items-center"},i&&l.createElement(n.G,{image:i,alt:a})))}},5712:function(e,t,a){var c=a(7294),n=a(1883),l=a(8032),s=a(8530);t.Z=()=>{const{allMarkdownRemark:{tags:e,categories:t}}=(0,n.useStaticQuery)("3707347541"),r=(0,c.useRef)(null);return c.createElement("div",{ref:r,className:"h-full"},c.createElement("div",{className:"pt-2 sticky top-10"},c.createElement("div",{className:"pb-6"},c.createElement("p",{className:"text-base py-2 font-medium"},"Sponsor Creator"),c.createElement("a",{href:"https://store.line.me/stickershop/author/1019955/zh-Hant",className:"link text-base leading-6 font-medium py-1 text-center",target:"_blank"},c.createElement(l.S,{src:"../images/hippostick.png",alt:"line sticker hippo",width:150,__imageData:a(3338)}),c.createElement("p",{className:"text-base text-center py-2"},"Line Sticker"))),c.createElement("div",{className:"pb-6"},c.createElement("p",{className:"text-base py-2 font-medium"},"Category"),c.createElement("div",null,t.map((e=>{let{value:t}=e;return c.createElement(n.Link,{key:t,to:`/categories/${t}`},c.createElement("p",{className:"text-sm pb-2"},t))})))),c.createElement("div",{className:"pb-6"},c.createElement("p",{className:"text-base py-2 font-medium"},"Tag"),c.createElement("div",{className:"flex flex-wrap"},c.createElement(s.Z,{tags:e})))))}},8530:function(e,t,a){var c=a(7294),n=a(1883);t.Z=e=>{let{tags:t}=e;return c.createElement(c.Fragment,null,t.map(((e,a)=>{let{value:l}=e;return c.createElement("div",{className:"tag-item",key:l},c.createElement(n.Link,{to:`/tags/${l&&l.replace(/\./g,"_")}`},c.createElement("span",{className:"text-sm pb-2"},l&&l.replace(/_/g," "))),a<t.length-1&&c.createElement("span",{className:"px-0.5"},"·"))})))}},2178:function(e,t,a){a.r(t);var c=a(7294),n=a(8032),l=a(4606),s=a(4270),r=a(2551),i=a(6605),m=a(5712);t.default=e=>{let{pageContext:t,data:a,location:p}=e;const o=a.allMarkdownRemark.nodes,{tag:d}=t;return c.createElement(l.Z,{location:p},c.createElement(r.Z,{title:"Ian Chu"}),c.createElement(s.Z,null),c.createElement("main",null,c.createElement("div",{className:"container mx-auto py-4 sm:px-4 lg:max-w-screen-lg"},c.createElement("div",{className:"pb-10"},c.createElement("h3",{className:"text-lg font-bold"},"Tag: ",d," (",o.length,")")),c.createElement("div",{className:"grid md:grid-cols-6 md:gap-20"},c.createElement("div",{className:"md:col-span-4"},o.map((e=>{const t=e.frontmatter.title||e.fields.slug,a=(0,n.c)(e.frontmatter.thumbnail);return c.createElement(i.Z,{key:e.fields.slug,slug:e.fields.slug,title:t,description:e.frontmatter.description||e.excerpt,postImage:a,date:e.frontmatter.date,category:e.frontmatter.categories,readingTimeText:e.fields.readingTime.text})}))),c.createElement("div",{className:"hidden md:block md:col-span-2"},c.createElement(m.Z,null))))))}},5594:function(e,t,a){a.d(t,{u:function(){return c}});const c=e=>e.split("-")[2]},3338:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/8079b88b0a49a4a49708fc8d677e6b4c/de3a1/hippostick.png","srcSet":"/static/8079b88b0a49a4a49708fc8d677e6b4c/f2a56/hippostick.png 38w,\\n/static/8079b88b0a49a4a49708fc8d677e6b4c/7458e/hippostick.png 75w,\\n/static/8079b88b0a49a4a49708fc8d677e6b4c/de3a1/hippostick.png 150w","sizes":"(min-width: 150px) 150px, 100vw"},"sources":[{"srcSet":"/static/8079b88b0a49a4a49708fc8d677e6b4c/0852d/hippostick.webp 38w,\\n/static/8079b88b0a49a4a49708fc8d677e6b4c/18188/hippostick.webp 75w,\\n/static/8079b88b0a49a4a49708fc8d677e6b4c/c65bc/hippostick.webp 150w","type":"image/webp","sizes":"(min-width: 150px) 150px, 100vw"}]},"width":150,"height":150}')},9648:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/24e5a01c1b37714fe34f1e0575b706e0/5c424/banner.png","srcSet":"/static/24e5a01c1b37714fe34f1e0575b706e0/339f9/banner.png 60w,\\n/static/24e5a01c1b37714fe34f1e0575b706e0/5b408/banner.png 120w,\\n/static/24e5a01c1b37714fe34f1e0575b706e0/5c424/banner.png 240w,\\n/static/24e5a01c1b37714fe34f1e0575b706e0/9bba9/banner.png 480w","sizes":"(min-width: 240px) 240px, 100vw"},"sources":[{"srcSet":"/static/24e5a01c1b37714fe34f1e0575b706e0/0c74c/banner.webp 60w,\\n/static/24e5a01c1b37714fe34f1e0575b706e0/e51fb/banner.webp 120w,\\n/static/24e5a01c1b37714fe34f1e0575b706e0/ccf6f/banner.webp 240w,\\n/static/24e5a01c1b37714fe34f1e0575b706e0/90d0d/banner.webp 480w","type":"image/webp","sizes":"(min-width: 240px) 240px, 100vw"}]},"width":240,"height":258}')}}]);
//# sourceMappingURL=component---src-templates-tags-tsx-10d732146331905e3fb0.js.map