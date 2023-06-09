"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[4844],{7128:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(1883),l=n(8032);const c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:n}=e;if(c.includes(t))return a.createElement("p",null,"TODO");const o=(0,r.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(l.G,{image:o.node.childImageSharp.gatsbyImageData,alt:n,className:"chartImageImg"}),a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,n))))):null}},4596:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),r=n(7128),l=n(1555),c=n(1883);function o(e){let{imgName:t,caption:n,linkTo:o}=e;return a.createElement(l.Z,{xs:12,md:4},a.createElement(c.Link,{to:o},a.createElement(r.Z,{imgName:t,caption:n})))}},9215:function(e,t,n){n.d(t,{Z:function(){return b}});n(1883);var a=n(7294),r=n(1143),l=n.n(r),c=n(2081),o=n(6833);function i(e,t){let n=0;return a.Children.map(e,(e=>a.isValidElement(e)?t(e,n++):e))}var s=n(4184),m=n.n(s),d=n(6792),u=n(5893);const f=a.forwardRef((({bsPrefix:e,size:t,vertical:n=!1,className:a,role:r="group",as:l="div",...c},o)=>{const i=(0,d.vE)(e,"btn-group");let s=i;return n&&(s=`${i}-vertical`),(0,u.jsx)(l,{...c,ref:o,role:r,className:m()(a,s,t&&`${i}-${t}`)})}));f.displayName="ButtonGroup";var p=f,h=n(8984);const g=a.forwardRef(((e,t)=>{const{children:n,type:r="radio",name:s,value:m,onChange:d,vertical:f=!1,...h}=(0,c.Ch)(e,{value:"onChange"}),g=()=>null==m?[]:[].concat(m);return"radio"!==r||s||l()(!1),(0,u.jsx)(p,{...h,ref:t,vertical:f,children:i(n,(e=>{const t=g(),{value:n,onChange:l}=e.props;return a.cloneElement(e,{type:r,name:e.name||s,checked:-1!==t.indexOf(n),onChange:(0,o.Z)(l,(e=>((e,t)=>{if(!d)return;const n=g(),a=-1!==n.indexOf(e);"radio"!==r?d(a?n.filter((t=>t!==e)):[...n,e],t):a||d(e,t)})(n,e)))})}))})}));var v=Object.assign(g,{Button:h.Z});const E={kdeplot:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.kdeplot.html",basicUsage:"",parameters:[{name:"fill",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"control the color",type:"boolean",relatedChart:"70_deffffed"}]},violin:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.violinplot.html",basicUsage:"",parameters:[{name:"width",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"controls the color",type:"string",relatedChart:"70_deffffed"}]}},y=e=>"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1);function b(e){let{functionName:t}=e;const n=E[t],{0:r,1:l}=(0,a.useState)(n.parameters[0].name),{0:c,1:o}=(0,a.useState)("hello"),i=n.parameters.filter((e=>e.name===r))[0];return a.createElement(a.Fragment,null,a.createElement("h2",{id:y(t+"() details")},"🔎 ",a.createElement("code",null,t)," function parameters",a.createElement("a",{style:{marginLeft:"15px",fontSize:"14px"},href:n.docUrl},"→ see full doc")),a.createElement(v,{type:"radio",size:"sm",name:"functionParameter",value:r,onChange:e=>l(e)},n.parameters.map(((e,t)=>a.createElement(h.Z,{key:t,className:"functionButton",id:"functionParameter-"+e.name,value:e.name},e.name)))),a.createElement("div",null,a.createElement("code",null,"string"),a.createElement("span",null,"→ ",i.description)),a.createElement("br",null),a.createElement("br",null))}},8897:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var a=n(7294),r=n(429),l=n(146),c=n(682),o=n(8728),i=(n(4596),n(8742)),s=(n(1883),n(4125),n(2737),n(7128),n(9215),n(3921));const m="<p>About privacy.</p>";function d(){return a.createElement(l.Z,{title:"Privacy",isTocEnabled:!0,seoDescription:"About privacy"},a.createElement(r.Z,{title:"Privacy",description:m}),a.createElement(c.Z,null,a.createElement("h2",{id:"Quick"},"⏱ About privacy")),a.createElement(s.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(c.Z,null,a.createElement(i.Z,{chartFamily:"distribution"}))),a.createElement(s.Z,null),a.createElement(c.Z,null,a.createElement(o.Z,null)),a.createElement(s.Z,null))}},8984:function(e,t,n){var a=n(4184),r=n.n(a),l=n(7294),c=n(6792),o=n(5005),i=n(5893);const s=()=>{},m=l.forwardRef((({bsPrefix:e,name:t,className:n,checked:a,type:l,onChange:m,value:d,disabled:u,id:f,inputRef:p,...h},g)=>(e=(0,c.vE)(e,"btn-check"),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("input",{className:e,name:t,type:l,value:d,ref:p,autoComplete:"off",checked:!!a,disabled:!!u,onChange:m||s,id:f}),(0,i.jsx)(o.Z,{...h,ref:g,className:r()(n,u&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:f})]}))));m.displayName="ToggleButton",t.Z=m}}]);
//# sourceMappingURL=component---src-pages-privacy-js-680851ecba7e9e5397f9.js.map