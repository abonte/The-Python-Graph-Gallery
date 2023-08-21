"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[7219],{8742:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(4051),o=a(1555),l=a(818),c=a(8447),i=a(5584);const s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const a=c.c.filter((e=>e.family===t)).filter((e=>"waffle"!==e.id)).map(((e,t)=>{const a=(0,i.y)(e.pythonURL);return n.createElement(o.Z,{key:t,xs:4,md:2,className:"g-3"},n.createElement(l.Z,{link:a,chartType:e.logo,caption:e.label}))}));return n.createElement("div",{style:{paddingBottom:15}},n.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),n.createElement(r.Z,null,a))}},7128:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(4160),o=a(8032);const l=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){let{imgName:t,caption:a}=e;if(l.includes(t))return n.createElement("p",null,"TODO");const c=(0,r.K2)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return c?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(o.G,{image:c.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(7128),o=a(1555),l=a(4160);function c(e){let{imgName:t,caption:a,linkTo:c}=e;return n.createElement(o.Z,{xs:12,md:4},n.createElement(l.rU,{to:c},n.createElement(r.Z,{imgName:t,caption:a})))}},818:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(4160),r=a(7294),o=a(5128);const l=a(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function c(e){let{chartType:t,caption:a,link:c}=e;const i=l.includes(t);return r.createElement(r.Fragment,null,i?r.createElement("div",{className:"sectionLogoContainer"},r.createElement(n.rU,{to:c},r.createElement(o.Z,{chartType:t})),r.createElement("p",{className:"sectionLogoCaption"},a)):r.createElement(r.Fragment,null,r.createElement("div",{className:"sectionLogoContainer"},r.createElement(n.rU,{to:c},r.createElement(o.Z,{chartType:t}),r.createElement("div",{className:"sectionLogoOverlay"},r.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.createElement("p",{className:"sectionLogoCaption"},a)))}},429:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(5005),o=a(4160),l=a(8447),c=a(5584),i=a(682),s=a(5128);function m(e){let{title:t,description:a,chartType:s}=e;const m=l.c.filter((e=>e.id===s))[0];return n.createElement(i.Z,null,n.createElement("div",{className:"titleAndDescription"},n.createElement("div",{className:"titleRow"},n.createElement("h1",null,t),s&&n.createElement(d,{chartType:s})),n.createElement("hr",{className:"smallHr"}),"string"==typeof a?n.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):n.createElement("div",{className:"description"},a),s&&n.createElement("div",{style:{marginTop:"10px"}},n.createElement(o.rU,{to:(0,c.y)(m.pythonURL)},n.createElement(r.Z,{size:"sm"},m.label+" section")),n.createElement("a",{href:m.dataToVizURL},n.createElement(r.Z,{size:"sm"},"About this chart")))))}const d=e=>{let{chartType:t}=e;const a=l.c.filter((e=>e.id===t))[0],r=(0,c.y)(a.pythonURL);return n.createElement("div",{style:{width:"80px",marginLeft:40}},n.createElement(o.rU,{to:r},n.createElement(s.Z,{chartType:a.logo})))}},7850:function(e,t,a){a.r(t),a.d(t,{default:function(){return g}});var n=a(7294),r=a(429),o=a(1433),l=a(682),c=a(8728),i=a(4051),s=a(4596),m=a(8742),d=a(4160),h=a(3921),u=a(5005);const p="<p>A <a href='https://www.data-to-viz.com/graph/network.html'>Network diagram</a> (or chart, or graph) show interconnections between a set of entities. Each entity is represented by a node (or vertices). Connection between nodes are represented through links (or edges). This section mainly focuses on <code>NetworkX</code>, probably the best library for this kind of chart with <code>python</code>.";function g(){return n.createElement(o.Z,{title:"Network chart",isTocEnabled:!0,seoDescription:"A collection of network chart examples made with Python, coming with explanation and reproducible code"},n.createElement(r.Z,{title:"Network chart",description:p}),n.createElement(l.Z,null,n.createElement("h2",{id:"NetworkX"},"Network diagram with the ",n.createElement("code",null,"NetworkX")," library"),n.createElement("p",null,n.createElement("a",{href:"https://networkx.org"},"NetworkX")," is a Python package for the creation, manipulation, and study of the structure, dynamics, and functions of complex networks.."),n.createElement("p",null,"The examples below will guide you through a migration dataset already discussed in ",n.createElement("a",{href:"https://www.data-to-viz.com/graph/chord.html"},"data-to-viz.com"),". It starts by describing the input dataset and the basic usage of the ",n.createElement("code",null,"Chord()")," function."),n.createElement("a",{href:"https://networkx.org"},n.createElement(u.Z,{size:"sm"},"Official doc")),n.createElement("br",null),n.createElement("br",null),n.createElement(i.Z,null,n.createElement(s.Z,{imgName:"320_Network_start_simple",caption:"Most basic network chart with Python and NetworkX",linkTo:"/320-basic-network-from-pandas-data-frame"}),n.createElement(s.Z,{imgName:"321_Network_custom_look4",caption:"Custom network appearance: color, shape, size, links",linkTo:"/321-custom-networkx-graph-appearance"}),n.createElement(s.Z,{imgName:"322_Network_layout4",caption:"Control the layout used for the node location",linkTo:"/322-network-layout-possibilities"}),n.createElement(s.Z,{imgName:"323_Network_direction1",caption:"Manage directed and undirected networks by adding arrows",linkTo:"/323-directed-or-undirected-network"}),n.createElement(s.Z,{imgName:"326_Network_background_color",caption:"Control the background color of a network chart",linkTo:"/326-background-colour-of-network-chart"}),n.createElement(s.Z,{imgName:"500-network-chart-with-edge-bundling",caption:"Bundles network edges together to reduce the figure visual clutter",linkTo:"/500-network-chart-with-edge-bundling"})),n.createElement("br",null),n.createElement("p",null,"A common need when dealing with network charts is to map a numeric or categorical variable to the nodes or edges appearance. This is totally doable and adds some insight to the figure."),n.createElement(i.Z,null,n.createElement(s.Z,{imgName:"324_Network_mapcolor1",caption:"Map a continuous or categoric variable to nodes",linkTo:"/324-map-a-color-to-network-nodes"}),n.createElement(s.Z,{imgName:"325_Network_mapcolorttoedge1",caption:"Map a color to edges",linkTo:"/325-map-colour-to-the-edges-of-a-network"}))),n.createElement(h.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Similarity matrix"},"Network chart from similarity matrix"),n.createElement("p",null,"Another commin task is to build a network chart from a correlation matrix. Let's say you have several numeric variables describing some items in a dataset. You can compute a similarity matrix and display it as a network chart. This process is described in the",n.createElement(d.rU,{to:"/327-network-from-correlation-matrix"},"post #327")," below."),n.createElement(i.Z,null,n.createElement(s.Z,{imgName:"327_Network_from_correlation",caption:"Network chart from correlation matrix with Python and NetworkX",linkTo:"/327-network-from-correlation-matrix"}))),n.createElement(h.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Graph-tool"},"Network diagram with ",n.createElement("code",null,"graph-tool")),n.createElement("p",null,"The ",n.createElement("a",{href:"https://graph-tool.skewed.de"},"graph tool")," library is a python library implemented in C++. It makes it highly efficient to draw networks containing many nodes. Graphics to come."),n.createElement("a",{href:"https://graph-tool.skewed.de"},n.createElement(u.Z,{size:"sm"},"Official doc"))),n.createElement(h.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(l.Z,null,n.createElement(m.Z,{chartFamily:"flow"}))),n.createElement(h.Z,null),n.createElement(l.Z,null,n.createElement(c.Z,null)),n.createElement(h.Z,null))}},1555:function(e,t,a){var n=a(4184),r=a.n(n),o=a(7294),l=a(6792),c=a(5893);const i=o.forwardRef(((e,t)=>{const[{className:a,...n},{as:o="div",bsPrefix:i,spans:s}]=function({as:e,bsPrefix:t,className:a,...n}){t=(0,l.vE)(t,"col");const o=(0,l.pi)(),c=(0,l.zG)(),i=[],s=[];return o.forEach((e=>{const a=n[e];let r,o,l;delete n[e],"object"==typeof a&&null!=a?({span:r,offset:o,order:l}=a):r=a;const m=e!==c?`-${e}`:"";r&&i.push(!0===r?`${t}${m}`:`${t}${m}-${r}`),null!=l&&s.push(`order${m}-${l}`),null!=o&&s.push(`offset${m}-${o}`)})),[{...n,className:r()(a,...i,...s)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,c.jsx)(o,{...n,ref:t,className:r()(a,!s.length&&i)})}));i.displayName="Col",t.Z=i},4051:function(e,t,a){var n=a(4184),r=a.n(n),o=a(7294),l=a(6792),c=a(5893);const i=o.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},o)=>{const i=(0,l.vE)(e,"row"),s=(0,l.pi)(),m=(0,l.zG)(),d=`${i}-cols`,h=[];return s.forEach((e=>{const t=n[e];let a;delete n[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const r=e!==m?`-${e}`:"";null!=a&&h.push(`${d}${r}-${a}`)})),(0,c.jsx)(a,{ref:o,...n,className:r()(t,i,...h)})}));i.displayName="Row",t.Z=i}}]);
//# sourceMappingURL=component---src-pages-network-chart-js-5cf4457c25d11bad8f88.js.map