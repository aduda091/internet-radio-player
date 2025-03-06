parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"uX1r":[function(require,module,exports) {
var e=Object.create,t=Object.defineProperty,a=Object.getOwnPropertyDescriptor,s=Object.getOwnPropertyNames,o=Object.getPrototypeOf,r=Object.prototype.hasOwnProperty,l=(e,a,s)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[a]=s,n=(e,a)=>{for(var s in a)t(e,s,{get:a[s],enumerable:!0})},i=(e,o,l,n)=>{if(o&&"object"==typeof o||"function"==typeof o)for(let i of s(o))r.call(e,i)||i===l||t(e,i,{get:()=>o[i],enumerable:!(n=a(o,i))||n.enumerable});return e},y=(a,s,r)=>(r=null!=a?e(o(a)):{},i(!s&&a&&a.__esModule?r:t(r,"default",{value:a,enumerable:!0}),a)),p=e=>i(t({},"__esModule",{value:!0}),e),c=(e,t,a)=>(l(e,"symbol"!=typeof t?t+"":t,a),a),u={};n(u,{default:()=>E}),module.exports=p(u);var h=y(require("react")),d=require("../utils"),P=require("../patterns");const m="https://www.youtube.com/iframe_api",g="YT",f="onYouTubeIframeAPIReady",b=/[?&](?:list|channel)=([a-zA-Z0-9_-]+)/,w=/user\/([a-zA-Z0-9_-]+)\/?/,T=/youtube-nocookie\.com/,v="https://www.youtube-nocookie.com";class E extends h.Component{constructor(){super(...arguments),c(this,"callPlayer",d.callPlayer),c(this,"parsePlaylist",e=>{if(e instanceof Array)return{listType:"playlist",playlist:e.map(this.getID).join(",")};if(b.test(e)){const[,t]=e.match(b);return{listType:"playlist",list:t.replace(/^UC/,"UU")}}if(w.test(e)){const[,t]=e.match(w);return{listType:"user_uploads",list:t}}return{}}),c(this,"onStateChange",e=>{const{data:t}=e,{onPlay:a,onPause:s,onBuffer:o,onBufferEnd:r,onEnded:l,onReady:n,loop:i,config:{playerVars:y,onUnstarted:p}}=this.props,{UNSTARTED:c,PLAYING:u,PAUSED:h,BUFFERING:d,ENDED:P,CUED:m}=window[g].PlayerState;if(t===c&&p(),t===u&&(a(),r()),t===h&&s(),t===d&&o(),t===P){const e=!!this.callPlayer("getPlaylist");i&&!e&&(y.start?this.seekTo(y.start):this.play()),l()}t===m&&n()}),c(this,"mute",()=>{this.callPlayer("mute")}),c(this,"unmute",()=>{this.callPlayer("unMute")}),c(this,"ref",e=>{this.container=e})}componentDidMount(){this.props.onMount&&this.props.onMount(this)}getID(e){return!e||e instanceof Array||b.test(e)?null:e.match(P.MATCH_URL_YOUTUBE)[1]}load(e,t){const{playing:a,muted:s,playsinline:o,controls:r,loop:l,config:n,onError:i}=this.props,{playerVars:y,embedOptions:p}=n,c=this.getID(e);if(t)return b.test(e)||w.test(e)||e instanceof Array?void this.player.loadPlaylist(this.parsePlaylist(e)):void this.player.cueVideoById({videoId:c,startSeconds:(0,d.parseStartTime)(e)||y.start,endSeconds:(0,d.parseEndTime)(e)||y.end});(0,d.getSDK)(m,g,f,e=>e.loaded).then(t=>{this.container&&(this.player=new t.Player(this.container,{width:"100%",height:"100%",videoId:c,playerVars:{autoplay:a?1:0,mute:s?1:0,controls:r?1:0,start:(0,d.parseStartTime)(e),end:(0,d.parseEndTime)(e),origin:window.location.origin,playsinline:o?1:0,...this.parsePlaylist(e),...y},events:{onReady:()=>{l&&this.player.setLoop(!0),this.props.onReady()},onPlaybackRateChange:e=>this.props.onPlaybackRateChange(e.data),onPlaybackQualityChange:e=>this.props.onPlaybackQualityChange(e),onStateChange:this.onStateChange,onError:e=>i(e.data)},host:T.test(e)?v:void 0,...p}))},i),p.events&&console.warn("Using `embedOptions.events` will likely break things. Use ReactPlayer’s callback props instead, eg onReady, onPlay, onPause")}play(){this.callPlayer("playVideo")}pause(){this.callPlayer("pauseVideo")}stop(){document.body.contains(this.callPlayer("getIframe"))&&this.callPlayer("stopVideo")}seekTo(e,t=!1){this.callPlayer("seekTo",e),t||this.props.playing||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}setPlaybackRate(e){this.callPlayer("setPlaybackRate",e)}setLoop(e){this.callPlayer("setLoop",e)}getDuration(){return this.callPlayer("getDuration")}getCurrentTime(){return this.callPlayer("getCurrentTime")}getSecondsLoaded(){return this.callPlayer("getVideoLoadedFraction")*this.getDuration()}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return h.default.createElement("div",{style:t},h.default.createElement("div",{ref:this.ref}))}}c(E,"displayName","YouTube"),c(E,"canPlay",P.canPlay.youtube);
},{"react":"HdMw","../utils":"A2Lq","../patterns":"fT0p"}]},{},[], null)
//# sourceMappingURL=YouTube.e237e6aa.js.map