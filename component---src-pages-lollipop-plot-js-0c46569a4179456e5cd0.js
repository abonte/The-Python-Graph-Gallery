"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[1416],{7128:function(e,t,l){l.d(t,{Z:function(){return i}});var a=l(7294),o=l(1883),n=l(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:l}=e;if(r.includes(t))return a.createElement("p",null,"TODO");const i=(0,o.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(n.G,{image:i.node.childImageSharp.gatsbyImageData,alt:l,className:"chartImageImg"}),l&&a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,l))))):null}},4596:function(e,t,l){l.d(t,{Z:function(){return i}});var a=l(7294),o=l(7128),n=l(1555),r=l(1883);function i(e){let{imgName:t,caption:l,linkTo:i}=e;return a.createElement(n.Z,{xs:12,md:4},a.createElement(r.Link,{to:i},a.createElement(o.Z,{imgName:t,caption:l})))}},9389:function(e,t,l){l.d(t,{H:function(){return o}});var a=l(7294);const o=e=>{let{title:t,seoDescription:l,keywords:o}=e;return a.createElement(a.Fragment,null,a.createElement("title",null,t),a.createElement("html",{lang:"en"}),a.createElement("meta",{name:"description",content:l||"How to build a chart with Python"}),a.createElement("meta",{name:"author",content:"Yan Holtz"}),a.createElement("meta",{name:"keywords",content:o||"python, chart, graph, code, viz, dataviz"}),a.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),a.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),a.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),a.createElement("meta",{property:"og:description",content:l}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:site",content:"@R_Graph_Gallery"}))}},2071:function(e,t,l){l.r(t),l.d(t,{Head:function(){return f},default:function(){return _}});var a=l(7294),o=l(429),n=l(311),r=l(682),i=l(8728),c=l(4051),p=l(4596),m=l(8742),s=l(1883),h=l(944),d=l(7128),u=l(1555),g=l(2737),E=l(3921),y=l(9389);const w="<p>A <a href='https://www.data-to-viz.com/graph/lollipop.html'>lollipop chart</a> is an alernative to the more usual <a href='https://python-graph-gallery.com/barplot'>barplot</a>. <code>Python</code> allows to build lollipops thanks to the <code>matplotlib</code> library, as shown in the examples below. The strategy here is to use the <code>stem()</code> function or to hack the <code>vline()</code> function depending on your input format.</p>",b="# Create a dataframe\nimport pandas as pd\ndf = pd.DataFrame({'group':list(map(chr, range(65, 85))), 'values':np.random.uniform(size=20) })\n\n# Reorder it following the values:\nordered_df = df.sort_values(by='values')\nmy_range=range(1,len(df.index)+1)\n\n# Make the plot\nplt.stem(ordered_df['values'])\nplt.xticks( my_range, ordered_df['group'])\n",f=()=>a.createElement(y.H,{title:"Lollipop chart | Python & Matplotlib examples",seoDescription:"A collection of lollipop plot examples made with Python, coming with explanation and reproducible code"});function _(){return a.createElement(n.Z,{isTocEnabled:!0},a.createElement(o.Z,{title:"Lollipop plot",description:w}),a.createElement(r.Z,null,a.createElement("h2",{id:"Quick"},"⏱ Quick start"),a.createElement(c.Z,{className:"align-items-center"},a.createElement(u.Z,{md:6},a.createElement("p",null,"A ",a.createElement("code",null,"lollipop plot")," displays each element of a dataset as a segment and a circle."),a.createElement("p",null," ","This is doable with ",a.createElement("code",null,"python")," and"," ",a.createElement("code",null,"Matplotlib")," thanks to the ",a.createElement("code",null,"stem()")," function that accepts a data frame as input.🔥")),a.createElement(u.Z,{md:6},a.createElement(s.Link,{to:"/180-basic-lollipop-plot"},a.createElement(d.Z,{imgName:"180_Basic_lolipop_plot2",caption:"Most basic lollipop plot with Python & Matplotlib."})))),a.createElement(g.Z,null,b)),a.createElement(E.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"Matplotlib"},a.createElement(h.rS,null),"Lollipop plot with ",a.createElement("code",null,"Matplotlib")),a.createElement("p",null,a.createElement("code",null,"Matplotlib")," is probably the most famous and flexible python library for data visualization. It is appropriate to build any kind of chart, including the lollipop plot thanks to its"," ",a.createElement("code",null,"stem()")," function."),a.createElement(c.Z,null,a.createElement(p.Z,{imgName:"180_Basic_lolipop_plot",caption:"Most basic lollipop. Will get you started with any kind of input format",linkTo:"/180-basic-lollipop-plot"}),a.createElement(p.Z,{imgName:"181_custom_lolliplot_2",caption:"Basic circle customizations: shape, size, color and more.",linkTo:"/181-custom-lollipop-plot"}),a.createElement(p.Z,{imgName:"181_custom_lolliplot_3",caption:"Change lollipop baseline position.",linkTo:"/181-custom-lollipop-plot"}),a.createElement(p.Z,{imgName:"182_vertical_lolipop_plot",caption:"Horizontal lollipop chart (more readable labels).",linkTo:"/182-vertical-lollipop-plot"}),a.createElement(p.Z,{imgName:"183_highlight_a_group_in_lolipop_plot",caption:"Highlight some specific groups in a lollipop.",linkTo:"/183-highlight-a-group-in-lollipop"}),a.createElement(p.Z,{imgName:"184_lolipop_plot_with_2_groups",caption:"Cleveland chart: a lollipop chart with 2 subgroups displayed under each row.",linkTo:"/184-lollipop-plot-with-2-groups"}),a.createElement(p.Z,{imgName:"185_lolipop_plot_with_conditional_color",caption:"Lollipop chart with conditional colors.",linkTo:"/185-lollipop-plot-with-conditional-color"}))),a.createElement(E.Z,null),a.createElement(r.Z,null,a.createElement("h2",{id:"Best"},a.createElement(h.rS,null),"Best python lollipop plot examples"),a.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",a.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",a.createElement("a",{href:"https://python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",a.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),a.createElement(c.Z,null,a.createElement(u.Z,{xs:12,md:6},a.createElement(s.Link,{to:"/web-lollipop-plot-with-python-mario-kart-64-world-records"},a.createElement(d.Z,{imgName:"web-lollipop-plot-with-python-mario-kart-64-world-records-square",caption:"A highly customized lollipop chart made with Python and Matplotlib. A work by Cédric Scherer to visualize some Mario Kart World records."}))),a.createElement(u.Z,{xs:12,md:6},a.createElement(s.Link,{to:"/web-lollipop-plot-with-python-the-office"},a.createElement(d.Z,{imgName:"web-lollipop-plot-with-python-the-office-square",caption:"A highly customized lollipop chart made with Python and Matplotlib to display a timeseries."}))),a.createElement(u.Z,{xs:12,md:6},a.createElement(s.Link,{to:"/web-circular-lollipop-plot-with-matplotlib"},a.createElement(d.Z,{imgName:"web-circular-lollipop-plot-with-matplotlib-square",caption:"A circular lollipop plot with customized layout, great color palette and in circle legend."}))),a.createElement(u.Z,{xs:12,md:6},a.createElement(s.Link,{to:"/web-dumbell-chart"},a.createElement(d.Z,{imgName:"web-dumbell-chart",caption:"Advanced lollipop chart with a dumbell style."}))),a.createElement(u.Z,{xs:12,md:10},a.createElement(s.Link,{to:"/web-lollipop-with-background-image"},a.createElement(d.Z,{imgName:"web-lollipop-with-background-image",caption:"Lollipop chart with a background image."}))))),a.createElement(E.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(r.Z,null,a.createElement(m.Z,{chartFamily:"ranking"}))),a.createElement(E.Z,null),a.createElement(r.Z,null,a.createElement(i.Z,null)),a.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-lollipop-plot-js-0c46569a4179456e5cd0.js.map