"use strict";(self.webpackChunkevoluservices_developer=self.webpackChunkevoluservices_developer||[]).push([[7888],{5680:(e,t,a)=>{a.d(t,{xA:()=>s,yg:()=>c});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),m=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(d.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=m(a),y=r,c=p["".concat(d,".").concat(y)]||p[y]||g[y]||o;return a?n.createElement(c,l(l({ref:t},s),{},{components:a})):n.createElement(c,l({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=y;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},4128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(8168),r=(a(6540),a(5680));const o={sidebar_position:3},l="Callback",i={unversionedId:"remote-transaction/create-remote-transaction/callback",id:"remote-transaction/create-remote-transaction/callback",title:"Callback",description:"Par\xe2metros",source:"@site/docs/remote-transaction/create-remote-transaction/callback.md",sourceDirName:"remote-transaction/create-remote-transaction",slug:"/remote-transaction/create-remote-transaction/callback",permalink:"/evoluservices-developer/docs/remote-transaction/create-remote-transaction/callback",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"remoteTransaction",previous:{title:"Criar Transa\xe7\xe3o Remota",permalink:"/evoluservices-developer/docs/remote-transaction/create-remote-transaction/how-to-create-remote-transaction"},next:{title:"Excluir Transa\xe7\xe3o Remota",permalink:"/evoluservices-developer/docs/remote-transaction/create-remote-transaction/delete-remote-transaction"}},d={},m=[{value:"Par\xe2metros",id:"par\xe2metros",level:3},{value:"Body",id:"body",level:3},{value:"JSON",id:"json",level:4},{value:"Par\xe2metros dos pagamentos aos estabelecimentos e dos splits",id:"par\xe2metros-dos-pagamentos-aos-estabelecimentos-e-dos-splits",level:3}],s={toc:m},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"callback"},"Callback"),(0,r.yg)("h3",{id:"par\xe2metros"},"Par\xe2metros"),(0,r.yg)("p",null,"Se uma URL for enviada ao criar a transa\xe7\xe3o, um JSON contendo os dados a seguir ser\xe1 enviado via POST quando o status da transa\xe7\xe3o for alterado."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Propriedade"),(0,r.yg)("th",{parentName:"tr",align:null},"Tipo"),(0,r.yg)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"remoteTransactionId")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"Identificador da transa\xe7\xe3o.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"transactionNumber")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"N\xfamero da transa\xe7\xe3o.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"status")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"Status da transa\xe7\xe3o (consulte  a ",(0,r.yg)("a",{parentName:"td",href:"../../remote-transaction/value-table/transaction-status"},"tabela de status da transa\xe7\xe3o"),").")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"merchantId")),(0,r.yg)("td",{parentName:"tr",align:null},"N\xfamero"),(0,r.yg)("td",{parentName:"tr",align:null},"Identificador do estabelecimento.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"value")),(0,r.yg)("td",{parentName:"tr",align:null},"N\xfamero"),(0,r.yg)("td",{parentName:"tr",align:null},"Valor total da transa\xe7\xe3o.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"paymentBrand")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"Bandeira do cart\xe3o (para lista consulte a ",(0,r.yg)("a",{parentName:"td",href:"../value-table/brand"},"tabela de bandeiras"),").")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"terminalId")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"ID do terminal.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"payments")),(0,r.yg)("td",{parentName:"tr",align:null},"Lista de objetos"),(0,r.yg)("td",{parentName:"tr",align:null},"Pagamentos aos estabelecimentos da transa\xe7\xe3o.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"paymentQuantity")),(0,r.yg)("td",{parentName:"tr",align:null},"N\xfamero"),(0,r.yg)("td",{parentName:"tr",align:null},"N\xfamero de pagamentos ao estabelecimento.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"splits")),(0,r.yg)("td",{parentName:"tr",align:null},"Lista de objetos"),(0,r.yg)("td",{parentName:"tr",align:null},"Informa\xe7\xf5es ligadas aos splits de pagamento.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"clientName")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"Nome do cliente que passou a transa\xe7\xe3o, quando fornecido.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"NSU")),(0,r.yg)("td",{parentName:"tr",align:null},"N\xfamero"),(0,r.yg)("td",{parentName:"tr",align:null},"NSU da transa\xe7\xe3o, dispon\xedvel apenas depois de aprovada.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"authorizationNumber")),(0,r.yg)("td",{parentName:"tr",align:null},"N\xfamero"),(0,r.yg)("td",{parentName:"tr",align:null},"N\xfamero de autoriza\xe7\xe3o da transa\xe7\xe3o, dispon\xedvel apenas depois de aprovada.")))),(0,r.yg)("h3",{id:"body"},"Body"),(0,r.yg)("h4",{id:"json"},"JSON"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n  "remoteTransactionId": "<id>",\n  "status": "APPROVED",\n  "merchantId": "<id>",\n  "value": "10.00",\n  "paymentBrand": "VISA_CREDITO",\n  "transactionNumber": "<transactionNumber>",\n  "paymentQuantity": "2",\n  "clientName": "CLIENT_NOT_INFORMED",\n  "terminalId": "<id>",\n  "payments": [\n    {\n      "status": "UNPAID",\n      "value": 4.95,\n      "number": 1,\n      "date": "21/12/2016",\n      "recipientName": "<name>",\n      "recipientDocument": "<document>"\n    },\n    {\n      "status": "UNPAID",\n      "value": 4.95,\n      "number": 2,\n      "date": "21/01/2017",\n      "recipientName": "<name>",\n      "recipientDocument": "<document>"\n    }\n  ],\n  "splits": [\n    {\n      "status": "UNPAID",\n      "value": 2.35,\n      "number": 1,\n      "date": "02/02/2020",\n      "recipientName": "<name>",\n      "recipientDocument": "<document>"\n    },\n    {\n      "status": "UNPAID",\n      "value": 3.15,\n      "number": 2,\n      "date": "02/03/2020",\n      "recipientName": "<name>",\n      "recipientDocument": "<document>"\n    }\n  ]\n}\n')),(0,r.yg)("h3",{id:"par\xe2metros-dos-pagamentos-aos-estabelecimentos-e-dos-splits"},"Par\xe2metros dos pagamentos aos estabelecimentos e dos splits"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Propriedade"),(0,r.yg)("th",{parentName:"tr",align:null},"Tipo"),(0,r.yg)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"status")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"Status do pagamento.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"value")),(0,r.yg)("td",{parentName:"tr",align:null},"N\xfamero"),(0,r.yg)("td",{parentName:"tr",align:null},"Valor destinado ao estabelecimento ou ao benefici\xe1rio, no caso do split.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"number")),(0,r.yg)("td",{parentName:"tr",align:null},"N\xfamero"),(0,r.yg)("td",{parentName:"tr",align:null},"N\xfamero do pagamento.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"date")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"Data estimada de pagamento.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"recipientName")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"Nome do estabelecimento ou do benefici\xe1rio, no caso do split.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"recipientDocument")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"Documento do estabelecimento ou do benefici\xe1rio, no caso do split.")))),(0,r.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"informa\xe7\xf5es")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Veja a se\xe7\xe3o ",(0,r.yg)("strong",{parentName:"p"},(0,r.yg)("a",{parentName:"strong",href:"../../remote-transaction/value-table"},"Tabela de Valores"))," para os poss\xedveis status da transa\xe7\xe3o e do pagamento."))))}g.isMDXComponent=!0}}]);