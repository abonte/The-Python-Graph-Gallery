"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[8486],{7128:function(e,t,l){l.d(t,{Z:function(){return o}});var a=l(7294),n=l(1883),r=l(8032);const i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:l}=e;if(i.includes(t))return a.createElement("p",null,"TODO");const o=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(r.G,{image:o.node.childImageSharp.gatsbyImageData,alt:l,className:"chartImageImg"}),l&&a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,l))))):null}},4596:function(e,t,l){l.d(t,{Z:function(){return o}});var a=l(7294),n=l(7128),r=l(1555),i=l(1883);function o(e){let{imgName:t,caption:l,linkTo:o}=e;return a.createElement(r.Z,{xs:12,md:4},a.createElement(i.Link,{to:o},a.createElement(n.Z,{imgName:t,caption:l})))}},9389:function(e,t,l){l.d(t,{H:function(){return i}});var a=l(7294),n=l(1883);function r(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const i=e=>{let{title:t,seoDescription:l,keywords:i}=e;return a.createElement(a.Fragment,null,a.createElement("title",null,t),a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),a.createElement("meta",{name:"description",content:l||"How to build a chart with Python"}),a.createElement("meta",{name:"author",content:"Yan Holtz"}),a.createElement("meta",{name:"keywords",content:i||"python, chart, graph, code, viz, dataviz"}),a.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),a.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),a.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),a.createElement("meta",{property:"og:description",content:l}),a.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),a.createElement(n.Script,{id:"adthrive",strategy:"post-hydrate",src:r()}))}},3688:function(e,t,l){l.r(t),l.d(t,{Head:function(){return b},default:function(){return v}});var a=l(7294),n=l(429),r=l(1433),i=l(682),o=l(1190),c=l(4051),m=l(8742),s=l(1883),h=l(4125),p=l(1555),u=l(2737),d=l(3921),y=l(5005),E=l(4596),g=l(9389);const f=a.createElement(a.Fragment,null,a.createElement("p",null,a.createElement("code",null,"Plotly")," is a library for making ",a.createElement("b",null,"interactive")," graphs with python. On a plotly chart it is possible to have ",a.createElement("b",null,"tooltips")," for interesting markers, ",a.createElement("b",null,"zoom")," on interesting location, ",a.createElement("b",null,"save")," the chart as png and more 🔥."),a.createElement("p",null,"Plotly is based on the famous"," ",a.createElement("a",{href:"https://www.d3-graph-gallery.com"},"d3.js")," javascript library, and provides a python wrapper allowing to build stunning interactive charts directly from ",a.createElement("code",null,"Python"),"."),a.createElement("p",null,"Most of the gallery sections provide ",a.createElement("code",null,"plotly")," examples. This post provides a few ",a.createElement("b",null,"general tips")," relative to this mind blowing library.")),b=()=>a.createElement(g.H,{title:"Plotly",seoDescription:"An overview of the plotly python library for interactive data visualization"});function v(){return a.createElement(r.Z,{title:"Plotly"},a.createElement(n.Z,{title:"Interactive charts with Plotly",description:f,chartType:"plotly"}),a.createElement(i.Z,null,a.createElement("h2",{id:"Quick"},"⏱ Quick start"),a.createElement("p",null,"Before using plotly you need to install it. This can easily be done with ",a.createElement("code",null,"pip"),":"),a.createElement(u.Z,null,Z),a.createElement("br",null),a.createElement("p",null,"Now, try to use the following code in a Jupyter Notebook. You will get an interactive graph on which you can ",a.createElement("b",null,"zoom"),", hover points to show a ",a.createElement("b",null,"tooltip"),", ",a.createElement("b",null,"save as png")," and more."),a.createElement("iframe",{src:"/interactiveCharts/plotly-add-annotation-0.html",title:"scatterplot with plotly",style:{border:"none",width:"100%",height:"600px"}}),a.createElement(u.Z,null,w)),a.createElement(d.Z,null),a.createElement(i.Z,null,a.createElement("h2",{id:"APIs"},a.createElement("code",null,"</>")," Two distinct APIs"),a.createElement("p",null,"There are 2 main ways to use the ",a.createElement("code",null,"plotly")," python library:"," ",a.createElement("b",null,"plotly express")," and ",a.createElement("b",null,"plotly graph objects"),"."),a.createElement("h3",null,"1️⃣ Quick chart with plotly express 🏃🏿‍♀️"),a.createElement("p",null,"This is the user-friendly, ",a.createElement("b",null,"high-level API"),", that taps into Plotly's graphical capabilities to facilitate the swift creation graphs. Its streamlined approach empowers users to generate a variety of chart types with ",a.createElement("b",null,"minimal code"),"."),a.createElement(c.Z,{className:"align-items-center"},a.createElement(p.Z,{md:6},a.createElement("p",null,"This abstraction shields users from intricate technical details, making it an ideal choice for those seeking an ",a.createElement("b",null,"efficient")," ","visualization solution."),a.createElement("p",null,"In the following code, ",a.createElement("b",null,"just 2 lines of code")," are needed to create an interactive bar chart, using the function"," ",a.createElement("code",null,"px.bar()"),".")),a.createElement(p.Z,{md:6},a.createElement("div",{className:"mx-auto"},a.createElement("iframe",{src:"/interactiveCharts/barplot-plotly-express.html",title:"barplot with plotly",style:{border:"none",width:"100%",height:"400px"}})))),a.createElement(u.Z,null,P),a.createElement("br",null),a.createElement("h3",null,"2️⃣ Fine control with Plotly Graph Objects 🎨"),a.createElement("p",null,"In contrast, the Plotly Graph Objects API presents a"," ",a.createElement("b",null,"finer level of control")," and customization within the Plotly framework."),a.createElement(c.Z,{className:"align-items-center"},a.createElement(p.Z,{md:6},a.createElement("p",null,a.createElement("b",null,"A bit more code")," is required to build the same chart compared to plotly express. But we believe that this API is still very straightforward to use and offers more flexibility.")),a.createElement(p.Z,{md:6},a.createElement("div",{className:"mx-auto"},a.createElement("iframe",{src:"/interactiveCharts/barplot-plotly-go.html",title:"barplot with plotly",style:{border:"none",width:"100%",height:"400px"}})))),a.createElement("p",null,"Compared to the Express API, we need to initiate a figure object (with a slightly more complex syntax) using the function"," ",a.createElement("code",null,"go.Figure")," and then change the layout of this figure using the function ",a.createElement("code",null,"fig.update_layout()"),"."),a.createElement(u.Z,null,T),a.createElement("br",null),a.createElement("br",null),a.createElement("p",null,"Interested in knowing more? You can check the"," ",a.createElement(s.Link,{href:"/520-the-two-plotly-APIs"},"full post")," on the topic!"),a.createElement(s.Link,{href:"/520-the-two-plotly-APIs"},a.createElement(y.Z,null,"Plotly APIs post"))),a.createElement(d.Z,null),a.createElement(i.Z,null,a.createElement("h2",{id:"Save"},"Saving a plotly chart"),a.createElement("p",null,"Once you've created a ",a.createElement("code",null,"plotly")," chart you probably want to save it as a standalone ",a.createElement("code",null,"html")," file in order to share it or embed it in another webpage."),a.createElement("p",null,"This is the code allowing to save a ",a.createElement("code",null,"plotly")," chart. You can read the full process"," ",a.createElement(s.Link,{to:"/parallel-coordinate-plot-plotly"},"here")," for instance."),a.createElement(u.Z,null,k)),a.createElement(d.Z,null),a.createElement(i.Z,null,a.createElement("h2",{id:"Embed"},"Embeding a plotly chart"),a.createElement("p",null,"Once the chart has been saved, you can embed it in a html document using:"),a.createElement(u.Z,null,x)),a.createElement(d.Z,null),a.createElement(i.Z,null,a.createElement("h2",{id:"Embed"},"Title customization"),a.createElement("p",null,"The ",a.createElement("code",null,"fig.update_layout()")," function provides everything you need to customize the ",a.createElement("b",null,"title")," of your chart."),a.createElement("p",null,"Read the plotly"," ",a.createElement(s.Link,{href:"/522-plotly-customize-title"},"title tutorial")," to understand how the change the ",a.createElement("b",null,"font"),", ",a.createElement("b",null,"color"),", ",a.createElement("b",null,"size")," ","and ",a.createElement("b",null,"alignment")," of your title."),a.createElement(c.Z,null,a.createElement(E.Z,{imgName:"522-plotly-customize-title",caption:"How to add annotations on a plotly chart",linkTo:"/522-plotly-customize-title"}))),a.createElement(d.Z,null),a.createElement(i.Z,null,a.createElement("h2",{id:"Annotation"},"Annotation"),a.createElement("p",null,a.createElement("b",null,"Annotation")," is a key part of a great data visualization."),a.createElement("p",null,"Fortunately, plotly provides a ",a.createElement("code",null,"add_annotation()")," function allowing to add some powerful, custom annotation on charts."),a.createElement("p",null,"Please read the dedicated"," ",a.createElement(s.Link,{href:"/523-plotly-add-annotation"},"annotation tutorial")," to learn how to use it."),a.createElement(c.Z,null,a.createElement(E.Z,{imgName:"523-plotly-add-annotation",caption:"Add an arrow with text to annotate a scatterplot",linkTo:"/523-plotly-add-annotation"}),a.createElement(E.Z,{imgName:"523-plotly-add-annotation-2",caption:"Learn how to add a line, a square, emojis, links and more",linkTo:"/523-plotly-add-annotation"}))),a.createElement(d.Z,null),a.createElement(i.Z,null,a.createElement("h2",{id:"Gallery"},a.createElement(h.Ne,null),"Plotly graph gallery"),a.createElement("p",null,"Here is a glimpse of the plotly charts showcased in the gallery:"),a.createElement(c.Z,null,a.createElement(E.Z,{imgName:"511-interactive-scatterplot-with-plotly-1",caption:"Most basic scatterplot with plotly",linkTo:"/511-interactive-scatterplot-with-plotly"}),a.createElement(E.Z,{imgName:"511-interactive-scatterplot-with-plotly-2",caption:"Plotly scatterplot with several levels of grouping",linkTo:"/511-interactive-scatterplot-with-plotly"}),a.createElement(E.Z,{imgName:"511-interactive-scatterplot-with-plotly-3",caption:"Plotly scatterplot with a trend line",linkTo:"/511-interactive-scatterplot-with-plotly"}),a.createElement(E.Z,{imgName:"514-interactive-line-chart-plotly-1",caption:"Basic interactive line chart with plotly",linkTo:"/514-interactive-line-chart-plotly"}),a.createElement(E.Z,{imgName:"514-interactive-line-chart-plotly-2",caption:"How to customize the appearance of a plotly line chart",linkTo:"/514-interactive-line-chart-plotly"}),a.createElement(E.Z,{imgName:"514-interactive-line-chart-plotly-3",caption:"Interactive line chart with multiple groups",linkTo:"/514-interactive-line-chart-plotly"}),a.createElement(E.Z,{imgName:"parallel-coordinate-plot-plotly",caption:"Interactive parallel chart with plotly",linkTo:"/parallel-coordinate-plot-plotly"}),a.createElement(E.Z,{imgName:"ridgeline-graph-plotly",caption:"Interactive ridgeline chart with plotly",linkTo:"/ridgeline-graph-plotly"}),a.createElement(E.Z,{imgName:"sankey-diagram-with-python-and-plotly",caption:"Interactive Sankey diagram with plotly",linkTo:"/sankey-diagram-with-python-and-plotly"}),a.createElement(E.Z,{imgName:"520-interactive-barplot-with-plotly",caption:"Interactive Barplot with plotly",linkTo:"/520-interactive-barplot-with-plotly"}),a.createElement(E.Z,{imgName:"524-area-over-flexible-baseline_square",caption:"Plotly line chart with many customization",linkTo:"/524-area-chart-over-flexible-baseline"})),a.createElement("br",null),a.createElement("p",null,"Above images are ",a.createElement("b",null,"static"),", but all linked blog posts provide the interactive version of the chart. Here is an example with an interactive"," ",a.createElement(s.Link,{href:"/parallel-coordinate-plot-plotly.html"},"parallel coordinate chart"),":"),a.createElement("div",{className:"mx-auto"},a.createElement("iframe",{src:"/interactiveCharts/parallel-coordinate-plot-plotly.html",title:"parallel coordinate chart with plotly",style:{border:"none",width:"800px",height:"500px"}})),a.createElement(s.Link,{to:"/parallel-coordinate-plot-plotly"},a.createElement(y.Z,{size:"sm"},"See code"))),a.createElement(d.Z,null),a.createElement(d.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(i.Z,null,a.createElement(m.Z,{chartFamily:"general"}))),a.createElement(d.Z,null),a.createElement(i.Z,null,a.createElement(o.Z,null)),a.createElement(d.Z,null))}const w="# Load plotly\nimport plotly.graph_objects as go\n\n# Sample data\nx = [1.5, 2.9, 3, 4.2, 5.6]\ny = [2.2, 13.3, 4.4, 55.3, 52.1]\n\n# Initialize a figure\nfig = go.Figure()\n\n# Add the scatter trace\nfig.add_trace(go.Scatter( \n    x=x, # Variable in the x-axis\n    y=y, # Variable in the y-axis\n    mode='markers', # This explicitly states that we want our observations to be represented by points\n))\n\n# Show\nfig.show()\n",Z="pip install plotly",k='fig.write_html("the/path/to/chart-name.html")',x='<iframe\n  src="the/path/to/chart-name.html"\n  width="800"\n  height="600"\n  title="chart name"\n  style="border:none">\n</iframe>',P="# import the plotly express library\nimport plotly.express as px\n\n# Some dummy data\ncategories = ['A', 'B', 'C', 'D', 'E']\nvalues = [15, 22, 18, 12, 28]\n\n# Plot\nfig = px.bar(\n  x=categories, \n  y=values, \n)\n\nfig.show()\n",T="# import the plotly graph objects lib\nimport plotly.graph_objects as go\n\n# Some dummy data\ncategories = ['A', 'B', 'C', 'D', 'E']\nvalues = [15, 22, 18, 12, 28]\n\n# Create a bar chart using the Graph Object API\nfig = go.Figure(data=[go.Bar(x=categories, y=values)])\n\n# Update layout\nfig.update_layout(\n  title=\"Simple Bar Chart\", \n  xaxis_title=\"Categories\", \n  yaxis_title=\"Values\")\n\n\nfig.show()\n"}}]);
//# sourceMappingURL=component---src-pages-plotly-js-dd18cadd93d65786e5f5.js.map