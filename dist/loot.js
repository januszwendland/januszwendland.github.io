(self.webpackChunktibia=self.webpackChunktibia||[]).push([[887],{670:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>r});var s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"card"},[e._m(0),e._v(" "),t("div",{staticClass:"card-content"},[t("form",{on:{submit:function(a){return a.preventDefault(),e.parseLog.apply(null,arguments)}}},[t("div",{staticClass:"input-group large right"},[t("textarea",{directives:[{name:"model",rawName:"v-model",value:e.log,expression:"log"}],domProps:{value:e.log},on:{input:function(a){a.target.composing||(e.log=a.target.value)}}}),e._v(" "),t("button",[e._v("Split loot")])]),e._v(" "),e._m(1)]),e._v(" "),t("small"),e._v(" "),e.parsed?[e._m(2),e._v(" "),t("div",{staticClass:"row row-wrap"},e._l(e.logParsed,(function(a,s){return t("div",{staticClass:"col col-25"},[t("h3",{staticClass:"mt ellipsis"},[e._v("\n                        "+e._s(a.name)+"\n                        "),t("img",{attrs:{src:"icons/remove.svg",alt:"",width:"24px",height:"24px"},on:{click:function(a){return e.removePlayer(s)}}})]),e._v(" "),t("div",{staticClass:"input-group left mts"},[t("label",{attrs:{for:"loot_"+s}},[e._v("Loot")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:a.loot,expression:"player.loot",modifiers:{number:!0}}],attrs:{type:"number",id:"loot_"+s},domProps:{value:a.loot},on:{change:e.updateResult,input:function(t){t.target.composing||e.$set(a,"loot",e._n(t.target.value))},blur:function(a){return e.$forceUpdate()}}})]),e._v(" "),t("div",{staticClass:"input-group left mts"},[t("label",{attrs:{for:"supplies_"+s}},[e._v("Supplies")]),e._v(" "),t("input",{directives:[{name:"model",rawName:"v-model.number",value:a.supplies,expression:"player.supplies",modifiers:{number:!0}}],attrs:{type:"number",id:"supplies_"+s},domProps:{value:a.supplies},on:{change:e.updateResult,input:function(t){t.target.composing||e.$set(a,"supplies",e._n(t.target.value))},blur:function(a){return e.$forceUpdate()}}})])])})),0),e._v(" "),t("div",{staticClass:"mt"},e._l(e.transfer,(function(a){return t("p",[t("strong",[e._v(e._s(a.from))]),e._v(" should transfer "+e._s(a.gold)+" gp to "),t("strong",[e._v(e._s(a.to))]),e._v(".\n                ")])})),0),e._v(" "),t("div",{staticClass:"row mt"},[t("div",{staticClass:"col"},[t("div",{staticClass:"badge",class:{green:e.teamBalance>0,orange:0===e.teamBalance,red:e.teamBalance<0}},[e._v("\n                        Team balance\n                        "),t("span",[e._v(e._s(e.teamBalance))])])]),e._v(" "),t("div",{staticClass:"col"},[t("div",{staticClass:"badge",class:{green:e.playerBalance>0,orange:0===e.playerBalance,red:e.playerBalance<0}},[e._v("\n                        Each player balance\n                        "),t("span",[e._v(e._s(e.playerBalance))])])])])]:e._e()],2)])};s._withStripped=!0;const l={name:"Loot",data:function(){return{log:"",logParsed:[],parsed:!1,teamSize:0,teamBalance:0,playerBalance:0,transfer:[]}},methods:{parseLog:function(){let e=this.log.split("\n"),a=/\d+/g;e.splice(0,6),this.teamSize=e.length/6,this.teamBalance=0,this.logParsed=[],this.transfer=[];for(let t=0;t<this.teamSize;t++){let s=e[6*t].replace(" (Leader)",""),l=parseInt(e[6*t+1].replace(",","").match(a)),n=parseInt(e[6*t+2].replace(",","").match(a)),r=l-n;this.logParsed.push({name:s,loot:l,supplies:n,balance:r}),this.teamBalance=this.teamBalance+l-n}this.playerBalance=Math.floor(this.teamBalance/this.teamSize),isNaN(this.playerBalance)&&(this.playerBalance=0),this.transferFromTo(),this.parsed=!0},updateResult:function(){this.teamBalance=0,this.logParsed.forEach((e=>{this.teamBalance=this.teamBalance+parseInt(e.loot)-parseInt(e.supplies),e.balance=parseInt(e.loot)-parseInt(e.supplies)})),this.playerBalance=Math.floor(this.teamBalance/this.teamSize),isNaN(this.playerBalance)&&(this.playerBalance=0),this.transferFromTo()},removePlayer:function(e){this.logParsed.splice(e,1),this.teamSize--,this.updateResult()},transferFromTo:function(){let e=this;e.transfer=[],e.logParsed.forEach(((a,t)=>{if(a.balance>e.playerBalance){let s=Math.abs(a.balance-e.playerBalance),l=t;e.logParsed.forEach(((a,t)=>{if(s>0&&a.balance<e.playerBalance){let t=Math.abs(a.balance-e.playerBalance),n=0;t<s?(n=t,s-=t):(n=s,s=0),a.balance+=n,e.logParsed[l].balance-=n,e.transfer.push({from:e.logParsed[l].name,to:a.name,gold:n})}}))}}))}}};var n=(0,t(900).Z)(l,s,[function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"card-header"},[t("h2",{staticClass:"card-title"},[t("img",{attrs:{src:"icons/loot.svg",alt:"",width:"18px",height:"18px"}}),e._v("\n            In progress...\n        ")])])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("small",[e._v("Copy "),t("strong",[e._v("entire")]),e._v(" log from Party Hunt Analyser. Application "),t("strong",[e._v("do not")]),e._v(" store or validate pasted log.")])},function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"mt"},[t("small",[e._v("\n                    You can edit values in text fields."),t("br"),e._v("\n                    You can remove player by clicking '"),t("strong",[e._v("x")]),e._v("' icon.\n                ")])])}],!1,null,null,null);n.options.__file="src/js/components/Loot.vue";const r=n.exports}}]);