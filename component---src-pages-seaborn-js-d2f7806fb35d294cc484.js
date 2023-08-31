"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[4426],{7128:function(e,t,a){a.d(t,{Z:function(){return i}});var o=a(7294),n=a(1883),l=a(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(r.includes(t))return o.createElement("p",null,"TODO");const i=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?o.createElement(o.Fragment,null,o.createElement("div",{className:"chartImageContainer"},o.createElement(l.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&o.createElement("div",{className:"chartImageOverlay"},o.createElement("div",{className:"chartImageOverlayText"},o.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var o=a(7294),n=a(7128),l=a(1555),r=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return o.createElement(l.Z,{xs:12,md:4},o.createElement(r.Link,{to:i},o.createElement(n.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return r}});var o=a(7294),n=a(1883);function l(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const r=e=>{let{title:t,seoDescription:a,keywords:r}=e;return o.createElement(o.Fragment,null,o.createElement("title",null,t),o.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),o.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),o.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),o.createElement("meta",{name:"author",content:"Yan Holtz"}),o.createElement("meta",{name:"keywords",content:r||"python, chart, graph, code, viz, dataviz"}),o.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),o.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),o.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),o.createElement("meta",{property:"og:description",content:a}),o.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),o.createElement(n.Script,{id:"adthrive",strategy:"post-hydrate",src:l()}))}},3611:function(e,t,a){a.r(t),a.d(t,{Head:function(){return w},default:function(){return v}});var o=a(7294),n=a(429),l=a(1433),r=a(682),i=a(1190),c=a(4051),m=a(4596),s=a(8742),h=a(1883),p=a(4125),u=a(1555),d=a(2737),b=a(7128),E=a(3921),g=a(5005),f=a(9389);const y="<p><code>Seaborn</code> is a python graphic library built on top of <a href='https://www.python-graph-gallery.com/matplotlib'>matplotlib</a>. It allows to make your charts prettier with less code. This page provides general seaborn tips. Visit individual chart sections if you need a specific type of plot. Note that most of the <a href='https://www.python-graph-gallery.com/matplotlib'>matplotlib customization options</a> also work for <code>seaborn</code>.</p > ",_='# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset(\'iris\')\n\n# use the function regplot to make a scatterplot\nsns.regplot(x=df["sepal_length"], y=df["sepal_width"])\n',w=()=>o.createElement(f.H,{title:"Introduction to Seaborn for dataviz with Python",seoDescription:"A collection of chart examples made with Seaborn, coming with explanation and reproducible code"});function v(){return o.createElement(l.Z,{isTocEnabled:!0},o.createElement(n.Z,{title:"Seaborn",description:y}),o.createElement(r.Z,null,o.createElement("h2",{id:"Quick start"},"⏱ Quick start"),o.createElement(c.Z,{className:"align-items-center"},o.createElement(u.Z,{md:6},o.createElement("p",null,o.createElement("code",null,"seaborn")," offers some specific functions for almost every kind of charts. For instance, ",o.createElement("code",null,"regplot()")," can be used to build a ",o.createElement(h.Link,{to:"/scatter-plot"},"scatterplot"),"."),o.createElement("p",null,"Note that no additional code is needed to get the nice grey background with grid and some good defaults for the dots 😍. That's 4 lines of code for a pretty decent chart 🔥!"),o.createElement(h.Link,{to:"/scatter-plot"},o.createElement(g.Z,{size:"sm"},"Scatterplot section"))),o.createElement(u.Z,{md:6},o.createElement(h.Link,{to:"/40-basic-scatterplot-seaborn"},o.createElement(b.Z,{imgName:"40_Basic_Scatterplot_seaborn",caption:"Basic boxplot with Python and Seaborn from various data input formats."})))),o.createElement(d.Z,null,_),o.createElement("br",null)),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement("h2",{id:"Lexicon"},o.createElement(p.rS,null),"Basic vocabulary"),o.createElement("p",null,"Since ",o.createElement("code",null,"seaborn")," is built on top of ",o.createElement("code",null,"matplotlib"),", most of its concepts and vocabulary are still correct. The figure below describes the anatomy of a ",o.createElement("code",null,"matplotlib")," charts. It names all the main components, names that you need to know to understand the documentation properly."),o.createElement("p",null,"⚠️ ",o.createElement("u",null,"Disclaimer"),": this figure comes from the very complete"," ",o.createElement("a",{href:"https://matplotlib.org/faq/usage_faq.html#coding-styles"},"matplotlib documentation"),". Have a look at it for a thorough explanation on how this library works."),o.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},o.createElement(b.Z,{imgName:"matplotlib_vocabulary",caption:"Anatomy of a matplotlib chart: all the basic vocabulary you need to know to understand the documentation properly"})),o.createElement("a",{href:"https://matplotlib.org/faq/usage_faq.html#coding-styles"},o.createElement(g.Z,{size:"sm"},"Matplotlib doc"))),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement("h2",{id:"Main functions"},"🧐 Main ",o.createElement("code",null,"seaborn")," functions"),o.createElement("p",null,"Here is an overview of the most common ",o.createElement("code",null,"seaborn")," functions. It provides a glimpse of they're made for, what are their parameters and links to their official doc."),o.createElement("p",null,o.createElement("code",null,"Todo")," 😞")),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement("h2",{id:"Title"},o.createElement(p._I,null),"Customizing titles with Seaborn"),o.createElement("p",null,"Since ",o.createElement("code",null,"Seaborn")," is built on top of ",o.createElement("code",null,"Matplotlib"),", title customization works pretty much the same. A seaborn chart (like the one you get with ",o.createElement("code",null,"sns.boxplot()"),") actually returns a"," ",o.createElement("code",null,"matplotlib")," axes instance."),o.createElement("p",null,"This means that you will not be able to use the usual"," ",o.createElement("code",null,"pyplot")," method ",o.createElement("code",null,"plt.title()"),", but will have to use the corresponding argument for an ",o.createElement("code",null,"axes")," which is"," ",o.createElement("code",null,"ax.set_title()"),". This is described more in depth in this dedicated post:"),o.createElement(c.Z,null,o.createElement(m.Z,{imgName:"seaborn-title-customization",caption:"Add a title on a seaborn chart",linkTo:"/seaborn-title-customization"})),o.createElement("br",null),o.createElement("br",null),o.createElement("p",null,"Once you've understood how to add a title, customizing it should work the same as for ",o.createElement("code",null,"matplotlib"),":"),o.createElement(c.Z,null,o.createElement(m.Z,{imgName:"190_Custom_title6",caption:"Python chart with subtitle and custom color",linkTo:"/190-custom-matplotlib-title"}),o.createElement(m.Z,{imgName:"190_Custom_title7",caption:"Add a math formula in title with Matplotlib",linkTo:"/190-custom-matplotlib-title"}),o.createElement(m.Z,{imgName:"190_Custom_title5",caption:"Control the height of the matplotlib title",linkTo:"/190-custom-matplotlib-title"}))),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement("h2",{id:"Axis"},o.createElement(p._I,null),"Customizing axis"),o.createElement("p",null,"The exact same concept than explained for titles above applies for axes. So please read the following blogpost about axis customization with matplotlib and apply it to your seaborn chart."),o.createElement(c.Z,null,o.createElement(m.Z,{imgName:"191_Custom_axis1",caption:"Change the axis title and its appearance",linkTo:"/191-custom-axis-on-matplotlib-chart"}),o.createElement(m.Z,{imgName:"191_Custom_axis2",caption:"Control axis labels and ticks look",linkTo:"/191-custom-axis-on-matplotlib-chart"}),o.createElement(m.Z,{imgName:"191_Custom_axis6",caption:"Control axis limit with the xlim() function",linkTo:"/191-custom-axis-on-matplotlib-chart"}))),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement("h2",{id:"Themes"},"🌈 Seaborn built-in themes"),o.createElement("p",null,"Seaborn comes with a few built-in themes. Those themes are available through the ",o.createElement("code",null,"set_style()")," function. Here is an overview of what is offered."),o.createElement("p",null,o.createElement("code",null,"Todo")," 😞")),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement("h2",{id:"Gallery"},"⭐ Seaborn graph gallery"),o.createElement("p",null,"If you're interested in a specific type of chart like"," ",o.createElement(h.Link,{to:"/boxplot"},"boxplot")," or"," ",o.createElement(h.Link,{to:"heatmap"},"heatmap"),", I suggest to visit the"," ",o.createElement(h.Link,{to:"/"},"dedicated section")," of the gallery. In case you're interested in what ",o.createElement("code",null,"seaborn")," can do, here is a glimpse of what's offered in the gallery 🧐."),o.createElement(c.Z,null,o.createElement(m.Z,{imgName:"82_seaborn_jointplot1",caption:"Histogram can be added around a scatterplot to show each variable distributions",linkTo:"/82-marginal-plot-with-seaborn"}),o.createElement(m.Z,{imgName:"74_density_plot_multi_variables",caption:"Density chart with several displayed groups",linkTo:"/74-density-plot-of-several-variables"}),o.createElement(m.Z,{imgName:"43_seaborn_map_color_to_a_avariable3",caption:"Color dots according to a group",linkTo:"/43-use-categorical-variable-to-color-scatterplot-seaborn"}),o.createElement(m.Z,{imgName:"58_Number_of_obs_on_violinplot_seaborn",caption:"Show the number of observations per group",linkTo:"/58-show-number-of-observation-on-violinplot"}),o.createElement(m.Z,{imgName:"73_Control_bandwidth_densityplot_Seaborn2",caption:"Changed the bandwidth used to compute the density",linkTo:"/73-control-bandwidth-of-seaborn-density-plot"}),o.createElement(m.Z,{imgName:"91_Custom_heat_annotate_cells",caption:"Seaborn heatmap customization: show numbers in cell",linkTo:"/91-customize-seaborn-heatmap"}),o.createElement(m.Z,{imgName:"25_Histogram_of_several_variables1",caption:"Compare the distribution of several groups on the same chart",linkTo:"/25-histogram-with-several-variables-seaborn"}),o.createElement(m.Z,{imgName:"80_bivariate_kernel_density_plot2",caption:"Basic contourplot with seaborn.",linkTo:"/80-contour-plot-with-seaborn"}),o.createElement(m.Z,{imgName:"111_Correlogram_custom4",caption:"Apply colors to each group and customized the scatterplot",linkTo:"/111-custom-correlogram"}),o.createElement(m.Z,{imgName:"85_2D_density_plot_matplotlib_1",caption:"Basic 2d density chart.",linkTo:"/85-density-plot-with-matplotlib"}),o.createElement(m.Z,{imgName:"25_Histogram_of_several_variables2",caption:"Use small multiple to compare the distribution of several groups",linkTo:"/25-histogram-with-several-variables-seaborn"}),o.createElement(m.Z,{imgName:"82_seaborn_jointplot6",caption:"Histogram can be added around a 2d density chart to show x and y variable distributions",linkTo:"/82-marginal-plot-with-seaborn"}),o.createElement(m.Z,{imgName:"51_Horizontal_violinplot_Seaborn",caption:"Make your violin chart horizontal to make labels more readable",linkTo:"/51-horizontal-violinplot"}),o.createElement(m.Z,{imgName:"132_Matplotlib-connected-scatterplot",caption:"Basic connected scatterplot with Python and Seaborn.",linkTo:"/132-basic-connected-scatterplot"}),o.createElement(m.Z,{imgName:"92_Control_color_heatmap1",caption:"Color customization: how to select other color palettes and more",linkTo:"/92-control-color-in-seaborn-heatmaps"}))),o.createElement(E.Z,null),o.createElement(E.Z,null),o.createElement("div",{className:"greySection",id:"related"},o.createElement(r.Z,null,o.createElement(s.Z,{chartFamily:"evolution"}))),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement(i.Z,null)),o.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-seaborn-js-d2f7806fb35d294cc484.js.map