webpackJsonp([1],{"05sS":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[t._m(0),t._v(" "),i("div",{staticClass:"mpdd-cat"},[i("div",{staticClass:"mpdd-act-head"},[i("p",[t._v("精彩活动")]),t._v(" "),i("p",{staticClass:"see-more-content",on:{click:function(s){t.$goRoute("/navlist/special/subject/999")}}},[t._v("查看更多")])]),t._v(" "),i("div",{staticClass:"mpdd-act-content"},[i("div",{staticClass:"mpdd-act-left"},[i("img",{attrs:{src:"//mcdn.pinduoduo.com/assets/img/mpdd_global.png",alt:"global"},on:{click:function(s){t.$goRoute("/navlist/special/operation/12")}}}),t._v(" "),i("img",{staticClass:"mal-you",attrs:{src:"//mcdn.pinduoduo.com/assets/img/mpdd_you.png",alt:"you"},on:{click:function(s){t.$goRoute("/navlist/special/spike_list/0")}}})]),t._v(" "),i("div",{staticClass:"mpdd-act-right"},[i("img",{attrs:{src:"//mcdn.pinduoduo.com/assets/img/mpdd_brand_sale.jpg",alt:"super"},on:{click:function(s){t.$goRoute("/navlist/special/subject/999")}}}),t._v(" "),i("img",{staticClass:"mal-sale",attrs:{src:"//mcdn.pinduoduo.com/assets/img/mpdd_sale.png",alt:"sale"},on:{click:function(s){t.$goRoute("/navlist/special/subject/922")}}}),t._v(" "),i("img",{staticClass:"mal-itry",attrs:{src:"//mcdn.pinduoduo.com/assets/img/mpdd_fresh_fruit.jpg",alt:"itry"},on:{click:function(s){t.$goRoute("/navlist/special/subject/502")}}})])])]),t._v(" "),i("div",{staticClass:"mpdd-cat"},[i("div",{staticClass:"mpdd-act-head mpdd-cat-head"},[i("p",[t._v("精选专题")]),t._v(" "),i("p",{staticClass:"see-more-content",on:{click:function(s){t.$goRoute("/navlist/activity/operation/14")}}},[t._v("查看更多")])]),t._v(" "),i("ul",{staticClass:"mpdd-cat-list"},t._l(t.goodsImg,function(s){return i("li",{staticClass:"mpdd-cat-item",staticStyle:{"padding-bottom":".08rem"},attrs:{id:"cat-clothes"},on:{click:function(i){t.$goRoute("/navlist/activity/operation/"+s.id)}}},[i("div",{staticClass:"pdd-index-glist",attrs:{avalonctrl:"cat-clothes"}},[i("div",{staticClass:"glist-banner-wrapper"},[i("img",{attrs:{alt:"banner",src:s.img}})])])])}))])])},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mpdd-banner"},[i("img",{attrs:{alt:"banner",src:"//mcdn.pinduoduo.com/assets/img/mpdd_banner_2.png"}})])}],e={render:a,staticRenderFns:n};s.a=e},"06BD":function(t,s,i){"use strict";s.a={}},"3Mgx":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"subject-nav-wrapper"},[i("ul",{staticClass:"subject-nav-list"},t._l(t.items,function(s,a){return i("li",{staticClass:"subject-nav-item",class:{"cur-subject-nav-item":s.active},on:{click:function(i){t.navbtn(s.uid,s.id,a)}}},[i("span",[t._v(t._s(s.name))])])})),t._v(" "),t._m(0),t._v(" "),i("div",{staticClass:"subject-nav-gradient"})])},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"subject-nav-btn"},[i("img",{attrs:{src:"//mcdn.pinduoduo.com/assets/img/mpdd_cat_arrow.png"}})])}],e={render:a,staticRenderFns:n};s.a=e},"3SS+":function(t,s,i){"use strict";s.a={}},"3vjb":function(t,s,i){"use strict";var a=i("bwEh");s.a={data:function(){return{items:"",nav:[{Id:"activity",navlist:[{name:"服饰箱包",id:14,active:!0,uid:"operation"},{name:"当季女鞋",id:18,active:!1,uid:"operation"},{name:"品牌男装",id:1135,active:!1,uid:"operation"},{name:"家居百货",id:15,active:!1,uid:"operation"},{name:"环球美食",id:1,active:!1,uid:"operation"},{name:"数码家电",id:18,active:!1,uid:"operation"},{name:"家纺家具",id:818,active:!1,uid:"operation"},{name:"水果生鲜",id:13,active:!1,uid:"operation"},{name:"母婴呵护",id:4,active:!1,uid:"operation"},{name:"全球海淘",id:12,active:!1,uid:"operation"},{name:"美妆护肤",id:16,active:!1,uid:"operation"},{name:"运动户外",id:43,active:!1,uid:"operation"}]},{Id:"special",navlist:[{name:"品牌清仓",id:999,active:!0,uid:"subject"},{name:"限时秒杀",id:0,active:!1,uid:"spike_list"},{name:"海淘专场",id:12,active:!1,uid:"operation"},{name:"品质水果",id:502,active:!1,uid:"subject"},{name:"9.9特卖",id:922,active:!1,uid:"subject"}]}]}},created:function(){var t=this.$route.params.num,s=this.$route.params.uid,i=this.$route.params.nav;this.uId=s,console.log(t);for(var a=0;a<this.nav.length;a++)if(i==this.nav[a].Id){this.items=this.nav[a].navlist;for(var n=0;n<this.items.length;n++)this.items[n].id==t&&this.navbtn(s,t,n)}},methods:{navbtn:function(t,s,i){for(var n=0;n<this.items.length;n++)this.items[n].active=!1;this.items[i].active=!0;var e=this,c="";c="operation"==t?"/api/"+t+"/"+s+"/groups?opt_type=1&offset=0&size=50":"subject"==t?"/api/"+t+"/"+s+"/sorted_goods?sort_type=PRIORITY&page=1&size=50":"/api/spike_list?page=1&size=50",e.$http.get("https://bird.ioliu.cn/v1/?url="+c).then(function(t){a.a.$emit("listFun",t.data.goods_list)},function(){alert("error")})}}}},"6Lpi":function(t,s,i){"use strict";s.a={data:function(){return{goodsImg:[{id:14,img:"//mcdn.pinduoduo.com/assets/img/cat_clothes.jpg"},{id:18,img:"//mcdn.pinduoduo.com/assets/img/cat_girlshoes.jpg"},{id:1135,img:"//mcdn.pinduoduo.com/assets/img/cat_boyshirt.jpg"},{id:15,img:"//mcdn.pinduoduo.com/assets/img/cat_home.jpg"},{id:1,img:"//mcdn.pinduoduo.com/assets/img/cat_food.jpg"},{id:18,img:"//mcdn.pinduoduo.com/assets/img/cat_3c.jpg"},{id:818,img:"//mcdn.pinduoduo.com/assets/img/cat_house.jpg"},{id:13,img:"//mcdn.pinduoduo.com/assets/img/cat_fresh.jpg"},{id:4,img:"//mcdn.pinduoduo.com/assets/img/cat_baby.jpg"},{id:12,img:"//mcdn.pinduoduo.com/assets/img/cat_overseas.jpg"},{id:16,img:"//mcdn.pinduoduo.com/assets/img/cat_beauty.jpg"},{id:43,img:"//mcdn.pinduoduo.com/assets/img/cat_sports.jpg"}]}}}},"6OLf":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"app"}},[i("headerindex"),t._v(" "),i("topindex"),t._v(" "),i("footerindex")],1)},n=[],e={render:a,staticRenderFns:n};s.a=e},"7oRC":function(t,s,i){"use strict";var a=i("bwEh");s.a={data:function(){return{uId:"operation",navindex:14,goodslist:""}},ready:function(){console.log("deviceid: "+this.$route.params.num)},created:function(){document.body.scrollTop=0,this.navindex=this.$route.params.num,this.uId=this.$route.params.uid;var t=this.navindex,s=this.uId,i=this,a="";a="operation"==s?"/api/"+s+"/"+t+"/groups?opt_type=1&offset=0&size=50":"subject"==s?"/api/"+s+"/"+t+"/sorted_goods?sort_type=PRIORITY&page=1&size=50":"/api/spike_list?page=1&size=50",i.$http.get("https://bird.ioliu.cn/v1/?url="+a).then(function(t){i.goodslist="spike_list"==s?t.data.goods:t.data.goods_list},function(){alert("error")})},mounted:function(){var t=this;a.a.$on("listFun",function(s){t.goodslist=s})}}},"7zas":function(t,s,i){"use strict";function a(t){i("AjKE")}var n=i("3SS+"),e=i("d+/l"),c=i("J0+h"),o=a,d=c(n.a,e.a,o,null,null);s.a=d.exports},"8SnZ":function(t,s,i){"use strict";var a=i("7oRC"),n=i("c3mQ"),e=i("J0+h"),c=e(a.a,n.a,null,null,null);s.a=c.exports},AjKE:function(t,s){},C4b6:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticStyle:{visibility:"visible"},attrs:{id:"help-content",avalonctrl:"root"}},[i("div",{staticClass:"mpdd-helps-banner"},[i("img",{attrs:{src:"//mcdn.pinduoduo.com/assets/img/mpdd_help_banner_v1.jpg",alt:"banner"}})]),t._v(" "),i("ul",{staticClass:"mpdd-help-list"},[i("li",{staticClass:"mpdd-help-item"},[i("p",[t._v("新手指南")]),t._v(" "),i("ul",{staticClass:"mpdd-hi-list"},[i("li",{staticClass:"mpdd-hil-item"},[t._v("\n                            · "),i("span",[t._v("购物流程")])])])]),i("li",{staticClass:"mpdd-help-item"},[i("p",[t._v("交易问题")]),t._v(" "),i("ul",{staticClass:"mpdd-hi-list"},[i("li",{staticClass:"mpdd-hil-item"},[t._v("\n                            · "),i("span",[t._v("我拍下来后的商品什么时候发货？")])]),i("li",{staticClass:"mpdd-hil-item"},[t._v("\n                            · "),i("span",[t._v("已成团未发货如何退款？")])]),i("li",{staticClass:"mpdd-hil-item"},[t._v("\n                            · "),i("span",[t._v("没有收到货/商家发错地址了怎么办？")])]),i("li",{staticClass:"mpdd-hil-item"},[t._v("\n                            · "),i("span",[t._v("收到商品有问题怎么办？")])]),i("li",{staticClass:"mpdd-hil-item"},[t._v("\n                            · "),i("span",[t._v("如何联系商家客服？")])]),i("li",{staticClass:"mpdd-hil-item"},[t._v("\n                            · "),i("span",[t._v("为什么我的优惠券不能使用？")])]),i("li",{staticClass:"mpdd-hil-item"},[t._v("\n                            · "),i("span",[t._v("收到的商品能退换货么？")])])])]),i("li",{staticClass:"mpdd-help-item"},[i("p",[t._v("退款&售后问题")]),t._v(" "),i("ul",{staticClass:"mpdd-hi-list"},[i("li",{staticClass:"mpdd-hil-item"},[t._v("\n                            · "),i("span",[t._v("退换货流程")])]),i("li",{staticClass:"mpdd-hil-item"},[t._v("\n                            · "),i("span",[t._v("退换货规则")])]),i("li",{staticClass:"mpdd-hil-item"},[t._v("\n                            · "),i("span",[t._v("7天无理由退换货")])])])]),i("li",{staticClass:"mpdd-help-item"},[i("p",[t._v("联系我们")]),t._v(" "),i("ul",{staticClass:"mpdd-hi-list"},[i("li",{staticClass:"mpdd-hil-item"},[t._v("\n                            · "),i("span",[t._v("如何联系拼多多客服？")])])])])])])}],e={render:a,staticRenderFns:n};s.a=e},DsjN:function(t,s,i){"use strict";var a=i("OoG/"),n=i("J0+h"),e=n(null,a.a,null,null,null);s.a=e.exports},LFwN:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement;return(t._self._c||s)("div",{staticClass:"mpdd-subject"})},n=[],e={render:a,staticRenderFns:n};s.a=e},LqM4:function(t,s,i){"use strict";var a=i("6Lpi"),n=i("05sS"),e=i("J0+h"),c=e(a.a,n.a,null,null,null);s.a=c.exports},M93x:function(t,s,i){"use strict";var a=i("h8+N"),n=i("6OLf"),e=i("J0+h"),c=e(a.a,n.a,null,null,null);s.a=c.exports},NHnr:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("UFcW"),n=i("M93x"),e=i("YaEn"),c=i("BMa3"),o=i.n(c),d=i("tra3");i.n(d);a.a.prototype.$http=o.a,a.a.config.productionTip=!1,a.a.prototype.$goRoute=function(t){this.$router.push(t)},new a.a({el:"#app",router:e.a,template:"<App/>",components:{App:n.a}})},"OoG/":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mpdd-cr"},[i("p",[t._v("版权所有：XXXX信息技术有限公司")])])}],e={render:a,staticRenderFns:n};s.a=e},Owbr:function(t,s,i){"use strict";var a=i("nbb9"),n=i("ngp+"),e=i("J0+h"),c=e(a.a,n.a,null,null,null);s.a=c.exports},U3YL:function(t,s,i){"use strict";var a=i("C4b6"),n=i("J0+h"),e=n(null,a.a,null,null,null);s.a=e.exports},X5Bn:function(t,s,i){"use strict";var a=i("06BD"),n=i("LFwN"),e=i("J0+h"),c=e(a.a,n.a,null,null,null);s.a=c.exports},YaEn:function(t,s,i){"use strict";var a=i("UFcW"),n=i("u28b"),e=i("LqM4"),c=i("xSlT"),o=i("U3YL"),d=i("Owbr");i("8SnZ"),i("lWbF");a.a.use(n.a),s.a=new n.a({routes:[{path:"/",name:"home",component:e.a},{path:"/home",name:"home",component:e.a},{path:"/shop",name:"joinshop",component:c.a},{path:"/help",name:"help",component:o.a},{path:"/navlist/:nav/:uid/:num",name:"navlist",component:d.a}]})},bwEh:function(t,s,i){"use strict";var a=i("ZXOU");s.a=new a.a},c3mQ:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"mpdd-house"}},[i("div",{staticClass:"mpdd-double-glist",staticStyle:{visibility:"visible"},attrs:{avalonctrl:"mpdd-house"}},[i("ul",{staticClass:"pd-goods-list"},t._l(t.goodslist,function(s){return i("li",{staticClass:"pd-glist-item"},[i("div",{staticClass:"pd-goods-img"},[i("img",{attrs:{alt:"goods",src:s.hd_thumb_url}})]),t._v(" "),i("div",{staticClass:"pd-goods-txt"},[i("span",{staticClass:"pd-goods-name"},[t._v(t._s(s.goods_name))]),t._v(" "),i("span",{staticClass:"pd-goods-price"},[t._v("￥"),i("span",[t._v(t._s(s.normal_price/100))])]),t._v(" "),i("span",{staticClass:"pd-goods-mprice"},[t._v("￥"),i("span",[t._v(t._s(s.market_price/100))])])])])}))])])},n=[],e={render:a,staticRenderFns:n};s.a=e},"d+/l":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mpdd-top-wrapper"},[i("div",{staticClass:"mpdd-top-logo"},[i("img",{attrs:{alt:"logo",src:"//mcdn.pinduoduo.com/assets/img/mpdd_logo.png"}})]),t._v(" "),i("span",[t._v("0.1元包邮抢16包清风面巾纸")]),t._v(" "),i("div",{staticClass:"mpdd-top-btn"},[t._v("前往购买")])])}],e={render:a,staticRenderFns:n};s.a=e},fnCP:function(t,s,i){"use strict";var a=i("jTbu"),n=i("sLne"),e=i("J0+h"),c=e(a.a,n.a,null,null,null);s.a=c.exports},"h8+N":function(t,s,i){"use strict";var a=i("7zas"),n=i("fnCP"),e=i("LqM4"),c=i("DsjN");s.a={name:"app",components:{headerindex:a.a,topindex:n.a,homeindex:e.a,footerindex:c.a}}},jTbu:function(t,s,i){"use strict";s.a={name:"app",data:function(){return{links:[{text:"首页",route:"/home"},{text:"商家入驻",route:"/shop"},{text:"帮助中心",route:"/help"}]}}}},kwBH:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{attrs:{id:"root"}},[i("div",{staticClass:"router-root",attrs:{"data-reactroot":""}},[i("section",{staticClass:"homepage"},[t._m(0),i("section",{staticClass:"mobile-flow"},[i("div",{staticClass:"mobile-flow-title"},[i("span"),i("p",[i("font",[i("font",[t._v("入驻流程")])],1)],1),i("span")]),i("div",{staticClass:"process"},[i("div",{staticClass:"item icon"},[t._m(1),i("img",{attrs:{src:"http://imsproduction.oss-cn-shanghai.aliyuncs.com/3cdbc0a65392c0cda5192a9ac86cf6b7.png",alt:"pinduoduo"}}),i("span",[i("font",[i("font",[t._v("提交信息")])],1)],1)]),i("div",{staticClass:"item icon"},[t._m(2),i("img",{attrs:{src:"http://imsproduction.oss-cn-shanghai.aliyuncs.com/71ada4999176816ef7a8adf0b6ac9c90.png",alt:"pinduoduo"}}),i("span",[i("font",[i("font",[t._v("签约")])],1)],1)]),i("div",{staticClass:"item"},[i("img",{attrs:{src:"http://imsproduction.oss-cn-shanghai.aliyuncs.com/670f27aff6dfe91550fbbdeacbc93fdf.png",alt:"pinduoduo"}}),i("span",[i("font",[i("font",[t._v("成功开店")])],1)],1)])])]),i("section",{staticClass:"reason"},[i("div",{staticClass:"mobile-flow-title"},[i("span"),i("p",[i("font",[i("font",[t._v("入驻流程")])],1)],1),i("span")]),i("div",{staticClass:"reason-item"},[t._m(3),i("div",{staticClass:"content"},[i("p",{staticClass:"title"},[i("b",{staticClass:"red"},[i("font",[i("font",[t._v("入驻免费")])],1)],1),i("font",[i("font",[t._v("无扣点")])],1)],1),i("p",{staticClass:"detail"},[i("font",[i("font",[t._v("入驻拼多多，不需要收取任何费用，只需要缴纳对应品类的保证金。保证金将汇入您的店铺账户，开店结束时予以退还。")])],1)],1)])]),i("div",{staticClass:"reason-item"},[t._m(4),i("div",{staticClass:"content"},[i("p",{staticClass:"title"},[i("b",{staticClass:"red"},[i("font",[i("font",[t._v("流量共享")])],1)],1),i("font",[i("font",[t._v("变现红利")])],1)],1),i("p",{staticClass:"detail"},[i("span",[i("font",[i("font",[t._v("用户总量突破")]),i("b",{staticClass:"red"},[i("font",[t._v("1亿")])],1)],1),i("b",{staticClass:"red"},[i("font")],1)],1),i("span",[i("font",[i("font",[t._v("月度交易流水达")]),i("b",{staticClass:"red"},[i("font",[t._v("30亿")])],1)],1),i("b",{staticClass:"red"},[i("font")],1)],1),i("span",[i("font",[i("font",[t._v("应用下载电商排行榜稳居前")]),i("b",{staticClass:"red"},[i("font",[t._v("3位")])],1)],1),i("b",{staticClass:"red"},[i("font")],1)],1)])])]),i("div",{staticClass:"reason-item"},[t._m(5),i("div",{staticClass:"content"},[i("p",{staticClass:"title"},[i("b",{staticClass:"red"},[i("font",[i("font",[t._v("简单流程")])],1)],1),i("font",[i("font",[t._v("服务全面")])],1)],1),i("p",{staticClass:"detail"},[i("font",[i("font",[t._v("不收取任何佣金与服务费，入驻简单快捷;拥有成熟的平台运营体系，基于微信社交生态圈的拼团模式，定期进行高转化率的优惠活动，拥有众多品牌官方授权及高品质货品保证。")])],1)],1)])]),i("div",{staticClass:"reason-item"},[t._m(6),i("div",{staticClass:"content"},[i("p",{staticClass:"title"},[i("b",{staticClass:"red"},[i("font",[i("font",[t._v("新颖形式")])],1)],1),i("font",[i("font",[t._v("社交电商")])],1)],1),i("p",{staticClass:"detail"},[i("font",[i("font",[t._v("与其他电商自主搜索式购物完全不同，拼多多充分利用国内活跃用户数量排名第一的社交工具微信，以拼团模式抓住社交的红利 - 在购物行为中融入游戏的趣味，在拼团过程中获得分享与沟通的社交乐趣，享受全新的共享式购物体验。")])],1)],1)])])]),i("section",{staticClass:"locate"},[i("a",[i("font",[i("font",[t._v("立即入驻")])],1)],1)])])])])},n=[function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"mall-banner"},[i("img",{attrs:{src:"http://imsproduction.oss-cn-shanghai.aliyuncs.com/00501f9639e5aa51966c3f99215ea802.png",alt:"pinduoduo"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("i",[i("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAAi0lEQVQYlXXNvwpBARwF4M9NyqSMFrPFapDiAchwS3kKf97D5B08gJKySUZ5CHkCq66Ful33d8ZzvjqVLE03WCNTkgRL7FCLAMxwRCMCMMIZrQhAF1d0IgBtXNCPADRxwjQCUMcwAm+ssKiWjC/MsYcieGKM26/IX9zRy495cMAAj+Jfgi0m3++/fADWuhYknIxkFgAAAABJRU5ErkJggg==",alt:"pinduoduo"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("i",[i("img",{attrs:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAOCAYAAAASVl2WAAAAi0lEQVQYlXXNvwpBARwF4M9NyqSMFrPFapDiAchwS3kKf97D5B08gJKySUZ5CHkCq66Ful33d8ZzvjqVLE03WCNTkgRL7FCLAMxwRCMCMMIZrQhAF1d0IgBtXNCPADRxwjQCUMcwAm+ssKiWjC/MsYcieGKM26/IX9zRy495cMAAj+Jfgi0m3++/fADWuhYknIxkFgAAAABJRU5ErkJggg==",alt:"pinduoduo"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"img"},[i("img",{attrs:{src:"http://imsproduction.oss-cn-shanghai.aliyuncs.com/d3b818d0f6764e2fd242b05ffa1bff01.png",alt:"pinduoduo"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"img"},[i("img",{attrs:{src:"http://imsproduction.oss-cn-shanghai.aliyuncs.com/fbb6f336da142bb3c691717a30135541.png",alt:"pinduoduo"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"img"},[i("img",{attrs:{src:"http://imsproduction.oss-cn-shanghai.aliyuncs.com/7cd8e46d3e01b29e2d81e7567b3bcafb.png",alt:"pinduoduo"}})])},function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"img"},[i("img",{attrs:{src:"http://imsproduction.oss-cn-shanghai.aliyuncs.com/10e48b5b4ad5a856ea5de68a025dd480.png",alt:"pinduoduo"}})])}],e={render:a,staticRenderFns:n};s.a=e},lWbF:function(t,s,i){"use strict";var a=i("3vjb"),n=i("3Mgx"),e=i("J0+h"),c=e(a.a,n.a,null,null,null);s.a=c.exports},nbb9:function(t,s,i){"use strict";var a=i("lWbF"),n=i("X5Bn"),e=i("8SnZ");s.a={components:{navindex:a.a,recommendindex:n.a,listindex:e.a}}},"ngp+":function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("navindex"),t._v(" "),i("recommendindex"),t._v(" "),i("listindex")],1)},n=[],e={render:a,staticRenderFns:n};s.a=e},sLne:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",[i("div",{staticClass:"mpdd-head-wrapper"},[i("ul",{staticClass:"mph-tab"},t._l(t.links,function(s){return i("li",[i("span",{staticClass:"mph-tab-item",on:{click:function(i){t.$goRoute(s.route)}}},[t._v(t._s(s.text))])])}))]),t._v(" "),i("router-view")],1)},n=[],e={render:a,staticRenderFns:n};s.a=e},xSlT:function(t,s,i){"use strict";function a(t){i("ywDS")}var n=i("kwBH"),e=i("J0+h"),c=a,o=e(null,n.a,c,null,null);s.a=o.exports},ywDS:function(t,s){}},["NHnr"]);
//# sourceMappingURL=app.0844f25386d5b2c7cb0b.js.map