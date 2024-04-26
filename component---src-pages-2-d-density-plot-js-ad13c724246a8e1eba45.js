"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[2436],{8742:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(4051),i=n(1555),o=n(818),r=n(8447),c=n(5584);const m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function s(e){let{chartFamily:t}=e;const n=r.c.filter((e=>e.family===t)).map(((e,t)=>{const n=(0,c.y)(e.pythonURL);return a.createElement(i.Z,{key:t,xs:4,md:2,className:"col-1-7"},a.createElement(o.Z,{link:n,chartType:e.logo,caption:e.label}))}));return a.createElement("div",{style:{paddingBottom:15}},a.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==m?void 0:m[t]),a.createElement(l.Z,null,n))}},7128:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),l=n(1883),i=n(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function r(e){let{imgName:t,caption:n}=e;if(o.includes(t))return a.createElement("p",null,"TODO");const r=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return r?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(i.G,{image:r.node.childImageSharp.gatsbyImageData,alt:n,className:"chartImageImg"}),n&&a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,n))))):null}},4596:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(7294),l=n(7128),i=n(1555),o=n(1883);function r(e){let{imgName:t,caption:n,linkTo:r}=e;return a.createElement(i.Z,{xs:12,md:4},a.createElement(o.Link,{to:r},a.createElement(l.Z,{imgName:t,caption:n})))}},9389:function(e,t,n){n.d(t,{H:function(){return l}});var a=n(7294);const l=e=>{let{title:t,seoDescription:n,keywords:l}=e;return a.createElement(a.Fragment,null,a.createElement("title",null,t),a.createElement("html",{lang:"en"}),a.createElement("meta",{name:"description",content:n||"How to build a chart with Python"}),a.createElement("meta",{name:"author",content:"Yan Holtz"}),a.createElement("meta",{name:"keywords",content:l||"python, chart, graph, code, viz, dataviz"}),a.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),a.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),a.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),a.createElement("meta",{property:"og:description",content:n}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:site",content:"@R_Graph_Gallery"}))}},818:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(1883),l=n(7294),i=n(5128);const o=n(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function r(e){let{chartType:t,caption:n,link:r}=e;const c=o.includes(t);return l.createElement(l.Fragment,null,c?l.createElement("div",{className:"sectionLogoContainer"},l.createElement(a.Link,{to:r},l.createElement(i.Z,{chartType:t})),l.createElement("p",{className:"sectionLogoCaption"},n)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(a.Link,{to:r},l.createElement(i.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"sectionLogoCaption"},n)))}},429:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(5005),i=n(1883),o=n(8447),r=n(5584),c=n(682),m=n(5128);function s(e){let{title:t,description:n,chartType:m}=e;const s=o.c.filter((e=>e.id===m))[0];return a.createElement(c.Z,null,a.createElement("div",{className:"titleAndDescription"},a.createElement("div",{className:"titleRow"},a.createElement("h1",null,t),m&&a.createElement(h,{chartType:m})),a.createElement("hr",{className:"smallHr"}),"string"==typeof n?a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:n}}):a.createElement("div",{className:"description"},n),m&&a.createElement("div",{style:{marginTop:"10px"}},a.createElement(i.Link,{to:(0,r.y)(s.pythonURL)},a.createElement(l.Z,{size:"sm"},s.label+" section")),a.createElement("a",{href:s.dataToVizURL},a.createElement(l.Z,{size:"sm"},"About this chart")))),a.createElement("div",{className:"raptive-video-player",style:{minHeight:300}}))}const h=e=>{let{chartType:t}=e;const n=o.c.filter((e=>e.id===t))[0],l=(0,r.y)(n.pythonURL);return a.createElement("div",{style:{width:"80px",marginLeft:40}},a.createElement(i.Link,{to:l},a.createElement(m.Z,{chartType:n.logo})))}},5357:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return f}});var a=n(7294),l=n(429),i=n(311),o=n(682),r=n(8728),c=n(4051),m=n(4596),s=n(8742),h=n(1883),d=n(944),p=n(5005),u=n(7128),E=n(3921),g=n(9389);const b="<p>This section explains how to build a <a href='https://www.data-to-viz.com/graph/density2d.html'>2d density chart</a> or a <a href='https://www.data-to-viz.com/graph/density2d.html'>2d histogram</a> with python. Those chart types allow to visualize the combined distribution of two quantitative variables. They can be build with <code>Matplotlib</code> or <code>Seaborn</code>.</p>",y=()=>a.createElement(g.H,{title:"2d density chart",seoDescription:"A collection of 2d density chart examples made with Python, coming with explanation and reproducible code"});function f(){return a.createElement(i.Z,{isTocEnabled:!0},a.createElement(l.Z,{title:"2D Density Chart",description:b}),a.createElement("div",{className:"greySection"},a.createElement(o.Z,null,a.createElement("h2",{id:"Warning"},"💡 What is a 2D density chart?"),a.createElement("p",null,"There are several chart types allowing to visualize the distribution of a combination of ",a.createElement("b",null,"2 numeric variables"),". They always have a variable represented on the X axis, the other on the Y axis, like for a ",a.createElement(h.Link,{to:"/scatter-plot"},"scatterplot")," (left)."),a.createElement("p",null,"Then the number of observations within a particular area of the 2D space is counted and represented with a ",a.createElement("b",null,"color gradient"),". The shape can vary: hexagones result in a ",a.createElement("code",null,"hexbin chart"),", squares in a ",a.createElement("code",null,"2d histogram"),". A kernel density estimate can be used to get a ",a.createElement("code",null,"2d density plots")," or a"," ",a.createElement("code",null,"contour plots")),a.createElement("div",{style:{maxWidth:"750px",margin:"auto"}},a.createElement(h.Link,{to:"/86-avoid-overlapping-in-scatterplot-with-2d-density"},a.createElement(u.Z,{imgName:"what-is-density-chart",caption:"Cheat sheet: line customization with matplotlib"}))),a.createElement("p",null,"Confusing? Visit"," ",a.createElement("a",{href:"https://www.data-to-viz.com/graph/density2d.html"},"data-to-viz")," ","to clarify.."),a.createElement("a",{href:"https://www.data-to-viz.com/graph/density2d.html"},a.createElement(p.Z,{size:"sm"},"More viz explanation")),a.createElement(h.Link,{to:"/86-avoid-overlapping-in-scatterplot-with-2d-density"},a.createElement(p.Z,{size:"sm"},"Show me the code")))),a.createElement(E.Z,null),a.createElement(o.Z,null,a.createElement("h2",{id:"Contour"},a.createElement(d._I,null),"Contour plot with ",a.createElement("code",null,"Seaborn")),a.createElement("p",null,"The contour plot can be easily built thanks to the"," ",a.createElement("code",null,"kdeplot()")," function of the Seaborn library."),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"80_bivariate_kernel_density_plot1",caption:"Basic contourplot with seaborn.",linkTo:"/80-contour-plot-with-seaborn"}),a.createElement(m.Z,{imgName:"80_bivariate_kernel_density_plot2",caption:"Basic contourplot with seaborn.",linkTo:"/80-contour-plot-with-seaborn"}),a.createElement(m.Z,{imgName:"80_bivariate_kernel_density_plot3",caption:"Basic contourplot with seaborn.",linkTo:"/80-contour-plot-with-seaborn"}))),a.createElement(E.Z,null),a.createElement(o.Z,null,a.createElement("h2",{id:"2d histogram"},a.createElement(d.rS,null),"2D histogram with ",a.createElement("code",null,"Matplotlib")),a.createElement("p",null,"Build a 2d histogram thanks to the ",a.createElement("code",null,"hist2d()")," function of the ",a.createElement("code",null,"Matplotlib")," library. Do not forget to play with the"," ",a.createElement("code",null,"bins")," argument to find the value representing the best your data."),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"83-basic-2d-histograms-with-matplotlib-1",caption:"Basic 2D histogram with bins customization",linkTo:"/83-basic-2d-histograms-with-matplotlib"}),a.createElement(m.Z,{imgName:"83-basic-2d-histograms-with-matplotlib-2",caption:"Control the color in the 2d histogram.",linkTo:"/83-basic-2d-histograms-with-matplotlib"}),a.createElement(m.Z,{imgName:"83-basic-2d-histograms-with-matplotlib-3",caption:"Black and white, color scale legend.",linkTo:"/83-basic-2d-histograms-with-matplotlib"}))),a.createElement(E.Z,null),a.createElement(o.Z,null,a.createElement("h2",{id:"Hexbin"},a.createElement(d.rS,null),"Hexbin chart with ",a.createElement("code",null,"Matplotlib")),a.createElement("p",null,"Split the graph area in hexagones and you get a hexbin density chart. This time, it is ",a.createElement("code",null,"matplotlib")," that gets you covered thanks to its ",a.createElement("code",null,"hexbin()")," function."),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"84-hexbin-plot-with-matplotlib-1",caption:"Basic hexbin with bins customization",linkTo:"/84-hexbin-plot-with-matplotlib"}),a.createElement(m.Z,{imgName:"84-hexbin-plot-with-matplotlib-2",caption:"Control the color in the hexbin.",linkTo:"/84-hexbin-plot-with-matplotlib"}),a.createElement(m.Z,{imgName:"84-hexbin-plot-with-matplotlib-3",caption:"Black and white, color scale legend.",linkTo:"/84-hexbin-plot-with-matplotlib"}))),a.createElement(E.Z,null),a.createElement(o.Z,null,a.createElement("h2",{id:"2d density"},a.createElement(d.rS,null),"2d density chart with ",a.createElement("code",null,"Matplotlib")),a.createElement("p",null,"2D densities are computed thanks to the ",a.createElement("code",null,"gaussian_kde()")," ","function and plotted thanks with the ",a.createElement("code",null,"pcolormesh()")," ","function of ",a.createElement("code",null,"matplotlib()"),"."),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"85-density-plot-with-matplotlib-1",caption:"Basic 2d density with bins customization",linkTo:"/85-density-plot-with-matplotlib"}),a.createElement(m.Z,{imgName:"85-density-plot-with-matplotlib-2",caption:"Control the color in the 2d density.",linkTo:"/85-density-plot-with-matplotlib"}),a.createElement(m.Z,{imgName:"85-density-plot-with-matplotlib-3",caption:"Black and white, color scale legend.",linkTo:"/85-density-plot-with-matplotlib"}))),a.createElement(E.Z,null),a.createElement(o.Z,null,a.createElement("h2",{id:"Marginal plot"},a.createElement(d.rS,null),"2d density and marginal plots"),a.createElement("p",null,"2D densities often combined with marginal distributions. It helps to highlight the distribution of both variables individually. It is pretty straightforward to add thanks to the ",a.createElement("code",null,"jointplot()")," ","function of the ",a.createElement("code",null,"Seaborn")," library."),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"82_seaborn_jointplot2",caption:"Marginal distribution and hexbin.",linkTo:"/82-marginal-plot-with-seaborn"}),a.createElement(m.Z,{imgName:"82_seaborn_jointplot3",caption:"Marginal distribution and contour.",linkTo:"/82-marginal-plot-with-seaborn"}),a.createElement(m.Z,{imgName:"82_seaborn_jointplot5",caption:"General customization.",linkTo:"/82-marginal-plot-with-seaborn"}))),a.createElement(E.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(o.Z,null,a.createElement(s.Z,{chartFamily:"correlation"}))),a.createElement(E.Z,null),a.createElement(o.Z,null,a.createElement(r.Z,null)),a.createElement(E.Z,null))}},1555:function(e,t,n){var a=n(4184),l=n.n(a),i=n(7294),o=n(6792),r=n(5893);const c=i.forwardRef(((e,t)=>{const[{className:n,...a},{as:i="div",bsPrefix:c,spans:m}]=function({as:e,bsPrefix:t,className:n,...a}){t=(0,o.vE)(t,"col");const i=(0,o.pi)(),r=(0,o.zG)(),c=[],m=[];return i.forEach((e=>{const n=a[e];let l,i,o;delete a[e],"object"==typeof n&&null!=n?({span:l,offset:i,order:o}=n):l=n;const s=e!==r?`-${e}`:"";l&&c.push(!0===l?`${t}${s}`:`${t}${s}-${l}`),null!=o&&m.push(`order${s}-${o}`),null!=i&&m.push(`offset${s}-${i}`)})),[{...a,className:l()(n,...c,...m)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,r.jsx)(i,{...a,ref:t,className:l()(n,!m.length&&c)})}));c.displayName="Col",t.Z=c},4051:function(e,t,n){var a=n(4184),l=n.n(a),i=n(7294),o=n(6792),r=n(5893);const c=i.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},i)=>{const c=(0,o.vE)(e,"row"),m=(0,o.pi)(),s=(0,o.zG)(),h=`${c}-cols`,d=[];return m.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const l=e!==s?`-${e}`:"";null!=n&&d.push(`${h}${l}-${n}`)})),(0,r.jsx)(n,{ref:i,...a,className:l()(t,c,...d)})}));c.displayName="Row",t.Z=c}}]);
//# sourceMappingURL=component---src-pages-2-d-density-plot-js-ad13c724246a8e1eba45.js.map