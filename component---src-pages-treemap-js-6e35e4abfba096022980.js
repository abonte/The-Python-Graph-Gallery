"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[6627],{7128:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(1883),r=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(o.includes(t))return n.createElement("p",null,"TODO");const i=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(7128),r=a(1555),o=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return n.createElement(r.Z,{xs:12,md:4},n.createElement(o.Link,{to:i},n.createElement(l.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return o}});var n=a(7294),l=a(1883);function r(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const o=e=>{let{title:t,seoDescription:a,keywords:o}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),n.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:o||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement(l.Script,{id:"adthrive",strategy:"post-hydrate",src:r()}))}},9042:function(e,t,a){a.r(t),a.d(t,{Head:function(){return v},default:function(){return Z}});var n=a(7294),l=a(429),r=a(1433),o=a(682),i=a(1190),c=a(4051),m=a(4596),s=a(8742),p=a(1883),h=a(4125),u=a(7128),d=a(1555),f=a(5005),y=a(2737),E=a(3921),g=a(9389);const b="<p>A <a href='https://www.data-to-viz.com/graph/treemap.html'>treemap</a> displays hierarchical data as a set of nested rectangles. Each group is represented by a rectangle, which area is proportional to its value. In <code>Python</code>, the <code>squarify</code> library allows to compute the rectangle positions and plot it.</p>",w="# libraries\nimport matplotlib.pyplot as plt\nimport squarify    # pip install squarify (algorithm for treemap)\nimport pandas as pd\n\n# Create a data frame with fake data\ndf = pd.DataFrame({'nb_people':[8,3,4,2], 'group':[\"group A\", \"group B\", \"group C\", \"group D\"] })\n\n# plot it\nsquarify.plot(sizes=df['nb_people'], label=df['group'], alpha=.8 )\nplt.axis('off')\nplt.show()\n",v=()=>n.createElement(g.H,{title:"Treemap",seoDescription:"A collection of treemap examples made with Python, coming with explanation and reproducible code"});function Z(){return n.createElement(r.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Treemap",description:b}),n.createElement(o.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(c.Z,{className:"align-items-center"},n.createElement(d.Z,{md:6},n.createElement("p",null,"A ",n.createElement("code",null,"treemap")," displays each element of a dataset as a rectangle. It allows to see what proportion each element has compared to the whole."),n.createElement("p",null," ","This is doable with ",n.createElement("code",null,"python")," and"," ",n.createElement("code",null,"Matplotlib")," thanks to the ",n.createElement("code",null,"squarify")," ","library that can be used as follow:🔥")),n.createElement(d.Z,{md:6},n.createElement(p.Link,{to:"/200-basic-treemap-with-python"},n.createElement(u.Z,{imgName:"200_Basic_Treemap_with_squarify",caption:"Most basic Treemap with Python, Matplotlib and Squarify"})))),n.createElement(y.Z,null,w)),n.createElement(E.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement("h2",{id:"Squarify"},"ℹ ️ A note on the ",n.createElement("code",null,"Squarify")," package"),n.createElement("p",null,"The squarify library is a pure Python implementation of the squarify treemap layout algorithm. It is a project developped by"," ",n.createElement("a",{href:"https://github.com/laserson"},"Uri Laserson")," that has its documentation on"," ",n.createElement("a",{href:"https://github.com/laserson/squarify"},"github"),"."),n.createElement("a",{href:"https://github.com/laserson/squarify"},n.createElement(f.Z,{size:"sm"},"Squarify documentation")))),n.createElement(E.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(h.rS,null),"Treemap with ",n.createElement("code",null,"Matplotlib")," and ",n.createElement("code",null,"Squarify")),n.createElement("p",null,n.createElement("code",null,"Matplotlib")," is probably the most famous and flexible python library for data visualization. It is appropriate to build any kind of chart, including the lollipop plot thanks to its"," ",n.createElement("code",null,"stem()")," function."),n.createElement(c.Z,null,n.createElement(m.Z,{imgName:"201_Custom_Treemap1",caption:"How to control the color of your treemap",linkTo:"/201-control-the-color-of-treemap"}),n.createElement(m.Z,{imgName:"202_Treemap_map_color_to_size",caption:"How to make the rectangle colors relative to their values.",linkTo:"/202-treemap-with-colors-mapped-on-values"}))),n.createElement(E.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement(s.Z,{chartFamily:"partOfAWhole"}))),n.createElement(E.Z,null),n.createElement(o.Z,null,n.createElement(i.Z,null)),n.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-treemap-js-6e35e4abfba096022980.js.map