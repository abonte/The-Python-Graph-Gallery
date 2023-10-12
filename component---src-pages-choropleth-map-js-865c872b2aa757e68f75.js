"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[5281],{8742:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(7294),n=a(4051),o=a(1555),r=a(818),c=a(8447),i=a(5584);const m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function s(e){let{chartFamily:t}=e;const a=c.c.filter((e=>e.family===t)).map(((e,t)=>{const a=(0,i.y)(e.pythonURL);return l.createElement(o.Z,{key:t,xs:4,md:2,className:"col-1-7"},l.createElement(r.Z,{link:a,chartType:e.logo,caption:e.label}))}));return l.createElement("div",{style:{paddingBottom:15}},l.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==m?void 0:m[t]),l.createElement(n.Z,null,a))}},7128:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(7294),n=a(1883),o=a(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){let{imgName:t,caption:a}=e;if(r.includes(t))return l.createElement("p",null,"TODO");const c=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return c?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(o.G,{image:c.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}},9389:function(e,t,a){a.d(t,{H:function(){return n}});var l=a(7294);const n=e=>{let{title:t,seoDescription:a,keywords:n}=e;return l.createElement(l.Fragment,null,l.createElement("title",null,t),l.createElement("html",{lang:"en"}),l.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),l.createElement("meta",{name:"author",content:"Yan Holtz"}),l.createElement("meta",{name:"keywords",content:n||"python, chart, graph, code, viz, dataviz"}),l.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),l.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),l.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement("meta",{property:"og:description",content:a}),l.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}))}},818:function(e,t,a){a.d(t,{Z:function(){return c}});var l=a(1883),n=a(7294),o=a(5128);const r=a(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function c(e){let{chartType:t,caption:a,link:c}=e;const i=r.includes(t);return n.createElement(n.Fragment,null,i?n.createElement("div",{className:"sectionLogoContainer"},n.createElement(l.Link,{to:c},n.createElement(o.Z,{chartType:t})),n.createElement("p",{className:"sectionLogoCaption"},a)):n.createElement(n.Fragment,null,n.createElement("div",{className:"sectionLogoContainer"},n.createElement(l.Link,{to:c},n.createElement(o.Z,{chartType:t}),n.createElement("div",{className:"sectionLogoOverlay"},n.createElement("div",{className:"sectionLogoOverlayText"},"+")))),n.createElement("p",{className:"sectionLogoCaption"},a)))}},429:function(e,t,a){a.d(t,{Z:function(){return s}});var l=a(7294),n=a(5005),o=a(1883),r=a(8447),c=a(5584),i=a(682),m=a(5128);function s(e){let{title:t,description:a,chartType:m}=e;const s=r.c.filter((e=>e.id===m))[0];return l.createElement(i.Z,null,l.createElement("div",{className:"titleAndDescription"},l.createElement("div",{className:"titleRow"},l.createElement("h1",null,t),m&&l.createElement(h,{chartType:m})),l.createElement("hr",{className:"smallHr"}),"string"==typeof a?l.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):l.createElement("div",{className:"description"},a),m&&l.createElement("div",{style:{marginTop:"10px"}},l.createElement(o.Link,{to:(0,c.y)(s.pythonURL)},l.createElement(n.Z,{size:"sm"},s.label+" section")),l.createElement("a",{href:s.dataToVizURL},l.createElement(n.Z,{size:"sm"},"About this chart")))),l.createElement("div",{className:"raptive-video-player",style:{minHeight:300}}))}const h=e=>{let{chartType:t}=e;const a=r.c.filter((e=>e.id===t))[0],n=(0,c.y)(a.pythonURL);return l.createElement("div",{style:{width:"80px",marginLeft:40}},l.createElement(o.Link,{to:n},l.createElement(m.Z,{chartType:a.logo})))}},5078:function(e,t,a){a.r(t),a.d(t,{Head:function(){return E},default:function(){return y}});var l=a(7294),n=a(429),o=a(2057),r=a(682),c=a(1190),i=a(8742),m=a(1883),s=a(7128),h=a(3921),p=a(5005),d=a(9389);const u="<p>A <a href='https://www.data-to-viz.com/graph/choropleth.html'>choropleth map</a> displays divided geographical areas or regions that are coloured in relation to a numeric variable. This section explains how to build static choropleth with <code>geopandas</code> and <code>geoplot</code>, and interactive versions with tools like <code>folium</code> and <code>plotly</code>.</p>",E=()=>l.createElement(d.H,{title:"Choropleth map",seoDescription:"A collection of choropleth map examples made with Python, coming with explanation and reproducible code"});function y(){return l.createElement(o.Z,{isTocEnabled:!0},l.createElement(n.Z,{title:"Choropleth map",description:u}),l.createElement(r.Z,null,l.createElement("h2",{id:"Geopandas & Geoplot"},"Choropleth map with ",l.createElement("code",null,"Geopandas")," and ",l.createElement("code",null,"GeoPlot")),l.createElement("p",null,l.createElement("code",null,"Geoplot")," is a python library for geospatial data visualization. It works pretty well with ",l.createElement("code",null,"geopandas"),", another library made to deal with geospatial data objects."),l.createElement("p",null,l.createElement("code",null,"Geoplot")," has a ",l.createElement("code",null,"choropleth()")," function that allows to build a choropleth map easily as shown in the example below."),l.createElement("div",{style:{margin:"0 auto",padding:0}},l.createElement(m.Link,{to:"/choropleth-map-geopandas-python"},l.createElement(s.Z,{imgName:"choropleth-map-geopandas-python",caption:"Choropleth map of US counties with Python, Geopandas and Geoplot"}))),l.createElement(m.Link,{to:"/choropleth-map-geopandas-python"},l.createElement(p.Z,{size:"xl"},"Read post"))),l.createElement(h.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Folium"},l.createElement("code",null,"Folium")," for google maps style choropleth maps"),l.createElement("p",null,l.createElement("code",null,"Folium")," is a wrapper of the ",l.createElement("code",null,"Leaflet.js")," ","javascript library. It brings the power of javascript for data visualization, but still allows to do some data wrangling with Python. Building a choropleth with ",l.createElement("code",null,"Folium")," is quite straightforward thanks to the",l.createElement("code",null,"choropleth()")," function."),l.createElement("div",{className:"mx-auto"},l.createElement("iframe",{src:"/interactiveCharts/292-choropleth-map-with-folium.html",title:"Folium choropleth map",style:{border:"none",width:"800px",height:"430px"}})),l.createElement(m.Link,{to:"/292-choropleth-map-with-folium"},l.createElement(p.Z,{size:"sm"},"See code"))),l.createElement(h.Z,null),l.createElement(r.Z,null,l.createElement("h2",{id:"Plotly"},l.createElement("code",null,"Plotly")," for interactive choropleth maps"),l.createElement("p",null,l.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",l.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),l.createElement("div",{className:"mx-auto"},l.createElement("iframe",{src:"/interactiveCharts/choropleth-map-plotly-python.html",title:"parallel coordinate chart with plotly",style:{border:"none",width:"800px",height:"500px"}})),l.createElement(m.Link,{to:"/choropleth-map-plotly-python"},l.createElement(p.Z,{size:"sm"},"See code"))),l.createElement(h.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(r.Z,null,l.createElement(i.Z,{chartFamily:"map"}))),l.createElement(h.Z,null),l.createElement(r.Z,null,l.createElement(c.Z,null)),l.createElement(h.Z,null))}},1555:function(e,t,a){var l=a(4184),n=a.n(l),o=a(7294),r=a(6792),c=a(5893);const i=o.forwardRef(((e,t)=>{const[{className:a,...l},{as:o="div",bsPrefix:i,spans:m}]=function({as:e,bsPrefix:t,className:a,...l}){t=(0,r.vE)(t,"col");const o=(0,r.pi)(),c=(0,r.zG)(),i=[],m=[];return o.forEach((e=>{const a=l[e];let n,o,r;delete l[e],"object"==typeof a&&null!=a?({span:n,offset:o,order:r}=a):n=a;const s=e!==c?`-${e}`:"";n&&i.push(!0===n?`${t}${s}`:`${t}${s}-${n}`),null!=r&&m.push(`order${s}-${r}`),null!=o&&m.push(`offset${s}-${o}`)})),[{...l,className:n()(a,...i,...m)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,c.jsx)(o,{...l,ref:t,className:n()(a,!m.length&&i)})}));i.displayName="Col",t.Z=i},4051:function(e,t,a){var l=a(4184),n=a.n(l),o=a(7294),r=a(6792),c=a(5893);const i=o.forwardRef((({bsPrefix:e,className:t,as:a="div",...l},o)=>{const i=(0,r.vE)(e,"row"),m=(0,r.pi)(),s=(0,r.zG)(),h=`${i}-cols`,p=[];return m.forEach((e=>{const t=l[e];let a;delete l[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const n=e!==s?`-${e}`:"";null!=a&&p.push(`${h}${n}-${a}`)})),(0,c.jsx)(a,{ref:o,...l,className:n()(t,i,...p)})}));i.displayName="Row",t.Z=i}}]);
//# sourceMappingURL=component---src-pages-choropleth-map-js-865c872b2aa757e68f75.js.map