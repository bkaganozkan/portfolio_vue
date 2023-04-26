(function(){"use strict";var e={405:function(e,t,n){var a=n(144),o=n(998),i=n(2928),s=function(){var e=this,t=e._self._c;e._self._setupProxy;return t(o.Z,[t(i.Z,[t("router-view")],1)],1)},r=[],l=n(629),c=a.ZP.extend({name:"App",data:()=>({}),mounted(){window.onresize=()=>this.resizeWindow(screen.width)},methods:{...(0,l.nv)(["resizeWindow"])}}),u=c,d=n(1001),p=(0,d.Z)(u,s,r,!1,null,null,null),m=p.exports,h=n(5205);(0,h.z)("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var g=n(8345),f=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"main"}},[t("HeaderComponent"),t("router-view")],1)},v=[],b=n(266),w=n(4324),y=n(1713),k=function(){var e=this,t=e._self._c;return e.screenWidth>720?t("div",{staticClass:"sidebar-container"},[t("ul",{staticClass:"list-container"},[t("li",[t("a",{on:{click:function(t){return e.showIt("home")}}},[e._v(" Home")])]),t("li",[e._v(" About Me "),t("ul",[t("li",[t("a",{on:{click:function(t){return e.showIt("summary")}}},[e._v(" Summary")])]),t("li",[t("a",{on:{click:function(t){return e.showIt("experiences")}}},[e._v(" Experiences")])]),t("li",[t("a",{on:{click:function(t){return e.showIt("project")}}},[e._v(" Projects ")])])])]),t("li",[t("a",{on:{click:function(t){return e.showIt("contact")}}},[e._v(" Contact ")])]),t("li",[t("a",{on:{click:function(t){return e.downloadCV()}}},[e._v(" Download CV ")])]),t("ul",{staticClass:"social-links"},[t("li",[t("a",{attrs:{href:"https://github.com/bkaganozkan",target:"_blank"}},[t(w.Z,[e._v("mdi-github")])],1)]),t("li",[t("a",{attrs:{href:"https://www.linkedin.com/in/burakkaganozkan/",target:"_blank"}},[t(w.Z,[e._v("mdi-linkedin")])],1)]),t("li",[t("a",{attrs:{href:"mailto: kagan1996@gmail.com"}},[t(w.Z,[e._v("mdi-at")])],1)])])])]):t("div",{staticClass:"pa-4 mobile-container"},[t(y.Z,{attrs:{justify:"between"}},[t(b.Z,[e._v("BEKAOZ ")]),t(b.Z,{attrs:{cols:"2"}},[t(w.Z,{attrs:{size:"32px",color:"#f00"},on:{click:function(t){return e.changeStatusSidebar()}}},[e._v("mdi-format-list-bulleted-square")])],1)],1),e.sidebarStatus?t("div",{staticClass:"sidebar-mobile-container pa-2"},[t("ul",{staticStyle:{display:"grid"}},[t("li",[t("a",{on:{click:function(t){return t.preventDefault(),e.showIt("home")}}},[e._v(" Home")])]),t("li",[e._v(" About Me "),t("ul",[t("li",[t("a",{on:{click:function(t){return t.preventDefault(),e.showIt("summary")}}},[e._v(" Summary")])]),t("li",[t("a",{on:{click:function(t){return t.preventDefault(),e.showIt("experiences")}}},[e._v(" Experiences")])]),t("li",[t("a",{on:{click:function(t){return t.preventDefault(),e.showIt("project")}}},[e._v(" Projects ")])])])]),t("li",[t("a",{on:{click:function(t){return t.preventDefault(),e.showIt("contact")}}},[e._v(" Contact ")])]),t("li",[t("a",{on:{click:function(t){return t.preventDefault(),e.downloadCV()}}},[e._v(" Download CV ")])]),t("ul",{staticClass:"social-links",staticStyle:{"justify-self":"end"}},[t("li",[t("a",{attrs:{href:"https://github.com/bkaganozkan",target:"_blank"}},[t(w.Z,[e._v("mdi-github")])],1)]),t("li",[t("a",{attrs:{href:"https://www.linkedin.com/in/burakkaganozkan/",target:"_blank"}},[t(w.Z,[e._v("mdi-linkedin")])],1)]),t("li",[t("a",{attrs:{href:"mailto: kagan1996@gmail.com"}},[t(w.Z,[e._v("mdi-at")])],1)])])])]):e._e()],1)},_=[],S={data(){return{}},methods:{...(0,l.OI)(["changeStatusSidebar"]),showIt(e){var t=document.getElementById(e);t.scrollIntoView(!0,{behavior:"smooth"})},downloadCV(){const e="burakkagan_resume.pdf",t=document.createElement("a");t.href=e,t.setAttribute("download",""),document.body.appendChild(t),t.click(),document.body.removeChild(t)}},computed:{...(0,l.Se)({sidebarStatus:"getSidebarStatus",screenWidth:"getScreenWidth"})}},I=S,C=(0,d.Z)(I,k,_,!1,null,null,null),x=C.exports,P={components:{HeaderComponent:x},computed:{...(0,l.Se)({sidebarStatus:"getSidebarStatus",screenWidth:"getScreenWidth"})}},j=P,Z=(0,d.Z)(j,f,v,!1,null,null,null),D=Z.exports,T=function(){var e=this,t=e._self._c;return t("div",{staticClass:"home-container pa-6",class:[e.screenWidth>720?"ml-perc15":"mt-10"],attrs:{id:"home"}},[e._m(0),t("div",{staticClass:"py-8"},[e._v(" I've been working as a software engineer for 2 years now, and I have to say, writing code can be a real rollercoaster ride. Sometimes I feel like I'm on top of the world when everything is running smoothly, but other times I'm ready to throw my computer out the window when I can't figure out why my code isn't working. But hey, at least I can blame all my problems on my imaginary friend, Debuggy McBugface! I get so lost in my work that I forget to eat or sleep, but I figure if I can debug my way through a tough problem, I can probably figure out how to survive without food and water, right? ")]),t("div",[e._v("You want to find more about me ? GOOO DEEP DOWN !!!")]),t("div",{staticClass:"py-5",staticStyle:{"border-bottom":"3px dashed blueviolet"}}),e._m(1),t("div",{staticClass:"py-2",staticStyle:{"border-bottom":"3px dashed blueviolet"}}),t("SummaryPage",{staticClass:"py-4",attrs:{id:"summary"}}),t("div",{staticClass:"py-5",staticStyle:{"border-bottom":"3px dashed blueviolet"}}),t("ExperiencesPage",{staticClass:"py-4",attrs:{id:"experiences"}}),t("div",{staticClass:"py-5",staticStyle:{"border-bottom":"3px dashed blueviolet"}}),t("ProjectsPage",{staticClass:"py-4",attrs:{id:"project"}}),t("div",{staticClass:"py-5",staticStyle:{"border-bottom":"3px dashed blueviolet"}}),t("ContactPage",{staticClass:"py-4",attrs:{id:"contact"}})],1)},O=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"console-container"},[t("span",{attrs:{id:"text"}}),t("div",{staticClass:"console-underscore",attrs:{id:"console"}},[e._v("_")])])},function(){var e=this,t=e._self._c;return t("div",{staticClass:"py-12 add-container animated-text"},[t("div",[e._v("BURAK KAGAN OZKAN")])])}],E=(n(7658),n(5226)),A=function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"my-8"},[e._v("SUMMARY")]),t(y.Z,[t(b.Z,{attrs:{cols:"12",md:"6"}},[t("p",[e._v(" I am a meticulous software engineer with a strong self-motivation. I have experience working in agile teams, applying TDD practices and CI/CD processes. I am able to work independently as well as part of a team. I hold a Bachelor's degree in Computer Engineering from Pamukkale University, with a GPA of 3.12/4, and a Bachelor's degree in Computer Science from Bialystok University of Technology, with a GPA of 3.36/4. ")]),t("p",[e._v(" As a Full Stack Developer at Rooster Games, I initiated and completed a management system and file share project, writing more than 5 clean and maintainable modules and 30 microservices. I also efficiently handled data and previewed more than a hundred 3D models, and designed page and previewed hundreds of script files. ")]),t("p",[e._v(" Currently, I work as a Software Engineer at Huawei, where I have developed responsive and well-designed user interfaces in SaaS projects, collaborated with backend teams, and prepared a 140-page user guide as a document for Appcube. In addition, I wrote 5 articles about Cloud Essentials and hands-on techniques in 2 months, and prepared an advertisement for Huawei's competition page to reach more people. ")]),t("p",[e._v(" I have taken courses on Vue.js, Nuxt.js, Django, Three.js, TypeScript, and IT project management. I am fluent in English and a native Turkish speaker. ")])]),t(b.Z,[t("h2",[e._v("STACK")]),t(E.Z,{attrs:{indeterminate:"",color:"green"}}),t("ProgressStack",{attrs:{skill:"Javascript",value:90}}),t("ProgressStack",{attrs:{skill:"Typescript",value:60}}),t("ProgressStack",{attrs:{skill:"Python",value:40}}),t("ProgressStack",{attrs:{skill:"Vue.JS",value:90}}),t("ProgressStack",{attrs:{skill:"Angular",value:55}}),t("ProgressStack",{attrs:{skill:"Node.js",value:80}}),t("ProgressStack",{attrs:{skill:"Django",value:30}}),t("ProgressStack",{attrs:{skill:"Flask",value:40}}),t("ProgressStack",{attrs:{skill:"Git",value:80}}),t("ProgressStack",{attrs:{skill:"MongoDB",value:70}})],1)],1)],1)},H=[],W=function(){var e=this,t=e._self._c;return t(y.Z,{staticClass:"skill-item my-5 pr-5"},[t(b.Z,{attrs:{cols:"5",md:"3"}},[e._v(e._s(e.skill))]),t(b.Z,{attrs:{cols:"7",md:"8"}},[t(E.Z,{attrs:{"model-value":"10",color:"orange",height:"10",striped:""},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}})],1)],1)},B=[],M={props:{skill:String,value:Number},data(){return{currentValue:this.value}}},z=M,N=(0,d.Z)(z,W,B,!1,null,null,null),V=N.exports,F={components:{ProgressStack:V}},L=F,G=(0,d.Z)(L,A,H,!1,null,null,null),q=G.exports,R=function(){var e=this,t=e._self._c;return t("div",[t("h1",{staticClass:"my-8"},[e._v("Experiences")]),t("h3",[e._v("Rooster Games")]),t(E.Z,{staticClass:"my-3",attrs:{indeterminate:"",color:"red"}}),e._m(0),t("h3",[e._v("HUAWEI")]),t(E.Z,{staticClass:"my-3",attrs:{indeterminate:"",color:"red"}}),e._m(1)],1)},J=[function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v(" During my time at Rooster Games as a Full Stack Developer, I was responsible for initializing and managing a management system and file sharing project from scratch without any team or know-how. I was able to achieve the essential functionality of the project within 3 months. ")]),t("p",[e._v(" I wrote more than 5 clean and maintainable modules and more than 30 microservices, and efficiently handled data and previewed more than a hundred 3D models using Sketchfab. Additionally, I designed the page and previewed hundreds of script files using Github. ")]),t("p",[e._v(" My contributions to file sharing helped increase productivity, and I tested 4 mobile games and provided feedback to the team to improve the product's quality. Overall, I was able to successfully deliver the project within the given timeline and with high quality. ")])])},function(){var e=this,t=e._self._c;return t("div",[t("p",[e._v(" At Huawei, as a Software Engineer, I have been involved in developing responsive and well-designed user interfaces in SaaS projects as a frontend engineer. I collaborated with the backend team to ensure timely completion of projects before the due-date. ")]),t("p",[e._v(" One of my accomplishments at Huawei was preparing a well-organized 140-page user guide as a document of Appcube. I also wrote 5 articles about Cloud Essentials and hands-on techniques in just 2 months. ")]),t("p",[e._v(" In addition to my technical contributions, I took the initiative to prepare an advertisement to reach more people for the Huawei competition page. My ability to work both independently and as part of a team has enabled me to be a self-motivated and meticulous software engineer. ")]),t("p",[e._v(" I have experience working in agile teams and applying TDD practices along with CI/CD processes. Overall, my time at Huawei has allowed me to contribute to a variety of projects while developing my skills in a challenging and dynamic work environment. ")])])}],K={},U=K,Y=(0,d.Z)(U,R,J,!1,null,null,null),Q=Y.exports,$=function(){var e=this,t=e._self._c;return t("section",[t("h1",{staticClass:"my-8"},[e._v("PROJECTS")]),t(y.Z,{staticClass:"ma-0",attrs:{justify:"center"}},[t("ProjectComponenet",{attrs:{images:e.images_1,title:"Saga Store",description:e.sagaDescription,githubLink:"https://github.com/bkaganozkan/saga-store"}}),t("ProjectComponenet",{attrs:{images:e.images_2,title:"InstaFollower",description:e.InstaFollowerDescription,githubLink:"https://github.com/bkaganozkan/follower"}}),t("ProjectComponenet",{attrs:{images:e.images_instaBackend,title:"InstaFollower Backend",description:e.InstaFollowerDescription,githubLink:"https://github.com/bkaganozkan/follower-backend"}}),t("ProjectComponenet",{attrs:{images:e.images_3,title:"Horus Entegre",description:e.horusEntegreDescription,githubLink:"https://horusentegre.com/"}})],1)],1)},X=[],ee=n(6178),te=n(8356),ne=n(6760),ae=n(8262),oe=n(5495),ie=function(){var e=this,t=e._self._c;return t(b.Z,{staticClass:"project-item ma-8 pa-1",attrs:{cols:"12",md:"3"}},[t(oe.Z,{staticClass:"mb-3",staticStyle:{cursor:"pointer"},attrs:{src:e.images[0]},on:{click:function(t){return e.openCareousel()}}}),t("h4",{staticClass:"my-2"},[e._v(e._s(e.title))]),t("p",[e._v(" "+e._s(e.description)+" ")]),t(ee.Z,{staticClass:"github-btn",attrs:{color:"orange",rel:"dofollow"},on:{click:function(t){return e.routeToPage()}}},[e._v("Github Page")]),t(ae.Z,{model:{value:e.openDialog,callback:function(t){e.openDialog=t},expression:"openDialog"}},[t(te.Z,{attrs:{"hide-delimiters":"",height:"70%"}},e._l(e.images,(function(e,n){return t(ne.Z,{key:n,attrs:{src:e,cover:""}})})),1)],1)],1)},se=[],re={components:{},props:{images:Array,title:String,description:String,githubLink:String},data(){return{openDialog:!1}},methods:{openCareousel(){this.openDialog=!0},routeToPage(){window.open(this.githubLink,"_blank")}}},le=re,ce=(0,d.Z)(le,ie,se,!1,null,null,null),ue=ce.exports,de={components:{ProjectComponenet:ue},data(){return{images_1:[n(2955),n(9646),n(1345),n(2189),n(9277),n(9699)],images_2:[n(5065),n(7913),n(6188),n(7182),n(2429),n(589)],images_3:[n(9108),n(7607),n(7881),n(1679),n(293),n(1999)],images_instaBackend:[n(2361),n(3472)],sagaDescription:"SagaStore is an online platform where users can buy games and social \n      media followers. It offers a wide selection of games for various platforms and allows \n      customers to purchase social media followers to boost their online presence.\n       The platform is user-friendly and offers secure payment options to ensure a \n        safe and convenient shopping experience. With SagaStore, users can easily purchase\n      their favorite games and increase their social media following with just a few clicks.",InstaFollowerDescription:"InstaFollower is built using a variety of technologies, including Vue.js for front-end \n      development, HTML for structuring the website's content, and CSS for styling. Node.js is used on the back-end to provide \n      robust server-side functionalities and ensure smooth communication between the client and the server. These technologies allow for a seamless \n      user experience, ensuring that customers can easily navigate the platform and purchase Instagram followers hassle-free.",InstaFollowerBackendDescription:"The Instafollower backend is built using several technologies, including Node.js and MongoDB. Node.js is a popular server-side platform that allows for the creation of scalable, high-performance web applications. MongoDB, on the other hand, is a NoSQL database that provides a flexible data model and excellent performance at scale.\n\nIn addition to Node.js and MongoDB, Instafollower also leverages authentication and authorization mechanisms to ensure that user data is protected. Specifically, JSON Web Tokens (JWTs) are used to securely transmit user data between the client and server, while also ensuring that the data is tamper-proof.\n\nAnother important technology used in the Instafollower backend is cryptography. Cryptographic techniques are employed to encrypt and protect sensitive user information, such as passwords and payment details. This helps to ensure that user data is kept secure and confidential at all times.\n\nOverall, the combination of Node.js, MongoDB, authentication and authorization mechanisms, and cryptography provides a secure and scalable backend infrastructure for Instafollower.",horusEntegreDescription:"Horus Entegre is a brand that specializes in providing high-quality services to businesses. \n      The company uses a range of cutting-edge technologies, including HTML, CSS, and Vue.js, to create visually appealing and user-friendly websites. \n      Additionally, Horus Entegre leverages PHP to provide a reliable email service to clients, ensuring that their communication needs are met efficiently.\n       With a focus on quality and innovation,\n       Horus Entegre is dedicated to helping businesses achieve their goals by delivering top-notch web solutions and email services."}}},pe=de,me=(0,d.Z)(pe,$,X,!1,null,null,null),he=me.exports,ge=function(){var e=this;e._self._c;return e._m(0)},fe=[function(){var e=this,t=e._self._c;return t("section",[t("h1",{staticClass:"py-4"},[e._v("Contact")]),t("div",[e._v("E-Mail:"),t("span",[e._v(" kagan1996@gmail.com ")])]),t("div",[e._v("Phone"),t("span",[e._v(" +90 545 574 55 76 ")])])])}],ve={},be=ve,we=(0,d.Z)(be,ge,fe,!1,null,null,null),ye=we.exports,ke={components:{SummaryPage:q,ExperiencesPage:Q,ProjectsPage:he,ContactPage:ye},mounted(){this.HelloText(["Hello World"],"text")},methods:{HelloText(e,t){var n=!0,a=document.getElementById("console"),o=1,i=1,s=!1,r=document.getElementById(t);setInterval((()=>{0===o&&!1===s?(s=!0,r.innerHTML=e[0].substring(0,o),window.setTimeout((function(){var t=e.shift();e.push(t),i=1,o+=i,s=!1}),1e3)):o===e[0].length+1&&!1===s?(s=!0,window.setTimeout((function(){i=-1,o+=i,s=!1}),1e3)):!1===s&&(r.innerHTML=e[0].substring(0,o),o+=i)}),120),setInterval((function(){!0===n?(a.className="console-underscore hidden",n=!1):(a.className="console-underscore",n=!0)}),400)}},computed:{...(0,l.Se)({screenWidth:"getScreenWidth"})}},_e=ke,Se=(0,d.Z)(_e,T,O,!1,null,null,null),Ie=Se.exports;a.ZP.use(g.ZP);const Ce=[{path:"/",component:D,children:[{path:"/",name:"home",component:Ie}]}],xe=new g.ZP({mode:"history",base:"/",routes:Ce});var Pe=xe;a.ZP.use(l.ZP);var je=new l.ZP.Store({state:{sidebarOpen:!1,screenWidth:window.screen.width},getters:{getSidebarStatus:e=>e.sidebarOpen,getScreenWidth:e=>(console.log(e.screenWidth),e.screenWidth)},mutations:{changeStatusSidebar(e){e.sidebarOpen=!e.sidebarOpen}},actions:{resizeWindow({state:e},t){e.screenWidth=t}},modules:{}}),Ze=n(8864);a.ZP.use(Ze.Z);var De=new Ze.Z({icons:{iconfont:"mdi"}}),Te=n(7356);a.ZP.config.productionTip=!1,new a.ZP({router:Pe,store:je,vuetify:De,render:e=>e(m)}).$mount("#app"),a.ZP.use(Te.Z)},2955:function(e,t,n){e.exports=n.p+"img/lostark.ec8d45cc.jpg"},9646:function(e,t,n){e.exports=n.p+"img/m2.2d0a49e2.jpg"},1345:function(e,t,n){e.exports=n.p+"img/main.79289dad.jpg"},2189:function(e,t,n){e.exports=n.p+"img/metin2.b7254752.jpg"},9277:function(e,t,n){e.exports=n.p+"img/metin21.2d0a49e2.jpg"},9699:function(e,t,n){e.exports=n.p+"img/socail.64c69fd0.jpg"},2361:function(e,t,n){e.exports=n.p+"img/2.006209d7.png"},3472:function(e,t,n){e.exports=n.p+"img/3.37a64317.png"},5065:function(e,t,n){e.exports=n.p+"img/1.30dc610a.png"},7913:function(e,t,n){e.exports=n.p+"img/2.b2381ba0.png"},6188:function(e,t,n){e.exports=n.p+"img/3.04992012.png"},7182:function(e,t,n){e.exports=n.p+"img/4.6c696089.png"},2429:function(e,t,n){e.exports=n.p+"img/5.42226e26.png"},589:function(e,t,n){e.exports=n.p+"img/6.fbb06b91.png"},9108:function(e,t,n){e.exports=n.p+"img/1.9925f4a4.png"},7607:function(e,t,n){e.exports=n.p+"img/2.35bfe772.png"},7881:function(e,t,n){e.exports=n.p+"img/3.e188cb33.png"},1679:function(e,t,n){e.exports=n.p+"img/4.15d9b46d.png"},293:function(e,t,n){e.exports=n.p+"img/5.02b7e4b9.png"},1999:function(e,t,n){e.exports=n.p+"img/6.0e6bd6e8.png"}},t={};function n(a){var o=t[a];if(void 0!==o)return o.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,a,o,i){if(!a){var s=1/0;for(u=0;u<e.length;u++){a=e[u][0],o=e[u][1],i=e[u][2];for(var r=!0,l=0;l<a.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](a[l])}))?a.splice(l--,1):(r=!1,i<s&&(s=i));if(r){e.splice(u--,1);var c=o();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[a,o,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var a in t)n.o(t,a)&&!n.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,a){var o,i,s=a[0],r=a[1],l=a[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in r)n.o(r,o)&&(n.m[o]=r[o]);if(l)var u=l(n)}for(t&&t(a);c<s.length;c++)i=s[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},a=self["webpackChunkportfolyo_vue"]=self["webpackChunkportfolyo_vue"]||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))}();var a=n.O(void 0,[998],(function(){return n(405)}));a=n.O(a)})();
//# sourceMappingURL=app.f248ef06.js.map