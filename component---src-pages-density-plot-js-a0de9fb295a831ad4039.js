"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[5647],{7128:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(1883),r=a(8032);const i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:a}=e;if(i.includes(t))return n.createElement("p",null,"TODO");const o=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:o.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(7128),r=a(1555),i=a(1883);function o(e){let{imgName:t,caption:a,linkTo:o}=e;return n.createElement(r.Z,{xs:12,md:4},n.createElement(i.Link,{to:o},n.createElement(l.Z,{imgName:t,caption:a})))}},9215:function(e,t,a){a.d(t,{Z:function(){return v}});a(1883);var n=a(7294),l=a(1143),r=a.n(l),i=a(2081),o=a(6833);function c(e,t){let a=0;return n.Children.map(e,(e=>n.isValidElement(e)?t(e,a++):e))}var s=a(4184),m=a.n(s),d=a(6792),p=a(5893);const u=n.forwardRef((({bsPrefix:e,size:t,vertical:a=!1,className:n,role:l="group",as:r="div",...i},o)=>{const c=(0,d.vE)(e,"btn-group");let s=c;return a&&(s=`${c}-vertical`),(0,p.jsx)(r,{...i,ref:o,role:l,className:m()(n,s,t&&`${c}-${t}`)})}));u.displayName="ButtonGroup";var h=u,y=a(8984);const g=n.forwardRef(((e,t)=>{const{children:a,type:l="radio",name:s,value:m,onChange:d,vertical:u=!1,...y}=(0,i.Ch)(e,{value:"onChange"}),g=()=>null==m?[]:[].concat(m);return"radio"!==l||s||r()(!1),(0,p.jsx)(h,{...y,ref:t,vertical:u,children:c(a,(e=>{const t=g(),{value:a,onChange:r}=e.props;return n.cloneElement(e,{type:l,name:e.name||s,checked:-1!==t.indexOf(a),onChange:(0,o.Z)(r,(e=>((e,t)=>{if(!d)return;const a=g(),n=-1!==a.indexOf(e);"radio"!==l?d(n?a.filter((t=>t!==e)):[...a,e],t):n||d(e,t)})(a,e)))})}))})}));var b=Object.assign(g,{Button:y.Z});const E={kdeplot:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.kdeplot.html",basicUsage:"",parameters:[{name:"fill",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"control the color",type:"boolean",relatedChart:"70_deffffed"}]},violin:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.violinplot.html",basicUsage:"",parameters:[{name:"width",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"controls the color",type:"string",relatedChart:"70_deffffed"}]}},f=e=>"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1);function v(e){let{functionName:t}=e;const a=E[t],{0:l,1:r}=(0,n.useState)(a.parameters[0].name),{0:i,1:o}=(0,n.useState)("hello"),c=a.parameters.filter((e=>e.name===l))[0];return n.createElement(n.Fragment,null,n.createElement("h2",{id:f(t+"() details")},"🔎 ",n.createElement("code",null,t)," function parameters",n.createElement("a",{style:{marginLeft:"15px",fontSize:"14px"},href:a.docUrl},"→ see full doc")),n.createElement(b,{type:"radio",size:"sm",name:"functionParameter",value:l,onChange:e=>r(e)},a.parameters.map(((e,t)=>n.createElement(y.Z,{key:t,className:"functionButton",id:"functionParameter-"+e.name,value:e.name},e.name)))),n.createElement("div",null,n.createElement("code",null,"string"),n.createElement("span",null,"→ ",c.description)),n.createElement("br",null),n.createElement("br",null))}},9389:function(e,t,a){a.d(t,{H:function(){return l}});var n=a(7294);const l=e=>{let{title:t,seoDescription:a,keywords:l}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("html",{lang:"en"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:l||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.createElement("meta",{name:"twitter:site",content:"@R_Graph_Gallery"}))}},8650:function(e,t,a){a.r(t),a.d(t,{Head:function(){return w},default:function(){return Z}});var n=a(7294),l=a(429),r=a(2057),i=a(682),o=a(1190),c=a(4051),s=a(4596),m=a(8742),d=a(1883),p=a(944),u=a(1555),h=a(2737),y=a(7128),g=a(9215),b=a(3921),E=a(9389);const f="<p>Density plots allow you to visualize the <b>distribution of a numeric variable</b> for one or several groups. They are very well adapted for large datasets, as stated in <a href='https://data-to-viz.com'>data-to-viz.com</a>.<br><br>Note that <b>2 approaches</b> exist to build them in python: the first one consists of <i>computing a kernel density estimate</i>, and the second one involves building a <i>high resolution histogram</i>.</p>",v="# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset('iris')\n\n# Make default density plot\nsns.kdeplot(df['sepal_width'])\n",w=()=>n.createElement(E.H,{title:"Python Density Chart Gallery | Dozens of examples with code",seoDescription:"A collection of density plot examples made with Python, coming with explanation and reproducible code"});function Z(){return n.createElement(r.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Density chart",description:f}),n.createElement(i.Z,null,n.createElement("h2",{id:"Quick start"},"⏱ Quick start"),n.createElement(c.Z,{className:"align-items-center"},n.createElement(u.Z,{md:6},n.createElement("p",null,"If you are in a rush, the most straightforward way to build a density chart is to use ",n.createElement("code",null,"Seaborn")," and its"," ",n.createElement("code",null,"kdeplot()")," function. You just need to provide it with a numeric variable from your dataset. 🔥")),n.createElement(u.Z,{md:6},n.createElement(d.Link,{to:"/70-basic-density-plot-with-seaborn"},n.createElement(y.Z,{imgName:"70_Basic_density_plot_Seaborn",caption:"The most basic density plot one can make with python and seaborn"})))),n.createElement(h.Z,null,v)),n.createElement(b.Z,null),n.createElement(i.Z,null,n.createElement("h2",{id:"Seaborn"},n.createElement(p._I,null),"Density charts with ",n.createElement("code",null,"Seaborn")),n.createElement("p",null,n.createElement("code",null,"Seaborn")," is a python library allowing to make better charts easily. It is well adapted to build density charts thanks to its ",n.createElement("code",null,"kdeplot")," function. The following charts will guide you through its usage, going from a very"," ",n.createElement(d.Link,{to:""},"basic density plot")," to something much more"," ",n.createElement(d.Link,{to:""},"customized"),"."),n.createElement(c.Z,null,n.createElement(s.Z,{imgName:"70_Basic_density_plot_Seaborn",caption:"The most basic density plot one can make with python and seaborn",linkTo:"/70-basic-density-plot-with-seaborn"}),n.createElement(s.Z,{imgName:"71_Shaded_density_plot_Seaborn",caption:"seaborn densty chart with filled area",linkTo:"/71-density-plot-with-shade-seaborn"}),n.createElement(s.Z,{imgName:"72_Horizontal_density_plot_Seaborn",caption:"vertical seaborn density chart",linkTo:"/72-horizontal-density-plot"}),n.createElement(s.Z,{imgName:"73_Control_bandwidth_densityplot_Seaborn1",caption:"control density chart color",linkTo:"/73-control-bandwidth-of-seaborn-density-plot"}),n.createElement(s.Z,{imgName:"73_Control_bandwidth_densityplot_Seaborn2",caption:"Changed the bandwidth used to compute the density",linkTo:"/73-control-bandwidth-of-seaborn-density-plot"}),n.createElement(s.Z,{imgName:"74_density_plot_multi_variables",caption:"Density chart with several displayed groups",linkTo:"/74-density-plot-of-several-variables"}),n.createElement(s.Z,{imgName:"density-mirror",caption:"Mirror density chart to compare the distribution of 2 variables",linkTo:"/density-mirror"}),n.createElement(s.Z,{imgName:"575-distribution-plot-with-quantiles",caption:"Density chart with quantiles displayed",linkTo:"/575-distribution-plot-with-quantiles"}))),n.createElement(b.Z,null),n.createElement(i.Z,null,n.createElement("h2",{id:"Multiple groups"},n.createElement(p._I,null),"Density charts, ",n.createElement("code",null,"Seaborn")," and multiple groups"),n.createElement("p",null,"It is a common use case to compare the density of several groups in a dataset. Several options exist to do so. You can plot all items on the same chart, using transparency and annotation to make the comparison possible. Or you can a technique called small multiples where the graph window is split in individual charts, avoiding group overlaps that are sometimes hard to read."),n.createElement(c.Z,null,n.createElement(s.Z,{imgName:"density-chart-multiple-groups-seaborn1",caption:"Density chart with multiple groups overlapped",linkTo:"/density-chart-multiple-groups-seaborn"}),n.createElement(s.Z,{imgName:"density-chart-multiple-groups-seaborn3",caption:"Density chart with multiple groups overlapped",linkTo:"/density-chart-multiple-groups-seaborn"}),n.createElement(s.Z,{imgName:"density-chart-multiple-groups-seaborn4",caption:"Density chart with multiple groups overlapped",linkTo:"/density-chart-multiple-groups-seaborn"})),n.createElement("div",{style:{margin:"0 auto",padding:0}},n.createElement(d.Link,{to:"/density-chart-multiple-groups-seaborn"},n.createElement(y.Z,{imgName:"density-chart-multiple-groups-seaborn5",caption:"A density chart with multiple groups displayed, transparency and clean annotation."})))),n.createElement(b.Z,null),n.createElement("div",{className:"greySection"},n.createElement(i.Z,null,n.createElement(g.Z,{functionName:"kdeplot"}))),n.createElement(b.Z,null),n.createElement(i.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(p.rS,null)," Density charts with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,"It is possible to build a density chart with ",n.createElement("code",null,"matplotlib"),", but it is truely a struggle compared to making it with"," ",n.createElement("code",null,"seaborn")," as shown above. Here is an example to prove it is doable, but I strongly advise to go for ",n.createElement("code",null,"seaborn"),"."),n.createElement(c.Z,null,n.createElement(s.Z,{imgName:"density-chart-matplotlib-vector",caption:"Basic density chart with python and matplotlib from a vector of data",linkTo:"/density-chart-matplotlib"}),n.createElement(s.Z,{imgName:"density-chart-matplotlib-csv",caption:"Read a csv file and plot the density of a column",linkTo:"/density-chart-matplotlib"}),n.createElement(s.Z,{imgName:"raincloud-plot-with-matplotlib-and-ptitprince",caption:"Combining density and boxplot",linkTo:"/raincloud-plot-with-matplotlib-and-ptitprince"}),n.createElement(s.Z,{imgName:"575-distribution-plot-with-quantiles",caption:"Density chart with quantiles displayed",linkTo:"/575-distribution-plot-with-quantiles"}))),n.createElement(b.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(i.Z,null,n.createElement(m.Z,{chartFamily:"distribution"}))),n.createElement(b.Z,null),n.createElement(i.Z,null,n.createElement(o.Z,null)),n.createElement(b.Z,null))}},8984:function(e,t,a){var n=a(4184),l=a.n(n),r=a(7294),i=a(6792),o=a(5005),c=a(5893);const s=()=>{},m=r.forwardRef((({bsPrefix:e,name:t,className:a,checked:n,type:r,onChange:m,value:d,disabled:p,id:u,inputRef:h,...y},g)=>(e=(0,i.vE)(e,"btn-check"),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{className:e,name:t,type:r,value:d,ref:h,autoComplete:"off",checked:!!n,disabled:!!p,onChange:m||s,id:u}),(0,c.jsx)(o.Z,{...y,ref:g,className:l()(a,p&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:u})]}))));m.displayName="ToggleButton",t.Z=m}}]);
//# sourceMappingURL=component---src-pages-density-plot-js-a0de9fb295a831ad4039.js.map