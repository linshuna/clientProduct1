webpackJsonp([18],{IOlu:function(t,a){},PL68:function(t,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=s("mvHQ"),e=s.n(i),o=s("OgEt"),n=s("VsUZ"),r={name:"CarCountList",data:function(){return{clientvid:"",selected:"全部",searchValue:"",rightArrowIcon:s("q8gq"),techvid:null,allList:null,finishList:null,visitList:null}},mounted:function(){this.clientvid=this.getStorage?this.getStorage.vid:"",this.$nextTick(function(){var t=this.getStorage;t&&(this.techvid=t.vid,this.init())})},filters:{noDataTipFilter:function(t){return t||"暂无"},priceFilter:function(t){return t&&0!=t?"￥"+t:"￥0"}},components:{"no-data-tip":o.a},computed:{getStorage:function(){return this.$store.getters.getStorage}},methods:{init:function(){var t=this;Object(n.h)({clientvid:this.clientvid}).then(function(a){t.allList=a.all,t.finishList=a.finish,t.visitList=a.visit})},hasOrder:function(t,a,s){var i=this;this.$http.post("/api.php/TechMeet/hasOrder",{carvid:t,clientvid:a,serviceorder:s,techvid:this.techvid}).then(function(t){var a=t.data;if(200==a.errorCode){var s=Toast(a.message);setTimeout(function(){s.close()},2e3),i.init()}else Toast(a.message)}).catch(function(t){Toast(t)})},cancelOrder:function(t){window.location.href="reason.html?vid="+t},lookOrder:function(t){var a="";a=0==t.status?"pickupInfo.html?carvid="+t.carvid+"&clientvid="+t.clientvid+"#/type3":"pickupOrder.html?carno="+t.carNo+"&carvid="+t.carvid+"&clientvid="+t.clientvid+"&orderNo="+t.orderNo+"#/path",window.location.href=a},hasAccount:function(t){},hasConfirmation:function(t){var a=this;this.$http.post("/api.php/TechService/makesure",{orderNo:t}).then(function(t){var s=t.data;200==s.errorCode?(Toast("已确认提车"),a.init()):Toast(s.message)}).catch(function(t){Toast(t)})},hasReport:function(t){this.$router.push({path:"/UserCenter/CarHasReportDetail/"+t})},hasEvaluate:function(t,a){var s=e()({orderNo:t,isRecomment:a});this.$router.push({path:"/UserCenter/CarCountEvaldetails/"+s})},saveReport:function(t){window.location.href="saveReportDetail.html?orderNo="+t},lookReport:function(t,a){var s=e()({orderNo:t,status:a});this.$router.push({path:"/UserCenter/CarCountDetail/"+s})}}},c={render:function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"set-tab-default",attrs:{id:"carDetailMsgWrap"}},[s("div",{staticClass:"carDetailMsg"},[s("mt-tabbar",{attrs:{fixed:""},model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}},[s("mt-tab-item",{attrs:{id:"全部"}},[t._v("  \n        全部  \n      ")]),t._v(" "),s("mt-tab-item",{attrs:{id:"待结算"}},[t._v("  \n        待结算 \n      ")]),t._v(" "),s("mt-tab-item",{attrs:{id:"已完成"}},[t._v("  \n        已完成  \n      ")])],1),t._v(" "),t.getStorage?s("div",{staticClass:"tabCon",staticStyle:{"padding-bottom":"1.5rem"}},[s("mt-tab-container",{staticClass:"page-tabbar-container",model:{value:t.selected,callback:function(a){t.selected=a},expression:"selected"}},[s("mt-tab-container-item",{attrs:{id:"全部"}},[t.allList&&0!=t.allList.length?s("div",{staticClass:"carStatelist"},[s("ul",t._l(t.allList,function(a,i){return s("li",{staticClass:"border-bottom-1px",on:{click:function(s){s.stopPropagation(),t.lookReport(a.orderNo,a.status)}}},[s("img",{staticClass:"leftIconList",attrs:{src:a.icon,alt:""}}),t._v(" "),s("div",{staticClass:"rightList"},[s("p",{staticClass:"clearFloat"},[s("span",{staticClass:"fl setCarnoFont"},[t._v(t._s(a.carNo))]),t._v(" "),s("span",{staticClass:"orangeColor fr setTitleFont"},[t._v("\n                      "+t._s(2==a.status?"待结算":3==a.status?"已结算":4==a.status?"已完成":"待定"))])]),t._v(" "),s("p",{staticClass:"clearFloat"},[s("span",{staticClass:"grayColor fl"},[t._v(t._s(a.uname))]),t._v(" "),0!=a.status?s("span",{staticClass:"blueColor fr"},[t._v(t._s(t._f("priceFilter")(a.money)))]):t._e()]),t._v(" "),2==a.status?s("p",{staticClass:"clearFloat"},[s("span",{staticClass:"changeDrive fr"},[s("button",[t._v("确认结算")])])]):t._e(),t._v(" "),0!=a.status?s("p",[s("span",{staticClass:"grayColor"},[t._v(t._s(t._f("noDataTipFilter")(a.project)))])]):t._e()])])}))]):[s("no-data-tip",{attrs:{tipData:{typeTipe:0,titleTip:"订单",conTip:"暂无预约单记录"}}})]],2),t._v(" "),s("mt-tab-container-item",{attrs:{id:"待结算"}},[t.finishList&&0!=t.finishList.length?[s("div",{staticClass:"carStatelist"},[s("ul",t._l(t.finishList,function(a,i){return s("li",{staticClass:"border-bottom-1px",on:{click:function(s){s.stopPropagation(),t.lookReport(a.orderNo,a.status)}}},[s("img",{staticClass:"leftIconList",attrs:{src:a.icon,alt:""}}),t._v(" "),s("div",{staticClass:"rightList"},[s("p",{staticClass:"clearFloat"},[s("span",{staticClass:"fl setCarnoFont"},[t._v(t._s(a.carNo))]),t._v(" "),s("span",{staticClass:"orangeColor fr setTitleFont"},[t._v("待结算")])]),t._v(" "),s("p",{staticClass:"grayColor"},[t._v(t._s(a.uname))]),t._v(" "),s("p",{staticClass:"clearFloat"},[s("span",{staticClass:"grayColor fl"},[t._v(t._s(t._f("noDataTipFilter")(a.project)))])]),s("p",{staticClass:"clearFloat"},[s("span",{staticClass:"changeDrive fr"},[s("button",[t._v("确认结算")])])]),t._v(" "),s("p")])])}))])]:[s("no-data-tip",{attrs:{tipData:{typeTipe:0,titleTip:"订单",conTip:"暂无预约单记录"}}})]],2),t._v(" "),s("mt-tab-container-item",{attrs:{id:"已完成"}},[t.visitList&&0!=t.visitList.length?[s("div",{staticClass:"carStatelist"},[s("ul",t._l(t.visitList,function(a,i){return s("li",{staticClass:"border-bottom-1px",on:{click:function(s){s.stopPropagation(),t.lookReport(a.orderNo,a.status)}}},[s("img",{staticClass:"leftIconList",attrs:{src:a.icon,alt:""}}),t._v(" "),s("div",{staticClass:"rightList"},[s("p",{staticClass:"clearFloat"},[s("span",{staticClass:"fl setCarnoFont"},[t._v(t._s(a.carNo))]),t._v(" "),s("span",{staticClass:"orangeColor fr setTitleFont"},[t._v("已完成")])]),t._v(" "),s("p",{staticClass:"clearFloat"},[s("span",{staticClass:"grayColor fl"},[t._v(t._s(a.uname))]),t._v(" "),s("span",{staticClass:"blueColor fr"},[t._v(t._s(t._f("priceFilter")(a.money)))])]),t._v(" "),s("p",{staticClass:"grayColor"},[t._v("\n                      "+t._s(t._f("noDataTipFilter")(a.project))+"\n                    ")]),t._v(" "),s("p",{staticClass:"clearFloat"},[s("span",{staticClass:"changeDrive fr"},[s("button",{on:{click:function(s){s.stopPropagation(),t.hasEvaluate(a.orderNo,a.isRecomment)}}},[0==a.isRecomment?s("span",[t._v("立即点评")]):s("span",[t._v("查看点评")])]),t._v(" "),s("button",{on:{click:function(s){s.stopPropagation(),t.hasReport(a.orderNo)}}},[t._v("检测报告")])])])])])}))])]:[s("no-data-tip",{attrs:{tipData:{typeTipe:0,titleTip:"订单",conTip:"暂无预约单记录"}}})]],2)],1)],1):t._e()],1),t._v(" "),s("router-view")],1)},staticRenderFns:[]},l=s("VU/8")(r,c,!1,function(t){s("vfDx"),s("IOlu")},"data-v-6cc2d704",null);a.default=l.exports},vfDx:function(t,a){}});