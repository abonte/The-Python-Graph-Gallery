"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[7304],{7128:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(1883),o=a(8032);const i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function r(e){let{imgName:t,caption:a}=e;if(i.includes(t))return l.createElement("p",null,"TODO");const r=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return r?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(o.G,{image:r.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return r}});var l=a(7294),n=a(7128),o=a(1555),i=a(1883);function r(e){let{imgName:t,caption:a,linkTo:r}=e;return l.createElement(o.Z,{xs:12,md:4},l.createElement(i.Link,{to:r},l.createElement(n.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return i}});var l=a(7294),n=a(1883);function o(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const i=e=>{let{title:t,seoDescription:a,keywords:i}=e;return l.createElement(l.Fragment,null,l.createElement("title",null,t),l.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),l.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),l.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),l.createElement("meta",{name:"author",content:"Yan Holtz"}),l.createElement("meta",{name:"keywords",content:i||"python, chart, graph, code, viz, dataviz"}),l.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),l.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),l.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement("meta",{property:"og:description",content:a}),l.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement(n.Script,{id:"adthrive",strategy:"post-hydrate",src:o()}))}},7200:function(e,t,a){a.r(t),a.d(t,{Head:function(){return _},default:function(){return x}});var l=a(7294),n=a(429),o=a(1433),i=a(682),r=a(1190),c=a(4051),m=a(4596),s=a(8742),h=a(1883),p=a(4125),u=a(8984),d=a(1555),g=a(2737),b=a(7128),E=a(3921),f=a(5005),y=a(9389);const w="<p><code>Matplotlib</code> is the most famous library for data visualization with <code>python</code>. It allows to create literally every type of chart with a great level of customization. This page provides some general tips that can be applied on any kind of chart made with <code>matplotlib</code> like customizing titles or colors. If you're looking at creating a specific chart type, visit <a href='https://www.python-graph-gallery.com'>the gallery</a> instead.</p>",k="# library\nimport numpy as np\nimport matplotlib.pyplot as plt\n\n# Create data\nx=range(1,6)\ny=[1,4,6,8,4]\n\n# Area plot\nplt.fill_between(x, y)\nplt.show()\n",Z="# import libraries\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Create a data frame\ndf = pd.DataFrame ({'Group':  ['A', 'B', 'C', 'D', 'E'], 'Value': [1,5,4,3,9]})\n\n# Create horizontal bars\nplt.barh(y=df.Group, width=df.Value);\n\n# Add title\nplt.title('A simple barplot');\n",v="# import libraries\nimport pandas as pd\nimport matplotlib.pyplot as plt\n\n# Create a data frame\ndf = pd.DataFrame ({'Group':  ['A', 'B', 'C', 'D', 'E'], 'Value': [1,5,4,3,9]})\n\n# Initialize a Figure and an Axes\nfig, ax = plt.subplots()\n\n# Fig size\nfig.set_size_inches(9,9)\n\n# Create horizontal bars\nax.barh(y=df.Group, width=df.Value);\n\n# Add title\nax.set_title('A simple barplot');\n",T=["seaborn-darkgrid","seaborn-notebook","classic","seaborn-ticks","grayscale","bmh","seaborn-talk","dark_background","ggplot","fivethirtyeight","_classic_test","seaborn-colorblind","seaborn-deep","seaborn-whitegrid","seaborn-bright","seaborn-poster","seaborn-muted","seaborn-paper","seaborn-white","seaborn-pastel","seaborn-dark","seaborn","seaborn-dark-palette"],_=()=>l.createElement(y.H,{title:"Matplotlib",seoDescription:"A collection of charts, tips and tricks on the Matplotlib Python library."});function x(){const[e,t]=l.useState(T[0]);T.map(((a,n)=>l.createElement(u.Z,{type:"radio",active:!0,key:n,className:"functionButton",variant:"secondary",size:"sm",value:a,checked:e===a,onChange:e=>t(e.currentTarget.value)},a)));return l.createElement(o.Z,{isTocEnabled:!0},l.createElement(n.Z,{title:"Matplotlib",description:w}),l.createElement(i.Z,null,l.createElement("h2",{id:"Quick"},"⏱ Quick start"),l.createElement(c.Z,{className:"align-items-center"},l.createElement(d.Z,{md:6},l.createElement("p",null,l.createElement("code",null,"Matplotlib")," is the most famous python data visualization library. It is widely used and most of other viz libraries (like ",l.createElement("code",null,"seaborn"),") are actually built on top of it."),l.createElement("p",null,"Once installed, matplotlib must be imported, usually using"," ",l.createElement("code",null,"import matplotlib.pyplot as plt"),". You can then use use the functions available in the ",l.createElement("code",null,"plt")," object.")),l.createElement(d.Z,{md:6},l.createElement(h.Link,{to:"/240-basic-area-chart"},l.createElement(b.Z,{imgName:"240_basic_area_chart",caption:"The most basic area chart one can make with python and matplotlib"})))),l.createElement(g.Z,null,k)),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Lexicon"},l.createElement(p.rS,null),"Basic vocabulary"),l.createElement("p",null,"The figure below describes the anatomy of a ",l.createElement("code",null,"matplotlib")," ","charts. It names all the main components, names that you need to know to understand the documentation properly."),l.createElement("p",null,"⚠️ ",l.createElement("u",null,"Disclaimer"),": this figure comes from the very complete"," ",l.createElement("a",{href:"https://matplotlib.org/faq/usage_faq.html#coding-styles"},"matplotlib documentation"),". Have a look at it for a thorough explanation on how this library works."),l.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},l.createElement(b.Z,{imgName:"matplotlib_vocabulary",caption:"Anatomy of a matplotlib chart: all the basic vocabulary you need to know to understand the documentation properly"})),l.createElement("a",{href:"https://matplotlib.org/faq/usage_faq.html#coding-styles"},l.createElement(f.Z,{size:"sm"},"Matplotlib doc"))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"APIs"},l.createElement(p.rS,null),"Two distinct APIs"),l.createElement("p",null,"There are 2 main ways to build a chart with matplotlib: the"," ",l.createElement("code",null,"pyplot API")," and the ",l.createElement("code",null,"object-oriented API"),"."),l.createElement("p",null,"➡️ ",l.createElement("code",null,"pyplot API")),l.createElement("p",null,"Pyplot is a collection of functions, each function applying a change to a figure. For instance, ",l.createElement("code",null,"plt.barh()")," will build a barplot and ",l.createElement("code",null,"plt.title()")," will add a title to it."),l.createElement(g.Z,null,Z),l.createElement("br",null),l.createElement("br",null),l.createElement("p",null,"➡️ ",l.createElement("code",null,"object oriented API")),l.createElement("p",null,"The object oriented API usually starts by initializing one"," ",l.createElement("code",null,"Figure")," object and one or more ",l.createElement("code",null,"Axes")," object using the ",l.createElement("code",null,"subplot()")," function. Then the methods of those objects will be used to apply changes to the chart."),l.createElement(g.Z,null,v),l.createElement("br",null),l.createElement("br",null),l.createElement("p",null,"See how the syntax slightly differs between both options? (",l.createElement("code",null,"plt.title")," versus ",l.createElement("code",null,"ax.set_title()"),". This is pretty confusing and I advise to have a look to the"," ",l.createElement("a",{href:"https://matplotlib.org/stable/api/index.html#usage-patterns"},"official documentation")," ","for a more thorough explanation. In the gallery, both APIs are used.")),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Title"},l.createElement(p.rS,null),"Customizing titles"),l.createElement("p",null,"The title is a key part of a good chart. It has to ",l.createElement("u",null,"summarize")," ","its key message in a few words. Always avoid to simply repeat what is displayed on each axis. Try to provide some more insight allowing to understand the main result instead."),l.createElement("p",null,"The ",l.createElement(h.Link,{to:"/190-custom-matplotlib-title"},"post #190")," goes in depth on how to customize the ",l.createElement("code",null,"matplotlib"),"title. All the main types of change are descried: changing its color, adding a subtitle, using math formulas and so on. Give it a go!"),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"190_Custom_title6",caption:"Python chart with subtitle and custom color",linkTo:"/190-custom-matplotlib-title"}),l.createElement(m.Z,{imgName:"190_Custom_title7",caption:"Add a math formula in title with Matplotlib",linkTo:"/190-custom-matplotlib-title"}),l.createElement(m.Z,{imgName:"190_Custom_title5",caption:"Control the height of the matplotlib title",linkTo:"/190-custom-matplotlib-title"}))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Annotation"},l.createElement(p.rS,null),"Annotation"),l.createElement("p",null,"Annotation is a key part of a great visualization. It transforms a simple chart in a whole piece of story telling. Before you share your graph with anyone, make sure the key insight are highlighted with labels, shapes or color."),l.createElement("p",null,"All those kind of annotation are built thanks to various matplotlib functions like ",l.createElement("code",null,"annotate()")," or ",l.createElement("code",null,"add_patch()"),". The blogposts showcased below should get you started with it."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"193_annotate1",caption:"Add a label with a segment",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"193_annotate2",caption:"Add a square to highlight an area",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"193_annotate3",caption:"Add a circle to highlight an area",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"193_annotate4",caption:"Add a segment",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"193_annotate5",caption:"Add vertical and horizontal ablines",linkTo:"/193-annotate-matplotlib-chart"}),l.createElement(m.Z,{imgName:"193_annotate6",caption:"Annotate with an equation",linkTo:"/193-annotate-matplotlib-chart"}))),l.createElement(E.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(i.Z,null,l.createElement("h2",{id:"Cheatsheets"},"✨ Cheatsheets"),l.createElement("p",null,"It's pretty hard to remember all the matplotlib associated vocabulary. The ",l.createElement(h.Link,{to:"/cheat-sheets"},"cheatsheet section")," ","is here to help, with a few sheets that you'll probably want to use on a daily basis."),l.createElement(c.Z,null,l.createElement(d.Z,{xs:12,md:4},l.createElement(h.Link,{to:"/cheat-sheets"},l.createElement(b.Z,{imgName:"matplotlib_cheat_sheet",caption:"Matplotlib cheatsheet by Datacamp"}))),l.createElement(d.Z,{xs:12,md:4},l.createElement(h.Link,{to:"/cheat-sheets"},l.createElement(b.Z,{imgName:"matplotlib-python-official-cheatsheet1",caption:"Official Matplotlib cheatsheet (page 1)"}))),l.createElement(d.Z,{xs:12,md:4},l.createElement(h.Link,{to:"/cheat-sheets"},l.createElement(b.Z,{imgName:"matplotlib-python-official-cheatsheet2",caption:"Official Matplotlib cheatsheet (page 2)"})))),l.createElement("br",null))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Font"},l.createElement(p.rS,null),"Custom fonts"),l.createElement("p",null,"Using custom fonts adds a nice touch to your graph and make it shine among all the other plots using defaults. The blog-post below will guide you through the process: installing a font and calling it with matplotlib functions."),l.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},l.createElement(h.Link,{to:"/custom-fonts-in-matplotlib"},l.createElement(b.Z,{imgName:"custom-fonts-in-matplotlib",caption:"How to use custom fonts with matplotlib"})))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Margin"},l.createElement(p.rS,null),"Add margin around a ",l.createElement("code",null,"matplotlib")," chart"),l.createElement("p",null,"It is a common struggle to deal with the margins around the chart. Fortunately this is pretty straightforward thanks to the"," ",l.createElement("code",null,"subplots_adjust()")," function as explained in the examples below."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"192_increase_margin2",caption:"Increase the bottom margin of a matplotlib chart.",linkTo:"/192-about-matplotlib-margins"}),l.createElement(m.Z,{imgName:"192_increase_margin4",caption:"Increase the top margin to fit a title",linkTo:"/192-about-matplotlib-margins"}))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Subplot"},l.createElement(p.rS,null),"Split the figure in subplots"),l.createElement("p",null,"It can be really useful to split your graphic window in several parts, in order to display several charts in the same time. The"," ",l.createElement("code",null,"subplot()")," function of ",l.createElement("code",null,"matplotlib")," allows to do it quickly with a great level of customization."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"194_matplotlib_subplot4",caption:"Split the figure in 4 charts of same size.",linkTo:"/194-split-the-graphic-window-with-subplot"}),l.createElement(m.Z,{imgName:"194_matplotlib_subplot6",caption:"Split the figure with a custom layout",linkTo:"/192-about-matplotlib-margins"}),l.createElement(m.Z,{imgName:"194_matplotlib_subplot9",caption:"Manage chart size on subplots",linkTo:"/192-about-matplotlib-margins"})),l.createElement("p",null,"Additional note: how to remove some unused entries in a grid using the"," ",l.createElement("code",null,"ax.remove()")," function:"),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"how-to-remove-axis-in-matplotlib",caption:"How to remove some unused entries in a chart grid.",linkTo:"/how-to-remove-axis-in-matplotlib"}))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Theme"},l.createElement(p.rS,null),"Available style sheets"),l.createElement("p",null,l.createElement("code",null,"Matplotlib")," comes with a set of 26 pre-built themes to style your chart easily."," ",l.createElement(h.Link,{to:"/199-matplotlib-style-sheets"},"This post")," is dedicated to this feature, explaining how to use ",l.createElement("code",null,"plt.style.use()")," to pick a theme up."),l.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},l.createElement(h.Link,{to:"/199-matplotlib-style-sheets"},l.createElement(b.Z,{imgName:"199-matplotlib-style-sheets-538-full",caption:"Customize a matplotlib chart with a preset theme"})))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Axis"},l.createElement(p.rS,null),"Customizing axis"),l.createElement("p",null,l.createElement("code",null,"Matplotlib")," allows every kind of axis configuration. It is mainly done thanks to the ",l.createElement("code",null,"tick_params()"),","," ",l.createElement("code",null,"xticks()")," and ",l.createElement("code",null,"xlabels()")," functions. The"," ",l.createElement(h.Link,{to:"/191-custom-axis-on-matplotlib-chart"},"post #191")," will guide you through all the possibilities."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"191_Custom_axis1",caption:"Change the axis title and its appearance",linkTo:"/191-custom-axis-on-matplotlib-chart"}),l.createElement(m.Z,{imgName:"191_Custom_axis2",caption:"Control axis labels and ticks look",linkTo:"/191-custom-axis-on-matplotlib-chart"}),l.createElement(m.Z,{imgName:"191_Custom_axis6",caption:"Control axis limit with the xlim() function",linkTo:"/191-custom-axis-on-matplotlib-chart"}),l.createElement(m.Z,{imgName:"basic-time-series-with-matplotlib",caption:"How to deal with the date format. How to represent those dates properly on the X axis.",linkTo:"/basic-time-series-with-matplotlib"}),l.createElement(m.Z,{imgName:"scatterplot-and-log-scale-in-matplotlib",caption:"How to use a log scale for the X or the Y axis.",linkTo:"/scatterplot-and-log-scale-in-matplotlib"}))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Legend"},l.createElement(p.rS,null),"Customizing the legend"),l.createElement("p",null,"If you have several colors or marker on your chart, you can't escape the hassle of building a nice legend. The blogpost linked below should help for all the most common use cases like positioning the legend, adding and customizing a title to it, controling markers and labels and more."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"custom-legend-with-matplotlib1",caption:"How to add the default matplotlib legend",linkTo:"/custom-legend-with-matplotlib"}),l.createElement(m.Z,{imgName:"custom-legend-with-matplotlib2",caption:"Legend location, learn how to add it anywhere including outside the plot area",linkTo:"/custom-legend-with-matplotlib"}),l.createElement(m.Z,{imgName:"custom-legend-with-matplotlib3",caption:"Customize the legend label appearance",linkTo:"/custom-legend-with-matplotlib"}),l.createElement(m.Z,{imgName:"custom-legend-with-matplotlib4",caption:"Add and customize the title of the legend",linkTo:"/custom-legend-with-matplotlib"}),l.createElement(m.Z,{imgName:"custom-legend-with-matplotlib5",caption:"Customize the marker of each element item",linkTo:"/custom-legend-with-matplotlib"}),l.createElement(m.Z,{imgName:"custom-legend-with-matplotlib6",caption:"Add a background, stroke and more legend customization",linkTo:"/custom-legend-with-matplotlib"}),l.createElement(m.Z,{imgName:"how-to-use-rectangles-in-matplotlib-legends",caption:"How to customize the legend handle to have a different shape that the one used on the chart",linkTo:"/how-to-use-rectangles-in-matplotlib-legends"}))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Images"},"Insert images in a matplotlib graph"),l.createElement("p",null,"It can be very useful to insert ",l.createElement("b",null,"one or several images")," in a matplotlib graph. It can be used for the graph caption or even inside the chart area to provide more context."),l.createElement("p",null,"Please find below a"," ",l.createElement(h.Link,{href:"/513-add-logo-matplotlib"},"complete tutorial")," ","explaining how to proceed using the ",l.createElement("code",null,"PIL")," and"," ",l.createElement("code",null,"io")," libraries, and a"," ",l.createElement(h.Link,{href:"/web-stacked-line-chart-with-labels"},"real life usage")," ","of this technique to produce a beautiful & polished figure."),l.createElement(c.Z,null,l.createElement(m.Z,{imgName:"513-add-logo-matplotlib",caption:"How to add an img into a matplotlib chart",linkTo:"/513-add-logo-matplotlib"}),l.createElement(m.Z,{imgName:"web-stacked-line-chart-with-labels-square",caption:"A clean stacked area chart with images in the caption",linkTo:"/web-stacked-line-chart-with-labels"}))),l.createElement(E.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(i.Z,null,l.createElement(s.Z,{chartFamily:"evolution"}))),l.createElement(E.Z,null),l.createElement(i.Z,null,l.createElement(r.Z,null)),l.createElement(E.Z,null))}},8984:function(e,t,a){var l=a(4184),n=a.n(l),o=a(7294),i=a(6792),r=a(5005),c=a(5893);const m=()=>{},s=o.forwardRef((({bsPrefix:e,name:t,className:a,checked:l,type:o,onChange:s,value:h,disabled:p,id:u,inputRef:d,...g},b)=>(e=(0,i.vE)(e,"btn-check"),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{className:e,name:t,type:o,value:h,ref:d,autoComplete:"off",checked:!!l,disabled:!!p,onChange:s||m,id:u}),(0,c.jsx)(r.Z,{...g,ref:b,className:n()(a,p&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:u})]}))));s.displayName="ToggleButton",t.Z=s}}]);
//# sourceMappingURL=component---src-pages-matplotlib-js-a68e9d2df6acfa89f168.js.map