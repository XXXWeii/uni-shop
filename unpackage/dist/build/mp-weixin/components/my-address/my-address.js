(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/my-address/my-address"],{3796:function(e,t,r){"use strict";(function(e){var n=r("4ea4");Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var s=n(r("2eee")),a=n(r("278c")),u=n(r("c973")),c=n(r("9523")),o=r("26cb");function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){(0,c.default)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f={name:"my-address",data:function(){return{}},methods:d(d({},(0,o.mapMutations)("m_user",["updateAddress"])),{},{chooseAddress:function(){var t=this;return(0,u.default)(s.default.mark((function r(){var n,u,c,o;return s.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,e.chooseAddress().catch((function(e){return e}));case 2:n=r.sent,u=(0,a.default)(n,2),c=u[0],o=u[1],o&&"chooseAddress:ok"===o.errMsg&&t.updateAddress(o),!c||"chooseAddress:fail auth deny"!==c.errMsg&&"chooseAddress:fail authorize no response"!==c.errMsg||t.reAuth();case 8:case"end":return r.stop()}}),r)})))()},reAuth:function(){return(0,u.default)(s.default.mark((function t(){var r,n,u,c;return s.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.showModal({content:"检测到您没打开地址权限，是否去设置打开？",confirmText:"确认",cancelText:"取消"});case 2:if(r=t.sent,n=(0,a.default)(r,2),u=n[0],c=n[1],!u){t.next=8;break}return t.abrupt("return");case 8:if(!c.cancel){t.next=10;break}return t.abrupt("return",e.$showMsg("您取消了地址授权！"));case 10:if(!c.confirm){t.next=12;break}return t.abrupt("return",e.openSetting({success:function(t){return t.authSetting["scope.address"]?e.$showMsg("授权成功！请选择地址"):t.authSetting["scope.address"]?void 0:e.$showMsg("您取消了地址授权！")}}));case 12:case"end":return t.stop()}}),t)})))()}}),computed:d(d(d({},(0,o.mapState)("m_user",["address"])),(0,o.mapGetters)("m_user",["addstr"])),{},{addstr:function(){return this.address.provinceName?this.address.provinceName+this.address.cityName+this.address.countyName+this.address.detailInfo:""}})};t.default=f}).call(this,r("543d")["default"])},"647b":function(e,t,r){},7522:function(e,t,r){"use strict";r.r(t);var n=r("3796"),s=r.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return n[e]}))}(a);t["default"]=s.a},c7d2:function(e,t,r){"use strict";r.r(t);var n=r("ebd7"),s=r("7522");for(var a in s)["default"].indexOf(a)<0&&function(e){r.d(t,e,(function(){return s[e]}))}(a);r("f979");var u=r("f0c5"),c=Object(u["a"])(s["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],void 0);t["default"]=c.exports},ebd7:function(e,t,r){"use strict";r.d(t,"b",(function(){return s})),r.d(t,"c",(function(){return a})),r.d(t,"a",(function(){return n}));var n={uniIcons:function(){return Promise.all([r.e("common/vendor"),r.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(r.bind(null,"9783"))}},s=function(){var e=this.$createElement,t=(this._self._c,JSON.stringify(this.address));this.$mp.data=Object.assign({},{$root:{g0:t}})},a=[]},f979:function(e,t,r){"use strict";var n=r("647b"),s=r.n(n);s.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/my-address/my-address-create-component',
    {
        'components/my-address/my-address-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("c7d2"))
        })
    },
    [['components/my-address/my-address-create-component']]
]);
