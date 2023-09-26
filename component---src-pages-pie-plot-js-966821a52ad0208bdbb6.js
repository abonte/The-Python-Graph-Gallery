"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[223],{7128:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(1883),o=a(8032);const i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function r(e){let{imgName:t,caption:a}=e;if(i.includes(t))return l.createElement("p",null,"TODO");const r=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return r?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(o.G,{image:r.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(7128),o=a(1555),i=a(1883);function r(e){let{imgName:t,caption:a,linkTo:r}=e;return l.createElement(o.Z,{xs:12,md:4},l.createElement(i.Link,{to:r},l.createElement(n.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return n}});var l=a(7294);const n=e=>{let{title:t,seoDescription:a,keywords:n}=e;return l.createElement(l.Fragment,null,l.createElement("title",null,t),l.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),l.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),l.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),l.createElement("meta",{name:"author",content:"Yan Holtz"}),l.createElement("meta",{name:"keywords",content:n||"python, chart, graph, code, viz, dataviz"}),l.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),l.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),l.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement("meta",{property:"og:description",content:a}),l.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}))}},1532:function(e,t,a){a.r(t),a.d(t,{Head:function(){return v},default:function(){return Z}});var l=a(7294),n=a(429),o=a(2057),i=a(682),r=a(1190),c=a(4051),m=a(4596),p=a(8742),s=a(1883),h=a(4125),d=a(7128),u=a(1555),E=a(5005),b=a(2737),g=a(3921),y=a(9389);const f="<p>A <a href='https://www.data-to-viz.com/caveat/pie.html'>Pie Chart</a> is a circle divided into sectors that each represent a proportion of the whole. It is one of the most common viz type, but also probably the most <a href='https://www.data-to-viz.com/caveat/pie.html'>criticized</a>. In python, they are most of the time done thanks to the <code>pie()</code> function of the <code>Matplotlib</code> library.</p>",w="# library\nimport matplotlib.pyplot as plt\n\n# create data: an array of values\nsize_of_groups=[12,11,3,30]\n\n# Create a pieplot\nplt.pie(size_of_groups)\nplt.show()\n",v=()=>l.createElement(y.H,{title:"Pie plot",seoDescription:"A collection of Pie chart examples made with Python, coming with explanation and reproducible code"});function Z(){return l.createElement(o.Z,{isTocEnabled:!0},l.createElement(n.Z,{title:"Pie Plot",description:f}),l.createElement(i.Z,null,l.createElement("h2",{id:"Quick"},"⏱ Quick start"),l.createElement(c.Z,{className:"align-items-center"},l.createElement(u.Z,{md:6},l.createElement("p",null,l.createElement("code",null,"matplotlib")," allows to build a"," ",l.createElement(s.Link,{to:"/pie-plot"},"pie chart")," easily thanks to its"," ",l.createElement("code",null,"pie()")," function."),l.createElement("p",null,"The input data you must provide is an array of numbers, where each numbers will be mapped to one of the pie item.🔥")),l.createElement(u.Z,{md:6},l.createElement(s.Link,{to:"/pie-plot-matplotlib-basic"},l.createElement(d.Z,{imgName:"pie-plot-matplotlib-basic1",caption:"Most basic donut chart with Python and Matplotlib"})))),l.createElement(b.Z,null,w)),l.createElement(g.Z,null),l.createElement("div",{className:"greySection"},l.createElement(i.Z,null,l.createElement("h2",{id:"Warning"},"⚠️ Mind the pie chart"),l.createElement("p",null,"Pie chart is probably the most criticized chart type. Humans are pretty bad at reading angles, making it hard to rank the groups accurately. Most of the time, it is better to display the information as a ",l.createElement(s.Link,{to:"/barplot"},"barchart"),", a"," ",l.createElement(s.Link,{to:"/treemap"},"treemap")," or a"," ",l.createElement(s.Link,{to:"/lollipop-plot"},"lollipop")," plot."),l.createElement("p",null,"Have a look to the 3 pie charts below, can you spot the pattern hidden in it?"),l.createElement("div",{style:{maxWidth:"600px",margin:"0 auto"}},l.createElement("a",{href:"https://www.data-to-viz.com/caveat/pie.html"},l.createElement(d.Z,{imgName:"pieChartIssue",caption:"Can you spot the pattern hidden behind those 3 pie charts? Click to see the same info visualized as barplots: much more insightful isn't it?"}))),l.createElement("a",{href:"https://www.data-to-viz.com/caveat/pie.html"},l.createElement(E.Z,{size:"sm"},"See it as a barplot")),l.createElement("p",null,"Last but not least, please avoid the ",l.createElement("code",null,"explode")," and"," ",l.createElement("code",null,"shadow")," options of the pie() function, they are killing all the most basic dataviz principles."))),l.createElement(g.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Matplotlib"},l.createElement(h.rS,null),"Pie chart with ",l.createElement("code",null,"Matplotlib")),l.createElement("p",null,"The examples below should guide you through the ",l.createElement("code",null,"pie()")," ","function usage. It starts basics and then show how to add labels, customize colors and more."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"pie-plot-matplotlib-basic-add-labels",caption:"Add and customize the labels",linkTo:"/pie-plot-matplotlib-basic"}),l.createElement(m.Z,{imgName:"pie-plot-matplotlib-basic-add-padding",caption:"Customize the pie section colors",linkTo:"/pie-plot-matplotlib-basic"}),l.createElement(m.Z,{imgName:"pie-plot-matplotlib-basic-colors",caption:"Add blank space between each pie section.",linkTo:"/pie-plot-matplotlib-basic"}))),l.createElement(g.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(i.Z,null,l.createElement(p.Z,{chartFamily:"partOfAWhole"}))),l.createElement(g.Z,null),l.createElement(i.Z,null,l.createElement(r.Z,null)),l.createElement(g.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-pie-plot-js-966821a52ad0208bdbb6.js.map