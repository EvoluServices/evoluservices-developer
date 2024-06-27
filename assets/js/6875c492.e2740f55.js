"use strict";(self.webpackChunkevoluservices_developer=self.webpackChunkevoluservices_developer||[]).push([[4813],{6669:(e,t,a)=>{a.d(t,{A:()=>h});var l=a(6540),r=a(53),n=a(6358),s=a(4581),i=a(5489),o=a(1312);const m={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};function c(e){let{sidebar:t}=e;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,r.A)(m.sidebar,"thin-scrollbar"),"aria-label":(0,o.T)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,r.A)(m.sidebarItemTitle,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,r.A)(m.sidebarItemList,"clean-list")},t.items.map((e=>l.createElement("li",{key:e.permalink,className:m.sidebarItem},l.createElement(i.A,{isNavLink:!0,to:e.permalink,className:m.sidebarItemLink,activeClassName:m.sidebarItemLinkActive},e.title)))))))}var g=a(5600);function u(e){let{sidebar:t}=e;return l.createElement("ul",{className:"menu__list"},t.items.map((e=>l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(i.A,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function d(e){return l.createElement(g.GX,{component:u,props:e})}function p(e){let{sidebar:t}=e;const a=(0,s.l)();return t?.items.length?"mobile"===a?l.createElement(d,{sidebar:t}):l.createElement(c,{sidebar:t}):null}function h(e){const{sidebar:t,toc:a,children:s,...i}=e,o=t&&t.items.length>0;return l.createElement(n.A,i,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(p,{sidebar:t}),l.createElement("main",{className:(0,r.A)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},7713:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(6540),r=a(1312),n=a(9022);function s(e){const{metadata:t}=e,{previousPage:a,nextPage:s}=t;return l.createElement("nav",{className:"pagination-nav","aria-label":(0,r.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&l.createElement(n.A,{permalink:a,title:l.createElement(r.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),s&&l.createElement(n.A,{permalink:s,title:l.createElement(r.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},7139:(e,t,a)=>{a.d(t,{A:()=>v});var l=a(6540),r=a(53),n=a(1312),s=a(5489),i=a(6025),o=a(5846),m=a(440),c=a(2402),g=a(3419),u=a(2053);function d(e){return e.href?l.createElement(s.A,e):l.createElement(l.Fragment,null,e.children)}function p(e){let{author:t}=e;const{name:a,title:r,url:n,imageURL:s,email:i}=t,o=n||i&&`mailto:${i}`||void 0;return l.createElement("div",{className:"avatar margin-bottom--sm"},s&&l.createElement(d,{href:o,className:"avatar__photo-link"},l.createElement("img",{className:"avatar__photo",src:s,alt:a})),a&&l.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},l.createElement("div",{className:"avatar__name"},l.createElement(d,{href:o,itemProp:"url"},l.createElement("span",{itemProp:"name"},a))),r&&l.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))}const h={authorCol:"authorCol_sTYa",imageOnlyAuthorRow:"imageOnlyAuthorRow_vA2J",imageOnlyAuthorCol:"imageOnlyAuthorCol_kG3X"};function b(e){let{authors:t,assets:a}=e;if(0===t.length)return null;const n=t.every((e=>{let{name:t}=e;return!t}));return l.createElement("div",{className:(0,r.A)("margin-top--md margin-bottom--sm",n?h.imageOnlyAuthorRow:"row")},t.map(((e,t)=>l.createElement("div",{className:(0,r.A)(!n&&"col col--6",n?h.imageOnlyAuthorCol:h.authorCol),key:t},l.createElement(p,{author:{...e,imageURL:a.authorsImageUrls[t]??e.imageURL}})))))}const E={blogPostTitle:"blogPostTitle_Ikge",blogPostData:"blogPostData_SAv4",blogPostDetailsFull:"blogPostDetailsFull_u0Nl"};function v(e){const t=function(){const{selectMessage:e}=(0,o.W)();return t=>{const a=Math.ceil(t);return e(a,(0,n.T)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}(),{withBaseUrl:a}=(0,i.h)(),{children:d,frontMatter:p,assets:h,metadata:v,truncated:A,isBlogPostPage:f=!1}=e,{date:_,formattedDate:N,permalink:k,tags:P,readingTime:T,title:w,editUrl:I,authors:L}=v,y=h.image??p.image,x=!f&&A,C=P.length>0,R=f?"h1":"h2";return l.createElement("article",{className:f?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},l.createElement("header",null,l.createElement(R,{className:E.blogPostTitle,itemProp:"headline"},f?w:l.createElement(s.A,{itemProp:"url",to:k},w)),l.createElement("div",{className:(0,r.A)(E.blogPostData,"margin-vert--md")},l.createElement("time",{dateTime:_,itemProp:"datePublished"},N),void 0!==T&&l.createElement(l.Fragment,null," \xb7 ",t(T))),l.createElement(b,{authors:L,assets:h})),y&&l.createElement("meta",{itemProp:"image",content:a(y,{absolute:!0})}),l.createElement("div",{id:f?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},l.createElement(c.A,null,d)),(C||A)&&l.createElement("footer",{className:(0,r.A)("row docusaurus-mt-lg",f&&E.blogPostDetailsFull)},C&&l.createElement("div",{className:(0,r.A)("col",{"col--9":x})},l.createElement(u.A,{tags:P})),f&&I&&l.createElement("div",{className:"col margin-top--sm"},l.createElement(g.A,{editUrl:I})),x&&l.createElement("div",{className:(0,r.A)("col text--right",{"col--3":C})},l.createElement(s.A,{to:v.permalink,"aria-label":(0,n.T)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:w})},l.createElement("b",null,l.createElement(n.A,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},3069:(e,t,a)=>{a.r(t),a.d(t,{default:()=>p});var l=a(6540),r=a(53),n=a(1312),s=a(5846),i=a(1003),o=a(7559),m=a(5489),c=a(6669),g=a(7139),u=a(7713),d=a(1463);function p(e){let{tag:t,items:a,sidebar:p,listMetadata:h}=e;const b=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,n.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}(),E=(0,n.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:b(t.count),tagName:t.label});return l.createElement(i.e3,{className:(0,r.A)(o.G.wrapper.blogPages,o.G.page.blogTagPostListPage)},l.createElement(i.be,{title:E}),l.createElement(d.A,{tag:"blog_tags_posts"}),l.createElement(c.A,{sidebar:p},l.createElement("header",{className:"margin-bottom--xl"},l.createElement("h1",null,E),l.createElement(m.A,{href:t.allTagsPath},l.createElement(n.A,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),a.map((e=>{let{content:t}=e;return l.createElement(g.A,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:!0},l.createElement(t,null))})),l.createElement(u.A,{metadata:h})))}},3419:(e,t,a)=>{a.d(t,{A:()=>c});var l=a(6540),r=a(1312),n=a(7559),s=a(8168),i=a(53);const o={iconEdit:"iconEdit_eYIM"};function m(e){let{className:t,...a}=e;return l.createElement("svg",(0,s.A)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.A)(o.iconEdit,t),"aria-hidden":"true"},a),l.createElement("g",null,l.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function c(e){let{editUrl:t}=e;return l.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:n.G.common.editThisPage},l.createElement(m,null),l.createElement(r.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9022:(e,t,a)=>{a.d(t,{A:()=>s});var l=a(6540),r=a(53),n=a(5489);function s(e){const{permalink:t,title:a,subLabel:s,isNext:i}=e;return l.createElement(n.A,{className:(0,r.A)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},s&&l.createElement("div",{className:"pagination-nav__sublabel"},s),l.createElement("div",{className:"pagination-nav__label"},a))}},6133:(e,t,a)=>{a.d(t,{A:()=>i});var l=a(6540),r=a(53),n=a(5489);const s={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function i(e){let{permalink:t,label:a,count:i}=e;return l.createElement(n.A,{href:t,className:(0,r.A)(s.tag,i?s.tagWithCount:s.tagRegular)},a,i&&l.createElement("span",null,i))}},2053:(e,t,a)=>{a.d(t,{A:()=>o});var l=a(6540),r=a(53),n=a(1312),s=a(6133);const i={tags:"tags_jXut",tag:"tag_QGVx"};function o(e){let{tags:t}=e;return l.createElement(l.Fragment,null,l.createElement("b",null,l.createElement(n.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),l.createElement("ul",{className:(0,r.A)(i.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return l.createElement("li",{key:a,className:i.tag},l.createElement(s.A,{label:t,permalink:a}))}))))}},5846:(e,t,a)=>{a.d(t,{W:()=>m});var l=a(6540),r=a(4586);const n=["zero","one","two","few","many","other"];function s(e){return n.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,l.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function m(){const e=o();return{selectMessage:(t,a)=>function(e,t,a){const l=e.split("|");if(1===l.length)return l[0];l.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${l.length}: ${e}`);const r=a.select(t),n=a.pluralForms.indexOf(r);return l[Math.min(n,l.length-1)]}(a,t,e)}}}}]);