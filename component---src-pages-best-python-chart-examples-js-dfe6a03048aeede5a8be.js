"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[9184],{7128:function(t,e,a){a.d(e,{Z:function(){return o}});var l=a(7294),i=a(1883),r=a(8032);const n=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(t){let{imgName:e,caption:a}=t;if(n.includes(e))return l.createElement("p",null,"TODO");const o=(0,i.useStaticQuery)("2757772085").allFile.edges.find((t=>t.node.name.includes(e)));return o?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(r.G,{image:o.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},9389:function(t,e,a){a.d(e,{H:function(){return i}});var l=a(7294);const i=t=>{let{title:e,seoDescription:a,keywords:i}=t;return l.createElement(l.Fragment,null,l.createElement("title",null,e),l.createElement("html",{lang:"en"}),l.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),l.createElement("meta",{name:"author",content:"Yan Holtz"}),l.createElement("meta",{name:"keywords",content:i||"python, chart, graph, code, viz, dataviz"}),l.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),l.createElement("meta",{property:"og:title",content:e+" | The Python Graph Gallery"}),l.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement("meta",{property:"og:description",content:a}),l.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}))}},429:function(t,e,a){a.d(e,{Z:function(){return h}});var l=a(7294),i=a(5005),r=a(1883),n=a(8447),o=a(5584),s=a(682),c=a(5128);function h(t){let{title:e,description:a,chartType:c}=t;const h=n.c.filter((t=>t.id===c))[0];return l.createElement(s.Z,null,l.createElement("div",{className:"titleAndDescription"},l.createElement("div",{className:"titleRow"},l.createElement("h1",null,e),c&&l.createElement(p,{chartType:c})),l.createElement("hr",{className:"smallHr"}),"string"==typeof a?l.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):l.createElement("div",{className:"description"},a),c&&l.createElement("div",{style:{marginTop:"10px"}},l.createElement(r.Link,{to:(0,o.y)(h.pythonURL)},l.createElement(i.Z,{size:"sm"},h.label+" section")),l.createElement("a",{href:h.dataToVizURL},l.createElement(i.Z,{size:"sm"},"About this chart")))),l.createElement("div",{className:"raptive-video-player",style:{minHeight:300}}))}const p=t=>{let{chartType:e}=t;const a=n.c.filter((t=>t.id===e))[0],i=(0,o.y)(a.pythonURL);return l.createElement("div",{style:{width:"80px",marginLeft:40}},l.createElement(r.Link,{to:i},l.createElement(c.Z,{chartType:a.logo})))}},2455:function(t,e,a){a.r(e),a.d(e,{Head:function(){return w},default:function(){return y}});var l=a(7294),i=a(429),r=a(2057),n=a(682),o=a(1190),s=a(4051),c=a(1883),h=a(1555),p=a(5005),m=a(7128),d=a(3921),u=a(4919),b=a(9389);const g=l.createElement(l.Fragment,null,l.createElement("p",null,"The ",l.createElement("a",{href:"/"},"Python Graph Gallery")," has always been a reservoir of inspiration, providing ",l.createElement("b",null,"hundreds of foundational chart examples")," for newcomers and seasoned developers alike."," "),l.createElement("p",null,"While our vast collection offers a stepping stone into the world of data visualization, ",l.createElement("b",null,"the following list stands out"),"."),l.createElement("p",null,"Every chart here represents the pinnacle of craftsmanship, exhibiting the depths to which ",l.createElement(c.Link,{href:"/matplotlib"},"matplotlib")," can be customized. These are not just graphs; they are polished masterpieces, ready for publication."),l.createElement("p",null,"While I'm deeply indebted to the ",l.createElement("b",null,"original authors")," for their stellar work, it's worth noting that many of these visualizations were first conceived in ",l.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),", a testament to its rich visualization ecosystem. In an endeavor to"," ",l.createElement("b",null,"bring the best to our Python community"),", I've translated these gems to further showcase the versatility and power of matplotlib."),l.createElement("p",null,"Dive in and get inspired! 😍")),w=()=>l.createElement(b.H,{title:"Best Python Chart Examples",seoDescription:"A selection of the best graphs made with python, coming with in-depth tutorials and reproducible code."});function y(){return l.createElement(r.Z,null,l.createElement(i.Z,{title:"Best Python Chart Examples",description:g}),l.createElement(n.Z,null,u.A.map(((t,e)=>l.createElement("div",{key:e},l.createElement(s.Z,null,l.createElement(h.Z,{xs:4,md:6},l.createElement(c.Link,{href:"/"+t.link},l.createElement(m.Z,{imgName:t.img.replace(".png","")}))),l.createElement(h.Z,{xs:4,md:6},l.createElement("h2",{style:{lineHeight:"34px",fontSize:22,marginTop:40,paddingBottom:10,borderBottom:"none"}},t.title),l.createElement("p",null,t.description),l.createElement("p",{style:{fontSize:16,color:"grey"}},l.createElement("i",null,l.createElement("span",null,"by "),t.author)," "),l.createElement(c.Link,{href:"/"+t.link},l.createElement(p.Z,{size:"sm"},"Read tutorial")))),l.createElement(d.Z,null)))),l.createElement("p",null,"Note that I am always ",l.createElement("b",null,"hunting for the best charts")," made with Python! If you have any examples in mind that should be showcased here, please ",l.createElement("b",null,"let me know")," 🙏.")),l.createElement(d.Z,null),l.createElement(n.Z,null,l.createElement(o.Z,null)),l.createElement(d.Z,null))}},4919:function(t,e,a){a.d(e,{A:function(){return l}});const l=[{link:"564-publication-ready-table-with-plottable",title:"Polished table with bubbles",description:"Investigating the 10 best and worst countries to live in, with bubble in cells to represent the data. A good way to showcase the plottable library.",img:"564-publication-ready-table-with-plottable.png",alt:"Clean table with plottable",author:"Fortune Uwha"},{link:"web-stacked-area-charts-on-a-map",title:"Mini stacked areas for US states",description:"This compendium of stacked area charts went viral. Read a translation in python of this work by Enrin, originally written in R.",img:"web-stacked-area-charts-on-a-map.png",alt:"Stacked area charts displayed on a map",author:"Erin"},{link:"532-customizing-circular-barplot-in-matplotlib",title:"Ordered & Mirrored barplot",description:"A highly customized circular barplot visualizing Star Wars data using Python and Matplotlib. It provides a step-by-step guide from a basic barplot to a fully customized version including fonts, y-axis scaling, annotations and legend.",img:"532-episode1-each-line-anakin.png",alt:"Circular Barplot about star wars",author:"Lisa Hornung"},{link:"web-ordered-mirror-barplot",title:"Ordered & Mirrored barplot",description:"A mirror barplot with individual observations using the Matplotlib library to visualize data about the Erasmus Program in European countries.",img:"web-ordered-mirror-barplot.png",alt:"Ordered mirrored barplot made with matplotlib",author:"Benjamin Nowak"},{link:"web-bubble-plot-with-annotations-and-custom-features",title:"Scatterplot with grouping, highlighting and annotation",description:"A scatter plot with custom annotations and colors, with some markers being circled.",img:"web-bubble-plot-with-annotations-and-custom-features.png",alt:"Polished scatterplot made with Python",author:"Data Wrapper"},{link:"web-histogram-with-annotations",title:"Histogram with clean color scale and annotation",description:"A clean and insightful histogram produced by the french institute of statistics showing the salary distribution in the country.",img:"web-histogram-with-annotations.png",alt:"Clean histogram reproduction in Python",author:"INSEE"},{link:"524-area-chart-over-flexible-baseline",title:"Area over flexible baseline chart",description:"An area over a flexible baseline to show deviations from a reference or baseline made with Python and Matplotlib or Plotly.",img:"524-area-over-flexible-baseline_square.png",alt:"Area over a flexible baseline made with Python and Matplotlib/Plotly",author:"J. Kühn"},{link:"web-circular-barplot-with-matplotlib",title:"Circular Barplot",description:"A circular barchart with several features per group made with Python and Matplotlib",img:"web-circular-barplot-with-matplotlib-square.png",alt:"clean circular barplot made with Python and Matplotlib",author:"T. Stadler"},{link:"web-circular-lollipop-plot-with-matplotlib",title:"Circular Lollipop Plot",description:"A circular lollipop plot with customized layout, great color palette and in circle legend",img:"web-circular-lollipop-plot-with-matplotlib-square.png",alt:"circular lollipop plot made with Python and Matplotlib",author:"C. Scherer"},{link:"web-ggbetweenstats-with-matplotlib",title:"Violin and Boxplot combination",description:"Allows the comparison of several groups with statistical test results on top",img:"web-ggbetweenstats-with-matplotlib-square.png",alt:"Combination of a violin and a boxplot made with Python and Matplotlib",author:"T. Wang"},{link:"web-heatmap-and-radial-barchart-plastics",title:"Circle Heatmap",description:"A heatmap where each cell is filled by a circle with varying size",img:"web-heatmap-and-radial-barchart-plastics-square1.png",alt:"Heatmap with varying circle in cells",author:"M. Siple"},{link:"web-heatmap-and-radial-barchart-plastics",title:"Circular barplot",description:"A circular barplot with small multiples",img:"web-heatmap-and-radial-barchart-plastics-square2.png",alt:"Circular barplot with small multiple",author:"M. Siple"},{link:"web-highlighted-lineplot-with-faceting",title:"Line chart with faceting",description:"Several highlighted lineplots arranged in a multi panel layout to explore the evolution of the water source installation rankings by country",img:"web-highlighted-lineplot-with-faceting-square.png",alt:"multi panel layout with Python line charts",author:"A. Madjid"},{link:"web-scatterplot-with-images-in-circles",title:"Scatterplot with images",description:"A scatter plot with images inside each marker to provide additional context",img:"web-scatterplot-with-images-in-circles.png",alt:"Scatterplot with images in python",author:"Tanya Shapiro"},{link:"web-horizontal-barplot-with-labels-the-economist",title:"Horizontal Barplot",description:"A reproduction of an horizontal barplot made by The Economist to showcase the power of Python for dataviz",img:"web-horizontal-barplot-with-labels-the-economist-square.png",alt:"Horizonal barplot with the Economist's style",author:"The Economist"},{link:"web-lemurs-parallel-chart",title:"Parallel chart",description:"A parallel coordinate chart to explore the maximum ages recorded for different species of lemurs with Python and Matplotlib.",img:"web-lemurs-parallel-chart-square.png",alt:"Parallel chart made with Python",author:"G. Karamanis"},{link:"web-line-chart-with-labels-at-line-end",title:"Inline labels",description:"Good looking line chart with inline labels at the end of each line",img:"web-line-chart-with-labels-at-line-end-square.png",alt:"Line chart with inline labels",author:"C. Scherer"},{link:"web-lineplots-and-area-chart-the-economist",title:"Line chart from the Economist",description:"Mimicking the style of the Economist to get a clean line chart",img:"web-lineplots-and-area-chart-the-economist-square1.png",alt:"Python line chart with style of the Economist",author:"The Economist"},{link:"web-lineplots-and-area-chart-the-economist",title:"Area chart from the Economist",description:"Mimicking the style of the Economist to get a clean area chart",img:"web-lineplots-and-area-chart-the-economist-square2.png",alt:"Python area chart with style of the Economist",author:"The Economist"},{link:"web-lollipop-plot-with-python-mario-kart-64-world-records",title:"Lollipop chart",description:"A highly customized lollipop chart showing world records for the Mario Kart 64 racing game on the Nintendo 64",img:"web-lollipop-plot-with-python-mario-kart-64-world-records-square.png",alt:"Lollipop Chart made with Python and matplotlib",author:"C. Scherer"},{link:"web-multiple-lines-and-panels",title:"Line chart with small multiple",description:"A line chart with several groups per panel on a small multiple layout. With a beautiful color palette.",img:"web-multiple-lines-and-panels-square.png",alt:"Line chart with several groups per panel on a small multiple layout",author:"O. Medina"},{link:"web-radar-chart-with-matplotlib",title:"Radar chart with matplotlib",description:"A highly customized radar chart with custom annotations and labels to explore the palmerpenguins dataset made with Python and Matplotlib.",img:"web-radar-chart-with-matplotlib-square.png",alt:"Radar chart with Matplotlib",author:"T. Wang"},{link:"web-scatterplot-astronaut",title:"Astronaut Scatterplot",description:"A chart made of a scatterplot with variable color, shape, and opacity, and several annotations to explore the relationship between the characteristics of astronauts and space missions",img:"web-scatterplot-astronaut-square.png",alt:"Scatterplot with variable color in Python",author:"C. Thompson"},{link:"web-scatterplot-text-annotation-and-regression-matplotlib",title:"Scatterplot with regression fit",description:"A custom scatterplot with an overlayed regression fit and auto-positioned labels to explore the relationship between the Corruption Perceptions Index and Human Development Index",img:"web-scatterplot-text-annotation-and-regression-matplotlib-square.png",alt:"Scatterplot with regression fit",author:"C. O. Wilke"},{link:"web-stacked-line-chart-with-labels",title:"Stacked barchart",description:"A clean stacked barplot with nice color palette, some very clean inline labels, a powerful title and slick footer caption with logos.",img:"web-stacked-line-chart-with-labels-square.png",alt:"Clean stacked barplot",author:"G. Fontana"},{link:"web-streamchart-with-matplotlib",title:"X-men Streamchart",description:"A streamchart to explore the appearances of the most popular characters in Chris Claremont's X-Men comics with Python",img:"web-streamchart-with-matplotlib.png",alt:"Streamchart made in Python",author:"C. Scherer"},{link:"web-text-repel-with-matplotlib",title:"Scatterplot with text repel",description:"A custom scatterplot with auto-positioned labels to explore the palmerpenguins dataset made with Python and Matplotlib",img:"web-text-repel-with-matplotlib-square.png",alt:"Scatterplot with smart labels",author:"T. Wang"},{link:"web-time-series-and-facetting-with-matplotlib",title:"Timeseries and faceting",description:"Multiple lineplots with filled areas with a customized layout to explore the evolution of animal rescues across different boroughs in London",img:"web-time-series-and-facetting-with-matplotlib-square.png",alt:"Timeseries chart with filled areas and faceting",author:"G. Karamanis"},{link:"web-polar-chart",title:"Polar bar chart",description:"A polar bar chart showing the number of spanish speakers per country",img:"web-polar-chart.png",alt:"Polar barchart with Python",author:"nyx-it-up"},{link:"heatmap-for-timeseries-matplotlib",title:"Hourly heatmap",description:"A very clean heatmap used as a timeseries",img:"heatmap-for-timeseries-matplotlib-square.png",alt:"A very clean heatmap used as a timeseries",author:"J. MacKintosh"},{link:"web-line-chart-small-multiple",title:"Line chart & small multiple",description:"Small multiple is a dataviz technique allowing to study several groups on the same figure. Repeating all groups but faded out adds some useful context to each section.",img:"web-line-chart-small-multiple-square.png",alt:"Line chart with small multiple and all groups faded out",author:"G. Fontana"}]},1555:function(t,e,a){var l=a(4184),i=a.n(l),r=a(7294),n=a(6792),o=a(5893);const s=r.forwardRef(((t,e)=>{const[{className:a,...l},{as:r="div",bsPrefix:s,spans:c}]=function({as:t,bsPrefix:e,className:a,...l}){e=(0,n.vE)(e,"col");const r=(0,n.pi)(),o=(0,n.zG)(),s=[],c=[];return r.forEach((t=>{const a=l[t];let i,r,n;delete l[t],"object"==typeof a&&null!=a?({span:i,offset:r,order:n}=a):i=a;const h=t!==o?`-${t}`:"";i&&s.push(!0===i?`${e}${h}`:`${e}${h}-${i}`),null!=n&&c.push(`order${h}-${n}`),null!=r&&c.push(`offset${h}-${r}`)})),[{...l,className:i()(a,...s,...c)},{as:t,bsPrefix:e,spans:s}]}(t);return(0,o.jsx)(r,{...l,ref:e,className:i()(a,!c.length&&s)})}));s.displayName="Col",e.Z=s},4051:function(t,e,a){var l=a(4184),i=a.n(l),r=a(7294),n=a(6792),o=a(5893);const s=r.forwardRef((({bsPrefix:t,className:e,as:a="div",...l},r)=>{const s=(0,n.vE)(t,"row"),c=(0,n.pi)(),h=(0,n.zG)(),p=`${s}-cols`,m=[];return c.forEach((t=>{const e=l[t];let a;delete l[t],null!=e&&"object"==typeof e?({cols:a}=e):a=e;const i=t!==h?`-${t}`:"";null!=a&&m.push(`${p}${i}-${a}`)})),(0,o.jsx)(a,{ref:r,...l,className:i()(e,s,...m)})}));s.displayName="Row",e.Z=s}}]);
//# sourceMappingURL=component---src-pages-best-python-chart-examples-js-dfe6a03048aeede5a8be.js.map