"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[5868],{8742:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),l=n(4051),r=n(1555),c=n(818),o=n(8447),i=n(5584);const s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const n=o.c.filter((e=>e.family===t)).map(((e,t)=>{const n=(0,i.y)(e.pythonURL);return a.createElement(r.Z,{key:t,xs:4,md:2},a.createElement(c.Z,{link:n,chartType:e.logo,caption:e.label}))}));return a.createElement("div",null,a.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),a.createElement(l.Z,null,n))}},818:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(1883),l=n(7294),r=n(5128);const c=n(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function o(e){let{chartType:t,caption:n,link:o}=e;const i=c.includes(t);return l.createElement(l.Fragment,null,i?l.createElement("div",{className:"sectionLogoContainer"},l.createElement(a.Link,{to:o},l.createElement(r.Z,{chartType:t})),l.createElement("p",{className:"distributionSection sectionLogoCaption"},n)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(a.Link,{to:o},l.createElement(r.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"distributionSection sectionLogoCaption"},n)))}},429:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(4723),r=n(5005),c=n(1883),o=n(8447),i=n(5584);function s(e){let{title:t,description:n,chartType:s}=e;const m=o.c.filter((e=>e.id===s))[0];return a.createElement(a.Fragment,null,a.createElement("div",{className:"titleAndDescription"},a.createElement("h1",{className:"mainTitle"},t),a.createElement("hr",{className:"smallHr"}),a.createElement(l.Z,null),a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:n}}),s&&a.createElement("div",{style:{marginTop:"10px"}},a.createElement(c.Link,{to:(0,i.y)(m.pythonURL)},a.createElement(r.Z,{size:"sm"},m.label+" section")),a.createElement("a",{href:m.dataToVizURL},a.createElement(r.Z,{size:"sm"},"About this chart")))))}},5745:function(e,t,n){n.r(t),n.d(t,{default:function(){return u}});var a=n(7294),l=n(429),r=n(146),c=n(682),o=n(8728),i=n(8742),s=n(3921);const m="<p>This page has been moved to the <a href='https://www.python-graph-gallery.com/barplot'>barplot section</a> of the gallery. Have a look!";function u(){return a.createElement(r.Z,{title:"Stacked",isTocEnabled:!0,seoDescription:"A collection of stacked barplot examples made with Python, coming with explanation and reproducible code"},a.createElement(l.Z,{title:"Stacked Barplot",description:m}),a.createElement(s.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(c.Z,null,a.createElement(i.Z,{chartFamily:"ranking"}))),a.createElement(s.Z,null),a.createElement(c.Z,null,a.createElement(o.Z,null)),a.createElement(s.Z,null))}},1555:function(e,t,n){var a=n(4184),l=n.n(a),r=n(7294),c=n(6792),o=n(5893);const i=r.forwardRef(((e,t)=>{const[{className:n,...a},{as:r="div",bsPrefix:i,spans:s}]=function({as:e,bsPrefix:t,className:n,...a}){t=(0,c.vE)(t,"col");const r=(0,c.pi)(),o=(0,c.zG)(),i=[],s=[];return r.forEach((e=>{const n=a[e];let l,r,c;delete a[e],"object"==typeof n&&null!=n?({span:l,offset:r,order:c}=n):l=n;const m=e!==o?`-${e}`:"";l&&i.push(!0===l?`${t}${m}`:`${t}${m}-${l}`),null!=c&&s.push(`order${m}-${c}`),null!=r&&s.push(`offset${m}-${r}`)})),[{...a,className:l()(n,...i,...s)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,o.jsx)(r,{...a,ref:t,className:l()(n,!s.length&&i)})}));i.displayName="Col",t.Z=i},4051:function(e,t,n){var a=n(4184),l=n.n(a),r=n(7294),c=n(6792),o=n(5893);const i=r.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},r)=>{const i=(0,c.vE)(e,"row"),s=(0,c.pi)(),m=(0,c.zG)(),u=`${i}-cols`,p=[];return s.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const l=e!==m?`-${e}`:"";null!=n&&p.push(`${u}${l}-${n}`)})),(0,o.jsx)(n,{ref:r,...a,className:l()(t,i,...p)})}));i.displayName="Row",t.Z=i}}]);
//# sourceMappingURL=component---src-pages-stacked-barplot-js-e18648efffeefe6dd08f.js.map