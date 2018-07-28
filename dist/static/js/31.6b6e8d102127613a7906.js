webpackJsonp([31],{WJ4l:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=e("Q50t"),a=e("VsUZ"),n=e("aYDR"),r=e("hU7x"),o={name:"Appointment",mixins:[i.b],components:{"pro-city-area":n.a},data:function(){return{AppointShopList:[],pageData:{},clientvid:"",longitude:"",latitude:"",StoreaList:[],addressValue:0,addressName:"",checkedName:"",currentPicker:1,popupVisible:!1,addressname:{},allAddress:[],search:"",sorts:1,isChangeRouter:!1,sortsText:"默认排序"}},mounted:function(){var t=this.$store.getters.getStorage;this.clientvid=t?t.vid:"";var s=this;r("https://apis.map.qq.com/ws/location/v1/ip?key=IK2BZ-QCAKQ-QJ45W-GCLNJ-JCWSK-GWBYA&output=jsonp",null,function(t,e){var i=e.result,a=i.ad_info.city+" "+i.ad_info.district;s.$set(s.addressname,"name",a),s.$set(s.addressname,"longitude",i.location.lng),s.$set(s.addressname,"latitude",i.location.lat),s.$set(s.addressname,"code",i.ad_info.adcode),console.log(i)})},watch:{addressname:function(t,s){this.longitude=t.longitude,this.latitude=t.latitude,this._getNearbyStorea()}},methods:{_getNearbyStorea:function(){var t=this;Object(a._0)({longitude:this.longitude,latitude:this.latitude,search:this.search,sorts:this.sorts}).then(function(s){t.StoreaList=s.store})},changeType:function(t){this.currentPicker=t,this.popupVisible=!0},onValuesChange:function(){document.getElementsByClassName("picker-slot-wrapper")[0]},gainAllAddress:function(t){this.$set(this.addressname,"name",t.area),this.search=t.search,this._getNearbyStorea()},gainSort:function(t){this.sorts=t.value,this.sortsText=t.name,this._getNearbyStorea()},order:function(t){if(!this.clientvid)return this.$store.commit("showToast","您未登录，即将为你跳转。。。"),this.$store.commit("delay",{url:"/Login",$router:this.$router,time:2500}),!1;this.isChangeRouter=!0,this.$router.push({path:"/Appointment/NowAppoint/"+t})},lookStoreDetail:function(t){this.$router.push({path:"/Appointment/storeDetail/"+t})}}},c={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"appointment-wrap"},[i("nav",[i("div",{staticClass:"addres",on:{click:function(s){t.changeType(1)}}},[i("p",{staticClass:"city"},[t._v(t._s(t.addressname.name))]),t._v(" "),i("img",{attrs:{src:e("91q3"),alt:""}})]),t._v(" "),i("p",{staticClass:"sort",on:{click:function(s){t.changeType(2)}}},[t._v(t._s(t.sortsText)+"\n        "),i("img",{attrs:{src:e("91q3"),alt:""}})])]),t._v(" "),i("pro-city-area",{attrs:{current:t.currentPicker,popupVisible:t.popupVisible},on:{"update:current":function(s){t.currentPicker=s},"update:popupVisible":function(s){t.popupVisible=s},gainAllAddress:t.gainAllAddress,gainSort:t.gainSort}}),t._v(" "),t.StoreaList&&t.StoreaList.length>0?[i("ul",{staticClass:"store-list"},t._l(t.StoreaList,function(s){return i("li",{on:{click:function(e){e.stopPropagation(),t.lookStoreDetail(s.id)}}},[i("div",{staticClass:"store-hd"},[i("p",[t._v(t._s(s.name))]),t._v(" "),i("img",{staticClass:"r-arrow",attrs:{src:e("q8gq"),alt:""}})]),t._v(" "),i("div",{staticClass:"store-bd clearfix"},[i("img",{staticClass:"store-img fl",attrs:{src:s.pic,alt:""}}),t._v(" "),i("div",{staticClass:"store-info-box fl"},[i("p",{staticClass:"appointment-sum"},[t._v("预约数："+t._s(s.appointment)+"次\n              ")]),t._v(" "),i("div",{staticClass:"item-box"},[i("div",{class:{"app-hot":2==s.state,"app-accept":1==s.state,"app-full":0==s.state||3==s.state}},[t._v(t._s(t._f("serverTypeFilter")(s.state)))]),t._v(" "),i("div",{staticClass:"item-sum"},[t._v(t._s(s.type_name))])]),t._v(" "),i("p",{staticClass:"store-time"},[t._v("预约时间："+t._s(s.storeTime))]),t._v(" "),i("p",{staticClass:"store-address"},[t._v("地址："+t._s(s.city)+t._s(s.dist)+t._s(s.address))])]),t._v(" "),i("div",{staticClass:"setRight"},[i("button",{staticClass:"appointment-btn",on:{click:function(e){e.stopPropagation(),t.order(s.id)}}},[t._v("立即预约")]),t._v(" "),i("div",{staticClass:"store-dist"},[t._v("大约"+t._s(t._f("distanceFilter")(s.distance)))])])])])}))]:[i("p",{staticStyle:{"text-align":"center","margin-top":"10%","font-size":".28rem"}},[t._v("暂时搜索不到店铺，更换筛选条件")])]],2)},staticRenderFns:[]},l=e("VU/8")(o,c,!1,function(t){e("bq95")},"data-v-9850c5d8",null);s.default=l.exports},bq95:function(t,s){}});