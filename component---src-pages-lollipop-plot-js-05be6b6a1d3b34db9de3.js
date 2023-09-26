"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[1416],{7128:function(e,t,l){l.d(t,{Z:function(){return i}});var o=l(7294),a=l(1883),n=l(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:l}=e;if(r.includes(t))return o.createElement("p",null,"TODO");const i=(0,a.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?o.createElement(o.Fragment,null,o.createElement("div",{className:"chartImageContainer"},o.createElement(n.G,{image:i.node.childImageSharp.gatsbyImageData,alt:l,className:"chartImageImg"}),l&&o.createElement("div",{className:"chartImageOverlay"},o.createElement("div",{className:"chartImageOverlayText"},o.createElement("p",null,l))))):null}},4596:function(e,t,l){l.d(t,{Z:function(){return i}});var o=l(7294),a=l(7128),n=l(1555),r=l(1883);function i(e){let{imgName:t,caption:l,linkTo:i}=e;return o.createElement(n.Z,{xs:12,md:4},o.createElement(r.Link,{to:i},o.createElement(a.Z,{imgName:t,caption:l})))}},9389:function(e,t,l){l.d(t,{H:function(){return a}});var o=l(7294);const a=e=>{let{title:t,seoDescription:l,keywords:a}=e;return o.createElement(o.Fragment,null,o.createElement("title",null,t),o.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),o.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),o.createElement("meta",{name:"description",content:l||"How to build a chart with Python"}),o.createElement("meta",{name:"author",content:"Yan Holtz"}),o.createElement("meta",{name:"keywords",content:a||"python, chart, graph, code, viz, dataviz"}),o.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),o.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),o.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),o.createElement("meta",{property:"og:description",content:l}),o.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}))}},2071:function(e,t,l){l.r(t),l.d(t,{Head:function(){return b},default:function(){return _}});var o=l(7294),a=l(429),n=l(2057),r=l(682),i=l(1190),c=l(4051),p=l(4596),m=l(8742),s=l(1883),h=l(4125),u=l(7128),d=l(1555),g=l(2737),E=l(3921),y=l(9389);const w="<p>A <a href='https://www.data-to-viz.com/graph/lollipop.html'>lollipop chart</a> is an alernative to the more usual <a href='https://www.python-graph-gallery.com/barplot'>barplot</a>. <code>Python</code> allows to build lollipops thanks to the <code>matplotlib</code> library, as shown in the examples below. The strategy here is to use the <code>stem()</code> function or to hack the <code>vline()</code> function depending on your input format.</p>",f="# Create a dataframe\nimport pandas as pd\ndf = pd.DataFrame({'group':list(map(chr, range(65, 85))), 'values':np.random.uniform(size=20) })\n\n# Reorder it following the values:\nordered_df = df.sort_values(by='values')\nmy_range=range(1,len(df.index)+1)\n\n# Make the plot\nplt.stem(ordered_df['values'])\nplt.xticks( my_range, ordered_df['group'])\n",b=()=>o.createElement(y.H,{title:"Lollipop chart",seoDescription:"A collection of lollipop plot examples made with Python, coming with explanation and reproducible code"});function _(){return o.createElement(n.Z,{isTocEnabled:!0},o.createElement(a.Z,{title:"Lollipop plot",description:w}),o.createElement(r.Z,null,o.createElement("h2",{id:"Quick"},"⏱ Quick start"),o.createElement(c.Z,{className:"align-items-center"},o.createElement(d.Z,{md:6},o.createElement("p",null,"A ",o.createElement("code",null,"lollipop plot")," displays each element of a dataset as a segment and a circle."),o.createElement("p",null," ","This is doable with ",o.createElement("code",null,"python")," and"," ",o.createElement("code",null,"Matplotlib")," thanks to the ",o.createElement("code",null,"stem()")," function that accepts a data frame as input.🔥")),o.createElement(d.Z,{md:6},o.createElement(s.Link,{to:"/180-basic-lollipop-plot"},o.createElement(u.Z,{imgName:"180_Basic_lolipop_plot2",caption:"Most basic lollipop plot with Python & Matplotlib."})))),o.createElement(g.Z,null,f)),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement("h2",{id:"Matplotlib"},o.createElement(h.rS,null),"Lollipop plot with ",o.createElement("code",null,"Matplotlib")),o.createElement("p",null,o.createElement("code",null,"Matplotlib")," is probably the most famous and flexible python library for data visualization. It is appropriate to build any kind of chart, including the lollipop plot thanks to its"," ",o.createElement("code",null,"stem()")," function."),o.createElement(c.Z,null,o.createElement(p.Z,{imgName:"180_Basic_lolipop_plot",caption:"Most basic lollipop. Will get you started with any kind of input format",linkTo:"/180-basic-lollipop-plot"}),o.createElement(p.Z,{imgName:"181_custom_lolliplot_2",caption:"Basic circle customizations: shape, size, color and more.",linkTo:"/181-custom-lollipop-plot"}),o.createElement(p.Z,{imgName:"181_custom_lolliplot_3",caption:"Change lollipop baseline position.",linkTo:"/181-custom-lollipop-plot"}),o.createElement(p.Z,{imgName:"182_vertical_lolipop_plot",caption:"Horizontal lollipop chart (more readable labels).",linkTo:"/182-vertical-lollipop-plot"}),o.createElement(p.Z,{imgName:"183_highlight_a_group_in_lolipop_plot",caption:"Highlight some specific groups in a lollipop.",linkTo:"/183-highlight-a-group-in-lollipop"}),o.createElement(p.Z,{imgName:"184_lolipop_plot_with_2_groups",caption:"Cleveland chart: a lollipop chart with 2 subgroups displayed under each row.",linkTo:"/184-lollipop-plot-with-2-groups"}),o.createElement(p.Z,{imgName:"185_lolipop_plot_with_conditional_color",caption:"Lollipop chart with conditional colors.",linkTo:"/185-lollipop-plot-with-conditional-color"}))),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement("h2",{id:"Best"},o.createElement(h.rS,null),"Best python lollipop plot examples"),o.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",o.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",o.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",o.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),o.createElement(c.Z,null,o.createElement(d.Z,{xs:12,md:6},o.createElement(s.Link,{to:"/web-lollipop-plot-with-python-mario-kart-64-world-records"},o.createElement(u.Z,{imgName:"web-lollipop-plot-with-python-mario-kart-64-world-records-square",caption:"A highly customized lollipop chart made with Python and Matplotlib. A work by Cédric Scherer to visualize some Mario Kart World records."}))),o.createElement(d.Z,{xs:12,md:6},o.createElement(s.Link,{to:"/web-lollipop-plot-with-python-the-office"},o.createElement(u.Z,{imgName:"web-lollipop-plot-with-python-the-office-square",caption:"A highly customized lollipop chart made with Python and Matplotlib to display a timeseries."}))),o.createElement(d.Z,{xs:12,md:6},o.createElement(s.Link,{to:"/web-circular-lollipop-plot-with-matplotlib"},o.createElement(u.Z,{imgName:"web-circular-lollipop-plot-with-matplotlib-square",caption:"A circular lollipop plot with customized layout, great color palette and in circle legend."}))))),o.createElement(E.Z,null),o.createElement("div",{className:"greySection",id:"related"},o.createElement(r.Z,null,o.createElement(m.Z,{chartFamily:"ranking"}))),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement(i.Z,null)),o.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-lollipop-plot-js-05be6b6a1d3b34db9de3.js.map