(self.webpackChunkpixelorama_docs=self.webpackChunkpixelorama_docs||[]).push([[428],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return f},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},f=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=s(r),d=a,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||l;return r?n.createElement(m,o(o({ref:t},f),{},{components:r})):n.createElement(m,o({ref:t},f))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9552:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return s},default:function(){return u}});var n=r(2122),a=r(9756),l=(r(7294),r(3905)),o=["components"],c={id:"cel",title:"Cel",sidebar_label:"Cel"},i={unversionedId:"cel",id:"cel",isDocsHomePage:!1,title:"Cel",description:'In Pixelorama, the term "Cel" (from celluloid) refers to the intersection of frames and layers of the project. Basically, every frame in a project has as many cels as there are layers. You could think of frames as a collection of cels, for every layer. So for example, if the project has 3 frames and 4 layers, each frame would have 4 cels, making the total cels 3 x 4 = 12.',source:"@site/docs/cel.md",sourceDirName:".",slug:"/cel",permalink:"/Pixelorama-Docs/cel",editUrl:"https://github.com/Orama-Interactive/Pixelorama-Docs/edit/master/docs/cel.md",version:"current",lastUpdatedBy:"Manolis Papadeas",lastUpdatedAt:1626355494,formattedLastUpdatedAt:"7/15/2021",sidebar_label:"Cel",frontMatter:{id:"cel",title:"Cel",sidebar_label:"Cel"},sidebar:"docs",previous:{title:"Project",permalink:"/Pixelorama-Docs/project"},next:{title:"Palette",permalink:"/Pixelorama-Docs/palette"}},s=[],f={toc:s};function u(e){var t=e.components,c=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,'In Pixelorama, the term "Cel" (from ',(0,l.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Cel"},"celluloid"),") refers to the intersection of frames and layers of the project. Basically, every frame in a project has as many cels as there are layers. You could think of frames as a collection of cels, for every layer. So for example, if the project has 3 frames and 4 layers, each frame would have 4 cels, making the total cels 3 x 4 = 12."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Timeline Cels",src:r(416).Z})),(0,l.kt)("p",null,"Cels can be found in the timeline. They are the square buttons which you can click to edit. You can select/deselect multiple by holding the ",(0,l.kt)("kbd",null,"Control")," key and left-clicking individual cels, or hold the ",(0,l.kt)("kbd",null,"Shift")," key and left-click a cel to also select all of the cels between the one that was clicked and the one that has been selected last."),(0,l.kt)("p",null,"You can also right click cels to link them together. Linked cels share the same image data, meaning that if you make changes to one linked cel, the changes are shared with all other linked cels. Keep in mind that, as of right now, linked cels are layer-local. You cannot have cels linked that belong to different layers, only different frames. Linked cels are marked with a green outline."))}u.isMDXComponent=!0},416:function(e,t,r){"use strict";t.Z=r.p+"assets/images/timeline_cels-6de71d4eeaafc5fd8723fbbbe5ab129b.png"}}]);