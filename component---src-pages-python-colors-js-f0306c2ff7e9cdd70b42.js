"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[1203],{7128:function(e,t,n){n.d(t,{Z:function(){return o}});var a=n(7294),l=n(4160),r=n(8032);const c=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function o(e){let{imgName:t,caption:n}=e;if(c.includes(t))return a.createElement("p",null,"TODO");const o=(0,l.K2)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return o?a.createElement(a.Fragment,null,a.createElement("div",{className:"chartImageContainer"},a.createElement(r.G,{image:o.node.childImageSharp.gatsbyImageData,alt:n,className:"chartImageImg"}),n&&a.createElement("div",{className:"chartImageOverlay"},a.createElement("div",{className:"chartImageOverlayText"},a.createElement("p",null,n))))):null}},6723:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var a=n(7294),l=n(429),r=n(1433),c=n(682),o=n(8728),i=n(4051),m=n(8742),s=n(4160),p=n(4125),d=n(1555),u=n(5005),g=n(2737),E=n(3921),h=n(7128);const f="<p>A section about how to manage colors with Python. Coming soon.",Z="# libraries\nfrom mpl_toolkits.mplot3d import Axes3D\nimport matplotlib.pyplot as plt\nimport numpy as np\nimport pandas as pd\n\n# Dataset\ndf=pd.DataFrame({'X': range(1,101), 'Y': np.random.randn(100)*15+range(1,101), 'Z': (np.random.randn(100)*15+range(1,101))*2 })\n\n# plot\nfig = plt.figure()\nax = fig.add_subplot(111, projection='3d')\nax.scatter(df['X'], df['Y'], df['Z'], c='skyblue', s=60)\nax.view_init(30, 185)\nplt.show()\n";function y(){return a.createElement(r.Z,{title:"Tips about colors with Python",isTocEnabled:!0,seoDescription:"How to manage colors in python charts"},a.createElement(l.Z,{title:"Colors",description:f}),a.createElement(c.Z,null,a.createElement("h2",{id:"Quick"},"⏱ Quick start"),a.createElement(i.Z,{className:"align-items-center"},a.createElement(d.Z,{md:6},"Coming soon"),a.createElement(d.Z,{md:6},a.createElement(s.rU,{to:"/370-3d-scatterplot"},a.createElement(h.Z,{imgName:"370_3D_scatterplot",caption:"Basic 3d scatterplot with Python & Matplotlib."})))),a.createElement(g.Z,null,Z),a.createElement(s.rU,{to:"/341-python-gapminder-animation"},a.createElement(u.Z,{size:"sm"},"See code"))),a.createElement(E.Z,null),a.createElement(c.Z,null,a.createElement("h2",{id:"Soon"},a.createElement(p.rS,null),"Oh No!"),a.createElement("p",null,"This section is not available yet! But it is coming soon.")),a.createElement(E.Z,null),a.createElement("div",{className:"greySection",id:"related"},a.createElement(c.Z,null,a.createElement(m.Z,{chartFamily:"general"}))),a.createElement(E.Z,null),a.createElement(c.Z,null,a.createElement(o.Z,null)),a.createElement(E.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-python-colors-js-f0306c2ff7e9cdd70b42.js.map