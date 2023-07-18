"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[6077],{8742:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(4051),r=a(1555),c=a(818),o=a(8447),i=a(5584);const s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const a=o.c.filter((e=>e.family===t)).map(((e,t)=>{const a=(0,i.y)(e.pythonURL);return n.createElement(r.Z,{key:t,xs:4,md:2,className:"g-3"},n.createElement(c.Z,{link:a,chartType:e.logo,caption:e.label}))}));return n.createElement("div",{style:{paddingBottom:15}},n.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),n.createElement(l.Z,null,a))}},7128:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(1883),r=a(8032);const c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:a}=e;if(c.includes(t))return n.createElement("p",null,"TODO");const o=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:o.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},818:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(1883),l=a(7294),r=a(5128);const c=a(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function o(e){let{chartType:t,caption:a,link:o}=e;const i=c.includes(t);return l.createElement(l.Fragment,null,i?l.createElement("div",{className:"sectionLogoContainer"},l.createElement(n.Link,{to:o},l.createElement(r.Z,{chartType:t})),l.createElement("p",{className:"sectionLogoCaption"},a)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(n.Link,{to:o},l.createElement(r.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"sectionLogoCaption"},a)))}},429:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(5005),r=a(1883),c=a(8447),o=a(5584),i=a(682),s=a(5128);function m(e){let{title:t,description:a,chartType:s}=e;const m=c.c.filter((e=>e.id===s))[0];return n.createElement(i.Z,null,n.createElement("div",{className:"titleAndDescription"},n.createElement("div",{className:"titleRow"},n.createElement("h1",null,t),s&&n.createElement(d,{chartType:s})),n.createElement("hr",{className:"smallHr"}),"string"==typeof a?n.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):n.createElement("div",{className:"description"},a),s&&n.createElement("div",{style:{marginTop:"10px"}},n.createElement(r.Link,{to:(0,o.y)(m.pythonURL)},n.createElement(l.Z,{size:"sm"},m.label+" section")),n.createElement("a",{href:m.dataToVizURL},n.createElement(l.Z,{size:"sm"},"About this chart")))))}const d=e=>{let{chartType:t}=e;const a=c.c.filter((e=>e.id===t))[0],l=(0,o.y)(a.pythonURL);return n.createElement("div",{style:{width:"80px",marginLeft:40}},n.createElement(r.Link,{to:l},n.createElement(s.Z,{chartType:a.logo})))}},1161:function(e,t,a){a.r(t),a.d(t,{default:function(){return h}});var n=a(7294),l=a(429),r=a(1433),c=a(682),o=a(8728),i=a(8742),s=a(1883),m=a(7128),d=a(3921),p=a(5005);const u="<p>A <a href='https://www.data-to-viz.com/graph/cartogram.html'>cartogram</a> is a map in which each region size is distorded according to a numeric variable. Python allows to draw this kind of map thanks to the <code>Geopandas</code> and <code>Geoplot</code> libraries</p>";function h(){return n.createElement(r.Z,{title:"Cartogram",isTocEnabled:!0,seoDescription:"A collection of cartogram examples made with Python, coming with explanation and reproducible code"},n.createElement(l.Z,{title:"Cartogram",description:u}),n.createElement(c.Z,null,n.createElement("h2",{id:"Geoplot"},"Cartogram with ",n.createElement("code",null,"GeoPlot")),n.createElement("p",null,"Oh no 😞, there is no example in this section yet 😞."),n.createElement("div",{style:{margin:"0 auto",padding:0}},n.createElement(s.Link,{to:"/choropleth-map-geopandas-python"},n.createElement(m.Z,{imgName:"choropleth-map-geopandas-python",caption:"Choropleth map of US counties with Python, Geopandas and Geoplot"}))),n.createElement(s.Link,{to:"/choropleth-map-geopandas-python"},n.createElement(p.Z,{size:"xl"},"Read post"))),n.createElement(d.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(c.Z,null,n.createElement(i.Z,{chartFamily:"map"}))),n.createElement(d.Z,null),n.createElement(c.Z,null,n.createElement(o.Z,null)),n.createElement(d.Z,null))}},1555:function(e,t,a){var n=a(4184),l=a.n(n),r=a(7294),c=a(6792),o=a(5893);const i=r.forwardRef(((e,t)=>{const[{className:a,...n},{as:r="div",bsPrefix:i,spans:s}]=function({as:e,bsPrefix:t,className:a,...n}){t=(0,c.vE)(t,"col");const r=(0,c.pi)(),o=(0,c.zG)(),i=[],s=[];return r.forEach((e=>{const a=n[e];let l,r,c;delete n[e],"object"==typeof a&&null!=a?({span:l,offset:r,order:c}=a):l=a;const m=e!==o?`-${e}`:"";l&&i.push(!0===l?`${t}${m}`:`${t}${m}-${l}`),null!=c&&s.push(`order${m}-${c}`),null!=r&&s.push(`offset${m}-${r}`)})),[{...n,className:l()(a,...i,...s)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,o.jsx)(r,{...n,ref:t,className:l()(a,!s.length&&i)})}));i.displayName="Col",t.Z=i},4051:function(e,t,a){var n=a(4184),l=a.n(n),r=a(7294),c=a(6792),o=a(5893);const i=r.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},r)=>{const i=(0,c.vE)(e,"row"),s=(0,c.pi)(),m=(0,c.zG)(),d=`${i}-cols`,p=[];return s.forEach((e=>{const t=n[e];let a;delete n[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const l=e!==m?`-${e}`:"";null!=a&&p.push(`${d}${l}-${a}`)})),(0,o.jsx)(a,{ref:r,...n,className:l()(t,i,...p)})}));i.displayName="Row",t.Z=i}}]);
//# sourceMappingURL=component---src-pages-cartogram-js-472e5879aec277c4c881.js.map