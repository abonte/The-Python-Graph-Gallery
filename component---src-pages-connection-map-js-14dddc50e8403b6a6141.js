"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[6882],{8742:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),l=n(4051),c=n(1555),r=n(818),o=n(8447),i=n(5584);const s={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const n=o.c.filter((e=>e.family===t)).map(((e,t)=>{const n=(0,i.y)(e.pythonURL);return a.createElement(c.Z,{key:t,xs:4,md:2,className:"g-3"},a.createElement(r.Z,{link:n,chartType:e.logo,caption:e.label}))}));return a.createElement("div",{style:{paddingBottom:15}},a.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==s?void 0:s[t]),a.createElement(l.Z,null,n))}},7128:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(1883),c=n(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:n}=e;if(r.includes(t))return a.createElement("p",null,"TODO");const o=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(c.G,{image:o.node.childImageSharp.gatsbyImageData,alt:n,className:"chartImageImg"}),a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,n))))):null}},4596:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(7128),c=n(1555),r=n(1883);function o(e){let{imgName:t,caption:n,linkTo:o}=e;return a.createElement(c.Z,{xs:12,md:4},a.createElement(r.Link,{to:o},a.createElement(l.Z,{imgName:t,caption:n})))}},818:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(1883),l=n(7294),c=n(5128);const r=n(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function o(e){let{chartType:t,caption:n,link:o}=e;const i=r.includes(t);return l.createElement(l.Fragment,null,i?l.createElement("div",{className:"sectionLogoContainer"},l.createElement(a.Link,{to:o},l.createElement(c.Z,{chartType:t})),l.createElement("p",{className:"sectionLogoCaption"},n)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(a.Link,{to:o},l.createElement(c.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"sectionLogoCaption"},n)))}},429:function(e,t,n){n.d(t,{Z:function(){return m}});var a=n(7294),l=n(5005),c=n(1883),r=n(8447),o=n(5584),i=n(682),s=n(5128);function m(e){let{title:t,description:n,chartType:s}=e;const m=r.c.filter((e=>e.id===s))[0];return a.createElement(i.Z,null,a.createElement("div",{className:"titleAndDescription"},a.createElement("div",{className:"titleRow"},a.createElement("h1",null,t),s&&a.createElement(u,{chartType:s})),a.createElement("hr",{className:"smallHr"}),"string"==typeof n?a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:n}}):a.createElement("div",{className:"description"},n),s&&a.createElement("div",{style:{marginTop:"10px"}},a.createElement(c.Link,{to:(0,o.y)(m.pythonURL)},a.createElement(l.Z,{size:"sm"},m.label+" section")),a.createElement("a",{href:m.dataToVizURL},a.createElement(l.Z,{size:"sm"},"About this chart")))))}const u=e=>{let{chartType:t}=e;const n=r.c.filter((e=>e.id===t))[0],l=(0,o.y)(n.pythonURL);return a.createElement("div",{style:{width:"80px",marginLeft:40}},a.createElement(c.Link,{to:l},a.createElement(s.Z,{chartType:n.logo})))}},7572:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}});var a=n(7294),l=n(429),c=n(1433),r=n(682),o=n(8728),i=n(4051),s=n(4596),m=n(8742),u=n(1883),d=n(7128),p=n(3921),h=n(5005);const E="<p>A <a href='https://www.data-to-viz.com/story/MapConnection.html'>connection map</a> allows to show the connection between several positions on a map. The link between 2 places can be drawn with a straight line, or more commonly using <code>great circles</code>: the shortest route between them. The earth beeing a sphere, it results in arcs that give a really pleasant look to the map.</p>";function f(){return a.createElement(c.Z,{title:"Connection Map",isTocEnabled:!0,seoDescription:"A collection of connection map examples made with Python, coming with explanation and reproducible code"},a.createElement(l.Z,{title:"Connection Map",description:E}),a.createElement(r.Z,null,a.createElement("h2",{id:"Basemap"},"Background map with ",a.createElement("code",null,"Basemap")),a.createElement("p",null,a.createElement("code",null,"Basemap")," is probably the best option to draw a connection map with ",a.createElement("code",null,"python"),". It provides a function called",a.createElement("code",null,"drawgreatcircle()")," that draws the connection using great circles. Great circles are arcs that gives a better appearance than straight lines."),a.createElement(i.Z,null,a.createElement(s.Z,{imgName:"300-draw-a-connection-line1",caption:"Most basic connection map with Python and Basemap.",linkTo:"/300-draw-a-connection-line"}),a.createElement(s.Z,{imgName:"300-draw-a-connection-line2",caption:"Show connection between a few cities with great circles.",linkTo:"/300-draw-a-connection-line"})),a.createElement("br",null),a.createElement("br",null),a.createElement("p",null,"This is the result when you visualize the connection between 7 major world cities:"),a.createElement("div",{style:{margin:"0 auto"}},a.createElement(u.Link,{to:"/300-draw-a-connection-line"},a.createElement(d.Z,{imgName:"300-draw-a-connection-line3",caption:"A connection map between 7 cities made with Python and Basemap"}))),a.createElement(u.Link,{to:"/300-draw-a-connection-line"},a.createElement(h.Z,{size:"sm"},"Code and explanation"))),a.createElement(p.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(r.Z,null,a.createElement(m.Z,{chartFamily:"map"}))),a.createElement(p.Z,null),a.createElement(r.Z,null,a.createElement(o.Z,null)),a.createElement(p.Z,null))}},1555:function(e,t,n){var a=n(4184),l=n.n(a),c=n(7294),r=n(6792),o=n(5893);const i=c.forwardRef(((e,t)=>{const[{className:n,...a},{as:c="div",bsPrefix:i,spans:s}]=function({as:e,bsPrefix:t,className:n,...a}){t=(0,r.vE)(t,"col");const c=(0,r.pi)(),o=(0,r.zG)(),i=[],s=[];return c.forEach((e=>{const n=a[e];let l,c,r;delete a[e],"object"==typeof n&&null!=n?({span:l,offset:c,order:r}=n):l=n;const m=e!==o?`-${e}`:"";l&&i.push(!0===l?`${t}${m}`:`${t}${m}-${l}`),null!=r&&s.push(`order${m}-${r}`),null!=c&&s.push(`offset${m}-${c}`)})),[{...a,className:l()(n,...i,...s)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,o.jsx)(c,{...a,ref:t,className:l()(n,!s.length&&i)})}));i.displayName="Col",t.Z=i},4051:function(e,t,n){var a=n(4184),l=n.n(a),c=n(7294),r=n(6792),o=n(5893);const i=c.forwardRef((({bsPrefix:e,className:t,as:n="div",...a},c)=>{const i=(0,r.vE)(e,"row"),s=(0,r.pi)(),m=(0,r.zG)(),u=`${i}-cols`,d=[];return s.forEach((e=>{const t=a[e];let n;delete a[e],null!=t&&"object"==typeof t?({cols:n}=t):n=t;const l=e!==m?`-${e}`:"";null!=n&&d.push(`${u}${l}-${n}`)})),(0,o.jsx)(n,{ref:c,...a,className:l()(t,i,...d)})}));i.displayName="Row",t.Z=i}}]);
//# sourceMappingURL=component---src-pages-connection-map-js-14dddc50e8403b6a6141.js.map