"use strict";(self.webpackChunkevoluservices_developer=self.webpackChunkevoluservices_developer||[]).push([[8216],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return c}});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function l(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):l(l({},e),t)),a},p=function(t){var e=m(t.components);return n.createElement(d.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,d=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),u=m(a),c=r,N=u["".concat(d,".").concat(c)]||u[c]||s[c]||o;return a?n.createElement(N,l(l({ref:e},p),{},{components:a})):n.createElement(N,l({ref:e},p))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7396:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return d},default:function(){return c},frontMatter:function(){return i},metadata:function(){return m},toc:function(){return s}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),l=["components"],i={sidebar_position:3},d="Callback",m={unversionedId:"remote-transaction/create-remote-transaction/callback",id:"remote-transaction/create-remote-transaction/callback",title:"Callback",description:"Par\xe2metros",source:"@site/docs/remote-transaction/create-remote-transaction/callback.md",sourceDirName:"remote-transaction/create-remote-transaction",slug:"/remote-transaction/create-remote-transaction/callback",permalink:"/evoluservices-developer/docs/remote-transaction/create-remote-transaction/callback",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"remoteTransaction",previous:{title:"Criar Transa\xe7\xe3o Remota",permalink:"/evoluservices-developer/docs/remote-transaction/create-remote-transaction/how-to-create-remote-transaction"},next:{title:"Excluir Transa\xe7\xe3o Remota",permalink:"/evoluservices-developer/docs/remote-transaction/create-remote-transaction/delete-remote-transaction"}},p={},s=[{value:"Par\xe2metros",id:"par\xe2metros",level:3},{value:"Body",id:"body",level:3},{value:"JSON",id:"json",level:4},{value:"Par\xe2metros dos pagamentos aos estabelecimentos e dos splits",id:"par\xe2metros-dos-pagamentos-aos-estabelecimentos-e-dos-splits",level:3}],u={toc:s};function c(t){var e=t.components,a=(0,r.Z)(t,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"callback"},"Callback"),(0,o.kt)("h3",{id:"par\xe2metros"},"Par\xe2metros"),(0,o.kt)("p",null,"Se uma URL for enviada ao criar a transa\xe7\xe3o, um JSON contendo os dados a seguir ser\xe1 enviado via POST quando o status da transa\xe7\xe3o for alterado."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Propriedade"),(0,o.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,o.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"remoteTransactionId")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"Identificador da transa\xe7\xe3o.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"transactionNumber")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"N\xfamero da transa\xe7\xe3o.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"status")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"Status da transa\xe7\xe3o (consulte  a ",(0,o.kt)("a",{parentName:"td",href:"../../remote-transaction/value-table/transaction-status"},"tabela de status da transa\xe7\xe3o"),").")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"merchantId")),(0,o.kt)("td",{parentName:"tr",align:null},"N\xfamero"),(0,o.kt)("td",{parentName:"tr",align:null},"Identificador do estabelecimento.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:null},"N\xfamero"),(0,o.kt)("td",{parentName:"tr",align:null},"Valor total da transa\xe7\xe3o.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"paymentBrand")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"Bandeira do cart\xe3o (para lista consulte a ",(0,o.kt)("a",{parentName:"td",href:"../value-table/brand"},"tabela de bandeiras"),").")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"terminalId")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"ID do terminal.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"payments")),(0,o.kt)("td",{parentName:"tr",align:null},"Lista de objetos"),(0,o.kt)("td",{parentName:"tr",align:null},"Pagamentos aos estabelecimentos da transa\xe7\xe3o.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"paymentQuantity")),(0,o.kt)("td",{parentName:"tr",align:null},"N\xfamero"),(0,o.kt)("td",{parentName:"tr",align:null},"N\xfamero de pagamentos ao estabelecimento.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"splits")),(0,o.kt)("td",{parentName:"tr",align:null},"Lista de objetos"),(0,o.kt)("td",{parentName:"tr",align:null},"Informa\xe7\xf5es ligadas aos splits de pagamento.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"clientName")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"Nome do cliente que passou a transa\xe7\xe3o, quando fornecido.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"clientDocument")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"Documento do cliente que passou a transa\xe7\xe3o, quando fornecido.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"NSU")),(0,o.kt)("td",{parentName:"tr",align:null},"N\xfamero"),(0,o.kt)("td",{parentName:"tr",align:null},"NSU da transa\xe7\xe3o, dispon\xedvel apenas depois de aprovada.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"authorizationNumber")),(0,o.kt)("td",{parentName:"tr",align:null},"N\xfamero"),(0,o.kt)("td",{parentName:"tr",align:null},"N\xfamero de autoriza\xe7\xe3o da transa\xe7\xe3o, dispon\xedvel apenas depois de aprovada.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"orderUuid")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"identificador \xfanico da Order.")))),(0,o.kt)("h3",{id:"body"},"Body"),(0,o.kt)("h4",{id:"json"},"JSON"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "remoteTransactionId": "<id>",\n  "status": "APPROVED",\n  "merchantId": "<id>",\n  "orderUuid": "<id>",\n  "value": "10.00",\n  "paymentBrand": "VISA_CREDITO",\n  "transactionNumber": "<transactionNumber>",\n  "paymentQuantity": "2",\n  "clientName": "CLIENT_NOT_INFORMED",\n  "clientDocument": "",\n  "terminalId": "<id>",\n  "payments": [\n    {\n      "status": "UNPAID",\n      "value": 4.95,\n      "number": 1,\n      "date": "21/12/2016",\n      "recipientName": "<name>",\n      "recipientDocument": "<document>"\n    },\n    {\n      "status": "UNPAID",\n      "value": 4.95,\n      "number": 2,\n      "date": "21/01/2017",\n      "recipientName": "<name>",\n      "recipientDocument": "<document>"\n    }\n  ],\n  "splits": [\n    {\n      "status": "UNPAID",\n      "value": 2.35,\n      "number": 1,\n      "date": "02/02/2020",\n      "recipientName": "<name>",\n      "recipientDocument": "<document>"\n    },\n    {\n      "status": "UNPAID",\n      "value": 3.15,\n      "number": 2,\n      "date": "02/03/2020",\n      "recipientName": "<name>",\n      "recipientDocument": "<document>"\n    }\n  ]\n}\n')),(0,o.kt)("h3",{id:"par\xe2metros-dos-pagamentos-aos-estabelecimentos-e-dos-splits"},"Par\xe2metros dos pagamentos aos estabelecimentos e dos splits"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Propriedade"),(0,o.kt)("th",{parentName:"tr",align:null},"Tipo"),(0,o.kt)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"status")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"Status do pagamento.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"value")),(0,o.kt)("td",{parentName:"tr",align:null},"N\xfamero"),(0,o.kt)("td",{parentName:"tr",align:null},"Valor destinado ao estabelecimento ou ao benefici\xe1rio, no caso do split.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"number")),(0,o.kt)("td",{parentName:"tr",align:null},"N\xfamero"),(0,o.kt)("td",{parentName:"tr",align:null},"N\xfamero do pagamento.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"date")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"Data estimada de pagamento.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"recipientName")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"Nome do estabelecimento ou do benefici\xe1rio, no caso do split.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"recipientDocument")),(0,o.kt)("td",{parentName:"tr",align:null},"Texto"),(0,o.kt)("td",{parentName:"tr",align:null},"Documento do estabelecimento ou do benefici\xe1rio, no caso do split.")))),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"informa\xe7\xf5es")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Veja a se\xe7\xe3o ",(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"../../remote-transaction/value-table"},"Tabela de Valores"))," para os poss\xedveis status da transa\xe7\xe3o e do pagamento."))))}c.isMDXComponent=!0}}]);