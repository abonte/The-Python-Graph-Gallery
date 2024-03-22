"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[9379],{7128:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(1883),o=a(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){let{imgName:t,caption:a}=e;if(r.includes(t))return n.createElement("p",null,"TODO");const c=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return c?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(o.G,{image:c.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(7128),o=a(1555),r=a(1883);function c(e){let{imgName:t,caption:a,linkTo:c}=e;return n.createElement(o.Z,{xs:12,md:4},n.createElement(r.Link,{to:c},n.createElement(l.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return l}});var n=a(7294);const l=e=>{let{title:t,seoDescription:a,keywords:l}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("html",{lang:"en"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:l||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:site",content:"@R_Graph_Gallery"}))}},6152:function(e,t,a){a.r(t),a.d(t,{Head:function(){return _},default:function(){return Z}});var n=a(7294),l=a(429),o=a(2057),r=a(682),c=a(1190),i=a(4051),m=a(4596),p=a(8742),u=a(1883),s=a(4125),d=a(7128),h=a(1555),E=a(5005),g=a(2737),b=a(3921),y=a(9389);const f="<p>A Donut chart is essentially a <a href='https://python-graph-gallery.com/pie-plot/'>Pie Chart</a> with an area of the center cut out. You can build one hacking the <code>plt.pie()</code> function of the <code>matplotlib</code> library as shown in the examples below.</p>",k="# library\nimport matplotlib.pyplot as plt\n\n# create data\nsize_of_groups=[12,11,3,30]\n\n# Create a pieplot\nplt.pie(size_of_groups)\n\n# add a circle at the center to transform it in a donut chart\nmy_circle=plt.Circle( (0,0), 0.7, color='white')\np=plt.gcf()\np.gca().add_artist(my_circle)\n\nplt.show()\n",_=()=>n.createElement(y.H,{title:"Donut plot",seoDescription:"A collection of donut chart examples made with Python, coming with explanation and reproducible code"});function Z(){return n.createElement(o.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Donut Plot",description:f}),n.createElement(b.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(i.Z,{className:"align-items-center"},n.createElement(h.Z,{md:6},n.createElement("p",null,n.createElement("code",null,"matplotlib")," allows to build a"," ",n.createElement(u.Link,{to:"/pie-plot"},"pie chart")," easily thanks to its"," ",n.createElement("code",null,"pie()")," function. Visit the"," ",n.createElement(u.Link,{to:"/pie-plot"},"dedicated section")," for more about that."),n.createElement("p",null,"We can use the exact same principle and add a circle to the center thanks to the",n.createElement("code",null,"circle()")," function and get a donut chart.🔥")),n.createElement(h.Z,{md:6},n.createElement(u.Link,{to:"/160-basic-donut-plot"},n.createElement(d.Z,{imgName:"160_Basic_donut_plot",caption:"Most basic donut chart with Python and Matplotlib"})))),n.createElement(g.Z,null,k)),n.createElement(b.Z,null),n.createElement("div",{className:"greySection"},n.createElement(r.Z,null,n.createElement("h2",{id:"Warning"},"⚠️ Mind the donut!"),n.createElement("p",null,"As his friend the ",n.createElement(u.Link,{to:"/pie-plot"},"Pie chart"),", the Donut chart is often criticized. Humans are pretty bad at reading angles, making it hard to rank the groups accurately. Most of the time, it is better to display the information as a"," ",n.createElement(u.Link,{to:"/barplot"},"barchart"),", a"," ",n.createElement(u.Link,{to:"/treemap"},"treemap")," or a"," ",n.createElement(u.Link,{to:"/lollipop-plot"},"lollipop")," plot."),n.createElement("p",null,"Have a look to the 3 pie charts below, can you spot the pattern hidden in it?"),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto"}},n.createElement(u.Link,{to:"/173-elaborated-venn-diagram"},n.createElement(d.Z,{imgName:"pieChartIssue",caption:"The matplotlib-venn library allows a high level of customization. Here is an example taking advantage of it"}))),n.createElement("a",{href:"https://www.data-to-viz.com/caveat/pie.html"},n.createElement(E.Z,{size:"sm"},"See it as a barplot")))),n.createElement(b.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(s.rS,null),"Donut plot with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,"The example above is a good start but you probably need to go further. The blog posts linked below explain common tasks like"," ",n.createElement(u.Link,{to:"/161-custom-matplotlib-donut-plot"},"adding and customizing labels"),", change section colors, add"," ",n.createElement(u.Link,{to:"/161-custom-matplotlib-donut-plot"},"padding")," between each and more."),n.createElement(i.Z,null,n.createElement(m.Z,{imgName:"161_custom_donut_plot5",caption:"Add and customize the labels",linkTo:"/161-custom-matplotlib-donut-plot"}),n.createElement(m.Z,{imgName:"161_custom_donut_plot3",caption:"Customize the donut section colors",linkTo:"/161-custom-matplotlib-donut-plot"}),n.createElement(m.Z,{imgName:"161_custom_donut_plot6",caption:"Add blank space between each donut section.",linkTo:"/161-custom-matplotlib-donut-plot"}),n.createElement(m.Z,{imgName:"162_Background_color_donut",caption:"How to make the rectangle colors relative to their values.",linkTo:"/162-change-background-of-donut-plot"}))),n.createElement(b.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(r.Z,null,n.createElement(p.Z,{chartFamily:"partOfAWhole"}))),n.createElement(b.Z,null),n.createElement(r.Z,null,n.createElement(c.Z,null)),n.createElement(b.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-donut-plot-js-3799447400aedb7eae83.js.map