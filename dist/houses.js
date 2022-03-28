"use strict";(self.webpackChunktibia=self.webpackChunktibia||[]).push([[458],{7683:(e,l,a)=>{a.r(l),a.d(l,{default:()=>F});var r=a(5166);const n={class:"card"},i=(0,r._)("div",{class:"card-header"},[(0,r._)("h2",{class:"card-title"},[(0,r._)("img",{src:"icons/houses.svg",alt:"",width:"18",height:"18"}),(0,r.Uk)(" Find free houses ")])],-1),s={class:"card-content"},t={class:"input-group large left"},o=(0,r._)("label",{for:"server"},"Select server",-1),d=(0,r._)("option",{value:"",disabled:"",selected:""},"Select...",-1),u=["value"],h=(0,r._)("small",null,[(0,r.Uk)("This tool depends on "),(0,r._)("a",{href:"https://tibiadata.com/",rel:"noopener",target:"_blank"},"TibiaData API")],-1),c={key:0,class:"mt"},b={class:"filters-pills"},v=["onClick"],m=(0,r._)("small",{class:"filters-info"},"Filter by town.",-1),f={key:1,class:"mt"},w={class:"filters-pills"},_=(0,r._)("small",{class:"filters-info"},"Show only houses with bid",-1),y={class:"mt"},k={class:"mt table-fixed"},g=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",null,"Name"),(0,r._)("th",{class:"hide-on-mobile"},"Rent"),(0,r._)("th",{class:"hide-on-mobile"},"Size"),(0,r._)("th",null,"Current bid"),(0,r._)("th",null,"Time left")])],-1),p={key:0},B=["href"],D={class:"hide-on-mobile"},S={class:"hide-on-mobile"},T={key:2,class:"loader-wrapper"},C=[(0,r._)("div",{class:"loader",role:"status"},null,-1)];var z=a(9669),H=a.n(z);const A={name:"Houses",data:function(){return{servers:["Adra","Alumbra","Antica","Ardera","Astera","Bastia","Batabra","Belobra","Bona","Cadebra","Calmera","Celebra","Celesta","Collabra","Damora","Descubra","Dibra","Epoca","Esmera","Famosa","Fera","Ferobra","Firmera","Gentebra","Gladera","Harmonia","Havera","Honbra","Illusera","Impulsa","Inabra","Issobra","Kalibra","Karna","Libertabra","Lobera","Luminera","Lutabra","Marbera","Marcia","Menera","Monza","Mudabra","Mykera","Nadora","Nefera","Nossobra","Ocebra","Olima","Ombra","Optera","Pacera","Peloria","Premia","Quelibra","Quintera","Refugia","Reinobra","Seanera","Secura","Serdebra","Solidera","Suna","Talera","Tembra","Thyria","Trona","Utobra","Venebra","Versa","Visabra","Vunira","Wintera","Wizera","Xandebra","Yonabra","Zenobra","Zuna","Zunera"],selectedServer:"",towns:["Ab'Dendriel","Ankrahmun","Carlin","Darashia","Edron","Farmine","Gray Beach","Issavi","Kazordoon","Liberty Bay","Port Hope","Rathleton","Svargrond","Thais","Venore","Yalahar"],server:{"Ab'Dendriel":null,Ankrahmun:null,Carlin:null,Darashia:null,Edron:null,Farmine:null,"Gray Beach":null,Issavi:null,Kazordoon:null,"Liberty Bay":null,"Port Hope":null,Rathleton:null,Svargrond:null,Thais:null,Venore:null,Yalahar:null},serverFree:{"Ab'Dendriel":null,Ankrahmun:null,Carlin:null,Darashia:null,Edron:null,Farmine:null,"Gray Beach":null,Issavi:null,Kazordoon:null,"Liberty Bay":null,"Port Hope":null,Rathleton:null,Svargrond:null,Thais:null,Venore:null,Yalahar:null},serverBidded:{"Ab'Dendriel":null,Ankrahmun:null,Carlin:null,Darashia:null,Edron:null,Farmine:null,"Gray Beach":null,Issavi:null,Kazordoon:null,"Liberty Bay":null,"Port Hope":null,Rathleton:null,Svargrond:null,Thais:null,Venore:null,Yalahar:null},filterByTown:null,isBidded:!1,loader:0}},methods:{checkServer:function(){let e=this.serverFree,l=this.serverBidded;this.filterByTown=null,this.selectedServer&&this.towns.forEach((a=>{this.loader++,H().get("https://api.tibiadata.com/v3/houses/"+this.selectedServer+"/"+a).then((r=>{e[a]=r.data.houses.house_list.filter((e=>!0!==e.rented)),l[a]=r.data.houses.house_list.filter((e=>!0!==e.rented)).filter((e=>""!==e.auction.time_left)),this.loader--}))})),this.server=e},filter:function(e){e===this.filterByTown?this.filterByTown=null:this.filterByTown=e},showBidded:function(){this.isBidded=!this.isBidded,this.isBidded?this.server=this.serverBidded:this.server=this.serverFree},formatNumber:function(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}}},F=(0,a(3744).Z)(A,[["render",function(e,l,a,z,H,A){return(0,r.wg)(),(0,r.iD)("article",n,[i,(0,r._)("div",s,[(0,r._)("div",t,[o,(0,r.wy)((0,r._)("select",{id:"server","onUpdate:modelValue":l[0]||(l[0]=l=>e.selectedServer=l),onChange:l[1]||(l[1]=(...e)=>A.checkServer&&A.checkServer(...e))},[d,((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.servers,((e,l)=>((0,r.wg)(),(0,r.iD)("option",{value:e,key:l},(0,r.zw)(e),9,u)))),128))],544),[[r.bM,e.selectedServer]])]),h,e.selectedServer?((0,r.wg)(),(0,r.iD)("div",c,[(0,r._)("div",b,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.towns,((l,a)=>((0,r.wg)(),(0,r.iD)("span",{class:(0,r.C_)(["filters-pill",{selected:e.filterByTown===l}]),onClick:e=>A.filter(l),key:a},(0,r.zw)(l),11,v)))),128))]),m])):(0,r.kq)("v-if",!0),e.selectedServer?((0,r.wg)(),(0,r.iD)("div",f,[(0,r._)("div",w,[(0,r._)("span",{class:(0,r.C_)(["filters-pill",{selected:e.isBidded}]),onClick:l[2]||(l[2]=e=>A.showBidded())},"Is bidded",2)]),_])):(0,r.kq)("v-if",!0),((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(e.server,((l,a)=>((0,r.wg)(),(0,r.iD)(r.HY,{key:a},[!e.selectedServer||null==l||!l.length||e.filterByTown&&e.filterByTown!==a?(0,r.kq)("v-if",!0):((0,r.wg)(),(0,r.iD)(r.HY,{key:0},[(0,r._)("h3",y,(0,r.zw)(a),1),(0,r._)("table",k,[g,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(l,((l,a)=>((0,r.wg)(),(0,r.iD)(r.HY,{key:a},["rented"!==l.status?((0,r.wg)(),(0,r.iD)("tr",p,[(0,r._)("td",null,[(0,r._)("a",{href:"https://www.tibia.com/community/?subtopic=houses&page=view&world="+e.selectedServer+"&houseid="+l.house_id,target:"_blank"},(0,r.zw)(l.name),9,B)]),(0,r._)("td",D,(0,r.zw)(A.formatNumber(l.rent)),1),(0,r._)("td",S,(0,r.zw)(l.size),1),(0,r._)("td",null,(0,r.zw)(A.formatNumber(l.auction.current_bid)),1),(0,r._)("td",null,(0,r.zw)(l.auction.time_left||"-"),1)])):(0,r.kq)("v-if",!0)],64)))),128))])])],64))],64)))),128)),e.loader>0?((0,r.wg)(),(0,r.iD)("div",T,C)):(0,r.kq)("v-if",!0)])])}]])}}]);