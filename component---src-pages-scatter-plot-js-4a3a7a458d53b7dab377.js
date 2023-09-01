"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[7993],{7128:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(1883),o=a(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(r.includes(t))return l.createElement("p",null,"TODO");const i=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(o.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(7128),o=a(1555),r=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return l.createElement(o.Z,{xs:12,md:4},l.createElement(r.Link,{to:i},l.createElement(n.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return n}});var l=a(7294);const n=e=>{let{title:t,seoDescription:a,keywords:n}=e;return l.createElement(l.Fragment,null,l.createElement("title",null,t),l.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),l.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),l.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),l.createElement("meta",{name:"author",content:"Yan Holtz"}),l.createElement("meta",{name:"keywords",content:n||"python, chart, graph, code, viz, dataviz"}),l.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),l.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),l.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement("meta",{property:"og:description",content:a}),l.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement("script",null,'(function (w, d) {\n               w.adthrive = w.adthrive || {};\n               w.adthrive.cmd = w.adthrive.cmd || [];\n               w.adthrive.plugin = "adthrive-ads-manual";\n               w.adthrive.host = "ads.adthrive.com";\n               var s = d.createElement("script");\n               s.async = true;\n               s.referrerpolicy = "no-referrer-when-downgrade";\n               s.src =\n                 "https://" +\n                 w.adthrive.host +\n                 "/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer=" +\n                 w.encodeURIComponent(w.location.href) +\n                 "&cb=" +\n                 (Math.floor(Math.random() * 100) + 1);\n               var n = d.getElementsByTagName("script")[0];\n               n.parentNode.insertBefore(s, n);\n             })(window, document);'))}},888:function(e,t,a){a.r(t),a.d(t,{Head:function(){return v},default:function(){return _}});var l=a(7294),n=a(429),o=a(1433),r=a(682),i=a(1190),c=a(4051),m=a(4596),s=a(8742),p=a(1883),h=a(4125),d=a(1555),u=a(5005),g=a(2737),b=a(7128),E=a(3921),w=a(9389);const y=l.createElement(l.Fragment,null,l.createElement("p",null,"A"," ",l.createElement("a",{href:"https://www.data-to-viz.com/graph/scatter.html"},"scatter plot")," ","displays the relationship between 2 numeric variables, one being displayed on the X axis (horizontal) and the other on the Y axis (vertical). Each data point is represented as a ",l.createElement("b",null,"circle"),"."),l.createElement("p",null,"Several tools allow to build scatterplots in python."," ",l.createElement(p.Link,{href:"/seaborn"},"Seaborn")," is probably the most straightforward library for the job, but ",l.createElement(p.Link,{href:"/matplotlib"},"matplotlib")," allows a greater level of customization. If you are looking for an interactive chart, ",l.createElement(p.Link,{href:"/plotly"},"plotly")," is definitely the way to go."),l.createElement("p",null,"This page provides many examples of scatterplots made with those Python tools, going from ",l.createElement("b",null,"simple examples")," to ",l.createElement("b",null,"highly customized")," ","versions.")),f='# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset(\'iris\')\n\n# use the function regplot to make a scatterplot\nsns.regplot(x=df["sepal_length"], y=df["sepal_width"])\n',k="# libraries\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport pandas as pd\n\n# Create a dataset:\ndf=pd.DataFrame({'x_values': range(1,101), 'y_values': np.random.randn(100)*15+range(1,101) })\n\n# plot\nplt.plot( 'x_values', 'y_values', data=df, linestyle='none', marker='o')\nplt.show()\n",v=()=>l.createElement(w.H,{title:"Scatterplot",seoDescription:"A collection of scatterplot examples made with Python, coming with explanation and reproducible code"});function _(){return l.createElement(o.Z,{isTocEnabled:!0},l.createElement(n.Z,{title:"Scatterplot",description:y}),l.createElement(r.Z,null,l.createElement("h2",{id:"Quick start"},"⏱ Quick start (Seaborn)"),l.createElement(c.Z,{className:"align-items-center"},l.createElement(d.Z,{md:6},l.createElement("p",null,"The ",l.createElement("code",null,"regplot()")," function of the ",l.createElement("code",null,"Seaborn")," ","library is definitely the best way to build a scatterplot in minutes. 🔥"),l.createElement("p",null,"Simply pass a numeric column of a data frame to both the"," ",l.createElement("code",null,"x")," and ",l.createElement("code",null,"y")," variable and the function will handle the rest.")),l.createElement(d.Z,{md:6},l.createElement(p.Link,{to:"/40-basic-scatterplot-seaborn"},l.createElement(b.Z,{imgName:"40_Basic_Scatterplot_seaborn",caption:"Basic boxplot with Python and Seaborn from various data input formats."})))),l.createElement(g.Z,null,f),l.createElement("br",null)),l.createElement(E.Z,null),l.createElement("div",{className:"greySection"},l.createElement(r.Z,null,l.createElement("h2",{id:"Common caveats"},"⚠️ Scatterplot and overplotting"),l.createElement("p",null,"The main danger with scatterplots is"," ",l.createElement("a",{href:"https://www.data-to-viz.com/caveat/overplotting.html"},"overplotting"),". When the sample size gets big, circles tend to overlap, making the figure unreadable."),l.createElement("p",null,"Several workarounds exist to fix the issue, like using opacity or switching to another chart type:"),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"134_Fighting_overplotting1",caption:"Basic boxplot. You can quickly read the median, quartiles and outliers of each group.",linkTo:"/134-how-to-avoid-overplotting-with-python"}),l.createElement(m.Z,{imgName:"134_Fighting_overplotting2",caption:"If you add individual points with jitter, a bimodal distribution appears for group B",linkTo:"/134-how-to-avoid-overplotting-with-python"}),l.createElement(m.Z,{imgName:"134_Fighting_overplotting10",caption:"If you have a very large dataset, the violin plot is a better alternative than jittering",linkTo:"/134-how-to-avoid-overplotting-with-python"})),l.createElement(p.Link,{to:"/134-how-to-avoid-overplotting-with-python"},l.createElement(u.Z,{size:"sm"},"Code and more")))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Seaborn"},l.createElement(h._I,null),"Scatterplots with ",l.createElement("code",null,"Seaborn")),l.createElement("p",null,l.createElement(p.Link,{to:"/seaborn"},"Seaborn")," is a python library allowing to make better charts easily. The ",l.createElement("code",null,"regplot()")," function should get you started in minutes. The"," ",l.createElement(p.Link,{to:"/40-basic-scatterplot-seaborn"},"first example")," below explains how to build the most basic scatterplot with python. Then, several types of customization are described: adding a"," ",l.createElement(p.Link,{to:"/42-custom-linear-regression-fit-seaborn"},"regression")," ","line, tweaking ",l.createElement(p.Link,{to:"/41-control-marker-features"},"markers")," ","and ",l.createElement(p.Link,{to:"/44-control-axis-limits-of-plot-seaborn"},"axis"),", adding ",l.createElement(p.Link,{to:"/46-add-text-annotation-on-scatterplot"},"labels")," ","and more."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"40_Basic_Scatterplot_seaborn",caption:"Most basic scatterplot with seaborn",linkTo:"/40-basic-scatterplot-seaborn"}),l.createElement(m.Z,{imgName:"42_Scatterplot_custom_linear_fit_seaborn",caption:"Add a regression thanks to the fit_reg parameter",linkTo:"/42-custom-linear-regression-fit-seaborn"}),l.createElement(m.Z,{imgName:"41_Scatterplot_change_marker_shape_seaborn",caption:"Customize markers: color, size, opacity, type and more",linkTo:"/41-control-marker-features"}),l.createElement(m.Z,{imgName:"43_seaborn_map_color_to_a_avariable3",caption:"Color dots according to a group",linkTo:"/43-use-categorical-variable-to-color-scatterplot-seaborn"}),l.createElement(m.Z,{imgName:"44_seaborn_control_axis_limits",caption:"Control X and Y axes limits",linkTo:"/44-control-axis-limits-of-plot-seaborn"}),l.createElement(m.Z,{imgName:"45_set_color_of_each_point_in_scatterplot_seaborn",caption:"Control the marker's color according to their coordinates",linkTo:"/45-control-color-of-each-marker-seaborn"}),l.createElement(m.Z,{imgName:"46_add_text_annotation_scatterplot_seaborn3",caption:"Add labels manually on your scatterplot",linkTo:"/46-add-text-annotation-on-scatterplot"}))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Related to Seaborn "},"💡 Other charts involving scatterplots and ",l.createElement("code",null,"Seaborn")),l.createElement("p",null,"If you are interested in scatterplots, some other chart could be useful to you."),l.createElement("p",null,"A scatterplot with"," ",l.createElement(p.Link,{to:"/82-marginal-plot-with-seaborn"},"marginal distribution")," ","allows to check the distribution of both the ",l.createElement("code",null,"x")," and"," ",l.createElement("code",null,"y")," variables. A"," ",l.createElement(p.Link,{to:"/111-custom-correlogram"},"correlogram")," allows to check the relationship between each pair of numeric variables in a dataset."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"82_seaborn_jointplot4",caption:"Scatterplot with marginal distributions",linkTo:"/82-marginal-plot-with-seaborn"}),l.createElement(m.Z,{imgName:"111_Correlogram_custom4",caption:"Build a correlogram with the pairplot function",linkTo:"/111-custom-correlogram"}))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Quick start"},"⏱ Quick start (Matplotlib)"),l.createElement(c.Z,{className:"align-items-center"},l.createElement(d.Z,{md:6},l.createElement("p",null,l.createElement(p.Link,{to:"/matplotlib"},"Matplotlib")," also requires only a few lines of code to draw a scatterplot thanks to its"," ",l.createElement("code",null,"plot()")," function. The resulting chart is not as good-looking, but the function probably offers more flexibility in term of customization.")),l.createElement(d.Z,{md:6},l.createElement(p.Link,{to:"/130-basic-matplotlib-scatterplot"},l.createElement(b.Z,{imgName:"130_Basic_Matplotlib_Scatterplot",caption:"Most basic scatterplot with Matplotlib."})))),l.createElement(g.Z,null,k),l.createElement("br",null)),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Matplotlib"},l.createElement(h.rS,null),"Scatterplots with ",l.createElement("code",null,"Matplotlib")),l.createElement("p",null,l.createElement("code",null,"Matplotlib")," is another great alternative to build scatterplots with python. As often, it takes a bit more lines of code to get a decent chart, but allows more customization."),l.createElement("p",null,"The examples below should get you covered for all the most common problems: adding"," ",l.createElement(p.Link,{to:"/193-annotate-matplotlib-chart"},"markers"),", adding",l.createElement(p.Link,{to:"/193-annotate-matplotlib-chart"},"labels"),", changing"," ",l.createElement(p.Link,{to:"/131-custom-a-matplotlib-scatterplot"},"shapes")," and more."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"130_Basic_Matplotlib_Scatterplot",caption:"Most basic scatterplot with Matplotlib",linkTo:"/130-basic-matplotlib-scatterplot"}),l.createElement(m.Z,{imgName:"131_Custom_Matplotlib_Scatterplot5",caption:"Customize marker features: size, color, stroke, type and more",linkTo:"/131-custom-a-matplotlib-scatterplot"}),l.createElement(m.Z,{imgName:"193_annotate6",caption:"Display a math equation on your matplotlib chart",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"193_annotate5",caption:"Matplotlib: add horizontal and vertical ablines",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"193_annotate2",caption:"Highlight a specific area of the chart with Matplotlib",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"193_annotate1",caption:"Add an annotation to highlight a specific marker",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"manhattan-plot-with-matplotlib",caption:"How to build a Manhattan plot with Python and Matplotlib",linkTo:"/manhattan-plot-with-matplotlib"}),l.createElement(m.Z,{imgName:"custom-legend-with-matplotlib2",caption:"Scatterplot with grouping and legend",linkTo:"/custom-legend-with-matplotlib"}),l.createElement(m.Z,{imgName:"custom-legend-with-matplotlib6",caption:"Legend customization: how to control location, add a background, customize labels and markers and more",linkTo:"/custom-legend-with-matplotlib"}),l.createElement(m.Z,{imgName:"scatterplot-and-log-scale-in-matplotlib",caption:"How to use a log scale for the X or the Y axis.",linkTo:"/scatterplot-and-log-scale-in-matplotlib"}),l.createElement(m.Z,{imgName:"scatterplot-with-regression-fit-in-matplotlib",caption:"How to compute and add a linear regression to a scatterplot with Python and matplotlib",linkTo:"/scatterplot-with-regression-fit-in-matplotlib"}))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Plotly"},l.createElement(h.Ne,null),"Scatterplots with ",l.createElement("code",null,"Plotly")),l.createElement("p",null,"If you are looking for an ",l.createElement("b",null,"interactive")," scatterplot,"," ",l.createElement(p.Link,{href:"/plotly"},"plotly")," is definitely the way to go."),l.createElement("p",null,"Interactivity is a real plus for scatterplots. It is very useful to have a ",l.createElement("b",null,"tooltip")," associated to every markers to get some additional information about it. ",l.createElement("b",null,"Zooming")," on a specific area of the scatterplot is also very valuable sometimes."),l.createElement("p",null,"The examples below should help you get started quickly with the plotly API:"),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"511-interactive-scatterplot-with-plotly-1",caption:"Most basic scatterplot with plotly",linkTo:"/511-interactive-scatterplot-with-plotly"}),l.createElement(m.Z,{imgName:"511-interactive-scatterplot-with-plotly-2",caption:"Plotly scatterplot with several levels of grouping",linkTo:"/511-interactive-scatterplot-with-plotly"}),l.createElement(m.Z,{imgName:"511-interactive-scatterplot-with-plotly-3",caption:"Plotly scatterplot with a trend line",linkTo:"/511-interactive-scatterplot-with-plotly"}))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Best"},l.createElement(h.rS,null),"Best python scatterplot examples"),l.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",l.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",l.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works."),l.createElement("p",null,"The ",l.createElement(p.Link,{to:"/web-text-repel-with-matplotlib"},"first example")," ","below demos how to add clean labels on a scatterplot, automatically avoiding overlapping. It also explains how to control background, fonts, titles and more."),l.createElement("p",null,"If you want to display your work here, please drop me a word or even better, submit a"," ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),l.createElement(c.Z,null,l.createElement(d.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-text-repel-with-matplotlib"},l.createElement(b.Z,{imgName:"web-text-repel-with-matplotlib-square",caption:"Learn how to use the adjustText library to add many labels with no overlaps."}))),l.createElement(d.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-scatterplot-text-annotation-and-regression-matplotlib"},l.createElement(b.Z,{imgName:"web-scatterplot-text-annotation-and-regression-matplotlib-square",caption:"Scatterplot with regression fit, group colors and non-overlapping labels."}))),l.createElement(d.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-scatterplot-astronaut"},l.createElement(b.Z,{imgName:"web-scatterplot-astronaut-square",caption:"Dark mode scatterplot with custom annotations, title and explanations. All of that with a very good appearance!"}))),l.createElement(d.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-scatterplot-with-images-in-circles"},l.createElement(b.Z,{imgName:"web-scatterplot-with-images-in-circles",caption:"A scatter plot with images inside each marker to provide additional context"}))))),l.createElement(E.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(r.Z,null,l.createElement(s.Z,{chartFamily:"correlation"}))),l.createElement(E.Z,null),l.createElement(r.Z,null,l.createElement(i.Z,null)),l.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-scatter-plot-js-4a3a7a458d53b7dab377.js.map