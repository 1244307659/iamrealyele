(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7534ff98"],{"0e0d":function(s,t,a){"use strict";var e=a("33b7"),i=a.n(e);i.a},"33b7":function(s,t,a){},5941:function(s,t,a){"use strict";a.r(t);var e=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"distWrap"},[a("header",[a("router-link",{attrs:{to:"/shop"}},[a("i",{staticClass:"el-icon-arrow-left"})]),a("div",{staticClass:"ellipsis"},[s._v("确认订单")]),a("router-link",{attrs:{to:"/profile"}},[a("i",{staticClass:"el-icon-user"})])],1),a("section",[a("router-link",{staticClass:"address_container",attrs:{to:"/chooseaddress"}},[a("div",{staticClass:"address_empty_left"},[a("i",{staticClass:"location_icon el-icon-location-outline"}),a("div",{staticClass:"address_detail_container"},[a("div",{staticClass:"header"},[a("span",[s._v(s._s(s.name))]),a("span",[s._v(" 先生")]),a("span",[s._v(" "+s._s(s.phone))])]),a("div",{staticClass:"address_detail"},[a("span",[s._v("null")]),a("p",[s._v(s._s(s.address))])])])]),a("i",{staticClass:"address_empty_right el-icon-arrow-right"})]),a("section",{staticClass:"delivery_model container_style"},[a("p",{staticClass:"deliver_text"},[s._v("送达时间")]),a("section",{staticClass:"deliver_time"},[a("p",[s._v("尽快送达 | 预计 "+s._s(s.distObj.delivery_reach_time))]),a("p",[s._v("蜂鸟专送")])])]),a("section",{staticClass:"pay_way container_style"},[a("div",{staticClass:"header_style"},[a("span",[s._v("支付方式")]),a("div",{staticClass:"more_type"},[a("span",[s._v("在线支付")]),a("i",{staticClass:"address_empty_right el-icon-arrow-right",on:{click:s.choosefu}})])]),s._m(0)]),a("section",{staticClass:"food_list"},[a("div",{staticClass:"header1"},[a("img",{attrs:{src:"https://elm.cangdu.org/img/170101d0f1463577.png",alt:""}}),a("span",[s._v(s._s(s.shopName))])]),a("ul",{staticClass:"food_list_ul"},s._l(s.carArr,(function(t){return a("li",{key:t.name,staticClass:"food_item_style"},[a("p",{staticClass:"food_name ellipsis"},[s._v(s._s(t.name)+s._s(""==t.specs?"":"-"+t.specs))]),a("div",{staticClass:"num_price"},[a("span",[s._v("x"+s._s(t.num))]),a("span",[s._v("¥"+s._s(t.price))])])])})),0),a("div",{staticClass:"food_item_style"},[a("p",{staticClass:"food_name ellipsis"},[s._v("餐盒")]),a("div",{staticClass:"num_price"},[a("span"),a("span",[s._v("¥ "+s._s(s.canhe))])])]),a("div",{staticClass:"food_item_style"},[a("p",{staticClass:"food_name ellipsis"},[s._v("配送费")]),a("div",{staticClass:"num_price"},[a("span"),a("span",[s._v("¥ "+s._s(s.peisong))])])]),a("div",{staticClass:"food_item_style"},[a("p",{staticClass:"food_name ellipsis"},[s._v("订单 ¥"+s._s(s.peisong+s.canhe+ +s.allPrice))]),a("div",{staticClass:"num_price"},[a("span",[s._v("待支付¥"+s._s(s.peisong+s.canhe+ +s.allPrice))]),a("span")])])]),a("section",{staticClass:"pay_way container_style"},[a("router-link",{staticClass:"header_style",attrs:{to:"/remark"}},[a("span",[s._v("订单备注")]),a("div",{staticClass:"more_type"},[a("span",{staticClass:"ellipsis"},[s._v("口味、偏好等")]),a("i",{staticClass:"el-icon-arrow-right"})])]),a("router-link",{staticClass:"hongbo support_is_available",attrs:{to:"/invoice"}},[a("span",[s._v("发票抬头")]),a("span",[s._v("不需要开发票"),a("i",{staticClass:"el-icon-arrow-right"})])])],1),a("section",{staticClass:"confrim_order"},[a("p",[s._v("待支付 ¥"+s._s(s.peisong+s.canhe+ +s.allPrice))]),a("p",{on:{click:s.goxiadan}},[s._v("确认下单")])]),s.isShow?a("div",{staticClass:"cover"}):s._e(),a("el-collapse-transition",[s.isShow?a("div",{staticClass:"choose_type_Container"},[a("div",{staticClass:"head"},[s._v("支付方式")]),a("ul",[a("li",[a("span",[s._v("货到付款"),a("span",[s._v("（商家不支持货到付款）")])]),a("i",{staticClass:"address_empty_right el-icon-success"})]),a("li",{staticClass:"choose"},[a("span",[s._v("在线支付")]),a("i",{staticClass:"address_empty_right el-icon-success",staticStyle:{color:"green"},on:{click:s.goback}})])])]):s._e()])],1)])},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("section",{staticClass:"hongbo"},[a("span",[s._v("红包")]),a("span",[s._v("暂时只在饿了么 APP 中支持")])])}],r=(a("4de4"),a("4160"),a("b0c0"),a("b64b"),a("159b"),a("5530")),c=(a("2f62"),{name:"dist",data:function(){return{username:"",placeNameHistory:"",geohash:"",shopId:"",carArr:[],shopCarts:null,shopName:"",entities:[],distObj:{},thisAddress:0,addressMsg:"",isShow:!1,canhe:"",peisong:"",allPrice:"",zongjia:"",userid:"",name:"",phone:"",address:""}},created:function(){var s=this;this.allPrice=localStorage.getItem("allprice"),this.thisAddress=0,this.thisAddress=localStorage.getItem("thisAddress"),this.shopName=localStorage.getItem("shopName"),this.shopId=localStorage.getItem("shopId"),this.userid=localStorage.getItem("userid"),this.axios.get("/v1/users/"+this.userid+"/addresses",{params:{user_id:this.userid}}).then((function(t){s.addressMsg=t,s.name=s.addressMsg[s.thisAddress].name,s.phone=s.addressMsg[s.thisAddress].phone,s.address=s.addressMsg[s.thisAddress].address})).catch((function(s){})),this.username=localStorage.getItem("username"),this.placeNameHistory=localStorage.getItem("placeNameHistory");var t=JSON.parse(localStorage.getItem("placeHistory")),a=t.filter((function(t){return t.name==s.placeNameHistory}));this.geohash=a[0].geohash,this.$store.commit("init_buy_cart"),this.carArr=[],this.shopCarts=this.$store.state.cartList,Object.keys(this.shopCarts).forEach((function(t){Object.keys(s.shopCarts[t]).forEach((function(a){Object.keys(s.shopCarts[t][a]).forEach((function(e){Object.keys(s.shopCarts[t][a][e]).forEach((function(i){var c=s.shopCarts[t][a][e][i],o=Object(r["a"])({},c,{category_id:a,item_id:e,food_id:i,shopId:t});o.shopId==s.shopId&&s.carArr.push(o)}))}))}))}));for(var e=0;e<this.carArr.length;e++){var i=[{attrs:[],extra:{},id:this.carArr[e].id,name:this.carArr[e].name,price:this.carArr[e].price,packing_fee:this.carArr[e].packing_fee,quantity:this.carArr[e].num,sku_id:this.carArr[e].sku_id,specs:this.carArr[e].specs,stock:this.carArr[e].stock}];this.entities.push(i)}this.axios.post("/v1/carts/checkout",{restaurant_id:this.shopId,geohash:this.geohash,entities:this.entities}).then((function(t){console.log(t),s.distObj=t,s.canhe=t.cart.extra[0].price,s.peisong=t.cart.deliver_amount,localStorage.setItem("cartid",t.id)})).catch((function(s){}))},methods:{goback:function(){this.isShow=!1},choosefu:function(){this.isShow=!0},goxiadan:function(){this.$router.push("/payment")}}}),o=c,n=(a("0e0d"),a("2877")),l=Object(n["a"])(o,e,i,!1,null,"58502b48",null);t["default"]=l.exports}}]);
//# sourceMappingURL=chunk-7534ff98.d318c7ab.js.map