"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[4830],{8742:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),r=a(4051),n=a(1555),c=a(818),o=a(8447),i=a(5584);const s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const a=o.c.filter((e=>e.family===t)).map(((e,t)=>{const a=(0,i.y)(e.pythonURL);return l.createElement(n.Z,{key:t,xs:4,md:2,className:"col-1-7"},l.createElement(c.Z,{link:a,chartType:e.logo,caption:e.label}))}));return l.createElement("div",{style:{paddingBottom:15}},l.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),l.createElement(r.Z,null,a))}},7128:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),r=a(1883),n=a(8032);const c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:a}=e;if(c.includes(t))return l.createElement("p",null,"TODO");const o=(0,r.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(n.G,{image:o.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(7294),r=a(7128),n=a(1555),c=a(1883);function o(e){let{imgName:t,caption:a,linkTo:o}=e;return l.createElement(n.Z,{xs:12,md:4},l.createElement(c.Link,{to:o},l.createElement(r.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return r}});var l=a(7294);const r=e=>{let{title:t,seoDescription:a,keywords:r}=e;return l.createElement(l.Fragment,null,l.createElement("title",null,t),l.createElement("html",{lang:"en"}),l.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),l.createElement("meta",{name:"author",content:"Yan Holtz"}),l.createElement("meta",{name:"keywords",content:r||"python, chart, graph, code, viz, dataviz"}),l.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),l.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),l.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement("meta",{property:"og:description",content:a}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),l.createElement("meta",{name:"twitter:site",content:"@R_Graph_Gallery"}))}},818:function(e,t,a){a.d(t,{Z:function(){return o}});var l=a(1883),r=a(7294),n=a(5128);const c=a(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function o(e){let{chartType:t,caption:a,link:o}=e;const i=c.includes(t);return r.createElement(r.Fragment,null,i?r.createElement("div",{className:"sectionLogoContainer"},r.createElement(l.Link,{to:o},r.createElement(n.Z,{chartType:t})),r.createElement("p",{className:"sectionLogoCaption"},a)):r.createElement(r.Fragment,null,r.createElement("div",{className:"sectionLogoContainer"},r.createElement(l.Link,{to:o},r.createElement(n.Z,{chartType:t}),r.createElement("div",{className:"sectionLogoOverlay"},r.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.createElement("p",{className:"sectionLogoCaption"},a)))}},429:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),r=a(5005),n=a(1883),c=a(8447),o=a(5584),i=a(682),s=a(5128);function m(e){let{title:t,description:a,chartType:s}=e;const m=c.c.filter((e=>e.id===s))[0];return l.createElement(i.Z,null,l.createElement("div",{className:"titleAndDescription"},l.createElement("div",{className:"titleRow"},l.createElement("h1",null,t),s&&l.createElement(h,{chartType:s})),l.createElement("hr",{className:"smallHr"}),"string"==typeof a?l.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):l.createElement("div",{className:"description"},a),s&&l.createElement("div",{style:{marginTop:"10px"}},l.createElement(n.Link,{to:(0,o.y)(m.pythonURL)},l.createElement(r.Z,{size:"sm"},m.label+" section")),l.createElement("a",{href:m.dataToVizURL},l.createElement(r.Z,{size:"sm"},"About this chart")))),l.createElement("div",{className:"raptive-video-player",style:{minHeight:300}}))}const h=e=>{let{chartType:t}=e;const a=c.c.filter((e=>e.id===t))[0],r=(0,o.y)(a.pythonURL);return l.createElement("div",{style:{width:"80px",marginLeft:40}},l.createElement(n.Link,{to:r},l.createElement(s.Z,{chartType:a.logo})))}},2324:function(e,t,a){a.r(t),a.d(t,{Head:function(){return N},default:function(){return k}});var l=a(7294),r=a(429),n=a(311),c=a(682),o=a(8728),i=a(4051),s=a(4596),m=a(8742),h=a(1883),d=a(944),p=a(1555),u=a(7128),E=a(818),y=a(8447),f=a(5584),g=a(3921),w=a(9389);const v=["lollipop","parallel","barplot","stackedBar"],b=()=>{const e=y.c.filter((e=>v.includes(e.id))).map(((e,t)=>{const a=(0,f.y)(e.pythonURL);return l.createElement(p.Z,{key:t,xs:4,md:2},l.createElement(E.Z,{link:a,chartType:e.logo,caption:e.label}))}));return l.createElement("div",null,l.createElement(i.Z,null,e))},Z="<p>A <a href='https://www.data-to-viz.com/caveat/spider.html'>radar chart</a> (or <a href='https://www.data-to-viz.com/caveat/spider.html'>spider plot</a>, or <a href='https://www.data-to-viz.com/caveat/spider.html'>polar chart</a>) allows to visualize one or more series of values over multiple quantitative variables. Each variable has its own axis, all axes are joined in the center of the figure. This section shows how to build it with <code>Matplotlib</code>, but keep in mind they are some <a href='https://www.data-to-viz.com/caveat/spider.html'>caveats</a> associated with this chart type.</p>",N=()=>l.createElement(w.H,{title:"Radar chart",seoDescription:"A collection of radar chart examples made with Python, coming with explanation and reproducible code"});function k(){return l.createElement(n.Z,{isTocEnabled:!0},l.createElement(r.Z,{title:"Radar Chart",description:Z}),l.createElement("div",{className:"greySection",id:"warning"},l.createElement(c.Z,null,l.createElement("h2",{id:"Warning"},"⚠️ Radar charts are criticized"),l.createElement("p",null,"Spider plots are somewhat criticized. The ",l.createElement("u",null,"variable order")," has a huge impact on the chart appearance, ",l.createElement("u",null,"scales")," can be skewed,"," ",l.createElement("u",null,"overplotting")," makes it hard to read and ",l.createElement("u",null,"over-evaluation")," ","of differences are the main arguments."),l.createElement("p",null,"You should probably read"," ",l.createElement("a",{href:"https://www.data-to-viz.com/caveat/spider.html"},"this article")," ","that explains the issues more in depth before building one, and consider switching to one of the alternative below:"),l.createElement(b,null))),l.createElement(g.Z,null),l.createElement(c.Z,null,l.createElement("h2",{id:"Matplotlib"},l.createElement(d.rS,null)," Radar chart with ",l.createElement("code",null,"Matplotlib")),l.createElement("p",null,"As far as I know there isn't any library offering a function to build a spider plot quickly. Fortunately, ",l.createElement("code",null,"Matplotlib")," allows a very high level of customization. With a bit of trigonometry and the"," ",l.createElement("code",null,"plot()")," function you should get your desired viz."),l.createElement(i.Z,null,l.createElement(s.Z,{imgName:"390_basic_Radarchart",caption:"Most basic radar chart with python.",linkTo:"/390-basic-radar-chart"}),l.createElement(s.Z,{imgName:"391_Several_indiv_Radarchart",caption:"Radar chart with several displayed values",linkTo:"/391-radar-chart-with-several-individuals"})),l.createElement("p",null,"Radar charts are often used in combination with faceting. It allows to compare the features of several groups, what would be unreadable if plotted on the same chart."),l.createElement(h.Link,{to:"/392-use-faceting-for-radar-chart"},l.createElement(u.Z,{imgName:"393_Faceting_and_Radarchart",caption:"A polar chart with small multiple to compare 4 groups"}))),l.createElement(g.Z,null),l.createElement(c.Z,null,l.createElement("h2",{id:"Plotly"},l.createElement(d.Ne,null)," Radar chart with ",l.createElement("code",null,"Plotly")),l.createElement("p",null,l.createElement("code",null,"Plotly")," is a great library to build radar charts. It offers a high level of interactivity and can be used with both",l.createElement("code",null,"plotly express")," and ",l.createElement("code",null,"plotly graph objects"),"."),l.createElement(i.Z,null,l.createElement(s.Z,{imgName:"571-radar-chart-with-plotly-1",caption:"Most basic radar chart with plotly",linkTo:"/571-radar-chart-with-plotly"}),l.createElement(s.Z,{imgName:"571-radar-chart-with-plotly-2",caption:"Radar chart with several displayed values",linkTo:"/571-radar-chart-with-plotly"}))),l.createElement(g.Z,null),l.createElement(c.Z,null,l.createElement("h2",{id:"Best"},l.createElement(d.rS,null),"Best python radar chart examples"),l.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",l.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",l.createElement("a",{href:"https://python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),l.createElement(i.Z,null,l.createElement(p.Z,{xs:12,md:6},l.createElement(h.Link,{to:"/web-radar-chart-with-matplotlib"},l.createElement(u.Z,{imgName:"web-radar-chart-with-matplotlib-square",caption:"An appealing radar chart with several groups to compare some penguins populations ."}))),l.createElement(p.Z,{xs:12,md:6},l.createElement(h.Link,{to:"/web-circular-barplot-with-matplotlib"},l.createElement(u.Z,{imgName:"web-circular-barplot-with-matplotlib-square",caption:"A circular barchart with several features per group made with Python and Matplotlib."}))))),l.createElement(g.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(c.Z,null,l.createElement(m.Z,{chartFamily:"ranking"}))),l.createElement(g.Z,null),l.createElement(c.Z,null,l.createElement(o.Z,null)),l.createElement(g.Z,null))}},1555:function(e,t,a){var l=a(4184),r=a.n(l),n=a(7294),c=a(6792),o=a(5893);const i=n.forwardRef(((e,t)=>{const[{className:a,...l},{as:n="div",bsPrefix:i,spans:s}]=function({as:e,bsPrefix:t,className:a,...l}){t=(0,c.vE)(t,"col");const n=(0,c.pi)(),o=(0,c.zG)(),i=[],s=[];return n.forEach((e=>{const a=l[e];let r,n,c;delete l[e],"object"==typeof a&&null!=a?({span:r,offset:n,order:c}=a):r=a;const m=e!==o?`-${e}`:"";r&&i.push(!0===r?`${t}${m}`:`${t}${m}-${r}`),null!=c&&s.push(`order${m}-${c}`),null!=n&&s.push(`offset${m}-${n}`)})),[{...l,className:r()(a,...i,...s)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,o.jsx)(n,{...l,ref:t,className:r()(a,!s.length&&i)})}));i.displayName="Col",t.Z=i},4051:function(e,t,a){var l=a(4184),r=a.n(l),n=a(7294),c=a(6792),o=a(5893);const i=n.forwardRef((({bsPrefix:e,className:t,as:a="div",...l},n)=>{const i=(0,c.vE)(e,"row"),s=(0,c.pi)(),m=(0,c.zG)(),h=`${i}-cols`,d=[];return s.forEach((e=>{const t=l[e];let a;delete l[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const r=e!==m?`-${e}`:"";null!=a&&d.push(`${h}${r}-${a}`)})),(0,o.jsx)(a,{ref:n,...l,className:r()(t,i,...d)})}));i.displayName="Row",t.Z=i}}]);
//# sourceMappingURL=component---src-pages-radar-chart-js-3b9c8481dcd103fe36c4.js.map