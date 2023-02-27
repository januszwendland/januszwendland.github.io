"use strict";(self.webpackChunktibia=self.webpackChunktibia||[]).push([[458],{4099:(e,l,r)=>{r.r(l),r.d(l,{default:()=>z});var a=r(5166);const s={class:"card"},n=(0,a._)("div",{class:"card-header"},[(0,a._)("h2",{class:"card-title"},[(0,a._)("img",{src:"icons/houses.svg",alt:"",width:"18",height:"18"}),(0,a.Uk)(" Find free houses ")])],-1),i={class:"card-content"},t={class:"input-group large left"},o=(0,a._)("label",{for:"server"},"Select server",-1),u=(0,a._)("option",{value:"",disabled:"",selected:""},"Select...",-1),d=["value"],h=(0,a._)("small",null,[(0,a.Uk)("This tool depends on "),(0,a._)("a",{href:"https://tibiadata.com/",rel:"noopener",target:"_blank"},"TibiaData API")],-1),c={key:0,class:"mt"},b={class:"filters-pills"},f=["onClick"],v=(0,a._)("small",{class:"filters-info"},"Filter by town.",-1),m={key:1,class:"mt"},w={class:"filters-pills"},_=(0,a._)("small",{class:"filters-info"},"Other filers.",-1),y={class:"mt"},B={class:"mt table-fixed"},k=(0,a._)("thead",null,[(0,a._)("tr",null,[(0,a._)("th",null,"Name"),(0,a._)("th",{class:"hide-on-mobile"},"Rent"),(0,a._)("th",{class:"hide-on-mobile"},"Size"),(0,a._)("th",null,"Current bid"),(0,a._)("th",null,"Time left")])],-1),p={key:0},g=["href"],D={class:"hide-on-mobile"},S={class:"hide-on-mobile"},C={key:2,class:"loader-wrapper"},H=[(0,a._)("div",{class:"loader",role:"status"},null,-1)];var T=r(2861);const L={name:"Houses",data:function(){return{servers:["Adra","Alumbra","Antica","Ardera","Astera","Axera","Bastia","Batabra","Belobra","Bombra","Bona","Cadebra","Calmera","Castela","Celebra","Celesta","Collabra","Damora","Descubra","Dia","Dibra","Epoca","Esmera","Etebra","Famosa","Fera","Ferobra","Firmera","Gentebra","Gladera","Harmonia","Havera","Honbra","Illusera","Impulsa","Inabra","Issobra","Kalibra","Kardera","Karna","Libertabra","Lobera","Luminera","Lutabra","Marbera","Marcia","Menera","Monza","Mudabra","Mykera","Nadora","Nefera","Nossobra","Ocebra","Olima","Ombra","Optera","Ousabra","Pacera","Peloria","Premia","Quelibra","Quintera","Refugia","Reinobra","Seanera","Secura","Serdebra","Solidera","Suna","Syrena","Talera","Tembra","Thyria","Trona","Utobra","Venebra","Versa","Visabra","Vitera","Vunira","Wintera","Wizera","Xandebra","Yonabra","Zenobra","Zuna","Zunera"],selectedServer:"",towns:["Ab'Dendriel","Ankrahmun","Carlin","Darashia","Edron","Farmine","Gray Beach","Issavi","Kazordoon","Liberty Bay","Port Hope","Rathleton","Svargrond","Thais","Venore","Yalahar"],server:{"Ab'Dendriel":null,Ankrahmun:null,Carlin:null,Darashia:null,Edron:null,Farmine:null,"Gray Beach":null,Issavi:null,Kazordoon:null,"Liberty Bay":null,"Port Hope":null,Rathleton:null,Svargrond:null,Thais:null,Venore:null,Yalahar:null},serverFree:{"Ab'Dendriel":null,Ankrahmun:null,Carlin:null,Darashia:null,Edron:null,Farmine:null,"Gray Beach":null,Issavi:null,Kazordoon:null,"Liberty Bay":null,"Port Hope":null,Rathleton:null,Svargrond:null,Thais:null,Venore:null,Yalahar:null},serverBidded:{"Ab'Dendriel":null,Ankrahmun:null,Carlin:null,Darashia:null,Edron:null,Farmine:null,"Gray Beach":null,Issavi:null,Kazordoon:null,"Liberty Bay":null,"Port Hope":null,Rathleton:null,Svargrond:null,Thais:null,Venore:null,Yalahar:null},serverHoursLeft:{"Ab'Dendriel":null,Ankrahmun:null,Carlin:null,Darashia:null,Edron:null,Farmine:null,"Gray Beach":null,Issavi:null,Kazordoon:null,"Liberty Bay":null,"Port Hope":null,Rathleton:null,Svargrond:null,Thais:null,Venore:null,Yalahar:null},filterByTown:null,isBidded:!1,hoursLeft:!1,loader:0}},methods:{checkServer:function(){let e=this.serverFree,l=this.serverBidded,r=this.serverHoursLeft;this.filterByTown=null,this.selectedServer&&this.towns.forEach((a=>{this.loader++,T.Z.get("https://api.tibiadata.com/v3/houses/"+this.selectedServer+"/"+a).then((s=>{e[a]=s.data.houses.house_list.filter((e=>!0!==e.rented)),l[a]=s.data.houses.house_list.filter((e=>!0!==e.rented)).filter((e=>""!==e.auction.time_left)),r[a]=s.data.houses.house_list.filter((e=>!0!==e.rented)).filter((e=>e.auction.time_left.match(/hours/))),this.loader--}))})),this.isBidded=!1,this.server=e},filter:function(e){e===this.filterByTown?this.filterByTown=null:this.filterByTown=e},showBidded:function(){this.hoursLeft=!1,this.isBidded=!this.isBidded,this.isBidded?this.server=this.serverBidded:this.server=this.serverFree},showHours:function(){this.isBidded=!1,this.hoursLeft=!this.hoursLeft,this.hoursLeft?this.server=this.serverHoursLeft:this.server=this.serverFree},formatNumber:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},z=(0,r(3744).Z)(L,[["render",function(e,l,r,T,L,z){return(0,a.wg)(),(0,a.iD)("article",s,[n,(0,a._)("div",i,[(0,a._)("div",t,[o,(0,a.wy)((0,a._)("select",{id:"server","onUpdate:modelValue":l[0]||(l[0]=l=>e.selectedServer=l),onChange:l[1]||(l[1]=(...e)=>z.checkServer&&z.checkServer(...e))},[u,((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.servers,((e,l)=>((0,a.wg)(),(0,a.iD)("option",{value:e,key:l},(0,a.zw)(e),9,d)))),128))],544),[[a.bM,e.selectedServer]])]),h,e.selectedServer?((0,a.wg)(),(0,a.iD)("div",c,[(0,a._)("div",b,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.towns,((l,r)=>((0,a.wg)(),(0,a.iD)("span",{class:(0,a.C_)(["filters-pill",{selected:e.filterByTown===l}]),onClick:e=>z.filter(l),key:r},(0,a.zw)(l),11,f)))),128))]),v])):(0,a.kq)("v-if",!0),e.selectedServer?((0,a.wg)(),(0,a.iD)("div",m,[(0,a._)("div",w,[(0,a._)("span",{class:(0,a.C_)(["filters-pill",{selected:e.isBidded}]),onClick:l[2]||(l[2]=e=>z.showBidded())},"Is bidded",2),(0,a._)("span",{class:(0,a.C_)(["filters-pill",{selected:e.hoursLeft}]),onClick:l[3]||(l[3]=e=>z.showHours())},"Hours left",2)]),_])):(0,a.kq)("v-if",!0),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.server,((l,r)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:r},[!e.selectedServer||null==l||!l.length||e.filterByTown&&e.filterByTown!==r?(0,a.kq)("v-if",!0):((0,a.wg)(),(0,a.iD)(a.HY,{key:0},[(0,a._)("h3",y,(0,a.zw)(r),1),(0,a._)("table",B,[k,(0,a._)("tbody",null,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(l,((l,r)=>((0,a.wg)(),(0,a.iD)(a.HY,{key:r},["rented"!==l.status?((0,a.wg)(),(0,a.iD)("tr",p,[(0,a._)("td",null,[(0,a._)("a",{href:"https://www.tibia.com/community/?subtopic=houses&page=view&world="+e.selectedServer+"&houseid="+l.house_id,target:"_blank"},(0,a.zw)(l.name),9,g)]),(0,a._)("td",D,(0,a.zw)(z.formatNumber(l.rent)),1),(0,a._)("td",S,(0,a.zw)(l.size),1),(0,a._)("td",null,(0,a.zw)(z.formatNumber(l.auction.current_bid)),1),(0,a._)("td",null,(0,a.zw)(l.auction.time_left||"-"),1)])):(0,a.kq)("v-if",!0)],64)))),128))])])],64))],64)))),128)),e.loader>0?((0,a.wg)(),(0,a.iD)("div",C,H)):(0,a.kq)("v-if",!0)])])}]])}}]);