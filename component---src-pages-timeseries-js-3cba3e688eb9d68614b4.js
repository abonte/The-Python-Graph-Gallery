"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[2282],{7128:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),i=a(1883),n=a(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:a}=e;if(r.includes(t))return l.createElement("p",null,"TODO");const o=(0,i.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(n.G,{image:o.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),i=a(7128),n=a(1555),r=a(1883);function o(e){let{imgName:t,caption:a,linkTo:o}=e;return l.createElement(n.Z,{xs:12,md:4},l.createElement(r.Link,{to:o},l.createElement(i.Z,{imgName:t,caption:a})))}},7335:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=a(7294),i=a(429),n=a(146),r=a(682),o=a(8728),m=a(4051),c=a(4596),s=a(8742),h=a(1883),p=a(4125),d=a(7128),u=a(1555),g=a(2737),E=a(3921);const w="<p>Timeseries charts refer to all charts representing the evolution of a numeric value. <a href='https://www.python-graph-gallery.com/line-chart/'>Line chart</a>, <a href='https://www.python-graph-gallery.com/streamchart/'>streamgraph</a>, <a href='https://www.python-graph-gallery.com/barplot/'>barplot</a>, <a href='https://www.python-graph-gallery.com/area-plot/'>area chart</a>: they all can be used for timeseries visualization. This section displays many timeseries examples made with Python, Matplotlib and other libraries.</p>",y="# libraries\n  import matplotlib.pyplot as plt\n  import numpy as np\n\n  # create data\n  values=np.cumsum(np.random.randn(1000,1))\n\n  # use the plot function\n  plt.plot(values)\n  ";function f(){return l.createElement(n.Z,{title:"Timeseries",isTocEnabled:!0,seoDescription:"A collection of timeseries examples made with Python, coming with explanation and reproducible code"},l.createElement(i.Z,{title:"Timeseries",description:w}),l.createElement(r.Z,null,l.createElement("h2",{id:"Quick"},"⏱ Quick start"),l.createElement(m.Z,{className:"align-items-center"},l.createElement(u.Z,{md:6},l.createElement("p",null,"Making a simple line chart with ",l.createElement("code",null,"matplotlib")," is pretty straightforward thanks to the ",l.createElement("code",null,"plot()")," function."),l.createElement("p",null,"If you provide only a series of values, it will consider that these values are ordered and will use values from 1 to n to create the X axis.🔥"),l.createElement("p",null,"For more control on the chart, see the dedicated section below.")),l.createElement(u.Z,{md:6},l.createElement(h.Link,{to:"/120-line-chart-with-matplotlib"},l.createElement(d.Z,{imgName:"120_Basic_lineplot2",caption:"The most basic histogram one can make with python and seaborn"})))),l.createElement(g.Z,null,y)),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Area"},"Area charts for timeseries"),l.createElement("p",null,l.createElement(h.Link,{to:"/area-plot"},"Area charts")," are very often used for timeseries visualization. They are particularly adapted when there is only 1 series to display. When several groups must be displayed, they can still be used using faceting."),l.createElement(m.Z,null,l.createElement(c.Z,{imgName:"240_basic_area_chart",caption:"The most basic area chart one can make with python and matplotlib",linkTo:"/240-basic-area-chart"}),l.createElement(c.Z,{imgName:"242_area_chart_and_faceting",caption:"Area chart for timeseries with facting to display many groups",linkTo:"/242-area-chart-and-faceting"}))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Line"},"Line charts for timeseries"),l.createElement("p",null,l.createElement(h.Link,{to:"/line-chart"},"Line charts")," are probably the most common type of viz for timeseries. They are particularly adapted when several groups must be displayed to compare their evolution. But mind the ",l.createElement("a",{href:"data to viz spaghetti"},"spaghetti plot"),": too many groups make the figure unreadable."),l.createElement(m.Z,null,l.createElement(c.Z,{imgName:"122_Multiple_line_plot",caption:"Line chart with multiple groups",linkTo:"/122-multiple-lines-chart"}),l.createElement(c.Z,{imgName:"123_Highlight_a_line",caption:"How to customize the matplotlib line plot appearance: width, stroke, color, style..",linkTo:"/123-highlight-a-line-in-line-plot"}),l.createElement(c.Z,{imgName:"124_Spaghetti_plot",caption:"Line chart with multiple groups",linkTo:"/124-spaghetti-plot"}),l.createElement(c.Z,{imgName:"125_Lineplot_small_multiple",caption:"Line chart and small multiple (variation)",linkTo:"/125-small-multiples-for-line-chart"}),l.createElement(c.Z,{imgName:"basic-time-series-with-matplotlib",caption:"How to deal with the date format. How to represent those dates properly on the X axis.",linkTo:"/basic-time-series-with-matplotlib"}),l.createElement(c.Z,{imgName:"line-chart-dual-y-axis-with-matplotlib1",caption:"How to build a dual Y axis line chart to display 2 series with different units.",linkTo:"/line-chart-dual-y-axis-with-matplotlib"}))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Timeseries"},"Heatmap for timeseries"),l.createElement("p",null,"A heatmap can be used to display some temporal data. Here is an example using ",l.createElement(h.Link,{to:"/matplotlib"},"matplotlib")," where the evolution of a temperature is displayed over the hour of the day (Y axis) and the day of the year (X axis) organized by month."),l.createElement("div",{style:{maxWidth:"800px",margin:"0 auto",padding:30}},l.createElement(h.Link,{to:"/heatmap-for-timeseries-matplotlib"},l.createElement(d.Z,{imgName:"heatmap-for-timeseries-matplotlib",caption:"A heatmap for temporal data with Python and Matplotlib"})))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"From the web"},l.createElement(p.rS,null),"From the web"),l.createElement("p",null,"A set of publication ready charts for timeseries. They are made with python and ",l.createElement("a",{href:"A highly customized lollipop chart made with Python and Matplotlib to display a timeseries."},"matplotlib")," and use a high level of customization."),l.createElement("p",null,"The ",l.createElement(h.Link,{to:"/web-line-chart-with-labels-at-line-end"},"first example")," is a line chart showing how to add labels at the end of each series for better readability. The ",l.createElement(h.Link,{to:"/web-lollipop-plot-with-python-the-office"},"second")," shows how to use lollipop to display the evolution of a deviation around a trend."),l.createElement(m.Z,null,l.createElement(c.Z,{imgName:"web-line-chart-with-labels-at-line-end",caption:"How to add labels at the end of each line with matplotlib. Definitely better than using a legend!",linkTo:"/web-line-chart-with-labels-at-line-end"}),l.createElement(c.Z,{imgName:"web-lollipop-plot-with-python-the-office-square",caption:"A highly customized lollipop chart made with Python and Matplotlib to display a timeseries.",linkTo:"/web-lollipop-plot-with-python-the-office"}),l.createElement(c.Z,{imgName:"web-highlighted-lineplot-with-faceting-square",caption:"A multipanel connected scatterplot, with several groups displayed and one highlighted per panel.",linkTo:"/web-highlighted-lineplot-with-faceting"}),l.createElement(c.Z,{imgName:"web-lineplots-and-area-chart-the-economist-square1",caption:"Learn how to mimick The Economist's style with a figure combining both a line and an area chart.",linkTo:"/web-lineplots-and-area-chart-the-economist"}))),l.createElement(E.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(r.Z,null,l.createElement(s.Z,{chartFamily:"evolution"}))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement(o.Z,null)),l.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-timeseries-js-3cba3e688eb9d68614b4.js.map