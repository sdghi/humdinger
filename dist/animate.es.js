function t(t){return"string"==typeof t?document.querySelector(t):t}function e(t,e,n,o={duration:300,easing:"ease-in-out",direction:"forwards",scale:!0}){const i=t.top-e.top,r=t.left-e.left;let s=t.height/e.height,l=t.width/e.width;console.log(t.height,e.height,s,l);const c=n.animate([{transformOrigin:"top left",transform:`translate3d(${r}px, ${i}px, 0)  scale(${l}, ${s})`},{transformOrigin:"top left",transform:"none"}],{duration:o.duration,easing:o.easing,fill:"both"});"reverse"===o.direction?c.reverse():c.play(),o.done&&(c.onfinish=o.done)}const n={root:null,rootMargin:"0px",threshold:1};class o{constructor(e){this.el=t(e)}log(){console.log("element:",this.el)}node(){return this.el}scroll(t,e,o=n){let i=new IntersectionObserver((n=>{n.forEach((n=>{const o=n.intersectionRatio;"enter"===t&&n.isIntersecting&&this.scrollEnter(e),"exit"===t&&0===o&&this.scrollExit(e)}))}),o);const r=()=>{i.observe(this.el),requestAnimationFrame(r)};requestAnimationFrame(r)}scrollExit(t){t(this.el)}scrollEnter(t){t(this.el)}click(t){this.el.addEventListener("click",(e=>{t(this.el,e)}))}}function i(t,e){window.matchMedia(t).addEventListener("change",(t=>t.matches&&e.true?e.true():e.false?e.false():void 0))}function r(n,o,i){const r=t(n),s=r.getBoundingClientRect();o(r);e(s,r.getBoundingClientRect(),r,i)}function s(n,o,i,r){const s=t(n),l=s.getBoundingClientRect();s.style.visibility="hidden";const c=t(o),a=c.getBoundingClientRect();i(c),e(l,a,c,r)}function l(n,o,i,r){const s=t(n),l=s.querySelectorAll(o);let c=[];Array.from(l).map((t=>{const e=t.getBoundingClientRect();c.push(e)})),i(s),l.forEach(((t,n)=>{const o=t.getBoundingClientRect();e(c[n],o,t,r)}))}const c={lerp:()=>console.log("lerp")};export{o as Watcher,l as animateLayout,s as crossfade,r as flip,c as math,i as screen};