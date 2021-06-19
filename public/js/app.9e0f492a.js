(function(e){function t(t){for(var i,a,o=t[0],c=t[1],l=t[2],d=0,v=[];d<o.length;d++)a=o[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&v.push(r[a][0]),r[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(v.length)v.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,o=1;o<n.length;o++){var c=n[o];0!==r[c]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},r={app:0},s=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0abd":function(e,t,n){e.exports=n.p+"img/star-1.391a22d3.svg"},"0d7c":function(e,t,n){"use strict";n("96a1")},"268b":function(e,t,n){"use strict";n("84d0")},3086:function(e,t,n){"use strict";n("be42")},"3c97":function(e,t,n){},"49aa":function(e,t,n){"use strict";n("4dff")},"4dff":function(e,t,n){},5532:function(e,t,n){"use strict";n("88ed")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var i=n("2b0e"),r=n("8c4f"),s=n("1881"),a=n.n(s),o=n("4a7a"),c=n.n(o),l=(n("6dfc"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)}),u=[],d={name:"App"},v=d,m=n("2877"),f=Object(m["a"])(v,l,u,!1,null,"08cacf9a",null),p=f.exports,h=n("1da1"),g=n("3835"),b=(n("fb6a"),n("96cf"),n("2f62")),C=n("bc3a"),_=n.n(C);i["a"].use(b["a"]);var M=new b["a"].Store({state:{selectedMovie:[],moviesList:[]},mutations:{setSelectedMovie:function(e,t){var n=Object(g["a"])(t,1),i=n[0];e.selectedMovie=i},setMovies:function(e,t){e.moviesList=t}},actions:{fetchSelectedMovieById:function(e,t){return Object(h["a"])(regeneratorRuntime.mark((function n(){var i,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e.commit,n.next=3,_.a.get("http://localhost:3000/movies/".concat(t));case 3:r=n.sent,i("setSelectedMovie",r.data);case 5:case"end":return n.stop()}}),n)})))()},fetchMovies:function(e){return Object(h["a"])(regeneratorRuntime.mark((function t(){var n,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n=e.commit,t.next=3,_.a.get("http://localhost:3000/movies");case 3:i=t.sent,n("setMovies",i.data);case 5:case"end":return t.stop()}}),t)})))()}},getters:{getMoviesList:function(e){return e.moviesList},getMoviesListLength:function(e){return e.moviesList.length},getMoviesByRange:function(e){return function(t,n){return e.moviesList.slice(t,n)}},getSelectedMovie:function(e){return e.selectedMovie}}}),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"movies-page"},[n("div",{staticClass:"header"},[n("page-header-bar")],1),n("div",{staticClass:"content"},[n("movies-board")],1),n("div",{staticClass:"footer"},[n("page-footer")],1),n("router-view")],1)},O=[],S=n("5530"),y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"movies-board"},[n("div",{staticClass:"title-wrapper"},[n("span",{staticClass:"title",domProps:{innerHTML:e._s(e.boardTitle)}})]),n("div",{staticClass:"search-by"},[n("search-by",{attrs:{selectOptions:e.filterSelectOptions,selectedSearchAttr:e.searchAttr},on:{selected:e.onsSearchAttrSelected,termChanged:e.onsSearchTermChanged}})],1),n("div",{staticClass:"board"},[n("movies-cards-grid",{attrs:{gridData:e.filteredMoviesArray},on:{onMovieSelected:e.onMovieSelected}})],1),n("div",[n("modal",{attrs:{width:"1000",height:"500",adaptive:!0,clickToClose:!1,name:"movie-preview-modal"}},[n("detailed-preview",{on:{closeModal:e.hidePreviewModal}})],1)],1)])},x=[],j=(n("ac1f"),n("841c"),n("b0c0"),n("4e82"),n("4de4"),n("caad"),n("2532"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"movies-grid"},[n("ul",{staticClass:"movies-grid-container"},e._l(e.gridData,(function(t){return n("li",{key:t.id},[n("movie-card",{attrs:{movie:t},on:{buttonClicked:function(n){return e.onCardButtonClicked(t.id)}}})],1)})),0)])}),k=[],B=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"card"},[n("div",{staticClass:"image"},[n("img",{attrs:{src:e.movie.image}})]),n("div",{staticClass:"name"},[n("span",{staticClass:"name-text",domProps:{innerHTML:e._s(e.movie.title)}})]),n("div",{staticClass:"rating"},[n("rating",{attrs:{score:e.movie.rating}})],1),n("div",{staticClass:"more"},[n("button",{staticClass:"more-btn",on:{click:e.onButtonClicked}},[n("div",{staticClass:"btn-text"},[e._v("Read More")]),e._m(0)])])])},P=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"btn-arrow"},[i("img",{attrs:{src:n("b94f")}})])}],$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"rating"},[n("div",{staticClass:"rating-wrapper"},[e._m(0),n("div",{staticClass:"rating-number"},[e.score?n("span",[e._v(" "+e._s(e.score)+" / 10 ")]):n("span",[e._v(" Needs review ")])])])])},E=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"rating-image"},[i("img",{attrs:{src:n("0abd")}})])}],R={name:"Rating",props:{score:{type:String}}},A=R,L=(n("3086"),Object(m["a"])(A,$,E,!1,null,"5b171387",null)),T=L.exports,D={name:"MovieCard",components:{Rating:T},props:{movie:{type:Object,required:!0}},methods:{onButtonClicked:function(){console.info("MovieCard: onButtonClicked enter id selected ".concat(this.id)),this.$emit("buttonClicked",this.id)}}},N=D,H=(n("5532"),Object(m["a"])(N,B,P,!1,null,"47e157b0",null)),I=H.exports,J={name:"MoviesGrid",components:{MovieCard:I},props:{gridData:{type:Array}},methods:{onCardButtonClicked:function(e){console.info("MoviesGrid: onCardButtonClicked id:".concat(e)),this.$emit("onMovieSelected",e)}}},F=J,G=(n("268b"),Object(m["a"])(F,j,k,!1,null,"1c9e6ebc",null)),V=G.exports,X=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"search-by"},[n("span",{staticClass:"label"},[e._v(" Search By : ")]),n("v-select",{staticClass:"select",attrs:{label:"name",clearable:!1,value:e.selectedSearchAttr,options:e.selectOptions},on:{input:e.setSelected}}),n("input",{directives:[{name:"model",rawName:"v-model",value:e.term,expression:"term"}],staticClass:"search-input",domProps:{value:e.term},on:{input:function(t){t.target.composing||(e.term=t.target.value)}}})],1)},q=[],U={name:"SearchBy",data:function(){return{term:""}},watch:{term:function(e){console.info("SearchBy:term watch",e),this.$emit("termChanged",e)}},methods:{setSelected:function(e){console.info("SearchBy:setSelected",JSON.stringify(e)),this.selected=e.name,this.$emit("selected",e)}},props:{selectOptions:{type:Array},selectedSearchAttr:{type:Object}}},W=U,Y=(n("e2ed"),Object(m["a"])(W,X,q,!1,null,"aba31f4e",null)),z=Y.exports,K=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"detailed-preview"},[n("div",{staticClass:"image-section"},[n("img",{staticClass:"large-image",attrs:{src:e.movie.largeimage}}),n("img",{staticClass:"small-image",attrs:{src:e.movie.image}})]),n("div",{staticClass:"details-section"},[n("div",{staticClass:"title-section"},[e._v(" "+e._s(e.movie.title)+" ")]),n("div",{staticClass:"rating-section"},[n("div",{staticClass:"runtime"},[e._v(" "+e._s(e.buildRuntimeString())+" ")]),n("span",{staticClass:"divider"},[e._v(" | ")]),n("rating",{attrs:{score:e.movie.rating}})],1),n("div",{staticClass:"description-section"},[n("p",{domProps:{innerHTML:e._s(e.movie.synopsis)}})]),n("div",{staticClass:"button-section"},[n("button",{staticClass:"back-btn",on:{click:function(t){return e.hidePreviewModal()}}},[e._m(0),n("div",{staticClass:"btn-text"},[e._v("Back to list")])])])])])},Q=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"btn-arrow"},[i("img",{attrs:{src:n("9e57")}})])}],Z=(n("1276"),n("99af"),{name:"DetailedPreview",components:{Rating:T},methods:{hidePreviewModal:function(){this.$emit("closeModal")},buildRuntimeString:function(){var e=this.movie.runtime,t=e.split("h"),n=Object(g["a"])(t,2),i=n[0],r=n[1];return"".concat(i,"h  ").concat(r)}},computed:Object(S["a"])({},Object(b["c"])({movie:"getSelectedMovie"}))}),ee=Z,te=(n("6e42"),Object(m["a"])(ee,K,Q,!1,null,"238b4212",null)),ne=te.exports,ie={name:"MoviesBoard",components:{SearchBy:z,MoviesCardsGrid:V,DetailedPreview:ne},props:{title:{type:String}},data:function(){return{moviesList:[],boardTitle:"EXPLORE YOUR NEXT<br>MOVIES AND TV SHOWS",search:"",searchAttr:{name:"Title",value:"title"},filterSelectOptions:[{name:"Title",value:"title"},{name:"Rating",value:"rating"},{name:"Runtime",value:"runtime"}]}},methods:Object(S["a"])({onsSearchAttrSelected:function(e){console.info("MoviesBoard:onsSearchAttrSelected enter ".concat(JSON.stringify(e))),this.searchAttr=e},onsSearchTermChanged:function(e){console.info("MoviesBoard:onsSearchTermChanged enter, search term ".concat(e)),this.search=e},onMovieSelected:function(e){var t=this;return Object(h["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.fetchSelectedMovieById(e);case 2:t.$modal.show("movie-preview-modal");case 3:case"end":return n.stop()}}),n)})))()},hidePreviewModal:function(){this.$modal.hide("movie-preview-modal")}},Object(b["b"])({fetchSelectedMovieById:"fetchSelectedMovieById"})),computed:Object(S["a"])(Object(S["a"])({},Object(b["c"])({moviesData:"getMoviesList"})),{},{filteredMoviesArray:function(){var e=this;function t(e,t){return e.name<t.name?-1:e.name>t.name?1:0}return console.info("MoviesBoard:filteredMoviesArray enter"),this.moviesData.filter((function(t){return t[e.searchAttr.value].toLowerCase().includes(e.search.toLowerCase())})).sort(t)}})},re=ie,se=(n("8474"),Object(m["a"])(re,y,x,!1,null,"1c43e132",null)),ae=se.exports,oe=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},ce=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"footer"},[i("div",{staticClass:"next-image"},[i("img",{attrs:{src:n("df0b")}})]),i("div",{staticClass:"contact-us"},[e._v(" Contact us ")]),i("div",{staticClass:"support"},[i("div",[e._v("support@nextmovies.com")]),i("div",[e._v(" Mon - Fri | 6:00 am - 5:00 pm PT")])]),i("div",{staticClass:"social"},[i("img",{attrs:{src:n("dc9b")}}),i("img",{attrs:{src:n("d4fb")}}),i("img",{attrs:{src:n("a4b5")}}),i("img",{attrs:{src:n("b796")}}),i("img",{attrs:{src:n("e817")}})])])}],le={name:"PageFooter"},ue=le,de=(n("6e42a"),Object(m["a"])(ue,oe,ce,!1,null,"5794c5cf",null)),ve=de.exports,me=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},fe=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"header-bar"},[i("img",{staticClass:"header-image",attrs:{alt:"Vue logo",src:n("d799")}})])}],pe={name:"page-header-bar"},he=pe,ge=(n("49aa"),Object(m["a"])(he,me,fe,!1,null,"fc2be800",null)),be=ge.exports,Ce={name:"MoviesPage",components:{MoviesBoard:ae,PageFooter:ve,PageHeaderBar:be},beforeMount:function(){var e=this;return Object(h["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.fetchMovies();case 2:case"end":return t.stop()}}),t)})))()},methods:Object(S["a"])({},Object(b["b"])({fetchMovies:"fetchMovies"}))},_e=Ce,Me=(n("0d7c"),Object(m["a"])(_e,w,O,!1,null,"3be0c368",null)),we=Me.exports,Oe=new r["a"]({routes:[{path:"/",redirect:"/next-movies"},{name:"nextMovies",path:"/next-movies",component:we}]});i["a"].config.productionTip=!1,i["a"].component("v-select",c.a),i["a"].use(a.a),i["a"].use(r["a"]),new i["a"]({store:M,render:function(e){return e(p)},router:Oe}).$mount("#app")},"6e42":function(e,t,n){"use strict";n("3c97")},"6e42a":function(e,t,n){"use strict";n("dc0d")},"7c46":function(e,t,n){},8474:function(e,t,n){"use strict";n("bc77")},"84d0":function(e,t,n){},"88ed":function(e,t,n){},"96a1":function(e,t,n){},"9e57":function(e,t,n){e.exports=n.p+"img/back-arrow.f3437995.svg"},a4b5:function(e,t,n){e.exports=n.p+"img/twitter-share-icon.759a655d.svg"},b796:function(e,t,n){e.exports=n.p+"img/instagram-share-icon.7d386972.svg"},b94f:function(e,t,n){e.exports=n.p+"img/arrow.231f83e9.svg"},bc77:function(e,t,n){},be42:function(e,t,n){},d4fb:function(e,t,n){e.exports=n.p+"img/linkedin-share-icon.19fe8f16.svg"},d799:function(e,t,n){e.exports=n.p+"img/Logo2.c9e0a166.png"},dc0d:function(e,t,n){},dc9b:function(e,t,n){e.exports=n.p+"img/facebook-share-icon.87316b59.svg"},df0b:function(e,t,n){e.exports=n.p+"img/favicon.51317799.svg"},e2ed:function(e,t,n){"use strict";n("7c46")},e817:function(e,t,n){e.exports=n.p+"img/youtube-share-icon.ec666089.svg"}});
//# sourceMappingURL=app.9e0f492a.js.map