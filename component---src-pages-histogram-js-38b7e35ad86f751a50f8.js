"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[2895],{7128:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),i=a(1883),o=a(8032);const l=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function r(e){let{imgName:t,caption:a}=e;if(l.includes(t))return n.createElement("p",null,"TODO");const r=(0,i.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return r?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(o.G,{image:r.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),i=a(7128),o=a(1555),l=a(1883);function r(e){let{imgName:t,caption:a,linkTo:r}=e;return n.createElement(o.Z,{xs:12,md:4},n.createElement(l.Link,{to:r},n.createElement(i.Z,{imgName:t,caption:a})))}},6390:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),i=a(429),o=a(1433),l=a(682),r=a(8728),s=a(4051),m=a(4596),c=a(8742),h=a(1883),d=a(4125),u=a(1555),p=a(2737),g=a(7128),b=a(3921);const E="<p>A <a href='https://www.data-to-viz.com/graph/histogram.html'>Histogram</a> represents the distribution of a numeric variable for one or several groups. The values are split in bins, each bin is represented as a bar. This page showcases many histograms built with python, using both the <code>seaborn</code> and the <code>matplotlib</code> libraries.</p>",_="# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset('iris')\n\n# Plot the histogram thanks to the distplot function\nsns.distplot( a=df[\"sepal_length\"], hist=True, kde=False, rug=False )\n",y='# library & dataset\nimport matplotlib.pyplot as plt\nhours = [17, 20, 22, 25, 26, 27, 30, 31, 32, 38, 40, 40, 45, 55]\n\n# Initialize layout\nfig, ax = plt.subplots(figsize = (9, 9))\n\n#plot\nax.hist(hours, bins=5, edgecolor="black");\n';function f(){return n.createElement(o.Z,{title:"Histogram",isTocEnabled:!0,seoDescription:"A collection of histogram examples made with Python, coming with explanation and reproducible code"},n.createElement(i.Z,{title:"Histogram",description:E}),n.createElement(l.Z,null,n.createElement("h2",{id:"Quick (Seaborn)"},"⏱ Quick start (Seaborn)"),n.createElement(s.Z,{className:"align-items-center"},n.createElement(u.Z,{md:6},n.createElement("p",null,n.createElement("code",null,"Seaborn")," is definitely the best library to quickly build a histogram thanks to its ",n.createElement("code",null,"distplot()"),"."),n.createElement("p",null,"Note the importance of the ",n.createElement("code",null,"bins")," parameter: try several values to see which represents your data the best. 🔥")),n.createElement(u.Z,{md:6},n.createElement(h.Link,{to:"/20-basic-histogram-seaborn"},n.createElement(g.Z,{imgName:"20_Basic_Histogram_seaborn2",caption:"The most basic histogram one can make with python and seaborn"})))),n.createElement(p.Z,null,_)),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Seaborn"},n.createElement(d._I,null),"Histogram charts with ",n.createElement("code",null,"Seaborn")),n.createElement("p",null,n.createElement("code",null,"Seaborn")," is a python library allowing to make better charts easily. It is well adapted to build histogram thanks to its"," ",n.createElement("code",null,"distplot")," function. The following charts will guide you through its usage, going from a very"," ",n.createElement(h.Link,{to:""},"basic histogram")," to something much more"," ",n.createElement(h.Link,{to:""},"customized"),"."),n.createElement(s.Z,null,n.createElement(m.Z,{imgName:"20_Basic_Histogram_seaborn1",caption:"The most basic histogram with seaborn. It adds a density on top by default",linkTo:"/20-basic-histogram-seaborn"}),n.createElement(m.Z,{imgName:"20_Basic_Histogram_seaborn2",caption:"Play with the bin parameter to control the number of bars",linkTo:"/20-basic-histogram-seaborn"}),n.createElement(m.Z,{imgName:"21_Display_Rug_and_distribution_on_hist1",caption:"Remove the density chart on top of the seaborn histogram",linkTo:"/21-control-rug-and-density-on-seaborn-histogram"}),n.createElement(m.Z,{imgName:"21_Display_Rug_and_distribution_on_hist2",caption:"Add rug on top of the histogram",linkTo:"/21-control-rug-and-density-on-seaborn-histogram"}),n.createElement(m.Z,{imgName:"21_Display_Rug_and_distribution_on_hist3",caption:"Customize the rug: color, size and more",linkTo:"/21-control-rug-and-density-on-seaborn-histogram"}),n.createElement(m.Z,{imgName:"21_Display_Rug_and_distribution_on_hist4",caption:"Customize the appearance of the density chart displayed on top of the histogram",linkTo:"/21-control-rug-and-density-on-seaborn-histogram"}),n.createElement(m.Z,{imgName:"24_Histogram_with_boxplot_on_top",caption:"How to split the chart window to display a boxplot on top of the histogram",linkTo:"/24-histogram-with-a-boxplot-on-top-seaborn"}),n.createElement(m.Z,{imgName:"25_Histogram_of_several_variables1",caption:"Compare the distribution of several groups on the same chart",linkTo:"/25-histogram-with-several-variables-seaborn"}),n.createElement(m.Z,{imgName:"25_Histogram_of_several_variables2",caption:"Use small multiple to compare the distribution of several groups",linkTo:"/25-histogram-with-several-variables-seaborn"}),n.createElement(m.Z,{imgName:"82_seaborn_jointplot1",caption:"Histogram can be added around a scatterplot to show each variable distributions",linkTo:"/82-marginal-plot-with-seaborn"}),n.createElement(m.Z,{imgName:"82_seaborn_jointplot6",caption:"Histogram can be added around a 2d density chart to show x and y variable distributions",linkTo:"/82-marginal-plot-with-seaborn"}))),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Quick (matplotlib)"},n.createElement(d.rS,null)," Quick start (Matplotlib)"),n.createElement(s.Z,{className:"align-items-center"},n.createElement(u.Z,{md:6},n.createElement("p",null,n.createElement(h.Link,{to:"/matplotlib"},"Matplotlib")," can also build decent histograms easily. It provides a ",n.createElement("code",null,"hist()")," function that accept a vector of numeric values as input."),n.createElement("p",null,"It also provides all the options you can think of to customize the binning and the genreral appearance.")),n.createElement(u.Z,{md:6},n.createElement(h.Link,{to:"/basic-histogram-in-matplotlib"},n.createElement(g.Z,{imgName:"basic-histogram-in-matplotlib",caption:"The most basic histogram one can make with python and matplotlib"})))),n.createElement(p.Z,null,y)),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(d.rS,null),"Histograms with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,"As usual ",n.createElement(h.Link,{to:"/matplotlib"},"matplotlib")," is perfectly skilled to build nice histogram, but require some more work camparing to"," ",n.createElement(h.Link,{to:"/seaborn"},"seaborn")," to get a good looking figure."),n.createElement("p",null,"The examples below should help you to get started with matplotlib histograms. They go from a very"," ",n.createElement(h.Link,{to:"/basic-histogram-in-matplotlib"},"basic version")," and then show how to customize it, like adding"," ",n.createElement(h.Link,{to:"/basic-histogram-in-matplotlib"},"annotation"),"."),n.createElement(s.Z,null,n.createElement(m.Z,{imgName:"basic-histogram-in-matplotlib",caption:"The most basic histogram with matplotlib.",linkTo:"/basic-histogram-in-matplotlib"}),n.createElement(m.Z,{imgName:"basic-histogram-in-matplotlib2",caption:"Reduce chart opacity and add annotation (median represented in vertical line)",linkTo:"/basic-histogram-in-matplotlib"}),n.createElement(m.Z,{imgName:"density-mirror-histogram",caption:"Mirror density chart to compare the distribution of 2 variables",linkTo:"/density-mirror"}),n.createElement(m.Z,{imgName:"504-histogram-with-colored-tails",caption:"A histogram with bars being colored differently based on thresholds",linkTo:"/504-histogram-with-colored-tails"}))),n.createElement(b.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(l.Z,null,n.createElement(c.Z,{chartFamily:"distribution"}))),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement(r.Z,null)),n.createElement(b.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-histogram-js-38b7e35ad86f751a50f8.js.map