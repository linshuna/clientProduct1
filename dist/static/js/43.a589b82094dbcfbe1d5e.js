webpackJsonp([43],{"43pr":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("VsUZ"),i={name:"App",data:function(){return{defaultList:[]}},created:function(){},mounted:function(){this._getHelpCenter()},methods:{_getHelpCenter:function(){var t=this;Object(s.L)().then(function(e){t.defaultList=e,console.log(t.defaultList)})},HelpGoods:function(t){this.$router.push({path:"/UserCenter/HelpConent/"+t})}}},a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"guideWrap mask"},[n("p",{staticClass:"hotQuestion"},[t._v("热点问题")]),t._v(" "),t._l(t.defaultList,function(e){return n("ul",[n("li",{on:{click:function(n){t.HelpGoods(e.id)}}},[n("span",[t._v(t._s(e.title))]),t._v(" "),t._m(0,!0)])])})],2)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"selfRight"},[e("img",{staticClass:"rightArrow",attrs:{src:n("q8gq"),alt:""}})])}]},r=n("VU/8")(i,a,!1,function(t){n("tbFk")},"data-v-2ab817f7",null);e.default=r.exports},tbFk:function(t,e){}});