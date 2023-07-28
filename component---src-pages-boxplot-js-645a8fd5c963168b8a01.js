"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[3771],{7128:function(e,t,a){a.d(t,{Z:function(){return i}});var o=a(7294),n=a(1883),l=a(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(r.includes(t))return o.createElement("p",null,"TODO");const i=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?o.createElement(o.Fragment,null,o.createElement("div",{className:"chartImageContainer"},o.createElement(l.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),o.createElement("div",{className:"chartImageOverlay"},o.createElement("div",{className:"chartImageOverlayText"},o.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var o=a(7294),n=a(7128),l=a(1555),r=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return o.createElement(l.Z,{xs:12,md:4},o.createElement(r.Link,{to:i},o.createElement(n.Z,{imgName:t,caption:a})))}},9215:function(e,t,a){a.d(t,{Z:function(){return x}});a(1883);var o=a(7294),n=a(1143),l=a.n(n),r=a(2081),i=a(6833);function c(e,t){let a=0;return o.Children.map(e,(e=>o.isValidElement(e)?t(e,a++):e))}var s=a(4184),m=a.n(s),d=a(6792),p=a(5893);const u=o.forwardRef((({bsPrefix:e,size:t,vertical:a=!1,className:o,role:n="group",as:l="div",...r},i)=>{const c=(0,d.vE)(e,"btn-group");let s=c;return a&&(s=`${c}-vertical`),(0,p.jsx)(l,{...r,ref:i,role:n,className:m()(o,s,t&&`${c}-${t}`)})}));u.displayName="ButtonGroup";var h=u,b=a(8984);const f=o.forwardRef(((e,t)=>{const{children:a,type:n="radio",name:s,value:m,onChange:d,vertical:u=!1,...b}=(0,r.Ch)(e,{value:"onChange"}),f=()=>null==m?[]:[].concat(m);return"radio"!==n||s||l()(!1),(0,p.jsx)(h,{...b,ref:t,vertical:u,children:c(a,(e=>{const t=f(),{value:a,onChange:l}=e.props;return o.cloneElement(e,{type:n,name:e.name||s,checked:-1!==t.indexOf(a),onChange:(0,i.Z)(l,(e=>((e,t)=>{if(!d)return;const a=f(),o=-1!==a.indexOf(e);"radio"!==n?d(o?a.filter((t=>t!==e)):[...a,e],t):o||d(e,t)})(a,e)))})}))})}));var g=Object.assign(f,{Button:b.Z});const E={kdeplot:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.kdeplot.html",basicUsage:"",parameters:[{name:"fill",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"control the color",type:"boolean",relatedChart:"70_deffffed"}]},violin:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.violinplot.html",basicUsage:"",parameters:[{name:"width",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"controls the color",type:"string",relatedChart:"70_deffffed"}]}},y=e=>"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1);function x(e){let{functionName:t}=e;const a=E[t],{0:n,1:l}=(0,o.useState)(a.parameters[0].name),{0:r,1:i}=(0,o.useState)("hello"),c=a.parameters.filter((e=>e.name===n))[0];return o.createElement(o.Fragment,null,o.createElement("h2",{id:y(t+"() details")},"🔎 ",o.createElement("code",null,t)," function parameters",o.createElement("a",{style:{marginLeft:"15px",fontSize:"14px"},href:a.docUrl},"→ see full doc")),o.createElement(g,{type:"radio",size:"sm",name:"functionParameter",value:n,onChange:e=>l(e)},a.parameters.map(((e,t)=>o.createElement(b.Z,{key:t,className:"functionButton",id:"functionParameter-"+e.name,value:e.name},e.name)))),o.createElement("div",null,o.createElement("code",null,"string"),o.createElement("span",null,"→ ",c.description)),o.createElement("br",null),o.createElement("br",null))}},9858:function(e,t,a){a.r(t),a.d(t,{default:function(){return v}});var o=a(7294),n=a(429),l=a(1433),r=a(682),i=a(8728),c=a(4051),s=a(4596),m=a(8742),d=a(1883),p=a(4125),u=a(1555),h=a(5005),b=a(2737),f=a(7128),g=a(9215),E=a(3921);const y="<p>A <a href='https://www.data-to-viz.com/caveat/boxplot.html'>boxplot</a> summarizes the distribution of a numeric variable for one or several groups. It allows to quickly get the median, quartiles and outliers but also hides the dataset individual data points. In python, boxplots are most of time done thanks to the <code>boxplot</code> function of the <code>Seaborn</code> library.</p>",x='# library & dataset\nimport seaborn as sns\ndf = sns.load_dataset(\'iris\')\n\nsns.boxplot( x=df["species"], y=df["sepal_length"] )\n';function v(){return o.createElement(l.Z,{title:"Boxplot",isTocEnabled:!0,seoDescription:"A collection of boxplot examples made with Python, coming with explanation and reproducible code"},o.createElement(n.Z,{title:"Boxplot",description:y}),o.createElement(r.Z,null,o.createElement("h2",{id:"Quick"},"⏱ Quick start"),o.createElement(c.Z,{className:"align-items-center"},o.createElement(u.Z,{md:6},o.createElement("p",null,o.createElement("code",null,"Seaborn")," is definitely the best library to quickly build a boxplot. It offers a dedicated ",o.createElement("code",null,"boxplot()")," ","function that roughly works as follows:🔥")),o.createElement(u.Z,{md:6},o.createElement(d.Link,{to:"/30-basic-boxplot-with-seaborn"},o.createElement(f.Z,{imgName:"30_Basic_Box_seaborn2",caption:"Basic boxplot with Python and Seaborn from various data input formats."})))),o.createElement(b.Z,null,x)),o.createElement(E.Z,null),o.createElement("div",{className:"greySection"},o.createElement(r.Z,null,o.createElement("h2",{id:"Warning"},"⚠️ Mind the boxplot"),o.createElement("p",null,"A boxplot is an awesome way to summarize the distribution of a variable. However it hides the real distribution and the sample size. Check the 3 charts below that are based on the exact same dataset."),o.createElement("p",null,"To read more about this, visit"," ",o.createElement("a",{href:"https://www.data-to-viz.com/caveat/boxplot.html"},"data-to-viz.com")," ","that has a dedicated article."),o.createElement(c.Z,null,o.createElement(s.Z,{imgName:"39_Bad_boxplot1",caption:"Basic boxplot. You can quickly read the median, quartiles and outliers of each group.",linkTo:"/39-hidden-data-under-boxplot"}),o.createElement(s.Z,{imgName:"39_Bad_boxplot2",caption:"If you add individual points with jitter, a bimodal distribution appears for group B",linkTo:"/39-hidden-data-under-boxplot"}),o.createElement(s.Z,{imgName:"39_Bad_boxplot3",caption:"If you have a very large dataset, the violin plot is a better alternative than jittering",linkTo:"/39-hidden-data-under-boxplot"})),o.createElement(d.Link,{to:"/39-hidden-data-under-boxplot"},o.createElement(h.Z,{size:"sm"},"Code and more")))),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement("h2",{id:"Seaborn"},o.createElement(p._I,null),"Boxplots with ",o.createElement("code",null,"Seaborn")),o.createElement("p",null,o.createElement("code",null,"Seaborn")," is a python library allowing to make better charts easily. The ",o.createElement("code",null,"boxplot")," function should get you started in minutes. The examples below aim at showcasing the various possibilities this function offers."),o.createElement(c.Z,null,o.createElement(s.Z,{imgName:"30_Basic_Box_seaborn2",caption:"Let's start basic. The most simple boxplot, based on 3 differents input formats",linkTo:"/30-basic-boxplot-with-seaborn"}),o.createElement(s.Z,{imgName:"33_Custom_Boxplot_color_Seaborn5",caption:"Everything you need concerning color customization on your boxplot: transparency, palette in use, manual control..",linkTo:"/33-control-colors-of-boxplot-seaborn"}),o.createElement(s.Z,{imgName:"33_Custom_Boxplot_color_Seaborn4",caption:"Learn how to highlight a specific group in the dataset to make your point more obvious",linkTo:"/33-control-colors-of-boxplot-seaborn"}),o.createElement(s.Z,{imgName:"34_Grouped_Boxplot_Seaborn",caption:"If you have group and subgroups, you can build a grouped boxplot",linkTo:"/34-grouped-boxplot"}),o.createElement(s.Z,{imgName:"35_Specific_order_Boxplot_Seaborn1",caption:"Control the order of groups in the boxplot. It makes the chart more insightful",linkTo:"/35-control-order-of-boxplot"}),o.createElement(s.Z,{imgName:"36_Boxplot_with_Jitter_Seaborn",caption:"To avoid hiding information, you can add individual data points with jitter",linkTo:"/36-add-jitter-over-boxplot-seaborn"}),o.createElement(s.Z,{imgName:"38_Number_of_obs_on_boxplot_seaborn",caption:"Since individual data points are hidden, it is a good practice to show the sample size under each box",linkTo:"/38-show-number-of-observation-on-boxplot"}),o.createElement(s.Z,{imgName:"32_Custom_Boxplot_Appearance_Seaborn1-1",caption:"Customization: border width",linkTo:"/32-custom-boxplot-appearance-seaborn"}),o.createElement(s.Z,{imgName:"32_Custom_Boxplot_Appearance_Seaborn2",caption:"Customization: use notch",linkTo:"/32-custom-boxplot-appearance-seaborn"}),o.createElement(s.Z,{imgName:"32_Custom_Boxplot_Appearance_Seaborn3",caption:"Customization: box width",linkTo:"/32-custom-boxplot-appearance-seaborn"}),o.createElement(s.Z,{imgName:"54_Grouped_violinplot_Seaborn",caption:"If you have both groups and subgroups, you'll be interested in a grouped violin plot",linkTo:"/54-grouped-violinplot"}))),o.createElement(E.Z,null),o.createElement("div",{className:"greySection"},o.createElement(r.Z,null,o.createElement(g.Z,{functionName:"violin"}))),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement("h2",{id:"From the web"},o.createElement(p.rS,null),"From the web"),o.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",o.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",o.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",o.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),o.createElement(c.Z,null,o.createElement(u.Z,{xs:12,md:6},o.createElement(d.Link,{to:"/web-ggbetweenstats-with-matplotlib"},o.createElement(f.Z,{imgName:"web-ggbetweenstats-with-matplotlib-square",caption:"A combination of a violin plot and a boxplot. Allows the comparison of several groups with statistical test results on top."}))))),o.createElement(E.Z,null),o.createElement("div",{className:"greySection",id:"related"},o.createElement(r.Z,null,o.createElement(m.Z,{chartFamily:"distribution"}))),o.createElement(E.Z,null),o.createElement(r.Z,null,o.createElement(i.Z,null)),o.createElement(E.Z,null))}},8984:function(e,t,a){var o=a(4184),n=a.n(o),l=a(7294),r=a(6792),i=a(5005),c=a(5893);const s=()=>{},m=l.forwardRef((({bsPrefix:e,name:t,className:a,checked:o,type:l,onChange:m,value:d,disabled:p,id:u,inputRef:h,...b},f)=>(e=(0,r.vE)(e,"btn-check"),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("input",{className:e,name:t,type:l,value:d,ref:h,autoComplete:"off",checked:!!o,disabled:!!p,onChange:m||s,id:u}),(0,c.jsx)(i.Z,{...b,ref:f,className:n()(a,p&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:u})]}))));m.displayName="ToggleButton",t.Z=m}}]);
//# sourceMappingURL=component---src-pages-boxplot-js-645a8fd5c963168b8a01.js.map