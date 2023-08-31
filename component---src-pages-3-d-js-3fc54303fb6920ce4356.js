"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[7626],{7128:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(1883),o=a(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(r.includes(t))return n.createElement("p",null,"TODO");const i=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(o.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(7128),o=a(1555),r=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return n.createElement(o.Z,{xs:12,md:4},n.createElement(r.Link,{to:i},n.createElement(l.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return r}});var n=a(7294),l=a(1883);function o(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const r=e=>{let{title:t,seoDescription:a,keywords:r}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),n.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:r||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement(l.Script,{id:"adthrive",strategy:"post-hydrate",src:o()}))}},1370:function(e,t,a){a.r(t),a.d(t,{Head:function(){return _},default:function(){return Z}});var n=a(7294),l=a(429),o=a(1433),r=a(682),i=a(1190),c=a(4051),m=a(8742),s=a(1883),d=a(4125),h=a(1555),p=a(5005),u=a(2737),E=a(3921),f=a(7128),g=a(4596),y=a(3469),b=a(9389);const w="<p>Python allows to build 3D charts thanks to the <code>mplot3d</code> toolkit of the <code>matplotlib</code> library. However, please note that 3d charts are most often a bad practice. This section focuses on 3d scatter plots and surface plots that are some interesting use cases.",v="# libraries\nfrom mpl_toolkits.mplot3d import Axes3D\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport pandas as pd\n\n# Dataset\ndf=pd.DataFrame({'X': range(1,101), 'Y': np.random.randn(100)*15+range(1,101), 'Z': (np.random.randn(100)*15+range(1,101))*2 })\n\n# plot\nfig = plt.figure()\nax = fig.add_subplot(111, projection='3d')\nax.scatter(df['X'], df['Y'], df['Z'], c='skyblue', s=60)\nax.view_init(30, 185)\nplt.show()\n",_=()=>n.createElement(b.H,{title:"Three-Dimensional plotting",seoDescription:"A collection of 2d density chart examples made with Python, coming with explanation and reproducible code"});function Z(){return n.createElement(o.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Three-Dimensional plotting",description:w}),n.createElement(r.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(c.Z,{className:"align-items-center"},n.createElement(h.Z,{md:6},n.createElement("p",null,"The ",n.createElement("code",null,"mplot3d")," toolkit of ",n.createElement("code",null,"matplotlib")," is used here."),n.createElement("ul",null,n.createElement("li",null,"The projection parameter of the add_subplot() function is set to"," ",n.createElement("code",null,"3d")),n.createElement("li",null,"The usual ",n.createElement("code",null,"scatter()")," function can now be called with 3 data inputs for the X, Y and Z axis"),n.createElement("li",null,"The camera position can be set thanks to the"," ",n.createElement("code",null,"view_init()")," function"))),n.createElement(h.Z,{md:6},n.createElement(s.Link,{to:"/370-3d-scatterplot"},n.createElement(f.Z,{imgName:"370_3D_scatterplot",caption:"Basic 3d scatterplot with Python & Matplotlib."})))),n.createElement(u.Z,null,v),n.createElement(s.Link,{to:"/341-python-gapminder-animation"},n.createElement(p.Z,{size:"sm"},"See code"))),n.createElement(E.Z,null),n.createElement("div",{className:"greySection"},n.createElement(r.Z,null,n.createElement("h2",{id:"Warning"},"⚠️ Mind the 3d"),n.createElement("p",null,"Three dimensional objects are very popular but negatively affect the"," ",n.createElement("u",null,"accuracy")," and ",n.createElement("u",null,"speed")," at which one can interpret a graphic in most cases."),n.createElement("p",null,"In the example below, the brown section in front looks much bigger than the pink section in the back, even tough their real values are 30% vs 35%. Data is distorted."),n.createElement("div",{style:{maxWidth:"350px",margin:"0 auto"}},n.createElement("a",{href:"https://www.data-to-viz.com/caveat/3d.html"},n.createElement(f.Z,{imgName:"3d_is_bad",caption:"An example of a bad 3d pie chart"}))),n.createElement("a",{href:"https://www.data-to-viz.com/caveat/3d.html"},n.createElement(p.Z,{size:"sm"},"Full article")),n.createElement("br",null),n.createElement("br",null),n.createElement("p",null,n.createElement("u",null,"Note"),": remember pie charts should be avoided"," ",n.createElement("a",{href:"https://www.data-to-viz.com/caveat/pie.html"},"most of the time")))),n.createElement(E.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"3d scatterplot"},n.createElement(d.rS,null),"Three-dimensional scatterplots with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,"As described in the quick start section above, a three dimensional can be built with python thanks to the",n.createElement("code",null,"mplot3d")," toolkit of ",n.createElement("code",null,"matplotlib"),". The example below will guide you through its usage to get this figure:"),n.createElement("div",{style:{maxWidth:"450px"}},n.createElement(s.Link,{to:"/370-3d-scatterplot"},n.createElement(f.Z,{imgName:"370_3D_scatterplot",caption:"Basic 3d scatterplot with Python & Matplotlib."}))),n.createElement("p",null,"This technique is useful to visualize the result of a PCA (Principal Component Analysis). The following example explains how to run a PCA with python and check its result with a 3d scatterplot:"),n.createElement("div",{style:{maxWidth:"450px"}},n.createElement(s.Link,{to:"/372-3d-pca-result"},n.createElement(f.Z,{imgName:"372_3D_PCA_result",caption:"PCA result shown as a 3D scatterplot with python"})))),n.createElement(E.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"Surface plot"},n.createElement(d.rS,null),"Surface plot with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,"A surface plot considers the X and Y coordinates as latitude and longitude, and Z as the altitude. It represents the dataset as a surface by interpolating positions between data points."),n.createElement("p",null,"This kind of chart can also be done thanks to the ",n.createElement("code",null,"mplot3d")," ","toolkit of ",n.createElement("code",null,"matplotlib"),". The posts linked below explain how to use and customize the ",n.createElement("code",null,"trisurf()")," function that is used for surface plots."),n.createElement(c.Z,null,n.createElement(g.Z,{imgName:"371_3D_Surface_plot_volcano_1",caption:"Most basic surface plot with Python",linkTo:"/371-surface-plot"}),n.createElement(g.Z,{imgName:"371_3D_Surface_plot_volcano_2",caption:"Plotting only one half of the heatmap",linkTo:"/371-surface-plot"}),n.createElement(g.Z,{imgName:"371_3D_Surface_plot_volcano_3",caption:"Seaborn heatmap customization: grid",linkTo:"/371-surface-plot"})),n.createElement("div",{style:{maxWidth:"450px",margin:"0 auto"}},n.createElement(s.Link,{to:"/371-surface-plot"},n.createElement(f.Z,{imgName:"371_3D_Surface_plot_volcano_4",caption:"Basic 3d scatterplot with Python & Matplotlib."})))),n.createElement(E.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"Animated 3d"},n.createElement(d.rS,null),"Three dimensional plot and animation"),n.createElement("p",null,"You can build an animation from a 3d chart by changing the camera position at each iteration of a loop. The example below explains how to do it for a surface plot but visit the animation section for more."),n.createElement(s.Link,{to:"/342-animation-on-3d-plot"},n.createElement("img",{src:y.Z,alt:"Animated volcano plot with Python",style:{maxWidth:"900px",width:"100%"}})),n.createElement(s.Link,{to:"/animation"},n.createElement(p.Z,{size:"sm"},"Animation section"))),n.createElement(E.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(r.Z,null,n.createElement(m.Z,{chartFamily:"general"}))),n.createElement(E.Z,null),n.createElement(r.Z,null,n.createElement(i.Z,null)),n.createElement(E.Z,null))}},3469:function(e,t,a){t.Z=a.p+"static/animated_volcano-df4d07818ba89edb4168e26f0160cdf4.gif"}}]);
//# sourceMappingURL=component---src-pages-3-d-js-3fc54303fb6920ce4356.js.map