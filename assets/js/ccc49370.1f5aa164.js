"use strict";(self.webpackChunkevoluservices_developer=self.webpackChunkevoluservices_developer||[]).push([[3249],{6669:(e,t,a)=>{a.d(t,{A:()=>h});var n=a(6540),l=a(53),r=a(6358),o=a(4581),i=a(5489),s=a(1312);const c={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function m(e){let{sidebar:t}=e;return n.createElement("aside",{className:"col col--3"},n.createElement("nav",{className:(0,l.A)(c.sidebar,"thin-scrollbar"),"aria-label":(0,s.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},n.createElement("div",{className:(0,l.A)(c.sidebarItemTitle,"margin-bottom--md")},t.title),n.createElement("ul",{className:(0,l.A)(c.sidebarItemList,"clean-list")},t.items.map((e=>n.createElement("li",{key:e.permalink,className:c.sidebarItem},n.createElement(i.A,{isNavLink:!0,to:e.permalink,className:c.sidebarItemLink,activeClassName:c.sidebarItemLinkActive},e.title)))))))}var u=a(5600);function d(e){let{sidebar:t}=e;return n.createElement("ul",{className:"menu__list"},t.items.map((e=>n.createElement("li",{key:e.permalink,className:"menu__list-item"},n.createElement(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function g(e){return n.createElement(u.GX,{component:d,props:e})}function p(e){let{sidebar:t}=e;const a=(0,o.l)();return t?.items.length?"mobile"===a?n.createElement(g,{sidebar:t}):n.createElement(m,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:o,...i}=e,s=t&&t.items.length>0;return n.createElement(r.A,i,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement(p,{sidebar:t}),n.createElement("main",{className:(0,l.A)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},o),a&&n.createElement("div",{className:"col col--2"},a))))}},7139:(e,t,a)=>{a.d(t,{A:()=>f});var n=a(6540),l=a(53),r=a(1312),o=a(5489),i=a(6025),s=a(5846),c=a(440),m=a(2402),u=a(3419),d=a(2053);function g(e){return e.href?n.createElement(o.A,e):n.createElement(n.Fragment,null,e.children)}function p(e){let{author:t}=e;const{name:a,title:l,url:r,imageURL:o,email:i}=t,s=r||i&&`mailto:${i}`||void 0;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(g,{href:s,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(g,{href:s,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),l&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const h={authorCol:"authorCol_sTYa",imageOnlyAuthorRow:"imageOnlyAuthorRow_vA2J",imageOnlyAuthorCol:"imageOnlyAuthorCol_kG3X"};function v(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const r=t.every((e=>{let{name:t}=e;return!t}));return n.createElement("div",{className:(0,l.A)("margin-top--md margin-bottom--sm",r?h.imageOnlyAuthorRow:"row")},t.map(((e,t)=>n.createElement("div",{className:(0,l.A)(!r&&"col col--6",r?h.imageOnlyAuthorCol:h.authorCol),key:t},n.createElement(p,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const b={blogPostTitle:"blogPostTitle_Ikge",blogPostData:"blogPostData_SAv4",blogPostDetailsFull:"blogPostDetailsFull_u0Nl"};function f(e){const t=function(){const{selectMessage:e}=(0,s.W)();return t=>{const a=Math.ceil(t);return e(a,(0,r.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,i.h)(),{children:g,frontMatter:p,assets:h,metadata:f,truncated:E,isBlogPostPage:A=!1}=e,{date:_,formattedDate:N,permalink:k,tags:L,readingTime:P,title:C,editUrl:I,authors:x}=f,y=h.image??p.image,T=!A&&E,H=L.length>0,w=A?"h1":"h2";return n.createElement("article",{className:A?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement(w,{className:b.blogPostTitle,itemProp:"headline"},A?C:n.createElement(o.A,{itemProp:"url",to:k},C)),n.createElement("div",{className:(0,l.A)(b.blogPostData,"margin-vert--md")},n.createElement("time",{dateTime:_,itemProp:"datePublished"},N),void 0!==P&&n.createElement(n.Fragment,null," \xb7 ",t(P))),n.createElement(v,{authors:x,assets:h})),y&&n.createElement("meta",{itemProp:"image",content:a(y,{absolute:!0})}),n.createElement("div",{id:A?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},n.createElement(m.A,null,g)),(H||E)&&n.createElement("footer",{className:(0,l.A)("row docusaurus-mt-lg",A&&b.blogPostDetailsFull)},H&&n.createElement("div",{className:(0,l.A)("col",{"col--9":T})},n.createElement(d.A,{tags:L})),A&&I&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(u.A,{editUrl:I})),T&&n.createElement("div",{className:(0,l.A)("col text--right",{"col--3":H})},n.createElement(o.A,{to:f.permalink,"aria-label":(0,r.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:C})},n.createElement("b",null,n.createElement(r.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},7699:(e,t,a)=>{a.r(t),a.d(t,{default:()=>v});var n=a(6540),l=a(53),r=a(1003),o=a(7559),i=a(6669),s=a(7139),c=a(8168),m=a(1312),u=a(9022);function d(e){const{nextItem:t,prevItem:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,m.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&n.createElement(u.A,(0,c.A)({},a,{subLabel:n.createElement(m.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&n.createElement(u.A,(0,c.A)({},t,{subLabel:n.createElement(m.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var g=a(7763);function p(e){const{content:t}=e,{assets:a,metadata:l}=t,{title:o,description:i,date:s,tags:c,authors:m,frontMatter:u}=l,{keywords:d}=u,g=a.image??u.image;return n.createElement(r.be,{title:o,description:i,keywords:d,image:g},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:s}),m.some((e=>e.url))&&n.createElement("meta",{property:"article:author",content:m.map((e=>e.url)).filter(Boolean).join(",")}),c.length>0&&n.createElement("meta",{property:"article:tag",content:c.map((e=>e.label)).join(",")}))}function h(e){const{content:t,sidebar:a}=e,{assets:l,metadata:r}=t,{nextItem:o,prevItem:c,frontMatter:m}=r,{hide_table_of_contents:u,toc_min_heading_level:p,toc_max_heading_level:h}=m;return n.createElement(i.A,{sidebar:a,toc:!u&&t.toc&&t.toc.length>0?n.createElement(g.A,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:h}):void 0},n.createElement(s.A,{frontMatter:m,assets:l,metadata:r,isBlogPostPage:!0},n.createElement(t,null)),(o||c)&&n.createElement(d,{nextItem:o,prevItem:c}))}function v(e){return n.createElement(r.e3,{className:(0,l.A)(o.G.wrapper.blogPages,o.G.page.blogPostPage)},n.createElement(p,e),n.createElement(h,e))}},3419:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(6540),l=a(1312),r=a(7559),o=a(8168),i=a(53);const s={iconEdit:"iconEdit_eYIM"};function c(e){let{className:t,...a}=e;return n.createElement("svg",(0,o.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(s.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function m(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.G.common.editThisPage},n.createElement(c,null),n.createElement(l.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9022:(e,t,a)=>{a.d(t,{A:()=>o});var n=a(6540),l=a(53),r=a(5489);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return n.createElement(r.A,{className:(0,l.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&n.createElement("div",{className:"pagination-nav__sublabel"},o),n.createElement("div",{className:"pagination-nav__label"},a))}},7763:(e,t,a)=>{a.d(t,{A:()=>m});var n=a(8168),l=a(6540),r=a(53),o=a(5195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"},s="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function m(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,r.A)(i.tableOfContents,"thin-scrollbar",t)},l.createElement(o.A,(0,n.A)({},a,{linkClassName:s,linkActiveClassName:c})))}},5195:(e,t,a)=>{a.d(t,{A:()=>p});var n=a(8168),l=a(6540),r=a(6342);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),a=Array(7).fill(-1);t.forEach(((e,t)=>{const n=a.slice(2,e.level);e.parentIndex=Math.max(...n),a[e.level]=t}));const n=[];return t.forEach((e=>{const{parentIndex:a,...l}=e;a>=0?t[a].children.push(l):n.push(l)})),n}function i(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return t.flatMap((e=>{const t=i({toc:e.children,minHeadingLevel:a,maxHeadingLevel:n});return function(e){return e.level>=a&&e.level<=n}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function c(e,t){let{anchorTopOffset:a}=t;const n=e.find((e=>s(e).top>=a));if(n){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(n))?n:e[e.indexOf(n)-1]??null}return e[e.length-1]??null}function m(){const e=(0,l.useRef)(0),{navbar:{hideOnScroll:t}}=(0,r.p)();return(0,l.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function u(e){const t=(0,l.useRef)(void 0),a=m();(0,l.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:n,linkActiveClassName:l,minHeadingLevel:r,maxHeadingLevel:o}=e;function i(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(n),i=function(e){let{minHeadingLevel:t,maxHeadingLevel:a}=e;const n=[];for(let l=t;l<=a;l+=1)n.push(`h${l}.anchor`);return Array.from(document.querySelectorAll(n.join()))}({minHeadingLevel:r,maxHeadingLevel:o}),s=c(i,{anchorTopOffset:a.current}),m=e.find((e=>s&&s.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,a){a?(t.current&&t.current!==e&&t.current.classList.remove(l),e.classList.add(l),t.current=e):e.classList.remove(l)}(e,e===m)}))}return document.addEventListener("scroll",i),document.addEventListener("resize",i),i(),()=>{document.removeEventListener("scroll",i),document.removeEventListener("resize",i)}}),[e,a])}function d(e){let{toc:t,className:a,linkClassName:n,isChild:r}=e;return t.length?l.createElement("ul",{className:r?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(d,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}const g=l.memo(d);function p(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:m,maxHeadingLevel:d,...p}=e;const h=(0,r.p)(),v=m??h.tableOfContents.minHeadingLevel,b=d??h.tableOfContents.maxHeadingLevel,f=function(e){let{toc:t,minHeadingLevel:a,maxHeadingLevel:n}=e;return(0,l.useMemo)((()=>i({toc:o(t),minHeadingLevel:a,maxHeadingLevel:n})),[t,a,n])}({toc:t,minHeadingLevel:v,maxHeadingLevel:b});return u((0,l.useMemo)((()=>{if(s&&c)return{linkClassName:s,linkActiveClassName:c,minHeadingLevel:v,maxHeadingLevel:b}}),[s,c,v,b])),l.createElement(g,(0,n.A)({toc:f,className:a,linkClassName:s},p))}},6133:(e,t,a)=>{a.d(t,{A:()=>i});var n=a(6540),l=a(53),r=a(5489);const o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i}=e;return n.createElement(r.A,{href:t,className:(0,l.A)(o.tag,i?o.tagWithCount:o.tagRegular)},a,i&&n.createElement("span",null,i))}},2053:(e,t,a)=>{a.d(t,{A:()=>s});var n=a(6540),l=a(53),r=a(1312),o=a(6133);const i={tags:"tags_jXut",tag:"tag_QGVx"};function s(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.A)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:i.tag},n.createElement(o.A,{label:t,permalink:a}))}))))}},5846:(e,t,a)=>{a.d(t,{W:()=>c});var n=a(6540),l=a(4586);const r=["zero","one","two","few","many","other"];function o(e){return r.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,l.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}}}]);