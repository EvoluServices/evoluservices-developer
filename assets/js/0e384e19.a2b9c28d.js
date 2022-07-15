"use strict";(self.webpackChunkevoluservices_developer=self.webpackChunkevoluservices_developer||[]).push([[9671],{3905:(e,a,r)=>{r.d(a,{Zo:()=>m,kt:()=>u});var o=r(7294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function n(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?n(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,o,t=function(e,a){if(null==e)return{};var r,o,t={},n=Object.keys(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)r=n[o],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=o.createContext({}),l=function(e){var a=o.useContext(d),r=a;return e&&(r="function"==typeof e?e(a):s(s({},a),e)),r},m=function(e){var a=l(e.components);return o.createElement(d.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},p=o.forwardRef((function(e,a){var r=e.components,t=e.mdxType,n=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=l(r),u=t,v=p["".concat(d,".").concat(u)]||p[u]||c[u]||n;return r?o.createElement(v,s(s({ref:a},m),{},{components:r})):o.createElement(v,s({ref:a},m))}));function u(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var n=r.length,s=new Array(n);s[0]=p;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i.mdxType="string"==typeof e?e:t,s[1]=i;for(var l=2;l<n;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9881:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>n,metadata:()=>i,toc:()=>l});var o=r(7462),t=(r(7294),r(3905));const n={},s="Introdu\xe7\xe3o",i={unversionedId:"intro",id:"intro",title:"Introdu\xe7\xe3o",description:"EvoluServices",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/evoluservices-developer/docs/intro",draft:!1,tags:[],version:"current",frontMatter:{}},d={},l=[{value:"EvoluServices",id:"evoluservices",level:3},{value:"Termos Fundamentais",id:"termos-fundamentais",level:3},{value:"PCI Compliance",id:"pci-compliance",level:3},{value:"Transa\xe7\xe3o",id:"transa\xe7\xe3o",level:3},{value:"Pagamento",id:"pagamento",level:3},{value:"Order",id:"order",level:3},{value:"Guidelines",id:"guidelines",level:3}],m={toc:l};function c(e){let{components:a,...r}=e;return(0,t.kt)("wrapper",(0,o.Z)({},m,r,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"introdu\xe7\xe3o"},"Introdu\xe7\xe3o"),(0,t.kt)("h3",{id:"evoluservices"},"EvoluServices"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("a",{parentName:"strong",href:"https://br.evoluservices.com/"},"EvoluServices Meios de Pagamentos Ltda.")),"\nest\xe1 h\xe1 mais de 18 anos no mercado. Somos refer\xeancia em solu\xe7\xf5es de pagamento e\npossu\xedmos ",(0,t.kt)("strong",{parentName:"p"},"mais de 15.000 clientes")," em todos os estados do Brasil. A confian\xe7a\nem nossa empresa gera ",(0,t.kt)("strong",{parentName:"p"},"40% de indica\xe7\xf5es ao m\xeas")," e contamos com o\n",(0,t.kt)("strong",{parentName:"p"},(0,t.kt)("a",{parentName:"strong",href:"https://www.pcisecuritystandards.org/"},"Certificado de Seguran\xe7a PCI")),"\ndesde 2014."),(0,t.kt)("h3",{id:"termos-fundamentais"},"Termos Fundamentais"),(0,t.kt)("p",null,"Alguns termos s\xe3o fundamentais o entendimento para poder acompanhar com mais\nqualidade o processo de integra\xe7\xe3o com a Order API."),(0,t.kt)("h3",{id:"pci-compliance"},"PCI Compliance"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"PCI Compliance")," ou ",(0,t.kt)("strong",{parentName:"p"},"PCI DSS")," (",(0,t.kt)("em",{parentName:"p"},"Payment Card Industry Data Security Standard"),") \xe9 a\nprincipal certifica\xe7\xe3o de seguran\xe7a digital e todas as empresas que lidam com\ntransa\xe7\xf5es envolvendo o processamento, armazenamento e transmiss\xe3o de informa\xe7\xf5es\nsigilosas, como por exemplo os dados de cart\xe3o de cr\xe9dito, precisam dessa\ncertifica\xe7\xe3o. Ela foi criada pela ",(0,t.kt)("strong",{parentName:"p"},"PCI Security Standards Council"),", uma entidade\nformada pelas empresas Visa, Mastercard, American Express, Discover e JCB\nInternational."),(0,t.kt)("p",null,"Para conseguir essa certifica\xe7\xe3o e obter maior efic\xe1cia na seguran\xe7a dos dados\ndos consumidores a empresa precisa estar em conforme com doze principais\nrequisitos:"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"Instalar e manter uma rede de ",(0,t.kt)("em",{parentName:"li"},"firewall")," segura;"),(0,t.kt)("li",{parentName:"ol"},"Alterar as senhas padr\xe3o dadas por fornecedores, visando reduzir os riscos de invas\xe3o;"),(0,t.kt)("li",{parentName:"ol"},"Usar criptografia de dados;"),(0,t.kt)("li",{parentName:"ol"},"Codificar a transmiss\xe3o de dados do usu\xe1rio e informa\xe7\xf5es confidenciais em redes p\xfablicas;"),(0,t.kt)("li",{parentName:"ol"},"Usar e atualizar frequentemente o antiv\xedrus;"),(0,t.kt)("li",{parentName:"ol"},"Desenvolver e manter aplicativos seguros;"),(0,t.kt)("li",{parentName:"ol"},"Restringir acesso aos dados por parte das empresas;"),(0,t.kt)("li",{parentName:"ol"},"Atribuir uma identifica\xe7\xe3o \xfanica para cada usu\xe1rio;"),(0,t.kt)("li",{parentName:"ol"},"Limitar o acesso f\xedsico aos dados de cada usu\xe1rio;"),(0,t.kt)("li",{parentName:"ol"},"Monitorar os dados dos usu\xe1rios com regularidade;"),(0,t.kt)("li",{parentName:"ol"},"Aplicar testes de seguran\xe7a aos recursos tecnol\xf3gicos;"),(0,t.kt)("li",{parentName:"ol"},"Desenvolver e manter uma pol\xedtica de seguran\xe7a da informa\xe7\xe3o.")),(0,t.kt)("p",null,"Essas regras objetivam proteger os estabelecimentos e consumidores de fraudes\nque envolvam o compartilhamento de dados de cart\xe3o a terceiros. As empresas que\nn\xe3o se enquadram aos requisitos estabelecidos est\xe3o sujeitas ao descredenciamento\npor parte das operadoras dos cart\xf5es de cr\xe9dito, entre outras medidas cab\xedveis."),(0,t.kt)("p",null,"A Evoluservices \xe9 certificada anualmente pelo ",(0,t.kt)("em",{parentName:"p"},"PCI DSS"),"."),(0,t.kt)("h3",{id:"transa\xe7\xe3o"},"Transa\xe7\xe3o"),(0,t.kt)("p",null,"Uma transa\xe7\xe3o financeira \xe9 uma ocasi\xe3o envolvendo de modo geral duas ",(0,t.kt)("em",{parentName:"p"},"personas"),",\nsendo que uma, o ",(0,t.kt)("strong",{parentName:"p"},"vendedor"),", oferece um produto ou servi\xe7o para a segunda, o\n",(0,t.kt)("strong",{parentName:"p"},"comprador"),", que para aquisi\xe7\xe3o do produto/servi\xe7o realiza um pagamento em\ndinheiro em esp\xe9cie, cheque, cart\xe3o de d\xe9bito/cr\xe9dito ou qualquer outra forma de\npagamento."),(0,t.kt)("p",null,"No nosso sistema, o link de pagamento se trata de uma transa\xe7\xe3o com um cart\xe3o de\ncr\xe9dito."),(0,t.kt)("h3",{id:"pagamento"},"Pagamento"),(0,t.kt)("p",null,"Dada uma transa\xe7\xe3o que foi realizada com sucesso utilizando algum de nossos\nprodutos, o pagamento \xe9 o valor que o estabelecimento ir\xe1 receber referente a\nessa transa\xe7\xe3o."),(0,t.kt)("p",null,"O valor desse pagamento se dar\xe1 de acordo com o plano que o estabelecimento tem\nacordado conosco."),(0,t.kt)("h3",{id:"order"},"Order"),(0,t.kt)("p",null,"Uma ",(0,t.kt)("strong",{parentName:"p"},"order")," \xe9 um ",(0,t.kt)("strong",{parentName:"p"},"link de pagamento"),". Ela pode iniciar uma transa\xe7\xe3o de cr\xe9dito ou\numa recorr\xeancia de transa\xe7\xf5es. O link de pagamento ter\xe1 um valor definido no\nmomento de sua cria\xe7\xe3o e deve ser enviado ao pagador para realizar a transa\xe7\xe3o\nde fato."),(0,t.kt)("h3",{id:"guidelines"},"Guidelines"),(0,t.kt)("p",null,"Para que possamos evoluir a API do melhor modo poss\xedvel, seguimos algumas\n",(0,t.kt)("em",{parentName:"p"},"guidelines"),". S\xe3o elas:"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Evitaremos ao m\xe1ximo remover ou renomear par\xe2metros e requisi\xe7\xf5es;"),(0,t.kt)("li",{parentName:"ul"},"Caso adicionarmos algum par\xe2metro a mais para ter acesso a novos recursos, ele ser\xe1 opcional e n\xe3o prejudicar\xe1 o funcionamento da API.")))}c.isMDXComponent=!0}}]);