"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[9672],{7128:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(1883),o=a(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(r.includes(t))return l.createElement("p",null,"TODO");const i=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(o.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),n=a(7128),o=a(1555),r=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return l.createElement(o.Z,{xs:12,md:4},l.createElement(r.Link,{to:i},l.createElement(n.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return n}});var l=a(7294);const n=e=>{let{title:t,seoDescription:a,keywords:n}=e;return l.createElement(l.Fragment,null,l.createElement("title",null,t),l.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),l.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),l.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),l.createElement("meta",{name:"author",content:"Yan Holtz"}),l.createElement("meta",{name:"keywords",content:n||"python, chart, graph, code, viz, dataviz"}),l.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),l.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),l.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement("meta",{property:"og:description",content:a}),l.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}))}},8393:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return Z}});var l=a(7294),n=a(429),o=a(2057),r=a(682),i=a(1190),c=a(4051),m=a(4596),s=a(8742),p=a(1883),b=a(4125),u=a(1555),h=a(2737),d=a(7128),g=a(3921),E=a(9389);const w="<p>A <a href='https://www.data-to-viz.com/graph/bubble.html'>bubble plot</a> is a <a href='https://www.python-graph-gallery.com/scatter-plot'>scatterplot</a> where the circle size is mapped to the value of a third numeric variable. This section shows many bubble plots made with <code>Python</code>, using both the <code>Matplotlib</code> and <code>Seaborn</code> libraries.</p>",y='# libraries\nimport matplotlib.pyplot as plt\nimport seaborn as sns\nfrom gapminder import gapminder # data set\n\n# data\ndata = gapminder.loc[gapminder.year == 2007]\n\n# use the scatterplot function to build the bubble map\nsns.scatterplot(data=data, x="gdpPercap", y="lifeExp", size="pop", legend=False, sizes=(20, 2000))\n\n# show the graph\nplt.show()\n',f=()=>l.createElement(E.H,{title:"Bubble plot",seoDescription:"A collection of bubble chart examples made with Python, coming with explanation and reproducible code"});function Z(){return l.createElement(o.Z,{isTocEnabled:!0},l.createElement(n.Z,{title:"Bubble plot",description:w}),l.createElement(g.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Quick"},"⏱ Quick start"),l.createElement(c.Z,{className:"align-items-center"},l.createElement(u.Z,{md:6},l.createElement("p",null,"The ",l.createElement("code",null,"scatterplot()")," function of ",l.createElement("code",null,"seaborn")," ","also allows to build bubble charts. Indeed, it has a"," ",l.createElement("code",null,"size")," parameter that controls circle size according to a numeric variable of the dataset.🔥")),l.createElement(u.Z,{md:6},l.createElement(p.Link,{to:"/bubble-plot-with-seaborn"},l.createElement(d.Z,{imgName:"bubble-plot-with-seaborn",caption:"Basic bubble chart with Python and Seaborn."})))),l.createElement(h.Z,null,y),l.createElement("br",null)),l.createElement(g.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Seaborn"},l.createElement(b._I,null),"Bubble plot with ",l.createElement("code",null,"Seaborn")),l.createElement("p",null,l.createElement("code",null,"Seaborn")," is the best tool to quickly build a quality bubble chart. The example below are based on the famous"," ",l.createElement("code",null,"gapminder")," dataset that shows the relationship between gdp per capita, life expectancy and population of world countries."),l.createElement("p",null,"The examples below start simple by calling the"," ",l.createElement("code",null,"scatterplot()")," function with the minimum set of parameters. It then show how to change bubble colors to represent a fourth variable, improve general styling, tweak the legend and more."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"bubble-plot-with-seaborn",caption:"Basic bubble chart with Python and Seaborn.",linkTo:"/bubble-plot-with-seaborn"}))),l.createElement(g.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Matplotlib"},l.createElement(b.rS,null),"Bubble plot with ",l.createElement("code",null,"Matplotlib")),l.createElement("p",null,"As for ",l.createElement(p.Link,{to:"/scatter-plot"},"scatterplots"),","," ",l.createElement("code",null,"Matplotlib")," will help us build a bubble plot thanks to the the ",l.createElement("code",null,"plt.scatter()")," function. This function provides a"," ",l.createElement("code",null,"s")," parameter allowing to pass a third variable that will be mapped to the markers size."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"270_Basic_Bubble_plot",caption:"Most basic bubble plot with Python and Matplotlib",linkTo:"/270-basic-bubble-plot"}),l.createElement(m.Z,{imgName:"271_Bubble_plot_customization1",caption:"Bubble plot customization: color",linkTo:"/271-custom-your-bubble-plot"}),l.createElement(m.Z,{imgName:"271_Bubble_plot_customization2",caption:"Bubble plot customization: shape",linkTo:"/271-custom-your-bubble-plot"}),l.createElement(m.Z,{imgName:"271_Bubble_plot_customization3",caption:"Bubble plot customization: size",linkTo:"/271-custom-your-bubble-plot"}),l.createElement(m.Z,{imgName:"271_Bubble_plot_customization4",caption:"Bubble plot customization: stroke",linkTo:"/271-custom-your-bubble-plot"})),l.createElement("p",null,"Note that it is a common practice to map a fourth variable to the markers colors thanks to the ",l.createElement("code",null,"c")," parameter. This way, you're now looking a 4 variables in the same time, on the same chart 🎉."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"272_Bubble_plot_with_mapped_color",caption:"A bubble chart width 4 dimensions: x, y, size & color",linkTo:"/272-map-a-color-to-bubble-plot"}),l.createElement(m.Z,{imgName:"bubble-plot-gapminder",caption:"Bubble plot of the gapminder dataset",linkTo:"/341-python-gapminder-animation"})),l.createElement("p",null,"A very common task when it comes to bubble chart is to add a proper legend to explain what colors and sizes mean. The blogpost below is a deep-dive into matplotlib legend and should be of great help for this"),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"custom-legend-with-matplotlib6",caption:"Legend customization: how to control location, add a background, customize labels and markers and more",linkTo:"/custom-legend-with-matplotlib"}))),l.createElement(g.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Best"},l.createElement(b.rS,null),"Best python bubble chart examples"),l.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",l.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",l.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),l.createElement(c.Z,null,l.createElement(u.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-text-repel-with-matplotlib"},l.createElement(d.Z,{imgName:"web-text-repel-with-matplotlib-square",caption:"Learn how to use the adjustText library to add many labels with no overlaps."}))),l.createElement(u.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-scatterplot-text-annotation-and-regression-matplotlib"},l.createElement(d.Z,{imgName:"web-scatterplot-text-annotation-and-regression-matplotlib-square",caption:"Scatterplot with regression fit, group colors and non-overlapping labels."}))),l.createElement(u.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-scatterplot-astronaut"},l.createElement(d.Z,{imgName:"web-scatterplot-astronaut-square",caption:"Dark mode scatterplot with custom annotations, title and explanations. All of that with a very good appearance!"}))),l.createElement(u.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-scatterplot-with-images-in-circles"},l.createElement(d.Z,{imgName:"web-scatterplot-with-images-in-circles",caption:"A scatter plot with images inside each marker to provide additional context"}))),l.createElement(u.Z,{xs:12,md:4},l.createElement(p.Link,{to:"/web-bubble-plot-with-annotations-and-custom-features"},l.createElement(d.Z,{imgName:"web-bubble-plot-with-annotations-and-custom-features",caption:"A scatter plot with custom annotations and colors, with some markers being circled"}))))),l.createElement(g.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(r.Z,null,l.createElement(s.Z,{chartFamily:"correlation"}))),l.createElement(g.Z,null),l.createElement(r.Z,null,l.createElement(i.Z,null)),l.createElement(g.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-bubble-plot-js-19ee84e94de594862913.js.map