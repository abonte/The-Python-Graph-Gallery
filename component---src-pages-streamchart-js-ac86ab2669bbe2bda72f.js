"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[539],{8742:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(4051),r=a(1555),c=a(818),o=a(8447),i=a(5584);const s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const a=o.c.filter((e=>e.family===t)).map(((e,t)=>{const a=(0,i.y)(e.pythonURL);return n.createElement(r.Z,{key:t,xs:4,md:2,className:"col-1-7"},n.createElement(c.Z,{link:a,chartType:e.logo,caption:e.label}))}));return n.createElement("div",{style:{paddingBottom:15}},n.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),n.createElement(l.Z,null,a))}},7128:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(1883),r=a(8032);const c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:a}=e;if(c.includes(t))return n.createElement("p",null,"TODO");const o=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:o.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(7128),r=a(1555),c=a(1883);function o(e){let{imgName:t,caption:a,linkTo:o}=e;return n.createElement(r.Z,{xs:12,md:4},n.createElement(c.Link,{to:o},n.createElement(l.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return l}});var n=a(7294);const l=e=>{let{title:t,seoDescription:a,keywords:l}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("html",{lang:"en"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:l||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}))}},818:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(1883),l=a(7294),r=a(5128);const c=a(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function o(e){let{chartType:t,caption:a,link:o}=e;const i=c.includes(t);return l.createElement(l.Fragment,null,i?l.createElement("div",{className:"sectionLogoContainer"},l.createElement(n.Link,{to:o},l.createElement(r.Z,{chartType:t})),l.createElement("p",{className:"sectionLogoCaption"},a)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(n.Link,{to:o},l.createElement(r.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"sectionLogoCaption"},a)))}},429:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(5005),r=a(1883),c=a(8447),o=a(5584),i=a(682),s=a(5128);function m(e){let{title:t,description:a,chartType:s}=e;const m=c.c.filter((e=>e.id===s))[0];return n.createElement(i.Z,null,n.createElement("div",{className:"titleAndDescription"},n.createElement("div",{className:"titleRow"},n.createElement("h1",null,t),s&&n.createElement(h,{chartType:s})),n.createElement("hr",{className:"smallHr"}),"string"==typeof a?n.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):n.createElement("div",{className:"description"},a),s&&n.createElement("div",{style:{marginTop:"10px"}},n.createElement(r.Link,{to:(0,o.y)(m.pythonURL)},n.createElement(l.Z,{size:"sm"},m.label+" section")),n.createElement("a",{href:m.dataToVizURL},n.createElement(l.Z,{size:"sm"},"About this chart")))),n.createElement("div",{className:"raptive-video-player",style:{minHeight:300}}))}const h=e=>{let{chartType:t}=e;const a=c.c.filter((e=>e.id===t))[0],l=(0,o.y)(a.pythonURL);return n.createElement("div",{style:{width:"80px",marginLeft:40}},n.createElement(r.Link,{to:l},n.createElement(s.Z,{chartType:a.logo})))}},7018:function(e,t,a){a.r(t),a.d(t,{Head:function(){return b},default:function(){return v}});var n=a(7294),l=a(429),r=a(2057),c=a(682),o=a(1190),i=a(4051),s=a(4596),m=a(8742),h=a(1883),p=a(4125),u=a(1555),d=a(7128),E=a(3921),g=a(5005),y=a(9389);const f="<p>A <a href='https://www.data-to-viz.com/graph/streamgraph.html'>streamgraph</a> is a variation of the stacked area graph. It displays the evolution of a numeric value for several groups. Each group is displayed around a central axis and edges are rounded resulting in a flowing and organic shape.</p>",b=()=>n.createElement(y.H,{title:"Streamgraph",seoDescription:"A collection of streamgraph examples made with Python, coming with explanation and reproducible code"});function v(){return n.createElement(r.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Streamgraph",description:f}),n.createElement(c.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(p.rS,null),"Streamgraph with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,n.createElement("code",null,"Matplotlib")," can build streamgraphs but there isn't any prebuilt function for it so be ready for quite a lot of code. 🍿"),n.createElement("p",null,"The process starts pretty much like for a"," ",n.createElement(h.Link,{to:"/stacked-area-plot"},"stacked area graph"),". The"," ",n.createElement("code",null,"baseline")," parameter of the ",n.createElement("code",null,"stackplot()")," ","function is used to place groups around the X axis. The tricky part is to interpolate points between each value of the X axis to get the smooth visual. This is done thanks to the"," ",n.createElement("code",null,"scipy.interpolate")," library."),n.createElement(h.Link,{to:"/streamchart-basic-matplotlib"},n.createElement(g.Z,{size:"sm"},"Read more")),n.createElement(i.Z,null,n.createElement(s.Z,{imgName:"streamchart-basic-matplotlib1",caption:"Everything starts with a stacked area chart with a custom baseline",linkTo:"/streamchart-basic-matplotlib"}),n.createElement(s.Z,{imgName:"streamchart-basic-matplotlib2",caption:"Apply some smoothing to get a stream chart",linkTo:"/streamchart-basic-matplotlib"}),n.createElement(s.Z,{imgName:"streamchart-basic-matplotlib3",caption:"Some more smoothing control using grids",linkTo:"/streamchart-basic-matplotlib"}),n.createElement(s.Z,{imgName:"streamchart-basic-matplotlib4",caption:"Customize the color palette",linkTo:"/streamchart-basic-matplotlib"}))),n.createElement(E.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Altair"},"Streamgraph with ",n.createElement("code",null,"Altair")),n.createElement("p",null,"Altair is a lesser know python library for datavizualization."),n.createElement("p",null,"Fortunately, the ",n.createElement("code",null,"pandas")," library has a"," ",n.createElement("code",null,"divide()")," function that allows to apply this normalization easily."),n.createElement(i.Z,null,n.createElement(s.Z,{imgName:"streamchart-basic-altair",caption:"Basic streamgraph with Altair and Python",linkTo:"/255-percentage-stacked-area-chart"}))),n.createElement(E.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Best"},n.createElement(p.rS,null),"Best python streamchart examples"),n.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",n.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The"," ",n.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," ","tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a"," ",n.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),n.createElement(i.Z,null,n.createElement(u.Z,{xs:12,md:12},n.createElement(h.Link,{to:"/web-streamchart-with-matplotlib"},n.createElement(d.Z,{imgName:"web-streamchart-with-matplotlib",caption:"A streamchart made with Python, Matplotlib and the scipy.stats package."}))))),n.createElement(E.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(c.Z,null,n.createElement(m.Z,{chartFamily:"evolution"}))),n.createElement(E.Z,null),n.createElement(c.Z,null,n.createElement(o.Z,null)),n.createElement(E.Z,null))}},1555:function(e,t,a){var n=a(4184),l=a.n(n),r=a(7294),c=a(6792),o=a(5893);const i=r.forwardRef(((e,t)=>{const[{className:a,...n},{as:r="div",bsPrefix:i,spans:s}]=function({as:e,bsPrefix:t,className:a,...n}){t=(0,c.vE)(t,"col");const r=(0,c.pi)(),o=(0,c.zG)(),i=[],s=[];return r.forEach((e=>{const a=n[e];let l,r,c;delete n[e],"object"==typeof a&&null!=a?({span:l,offset:r,order:c}=a):l=a;const m=e!==o?`-${e}`:"";l&&i.push(!0===l?`${t}${m}`:`${t}${m}-${l}`),null!=c&&s.push(`order${m}-${c}`),null!=r&&s.push(`offset${m}-${r}`)})),[{...n,className:l()(a,...i,...s)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,o.jsx)(r,{...n,ref:t,className:l()(a,!s.length&&i)})}));i.displayName="Col",t.Z=i},4051:function(e,t,a){var n=a(4184),l=a.n(n),r=a(7294),c=a(6792),o=a(5893);const i=r.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},r)=>{const i=(0,c.vE)(e,"row"),s=(0,c.pi)(),m=(0,c.zG)(),h=`${i}-cols`,p=[];return s.forEach((e=>{const t=n[e];let a;delete n[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const l=e!==m?`-${e}`:"";null!=a&&p.push(`${h}${l}-${a}`)})),(0,o.jsx)(a,{ref:r,...n,className:l()(t,i,...p)})}));i.displayName="Row",t.Z=i}}]);
//# sourceMappingURL=component---src-pages-streamchart-js-ac86ab2669bbe2bda72f.js.map