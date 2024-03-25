"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[5010],{7128:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(1883),i=a(8032);const o=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function r(e){let{imgName:t,caption:a}=e;if(o.includes(t))return n.createElement("p",null,"TODO");const r=(0,l.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(t)));return r?n.createElement(n.Fragment,null,n.createElement("div",{className:"chartImageContainer"},n.createElement(i.G,{image:r.node.childImageSharp.gatsbyImageData,alt:a,className:"chartImageImg"}),a&&n.createElement("div",{className:"chartImageOverlay"},n.createElement("div",{className:"chartImageOverlayText"},n.createElement("p",null,a))))):null}},4596:function(e,t,a){a.d(t,{Z:function(){return r}});var n=a(7294),l=a(7128),i=a(1555),o=a(1883);function r(e){let{imgName:t,caption:a,linkTo:r}=e;return n.createElement(i.Z,{xs:12,md:4},n.createElement(o.Link,{to:r},n.createElement(l.Z,{imgName:t,caption:a})))}},9215:function(e,t,a){a.d(t,{Z:function(){return y}});a(1883);var n=a(7294),l=a(1143),i=a.n(l),o=a(2081),r=a(6833);function s(e,t){let a=0;return n.Children.map(e,(e=>n.isValidElement(e)?t(e,a++):e))}var c=a(4184),m=a.n(c),u=a(6792),p=a(5893);const h=n.forwardRef((({bsPrefix:e,size:t,vertical:a=!1,className:n,role:l="group",as:i="div",...o},r)=>{const s=(0,u.vE)(e,"btn-group");let c=s;return a&&(c=`${s}-vertical`),(0,p.jsx)(i,{...o,ref:r,role:l,className:m()(n,c,t&&`${s}-${t}`)})}));h.displayName="ButtonGroup";var d=h,f=a(8984);const g=n.forwardRef(((e,t)=>{const{children:a,type:l="radio",name:c,value:m,onChange:u,vertical:h=!1,...f}=(0,o.Ch)(e,{value:"onChange"}),g=()=>null==m?[]:[].concat(m);return"radio"!==l||c||i()(!1),(0,p.jsx)(d,{...f,ref:t,vertical:h,children:s(a,(e=>{const t=g(),{value:a,onChange:i}=e.props;return n.cloneElement(e,{type:l,name:e.name||c,checked:-1!==t.indexOf(a),onChange:(0,r.Z)(i,(e=>((e,t)=>{if(!u)return;const a=g(),n=-1!==a.indexOf(e);"radio"!==l?u(n?a.filter((t=>t!==e)):[...a,e],t):n||u(e,t)})(a,e)))})}))})}));var E=Object.assign(g,{Button:f.Z});const b={kdeplot:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.kdeplot.html",basicUsage:"",parameters:[{name:"fill",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"control the color",type:"boolean",relatedChart:"70_deffffed"}]},violin:{description:"",docUrl:"https://seaborn.pydata.org/generated/seaborn.violinplot.html",basicUsage:"",parameters:[{name:"width",description:"color under the curve",type:"boolean",relatedChart:"70_deffffed"},{name:"bw",description:"control how density is computed",type:"boolean",relatedChart:"70_deffffed"},{name:"color",description:"controls the color",type:"string",relatedChart:"70_deffffed"}]}},v=e=>"string"!=typeof e?"":e.charAt(0).toUpperCase()+e.slice(1);function y(e){let{functionName:t}=e;const a=b[t],{0:l,1:i}=(0,n.useState)(a.parameters[0].name),{0:o,1:r}=(0,n.useState)("hello"),s=a.parameters.filter((e=>e.name===l))[0];return n.createElement(n.Fragment,null,n.createElement("h2",{id:v(t+"() details")},"🔎 ",n.createElement("code",null,t)," function parameters",n.createElement("a",{style:{marginLeft:"15px",fontSize:"14px"},href:a.docUrl},"→ see full doc")),n.createElement(E,{type:"radio",size:"sm",name:"functionParameter",value:l,onChange:e=>i(e)},a.parameters.map(((e,t)=>n.createElement(f.Z,{key:t,className:"functionButton",id:"functionParameter-"+e.name,value:e.name},e.name)))),n.createElement("div",null,n.createElement("code",null,"string"),n.createElement("span",null,"→ ",s.description)),n.createElement("br",null),n.createElement("br",null))}},9785:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}});var n=a(7294),l=a(429),i=a(2057),o=a(682),r=a(1190),s=a(4051),c=a(4596),m=a(8742),u=a(1883),p=(a(944),a(2737),a(7128),a(9215),a(3921));const h=n.createElement(n.Fragment,null,n.createElement("p",null,"Python is not only great at data visualization, but it is also powerful for running ",n.createElement("b",null,"statistical analysis"),", providing a comprehensive toolkit for both beginners and seasoned statisticians to extract meaningful insights from complex datasets."),n.createElement("p",null,"This section shows how to visualize the results of your statistical analysis, like Principal Component Analysis (",n.createElement("b",null,"PCA"),"),"," ",n.createElement("b",null,"linear modeling"),", ANOVA, t-tests and more."),n.createElement("p",null,"It does not focus on how to run the test, but on how to"," ",n.createElement("b",null,"make clean output"),"to present your findings in a appealing manner."));function d(){return n.createElement(i.Z,{title:"Visualizing statistics with Python",isTocEnabled:!0,seoDescription:"How to run statistical analysis in Python and visualize the results efficiently."},n.createElement(l.Z,{title:"Visualizing statistics with Python",description:h,chartType:"statistics"}),n.createElement(o.Z,null,n.createElement("h2",{id:"PCA"},"Principal Component Analysis (PCA)"),n.createElement("p",null,"Principal Component Analysis (",n.createElement("b",null,"PCA"),") is a transformative technique widely used in the realm of data science to"," ",n.createElement("b",null,"reduce the dimensionality")," of large datasets while preserving as much variance as possible. By transforming the original variables into a new set of orthogonal components, PCA offers a concise yet informative perspective, making it easier to visualize and analyze high-dimensional data."),n.createElement("p",null,"Python is a powerful tool when it comes to PCA thanks to its"," ",n.createElement("code",null,"scikit-learn")," library."),n.createElement("p",null,"The following post teaches how to perform a PCA with"," ",n.createElement("code",null,"scikit-learn")," and focus on how to build clean outputs using ",n.createElement(u.Link,{href:"/matplotlib"},"matplotlib"),"."),n.createElement(s.Z,null,n.createElement(c.Z,{imgName:"515-intro-pca-graph-python-1",caption:"The scree plot allows to check for the variance explained by each variable.",linkTo:"/515-intro-pca-graph-python"}),n.createElement(c.Z,{imgName:"515-intro-pca-graph-python-2",caption:"Check the correlation circle plot to see the correlation between variables",linkTo:"/515-intro-pca-graph-python"}),n.createElement(c.Z,{imgName:"515-intro-pca-graph-python-3",caption:"Use a scatterplot to check how samples are clusterized",linkTo:"/515-intro-pca-graph-python"}))),n.createElement(p.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"ANOVA"},"Analysis of Variance(ANOVA)"),n.createElement("p",null,"Analysis of Variance (",n.createElement("b",null,"ANOVA"),") is a statistical method used to test the differences between two or more group means to determine if they are ",n.createElement("b",null,"statistically significant"),"."),n.createElement("p",null,"It helps to identify whether the independent variable has a"," ",n.createElement("b",null,"significant impact")," on the dependent variable across different groups, thereby allowing for the comparison of multiple groups simultaneously."),n.createElement("p",null,"Anova results are usually represented as a"," ",n.createElement(u.Link,{href:"/boxplot"},"boxplot")," or a"," ",n.createElement(u.Link,{href:"/violin-plot"},"violin plot"),", with each box representing a specific group. The following examples show how to create such boxplots, adding the ANOVA results, and offering some variations."),n.createElement(s.Z,null,n.createElement(c.Z,{imgName:"557-anova-visualization-with-matplotlib-1",caption:"Box plot with ANOVA results on top",linkTo:"/557-anova-visualization-with-matplotlib"}),n.createElement(c.Z,{imgName:"557-anova-visualization-with-matplotlib-2",caption:"Violin plot with ANOVA results on top",linkTo:"/557-anova-visualization-with-matplotlib"}),n.createElement(c.Z,{imgName:"557-anova-visualization-with-matplotlib-3",caption:"Customized violin plot with ANOVA results on top",linkTo:"/557-anova-visualization-with-matplotlib"}),n.createElement(c.Z,{imgName:"web-ggbetweenstats-with-matplotlib-square",caption:"A combination of a violin plot and a boxplot. Allows the comparison of several groups with statistical test results on top.",linkTo:"/web-ggbetweenstats-with-matplotlib"}))),n.createElement(p.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"Hypothesis testing"},"Hypothesis testing"),n.createElement("p",null,n.createElement("b",null,"Statistical hypothesis testing")," is a key technique in the realm of data analysis."),n.createElement("p",null,"The posts below explain how to display the results of your hypothesis tests ",n.createElement("b",null,"on your graphs"),", so as to represent your results in the most elegant way possible."),n.createElement("p",null,"We'll use the scipy library to run the tests and"," ",n.createElement(u.Link,{href:"/matplotlib"},"matplotlib"),"to display the results."),n.createElement(s.Z,null,n.createElement(c.Z,{imgName:"551-student-t-test-visualization-1",caption:"Histograms with p-value and t statistic",linkTo:"/551-student-t-test-visualization"}),n.createElement(c.Z,{imgName:"551-student-t-test-visualization-2",caption:"Boxplots with p-value and t statistic",linkTo:"/551-student-t-test-visualization"}))),n.createElement(p.Z,null),n.createElement(o.Z,null,n.createElement("h2",{id:"PCA"},"Linear Regression"),n.createElement("p",null,n.createElement("b",null,"Linear regression")," is a statistical technique that aims to model the relationship between a dependent variable and one or more independent variables by fitting a linear equation to observed data."),n.createElement("p",null,"With ",n.createElement("code",null,"scikit-learn")," you can easily run a linear regression and visualize the results with ",n.createElement("code",null,"matplotlib"),"."),n.createElement("p",null,"The following post teaches how to perform a linear regression with"," ",n.createElement("code",null,"scikit-learn")," and focus on how to build clean outputs using ",n.createElement(u.Link,{href:"/matplotlib"},"matplotlib"),"."),n.createElement(s.Z,null,n.createElement(c.Z,{imgName:"556-visualize-linear-regression-1",caption:"Linear regression with statistics on top of a scatterplot",linkTo:"/556-visualize-linear-regression"}),n.createElement(c.Z,{imgName:"556-visualize-linear-regression-2",caption:"Customized linear regression with statistics on top of a scatterplot",linkTo:"/556-visualize-linear-regression"}))),n.createElement(p.Z,null),n.createElement("div",{className:"greySection",id:"related"},n.createElement(o.Z,null,n.createElement(m.Z,{chartFamily:"general"}))),n.createElement(p.Z,null),n.createElement(o.Z,null,n.createElement(r.Z,null)),n.createElement(p.Z,null))}},8984:function(e,t,a){var n=a(4184),l=a.n(n),i=a(7294),o=a(6792),r=a(5005),s=a(5893);const c=()=>{},m=i.forwardRef((({bsPrefix:e,name:t,className:a,checked:n,type:i,onChange:m,value:u,disabled:p,id:h,inputRef:d,...f},g)=>(e=(0,o.vE)(e,"btn-check"),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("input",{className:e,name:t,type:i,value:u,ref:d,autoComplete:"off",checked:!!n,disabled:!!p,onChange:m||c,id:h}),(0,s.jsx)(r.Z,{...f,ref:g,className:l()(a,p&&"disabled"),type:void 0,role:void 0,as:"label",htmlFor:h})]}))));m.displayName="ToggleButton",t.Z=m}}]);
//# sourceMappingURL=component---src-pages-statistics-js-4c45a8f90c59634e8adb.js.map