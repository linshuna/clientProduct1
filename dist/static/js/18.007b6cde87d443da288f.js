webpackJsonp([18],{B0tK:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=o("7+uW"),r=o("Au9i"),n=o("olmj"),i=o.n(n),a=o("VsUZ");s.default.use(i.a),s.default.component(r.Field.name,r.Field),s.default.component(r.Button.name,r.Button);var d={name:"forgetpwd",data:function(){return{phone:"",password:"",code:"",bolArr:[],countDown:60,isCode:!1}},vuerify:{phone:{test:/^1[3|5|8]\d{9}$/,message:"请输入正确的手机号码"},password:{test:/^[\w!@#$%^&*.]{6,16}$/,message:"密码至少6位"}},computed:{errors:function(){return this.$vuerify.$errors},invalid:function(){return this.$vuerify.invalid}},methods:{gainCode:function(){var t=this;return this.phone?this.errors.phone?(Object(r.Toast)(this.errors.phone),!1):void Object(a.i)({phone:this.phone,types:1}).then(function(e){t.isCode=!t.isCode;var o=t,s=setInterval(function(){o.countDown<=1&&(clearInterval(s),o.isCode=!o.isCode),o.countDown--,console.log(o.countDown)},1e3)}):(Object(r.Toast)("请输入手机号码"),!1)},register:function(){var t=this;return this.phone?this.errors.phone?(Object(r.Toast)(this.errors.phone),!1):this.password?this.errors.password?(Object(r.Toast)(this.errors.password),!1):this.code?void(this.$vuerify.check()&&Object(a.h)({phone:this.phone,code:this.code,password:this.password}).then(function(e){Object(r.Toast)("重置密码成功"),t.$store.dispatch("login",{phone:t.phone,password:t.password})})):(Object(r.Toast)("请输入验证码"),!1):(Object(r.Toast)("请输入新密码"),!1):(Object(r.Toast)("请输入手机号码"),!1)}}},c={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"forgetpwd"}},[o("ul",{staticClass:"loginWrap"},[o("li",{staticClass:"border-bottom-1px"},[o("span",[t._v("手机号")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.phone,expression:"phone",modifiers:{trim:!0}}],attrs:{type:"tel",placeholder:"请输入手机号"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}}),t._v(" "),t.isCode?o("button",{attrs:{id:"code"}},[t._v(t._s(t.countDown)+"秒后重新发送")]):o("button",{attrs:{id:"gainCodeBtn"},on:{click:t.gainCode}},[t._v("获取验证码")])]),t._v(" "),o("li",{staticClass:"border-bottom-1px"},[o("span",[t._v("验证码")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.code,expression:"code",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"请输入短信验证码"},domProps:{value:t.code},on:{input:function(e){e.target.composing||(t.code=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),o("li",{staticClass:"border-bottom-1px"},[o("span",[t._v("新密码")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.password,expression:"password",modifiers:{trim:!0}}],attrs:{type:"password",placeholder:"请输入新密码"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})])]),t._v(" "),o("div",{staticClass:"btnWrap"},[o("button",{class:{isRegister:!t.invalid},attrs:{id:"registerBtn"},on:{click:t.register}},[t._v("重置密码")])]),t._v(" "),o("p",{staticClass:"derictLogin"},[o("router-link",{attrs:{to:"/Login"}},[t._v("通过账号密码登录 >")])],1)])},staticRenderFns:[]},p=o("VU/8")(d,c,!1,function(t){o("vFIE")},"data-v-88886fe8",null);e.default=p.exports},vFIE:function(t,e){}});