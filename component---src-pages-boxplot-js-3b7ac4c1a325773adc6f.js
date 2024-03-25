"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[3771],{7128:function(e,t,o){o.d(t,{Z:function(){return r}});var a=o(7294),n=o(1883),l=o(8032);const i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function r(e){let{imgName:t,caption:o}=e;if(i.includes(t))return a.createElement("p",null,"TODO");const r=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return r?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(l.G,{image:r.node.childImageSharp.gatsbyImageData,alt:o,className:"chartImageImg"}),o&&a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,o))))):null}},4596:function(e,t,o){o.d(t,{Z:function(){return r}});var a=o(7294),n=o(7128),l=o(1555),i=o(1883);function r(e){let{imgName:t,caption:o,linkTo:r}=e;return a.createElement(l.Z,{xs:12,md:4},a.createElement(i.Link,{to:r},a.createElement(n.Z,{imgName:t,caption:o})))}},9389:function(e,t,o){o.d(t,{H:function(){return n}});var a=o(7294);const n=e=>{let{title:t,seoDescription:o,keywords:n}=e;return a.createElement(a.Fragment,null,a.createElement("title",null,t),a.createElement("html",{lang:"en"}),a.createElement("meta",{name:"description",content:o||"How to build a chart with Python"}),a.createElement("meta",{name:"author",content:"Yan Holtz"}),a.createElement("meta",{name:"keywords",content:n||"python, chart, graph, code, viz, dataviz"}),a.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),a.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),a.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),a.createElement("meta",{property:"og:description",content:o}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:site",content:"@R_Graph_Gallery"}))}},9858:function(e,t,o){o.r(t),o.d(t,{Head:function(){return w},default:function(){return _}});var a=o(7294),n=o(429),l=o(2057),i=o(682),r=o(1190),m=o(4051),c=o(4596),s=o(8742),p=o(1883),u=o(944),d=o(1555),h=o(5005),b=o(2737),E=o(7128),g=o(3921),x=o(9389);const f=a.createElement(a.Fragment,null,a.createElement("p",null,"A ",a.createElement("a",{href:"https://www.data-to-viz.com/caveat/boxplot.html"},"boxplot")," ","summarizes the ",a.createElement("b",null,"distribution")," of a numeric variable for one or several groups. It allows to quickly get the ",a.createElement("b",null,"median"),","," ",a.createElement("b",null,"quartiles")," and ",a.createElement("b",null,"outliers")," but also hides the dataset individual data points."),a.createElement("p",null,"In python, boxplots can be made with both"," ",a.createElement(p.Link,{href:"/seaborn"},"seaborn")," and"," ",a.createElement(p.Link,{href:"/matplotlib"},"matplotlib")," as they both offer a"," ",a.createElement("code",null,"boxplot()")," function made for the job.")),y='# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset(\'iris\')\n\nsns.boxplot( x=df["species"], y=df["sepal_length"] )\n',w=()=>a.createElement(x.H,{title:"Python Boxplot Gallery | Dozens of examples with code",seoDescription:"A collection of boxplot examples made with Python, coming with explanation and reproducible code"});function _(){return a.createElement(l.Z,{isTocEnabled:!0},a.createElement(n.Z,{title:"Boxplot",description:f}),a.createElement(i.Z,null,a.createElement("h2",{id:"Quick"},"⏱ Quick start"),a.createElement(m.Z,{className:"align-items-center"},a.createElement(d.Z,{md:6},a.createElement("p",null,a.createElement("code",null,"Seaborn")," is definitely the best library to quickly build a boxplot. It offers a dedicated ",a.createElement("code",null,"boxplot()")," ","function that roughly works as follows:🔥")),a.createElement(d.Z,{md:6},a.createElement(p.Link,{to:"/30-basic-boxplot-with-seaborn"},a.createElement(E.Z,{imgName:"30_Basic_Box_seaborn2",caption:"Basic boxplot with Python and Seaborn from various data input formats."})))),a.createElement(b.Z,null,y)),a.createElement(g.Z,null),a.createElement("div",{className:"greySection"},a.createElement(i.Z,null,a.createElement("h2",{id:"Warning"},"⚠️ Mind the boxplot"),a.createElement("p",null,"A boxplot is an awesome way to summarize the distribution of a variable. However it hides the real distribution and the sample size. Check the 3 charts below that are based on the exact same dataset."),a.createElement("p",null,"To read more about this, visit"," ",a.createElement("a",{href:"https://www.data-to-viz.com/caveat/boxplot.html"},"data-to-viz.com")," ","that has a dedicated article."),a.createElement(m.Z,null,a.createElement(c.Z,{imgName:"39_Bad_boxplot1",caption:"Basic boxplot. You can quickly read the median, quartiles and outliers of each group.",linkTo:"/39-hidden-data-under-boxplot"}),a.createElement(c.Z,{imgName:"39_Bad_boxplot2",caption:"If you add individual points with jitter, a bimodal distribution appears for group B",linkTo:"/39-hidden-data-under-boxplot"}),a.createElement(c.Z,{imgName:"39_Bad_boxplot3",caption:"If you have a very large dataset, the violin plot is a better alternative than jittering",linkTo:"/39-hidden-data-under-boxplot"})),a.createElement(p.Link,{to:"/39-hidden-data-under-boxplot"},a.createElement(h.Z,{size:"sm"},"Code and more")))),a.createElement(g.Z,null),a.createElement(i.Z,null,a.createElement("h2",{id:"Seaborn"},a.createElement(u._I,null),"Boxplots with ",a.createElement("code",null,"Seaborn")),a.createElement("p",null,a.createElement("code",null,"Seaborn")," is a python library allowing to make better charts easily. The ",a.createElement("code",null,"boxplot")," function should get you started in minutes. The examples below aim at showcasing the various possibilities this function offers."),a.createElement(m.Z,null,a.createElement(c.Z,{imgName:"30_Basic_Box_seaborn2",caption:"Let's start basic. The most simple boxplot, based on 3 differents input formats",linkTo:"/30-basic-boxplot-with-seaborn"}),a.createElement(c.Z,{imgName:"33_Custom_Boxplot_color_Seaborn5",caption:"Everything you need concerning color customization on your boxplot: transparency, palette in use, manual control..",linkTo:"/33-control-colors-of-boxplot-seaborn"}),a.createElement(c.Z,{imgName:"33_Custom_Boxplot_color_Seaborn4",caption:"Learn how to highlight a specific group in the dataset to make your point more obvious",linkTo:"/33-control-colors-of-boxplot-seaborn"}),a.createElement(c.Z,{imgName:"34_Grouped_Boxplot_Seaborn",caption:"If you have group and subgroups, you can build a grouped boxplot",linkTo:"/34-grouped-boxplot"}),a.createElement(c.Z,{imgName:"35_Specific_order_Boxplot_Seaborn1",caption:"Control the order of groups in the boxplot. It makes the chart more insightful",linkTo:"/35-control-order-of-boxplot"}),a.createElement(c.Z,{imgName:"36_Boxplot_with_Jitter_Seaborn",caption:"To avoid hiding information, you can add individual data points with jitter",linkTo:"/36-add-jitter-over-boxplot-seaborn"}),a.createElement(c.Z,{imgName:"38_Number_of_obs_on_boxplot_seaborn",caption:"Since individual data points are hidden, it is a good practice to show the sample size under each box",linkTo:"/38-show-number-of-observation-on-boxplot"}),a.createElement(c.Z,{imgName:"32_Custom_Boxplot_Appearance_Seaborn1-1",caption:"Customization: border width",linkTo:"/32-custom-boxplot-appearance-seaborn"}),a.createElement(c.Z,{imgName:"32_Custom_Boxplot_Appearance_Seaborn2",caption:"Customization: use notch",linkTo:"/32-custom-boxplot-appearance-seaborn"}),a.createElement(c.Z,{imgName:"32_Custom_Boxplot_Appearance_Seaborn3",caption:"Customization: box width",linkTo:"/32-custom-boxplot-appearance-seaborn"}),a.createElement(c.Z,{imgName:"54_Grouped_violinplot_Seaborn",caption:"If you have both groups and subgroups, you'll be interested in a grouped violin plot",linkTo:"/54-grouped-violinplot"}),a.createElement(c.Z,{imgName:"31-horizontal-boxplot-with-seaborn",caption:"Horizontal boxplot with seaborn",linkTo:"/31-horizontal-boxplot-with-seaborn"}))),a.createElement(g.Z,null),a.createElement(i.Z,null,a.createElement("h2",{id:"matplotlib"},a.createElement(u.rS,null),"Boxplots with ",a.createElement("code",null,"Matplotlib")),a.createElement("p",null,a.createElement(p.Link,{href:"/matplotlib"},"Matplotlib")," also has a"," ",a.createElement("code",null,"boxplot()")," function made to build boxplots."),a.createElement("p",null,"The following tutorials will guide you from its basic usage to the finest customization:"),a.createElement(m.Z,null,a.createElement(c.Z,{imgName:"533-introduction-boxplots-matplotlib",caption:"Simple boxplot with matplotlib",linkTo:"/533-introduction-boxplots-matplotlib"}),a.createElement(c.Z,{imgName:"542-custom-boxplots-matplotlib",caption:"Flipped, notched and customized boxplot",linkTo:"/542-custom-boxplots-matplotlib"}),a.createElement(c.Z,{imgName:"543-grouped-boxplots-matplotlib",caption:"Grouped boxplot",linkTo:"/543-grouped-boxplots-matplotlib"})," ",a.createElement(c.Z,{imgName:"509-introduction-to-swarm-plot-in-matplotlib-3",caption:"Beeswarm and boxplot combination",linkTo:"/509-introduction-to-swarm-plot-in-matplotlib"}),a.createElement(c.Z,{imgName:"557-anova-visualization-with-matplotlib-1",caption:"Boxplot and ANOVA results on top",linkTo:"/557-anova-visualization-with-matplotlib"})," ",a.createElement(c.Z,{imgName:"534-highly-customized-layout",caption:"Subplot, title, and margin customization",linkTo:"/534-highly-customized-layout"}))),a.createElement(g.Z,null),a.createElement(i.Z,null,a.createElement("h2",{id:"Best"},a.createElement(u.rS,null),"Best python boxplot examples"),a.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",a.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",a.createElement("a",{href:"https://python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",a.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),a.createElement(m.Z,null,a.createElement(d.Z,{xs:12,md:6},a.createElement(p.Link,{to:"/web-ggbetweenstats-with-matplotlib"},a.createElement(E.Z,{imgName:"web-ggbetweenstats-with-matplotlib-square",caption:"A combination of a violin plot and a boxplot. Allows the comparison of several groups with statistical test results on top."}))),a.createElement(d.Z,{xs:12,md:6},a.createElement(p.Link,{to:"/raincloud-plot-with-matplotlib-and-ptitprince"},a.createElement(E.Z,{imgName:"raincloud-plot-with-matplotlib-and-ptitprince",caption:"Combining boxplot and density chart. A great way to display the distribution of a variable for several groups."}))))),a.createElement(g.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(i.Z,null,a.createElement(s.Z,{chartFamily:"distribution"}))),a.createElement(g.Z,null),a.createElement(i.Z,null,a.createElement(r.Z,null)),a.createElement(g.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-boxplot-js-3b7ac4c1a325773adc6f.js.map