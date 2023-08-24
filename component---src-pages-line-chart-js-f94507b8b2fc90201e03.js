"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[5508],{7128:function(e,t,l){l.d(t,{Z:function(){return o}});var a=l(7294),n=l(4160),i=l(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:l}=e;if(r.includes(t))return a.createElement("p",null,"TODO");const o=(0,n.K2)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(i.G,{image:o.node.childImageSharp.gatsbyImageData,alt:l,className:"chartImageImg"}),l&&a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,l))))):null}},4596:function(e,t,l){l.d(t,{Z:function(){return o}});var a=l(7294),n=l(7128),i=l(1555),r=l(4160);function o(e){let{imgName:t,caption:l,linkTo:o}=e;return a.createElement(i.Z,{xs:12,md:4},a.createElement(r.rU,{to:o},a.createElement(n.Z,{imgName:t,caption:l})))}},5857:function(e,t,l){l.r(t),l.d(t,{default:function(){return f}});var a=l(7294),n=l(429),i=l(1433),r=l(682),o=l(8728),c=l(4051),m=l(4596),h=l(8742),s=l(4160),p=l(4125),u=l(1555),d=l(2737),E=l(7128),w=l(3921);const g=a.createElement(a.Fragment,null,a.createElement("p",null,"A ",a.createElement("a",{href:"https://www.data-to-viz.com/graph/line.html"},"line chart")," ","displays the ",a.createElement("b",null,"evolution")," of one or several ",a.createElement("b",null,"numeric variables"),". It is often used to represend ",a.createElement(s.rU,{href:"/timeseries"},"time series"),"."),a.createElement("p",null,"The line chart is one of the ",a.createElement("b",null,"most common")," chart type. As a result, all the most common python data visualization libraries like"," ",a.createElement("code",null,"matplotlib"),", ",a.createElement("code",null,"seaborn")," or ",a.createElement("code",null,"plotly")," allow to build it."),a.createElement("p",null,"This page displays many line chart examples made with those tools. It goes from ",a.createElement("b",null,"basic line chart tutorials")," to highly customized,"," ",a.createElement("b",null,"polished examples")," 🔥.")),b="# libraries\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# create data\nvalues=np.cumsum(np.random.randn(1000,1))\n\n# use the plot function\nplt.plot(values)\n";function f(){return a.createElement(i.Z,{title:"Line chart",isTocEnabled:!0,seoDescription:"A collection of line chart examples made with Python, coming with explanation and reproducible code"},a.createElement(n.Z,{title:"Line Chart",description:g}),a.createElement(r.Z,null,a.createElement("h2",{id:"Quick"},"⏱ Quick start"),a.createElement(c.Z,{className:"align-items-center"},a.createElement(u.Z,{md:6},a.createElement("p",null,"Making a simple line chart with ",a.createElement("code",null,"matplotlib")," is pretty straightforward thanks to the ",a.createElement("code",null,"plot()")," function."),a.createElement("p",null,"If you provide only a series of values, it will consider that these values are ordered and will use values from 1 to n to create the X axis.🔥"),a.createElement("p",null,"For more control on the chart, see the dedicated section below.")),a.createElement(u.Z,{md:6},a.createElement(s.rU,{to:"/120-line-chart-with-matplotlib"},a.createElement(E.Z,{imgName:"120_Basic_lineplot2",caption:"A basic line chart made with python and matplotlib"})))),a.createElement(d.Z,null,b)),a.createElement(w.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"Matplotlib"},a.createElement(p.rS,null),"Line chart with ",a.createElement("code",null,"Matplotlib")),a.createElement("p",null,a.createElement("code",null,"Matplotlib")," is a great fit to build line charts thanks to its ",a.createElement("code",null,"plot()")," function."," "),a.createElement("p",null,"The ",a.createElement(s.rU,{to:"/120-line-chart-with-matplotlib"},"first chart")," of this section explains how to use ",a.createElement("code",null,"plot()")," from any kind of data input format. The"," ",a.createElement(s.rU,{to:"/121-line-chart-customization"},"next one")," goes deep into chart customization (line width, color aspect and more)."," "),a.createElement("p",null,"Another common need is to build a"," ",a.createElement(s.rU,{to:"/line-chart-dual-y-axis-with-matplotlib"},"dual Y axis line chart"),", but be mindful of the"," ",a.createElement("a",{href:"https://www.data-to-viz.com/caveat/dual_axis.html"},"caveats")," ","that go with it."),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"120_Basic_lineplot1",caption:"How to build a basic line chart with python from any kind of input format",linkTo:"/120-line-chart-with-matplotlib"}),a.createElement(m.Z,{imgName:"121_Custom_line_plot3",caption:"How to customize the matplotlib line plot appearance: width, stroke, color, style..",linkTo:"/121-line-chart-customization"}),a.createElement(m.Z,{imgName:"basic-time-series-with-matplotlib",caption:"How to deal with the date format. How to represent those dates properly on the X axis.",linkTo:"/basic-time-series-with-matplotlib"}),a.createElement(m.Z,{imgName:"line-chart-dual-y-axis-with-matplotlib1",caption:"How to build a dual Y axis line chart to display 2 series with different units.",linkTo:"/line-chart-dual-y-axis-with-matplotlib"}),a.createElement(m.Z,{imgName:"area-fill-between-two-lines-in-matplotlib",caption:"Fill the gap between 2 line charts",linkTo:"/area-fill-between-two-lines-in-matplotlib"}),a.createElement(m.Z,{imgName:"516-line-chart-with-annotations",caption:"Add annotation on top of a matplotlib line chart",linkTo:"/516-line-chart-with-annotations"}))),a.createElement(w.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"Multiple groups"},a.createElement(p.rS,null),"Line chart with several groups (",a.createElement("code",null,"Matplotlib"),")"),a.createElement("p",null,"A line chart with multiple groups allows to show the evolution of"," ",a.createElement("b",null,"several items")," on the same figure."," "),a.createElement("p",null,"It is powerful but can quickly turn into a"," ",a.createElement("a",{href:"https://www.data-to-viz.com/caveat/spaghetti.html"},"spaghetti chart"),": when too many lines are displayed they get cluttered and"," ",a.createElement("b",null,"hard to read"),". Moreover, make sure to use"," ",a.createElement(s.rU,{href:"/123-highlight-a-line-in-line-plot"},"inline labeling")," ","instead of a side legend that is very annoying to read."),a.createElement("p",null,"The examples below explain how to build a line chart with multiple groups, and what are the ",a.createElement("b",null,"alternatives")," to show your data a better way."),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"122_Multiple_line_plot",caption:"Line chart with multiple groups",linkTo:"/122-multiple-lines-chart"}),a.createElement(m.Z,{imgName:"123_Highlight_a_line",caption:"How to customize the matplotlib line plot appearance: width, stroke, color, style..",linkTo:"/123-highlight-a-line-in-line-plot"}),a.createElement(m.Z,{imgName:"124_Spaghetti_plot",caption:"Line chart with multiple groups",linkTo:"/124-spaghetti-plot"}),a.createElement(m.Z,{imgName:"125_Lineplot_small_multiple_v2",caption:"Line chart and small multiple",linkTo:"/125-small-multiples-for-line-chart"}),a.createElement(m.Z,{imgName:"125_Lineplot_small_multiple",caption:"Line chart and small multiple (variation)",linkTo:"/125-small-multiples-for-line-chart"}))),a.createElement(w.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"seaborn"},a.createElement(p._I,null),"Line chart with Seaborn"),a.createElement("p",null,a.createElement(s.rU,{href:"/seaborn"},"Seaborn")," is another very good alternative when it comes to create line charts in Python. It comes with a powerful ",a.createElement("code",null,"lineplot()")," function that does most of the work for us."),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"122_Multiple_line_plot",caption:"Line chart with multiple groups",linkTo:"/122-multiple-lines-chart"}))),a.createElement(w.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"plotly"},a.createElement(p.Ne,null),"Interactive line chart with plotly"),a.createElement("p",null,"If you are looking for an ",a.createElement("b",null,"interactive")," version of a line chart with Python, ",a.createElement(s.rU,{href:"/plotly"},"plotly")," is definitely the library you need."),a.createElement("p",null,"Its API is very straightforward to understand, and the output allows to ",a.createElement("b",null,"zoom")," on the chart and have ",a.createElement("b",null,"tooltip")," for markers:"),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"514-interactive-line-chart-plotly-1",caption:"Basic interactive line chart with plotly",linkTo:"/514-interactive-line-chart-plotly"}),a.createElement(m.Z,{imgName:"514-interactive-line-chart-plotly-2",caption:"How to customize the appearance of a plotly line chart",linkTo:"/514-interactive-line-chart-plotly"}),a.createElement(m.Z,{imgName:"514-interactive-line-chart-plotly-3",caption:"Interactive line chart with multiple groups",linkTo:"/514-interactive-line-chart-plotly"}))),a.createElement(w.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"From the web"},"🎨 From the web"),a.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",a.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",a.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",a.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),a.createElement(c.Z,null,a.createElement(u.Z,{xs:12,md:4},a.createElement(s.rU,{to:"/web-line-chart-with-labels-at-line-end"},a.createElement(E.Z,{imgName:"web-line-chart-with-labels-at-line-end",caption:"How to add labels at the end of each line with matplotlib. Definitely better than using a legend!"}))),a.createElement(u.Z,{xs:12,md:4},a.createElement(s.rU,{to:"/web-time-series-and-facetting-with-matplotlib"},a.createElement(E.Z,{imgName:"web-time-series-and-facetting-with-matplotlib-square",caption:"Display 2 line charts and fill the area between both. Also uses faceting to split by groups."}))),a.createElement(u.Z,{xs:12,md:4},a.createElement(s.rU,{to:"/web-highlighted-lineplot-with-faceting"},a.createElement(E.Z,{imgName:"web-highlighted-lineplot-with-faceting",caption:"A multipanel connected scatterplot, with several groups displayed and one highlighted per panel."}))),a.createElement(u.Z,{xs:12,md:4},a.createElement(s.rU,{to:"/web-lineplots-and-area-chart-the-economist"},a.createElement(E.Z,{imgName:"web-lineplots-and-area-chart-the-economist-square1",caption:"Learn how to mimick The Economist's style with a figure combining both a line and an area chart."}))),a.createElement(u.Z,{xs:12,md:4},a.createElement(s.rU,{to:"/web-multiple-lines-and-panels"},a.createElement(E.Z,{imgName:"web-multiple-lines-and-panels",caption:"Multiple grouped line charts with a beautiful color palette and customized title and annotation."}))),a.createElement(u.Z,{xs:12,md:4},a.createElement(s.rU,{to:"/web-line-chart-small-multiple"},a.createElement(E.Z,{imgName:"web-line-chart-small-multiple-square",caption:"A beautiful line chart with small multiple made with Python and matplotlib"}))))),a.createElement(w.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(r.Z,null,a.createElement(h.Z,{chartFamily:"evolution"}))),a.createElement(w.Z,null),a.createElement(r.Z,null,a.createElement(o.Z,null)),a.createElement(w.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-line-chart-js-f94507b8b2fc90201e03.js.map