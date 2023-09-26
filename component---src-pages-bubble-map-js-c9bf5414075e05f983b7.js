"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[436],{8742:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(4051),r=a(1555),o=a(818),c=a(8447),i=a(5584);const m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function s(e){let{chartFamily:t}=e;const a=c.c.filter((e=>e.family===t)).map(((e,t)=>{const a=(0,i.y)(e.pythonURL);return n.createElement(r.Z,{key:t,xs:4,md:2,className:"col-1-7"},n.createElement(o.Z,{link:a,chartType:e.logo,caption:e.label}))}));return n.createElement("div",{style:{paddingBottom:15}},n.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==m?void 0:m[t]),n.createElement(l.Z,null,a))}},7128:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(1883),r=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function c(e){let{imgName:t,caption:a}=e;if(o.includes(t))return n.createElement("p",null,"TODO");const c=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return c?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:c.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),l=a(7128),r=a(1555),o=a(1883);function c(e){let{imgName:t,caption:a,linkTo:c}=e;return n.createElement(r.Z,{xs:12,md:4},n.createElement(o.Link,{to:c},n.createElement(l.Z,{imgName:t,caption:a})))}},9389:function(e,t,a){a.d(t,{H:function(){return l}});var n=a(7294);const l=e=>{let{title:t,seoDescription:a,keywords:l}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("html",{lang:"en"}),n.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),n.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:l||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}))}},818:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(1883),l=a(7294),r=a(5128);const o=a(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function c(e){let{chartType:t,caption:a,link:c}=e;const i=o.includes(t);return l.createElement(l.Fragment,null,i?l.createElement("div",{className:"sectionLogoContainer"},l.createElement(n.Link,{to:c},l.createElement(r.Z,{chartType:t})),l.createElement("p",{className:"sectionLogoCaption"},a)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(n.Link,{to:c},l.createElement(r.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"sectionLogoCaption"},a)))}},429:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),l=a(5005),r=a(1883),o=a(8447),c=a(5584),i=a(682),m=a(5128);function s(e){let{title:t,description:a,chartType:m}=e;const s=o.c.filter((e=>e.id===m))[0];return n.createElement(i.Z,null,n.createElement("div",{className:"titleAndDescription"},n.createElement("div",{className:"titleRow"},n.createElement("h1",null,t),m&&n.createElement(u,{chartType:m})),n.createElement("hr",{className:"smallHr"}),"string"==typeof a?n.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):n.createElement("div",{className:"description"},a),m&&n.createElement("div",{style:{marginTop:"10px"}},n.createElement(r.Link,{to:(0,c.y)(s.pythonURL)},n.createElement(l.Z,{size:"sm"},s.label+" section")),n.createElement("a",{href:s.dataToVizURL},n.createElement(l.Z,{size:"sm"},"About this chart")))))}const u=e=>{let{chartType:t}=e;const a=o.c.filter((e=>e.id===t))[0],l=(0,c.y)(a.pythonURL);return n.createElement("div",{style:{width:"80px",marginLeft:40}},n.createElement(r.Link,{to:l},n.createElement(m.Z,{chartType:a.logo})))}},433:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return y}});var n=a(7294),l=a(429),r=a(2057),o=a(682),c=a(1190),i=a(4051),m=a(4596),s=a(8742),u=a(1883),p=a(7128),d=a(3921),h=a(5005),E=a(9389);const f="<p>A <a href='https://www.data-to-viz.com/graph/bubblemap.html'>bubble map</a> uses circles of different size to represent a numeric value on a territory. It displays one bubble per geographic coordinate, or one bubble per region. As for <a href='https://python-graph-gallery.com/map/'>background maps</a>, several python libraries are useful to build them: <code>folium</code>, <code>geopandas</code>, <code>geoplot</code> and <code>basemap</code> are listed here.</p>",g=()=>n.createElement(E.H,{title:"Bubble Map",seoDescription:"A collection of bubble map examples made with Python, coming with explanation and reproducible code"});function y(){return n.createElement(r.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Bubble Map",description:f}),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement("h2",{id:"Overview"},"🔎 Building maps with Python"),n.createElement("p",null,"If you're new to geospatial analysis with python, I strongly advise to check the ",n.createElement(u.Link,{to:"/map"},"background map section")," of the gallery. It gives a great overview of the available tools, and help you pick the right one."),n.createElement(u.Link,{to:"/map"},n.createElement(h.Z,{size:"sm"},"Background Map Section")),n.createElement("br",null),n.createElement("br",null))),n.createElement(d.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Geopandas & Geoplot"},n.createElement("code",null,"Geopandas")," and ",n.createElement("code",null,"GeoPlot")),n.createElement("p",null,n.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",n.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),n.createElement(i.Z,null,n.createElement(m.Z,{imgName:"map-read-geojson-with-python-geopandas",caption:"How to read a geoJson file with geopandas and transform it to a geodataframe.",linkTo:"/map-read-geojson-with-python-geopandas"}))),n.createElement(d.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Folium"},"Bubble map with ",n.createElement("code",null,"Folium")),n.createElement("p",null,n.createElement("code",null,"Folium")," is a wrapper of the ",n.createElement("code",null,"leaflet.js")," ","javascript library. Once you understood how to"," ",n.createElement(u.Link,{to:"/map"},"initialize")," an interactive map with it, you can parse a data frame of coordinates and add markers to the map with functions like ",n.createElement("code",null,"Circle()")," and ",n.createElement("code",null,"..()")),n.createElement("div",{className:"mx-auto"},n.createElement("iframe",{src:"/interactiveCharts/313-bubble-map-with-folium.html",title:"Basic map with folium",style:{border:"none",width:"800px",height:"300px"}})),n.createElement(u.Link,{to:"/313-bubble-map-with-folium"},n.createElement(h.Z,{size:"sm"},"See code")),n.createElement("br",null),n.createElement("br",null),n.createElement("p",null,"It is also possible to add any other kind of markers instead of circles. This is what you get with the default"," ",n.createElement("code",null,"folium.Marker()")," function:"),n.createElement("div",{className:"mx-auto"},n.createElement("iframe",{src:"/interactiveCharts/312-add-markers-on-folium-map.html",title:"Folium and markers",style:{border:"none",width:"800px",height:"300px"}})),n.createElement(u.Link,{to:"/312-add-markers-on-folium-map"},n.createElement(h.Z,{size:"sm"},"See code")),n.createElement("br",null),n.createElement("br",null),n.createElement("p",null,"And this is what you can build by passing some ",n.createElement("code",null,"html")," to the marker and popup parameters:"),n.createElement(i.Z,null,n.createElement(m.Z,{imgName:"312-add-markers-on-folium-map1",caption:"How to read a geoJson file with geopandas and transform it to a geodataframe.",linkTo:"/312-add-markers-on-folium-map"}),n.createElement(m.Z,{imgName:"312-add-markers-on-folium-map2",caption:"How to read a geoJson file with geopandas and transform it to a geodataframe.",linkTo:"/312-add-markers-on-folium-map"}))),n.createElement(d.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Basemap"},"Bubble map with ",n.createElement("code",null,"Basemap")),n.createElement("p",null,n.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",n.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),n.createElement("div",{style:{margin:"0 auto"}},n.createElement(u.Link,{to:"/315-a-world-map-of-surf-tweets"},n.createElement(p.Z,{imgName:"315_Tweet_Surf_Bubble_map1",caption:"Bubble map with Python and the basemap library"})))),n.createElement(d.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement(s.Z,{chartFamily:"map"}))),n.createElement(d.Z,null),n.createElement(o.Z,null,n.createElement(c.Z,null)),n.createElement(d.Z,null))}},1555:function(e,t,a){var n=a(4184),l=a.n(n),r=a(7294),o=a(6792),c=a(5893);const i=r.forwardRef(((e,t)=>{const[{className:a,...n},{as:r="div",bsPrefix:i,spans:m}]=function({as:e,bsPrefix:t,className:a,...n}){t=(0,o.vE)(t,"col");const r=(0,o.pi)(),c=(0,o.zG)(),i=[],m=[];return r.forEach((e=>{const a=n[e];let l,r,o;delete n[e],"object"==typeof a&&null!=a?({span:l,offset:r,order:o}=a):l=a;const s=e!==c?`-${e}`:"";l&&i.push(!0===l?`${t}${s}`:`${t}${s}-${l}`),null!=o&&m.push(`order${s}-${o}`),null!=r&&m.push(`offset${s}-${r}`)})),[{...n,className:l()(a,...i,...m)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,c.jsx)(r,{...n,ref:t,className:l()(a,!m.length&&i)})}));i.displayName="Col",t.Z=i},4051:function(e,t,a){var n=a(4184),l=a.n(n),r=a(7294),o=a(6792),c=a(5893);const i=r.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},r)=>{const i=(0,o.vE)(e,"row"),m=(0,o.pi)(),s=(0,o.zG)(),u=`${i}-cols`,p=[];return m.forEach((e=>{const t=n[e];let a;delete n[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const l=e!==s?`-${e}`:"";null!=a&&p.push(`${u}${l}-${a}`)})),(0,c.jsx)(a,{ref:r,...n,className:l()(t,i,...p)})}));i.displayName="Row",t.Z=i}}]);
//# sourceMappingURL=component---src-pages-bubble-map-js-c9bf5414075e05f983b7.js.map