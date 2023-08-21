"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[223],{7128:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(4160),i=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function r(e){let{imgName:t,caption:a}=e;if(o.includes(t))return l.createElement("p",null,"TODO");const r=(0,n.K2)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return r?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(i.G,{image:r.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(7128),i=a(1555),o=a(4160);function r(e){let{imgName:t,caption:a,linkTo:r}=e;return l.createElement(i.Z,{xs:12,md:4},l.createElement(o.rU,{to:r},l.createElement(n.Z,{imgName:t,caption:a})))}},1532:function(e,t,a){a.r(t),a.d(t,{default:function(){return w}});var l=a(7294),n=a(429),i=a(1433),o=a(682),r=a(8728),c=a(4051),m=a(4596),p=a(8742),s=a(4160),h=a(4125),d=a(7128),u=a(1555),E=a(5005),b=a(2737),g=a(3921);const f="<p>A <a href='https://www.data-to-viz.com/caveat/pie.html'>Pie Chart</a> is a circle divided into sectors that each represent a proportion of the whole. It is one of the most common viz type, but also probably the most <a href='https://www.data-to-viz.com/caveat/pie.html'>criticized</a>. In python, they are most of the time done thanks to the <code>pie()</code> function of the <code>Matplotlib</code> library.</p>",y="# library\nimport matplotlib.pyplot as plt\n\n# create data: an array of values\nsize_of_groups=[12,11,3,30]\n\n# Create a pieplot\nplt.pie(size_of_groups)\nplt.show()\n";function w(){return l.createElement(i.Z,{title:"Pie plot",isTocEnabled:!0,seoDescription:"A collection of Pie chart examples made with Python, coming with explanation and reproducible code"},l.createElement(n.Z,{title:"Pie Plot",description:f}),l.createElement(o.Z,null,l.createElement("h2",{id:"Quick"},"⏱ Quick start"),l.createElement(c.Z,{className:"align-items-center"},l.createElement(u.Z,{md:6},l.createElement("p",null,l.createElement("code",null,"matplotlib")," allows to build a ",l.createElement(s.rU,{to:"/pie-plot"},"pie chart")," easily thanks to its ",l.createElement("code",null,"pie()")," function."),l.createElement("p",null,"The input data you must provide is an array of numbers, where each numbers will be mapped to one of the pie item.🔥")),l.createElement(u.Z,{md:6},l.createElement(s.rU,{to:"/pie-plot-matplotlib-basic"},l.createElement(d.Z,{imgName:"pie-plot-matplotlib-basic1",caption:"Most basic donut chart with Python and Matplotlib"})))),l.createElement(b.Z,null,y)),l.createElement(g.Z,null),l.createElement("div",{className:"greySection"},l.createElement(o.Z,null,l.createElement("h2",{id:"Warning"},"⚠️ Mind the pie chart"),l.createElement("p",null,"Pie chart is probably the most criticized chart type. Humans are pretty bad at reading angles, making it hard to rank the groups accurately. Most of the time, it is better to display the information as a ",l.createElement(s.rU,{to:"/barplot"},"barchart"),", a ",l.createElement(s.rU,{to:"/treemap"},"treemap")," or a ",l.createElement(s.rU,{to:"/lollipop-plot"},"lollipop")," plot."),l.createElement("p",null,"Have a look to the 3 pie charts below, can you spot the pattern hidden in it?"),l.createElement("div",{style:{maxWidth:"600px",margin:"0 auto"}},l.createElement("a",{href:"https://www.data-to-viz.com/caveat/pie.html"},l.createElement(d.Z,{imgName:"pieChartIssue",caption:"Can you spot the pattern hidden behind those 3 pie charts? Click to see the same info visualized as barplots: much more insightful isn't it?"}))),l.createElement("a",{href:"https://www.data-to-viz.com/caveat/pie.html"},l.createElement(E.Z,{size:"sm"},"See it as a barplot")),l.createElement("p",null,"Last but not least, please avoid the ",l.createElement("code",null,"explode")," and ",l.createElement("code",null,"shadow")," options of the pie() function, they are killing all the most basic dataviz principles."))),l.createElement(g.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Matplotlib"},l.createElement(h.rS,null),"Pie chart with ",l.createElement("code",null,"Matplotlib")),l.createElement("p",null,"The examples below should guide you through the ",l.createElement("code",null,"pie()")," function usage. It starts basics and then show how to add labels, customize colors and more."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"pie-plot-matplotlib-basic-add-labels",caption:"Add and customize the labels",linkTo:"/pie-plot-matplotlib-basic"}),l.createElement(m.Z,{imgName:"pie-plot-matplotlib-basic-add-padding",caption:"Customize the pie section colors",linkTo:"/pie-plot-matplotlib-basic"}),l.createElement(m.Z,{imgName:"pie-plot-matplotlib-basic-colors",caption:"Add blank space between each pie section.",linkTo:"/pie-plot-matplotlib-basic"}))),l.createElement(g.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(o.Z,null,l.createElement(p.Z,{chartFamily:"partOfAWhole"}))),l.createElement(g.Z,null),l.createElement(o.Z,null,l.createElement(r.Z,null)),l.createElement(g.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-pie-plot-js-9a5da155c8c13c3a7615.js.map