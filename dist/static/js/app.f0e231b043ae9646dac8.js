webpackJsonp([1],{"0oEn":function(t,e){},"1uuo":function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("7+uW"),s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hello"},[a("h1",[t._v(t._s(t.msg))]),t._v(" "),a("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),a("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",[a("li",[a("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("\n        Core Docs\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("\n        Forum\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("\n        Community Chat\n      ")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("\n        Twitter\n      ")])]),t._v(" "),a("br"),t._v(" "),a("li",[a("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("\n        Docs for This Template\n      ")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};a("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},s,!1,function(t){a("1uuo")},"data-v-d8ec41bc",null).exports;var r=a("Sazm"),i={name:"App",firebase:{books:a.n(r).a.initializeApp({apiKey:"AIzaSyA7wPioOJ2oFLu31yv9m0KV04MLDJbbae0",authDomain:"bookmanagement-8f49e.firebaseapp.com",databaseURL:"https://bookmanagement-8f49e.firebaseio.com",projectId:"bookmanagement-8f49e",storageBucket:"",messagingSenderId:"135004945659"}).database().ref("books")}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",attrs:{id:"app"}},[t._m(0),t._v(" "),a("div",{staticClass:"panel panel-default"},[t._m(1),t._v(" "),a("div",{staticClass:"panel-body"},[a("table",{staticClass:"table table-striped"},[t._m(2),t._v(" "),a("tbody",t._l(t.books,function(e){return a("tr",[a("td",[a("a",{attrs:{href:e.url}},[t._v(" "+t._s(e.title))])]),t._v(" "),a("td",[t._v("\n          "+t._s(e.author)+"\n        ")])])}))])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"page-header"},[e("h1",[this._v(" Book Management system made in Vue.JS and Firebase")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"panel-heading"},[e("h3",[this._v(" Books Lists")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("\n          Title\n        ")]),this._v(" "),e("th",[this._v("\n          Author\n        ")])])])}]};var l=a("VU/8")(i,o,!1,function(t){a("0oEn")},null,null).exports,u=a("1mcD"),v=a.n(u);n.a.config.productionTip=!1,n.a.use(v.a),new n.a({el:"#app",components:{App:l},template:"<App/>"})}},["NHnr"]);
//# sourceMappingURL=app.f0e231b043ae9646dac8.js.map