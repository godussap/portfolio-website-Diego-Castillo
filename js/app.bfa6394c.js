(function(){var e={8013:function(e){e.exports={optimization:{splitChunks:{chunks:"all"}}}},4606:function(e,t,o){"use strict";var n=o(5130),r=o(6768);function i(e,t,o,n,i,a){const s=(0,r.g2)("router-link"),l=(0,r.g2)("router-view");return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("nav",null,[(0,r.bF)(s,{to:"/"},{default:(0,r.k6)((()=>t[0]||(t[0]=[(0,r.eW)("Home")]))),_:1}),t[6]||(t[6]=(0,r.eW)(" | ")),(0,r.bF)(s,{to:"/about"},{default:(0,r.k6)((()=>t[1]||(t[1]=[(0,r.eW)("About")]))),_:1}),(0,r.bF)(s,{to:"/Contact"},{default:(0,r.k6)((()=>t[2]||(t[2]=[(0,r.eW)("Contact")]))),_:1}),(0,r.bF)(s,{to:"/Project"},{default:(0,r.k6)((()=>t[3]||(t[3]=[(0,r.eW)("Project")]))),_:1}),(0,r.bF)(s,{to:"/Experience"},{default:(0,r.k6)((()=>t[4]||(t[4]=[(0,r.eW)("Experience")]))),_:1}),(0,r.bF)(s,{to:"/Hobbies"},{default:(0,r.k6)((()=>t[5]||(t[5]=[(0,r.eW)("Hobbies")]))),_:1})]),(0,r.bF)(l)],64)}var a=o(8013),s=o.n(a),l=o(1241);const c=(0,l.A)(s(),[["render",i]]);var u=c,d=o(5847),p=o(4458);(0,p.k)("/portfolio-website-Diego-Castillo/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB"),console.log("Debug info")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}}),"serviceWorker"in navigator&&window.addEventListener("load",(()=>{navigator.serviceWorker.register("/portfolio-website-Diego-Castillo/service-worker.js").then((e=>{console.log("Service Worker registered with scope:",e.scope)})).catch((e=>{console.error("Service Worker registration failed:",e)}))}));var f=o(1387);const m={class:"background"},g={class:"pa"};function h(e,t,o,n,i,a){const s=(0,r.g2)("Message");return(0,r.uX)(),(0,r.CE)("div",m,[(0,r.Lk)("div",g,[(0,r.bF)(s,{msg:"Welcome to my page and enjoy "})])])}var v=o(4232),b=o.p+"img/d.3a669e00.jpg";const k={class:"background"},y={class:"hello"};function L(e,t,o,n,i,a){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",k,[t[2]||(t[2]=(0,r.Lk)("div",{class:"image-container"},[(0,r.Lk)("img",{alt:"profile picture",class:"image",src:b})],-1)),(0,r.Lk)("div",y,[(0,r.Lk)("h1",null,(0,v.v_)(o.msg),1),t[0]||(t[0]=(0,r.Lk)("h2",null,[(0,r.Lk)("p",null,"I am Diego Castillo , I hope you can see this webpage as my passion and dedication.")],-1)),t[1]||(t[1]=(0,r.Lk)("h2",null,null,-1))])]),t[3]||(t[3]=(0,r.Lk)("footer",{class:"footer"},[(0,r.Lk)("p",null,"© 2024 Diego Castillo, All rights reserved.")],-1))],64)}var w={name:"HelloView",props:{msg:String}};const C=(0,l.A)(w,[["render",L],["__scopeId","data-v-6d09fc0e"]]);var _=C,E={name:"HelloView",components:{Message:_}};const j=(0,l.A)(E,[["render",h]]);var A=j;const F={class:"b"},x={class:"contact"},P={class:"form-group"},S={class:"form-group"},X={class:"form-group"},I={class:"form-group"},W={key:0,class:"success-message"};function N(e,t,o,i,a,s){return(0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.Lk)("div",F,[(0,r.Lk)("div",x,[t[10]||(t[10]=(0,r.Lk)("h1",null,"Contact Us",-1)),(0,r.Lk)("form",{onSubmit:t[4]||(t[4]=(0,n.D$)(((...e)=>s.submitForm&&s.submitForm(...e)),["prevent"]))},[(0,r.Lk)("div",P,[t[5]||(t[5]=(0,r.Lk)("label",{for:"firstname"}," First Name:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text",id:"firstname","onUpdate:modelValue":t[0]||(t[0]=e=>a.form.firstname=e),required:""},null,512),[[n.Jo,a.form.firstname]])]),(0,r.Lk)("div",S,[t[6]||(t[6]=(0,r.Lk)("label",{for:"lastname"},"Last Name:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"text",id:"lastname","onUpdate:modelValue":t[1]||(t[1]=e=>a.form.lastname=e),required:""},null,512),[[n.Jo,a.form.lastname]])]),(0,r.Lk)("div",X,[t[7]||(t[7]=(0,r.Lk)("label",{for:"email"},"Email:",-1)),(0,r.bo)((0,r.Lk)("input",{type:"email",id:"email","onUpdate:modelValue":t[2]||(t[2]=e=>a.form.email=e),required:""},null,512),[[n.Jo,a.form.email]])]),(0,r.Lk)("div",I,[t[8]||(t[8]=(0,r.Lk)("label",{for:"message"},"Message:",-1)),(0,r.bo)((0,r.Lk)("textarea",{id:"message","onUpdate:modelValue":t[3]||(t[3]=e=>a.form.message=e),required:""},null,512),[[n.Jo,a.form.message]])]),t[9]||(t[9]=(0,r.Lk)("button",{type:"submit"},"Send Message",-1))],32),t[11]||(t[11]=(0,r.Lk)("p",{class:"form-note"}," * We will respond to your inquiry within 24-48 hours. Please ensure your contact information is correct. ",-1))]),a.submitted?((0,r.uX)(),(0,r.CE)("div",W," Thank you for your message! We will get back to you soon. ")):(0,r.Q3)("",!0)]),t[12]||(t[12]=(0,r.Lk)("footer",{class:"footer"},[(0,r.Lk)("p",null,"© 2024 Diego Castillo, All rights reserved.")],-1))],64)}var T={name:"ContactPage",data(){return{form:{firstname:"",lastname:"",email:"",message:""},submitted:!1}},methods:{submitForm(){try{console.log("submiting:",this.form),this.submitted=!0}catch(e){console.error("Error submitting form:",e)}finally{this.resetForm()}},resetForm(){this.form.firstname="",this.form.lastname="",this.form.email="",this.form.message="",setTimeout((()=>{this.submitted=!1}),5e3)}}};const D=(0,l.A)(T,[["render",N],["__scopeId","data-v-9f722456"]]);var O=D;const M={class:"portfolio-page"};function H(e,t,o,n,i,a){const s=(0,r.g2)("Portfolio");return(0,r.uX)(),(0,r.CE)("div",M,[(0,r.bF)(s)])}const V={class:"portfolio"},q={key:0,class:"loading"},K={key:1,class:"error"},U={key:2,class:"repo-list"},B=["href"];function J(e,t,o,n,i,a){return(0,r.uX)(),(0,r.CE)("div",V,[t[3]||(t[3]=(0,r.Lk)("h1",null,"My GitHub Repositories",-1)),i.loading?((0,r.uX)(),(0,r.CE)("div",q,t[0]||(t[0]=[(0,r.Lk)("p",null,"Loading repositories...",-1)]))):(0,r.Q3)("",!0),i.error?((0,r.uX)(),(0,r.CE)("div",K,[(0,r.Lk)("p",null,(0,v.v_)(i.error),1)])):(0,r.Q3)("",!0),i.loading||i.error?(0,r.Q3)("",!0):((0,r.uX)(),(0,r.CE)("ul",U,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.repositories,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e.id,class:"repo-item"},[(0,r.Lk)("a",{href:e.html_url,target:"_blank",rel:"noopener noreferrer"},[(0,r.Lk)("h2",null,(0,v.v_)(e.name),1)],8,B),(0,r.Lk)("p",null,(0,v.v_)(e.description||"No description available."),1),(0,r.Lk)("p",null,[t[1]||(t[1]=(0,r.Lk)("strong",null,"Language:",-1)),(0,r.eW)(" "+(0,v.v_)(e.language||"N/A"),1)]),(0,r.Lk)("p",null,[t[2]||(t[2]=(0,r.Lk)("strong",null,"Last Updated:",-1)),(0,r.eW)(" "+(0,v.v_)(new Date(e.updated_at).toLocaleDateString()),1)])])))),128))]))])}var Q=o(4373),z={name:"PortfolioView",data(){return{repositories:[],loading:!0,error:null}},async created(){try{const e=await Q.A.get("https://api.github.com/users/godussap/repos");this.repositories=e.data}catch(e){this.error="Failed to fetch repositories. Please try again later."}finally{this.loading=!1}}};const G=(0,l.A)(z,[["render",J],["__scopeId","data-v-796b8b4c"]]);var R=G,$={name:"PortfolioView",components:{Portfolio:R}};const Y=(0,l.A)($,[["render",H],["__scopeId","data-v-42148de7"]]);var Z=Y;const ee={class:"bac"},te={id:"projects",class:"projects"},oe=["href"];function ne(e,t,o,n,i,a){return(0,r.uX)(),(0,r.CE)("div",ee,[t[1]||(t[1]=(0,r.Lk)("div",{class:"hero"},[(0,r.Lk)("h1",null,"Welcome to My Portfolio"),(0,r.Lk)("p",null,"Your one-stop destination for all things tech and creativity.")],-1)),(0,r.Lk)("section",te,[t[0]||(t[0]=(0,r.Lk)("h2",null,"My Projects",-1)),((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.projects,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"project-card",key:e.id},[(0,r.Lk)("h3",null,(0,v.v_)(e.title),1),(0,r.Lk)("p",null,(0,v.v_)(e.description),1),(0,r.Lk)("a",{href:e.link,target:"_blank",class:"button-link"},"View Project",8,oe)])))),128))]),t[2]||(t[2]=(0,r.Fv)('<div class="contact-card" data-v-1e6fda28><p data-v-1e6fda28>I am going to be adding more projects in the future.</p></div><footer class="footer" data-v-1e6fda28><p data-v-1e6fda28>© 2024 Diego Castillo, All rights reserved.</p><div class="social-links" data-v-1e6fda28><h3 data-v-1e6fda28>Connect with me</h3><a href="https://github.com/godussap?tab=repositories" target="_blank" rel="noopener noreferrer" class="github-link" data-v-1e6fda28><i class="fab fa-github" data-v-1e6fda28></i> GitHub </a></div></footer>',2))])}var re={data(){return{projects:[{id:1,title:"Project One",description:"This is a simple grocery list app.",link:"https://github.com/godussap/Grocery-List-App"},{id:2,title:"Project Two",description:"This is a note app where you can add or delete notes.",link:"https://github.com/godussap/Notes-App"}]}},methods:{scrollToSection(e){const t=document.querySelector(e);t&&t.scrollIntoView({behavior:"smooth"})}}};const ie=(0,l.A)(re,[["render",ne],["__scopeId","data-v-1e6fda28"]]);var ae=ie;const se={class:"experience-page"},le={class:"b"};function ce(e,t,o,n,i,a){return(0,r.uX)(),(0,r.CE)("div",se,[t[2]||(t[2]=(0,r.Lk)("h1",null,"My Professional Experience",-1)),(0,r.Lk)("div",le,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.experiences,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"experience-item",key:e.id},[(0,r.Lk)("h2",null,(0,v.v_)(e.title),1),(0,r.Lk)("p",null,[t[0]||(t[0]=(0,r.Lk)("strong",null,"Company:",-1)),(0,r.eW)(" "+(0,v.v_)(e.company),1)]),(0,r.Lk)("p",null,[t[1]||(t[1]=(0,r.Lk)("strong",null,"Duration:",-1)),(0,r.eW)(" "+(0,v.v_)(e.duration),1)]),(0,r.Lk)("ul",null,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.tasks,(e=>((0,r.uX)(),(0,r.CE)("li",{key:e},(0,v.v_)(e),1)))),128))])])))),128))])])}var ue={data(){return{experiences:[{id:1,title:"Information Technology",company:"Caesars Entertainment",duration:"March 2024 - Present",tasks:["Helped build the new casino in Columbus, NE","Setting up the server rooms","Support when local employee need.","Monthly maintaned  company’s servers."]}]}}};const de=(0,l.A)(ue,[["render",ce],["__scopeId","data-v-5735c281"]]);var pe=de;const fe={class:"b"},me={class:"hobbies-page"},ge={class:"hobbies-list"},he=["alt"];function ve(e,t,o,n,i,a){const s=(0,r.gN)("lazy");return(0,r.uX)(),(0,r.CE)("div",fe,[(0,r.Lk)("div",me,[t[0]||(t[0]=(0,r.Lk)("h1",null,"My Hobbies",-1)),t[1]||(t[1]=(0,r.Lk)("p",null,"Hobbies are an essential part of my life. They help me unwind and bring joy to my everyday routine.",-1)),(0,r.Lk)("div",ge,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(i.hobbies,(e=>((0,r.uX)(),(0,r.CE)("div",{class:"hobby",key:e.id},[(0,r.bo)((0,r.Lk)("img",{loading:"lazy",alt:e.title},null,8,he),[[s,e.image]]),(0,r.Lk)("h2",null,(0,v.v_)(e.title),1),(0,r.Lk)("p",null,(0,v.v_)(e.description),1)])))),128))])])])}var be={data(){return{hobbies:[{id:1,title:"Excercise",description:"I love to exercise , it helps me to relax and connect to my muscle.",image:o(4566)},{id:2,title:"Relaxing by the beach",description:"I love to  watch the sunset at the beach.",image:o(8741)},{id:3,title:"Coding",description:"I enjoy creating applications and solving problems through code.",image:o(4048)}]}}};const ke=(0,l.A)(be,[["render",ve],["__scopeId","data-v-5c71ca1b"]]);var ye=ke;const Le=[{path:"/",name:"home",component:A},{path:"/",name:"about",component:()=>o.e(594).then(o.bind(o,3139))},{path:"/",name:"project",component:ae},{path:"/",name:"experience",component:pe},{path:"/",name:"Portfolio",component:Z},{path:"/",name:"Hobbies",component:ye},{path:"/about",name:"about",component:()=>o.e(594).then(o.bind(o,3139))},{path:"/contact",name:"contact",component:O},{path:"/project",name:"Project",component:ae},{path:"/experience",name:"Experience",component:pe},{path:"/hobbies",name:"Hobbies",component:ye}],we=(0,f.aE)({history:(0,f.LA)("/portfolio-website-Diego-Castillo/"),routes:Le});var Ce=we,_e=o(782),Ee=(0,_e.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,n.Ef)(u).use(Ee).use(Ce).use(d.A).mount("#app");if("serviceWorker"in navigator){const e="/portfolio-website-Diego-Castillo/sw.js";navigator.serviceWorker.register(e,{scope:"/"}).then((e=>{console.log("Service worker registered with scope:",e.scope)})).catch((e=>{console.error("Service worker registration failed:",e)}))}},8741:function(e,t,o){"use strict";e.exports=o.p+"img/beach.b8a70f7d.jpg"},4048:function(e,t,o){"use strict";e.exports=o.p+"img/coding.ef8e7311.jpg"},4566:function(e,t,o){"use strict";e.exports=o.p+"img/workinout.7457a546.jpg"}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,o),i.exports}o.m=e,function(){var e=[];o.O=function(t,n,r,i){if(!n){var a=1/0;for(u=0;u<e.length;u++){n=e[u][0],r=e[u][1],i=e[u][2];for(var s=!0,l=0;l<n.length;l++)(!1&i||a>=i)&&Object.keys(o.O).every((function(e){return o.O[e](n[l])}))?n.splice(l--,1):(s=!1,i<a&&(a=i));if(s){e.splice(u--,1);var c=r();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[n,r,i]}}(),function(){o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,{a:t}),t}}(),function(){o.d=function(e,t){for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,n){return o.f[n](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.4afa7784.js"}}(),function(){o.miniCssF=function(e){return"css/about.b20873c5.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="my-professional-web-site:";o.l=function(n,r,i,a){if(e[n])e[n].push(r);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==n||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,o.nc&&s.setAttribute("nonce",o.nc),s.setAttribute("data-webpack",t+i),s.src=n),e[n]=[r];var p=function(t,o){s.onerror=s.onload=null,clearTimeout(f);var r=e[n];if(delete e[n],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(o)})),t)return t(o)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/portfolio-website-Diego-Castillo/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,r,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",o.nc&&(a.nonce=o.nc);var s=function(o){if(a.onerror=a.onload=null,"load"===o.type)r();else{var n=o&&o.type,s=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+": "+s+")");l.name="ChunkLoadError",l.code="CSS_CHUNK_LOAD_FAILED",l.type=n,l.request=s,a.parentNode&&a.parentNode.removeChild(a),i(l)}};return a.onerror=a.onload=s,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var o=document.getElementsByTagName("link"),n=0;n<o.length;n++){var r=o[n],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(n=0;n<a.length;n++){r=a[n],i=r.getAttribute("data-href");if(i===e||i===t)return r}},n=function(n){return new Promise((function(r,i){var a=o.miniCssF(n),s=o.p+a;if(t(a,s))return r();e(n,s,null,r,i)}))},r={524:0};o.f.miniCss=function(e,t){var o={594:1};r[e]?t.push(r[e]):0!==r[e]&&o[e]&&t.push(r[e]=n(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={524:0};o.f.j=function(t,n){var r=o.o(e,t)?e[t]:void 0;if(0!==r)if(r)n.push(r[2]);else{var i=new Promise((function(o,n){r=e[t]=[o,n]}));n.push(r[2]=i);var a=o.p+o.u(t),s=new Error,l=function(n){if(o.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=n&&("load"===n.type?"missing":n.type),a=n&&n.target&&n.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};o.l(a,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,n){var r,i,a=n[0],s=n[1],l=n[2],c=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)o.o(s,r)&&(o.m[r]=s[r]);if(l)var u=l(o)}for(t&&t(n);c<a.length;c++)i=a[c],o.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return o.O(u)},n=self["webpackChunkmy_professional_web_site"]=self["webpackChunkmy_professional_web_site"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=o.O(void 0,[96],(function(){return o(4606)}));n=o.O(n)})();
//# sourceMappingURL=app.bfa6394c.js.map