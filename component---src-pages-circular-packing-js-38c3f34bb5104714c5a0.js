"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[9188],{8742:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),n=a(4051),r=a(1555),c=a(818),i=a(8447),o=a(5584);const s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const a=i.c.filter((e=>e.family===t)).filter((e=>"waffle"!==e.id)).map(((e,t)=>{const a=(0,o.y)(e.pythonURL);return l.createElement(r.Z,{key:t,xs:4,md:2,className:"g-3"},l.createElement(c.Z,{link:a,chartType:e.logo,caption:e.label}))}));return l.createElement("div",{style:{paddingBottom:15}},l.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),l.createElement(n.Z,null,a))}},7128:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(1883),r=a(8032);const c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(c.includes(t))return l.createElement("p",null,"TODO");const i=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(r.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(7128),r=a(1555),c=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return l.createElement(r.Z,{xs:12,md:4},l.createElement(c.Link,{to:i},l.createElement(n.Z,{imgName:t,caption:a})))}},818:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(1883),n=a(7294),r=a(5128);const c=a(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function i(e){let{chartType:t,caption:a,link:i}=e;const o=c.includes(t);return n.createElement(n.Fragment,null,o?n.createElement("div",{className:"sectionLogoContainer"},n.createElement(l.Link,{to:i},n.createElement(r.Z,{chartType:t})),n.createElement("p",{className:"sectionLogoCaption"},a)):n.createElement(n.Fragment,null,n.createElement("div",{className:"sectionLogoContainer"},n.createElement(l.Link,{to:i},n.createElement(r.Z,{chartType:t}),n.createElement("div",{className:"sectionLogoOverlay"},n.createElement("div",{className:"sectionLogoOverlayText"},"+")))),n.createElement("p",{className:"sectionLogoCaption"},a)))}},429:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),n=a(5005),r=a(1883),c=a(8447),i=a(5584),o=a(682),s=a(5128);function m(e){let{title:t,description:a,chartType:s}=e;const m=c.c.filter((e=>e.id===s))[0];return l.createElement(o.Z,null,l.createElement("div",{className:"titleAndDescription"},l.createElement("div",{className:"titleRow"},l.createElement("h1",null,t),s&&l.createElement(u,{chartType:s})),l.createElement("hr",{className:"smallHr"}),"string"==typeof a?l.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):l.createElement("div",{className:"description"},a),s&&l.createElement("div",{style:{marginTop:"10px"}},l.createElement(r.Link,{to:(0,i.y)(m.pythonURL)},l.createElement(n.Z,{size:"sm"},m.label+" section")),l.createElement("a",{href:m.dataToVizURL},l.createElement(n.Z,{size:"sm"},"About this chart")))))}const u=e=>{let{chartType:t}=e;const a=c.c.filter((e=>e.id===t))[0],n=(0,i.y)(a.pythonURL);return l.createElement("div",{style:{width:"80px",marginLeft:40}},l.createElement(r.Link,{to:n},l.createElement(s.Z,{chartType:a.logo})))}},4780:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var l=a(7294),n=a(429),r=a(1433),c=a(682),i=a(8728),o=a(4051),s=a(4596),m=a(8742),u=a(1883),h=a(4125),p=a(7128),d=a(5005),E=a(3921);const f="<p>A <a href='https://www.data-to-viz.com/graph/treemap.html'>treemap</a> displays hierarchical data as a set of nested rectangles. Each group is represented by a rectangle, which area is proportional to its value. In <code>Python</code>, the <code>squarify</code> library allows to compute the rectangle positions and plot it.</p>";function g(){return l.createElement(r.Z,{title:"Circular Packing",isTocEnabled:!0,seoDescription:"A collection of circular packing examples made with Python, coming with explanation and reproducible code"},l.createElement(n.Z,{title:"Circular Packing",description:f}),l.createElement("div",{className:"greySection",id:"related"},l.createElement(c.Z,null,l.createElement("h2",{id:"Circlify"},"ℹ ️ A note on the ",l.createElement("code",null,"Circlify")," package"),l.createElement("p",null,"The ",l.createElement("code",null,"circlify")," package is a pure Python implementation of a circle packing layout algorithm. It has been developped by ",l.createElement("a",{href:"https://github.com/elmotec"},"Jerome Lecomte")," and lives on ",l.createElement("a",{href:"https://github.com/elmotec/circlify"},"github"),". 🙏🙏 "),l.createElement("p",null,"You can install it with ",l.createElement("code",null,"pip install circlify"),"."),l.createElement("a",{href:"https://github.com/elmotec/circlify"},l.createElement(d.Z,{size:"sm"},"Circlify documentation")))),l.createElement(E.Z,null),l.createElement(c.Z,null,l.createElement("h2",{id:"One level of hierarchy"},l.createElement(h.rS,null),"One level of hierarchy"),l.createElement("p",null,l.createElement("code",null,"Circlify")," can work without a hierarchical structure, i.e. with just a set of numeric varialbles that will be each displayed as a bubble. Note that the package just compute the position and size of each bubble. Once tha\"t's done, ",l.createElement("code",null,"matplotlib")," is used to make the chart itself with usual functions."),l.createElement(o.Z,null,l.createElement(s.Z,{imgName:"circular-packing-1-level-hierarchy1",caption:"Most basic circle packing",linkTo:"/circular-packing-1-level-hierarchy"}),l.createElement(s.Z,{imgName:"circular-packing-1-level-hierarchy2",caption:"Add colors and labels",linkTo:"/circular-packing-1-level-hierarchy"}),l.createElement(s.Z,{imgName:"circular-packing-1-level-hierarchy3",caption:"control space between bubbles",linkTo:"/circular-packing-1-level-hierarchy"}))),l.createElement(E.Z,null),l.createElement(c.Z,null,l.createElement("h2",{id:"Several levels"},l.createElement(h.rS,null),"Several levels of hierarchy"),l.createElement("p",null,l.createElement("code",null,"Circlify")," also works from a hierarchical structure. Bubbles representing the bottom of the hierarchy are encapsulated into higher hierarchy bubbles and so on. Note that the process is a bit more tedious here, but still doable thanks to ",l.createElement("code",null,"matplotlib"),"."),l.createElement("div",{style:{maxWidth:"800px",margin:"0 auto",padding:30}},l.createElement(u.Link,{to:"/circular-packing-several-levels-of-hierarchy"},l.createElement(p.Z,{imgName:"circular-packing-several-levels-of-hierarchy-large",caption:"Circular packing with several levels of hierarchy with Python and the circlize library"})))),l.createElement(E.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(c.Z,null,l.createElement(m.Z,{chartFamily:"partOfAWhole"}))),l.createElement(E.Z,null),l.createElement(c.Z,null,l.createElement(i.Z,null)),l.createElement(E.Z,null))}},1555:function(e,t,a){var l=a(4184),n=a.n(l),r=a(7294),c=a(6792),i=a(5893);const o=r.forwardRef(((e,t)=>{const[{className:a,...l},{as:r="div",bsPrefix:o,spans:s}]=function({as:e,bsPrefix:t,className:a,...l}){t=(0,c.vE)(t,"col");const r=(0,c.pi)(),i=(0,c.zG)(),o=[],s=[];return r.forEach((e=>{const a=l[e];let n,r,c;delete l[e],"object"==typeof a&&null!=a?({span:n,offset:r,order:c}=a):n=a;const m=e!==i?`-${e}`:"";n&&o.push(!0===n?`${t}${m}`:`${t}${m}-${n}`),null!=c&&s.push(`order${m}-${c}`),null!=r&&s.push(`offset${m}-${r}`)})),[{...l,className:n()(a,...o,...s)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,i.jsx)(r,{...l,ref:t,className:n()(a,!s.length&&o)})}));o.displayName="Col",t.Z=o},4051:function(e,t,a){var l=a(4184),n=a.n(l),r=a(7294),c=a(6792),i=a(5893);const o=r.forwardRef((({bsPrefix:e,className:t,as:a="div",...l},r)=>{const o=(0,c.vE)(e,"row"),s=(0,c.pi)(),m=(0,c.zG)(),u=`${o}-cols`,h=[];return s.forEach((e=>{const t=l[e];let a;delete l[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const n=e!==m?`-${e}`:"";null!=a&&h.push(`${u}${n}-${a}`)})),(0,i.jsx)(a,{ref:r,...l,className:n()(t,o,...h)})}));o.displayName="Row",t.Z=o}}]);
//# sourceMappingURL=component---src-pages-circular-packing-js-38c3f34bb5104714c5a0.js.map