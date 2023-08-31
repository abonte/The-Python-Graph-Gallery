"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[789],{8742:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),r=n(4051),l=n(1555),o=n(818),c=n(8447),s=n(5584);const i={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const n=c.c.filter((e=>e.family===t)).map(((e,t)=>{const n=(0,s.y)(e.pythonURL);return a.createElement(l.Z,{key:t,xs:4,md:2,className:"col-1-7"},a.createElement(o.Z,{link:n,chartType:e.logo,caption:e.label}))}));return a.createElement("div",{style:{paddingBottom:15}},a.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==i?void 0:i[t]),a.createElement(r.Z,null,n))}},9389:function(e,t,n){n.d(t,{H:function(){return o}});var a=n(7294),r=n(1883);function l(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const o=e=>{let{title:t,seoDescription:n,keywords:o}=e;return a.createElement(a.Fragment,null,a.createElement("title",null,t),a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),a.createElement("meta",{name:"description",content:n||"How to build a chart with Python"}),a.createElement("meta",{name:"author",content:"Yan Holtz"}),a.createElement("meta",{name:"keywords",content:o||"python, chart, graph, code, viz, dataviz"}),a.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),a.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),a.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),a.createElement("meta",{property:"og:description",content:n}),a.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),a.createElement(r.Script,{id:"adthrive",strategy:"post-hydrate",src:l()}))}},818:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(1883),r=n(7294),l=n(5128);const o=n(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function c(e){let{chartType:t,caption:n,link:c}=e;const s=o.includes(t);return r.createElement(r.Fragment,null,s?r.createElement("div",{className:"sectionLogoContainer"},r.createElement(a.Link,{to:c},r.createElement(l.Z,{chartType:t})),r.createElement("p",{className:"sectionLogoCaption"},n)):r.createElement(r.Fragment,null,r.createElement("div",{className:"sectionLogoContainer"},r.createElement(a.Link,{to:c},r.createElement(l.Z,{chartType:t}),r.createElement("div",{className:"sectionLogoOverlay"},r.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.createElement("p",{className:"sectionLogoCaption"},n)))}},429:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),r=n(5005),l=n(1883),o=n(8447),c=n(5584),s=n(682),i=n(5128);function m(e){let{title:t,description:n,chartType:i}=e;const m=o.c.filter((e=>e.id===i))[0];return a.createElement(s.Z,null,a.createElement("div",{className:"titleAndDescription"},a.createElement("div",{className:"titleRow"},a.createElement("h1",null,t),i&&a.createElement(p,{chartType:i})),a.createElement("hr",{className:"smallHr"}),"string"==typeof n?a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:n}}):a.createElement("div",{className:"description"},n),i&&a.createElement("div",{style:{marginTop:"10px"}},a.createElement(l.Link,{to:(0,c.y)(m.pythonURL)},a.createElement(r.Z,{size:"sm"},m.label+" section")),a.createElement("a",{href:m.dataToVizURL},a.createElement(r.Z,{size:"sm"},"About this chart")))))}const p=e=>{let{chartType:t}=e;const n=o.c.filter((e=>e.id===t))[0],r=(0,c.y)(n.pythonURL);return a.createElement("div",{style:{width:"80px",marginLeft:40}},a.createElement(l.Link,{to:r},a.createElement(i.Z,{chartType:n.logo})))}},4486:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p}});var a=n(7294),r=n(1433),l=n(682),o=n(429),c=n(8742),s=n(1190),i=n(3921),m=n(9389);const p=e=>{let{data:t}=e;return a.createElement(m.H,{title:t.jupyterNotebook.metadata.title,seoDescription:t.jupyterNotebook.metadata.seoDescription,keywords:t.jupyterNotebook.metadata.keywords})};t.default=e=>{let{data:t}=e;const{title:n,description:m,family:p,chartType:h,slug:d,seoDescription:u,keywords:y}=t.jupyterNotebook.metadata;return a.createElement(r.Z,{title:n,isTocEnabled:!0,chartType:h,seoDescription:u,keywords:y},a.createElement(o.Z,{title:n,description:"<p>"+m+"</p>",chartType:h}),a.createElement(l.Z,null,a.createElement("div",{className:"blog-post-content",dangerouslySetInnerHTML:{__html:t.jupyterNotebook.html}})),a.createElement(i.Z,null),a.createElement("div",{className:"greySection"},a.createElement(l.Z,null,a.createElement(c.Z,{chartFamily:p,hasGreyBackground:!0}))),a.createElement(i.Z,null),a.createElement(l.Z,null,a.createElement(s.Z,{pageSlug:d,isNotebook:!0})),a.createElement(i.Z,null))}},1555:function(e,t,n){var a=n(4184),r=n.n(a),l=n(7294),o=n(6792),c=n(5893);const s=l.forwardRef(((e,t)=>{const[{className:n,...a},{as:l="div",bsPrefix:s,spans:i}]=function({as:e,bsPrefix:t,className:n,...a}){t=(0,o.vE)(t,"col");const l=(0,o.pi)(),c=(0,o.zG)(),s=[],i=[];return l.forEach((e=>{const n=a[e];let r,l,o;delete a[e],"object"==typeof n&&null!=n?({span:r,offset:l,order:o}=n):r=n;const m=e!==c?`-${e}`:"";r&&s.push(!0===r?`${t}${m}`:`${t}${m}-${r}`),null!=o&&i.push(`order${m}-${o}`),null!=l&&i.push(`offset${m}-${l}`)})),[{...a,className:r()(n,...s,...i)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,c.jsx)(l,{...a,ref:t,className:r()(n,!i.length&&s)})}));s.displayName="Col",t.Z=s},4051:function(e,t,n){var a=n(4184),r=n.n(a),l=n(7294),o=n(6792),c=n(5893);const s=l.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},l)=>{const s=(0,o.vE)(e,"row"),i=(0,o.pi)(),m=(0,o.zG)(),p=`${s}-cols`,h=[];return i.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const r=e!==m?`-${e}`:"";null!=n&&h.push(`${p}${r}-${n}`)})),(0,c.jsx)(n,{ref:l,...a,className:r()(t,s,...h)})}));s.displayName="Row",t.Z=s}}]);
//# sourceMappingURL=component---src-pages-jupyter-notebook-slug-js-184bceeb950281804121.js.map