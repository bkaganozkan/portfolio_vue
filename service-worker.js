if(!self.define){let i,n={};const l=(l,e)=>(l=new URL(l+".js",e).href,n[l]||new Promise((n=>{if("document"in self){const i=document.createElement("script");i.src=l,i.onload=n,document.head.appendChild(i)}else i=l,importScripts(l),n()})).then((()=>{let i=n[l];if(!i)throw new Error(`Module ${l} didn’t register its module`);return i})));self.define=(e,r)=>{const s=i||("document"in self?document.currentScript.src:"")||location.href;if(n[s])return;let u={};const o=i=>l(i,s),f={module:{uri:s},exports:u,require:o};n[s]=Promise.all(e.map((i=>f[i]||o(i)))).then((i=>(r(...i),u)))}}define(["./workbox-db5fc017"],(function(i){"use strict";i.setCacheNameDetails({prefix:"portfolyo_vue"}),self.addEventListener("message",(i=>{i.data&&"SKIP_WAITING"===i.data.type&&self.skipWaiting()})),i.precacheAndRoute([{url:"/burakkagan_resume.pdf",revision:"2dd74acaf2f23968f3b964870eb518a2"},{url:"/css/app.0da2f8db.css",revision:null},{url:"/css/chunk-vendors.45be9361.css",revision:null},{url:"/fonts/DIGITALDREAM.a5a6471b.ttf",revision:null},{url:"/fonts/DIGITALDREAMFAT.9e35e986.ttf",revision:null},{url:"/fonts/MaterialIcons-Regular.14b0bb77.woff",revision:null},{url:"/fonts/MaterialIcons-Regular.a973ee76.eot",revision:null},{url:"/fonts/MaterialIcons-Regular.d1b99623.woff2",revision:null},{url:"/fonts/MaterialIcons-Regular.fa58bcb9.ttf",revision:null},{url:"/imdeveloper.png",revision:"9fa4710ddc4edeffce5498ffde8c9e9a"},{url:"/img/1.30dc610a.png",revision:null},{url:"/img/1.9925f4a4.png",revision:null},{url:"/img/2.006209d7.png",revision:null},{url:"/img/2.35bfe772.png",revision:null},{url:"/img/2.b2381ba0.png",revision:null},{url:"/img/3.04992012.png",revision:null},{url:"/img/3.37a64317.png",revision:null},{url:"/img/3.e188cb33.png",revision:null},{url:"/img/4.15d9b46d.png",revision:null},{url:"/img/4.6c696089.png",revision:null},{url:"/img/5.02b7e4b9.png",revision:null},{url:"/img/5.42226e26.png",revision:null},{url:"/img/6.0e6bd6e8.png",revision:null},{url:"/img/6.fbb06b91.png",revision:null},{url:"/img/lostark.ec8d45cc.jpg",revision:null},{url:"/img/m2.2d0a49e2.jpg",revision:null},{url:"/img/main.79289dad.jpg",revision:null},{url:"/img/metin2.b7254752.jpg",revision:null},{url:"/img/metin21.2d0a49e2.jpg",revision:null},{url:"/img/socail.64c69fd0.jpg",revision:null},{url:"/index.html",revision:"97c3b2a9559ba9d945520bf2f78f4331"},{url:"/indir.png",revision:"5ea3dbed933f859a99ad8d4fe3431f0d"},{url:"/js/app.3c33a82d.js",revision:null},{url:"/js/chunk-vendors.61732a87.js",revision:null},{url:"/manifest.json",revision:"e260152747c0bc3559d131a661fe700c"},{url:"/robots.txt",revision:"55af23d5d928f615b00cd919c195f3f2"}],{})}));
//# sourceMappingURL=service-worker.js.map
