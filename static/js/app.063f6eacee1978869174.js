webpackJsonp([1],[,,,,,,,,,,,,,,,,function(t,e,a){function n(t){a(103)}var i=a(3)(a(49),a(129),n,"data-v-4fac481c",null);t.exports=i.exports},,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,a){"use strict";var n=a(58),i=a.n(n),o=a(17),s=a(134),r=a(122),l=a.n(r),c=a(124),d=a.n(c),f=a(123),u=a.n(f),h=a(121),v=a.n(h);o.a.use(s.a),window.history.scrollRestoration="manual",e.a=new s.a({scrollBehavior:function(t,e,a){return new i.a(function(t){setTimeout(function(){t(e.hash?{selector:e.hash}:a?a:{x:0,y:0})},300)})},routes:[{path:"/",name:"hello",component:l.a,meta:{tab:0}},{path:"/works",name:"works",component:d.a,meta:{tab:1}},{path:"/work/:slug",name:"work",component:u.a,meta:{tab:1.1}},{path:"/contact",name:"contact",component:v.a,meta:{tab:2}}]})},function(t,e,a){"use strict";var n=a(17),i=a(136),o=a(115);n.a.use(i.a);var s=new i.a.Store({state:{works:null},mutations:{SET_WORKS_DATA:function(t,e){t.works=e}},actions:{INIT:function(t){var e=(t.commit,t.dispatch);t.state;e("FETCH_WORKS_DATA")},FETCH_WORKS_DATA:function(t){var e=t.commit;t.dispatch,t.state;a.i(o.a)().then(function(t){e("SET_WORKS_DATA",t.results)}).catch(function(t){console.log(t)})}}});e.a=s},function(t,e,a){function n(t){a(98),a(99)}var i=a(3)(a(48),a(125),n,"data-v-089871c2",null);t.exports=i.exports},,function(t,e,a){"use strict";function n(t){var e=new s.Vector3,a=w.domElement,n=t.x,i=t.y,o=t.z;return e.set(n,i,o),e.project(m),{x:Math.round((e.x+1)*(a.width/2)),y:Math.round((1-e.y)*(a.height/2))}}var i=a(27),o=a.n(i),s=a(112),r=(a.n(s),a(117)),l=a.n(r),c=50,d=14,f=void 0,u=void 0,h=0,v=void 0,m=void 0,p=void 0,w=void 0,x={},b=function(){},g={},_={},C=void 0;"undefined"!=typeof window&&(_={width:window.innerWidth,height:window.innerHeight,fov:30}),e.a={init:function(t,e){function a(){m.position.set(0,240,1e3),m.lookAt(new s.Vector3(0,120,0));for(var t=0,e=0;e<c;e+=1)for(var a=0;a<d;a+=1){u=f[t];var n=Math.sin(.3*(e+h)),i=Math.sin(.5*(a+h));u.position.y=50*(n+i);var o=3*(n+1+i+1)+3;u.scale.x=o,u.scale.y=o,t+=1}w.render(v,m),h+=.1,b()}function n(){p=requestAnimationFrame(n),a()}x=e,o()(g,_,x),c=Math.round(window.innerWidth/10),c%2!=0&&(c+=1),v=new s.Scene,v.fog=new s.Fog(g.fogColor,1e3,2800);var i=g.width/g.height;m=new s.PerspectiveCamera(g.fov,i,1,1e4),f=[];var r=(new s.TextureLoader).load(l.a);C=new s.SpriteMaterial({map:r,color:g.dotColor,fog:!0});for(var k=0,y=0;y<c;y+=1)for(var O=0;O<d;O+=1)f[k]=new s.Sprite(C),u=f[k],u.position.x=120*y-120*(c-1)/2,u.position.z=120*O-120*(d-1)/1,v.add(u),k+=1;w=new s.WebGLRenderer({alpha:!0}),w.setClearColor(16777215,0),w.setPixelRatio(window.devicePixelRatio),w.setSize(g.width,g.height),t.appendChild(w.domElement),window.renderer=w,n(),window.addEventListener("resize",this.resize)},getCurveArray:function(){for(var t=[],e=0;e<c;e+=1){var a=f[e*d+(d-3)],i=n(a.position),o=i.x,s=i.y;t.push([o,s])}return t},destroy:function(){cancelAnimationFrame(p),v=null,w=null,window.removeEventListener("resize",this.resize)},resize:function(){_.width=window.innerWidth,_.height=window.innerHeight,o()(g,_,x),w.setSize(g.width,g.height),w.setPixelRatio(window.devicePixelRatio);var t=g.width/g.height;m=new s.PerspectiveCamera(g.fov,t,1,1e4)},onUpdate:function(t){b=t},changeDotColor:function(t){C.color.setHex(t)},changeFogColor:function(t){v.fog.color.setHex(t)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(118),i=a.n(n),o=a(16),s=a.n(o);e.default={components:{WebsiteHeader:i.a,WebsiteFooter:s.a},watch:{$route:function(t,e){void 0!==e.meta.tab&&(this.transitionName=e.meta.tab<=t.meta.tab?"out-left":"out-right")}},data:function(){return{transitionName:"fade"}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"footer",components:{},mounted:function(){},data:function(){return{}}}},function(t,e,a){"use strict";function n(t,e){return Math.sqrt(Math.pow(t[0]-e[0],2)+Math.pow(t[1]-e[1],2))}function i(t){for(var e=0,a=1;a<t.length;a+=1)e+=n(t[a-1],t[a]);return e/window.devicePixelRatio}function o(t,e,a){for(var i=0,o=0;i<e;)i+=n(t[o],t[o+1]),o+=1;for(var s=o-1,r=i-e;i<a;)i+=n(t[o],t[o+1]),o+=1;var l=o-1,c=i-a,d=n(t[s],t[s+1]),f=(d-r)/d;t[s][0]+=(t[s+1][0]-t[s][0])*f,t[s][1]+=(t[s+1][1]-t[s][1])*f;var u=n(t[l],t[l+1]),h=(u-c)/u;return t[l+1][0]=t[l][0]+(t[l+1][0]-t[l][0])*h,t[l+1][1]=t[l][1]+(t[l+1][1]-t[l][1])*h,t.slice(s,l+2)}function s(t){var e=window.devicePixelRatio,a="M ";a+=t[0][0]/e+" "+t[0][1]/e;for(var n=1;n<t.length;n+=1)a+=" L "+t[n][0]/e+" "+t[n][1]/e;return a}function r(t){this.smoothing=.09,this.oldValue=t,r.prototype.newValue=function(t){var e=this.oldValue+(t-this.oldValue)*this.smoothing;return Math.abs(e-t)<.1&&(e=t),this.oldValue=e,e}}function l(t,e){var a=document.createElement("span");f()(a.style,e),a.innerHTML=t,document.body.appendChild(a);var n=a.offsetWidth;return document.body.removeChild(a),n}function c(){var t=Math.min(window.innerWidth,window.innerHeight);return.8*(t>512?512:t)/2/1.3}Object.defineProperty(e,"__esModule",{value:!0});var d=a(27),f=a.n(d),u=a(42),h=a.n(u),v=a(47);e.default={name:"mobile-header",mounted:function(){function t(t){var e={fontSize:"13px",textTransform:"uppercase",fontFamily:"FFMark",fontWeight:"bold"};return l(t.innerHTML,e)}function e(){var e=t(this.$refs.tab_0),a=t(this.$refs.tab_1),n=t(this.$refs.tab_2);this.tabTextWidth=[e,a,n]}var a=this;new h.a("FFMark",{weight:"bold"}).load().then(function(){return e.call(a)});var n=new r(this.tabTextWidth[this.tabIndex]),d=new r(this.tabTextOffset[this.tabIndex]);v.a.init(this.$refs.canvas_wrapper,{height:120,dotColor:window.innerWidth<=769?16777215:0,fogColor:window.innerWidth<=769?0:16777215}),v.a.onUpdate(function(){var t=c();a.tabTextOffset=[-t,0,t];var e=v.a.getCurveArray(),r=s(e),l=i(e);a.pathLength=l;var f=window.devicePixelRatio,u=a.tabTextWidth[a.tabIndex];u=n.newValue(u);var h=a.tabTextOffset[a.tabIndex];h=d.newValue(h),l*=f,u*=f,h*=f;var m=o(e,l/2+h-u/2,l/2+h+u/2);m=m.map(function(t){return t[1]+=10,t}),a.underline=s(m),a.path=r,window.addEventListener("resize",a.adaptDotWaveColor)}),this.mql=window.matchMedia("(min-aspect-ratio: 4/3)"),this.mql.addListener(this.adaptDotWaveColor)},methods:{click:function(){},adaptDotWaveColor:function(){0===this.$route.meta.tab?(v.a.changeDotColor(this.mql.matches?0:16777215),v.a.changeFogColor(this.mql.matches?16777215:0)):(v.a.changeDotColor(0),v.a.changeFogColor(16777215))},click_about:function(){this.$router.replace({name:"hello"})},click_work:function(){this.$router.replace({name:"works"})},click_contact:function(){this.$router.replace({name:"contact"})}},computed:{tabIndex:function(){return parseInt(this.$route.meta.tab,10)}},watch:{$route:function(){this.adaptDotWaveColor(),parseInt(this.$route.meta.tab,10)===this.$route.meta.tab?this.hideUnderline=!1:this.hideUnderline=!0}},data:function(){var t=void 0;return t="undefined"!=typeof window?c():100,{path:"",underline:"",hideUnderline:parseInt(this.$route.meta.tab,10)!==this.$route.meta.tab,pathLength:0,tabTextWidth:[0,0,0],tabTextOffset:[-t,0,t]}},beforeDestroy:function(){v.a.destroy(),this.mql.removeListener(this.adaptDotWaveColor)}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(120),i=a.n(n);e.default={name:"image-load",components:{Spinner:i.a},props:{src:{required:!0,default:""},size:{required:!1}},methods:{load:function(){var t=this;if(this.src){var e=new Image;if(e.onload=function(){t.loaded=!0},e.src=this.src,!this.size)var a=setInterval(function(){e.naturalWidth&&(clearInterval(a),t.loadedRatioStyle={paddingBottom:e.naturalHeight/e.naturalWidth*100+"%"},t.$forceUpdate())},10)}},calcRatioStyle:function(){if(this.size){var t=this.size;return{paddingBottom:t.height/t.width*100+"%"}}return this.loadedRatioStyle}},mounted:function(){this.load()},watch:{src:function(){this.load()}},data:function(){return{loaded:!1,loadedRatioStyle:null}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"spinner",props:["show"]}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(16),i=a.n(n);e.default={name:"contact",components:{WebsiteFooter:i.a},mounted:function(){},data:function(){return{}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(57),i=a.n(n),o=a(116),s=a.n(o),r=a(42),l=a.n(r);e.default={name:"hello",components:{},mounted:function(){function t(){requestAnimationFrame(t),s.a.update()}var e=this;document.addEventListener("mousemove",this.mousemove),this.textRectRotate={rotateX:this.rotateX,rotateY:this.rotateY},this.textRectRotateTween=new s.a.Tween(this.textRectRotate),this.textRectRotateTween.easing(s.a.Easing.Quadratic.Out),this.foldTween=new s.a.Tween(this.foldOffsetValue.slice()),this.foldTween.easing(s.a.Easing.Cubic.Out),this.scaleTween=new s.a.Tween(this.titleScale.slice()),this.scaleTween.easing(s.a.Easing.Cubic.Out),t(),window.addEventListener("resize",this.calcFoldOffsetHeight),new l.a("FFMark",{weight:"bold"}).load().then(function(){return e.calcFoldOffsetHeight()})},beforeDestroy:function(){document.removeEventListener("mousemove",this.mousemove),window.removeEventListener("resize",this.calcFoldOffsetHeight)},methods:{calcRowStyle:function(t){return{transform:"translate(0,"+this.foldOffsetValue[t]+"em)"}},calcFoldOffsetHeight:function(){var t=this;this.perviousWidth!==window.innerWidth&&(this.perviousWidth=window.innerWidth,this.isCalculatingFoldOffset=!0,this.foldOffsetEnable.filter(function(t){return!t}).length>0&&(this.foldOffsetEnable=this.foldOffsetEnable.map(function(){return!0})),this.$nextTick(function(){var e=32/t.$refs.textrect.offsetWidth*.9;i()(t.$refs).filter(function(t){return/blank\.\d/.test(t)}).forEach(function(a,n){t.foldOffset[n+1]=t.$refs[a].offsetHeight*e+3.4}),t.foldOffsetEnable=t.foldOffsetEnable.map(function(){return!1}),t.$nextTick(function(){t.isCalculatingFoldOffset=!1})}))},mousemove:function(t){var e=this;if(window.innerWidth<480){if(0===this.rotateX&&0===this.rotateY)return;return this.rotateX=this.textRectRotate.rotateX,void(this.rotateY=this.textRectRotate.rotateY)}var a=(t.clientX-window.innerWidth/2)/(window.innerWidth/2)*.03*90,n=-(t.clientY-window.innerHeight/2)/(window.innerHeight/2)*.03*90;this.textRectRotateTween.stop().to({rotateX:n,rotateY:a},200).onUpdate(function(){e.rotateX=e.textRectRotate.rotateX,e.rotateY=e.textRectRotate.rotateY}).start()},handleTextFold:function(t,e){function a(t){this.scaleTween.to(t,600).onUpdate(function(){o.$forceUpdate(),o.titleScale=this}).start()}function n(){var t=this,e=this.foldOffsetEnable.reduce(function(e,a,n){for(var i=0,o=0;o<=n;o+=1)t.foldOffsetEnable[o]&&(i+=t.foldOffset[o]);return e.push(i),e},[]);this.foldTween.stop().to(e,400).onUpdate(function(){o.$forceUpdate(),o.foldOffsetValue=this}).start()}var i=t+1,o=this;switch(e.type){case"click":this.foldOffsetEnable[i]?(this.foldOffsetEnable[i]=!1,this.enableHoverToFold=!1):(this.foldOffsetEnable[this.foldOffsetEnable.indexOf(!0)]=!1,this.foldOffsetEnable[i]=!0),n.call(this);break;case"mouseenter":if("ontouchstart"in window)return;this.enableHoverToFold&&(this.foldOffsetEnable[this.foldOffsetEnable.indexOf(!0)]=!1,this.foldOffsetEnable[i]=!0);var s=[1,1,1,1,1,1];s[t]=1.08,a.call(this,s),n.call(this);break;case"mouseleave":this.enableHoverToFold=!1;var r=[1,1,1,1,1,1];a.call(this,r)}},getTitleTransform:function(t){return"translate3d(0,"+this.foldOffsetValue[t]+"em,0) scale("+this.titleScale[t]+")"}},computed:{titleTransform:{get:function(){for(var t=[],e=0;e<5;e+=1)t.push("translate3d(0,"+this.foldOffsetValue[e]+"em,0) scale("+this.titleScale[e]+")")}}},beforeRouteLeave:function(t,e,a){a()},data:function(){return{perviousWidth:0,rotateX:0,rotateY:0,foldOffsetEnable:[!0,!0,!0,!0,!0,!0],foldOffset:[0,0,0,0,0,0],isCalculatingFoldOffset:!0,foldOffsetValue:[0,0,0,0,0,0],enableHoverToFold:!1,titleScale:[1,1,1,1,1,1]}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(16),i=a.n(n),o=a(109),s=a.n(o),r={template:"<div>123</div>"};e.default={name:"work",components:{WebsiteFooter:i.a},mounted:function(){this.init()},methods:{init:function(){var t=this;if(this.works){var e=this.works.filter(function(e){return e.data.slug===t.slug});e[0]&&(this.thisIndex=this.works.indexOf(e[0]),this.data=e[0].data)}},getBodyHtml:function(t){var e=s.a.RichText.asHtml(t);return r.template=e,e}},computed:{works:function(){return this.$store.state.works},slug:function(){return this.$route.params.slug},tags:function(){return this.data&&this.data.service?this.data.service.split(",").map(function(t){return t.trim()}):[]},prev:function(){if(!this.works||null===this.thisIndex)return null;var t=this.thisIndex;return-1===t||0===t?null:this.works[t-1].data},next:function(){if(!this.works||null===this.thisIndex)return null;var t=this.thisIndex;return-1===t?null:t===this.works.length-1?this.works[0].data:this.works[t+1].data}},watch:{works:function(){this.init()}},data:function(){return{data:null,thisIndex:null}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(16),i=a.n(n),o=a(119),s=a.n(o);e.default={name:"works",components:{WebsiteFooter:i.a,ImageLoad:s.a},mounted:function(){},computed:{works:function(){return this.$store.state.works}},data:function(){return{}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,,,,,,function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a(17),i=a(45),o=a.n(i),s=a(44),r=a(43),l=a(46);a.n(l);a.i(l.sync)(s.a,r.a),n.a.config.productionTip=!1,s.a.dispatch("INIT"),new n.a({el:"#app",router:r.a,store:s.a,render:function(t){return t(o.a)}})},function(t,e,a){"use strict";function n(){return o.a.getApi(s).then(function(t){return t.query(o.a.Predicates.at("document.type","work"),{orderings:"[my.work.year desc]"})})}e.a=n;var i=a(110),o=a.n(i),s="https://dzinlife.prismic.io/api/v2"},,function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAKxJREFUOBGlk1EKgzAQRLUffnmSCj2V9/HH0wheoqAH8Ar2V9M3wRIiFNx1YEJ2szNZTVIUJ4QQGtjBCa4HNVeuOZWnkMUK9nCD/6A11VRJyUwJOMKrUG0yIZCrFb26KFHpu97woYQBO7UviVpoFWufqFUHE8FTGQdmGawIa4dYko+n9WwvGSxZxhYsMhhsmqx6uH2M0Y4f6b5IP4N7V1kudOF/TLGNY8DI9Jy/POyEmuwKnaoAAAAASUVORK5CYII="},function(t,e,a){function n(t){a(100)}var i=a(3)(a(50),a(126),n,"data-v-0d478038",null);t.exports=i.exports},function(t,e,a){function n(t){a(101)}var i=a(3)(a(51),a(127),n,null,null);t.exports=i.exports},function(t,e,a){function n(t){a(107)}var i=a(3)(a(52),a(133),n,null,null);t.exports=i.exports},function(t,e,a){function n(t){a(102)}var i=a(3)(a(53),a(128),n,"data-v-47edc806",null);t.exports=i.exports},function(t,e,a){function n(t){a(104)}var i=a(3)(a(54),a(130),n,"data-v-58c81622",null);t.exports=i.exports},function(t,e,a){function n(t){a(106)}var i=a(3)(a(55),a(132),n,"data-v-b91e7bf8",null);t.exports=i.exports},function(t,e,a){function n(t){a(105)}var i=a(3)(a(56),a(131),n,"data-v-6359c0c2",null);t.exports=i.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{class:{"tab-0":0===t.$route.meta.tab},attrs:{id:"app"}},[a("div",{staticClass:"logo-wrapper",on:{click:function(e){t.$router.replace({name:"hello"})}}},[a("div",{staticClass:"logo"})]),a("WebsiteHeader"),a("transition",{attrs:{name:t.transitionName,mode:"out-in"}},[a("router-view",{key:t.$route.path})],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header",class:{"tab-0":0===t.$route.meta.tab}},[a("div",{staticClass:"header-inner-wrapper"},[a("div",{staticClass:"tabs-wrapper"},[a("div",{ref:"canvas_wrapper",staticClass:"canvas-wrapper"}),a("svg",[a("defs",[a("path",{attrs:{id:"path",d:t.path}})]),a("a",{attrs:{"xlink:href":""},on:{click:function(e){e.preventDefault(),t.click_about(e)}}},[a("rect",{attrs:{height:"120",width:"60",y:"0",x:"50%",transform:"translate("+(t.tabTextOffset[0]-30)+")",fill:"transparent"}}),a("text",{attrs:{click:t.click,"text-anchor":"middle"}},[a("textPath",{ref:"tab_0",attrs:{"xlink:href":"#path",startOffset:t.pathLength/2+t.tabTextOffset[0]}},[t._v("About")])])]),a("a",{attrs:{"xlink:href":""},on:{click:function(e){e.preventDefault(),t.click_work(e)}}},[a("rect",{attrs:{height:"120",width:"60",y:"0",x:"50%",transform:"translate("+(t.tabTextOffset[1]-30)+")",fill:"transparent"}}),a("text",{attrs:{"text-anchor":"middle"}},[a("textPath",{ref:"tab_1",attrs:{"xlink:href":"#path",startOffset:t.pathLength/2+t.tabTextOffset[1]}},[t._v("Works")])])]),a("a",{attrs:{"xlink:href":""},on:{click:function(e){e.preventDefault(),t.click_contact(e)}}},[a("rect",{attrs:{height:"120",width:"60",y:"0",x:"50%",transform:"translate("+(t.tabTextOffset[2]-30)+")",fill:"transparent"}}),a("text",{attrs:{"text-anchor":"middle"}},[a("textPath",{ref:"tab_2",attrs:{"xlink:href":"#path",startOffset:t.pathLength/2+t.tabTextOffset[2]}},[t._v("Contact")])])]),a("path",{class:{hide:t.hideUnderline},attrs:{d:t.underline,fill:"transparent","stroke-width":"2"}})])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper"},[a("div",{staticClass:"inner-wrapper",style:t.calcRatioStyle()},[a("transition",{attrs:{name:"fade"}},[t.loaded?a("img",{attrs:{src:t.src}}):t._e()]),t.calcRatioStyle()?a("Spinner",{staticClass:"spin",attrs:{show:!t.loaded}}):t._e()],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[t._m(0),t._m(1),t._m(2),a("WebsiteFooter")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group"},[a("h3",[t._v("Mail me")]),a("h5",[a("a",{attrs:{href:"mailto:dzinlife@me.com"}},[t._v("dzinlife@me.com")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group"},[a("h3",[t._v("Chat with me")]),a("h5",[t._v("WeChat: Dzinlife")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group"},[a("h3",[t._v("Follow me")]),a("h5",[t._v("Twitter: "),a("a",{attrs:{href:"https://twitter.com/Dzinlife",target:"_blank"}},[t._v("Dzinlife")])]),a("h5",[t._v("Instagram: "),a("a",{attrs:{href:"https://instagram.com/Dzinlifes",target:"_blank"}},[t._v("Dzinlifes")])]),a("h5",[t._v("Github: "),a("a",{attrs:{href:"https://github.com/Dzinlife",target:"_blank"}},[t._v("Dzinlife")])]),a("h5",[t._v("Dribbble: "),a("a",{attrs:{href:"https://dribbble.com/Dzinlife",target:"_blank"}},[t._v("Dzinlife")])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"footer",class:{"tab-0":0===t.$route.meta.tab}},[t._v("Copyright © 2017. All right reserved.")])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("div",{staticClass:"bg bg-1"}),a("div",{staticClass:"bg bg-2"}),a("div",{staticClass:"content"},[a("div",{staticClass:"textrect-wrapper",style:{transform:"translate("+2*-t.rotateY+"px,"+2*t.rotateX+"px) rotateX("+t.rotateX+"deg) rotateY("+t.rotateY+"deg)"}},[a("div",{ref:"textrect",staticClass:"textrect",on:{mouseleave:function(e){t.handleTextFold(-1,e)}}},[a("div",{staticClass:"row hello",style:t.calcRowStyle(0)},[a("div",{staticClass:"title-wrapper",style:{transform:"scale("+t.titleScale[0]+")"},on:{click:function(e){t.handleTextFold(0,e)},mouseenter:function(e){t.handleTextFold(0,e)},mouseleave:function(e){t.handleTextFold(0,e)}}},[a("div",{staticClass:"text color"},[t._v("Hello")])]),a("transition",{attrs:{name:"zoom-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.foldOffsetEnable[1],expression:"foldOffsetEnable[1]"}],ref:"blank.0",staticClass:"blank",class:{"calculating-hide":t.isCalculatingFoldOffset}},[t._v("How did you get here?"),a("br"),t._v("I'm waiting for you so long!")])])],1),a("div",{staticClass:"row wz",style:t.calcRowStyle(1)},[a("div",{staticClass:"title-wrapper",style:{transform:"scale("+t.titleScale[1]+")"},on:{click:function(e){t.handleTextFold(1,e)},mouseenter:function(e){t.handleTextFold(1,e)},mouseleave:function(e){t.handleTextFold(1,e)}}},[a("div",{staticClass:"text small"},[t._v("This is")]),a("div",{staticClass:"text color"},[t._v(" Zhao Wang")])]),a("transition",{attrs:{name:"zoom-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.foldOffsetEnable[2],expression:"foldOffsetEnable[2]"}],ref:"blank.1",staticClass:"blank",class:{"calculating-hide":t.isCalculatingFoldOffset}},[t._v("Finding passion and curiosity about Tech / Art / Music / LifeStyle, which has become a bit of an obsession of mine. If you are the same, let's making some different :)")])])],1),a("div",{staticClass:"row designer",style:t.calcRowStyle(2)},[a("div",{staticClass:"title-wrapper",style:{transform:"scale("+t.titleScale[2]+")"},on:{click:function(e){t.handleTextFold(2,e)},mouseenter:function(e){t.handleTextFold(2,e)},mouseleave:function(e){t.handleTextFold(2,e)}}},[a("div",{staticClass:"text small"},[t._v("A")]),a("div",{staticClass:"text color"},[t._v(" designer")])]),a("transition",{attrs:{name:"zoom-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.foldOffsetEnable[3],expression:"foldOffsetEnable[3]"}],ref:"blank.2",staticClass:"blank",class:{"calculating-hide":t.isCalculatingFoldOffset}},[t._v("Experience in UI / UX / Graphic Design and keen interested in Interior / Industrial Design.")])])],1),a("div",{staticClass:"row developer",style:t.calcRowStyle(3)},[a("div",{staticClass:"title-wrapper",style:{transform:"scale("+t.titleScale[3]+")"},on:{click:function(e){t.handleTextFold(3,e)},mouseenter:function(e){t.handleTextFold(3,e)},mouseleave:function(e){t.handleTextFold(3,e)}}},[a("div",{staticClass:"text small"},[t._v("and")]),a("div",{staticClass:"text color"},[t._v(" Developer")])]),a("transition",{attrs:{name:"zoom-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.foldOffsetEnable[4],expression:"foldOffsetEnable[4]"}],ref:"blank.3",staticClass:"blank",class:{"calculating-hide":t.isCalculatingFoldOffset}},[t._v("Experience in Front-end dev, and learning about realtime rendering.")])])],1),a("div",{staticClass:"row shanghai",style:t.calcRowStyle(4)},[a("div",{staticClass:"title-wrapper",style:{transform:"scale("+t.titleScale[4]+")"},on:{click:function(e){t.handleTextFold(4,e)},mouseenter:function(e){t.handleTextFold(4,e)},mouseleave:function(e){t.handleTextFold(4,e)}}},[a("div",{staticClass:"text small"},[t._v("based in")]),a("div",{staticClass:"text color"},[t._v(" Shanghai")])]),a("transition",{attrs:{name:"zoom-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.foldOffsetEnable[5],expression:"foldOffsetEnable[5]"}],ref:"blank.4",staticClass:"blank",class:{"calculating-hide":t.isCalculatingFoldOffset}},[t._v("No comment")])])],1),a("div",{staticClass:"row contact",style:t.calcRowStyle(5)},[a("div",{staticClass:"title-wrapper",style:{transform:"scale("+t.titleScale[5]+")"},on:{click:function(e){t.handleTextFold(5,e)},mouseenter:function(e){t.handleTextFold(5,e)},mouseleave:function(e){t.handleTextFold(5,e)}}},[a("div",{staticClass:"text small"},[t._v("Feel free to")]),a("div",{staticClass:"text color"},[t._v(" Contact")])]),a("transition",{attrs:{name:"zoom-fade"}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.foldOffsetEnable[6],expression:"foldOffsetEnable[6]"}],ref:"blank.5",staticClass:"blank",class:{"calculating-hide":t.isCalculatingFoldOffset},on:{click:function(e){t.$router.replace({name:"contact"})}}})])],1)])])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main"},[a("ul",t._l(t.works,function(e){return a("router-link",{key:e.data.slug,attrs:{to:{name:"work",params:{slug:e.data.slug}}}},[a("li",[a("ImageLoad",{attrs:{src:e.data.cover.url,size:e.data.cover.dimensions}}),a("h3",{style:{color:e.data.label_color}},[t._v(t._s(e.data.title[0].text))])],1)])})),t._m(0),a("WebsiteFooter")],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"old"},[a("a",{attrs:{href:"https://legacy.dzinlife.com",target:"_blank"}},[t._v("Check my legancy profolio here")]),a("span",[t._v(" (Desktop Only Website)")])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"main",style:{backgroundColor:t.data&&t.data.bg_color||null}},[t.data?a("div",{staticClass:"article"},[a("div",{staticClass:"meta"},[a("div",{staticClass:"title-line"},[a("h1",[t._v(t._s(t.data.project_name))])]),a("table",[a("tr",[a("td",{attrs:{width:"44"}},[t._v("Role")]),a("td",[t._v(t._s(t.data.service))])]),a("tr",[a("td",[t._v("Year")]),a("td",[t._v(t._s(t.data.year.split(",")[0]))])]),a("tr",[a("td",[t._v("Link")]),a("td",[a("a",{class:{empty:t.data.external_link.url},attrs:{href:t.data.external_link.url,target:"_blank"}},[t._v(t._s(t.data.external_link_text))])])])])]),a("div",{staticClass:"body",domProps:{innerHTML:t._s(t.getBodyHtml(t.data.body))}})]):t._e(),a("div",{staticClass:"work-footer"},[t.works?a("div",{staticClass:"nav"},[t.next?a("div",{staticClass:"next-work"},[a("router-link",{staticClass:"nav-link",attrs:{to:{name:"work",params:{slug:t.next.slug}}}},[t._v("Next Project »")]),a("div",{staticClass:"description",style:{textShadow:"-1px 0 white, 1px 0 white"}},[t._v(t._s(t.next.project_name))])],1):t._e()]):t._e(),a("WebsiteFooter")],1)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",[a("svg",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"spinner",class:{show:t.show},attrs:{width:"44px",height:"44px",viewBox:"0 0 44 44"}},[a("circle",{staticClass:"path",attrs:{fill:"none","stroke-width":"4","stroke-linecap":"round",cx:"22",cy:"22",r:"20"}})])])},staticRenderFns:[]}}],[114]);
//# sourceMappingURL=app.063f6eacee1978869174.js.map