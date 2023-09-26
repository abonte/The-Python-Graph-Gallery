"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[9551],{7128:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(1883),o=n(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){let{imgName:t,caption:n}=e;if(r.includes(t))return a.createElement("p",null,"TODO");const c=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return c?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(o.G,{image:c.node.childImageSharp.gatsbyImageData,alt:n,className:"chartImageImg"}),n&&a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,n))))):null}},4596:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(7128),o=n(1555),r=n(1883);function c(e){let{imgName:t,caption:n,linkTo:c}=e;return a.createElement(o.Z,{xs:12,md:4},a.createElement(r.Link,{to:c},a.createElement(l.Z,{imgName:t,caption:n})))}},9389:function(e,t,n){n.d(t,{H:function(){return l}});var a=n(7294);const l=e=>{let{title:t,seoDescription:n,keywords:l}=e;return a.createElement(a.Fragment,null,a.createElement("title",null,t),a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),a.createElement("meta",{name:"description",content:n||"How to build a chart with Python"}),a.createElement("meta",{name:"author",content:"Yan Holtz"}),a.createElement("meta",{name:"keywords",content:l||"python, chart, graph, code, viz, dataviz"}),a.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),a.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),a.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),a.createElement("meta",{property:"og:description",content:n}),a.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}))}},7242:function(e,t,n){n.r(t),n.d(t,{Head:function(){return k},default:function(){return v}});var a=n(7294),l=n(429),o=n(2057),r=n(682),c=n(1190),i=n(4051),m=n(4596),s=n(8742),p=n(1883),h=n(4125),d=n(1555),u=n(5005),E=n(2737),g=n(7128),b=n(3921),w=n(9389);const y="<p>A <a href='https://www.data-to-viz.com/graph/connectedscatter.html'>connected scatterplot</a> is a <a href='https://python-graph-gallery.com/line-chart/'>line chart</a> where each data point is shown by a circle or any type of marker. This section explains how to build a connected scatterplot with <code>Python</code>, using both the <code>Matplotlib</code> and the <code>Seaborn</code> libraries.</p>",f="# libraries\n  import matplotlib.pyplot as plt\n  import numpy as np\n  import pandas as pd\n\n  # data\n  df = pd.DataFrame({\n      'x_axis': range(1,10),\n      'y_axis': np.random.randn(9)*80+range(1,10)\n  })\n\n  # plot\n  plt.plot('x_axis', 'y_axis', data=df, linestyle='-', marker='o')\n  plt.show()\n",k=()=>a.createElement(w.H,{title:"Connected Scatterplot",seoDesciption:"A collection of connected scatterplot examples made with Python, coming with explanation and reproducible code"});function v(){return a.createElement(o.Z,{isTocEnabled:!0},a.createElement(l.Z,{title:"Connected Scatterplot",description:y}),a.createElement(r.Z,null,a.createElement("h2",{id:"Quick"},"⏱ Quick start"),a.createElement(i.Z,{className:"align-items-center"},a.createElement(d.Z,{md:6},a.createElement("p",null,"Building a connected scatterplot with Python and Matplotlib is a breeze thanks to the ",a.createElement("code",null,"plot()")," function. The 2 first argumenst are the X and Y values respectively, which can be stored in a ",a.createElement("code",null,"pandas")," data frame."),a.createElement("p",null,"The ",a.createElement("code",null,"linestyle")," and ",a.createElement("code",null,"marker")," arguments allow to use line and circles to make it look like a connected scatterplot. It means everything is very close to a"," ",a.createElement(p.Link,{to:"/line-chart"},"line chart")," or a"," ",a.createElement(p.Link,{to:"/scatter-plot"},"scatterplot")," that are extensively described in the gallery.")),a.createElement(d.Z,{md:6},a.createElement(p.Link,{to:"/132-basic-connected-scatterplot"},a.createElement(g.Z,{imgName:"132_Matplotlib-connected-scatterplot",caption:"Basic connected scatterplot with Python and Seaborn."})))),a.createElement(E.Z,null,f),a.createElement("br",null)),a.createElement(b.Z,null),a.createElement("div",{className:"greySection"},a.createElement(r.Z,null,a.createElement("h2",{id:"Warning"},"⚠️ Two types of connected scatterplot"),a.createElement("p",null,"There are two types of connected scatterplot, and it often creates confusion."),a.createElement("p",null,"The ",a.createElement("u",null,"first")," is simply a ",a.createElement(p.Link,{to:"/line-chart"},"lineplot")," ","with dots added on top of it. It takes as input 2 numeric variables only. The ",a.createElement("u",null,"second")," shows the relationship between 2 numeric variables across time. It requires 3 numeric variables as input."),a.createElement("p",null,"Confusing? Visit"," ",a.createElement("a",{href:"https://www.data-to-viz.com/graph/connectedscatter.html"},"data-to-viz")," ","to clarify.."),a.createElement("a",{href:"https://www.data-to-viz.com/graph/connectedscatter.html"},a.createElement(u.Z,{size:"sm"},"Read more")))),a.createElement(b.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"Seaborn"},a.createElement(h._I,null),"Connected scatterplot with ",a.createElement("code",null,"Seaborn")),a.createElement("p",null,"Building a connected scatterplot with ",a.createElement("code",null,"Seaborn")," looks pretty much the same as for a ",a.createElement(p.Link,{to:"/line-chart"},"line chart"),". It is made thanks to the ",a.createElement("code",null,"lineplot()")," function."),a.createElement("p",null,"Click the following images to get a long form tutorial on how to create a ",a.createElement("b",null,"basic connected scatterplot")," with Seaborn, how to draw"," ",a.createElement("b",null,"multiple groups")," and how to ",a.createElement("b",null,"customize the lines")," and the"," ",a.createElement("b",null,"markers"),"."),a.createElement(i.Z,null,a.createElement(m.Z,{imgName:"508-connected-scatter-plot-seaborn-1",caption:"Basic connected scatterplot with Python and Seaborn",linkTo:"/508-connected-scatter-plot-seaborn"}),a.createElement(m.Z,{imgName:"508-connected-scatter-plot-seaborn-2",caption:"Connected scatterplot with multiple groups (Seaborn)",linkTo:"/508-connected-scatter-plot-seaborn"}),a.createElement(m.Z,{imgName:"508-connected-scatter-plot-seaborn-4",caption:"Connected scatterplot: customize markers and lines (Seaborn)",linkTo:"/508-connected-scatter-plot-seaborn"}))),a.createElement(b.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"Matplotlib"},a.createElement(h.rS,null),"Connected scatterplot with ",a.createElement("code",null,"Matplotlib")),a.createElement("p",null,"As for ",a.createElement(p.Link,{to:"/scatter-plot"},"scatterplots"),","," ",a.createElement("code",null,"Matplotlib")," will help us build a bubble plot thanks to the the ",a.createElement("code",null,"plt.scatter()")," function. This function provides a"," ",a.createElement("code",null,"s")," parameter allowing to pass a third variable that will be mapped to the markers size."),a.createElement(i.Z,null,a.createElement(m.Z,{imgName:"106_seaborn_style_on_plt1",caption:"Basic connected scatterplot with Python and Matplotlib",linkTo:"/106-seaborn-style-on-matplotlib-plot"}),a.createElement(m.Z,{imgName:"194_matplotlib_subplot6",caption:"Connected scatterplot on a split window",linkTo:"/194-split-the-graphic-window-with-subplot"}),a.createElement(m.Z,{imgName:"122_Multiple_line_plot",caption:"How to customize line and markers with Matplotlib",linkTo:"/122-multiple-lines-chart"}),a.createElement(m.Z,{imgName:"132-basic-connected-scatterplot",caption:"Some more connected scatterplot examples with matplotlib",linkTo:"/132-basic-connected-scatterplot"})),a.createElement("br",null),a.createElement("p",null,"Cheatsheet: line customization with ",a.createElement("code",null,"Matplotlib")," and the"," ",a.createElement("code",null,"linestyle")," parameter."),a.createElement("div",{style:{maxWidth:"350px"}},a.createElement(p.Link,{to:"/121-line-chart-customization"},a.createElement(g.Z,{imgName:"121_Custom_line_plot4",caption:"Cheat sheet: line customization with matplotlib"})))),a.createElement(b.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"Matplotlib"},a.createElement(h.rS,null),"Connected scatterplot for 2 variables"),a.createElement("p",null,"As explained above, a connected scatterplot can also be base on 3 numeric variables. It allows to study the evolution of 2 variables (placed on the X and on the Y axis)."),a.createElement("div",{style:{maxWidth:"550px"}},a.createElement(p.Link,{to:"/connected-scatterplot-for-evolution"},a.createElement(g.Z,{imgName:"connected-scatterplot-for-evolution",caption:"Connected scatterplot to show the evolution of 2 variables"})))),a.createElement(b.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"Best"},a.createElement(h.rS,null),"Best python connected scatterplot examples"),a.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",a.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",a.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",a.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),a.createElement(i.Z,null,a.createElement(d.Z,{xs:12,md:4},a.createElement(p.Link,{to:"/web-text-repel-with-matplotlib"},a.createElement(g.Z,{imgName:"web-text-repel-with-matplotlib-square",caption:"Learn how to use the adjustText library to add many labels with no overlaps."}))),a.createElement(d.Z,{xs:12,md:4},a.createElement(p.Link,{to:"/web-highlighted-lineplot-with-faceting"},a.createElement(g.Z,{imgName:"web-highlighted-lineplot-with-faceting",caption:"A multipanel connected scatterplot, with several groups displayed and one highlighted per panel."}))))),a.createElement(b.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(r.Z,null,a.createElement(s.Z,{chartFamily:"correlation"}))),a.createElement(b.Z,null),a.createElement(r.Z,null,a.createElement(c.Z,null)),a.createElement(b.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-connected-scatter-plot-js-4b853b8c2f1bb16bac67.js.map