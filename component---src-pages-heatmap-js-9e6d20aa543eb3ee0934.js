"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[1223],{7128:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),o=a(1883),r=a(8032);const l=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){let{imgName:t,caption:a}=e;if(l.includes(t))return n.createElement("p",null,"TODO");const m=(0,o.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return m?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:m.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),o=a(7128),r=a(1555),l=a(1883);function m(e){let{imgName:t,caption:a,linkTo:m}=e;return n.createElement(r.Z,{xs:12,md:4},n.createElement(l.Link,{to:m},n.createElement(o.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return o}});var n=a(7294);const o=e=>{let{title:t,seoDescription:a,keywords:o}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("html",{lang:"en"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:o||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:site",content:"@R_Graph_Gallery"}))}},1381:function(e,t,a){a.r(t),a.d(t,{Head:function(){return _},default:function(){return Z}});var n=a(7294),o=a(429),r=a(311),l=a(682),m=a(8728),i=a(4051),c=a(4596),h=a(8742),s=a(1883),p=a(944),d=a(1555),u=a(5005),E=a(2737),g=a(7128),b=a(3921),f=a(9389);const y="<p>A <a href='https://www.data-to-viz.com/graph/heatmap.html'>heatmap</a> is a graphical representation of data where each value of a matrix is represented as a color. This page explains how to build a heatmap with <code>Python</code>, with an emphasis on the <code>Seaborn</code> library.</p>",w='# library\nimport seaborn as sns\nimport pandas as pd\nimport numpy as np\n\n# Create a dataset\ndf = pd.DataFrame(np.random.random((5,5)), columns=["a","b","c","d","e"])\n\n# Default heatmap\np1 = sns.heatmap(df)\n',_=()=>n.createElement(f.H,{title:"Heatmap",seoDescription:"A collection of heatmap examples made with Python, coming with explanation and reproducible code"});function Z(){return n.createElement(r.Z,{isTocEnabled:!0},n.createElement(o.Z,{title:"Heatmap",description:y}),n.createElement(l.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(i.Z,{className:"align-items-center"},n.createElement(d.Z,{md:6},n.createElement("p",null,"If you're in a rush and want to make a heatmap with"," ",n.createElement("code",null,"Python")," as quick as possible, have a look to this code snippet that uses the ",n.createElement("code",null,"heatmap()")," function of"," ",n.createElement("code",null,"Seaborn"),".🔥")),n.createElement(d.Z,{md:6},n.createElement(s.Link,{to:"/90-heatmaps-with-various-input-format"},n.createElement(g.Z,{imgName:"90_Input_format_for_heatmap1",caption:"Basic heatmap with Python and Seaborn from various data input formats."})))),n.createElement(E.Z,null,w),n.createElement("br",null)),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Seaborn"},n.createElement(p._I,null),"Heatmap with ",n.createElement("code",null,"Seaborn")),n.createElement("p",null,n.createElement("code",null,"Seaborn")," is a python library allowing to make better charts easily thanks to its ",n.createElement("code",null,"heatmap()")," function. This section starts with a post describing the basic usage of the function based on any kind of data input. Next it will guide you through the different ways to customize the chart, like"," ",n.createElement(s.Link,{to:""},"controling color")," and"," ",n.createElement(s.Link,{to:""},"data normalization"),"."),n.createElement(i.Z,null,n.createElement(c.Z,{imgName:"90_Input_format_for_heatmap1",caption:"The heatmap() function and how to apply it to any kind of data input",linkTo:"/90-heatmaps-with-various-input-format"}),n.createElement(c.Z,{imgName:"90_Input_format_for_heatmap2bis",caption:"Plotting only one half of the heatmap",linkTo:"/90-heatmaps-with-various-input-format"}),n.createElement(c.Z,{imgName:"91_Custom_heat_control_lines",caption:"Seaborn heatmap customization: grid",linkTo:"/91-customize-seaborn-heatmap"}),n.createElement(c.Z,{imgName:"91_Custom_heat_annotate_cells",caption:"Seaborn heatmap customization: show numbers in cell",linkTo:"/91-customize-seaborn-heatmap"}),n.createElement(c.Z,{imgName:"91_Custom_heat_hide_colorbar",caption:"Seaborn heatmap customization: hide the color bar",linkTo:"/91-customize-seaborn-heatmap"}),n.createElement(c.Z,{imgName:"92_Control_color_heatmap1",caption:"Color customization: how to select other color palettes and more",linkTo:"/92-control-color-in-seaborn-heatmaps"}),n.createElement(c.Z,{imgName:"92-control-color-in-seaborn-heatmaps-square",caption:"Customize colormaps",linkTo:"/92-control-color-in-seaborn-heatmaps"}))),n.createElement(b.Z,null),n.createElement("div",{className:"greySection"},n.createElement(l.Z,null,n.createElement("h2",{id:"Warning"},"⚠️ Python heatmap and normalization"),n.createElement("p",null,"Consider the left heatmap below. The second column from the left (",n.createElement("code",null,"variable 1"),") has very high values compared to others. As a result, the variation existing in other variables is hidden."),n.createElement("p",null,"Highlighting the ",n.createElement("code",null,"variable 1")," can be the main message of your chart. But if you're interested in other variable variations as well, you probably want to apply some normalization as shown on the right heatmap."),n.createElement("p",null,"If you want to know more about normalization, check"," ",n.createElement("a",{href:"https://www.data-to-viz.com/graph/heatmap.html"},"data-to-viz.com"),". If you want some python code to do it,"," ",n.createElement(s.Link,{to:"/94-use-normalization-on-seaborn-heatmap"},"it's here"),"."),n.createElement(i.Z,null,n.createElement(c.Z,{imgName:"94_Heatmap_Normalization_Seaborn1",caption:"A heatmap that probably needs to be normalized.",linkTo:"/94-use-normalization-on-seaborn-heatmap"}),n.createElement(c.Z,{imgName:"94_Heatmap_Normalization_Seaborn2",caption:"The exact same heatmap after normalization",linkTo:"/94-use-normalization-on-seaborn-heatmap"})),n.createElement(s.Link,{to:"/94-use-normalization-on-seaborn-heatmap"},n.createElement(u.Z,{size:"sm"},"Code and explanation")))),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Clustering"},"❄ Python, Heatmap and Clustering"),n.createElement("p",null,"It is very common to apply some ",n.createElement("code",null,"clustering")," techniques on a heatmap. The idea is to group items that have the same kind of pattern for their numeric variables. 💡"),n.createElement("p",null,"Usually, it is recommended to display a ",n.createElement("code",null,"dendrogram")," on top of the heatmap to explain how the clusterization has been performed. Last but not least, it can be useful to compare the grouping we got with an expected structure, shown as an additional color."),n.createElement(s.Link,{to:"/dendrogram"},n.createElement(u.Z,{size:"sm"},"Related: dendrogram section")),n.createElement(s.Link,{to:"/405-dendrogram-with-heatmap-and-coloured-leaves"},n.createElement(u.Z,{size:"sm"},"Code and explanation")),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.createElement(s.Link,{to:"/405-dendrogram-with-heatmap-and-coloured-leaves"},n.createElement(g.Z,{imgName:"405_Dendro_and_heatmap_and_rowcolor",caption:"A seaborn heatmap with clusterization and dendrogram applied"}))),n.createElement(i.Z,null,n.createElement(c.Z,{imgName:"404_Dendro_and_heatmap3",caption:"Most basic heatmap with dendrogram with seaborn",linkTo:"/404-dendrogram-with-heat-map"}),n.createElement(c.Z,{imgName:"404_Dendro_and_heatmap9",caption:"Change color palette",linkTo:"/404-dendrogram-with-heat-map"}),n.createElement(c.Z,{imgName:"404_Dendro_and_heatmap11",caption:"Learn how to normalize data in the heatmap, avoiding that kind of result",linkTo:"/404-dendrogram-with-heat-map"}))),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Timeseries"},"Heatmap for timeseries"),n.createElement("p",null,"A heatmap can be used to display some temporal data. Here is an example using ",n.createElement(s.Link,{to:"/matplotlib"},"matplotlib")," where the evolution of a temperature is displayed over the hour of the day (Y axis) and the day of the year (X axis) organized by month."),n.createElement("div",{style:{maxWidth:"800px",margin:"0 auto",padding:30}},n.createElement(s.Link,{to:"/heatmap-for-timeseries-matplotlib"},n.createElement(g.Z,{imgName:"heatmap-for-timeseries-matplotlib",caption:"A heatmap for temporal data with Python and Matplotlib"})))),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Best"},n.createElement(p.rS,null),"Best python heatmap examples"),n.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",n.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",n.createElement("a",{href:"https://python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",n.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),n.createElement(i.Z,null,n.createElement(d.Z,{xs:12,md:6},n.createElement(s.Link,{to:"/web-heatmap-and-radial-barchart-plastics"},n.createElement(g.Z,{imgName:"web-heatmap-and-radial-barchart-plastics",caption:"How to combine a heatmap with a radial barplot on the same figure with heaps of visual tweaks."}))),n.createElement(d.Z,{xs:12,md:6},n.createElement(s.Link,{to:"/web-heatmap-comparison"},n.createElement(g.Z,{imgName:"web-heatmap-comparison-5",caption:"A comparison heatmap with a lot of customization options."}))))),n.createElement(b.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(l.Z,null,n.createElement(h.Z,{chartFamily:"correlation"}))),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement(m.Z,null)),n.createElement(b.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-heatmap-js-9e6d20aa543eb3ee0934.js.map