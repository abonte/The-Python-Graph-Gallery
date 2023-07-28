"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[3360],{8742:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),r=a(4051),n=a(1555),o=a(818),c=a(8447),i=a(5584);const s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const a=c.c.filter((e=>e.family===t)).filter((e=>"waffle"!==e.id)).map(((e,t)=>{const a=(0,i.y)(e.pythonURL);return l.createElement(n.Z,{key:t,xs:4,md:2,className:"g-3"},l.createElement(o.Z,{link:a,chartType:e.logo,caption:e.label}))}));return l.createElement("div",{style:{paddingBottom:15}},l.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),l.createElement(r.Z,null,a))}},7128:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),r=a(1883),n=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){let{imgName:t,caption:a}=e;if(o.includes(t))return l.createElement("p",null,"TODO");const c=(0,r.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return c?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(n.G,{image:c.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),r=a(7128),n=a(1555),o=a(1883);function c(e){let{imgName:t,caption:a,linkTo:c}=e;return l.createElement(n.Z,{xs:12,md:4},l.createElement(o.Link,{to:c},l.createElement(r.Z,{imgName:t,caption:a})))}},818:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(1883),r=a(7294),n=a(5128);const o=a(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function c(e){let{chartType:t,caption:a,link:c}=e;const i=o.includes(t);return r.createElement(r.Fragment,null,i?r.createElement("div",{className:"sectionLogoContainer"},r.createElement(l.Link,{to:c},r.createElement(n.Z,{chartType:t})),r.createElement("p",{className:"sectionLogoCaption"},a)):r.createElement(r.Fragment,null,r.createElement("div",{className:"sectionLogoContainer"},r.createElement(l.Link,{to:c},r.createElement(n.Z,{chartType:t}),r.createElement("div",{className:"sectionLogoOverlay"},r.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.createElement("p",{className:"sectionLogoCaption"},a)))}},429:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),r=a(5005),n=a(1883),o=a(8447),c=a(5584),i=a(682),s=a(5128);function m(e){let{title:t,description:a,chartType:s}=e;const m=o.c.filter((e=>e.id===s))[0];return l.createElement(i.Z,null,l.createElement("div",{className:"titleAndDescription"},l.createElement("div",{className:"titleRow"},l.createElement("h1",null,t),s&&l.createElement(u,{chartType:s})),l.createElement("hr",{className:"smallHr"}),"string"==typeof a?l.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):l.createElement("div",{className:"description"},a),s&&l.createElement("div",{style:{marginTop:"10px"}},l.createElement(n.Link,{to:(0,c.y)(m.pythonURL)},l.createElement(r.Z,{size:"sm"},m.label+" section")),l.createElement("a",{href:m.dataToVizURL},l.createElement(r.Z,{size:"sm"},"About this chart")))))}const u=e=>{let{chartType:t}=e;const a=o.c.filter((e=>e.id===t))[0],r=(0,c.y)(a.pythonURL);return l.createElement("div",{style:{width:"80px",marginLeft:40}},l.createElement(n.Link,{to:r},l.createElement(s.Z,{chartType:a.logo})))}},9645:function(e,t,a){a.r(t),a.d(t,{default:function(){return E}});var l=a(7294),r=a(429),n=a(1433),o=a(682),c=a(8728),i=a(4051),s=a(4596),m=a(8742),u=a(4125),p=a(3921),h=a(1883),d=a(7128),g=a(1555);const b="<p>A <a href='https://www.data-to-viz.com/graph/circularbarplot.html'>circular barplot</a> is pretty much the same as a <a href='https://www.python-graph-gallery.com/barplot'>barplot</a>, but using polar coordinates instead of cartesian coordinates. They are a bit tricky to build with <code>Python</code> and less accurate than usual barplot, but they come with an eye-catching effect that sometimes make them worth it.</p>";function E(){return l.createElement(n.Z,{title:"Circular Barplot",isTocEnabled:!0,seoDescription:"A collection of circular barplot examples made with Python, coming with explanation and reproducible code"},l.createElement(r.Z,{title:"Circular Barplot",description:b}),l.createElement(o.Z,null,l.createElement("h2",{id:"Circular barplot"},l.createElement(u.rS,null),"Circular barplot with ",l.createElement("code",null,"Matplotlib")),l.createElement("p",null,l.createElement("code",null,"Matplotlib")," allows to build circular barplots thanks to the ",l.createElement("code",null,"polar")," Layout option of the ",l.createElement("code",null,"subplot()")," function. Examples below should guide you from the most simple version to some more customization."),l.createElement("p",null,"It starts by explaining how the polar coordinates of ",l.createElement("code",null,"matplotlib")," works, show how to use it to draw bars and finally goes into the trickiness of adding labels."),l.createElement(i.Z,null,l.createElement(s.Z,{imgName:"circular-barplot-basic1",caption:"Explanation of the polar coordinates with Matplotlib.",linkTo:"/circular-barplot-basic"}),l.createElement(s.Z,{imgName:"circular-barplot-basic2",caption:"Most basic circular barplot with Python and Matplotlib.",linkTo:"/circular-barplot-basic"}),l.createElement(s.Z,{imgName:"circular-barplot-basic4",caption:"Reorder items.",linkTo:"/circular-barplot-basic"})),l.createElement("div",{style:{maxWidth:"800px",margin:"0 auto",padding:30}},l.createElement(h.Link,{to:"/circular-barplot-basic"},l.createElement(d.Z,{imgName:"circular-barplot-basic3",caption:"Circular barplot with labels"})))),l.createElement(p.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Grouped & circular"},l.createElement(u.rS,null),"Grouped Circular barplot"),l.createElement("p",null,"This section extends the previous one by adding a grouping level to the circular barplot. It allows to check for the values of several items split by groups, each item being sorted by value inside its group. It requires quite a bit of matplotlib code but the step-by-step tutorial highlighted below should help go through it."),l.createElement(i.Z,null,l.createElement(s.Z,{imgName:"circular-barplot-with-groups1",caption:"How to add a gap in a circular barplot",linkTo:"/circular-barplot-with-groups"}),l.createElement(s.Z,{imgName:"circular-barplot-with-groups2",caption:"Group the circular barplot and add gaps between each group.",linkTo:"/circular-barplot-with-groups"}),l.createElement(s.Z,{imgName:"circular-barplot-with-groups3",caption:"Reorder items inside each group.",linkTo:"/circular-barplot-with-groups"})),l.createElement("div",{style:{maxWidth:"800px",margin:"0 auto",padding:30}},l.createElement(h.Link,{to:"/circular-barplot-basic"},l.createElement(d.Z,{imgName:"circular-barplot-with-groups4big",caption:"Final grouped circular barplot with labels, grid"})))),l.createElement(p.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"From the web"},l.createElement(u.rS,null),"From the web"),l.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",l.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The ",l.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),l.createElement(i.Z,null,l.createElement(g.Z,{xs:12,md:6},l.createElement(h.Link,{to:"/web-circular-barplot-with-matplotlib"},l.createElement(d.Z,{imgName:"web-circular-barplot-with-matplotlib-square",caption:"A circular barchart with several features per group made with Python and Matplotlib."}))),l.createElement(g.Z,{xs:12,md:6},l.createElement(h.Link,{to:"/web-circular-lollipop-plot-with-matplotlib"},l.createElement(d.Z,{imgName:"web-circular-lollipop-plot-with-matplotlib-square",caption:"A circular lollipop plot with customized layout, great color palette and in circle legend."}))))),l.createElement(p.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(o.Z,null,l.createElement(m.Z,{chartFamily:"ranking"}))),l.createElement(p.Z,null),l.createElement(o.Z,null,l.createElement(c.Z,null)),l.createElement(p.Z,null))}},1555:function(e,t,a){var l=a(4184),r=a.n(l),n=a(7294),o=a(6792),c=a(5893);const i=n.forwardRef(((e,t)=>{const[{className:a,...l},{as:n="div",bsPrefix:i,spans:s}]=function({as:e,bsPrefix:t,className:a,...l}){t=(0,o.vE)(t,"col");const n=(0,o.pi)(),c=(0,o.zG)(),i=[],s=[];return n.forEach((e=>{const a=l[e];let r,n,o;delete l[e],"object"==typeof a&&null!=a?({span:r,offset:n,order:o}=a):r=a;const m=e!==c?`-${e}`:"";r&&i.push(!0===r?`${t}${m}`:`${t}${m}-${r}`),null!=o&&s.push(`order${m}-${o}`),null!=n&&s.push(`offset${m}-${n}`)})),[{...l,className:r()(a,...i,...s)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,c.jsx)(n,{...l,ref:t,className:r()(a,!s.length&&i)})}));i.displayName="Col",t.Z=i},4051:function(e,t,a){var l=a(4184),r=a.n(l),n=a(7294),o=a(6792),c=a(5893);const i=n.forwardRef((({bsPrefix:e,className:t,as:a="div",...l},n)=>{const i=(0,o.vE)(e,"row"),s=(0,o.pi)(),m=(0,o.zG)(),u=`${i}-cols`,p=[];return s.forEach((e=>{const t=l[e];let a;delete l[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const r=e!==m?`-${e}`:"";null!=a&&p.push(`${u}${r}-${a}`)})),(0,c.jsx)(a,{ref:n,...l,className:r()(t,i,...p)})}));i.displayName="Row",t.Z=i}}]);
//# sourceMappingURL=component---src-pages-circular-barplot-js-0a26e7cf94aeeb32963b.js.map