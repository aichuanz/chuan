webpackJsonp([5],{"6Qob":function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});o("R4Sj");var i={name:"login",data:function(){return{successLogin:!1,errorLogin:!1}},computed:{form:function(){return this.$store.state.loginData}},created:function(){},methods:{login:function(){var t=this,e=this;"admin"==this.form.userMailbox&&"520"===this.form.userPass?(this.$http.get(this.cookieOperation.$httpUrl+"/adminJurisdiction").then(function(t){var o=t.data.data.list;e.$store.commit("HomeDataChange",o),e.cookieOperation.setCookie("token","admin"),e.$router.replace("/")}),this.successLogin=!0):"liuyuchuan"==this.form.userMailbox&&"520"===this.form.userPass?(this.$http.get(this.cookieOperation.$httpUrl+"/liuyuchuanJurisdiction").then(function(t){var o=t.data.data.list;e.$store.commit("HomeDataChange",o),e.cookieOperation.setCookie("token","liuyuchuan"),e.$router.replace("/")}),this.successLogin=!0):(this.errorLogin=!0,setTimeout(function(){t.errorLogin=!1},2e3))}}},r={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"login-container-main",on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login(e)}}},[t.successLogin?o("el-alert",{attrs:{title:"登陆成功,请稍后...",center:"",type:"success"}}):t._e(),t._v(" "),t.errorLogin?o("el-alert",{attrs:{title:"请输入正确的用户名 || 密码",type:"warning",center:"","show-icon":""}}):t._e(),t._v(" "),o("div",{staticClass:"login-main"},[o("el-form",{ref:"AccountFrom",staticClass:"demo-ruleForm login-container",attrs:{"label-position":"center","label-width":"0px"}},[o("h3",{staticClass:"title"},[t._v("系统登录")]),t._v(" "),t.form?o("el-form-item",[o("el-input",{attrs:{type:"text",placeholder:"账号"},model:{value:t.form.userMailbox,callback:function(e){t.$set(t.form,"userMailbox",e)},expression:"form.userMailbox"}})],1):t._e(),t._v(" "),t.form?o("el-form-item",[o("el-input",{attrs:{type:"password",placeholder:"密码"},model:{value:t.form.userPass,callback:function(e){t.$set(t.form,"userPass",e)},expression:"form.userPass"}})],1):t._e(),t._v(" "),o("el-form-item",{staticStyle:{width:"100%"}},[o("el-button",{staticStyle:{width:"100%"},attrs:{type:"primary"},on:{click:t.login}},[t._v("登录")])],1)],1)],1)],1)},staticRenderFns:[]};var s=o("C7Lr")(i,r,!1,function(t){o("6yG2")},"data-v-3e098033",null);e.default=s.exports},"6yG2":function(t,e){}});
//# sourceMappingURL=5.7338c710ccecd2e33e8e.js.map