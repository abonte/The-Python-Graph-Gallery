"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[9551],{7128:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(4160),r=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){let{imgName:t,caption:a}=e;if(o.includes(t))return n.createElement("p",null,"TODO");const c=(0,l.K2)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return c?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:c.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(7128),r=a(1555),o=a(4160);function c(e){let{imgName:t,caption:a,linkTo:c}=e;return n.createElement(r.Z,{xs:12,md:4},n.createElement(o.rU,{to:c},n.createElement(l.Z,{imgName:t,caption:a})))}},7242:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),l=a(429),r=a(1433),o=a(682),c=a(8728),i=a(4051),m=a(4596),s=a(8742),p=a(4160),h=a(4125),d=a(1555),u=a(5005),E=a(2737),b=a(7128),g=a(3921);const w="<p>A <a href='https://www.data-to-viz.com/graph/connectedscatter.html'>connected scatterplot</a> is a <a href='https://python-graph-gallery.com/line-chart/'>line chart</a> where each data point is shown by a circle or any type of marker. This section explains how to build a connected scatterplot with <code>Python</code>, using both the <code>Matplotlib</code> and the <code>Seaborn</code> libraries.</p>",y="# libraries\n  import matplotlib.pyplot as plt\n  import numpy as np\n  import pandas as pd\n\n  # data\n  df = pd.DataFrame({\n      'x_axis': range(1,10),\n      'y_axis': np.random.randn(9)*80+range(1,10)\n  })\n\n  # plot\n  plt.plot('x_axis', 'y_axis', data=df, linestyle='-', marker='o')\n  plt.show()\n";function f(){return n.createElement(r.Z,{title:"Connected Scatterplot",isTocEnabled:!0,seoDescription:"A collection of connected scatterplot examples made with Python, coming with explanation and reproducible code"},n.createElement(l.Z,{title:"Connected Scatterplot",description:w}),n.createElement(o.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(i.Z,{className:"align-items-center"},n.createElement(d.Z,{md:6},n.createElement("p",null,"Building a connected scatterplot with Python and Matplotlib is a breeze thanks to the ",n.createElement("code",null,"plot()")," function. The 2 first argumenst are the X and Y values respectively, which can be stored in a ",n.createElement("code",null,"pandas")," data frame."),n.createElement("p",null,"The ",n.createElement("code",null,"linestyle")," and ",n.createElement("code",null,"marker")," arguments allow to use line and circles to make it look like a connected scatterplot. It means everything is very close to a"," ",n.createElement(p.rU,{to:"/line-chart"},"line chart")," or a"," ",n.createElement(p.rU,{to:"/scatter-plot"},"scatterplot")," that are extensively described in the gallery.")),n.createElement(d.Z,{md:6},n.createElement(p.rU,{to:"/132-basic-connected-scatterplot"},n.createElement(b.Z,{imgName:"132_Matplotlib-connected-scatterplot",caption:"Basic connected scatterplot with Python and Seaborn."})))),n.createElement(E.Z,null,y),n.createElement("br",null)),n.createElement(g.Z,null),n.createElement("div",{className:"greySection"},n.createElement(o.Z,null,n.createElement("h2",{id:"Warning"},"⚠️ Two types of connected scatterplot"),n.createElement("p",null,"There are two types of connected scatterplot, and it often creates confusion."),n.createElement("p",null,"The ",n.createElement("u",null,"first")," is simply a ",n.createElement(p.rU,{to:"/line-chart"},"lineplot")," ","with dots added on top of it. It takes as input 2 numeric variables only. The ",n.createElement("u",null,"second")," shows the relationship between 2 numeric variables across time. It requires 3 numeric variables as input."),n.createElement("p",null,"Confusing? Visit"," ",n.createElement("a",{href:"https://www.data-to-viz.com/graph/connectedscatter.html"},"data-to-viz")," ","to clarify.."),n.createElement("a",{href:"https://www.data-to-viz.com/graph/connectedscatter.html"},n.createElement(u.Z,{size:"sm"},"Read more")))),n.createElement(g.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Seaborn"},n.createElement(h._I,null),"Connected scatterplot with ",n.createElement("code",null,"Seaborn")),n.createElement("p",null,"Building a connected scatterplot with ",n.createElement("code",null,"Seaborn")," looks pretty much the same as for a ",n.createElement(p.rU,{to:"/line-chart"},"line chart"),". It is made thanks to the ",n.createElement("code",null,"lineplot()")," function."),n.createElement("p",null,"Click the following images to get a long form tutorial on how to create a ",n.createElement("b",null,"basic connected scatterplot")," with Seaborn, how to draw"," ",n.createElement("b",null,"multiple groups")," and how to ",n.createElement("b",null,"customize the lines")," and the"," ",n.createElement("b",null,"markers"),"."),n.createElement(i.Z,null,n.createElement(m.Z,{imgName:"508-connected-scatter-plot-seaborn-1",caption:"Basic connected scatterplot with Python and Seaborn",linkTo:"/508-connected-scatter-plot-seaborn"}),n.createElement(m.Z,{imgName:"508-connected-scatter-plot-seaborn-2",caption:"Connected scatterplot with multiple groups (Seaborn)",linkTo:"/508-connected-scatter-plot-seaborn"}),n.createElement(m.Z,{imgName:"508-connected-scatter-plot-seaborn-4",caption:"Connected scatterplot: customize markers and lines (Seaborn)",linkTo:"/508-connected-scatter-plot-seaborn"}))),n.createElement(g.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(h.rS,null),"Connected scatterplot with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,"As for ",n.createElement(p.rU,{to:"/scatter-plot"},"scatterplots"),","," ",n.createElement("code",null,"Matplotlib")," will help us build a bubble plot thanks to the the ",n.createElement("code",null,"plt.scatter()")," function. This function provides a"," ",n.createElement("code",null,"s")," parameter allowing to pass a third variable that will be mapped to the markers size."),n.createElement(i.Z,null,n.createElement(m.Z,{imgName:"106_seaborn_style_on_plt1",caption:"Basic connected scatterplot with Python and Matplotlib",linkTo:"/106-seaborn-style-on-matplotlib-plot"}),n.createElement(m.Z,{imgName:"194_matplotlib_subplot6",caption:"Connected scatterplot on a split window",linkTo:"/194-split-the-graphic-window-with-subplot"}),n.createElement(m.Z,{imgName:"122_Multiple_line_plot",caption:"How to customize line and markers with Matplotlib",linkTo:"/122-multiple-lines-chart"}),n.createElement(m.Z,{imgName:"132-basic-connected-scatterplot",caption:"Some more connected scatterplot examples with matplotlib",linkTo:"/132-basic-connected-scatterplot"})),n.createElement("br",null),n.createElement("p",null,"Cheatsheet: line customization with ",n.createElement("code",null,"Matplotlib")," and the"," ",n.createElement("code",null,"linestyle")," parameter."),n.createElement("div",{style:{maxWidth:"350px"}},n.createElement(p.rU,{to:"/121-line-chart-customization"},n.createElement(b.Z,{imgName:"121_Custom_line_plot4",caption:"Cheat sheet: line customization with matplotlib"})))),n.createElement(g.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(h.rS,null),"Connected scatterplot for 2 variables"),n.createElement("p",null,"As explained above, a connected scatterplot can also be base on 3 numeric variables. It allows to study the evolution of 2 variables (placed on the X and on the Y axis)."),n.createElement("div",{style:{maxWidth:"550px"}},n.createElement(p.rU,{to:"/connected-scatterplot-for-evolution"},n.createElement(b.Z,{imgName:"connected-scatterplot-for-evolution",caption:"Connected scatterplot to show the evolution of 2 variables"})))),n.createElement(g.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"From the web"},n.createElement(h.rS,null),"From the web"),n.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",n.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",n.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",n.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),n.createElement(i.Z,null,n.createElement(d.Z,{xs:12,md:4},n.createElement(p.rU,{to:"/web-text-repel-with-matplotlib"},n.createElement(b.Z,{imgName:"web-text-repel-with-matplotlib-square",caption:"Learn how to use the adjustText library to add many labels with no overlaps."}))),n.createElement(d.Z,{xs:12,md:4},n.createElement(p.rU,{to:"/web-highlighted-lineplot-with-faceting"},n.createElement(b.Z,{imgName:"web-highlighted-lineplot-with-faceting",caption:"A multipanel connected scatterplot, with several groups displayed and one highlighted per panel."}))))),n.createElement(g.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement(s.Z,{chartFamily:"correlation"}))),n.createElement(g.Z,null),n.createElement(o.Z,null,n.createElement(c.Z,null)),n.createElement(g.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-connected-scatter-plot-js-a02030a10440bc941483.js.map