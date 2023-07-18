"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[6039],{8742:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(4051),r=a(1555),c=a(818),o=a(8447),s=a(5584);const i={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function m(e){let{chartFamily:t}=e;const a=o.c.filter((e=>e.family===t)).map(((e,t)=>{const a=(0,s.y)(e.pythonURL);return n.createElement(r.Z,{key:t,xs:4,md:2,className:"g-3"},n.createElement(c.Z,{link:a,chartType:e.logo,caption:e.label}))}));return n.createElement("div",{style:{paddingBottom:15}},n.createElement("h2",{id:"Related charts",className:"sectionTitle "+t},null==i?void 0:i[t]),n.createElement(l.Z,null,a))}},7128:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(1883),r=a(8032);const c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:a}=e;if(c.includes(t))return n.createElement("p",null,"TODO");const o=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(r.G,{image:o.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},818:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(1883),l=a(7294),r=a(5128);const c=a(8447).c.filter((e=>"general"===e.family)).map((e=>e.logo));function o(e){let{chartType:t,caption:a,link:o}=e;const s=c.includes(t);return l.createElement(l.Fragment,null,s?l.createElement("div",{className:"sectionLogoContainer"},l.createElement(n.Link,{to:o},l.createElement(r.Z,{chartType:t})),l.createElement("p",{className:"sectionLogoCaption"},a)):l.createElement(l.Fragment,null,l.createElement("div",{className:"sectionLogoContainer"},l.createElement(n.Link,{to:o},l.createElement(r.Z,{chartType:t}),l.createElement("div",{className:"sectionLogoOverlay"},l.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.createElement("p",{className:"sectionLogoCaption"},a)))}},429:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),l=a(5005),r=a(1883),c=a(8447),o=a(5584),s=a(682),i=a(5128);function m(e){let{title:t,description:a,chartType:i}=e;const m=c.c.filter((e=>e.id===i))[0];return n.createElement(s.Z,null,n.createElement("div",{className:"titleAndDescription"},n.createElement("div",{className:"titleRow"},n.createElement("h1",null,t),i&&n.createElement(h,{chartType:i})),n.createElement("hr",{className:"smallHr"}),"string"==typeof a?n.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):n.createElement("div",{className:"description"},a),i&&n.createElement("div",{style:{marginTop:"10px"}},n.createElement(r.Link,{to:(0,o.y)(m.pythonURL)},n.createElement(l.Z,{size:"sm"},m.label+" section")),n.createElement("a",{href:m.dataToVizURL},n.createElement(l.Z,{size:"sm"},"About this chart")))))}const h=e=>{let{chartType:t}=e;const a=c.c.filter((e=>e.id===t))[0],l=(0,o.y)(a.pythonURL);return n.createElement("div",{style:{width:"80px",marginLeft:40}},n.createElement(r.Link,{to:l},n.createElement(i.Z,{chartType:a.logo})))}},1406:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var n=a(7294),l=a(429),r=a(1433),c=a(682),o=a(8728),s=a(8742),i=a(3921),m=a(7128),h=a(4125),p=a(1883),d=a(4051),u=a(1555);const E="<p>This section provides a few cheat sheets related with <code>python</code>, data wrangling and data visualization. Even with a perfect understanding of <code>python</code> and its libraries, it's almost impossible to remember the syntax of each function of the ecosystem. That's where cheatsheets are useful 🔥!</p>";function f(){return n.createElement(r.Z,{title:"Cheat sheets",isTocEnabled:!0,seoDescription:"A collection of cheat sheets related with Python and data visualization"},n.createElement(l.Z,{title:"Cheat Sheets",description:E}),n.createElement(i.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(h.rS,null),"Matplotlib cheatsheet"),n.createElement("p",null,n.createElement("a",{href:"https://datacamp.pxf.io/YgNDbR",title:"Datacamp",target:"_blank",rel:"noreferrer"},"Datacamp")," provides a cheatsheet describing the basics of ",n.createElement("code",null,"matplotlib"),". Matplotlib is the most widely used library for datavisualization with python. You can read more about it on its ",n.createElement(p.Link,{href:"/matplotlib"},"dedicated page"),"."),n.createElement(d.Z,null,n.createElement(u.Z,{xs:12,md:12},n.createElement("a",{href:"https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Matplotlib_Cheat_Sheet.pdf"},n.createElement(m.Z,{imgName:"matplotlib_cheat_sheet",caption:"Matplotlib cheatsheet by Datacamp."})))),n.createElement("br",null),n.createElement("br",null),n.createElement("p",null,"The following 2 cheatsheets from the ",n.createElement("a",{href:"https://github.com/matplotlib/cheatsheets"},"official matplotlib repository")," are also very handy:"),n.createElement(d.Z,null,n.createElement(u.Z,{xs:12,md:12},n.createElement(m.Z,{imgName:"matplotlib-python-official-cheatsheet1",caption:"Matplotlib cheatsheet by matplotlib (page 1)."})),n.createElement(u.Z,{xs:12,md:12},n.createElement(m.Z,{imgName:"matplotlib-python-official-cheatsheet2",caption:"Matplotlib cheatsheet by matplotlib (page 2)."})))),n.createElement(i.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Seaborn"},n.createElement(h._I,null),"Seaborn cheatsheet"),n.createElement("p",null,n.createElement("a",{href:"https://datacamp.pxf.io/YgNDbR",title:"Datacamp",target:"_blank",rel:"noreferrer"},"Datacamp")," provides a cheatsheet describing the basics of ",n.createElement("code",null,"seaborn"),". Seaborn is also a widely used library for datavisualization with python. It allows to get very clean chart with less code. You can read more about it on its ",n.createElement(p.Link,{href:"/seaborn"},"dedicated page"),"."),n.createElement(d.Z,null,n.createElement(u.Z,{xs:12,md:12},n.createElement("a",{href:"https://s3.amazonaws.com/assets.datacamp.com/blog_assets/Python_Seaborn_Cheat_Sheet.pdf"},n.createElement(m.Z,{imgName:"seaborn_cheat_sheet",caption:"Seaborn cheatsheet by Datacamp."}))))),n.createElement(i.Z,null),n.createElement(c.Z,null,n.createElement("h2",{id:"Pandas"},n.createElement(h.JK,null),"Pandas cheatsheet"),n.createElement("p",null,n.createElement("a",{href:"https://datacamp.pxf.io/YgNDbR",title:"Datacamp",target:"_blank",rel:"noreferrer"},"Datacamp")," provides a cheatsheet describing the basics of ",n.createElement("code",null,"pandas"),". Pandas is mainly used for data manipulation with Python, but also offers some dataviz helpers."),n.createElement(d.Z,null,n.createElement(u.Z,{xs:12,md:12},n.createElement("a",{href:"http://datacamp-community-prod.s3.amazonaws.com/dbed353d-2757-4617-8206-8767ab379ab3"},n.createElement(m.Z,{imgName:"pandas_cheat_sheet",caption:"Pandas cheatsheet by Datacamp."}))))),n.createElement(i.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(c.Z,null,n.createElement(s.Z,{chartFamily:"general"}))),n.createElement(i.Z,null),n.createElement(c.Z,null,n.createElement(o.Z,null)),n.createElement(i.Z,null))}},1555:function(e,t,a){var n=a(4184),l=a.n(n),r=a(7294),c=a(6792),o=a(5893);const s=r.forwardRef(((e,t)=>{const[{className:a,...n},{as:r="div",bsPrefix:s,spans:i}]=function({as:e,bsPrefix:t,className:a,...n}){t=(0,c.vE)(t,"col");const r=(0,c.pi)(),o=(0,c.zG)(),s=[],i=[];return r.forEach((e=>{const a=n[e];let l,r,c;delete n[e],"object"==typeof a&&null!=a?({span:l,offset:r,order:c}=a):l=a;const m=e!==o?`-${e}`:"";l&&s.push(!0===l?`${t}${m}`:`${t}${m}-${l}`),null!=c&&i.push(`order${m}-${c}`),null!=r&&i.push(`offset${m}-${r}`)})),[{...n,className:l()(a,...s,...i)},{as:e,bsPrefix:t,spans:s}]}(e);return(0,o.jsx)(r,{...n,ref:t,className:l()(a,!i.length&&s)})}));s.displayName="Col",t.Z=s},4051:function(e,t,a){var n=a(4184),l=a.n(n),r=a(7294),c=a(6792),o=a(5893);const s=r.forwardRef((({bsPrefix:e,className:t,as:a="div",...n},r)=>{const s=(0,c.vE)(e,"row"),i=(0,c.pi)(),m=(0,c.zG)(),h=`${s}-cols`,p=[];return i.forEach((e=>{const t=n[e];let a;delete n[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const l=e!==m?`-${e}`:"";null!=a&&p.push(`${h}${l}-${a}`)})),(0,o.jsx)(a,{ref:r,...n,className:l()(t,s,...p)})}));s.displayName="Row",t.Z=s}}]);
//# sourceMappingURL=component---src-pages-cheat-sheets-js-0801434d42626f95d20c.js.map