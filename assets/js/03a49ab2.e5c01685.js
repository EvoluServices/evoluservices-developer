"use strict";(self.webpackChunkevoluservices_developer=self.webpackChunkevoluservices_developer||[]).push([[369],{5680:(e,t,a)=>{a.d(t,{xA:()=>d,yg:()=>c});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=m(a),y=r,c=p["".concat(s,".").concat(y)]||p[y]||g[y]||o;return a?n.createElement(c,l(l({ref:t},d),{},{components:a})):n.createElement(c,l({ref:t},d))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=y;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,l[1]=i;for(var m=2;m<o;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}y.displayName="MDXCreateElement"},2938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>m});var n=a(8168),r=(a(6540),a(5680));const o={sidebar_position:1},l="Listar todos os terminais",i={unversionedId:"remote-transaction/terminals/list-all-terminals",id:"remote-transaction/terminals/list-all-terminals",title:"Listar todos os terminais",description:"Retorna os terminais do estabelecimento que est\xe3o aptos a receber transa\xe7\xe3o remota.",source:"@site/docs/remote-transaction/terminals/list-all-terminals.md",sourceDirName:"remote-transaction/terminals",slug:"/remote-transaction/terminals/list-all-terminals",permalink:"/evoluservices-developer/docs/remote-transaction/terminals/list-all-terminals",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"remoteTransaction",previous:{title:"Terminais",permalink:"/evoluservices-developer/docs/remote-transaction/terminals"},next:{title:"Listar Benefici\xe1rios do Split de Pagamentos",permalink:"/evoluservices-developer/docs/remote-transaction/list-beneficiary-split"}},s={},m=[{value:"Requisi\xe7\xe3o HTTP",id:"requisi\xe7\xe3o-http",level:2},{value:"Header",id:"header",level:2},{value:"Par\xe2metros da URL",id:"par\xe2metros-da-url",level:2},{value:"Resposta",id:"resposta",level:2},{value:"Erros",id:"erros",level:2}],d={toc:m},p="wrapper";function g(e){let{components:t,...a}=e;return(0,r.yg)(p,(0,n.A)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"listar-todos-os-terminais"},"Listar todos os terminais"),(0,r.yg)("p",null,"Retorna os terminais do estabelecimento que est\xe3o aptos a receber transa\xe7\xe3o remota."),(0,r.yg)("h2",{id:"requisi\xe7\xe3o-http"},"Requisi\xe7\xe3o HTTP"),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"GET /remote/merchants/{merchantCode}/terminals")),(0,r.yg)("h2",{id:"header"},"Header"),(0,r.yg)("p",null,"Voc\xea deve especificar no cabe\xe7alho da requisi\xe7\xe3o o tipo de conte\xfado enviado no corpo, bem como o token de acesso."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Par\xe2metro"),(0,r.yg)("th",{parentName:"tr",align:null},"Valor"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Content-Type")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"application/json"))),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"Bearer")),(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"TOKEN"))))),(0,r.yg)("h2",{id:"par\xe2metros-da-url"},"Par\xe2metros da URL"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Par\xe2metro"),(0,r.yg)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"merchantCode")),(0,r.yg)("td",{parentName:"tr",align:null},"O c\xf3digo do estabelecimento (obtido junto ao suporte).")))),(0,r.yg)("h2",{id:"resposta"},"Resposta"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},(0,r.yg)("div",{style:{width:100}},"Propriedade")),(0,r.yg)("th",{parentName:"tr",align:null},"Tipo"),(0,r.yg)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"macAddress")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"O endere\xe7o f\xedsico (MAC Address) associado ao terminal.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"computerName")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"O nome do computador associado ao terminal.")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"terminalId")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"O id do terminal que pode ser utilizado como par\xe2metro para ",(0,r.yg)("a",{parentName:"td",href:"../create-remote-transaction"},"iniciar uma transa\xe7\xe3o remota"),".")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"terminalStatus")),(0,r.yg)("td",{parentName:"tr",align:null},"Texto"),(0,r.yg)("td",{parentName:"tr",align:null},"O status do terminal (consulte a ",(0,r.yg)("a",{parentName:"td",href:"../value-table/terminal-status"},"tabela de status do terminal"),").")))),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'[\n    {\n        "macAddress": "8d:c1:d3:12:14:bb",\n        "computerName": "DESKTOP",\n        "terminalId": "AA009999",\n        "terminalStatus": "ONLINE"\n    }\n]\n')),(0,r.yg)("h2",{id:"erros"},"Erros"),(0,r.yg)("p",null,"Os erros desse m\xe9todo s\xe3o do tipo ",(0,r.yg)("inlineCode",{parentName:"p"},"HTTP 401")," e ",(0,r.yg)("inlineCode",{parentName:"p"},"HTTP 500")),(0,r.yg)("p",null,(0,r.yg)("inlineCode",{parentName:"p"},"Status: 401 ")),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-json"},'{\n   "success": "false",\n   "error": "<Error message>"\n}\n')),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Mensagem"),(0,r.yg)("th",{parentName:"tr",align:null},"Descri\xe7\xe3o"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},(0,r.yg)("inlineCode",{parentName:"td"},"INVALID_TOKEN")),(0,r.yg)("td",{parentName:"tr",align:null},"Token inv\xe1lido.")))),(0,r.yg)("div",{className:"admonition admonition-info alert alert--info"},(0,r.yg)("div",{parentName:"div",className:"admonition-heading"},(0,r.yg)("h5",{parentName:"div"},(0,r.yg)("span",{parentName:"h5",className:"admonition-icon"},(0,r.yg)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.yg)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"informa\xe7\xf5es")),(0,r.yg)("div",{parentName:"div",className:"admonition-content"},(0,r.yg)("p",{parentName:"div"},"Para o erro acima pe\xe7a um novo token de ",(0,r.yg)("a",{parentName:"p",href:"../../remote-transaction/autentication"},"token")))))}g.isMDXComponent=!0}}]);