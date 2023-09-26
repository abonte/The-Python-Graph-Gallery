"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[8669],{7128:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),n=a(1883),r=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){let{imgName:t,caption:a}=e;if(o.includes(t))return l.createElement("p",null,"TODO");const c=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return c?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(r.G,{image:c.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),n=a(7128),r=a(1555),o=a(1883);function c(e){let{imgName:t,caption:a,linkTo:c}=e;return l.createElement(r.Z,{xs:12,md:4},l.createElement(o.Link,{to:c},l.createElement(n.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return n}});var l=a(7294);const n=e=>{let{title:t,seoDescription:a,keywords:n}=e;return l.createElement(l.Fragment,null,l.createElement("title",null,t),l.createElement("html",{lang:"en"}),l.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),l.createElement("meta",{name:"author",content:"Yan Holtz"}),l.createElement("meta",{name:"keywords",content:n||"python, chart, graph, code, viz, dataviz"}),l.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),l.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),l.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement("meta",{property:"og:description",content:a}),l.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}))}},6082:function(e,t,a){a.r(t),a.d(t,{Head:function(){return Z},default:function(){return v}});var l=a(7294),n=a(429),r=a(2057),o=a(682),c=a(1190),i=a(4051),m=a(4596),s=a(8742),p=a(1883),h=a(4125),d=a(1555),u=a(5005),E=a(7128),g=a(2737),y=a(3921),w=a(9389);const b="# libraries\nimport pandas\nimport matplotlib.pyplot as plt\nfrom pandas.tools.plotting import parallel_coordinates\n\n# Take the iris dataset\nimport seaborn as sns\ndata = sns.load_dataset('iris')\n\n# Make the plot\nparallel_coordinates(data, 'species', colormap=plt.get_cmap(\"Set2\"))\nplt.show()\n",f="<p>A <a href='https://www.data-to-viz.com/graph/parallel.html'>parallel plot</a> plot allows to compare the feature of several individual observations (series) on a set of numeric variables. Interestingly, <code>Pandas</code> is probably the best way to plot a parallel coordinate plot with python. <code>Plotly</code> is a good alternative to plot interactive versions though.</p>",Z=()=>l.createElement(w.H,{title:"Parallel coordinate plot",seoDescription:"A collection of parallel coordinate chart examples made with Python, coming with explanation and reproducible code"});function v(){return l.createElement(r.Z,{isTocEnabled:!0},l.createElement(n.Z,{title:"Parallel coordinate plot",description:f}),l.createElement(o.Z,null,l.createElement("h2",{id:"Quick"},"⏱ Quick start"),l.createElement(i.Z,{className:"align-items-center"},l.createElement(d.Z,{md:6},l.createElement("p",null,l.createElement("code",null,"Pandas")," is probably the best way to make a parallel coordinate plot. This library is most often used for data wrangling, but it offers a ",l.createElement("code",null,"parallel_coordinates()")," ","function dedicated to it.🔥")),l.createElement(d.Z,{md:6},l.createElement(p.Link,{to:"/150-parallel-plot-with-pandas"},l.createElement(E.Z,{imgName:"150_Parrallele_plot_with_pandas",caption:"Most basic parallel plot with Python and Pandas."})))),l.createElement(g.Z,null,b)),l.createElement(y.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Pandas"},"Parallel coordinate chart with ",l.createElement("code",null,"Python")," and"," ",l.createElement("code",null,"Pandas")),l.createElement("p",null,"The following examples are dedicated to the"," ",l.createElement("code",null,"parallel_coordinates()")," function of ",l.createElement("code",null,"Pandas"),". It shows how to apply the most common types of customization."),l.createElement("p",null,"If you need to go further, here is the complete"," ",l.createElement("a",{href:"https://pandas.pydata.org/pandas-docs/stable/reference/api/pandas.plotting.parallel_coordinates.html"},"pandas documentation")),l.createElement(i.Z,null,l.createElement(m.Z,{imgName:"150_Parrallele_plot_with_pandas",caption:"Basic parallel coordinate char",linkTo:"/150-parallel-plot-with-pandas"}))),l.createElement(y.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Seaborn"},"Parallel coordinate chart with ",l.createElement("code",null,"Seaborn")),l.createElement("p",null,l.createElement(p.Link,{href:"/seaborn"},"Seaborn")," and its ",l.createElement("code",null,"lineplot()")," ","function is another very good alternative when it comes to create parallel coordinate charts with Python."," "),l.createElement("p",null,"Used in conjunction with ",l.createElement(p.Link,{href:"/matplotlib"},"matplotlib"),", it allows to reach a great level of customization as shown in the example below"),l.createElement(i.Z,null,l.createElement(m.Z,{imgName:"501-parallel-plot-seaborn",caption:"Basic parallel coordinate chart with Seaborn",linkTo:"/501-parallel-plot-seaborn"}),l.createElement(m.Z,{imgName:"web-slope-chart-matplotlib-square",caption:"A polished slope chart made with Python, Seaborn and Matplotlib",linkTo:"/web-slope-chart-matplotlib"}))),l.createElement(y.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Plotly"},l.createElement(h.fw,null),"Interactive parallel coordinate with ",l.createElement("code",null,"plotly")),l.createElement("p",null,l.createElement("code",null,"Plotly")," is a python library that makes the link with Javascript to build interactive charts that you can display in a browser."),l.createElement("p",null,"The following example is a parallel chart made with this library and the ",l.createElement("code",null,"parallel_coordinates()")," function."),l.createElement("div",{className:"mx-auto"},l.createElement("iframe",{src:"/interactiveCharts/parallel-coordinate-plot-plotly.html",title:"parallel coordinate chart with plotly",style:{border:"none",width:"800px",height:"500px"}})),l.createElement(p.Link,{to:"/parallel-coordinate-plot-plotly"},l.createElement(u.Z,{size:"sm"},"See code"))),l.createElement(y.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Best"},l.createElement(h.rS,null),"Best python parallel plot examples"),l.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",l.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",l.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),l.createElement(i.Z,null,l.createElement(d.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-radar-chart-with-matplotlib"},l.createElement(E.Z,{imgName:"web-radar-chart-with-matplotlib-square",caption:"A radar chart can be an alternative to a parallel coordinate plot."}))),l.createElement(d.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-lemurs-parallel-chart"},l.createElement(E.Z,{imgName:"web-lemurs-parallel-chart-square",caption:"A parallel plot or slope chart with groups, legend, title and annotation."}))))),l.createElement(y.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(o.Z,null,l.createElement(s.Z,{chartFamily:"ranking"}))),l.createElement(y.Z,null),l.createElement(o.Z,null,l.createElement(c.Z,null)),l.createElement(y.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-parallel-plot-js-5c3532980c11e2030549.js.map