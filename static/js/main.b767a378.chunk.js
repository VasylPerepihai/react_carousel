(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(6),c=n.n(i),o=n(1),l=n(2),s=n(4),u=n(3),m=(n(12),n(13),function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).carousel=document.querySelector("ul"),e.state={counter:0},e.scrollCaroselLeft=function(t,n){document.querySelector(".Carousel").scrollLeft-=t*n,e.setState((function(e){return{counter:e.counter-1}}))},e.scrollCaroselRight=function(t,n){document.querySelector(".Carousel").scrollLeft+=t*n,e.setState((function(e){return{counter:e.counter+1}}))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this,t=this.props,n=t.step,a=t.itemWidth,i=t.frameSize,c=t.images,o=Math.floor(c.length/n);return r.a.createElement("div",{className:"Container"},r.a.createElement("button",{type:"button",onClick:function(){return e.scrollCaroselLeft(n,a)},disabled:this.state.counter<=0},"\u21e6"),r.a.createElement("div",{className:"Carousel",style:{width:"".concat(a*i,"px")}},r.a.createElement("ul",{className:"Carousel__list"},c.map((function(e,t){return r.a.createElement("li",null,r.a.createElement("img",{src:e,alt:t,key:e,style:{width:"".concat(a,"px")}}))})))),r.a.createElement("button",{type:"button",onClick:function(){return e.scrollCaroselRight(n,a)},disabled:this.state.counter>=o},"\u21e8"),this.state.counter)}}]),n}(r.a.Component)),g=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"]},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state.images;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Carousel with ",e.length," images"),r.a.createElement(m,{images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:1,frameSize:1,itemWidth:150,animationDuration:1e3,infinite:!1}))}}]),n}(r.a.Component);c.a.render(r.a.createElement(g,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.b767a378.chunk.js.map