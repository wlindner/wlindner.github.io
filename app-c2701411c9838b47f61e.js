webpackJsonp([0xd2a57dc1d883],{94:function(n,e,o){"use strict";function t(n,e,o){var t=r.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function a(n,e,o){return r.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=a;var r=[{plugin:o(414),options:{plugins:[],trackingId:"UA-33225523-1"}},{plugin:o(416),options:{plugins:[]}},{plugin:o(418),options:{plugins:[],pathToConfigModule:"src/utils/typography"}}]},257:function(n,e,o){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(384),"component---src-templates-blog-post-js":o(390),"component---src-pages-404-js":o(386),"component---src-pages-about-js":o(387),"component---src-pages-index-js":o(388),"component---src-pages-projects-js":o(389)},e.json={"layout-index.json":o(391),"offline-plugin-app-shell-fallback.json":o(407),"my-first-two-years-at-pivotal.json":o(406),"excerpt-from-the-zahir.json":o(399),"remembering-loving-day.json":o(410),"learning-elixir.json":o(404),"excerpt-from-sapiens.json":o(398),"2016-election.json":o(392),"growing-up-in-the-christian-bubble.json":o(400),"the-death-of-an-artist-i-never-knew.json":o(411),"thoughts-on-startups.json":o(412),"instagram-made-spotsy-irrelevent.json":o(403),"react-in-your-react-native-webview-so-you-can-react-while-you-react.json":o(409),"codepen-add-and-remove.json":o(396),"moving-to-san-francisco.json":o(405),"instagram-dropping-foursquare.json":o(402),"yeoman-gateway-your-gateway-to-web-app-bliss.json":o(413),"craigslist-killed-apartmentsnearmetro-com.json":o(397),"404.json":o(393),"about.json":o(395),"index.json":o(401),"projects.json":o(408),"404-html.json":o(394)},e.layouts={"layout---index":o(385)}},258:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function a(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function r(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function u(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(2),c=t(i),l=o(8),p=t(l),f=o(168),d=t(f),m=o(66),h=t(m),g=o(94),y=o(664),j=t(y),v=function(n){var e=n.children;return c.default.createElement("div",null,e())},x=function(n){function e(o){a(this,e);var t=r(this,n.call(this)),u=o.location;return d.default.getPage(u.pathname)||(u=s({},u,{pathname:"/404.html"})),t.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},t}return u(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=d.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;d.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),d.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;h.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,g.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);x.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=x,n.exports=e.default},66:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(563),r=t(a),u=(0,r.default)();n.exports=u},259:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(93),r=o(169),u=t(r),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),r=(0,u.default)(t,e);if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r.split("?").length>1&&(r=r.split("?").slice(0,-1).join("")),s[r])return s[r];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,a.matchPath)(r,{path:n.path})||(0,a.matchPath)(r,{path:n.matchPath}))return i=n,s[r]=n,!0}else{if((0,a.matchPath)(r,{path:n.path,exact:!0}))return i=n,s[r]=n,!0;if((0,a.matchPath)(r,{path:n.path+"index.html"}))return i=n,s[r]=n,!0}return!1}),i}}},260:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(126),r=t(a),u=o(94),s=(0,u.apiRunner)("replaceHistory"),i=s[0],c=i||(0,r.default)();n.exports=c},392:function(n,e,o){o(3),n.exports=function(n){return o.e(0xf8b6c19b0b75,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(426)})})}},394:function(n,e,o){o(3),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(427)})})}},393:function(n,e,o){o(3),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(428)})})}},395:function(n,e,o){o(3),n.exports=function(n){return o.e(0xf927f8900006,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(429)})})}},396:function(n,e,o){o(3),n.exports=function(n){return o.e(0xad0681068eae,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(430)})})}},397:function(n,e,o){o(3),n.exports=function(n){return o.e(0xc6dd72a88564,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(431)})})}},398:function(n,e,o){o(3),n.exports=function(n){return o.e(0x7c7ea4e5a79c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(432)})})}},399:function(n,e,o){o(3),n.exports=function(n){return o.e(0xd7d366a0aaee,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(433)})})}},400:function(n,e,o){o(3),n.exports=function(n){return o.e(0xe910f020728a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(434)})})}},401:function(n,e,o){o(3),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(435)})})}},402:function(n,e,o){o(3),n.exports=function(n){return o.e(0x85ac3d8d8c5d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(436)})})}},403:function(n,e,o){o(3),n.exports=function(n){return o.e(84697773931159,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(437)})})}},391:function(n,e,o){o(3),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(129)})})}},404:function(n,e,o){o(3),n.exports=function(n){return o.e(0xea884a2bb80,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(438)})})}},405:function(n,e,o){o(3),n.exports=function(n){return o.e(3334303467400,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(439)})})}},406:function(n,e,o){o(3),n.exports=function(n){return o.e(75061886530025,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(440)})})}},407:function(n,e,o){o(3),n.exports=function(n){return o.e(0xbf4c176e203a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(441)})})}},408:function(n,e,o){o(3),n.exports=function(n){return o.e(97786326051841,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(442)})})}},409:function(n,e,o){o(3),n.exports=function(n){return o.e(0x6c864cec1c15,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(443)})})}},410:function(n,e,o){o(3),n.exports=function(n){return o.e(0x8400fd1b2f78,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(444)})})}},411:function(n,e,o){o(3),n.exports=function(n){return o.e(0x7d716a17942d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(445)})})}},412:function(n,e,o){o(3),n.exports=function(n){return o.e(0xc4b2efb359a9,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(446)})})}},413:function(n,e,o){o(3),n.exports=function(n){return o.e(0x98197281f55c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(447)})})}},385:function(n,e,o){o(3),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(261)})})}},168:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var a=o(2),r=(t(a),o(259)),u=t(r),s=o(66),i=t(s),c=o(169),l=t(c),p=void 0,f={},d={},m={},h={},g={},y=[],j=[],v={},x="",b=[],R={},C=function(n){return n&&n.default||n},N=void 0,w=!0,k=[],_={},P={},E=5;N=o(262)({getNextQueuedResources:function(){return b.slice(-1)[0]},createResourceDownload:function(n){L(n,function(){b=b.filter(function(e){return e!==n}),N.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){N.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){N.onPostLoadPageResources(n)});var O=function(n,e){return R[n]>R[e]?1:R[n]<R[e]?-1:0},S=function(n,e){return v[n]>v[e]?1:v[n]<v[e]?-1:0},L=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(h[e])n.nextTick(function(){o(null,h[e])});else{var t=void 0;t="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],t(function(n,t){h[e]=t,k.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),k=k.slice(-E),o(n,t)})}},A=function(e,o){g[e]?n.nextTick(function(){o(null,g[e])}):P[e]?n.nextTick(function(){o(P[e])}):L(e,function(n,t){if(n)o(n);else{var a=C(t());g[e]=a,o(n,a)}})},T=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=k.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),T()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){j=[],v={},R={},b=[],y=[],x=""},addPagesArray:function(n){y=n,p=(0,u.default)(n,x)},addDevRequires:function(n){f=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,x);if(!y.some(function(n){return n.path===e}))return!1;var o=1/M;M+=1,v[e]?v[e]+=1:v[e]=1,U.has(e)||j.unshift(e),j.sort(S);var t=p(e);return t.jsonName&&(R[t.jsonName]?R[t.jsonName]+=1+o:R[t.jsonName]=1+o,b.indexOf(t.jsonName)!==-1||h[t.jsonName]||b.unshift(t.jsonName)),t.componentChunkName&&(R[t.componentChunkName]?R[t.componentChunkName]+=1+o:R[t.componentChunkName]=1+o,b.indexOf(t.componentChunkName)!==-1||h[t.jsonName]||b.unshift(t.componentChunkName)),b.sort(O),N.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:b,resourcesCount:R}},getPages:function(){return{pathArray:j,pathCount:v}},getPage:function(n){return p(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};w&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var a;if(o){if(t>=e.length)break;a=e[t++]}else{if(t=e.next(),t.done)break;a=t.value}var r=a;r.unregister()}window.location.reload()}})),w=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return D(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,m[e])return n.nextTick(function(){o(m[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:m[e]})}),m[e];i.default.emit("onPreLoadPageResources",{path:e});var a=void 0,r=void 0,u=void 0,s=function(){if(a&&r&&(!t.layoutComponentChunkName||u)){m[e]={component:a,json:r,layout:u,page:t};var n={component:a,json:r,layout:u,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return A(t.componentChunkName,function(n,e){n&&D(t.path,"Loading the component for "+t.path+" failed"),a=e,s()}),A(t.jsonName,function(n,e){n&&D(t.path,"Loading the JSON for "+t.path+" failed"),r=e,s()}),void(t.layoutComponentChunkName&&A(t.layout,function(n,e){n&&D(t.path,"Loading the Layout for "+t.path+" failed"),u=e,s()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,o(87))},448:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"my-first-two-years-at-pivotal.json",path:"/my-first-two-years-at-pivotal/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"excerpt-from-the-zahir.json",path:"/excerpt-from-the-zahir/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"remembering-loving-day.json",path:"/remembering-loving-day/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"learning-elixir.json",path:"/learning-elixir/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"excerpt-from-sapiens.json",path:"/excerpt-from-sapiens/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"2016-election.json",path:"/2016-election/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"growing-up-in-the-christian-bubble.json",path:"/growing-up-in-the-christian-bubble/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"the-death-of-an-artist-i-never-knew.json",path:"/the-death-of-an-artist-i-never-knew/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"thoughts-on-startups.json",path:"/thoughts-on-startups/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"instagram-made-spotsy-irrelevent.json",path:"/instagram-made-spotsy-irrelevent/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"react-in-your-react-native-webview-so-you-can-react-while-you-react.json",path:"/react-in-your-react-native-webview-so-you-can-react-while-you-react/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"codepen-add-and-remove.json",path:"/codepen-add-and-remove/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"moving-to-san-francisco.json",path:"/moving-to-san-francisco/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"instagram-dropping-foursquare.json",path:"/instagram-dropping-foursquare/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"yeoman-gateway-your-gateway-to-web-app-bliss.json",path:"/yeoman-gateway-your-gateway-to-web-app-bliss/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"craigslist-killed-apartmentsnearmetro-com.json",path:"/craigslist-killed-apartmentsnearmetro-com/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-projects-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"projects.json",path:"/projects/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},262:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],a=[],r=function(){var n=e();n&&(a.push(n),o(n))},u=function(n){switch(n.type){case"RESOURCE_FINISHED":a=a.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===a.length&&0===t.length&&r()},0)};return{onResourcedFinished:function(n){u({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:a}},empty:function(){t=[],a=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},r=o(94),u=o(2),s=t(u),i=o(144),c=t(i),l=o(93),p=o(422),f=o(362),d=t(f),m=o(128),h=o(260),g=t(h),y=o(66),j=t(y),v=o(448),x=t(v),b=o(449),R=t(b),C=o(258),N=t(C),w=o(257),k=t(w),_=o(168),P=t(_);o(287),window.___history=g.default,window.___emitter=j.default,P.default.addPagesArray(x.default),P.default.addProdRequires(k.default),window.asyncRequires=k.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=R.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(g.default.replace(e.toPath),!0)};O(window.location.pathname),(0,r.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,r.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,r.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var a=n.location.pathname;if(a===o)return!1}return!0}(0,r.apiRunner)("registerServiceWorker").length>0&&o(263);var t=function(n){function e(n){n.page.path===P.default.getPage(t).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(u),window.___history.push(o))}var o=(0,m.createLocation)(n,null,null,g.default.location),t=o.pathname,a=E[t];a&&(t=a.toPath);var r=window.location;if(r.pathname!==o.pathname||r.search!==o.search||r.hash!==o.hash){var u=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:t}),window.___history.push(o)},1e3);P.default.getResourcesForPathname(t)?(clearTimeout(u),window.___history.push(o)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=t,(0,r.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var i=!1,f=(0,r.apiRunner)("replaceRouterComponent",{history:g.default})[0],h=function(n){var e=n.children;return s.default.createElement(l.Router,{history:g.default},e)},y=(0,l.withRouter)(N.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,u.createElement)(f?f:h,null,(0,u.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,u.createElement)(y,{layout:!0,children:function(e){return(0,u.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,u.createElement)(N.default,a({page:!0},t)):(0,u.createElement)(N.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,r.apiRunner)("wrapRootComponent",{Root:o},o)[0];(0,d.default)(function(){return c.default.render(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,r.apiRunner)("onInitialClientRender")})})})})},449:function(n,e){n.exports=[]},263:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(66),r=t(a),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),r.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},169:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},362:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,a="DOMContentLoaded",r=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return r||o.addEventListener(a,n=function(){for(o.removeEventListener(a,n),r=1;n=e.shift();)n()}),function(n){r?setTimeout(n,0):e.push(n)}})},3:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),a=o.e,r=o.s;o.e=function(t,u){var s=!1,i=!0,c=function(n){u&&(u(o,n),u=null)};return!r&&e&&e[t]?void c(!0):(a(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,r?r[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},414:function(n,e,o){"use strict";e.onRouteUpdate=function(n){var e=n.location;"function"==typeof ga&&(window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview"))}},384:function(n,e,o){o(3),n.exports=function(n){return o.e(99219681209289,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(415)})})}},416:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},417:function(n,e,o){n.exports=o(27)},418:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var a=o(417);t(a);e.onClientEntry=function(){}},563:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},664:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},386:function(n,e,o){o(3),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(268)})})}},387:function(n,e,o){o(3),n.exports=function(n){return o.e(0xefeaa6d1881d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(269)})})}},388:function(n,e,o){o(3),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(270)})})}},389:function(n,e,o){o(3),n.exports=function(n){return o.e(0xc260c743ec7c,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(271)})})}},390:function(n,e,o){o(3),n.exports=function(n){return o.e(0x620f737b6699,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(272)})})}}});
//# sourceMappingURL=app-c2701411c9838b47f61e.js.map