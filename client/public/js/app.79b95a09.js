(function(e){function t(t){for(var n,r,o=t[0],c=t[1],l=t[2],d=0,v=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&v.push(a[r][0]),a[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,l||[]),i()}function i(){for(var e,t=0;t<s.length;t++){for(var i=s[t],n=!0,o=1;o<i.length;o++){var c=i[o];0!==a[c]&&(n=!1)}n&&(s.splice(t--,1),e=r(r.s=i[0]))}return e}var n={},a={app:0},s=[];function r(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=n,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(i,n,function(t){return e[t]}.bind(null,n));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"0abd":function(e,t,i){e.exports=i.p+"img/star-1.391a22d3.svg"},"196a":function(e,t,i){"use strict";i("4848")},"364a":function(e,t,i){},4048:function(e,t,i){},4848:function(e,t,i){},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=i("8c4f"),s=i("caf9"),r=i("1881"),o=i.n(r),c=i("4a7a"),l=i.n(c),u=(i("6dfc"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)}),d=[],v={name:"App"},m=v,f=i("2877"),p=Object(f["a"])(m,u,d,!1,null,"08cacf9a",null),g=p.exports,h=i("1da1"),b=i("3835"),C=(i("fb6a"),i("96cf"),i("2f62")),w=i("bc3a"),_=i.n(w);n["a"].use(C["a"]);var M=new C["a"].Store({state:{selectedMovie:[],moviesList:[]},mutations:{setSelectedMovie:function(e,t){var i=Object(b["a"])(t,1),n=i[0];e.selectedMovie=n},setMovies:function(e,t){e.moviesList=t}},actions:{fetchSelectedMovieById:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function i(){var n,a;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=e.commit,i.next=3,_.a.get("http://localhost:3000/movies/".concat(t));case 3:a=i.sent,n("setSelectedMovie",a.data);case 5:case"end":return i.stop()}}),i)})))()},fetchMovies:function(e){return Object(h["a"])(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.commit,t.next=3,_.a.get("http://localhost:3000/movies");case 3:n=t.sent,i("setMovies",n.data);case 5:case"end":return t.stop()}}),t)})))()}},getters:{getMoviesList:function(e){return e.moviesList},getMoviesListLength:function(e){return e.moviesList.length},getMoviesByRange:function(e){return function(t,i){return e.moviesList.slice(t,i)}},getSelectedMovie:function(e){return e.selectedMovie}}}),S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"movies-page"},[i("div",{staticClass:"header"},[i("page-header-bar")],1),i("div",{staticClass:"content"},[i("movies-board")],1),i("div",{staticClass:"footer"},[i("page-footer")],1),i("router-view")],1)},y=[],O=i("5530"),x=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"movies-board"},[i("div",{staticClass:"title-wrapper"},[i("span",{staticClass:"title",domProps:{innerHTML:e._s(e.boardTitle)}})]),i("div",{staticClass:"search-by"},[i("search-by",{attrs:{selectOptions:e.filterSelectOptions,selectedSearchAttr:e.searchAttr},on:{selected:e.onsSearchAttrSelected,termChanged:e.onsSearchTermChanged}})],1),i("div",{staticClass:"board"},[i("movies-grid",{attrs:{gridData:e.filteredMoviesArray},on:{onMovieSelected:e.onMovieSelected}})],1),i("div",[i("modal",{attrs:{width:"1000",height:"500",adaptive:!0,clickToClose:!1,name:"movie-preview-modal"}},[i("detailed-preview",{on:{closeModal:e.hidePreviewModal}})],1)],1)])},j=[],B=(i("ac1f"),i("841c"),i("b0c0"),i("4e82"),i("4de4"),i("caad"),i("2532"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"movies-grid"},[i("ul",{staticClass:"movies-grid-container"},e._l(e.gridData,(function(t){return i("li",{key:t.id},[i("movie-tile",{attrs:{movie:t},on:{buttonClicked:function(i){return e.onTileButtonClicked(t.id)}}})],1)})),0)])}),P=[],k=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"tile"},[i("div",{staticClass:"image"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.movie.image,expression:"movie.image"}]})]),i("div",{staticClass:"name"},[i("span",{staticClass:"name-text",domProps:{innerHTML:e._s(e.movie.title)}})]),i("div",{staticClass:"rating"},[i("rating",{attrs:{score:e.movie.rating}})],1),i("div",{staticClass:"more"},[i("button",{staticClass:"more-btn",on:{click:e.onButtonClicked}},[i("div",{staticClass:"btn-text"},[e._v("Read More")]),e._m(0)])])])},T=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btn-arrow"},[n("img",{attrs:{src:i("b94f")}})])}],$=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.score?i("div",{staticClass:"rating"},[i("div",{staticClass:"rating-wrapper"},[e._m(0),i("div",{class:""===e.views?"rating-info-wrapper":"rating-views-info-wrapper"},[i("div",{staticClass:"rating-number"},[i("div",{staticClass:"text"},[e._v(" "+e._s(e.getScoreString(e.score))+" ")]),e.views?i("div",{staticClass:"views"},[e._v(" "+e._s(e.views)+" ")]):e._e()]),i("div",{staticClass:"rating-number-small"},[i("div",{staticClass:"text"},[e._v(" "+e._s(e.getScoreString(e.score))+" | "+e._s(e.views)+" ")])])])])]):e._e()},R=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rating-image"},[n("img",{attrs:{src:i("0abd")}})])}],E={name:"Rating",props:{score:{type:String},withDivider:{type:Boolean,default:!1},views:{type:String,default:""}},methods:{getScoreString:function(e){var t;return console.info("enter Rating:getScoreString, params: { score: ".concat(e," }")),e&&(t=this.withDivider?"".concat(e," / 10"):e),t}}},L=E,A=(i("5bb0"),Object(f["a"])(L,$,R,!1,null,"a9a20098",null)),D=A.exports,H={name:"MovieTile",components:{Rating:D},props:{movie:{type:Object,required:!0}},methods:{onButtonClicked:function(){console.info("enter MovieTile: onButtonClicked"),console.info("MovieTile: onButtonClicked, tile id clicked ".concat(this.id)),this.$emit("buttonClicked",this.id)}}},N=H,I=(i("d2d4"),Object(f["a"])(N,k,T,!1,null,"569c2d4e",null)),J=I.exports,F={name:"MoviesGrid",components:{MovieTile:J},props:{gridData:{type:Array}},methods:{onTileButtonClicked:function(e){console.info("enter MoviesGrid: onTileButtonClicked, params: { id: ".concat(e," }")),this.$emit("onMovieSelected",e)}}},G=F,V=(i("c672"),Object(f["a"])(G,B,P,!1,null,"68e27b28",null)),z=V.exports,X=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"search-by"},[i("span",{staticClass:"label"},[e._v(" Search By : ")]),i("v-select",{staticClass:"select",attrs:{label:"name",clearable:!1,value:e.selectedSearchAttr,options:e.selectOptions},on:{input:e.setSelected}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.term,expression:"term"}],staticClass:"search-input",domProps:{value:e.term},on:{input:function(t){t.target.composing||(e.term=t.target.value)}}})],1)},q=[],U={name:"SearchBy",data:function(){return{term:""}},watch:{term:function(e){console.info("enter SearchBy:term watch, params: { value: ".concat(e," }")),this.$emit("termChanged",e)}},methods:{setSelected:function(e){console.info("enter SearchBy:setSelected: params: { value: ".concat(JSON.stringify(e)," }")),this.selected=e.name,this.$emit("selected",e)}},props:{selectOptions:{type:Array},selectedSearchAttr:{type:Object}}},W=U,Y=(i("d379"),Object(f["a"])(W,X,q,!1,null,"35b612a5",null)),K=Y.exports,Q=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"detailed-preview"},[i("div",{staticClass:"image-section"},[i("img",{staticClass:"large-image",attrs:{src:e.movie.largeimage}}),i("img",{staticClass:"small-image",attrs:{src:e.movie.image}})]),i("div",{staticClass:"details-section"},[i("div",{staticClass:"title-section"},[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"title"},[e._v(e._s(e.movie.title))]),i("div",{staticClass:"runtime-section"},[i("span",{staticClass:"runtime"},[e._v(" "+e._s(e.buildRuntimeString())+" ")]),i("span",{staticClass:"divider"},[e._v(" | ")]),i("span",[e._v("Drama")])])]),i("div",{staticClass:"rating-section"},[i("rating",{attrs:{views:"1,865,173",withDivider:!0,score:e.movie.rating}})],1)]),i("div",{staticClass:"description-section"},[i("p",{domProps:{innerHTML:e._s(e.movie.synopsis)}})]),i("div",{staticClass:"button-section"},[i("button",{staticClass:"back-btn",on:{click:function(t){return e.hidePreviewModal()}}},[e._m(0),i("div",{staticClass:"btn-text"},[e._v("Back to list")])])])])])},Z=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btn-arrow"},[n("img",{attrs:{src:i("9e57")}})])}],ee=(i("1276"),i("99af"),{name:"DetailedPreview",components:{Rating:D},methods:{hidePreviewModal:function(){console.info("enter DetailedPreview:hidePreviewModal"),this.$emit("closeModal")},buildRuntimeString:function(){var e=this.movie.runtime,t=e.split("h"),i=Object(b["a"])(t,2),n=i[0],a=i[1],s=a.split("m"),r=Object(b["a"])(s,1),o=r[0];return"".concat(n,"h  ").concat(o,"min")}},computed:Object(O["a"])({},Object(C["c"])({movie:"getSelectedMovie"}))}),te=ee,ie=(i("196a"),Object(f["a"])(te,Q,Z,!1,null,"642771f3",null)),ne=ie.exports,ae={name:"MoviesBoard",components:{SearchBy:K,MoviesGrid:z,DetailedPreview:ne},props:{title:{type:String}},data:function(){return{moviesList:[],boardTitle:"EXPLORE YOUR NEXT<br>MOVIES AND TV SHOWS",search:"",searchAttr:{name:"Title",value:"title"},filterSelectOptions:[{name:"Title",value:"title"},{name:"Rating",value:"rating"},{name:"Runtime",value:"runtime"}]}},methods:Object(O["a"])({onsSearchAttrSelected:function(e){console.info("enter MoviesBoard:onsSearchAttrSelected, params: ".concat(JSON.stringify(e))),this.searchAttr=e},onsSearchTermChanged:function(e){console.info("enter MoviesBoard:onsSearchTermChanged, params: ".concat(e)),this.search=e},onMovieSelected:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function i(){return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return console.info("enter MoviesBoard:onMovieSelected, params: ".concat(e)),i.next=3,t.fetchSelectedMovieById(e);case 3:t.$modal.show("movie-preview-modal");case 4:case"end":return i.stop()}}),i)})))()},hidePreviewModal:function(){console.info("enter MoviesBoard:hidePreviewModal"),this.$modal.hide("movie-preview-modal")}},Object(C["b"])({fetchSelectedMovieById:"fetchSelectedMovieById"})),computed:Object(O["a"])(Object(O["a"])({},Object(C["c"])({moviesData:"getMoviesList"})),{},{filteredMoviesArray:function(){var e=this;function t(e,t){return e.name<t.name?-1:e.name>t.name?1:0}return console.info("enter MoviesBoard:filteredMoviesArray"),this.moviesData.filter((function(t){return t[e.searchAttr.value].toLowerCase().includes(e.search.toLowerCase())})).sort(t)}})},se=ae,re=(i("b665"),Object(f["a"])(se,x,j,!1,null,"778236ae",null)),oe=re.exports,ce=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},le=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"next-image"},[n("img",{attrs:{src:i("df0b")}})]),n("div",{staticClass:"contact-us"},[e._v(" Contact us ")]),n("div",{staticClass:"support"},[n("div",[e._v("support@nextmovies.com")]),n("div",[e._v(" Mon - Fri | 6:00 am - 5:00 pm PT")])]),n("div",{staticClass:"social"},[n("img",{attrs:{src:i("dc9b")}}),n("img",{attrs:{src:i("d4fb")}}),n("img",{attrs:{src:i("a4b5")}}),n("img",{attrs:{src:i("b796")}}),n("img",{attrs:{src:i("e817")}})])])}],ue={name:"PageFooter"},de=ue,ve=(i("6e42"),Object(f["a"])(de,ce,le,!1,null,"5794c5cf",null)),me=ve.exports,fe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},pe=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-bar"},[n("img",{staticClass:"header-image",attrs:{alt:"Vue logo",src:i("d799")}})])}],ge={name:"PageHeaderBar"},he=ge,be=(i("c07d"),Object(f["a"])(he,fe,pe,!1,null,"da31e6f4",null)),Ce=be.exports,we={name:"MoviesPage",components:{MoviesBoard:oe,PageFooter:me,PageHeaderBar:Ce},beforeMount:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchMovies();case 2:case"end":return t.stop()}}),t)})))()},methods:Object(O["a"])({},Object(C["b"])({fetchMovies:"fetchMovies"}))},_e=we,Me=(i("5951"),Object(f["a"])(_e,S,y,!1,null,"ea26d46c",null)),Se=Me.exports,ye=new a["a"]({routes:[{path:"/",redirect:"/next-movies"},{name:"nextMovies",path:"/next-movies",component:Se}]}),Oe=i("cf1c");n["a"].config.productionTip=!1,n["a"].component("v-select",l.a),n["a"].use(o.a),n["a"].use(a["a"]),n["a"].use(s["a"],{preLoad:1.3,loading:Oe,attempt:1}),new n["a"]({store:M,render:function(e){return e(g)},router:ye}).$mount("#app")},5951:function(e,t,i){"use strict";i("4048")},"5bb0":function(e,t,i){"use strict";i("fd2a")},"69c4":function(e,t,i){},"6e42":function(e,t,i){"use strict";i("dc0d")},"952a":function(e,t,i){},"9e57":function(e,t,i){e.exports=i.p+"img/back-arrow.f3437995.svg"},a4b5:function(e,t,i){e.exports=i.p+"img/twitter-share-icon.759a655d.svg"},b665:function(e,t,i){"use strict";i("364a")},b796:function(e,t,i){e.exports=i.p+"img/instagram-share-icon.7d386972.svg"},b7b3:function(e,t,i){},b94f:function(e,t,i){e.exports=i.p+"img/arrow.231f83e9.svg"},c07d:function(e,t,i){"use strict";i("b7b3")},c3ae:function(e,t,i){},c672:function(e,t,i){"use strict";i("952a")},cf1c:function(e,t,i){e.exports=i.p+"img/loading.e5059b39.gif"},d2d4:function(e,t,i){"use strict";i("c3ae")},d379:function(e,t,i){"use strict";i("69c4")},d4fb:function(e,t,i){e.exports=i.p+"img/linkedin-share-icon.19fe8f16.svg"},d799:function(e,t,i){e.exports=i.p+"img/Logo2.c9e0a166.png"},dc0d:function(e,t,i){},dc9b:function(e,t,i){e.exports=i.p+"img/facebook-share-icon.87316b59.svg"},df0b:function(e,t,i){e.exports=i.p+"img/favicon.51317799.svg"},e817:function(e,t,i){e.exports=i.p+"img/youtube-share-icon.ec666089.svg"},fd2a:function(e,t,i){}});
//# sourceMappingURL=app.79b95a09.js.map