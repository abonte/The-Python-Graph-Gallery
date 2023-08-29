"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[2325],{8742:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(4051),r=n(1555),o=n(818),i=n(8447),c=n(5584);const m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function s(e){let{chartFamily:t}=e;const n=i.c.filter((e=>e.family===t)).map(((e,t)=>{const n=(0,c.y)(e.pythonURL);return a.createElement(r.Z,{key:t,xs:4,md:2,className:"col-1-7"},a.createElement(o.Z,{link:n,chartType:e.logo,caption:e.label}))}));return a.createElement("div",{style:{paddingBottom:15}},a.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==m?void 0:m[t]),a.createElement(l.Z,null,n))}},7128:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(1883),r=n(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function i(e){let{imgName:t,caption:n}=e;if(o.includes(t))return a.createElement("p",null,"TODO");const i=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return i?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(r.G,{image:i.node.childImageSharp.gatsbyImageData,alt:n,className:"chartImageImg"}),n&&a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,n))))):null}},4596:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(7294),l=n(7128),r=n(1555),o=n(1883);function i(e){let{imgName:t,caption:n,linkTo:i}=e;return a.createElement(r.Z,{xs:12,md:4},a.createElement(o.Link,{to:i},a.createElement(l.Z,{imgName:t,caption:n})))}},9389:function(e,t,n){n.d(t,{H:function(){return o}});var a=n(7294),l=n(1883);function r(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const o=e=>{let{title:t,seoDescription:n,keywords:o}=e;return a.createElement(a.Fragment,null,a.createElement("title",null,t),a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),a.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),a.createElement("meta",{name:"description",content:n||"How to build a chart with Python"}),a.createElement("meta",{name:"author",content:"Yan Holtz"}),a.createElement("meta",{name:"keywords",content:o||"python, chart, graph, code, viz, dataviz"}),a.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),a.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),a.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),a.createElement("meta",{property:"og:description",content:n}),a.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),a.createElement(l.Script,{id:"adthrive",strategy:"idle",src:r()}))}},818:function(e,t,n){n.d(t,{Z:function(){return i}});var a=n(1883),l=n(7294),r=n(5128);const o=n(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function i(e){let{chartType:t,caption:n,link:i}=e;const c=o.includes(t);return l.createElement(l.Fragment,null,c?l.createElement("div",{className:"sectionLogoContainer"},l.createElement(a.Link,{to:i},l.createElement(r.Z,{chartType:t})),l.createElement("p",{className:"sectionLogoCaption"},n)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(a.Link,{to:i},l.createElement(r.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"sectionLogoCaption"},n)))}},429:function(e,t,n){n.d(t,{Z:function(){return s}});var a=n(7294),l=n(5005),r=n(1883),o=n(8447),i=n(5584),c=n(682),m=n(5128);function s(e){let{title:t,description:n,chartType:m}=e;const s=o.c.filter((e=>e.id===m))[0];return a.createElement(c.Z,null,a.createElement("div",{className:"titleAndDescription"},a.createElement("div",{className:"titleRow"},a.createElement("h1",null,t),m&&a.createElement(h,{chartType:m})),a.createElement("hr",{className:"smallHr"}),"string"==typeof n?a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:n}}):a.createElement("div",{className:"description"},n),m&&a.createElement("div",{style:{marginTop:"10px"}},a.createElement(r.Link,{to:(0,i.y)(s.pythonURL)},a.createElement(l.Z,{size:"sm"},s.label+" section")),a.createElement("a",{href:s.dataToVizURL},a.createElement(l.Z,{size:"sm"},"About this chart")))))}const h=e=>{let{chartType:t}=e;const n=o.c.filter((e=>e.id===t))[0],l=(0,i.y)(n.pythonURL);return a.createElement("div",{style:{width:"80px",marginLeft:40}},a.createElement(r.Link,{to:l},a.createElement(m.Z,{chartType:n.logo})))}},85:function(e,t,n){n.r(t),n.d(t,{Head:function(){return E},default:function(){return g}});var a=n(7294),l=n(429),r=n(1433),o=n(682),i=n(8728),c=n(4051),m=n(4596),s=n(8742),h=n(1883),p=n(7128),d=n(3921),u=n(9389);const f="<p>A <a href='https://www.data-to-viz.com/graph/hexbinmap.html'>hexbin map</a> is a specific type of map where each region is represented as a hexagone. This section explains how to build a hexbin map with python and libraries like <code>geopandas</code> and <code>geoplot</code>.</p>",E=()=>a.createElement(u.H,{title:"Hexbin Map",seoDescription:"A collection of hexbin map examples made with Python, coming with explanation and reproducible code"});function g(){return a.createElement(r.Z,{isTocEnabled:!0},a.createElement(l.Z,{title:"Hexbin Map",description:f}),a.createElement(d.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(o.Z,null,a.createElement("h2",{id:"Overview"},"🔎 2 kinds of hexbin maps ⭐ "),a.createElement("p",null,"There are 2 different kinds of hexbin maps as explained in"," ",a.createElement("a",{href:"https://www.data-to-viz.com/graph/hexbinmap.html"},"data-to-viz.com"),":"),a.createElement("ul",null,a.createElement("li",null,"from a ",a.createElement("u",null,"hexagonal geospatial object"),". Example: you find a `geoJson` file of US counties where each county is represented as a hexagon instead of with its real shape."),a.createElement("br",null),a.createElement("li",null,"from a ",a.createElement("u",null,"2d density")," technique. A set of coordinates is provided. The map is split in many hexagones and the number of data points is represented as a color in each hexagone.")))),a.createElement(d.Z,null),a.createElement(o.Z,null,a.createElement("h2",{id:"From geospatial"},"Hexbin map from geospatial object"),a.createElement("p",null,a.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",a.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),a.createElement(c.Z,null,a.createElement(m.Z,{imgName:"hexbin-map-from-geojson-python-1",caption:"Most basic hexbin map from geoJson with python.",linkTo:"/hexbin-map-from-geojson-python"}),a.createElement(m.Z,{imgName:"hexbin-map-from-geojson-python-2",caption:"Compute polygon centroid to add labels.",linkTo:"/hexbin-map-from-geojson-python"})),a.createElement("br",null),a.createElement("br",null),a.createElement("p",null,"This is what you get with a bit of ",a.createElement("code",null,"matplotlib")," tweaking:"),a.createElement("div",{style:{margin:"0 auto",padding:0}},a.createElement(h.Link,{to:"/hexbin-map-from-geojson-python"},a.createElement(p.Z,{imgName:"hexbin-map-from-geojson-python-orig",caption:"Clean hexbin map with python, geopandas and matplotlib"})))),a.createElement(d.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(o.Z,null,a.createElement(s.Z,{chartFamily:"map"}))),a.createElement(d.Z,null),a.createElement(o.Z,null,a.createElement(i.Z,null)),a.createElement(d.Z,null))}},1555:function(e,t,n){var a=n(4184),l=n.n(a),r=n(7294),o=n(6792),i=n(5893);const c=r.forwardRef(((e,t)=>{const[{className:n,...a},{as:r="div",bsPrefix:c,spans:m}]=function({as:e,bsPrefix:t,className:n,...a}){t=(0,o.vE)(t,"col");const r=(0,o.pi)(),i=(0,o.zG)(),c=[],m=[];return r.forEach((e=>{const n=a[e];let l,r,o;delete a[e],"object"==typeof n&&null!=n?({span:l,offset:r,order:o}=n):l=n;const s=e!==i?`-${e}`:"";l&&c.push(!0===l?`${t}${s}`:`${t}${s}-${l}`),null!=o&&m.push(`order${s}-${o}`),null!=r&&m.push(`offset${s}-${r}`)})),[{...a,className:l()(n,...c,...m)},{as:e,bsPrefix:t,spans:c}]}(e);return(0,i.jsx)(r,{...a,ref:t,className:l()(n,!m.length&&c)})}));c.displayName="Col",t.Z=c},4051:function(e,t,n){var a=n(4184),l=n.n(a),r=n(7294),o=n(6792),i=n(5893);const c=r.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},r)=>{const c=(0,o.vE)(e,"row"),m=(0,o.pi)(),s=(0,o.zG)(),h=`${c}-cols`,p=[];return m.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const l=e!==s?`-${e}`:"";null!=n&&p.push(`${h}${l}-${n}`)})),(0,i.jsx)(n,{ref:r,...a,className:l()(t,c,...p)})}));c.displayName="Row",t.Z=c}}]);
//# sourceMappingURL=component---src-pages-hexbin-map-js-f655a61d96e8a1b85c0a.js.map