(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"2Bqf":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));t("AK/e");var n=t("Wbzz"),r=t("q1tI"),l=t.n(r),c=t("NDdm"),o=t("qXiB").a.filter((function(e){return"general"===e.family})).map((function(e){return e.logo}));function i(e){var a=e.chartType,t=e.caption,r=e.link,i=o.includes(a);return l.a.createElement(l.a.Fragment,null,i?l.a.createElement(l.a.Fragment,null,l.a.createElement(n.Link,{to:r},l.a.createElement(c.a,{chartType:a})),l.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"sectionLogoContainer"},l.a.createElement(n.Link,{to:r},l.a.createElement(c.a,{chartType:a}),l.a.createElement("div",{className:"sectionLogoOverlay"},l.a.createElement("div",{className:"sectionLogoOverlayText"},"+")))),l.a.createElement("p",{className:"distributionSection sectionLogoCaption"},t)))}},"2mCb":function(e,a,t){},"3Z9Z":function(e,a,t){"use strict";var n=t("k1TG"),r=t("8o2o"),l=t("TSYQ"),c=t.n(l),o=t("q1tI"),i=t.n(o),s=t("vUet"),m=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.noGutters,u=e.as,p=void 0===u?"div":u,d=Object(r.a)(e,["bsPrefix","className","noGutters","as"]),h=Object(s.a)(t,"row"),b=h+"-cols",f=[];return m.forEach((function(e){var a,t=d[e];delete d[e];var n="xs"!==e?"-"+e:"";null!=(a=null!=t&&"object"==typeof t?t.cols:t)&&f.push(""+b+n+"-"+a)})),i.a.createElement(p,Object(n.a)({ref:a},d,{className:c.a.apply(void 0,[l,h,o&&"no-gutters"].concat(f))}))}));u.displayName="Row",u.defaultProps={noGutters:!1},a.a=u},"4/Vk":function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));t("a4DA");var n=t("q1tI"),r=t.n(n),l=t("AkXV"),c=t("cWnB"),o=t("Wbzz"),i=t("qXiB"),s=t("jhdv");function m(e){var a=e.title,t=e.description,n=e.chartType,m=i.a.filter((function(e){return e.id===n}))[0];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"titleAndDescription"},r.a.createElement("h1",{className:"mainTitle"},a),r.a.createElement("hr",{className:"smallHr"}),r.a.createElement(l.a,null),r.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:t}}),n&&r.a.createElement("div",{style:{marginTop:"10px"}},r.a.createElement(o.Link,{to:Object(s.a)(m.pythonURL)},r.a.createElement(c.a,{size:"sm"},m.label+" section")),r.a.createElement("a",{href:m.dataToVizURL},r.a.createElement(c.a,{size:"sm"},"About this chart")))))}},"59G+":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),r=t.n(n),l=t("eynx"),c=t("JI6e"),o=t("Wbzz");function i(e){var a=e.imgName,t=e.caption,n=e.linkTo;return r.a.createElement(c.a,{xs:12,md:4},r.a.createElement(o.Link,{to:n},r.a.createElement(l.a,{imgName:a,caption:t})))}},"9d5C":function(e,a,t){},"AK/e":function(e,a,t){},JI6e:function(e,a,t){"use strict";var n=t("k1TG"),r=t("8o2o"),l=t("TSYQ"),c=t.n(l),o=t("q1tI"),i=t.n(o),s=t("vUet"),m=["xl","lg","md","sm","xs"],u=i.a.forwardRef((function(e,a){var t=e.bsPrefix,l=e.className,o=e.as,u=void 0===o?"div":o,p=Object(r.a)(e,["bsPrefix","className","as"]),d=Object(s.a)(t,"col"),h=[],b=[];return m.forEach((function(e){var a,t,n,r=p[e];if(delete p[e],"object"==typeof r&&null!=r){var l=r.span;a=void 0===l||l,t=r.offset,n=r.order}else a=r;var c="xs"!==e?"-"+e:"";a&&h.push(!0===a?""+d+c:""+d+c+"-"+a),null!=n&&b.push("order"+c+"-"+n),null!=t&&b.push("offset"+c+"-"+t)})),h.length||h.push(d),i.a.createElement(u,Object(n.a)({},p,{ref:a,className:c.a.apply(void 0,[l].concat(h,b))}))}));u.displayName="Col",a.a=u},a4DA:function(e,a,t){},eynx:function(e,a,t){"use strict";t.d(a,"a",(function(){return s}));t("2mCb");var n=t("q1tI"),r=t.n(n),l=t("Wbzz"),c=t("9eSz"),o=t.n(c),i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function s(e){var a=e.imgName,t=e.caption;if(i.includes(a))return r.a.createElement("p",null,"TODO");var n=Object(l.useStaticQuery)("3289484431").allFile.edges.find((function(e){return e.node.name.includes(a)}));return n?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"chartImageContainer"},r.a.createElement(o.a,{alt:t,fluid:n.node.childImageSharp.fluid,className:"chartImageImg"}),r.a.createElement("div",{className:"chartImageOverlay"},r.a.createElement("div",{className:"chartImageOverlayText"},r.a.createElement("p",null,t))))):null}},hwLn:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return E}));var n=t("q1tI"),r=t.n(n),l=t("4/Vk"),c=t("7oih"),o=t("7vrA"),i=t("6+GL"),s=t("3Z9Z"),m=t("59G+"),u=t("pJaR"),p=t("Hrqu"),d=t("gMBH"),h=t("Wbzz"),b=t("eynx"),f=t("JI6e");function E(){return r.a.createElement(c.a,{title:"Circular Barplot",isTocEnabled:!0,seoDescription:"A collection of circular barplot examples made with Python, coming with explanation and reproducible code"},r.a.createElement(l.a,{title:"Circular Barplot",description:"<p>A <a href='https://www.data-to-viz.com/graph/circularbarplot.html'>circular barplot</a> is pretty much the same as a <a href='https://www.python-graph-gallery.com/barplot'>barplot</a>, but using polar coordinates instead of cartesian coordinates. They are a bit tricky to build with <code>Python</code> and less accurate than usual barplot, but they come with an eye-catching effect that sometimes make them worth it.</p>"}),r.a.createElement(o.a,null,r.a.createElement("h2",{id:"Matplotlib"},r.a.createElement(p.b,null),"Circular barplot with ",r.a.createElement("code",null,"Matplotlib")),r.a.createElement("p",null,r.a.createElement("code",null,"Matplotlib")," allows to build circular barplots thanks to the ",r.a.createElement("code",null,"polar")," Layout option of the ",r.a.createElement("code",null,"subplot()")," function. Examples below should guide you from the most simple version to some more customization."),r.a.createElement("p",null,"It starts by explaining how the polar coordinates of ",r.a.createElement("code",null,"matplotlib")," works, show how to use it to draw bars and finally goes into the trickiness of adding labels."),r.a.createElement(s.a,null,r.a.createElement(m.a,{imgName:"circular-barplot-basic1",caption:"Explanation of the polar coordinates with Matplotlib.",linkTo:"/circular-barplot-basic"}),r.a.createElement(m.a,{imgName:"circular-barplot-basic2",caption:"Most basic circular barplot with Python and Matplotlib.",linkTo:"/circular-barplot-basic"}),r.a.createElement(m.a,{imgName:"circular-barplot-basic4",caption:"Reorder items.",linkTo:"/circular-barplot-basic"})),r.a.createElement("div",{style:{maxWidth:"800px",margin:"0 auto",padding:30}},r.a.createElement(h.Link,{to:"/circular-barplot-basic"},r.a.createElement(b.a,{imgName:"circular-barplot-basic3",caption:"Circular barplot with labels"})))),r.a.createElement(d.a,null),r.a.createElement(o.a,null,r.a.createElement("h2",{id:"From the web"},r.a.createElement(p.b,null),"From the web"),r.a.createElement("p",null,"The web is full of astonishing charts made by awesome bloggers, (often using ",r.a.createElement("a",{href:"https://www.r-graph-gallery.com"},"R"),"). The ",r.a.createElement("a",{href:"https://www.python-graph-gallery.com"},"Python graph gallery")," tries to display (or translate from R) some of the best creations and explain how their source code works. If you want to display your work here, please drop me a word or even better, submit a ",r.a.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"Pull Request"),"!"),r.a.createElement(s.a,null,r.a.createElement(f.a,{xs:12,md:6},r.a.createElement(h.Link,{to:"/web-circular-barplot-with-matplotlib"},r.a.createElement(b.a,{imgName:"web-circular-barplot-with-matplotlib-square",caption:"A circular barchart with several features per group made with Python and Matplotlib."}))))),r.a.createElement(d.a,null),r.a.createElement("div",{className:"greySection",id:"related"},r.a.createElement(o.a,null,r.a.createElement(u.a,{chartFamily:"ranking"}))),r.a.createElement(d.a,null),r.a.createElement(o.a,null,r.a.createElement(i.a,null)),r.a.createElement(d.a,null))}},pJaR:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));t("9d5C");var n=t("q1tI"),r=t.n(n),l=t("3Z9Z"),c=t("JI6e"),o=t("2Bqf"),i=t("qXiB"),s=t("jhdv"),m={distribution:"Distribution",correlation:"Correlation",ranking:"Ranking",partOfAWhole:"Part Of A Whole",evolution:"Evolution",map:"Map",flow:"Flow",general:"General Knowledge"};function u(e){var a=e.chartFamily,t=i.a.filter((function(e){return e.family===a})).map((function(e,a){var t=Object(s.a)(e.pythonURL);return r.a.createElement(c.a,{key:a,xs:4,md:2},r.a.createElement(o.a,{link:t,chartType:e.logo,caption:e.label}))}));return r.a.createElement("div",null,r.a.createElement("h2",{id:"Related charts",className:"sectionTitle "+a},null==m?void 0:m[a]),r.a.createElement(l.a,null,t))}}}]);
//# sourceMappingURL=component---src-pages-circular-barplot-js-c7be1c352592e7070a34.js.map