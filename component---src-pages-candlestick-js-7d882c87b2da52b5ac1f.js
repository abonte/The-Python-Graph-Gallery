"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[8517],{7128:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(1883),c=a(8032);const i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function r(e){let{imgName:t,caption:a}=e;if(i.includes(t))return n.createElement("p",null,"TODO");const r=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return r?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(c.G,{image:r.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(7128),c=a(1555),i=a(1883);function r(e){let{imgName:t,caption:a,linkTo:r}=e;return n.createElement(c.Z,{xs:12,md:4},n.createElement(i.Link,{to:r},n.createElement(l.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return l}});var n=a(7294);const l=e=>{let{title:t,seoDescription:a,keywords:l}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("html",{lang:"en"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:l||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}))}},185:function(e,t,a){a.r(t),a.d(t,{Head:function(){return v},default:function(){return w}});var n=a(7294),l=a(429),c=a(2057),i=a(682),r=a(1190),o=a(4051),m=a(4596),s=a(8742),d=a(1883),u=a(4125),h=a(1555),p=a(5005),E=a(2737),y=a(7128),g=a(3921),k=a(9389);const f=n.createElement(n.Fragment,null,n.createElement("p",null,"A"," ",n.createElement("a",{href:"https://en.wikipedia.org/wiki/Candlestick_chart"},"candlestick chart")," ","is a style of ",n.createElement("b",null,"financial chart")," used to describe price movements of a security, derivative, or currency."),n.createElement("p",null,"In python there are 2 main ways to build a candlestick chart. The"," ",n.createElement("code",null,"mplfinance")," package is built on top of"," ",n.createElement(d.Link,{href:"/matplotlib"},"matplotlib")," and is great to create"," ",n.createElement("b",null,"static")," versions. ",n.createElement(d.Link,{href:"/plotly"},"Plotly")," has a specific function to create ",n.createElement("b",null,"interactive")," candlestick charts."),n.createElement("p",null,"This page provides ",n.createElement("b",null,"several examples")," of candlestick charts using those 2 libraries. Linked tutorial should help you create your own candlestick in a short amount of time.")),b='#libraries\nimport mplfinance as mpf\nimport yfinance as yf #(for the dataset)\n\n# Define the stock symbol and date range\nstock_symbol = "AAPL"  # Example: Apple Inc.\nstart_date = "2022-01-01"\nend_date = "2022-03-30"\n\n# Load historical data\nstock_data = yf.download(stock_symbol, start=start_date, end=end_date)\n\n# plot\nmpf.plot(stock_data, type=\'candle\')\n',v=()=>n.createElement(k.H,{title:"Candlestick",seoDescription:"A collection of candlestick examples made with Python, coming with explanation and reproducible code"});function w(){return n.createElement(c.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Candlestick",description:f}),n.createElement(i.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(o.Z,{className:"align-items-center"},n.createElement(h.Z,{md:6},n.createElement("p",null,n.createElement("code",null,"mplfinance")," is the best library to quickly build a static candlestick chart."),n.createElement("p",null,"It comes with a dedicated ",n.createElement("code",null,"plot()")," function that has a"," ",n.createElement("code",null,"type")," argument that can be set to ",n.createElement("code",null,"candle"),":")),n.createElement(h.Z,{md:6},n.createElement(d.Link,{to:"/548-intro-candle-stick-matplotlib"},n.createElement(y.Z,{imgName:"548-intro-candle-stick-matplotlib",caption:"Basic candlestick chart made with Python and the mplfinance library."})))),n.createElement(E.Z,null,b)),n.createElement(g.Z,null),n.createElement(i.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(u.rS,null),"Candlestick with ",n.createElement("code",null,"mplfinance")),n.createElement("p",null,n.createElement("code",null,"mplfinance")," is a set of matplotlib utilities for the visualization, and visual analysis, of financial data. Its"," ",n.createElement("a",{href:"https://github.com/matplotlib/mplfinance"},"official documentation")," ","is available on github."),n.createElement("p",null,"Building a candlestick chart with mplfinance is made easy thanks to its ",n.createElement("code",null,"mpf.plot()")," function that has a ",n.createElement("code",null,"type")," ","argument that can be set to ",n.createElement("code",null,"candle"),"."),n.createElement("p",null,"Check the example below to understand how to build it from your dataset:"),n.createElement(o.Z,null,n.createElement(m.Z,{imgName:"548-intro-candle-stick-matplotlib",caption:"How to make a candlestick chart with Matplotlib and mplfinance",linkTo:"/548-intro-candle-stick-matplotlib"}),n.createElement(m.Z,{imgName:"549-candle-stick-with-moving-average",caption:"How to add one or several moving averages to a candlestick chart",linkTo:"/549-candle-stick-with-moving-average"}))),n.createElement(g.Z,null),n.createElement(i.Z,null,n.createElement("h2",{id:"Plotly"},n.createElement(u.Ne,null),"Candlestick with ",n.createElement("code",null,"Plotly")),n.createElement("p",null,n.createElement(d.Link,{href:"/plotly"},"Plotly")," is a python library made to create"," ",n.createElement("b",null,"interactive")," charts. It is particularly poweful when it comes to create interactive candlestick graphs."),n.createElement("p",null,"On the clandlestick example below, you can ",n.createElement("b",null,"zoom")," by selecting a specific area on the chart or using the minimap. On top of that,",n.createElement("b",null,"hovering")," a specific timestamp will give you all its price details."," "),n.createElement(d.Link,{to:"/554-custom-candle-stick-plotly"},n.createElement(p.Z,{size:"sm"},"See code")),n.createElement("br",null),n.createElement("div",{className:"mx-auto"},n.createElement("iframe",{src:"/interactiveCharts/candlestick-plotly-custom-2.html",title:"candlestick chart with Python and Plotly",style:{border:"none",width:"900px",height:"500px"}})),n.createElement("br",null),n.createElement("p",null,"Building a candlestick chart with Plotly is made easy thanks to its"," ",n.createElement("code",null,"go.Candlestick()")," function. It takes as input a"," ",n.createElement("code",null,"fig")," object that can be customized with a"," ",n.createElement("code",null,"layout")," object."),n.createElement("p",null,"Check the example below to understand how to build it from your dataset:"),n.createElement(o.Z,null,n.createElement(m.Z,{imgName:"553-intro-candle-stick-plotly",caption:"How to make a candlestick chart with Plotly",linkTo:"/553-intro-candle-stick-plotly"}),n.createElement(m.Z,{imgName:"554-custom-candle-stick-plotly",caption:"How to customize a candlestick chart with Plotly",linkTo:"/554-custom-candle-stick-plotly"}),n.createElement(m.Z,{imgName:"555-candle-stick-with-moving-average-plotly",caption:"How to add one or several moving averages to a candlestick chart",linkTo:"/555-candle-stick-with-moving-average-plotly"}))),n.createElement(g.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(i.Z,null,n.createElement(s.Z,{chartFamily:"evolution"}))),n.createElement(g.Z,null),n.createElement(i.Z,null,n.createElement(r.Z,null)),n.createElement(g.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-candlestick-js-7d882c87b2da52b5ac1f.js.map