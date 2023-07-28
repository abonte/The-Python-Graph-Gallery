"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[6238],{8742:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(4051),l=a(1555),o=a(818),i=a(8447),c=a(5584);const m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function s(e){let{chartFamily:t}=e;const a=i.c.filter((e=>e.family===t)).filter((e=>"waffle"!==e.id)).map(((e,t)=>{const a=(0,c.y)(e.pythonURL);return n.createElement(l.Z,{key:t,xs:4,md:2,className:"g-3"},n.createElement(o.Z,{link:a,chartType:e.logo,caption:e.label}))}));return n.createElement("div",{style:{paddingBottom:15}},n.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==m?void 0:m[t]),n.createElement(r.Z,null,a))}},7128:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(1883),l=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(o.includes(t))return n.createElement("p",null,"TODO");const i=(0,r.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(l.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(7128),l=a(1555),o=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return n.createElement(l.Z,{xs:12,md:4},n.createElement(o.Link,{to:i},n.createElement(r.Z,{imgName:t,caption:a})))}},818:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(1883),r=a(7294),l=a(5128);const o=a(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function i(e){let{chartType:t,caption:a,link:i}=e;const c=o.includes(t);return r.createElement(r.Fragment,null,c?r.createElement("div",{className:"sectionLogoContainer"},r.createElement(n.Link,{to:i},r.createElement(l.Z,{chartType:t})),r.createElement("p",{className:"sectionLogoCaption"},a)):r.createElement(r.Fragment,null,r.createElement("div",{className:"sectionLogoContainer"},r.createElement(n.Link,{to:i},r.createElement(l.Z,{chartType:t}),r.createElement("div",{className:"sectionLogoOverlay"},r.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.createElement("p",{className:"sectionLogoCaption"},a)))}},429:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(5005),l=a(1883),o=a(8447),i=a(5584),c=a(682),m=a(5128);function s(e){let{title:t,description:a,chartType:m}=e;const s=o.c.filter((e=>e.id===m))[0];return n.createElement(c.Z,null,n.createElement("div",{className:"titleAndDescription"},n.createElement("div",{className:"titleRow"},n.createElement("h1",null,t),m&&n.createElement(d,{chartType:m})),n.createElement("hr",{className:"smallHr"}),"string"==typeof a?n.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):n.createElement("div",{className:"description"},a),m&&n.createElement("div",{style:{marginTop:"10px"}},n.createElement(l.Link,{to:(0,i.y)(s.pythonURL)},n.createElement(r.Z,{size:"sm"},s.label+" section")),n.createElement("a",{href:s.dataToVizURL},n.createElement(r.Z,{size:"sm"},"About this chart")))))}const d=e=>{let{chartType:t}=e;const a=o.c.filter((e=>e.id===t))[0],r=(0,i.y)(a.pythonURL);return n.createElement("div",{style:{width:"80px",marginLeft:40}},n.createElement(l.Link,{to:r},n.createElement(m.Z,{chartType:a.logo})))}},4018:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),r=a(429),l=a(1433),o=a(682),i=a(8728),c=a(4051),m=a(4596),s=a(8742),d=a(1883),u=a(4125),h=a(7128),p=a(5005),g=a(3921);const E="<p>A <a href='https://www.data-to-viz.com/graph/dendrogram.html'>dendrogram</a> is a network structure. It is constituted of a root node that gives birth to several nodes connected by edges or branches. It is used to represent a hierarchical structure or to display the result of a clustering algorithm.</p>";function f(){return n.createElement(l.Z,{title:"Dendrogram",isTocEnabled:!0,seoDescription:"A collection of dendrogram examples made with Python, coming with explanation and reproducible code"},n.createElement(r.Z,{title:"Dendrogram",description:E}),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement("h2",{id:"What is it?"},"ℹ ️ Two types of dendrogram"),n.createElement("p",null,"It is important to understand that dendrograms are used in 2 very different conditions that are based on 2 different data inputs:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("u",null,"Hierarchical dataset"),": think about a CEO managing team leads managing employees and so on."),n.createElement("li",null,n.createElement("u",null,"Clustering result"),": clustering divides a set of individuals in group according to their similarity. Its result can be visualized as a tree, often going together with a heatmap.")),n.createElement("a",{href:"https://www.data-to-viz.com/graph/dendrogram.html"},n.createElement(p.Z,{size:"sm"},"Read more about dendrogram")))),n.createElement(g.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Clustering & Matplotlib"},n.createElement(u.rS,null),"Dendrogram for clustering with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,"The ",n.createElement(d.Link,{to:"/400-basic-dendrogram"},"first chart")," of this section explains how to build a basic dendrogram with Python and",n.createElement("code",null,"matplotlib"),". It starts from a numeric matrix, compute the similarity between each pair of item thanks to the ",n.createElement("code",null,"linkage()")," function and plot the result with the ",n.createElement("code",null,"dendrogram()")," function."),n.createElement(c.Z,null,n.createElement(m.Z,{imgName:"400_Basic_Dendrogram",caption:"Most basic dendrogram and clustering with Python and Matplotlib",linkTo:"/401-customised-dendrogram"})),n.createElement("p",null,"The next post explains how to customize the output: change node and edge features like color and shapes, select a specific part of the tree and more."),n.createElement(c.Z,null,n.createElement(m.Z,{imgName:"401_custom_Dendrogram2",caption:"Most basic dendrogram and clustering with Python and Matplotlib",linkTo:"/400-basic-dendrogram"}),n.createElement(m.Z,{imgName:"401_custom_Dendrogram6",caption:"Horizontal dendrogram",linkTo:"/401-customised-dendrogram"}),n.createElement(m.Z,{imgName:"401_custom_Dendrogram5",caption:"Cut the dendrogram at a specific height",linkTo:"/401-customised-dendrogram"}))),n.createElement(g.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Clustering & Seaborn"},n.createElement(u._I,null),"Dendrogram, clustering and heatmaps with ",n.createElement("code",null,"Seaborn")),n.createElement("p",null,"It is very common to display the results of a clustering using a ",n.createElement(d.Link,{to:"/heatmap"},"heatmap"),"with dendrograms around it. Fortunately the ",n.createElement("code",null,"Seaborn")," library makes it a breeze."),n.createElement("p",null,"The examples below will guide you through the most usual needs. Note however that data normalization should be your main focus here, as it can massively impact the final visual result. (See ",n.createElement(d.Link,{to:"/404-dendrogram-with-heat-map"},"this post")," for that)."),n.createElement(d.Link,{to:"/heatmap"},n.createElement(p.Z,{size:"sm"},"Related: heatmap section")),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.createElement(d.Link,{to:"/405-dendrogram-with-heatmap-and-coloured-leaves"},n.createElement(h.Z,{imgName:"405_Dendro_and_heatmap_and_rowcolor",caption:"A seaborn heatmap with clusterization and dendrogram applied"}))),n.createElement(c.Z,null,n.createElement(m.Z,{imgName:"404_Dendro_and_heatmap3",caption:"Most basic heatmap with dendrogram with seaborn",linkTo:"/404-dendrogram-with-heat-map"}),n.createElement(m.Z,{imgName:"404_Dendro_and_heatmap9",caption:"Change color palette",linkTo:"/404-dendrogram-with-heat-map"}),n.createElement(m.Z,{imgName:"404_Dendro_and_heatmap11",caption:"Learn how to normalize data in the heatmap, avoiding that kind of result",linkTo:"/404-dendrogram-with-heat-map"}))),n.createElement(g.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Hierarchichal"},"Dendrogram for hierarchical datasets"),n.createElement("p",null,"Dendrogram can also be used to display a hierarchy. A hierarchy as a root node that gets divided in several children and so on."),n.createElement("p",null,"TODO")),n.createElement(g.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement(s.Z,{chartFamily:"partOfAWhole"}))),n.createElement(g.Z,null),n.createElement(o.Z,null,n.createElement(i.Z,null)),n.createElement(g.Z,null))}},1555:function(e,t,a){var n=a(4184),r=a.n(n),l=a(7294),o=a(6792),i=a(5893);const c=l.forwardRef(((e,t)=>{const[{className:a,...n},{as:l="div",bsPrefix:c,spans:m}]=function({as:e,bsPrefix:t,className:a,...n}){t=(0,o.vE)(t,"col");const l=(0,o.pi)(),i=(0,o.zG)(),c=[],m=[];return l.forEach((e=>{const a=n[e];let r,l,o;delete n[e],"object"==typeof a&&null!=a?({span:r,offset:l,order:o}=a):r=a;const s=e!==i?`-${e}`:"";r&&c.push(!0===r?`${t}${s}`:`${t}${s}-${r}`),null!=o&&m.push(`order${s}-${o}`),null!=l&&m.push(`offset${s}-${l}`)})),[{...n,className:r()(a,...c,...m)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,i.jsx)(l,{...n,ref:t,className:r()(a,!m.length&&c)})}));c.displayName="Col",t.Z=c},4051:function(e,t,a){var n=a(4184),r=a.n(n),l=a(7294),o=a(6792),i=a(5893);const c=l.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},l)=>{const c=(0,o.vE)(e,"row"),m=(0,o.pi)(),s=(0,o.zG)(),d=`${c}-cols`,u=[];return m.forEach((e=>{const t=n[e];let a;delete n[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const r=e!==s?`-${e}`:"";null!=a&&u.push(`${d}${r}-${a}`)})),(0,i.jsx)(a,{ref:l,...n,className:r()(t,c,...u)})}));c.displayName="Row",t.Z=c}}]);
//# sourceMappingURL=component---src-pages-dendrogram-js-7dfcf7a571e4d879cdc4.js.map