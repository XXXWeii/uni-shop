(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["subpkg/search/search"],{"17ec":function(t,e,n){},3314:function(t,e,n){"use strict";(function(t){var i=n("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(n("2eee")),a=i(n("c973")),s=i(n("448a")),u={data:function(){return{timer:null,kw:"",searchResults:[],historyList:["a","app","apple"]}},onLoad:function(){this.historyList=JSON.parse(t.getStorageSync("kw")||"[]")},computed:{historys:function(){return(0,s.default)(this.historyList).reverse()}},methods:{input:function(t){var e=this;clearTimeout(this.timer),this.timer=setTimeout((function(){e.kw=t,e.getSearchList()}),500)},getSearchList:function(){var e=this;return(0,a.default)(r.default.mark((function n(){var i,a;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(0!==e.kw.length){n.next=3;break}return e.searchResults=[],n.abrupt("return");case 3:return n.next=5,t.$http.get("/api/public/v1/goods/qsearch",{query:e.kw});case 5:if(i=n.sent,a=i.data,200===a.meta.status){n.next=9;break}return n.abrupt("return",t.$showMsg());case 9:e.searchResults=a.message,e.saveSearchHistory();case 11:case"end":return n.stop()}}),n)})))()},gotoDetail:function(e){t.navigateTo({url:"/subpkg/goods_detail/goods_detail?goods_id="+e})},saveSearchHistory:function(){var e=new Set(this.historyList);e.delete(this.kw),e.add(this.kw),this.historyList=Array.from(e),t.setStorageSync("kw",JSON.stringify(this.historyList))},cleanHistory:function(){this.historyList=[],t.setStorageSync("kw","[]")},gotoGoodsList:function(e){t.navigateTo({url:"/subpkg/goods_list/goods_list?query="+e})}}};e.default=u}).call(this,n("543d")["default"])},"6ca4":function(t,e,n){"use strict";n.r(e);var i=n("3314"),r=n.n(i);for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);e["default"]=r.a},"748e":function(t,e,n){"use strict";n.r(e);var i=n("ac19"),r=n("6ca4");for(var a in r)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return r[t]}))}(a);n("a8a4");var s=n("f0c5"),u=Object(s["a"])(r["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],void 0);e["default"]=u.exports},"7aca":function(t,e,n){"use strict";(function(t,e){var i=n("4ea4");n("7218");i(n("66fd"));var r=i(n("748e"));t.__webpack_require_UNI_MP_PLUGIN__=n,e(r.default)}).call(this,n("bc2e")["default"],n("543d")["createPage"])},a8a4:function(t,e,n){"use strict";var i=n("17ec"),r=n.n(i);r.a},ac19:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return i}));var i={uniSearchBar:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar")]).then(n.bind(null,"b350"))},uniIcons:function(){return Promise.all([n.e("common/vendor"),n.e("uni_modules/uni-icons/components/uni-icons/uni-icons")]).then(n.bind(null,"9783"))},uniTag:function(){return n.e("uni_modules/uni-tag/components/uni-tag/uni-tag").then(n.bind(null,"6b42"))}},r=function(){var t=this.$createElement,e=(this._self._c,this.searchResults.length);this.$mp.data=Object.assign({},{$root:{g0:e}})},a=[]}},[["7aca","common/runtime","common/vendor"]]]);