"use strict";(self.webpackChunkevoluservices_developer=self.webpackChunkevoluservices_developer||[]).push([[4525],{3905:(e,t,r)=>{r.d(t,{Zo:()=>m,kt:()=>u});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},m=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(r),u=n,v=p["".concat(c,".").concat(u)]||p[u]||d[u]||o;return r?a.createElement(v,s(s({ref:t},m),{},{components:r})):a.createElement(v,s({ref:t},m))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var l=2;l<o;l++)s[l]=r[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},7200:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=r(7462),n=(r(7294),r(3905));const o={sidebar_position:1},s="Requisi\xe7\xf5es",i={unversionedId:"remote-transaction/create-remote-transaction/requests",id:"remote-transaction/create-remote-transaction/requests",title:"Requisi\xe7\xf5es",description:"A seguir, \xe9 poss\xedvel ter uma vis\xe3o geral das requisi\xe7\xf5es que fazem parte dos processos de autentica\xe7\xe3o, registro de uma transa\xe7\xe3o e retorno dos dados:",source:"@site/docs/remote-transaction/create-remote-transaction/requests.md",sourceDirName:"remote-transaction/create-remote-transaction",slug:"/remote-transaction/create-remote-transaction/requests",permalink:"/evoluservices-developer/docs/remote-transaction/create-remote-transaction/requests",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"remoteTransaction",previous:{title:"Transa\xe7\xe3o Remota",permalink:"/evoluservices-developer/docs/remote-transaction/create-remote-transaction"},next:{title:"Criar Transa\xe7\xe3o Remota",permalink:"/evoluservices-developer/docs/remote-transaction/create-remote-transaction/how-to-create-remote-transaction"}},c={},l=[],m={toc:l};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"requisi\xe7\xf5es"},"Requisi\xe7\xf5es"),(0,n.kt)("p",null,"A seguir, \xe9 poss\xedvel ter uma vis\xe3o geral das requisi\xe7\xf5es que fazem parte dos processos de autentica\xe7\xe3o, registro de uma transa\xe7\xe3o e retorno dos dados:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Autentica\xe7\xe3o: ",(0,n.kt)("inlineCode",{parentName:"strong"},"[POST] /remote/token")))),(0,n.kt)("p",null,"Para acessar os endpoints da API \xe9 necess\xe1rio apresentar o token da sua aplica\xe7\xe3o que pode ser obtido atrav\xe9s deste m\xe9todo, mediante apresenta\xe7\xe3o das credenciais de acesso fornecidas pelo suporte (username e apiKey)"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cria uma transa\xe7\xe3o remota: ",(0,n.kt)("inlineCode",{parentName:"strong"},"[POST] /remote/transaction")))),(0,n.kt)("p",null,"Cria uma nova transa\xe7\xe3o referente a uma cobran\xe7a. Os par\xe2metros permitem detalhar o modo que a transa\xe7\xe3o ser\xe1 executada e informar o endere\xe7o de retorno."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Retorno dos dados: Callback"))),(0,n.kt)("p",null,"Durante todo o ciclo de vida da transa\xe7\xe3o (cria\xe7\xe3o, aprova\xe7\xe3o/cancelamento, pagamento, etc), os dados da transa\xe7\xe3o referentes \xe0s mudan\xe7as de estado s\xe3o enviadas ao endere\xe7o informado ao criar a cobran\xe7a."),(0,n.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,n.kt)("div",{parentName:"div",className:"admonition-heading"},(0,n.kt)("h5",{parentName:"div"},(0,n.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,n.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,n.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"informa\xe7\xf5es")),(0,n.kt)("div",{parentName:"div",className:"admonition-content"},(0,n.kt)("p",{parentName:"div"},"Para as transa\xe7\xf5es remotas na maquininha (POS), a chamada \xe0 callback ser\xe1 feita ap\xf3s um per\xedodo de 10 a 15 minutos do t\xe9rmino da transa\xe7\xe3o, visto que a callback s\xf3 ser\xe1 chamada ap\xf3s a inser\xe7\xe3o das transa\xe7\xf5es no sistema."))))}d.isMDXComponent=!0}}]);