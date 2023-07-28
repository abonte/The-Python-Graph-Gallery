"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[4830],{8742:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),r=a(4051),n=a(1555),c=a(818),i=a(8447),o=a(5584);const s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const a=i.c.filter((e=>e.family===t)).filter((e=>"waffle"!==e.id)).map(((e,t)=>{const a=(0,o.y)(e.pythonURL);return l.createElement(n.Z,{key:t,xs:4,md:2,className:"g-3"},l.createElement(c.Z,{link:a,chartType:e.logo,caption:e.label}))}));return l.createElement("div",{style:{paddingBottom:15}},l.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),l.createElement(r.Z,null,a))}},7128:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),r=a(1883),n=a(8032);const c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(c.includes(t))return l.createElement("p",null,"TODO");const i=(0,r.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(n.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(7294),r=a(7128),n=a(1555),c=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return l.createElement(n.Z,{xs:12,md:4},l.createElement(c.Link,{to:i},l.createElement(r.Z,{imgName:t,caption:a})))}},818:function(e,t,a){a.d(t,{Z:function(){return i}});var l=a(1883),r=a(7294),n=a(5128);const c=a(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function i(e){let{chartType:t,caption:a,link:i}=e;const o=c.includes(t);return r.createElement(r.Fragment,null,o?r.createElement("div",{className:"sectionLogoContainer"},r.createElement(l.Link,{to:i},r.createElement(n.Z,{chartType:t})),r.createElement("p",{className:"sectionLogoCaption"},a)):r.createElement(r.Fragment,null,r.createElement("div",{className:"sectionLogoContainer"},r.createElement(l.Link,{to:i},r.createElement(n.Z,{chartType:t}),r.createElement("div",{className:"sectionLogoOverlay"},r.createElement("div",{className:"sectionLogoOverlayText"},"+")))),r.createElement("p",{className:"sectionLogoCaption"},a)))}},429:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),r=a(5005),n=a(1883),c=a(8447),i=a(5584),o=a(682),s=a(5128);function m(e){let{title:t,description:a,chartType:s}=e;const m=c.c.filter((e=>e.id===s))[0];return l.createElement(o.Z,null,l.createElement("div",{className:"titleAndDescription"},l.createElement("div",{className:"titleRow"},l.createElement("h1",null,t),s&&l.createElement(h,{chartType:s})),l.createElement("hr",{className:"smallHr"}),"string"==typeof a?l.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):l.createElement("div",{className:"description"},a),s&&l.createElement("div",{style:{marginTop:"10px"}},l.createElement(n.Link,{to:(0,i.y)(m.pythonURL)},l.createElement(r.Z,{size:"sm"},m.label+" section")),l.createElement("a",{href:m.dataToVizURL},l.createElement(r.Z,{size:"sm"},"About this chart")))))}const h=e=>{let{chartType:t}=e;const a=c.c.filter((e=>e.id===t))[0],r=(0,i.y)(a.pythonURL);return l.createElement("div",{style:{width:"80px",marginLeft:40}},l.createElement(n.Link,{to:r},l.createElement(s.Z,{chartType:a.logo})))}},2324:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var l=a(7294),r=a(429),n=a(1433),c=a(682),i=a(8728),o=a(4051),s=a(4596),m=a(8742),h=a(1883),u=a(4125),d=a(1555),p=a(7128),E=a(818),f=a(8447),g=a(5584),w=a(3921);const v=["lollipop","parallel","barplot","stackedBar"],y=()=>{const e=f.c.filter((e=>v.includes(e.id))).map(((e,t)=>{const a=(0,g.y)(e.pythonURL);return l.createElement(d.Z,{key:t,xs:4,md:2},l.createElement(E.Z,{link:a,chartType:e.logo,caption:e.label}))}));return l.createElement("div",null,l.createElement(o.Z,null,e))},b="<p>A <a href='https://www.data-to-viz.com/caveat/spider.html'>radar chart</a> (or <a href='https://www.data-to-viz.com/caveat/spider.html'>spider plot</a>, or <a href='https://www.data-to-viz.com/caveat/spider.html'>polar chart</a>) allows to visualize one or more series of values over multiple quantitative variables. Each variable has its own axis, all axes are joined in the center of the figure. This section shows how to build it with <code>Matplotlib</code>, but keep in mind they are some <a href='https://www.data-to-viz.com/caveat/spider.html'>caveats</a> associated with this chart type.</p>";function Z(){return l.createElement(n.Z,{title:"Radar chart",isTocEnabled:!0,seoDescription:"A collection of radar chart examples made with Python, coming with explanation and reproducible code"},l.createElement(r.Z,{title:"Radar Chart",description:b}),l.createElement("div",{className:"greySection",id:"warning"},l.createElement(c.Z,null,l.createElement("h2",{id:"Warning"},"⚠️ Radar charts are criticized"),l.createElement("p",null,"Spider plots are somewhat criticized. The ",l.createElement("u",null,"variable order")," has a huge impact on the chart appearance, ",l.createElement("u",null,"scales")," can be skewed, ",l.createElement("u",null,"overplotting")," makes it hard to read and ",l.createElement("u",null,"over-evaluation")," of differences are the main arguments."),l.createElement("p",null,"You should probably read ",l.createElement("a",{href:"https://www.data-to-viz.com/caveat/spider.html"},"this article")," that explains the issues more in depth before building one, and consider switching to one of the alternative below:"),l.createElement(y,null))),l.createElement(w.Z,null),l.createElement(c.Z,null,l.createElement("h2",{id:"Matplotlib"},l.createElement(u.rS,null)," Radar chart with ",l.createElement("code",null,"Matplotlib")),l.createElement("p",null,"As far as I know there isn't any library offering a function to build a spider plot quickly. Fortunately, ",l.createElement("code",null,"Matplotlib")," allows a very high level of customization. With a bit of trigonometry and the ",l.createElement("code",null,"plot()")," function you should get your desired viz."),l.createElement(o.Z,null,l.createElement(s.Z,{imgName:"390_basic_Radarchart",caption:"Most basic radar chart with python.",linkTo:"/390-basic-radar-chart"}),l.createElement(s.Z,{imgName:"391_Several_indiv_Radarchart",caption:"Radar chart with several displayed values",linkTo:"/391-radar-chart-with-several-individuals"})),l.createElement("p",null,"Radar charts are often used in combination with faceting. It allows to compare the features of several groups, what would be unreadable if plotted on the same chart."),l.createElement(h.Link,{to:"/392-use-faceting-for-radar-chart"},l.createElement(p.Z,{imgName:"393_Faceting_and_Radarchart",caption:"A polar chart with small multiple to compare 4 groups"}))),l.createElement(w.Z,null),l.createElement(c.Z,null,l.createElement("h2",{id:"From the web"},l.createElement(u.rS,null),"From the web"),l.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",l.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The ",l.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),l.createElement(o.Z,null,l.createElement(d.Z,{xs:12,md:6},l.createElement(h.Link,{to:"/web-radar-chart-with-matplotlib"},l.createElement(p.Z,{imgName:"web-radar-chart-with-matplotlib-square",caption:"An appealing radar chart with several groups to compare some penguins populations ."}))),l.createElement(d.Z,{xs:12,md:6},l.createElement(h.Link,{to:"/web-circular-barplot-with-matplotlib"},l.createElement(p.Z,{imgName:"web-circular-barplot-with-matplotlib-square",caption:"A circular barchart with several features per group made with Python and Matplotlib."}))))),l.createElement(w.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(c.Z,null,l.createElement(m.Z,{chartFamily:"ranking"}))),l.createElement(w.Z,null),l.createElement(c.Z,null,l.createElement(i.Z,null)),l.createElement(w.Z,null))}},1555:function(e,t,a){var l=a(4184),r=a.n(l),n=a(7294),c=a(6792),i=a(5893);const o=n.forwardRef(((e,t)=>{const[{className:a,...l},{as:n="div",bsPrefix:o,spans:s}]=function({as:e,bsPrefix:t,className:a,...l}){t=(0,c.vE)(t,"col");const n=(0,c.pi)(),i=(0,c.zG)(),o=[],s=[];return n.forEach((e=>{const a=l[e];let r,n,c;delete l[e],"object"==typeof a&&null!=a?({span:r,offset:n,order:c}=a):r=a;const m=e!==i?`-${e}`:"";r&&o.push(!0===r?`${t}${m}`:`${t}${m}-${r}`),null!=c&&s.push(`order${m}-${c}`),null!=n&&s.push(`offset${m}-${n}`)})),[{...l,className:r()(a,...o,...s)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,i.jsx)(n,{...l,ref:t,className:r()(a,!s.length&&o)})}));o.displayName="Col",t.Z=o},4051:function(e,t,a){var l=a(4184),r=a.n(l),n=a(7294),c=a(6792),i=a(5893);const o=n.forwardRef((({bsPrefix:e,className:t,as:a="div",...l},n)=>{const o=(0,c.vE)(e,"row"),s=(0,c.pi)(),m=(0,c.zG)(),h=`${o}-cols`,u=[];return s.forEach((e=>{const t=l[e];let a;delete l[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const r=e!==m?`-${e}`:"";null!=a&&u.push(`${h}${r}-${a}`)})),(0,i.jsx)(a,{ref:n,...l,className:r()(t,o,...u)})}));o.displayName="Row",t.Z=o}}]);
//# sourceMappingURL=component---src-pages-radar-chart-js-77e76ba420ae6eaaae36.js.map