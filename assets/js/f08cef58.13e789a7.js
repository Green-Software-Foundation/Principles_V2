"use strict";(self.webpackChunkgsf_docusaurus_template=self.webpackChunkgsf_docusaurus_template||[]).push([[7632],{4137:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(4137));const o={version:1,submitted_by:"yelghali",published_date:new Date("2024-07-30T00:00:00.000Z"),category:"cloud",tags:["cloud","network","compute","kubernetes","role:cloud-engineer","size:medium"]},l="Reduce network traversal between VMs",i={unversionedId:"catalog/cloud/reduce-network-traversal-between-VMs",id:"catalog/cloud/reduce-network-traversal-between-VMs",title:"Reduce network traversal between VMs",description:"Description",source:"@site/docs/catalog/cloud/reduce-network-traversal-between-VMs.md",sourceDirName:"catalog/cloud",slug:"/catalog/cloud/reduce-network-traversal-between-VMs",permalink:"/catalog/cloud/reduce-network-traversal-between-VMs",draft:!1,editUrl:"https://github.com/Green-Software-Foundation/patterns/edit/main/docs/catalog/cloud/reduce-network-traversal-between-VMs.md",tags:[{label:"cloud",permalink:"/tags/cloud"},{label:"network",permalink:"/tags/network"},{label:"compute",permalink:"/tags/compute"},{label:"kubernetes",permalink:"/tags/kubernetes"},{label:"role:cloud-engineer",permalink:"/tags/role-cloud-engineer"},{label:"size:medium",permalink:"/tags/size-medium"}],version:"current",frontMatter:{version:1,submitted_by:"yelghali",published_date:"2024-07-30T00:00:00.000Z",category:"cloud",tags:["cloud","network","compute","kubernetes","role:cloud-engineer","size:medium"]},sidebar:"tutorialSidebar",previous:{title:"Queue non-urgent processing requests",permalink:"/catalog/cloud/queue-non-urgent-requests"},next:{title:"Reduce transmitted data",permalink:"/catalog/cloud/reduce-transmitted-data"}},s={},c=[{value:"Description",id:"description",level:2},{value:"Solution",id:"solution",level:2},{value:"SCI Impact",id:"sci-impact",level:2},{value:"Assumptions",id:"assumptions",level:2},{value:"Considerations",id:"considerations",level:2}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"reduce-network-traversal-between-vms"},"Reduce network traversal between VMs"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Placing VMs in a single region or a single availability zone reduces the physical distance between the instances. "),(0,a.kt)("h2",{id:"solution"},"Solution"),(0,a.kt)("p",null,"Choose the VM placement that is best for your workload. "),(0,a.kt)("p",null,"Most cloud providers provide various options, like"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html"},"https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/placement-groups.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/instances/define-instance-placement"},"https://cloud.google.com/compute/docs/instances/define-instance-placement")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure-stack/hci/manage/vm-affinity"},"https://learn.microsoft.com/en-us/azure-stack/hci/manage/vm-affinity"))),(0,a.kt)("h2",{id:"sci-impact"},"SCI Impact"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"SCI = (E * I) + M per R"),"\n",(0,a.kt)("a",{parentName:"p",href:"https://grnsft.org/sci"},"Software Carbon Intensity Spec")),(0,a.kt)("p",null,"Regarding the SCI equation, reducing network traversal between VMs will impact:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"E"),": By reducing network travel distance, we reduce the amount of energy consumed.")),(0,a.kt)("h2",{id:"assumptions"},"Assumptions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"VM placement options provided by cloud providers are adequate for this workload,")),(0,a.kt)("h2",{id:"considerations"},"Considerations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"For business critical workloads, you need to ensure your workload is spread across multiple availability-zones, which may result in more network traversal and increase in your carbon footprint.")))}p.isMDXComponent=!0}}]);