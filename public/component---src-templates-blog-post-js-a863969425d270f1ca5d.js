(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"0mN4":function(e,t,r){"use strict";r("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"6VaU":function(e,t,r){"use strict";var a=r("XKFU"),i=r("xF/b"),n=r("S/j/"),s=r("ne8i"),o=r("2OiF"),l=r("zRwo");a(a.P,"Array",{flatMap:function(e){var t,r,a=n(this);return o(e),t=s(a.length),r=l(a,0),i(r,a,a,t,0,1,e,arguments[1]),r}}),r("nGyu")("flatMap")},"7VC1":function(e,t,r){"use strict";var a=r("XKFU"),i=r("Lgjv"),n=r("ol8x"),s=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);a(a.P+a.F*s,"String",{padEnd:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!1)}})},"9XZr":function(e,t,r){"use strict";var a=r("XKFU"),i=r("Lgjv"),n=r("ol8x"),s=/Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(n);a(a.P+a.F*s,"String",{padStart:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0,!0)}})},"9eSz":function(e,t,r){"use strict";r("rGqo"),r("yt8O"),r("Btvt"),r("XfO3"),r("EK0E"),r("INYr"),r("0mN4");var a=r("TqRt");t.__esModule=!0,t.default=void 0;var i,n=a(r("PJYZ")),s=a(r("VbXa")),o=a(r("8OQS")),l=a(r("pVnL")),d=a(r("q1tI")),u=a(r("17x9")),c=function(e){var t=(0,l.default)({},e),r=t.resolutions,a=t.sizes,i=t.critical;return r&&(t.fixed=r,delete t.resolutions),a&&(t.fluid=a,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},p=function(e){var t=e.fluid,r=e.fixed;return g(t||r).src},g=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var r=e.findIndex((function(e){return void 0===e.media}));if(-1!==r)return e[r]}return e[0]},h=Object.create({}),m=function(e){var t=c(e),r=p(t);return h[r]||!1},v="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,b=y&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},a&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:a,sizes:n}),d.default.createElement("source",{media:i,srcSet:r,sizes:n}))}))}function w(e){var t=[],r=[];return e.forEach((function(e){return(e.media?t:r).push(e)})),[].concat(t,r)}function L(e){return e.map((function(e){var t=e.src,r=e.media,a=e.tracedSVG;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function R(e){return e.map((function(e){var t=e.src,r=e.media,a=e.base64;return d.default.createElement("source",{key:t,media:r,srcSet:a})}))}function O(e,t){var r=e.srcSet,a=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?a:r)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var r=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return r&&(r.observe(e),S.set(e,t)),function(){r.unobserve(e),S.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',r=e.sizes?'sizes="'+e.sizes+'" ':"",a=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?O(e,!0):"")+O(e)})).join("")+"<img "+d+s+o+r+a+t+n+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},x=d.default.forwardRef((function(e,t){var r=e.src,a=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(k,(0,l.default)({ref:t,src:r},n,{ariaHidden:s}));return a.length>1?d.default.createElement("picture",null,i(a),o):o})),k=d.default.forwardRef((function(e,t){var r=e.sizes,a=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,c=e.loading,f=e.draggable,p=e.ariaHidden,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":p,sizes:r,srcSet:a,src:i},g,{onLoad:s,onError:u,ref:t,loading:c,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));k.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var P=function(e){function t(t){var r;(r=e.call(this,t)||this).seenBefore=y&&m(t),r.isCritical="eager"===t.loading||t.critical,r.addNoScript=!(r.isCritical&&!t.fadeIn),r.useIOSupport=!v&&b&&!r.isCritical&&!r.seenBefore;var a=r.isCritical||y&&(v||!r.useIOSupport);return r.state={isVisible:a,imgLoaded:!1,imgCached:!1,fadeIn:!r.seenBefore&&t.fadeIn},r.imageRef=d.default.createRef(),r.placeholderRef=t.placeholderRef||d.default.createRef(),r.handleImageLoaded=r.handleImageLoaded.bind((0,n.default)(r)),r.handleRef=r.handleRef.bind((0,n.default)(r)),r}(0,s.default)(t,e);var r=t.prototype;return r.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:m(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},r.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},r.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=m(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},r.handleImageLoaded=function(){var e,t,r;e=this.props,t=c(e),r=p(t),h[r]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},r.render=function(){var e=c(this.props),t=e.title,r=e.alt,a=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,f=void 0===u?{}:u,p=e.placeholderClassName,h=e.fluid,m=e.fixed,v=e.backgroundColor,y=e.durationFadeIn,b=e.Tag,S=e.itemProp,w=e.loading,O=e.draggable,I=!1===this.state.fadeIn||this.state.imgLoaded,P=!0===this.state.fadeIn&&!this.state.imgCached,F=(0,l.default)({opacity:I?1:0,transition:P?"opacity "+y+"ms":"none"},o),C="boolean"==typeof v?"lightgray":v,V={transitionDelay:y+"ms"},z=(0,l.default)((0,l.default)((0,l.default)({opacity:this.state.imgLoaded?0:1},P&&V),o),f),j={title:t,alt:this.state.isVisible?"":r,style:z,className:p,itemProp:S};if(h){var _=h,M=g(h);return d.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(M.srcSet)},d.default.createElement(b,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/M.aspectRatio+"%"}}),C&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},P&&V)}),M.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:M.base64,spreadProps:j,imageVariants:_,generateSources:R}),M.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:M.tracedSVG,spreadProps:j,imageVariants:_,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,E(_),d.default.createElement(k,{alt:r,title:t,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:F,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)((0,l.default)({alt:r,title:t,loading:w},M),{},{imageVariants:_}))}}))}if(m){var T=m,q=g(m),U=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:q.width,height:q.height},n);return"inherit"===n.display&&delete U.display,d.default.createElement(b,{className:(a||"")+" gatsby-image-wrapper",style:U,ref:this.handleRef,key:"fixed-"+JSON.stringify(q.srcSet)},C&&d.default.createElement(b,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:q.width,opacity:this.state.imgLoaded?0:1,height:q.height},P&&V)}),q.base64&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:q.base64,spreadProps:j,imageVariants:T,generateSources:R}),q.tracedSVG&&d.default.createElement(x,{ariaHidden:!0,ref:this.placeholderRef,src:q.tracedSVG,spreadProps:j,imageVariants:T,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,E(T),d.default.createElement(k,{alt:r,title:t,width:q.width,height:q.height,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:F,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:O})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)((0,l.default)({alt:r,title:t,loading:w},q),{},{imageVariants:T}))}}))}return null},t}(d.default.Component);P.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var F=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),C=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string});P.propTypes={resolutions:F,sizes:C,fixed:u.default.oneOfType([F,u.default.arrayOf(F)]),fluid:u.default.oneOfType([C,u.default.arrayOf(C)]),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var V=P;t.default=V},AphP:function(e,t,r){"use strict";var a=r("XKFU"),i=r("S/j/"),n=r("apmT");a(a.P+a.F*r("eeVq")((function(){return null!==new Date(NaN).toJSON()||1!==Date.prototype.toJSON.call({toISOString:function(){return 1}})})),"Date",{toJSON:function(e){var t=i(this),r=n(t);return"number"!=typeof r||isFinite(r)?t.toISOString():null}})},EH9Q:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Aubrey Yung","description":"A Hong Kong girl exploring the wonderland in Estonia.","author":"Aubrey Yung"}}}}')},EK0E:function(e,t,r){"use strict";var a,i=r("dyZX"),n=r("CkkT")(0),s=r("KroJ"),o=r("Z6vF"),l=r("czNK"),d=r("ZD67"),u=r("0/R4"),c=r("s5qY"),f=r("s5qY"),p=!i.ActiveXObject&&"ActiveXObject"in i,g=o.getWeak,h=Object.isExtensible,m=d.ufstore,v=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},y={get:function(e){if(u(e)){var t=g(e);return!0===t?m(c(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return d.def(c(this,"WeakMap"),e,t)}},b=e.exports=r("4LiD")("WeakMap",v,y,d,!0,!0);f&&p&&(l((a=d.getConstructor(v,"WeakMap")).prototype,y),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=b.prototype,r=t[e];s(t,e,(function(t,i){if(u(t)&&!h(t)){this._f||(this._f=new a);var n=this._f[e](t,i);return"set"==e?this:n}return r.call(this,t,i)}))})))},FLlr:function(e,t,r){var a=r("XKFU");a(a.P,"String",{repeat:r("l0Rn")})},I74W:function(e,t,r){"use strict";r("qncB")("trimLeft",(function(e){return function(){return e(this,1)}}),"trimStart")},INYr:function(e,t,r){"use strict";var a=r("XKFU"),i=r("CkkT")(6),n="findIndex",s=!0;n in[]&&Array(1)[n]((function(){s=!1})),a(a.P+a.F*s,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("nGyu")(n)},Lgjv:function(e,t,r){var a=r("ne8i"),i=r("l0Rn"),n=r("vhPU");e.exports=function(e,t,r,s){var o=String(n(e)),l=o.length,d=void 0===r?" ":String(r),u=a(t);if(u<=l||""==d)return o;var c=u-l,f=i.call(d,Math.ceil(c/d.length));return f.length>c&&(f=f.slice(0,c)),s?f+o:o+f}},Nr18:function(e,t,r){"use strict";var a=r("S/j/"),i=r("d/Gc"),n=r("ne8i");e.exports=function(e){for(var t=a(this),r=n(t.length),s=arguments.length,o=i(s>1?arguments[1]:void 0,r),l=s>2?arguments[2]:void 0,d=void 0===l?r:i(l,r);d>o;)t[o++]=e;return t}},OGtf:function(e,t,r){var a=r("XKFU"),i=r("eeVq"),n=r("vhPU"),s=/"/g,o=function(e,t,r,a){var i=String(n(e)),o="<"+t;return""!==r&&(o+=" "+r+'="'+String(a).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var r={};r[e]=t(o),a(a.P+a.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",r)}},SPin:function(e,t,r){"use strict";var a=r("XKFU"),i=r("eyMr");a(a.P+a.F*!r("LyE8")([].reduceRight,!0),"Array",{reduceRight:function(e){return i(this,e,arguments.length,arguments[1],!0)}})},Tze0:function(e,t,r){"use strict";r("qncB")("trim",(function(e){return function(){return e(this,3)}}))},YuTi:function(e,t,r){r("HAE/"),e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},ZD67:function(e,t,r){"use strict";var a=r("3Lyj"),i=r("Z6vF").getWeak,n=r("y3w9"),s=r("0/R4"),o=r("9gX7"),l=r("SlkY"),d=r("CkkT"),u=r("aagx"),c=r("s5qY"),f=d(5),p=d(6),g=0,h=function(e){return e._l||(e._l=new m)},m=function(){this.a=[]},v=function(e,t){return f(e.a,(function(e){return e[0]===t}))};m.prototype={get:function(e){var t=v(this,e);if(t)return t[1]},has:function(e){return!!v(this,e)},set:function(e,t){var r=v(this,e);r?r[1]=t:this.a.push([e,t])},delete:function(e){var t=p(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,r,n){var d=e((function(e,a){o(e,d,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=a&&l(a,r,e[n],e)}));return a(d.prototype,{delete:function(e){if(!s(e))return!1;var r=i(e);return!0===r?h(c(this,t)).delete(e):r&&u(r,this._i)&&delete r[this._i]},has:function(e){if(!s(e))return!1;var r=i(e);return!0===r?h(c(this,t)).has(e):r&&u(r,this._i)}}),d},def:function(e,t,r){var a=i(n(t),!0);return!0===a?h(e).set(t,r):a[e._i]=r,e},ufstore:h}},bHtr:function(e,t,r){var a=r("XKFU");a(a.P,"Array",{fill:r("Nr18")}),r("nGyu")("fill")},fA63:function(e,t,r){"use strict";r("qncB")("trimRight",(function(e){return function(){return e(this,2)}}),"trimEnd")},l0Rn:function(e,t,r){"use strict";var a=r("RYi7"),i=r("vhPU");e.exports=function(e){var t=String(i(this)),r="",n=a(e);if(n<0||n==1/0)throw RangeError("Count can't be negative");for(;n>0;(n>>>=1)&&(t+=t))1&n&&(r+=t);return r}},mGWK:function(e,t,r){"use strict";var a=r("XKFU"),i=r("aCFj"),n=r("RYi7"),s=r("ne8i"),o=[].lastIndexOf,l=!!o&&1/[1].lastIndexOf(1,-0)<0;a(a.P+a.F*(l||!r("LyE8")(o)),"Array",{lastIndexOf:function(e){if(l)return o.apply(this,arguments)||0;var t=i(this),r=s(t.length),a=r-1;for(arguments.length>1&&(a=Math.min(a,n(arguments[1]))),a<0&&(a=r+a);a>=0;a--)if(a in t&&t[a]===e)return a||0;return-1}})},vrFN:function(e,t,r){"use strict";var a=r("EH9Q"),i=r("q1tI"),n=r.n(i),s=r("TJpk"),o=r.n(s);function l(e){var t=e.description,r=e.lang,i=e.meta,s=e.title,l=a.data.site,d=t||l.siteMetadata.description;return n.a.createElement(o.a,{htmlAttributes:{lang:r},title:s,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:s},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:l.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:d}].concat(i)})}l.defaultProps={lang:"en",meta:[],description:""},t.a=l},"xF/b":function(e,t,r){"use strict";var a=r("EWmC"),i=r("0/R4"),n=r("ne8i"),s=r("m0Pp"),o=r("K0xU")("isConcatSpreadable");e.exports=function e(t,r,l,d,u,c,f,p){for(var g,h,m=u,v=0,y=!!f&&s(f,p,3);v<d;){if(v in l){if(g=y?y(l[v],v,r):l[v],h=!1,i(g)&&(h=void 0!==(h=g[o])?!!h:a(g)),h&&c>0)m=e(t,r,g,n(g.length),m,c-1)-1;else{if(m>=9007199254740991)throw TypeError();t[m]=g}m++}v++}return m}},yZlL:function(e,t,r){"use strict";r.r(t),r.d(t,"pageQuery",(function(){return f}));var a=r("q1tI"),i=r.n(a),n=r("Wbzz"),s=r("LvDl"),o=r("9eSz"),l=r.n(o),d=r("Bl7J"),u=r("vrFN");var c=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props.data.markdownRemark,t=this.props.pageContext;t.previous,t.next;return i.a.createElement(d.a,null,i.a.createElement(u.a,{title:e.frontmatter.title,description:e.excerpt}),i.a.createElement("article",{className:"article-page"},i.a.createElement("div",{className:"page-content"},e.frontmatter.img&&i.a.createElement("div",{className:"page-cover-image"},i.a.createElement("figure",null,i.a.createElement(l.a,{className:"page-image",key:e.frontmatter.img.childImageSharp.fluid.src,fluid:e.frontmatter.img.childImageSharp.fluid}))),i.a.createElement("div",{className:"wrap-content"},i.a.createElement("header",{className:"header-page"},i.a.createElement("h1",{className:"page-title"},e.frontmatter.title),i.a.createElement("div",{className:"page-date"},i.a.createElement("span",null,e.frontmatter.date))),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),i.a.createElement("div",{className:"page-footer"},i.a.createElement("div",{className:"page-tag"},e.frontmatter.tags&&e.frontmatter.tags.map((function(e){return i.a.createElement("span",{key:e},i.a.createElement(n.Link,{className:"tag",to:"/tags/"+Object(s.kebabCase)(e)+"/"},"# ",e))}))))))))},a}(i.a.Component);t.default=c;var f="1317485692"}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-a863969425d270f1ca5d.js.map