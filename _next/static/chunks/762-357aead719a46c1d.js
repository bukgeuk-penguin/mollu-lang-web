(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[762],{4184:function(e,t){var r;!function(){"use strict";var o={}.hasOwnProperty;function n(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var a=typeof r;if("string"===a||"number"===a)e.push(r);else if(Array.isArray(r)){if(r.length){var i=n.apply(null,r);i&&e.push(i)}}else if("object"===a)if(r.toString===Object.prototype.toString)for(var p in r)o.call(r,p)&&r[p]&&e.push(p);else e.push(r.toString())}}return e.join(" ")}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()},2962:function(e,t,r){"use strict";r.d(t,{PB:function(){return l}});var o=r(9008),n=r(7294);const a={templateTitle:"",noindex:!1,nofollow:!1,defaultOpenGraphImageWidth:0,defaultOpenGraphImageHeight:0,defaultOpenGraphVideoWidth:0,defaultOpenGraphVideoHeight:0},i=(e,t=[],{defaultWidth:r,defaultHeight:o}={})=>t.reduce(((t,a,i)=>(t.push(n.createElement("meta",{key:`og:${e}:0${i}`,property:`og:${e}`,content:a.url})),a.alt&&t.push(n.createElement("meta",{key:`og:${e}:alt0${i}`,property:`og:${e}:alt`,content:a.alt})),a.secureUrl&&t.push(n.createElement("meta",{key:`og:${e}:secure_url0${i}`,property:`og:${e}:secure_url`,content:a.secureUrl.toString()})),a.type&&t.push(n.createElement("meta",{key:`og:${e}:type0${i}`,property:`og:${e}:type`,content:a.type.toString()})),a.width?t.push(n.createElement("meta",{key:`og:${e}:width0${i}`,property:`og:${e}:width`,content:a.width.toString()})):r&&t.push(n.createElement("meta",{key:`og:${e}:width0${i}`,property:`og:${e}:width`,content:r.toString()})),a.height?t.push(n.createElement("meta",{key:`og:${e}:height${i}`,property:`og:${e}:height`,content:a.height.toString()})):o&&t.push(n.createElement("meta",{key:`og:${e}:height${i}`,property:`og:${e}:height`,content:o.toString()})),t)),[]),p=e=>{const t=[];e.titleTemplate&&(a.templateTitle=e.titleTemplate);let r="";e.title?(r=e.title,a.templateTitle&&(r=a.templateTitle.replace(/%s/g,(()=>r)))):e.defaultTitle&&(r=e.defaultTitle),r&&t.push(n.createElement("title",{key:"title"},r));const o=e.noindex||a.noindex||e.dangerouslySetAllPagesToNoIndex,p=e.nofollow||a.nofollow||e.dangerouslySetAllPagesToNoFollow;let l="";if(e.robotsProps){const{nosnippet:t,maxSnippet:r,maxImagePreview:o,maxVideoPreview:n,noarchive:a,noimageindex:i,notranslate:p,unavailableAfter:c}=e.robotsProps;l=`${t?",nosnippet":""}${r?`,max-snippet:${r}`:""}${o?`,max-image-preview:${o}`:""}${a?",noarchive":""}${c?`,unavailable_after:${c}`:""}${i?",noimageindex":""}${n?`,max-video-preview:${n}`:""}${p?",notranslate":""}`}if(o||p?(e.dangerouslySetAllPagesToNoIndex&&(a.noindex=!0),e.dangerouslySetAllPagesToNoFollow&&(a.nofollow=!0),t.push(n.createElement("meta",{key:"robots",name:"robots",content:`${o?"noindex":"index"},${p?"nofollow":"follow"}${l}`}))):t.push(n.createElement("meta",{key:"robots",name:"robots",content:`index,follow${l}`})),e.description&&t.push(n.createElement("meta",{key:"description",name:"description",content:e.description})),e.mobileAlternate&&t.push(n.createElement("link",{rel:"alternate",key:"mobileAlternate",media:e.mobileAlternate.media,href:e.mobileAlternate.href})),e.languageAlternates&&e.languageAlternates.length>0&&e.languageAlternates.forEach((e=>{t.push(n.createElement("link",{rel:"alternate",key:`languageAlternate-${e.hrefLang}`,hrefLang:e.hrefLang,href:e.href}))})),e.twitter&&(e.twitter.cardType&&t.push(n.createElement("meta",{key:"twitter:card",name:"twitter:card",content:e.twitter.cardType})),e.twitter.site&&t.push(n.createElement("meta",{key:"twitter:site",name:"twitter:site",content:e.twitter.site})),e.twitter.handle&&t.push(n.createElement("meta",{key:"twitter:creator",name:"twitter:creator",content:e.twitter.handle}))),e.facebook&&e.facebook.appId&&t.push(n.createElement("meta",{key:"fb:app_id",property:"fb:app_id",content:e.facebook.appId})),(e.openGraph?.title||r)&&t.push(n.createElement("meta",{key:"og:title",property:"og:title",content:e.openGraph?.title||r})),(e.openGraph?.description||e.description)&&t.push(n.createElement("meta",{key:"og:description",property:"og:description",content:e.openGraph?.description||e.description})),e.openGraph){if((e.openGraph.url||e.canonical)&&t.push(n.createElement("meta",{key:"og:url",property:"og:url",content:e.openGraph.url||e.canonical})),e.openGraph.type){const r=e.openGraph.type.toLowerCase();t.push(n.createElement("meta",{key:"og:type",property:"og:type",content:r})),"profile"===r&&e.openGraph.profile?(e.openGraph.profile.firstName&&t.push(n.createElement("meta",{key:"profile:first_name",property:"profile:first_name",content:e.openGraph.profile.firstName})),e.openGraph.profile.lastName&&t.push(n.createElement("meta",{key:"profile:last_name",property:"profile:last_name",content:e.openGraph.profile.lastName})),e.openGraph.profile.username&&t.push(n.createElement("meta",{key:"profile:username",property:"profile:username",content:e.openGraph.profile.username})),e.openGraph.profile.gender&&t.push(n.createElement("meta",{key:"profile:gender",property:"profile:gender",content:e.openGraph.profile.gender}))):"book"===r&&e.openGraph.book?(e.openGraph.book.authors&&e.openGraph.book.authors.length&&e.openGraph.book.authors.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`book:author:0${r}`,property:"book:author",content:e}))})),e.openGraph.book.isbn&&t.push(n.createElement("meta",{key:"book:isbn",property:"book:isbn",content:e.openGraph.book.isbn})),e.openGraph.book.releaseDate&&t.push(n.createElement("meta",{key:"book:release_date",property:"book:release_date",content:e.openGraph.book.releaseDate})),e.openGraph.book.tags&&e.openGraph.book.tags.length&&e.openGraph.book.tags.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`book:tag:0${r}`,property:"book:tag",content:e}))}))):"article"===r&&e.openGraph.article?(e.openGraph.article.publishedTime&&t.push(n.createElement("meta",{key:"article:published_time",property:"article:published_time",content:e.openGraph.article.publishedTime})),e.openGraph.article.modifiedTime&&t.push(n.createElement("meta",{key:"article:modified_time",property:"article:modified_time",content:e.openGraph.article.modifiedTime})),e.openGraph.article.expirationTime&&t.push(n.createElement("meta",{key:"article:expiration_time",property:"article:expiration_time",content:e.openGraph.article.expirationTime})),e.openGraph.article.authors&&e.openGraph.article.authors.length&&e.openGraph.article.authors.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`article:author:0${r}`,property:"article:author",content:e}))})),e.openGraph.article.section&&t.push(n.createElement("meta",{key:"article:section",property:"article:section",content:e.openGraph.article.section})),e.openGraph.article.tags&&e.openGraph.article.tags.length&&e.openGraph.article.tags.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`article:tag:0${r}`,property:"article:tag",content:e}))}))):"video.movie"!==r&&"video.episode"!==r&&"video.tv_show"!==r&&"video.other"!==r||!e.openGraph.video||(e.openGraph.video.actors&&e.openGraph.video.actors.length&&e.openGraph.video.actors.forEach(((e,r)=>{e.profile&&t.push(n.createElement("meta",{key:`video:actor:0${r}`,property:"video:actor",content:e.profile})),e.role&&t.push(n.createElement("meta",{key:`video:actor:role:0${r}`,property:"video:actor:role",content:e.role}))})),e.openGraph.video.directors&&e.openGraph.video.directors.length&&e.openGraph.video.directors.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`video:director:0${r}`,property:"video:director",content:e}))})),e.openGraph.video.writers&&e.openGraph.video.writers.length&&e.openGraph.video.writers.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`video:writer:0${r}`,property:"video:writer",content:e}))})),e.openGraph.video.duration&&t.push(n.createElement("meta",{key:"video:duration",property:"video:duration",content:e.openGraph.video.duration.toString()})),e.openGraph.video.releaseDate&&t.push(n.createElement("meta",{key:"video:release_date",property:"video:release_date",content:e.openGraph.video.releaseDate})),e.openGraph.video.tags&&e.openGraph.video.tags.length&&e.openGraph.video.tags.forEach(((e,r)=>{t.push(n.createElement("meta",{key:`video:tag:0${r}`,property:"video:tag",content:e}))})),e.openGraph.video.series&&t.push(n.createElement("meta",{key:"video:series",property:"video:series",content:e.openGraph.video.series})))}e.defaultOpenGraphImageWidth&&(a.defaultOpenGraphImageWidth=e.defaultOpenGraphImageWidth),e.defaultOpenGraphImageHeight&&(a.defaultOpenGraphImageHeight=e.defaultOpenGraphImageHeight),e.openGraph.images&&e.openGraph.images.length&&t.push(...i("image",e.openGraph.images,{defaultWidth:a.defaultOpenGraphImageWidth,defaultHeight:a.defaultOpenGraphImageHeight})),e.defaultOpenGraphVideoWidth&&(a.defaultOpenGraphVideoWidth=e.defaultOpenGraphVideoWidth),e.defaultOpenGraphVideoHeight&&(a.defaultOpenGraphVideoHeight=e.defaultOpenGraphVideoHeight),e.openGraph.videos&&e.openGraph.videos.length&&t.push(...i("video",e.openGraph.videos,{defaultWidth:a.defaultOpenGraphVideoWidth,defaultHeight:a.defaultOpenGraphVideoHeight})),e.openGraph.locale&&t.push(n.createElement("meta",{key:"og:locale",property:"og:locale",content:e.openGraph.locale})),e.openGraph.site_name&&t.push(n.createElement("meta",{key:"og:site_name",property:"og:site_name",content:e.openGraph.site_name}))}return e.canonical&&t.push(n.createElement("link",{rel:"canonical",href:e.canonical,key:"canonical"})),e.additionalMetaTags&&e.additionalMetaTags.length>0&&e.additionalMetaTags.forEach((e=>{t.push(n.createElement("meta",{key:`meta:${e.keyOverride??e.name??e.property??e.httpEquiv}`,...e}))})),e.additionalLinkTags?.length&&e.additionalLinkTags.forEach((e=>{t.push(n.createElement("link",{key:`link${e.keyOverride??e.href}${e.rel}`,...e}))})),t};class l extends n.Component{render(){const{title:e,noindex:t=!1,nofollow:r,robotsProps:a,description:i,canonical:l,openGraph:c,facebook:s,twitter:u,additionalMetaTags:h,titleTemplate:d,mobileAlternate:f,languageAlternates:m,additionalLinkTags:g}=this.props;return n.createElement(o.default,null,p({title:e,noindex:t,nofollow:r,robotsProps:a,description:i,canonical:l,facebook:s,openGraph:c,additionalMetaTags:h,twitter:u,titleTemplate:d,mobileAlternate:f,languageAlternates:m,additionalLinkTags:g}))}}},8418:function(e,t,r){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,a=[],i=!0,p=!1;try{for(r=r.call(e);!(i=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(l){p=!0,n=l}finally{try{i||null==r.return||r.return()}finally{if(p)throw n}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,i=(a=r(7294))&&a.__esModule?a:{default:a},p=r(6273),l=r(387),c=r(7190);var s={};function u(e,t,r,o){if(e&&p.isLocalURL(t)){e.prefetch(t,r,o).catch((function(e){0}));var n=o&&"undefined"!==typeof o.locale?o.locale:e&&e.locale;s[t+"%"+r+(n?"%"+n:"")]=!0}}var h=function(e){var t,r=!1!==e.prefetch,o=l.useRouter(),a=i.default.useMemo((function(){var t=n(p.resolveHref(o,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?p.resolveHref(o,e.as):a||r}}),[o,e.href,e.as]),h=a.href,d=a.as,f=e.children,m=e.replace,g=e.shallow,y=e.scroll,v=e.locale;"string"===typeof f&&(f=i.default.createElement("a",null,f));var k=(t=i.default.Children.only(f))&&"object"===typeof t&&t.ref,G=n(c.useIntersection({rootMargin:"200px"}),2),b=G[0],E=G[1],w=i.default.useCallback((function(e){b(e),k&&("function"===typeof k?k(e):"object"===typeof k&&(k.current=e))}),[k,b]);i.default.useEffect((function(){var e=E&&r&&p.isLocalURL(h),t="undefined"!==typeof v?v:o&&o.locale,n=s[h+"%"+d+(t?"%"+t:"")];e&&!n&&u(o,h,d,{locale:t})}),[d,h,E,v,r,o]);var $={ref:w,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,o,n,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&p.isLocalURL(r))&&(e.preventDefault(),null==i&&o.indexOf("#")>=0&&(i=!1),t[n?"replace":"push"](r,o,{shallow:a,locale:l,scroll:i}))}(e,o,h,d,m,g,y,v)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),p.isLocalURL(h)&&u(o,h,d,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var T="undefined"!==typeof v?v:o&&o.locale,x=o&&o.isLocaleDomain&&p.getDomainLocale(d,T,o&&o.locales,o&&o.domainLocales);$.href=x||p.addBasePath(p.addLocale(d,T,o&&o.defaultLocale))}return i.default.cloneElement(t,$)};t.default=h},7190:function(e,t,r){"use strict";function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var o,n,a=[],i=!0,p=!1;try{for(r=r.call(e);!(i=(o=r.next()).done)&&(a.push(o.value),!t||a.length!==t);i=!0);}catch(l){p=!0,n=l}finally{try{i||null==r.return||r.return()}finally{if(p)throw n}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,o=e.disabled||!p,c=a.useRef(),s=n(a.useState(!1),2),u=s[0],h=s[1],d=n(a.useState(t?t.current:null),2),f=d[0],m=d[1],g=a.useCallback((function(e){c.current&&(c.current(),c.current=void 0),o||u||e&&e.tagName&&(c.current=function(e,t,r){var o=function(e){var t=e.rootMargin||"",r=l.get(t);if(r)return r;var o=new Map,n=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return l.set(t,r={id:t,observer:n,elements:o}),r}(r),n=o.id,a=o.observer,i=o.elements;return i.set(e,t),a.observe(e),function(){i.delete(e),a.unobserve(e),0===i.size&&(a.disconnect(),l.delete(n))}}(e,(function(e){return e&&h(e)}),{root:f,rootMargin:r}))}),[o,f,r,u]);return a.useEffect((function(){if(!p&&!u){var e=i.requestIdleCallback((function(){return h(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[u]),a.useEffect((function(){t&&m(t.current)}),[t]),[g,u]};var a=r(7294),i=r(9311),p="undefined"!==typeof IntersectionObserver;var l=new Map},1664:function(e,t,r){e.exports=r(8418)},1163:function(e,t,r){e.exports=r(387)}}]);