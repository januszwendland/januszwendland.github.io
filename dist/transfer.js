(self.webpackChunktibia=self.webpackChunktibia||[]).push([[809],{5668:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var o=r(8081),i=r.n(o),n=r(3645),a=r.n(n)()(i());a.push([e.id,".timer[data-v-ec7d22cc]{border:1px solid #adb5bd;border-radius:.3rem;overflow:hidden;margin:0 .5rem .5rem 0;padding:.75rem;position:relative;display:flex;align-items:center}.timer.active[data-v-ec7d22cc]{background:rgba(25,135,84,.3)}.timer-text[data-v-ec7d22cc]{padding:0 0 0 .75rem;text-align:center}.timer-text h3[data-v-ec7d22cc]{font-weight:300;font-size:1.12rem;padding:0;margin:0 0 .25rem}.timer-time[data-v-ec7d22cc]{font-weight:700;font-size:1.12rem}.timer-controls[data-v-ec7d22cc]{opacity:0;position:absolute;top:0;left:0;width:100%;height:100%;cursor:pointer;display:flex;justify-content:center;align-items:center;background:rgba(255,255,255,.95);transition:opacity .3s}.timer-controls[data-v-ec7d22cc]:hover{opacity:1}@media(max-width: 767.98px){.timer[data-v-ec7d22cc]{width:100%;margin:0 0 .5rem}.timer-text[data-v-ec7d22cc]{width:100%}}",""]);const l=a},3456:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var o=r(8081),i=r.n(o),n=r(3645),a=r.n(n)()(i());a.push([e.id,".server-info-icon[data-v-33d37137]{vertical-align:middle;display:inline-flex;margin:0 0 0 5px;padding:5px;background-color:#212529;border-radius:50%}",""]);const l=a},1965:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>S});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("article",{staticClass:"card"},[e._m(0),e._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col col-50"},[r("form",{staticClass:"input-group large right",on:{submit:function(t){return t.preventDefault(),e.addChar.apply(null,arguments)}}},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{placeholder:"Character name"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e._v(" "),r("button",[e._v("Add")])]),e._v(" "),e._m(1)])]),e._v(" "),r("div",{staticClass:"flex mt"},e._l(e.chars,(function(t){return r("h3",{staticClass:"pointer",class:{green:t===e.activeChar},on:{click:function(r){return e.setActiveChar(t)}}},[e._v("\n                "+e._s(t)+"\n                "),r("img",{attrs:{src:"icons/remove.svg",alt:"",width:"24px",height:"24px",title:"Remove char"},on:{click:function(r){return r.stopPropagation(),e.removeChar(t)}}})])})),0),e._v(" "),e.activeChar?r("small",[e._v("\n            You can remove character by clicking on 'x' icon."),r("br"),e._v("\n            Active character have "),r("strong",{staticClass:"green"},[e._v("green")]),e._v(" color.\n        ")]):e._e(),e._v(" "),e._l(e.timers,(function(t,o){return e.activeChar?[r("h3",{staticClass:"mt"},[e._v(e._s(o))]),e._v(" "),r("div",{staticClass:"flex"},e._l(t,(function(t){return r("div",{staticClass:"timer",class:{active:t.on}},[r("img",{attrs:{src:t.img,alt:"",width:"64px",height:"64px"}}),e._v(" "),r("div",{staticClass:"timer-text"},[r("h3",[e._v(e._s(t.name))]),e._v(" "),r("div",{staticClass:"timer-time"},[e._v(e._s(t.time))])]),e._v(" "),r("div",{staticClass:"timer-controls",on:{click:function(r){return e.setTimer(t)}}},[r("img",{directives:[{name:"show",rawName:"v-show",value:!t.on,expression:"!timer.on"}],attrs:{src:"icons/start.svg",alt:"Start timer",width:"32px",height:"32px"}}),e._v(" "),r("img",{directives:[{name:"show",rawName:"v-show",value:t.on,expression:"timer.on"}],attrs:{src:"icons/stop.svg",alt:"Stop timer",width:"32px",height:"32px"}})])])})),0)]:e._e()}))],2)])};o._withStripped=!0;var i=r(538),n=r(7287),a=r.n(n);i.Z.use(a(),{namespace:"tibiaTools_"});const l={name:"Timers",data:function(){return{timers:{Various:[{name:"Kroazur",img:"img/timers/kroazur.gif",cooldown:2,on:!1,time:"00:00:00",interval:null},{name:"Oberon",img:"img/timers/oberon.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Scarlett Etzel",img:"img/timers/scarlett-etzel.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Urmahlullu",img:"img/timers/urmahlullu.gif",cooldown:20,on:!1,time:"00:00:00",interval:null}],"Cults of Tibia":[{name:"Essence of Malice",img:"img/timers/essence-of-malice.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"False God",img:"img/timers/false-god.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Sandking",img:"img/timers/sandking.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Souldespoiler",img:"img/timers/souldespoiler.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Voidborn",img:"img/timers/voidborn.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Source of Corruption",img:"img/timers/source-of-corruption.gif",cooldown:20,on:!1,time:"00:00:00",interval:null}],"Forgotten Knowledge":[{name:"Dragonking Zyrtarch",img:"img/timers/dragonking-zyrtarch.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Lady Tenebris",img:"img/timers/lady-tenebris.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Lloyd",img:"img/timers/lloyd.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Melting Frozen Horror",img:"img/timers/melting-frozen-horror.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Time Guardian",img:"img/timers/time-guardian.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Thorn Knight",img:"img/timers/thorn-knight.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Last Lore Keeper",img:"img/timers/last-lore-keeper.gif",cooldown:336,on:!1,time:"00:00:00",interval:null}],Pirats:[{name:"Ratmiral Blackwhiskers",img:"img/timers/ratmiral-blackwhiskers.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Tentugly's Head",img:"img/timers/tentuglys-head.gif",cooldown:20,on:!1,time:"00:00:00",interval:null}],Warzones:[{name:"Deathstrike",img:"img/timers/deathstrike.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Gnomevil",img:"img/timers/gnomevil.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Abyssador",img:"img/timers/abyssador.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Baron from Below",img:"img/timers/baron-from-below.gif",cooldown:4,on:!1,time:"00:00:00",interval:null},{name:"Count of the Core",img:"img/timers/count-of-the-core.gif",cooldown:4,on:!1,time:"00:00:00",interval:null},{name:"Duke of the Depths",img:"img/timers/duke-of-the-depths.gif",cooldown:4,on:!1,time:"00:00:00",interval:null}],"Werelions bosses":[{name:"Katex Blood Tongue",img:"img/timers/katex-blood-tongue.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Srezz Yellow Eyes",img:"img/timers/srezz-yellow-eyes.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Utua Stone Sting",img:"img/timers/utua-stone-sting.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Yirkas Blue Scales",img:"img/timers/yirkas-blue-scales.gif",cooldown:4,on:!1,time:"00:00:00",interval:null}],Werebosses:[{name:"Black Vixen",img:"img/timers/black-vixen.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Bloodback",img:"img/timers/bloodback.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Darkfang",img:"img/timers/darkfang.gif",cooldown:20,on:!1,time:"00:00:00",interval:null},{name:"Shadowpelt",img:"img/timers/shadowpelt.gif",cooldown:4,on:!1,time:"00:00:00",interval:null},{name:"Sharpclaw",img:"img/timers/sharpclaw.gif",cooldown:4,on:!1,time:"00:00:00",interval:null}]},chars:[],activeChar:null,name:null}},methods:{formatNumber:function(e){return e>9?e:"0"+e},showTime:function(e){let t=this.activeChar.replaceAll(" ","_")+"_"+e.name.replaceAll(" ","_"),r=(i.Z.ls.get(t)-Date.now())/1e3,o=this.formatNumber(Math.floor(r/3600)),n=this.formatNumber(Math.floor((r-3600*o)/60)),a=this.formatNumber(Math.ceil(r-3600*o-60*n));e.on=!0,e.time=o+":"+n+":"+a},resetTimer:function(e){e.on=!1,e.time="00:00:00",clearInterval(e.interval)},setTimers:function(){for(const[e,t]of Object.entries(this.timers))t.forEach((e=>{let t=this.activeChar.replaceAll(" ","_")+"_"+e.name.replaceAll(" ","_");i.Z.ls.get(t)?(this.showTime(e),e.interval=setInterval((()=>{this.showTime(e)}),1e3)):this.resetTimer(e)}))},setTimer:function(e){let t=this.activeChar.replaceAll(" ","_")+"_"+e.name.replaceAll(" ","_"),r=60*e.cooldown*60*1e3;e.on?(this.resetTimer(e),i.Z.ls.remove(t)):(i.Z.ls.set(t,Date.now()+r,r),this.showTime(e),e.interval=setInterval((()=>{this.showTime(e)}),1e3))},checkChars:function(){i.Z.ls.get("chars")&&(this.chars=i.Z.ls.get("chars"),this.chars.length?(this.activeChar=this.chars[0],this.setTimers()):this.activeChar=null)},addChar:function(){this.name&&!this.chars.includes(this.name)?(this.chars.push(this.name),i.Z.ls.set("chars",this.chars),this.activeChar||this.setActiveChar(this.name),this.name=null):this.chars.includes(this.name)&&alert("Character already added!")},removeChar:function(e){this.chars=this.chars.filter((t=>t!==e)),i.Z.ls.set("chars",this.chars);for(const[t,r]of Object.entries(this.timers))r.forEach((t=>{let r=e.replaceAll(" ","_")+"_"+t.name.replaceAll(" ","_");this.resetTimer(t),i.Z.ls.remove(r)}));this.checkChars()},setActiveChar:function(e){if(this.activeChar!==e){this.activeChar=e;for(const[e,t]of Object.entries(this.timers))t.forEach((e=>{this.resetTimer(e)}));this.setTimers()}}},mounted:function(){this.checkChars()},beforeUnmount:function(){for(const[e,t]of Object.entries(this.timers))t.forEach((e=>{clearInterval(e.interval)}))}};var c=r(3379),s=r.n(c),p=r(7795),m=r.n(p),d=r(569),u=r.n(d),v=r(3565),g=r.n(v),h=r(9216),f=r.n(h),k=r(4589),b=r.n(k),y=r(5668),w={};w.styleTagTransform=b(),w.setAttributes=g(),w.insert=u().bind(null,"head"),w.domAPI=m(),w.insertStyleElement=f(),s()(y.Z,w),y.Z&&y.Z.locals&&y.Z.locals;var _=(0,r(1900).Z)(l,o,[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header"},[r("h2",{staticClass:"card-title"},[r("img",{attrs:{src:"icons/timers.svg",alt:"",width:"18px",height:"18px"}}),e._v(" "),r("span",[e._v("TIMERS "),r("span",{staticClass:"red"},[e._v("(in progress)")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("small",[e._v("\n                    Add your character, you can add multiple characters."),r("br"),e._v("\n                    This tools use browser local storage, if you clear browser data, use incognito mode or change browser it will not work.\n                ")])}],!1,null,"ec7d22cc",null);_.options.__file="src/js/components/Timers.vue";const S=_.exports},3659:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>b});var o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card"},[e._m(0),e._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"input-group large left"},[r("label",{attrs:{for:"server"}},[e._v("Current server")]),e._v(" "),r("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedServer,expression:"selectedServer"}],attrs:{id:"server"},on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){return"_value"in e?e._value:e.value}));e.selectedServer=t.target.multiple?r:r[0]}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("Select...")]),e._v(" "),e._l(e.servers,(function(t,o){return r("option",{domProps:{value:o}},[e._v(e._s(o))])}))],2)]),e._v(" "),e.selectedServer?[r("table",{staticClass:"mt table-fixed"},[e._m(1),e._v(" "),r("tbody",[r("tr",[r("td",[e._v("\n                        "+e._s(e.selectedServer)+"\n                        "),e.servers[e.selectedServer].premium?r("span",{staticClass:"server-info-icon hide-on-mobile"},[r("img",{attrs:{alt:"",title:"Premium",src:"icons/premium.svg",width:"18px",height:"18px"}})]):e._e(),e._v(" "),e.servers[e.selectedServer].blocked?r("span",{staticClass:"server-info-icon hide-on-mobile"},[r("img",{attrs:{alt:"",title:"Server blocked",src:"icons/blocked.svg",width:"18px",height:"18px"}})]):e._e(),e._v(" "),e.servers[e.selectedServer].locked?r("span",{staticClass:"server-info-icon hide-on-mobile"},[r("img",{attrs:{alt:"",title:"Server locked",src:"icons/locked.svg",width:"18px",height:"18px"}})]):e._e()]),e._v(" "),r("td",{staticClass:"center"},[r("img",{attrs:{alt:"",width:"30px",height:"30px",src:e.location[e.servers[e.selectedServer].location],title:e.servers[e.selectedServer].location}})]),e._v(" "),r("td",{staticClass:"center"},[r("img",{attrs:{alt:"",width:"30px",height:"30px",src:e.types[e.servers[e.selectedServer].type],title:e.servers[e.selectedServer].type}})]),e._v(" "),r("td",{staticClass:"center hide-on-mobile"},[r("img",{attrs:{alt:"",src:e.battleEye[e.servers[e.selectedServer].green].img,title:e.battleEye[e.servers[e.selectedServer].green].title}})])])])]),e._v(" "),r("h3",{staticClass:"mt"},[e._v("You can transfer to:")]),e._v(" "),r("table",{staticClass:"mt table-fixed"},[e._m(2),e._v(" "),r("tbody",e._l(e.servers,(function(t,o){return e.checkServer(o,t)?r("tr",[r("td",[e._v("\n                        "+e._s(o)+"\n                        "),t.premium?r("span",{staticClass:"server-info-icon hide-on-mobile"},[r("img",{attrs:{alt:"",title:"Premium",src:"icons/premium.svg",width:"18px",height:"18px"}})]):e._e(),e._v(" "),t.blocked?r("span",{staticClass:"server-info-icon hide-on-mobile"},[r("img",{attrs:{alt:"",title:"Server blocked",src:"icons/blocked.svg",width:"18px",height:"18px"}})]):e._e(),e._v(" "),t.locked?r("span",{staticClass:"server-info-icon hide-on-mobile"},[r("img",{attrs:{alt:"",title:"Server locked",src:"icons/locked.svg",width:"18px",height:"18px"}})]):e._e()]),e._v(" "),r("td",{staticClass:"center"},[r("img",{attrs:{alt:"",width:"30px",height:"30px",src:e.location[t.location],title:t.location}})]),e._v(" "),r("td",{staticClass:"center"},[r("img",{attrs:{alt:"",width:"30px",height:"30px",src:e.types[t.type],title:t.type}})]),e._v(" "),r("td",{staticClass:"center hide-on-mobile"},[r("img",{attrs:{alt:"",src:e.battleEye[t.green].img,title:e.battleEye[t.green].title}})])]):e._e()})),0)])]:e._e()],2)])};o._withStripped=!0;var i=r(3379),n=r.n(i),a=r(7795),l=r.n(a),c=r(569),s=r.n(c),p=r(3565),m=r.n(p),d=r(9216),u=r.n(d),v=r(4589),g=r.n(v),h=r(3456),f={};f.styleTagTransform=g(),f.setAttributes=m(),f.insert=s().bind(null,"head"),f.domAPI=l(),f.insertStyleElement=u(),n()(h.Z,f),h.Z&&h.Z.locals&&h.Z.locals;var k=(0,r(1900).Z)({name:"Transfer",data:function(){return{location:{Europe:"img/transfer/eu.webp","North America":"img/transfer/na.webp","South America":"img/transfer/sa.webp"},types:{"optional pvp":"img/transfer/optional.webp","open pvp":"img/transfer/open.webp","retro open pvp":"img/transfer/retro.webp","retro hardcore pvp":"img/transfer/retro-hardcore.webp","hardcore pvp":"img/transfer/hardcore.webp"},battleEye:{true:{img:"img/transfer/green.webp",title:"Green BattleEye"},false:{img:"img/transfer/yellow.webp",title:"Yellow BattleEye"}},servers:{Adra:{location:"Europe",type:"open pvp",green:!0,blocked:!0,locked:!1,premium:!1},Alumbra:{location:"South America",type:"open pvp",green:!0,blocked:!0,locked:!1,premium:!1},Antica:{location:"Europe",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},"Ardera ":{location:"North America",type:"retro hardcore pvp",green:!0,blocked:!0,locked:!1,premium:!0},Astera:{location:"North America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Belobra:{location:"South America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Bona:{location:"Europe",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Cadebra:{location:"South America",type:"retro hardcore pvp",green:!0,blocked:!0,locked:!1,premium:!0},Calmera:{location:"North America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Carnera:{location:"North America",type:"retro open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Celebra:{location:"South America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Celesta:{location:"Europe",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Concorda:{location:"Europe",type:"optional pvp",green:!0,blocked:!1,locked:!1,premium:!1},Damora:{location:"Europe",type:"optional pvp",green:!0,blocked:!1,locked:!1,premium:!1},Descubra:{location:"South America",type:"optional pvp",green:!0,blocked:!1,locked:!1,premium:!1},Dibra:{location:"South America",type:"open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Emera:{location:"North America",type:"retro open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Epoca:{location:"Europe",type:"retro open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Estela:{location:"Europe",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Famosa:{location:"Europe",type:"optional pvp",green:!0,blocked:!0,locked:!1,premium:!1},Fera:{location:"North America",type:"retro hardcore pvp",green:!0,blocked:!1,locked:!1,premium:!1},Ferobra:{location:"South America",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Fervora:{location:"Europe",type:"retro open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Firmera:{location:"North America",type:"retro open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Garnera:{location:"North America",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Gentebra:{location:"South America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Gladera:{location:"North America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Harmonia:{location:"Europe",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Honbra:{location:"South America",type:"open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Impera:{location:"North America",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Inabra:{location:"South America",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Javibra:{location:"South America",type:"retro open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Juva:{location:"Europe",type:"open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Kalibra:{location:"South America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Karna:{location:"Europe",type:"optional pvp",green:!0,blocked:!0,locked:!1,premium:!1},Kenora:{location:"Europe",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Libertabra:{location:"South America",type:"retro hardcore pvp",green:!0,blocked:!1,locked:!1,premium:!1},Lobera:{location:"North America",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Luminera:{location:"North America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Lutabra:{location:"South America",type:"retro open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Marcia:{location:"Europe",type:"open pvp",green:!0,blocked:!0,locked:!1,premium:!1},Menera:{location:"North America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Mercera:{location:"North America",type:"optional pvp",green:!0,blocked:!1,locked:!1,premium:!1},Mitigera:{location:"North America",type:"optional pvp",green:!0,blocked:!1,locked:!1,premium:!1},Monza:{location:"Europe",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Mudabra:{location:"South America",type:"retro open pvp",green:!0,blocked:!0,locked:!1,premium:!1},Nefera:{location:"North America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Nexa:{location:"Europe",type:"retro hardcore pvp",green:!0,blocked:!1,locked:!1,premium:!1},Nossobra:{location:"South America",type:"retro open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Ombra:{location:"South America",type:"open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Optera:{location:"North America",type:"optional pvp",green:!0,blocked:!0,locked:!1,premium:!1},Pacembra:{location:"South America",type:"optional pvp",green:!0,blocked:!1,locked:!1,premium:!1},Pacera:{location:"North America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Peloria:{location:"Europe",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Premia:{location:"Europe",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!0},Quelibra:{location:"South America",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Quintera:{location:"North America",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Ragna:{location:"Europe",type:"retro hardcore pvp",green:!0,blocked:!1,locked:!1,premium:!1},Refugia:{location:"Europe",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Reinobra:{location:"South America",type:"optional pvp",green:!1,blocked:!0,locked:!1,premium:!1},Relania:{location:"Europe",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Relembra:{location:"South America",type:"retro open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Secura:{location:"Europe",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Serdebra:{location:"South America",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Serenebra:{location:"South America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Solidera:{location:"North America",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Talera:{location:"North America",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Tembra:{location:"South America",type:"optional pvp",green:!0,blocked:!0,locked:!1,premium:!1},Unica:{location:"Europe",type:"retro open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Unisera:{location:"North America",type:"open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Utobra:{location:"South America",type:"open pvp",green:!0,blocked:!0,locked:!1,premium:!1},Venebra:{location:"South America",type:"optional pvp",green:!0,blocked:!1,locked:!1,premium:!1},Versa:{location:"Europe",type:"retro hardcore pvp",green:!0,blocked:!0,locked:!1,premium:!0},Visabra:{location:"South America",type:"retro hardcore pvp",green:!0,blocked:!1,locked:!1,premium:!1},Vunira:{location:"Europe",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Wintera:{location:"North America",type:"open pvp",green:!1,blocked:!1,locked:!1,premium:!1},Wizera:{location:"North America",type:"open pvp",green:!0,blocked:!0,locked:!1,premium:!1},Xandebra:{location:"South America",type:"open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Xylona:{location:"Europe",type:"open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Yonabra:{location:"South America",type:"optional pvp",green:!1,blocked:!1,locked:!1,premium:!1},Ysolera:{location:"North America",type:"open pvp",green:!0,blocked:!1,locked:!1,premium:!1},Zenobra:{location:"South America",type:"open pvp",green:!0,blocked:!0,locked:!1,premium:!1},Zuna:{location:"Europe",type:"hardcore pvp",green:!1,blocked:!1,locked:!0},Zunera:{location:"North America",type:"hardcore pvp",green:!1,blocked:!1,locked:!0}},selectedServer:""}},methods:{checkServer:function(e,t){let r=this.selectedServer,o=this.servers[this.selectedServer];if(e===r)return!1;if(t.blocked)return!1;if(o.locked)return o.locked&&t.locked;if("retro hardcore pvp"===o.type&&t.green)return o.green;if("retro hardcore pvp"===t.type)return!1;if("retro open pvp"===o.type||"open pvp"===o.type){if(!o.green)return!t.green}else if("retro open pvp"===t.type||"open pvp"===t.type)return!1;return!!o.green||!t.green}}},o,[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"card-header"},[r("h2",{staticClass:"card-title"},[r("img",{attrs:{src:"icons/transfer.svg",alt:"",width:"18px",height:"18px"}}),e._v("\n            Where can I transfer?\n        ")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",{staticClass:"center"},[e._v("Location")]),e._v(" "),r("th",{staticClass:"center"},[e._v("Type")]),e._v(" "),r("th",{staticClass:"center hide-on-mobile"},[e._v("BattlEye")])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Name")]),e._v(" "),r("th",{staticClass:"center"},[e._v("Location")]),e._v(" "),r("th",{staticClass:"center"},[e._v("Type")]),e._v(" "),r("th",{staticClass:"center hide-on-mobile"},[e._v("BattlEye")])])])}],!1,null,"33d37137",null);k.options.__file="src/js/components/Transfer.vue";const b=k.exports},7287:function(e,t,r){e.exports=function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function o(e,r,o){return r&&t(e.prototype,r),o&&t(e,o),e}function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var l={},c=new(function(){function t(){e(this,t),Object.defineProperty(this,"length",{get:function(){return Object.keys(l).length}})}return o(t,[{key:"getItem",value:function(e){return e in l?l[e]:null}},{key:"setItem",value:function(e,t){return l[e]=t,!0}},{key:"removeItem",value:function(e){return!!(e in l)&&delete l[e]}},{key:"clear",value:function(){return l={},!0}},{key:"key",value:function(e){var t=Object.keys(l);return void 0!==t[e]?t[e]:null}}]),t}()),s={},p=function(){function t(){e(this,t)}return o(t,null,[{key:"on",value:function(e,t){void 0===s[e]&&(s[e]=[]),s[e].push(t)}},{key:"off",value:function(e,t){s[e].length?s[e].splice(s[e].indexOf(t),1):s[e]=[]}},{key:"emit",value:function(e){var t=e||window.event,r=function(e){try{return JSON.parse(e).value}catch(t){return e}};if(void 0!==t&&void 0!==t.key){var o=s[t.key];void 0!==o&&o.forEach((function(e){e(r(t.newValue),r(t.oldValue),t.url||t.uri)}))}}}]),t}(),m=function(){function t(r){if(e(this,t),this.storage=r,this.options={namespace:"",events:["storage"]},Object.defineProperty(this,"length",{get:function(){return this.storage.length}}),"undefined"!=typeof window)for(var o in this.options.events)window.addEventListener?window.addEventListener(this.options.events[o],p.emit,!1):window.attachEvent?window.attachEvent("on".concat(this.options.events[o]),p.emit):window["on".concat(this.options.events[o])]=p.emit}return o(t,[{key:"setOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.options=Object.assign(this.options,e)}},{key:"set",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,o=JSON.stringify({value:t,expire:null!==r?(new Date).getTime()+r:null});this.storage.setItem(this.options.namespace+e,o)}},{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=this.storage.getItem(this.options.namespace+e);if(null!==r)try{var o=JSON.parse(r);if(null===o.expire)return o.value;if(o.expire>=(new Date).getTime())return o.value;this.remove(e)}catch(e){return t}return t}},{key:"key",value:function(e){return this.storage.key(e)}},{key:"remove",value:function(e){return this.storage.removeItem(this.options.namespace+e)}},{key:"clear",value:function(){if(0!==this.length){for(var e=[],t=0;t<this.length;t++){var r=this.storage.key(t);!1!==new RegExp("^".concat(this.options.namespace,".+"),"i").test(r)&&e.push(r)}for(var o in e)this.storage.removeItem(e[o])}}},{key:"on",value:function(e,t){p.on(this.options.namespace+e,t)}},{key:"off",value:function(e,t){p.off(this.options.namespace+e,t)}}]),t}(),d="undefined"!=typeof window?window:r.g||{},u={install:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=a(a({},t),{},{storage:t.storage||"local",name:t.name||"ls"});if(r.storage&&-1===["memory","local","session"].indexOf(r.storage))throw new Error('Vue-ls: Storage "'.concat(r.storage,'" is not supported'));var o=null;switch(r.storage){case"local":o="localStorage"in d?d.localStorage:null;break;case"session":o="sessionStorage"in d?d.sessionStorage:null;break;case"memory":o=c}o||(o=c,console.error('Vue-ls: Storage "'.concat(r.storage,'" is not supported your system, use memory storage')));var i=new m(o);i.setOptions(Object.assign(i.options,{namespace:""},r||{})),e[r.name]=i,Object.defineProperty(e.prototype,"$".concat(r.name),{get:function(){return i}})}};return d.VueStorage=u,u}()}}]);