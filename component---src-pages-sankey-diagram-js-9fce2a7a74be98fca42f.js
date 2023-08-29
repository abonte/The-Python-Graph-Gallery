"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[98],{8742:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(4051),r=a(1555),o=a(818),i=a(8447),c=a(5584);const s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const a=i.c.filter((e=>e.family===t)).map(((e,t)=>{const a=(0,c.y)(e.pythonURL);return n.createElement(r.Z,{key:t,xs:4,md:2,className:"col-1-7"},n.createElement(o.Z,{link:a,chartType:e.logo,caption:e.label}))}));return n.createElement("div",{style:{paddingBottom:15}},n.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),n.createElement(l.Z,null,a))}},7128:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(1883),r=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:a}=e;if(o.includes(t))return n.createElement("p",null,"TODO");const i=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:i.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),l=a(7128),r=a(1555),o=a(1883);function i(e){let{imgName:t,caption:a,linkTo:i}=e;return n.createElement(r.Z,{xs:12,md:4},n.createElement(o.Link,{to:i},n.createElement(l.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return o}});var n=a(7294),l=a(1883);function r(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const o=e=>{let{title:t,seoDescription:a,keywords:o}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),n.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:o||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement(l.Script,{id:"adthrive",strategy:"idle",src:r()}))}},818:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(1883),l=a(7294),r=a(5128);const o=a(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function i(e){let{chartType:t,caption:a,link:i}=e;const c=o.includes(t);return l.createElement(l.Fragment,null,c?l.createElement("div",{className:"sectionLogoContainer"},l.createElement(n.Link,{to:i},l.createElement(r.Z,{chartType:t})),l.createElement("p",{className:"sectionLogoCaption"},a)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(n.Link,{to:i},l.createElement(r.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"sectionLogoCaption"},a)))}},429:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(5005),r=a(1883),o=a(8447),i=a(5584),c=a(682),s=a(5128);function m(e){let{title:t,description:a,chartType:s}=e;const m=o.c.filter((e=>e.id===s))[0];return n.createElement(c.Z,null,n.createElement("div",{className:"titleAndDescription"},n.createElement("div",{className:"titleRow"},n.createElement("h1",null,t),s&&n.createElement(h,{chartType:s})),n.createElement("hr",{className:"smallHr"}),"string"==typeof a?n.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):n.createElement("div",{className:"description"},a),s&&n.createElement("div",{style:{marginTop:"10px"}},n.createElement(r.Link,{to:(0,i.y)(m.pythonURL)},n.createElement(l.Z,{size:"sm"},m.label+" section")),n.createElement("a",{href:m.dataToVizURL},n.createElement(l.Z,{size:"sm"},"About this chart")))))}const h=e=>{let{chartType:t}=e;const a=o.c.filter((e=>e.id===t))[0],l=(0,i.y)(a.pythonURL);return n.createElement("div",{style:{width:"80px",marginLeft:40}},n.createElement(r.Link,{to:l},n.createElement(s.Z,{chartType:a.logo})))}},4467:function(e,t,a){a.r(t),a.d(t,{Head:function(){return f},default:function(){return b}});var n=a(7294),l=a(429),r=a(1433),o=a(682),i=a(8728),c=a(4051),s=a(4596),m=a(8742),h=a(1883),d=a(4125),p=a(7128),u=a(3921),y=a(5005),g=a(9389);const E="<p>A <a href='https://www.data-to-viz.com/graph/sankey.html'>Sankey Diagram</a> is a visualisation technique that allows to display flows. Several entities (nodes) are represented by rectangles or text. Their links are represented with arrows or arcs that have a width proportional to the importance of the flow.",f=()=>n.createElement(g.H,{title:"Sankey diagram",seoDescription:"A collection of sankey diagram examples made with Python, coming with explanation and reproducible code"});function b(){return n.createElement(r.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Sankey diagram",description:E}),n.createElement(o.Z,null,n.createElement("h2",{id:"Plotly"},n.createElement(d.Ne,null),"Sankey diagram with ",n.createElement("code",null,"Plotly")),n.createElement("p",null,n.createElement("code",null,"Plotly")," is an awesome ",n.createElement("code",null,"Python")," library for interactive data visualization. It is most probably the best tool to create a Sankey Diagram. Its ",n.createElement("code",null,"Sankey()")," function handles most of the business logic for you, allowing to get a figure in a couple of lines of code."),n.createElement("p",null,"The blogpost linked below should quickly get you started with some"," ",n.createElement(h.Link,{to:"/sankey-diagram-with-python-and-plotly"},"minimal starting example"),". It also describes the most common of type of customization you probably want to apply to your Sankey diagram to make it appealing, and ends up with the code for a real life Sankey diagram shown below."),n.createElement("div",{className:"mx-auto"},n.createElement("iframe",{src:"/interactiveCharts/sankey-diagram-plotly-real.html",title:"Sankey diagram with plotly",style:{border:"none",width:"800px",height:"700px"}})),n.createElement(h.Link,{to:"/sankey-diagram-with-python-and-plotly"},n.createElement(y.Z,{size:"sm"},"See code"))),n.createElement(u.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"pySankey"},"Sankey diagrams with ",n.createElement("code",null,"pySankey")),n.createElement("p",null,"The"," ",n.createElement("a",{target:"_blank",href:"https://github.com/anazalea/pySankey",rel:"noreferrer"},"pySankey")," ","python library by"," ",n.createElement("a",{target:"_blank",href:"https://github.com/anazalea",rel:"noreferrer"},"anazalea")," ","is another option when it comes to build sankey diagrams. It is based on ",n.createElement(h.Link,{to:"/matplotlib"},"matplotlib")," and aims a building static outputs only. The blogpost showcased below should help you to get started quickly, describing the various accepted dataset and the customization offered by the library."),n.createElement(c.Z,null,n.createElement(s.Z,{imgName:"basic-sankey-diagram-with-pysankey-1",caption:"How to build a basic sankey diagram with the pySankey library",linkTo:"/basic-sankey-diagram-with-pysankey"}),n.createElement(s.Z,{imgName:"basic-sankey-diagram-with-pysankey-2",caption:"Some explanation on the various data format that are accepted by the library.",linkTo:"/basic-sankey-diagram-with-pysankey"}))),n.createElement(u.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(d.rS,null),"Sankey diagram with ",n.createElement("code",null,"Matplotlib")),n.createElement("p",null,"The ",n.createElement("code",null,"matplotlib")," library offers a ",n.createElement("code",null,"Sankey()")," ","function that also allows to build sankey diagrams. It is a bit limited in my opinion, since it only allows to visualize flows passing through one unique group as shown in the example below."),n.createElement("p",null,"The example below comes from the"," ",n.createElement("a",{href:"https://matplotlib.org/api/sankey_api.html"},"official doc"),". Have a look to the"," ",n.createElement("a",{href:"https://python-graph-gallery.com/220-sankey-diagram-with-matplotlib/"},"code ",n.createElement("here",null)),"."),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto",padding:30}},n.createElement(h.Link,{to:"/220-sankey-diagram-with-matplotlib"},n.createElement(p.Z,{imgName:"220_Sankey_Matplotlib",caption:"Basic Sankey diagram with Matplotlib"})))),n.createElement(u.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement(m.Z,{chartFamily:"flow"}))),n.createElement(u.Z,null),n.createElement(o.Z,null,n.createElement(i.Z,null)),n.createElement(u.Z,null))}},1555:function(e,t,a){var n=a(4184),l=a.n(n),r=a(7294),o=a(6792),i=a(5893);const c=r.forwardRef(((e,t)=>{const[{className:a,...n},{as:r="div",bsPrefix:c,spans:s}]=function({as:e,bsPrefix:t,className:a,...n}){t=(0,o.vE)(t,"col");const r=(0,o.pi)(),i=(0,o.zG)(),c=[],s=[];return r.forEach((e=>{const a=n[e];let l,r,o;delete n[e],"object"==typeof a&&null!=a?({span:l,offset:r,order:o}=a):l=a;const m=e!==i?`-${e}`:"";l&&c.push(!0===l?`${t}${m}`:`${t}${m}-${l}`),null!=o&&s.push(`order${m}-${o}`),null!=r&&s.push(`offset${m}-${r}`)})),[{...n,className:l()(a,...c,...s)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,i.jsx)(r,{...n,ref:t,className:l()(a,!s.length&&c)})}));c.displayName="Col",t.Z=c},4051:function(e,t,a){var n=a(4184),l=a.n(n),r=a(7294),o=a(6792),i=a(5893);const c=r.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},r)=>{const c=(0,o.vE)(e,"row"),s=(0,o.pi)(),m=(0,o.zG)(),h=`${c}-cols`,d=[];return s.forEach((e=>{const t=n[e];let a;delete n[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const l=e!==m?`-${e}`:"";null!=a&&d.push(`${h}${l}-${a}`)})),(0,i.jsx)(a,{ref:r,...n,className:l()(t,c,...d)})}));c.displayName="Row",t.Z=c}}]);
//# sourceMappingURL=component---src-pages-sankey-diagram-js-9fce2a7a74be98fca42f.js.map