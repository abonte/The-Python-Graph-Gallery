"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[9184],{7128:function(t,e,a){a.d(e,{Z:function(){return o}});var i=a(7294),l=a(1883),r=a(8032);const n=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(t){let{imgName:e,caption:a}=t;if(n.includes(e))return i.createElement("p",null,"TODO");const o=(0,l.useStaticQuery)("2757772085").allFile.edges.find((t=>t.node.name.includes(e)));return o?i.createElement(i.Fragment,null,i.createElement("div",{className:"chartImageContainer"},i.createElement(r.G,{image:o.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&i.createElement("div",{className:"chartImageOverlay"},i.createElement("div",{className:"chartImageOverlayText"},i.createElement("p",null,a))))):null}},9389:function(t,e,a){a.d(e,{H:function(){return l}});var i=a(7294);const l=t=>{let{title:e,seoDescription:a,keywords:l}=t;return i.createElement(i.Fragment,null,i.createElement("title",null,e),i.createElement("html",{lang:"en"}),i.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),i.createElement("meta",{name:"author",content:"Yan Holtz"}),i.createElement("meta",{name:"keywords",content:l||"python, chart, graph, code, viz, dataviz"}),i.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),i.createElement("meta",{property:"og:title",content:e+" | The Python Graph Gallery"}),i.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),i.createElement("meta",{property:"og:description",content:a}),i.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.createElement("meta",{name:"twitter:site",content:"@R_Graph_Gallery"}))}},429:function(t,e,a){a.d(e,{Z:function(){return h}});var i=a(7294),l=a(5005),r=a(1883),n=a(8447),o=a(5584),s=a(682),c=a(5128);function h(t){let{title:e,description:a,chartType:c}=t;const h=n.c.filter((t=>t.id===c))[0];return i.createElement(s.Z,null,i.createElement("div",{className:"titleAndDescription"},i.createElement("div",{className:"titleRow"},i.createElement("h1",null,e),c&&i.createElement(p,{chartType:c})),i.createElement("hr",{className:"smallHr"}),"string"==typeof a?i.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):i.createElement("div",{className:"description"},a),c&&i.createElement("div",{style:{marginTop:"10px"}},i.createElement(r.Link,{to:(0,o.y)(h.pythonURL)},i.createElement(l.Z,{size:"sm"},h.label+" section")),i.createElement("a",{href:h.dataToVizURL},i.createElement(l.Z,{size:"sm"},"About this chart")))),i.createElement("div",{className:"raptive-video-player",style:{minHeight:300}}))}const p=t=>{let{chartType:e}=t;const a=n.c.filter((t=>t.id===e))[0],l=(0,o.y)(a.pythonURL);return i.createElement("div",{style:{width:"80px",marginLeft:40}},i.createElement(r.Link,{to:l},i.createElement(c.Z,{chartType:a.logo})))}},2455:function(t,e,a){a.r(e),a.d(e,{Head:function(){return w},default:function(){return y}});var i=a(7294),l=a(429),r=a(2057),n=a(682),o=a(1190),s=a(4051),c=a(1883),h=a(1555),p=a(5005),m=a(7128),d=a(3921),u=a(4919),b=a(9389);const g=i.createElement(i.Fragment,null,i.createElement("p",null,"The ",i.createElement("a",{href:"/"},"Python Graph Gallery")," has always been a reservoir of inspiration, providing ",i.createElement("b",null,"hundreds of foundational chart examples")," for newcomers and seasoned developers alike."," "),i.createElement("p",null,"While our vast collection offers a stepping stone into the world of data visualization, ",i.createElement("b",null,"the following list stands out"),"."),i.createElement("p",null,"Every chart here represents the pinnacle of craftsmanship, exhibiting the depths to which ",i.createElement(c.Link,{href:"/matplotlib"},"matplotlib")," can be customized. These are not just graphs; they are polished masterpieces, ready for publication."),i.createElement("p",null,"While I'm deeply indebted to the ",i.createElement("b",null,"original authors")," for their stellar work, it's worth noting that many of these visualizations were first conceived in ",i.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),", a testament to its rich visualization ecosystem. In an endeavor to"," ",i.createElement("b",null,"bring the best to our Python community"),", I've translated these gems to further showcase the versatility and power of matplotlib."),i.createElement("p",null,"Dive in and get inspired! 😍")),w=()=>i.createElement(b.H,{title:"Best Python Chart Examples",seoDescription:"A selection of the best graphs made with python, coming with in-depth tutorials and reproducible code."});function y(){return i.createElement(r.Z,null,i.createElement(l.Z,{title:"Best Python Chart Examples",description:g}),i.createElement(n.Z,null,u.A.map(((t,e)=>i.createElement("div",{key:e},i.createElement(s.Z,null,i.createElement(h.Z,{xs:4,md:6},i.createElement(c.Link,{href:"/"+t.link},i.createElement(m.Z,{imgName:t.img.replace(".png","")}))),i.createElement(h.Z,{xs:4,md:6},i.createElement("h2",{style:{lineHeight:"34px",fontSize:22,marginTop:40,paddingBottom:10,borderBottom:"none"}},t.title),i.createElement("p",null,t.description),i.createElement("p",{style:{fontSize:16,color:"grey"}},i.createElement("i",null,i.createElement("span",null,"by "),t.author)," "),i.createElement(c.Link,{href:"/"+t.link},i.createElement(p.Z,{size:"sm"},"Read tutorial")))),i.createElement(d.Z,null)))),i.createElement("p",null,"Note that I am always ",i.createElement("b",null,"hunting for the best charts")," made with Python! If you have any examples in mind that should be showcased here, please ",i.createElement("b",null,"let me know")," 🙏.")),i.createElement(d.Z,null),i.createElement(n.Z,null,i.createElement(o.Z,null)),i.createElement(d.Z,null))}},4919:function(t,e,a){a.d(e,{A:function(){return i}});const i=[{link:"web-ridgeline-by-text",title:"Ridgeline with quantiles display",description:"A ridgeline plot with quantiles and annotations to visualize the price distribution of rents in San Francisco.",img:"web-ridgeline-by-text.png",alt:"ridgeline plot",author:"Ansgar Wolsing"},{link:"564-publication-ready-table-with-plottable",title:"Polished table with bubbles",description:"Investigating the 10 best and worst countries to live in, with bubble in cells to represent the data. A good way to showcase the plottable library.",img:"564-publication-ready-table-with-plottable.png",alt:"Clean table with plottable",author:"Fortune Uwha"},{link:"web-stacked-area-charts-on-a-map",title:"Mini stacked areas for US states",description:"This compendium of stacked area charts went viral. Read a translation in python of this work by Enrin, originally written in R.",img:"web-stacked-area-charts-on-a-map.png",alt:"Stacked area charts displayed on a map",author:"Erin"},{link:"web-map-europe-with-color-by-country",title:"Choropleth map with gradient color",description:"A choropleth map with a gradient color scale to visualize the number of people with cancer in European countries.",img:"web-map-europe-with-color-by-country.png",alt:"Choropleth map with gradient color",author:"Joseph Barbier"},{link:"532-customizing-circular-barplot-in-matplotlib",title:"Ordered & Mirrored barplot",description:"A highly customized circular barplot visualizing Star Wars data using Python and Matplotlib. It provides a step-by-step guide from a basic barplot to a fully customized version including fonts, y-axis scaling, annotations and legend.",img:"532-episode1-each-line-anakin.png",alt:"Circular Barplot about star wars",author:"Lisa Hornung"},{link:"web-ordered-mirror-barplot",title:"Ordered & Mirrored barplot",description:"A mirror barplot with individual observations using the Matplotlib library to visualize data about the Erasmus Program in European countries.",img:"web-ordered-mirror-barplot.png",alt:"Ordered mirrored barplot made with matplotlib",author:"Benjamin Nowak"},{link:"web-bubble-plot-with-annotations-and-custom-features",title:"Scatterplot with grouping, highlighting and annotation",description:"A scatter plot with custom annotations and colors, with some markers being circled.",img:"web-bubble-plot-with-annotations-and-custom-features.png",alt:"Polished scatterplot made with Python",author:"Data Wrapper"},{link:"web-histogram-with-annotations",title:"Histogram with clean color scale and annotation",description:"A clean and insightful histogram produced by the french institute of statistics showing the salary distribution in the country.",img:"web-histogram-with-annotations.png",alt:"Clean histogram reproduction in Python",author:"INSEE"},{link:"524-area-chart-over-flexible-baseline",title:"Area over flexible baseline chart",description:"An area over a flexible baseline to show deviations from a reference or baseline made with Python and Matplotlib or Plotly.",img:"524-area-over-flexible-baseline_square.png",alt:"Area over a flexible baseline made with Python and Matplotlib/Plotly",author:"J. Kühn"},{link:"web-circular-barplot-with-matplotlib",title:"Circular Barplot",description:"A circular barchart with several features per group made with Python and Matplotlib",img:"web-circular-barplot-with-matplotlib-square.png",alt:"clean circular barplot made with Python and Matplotlib",author:"T. Stadler"},{link:"web-circular-lollipop-plot-with-matplotlib",title:"Circular Lollipop Plot",description:"A circular lollipop plot with customized layout, great color palette and in circle legend",img:"web-circular-lollipop-plot-with-matplotlib-square.png",alt:"circular lollipop plot made with Python and Matplotlib",author:"C. Scherer"},{link:"web-ggbetweenstats-with-matplotlib",title:"Violin and Boxplot combination",description:"Allows the comparison of several groups with statistical test results on top",img:"web-ggbetweenstats-with-matplotlib-square.png",alt:"Combination of a violin and a boxplot made with Python and Matplotlib",author:"T. Wang"},{link:"web-heatmap-and-radial-barchart-plastics",title:"Circle Heatmap",description:"A heatmap where each cell is filled by a circle with varying size",img:"web-heatmap-and-radial-barchart-plastics-square1.png",alt:"Heatmap with varying circle in cells",author:"M. Siple"},{link:"web-heatmap-and-radial-barchart-plastics",title:"Circular barplot",description:"A circular barplot with small multiples",img:"web-heatmap-and-radial-barchart-plastics-square2.png",alt:"Circular barplot with small multiple",author:"M. Siple"},{link:"web-highlighted-lineplot-with-faceting",title:"Line chart with faceting",description:"Several highlighted lineplots arranged in a multi panel layout to explore the evolution of the water source installation rankings by country",img:"web-highlighted-lineplot-with-faceting-square.png",alt:"multi panel layout with Python line charts",author:"A. Madjid"},{link:"web-scatterplot-with-images-in-circles",title:"Scatterplot with images",description:"A scatter plot with images inside each marker to provide additional context",img:"web-scatterplot-with-images-in-circles.png",alt:"Scatterplot with images in python",author:"Tanya Shapiro"},{link:"web-horizontal-barplot-with-labels-the-economist",title:"Horizontal Barplot",description:"A reproduction of an horizontal barplot made by The Economist to showcase the power of Python for dataviz",img:"web-horizontal-barplot-with-labels-the-economist-square.png",alt:"Horizonal barplot with the Economist's style",author:"The Economist"},{link:"web-lemurs-parallel-chart",title:"Parallel chart",description:"A parallel coordinate chart to explore the maximum ages recorded for different species of lemurs with Python and Matplotlib.",img:"web-lemurs-parallel-chart-square.png",alt:"Parallel chart made with Python",author:"G. Karamanis"},{link:"web-line-chart-with-labels-at-line-end",title:"Inline labels",description:"Good looking line chart with inline labels at the end of each line",img:"web-line-chart-with-labels-at-line-end-square.png",alt:"Line chart with inline labels",author:"C. Scherer"},{link:"web-lineplots-and-area-chart-the-economist",title:"Line chart from the Economist",description:"Mimicking the style of the Economist to get a clean line chart",img:"web-lineplots-and-area-chart-the-economist-square1.png",alt:"Python line chart with style of the Economist",author:"The Economist"},{link:"web-lineplots-and-area-chart-the-economist",title:"Area chart from the Economist",description:"Mimicking the style of the Economist to get a clean area chart",img:"web-lineplots-and-area-chart-the-economist-square2.png",alt:"Python area chart with style of the Economist",author:"The Economist"},{link:"web-lollipop-plot-with-python-mario-kart-64-world-records",title:"Lollipop chart",description:"A highly customized lollipop chart showing world records for the Mario Kart 64 racing game on the Nintendo 64",img:"web-lollipop-plot-with-python-mario-kart-64-world-records-square.png",alt:"Lollipop Chart made with Python and matplotlib",author:"C. Scherer"},{link:"web-multiple-lines-and-panels",title:"Line chart with small multiple",description:"A line chart with several groups per panel on a small multiple layout. With a beautiful color palette.",img:"web-multiple-lines-and-panels-square.png",alt:"Line chart with several groups per panel on a small multiple layout",author:"O. Medina"},{link:"web-radar-chart-with-matplotlib",title:"Radar chart with matplotlib",description:"A highly customized radar chart with custom annotations and labels to explore the palmerpenguins dataset made with Python and Matplotlib.",img:"web-radar-chart-with-matplotlib-square.png",alt:"Radar chart with Matplotlib",author:"T. Wang"},{link:"web-scatterplot-astronaut",title:"Astronaut Scatterplot",description:"A chart made of a scatterplot with variable color, shape, and opacity, and several annotations to explore the relationship between the characteristics of astronauts and space missions",img:"web-scatterplot-astronaut-square.png",alt:"Scatterplot with variable color in Python",author:"C. Thompson"},{link:"web-scatterplot-text-annotation-and-regression-matplotlib",title:"Scatterplot with regression fit",description:"A custom scatterplot with an overlayed regression fit and auto-positioned labels to explore the relationship between the Corruption Perceptions Index and Human Development Index",img:"web-scatterplot-text-annotation-and-regression-matplotlib-square.png",alt:"Scatterplot with regression fit",author:"C. O. Wilke"},{link:"web-stacked-line-chart-with-labels",title:"Stacked barchart",description:"A clean stacked barplot with nice color palette, some very clean inline labels, a powerful title and slick footer caption with logos.",img:"web-stacked-line-chart-with-labels-square.png",alt:"Clean stacked barplot",author:"G. Fontana"},{link:"web-streamchart-with-matplotlib",title:"X-men Streamchart",description:"A streamchart to explore the appearances of the most popular characters in Chris Claremont's X-Men comics with Python",img:"web-streamchart-with-matplotlib.png",alt:"Streamchart made in Python",author:"C. Scherer"},{link:"web-text-repel-with-matplotlib",title:"Scatterplot with text repel",description:"A custom scatterplot with auto-positioned labels to explore the palmerpenguins dataset made with Python and Matplotlib",img:"web-text-repel-with-matplotlib-square.png",alt:"Scatterplot with smart labels",author:"T. Wang"},{link:"web-time-series-and-facetting-with-matplotlib",title:"Timeseries and faceting",description:"Multiple lineplots with filled areas with a customized layout to explore the evolution of animal rescues across different boroughs in London",img:"web-time-series-and-facetting-with-matplotlib-square.png",alt:"Timeseries chart with filled areas and faceting",author:"G. Karamanis"},{link:"web-polar-chart",title:"Polar bar chart",description:"A polar bar chart showing the number of spanish speakers per country",img:"web-polar-chart.png",alt:"Polar barchart with Python",author:"nyx-it-up"},{link:"heatmap-for-timeseries-matplotlib",title:"Hourly heatmap",description:"A very clean heatmap used as a timeseries",img:"heatmap-for-timeseries-matplotlib-square.png",alt:"A very clean heatmap used as a timeseries",author:"J. MacKintosh"},{link:"web-line-chart-small-multiple",title:"Line chart & small multiple",description:"Small multiple is a dataviz technique allowing to study several groups on the same figure. Repeating all groups but faded out adds some useful context to each section.",img:"web-line-chart-small-multiple-square.png",alt:"Line chart with small multiple and all groups faded out",author:"G. Fontana"},{link:"web-barplot-with-annotations-and-arrows",title:"Barplot with annotations and arrows",description:"A barplot with annotations and arrows to highlight the most important features of the data",img:"web-barplot-with-annotations-and-arrows-square.png",alt:"Line chart with small multiple and all groups faded out",author:"J. Barbier"}]},1555:function(t,e,a){var i=a(4184),l=a.n(i),r=a(7294),n=a(6792),o=a(5893);const s=r.forwardRef(((t,e)=>{const[{className:a,...i},{as:r="div",bsPrefix:s,spans:c}]=function({as:t,bsPrefix:e,className:a,...i}){e=(0,n.vE)(e,"col");const r=(0,n.pi)(),o=(0,n.zG)(),s=[],c=[];return r.forEach((t=>{const a=i[t];let l,r,n;delete i[t],"object"==typeof a&&null!=a?({span:l,offset:r,order:n}=a):l=a;const h=t!==o?`-${t}`:"";l&&s.push(!0===l?`${e}${h}`:`${e}${h}-${l}`),null!=n&&c.push(`order${h}-${n}`),null!=r&&c.push(`offset${h}-${r}`)})),[{...i,className:l()(a,...s,...c)},{as:t,bsPrefix:e,spans:s}]}(t);return(0,o.jsx)(r,{...i,ref:e,className:l()(a,!c.length&&s)})}));s.displayName="Col",e.Z=s},4051:function(t,e,a){var i=a(4184),l=a.n(i),r=a(7294),n=a(6792),o=a(5893);const s=r.forwardRef((({bsPrefix:t,className:e,as:a="div",...i},r)=>{const s=(0,n.vE)(t,"row"),c=(0,n.pi)(),h=(0,n.zG)(),p=`${s}-cols`,m=[];return c.forEach((t=>{const e=i[t];let a;delete i[t],null!=e&&"object"==typeof e?({cols:a}=e):a=e;const l=t!==h?`-${t}`:"";null!=a&&m.push(`${p}${l}-${a}`)})),(0,o.jsx)(a,{ref:r,...i,className:l()(e,s,...m)})}));s.displayName="Row",e.Z=s}}]);
//# sourceMappingURL=component---src-pages-best-python-chart-examples-js-9418e5742011c9dd026f.js.map