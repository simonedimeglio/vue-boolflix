(function(t){function e(e){for(var n,o,l=e[0],s=e[1],c=e[2],d=0,p=[];d<l.length;d++)o=l[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&p.push(r[o][0]),r[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,l=1;l<a.length;l++){var s=a[l];0!==r[s]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"1f91":function(t,e,a){t.exports=a.p+"img/netflix-logo.a99cc68a.png"},"2dce":function(t,e,a){},"49cb":function(t,e,a){"use strict";a("2dce")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("Header"),a("Main"),t._v(" "+t._s(t.results)+" ")],1)},i=[],o=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},l=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("div",{staticClass:"header-container custom-container"},[n("div",{staticClass:"header-logo-nav"},[n("img",{attrs:{src:a("1f91"),alt:"Netflix Logo"}}),n("ul",[n("li",[t._v("Home")]),n("li",[t._v("Serie Tv")]),n("li",[t._v("Film")]),n("li",[t._v("Originali")]),n("li",[t._v("Aggiunti di recente")]),n("li",[t._v("La mia lista")])])]),n("div",{staticClass:"header-options"},[n("input",{attrs:{type:"text",placeholder:"Search"}}),n("button",[t._v("Search")])])])])}],s={name:"Header"},c=s,u=(a("d205"),a("2877")),d=Object(u["a"])(c,o,l,!1,null,"543fb4cd",null),p=d.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("div",{staticClass:"custom-container"},[a("div",{staticClass:"title"},[t._v("ORIGINALI NETFLIX")]),a("div",{staticClass:"films-container"},t._l(t.results,(function(t,e){return a("Cards",{key:e,staticClass:"film-card",attrs:{title:t.title,originalTitle:t.original_title,language:t.original_language,rating:t.vote_average}})})),1)])])},f=[],h=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card"},[a("div",{staticClass:"poster-container"}),a("div",{staticClass:"info"},[a("div",{staticClass:"card-title"},[t._v("Titolo: "+t._s(t.title))]),a("div",{staticClass:"card-original-title"},[t._v("Titolo originale: "+t._s(t.originalTitle))]),a("div",{staticClass:"card-language"},[t._v("Lingua: "+t._s(t.language))]),a("div",{staticClass:"card-rating"},[t._v("Voto: "+t._s(t.rating))])])])},v=[],_={name:"Cards",props:{title:String,originalTitle:String,language:String,rating:String}},b=_,m=(a("c749"),Object(u["a"])(b,h,v,!1,null,"73e76380",null)),y=m.exports,w={name:"Main",components:{Cards:y},data:function(){return{page:1,results:[{adult:!1,backdrop_path:"/3lbTiIN8cVonMUQwaeh5nvn61lr.jpg",genre_ids:[12,35,878,10751],id:105,original_language:"en",original_title:"Back to the Future",overview:"Eighties teenager Marty McFly is accidentally sent back in time to 1955, inadvertently disrupting his parents' first meeting and attracting his mother's romantic interest. Marty must repair the damage to history by rekindling his parents' romance and - with the help of his eccentric inventor friend Doc Brown - return to 1985.",popularity:38.464,poster_path:"/7lyBcpYB0Qt8gYhXYaEZUNlNQAv.jpg",release_date:"1985-07-03",title:"Back to the Future",video:!1,vote_average:8.3,vote_count:15222},{adult:!1,backdrop_path:"/a4qvbI9x3nqu3hKQyDRVVBpMklx.jpg",genre_ids:[12,35,10751,878],id:165,original_language:"en",original_title:"Back to the Future Part II",overview:"Marty and Doc are at it again in this wacky sequel to the 1985 blockbuster as the time-traveling duo head to 2015 to nip some McFly family woes in the bud. But things go awry thanks to bully Biff Tannen and a pesky sports almanac. In a last-ditch attempt to set things straight, Marty finds himself bound for 1955 and face to face with his teenage parents -- again.",popularity:21.527,poster_path:"/hQq8xZe5uLjFzSBt4LanNP7SQjl.jpg",release_date:"1989-11-22",title:"Back to the Future Part II",video:!1,vote_average:7.7,vote_count:9744},{adult:!1,backdrop_path:"/igaRMweCynEGoS6w4Rsim7JPnKu.jpg",genre_ids:[12,35,878],id:196,original_language:"en",original_title:"Back to the Future Part III",overview:"The final installment of the Back to the Future trilogy finds Marty digging the trusty DeLorean out of a mineshaft and looking for Doc in the Wild West of 1885. But when their time machine breaks down, the travelers are stranded in a land of spurs. More problems arise when Doc falls for pretty schoolteacher Clara Clayton, and Marty tangles with Buford Tannen.",popularity:17.89,poster_path:"/crzoVQnMzIrRfHtQw0tLBirNfVg.jpg",release_date:"1990-05-25",title:"Back to the Future Part III",video:!1,vote_average:7.4,vote_count:7863}],total_pages:1,total_results:3}}},k=w,j=(a("49cb"),Object(u["a"])(k,g,f,!1,null,"7fb345f7",null)),C=j.exports,M={name:"App",components:{Header:p,Main:C}},I=M,x=(a("5c0b"),Object(u["a"])(I,r,i,!1,null,null,null)),B=x.exports;n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(B)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";a("9c0c")},"73bb":function(t,e,a){},"9c0c":function(t,e,a){},c749:function(t,e,a){"use strict";a("73bb")},d205:function(t,e,a){"use strict";a("ddd3")},ddd3:function(t,e,a){}});
//# sourceMappingURL=app.f24395b1.js.map