webpackJsonp([2],{E5YF:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("a3Yh"),a=n.n(o)()({data:function(){return{map:null,mylocation:"",mysiteinfo:"",restaurants:[],title:"请输入内容",isShow:!1,type:"error"}},methods:{goLocation:function(e){var t=this;if(this.mylocation){var n=this;(new window.BMap.Geocoder).getPoint(n.mylocation,function(e){n.mysiteinfo=e,e?(n.map.centerAndZoom(e,20),n.map.addOverlay(new window.BMap.Marker(e))):(n.isShow=!0,n.title="您选择地址没有解析到结果!",n.type="info",setTimeout(function(){n.isShow=!1},2e3))})}else this.isShow=!0,this.title="请输入内容",this.type="error",setTimeout(function(){t.isShow=!1},2e3)},querySearch:function(e,t){var n=this.restaurants;t(e?n.filter(this.createFilter(e)):n)},createFilter:function(e){return function(t){return 0===t.value.toLowerCase().indexOf(e.toLowerCase())}},loadAll:function(){return[{value:"北京",address:"北京市"},{value:"五棵松",address:"北京市"},{value:"内黄县",address:"河南省"}]}},mounted:function(){},created:function(){var e=this;this.$nextTick().then(function(){e.map=new window.BMap.Map("map");var t=new window.BMap.Point(116.395645,39.929986);e.map.centerAndZoom(t,15);new window.BMap.Geocoder;e.map.enableScrollWheelZoom(),e.map.enableContinuousZoom();var n={type:BMAP_NAVIGATION_CONTROL_ZOOM};e.map.addControl(new BMap.NavigationControl(n));new BMap.DrivingRoute(e.map,{renderOptions:{map:e.map,autoViewport:!0}});(new BMap.LocalCity).get(function(t){var n=t.name;e.map.setCenter(n)})})}},"mounted",function(){this.restaurants=this.loadAll()}),i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"baidu-map"},[n("div",{staticClass:"location"},[e.isShow?n("el-alert",{attrs:{title:e.title,type:e.type,"show-icon":""}}):e._e(),e._v(" "),n("el-col",{attrs:{span:12}},[n("el-autocomplete",{staticClass:"inline-input",attrs:{span:5,"fetch-suggestions":e.querySearch,placeholder:"请输入你要查询的地方"},on:{select:e.goLocation},model:{value:e.mylocation,callback:function(t){e.mylocation=t},expression:"mylocation"}}),e._v(" "),n("el-button",{on:{click:e.goLocation}},[e._v("查询")])],1)],1),e._v(" "),n("div",{attrs:{id:"map"}})])},staticRenderFns:[]};var r=n("C7Lr")(a,i,!1,function(e){n("sHBb")},"data-v-5c6e1e7d",null);t.default=r.exports},"Sg+2":function(e,t,n){var o=n("2AZ7");o(o.S+o.F*!n("2gJQ"),"Object",{defineProperty:n("0hE2").f})},a3Yh:function(e,t,n){"use strict";t.__esModule=!0;var o,a=n("liLe"),i=(o=a)&&o.__esModule?o:{default:o};t.default=function(e,t,n){return t in e?(0,i.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},liLe:function(e,t,n){e.exports={default:n("oAx8"),__esModule:!0}},oAx8:function(e,t,n){n("Sg+2");var o=n("/KQr").Object;e.exports=function(e,t,n){return o.defineProperty(e,t,n)}},sHBb:function(e,t){}});
//# sourceMappingURL=2.c33d08b95ab12b0de968.js.map