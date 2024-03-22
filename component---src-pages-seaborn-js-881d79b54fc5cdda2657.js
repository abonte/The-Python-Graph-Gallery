"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[4426],{7128:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(1883),o=a(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(r.includes(t))return n.createElement("p",null,"TODO");const i=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(o.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(7128),o=a(1555),r=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return n.createElement(o.Z,{xs:12,md:4},n.createElement(r.Link,{to:i},n.createElement(l.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return l}});var n=a(7294);const l=e=>{let{title:t,seoDescription:a,keywords:l}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("html",{lang:"en"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:l||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:site",content:"@R_Graph_Gallery"}))}},3611:function(e,t,a){a.r(t),a.d(t,{Head:function(){return v},default:function(){return w}});var n=a(7294),l=a(429),o=a(2057),r=a(682),i=a(1190),c=a(4051),m=a(4596),s=a(8742),u=a(1883),p=a(4125),h=a(1555),d=a(2737),b=a(7128),E=a(3921),g=a(5005),f=a(9389);const _="<p><code>Seaborn</code> is a python graphic library built on top of <a href='https://python-graph-gallery.com/matplotlib'>matplotlib</a>. It allows to make your charts prettier with less code. This page provides general seaborn tips. Visit individual chart sections if you need a specific type of plot. Note that most of the <a href='https://python-graph-gallery.com/matplotlib'>matplotlib customization options</a> also work for <code>seaborn</code>.</p > ",y='# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset(\'iris\')\n\n# use the function regplot to make a scatterplot\nsns.regplot(x=df["sepal_length"], y=df["sepal_width"])\n',v=()=>n.createElement(f.H,{title:"Introduction to Seaborn for dataviz with Python",seoDescription:"A collection of chart examples made with Seaborn, coming with explanation and reproducible code"});function w(){return n.createElement(o.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Seaborn",description:_}),n.createElement(r.Z,null,n.createElement("h2",{id:"Quick start"},"⏱ Quick start"),n.createElement(c.Z,{className:"align-items-center"},n.createElement(h.Z,{md:6},n.createElement("p",null,n.createElement("code",null,"seaborn")," offers some specific functions for almost every kind of charts. For instance, ",n.createElement("code",null,"regplot()")," can be used to build a ",n.createElement(u.Link,{to:"/scatter-plot"},"scatterplot"),"."),n.createElement("p",null,"Note that no additional code is needed to get the nice grey background with grid and some good defaults for the dots 😍. That's 4 lines of code for a pretty decent chart 🔥!"),n.createElement(u.Link,{to:"/scatter-plot"},n.createElement(g.Z,{size:"sm"},"Scatterplot section"))),n.createElement(h.Z,{md:6},n.createElement(u.Link,{to:"/40-basic-scatterplot-seaborn"},n.createElement(b.Z,{imgName:"40_Basic_Scatterplot_seaborn",caption:"Basic scatterplot with Python and Seaborn from various data input formats."})))),n.createElement(d.Z,null,y),n.createElement("br",null)),n.createElement(E.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"Lexicon"},n.createElement(p.rS,null),"Basic vocabulary"),n.createElement("p",null,"Since ",n.createElement("code",null,"seaborn")," is built on top of ",n.createElement("code",null,"matplotlib"),", most of its concepts and vocabulary are still correct. The figure below describes the anatomy of a ",n.createElement("code",null,"matplotlib")," charts. It names all the main components, names that you need to know to understand the documentation properly."),n.createElement("p",null,"⚠️ ",n.createElement("u",null,"Disclaimer"),": this figure comes from the very complete"," ",n.createElement("a",{href:"https://matplotlib.org/faq/usage_faq.html#coding-styles"},"matplotlib documentation"),". Have a look at it for a thorough explanation on how this library works."),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.createElement(b.Z,{imgName:"matplotlib_vocabulary",caption:"Anatomy of a matplotlib chart: all the basic vocabulary you need to know to understand the documentation properly"})),n.createElement("a",{href:"https://matplotlib.org/faq/usage_faq.html#coding-styles"},n.createElement(g.Z,{size:"sm"},"Matplotlib doc"))),n.createElement(E.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"Main functions"},"🧐 Main ",n.createElement("code",null,"seaborn")," functions"),n.createElement("p",null,"Here is an overview of the most common ",n.createElement("code",null,"seaborn")," functions. It provides a glimpse of they're made for, what are their parameters and links to their official doc."),n.createElement("p",null,n.createElement("code",null,"Todo")," 😞")),n.createElement(E.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"Title"},n.createElement(p._I,null),"Customizing titles with Seaborn"),n.createElement("p",null,"Since ",n.createElement("code",null,"Seaborn")," is built on top of ",n.createElement("code",null,"Matplotlib"),", title customization works pretty much the same. A seaborn chart (like the one you get with ",n.createElement("code",null,"sns.boxplot()"),") actually returns a"," ",n.createElement("code",null,"matplotlib")," axes instance."),n.createElement("p",null,"This means that you will not be able to use the usual"," ",n.createElement("code",null,"pyplot")," method ",n.createElement("code",null,"plt.title()"),", but will have to use the corresponding argument for an ",n.createElement("code",null,"axes")," which is"," ",n.createElement("code",null,"ax.set_title()"),". This is described more in depth in this dedicated post:"),n.createElement(c.Z,null,n.createElement(m.Z,{imgName:"seaborn-title-customization",caption:"Add a title on a seaborn chart",linkTo:"/seaborn-title-customization"})),n.createElement("br",null),n.createElement("br",null),n.createElement("p",null,"Once you've understood how to add a title, customizing it should work the same as for ",n.createElement("code",null,"matplotlib"),":"),n.createElement(c.Z,null,n.createElement(m.Z,{imgName:"190_Custom_title6",caption:"Python chart with subtitle and custom color",linkTo:"/190-custom-matplotlib-title"}),n.createElement(m.Z,{imgName:"190_Custom_title7",caption:"Add a math formula in title with Matplotlib",linkTo:"/190-custom-matplotlib-title"}),n.createElement(m.Z,{imgName:"190_Custom_title5",caption:"Control the height of the matplotlib title",linkTo:"/190-custom-matplotlib-title"}))),n.createElement(E.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"Axis"},n.createElement(p._I,null),"Customizing axis"),n.createElement("p",null,"The exact same concept than explained for titles above applies for axes. So please read the following blogpost about axis customization with matplotlib and apply it to your seaborn chart."),n.createElement(c.Z,null,n.createElement(m.Z,{imgName:"191_Custom_axis1",caption:"Change the axis title and its appearance",linkTo:"/191-custom-axis-on-matplotlib-chart"}),n.createElement(m.Z,{imgName:"191_Custom_axis2",caption:"Control axis labels and ticks look",linkTo:"/191-custom-axis-on-matplotlib-chart"}),n.createElement(m.Z,{imgName:"191_Custom_axis6",caption:"Control axis limit with the xlim() function",linkTo:"/191-custom-axis-on-matplotlib-chart"}))),n.createElement(E.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"Themes"},"🌈 Seaborn built-in themes"),n.createElement("p",null,"Seaborn comes with a few built-in themes. Those themes are available through the ",n.createElement("code",null,"set_style()")," function. Here is an overview of what is offered."),n.createElement("p",null,n.createElement("code",null,"Todo")," 😞")),n.createElement(E.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"Gallery"},"⭐ Seaborn graph gallery"),n.createElement("p",null,"If you're interested in a specific type of chart like"," ",n.createElement(u.Link,{to:"/boxplot"},"boxplot")," or"," ",n.createElement(u.Link,{to:"heatmap"},"heatmap"),", I suggest to visit the"," ",n.createElement(u.Link,{to:"/"},"dedicated section")," of the gallery. In case you're interested in what ",n.createElement("code",null,"seaborn")," can do, here is a glimpse of what's offered in the gallery 🧐."),n.createElement(c.Z,null,n.createElement(m.Z,{imgName:"82_seaborn_jointplot1",caption:"Histogram can be added around a scatterplot to show each variable distributions",linkTo:"/82-marginal-plot-with-seaborn"}),n.createElement(m.Z,{imgName:"74_density_plot_multi_variables",caption:"Density chart with several displayed groups",linkTo:"/74-density-plot-of-several-variables"}),n.createElement(m.Z,{imgName:"43_seaborn_map_color_to_a_avariable3",caption:"Color dots according to a group",linkTo:"/43-use-categorical-variable-to-color-scatterplot-seaborn"}),n.createElement(m.Z,{imgName:"58_Number_of_obs_on_violinplot_seaborn",caption:"Show the number of observations per group",linkTo:"/58-show-number-of-observation-on-violinplot"}),n.createElement(m.Z,{imgName:"73_Control_bandwidth_densityplot_Seaborn2",caption:"Changed the bandwidth used to compute the density",linkTo:"/73-control-bandwidth-of-seaborn-density-plot"}),n.createElement(m.Z,{imgName:"91_Custom_heat_annotate_cells",caption:"Seaborn heatmap customization: show numbers in cell",linkTo:"/91-customize-seaborn-heatmap"}),n.createElement(m.Z,{imgName:"25_Histogram_of_several_variables1",caption:"Compare the distribution of several groups on the same chart",linkTo:"/25-histogram-with-several-variables-seaborn"}),n.createElement(m.Z,{imgName:"80_bivariate_kernel_density_plot2",caption:"Basic contourplot with seaborn.",linkTo:"/80-contour-plot-with-seaborn"}),n.createElement(m.Z,{imgName:"111_Correlogram_custom4",caption:"Apply colors to each group and customized the scatterplot",linkTo:"/111-custom-correlogram"}),n.createElement(m.Z,{imgName:"85_2D_density_plot_matplotlib_1",caption:"Basic 2d density chart.",linkTo:"/85-density-plot-with-matplotlib"}),n.createElement(m.Z,{imgName:"25_Histogram_of_several_variables2",caption:"Use small multiple to compare the distribution of several groups",linkTo:"/25-histogram-with-several-variables-seaborn"}),n.createElement(m.Z,{imgName:"82_seaborn_jointplot6",caption:"Histogram can be added around a 2d density chart to show x and y variable distributions",linkTo:"/82-marginal-plot-with-seaborn"}),n.createElement(m.Z,{imgName:"51_Horizontal_violinplot_Seaborn",caption:"Make your violin chart horizontal to make labels more readable",linkTo:"/51-horizontal-violinplot"}),n.createElement(m.Z,{imgName:"132_Matplotlib-connected-scatterplot",caption:"Basic connected scatterplot with Python and Seaborn.",linkTo:"/132-basic-connected-scatterplot"}),n.createElement(m.Z,{imgName:"92_Control_color_heatmap1",caption:"Color customization: how to select other color palettes and more",linkTo:"/92-control-color-in-seaborn-heatmaps"}))),n.createElement(E.Z,null),n.createElement(E.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(r.Z,null,n.createElement(s.Z,{chartFamily:"evolution"}))),n.createElement(E.Z,null),n.createElement(r.Z,null,n.createElement(i.Z,null)),n.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-seaborn-js-881d79b54fc5cdda2657.js.map