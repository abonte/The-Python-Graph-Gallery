"use strict";(self.webpackChunkthe_python_graph_gallery=self.webpackChunkthe_python_graph_gallery||[]).push([[939],{7128:function(e,a,t){t.d(a,{Z:function(){return m}});var l=t(7294),n=t(1883),o=t(8032);const i=["animated_chart","animated_gapminder.gif","animated_volcano.gif"];function m(e){let{imgName:a,caption:t}=e;if(i.includes(a))return l.createElement("p",null,"TODO");const m=(0,n.useStaticQuery)("2757772085").allFile.edges.find((e=>e.node.name.includes(a)));return m?l.createElement(l.Fragment,null,l.createElement("div",{className:"chartImageContainer"},l.createElement(o.G,{image:m.node.childImageSharp.gatsbyImageData,alt:t,className:"chartImageImg"}),l.createElement("div",{className:"chartImageOverlay"},l.createElement("div",{className:"chartImageOverlayText"},l.createElement("p",null,t))))):null}},4596:function(e,a,t){t.d(a,{Z:function(){return m}});var l=t(7294),n=t(7128),o=t(1555),i=t(1883);function m(e){let{imgName:a,caption:t,linkTo:m}=e;return l.createElement(o.Z,{xs:12,md:4},l.createElement(i.Link,{to:m},l.createElement(n.Z,{imgName:a,caption:t})))}},5836:function(e,a,t){t.r(a),t.d(a,{default:function(){return E}});var l=t(7294),n=t(429),o=t(1433),i=t(682),m=t(8728),r=t(4051),c=t(4596),s=t(8742),u=t(1883),p=(t(4125),t(2737),t(7128),t(3921)),d=t(5005);const h="<p>The first step of any geo-spatial data analysis is to draw the background map of the area of interest. This section explains what are the main ways to build it with <code>Python</code>. It is the foundation of the next sections that will add some data on top of it.</p>";function E(){return l.createElement(o.Z,{title:"Background Map",isTocEnabled:!0,seoDescription:"A collection of map examples made with Python, coming with explanation and reproducible code"},l.createElement(n.Z,{title:"Background Map",description:h}),l.createElement(p.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(i.Z,null,l.createElement("h2",{id:"Overview"},"🔎  Input format and package overview ⭐ "),l.createElement("p",null,"A map is basically a set of polygons displayed on a 2 dimensional canvas. There are two problems you need to solve when building one:"),l.createElement("ul",null,l.createElement("li",null,l.createElement("u",null,"Where to find polygon coordinates"),". It can come from:",l.createElement("ul",null,l.createElement("li",null,"a ",l.createElement("b",null,"shape file")," or a ",l.createElement("b",null,"geoJson file"),". That's 2 different ways to store the information. The ",l.createElement("code",null,"geopandas")," package is the best way to read those file formats with Python."),l.createElement("li",null,"a ",l.createElement("b",null,"python library")," like ",l.createElement("code",null,"geopandas")," or ",l.createElement("code",null,"basemap")," providing the information for common location like the US."),l.createElement("li",null,l.createElement("b",null,"google map")," or ",l.createElement("b",null,"open street map"),"."))),l.createElement("br",null),l.createElement("li",null,l.createElement("u",null,"How to plot those polygons?"),l.createElement("ul",null,l.createElement("li",null,"Once you get a ",l.createElement("code",null,"geodataframe")," thanks to the ",l.createElement("code",null,"geopandas")," package, ",l.createElement("code",null,"geoplot")," is your best choice to build a static map"),l.createElement("li",null,"If you need an interactive map from a ",l.createElement("code",null,"geodataframe"),", ",l.createElement("code",null,"plotly")," is a good option."),l.createElement("li",null,"If you want to use google map style maps, ",l.createElement("code",null,"folium")," is the way to go.")))))),l.createElement(p.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Geopandas & Geoplot"},l.createElement("code",null,"Geopandas")," and ",l.createElement("code",null,"GeoPlot")),l.createElement("p",null,l.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",l.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),l.createElement(r.Z,null,l.createElement(c.Z,{imgName:"map-read-geojson-with-python-geopandas",caption:"How to read a geoJson file with geopandas and transform it to a geodataframe.",linkTo:"/map-read-geojson-with-python-geopandas"}))),l.createElement(p.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Folium"},l.createElement("code",null,"Folium")," for google maps style maps"),l.createElement("p",null,l.createElement("code",null,"Folium")," is a wrapper of the ",l.createElement("code",null,"leaflet.js")," javascript library. It allows to make all the data wrangling with python, and benefit the power of ",l.createElement("code",null,"javascript")," for interactive data visualization."),l.createElement("p",null,"The map below has been created with folium... with 1 line of code only! 😍"),l.createElement("div",{className:"mx-auto"},l.createElement("iframe",{src:"/interactiveCharts/288_basic_folium_map.html",title:"Basic map with folium",style:{border:"none",width:"800px",height:"300px"}})),l.createElement(u.Link,{to:"/288-map-background-with-folium"},l.createElement(d.Z,{size:"sm"},"See code")),l.createElement("br",null),l.createElement("br",null),l.createElement("p",null,l.createElement("code",null,"Folium")," allows different types of background tiles. Here is an example with a tile called ",l.createElement("code",null,"Stamen Toner"),":"),l.createElement("div",{className:"mx-auto"},l.createElement("iframe",{src:"/interactiveCharts/288_basic_folium_map_toner.html",title:"Folium and customized tile",style:{border:"none",width:"800px",height:"300px"}})),l.createElement(u.Link,{to:"/288-map-background-with-folium"},l.createElement(d.Z,{size:"sm"},"See code")),l.createElement("br",null),l.createElement("br",null),l.createElement("p",null,"It is also possible to add markers with associated popups on top of the map:"),l.createElement(r.Z,null,l.createElement(c.Z,{imgName:"312-add-markers-on-folium-map1",caption:"How to read a geoJson file with geopandas and transform it to a geodataframe.",linkTo:"/312-add-markers-on-folium-map"}),l.createElement(c.Z,{imgName:"312-add-markers-on-folium-map2",caption:"How to read a geoJson file with geopandas and transform it to a geodataframe.",linkTo:"/312-add-markers-on-folium-map"}))),l.createElement(p.Z,null),l.createElement(i.Z,null,l.createElement("h2",{id:"Basemap"},"Background map with ",l.createElement("code",null,"Basemap")),l.createElement("p",null,l.createElement("code",null,"Seaborn")," is another great alternative to build an area chart with ",l.createElement("code",null,"python"),". The below examples show how to start basic, apply usual customization, and use the small multiple technique for when you have several groups to compare."),l.createElement(r.Z,null,l.createElement(c.Z,{imgName:"281-basic-map-with-basemap1",caption:"Most basic map with python and the basemap library.",linkTo:"/281-basic-map-with-basemap"}),l.createElement(c.Z,{imgName:"281-basic-map-with-basemap2",caption:"Select a specific location on the map.",linkTo:"/281-basic-map-with-basemap"}),l.createElement(c.Z,{imgName:"281-basic-map-with-basemap3",caption:"Customize color and features of shapes.",linkTo:"/281-basic-map-with-basemap"}),l.createElement(c.Z,{imgName:"281-basic-map-with-basemap4",caption:"List of available boundaries.",linkTo:"/281-basic-map-with-basemap"}),l.createElement(c.Z,{imgName:"281-basic-map-with-basemap5",caption:"Change projection.",linkTo:"/281-basic-map-with-basemap"}),l.createElement(c.Z,{imgName:"281-basic-map-with-basemap6",caption:"Use a background tile.",linkTo:"/281-basic-map-with-basemap"}))),l.createElement(p.Z,null),l.createElement("div",{className:"greySection",id:"related"},l.createElement(i.Z,null,l.createElement(s.Z,{chartFamily:"map"}))),l.createElement(p.Z,null),l.createElement(i.Z,null,l.createElement(m.Z,null)),l.createElement(p.Z,null))}}}]);
//# sourceMappingURL=component---src-pages-map-js-0bdb2c5f1f54ce0d4d3c.js.map