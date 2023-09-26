"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[6244],{8742:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),l=n(4051),r=n(1555),i=n(818),c=n(8447),o=n(5584);const s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const n=c.c.filter((e=>e.family===t)).map(((e,t)=>{const n=(0,o.y)(e.pythonURL);return a.createElement(r.Z,{key:t,xs:4,md:2,className:"col-1-7"},a.createElement(i.Z,{link:n,chartType:e.logo,caption:e.label}))}));return a.createElement("div",{style:{paddingBottom:15}},a.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),a.createElement(l.Z,null,n))}},7128:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(1883),r=n(8032);const i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){let{imgName:t,caption:n}=e;if(i.includes(t))return a.createElement("p",null,"TODO");const c=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return c?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(r.G,{image:c.node.childImageSharp.gatsbyImageData,alt:n,className:"chartImageImg"}),n&&a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,n))))):null}},4596:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(7294),l=n(7128),r=n(1555),i=n(1883);function c(e){let{imgName:t,caption:n,linkTo:c}=e;return a.createElement(r.Z,{xs:12,md:4},a.createElement(i.Link,{to:c},a.createElement(l.Z,{imgName:t,caption:n})))}},9389:function(e,t,n){n.d(t,{H:function(){return l}});var a=n(7294);const l=e=>{let{title:t,seoDescription:n,keywords:l}=e;return a.createElement(a.Fragment,null,a.createElement("title",null,t),a.createElement("html",{lang:"en"}),a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),a.createElement("meta",{name:"description",content:n||"How to build a chart with Python"}),a.createElement("meta",{name:"author",content:"Yan Holtz"}),a.createElement("meta",{name:"keywords",content:l||"python, chart, graph, code, viz, dataviz"}),a.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),a.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),a.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),a.createElement("meta",{property:"og:description",content:n}),a.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}))}},818:function(e,t,n){n.d(t,{Z:function(){return c}});var a=n(1883),l=n(7294),r=n(5128);const i=n(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function c(e){let{chartType:t,caption:n,link:c}=e;const o=i.includes(t);return l.createElement(l.Fragment,null,o?l.createElement("div",{className:"sectionLogoContainer"},l.createElement(a.Link,{to:c},l.createElement(r.Z,{chartType:t})),l.createElement("p",{className:"sectionLogoCaption"},n)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(a.Link,{to:c},l.createElement(r.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"sectionLogoCaption"},n)))}},429:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),l=n(5005),r=n(1883),i=n(8447),c=n(5584),o=n(682),s=n(5128);function m(e){let{title:t,description:n,chartType:s}=e;const m=i.c.filter((e=>e.id===s))[0];return a.createElement(o.Z,null,a.createElement("div",{className:"titleAndDescription"},a.createElement("div",{className:"titleRow"},a.createElement("h1",null,t),s&&a.createElement(h,{chartType:s})),a.createElement("hr",{className:"smallHr"}),"string"==typeof n?a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:n}}):a.createElement("div",{className:"description"},n),s&&a.createElement("div",{style:{marginTop:"10px"}},a.createElement(r.Link,{to:(0,c.y)(m.pythonURL)},a.createElement(l.Z,{size:"sm"},m.label+" section")),a.createElement("a",{href:m.dataToVizURL},a.createElement(l.Z,{size:"sm"},"About this chart")))))}const h=e=>{let{chartType:t}=e;const n=i.c.filter((e=>e.id===t))[0],l=(0,c.y)(n.pythonURL);return a.createElement("div",{style:{width:"80px",marginLeft:40}},a.createElement(r.Link,{to:l},a.createElement(s.Z,{chartType:n.logo})))}},5698:function(e,t,n){n.r(t),n.d(t,{Head:function(){return y},default:function(){return f}});var a=n(7294),l=n(429),r=n(2057),i=n(682),c=n(1190),o=n(8742),s=n(1883),m=n(4125),h=n(5005),d=n(3921),p=n(4596),u=n(4051),E=n(9389);const g="<p>A <a href='https://www.data-to-viz.com/graph/ridgeline.html'>ridgeline</a> summarizes the distribution of a numeric variable for several groups. Each group is represented as a density chart, each density chart overlapping each other to use space more efficiently.</p>",y=()=>a.createElement(E.H,{title:"Ridgeline",seoDescription:"A collection of ridgeline chart examples made with Python, coming with explanation and reproducible code"});function f(){return a.createElement(r.Z,{isTocEnabled:!0},a.createElement(l.Z,{title:"Ridgeline chart",description:g}),a.createElement(i.Z,null,a.createElement("h2",{id:"Seaborn"},a.createElement(m._I,null),"Ridgeline charts with ",a.createElement("code",null,"Seaborn")),a.createElement("p",null,a.createElement("code",null,"Seaborn")," does not have a dedicated section to build ridgeline charts. It is still possible to make one using some workarounds involving several call of the ",a.createElement("code",null,"kdeplot()")," ","function."),a.createElement(u.Z,null,a.createElement(p.Z,{imgName:"ridgeline-graph-seaborn",caption:"Ridgeline chart with python, matplotlib and seaborn.",linkTo:"/ridgeline-graph-seaborn"}))),a.createElement(d.Z,null),a.createElement(i.Z,null,a.createElement("h2",{id:"Plotly"},a.createElement(m.fw,null),"Interactive ridgeline chart with ",a.createElement("code",null,"plotly")),a.createElement("p",null,"Plotly is a python library that makes the link with Javascript to build interactive charts that you can display in a browser."),a.createElement("p",null,"The following example is a ridgeline chart made with this library"),a.createElement("div",{className:"mx-auto"},a.createElement("iframe",{src:"/interactiveCharts/ridgeline-graph-plotly.html",title:"ridgeline chart with plotly",style:{border:"none",width:"800px",height:"500px"}})),a.createElement(s.Link,{to:"/ridgeline-graph-plotly"},a.createElement(h.Z,{size:"sm"},"See code"))),a.createElement(d.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(i.Z,null,a.createElement(o.Z,{chartFamily:"distribution"}))),a.createElement(d.Z,null),a.createElement(i.Z,null,a.createElement(c.Z,null)),a.createElement(d.Z,null))}},1555:function(e,t,n){var a=n(4184),l=n.n(a),r=n(7294),i=n(6792),c=n(5893);const o=r.forwardRef(((e,t)=>{const[{className:n,...a},{as:r="div",bsPrefix:o,spans:s}]=function({as:e,bsPrefix:t,className:n,...a}){t=(0,i.vE)(t,"col");const r=(0,i.pi)(),c=(0,i.zG)(),o=[],s=[];return r.forEach((e=>{const n=a[e];let l,r,i;delete a[e],"object"==typeof n&&null!=n?({span:l,offset:r,order:i}=n):l=n;const m=e!==c?`-${e}`:"";l&&o.push(!0===l?`${t}${m}`:`${t}${m}-${l}`),null!=i&&s.push(`order${m}-${i}`),null!=r&&s.push(`offset${m}-${r}`)})),[{...a,className:l()(n,...o,...s)},{as:e,bsPrefix:t,spans:o}]}(e);return(0,c.jsx)(r,{...a,ref:t,className:l()(n,!s.length&&o)})}));o.displayName="Col",t.Z=o},4051:function(e,t,n){var a=n(4184),l=n.n(a),r=n(7294),i=n(6792),c=n(5893);const o=r.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},r)=>{const o=(0,i.vE)(e,"row"),s=(0,i.pi)(),m=(0,i.zG)(),h=`${o}-cols`,d=[];return s.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const l=e!==m?`-${e}`:"";null!=n&&d.push(`${h}${l}-${n}`)})),(0,c.jsx)(n,{ref:r,...a,className:l()(t,o,...d)})}));o.displayName="Row",t.Z=o}}]);
//# sourceMappingURL=component---src-pages-ridgeline-js-d1386c1eeac140afc14e.js.map