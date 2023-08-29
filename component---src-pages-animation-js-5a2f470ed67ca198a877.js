"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[8895],{9389:function(e,t,a){a.d(t,{H:function(){return r}});var n=a(7294),l=a(1883);function i(){if("undefined"==typeof window)return"";const e=window;return e.adthrive=e.adthrive||{},e.adthrive.cmd=e.adthrive.cmd||[],e.adthrive.plugin="adthrive-ads-manual",e.adthrive.host="ads.adthrive.com","https://"+e.adthrive.host+"/sites/6434366c7ccf1c58d32ab68f/ads.min.js?referrer="+e.encodeURIComponent(e.location.href)+"&cb="+(Math.floor(100*Math.random())+1)}const r=e=>{let{title:t,seoDescription:a,keywords:r}=e;return n.createElement(n.Fragment,null,n.createElement("title",null,t),n.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto|Montserrat",rel:"stylesheet"}),n.createElement("link",{href:"https://fonts.googleapis.com/css2?family=Bitter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap",rel:"stylesheet"}),n.createElement("meta",{name:"description",content:a||"How to build a chart with Python"}),n.createElement("meta",{name:"author",content:"Yan Holtz"}),n.createElement("meta",{name:"keywords",content:r||"python, chart, graph, code, viz, dataviz"}),n.createElement("meta",{property:"og:site_name",content:"The Python Graph Gallery"}),n.createElement("meta",{property:"og:title",content:t+" | The Python Graph Gallery"}),n.createElement("meta",{property:"og:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement("meta",{property:"og:description",content:a}),n.createElement("meta",{name:"twitter:image",content:"https://github.com/holtzy/The-Python-Graph-Gallery/blob/master/static/overview_PGG.png?raw=true"}),n.createElement(l.Script,{id:"adthrive",strategy:"idle",src:i()}))}},5910:function(e,t,a){a.r(t),a.d(t,{Head:function(){return Z},default:function(){return T}});var n=a(7294),l=a(429),i=a(1433),r=a(682),o=a(8728),c=a(4051),m=a(8742),s=a(1883),h=a(4125),d=a(1555),p=a(5005),u=a(2737),g=a(3921),E=a.p+"static/animated_gapminder-ab2a675663c00bc88a2269268b2253f5.gif",f=a.p+"static/animated_chart-0fd2f52638ae6eba7482c9d89bbaffeb.gif",y=a(3469),w=a(9389);const b="<p>An animated chart displays a sequence of static charts, often in a gif or movie format. It can be really useful to describe the evolution of a dataset, or to denote the difference between two states (going from one to another and backward). This page explains how to build an animated chart with <code>Python</code> and <code>Image Magick</code>.",v="# Use image magick to transform a set of .png in a gif\n# (this is bash, not python)\n# (You have to be in a folder with several images called img1.png, img2.png, img3.png...)\nconvert -delay 80 img*.png animation.gif\n",k="brew install imagemagick",Z=()=>n.createElement(w.H,{title:"Animation",seoDescription:"A collection of correlogram examples made with Python, coming with explanation and reproducible code"});function T(){return n.createElement(i.Z,{isTocEnabled:!0},n.createElement(l.Z,{title:"Animation",description:b}),n.createElement(r.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(c.Z,{className:"align-items-center"},n.createElement(d.Z,{md:6},n.createElement("p",null,"An animated chart can be build with ",n.createElement("code",null,"python")," using the following process:"),n.createElement("ul",null,n.createElement("li",null,"Make a loop that outputs each step of the animation as a single chart"),n.createElement("li",null,"Export each chart in its own file (like ",n.createElement("code",null,"png")," or"," ",n.createElement("code",null,"jpg"),")"),n.createElement("li",null,"Use ",n.createElement("a",{href:"https://imagemagick.org/index.php"},"Image Magick")," ","to concatenate all those files into a unique ",n.createElement("code",null,".gif")))),n.createElement(d.Z,{md:6},n.createElement(s.Link,{to:"/341-python-gapminder-animation"},n.createElement("img",{src:E,alt:"Animation with python",style:{width:"100%"}})))),n.createElement(u.Z,null,v),n.createElement(s.Link,{to:"/341-python-gapminder-animation"},n.createElement(p.Z,{size:"sm"},"See code"))),n.createElement(g.Z,null),n.createElement("div",{className:"greySection"},n.createElement(r.Z,null,n.createElement("h2",{id:"Install"},"How to install ",n.createElement("code",null,"Image Magick")),n.createElement("p",null,"Installing Image magick can be a nightmare. The official documentation is"," ",n.createElement("a",{href:"https://imagemagick.org/script/download.php"},"here"),". The best way to install it if you're on Mac OS is to use"," ",n.createElement("a",{href:"https://brew.sh"},"Homebrew")," as follow:"),n.createElement(u.Z,null,k))),n.createElement(g.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(h.rS,null),n.createElement("code",null,"Matplotlib")," and ",n.createElement("code",null,"Image Magick")),n.createElement("p",null,"Let's start with a ver basic animated scatter plot made with"," ",n.createElement("code",null,"python"),", ",n.createElement("code",null,"matplotlib"),"and ",n.createElement("code",null,"image magick"),". The ",n.createElement("code",null,"scatter()")," function is used to build a ",n.createElement(s.Link,{to:"/scatter-plot"},"scatterplot")," at each iteration of a loop. ",n.createElement("code",null,"savefig()")," is used to save each chart at ",n.createElement("code",null,".png")," format. Finally,",n.createElement("code",null,"image magick builds")," the gif."),n.createElement(s.Link,{to:"/340-scatterplot-animation"},n.createElement("img",{src:f,alt:"Basic animated scatterplot with python",style:{maxWidth:"400px",width:"100%"}})),n.createElement("p",null,"The process is pretty much the same for a 3d chart. Here is an example with an animated volcano plot. Each iteration of the loop changes the camera angle, giving this feeling of travelling around the volcano."),n.createElement(s.Link,{to:"/342-animation-on-3d-plot"},n.createElement("img",{src:y.Z,alt:"Animated volcano plot with Python",style:{maxWidth:"900px",width:"100%"}}))),n.createElement(g.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"≠ interaction"},"💡 Animation ≠ Interaction"),n.createElement("p",null,"There is a common confusion between what animated and interactive charts are:"),n.createElement("ul",null,n.createElement("li",null,n.createElement("u",null,"Animated")," means a sequence of several static images is displayed. The user can't do anything except watching those images."),n.createElement("li",null,n.createElement("u",null,"Interactive")," means the user can interact with the chart: zoom in, hover over a shape to get a tooltip, click to have a menu... The user is not a spectator anymore, but also an actor.")),n.createElement(s.Link,{to:"/scatter-plot"},n.createElement(p.Z,{size:"sm"},"Interactive Charts section"))),n.createElement(g.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(r.Z,null,n.createElement(m.Z,{chartFamily:"general"}))),n.createElement(g.Z,null),n.createElement(r.Z,null,n.createElement(o.Z,null)),n.createElement(g.Z,null))}},3469:function(e,t,a){t.Z=a.p+"static/animated_volcano-df4d07818ba89edb4168e26f0160cdf4.gif"}}]);
//# sourceMappingURL=component---src-pages-animation-js-5a2f470ed67ca198a877.js.map