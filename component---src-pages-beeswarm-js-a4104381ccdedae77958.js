"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[6332],{7128:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(1883),r=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(o.includes(t))return n.createElement("p",null,"TODO");const i=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(7128),r=a(1555),o=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return n.createElement(r.Z,{xs:12,md:4},n.createElement(o.Link,{to:i},n.createElement(l.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return o}});var n=a(7294),l=a(1883);function r(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const o=e=>{let{title:t,seoDescription:a,keywords:o}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),n.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:o||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement(l.Script,{id:"adthrive",strategy:"post-hydrate",src:r()}))}},5349:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return v}});var n=a(7294),l=a(429),r=a(1433),o=a(682),i=a(1190),m=a(4051),c=a(4596),s=a(8742),h=a(1883),p=a(4125),u=a(1555),d=a(2737),b=a(7128),E=a(3921),w=a(9389);const g=n.createElement(n.Fragment,null,n.createElement("p",null,"A ",n.createElement("a",{href:"https://www.data-to-viz.com"},"beeswarm plot")," or"," ",n.createElement("b",null,"swarmplot")," is a type of data visualization that displays individual data points in a way that they ",n.createElement("b",null,"don't overlap"),', resulting in a "swarming" effect that resembles a ',n.createElement("b",null,"swarm of bees"),"."),n.createElement("p",null,"This chart type helps in revealing the ",n.createElement("b",null,"distribution")," of the data along a numeric variable, highlighting the density and variation of the data more effectively than traditional"," ",n.createElement("a",{href:"https://python-graph-gallery.com/scatter-plot/"},"scatter plots")," ","or ",n.createElement("a",{href:"https://python-graph-gallery.com/boxplot/"},"box plots"),"."),n.createElement("p",null,"This section provides many beeswarm chart examples made with Python, using"," ",n.createElement(h.Link,{href:"/seaborn/"},"seaborn")," or"," ",n.createElement(h.Link,{href:"/matplotlib/"},"matplotlib"),". Examples cover the most common use-cases, but also show how far in term of customization it is possible to go.")),y="# Libraries\nimport seaborn as sns\nimport matplotlib.pyplot as plt\nimport numpy as np\n\n# Data\nmy_variable = np.random.normal(loc=10, scale=5, size=100)\n\n# Plot\nsns.swarmplot(y=my_variable)\nplt.show() # Display the chart\n",f=()=>n.createElement(w.H,{title:"Beeswarm",seoDescription:"A collection of beeswarm chart examples made with Python, coming with explanation and reproducible code"});function v(){return n.createElement(r.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Beeswarm",description:g,chartType:"beeswarm"}),n.createElement(o.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(m.Z,{className:"align-items-center"},n.createElement(u.Z,{md:6},n.createElement("p",null,n.createElement("a",{href:"https://python-graph-gallery.com/seaborn/"},"Seaborn")," ","comes with a ",n.createElement("code",null,"swarmplot()")," function that is made for beeswarm charts."),n.createElement("p",null,"It expects a ",n.createElement("code",null,"x")," or a ",n.createElement("code",null,"y")," argument that provides a set of ",n.createElement("b",null,"numeric values"),"."),n.createElement("p",null,"Many options exist. You can check the"," ",n.createElement("a",{href:"https://seaborn.pydata.org/generated/seaborn.swarmplot.html"},"official documentation")," ","or the examples below.")),n.createElement(u.Z,{md:6},n.createElement(h.Link,{to:"/505-Introduction-to-swarm-plot-in-seaborn"},n.createElement(b.Z,{imgName:"505-Introduction-to-swarm-plot-in-seaborn-1",caption:"Most basic beeswarm plot built with Python and Seaborn"})))),n.createElement(d.Z,null,y)),n.createElement(E.Z,null),n.createElement("div",{className:"greySection"},n.createElement(o.Z,null,n.createElement("h2",{id:"Warning"},"🤔 When to use a beeswarm chart?"),n.createElement("p",null,"The beeswarm chart is a very good alternative to the"," ",n.createElement("a",{href:"https://python-graph-gallery.com/boxplot/"},"boxplot")," that"," ",n.createElement("a",{href:"https://www.data-to-viz.com/caveat/boxplot.html"},"hides the underlying dataset"),"."),n.createElement("p",null,"However, do not try to use it with a ",n.createElement("b",null,"very big")," dataset. Indeed, avoiding circle overlap will be possible with a small amount of data points, but it will get impossible otherwise. In this case, take a look to the"," ",n.createElement("a",{href:"https://python-graph-gallery.com/violin-plot/"},"violin chart")," ","instead."),n.createElement("p",null,"To read more about this, visit"," ",n.createElement("a",{href:"https://www.data-to-viz.com/caveat/boxplot.html"},"data-to-viz.com")," ","that has a dedicated article."),n.createElement("br",null),n.createElement("br",null))),n.createElement(E.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Seaborn"},n.createElement(p._I,null),"Beeswarm with ",n.createElement("code",null,"Seaborn")),n.createElement("p",null,n.createElement("code",null,"Seaborn")," is a python library allowing to make better charts easily. The ",n.createElement("code",null,"swarmplot()")," function should get you started in minutes. The examples below aim at showcasing the various possibilities this function offers."),n.createElement(m.Z,null,n.createElement(c.Z,{imgName:"505-Introduction-to-swarm-plot-in-seaborn-1",caption:"Most basic beeswarm plot built with Python and Seaborn",linkTo:"/505-Introduction-to-swarm-plot-in-seaborn"}),n.createElement(c.Z,{imgName:"505-Introduction-to-swarm-plot-in-seaborn-2",caption:"Make your beeswarm plot horizontal by swapping axes",linkTo:"/505-Introduction-to-swarm-plot-in-seaborn"}),n.createElement(c.Z,{imgName:"505-Introduction-to-swarm-plot-in-seaborn-3",caption:"Build a beeswarm plot for several groups in the dataset",linkTo:"/505-Introduction-to-swarm-plot-in-seaborn"}))),n.createElement(E.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(p.rS,null),"Beeswarm with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,"Building a beeswarm plot with matplotlib requires more manual work since ",n.createElement("b",null,"no built-in function exists for the job"),"."),n.createElement("p",null,"The following blog-post explains how to build yours from scratch. The function divides the data into ",n.createElement("b",null,"bins"),", calculates the"," ",n.createElement("b",null,"upper bounds")," for each bin, and then arranges the data points in each bin to create the ",n.createElement("b",null,"horizontal spread")," in the plot, ensuring they don't overlap."),n.createElement("p",null,"Once the dot position is available, it is possible to render it using",n.createElement("b",null,"matplotlib"),":"),n.createElement(m.Z,null,n.createElement(c.Z,{imgName:"509-introduction-to-swarm-plot-in-matplotlib-1",caption:"Most basic beeswarm plot built with Matplotlib",linkTo:"/509-introduction-to-swarm-plot-in-matplotlib"}),n.createElement(c.Z,{imgName:"509-introduction-to-swarm-plot-in-matplotlib-2",caption:"Beeswarm chart with multiple groups",linkTo:"/509-introduction-to-swarm-plot-in-matplotlib"}),n.createElement(c.Z,{imgName:"509-introduction-to-swarm-plot-in-matplotlib-3",caption:"Beeswarm and boxplot combination",linkTo:"/509-introduction-to-swarm-plot-in-matplotlib"}))),n.createElement(E.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Best"},n.createElement(p.rS,null),"Best beeswarm examples"),n.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",n.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",n.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",n.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),n.createElement(m.Z,null,n.createElement(u.Z,{xs:12,md:6},n.createElement(h.Link,{to:"/web-ggbetweenstats-with-matplotlib"},n.createElement(b.Z,{imgName:"web-ggbetweenstats-with-matplotlib-square",caption:"A combination of a violin plot and a boxplot. Allows the comparison of several groups with statistical test results on top."}))))),n.createElement(E.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement(s.Z,{chartFamily:"distribution"}))),n.createElement(E.Z,null),n.createElement(o.Z,null,n.createElement(i.Z,null)),n.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-beeswarm-js-a4104381ccdedae77958.js.map