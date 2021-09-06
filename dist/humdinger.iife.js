var humdinger=function(t){"use strict";function e(t,e=document){return"string"==typeof t?e.querySelector(t):t}function n(t,e=document){return"string"==typeof t?e.querySelectorAll(t):t}function i(t,e,n,i={duration:300,easing:"ease-in-out",direction:"forwards",scale:!0}){const{dx:r,dy:s,dh:o,dw:c}=function(t,e){return{dx:t.left-e.left,dy:t.top-e.top,dh:t.height/e.height,dw:t.width/e.width}}(t,e),l=n.animate([{transformOrigin:"top left",transform:`translate3d(${r}px, ${s}px, 0)  scale(${c}, ${o})`},{transformOrigin:"top left",transform:"none"}],{duration:i.duration,easing:i.easing,fill:"both"});"reverse"===i.direction?l.reverse():l.play(),i.done&&(l.onfinish=i.done)}function r(t){const e=t[0],n=t[1];return{inc:function(t,i){return t===n?e:t+i},dec:function(t,i){return t===e?n:t-i}}}const s={root:null,rootMargin:"0px",threshold:1};const o={duration:150,easing:"linear"};function c(t,e,n,i=o){t.animate([{transformOrigin:"top left",height:e+"px"},{transformOrigin:"top left",height:n+"px"}],i)}function l(t,e,n){t.setAttribute(`data-${e}`,n)}function u(t){const n=e(t),i=n.getAttribute("data-transition");if(n.removeAttribute("style"),!n.hasAttribute("aria-hidden")||"false"===n.getAttribute("aria-hidden"))return;const{clientHeight:r,clientWidth:s}=n;n.removeAttribute("aria-hidden"),n.style=`\n    visibility: visible;\n    height: ${r}px;\n    width: ${s}px;\n  `,l(n,i,"enter"),n.addEventListener("transitionend",(()=>{n.style=`\n    visibility: visible;\n    height: ${r}px;\n    width: ${s}px;\n    `}))}function a(t){const n=e(t),i=n.getAttribute("data-transition");"true"!==n.getAttribute("aria-hidden")&&(n.removeAttribute("style"),l(n,i,"exit"),n.setAttribute("aria-hidden","true"),n.addEventListener("transitionend",(()=>{n.style="\n    visibility: hidden;\n    height: 0px;\n    width: 0px;\n    padding: 0px;\n    "})))}const h={attributes:!0,childList:!0,subtree:!0,characterData:!0};const d={lerp:()=>console.log("lerp")};return t.Gallery=class{constructor(t,i){this.options=i,this.el=e(t),this.items=n(i.itemSelector,this.el),this.currentIndex=this.options.start}node(){return this.el}getItems(){return this.items}getIndex(){return this.currentIndex}getCurrent(){return{index:this.currentIndex,element:this.items[this.currentIndex]}}getNext(){const t=r([0,this.items.length-1]).inc(this.currentIndex,1);return{index:t,element:this.items[t]}}getPrevious(){const t=r([0,this.items.length-1]).dec(this.currentIndex,1);return{index:t,element:this.items[t]}}getItem(t){return{index:t,element:this.items[t]}}next(t){this.currentIndex=r([0,this.items.length-1]).inc(this.currentIndex,1),t&&t(this.currentIndex)}previous(t){this.currentIndex=r([0,this.items.length-1]).dec(this.currentIndex,1),t&&t(this.currentIndex)}log(){console.log({el:this.el,options:this.options,items:this.items,currentIndex:this.currentIndex,currentItem:this.items[this.currentIndex]})}},t.Watcher=class{constructor(t){this.el=e(t)}log(){console.log("element:",this.el)}node(){return this.el}scroll(t,e,n=s){let i=new IntersectionObserver((n=>{n.forEach((n=>{const i=n.intersectionRatio;"enter"===t&&n.isIntersecting&&this.scrollEnter(e),"exit"===t&&0===i&&this.scrollExit(e)}))}),n);const r=()=>{i.observe(this.el),requestAnimationFrame(r)};requestAnimationFrame(r)}scrollExit(t){t(this.el)}scrollEnter(t){t(this.el)}click(t){this.el.addEventListener("click",(e=>{t(this.el,e)}))}},t.animateHeightAuto=function(t,n=(()=>null),i=o){const r=e(t),s=r.clientHeight;n(),c(r,s,r.clientHeight,i)},t.animateLayout=function(t,n,r,s){const o=e(t),c=o.querySelectorAll(n);let l=[];Array.from(c).map((t=>{const e=t.getBoundingClientRect();l.push(e)})),r(o),c.forEach(((t,e)=>{const n=t.getBoundingClientRect();i(l[e],n,t,s)}))},t.crossfade=function(t,n,r,s){const o=e(t),c=o.getBoundingClientRect();o.style.visibility="hidden";const l=e(n);r(l),i(c,l.getBoundingClientRect(),l,s)},t.defaultOptions=o,t.flip=function(t,n,r){const s=e(t),o=s.getBoundingClientRect();n(s),i(o,s.getBoundingClientRect(),s,r)},t.getAllElements=n,t.getElement=e,t.loop=r,t.math=d,t.mount=u,t.runFLIP=i,t.screen=function(t,e){const n=window.matchMedia(t);return n.matches&&e.true?e.true():e.false?e.false():void n.addEventListener("change",(t=>t.matches&&e.true?e.true():e.false?e.false():void 0))},t.toggleMounting=function(t){const n=e(t),i=n.getAttribute("data-transition"),r=n.getAttribute(`data-${i}`);r&&"enter"!==r?u(t):a(t)},t.transformHeightDeltas=c,t.unmount=a,t.watchHeightChange=function(t,e,n=Object.assign(Object.assign({},o),h)){let i=t.clientHeight;const r=new MutationObserver((r=>{for(const s of r){const r=t.clientHeight;c(t,i,r,n),i=r,e&&e({mutation:s,element:t,beforeHeight:i,afterHeight:r})}}));return{observe:()=>r.observe(t,h),disconnect:()=>r.disconnect()}},Object.defineProperty(t,"__esModule",{value:!0}),t}({});
