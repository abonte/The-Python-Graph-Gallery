"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[2895],{7128:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),i=a(1883),o=a(8032);const l=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function r(e){let{imgName:t,caption:a}=e;if(l.includes(t))return n.createElement("p",null,"TODO");const r=(0,i.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return r?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(o.G,{image:r.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),i=a(7128),o=a(1555),l=a(1883);function r(e){let{imgName:t,caption:a,linkTo:r}=e;return n.createElement(o.Z,{xs:12,md:4},n.createElement(l.Link,{to:r},n.createElement(i.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return i}});var n=a(7294);const i=e=>{let{title:t,seoDescription:a,keywords:i}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),n.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:i||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("script",null,'(function (w, d) {\n               w.adthrive = w.adthrive || {};\n               w.adthrive.cmd = w.adthrive.cmd || [];\n               w.adthrive.plugin = "adthrive-ads-manual";\n               w.adthrive.host = "ads.adthrive.com";\n               var s = d.createElement("script");\n               s.async = true;\n               s.referrerpolicy = "no-referrer-when-downgrade";\n               s.src =\n                 "https://" +\n                 w.adthrive.host +\n                 "/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer=" +\n                 w.encodeURIComponent(w.location.href) +\n                 "&cb=" +\n                 (Math.floor(Math.random() * 100) + 1);\n               var n = d.getElementsByTagName("script")[0];\n               n.parentNode.insertBefore(s, n);\n             })(window, document);'))}},6390:function(e,t,a){a.r(t),a.d(t,{Head:function(){return v},default:function(){return _}});var n=a(7294),i=a(429),o=a(1433),l=a(682),r=a(1190),s=a(4051),m=a(4596),c=a(8742),h=a(1883),d=a(4125),p=a(1555),u=a(2737),g=a(7128),b=a(3921),E=a(9389);const y="<p>A <a href='https://www.data-to-viz.com/graph/histogram.html'>Histogram</a> represents the distribution of a numeric variable for one or several groups. The values are split in bins, each bin is represented as a bar. This page showcases many histograms built with python, using both the <code>seaborn</code> and the <code>matplotlib</code> libraries.</p>",f="# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset('iris')\n\n# Plot the histogram thanks to the distplot function\nsns.distplot( a=df[\"sepal_length\"], hist=True, kde=False, rug=False )\n",w='# library & dataset\nimport matplotlib.pyplot as plt\nhours = [17, 20, 22, 25, 26, 27, 30, 31, 32, 38, 40, 40, 45, 55]\n\n# Initialize layout\nfig, ax = plt.subplots(figsize = (9, 9))\n\n#plot\nax.hist(hours, bins=5, edgecolor="black");\n',k="# library & dataset\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\ntime = [17, 25, 42, 35, 26, 27, 20, 11, 22, 32, 35, 30, 45, 55]\n\n# Convert to a pandas format\ntime = pd.Series(time)\n\n#plot\ntime.hist()\nplt.show\n",v=()=>n.createElement(E.H,{title:"Histogram",seoDescription:"A collection of histogram examples made with Python, coming with explanation and reproducible code"});function _(){return n.createElement(o.Z,{isTocEnabled:!0},n.createElement(i.Z,{title:"Histogram",description:y}),n.createElement(l.Z,null,n.createElement("h2",{id:"Quick (Seaborn)"},"⏱ Quick start (Seaborn)"),n.createElement(s.Z,{className:"align-items-center"},n.createElement(p.Z,{md:6},n.createElement("p",null,n.createElement("code",null,"Seaborn")," is definitely the best library to quickly build a histogram thanks to its ",n.createElement("code",null,"distplot()"),"."),n.createElement("p",null,"Note the importance of the ",n.createElement("code",null,"bins")," parameter: try several values to see which represents your data the best. 🔥")),n.createElement(p.Z,{md:6},n.createElement(h.Link,{to:"/20-basic-histogram-seaborn"},n.createElement(g.Z,{imgName:"20_Basic_Histogram_seaborn2",caption:"The most basic histogram one can make with python and seaborn"})))),n.createElement(u.Z,null,f)),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Seaborn"},n.createElement(d._I,null),"Histogram charts with ",n.createElement("code",null,"Seaborn")),n.createElement("p",null,n.createElement("code",null,"Seaborn")," is a python library allowing to make better charts easily. It is well adapted to build histogram thanks to its"," ",n.createElement("code",null,"distplot")," function. The following charts will guide you through its usage, going from a very"," ",n.createElement(h.Link,{to:""},"basic histogram")," to something much more"," ",n.createElement(h.Link,{to:""},"customized"),"."),n.createElement(s.Z,null,n.createElement(m.Z,{imgName:"20_Basic_Histogram_seaborn1",caption:"The most basic histogram with seaborn. It adds a density on top by default",linkTo:"/20-basic-histogram-seaborn"}),n.createElement(m.Z,{imgName:"20_Basic_Histogram_seaborn2",caption:"Play with the bin parameter to control the number of bars",linkTo:"/20-basic-histogram-seaborn"}),n.createElement(m.Z,{imgName:"21_Display_Rug_and_distribution_on_hist1",caption:"Remove the density chart on top of the seaborn histogram",linkTo:"/21-control-rug-and-density-on-seaborn-histogram"}),n.createElement(m.Z,{imgName:"21_Display_Rug_and_distribution_on_hist2",caption:"Add rug on top of the histogram",linkTo:"/21-control-rug-and-density-on-seaborn-histogram"}),n.createElement(m.Z,{imgName:"21_Display_Rug_and_distribution_on_hist3",caption:"Customize the rug: color, size and more",linkTo:"/21-control-rug-and-density-on-seaborn-histogram"}),n.createElement(m.Z,{imgName:"21_Display_Rug_and_distribution_on_hist4",caption:"Customize the appearance of the density chart displayed on top of the histogram",linkTo:"/21-control-rug-and-density-on-seaborn-histogram"}),n.createElement(m.Z,{imgName:"24_Histogram_with_boxplot_on_top",caption:"How to split the chart window to display a boxplot on top of the histogram",linkTo:"/24-histogram-with-a-boxplot-on-top-seaborn"}),n.createElement(m.Z,{imgName:"25_Histogram_of_several_variables1",caption:"Compare the distribution of several groups on the same chart",linkTo:"/25-histogram-with-several-variables-seaborn"}),n.createElement(m.Z,{imgName:"25_Histogram_of_several_variables2",caption:"Use small multiple to compare the distribution of several groups",linkTo:"/25-histogram-with-several-variables-seaborn"}),n.createElement(m.Z,{imgName:"82_seaborn_jointplot1",caption:"Histogram can be added around a scatterplot to show each variable distributions",linkTo:"/82-marginal-plot-with-seaborn"}),n.createElement(m.Z,{imgName:"82_seaborn_jointplot6",caption:"Histogram can be added around a 2d density chart to show x and y variable distributions",linkTo:"/82-marginal-plot-with-seaborn"}))),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Quick (matplotlib)"},n.createElement(d.rS,null)," Quick start (Matplotlib)"),n.createElement(s.Z,{className:"align-items-center"},n.createElement(p.Z,{md:6},n.createElement("p",null,n.createElement(h.Link,{to:"/matplotlib"},"Matplotlib")," can also build decent histograms easily. It provides a ",n.createElement("code",null,"hist()")," function that accept a vector of numeric values as input."),n.createElement("p",null,"It also provides all the options you can think of to customize the binning and the genreral appearance.")),n.createElement(p.Z,{md:6},n.createElement(h.Link,{to:"/basic-histogram-in-matplotlib"},n.createElement(g.Z,{imgName:"basic-histogram-in-matplotlib",caption:"The most basic histogram one can make with python and matplotlib"})))),n.createElement(u.Z,null,w)),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(d.rS,null),"Histograms with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,"As usual ",n.createElement(h.Link,{to:"/matplotlib"},"matplotlib")," is perfectly skilled to build nice histogram, but require some more work camparing to"," ",n.createElement(h.Link,{to:"/seaborn"},"seaborn")," to get a good looking figure."),n.createElement("p",null,"The examples below should help you to get started with matplotlib histograms. They go from a very"," ",n.createElement(h.Link,{to:"/basic-histogram-in-matplotlib"},"basic version")," and then show how to customize it, like adding"," ",n.createElement(h.Link,{to:"/basic-histogram-in-matplotlib"},"annotation"),"."),n.createElement(s.Z,null,n.createElement(m.Z,{imgName:"basic-histogram-in-matplotlib",caption:"The most basic histogram with matplotlib.",linkTo:"/basic-histogram-in-matplotlib"}),n.createElement(m.Z,{imgName:"basic-histogram-in-matplotlib2",caption:"Reduce chart opacity and add annotation (median represented in vertical line)",linkTo:"/basic-histogram-in-matplotlib"}),n.createElement(m.Z,{imgName:"density-mirror-histogram",caption:"Mirror density chart to compare the distribution of 2 variables",linkTo:"/density-mirror"}),n.createElement(m.Z,{imgName:"504-histogram-with-colored-tails",caption:"A histogram with bars being colored differently based on thresholds",linkTo:"/504-histogram-with-colored-tails"}),n.createElement(m.Z,{imgName:"506-histogram-with-small-mutliples",caption:"Use small multiple to compare the distribution of several groups or several variables",linkTo:"/506-histogram-with-small-mutliples"}))),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Quick (pandas)"},n.createElement(d.JK,null)," Quick start (Pandas)"),n.createElement(s.Z,{className:"align-items-center"},n.createElement(p.Z,{md:6},n.createElement("p",null,n.createElement(h.Link,{to:"/pandas"},"Pandas")," can build decent histograms easily. It provides different functions like ",n.createElement("code",null,"hist()")," ","and ",n.createElement("code",null,"plot()")," that need a pandas dataframe (or series) as input."),n.createElement("p",null,"Since it's based on ",n.createElement(h.Link,{to:"/matplotlib"},"matplotlib"),", it provides all the options you can think of to customize the binning and the genreral appearance.")),n.createElement(p.Z,{md:6},n.createElement(h.Link,{to:"/527-introduction-to-histogram-with-pandas"},n.createElement(g.Z,{imgName:"527-introduction-to-histogram-with-pandas",caption:"The most basic histogram one can make with python and pandas"})))),n.createElement(u.Z,null,k)),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement("h2",{id:"Pandas"},n.createElement(d.JK,null),"Histograms with ",n.createElement("code",null,"Pandas")),n.createElement("p",null,n.createElement(h.Link,{to:"/pandas"},"Pandas")," is not the most common Python library to build histograms, but it can be used to build decent ones. It provides different functions like ",n.createElement("code",null,"hist()")," and"," ",n.createElement("code",null,"plot()")," from matplotlib."),n.createElement("p",null,"The examples below should help you to get started with",n.createElement(h.Link,{to:"/527-introduction-to-histogram-with-pandas"}," ","basic pandas histograms"),"."),n.createElement(s.Z,null,n.createElement(m.Z,{imgName:"527-introduction-to-histogram-with-pandas",caption:"The most basic histogram with pandas",linkTo:"/527-introduction-to-histogram-with-pandas"}),n.createElement(m.Z,{imgName:"528-customizing-histogram-with-pandas",caption:"Customize title, labels and bins of histograms with pandas",linkTo:"/528-customizing-histogram-with-pandas"}),n.createElement(m.Z,{imgName:"529-multi-group-histogram-pandas-1",caption:"Show the distribution of 2 groups or variables on a single graph",linkTo:"/529-multi-group-histogram-pandas"}),n.createElement(m.Z,{imgName:"529-multi-group-histogram-pandas-2",caption:"Use small multiple to compare the distribution of several groups on the same chart",linkTo:"/529-multi-group-histogram-pandas"}))),n.createElement(b.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(l.Z,null,n.createElement(c.Z,{chartFamily:"distribution"}))),n.createElement(b.Z,null),n.createElement(l.Z,null,n.createElement(r.Z,null)),n.createElement(b.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-histogram-js-f63a1a3c38410f9b7c50.js.map