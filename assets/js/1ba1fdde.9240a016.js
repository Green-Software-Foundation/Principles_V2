"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[5025],{4137:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var s=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);r&&(s=s.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,s)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,s,n=function(e,r){if(null==e)return{};var t,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)t=a[s],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)t=a[s],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=s.createContext({}),c=function(e){var r=s.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=c(e.components);return s.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return s.createElement(s.Fragment,{},r)}},d=s.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=n,v=d["".concat(o,".").concat(m)]||d[m]||p[m]||a;return t?s.createElement(v,l(l({ref:r},u),{},{components:t})):s.createElement(v,l({ref:r},u))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return s.createElement.apply(null,l)}return s.createElement.apply(null,t)}d.displayName="MDXCreateElement"},409:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=t(7462),n=(t(7294),t(4137));const a={version:1,submitted_by:"markus-ntt-seidl",published_date:new Date("2023-01-17T00:00:00.000Z"),category:"cloud",tags:["cloud","role:cloud-engineer","size:small","serverless"]},l="Use serverless cloud services",i={unversionedId:"catalog/cloud/use-serverless",id:"catalog/cloud/use-serverless",title:"Use serverless cloud services",description:"Description",source:"@site/docs/catalog/cloud/use-serverless.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/use-serverless",permalink:"/catalog/cloud/use-serverless",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/patterns/edit/main/docs/catalog/cloud/use-serverless.md",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"role:cloud-engineer",permalink:"/tags/role-cloud-engineer"},{label:"size:small",permalink:"/tags/size-small"},{label:"serverless",permalink:"/tags/serverless"}],version:"current",frontMatter:{version:1,submitted_by:"markus-ntt-seidl",published_date:"2023-01-17T00:00:00.000Z",category:"cloud",tags:["cloud","role:cloud-engineer","size:small","serverless"]},sidebar:"tutorialSidebar",previous:{title:"Use cloud native processor VMs",permalink:"/catalog/cloud/use-energy-efficient-hardware"},next:{title:"Web",permalink:"/catalog/web/"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2},{value:"References",id:"references",level:2}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,n.kt)("wrapper",(0,s.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"use-serverless-cloud-services"},"Use serverless cloud services"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Serverless cloud services are services that the cloud provider manages for the application. These scale dynamically with the workload needed to fulfill the service task and apply best practices to keep resource usage minimal."),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("p",null,"Evaluate serverless based on your application requirements."),(0,n.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,n.kt)("p",null,"Regarding the SCI equation. using serverless cloud services will impact:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"I"),": Resources are only running when in use and shared over many applications, the carbon intensity will decrease. There is a slight increase in provisioning serverless structures (for example AWS Lambda cold starts), overall the carbon intensity still decreases."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"M"),": Serverless architectures share resources and only use resources when needed, this reduces the embodied carbon.")),(0,n.kt)("h2",{id:"assumptions"},"Assumptions"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The cloud provider provides serverless services for the technologies the application uses"),(0,n.kt)("li",{parentName:"ul"},"There is an assumption that the application can benefit from serverless architectures")),(0,n.kt)("h2",{id:"considerations"},"Considerations"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Evaluate and consider what workloads can be moved to serverless. Using serverless patterns can involve a complete redesign of the application architecture."),(0,n.kt)("li",{parentName:"ul"},"Consider if your application can afford a cold start during serverless resource initialization. ")),(0,n.kt)("h2",{id:"references"},"References"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://devblogs.microsoft.com/sustainable-software/adopting-azure-serverless-architectures-to-help-reduce-co2-emissions-part-1/"},"Azure Dev Blog"))))}p.isMDXComponent=!0}}]);