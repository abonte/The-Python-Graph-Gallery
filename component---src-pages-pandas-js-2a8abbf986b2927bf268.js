"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[1469],{7128:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(1883),r=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(o.includes(t))return n.createElement("p",null,"TODO");const i=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(7128),r=a(1555),o=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return n.createElement(r.Z,{xs:12,md:4},n.createElement(o.Link,{to:i},n.createElement(l.Z,{imgName:t,caption:a})))}},29:function(e,t,a){a.r(t),a.d(t,{default:function(){return k}});var n=a(7294),l=a(429),r=a(2057),o=a(682),i=a(1190),c=a(4051),m=a(8742),s=a(7128),u=a(1883),p=a(944),d=a(1555),h=a(2737),E=a(3921),g=a(4596);const f=n.createElement(n.Fragment,null,n.createElement("p",null,n.createElement("code",null,"Pandas")," is a popular open-source Python library used for data manipulation and analysis. It provides ",n.createElement("b",null,"data structures")," and functions that make working with structured data, such as tabular data (like ",n.createElement("code",null,"Excel")," spreadsheets or",n.createElement("code",null,"SQL")," tables), easy and intuitive."),n.createElement("p",null,"Although not best known for this functionality, Pandas"," ",n.createElement("b",null,"can be used to create graphs")," and visualize data, thanks to its"," ",n.createElement("b",null,"lightweight syntax")," and"," ",n.createElement("a",{href:"https://python-graph-gallery.com/matplotlib/"},"matplotlib")," ","functions.")),w="# library\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Create data\nvalues=[12, 11, 9, 13, 14, 16, 14, 15, 18, 17, 19, 20]\ndf=pd.DataFrame({'x': range(1,13), 'y': values })\n\n# plot\ndf.plot('x', 'y') // This is the plot function of pandas\nplt.show()\n",b="df.plot('x', 'y', kind='line')\nplt.show()\n",y="df.line('x', 'y')\nplt.show()\n",Z="df.plot.line('x', 'y')\nplt.show()\n";function k(){return n.createElement(r.Z,{title:"Pandas",isTocEnabled:!0,seoDescription:"An overview of the Pandas python library data wrangling and data visualization"},n.createElement(l.Z,{title:"Pandas for data visualization",description:f,chartType:"plotly"}),n.createElement(o.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(c.Z,{className:"align-items-center"},n.createElement(d.Z,{md:6},n.createElement("p",null,n.createElement("code",null,"pandas")," plotting features are a wrapper around the"," ",n.createElement("a",{href:"https://python-graph-gallery.com/matplotlib/"},"matplotlib")," ","library, which is the most popular python library for data visualization."),n.createElement("p",null,"The ",n.createElement("code",null,"plot")," function is the most basic function to create a chart with pandas. It is a wrapper around the"," ",n.createElement("code",null,"matplotlib.pyplot.plot")," function.")),n.createElement(d.Z,{md:6},n.createElement(u.Link,{to:"/530-introduction-to-linechart-with-pandas"},n.createElement(s.Z,{imgName:"quick-pandas",caption:"The most basic (line) chart one can make with pandas"})))),n.createElement(h.Z,null,w)),n.createElement(E.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"APIs"},n.createElement(p.JK,null),"Three distinct syntaxes"),n.createElement("p",null,"There are 3 ways to build a chart with pandas: the ",n.createElement("code",null,"plot")," ","method, the function name methods (like ",n.createElement("code",null,"line"),","," ",n.createElement("code",null,"bar")," or ",n.createElement("code",null,"hist"),") and the ",n.createElement("code",null,"plot")," + function name method."),n.createElement("br",null),n.createElement("h3",null,"➡️ ",n.createElement("code",null,"plot method")),n.createElement("p",null,"In this case, we have to specify the ",n.createElement("code",null,"kind")," of chart we want to create. The ",n.createElement("code",null,"plot")," method is a wrapper around the"," ",n.createElement("code",null,"matplotlib.pyplot.plot")," function. The ",n.createElement("code",null,"kind")," ","argument is used to specify the ",n.createElement("b",null,"type of chart")," we want to create."),n.createElement(h.Z,null,b),n.createElement("br",null),n.createElement("br",null),n.createElement("h3",null,"➡️ ",n.createElement("code",null,"function name method")),n.createElement("p",null,"The function name method is a bit more straightforward. We just have to call ",n.createElement("b",null,"the right function name")," to create the chart we want. Matplotlib has various functions to create different types of charts. For example, the",n.createElement("code",null,"line")," function is used to create line charts."),n.createElement(h.Z,null,y),n.createElement("br",null),n.createElement("br",null),n.createElement("h3",null,"➡️ ",n.createElement("code",null,"plot + function name method")),n.createElement("p",null,"This method is a combination of the previous two. We use the"," ",n.createElement("code",null,"plot")," method and need the ",n.createElement("code",null,"function name"),"right after it."),n.createElement(h.Z,null,Z),n.createElement("br",null),n.createElement("br",null),n.createElement("p",null,"The ",n.createElement("code",null,"function name")," method is the most straightforward and the one we recommend. ",n.createElement("b",null,"Most posts")," on the gallery use this method.")),n.createElement(E.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Example"},n.createElement(p.JK,null),"Chart examples with Pandas"),n.createElement("p",null,"Pandas offers a wide range of nice charts. Here is a"," ",n.createElement("b",null,"selection of examples")," that you can find on the gallery. Click on the images to see the code!"),n.createElement(c.Z,null,n.createElement(g.Z,{imgName:"527-introduction-to-histogram-with-pandas",caption:"Simple histogram built with pandas",linkTo:"/527-introduction-to-histogram-with-pandas"}),n.createElement(g.Z,{imgName:"529-multi-group-histogram-pandas",caption:"Multi group histogram",linkTo:"/529-multi-group-histogram-pandas"}),n.createElement(g.Z,{imgName:"529-multi-group-histogram-pandas-2",caption:"Small multiples histogram",linkTo:"/529-multi-group-histogram-pandas"}),n.createElement(g.Z,{imgName:"535-introduction-to-scatter-plot-with-pandas",caption:"Scatter plot with pandas",linkTo:"/535-introduction-to-scatter-plot-with-pandas"}),n.createElement(g.Z,{imgName:"537-scatter-plots-grouped-by-color-with-pandas",caption:"Scatter plot grouped by color",linkTo:"/537-scatter-plots-grouped-by-color-with-pandas"}),n.createElement(g.Z,{imgName:"536-customizing-scatter-plots-with-pandas",caption:"Customized scatter plot",linkTo:"/536-customizing-scatter-plots-with-pandas"}),n.createElement(g.Z,{imgName:"538-introduction-to-barplot-with-pandas",caption:"Barplot with pandas",linkTo:"/538-introduction-to-barplot-with-pandas"}),n.createElement(g.Z,{imgName:"539-customizing-barplot-with-pandas",caption:"Customized barplot",linkTo:"/539-customizing-barplot-with-pandas"}),n.createElement(g.Z,{imgName:"540-barplots-grouped-by-color-with-pandas",caption:"Barplot grouped by color",linkTo:"/540-barplots-grouped-by-color-with-pandas"}),n.createElement(g.Z,{imgName:"530-introduction-to-linechart-with-pandas",caption:"Introduction to line chart with pandas",linkTo:"/530-introduction-to-linechart-with-pandas"}),n.createElement(g.Z,{imgName:"531-customizing-linecharts-with-pandas",caption:"Customize your line charts with pandas",linkTo:"/531-customizing-linecharts-with-pandas"}),n.createElement(g.Z,{imgName:"532-linecharts-mutliple-groups-with-pandas",caption:"Line charts with multiple variables or groups with pandas",linkTo:"/532-linecharts-mutliple-groups-with-pandas"}))),n.createElement(E.Z,null),n.createElement(E.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement(m.Z,{chartFamily:"general"}))),n.createElement(E.Z,null),n.createElement(o.Z,null,n.createElement(i.Z,null)),n.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-pandas-js-2a8abbf986b2927bf268.js.map