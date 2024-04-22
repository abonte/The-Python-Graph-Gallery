"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[9678],{634:function(e,t,a){a.r(t),a.d(t,{Head:function(){return k},default:function(){return v}});var l=a(7294),i=a(429),r=a(2057),n=a(8742),o=a(682),s=a(1190),c=a(3921),h=a(1922);var p=a(4919),m=a(1883);const u=()=>{const e=(0,l.useRef)(null),t=(e=>{const t=()=>({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),{0:a,1:i}=(0,l.useState)(t),r=()=>{i(t())};return(0,l.useEffect)((()=>(window.addEventListener("resize",r),()=>window.removeEventListener("resize",r))),[]),(0,l.useLayoutEffect)((()=>{r()}),[]),a})(e);return l.createElement("div",{ref:e,className:"patchwork-container"},l.createElement(d,{height:400,width:t.width}))},d=e=>{let{width:t,height:a}=e;const i=function(e){const t=[];for(let a=0;a<e;a++){const e=1e3*Math.random(),a=800*Math.random();t.push({x:e,y:a})}return t}(21),r=h.BYU().domain([0,1e3]).range([0,t]),n=h.BYU().domain([0,800]).range([0,a]),{0:s,1:c}=(0,l.useState)(void 0),u=(0,l.useMemo)((()=>{const e=i.map((e=>[r(e.x),n(e.y)]));return h.oc6.from(e)}),[t,a]),d=(0,l.useMemo)((()=>u.voronoi([0,0,t,a])),[i,t,a]),b=i.map(((e,t)=>{const a="img"+t,i=d.renderCell(t),r=p.A[t%p.A.length],n="https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/graph/"+r.img+"?raw=true";return l.createElement("g",{key:a},l.createElement("defs",null,l.createElement("pattern",{id:"img"+t,patternUnits:"objectBoundingBox",width:1,height:1},l.createElement("image",{href:n,x:-100,y:-100,width:400,height:400}))),l.createElement(m.Link,{href:r.link},l.createElement("path",{className:s?"voronoi-cell dimmed":"voronoi-cell",onMouseEnter:()=>c(r),onMouseLeave:()=>c(void 0),d:i,stroke:"#f8f9fa",strokeWidth:7,fill:"url(#"+a+")"})))}));return l.createElement(l.Fragment,null,l.createElement("svg",{width:t,height:a},b),l.createElement(o.Z,null,l.createElement("div",{style:{height:100,display:"flex"}},s&&l.createElement("div",{className:"cell-caption"},l.createElement("p",null,l.createElement("span",{className:"cell-caption-title"},l.createElement("b",null,s.title)),l.createElement("span",{className:"cell-caption-author"},l.createElement("i",null,"by "+s.author))),l.createElement("p",null,l.createElement("span",{className:"cell-caption-description"},s.description)),l.createElement("p",null,l.createElement("span",{className:"cell-caption-click"},l.createElement("i",null,"Click to read code")))))))};var b=a(5005),g=a(4051),w=a(1555),f=a(944),y=a(9389);const E=l.createElement(l.Fragment,null,l.createElement("p",null,"👋 The Python Graph Gallery is a collection of ",l.createElement("b",null,"hundreds of charts")," ","made with ",l.createElement("code",null,"Python"),"."),l.createElement("p",null,"Graphs are dispatched in about 40 sections following the"," ",l.createElement("a",{href:"https://www.data-to-viz.com"},"data-to-viz")," classification. There are also sections dedicated to more general topics like"," ",l.createElement("a",{href:"https://python-graph-gallery.com/matplotlib/",target:"_blank",rel:"noreferrer"},"matplotlib")," ","or"," ",l.createElement("a",{href:"https://python-graph-gallery.com/seaborn/",target:"_blank",rel:"noreferrer"},"seaborn"),"."),l.createElement("p",null,"Each example is accompanied by its corresponding ",l.createElement("b",null,"reproducible code")," ","along with comprehensive ",l.createElement("b",null,"explanations"),". The gallery offers tutorials that cater to beginners to help kickstart their journey, as well as advanced examples that demonstrate the potency of Python in the realm of data visualization."),l.createElement("br",null),l.createElement("p",null,"❤️ Love the project?"),l.createElement("p",null,"You can contribute on"," ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery",target:"_blank",rel:"noreferrer"},"github"),", send me a feedback on"," ",l.createElement("a",{href:"https://twitter.com/R_Graph_Gallery",target:"_blank",rel:"noreferrer"},"twitter")," ","or subscribe to the"," ",l.createElement("a",{href:"https://datavizuniverse.substack.com",target:"_blank",rel:"noreferrer"},"newsletter")," ","to know when new examples are published! 🔥")),k=()=>l.createElement(y.H,{title:"Python Graph Gallery",seoDescription:"The Python Graph Gallery displays hundreds of charts made with Python, always with explanation and reproduciible code"});function v(){return l.createElement(r.Z,{isHome:!0},l.createElement(i.Z,{title:"The Python Graph Gallery",description:E}),l.createElement("div",{className:"greySection"},l.createElement(o.Z,null,l.createElement("br",null),l.createElement("h2",{style:{borderBottom:"none"}},"The biggest list of python chart examples"),l.createElement("p",null,"Within our collection, we cover ",l.createElement("b",null,"every chart type")," imaginable to ensure we fullfil your data visualization needs. To streamline the process of finding your required chart, we meticulously"," ",l.createElement("b",null,"classified")," all the examples under their respective chart types."),l.createElement("p",null,"For each chart type, we kick off with a ",l.createElement("b",null,"foundational tutorial")," ","that introduces its basic structure and utility. After mastering the basics, users can delve into our step-by-step guides on the most elementary ",l.createElement("b",null,"customizations"),", ensuring your chart not only presents data but does so with an individual touch that caters to your specific requirements."),l.createElement("br",null),l.createElement(n.Z,{chartFamily:"distribution"}),l.createElement(n.Z,{chartFamily:"correlation"}),l.createElement(n.Z,{chartFamily:"ranking"}),l.createElement(n.Z,{chartFamily:"partOfAWhole"}),l.createElement(n.Z,{chartFamily:"evolution"}),l.createElement(n.Z,{chartFamily:"map"}),l.createElement(n.Z,{chartFamily:"flow"}),l.createElement(n.Z,{chartFamily:"general"}))),l.createElement(o.Z,null,l.createElement("br",null),l.createElement("h2",{style:{borderBottom:"none"}},"Hunting the most beautiful Python charts"),l.createElement("p",null,"Explore our curated collection of the ",l.createElement("b",null,"finest Python charts"),", handpicked for their superior ",l.createElement("b",null,"design")," and ",l.createElement("b",null,"accuracy"),". Go beyond the defaults with chart examples that are both visually stunning and instructive."),l.createElement("p",null,"Accompanied by in-depth tutorials, this section will please seasoned professionals aspiring to ",l.createElement("b",null,"elevate their craft"),". Featuring the finest charts on the web, we stay ahead of the curve, showcasing the latest tips, tricks, and ",l.createElement("b",null,"advanced techniques")," in data visualization."),l.createElement(m.Link,{href:"/best-python-chart-examples"},l.createElement(b.Z,{size:"sm",style:{borderWidth:1,marginLeft:0}},"Check the best Examples")),l.createElement("br",null),l.createElement("br",null)),l.createElement(u,null),l.createElement(c.Z,null),l.createElement("div",{className:"greySection"},l.createElement(o.Z,null,l.createElement("br",null),l.createElement("h2",{style:{borderBottom:"none"}},"Python Graphing with State-of-the-Art Libraries"),l.createElement("p",null,"The python graph gallery relies on the ",l.createElement("b",null,"latest")," and most"," ",l.createElement("b",null,"powerful")," charting libraries."),l.createElement(g.Z,null,l.createElement(w.Z,{xs:12,md:6},l.createElement("h3",null,l.createElement(f.rS,null),"Matplotlib"),l.createElement("p",null,"The ",l.createElement("b",null,"foundation")," of Python visualization. Offers a wide array of customizable 2D plots and an"," ",l.createElement("b",null,"extensive set of tools")," for creating intricate figures and charts."),l.createElement(m.Link,{href:"/matplotlib"},"Tutorial"),l.createElement("br",null)),l.createElement(w.Z,{xs:12,md:6},l.createElement("h3",null,l.createElement(f._I,null),"Seaborn"),l.createElement("p",null,"Built atop Matplotlib, Seaborn ",l.createElement("b",null,"elevates")," data visualization by providing a higher-level interface and stunning default themes."),l.createElement(m.Link,{href:"/seaborn"},"Tutorial"),l.createElement("br",null)),l.createElement(w.Z,{xs:12,md:6},l.createElement("h3",null,l.createElement(f.JK,null),"Pandas"),l.createElement("p",null,"Beyond its powerful ",l.createElement("b",null,"data manipulation")," capabilities, Pandas offers convenient plotting methods, enabling users to visualize data directly from DataFrame and Series objects."),l.createElement(m.Link,{href:"/pandas"},"Tutorial"),l.createElement("br",null)),l.createElement(w.Z,{xs:12,md:6},l.createElement("h3",null,l.createElement(f.Ne,null),"Plotly"),l.createElement("p",null,"Delivering ",l.createElement("b",null,"interactive")," and browser-based visualizations, Plotly allows users to craft visually captivating charts, bridging the gap between static graphs and"," ",l.createElement("b",null,"web-based interactivity"),"."),l.createElement(m.Link,{href:"/plotly"},"Tutorial"),l.createElement("br",null)),l.createElement(w.Z,{xs:12,md:6},l.createElement("h3",null,l.createElement(f.Id,null),"Plotnine"),l.createElement("p",null,"Plotnine is a Python library for creating statistical visualizations with a simple ",l.createElement("b",null,"grammar of graphics")," ","interface, inspired by"," ",l.createElement("a",{href:"https://r-graph-gallery.com/ggplot2-package.html"},"ggplot2")," ","in R."),l.createElement(m.Link,{href:"/plotnine"},"Tutorial"),l.createElement("br",null))),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null))),l.createElement(c.Z,null),l.createElement(s.Z,null),l.createElement(c.Z,null))}},4919:function(e,t,a){a.d(t,{A:function(){return l}});const l=[{link:"web-map-usa-with-scatter-plot-on-top",title:"Map with scatter plot on top",description:"Path and duration of solar eclipses in the USA, in 2023 and 2024.",img:"web-map-usa-with-scatter-plot-on-top.png",alt:"bubble map",author:"Joseph Barbier"},{link:"web-multiple-maps",title:"Multiple choropleth map",description:"Combine multiple maps about happiness together, with a lollipop plot for the legend.",img:"web-multiple-maps.png",alt:"choropleth map",author:"Joseph Barbier"},{link:"web-dumbell-chart",title:"Dumbell chart",description:"Advanced dumbell chart about wins and losses in the Bundesliga.",img:"web-dumbell-chart.png",alt:"lollipop plot",author:"Cédric Scherer"},{link:"web-heatmap-comparison",title:"Double heatmap for comparison",description:"A double heatmap to compare normalized and non-normalized data about energy consumption in France",img:"web-heatmap-comparison-5.png",alt:"ridgeline plot",author:"Joseph Barbier"},{link:"web-ridgeline-by-text",title:"Ridgeline with quantiles display",description:"A ridgeline plot with quantiles and annotations to visualize the price distribution of rents in San Francisco.",img:"web-ridgeline-by-text.png",alt:"ridgeline plot",author:"Ansgar Wolsing"},{link:"564-publication-ready-table-with-plottable",title:"Polished table with bubbles",description:"Investigating the 10 best and worst countries to live in, with bubble in cells to represent the data. A good way to showcase the plottable library.",img:"564-publication-ready-table-with-plottable.png",alt:"Clean table with plottable",author:"Fortune Uwha"},{link:"web-stacked-charts",title:"Line chart with word cloud",description:"Movie titles in the background of a line chart to visualize average ratings over time.",img:"web-stacked-charts.png",alt:"Clean table with plottable",author:"Joseph Barbier"},{link:"web-stacked-area-charts-on-a-map",title:"Mini stacked areas for US states",description:"This compendium of stacked area charts went viral. Read a translation in python of this work by Enrin, originally written in R.",img:"web-stacked-area-charts-on-a-map.png",alt:"Stacked area charts displayed on a map",author:"Erin"},{link:"web-map-europe-with-color-by-country",title:"Choropleth map with gradient color",description:"A choropleth map with a gradient color scale to visualize the number of people with cancer in European countries.",img:"web-map-europe-with-color-by-country.png",alt:"Choropleth map with gradient color",author:"Joseph Barbier"},{link:"532-customizing-circular-barplot-in-matplotlib",title:"Ordered & Mirrored barplot",description:"A highly customized circular barplot visualizing Star Wars data using Python and Matplotlib. It provides a step-by-step guide from a basic barplot to a fully customized version including fonts, y-axis scaling, annotations and legend.",img:"532-episode1-each-line-anakin.png",alt:"Circular Barplot about star wars",author:"Lisa Hornung"},{link:"web-ordered-mirror-barplot",title:"Ordered & Mirrored barplot",description:"A mirror barplot with individual observations using the Matplotlib library to visualize data about the Erasmus Program in European countries.",img:"web-ordered-mirror-barplot.png",alt:"Ordered mirrored barplot made with matplotlib",author:"Benjamin Nowak"},{link:"web-bubble-plot-with-annotations-and-custom-features",title:"Scatterplot with grouping, highlighting and annotation",description:"A scatter plot with custom annotations and colors, with some markers being circled.",img:"web-bubble-plot-with-annotations-and-custom-features.png",alt:"Polished scatterplot made with Python",author:"Data Wrapper"},{link:"web-histogram-with-annotations",title:"Histogram with clean color scale and annotation",description:"A clean and insightful histogram produced by the french institute of statistics showing the salary distribution in the country.",img:"web-histogram-with-annotations.png",alt:"Clean histogram reproduction in Python",author:"INSEE"},{link:"524-area-chart-over-flexible-baseline",title:"Area over flexible baseline chart",description:"An area over a flexible baseline to show deviations from a reference or baseline made with Python and Matplotlib or Plotly.",img:"524-area-over-flexible-baseline_square.png",alt:"Area over a flexible baseline made with Python and Matplotlib/Plotly",author:"J. Kühn"},{link:"web-circular-barplot-with-matplotlib",title:"Circular Barplot",description:"A circular barchart with several features per group made with Python and Matplotlib",img:"web-circular-barplot-with-matplotlib-square.png",alt:"clean circular barplot made with Python and Matplotlib",author:"T. Stadler"},{link:"web-circular-lollipop-plot-with-matplotlib",title:"Circular Lollipop Plot",description:"A circular lollipop plot with customized layout, great color palette and in circle legend",img:"web-circular-lollipop-plot-with-matplotlib-square.png",alt:"circular lollipop plot made with Python and Matplotlib",author:"C. Scherer"},{link:"web-ggbetweenstats-with-matplotlib",title:"Violin and Boxplot combination",description:"Allows the comparison of several groups with statistical test results on top",img:"web-ggbetweenstats-with-matplotlib-square.png",alt:"Combination of a violin and a boxplot made with Python and Matplotlib",author:"T. Wang"},{link:"web-heatmap-and-radial-barchart-plastics",title:"Circle Heatmap",description:"A heatmap where each cell is filled by a circle with varying size",img:"web-heatmap-and-radial-barchart-plastics-square1.png",alt:"Heatmap with varying circle in cells",author:"M. Siple"},{link:"web-heatmap-and-radial-barchart-plastics",title:"Circular barplot",description:"A circular barplot with small multiples",img:"web-heatmap-and-radial-barchart-plastics-square2.png",alt:"Circular barplot with small multiple",author:"M. Siple"},{link:"web-highlighted-lineplot-with-faceting",title:"Line chart with faceting",description:"Several highlighted lineplots arranged in a multi panel layout to explore the evolution of the water source installation rankings by country",img:"web-highlighted-lineplot-with-faceting-square.png",alt:"multi panel layout with Python line charts",author:"A. Madjid"},{link:"web-scatterplot-with-images-in-circles",title:"Scatterplot with images",description:"A scatter plot with images inside each marker to provide additional context",img:"web-scatterplot-with-images-in-circles.png",alt:"Scatterplot with images in python",author:"Tanya Shapiro"},{link:"web-horizontal-barplot-with-labels-the-economist",title:"Horizontal Barplot",description:"A reproduction of an horizontal barplot made by The Economist to showcase the power of Python for dataviz",img:"web-horizontal-barplot-with-labels-the-economist-square.png",alt:"Horizonal barplot with the Economist's style",author:"The Economist"},{link:"web-lemurs-parallel-chart",title:"Parallel chart",description:"A parallel coordinate chart to explore the maximum ages recorded for different species of lemurs with Python and Matplotlib.",img:"web-lemurs-parallel-chart-square.png",alt:"Parallel chart made with Python",author:"G. Karamanis"},{link:"web-line-chart-with-labels-at-line-end",title:"Inline labels",description:"Good looking line chart with inline labels at the end of each line",img:"web-line-chart-with-labels-at-line-end-square.png",alt:"Line chart with inline labels",author:"C. Scherer"},{link:"web-lineplots-and-area-chart-the-economist",title:"Line chart from the Economist",description:"Mimicking the style of the Economist to get a clean line chart",img:"web-lineplots-and-area-chart-the-economist-square1.png",alt:"Python line chart with style of the Economist",author:"The Economist"},{link:"web-lineplots-and-area-chart-the-economist",title:"Area chart from the Economist",description:"Mimicking the style of the Economist to get a clean area chart",img:"web-lineplots-and-area-chart-the-economist-square2.png",alt:"Python area chart with style of the Economist",author:"The Economist"},{link:"web-lollipop-plot-with-python-mario-kart-64-world-records",title:"Lollipop chart",description:"A highly customized lollipop chart showing world records for the Mario Kart 64 racing game on the Nintendo 64",img:"web-lollipop-plot-with-python-mario-kart-64-world-records-square.png",alt:"Lollipop Chart made with Python and matplotlib",author:"C. Scherer"},{link:"web-multiple-lines-and-panels",title:"Line chart with small multiple",description:"A line chart with several groups per panel on a small multiple layout. With a beautiful color palette.",img:"web-multiple-lines-and-panels-square.png",alt:"Line chart with several groups per panel on a small multiple layout",author:"O. Medina"},{link:"web-radar-chart-with-matplotlib",title:"Radar chart with matplotlib",description:"A highly customized radar chart with custom annotations and labels to explore the palmerpenguins dataset made with Python and Matplotlib.",img:"web-radar-chart-with-matplotlib-square.png",alt:"Radar chart with Matplotlib",author:"T. Wang"},{link:"web-scatterplot-astronaut",title:"Astronaut Scatterplot",description:"A chart made of a scatterplot with variable color, shape, and opacity, and several annotations to explore the relationship between the characteristics of astronauts and space missions",img:"web-scatterplot-astronaut-square.png",alt:"Scatterplot with variable color in Python",author:"C. Thompson"},{link:"web-scatterplot-text-annotation-and-regression-matplotlib",title:"Scatterplot with regression fit",description:"A custom scatterplot with an overlayed regression fit and auto-positioned labels to explore the relationship between the Corruption Perceptions Index and Human Development Index",img:"web-scatterplot-text-annotation-and-regression-matplotlib-square.png",alt:"Scatterplot with regression fit",author:"C. O. Wilke"},{link:"web-stacked-line-chart-with-labels",title:"Stacked barchart",description:"A clean stacked barplot with nice color palette, some very clean inline labels, a powerful title and slick footer caption with logos.",img:"web-stacked-line-chart-with-labels-square.png",alt:"Clean stacked barplot",author:"G. Fontana"},{link:"web-streamchart-with-matplotlib",title:"X-men Streamchart",description:"A streamchart to explore the appearances of the most popular characters in Chris Claremont's X-Men comics with Python",img:"web-streamchart-with-matplotlib.png",alt:"Streamchart made in Python",author:"C. Scherer"},{link:"web-text-repel-with-matplotlib",title:"Scatterplot with text repel",description:"A custom scatterplot with auto-positioned labels to explore the palmerpenguins dataset made with Python and Matplotlib",img:"web-text-repel-with-matplotlib-square.png",alt:"Scatterplot with smart labels",author:"T. Wang"},{link:"web-time-series-and-facetting-with-matplotlib",title:"Timeseries and faceting",description:"Multiple lineplots with filled areas with a customized layout to explore the evolution of animal rescues across different boroughs in London",img:"web-time-series-and-facetting-with-matplotlib-square.png",alt:"Timeseries chart with filled areas and faceting",author:"G. Karamanis"},{link:"web-polar-chart",title:"Polar bar chart",description:"A polar bar chart showing the number of spanish speakers per country",img:"web-polar-chart.png",alt:"Polar barchart with Python",author:"nyx-it-up"},{link:"heatmap-for-timeseries-matplotlib",title:"Hourly heatmap",description:"A very clean heatmap used as a timeseries",img:"heatmap-for-timeseries-matplotlib-square.png",alt:"A very clean heatmap used as a timeseries",author:"J. MacKintosh"},{link:"web-line-chart-small-multiple",title:"Line chart & small multiple",description:"Small multiple is a dataviz technique allowing to study several groups on the same figure. Repeating all groups but faded out adds some useful context to each section.",img:"web-line-chart-small-multiple-square.png",alt:"Line chart with small multiple and all groups faded out",author:"G. Fontana"},{link:"web-barplot-with-annotations-and-arrows",title:"Barplot with annotations and arrows",description:"A barplot with annotations and arrows to highlight the most important features of the data",img:"web-barplot-with-annotations-and-arrows-square.png",alt:"Line chart with small multiple and all groups faded out",author:"J. Barbier"}]}}]);
//# sourceMappingURL=component---src-pages-index-js-4fa9474f5878ecd1d71b.js.map