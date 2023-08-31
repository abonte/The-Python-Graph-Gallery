"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[4198],{7128:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(1883),r=a(8032);const i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:a}=e;if(i.includes(t))return n.createElement("p",null,"TODO");const o=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:o.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(7128),r=a(1555),i=a(1883);function o(e){let{imgName:t,caption:a,linkTo:o}=e;return n.createElement(r.Z,{xs:12,md:4},n.createElement(i.Link,{to:o},n.createElement(l.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return i}});var n=a(7294),l=a(1883);function r(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const i=e=>{let{title:t,seoDescription:a,keywords:i}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),n.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:i||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement(l.Script,{id:"adthrive",strategy:"post-hydrate",src:r()}))}},4590:function(e,t,a){a.r(t),a.d(t,{Head:function(){return y},default:function(){return v}});var n=a(7294),l=a(429),r=a(1433),i=a(682),o=a(1190),c=a(4051),m=a(4596),s=a(8742),h=a(1883),p=a(4125),u=a(1555),d=a(2737),E=a(7128),g=a(3921),b=a(9389);const w="<p>An <a href='https://www.data-to-viz.com/graph/area.html'>area chart</a> is really similar to a <a href='http://python-graph-gallery.com/line-chart/'>line chart</a>, except that the area between the x axis and the line is filled in with color or shading. It represents the evolution of a numeric variable. This section starts by considering <code>matplotlib</code> and <code>seaborn</code> as tools to build area charts. It then shows a few other options for timeseries.</p>",f="# library\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Create data\nx=range(1,6)\ny=[1,4,6,8,4]\n\n# Area plot\nplt.fill_between(x, y)\nplot.show()\n",y=()=>n.createElement(b.H,{title:"Area chart",seoDescription:"A collection of area chart examples made with Python, coming with explanation and reproducible code"});function v(){return n.createElement(r.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Area Chart",description:w}),n.createElement(i.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(c.Z,{className:"align-items-center"},n.createElement(u.Z,{md:6},n.createElement("p",null,"There are 2 main ways to build an area chart with Matplotlib. In both case it requires 2 numeric vectors of values as input."),n.createElement("ul",null,n.createElement("li",null,"The ",n.createElement("code",null,"fill_between()")," function"),n.createElement("li",null,"The ",n.createElement("code",null,"stackplot()")," function that is more useful for"," ",n.createElement(h.Link,{to:"/stacked-area-plot"},"stacked area")," charts"))),n.createElement(u.Z,{md:6},n.createElement(h.Link,{to:"/240-basic-area-chart"},n.createElement(E.Z,{imgName:"240_basic_area_chart",caption:"The most basic area chart one can make with python and matplotlib"})))),n.createElement(d.Z,null,f)),n.createElement(g.Z,null),n.createElement(i.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(p.rS,null),"Area chart with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,n.createElement("code",null,"Matplotlib")," is a great fit to build an area chart thanks to its ",n.createElement("code",null,"fill_between()")," function. Here are a few examples explaining its basics and how to apply some common customization."),n.createElement(c.Z,null,n.createElement(m.Z,{imgName:"240_basic_area_chart",caption:"The most basic area chart one can make with python and matplotlib",linkTo:"/240-basic-area-chart"}),n.createElement(m.Z,{imgName:"241_custom_area_chart1",caption:"Control chart color (Matplotlib)",linkTo:"/241-improve-area-chart"}),n.createElement(m.Z,{imgName:"241_custom_area_chart2",caption:"Control line color",linkTo:"/241-improve-area-chart"}),n.createElement(m.Z,{imgName:"area-fill-between-two-lines-in-matplotlib",caption:"Fill the gap between 2 line charts",linkTo:"/area-fill-between-two-lines-in-matplotlib"})),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.createElement(h.Link,{to:"/243-area-chart-with-white-grid"},n.createElement(E.Z,{imgName:"243_another_area_chart",caption:"Area chart with custom grid"})))),n.createElement(g.Z,null),n.createElement(i.Z,null,n.createElement("h2",{id:"Seaborn"},n.createElement(p._I,null),"Area chart with ",n.createElement("code",null,"Seaborn")),n.createElement("p",null,n.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",n.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.createElement(h.Link,{to:"/242-area-chart-and-faceting"},n.createElement(E.Z,{imgName:"242_area_chart_and_faceting",caption:"Area chart with small multiple, seaborn"})))),n.createElement(g.Z,null),n.createElement(i.Z,null,n.createElement("h2",{id:"Best"},n.createElement(p.rS,null),"Best area chart examples"),n.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",n.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",n.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",n.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),n.createElement(c.Z,null,n.createElement(u.Z,{xs:12,md:6},n.createElement(h.Link,{to:"/web-time-series-and-facetting-with-matplotlib"},n.createElement(E.Z,{imgName:"web-time-series-and-facetting-with-matplotlib-square",caption:"Display 2 line charts and fill the area between both. Also uses faceting to split by groups."}))),n.createElement(u.Z,{xs:12,md:6},n.createElement(h.Link,{to:"/web-stacked-line-chart-with-labels"},n.createElement(E.Z,{imgName:"web-stacked-line-chart-with-labels-square",caption:"A clean stacked area chart with smoothing, inline labels, caption, color palette and more"}))),n.createElement(u.Z,{xs:12,md:6},n.createElement(h.Link,{to:"/524-area-chart-over-flexible-baseline"},n.createElement(E.Z,{imgName:"524-area-over-flexible-baseline_square",caption:"Plotly line chart with many customization"}))))),n.createElement(g.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(i.Z,null,n.createElement(s.Z,{chartFamily:"evolution"}))),n.createElement(g.Z,null),n.createElement(i.Z,null,n.createElement(o.Z,null)),n.createElement(g.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-area-plot-js-eb8c6bfd1979ddce0031.js.map