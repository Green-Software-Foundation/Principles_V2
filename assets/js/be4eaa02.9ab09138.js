"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[8066],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7632:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(7462),o=(r(7294),r(4137));const a={version:1,submitted_by:"yelghali",published_date:new Date("2024-03-14T00:00:00.000Z"),category:"cloud",tags:["cloud","compute","kubernetes","role:software-engineer","role:cloud-engineer","size:medium"]},i="Use cloud native processor VMs",l={unversionedId:"catalog/cloud/use-energy-efficient-hardware",id:"catalog/cloud/use-energy-efficient-hardware",title:"Use cloud native processor VMs",description:"Description",source:"@site/docs/catalog/cloud/use-energy-efficient-hardware.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/use-energy-efficient-hardware",permalink:"/catalog/cloud/use-energy-efficient-hardware",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/patterns/edit/main/docs/catalog/cloud/use-energy-efficient-hardware.md",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"compute",permalink:"/tags/compute"},{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"role:software-engineer",permalink:"/tags/role-software-engineer"},{label:"role:cloud-engineer",permalink:"/tags/role-cloud-engineer"},{label:"size:medium",permalink:"/tags/size-medium"}],version:"current",frontMatter:{version:1,submitted_by:"yelghali",published_date:"2024-03-14T00:00:00.000Z",category:"cloud",tags:["cloud","compute","kubernetes","role:software-engineer","role:cloud-engineer","size:medium"]},sidebar:"tutorialSidebar",previous:{title:"Use DDoS protection",permalink:"/catalog/cloud/use-ddos-protection"},next:{title:"Use serverless cloud services",permalink:"/catalog/cloud/use-serverless"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"use-cloud-native-processor-vms"},"Use cloud native processor VMs"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Cloud virtual machines come with different capabilities based on different hardware processors. As such, using virtual machines based on the efficiency of their processors would impact hardware efficiency and reduce carbon emissions."),(0,o.kt)("h2",{id:"solution"},"Solution"),(0,o.kt)("p",null,"Using new cloud virtual machines that have been engineered with ",(0,o.kt)("a",{parentName:"p",href:"https://www.forbes.com/sites/davealtavilla/2022/10/13/amperes-efficient-128-core-cloud-native-processor-builds-momentum-in-sustainable-data-centers/"},"cloud native processors")," allows you to efficiently run scale-out, cloud-native workloads and consume energy efficiently."),(0,o.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,o.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,o.kt)("p",null,"Using energy efficient hardware impacts SCI as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"E"),": By using energy efficient hardware, we reduce the total embodied carbon emissions."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"M"),": By using energy efficient hardware, we also reduce the embodied emissions.")),(0,o.kt)("h2",{id:"assumptions"},"Assumptions"),(0,o.kt)("p",null,"The cloud provider offers VM SKUs based on efficient hardware."),(0,o.kt)("h2",{id:"considerations"},"Considerations"),(0,o.kt)("p",null,"Energy efficient VMs tend to be cost effective as well. However, you should consider SKU availability in the region you choose for deployment:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Azure: ",(0,o.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/blog/azure-virtual-machines-with-ampere-altra-arm-based-processors-generally-available/"},"https://azure.microsoft.com/en-us/blog/azure-virtual-machines-with-ampere-altra-arm-based-processors-generally-available/")),(0,o.kt)("li",{parentName:"ul"},"Google: ",(0,o.kt)("a",{parentName:"li",href:"https://cloud.google.com/blog/products/compute/tau-t2a-is-first-compute-engine-vm-on-an-arm-chip"},"https://cloud.google.com/blog/products/compute/tau-t2a-is-first-compute-engine-vm-on-an-arm-chip"))))}p.isMDXComponent=!0}}]);