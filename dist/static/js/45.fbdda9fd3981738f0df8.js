webpackJsonp([45],{Ok1g:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var i=n("VsUZ"),e={name:"Insurance",data:function(){return{ClientRiskIndexList:[]}},mounted:function(){this._getClientRiskIndex()},methods:{_getClientRiskIndex:function(){var t=this;Object(i.H)().then(function(s){t.ClientRiskIndexList=s,console.log(s.labels)})},moveUrl:function(t){window.location.href=t}}},a={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"insurance-wrap mask"},[n("ul",{staticClass:"insurance"},t._l(t.ClientRiskIndexList,function(s){return n("li",{staticClass:"nav",on:{click:function(n){n.stopPropagation(),t.moveUrl(s.url)}}},[n("div",{staticClass:"nav_left"},[n("div",{staticClass:"nav_left_section_img"},[n("div",{staticClass:"nav_left_section"},[n("img",{attrs:{src:s.pic,alt:""}})])])]),t._v(" "),n("div",{staticClass:"nav_right"},[n("div",{staticClass:"nav_right_section"},[n("div",{staticClass:"nav_right_top"},[n("p",[t._v(t._s(s.name))]),t._v(" "),n("p",{staticClass:"desc"},[t._v(t._s(s.desc))])]),t._v(" "),n("div",{staticClass:"nav_right_footer"},t._l(s.labels,function(s,i){return n("p",[t._v(t._s(s[i]))])}))])])])}))])},staticRenderFns:[]},c=n("VU/8")(e,a,!1,function(t){n("uxlw")},"data-v-1fc36e68",null);s.default=c.exports},uxlw:function(t,s){}});