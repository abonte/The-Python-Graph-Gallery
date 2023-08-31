"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[8682],{9389:function(e,t,a){a.d(t,{H:function(){return o}});var l=a(7294),n=a(1883);function r(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const o=e=>{let{title:t,seoDescription:a,keywords:o}=e;return l.createElement(l.Fragment,null,l.createElement("title",null,t),l.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),l.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),l.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),l.createElement("meta",{name:"author",content:"Yan Holtz"}),l.createElement("meta",{name:"keywords",content:o||"python, chart, graph, code, viz, dataviz"}),l.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),l.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),l.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement("meta",{property:"og:description",content:a}),l.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),l.createElement(n.Script,{id:"adthrive",strategy:"post-hydrate",src:r()}))}},429:function(e,t,a){a.d(t,{Z:function(){return m}});var l=a(7294),n=a(5005),r=a(1883),o=a(8447),c=a(5584),i=a(682),s=a(5128);function m(e){let{title:t,description:a,chartType:s}=e;const m=o.c.filter((e=>e.id===s))[0];return l.createElement(i.Z,null,l.createElement("div",{className:"titleAndDescription"},l.createElement("div",{className:"titleRow"},l.createElement("h1",null,t),s&&l.createElement(h,{chartType:s})),l.createElement("hr",{className:"smallHr"}),"string"==typeof a?l.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:a}}):l.createElement("div",{className:"description"},a),s&&l.createElement("div",{style:{marginTop:"10px"}},l.createElement(r.Link,{to:(0,c.y)(m.pythonURL)},l.createElement(n.Z,{size:"sm"},m.label+" section")),l.createElement("a",{href:m.dataToVizURL},l.createElement(n.Z,{size:"sm"},"About this chart")))))}const h=e=>{let{chartType:t}=e;const a=o.c.filter((e=>e.id===t))[0],n=(0,c.y)(a.pythonURL);return l.createElement("div",{style:{width:"80px",marginLeft:40}},l.createElement(r.Link,{to:n},l.createElement(s.Z,{chartType:a.logo})))}},2744:function(e,t,a){a.r(t),a.d(t,{Head:function(){return g},default:function(){return y}});var l=a(7294),n=a(429),r=a(1433),o=a(682),c=a(1190),i=a(3921),s=a(1883),m=a(8032);function h(e){let{imgName:t,caption:a}=e;const n=(0,s.useStaticQuery)("2129084635").allFile.edges.find((e=>e.node.name.includes(t)));return n?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(m.G,{image:n.node.childImageSharp.gatsbyImageData,alt:t,className:"chartImageImg"}),l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,a))))):null}var u=a(1555),p=a(4051),d=a(9389);const E="<p>👋 Hi! The Python Graph Gallery is a website brought to you by <a href='https://www.yan-holtz.com'>Yan Holtz</a>. It displays hundreds of charts made with <code>Python</code>, together with their reproducible code. Here are a few things you should know about it! 👇</p>",g=()=>l.createElement(d.H,{title:"About",seoDescription:"About page of the Python Graph Gallery"});function y(){return l.createElement(r.Z,{isTocEnabled:!0},l.createElement(n.Z,{title:"About",description:E}),l.createElement(i.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"How and Why"},"❓ How and Why this gallery"),l.createElement("p",null,l.createElement("u",null,"How"),": The python graph gallery displays about"," ",l.createElement("code",null,"400 charts")," organize in about ",l.createElement("code",null,"40 sections"),"(families)! 😳. It showcases the most common types of chart used for data science. Each family displays several examples, describing the most common need of customization. Every example comes with its reproducible code and with some explanation 😀."),l.createElement("p",null,"This website relies on the following stack:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")," makes the website blazing fast"),l.createElement("li",null,"Code is hosted on"," ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"github"),", you can edit it!"),l.createElement("li",null,"Every blog post is actually a"," ",l.createElement("a",{href:"https://jupyter.org"},"Jupyter notebook")),l.createElement("li",null,l.createElement("a",{href:"https://react-bootstrap.github.io"},"React bootstrap")," is the css framework used here.")),l.createElement("p",null,l.createElement("u",null,"Why"),": I guess the main explanation is that I'm a nerd 😊. I love exploring all the graph possibilities a language offers. I also love teaching and helping people out. If you've found this website helpful, say me thanks and you will make my day! 🙏"),l.createElement("blockquote",null,"This website is built on my free time with the little I know! Please be kind when giving feedbacks ❤️")),l.createElement(i.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Sponsoring"},"💵 Sponsoring"),l.createElement("p",null,"If you run a buisness that is highly related with python, data science or a closely related field, I would love to communicate about it in exchange of a few 💰. We all need to put some butter in the spinach (French expression, sorry) 🐸."),l.createElement("p",null,"The python graph gallery is visited about"," ",l.createElement("code",null,"400,000 times per months")," by students and professionals that are highly interested in data science, from every country in the world"),l.createElement("p",null,"Here is a list of the companies that helped me building this website, thanks ",l.createElement("u",null,"so much")," to them!"),l.createElement(p.Z,null,l.createElement(u.Z,{xs:6,md:3},l.createElement(h,{imgName:"data_society_logo",caption:"Data Society"})),l.createElement(u.Z,{xs:6,md:3},l.createElement(h,{imgName:"datacamp_logo",caption:"Datacamp"})),l.createElement(u.Z,{xs:6,md:3},l.createElement(h,{imgName:"datamatic",caption:"Data Society"})),l.createElement(u.Z,{xs:6,md:3},l.createElement(h,{imgName:"EARL_logo",caption:"EARL conference"})),l.createElement(u.Z,{xs:6,md:3},l.createElement(h,{imgName:"eoda_logo",caption:"EODA"})),l.createElement(u.Z,{xs:6,md:3},l.createElement(h,{imgName:"HighStat_logo",caption:"HighStat"})),l.createElement(u.Z,{xs:6,md:3},l.createElement(h,{imgName:"jumping_river_logo",caption:"Jumping River"})),l.createElement(u.Z,{xs:6,md:3},l.createElement(h,{imgName:"MangoSolution_logo",caption:"Mango Solution"})),l.createElement(u.Z,{xs:6,md:3},l.createElement(h,{imgName:"365_data_science_logo",caption:"365 Data Science"})),l.createElement(u.Z,{xs:6,md:3},l.createElement(h,{imgName:"dataquest_logo",caption:"Dataquest"})),l.createElement(u.Z,{xs:6,md:3},l.createElement(h,{imgName:"stack_abuse_logo",caption:"Stack Abuse book"})),l.createElement(u.Z,{xs:6,md:3},l.createElement(h,{imgName:"udemy",caption:"Udemy"})))),l.createElement(i.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Acknowledgment"},"🙏 Acknowledgment"),l.createElement("p",null,"This website would no exist without the precious help of those people:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("u",null,"Maintainers")," of python viz libraries like"," ",l.createElement("code",null,"matplotlib"),", ",l.createElement("code",null,"seaborn"),", ",l.createElement("code",null,"plotly"),","," ",l.createElement("code",null,"circlify"),", ",l.createElement("code",null,"squarify"),", ",l.createElement("code",null,"pandas"),","," ",l.createElement("code",null,"leaflet"),", ",l.createElement("code",null,"networkX")," and others."),l.createElement("br",null),l.createElement("li",null,"Main ",l.createElement("u",null,"contributors")," who wrote some of the blogposts: Nicolas Rousselet and Ozlem Tok"),l.createElement("br",null),l.createElement("li",null,l.createElement("u",null,"Friends"),": ",l.createElement("a",{href:"http://www.conor.fr/"},"Conor Healy")," for the logos,"," ",l.createElement("a",{href:"https://www.linkedin.com/in/guillaume-debreu-7b360b125/"},"Gimzu Debreu")," ","for general knowledge about the internet and all others who gave me constructive feedbacks."),l.createElement("br",null),l.createElement("li",null,"More generally, everybody who gave ",l.createElement("u",null,"feedbacks"),", english corrections, bug reports, opened issues"))),l.createElement(i.Z,null),l.createElement(o.Z,null,l.createElement("h2",{id:"Contribution"},"🙇‍♂️ How to contribute"),l.createElement("p",null,"Contribution to the python graph gallery are highly encouraged 📢! I'm working hard on this project and would love some help of any kind."),l.createElement("p",null,"There are 2 main ways to contribute:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("u",null,"Improve")," an existing page. It can be anything from correcting an english mistake to a python code reformating.",l.createElement("ul",null,l.createElement("li",null,"👍🏽 Open an"," ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery/issues"},"issue on github")," ","to explain the bug you've found"),l.createElement("li",null,"🔥 Open a pull request on the"," ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"github repo")," ","to suggest a correction"))),l.createElement("br",null),l.createElement("li",null,l.createElement("u",null,"Create")," a new chart. Contact me by email, on"," ",l.createElement("a",{href:"https://twitter.com/R_Graph_Gallery"},"twitter")," or open a"," ",l.createElement("a",{href:"https://github.com/holtzy/The-Python-Graph-Gallery"},"pull request")," ","with a new chart suggestion."))),l.createElement(i.Z,null),l.createElement(o.Z,null,l.createElement(c.Z,null)),l.createElement(i.Z,null))}},1555:function(e,t,a){var l=a(4184),n=a.n(l),r=a(7294),o=a(6792),c=a(5893);const i=r.forwardRef(((e,t)=>{const[{className:a,...l},{as:r="div",bsPrefix:i,spans:s}]=function({as:e,bsPrefix:t,className:a,...l}){t=(0,o.vE)(t,"col");const r=(0,o.pi)(),c=(0,o.zG)(),i=[],s=[];return r.forEach((e=>{const a=l[e];let n,r,o;delete l[e],"object"==typeof a&&null!=a?({span:n,offset:r,order:o}=a):n=a;const m=e!==c?`-${e}`:"";n&&i.push(!0===n?`${t}${m}`:`${t}${m}-${n}`),null!=o&&s.push(`order${m}-${o}`),null!=r&&s.push(`offset${m}-${r}`)})),[{...l,className:n()(a,...i,...s)},{as:e,bsPrefix:t,spans:i}]}(e);return(0,c.jsx)(r,{...l,ref:t,className:n()(a,!s.length&&i)})}));i.displayName="Col",t.Z=i},4051:function(e,t,a){var l=a(4184),n=a.n(l),r=a(7294),o=a(6792),c=a(5893);const i=r.forwardRef((({bsPrefix:e,className:t,as:a="div",...l},r)=>{const i=(0,o.vE)(e,"row"),s=(0,o.pi)(),m=(0,o.zG)(),h=`${i}-cols`,u=[];return s.forEach((e=>{const t=l[e];let a;delete l[e],null!=t&&"object"==typeof t?({cols:a}=t):a=t;const n=e!==m?`-${e}`:"";null!=a&&u.push(`${h}${n}-${a}`)})),(0,c.jsx)(a,{ref:r,...l,className:n()(t,i,...u)})}));i.displayName="Row",t.Z=i}}]);
//# sourceMappingURL=component---src-pages-about-js-bc2405de3eda6b9c187e.js.map