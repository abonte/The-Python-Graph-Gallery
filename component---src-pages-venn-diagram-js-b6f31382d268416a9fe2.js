"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[4387],{7128:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(1883),i=a(8032);const r=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:a}=e;if(r.includes(t))return n.createElement("p",null,"TODO");const o=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(i.G,{image:o.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),l=a(7128),i=a(1555),r=a(1883);function o(e){let{imgName:t,caption:a,linkTo:o}=e;return n.createElement(i.Z,{xs:12,md:4},n.createElement(r.Link,{to:o},n.createElement(l.Z,{imgName:t,caption:a})))}},8080:function(e,t,a){a.r(t),a.d(t,{default:function(){return y}});var n=a(7294),l=a(429),i=a(146),r=a(682),o=a(8728),m=a(4051),c=a(4596),s=a(8742),u=a(1883),h=a(4125),p=a(7128),d=a(1555),g=a(5005),E=a(2737),b=a(3921);const f="<p>A <a href='https://www.data-to-viz.com/graph/venn.html'>Venn Diagram</a> (also called <code>primary diagram</code>, <code>set diagram</code> or <code>logic diagram</code>) is a diagram that shows all possible logical relationships between a finite collection of different sets. Fortunately, the <code>matplotlib_venn</code> library allows to build one easily with Python.</p>",v="# library\nimport matplotlib.pyplot as plt\nfrom matplotlib_venn import venn2\n\n# Use the venn2 function\nvenn2(subsets = (10, 5, 2), set_labels = ('Group A', 'Group B'))\nplt.show()\n";function y(){return n.createElement(i.Z,{title:"Venn Diagram",isTocEnabled:!0,seoDescription:"A collection of Venn Diagram examples made with Python, coming with explanation and reproducible code"},n.createElement(l.Z,{title:"Venn Diagram",description:f}),n.createElement(r.Z,null,n.createElement("h2",{id:"Quick"},"⏱ Quick start"),n.createElement(m.Z,{className:"align-items-center"},n.createElement(d.Z,{md:6},n.createElement("p",null,"The ",n.createElement("code",null,"venn2")," function of the ",n.createElement("code",null,"matplotlib_venn")," library is the best way to make a Venn Diagram with Python, as shown on the code below."),n.createElement("p",null," Note that several input formats are possible to get there. This first post of the section goes through them and should get you started from any kind of input. 🔥")),n.createElement(d.Z,{md:6},n.createElement(u.Link,{to:"/170-basic-venn-diagram-with-2-groups"},n.createElement(p.Z,{imgName:"170_Basic_Venn_Diagram",caption:"Most basic Venn Diagram with Python"})))),n.createElement(E.Z,null,v)),n.createElement(b.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(r.Z,null,n.createElement("h2",{id:"Matplotlib-venn pkg"},"ℹ ️ A note on the ",n.createElement("code",null,"Matplotlib-venn")," library"),n.createElement("p",null,"The ",n.createElement("code",null,"matplotlib-venn")," library has been created by ",n.createElement("a",{href:"https://github.com/konstantint/matplotlib-venn"},"Konstantin Tretyakov"),". Its official documentation is available on ",n.createElement("a",{href:"https://github.com/konstantint"},"github"),". Take a minute to give him a ⭐ if you use it!"),n.createElement("a",{href:"https://github.com/konstantint/matplotlib-venn"},n.createElement(g.Z,{size:"sm"},"Matplotlib-venn documentation")))),n.createElement(b.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"Matplotlib"},n.createElement(h.rS,null),"Venn Diagram with ",n.createElement("code",null,"Matplotlib")," and ",n.createElement("code",null,"matplotlib-venn")),n.createElement("p",null,n.createElement("code",null,"Matplotlib")," is probably the most famous and flexible python library for data visualization. It is appropriate to build any kind of chart, including the lollipop plot thanks to its ",n.createElement("code",null,"stem()")," function."),n.createElement(m.Z,null,n.createElement(c.Z,{imgName:"171_Basic_Venn_3-groups",caption:"Venn Diagram with 3 sets.",linkTo:"/171-basic-venn-diagram-with-3-groups"}),n.createElement(c.Z,{imgName:"172_custom_venn_diagram3",caption:"Customize Venn Diagram: circles, lables and more.",linkTo:"/172-custom-venn-diagram"}),n.createElement(c.Z,{imgName:"174_Change_Background_color_venn",caption:"Change Venn diagram background color.",linkTo:"/174-change-background-colour-of-venn-diagram"})),n.createElement("p",null,"The ",n.createElement("code",null,"Venn2()")," function allows to customize the venn diagram as much as you want, allowing to build some pretty neat figures as below:"),n.createElement("div",{style:{maxWidth:"600px",margin:"0 auto"}},n.createElement(u.Link,{to:"/173-elaborated-venn-diagram"},n.createElement(p.Z,{imgName:"173_elaborated_Venn_diagram",caption:"The matplotlib-venn library allows a high level of customization. Here is an example taking advantage of it"})))),n.createElement(b.Z,null),n.createElement(r.Z,null,n.createElement("h2",{id:"UpSet Chart"},"Upset plot as an alternative"),n.createElement("p",null,"Venn diagrams are great to visualize the intersection between 2 or 3 sets. Above that they become quite ",n.createElement("a",{href:"https://www.data-to-viz.com/graph/venn.html"},"messy and unreadable"),"."),n.createElement("p",null,"There is a alternative to them: the upSet plot that can be made thanks to the ",n.createElement("a",{href:"https://pypi.org/project/UpSetPlot/"},"upSetPlot")," library"),n.createElement("a",{href:"https://pypi.org/project/UpSetPlot/"},n.createElement(g.Z,{size:"sm"},"Show me!"))),n.createElement(b.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(r.Z,null,n.createElement(s.Z,{chartFamily:"partOfAWhole"}))),n.createElement(b.Z,null),n.createElement(r.Z,null,n.createElement(o.Z,null)),n.createElement(b.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-venn-diagram-js-b6f31382d268416a9fe2.js.map