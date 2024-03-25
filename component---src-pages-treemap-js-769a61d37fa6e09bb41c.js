"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[6627],{7128:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(1883),r=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){let{imgName:t,caption:a}=e;if(o.includes(t))return n.createElement("p",null,"TODO");const c=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return c?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:c.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(7128),r=a(1555),o=a(1883);function c(e){let{imgName:t,caption:a,linkTo:c}=e;return n.createElement(r.Z,{xs:12,md:4},n.createElement(o.Link,{to:c},n.createElement(l.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return l}});var n=a(7294);const l=e=>{let{title:t,seoDescription:a,keywords:l}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("html",{lang:"en"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:l||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:site",content:"@R_Graph_Gallery"}))}},9042:function(e,t,a){a.r(t),a.d(t,{Head:function(){return _},default:function(){return Z}});var n=a(7294),l=a(429),r=a(2057),o=a(682),c=a(1190),i=a(4051),m=a(4596),p=a(8742),s=a(1883),u=a(944),h=a(7128),d=a(1555),E=a(5005),y=a(2737),g=a(3921),f=a(9389);const b="<p>A <a href='https://www.data-to-viz.com/graph/treemap.html'>treemap</a> displays hierarchical data as a set of nested rectangles. Each group is represented by a rectangle, which area is proportional to its value. In <code>Python</code>, the <code>squarify</code> library allows to compute the rectangle positions and plot it.</p>",w="# libraries\nimport matplotlib.pyplot as plt\nimport squarify    # pip install squarify (algorithm for treemap)\nimport pandas as pd\n\n# Create a data frame with fake data\ndf = pd.DataFrame({'nb_people':[8,3,4,2], 'group':[\"group A\", \"group B\", \"group C\", \"group D\"] })\n\n# plot it\nsquarify.plot(sizes=df['nb_people'], label=df['group'], alpha=.8 )\nplt.axis('off')\nplt.show()\n",_=()=>n.createElement(f.H,{title:"Treemap",seoDescription:"A collection of treemap examples made with Python, coming with explanation and reproducible code"});function Z(){return n.createElement(r.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Treemap",description:b}),n.createElement(o.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(i.Z,{className:"align-items-center"},n.createElement(d.Z,{md:6},n.createElement("p",null,"A ",n.createElement("code",null,"treemap")," displays each element of a dataset as a rectangle. It allows to see what proportion each element has compared to the whole."),n.createElement("p",null," ","This is doable with ",n.createElement("code",null,"python")," and"," ",n.createElement("code",null,"Matplotlib")," thanks to the ",n.createElement("code",null,"squarify")," ","library that can be used as follow:🔥")),n.createElement(d.Z,{md:6},n.createElement(s.Link,{to:"/200-basic-treemap-with-python"},n.createElement(h.Z,{imgName:"200_Basic_Treemap_with_squarify",caption:"Most basic Treemap with Python, Matplotlib and Squarify"})))),n.createElement(y.Z,null,w)),n.createElement(g.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement("h2",{id:"Squarify"},"ℹ ️ A note on the ",n.createElement("code",null,"Squarify")," package"),n.createElement("p",null,"The squarify library is a pure Python implementation of the squarify treemap layout algorithm. It is a project developped by"," ",n.createElement("a",{href:"https://github.com/laserson"},"Uri Laserson")," that has its documentation on"," ",n.createElement("a",{href:"https://github.com/laserson/squarify"},"github"),"."),n.createElement("a",{href:"https://github.com/laserson/squarify"},n.createElement(E.Z,{size:"sm"},"Squarify documentation")))),n.createElement(g.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(u.rS,null),"Treemap with ",n.createElement("code",null,"Matplotlib")," and ",n.createElement("code",null,"Squarify")),n.createElement("p",null,n.createElement("code",null,"Matplotlib")," is probably the most famous and flexible python library for data visualization. It is appropriate to build any kind of chart, including the lollipop plot thanks to its"," ",n.createElement("code",null,"stem()")," function."),n.createElement(i.Z,null,n.createElement(m.Z,{imgName:"201_Custom_Treemap1",caption:"How to control the color of your treemap",linkTo:"/201-control-the-color-of-treemap"}),n.createElement(m.Z,{imgName:"202_Treemap_map_color_to_size",caption:"How to make the rectangle colors relative to their values.",linkTo:"/202-treemap-with-colors-mapped-on-values"}))),n.createElement(g.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement(p.Z,{chartFamily:"partOfAWhole"}))),n.createElement(g.Z,null),n.createElement(o.Z,null,n.createElement(c.Z,null)),n.createElement(g.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-treemap-js-769a61d37fa6e09bb41c.js.map