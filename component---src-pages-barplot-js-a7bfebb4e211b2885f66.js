"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[9201],{7128:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(1883),r=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(o.includes(t))return l.createElement("p",null,"TODO");const i=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(r.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(7128),r=a(1555),o=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return l.createElement(r.Z,{xs:12,md:4},l.createElement(o.Link,{to:i},l.createElement(n.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return o}});var l=a(7294),n=a(1883);function r(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const o=e=>{let{title:t,seoDescription:a,keywords:o}=e;return l.createElement(l.Fragment,null,l.createElement("title",null,t),l.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),l.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),l.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),l.createElement("meta",{name:"author",content:"Yan Holtz"}),l.createElement("meta",{name:"keywords",content:o||"python, chart, graph, code, viz, dataviz"}),l.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),l.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),l.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement("meta",{property:"og:description",content:a}),l.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement(n.Script,{id:"adthrive",strategy:"idle",src:r()}))}},9446:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return k}});var l=a(7294),n=a(429),r=a(1433),o=a(682),i=a(8728),c=a(4051),m=a(4596),s=a(8742),p=a(1883),h=a(4125),b=a(1555),u=a(2737),d=a(7128),E=a(3921),g=a(9389);const w=l.createElement(l.Fragment,null,l.createElement("p",null,"A ",l.createElement("a",{href:"https://www.data-to-viz.com/graph/barplot.html"},"barplot")," ","shows the relationship between a ",l.createElement("b",null,"numeric")," and a ",l.createElement("b",null,"categoric")," ","variable. Each entity of the categoric variable is represented as a"," ",l.createElement("b",null,"bar"),". The size of the bar represents its numeric value."," "),l.createElement("p",null,"This section shows how to build a barplot with ",l.createElement("code",null,"Python"),", using libraries like ",l.createElement("code",null,"Matplotlib")," and ",l.createElement("code",null,"Seaborn"),". It start by explaining how to build a very basic barplot, and then provides tutorials for more customized versions."),l.createElement("p",null,"Note that this page also provides guidelines on how to build"," ",l.createElement("b",null,"stacked")," and ",l.createElement("b",null,"grouped")," barplot, 2 common variatons useful when several levels of grouping are available.")),y="# Libraries\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Make a random dataset:\nheight = [3, 12, 5, 18, 45]\nbars = ('A', 'B', 'C', 'D', 'E')\ny_pos = np.arange(len(bars))\n\n# Create bars\nplt.bar(y_pos, height)\n\n# Create names on the x-axis\nplt.xticks(y_pos, bars)\n\n# Show graphic\nplt.show()\n",f=()=>l.createElement(g.H,{title:"Barplot",seoDescription:"A collection of barplot examples made with Python, coming with explanation and reproducible code"});function k(){return l.createElement(r.Z,{isTocEnabled:!0},l.createElement(n.Z,{title:"Barplot",description:w}),l.createElement(o.Z,null,l.createElement("h2",{id:"Quick"},"⏱ Quick start"),l.createElement(c.Z,{className:"align-items-center"},l.createElement(b.Z,{md:6},l.createElement("p",null,l.createElement("code",null,"Matplotlib")," is pretty convenient to build a barplot thanks to its ",l.createElement("code",null,"bar()")," function. Seaborn works perfectly as well, see its dedicated section.🔥")),l.createElement(b.Z,{md:6},l.createElement(p.Link,{to:"/1-basic-barplot"},l.createElement(d.Z,{imgName:"1_basic_barplot",caption:"Most basic barplot with Python & Matplotlib."})))),l.createElement(u.Z,null,y)),l.createElement(E.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Matplotlib"},l.createElement(h.rS,null),"Barplot with ",l.createElement("code",null,"Matplotlib")),l.createElement("p",null,l.createElement("code",null,"Matplotlib")," is probably the most famous and flexible python library for data visualization. It is appropriate to build any kind of chart, including the barchart thanks to its ",l.createElement("code",null,"bar()")," ","function."),l.createElement("p",null,"The examples below should get you started. They go from"," ",l.createElement(p.Link,{to:"/1-basic-barplot"},"basic examples")," to the details on how to ",l.createElement(p.Link,{to:"/3-control-color-of-barplots"},"customize")," a barplot appropriately."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"2_horizontal_barplot",caption:"Horizontal barplot, handy to make labels more readable.",linkTo:"/2-horizontal-barplot"}),l.createElement(m.Z,{imgName:"3_control_color_barplot2",caption:"Barplot and color customization.",linkTo:"/3-control-color-of-barplots"}),l.createElement(m.Z,{imgName:"3_control_color_barplot4",caption:"Change the bar stroke colors.",linkTo:"/3-control-color-of-barplots"}),l.createElement(m.Z,{imgName:"4_add_title_and_axe_labels",caption:"Title and axis labels with Matplotlib.",linkTo:"/4-add-title-and-axis-label"}),l.createElement(m.Z,{imgName:"5_custom_space_between_bars",caption:"Custom bar width. Can be handy to illustrate the sample size.",linkTo:"/5-control-width-and-space-in-barplots"}),l.createElement(m.Z,{imgName:"5_custom_width_of_bars",caption:"Custom space between bars.",linkTo:"/5-control-width-and-space-in-barplots"}),l.createElement(m.Z,{imgName:"6_change_texture",caption:"Change bar texture.",linkTo:"/3-control-color-of-barplots"}),l.createElement(m.Z,{imgName:"7_increase_margin",caption:"More space under X axis to fit long labels.",linkTo:"/7-custom-barplot-layout"}),l.createElement(m.Z,{imgName:"7_custom_label",caption:"Customize the bar labels.",linkTo:"/7-custom-barplot-layout"}),l.createElement(m.Z,{imgName:"8_confidence_interval",caption:"Barplot with confidence interval.",linkTo:"/8-add-confidence-interval-on-barplot"}),l.createElement(m.Z,{imgName:"10_barplot_with_number_of_observations",caption:"Highly customized barplot with colors, legend, labels and more.",linkTo:"/10-barplot-with-number-of-observation"}))),l.createElement(E.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Seaborn"},l.createElement(h._I,null),"Barplot with ",l.createElement("code",null,"Seaborn")),l.createElement("p",null,l.createElement("code",null,"Seaborn")," is definitely a good alternative to"," ",l.createElement("code",null,"Matplotlib")," to build a barplot. It comes with a"," ",l.createElement("code",null,"barplot()")," function that will get you started in minutes."),l.createElement("p",null,"As often, note that the ",l.createElement("code",null,"Seaborn")," alternative allows to write less code to build the chart, but is slighlty more limited in term of customization"),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"basic-barplot-with-seaborn1",caption:"Most basic barplot with Python and Seaborn",linkTo:"/basic-barplot-with-seaborn"}),l.createElement(m.Z,{imgName:"basic-barplot-with-seaborn2",caption:"Make your barplot vertical by swapping the x and y parameters",linkTo:"/basic-barplot-with-seaborn"}),l.createElement(m.Z,{imgName:"basic-barplot-with-seaborn3",caption:"Learn how to reorder groups in a seaborn barplot",linkTo:"/basic-barplot-with-seaborn"}),l.createElement(m.Z,{imgName:"error-bars-on-barplot",caption:"Add error bars on a seaborn barplot",linkTo:"/error-bars-on-barplot"}),l.createElement(m.Z,{imgName:"web-population-pyramid",caption:"Population pyramid of a marketing funnel",linkTo:"/web-population-pyramid"}))),l.createElement(E.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Stacked & Grouped"},l.createElement(h.rS,null),"Stacked and Grouped barplot with ",l.createElement("code",null,"Matplotlib")),l.createElement("p",null,l.createElement("u",null,"Stacked")," and ",l.createElement("u",null,"Grouped")," barplots are a variation of the more simple barplot. They display the value of a numeric variable for each group and subgroups of a dataset. Subgroups can be stacked (stacked barplot) or set one beside the other (grouped barplot)."),l.createElement("p",null,"The three examples below are in-depth tutorial explaining how to build them with Python."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"12_stacked_barplot",caption:"How to build a stacked barplot with Python.",linkTo:"/12-stacked-barplot-with-matplotlib"}),l.createElement(m.Z,{imgName:"12_grouped_barplot",caption:"How to build a grouped barplot with Python.",linkTo:"/11-grouped-barplot"}),l.createElement(m.Z,{imgName:"12_stacked_percent_barplot",caption:"How to build a percent stacked barplot with Python..",linkTo:"/13-percent-stacked-barplot"}))),l.createElement(E.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Stacked & Grouped"},l.createElement(h._I,null),"Stacked and Grouped barplot with ",l.createElement("code",null,"Seaborn")),l.createElement("p",null,"The ",l.createElement("code",null,"barplot()")," function of ",l.createElement("code",null,"seaborn")," allows to quickly build a grouped barplot. You just have to pass the column used for subgrouping to the ",l.createElement("code",null,"hue")," parameter."),l.createElement("p",null,"It gets a bit more tricky for stacked and percent stacked barplot, but the examples below should hopefully help."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"grouped-barplot1",caption:"Grouped barplot with python and seaborn",linkTo:"/grouped-barplot"}),l.createElement(m.Z,{imgName:"stacked-barplot-seaborn",caption:"Stacked barchart with python and seaborn",linkTo:"/stacked-and-percent-stacked-barplot"}),l.createElement(m.Z,{imgName:"stacked-percent-barplot-seaborn",caption:"Percent stacked barchart with python and seaborn",linkTo:"/stacked-and-percent-stacked-barplot"})),l.createElement("div",{style:{margin:"0 auto"}},l.createElement(p.Link,{to:"/grouped-barplot"},l.createElement(d.Z,{imgName:"grouped-barplot2",caption:"Grouped barplot with small multiples to show 3 levels of grouping."})))),l.createElement(E.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"From the web"},l.createElement(h.rS,null),"From the web"),l.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",l.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",l.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),l.createElement(c.Z,null,l.createElement(b.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-circular-barplot-with-matplotlib"},l.createElement(d.Z,{imgName:"web-circular-barplot-with-matplotlib-square",caption:"A circular barchart with several features per group made with Python and Matplotlib."}))),l.createElement(b.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-horizontal-barplot-with-labels-the-economist"},l.createElement(d.Z,{imgName:"web-horizontal-barplot-with-labels-the-economist-square",caption:"Lear how to mimick the style of the Economist on this horizontal barplot."}))),l.createElement(b.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-heatmap-and-radial-barchart-plastics"},l.createElement(d.Z,{imgName:"web-heatmap-and-radial-barchart-plastics-square2",caption:"How to combine a heatmap with a radial barplot on the same figure with heaps of visual tweaks."}))))),l.createElement(E.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(o.Z,null,l.createElement(s.Z,{chartFamily:"ranking"}))),l.createElement(E.Z,null),l.createElement(o.Z,null,l.createElement(i.Z,null)),l.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-barplot-js-a7bfebb4e211b2885f66.js.map