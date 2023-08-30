"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[9184],{7128:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),i=a(1883),n=a(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:a}=e;if(r.includes(t))return l.createElement("p",null,"TODO");const o=(0,i.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(n.G,{image:o.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},9389:function(e,t,a){a.d(t,{H:function(){return r}});var l=a(7294),i=a(1883);function n(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const r=e=>{let{title:t,seoDescription:a,keywords:r}=e;return l.createElement(l.Fragment,null,l.createElement("title",null,t),l.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),l.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),l.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),l.createElement("meta",{name:"author",content:"Yan Holtz"}),l.createElement("meta",{name:"keywords",content:r||"python, chart, graph, code, viz, dataviz"}),l.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),l.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),l.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement("meta",{property:"og:description",content:a}),l.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement(i.Script,{id:"adthrive",strategy:"idle",src:n()}))}},429:function(e,t,a){a.d(t,{Z:function(){return h}});var l=a(7294),i=a(5005),n=a(1883),r=a(8447),o=a(5584),s=a(682),c=a(5128);function h(e){let{title:t,description:a,chartType:c}=e;const h=r.c.filter((e=>e.id===c))[0];return l.createElement(s.Z,null,l.createElement("div",{className:"titleAndDescription"},l.createElement("div",{className:"titleRow"},l.createElement("h1",null,t),c&&l.createElement(p,{chartType:c})),l.createElement("hr",{className:"smallHr"}),"string"==typeof a?l.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):l.createElement("div",{className:"description"},a),c&&l.createElement("div",{style:{marginTop:"10px"}},l.createElement(n.Link,{to:(0,o.y)(h.pythonURL)},l.createElement(i.Z,{size:"sm"},h.label+" section")),l.createElement("a",{href:h.dataToVizURL},l.createElement(i.Z,{size:"sm"},"About this chart")))))}const p=e=>{let{chartType:t}=e;const a=r.c.filter((e=>e.id===t))[0],i=(0,o.y)(a.pythonURL);return l.createElement("div",{style:{width:"80px",marginLeft:40}},l.createElement(n.Link,{to:i},l.createElement(c.Z,{chartType:a.logo})))}},2455:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return f}});var l=a(7294),i=a(429),n=a(1433),r=a(682),o=a(8728),s=a(4051),c=a(1883),h=a(1555),p=a(5005),m=a(7128),d=a(3921),u=a(4919),b=a(9389);const w=l.createElement(l.Fragment,null,l.createElement("p",null,"The ",l.createElement("a",{href:"/"},"Python Graph Gallery")," has always been a reservoir of inspiration, providing ",l.createElement("b",null,"hundreds of foundational chart examples")," for newcomers and seasoned developers alike."," "),l.createElement("p",null,"While our vast collection offers a stepping stone into the world of data visualization, ",l.createElement("b",null,"the following list stands out"),"."),l.createElement("p",null,"Every chart here represents the pinnacle of craftsmanship, exhibiting the depths to which ",l.createElement(c.Link,{href:"/matplotlib"},"matplotlib")," can be customized. These are not just graphs; they are polished masterpieces, ready for publication."),l.createElement("p",null,"While I'm deeply indebted to the ",l.createElement("b",null,"original authors")," for their stellar work, it's worth noting that many of these visualizations were first conceived in ",l.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),", a testament to its rich visualization ecosystem. In an endeavor to"," ",l.createElement("b",null,"bring the best to our Python community"),", I've translated these gems to further showcase the versatility and power of matplotlib."),l.createElement("p",null,"Dive in and get inspired! 😍")),g=()=>l.createElement(b.H,{title:"Best Python Chart Examples",seoDescription:"A selection of the best graphs made with python, coming with in-depth tutorials and reproducible code."});function f(){return l.createElement(n.Z,null,l.createElement(i.Z,{title:"Best Python Chart Examples",description:w}),l.createElement(r.Z,null,u.A.map(((e,t)=>l.createElement("div",{key:t},l.createElement(s.Z,null,l.createElement(h.Z,{xs:4,md:6},l.createElement(c.Link,{href:"/"+e.link},l.createElement(m.Z,{imgName:e.img.replace(".png","")}))),l.createElement(h.Z,{xs:4,md:6},l.createElement("h2",{style:{lineHeight:"34px",fontSize:22,marginTop:40,paddingBottom:10,borderBottom:"none"}},e.title),l.createElement("p",null,e.description),l.createElement("p",{style:{fontSize:16,color:"grey"}},l.createElement("i",null,l.createElement("span",null,"by "),e.author)," "),l.createElement(c.Link,{href:"/"+e.link},l.createElement(p.Z,{size:"sm"},"Read tutorial")))),l.createElement(d.Z,null)))),l.createElement("p",null,"Note that I am always ",l.createElement("b",null,"hunting for the best charts")," made with Python! If you have any examples in mind that should be showcased here, please ",l.createElement("b",null,"let me know")," 🙏.")),l.createElement(d.Z,null),l.createElement(r.Z,null,l.createElement(o.Z,null)),l.createElement(d.Z,null))}},4919:function(e,t,a){a.d(t,{A:function(){return l}});const l=[{link:"524-area-chart-over-flexible-baseline",title:"Area over flexible baseline chart",description:"An area over a flexible baseline to show deviations from a reference or baseline made with Python and Matplotlib or Plotly.",img:"524-area-over-flexible-baseline_square.png",alt:"Area over a flexible baseline made with Python and Matplotlib/Plotly",author:"J. Kühn"},{link:"web-circular-barplot-with-matplotlib",title:"Circular Barplot",description:"A circular barchart with several features per group made with Python and Matplotlib",img:"web-circular-barplot-with-matplotlib-square.png",alt:"clean circular barplot made with Python and Matplotlib",author:"T. Stadler"},{link:"web-circular-lollipop-plot-with-matplotlib",title:"Circular Lollipop Plot",description:"A circular lollipop plot with customized layout, great color palette and in circle legend",img:"web-circular-lollipop-plot-with-matplotlib-square.png",alt:"circular lollipop plot made with Python and Matplotlib",author:"C. Scherer"},{link:"web-ggbetweenstats-with-matplotlib",title:"Violin and Boxplot combination",description:"Allows the comparison of several groups with statistical test results on top",img:"web-ggbetweenstats-with-matplotlib-square.png",alt:"Combination of a violin and a boxplot made with Python and Matplotlib",author:"T. Wang"},{link:"web-heatmap-and-radial-barchart-plastics",title:"Circle Heatmap",description:"A heatmap where each cell is filled by a circle with varying size",img:"web-heatmap-and-radial-barchart-plastics-square1.png",alt:"Heatmap with varying circle in cells",author:"M. Siple"},{link:"web-heatmap-and-radial-barchart-plastics",title:"Circular barplot",description:"A circular barplot with small multiples",img:"web-heatmap-and-radial-barchart-plastics-square2.png",alt:"Circular barplot with small multiple",author:"M. Siple"},{link:"web-highlighted-lineplot-with-faceting",title:"Line chart with faceting",description:"Several highlighted lineplots arranged in a multi panel layout to explore the evolution of the water source installation rankings by country",img:"web-highlighted-lineplot-with-faceting-square.png",alt:"multi panel layout with Python line charts",author:"A. Madjid"},{link:"web-horizontal-barplot-with-labels-the-economist",title:"Horizontal Barplot",description:"A reproduction of an horizontal barplot made by The Economist to showcase the power of Python for dataviz",img:"web-horizontal-barplot-with-labels-the-economist-square.png",alt:"Horizonal barplot with the Economist's style",author:"The Economist"},{link:"web-lemurs-parallel-chart",title:"Parallel chart",description:"A parallel coordinate chart to explore the maximum ages recorded for different species of lemurs with Python and Matplotlib.",img:"web-lemurs-parallel-chart-square.png",alt:"Parallel chart made with Python",author:"G. Karamanis"},{link:"web-line-chart-with-labels-at-line-end",title:"Inline labels",description:"Good looking line chart with inline labels at the end of each line",img:"web-line-chart-with-labels-at-line-end-square.png",alt:"Line chart with inline labels",author:"C. Scherer"},{link:"web-lineplots-and-area-chart-the-economist",title:"Line chart from the Economist",description:"Mimicking the style of the Economist to get a clean line chart",img:"web-lineplots-and-area-chart-the-economist-square1.png",alt:"Python line chart with style of the Economist",author:"The Economist"},{link:"web-lineplots-and-area-chart-the-economist",title:"Area chart from the Economist",description:"Mimicking the style of the Economist to get a clean area chart",img:"web-lineplots-and-area-chart-the-economist-square2.png",alt:"Python area chart with style of the Economist",author:"The Economist"},{link:"web-lollipop-plot-with-python-mario-kart-64-world-records",title:"Lollipop chart",description:"A highly customized lollipop chart showing world records for the Mario Kart 64 racing game on the Nintendo 64",img:"web-lollipop-plot-with-python-mario-kart-64-world-records-square.png",alt:"Lollipop Chart made with Python and matplotlib",author:"C. Scherer"},{link:"web-multiple-lines-and-panels",title:"Line chart with small multiple",description:"A line chart with several groups per panel on a small multiple layout. With a beautiful color palette.",img:"web-multiple-lines-and-panels-square.png",alt:"Line chart with several groups per panel on a small multiple layout",author:"O. Medina"},{link:"web-radar-chart-with-matplotlib",title:"Radar chart with matplotlib",description:"A highly customized radar chart with custom annotations and labels to explore the palmerpenguins dataset made with Python and Matplotlib.",img:"web-radar-chart-with-matplotlib-square.png",alt:"Radar chart with Matplotlib",author:"T. Wang"},{link:"web-scatterplot-astronaut",title:"Astronaut Scatterplot",description:"A chart made of a scatterplot with variable color, shape, and opacity, and several annotations to explore the relationship between the characteristics of astronauts and space missions",img:"web-scatterplot-astronaut-square.png",alt:"Scatterplot with variable color in Python",author:"C. Thompson"},{link:"web-scatterplot-text-annotation-and-regression-matplotlib",title:"Scatterplot with regression fit",description:"A custom scatterplot with an overlayed regression fit and auto-positioned labels to explore the relationship between the Corruption Perceptions Index and Human Development Index",img:"web-scatterplot-text-annotation-and-regression-matplotlib-square.png",alt:"Scatterplot with regression fit",author:"C. O. Wilke"},{link:"web-stacked-line-chart-with-labels",title:"Stacked barchart",description:"A clean stacked barplot with nice color palette, some very clean inline labels, a powerful title and slick footer caption with logos.",img:"web-stacked-line-chart-with-labels-square.png",alt:"Clean stacked barplot",author:"G. Fontana"},{link:"web-streamchart-with-matplotlib",title:"X-men Streamchart",description:"A streamchart to explore the appearances of the most popular characters in Chris Claremont's X-Men comics with Python",img:"web-streamchart-with-matplotlib.png",alt:"Streamchart made in Python",author:"C. Scherer"},{link:"web-text-repel-with-matplotlib",title:"Scatterplot with text repel",description:"A custom scatterplot with auto-positioned labels to explore the palmerpenguins dataset made with Python and Matplotlib",img:"web-text-repel-with-matplotlib-square.png",alt:"Scatterplot with smart labels",author:"T. Wang"},{link:"web-time-series-and-facetting-with-matplotlib",title:"Timeseries and faceting",description:"Multiple lineplots with filled areas with a customized layout to explore the evolution of animal rescues across different boroughs in London",img:"web-time-series-and-facetting-with-matplotlib-square.png",alt:"Timeseries chart with filled areas and faceting",author:"G. Karamanis"},{link:"heatmap-for-timeseries-matplotlib",title:"Hourly heatmap",description:"A very clean heatmap used as a timeseries",img:"heatmap-for-timeseries-matplotlib-square.png",alt:"A very clean heatmap used as a timeseries",author:"J. MacKintosh"},{link:"web-line-chart-small-multiple",title:"Line chart & small multiple",description:"Small multiple is a dataviz technique allowing to study several groups on the same figure. Repeating all groups but faded out adds some useful context to each section.",img:"web-line-chart-small-multiple-square.png",alt:"Line chart with small multiple and all groups faded out",author:"G. Fontana"}]},1555:function(e,t,a){var l=a(4184),i=a.n(l),n=a(7294),r=a(6792),o=a(5893);const s=n.forwardRef(((e,t)=>{const[{className:a,...l},{as:n="div",bsPrefix:s,spans:c}]=function({as:e,bsPrefix:t,className:a,...l}){t=(0,r.vE)(t,"col");const n=(0,r.pi)(),o=(0,r.zG)(),s=[],c=[];return n.forEach((e=>{const a=l[e];let i,n,r;delete l[e],"object"==typeof a&&null!=a?({span:i,offset:n,order:r}=a):i=a;const h=e!==o?`-${e}`:"";i&&s.push(!0===i?`${t}${h}`:`${t}${h}-${i}`),null!=r&&c.push(`order${h}-${r}`),null!=n&&c.push(`offset${h}-${n}`)})),[{...l,className:i()(a,...s,...c)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,o.jsx)(n,{...l,ref:t,className:i()(a,!c.length&&s)})}));s.displayName="Col",t.Z=s},4051:function(e,t,a){var l=a(4184),i=a.n(l),n=a(7294),r=a(6792),o=a(5893);const s=n.forwardRef((({bsPrefix:e,className:t,as:a="div",...l},n)=>{const s=(0,r.vE)(e,"row"),c=(0,r.pi)(),h=(0,r.zG)(),p=`${s}-cols`,m=[];return c.forEach((e=>{const t=l[e];let a;delete l[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const i=e!==h?`-${e}`:"";null!=a&&m.push(`${p}${i}-${a}`)})),(0,o.jsx)(a,{ref:n,...l,className:i()(t,s,...m)})}));s.displayName="Row",t.Z=s}}]);
//# sourceMappingURL=component---src-pages-best-python-chart-examples-js-51c9e79ec154e4f8f02e.js.map