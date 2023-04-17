(this["webpackJsonpreact-masterclass"]=this["webpackJsonpreact-masterclass"]||[]).push([[0],{127:function(n,t,e){"use strict";e.r(t);var i,r,c,o,a,s,l,d,h=e(11),u=e(0),b=e.n(u),j=e(47),p=e.n(j),v=e(94),x=e(10),O=e(45),g=e(16),f=e(4),m=e(9),y=e(132),w=e(134),k=e(135),z=e(93),_=e(2),I=Object(x.c)(y.a.nav)(i||(i=Object(h.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  font-size: 14px;\n  padding: 20px 60px;\n  color: white;\n"]))),C=x.c.div(r||(r=Object(h.a)(["\n  display: flex;\n  align-items: center;\n"]))),P=Object(x.c)(y.a.svg)(c||(c=Object(h.a)(["\n  margin-right: 50px;\n  width: 95px;\n  height: 25px;\n  fill: ",";\n  path {\n    stroke-width: 6px;\n    stroke: white;\n  }\n"])),(function(n){return n.theme.red})),S=x.c.ul(o||(o=Object(h.a)(["\n  display: flex;\n  align-items: center;\n"]))),L=x.c.li(a||(a=Object(h.a)(["\n  margin-right: 20px;\n  color: ",";\n  transition: color 0.3s ease-in-out;\n  position: relative;\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n  &:hover {\n    color: ",";\n  }\n"])),(function(n){return n.theme.white.darker}),(function(n){return n.theme.white.lighter})),q=x.c.form(s||(s=Object(h.a)(["\n  color: white;\n  display: flex;\n  align-items: center;\n  position: relative;\n  svg {\n    height: 25px;\n  }\n"]))),H=Object(x.c)(y.a.span)(l||(l=Object(h.a)(["\n  position: absolute;\n  width: 5px;\n  height: 5px;\n  border-radius: 2.5px;\n  bottom: -5px;\n  left: 0;\n  right: 0;\n  margin: 0 auto;\n  background-color: ",";\n"])),(function(n){return n.theme.red})),R=Object(x.c)(y.a.input)(d||(d=Object(h.a)(["\n  transform-origin: right center;\n  position: absolute;\n  right: 0px;\n  padding: 5px 10px;\n  padding-left: 40px;\n  z-index: -1;\n  color: white;\n  font-size: 16px;\n  background-color: transparent;\n  border: 1px solid ",";\n"])),(function(n){return n.theme.white.lighter})),F={normal:{fillOpacity:1},active:{fillOpacity:[0,1,0],transition:{repeat:1/0}}},M={top:{backgroundColor:"rgba(0, 0, 0, 0)"},scroll:{backgroundColor:"rgba(0, 0, 0, 1)"}};var Q=function(){var n=Object(u.useState)(!1),t=Object(m.a)(n,2),e=t[0],i=t[1],r=Object(g.h)("/"),c=Object(g.h)("/tv"),o=Object(w.a)(),a=Object(w.a)(),s=Object(k.a)().scrollY;Object(u.useEffect)((function(){s.onChange((function(){s.get()>80?a.start("scroll"):a.start("top")}))}),[s,a]);var l=Object(g.f)(),d=Object(z.a)(),h=d.register,b=d.handleSubmit;return Object(_.jsxs)(I,{variants:M,animate:a,initial:"top",children:[Object(_.jsxs)(C,{children:[Object(_.jsx)(P,{variants:F,whileHover:"active",animate:"normal",xmlns:"http://www.w3.org/2000/svg",width:"1024",height:"276.742",viewBox:"0 0 1024 276.742",children:Object(_.jsx)(y.a.path,{d:"M140.803 258.904c-15.404 2.705-31.079 3.516-47.294 5.676l-49.458-144.856v151.073c-15.404 1.621-29.457 3.783-44.051 5.945v-276.742h41.08l56.212 157.021v-157.021h43.511v258.904zm85.131-157.558c16.757 0 42.431-.811 57.835-.811v43.24c-19.189 0-41.619 0-57.835.811v64.322c25.405-1.621 50.809-3.785 76.482-4.596v41.617l-119.724 9.461v-255.39h119.724v43.241h-76.482v58.105zm237.284-58.104h-44.862v198.908c-14.594 0-29.188 0-43.239.539v-199.447h-44.862v-43.242h132.965l-.002 43.242zm70.266 55.132h59.187v43.24h-59.187v98.104h-42.433v-239.718h120.808v43.241h-78.375v55.133zm148.641 103.507c24.594.539 49.456 2.434 73.51 3.783v42.701c-38.646-2.434-77.293-4.863-116.75-5.676v-242.689h43.24v201.881zm109.994 49.457c13.783.812 28.377 1.623 42.43 3.242v-254.58h-42.43v251.338zm231.881-251.338l-54.863 131.615 54.863 145.127c-16.217-2.162-32.432-5.135-48.648-7.838l-31.078-79.994-31.617 73.51c-15.678-2.705-30.812-3.516-46.484-5.678l55.672-126.75-50.269-129.992h46.482l28.377 72.699 30.27-72.699h47.295z"})}),Object(_.jsxs)(S,{children:[Object(_.jsx)(L,{children:Object(_.jsxs)(O.b,{to:"/",children:["Home ",(null===r||void 0===r?void 0:r.isExact)&&Object(_.jsx)(H,{layoutId:"circle"})]})}),Object(_.jsx)(L,{children:Object(_.jsxs)(O.b,{to:"/tv",children:["Tv Shows ",c&&Object(_.jsx)(H,{layoutId:"circle"})]})})]})]}),Object(_.jsx)(C,{children:Object(_.jsxs)(q,{onSubmit:b((function(n){l.push("/search?keyword=".concat(n.keyword))})),children:[Object(_.jsx)(y.a.svg,{onClick:function(){e?o.start({scaleX:0}):o.start({scaleX:1}),i((function(n){return!n}))},animate:{x:e?-185:0},transition:{type:"linear"},fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:Object(_.jsx)("path",{fillRule:"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",clipRule:"evenodd"})}),Object(_.jsx)(R,Object(f.a)(Object(f.a)({},h("keyword",{required:!0,minLength:2})),{},{animate:o,initial:{scaleX:0},transition:{type:"linear"},placeholder:"Search for movie or tv show..."}))]})})]})},E=e(27),T=e(133),W="563446817a04da527b7bf1f0171a5d0a",B="https://api.themoviedb.org/3";function X(){return fetch("".concat(B,"/movie/now_playing?api_key=").concat(W)).then((function(n){return n.json()}))}var Y,A,J,N,U,D,V,G,K,Z,$,nn,tn,en,rn,cn=function(){return fetch("".concat(B,"/movie/latest?api_key=").concat(W)).then((function(n){return n.json()}))},on=function(){return fetch("".concat(B,"/movie/top_rated?api_key=").concat(W)).then((function(n){return n.json()}))},an=function(){return fetch("".concat(B,"/movie/upcoming?api_key=").concat(W)).then((function(n){return n.json()}))},sn=function(){return fetch("".concat(B,"/tv/airing_today?api_key=").concat(W)).then((function(n){return n.json()}))},ln=function(){return fetch("".concat(B,"/tv/popular?api_key=").concat(W)).then((function(n){return n.json()}))},dn=function(){return fetch("".concat(B,"/tv/top_rated?api_key=").concat(W)).then((function(n){return n.json()}))},hn=function(n){return fetch("".concat(B,"/search/movie?api_key=").concat(W,"&query=").concat(n)).then((function(n){return n.json()}))},un=function(n){return fetch("".concat(B,"/search/tv?api_key=").concat(W,"&query=").concat(n)).then((function(n){return n.json()}))};function bn(n,t){return"https://image.tmdb.org/t/p/".concat(t||"original","/").concat(n)}var jn=x.c.div(Y||(Y=Object(h.a)(["\n    background: black;\n    padding-bottom: 200px;\n"]))),pn=x.c.div(A||(A=Object(h.a)(["\n    height: 20vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),vn=x.c.div(J||(J=Object(h.a)(["\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 60px;\n    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),\n        url(",");\n    background-size: cover;\n"])),(function(n){return n.bgPhoto})),xn=x.c.h2(N||(N=Object(h.a)(["\n    font-size: 68px;\n    margin-bottom: 20px; ;\n"]))),On=x.c.p(U||(U=Object(h.a)(["\n    font-size: 30px;\n    width: 50%;\n"]))),gn=x.c.div(D||(D=Object(h.a)(["\n    position: relative;\n"]))),fn=x.c.h3(V||(V=Object(h.a)(["\n    font-size: 46px;\n    margin-bottom: 20px;\n"]))),mn=Object(x.c)(y.a.div)(G||(G=Object(h.a)(["\n    display: grid;\n    gap: 5px;\n    grid-template-columns: repeat(6, 1fr);\n    width: 100%;\n"]))),yn=Object(x.c)(y.a.div)(K||(K=Object(h.a)(["\n    background-color: white;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center center;\n    height: 200px;\n    font-size: 66px;\n    cursor: pointer;\n    &:first-child {\n        transform-origin: center left;\n    }\n    &:last-child {\n        transform-origin: center right;\n    }\n"])),(function(n){return n.bgPhoto})),wn=Object(x.c)(y.a.div)(Z||(Z=Object(h.a)(["\n    padding: 10px;\n    background-color: ",";\n    opacity: 0;\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    h4 {\n        text-align: center;\n        font-size: 18px;\n    }\n"])),(function(n){return n.theme.black.lighter})),kn={hidden:{x:window.outerWidth+5},visible:{x:0},exit:{x:-window.outerWidth-5}},zn={normal:{scale:1},hover:{scale:1.3,y:-80,transition:{delay:.5,duaration:.1,type:"tween"}}},_n={hover:{opacity:1,transition:{delay:.5,duaration:.1,type:"tween"}}},In=Object(x.c)(y.a.div)($||($=Object(h.a)(["\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n"]))),Cn=Object(x.c)(y.a.div)(nn||(nn=Object(h.a)(["\n    position: absolute;\n    width: 40vw;\n    height: 80vh;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    border-radius: 15px;\n    overflow: hidden;\n    background-color: ",";\n"])),(function(n){return n.theme.black.lighter})),Pn=x.c.div(tn||(tn=Object(h.a)(["\n    width: 100%;\n    background-size: cover;\n    background-position: center center;\n    height: 400px;\n"]))),Sn=x.c.h3(en||(en=Object(h.a)(["\n    color: ",";\n    padding: 20px;\n    font-size: 46px;\n    position: relative;\n    top: -80px;\n"])),(function(n){return n.theme.white.lighter})),Ln=x.c.p(rn||(rn=Object(h.a)(["\n    padding: 20px;\n    position: relative;\n    top: -80px;\n    color: ",";\n"])),(function(n){return n.theme.white.lighter}));var qn,Hn,Rn,Fn,Mn,Qn,En,Tn,Wn=function(){var n=Object(g.f)(),t=Object(g.h)("/movies/:movieId"),e=Object(u.useState)(0),i=Object(m.a)(e,2),r=i[0],c=i[1],o=Object(u.useState)(!1),a=Object(m.a)(o,2),s=a[0],l=a[1],d=function(){return l((function(n){return!n}))},h=function(t){n.push("/movies/".concat(t))},b=Object(k.a)().scrollY,j=[Object(E.useQuery)(["movies","nowPlaying"],X),Object(E.useQuery)(["movies","latest"],cn),Object(E.useQuery)(["movies","topRated"],on),Object(E.useQuery)(["movies","upComming"],an)],p=Object(m.a)(j,4),v=p[0],x=v.data,O=v.isLoading,f=p[1],y=(f.data,f.isLoading),w=p[2],z=w.data,I=w.isLoading,C=p[3],P=C.data,S=C.isLoading,L=(null===t||void 0===t?void 0:t.params.movieId)&&(null===x||void 0===x?void 0:x.results.find((function(n){return n.id===+t.params.movieId})));return Object(_.jsx)(jn,{children:O||y||I||S?Object(_.jsx)(pn,{children:"Loading..."}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(vn,{onClick:function(){if(x){if(s)return;d();var n=x.results.length-1,t=Math.floor(n/6)-1;c((function(n){return n===t?0:n+1}))}},bgPhoto:bn((null===x||void 0===x?void 0:x.results[0].backdrop_path)||""),children:[Object(_.jsx)(xn,{children:null===x||void 0===x?void 0:x.results[0].title}),Object(_.jsx)(On,{children:null===x||void 0===x?void 0:x.results[0].overview})]}),Object(_.jsx)(gn,{children:Object(_.jsxs)(T.a,{initial:!1,onExitComplete:d,children:[Object(_.jsx)(fn,{children:"Now Playing"}),Object(_.jsx)(mn,{variants:kn,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===x||void 0===x?void 0:x.results.slice(1).slice(6*r,6*r+6).map((function(n){return Object(_.jsx)(yn,{layoutId:n.id+"",whileHover:"hover",initial:"normal",variants:zn,onClick:function(){return h(n.id)},transition:{type:"tween"},bgPhoto:bn(n.backdrop_path,"w500"),children:Object(_.jsx)(wn,{variants:_n,children:Object(_.jsx)("h4",{children:n.title})})},n.id)}))},r),Object(_.jsx)(fn,{children:"Top Rated"}),Object(_.jsx)(mn,{variants:kn,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===z||void 0===z?void 0:z.results.map((function(n){return Object(_.jsx)(yn,{layoutId:n.id+"",whileHover:"hover",initial:"normal",variants:zn,onClick:function(){return h(n.id)},transition:{type:"tween"},bgPhoto:bn(n.backdrop_path,"w500"),children:Object(_.jsx)(wn,{variants:_n,children:Object(_.jsx)("h4",{children:n.title})})},n.id)}))},r),Object(_.jsx)(fn,{children:"Up Comming"}),Object(_.jsx)(mn,{variants:kn,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===P||void 0===P?void 0:P.results.map((function(n){return Object(_.jsx)(yn,{layoutId:n.id+"",whileHover:"hover",initial:"normal",variants:zn,onClick:function(){return h(n.id)},transition:{type:"tween"},bgPhoto:bn(n.backdrop_path,"w500"),children:Object(_.jsx)(wn,{variants:_n,children:Object(_.jsx)("h4",{children:n.title})})},n.id)}))},r)]})}),Object(_.jsx)(T.a,{children:t?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(In,{onClick:function(){return n.push("/")},exit:{opacity:0},animate:{opacity:1}}),Object(_.jsx)(Cn,{style:{top:b.get()+100},layoutId:t.params.movieId,children:L&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Pn,{style:{backgroundImage:"linear-gradient(to top, black, transparent), url(".concat(bn(L.backdrop_path,"w500"),")")}}),Object(_.jsx)(Sn,{children:L.title}),Object(_.jsx)(Ln,{children:L.overview})]})})]}):null})]})})},Bn=e(12),Xn=e(22),Yn=x.c.div(qn||(qn=Object(h.a)(["\n    padding: 20px;\n"]))),An=x.c.ul(Hn||(Hn=Object(h.a)(["\n    list-style: none;\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n    gap: 20px;\n"]))),Jn=x.c.h3(Rn||(Rn=Object(h.a)(["\n    font-size: 46px;\n    margin-bottom: 20px;\n"]))),Nn=x.c.li(Fn||(Fn=Object(h.a)(["\n    display: flex;\n    flex-direction: column;\n"]))),Un=x.c.img(Mn||(Mn=Object(h.a)(["\n    width: 100%;\n    height: 300px;\n    object-fit: cover;\n    margin-bottom: 10px;\n"]))),Dn=x.c.h4(Qn||(Qn=Object(h.a)(["\n    font-size: 20px;\n    margin-bottom: 5px;\n"]))),Vn=x.c.p(En||(En=Object(h.a)(["\n    font-size: 16px;\n    margin-bottom: 5px;\n"]))),Gn=x.c.p(Tn||(Tn=Object(h.a)(["\n    font-size: 16px;\n    line-height: 1.4;\n    margin-bottom: 10px;\n"])));var Kn,Zn,$n,nt,tt,et,it,rt,ct,ot,at,st,lt,dt,ht,ut=function(){var n=Object(g.g)(),t=new URLSearchParams(n.search).get("keyword"),e=Object(u.useState)(),i=Object(m.a)(e,2),r=i[0],c=i[1];Object(u.useEffect)((function(){var n=function(){var n=Object(Xn.a)(Object(Bn.a)().mark((function n(){var e;return Object(Bn.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,hn(t||"");case 2:e=n.sent,c(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[t]);var o=Object(u.useState)(),a=Object(m.a)(o,2),s=a[0],l=a[1];return Object(u.useEffect)((function(){var n=function(){var n=Object(Xn.a)(Object(Bn.a)().mark((function n(){var e;return Object(Bn.a)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,un(t||"");case 2:e=n.sent,l(e);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}),[t]),Object(_.jsx)(Yn,{children:r||s?Object(_.jsxs)(An,{children:[Object(_.jsx)(Jn,{children:"Movie Result"}),null===r||void 0===r?void 0:r.results.map((function(n){return Object(_.jsxs)(Nn,{children:[Object(_.jsx)(Un,{src:bn(n.poster_path),alt:""}),Object(_.jsx)(Dn,{children:n.title}),Object(_.jsx)(Vn,{children:n.title}),Object(_.jsx)(Gn,{children:n.overview})]},n.id)})),Object(_.jsx)(Jn,{children:"TV Result"}),null===s||void 0===s?void 0:s.results.map((function(n){return Object(_.jsxs)(Nn,{children:[Object(_.jsx)(Un,{src:bn(n.poster_path),alt:""}),Object(_.jsx)(Dn,{children:n.name}),Object(_.jsx)(Vn,{children:n.name}),Object(_.jsx)(Gn,{children:n.overview})]},n.id)}))]}):Object(_.jsx)("p",{children:"No Results"})})},bt=x.c.div(Kn||(Kn=Object(h.a)(["\n    background: black;\n    padding-bottom: 200px;\n"]))),jt=x.c.div(Zn||(Zn=Object(h.a)(["\n    height: 20vh;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n"]))),pt=x.c.div($n||($n=Object(h.a)(["\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 60px;\n    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),\n        url(",");\n    background-size: cover;\n"])),(function(n){return n.bgPhoto})),vt=x.c.h2(nt||(nt=Object(h.a)(["\n    font-size: 68px;\n    margin-bottom: 20px;\n"]))),xt=x.c.p(tt||(tt=Object(h.a)(["\n    font-size: 30px;\n    width: 50%;\n"]))),Ot=x.c.div(et||(et=Object(h.a)(["\n    position: relative;\n"]))),gt=x.c.h3(it||(it=Object(h.a)(["\n    font-size: 46px;\n    margin-bottom: 20px;\n"]))),ft=Object(x.c)(y.a.div)(rt||(rt=Object(h.a)(["\n    display: grid;\n    gap: 5px;\n    grid-template-columns: repeat(6, 1fr);\n    width: 100%;\n"]))),mt=Object(x.c)(y.a.div)(ct||(ct=Object(h.a)(["\n    background-color: white;\n    background-image: url(",");\n    background-size: cover;\n    background-position: center center;\n    height: 200px;\n    font-size: 66px;\n    cursor: pointer;\n    &:first-child {\n        transform-origin: center left;\n    }\n    &:last-child {\n        transform-origin: center right;\n    }\n"])),(function(n){return n.bgPhoto})),yt=Object(x.c)(y.a.div)(ot||(ot=Object(h.a)(["\n    padding: 10px;\n    background-color: ",";\n    opacity: 0;\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    h4 {\n        text-align: center;\n        font-size: 18px;\n    }\n"])),(function(n){return n.theme.black.lighter})),wt={hidden:{x:window.outerWidth+5},visible:{x:0},exit:{x:-window.outerWidth-5}},kt={normal:{scale:1},hover:{scale:1.3,y:-80,transition:{delay:.5,duaration:.1,type:"tween"}}},zt={hover:{opacity:1,transition:{delay:.5,duaration:.1,type:"tween"}}},_t=Object(x.c)(y.a.div)(at||(at=Object(h.a)(["\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n"]))),It=Object(x.c)(y.a.div)(st||(st=Object(h.a)(["\n    position: absolute;\n    width: 40vw;\n    height: 80vh;\n    left: 0;\n    right: 0;\n    margin: 0 auto;\n    border-radius: 15px;\n    overflow: hidden;\n    background-color: ",";\n"])),(function(n){return n.theme.black.lighter})),Ct=x.c.div(lt||(lt=Object(h.a)(["\n    width: 100%;\n    background-size: cover;\n    background-position: center center;\n    height: 400px;\n"]))),Pt=x.c.h3(dt||(dt=Object(h.a)(["\n    color: ",";\n    padding: 20px;\n    font-size: 46px;\n    position: relative;\n    top: -80px;\n"])),(function(n){return n.theme.white.lighter})),St=x.c.p(ht||(ht=Object(h.a)(["\n    padding: 20px;\n    position: relative;\n    top: -80px;\n    color: ",";\n"])),(function(n){return n.theme.white.lighter}));var Lt=function(){var n=Object(g.f)(),t=Object(g.h)("/tv/:tvId"),e=Object(u.useState)(0),i=Object(m.a)(e,2),r=i[0],c=i[1],o=Object(u.useState)(!1),a=Object(m.a)(o,2),s=a[0],l=a[1],d=function(){return l((function(n){return!n}))},h=function(t){n.push("/tv/".concat(t))},b=Object(k.a)().scrollY,j=[Object(E.useQuery)(["tv","popular"],ln),Object(E.useQuery)(["tv","topRated"],dn),Object(E.useQuery)(["tv","airingToday"],sn)],p=Object(m.a)(j,3),v=p[0],x=v.data,O=v.isLoading,f=p[1],y=f.data,w=f.isLoading,z=p[2],I=z.data,C=z.isLoading,P=(null===t||void 0===t?void 0:t.params.tvId)&&(null===x||void 0===x?void 0:x.results.find((function(n){return n.id===+t.params.tvId})));return Object(_.jsx)(bt,{children:O||w||C?Object(_.jsx)(jt,{children:"Loading..."}):Object(_.jsxs)(_.Fragment,{children:[Object(_.jsxs)(pt,{onClick:function(){if(x){if(s)return;d();var n=x.results.length-1,t=Math.floor(n/6)-1;c((function(n){return n===t?0:n+1}))}},bgPhoto:bn((null===x||void 0===x?void 0:x.results[0].backdrop_path)||""),children:[Object(_.jsx)(vt,{children:null===x||void 0===x?void 0:x.results[0].name}),Object(_.jsx)(xt,{children:null===x||void 0===x?void 0:x.results[0].overview})]}),Object(_.jsx)(Ot,{children:Object(_.jsxs)(T.a,{initial:!1,onExitComplete:d,children:[Object(_.jsx)(gt,{children:"Popular"}),Object(_.jsx)(ft,{variants:wt,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===x||void 0===x?void 0:x.results.slice(1).slice(6*r,6*r+6).map((function(n){return Object(_.jsx)(mt,{layoutId:n.id+"",whileHover:"hover",initial:"normal",variants:kt,onClick:function(){return h(n.id)},transition:{type:"tween"},bgPhoto:bn(n.backdrop_path,"w500"),children:Object(_.jsx)(yt,{variants:zt,children:Object(_.jsx)("h4",{children:n.name})})},n.id)}))},r),Object(_.jsx)(gt,{children:"Top Rated"}),Object(_.jsx)(ft,{variants:wt,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===y||void 0===y?void 0:y.results.map((function(n){return Object(_.jsx)(mt,{layoutId:n.id+"",whileHover:"hover",initial:"normal",variants:kt,onClick:function(){return h(n.id)},transition:{type:"tween"},bgPhoto:bn(n.backdrop_path,"w500"),children:Object(_.jsx)(yt,{variants:zt,children:Object(_.jsx)("h4",{children:n.name})})},n.id)}))},r),Object(_.jsx)(gt,{children:"Airing Today"}),Object(_.jsx)(ft,{variants:wt,initial:"hidden",animate:"visible",exit:"exit",transition:{type:"tween",duration:1},children:null===I||void 0===I?void 0:I.results.map((function(n){return Object(_.jsx)(mt,{layoutId:n.id+"",whileHover:"hover",initial:"normal",variants:kt,onClick:function(){return h(n.id)},transition:{type:"tween"},bgPhoto:bn(n.backdrop_path,"w500"),children:Object(_.jsx)(yt,{variants:zt,children:Object(_.jsx)("h4",{children:n.name})})},n.id)}))},r)]})}),Object(_.jsx)(T.a,{children:t?Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(_t,{onClick:function(){return n.push("/")},exit:{opacity:0},animate:{opacity:1}}),Object(_.jsx)(It,{style:{top:b.get()+100},layoutId:t.params.tvId+"",children:P&&Object(_.jsxs)(_.Fragment,{children:[Object(_.jsx)(Ct,{style:{backgroundImage:"linear-gradient(to top, black, transparent), url(".concat(bn(P.backdrop_path,"w500"),")")}}),Object(_.jsx)(Pt,{children:P.name}),Object(_.jsx)(St,{children:P.overview})]})})]}):null})]})})};var qt,Ht=function(){return Object(_.jsxs)(O.a,{children:[Object(_.jsx)(Q,{}),Object(_.jsxs)(g.c,{children:[Object(_.jsx)(g.a,{path:"/tv",children:Object(_.jsx)(Lt,{})}),Object(_.jsx)(g.a,{path:"/search",children:Object(_.jsx)(ut,{})}),Object(_.jsx)(g.a,{path:["/","/movies/:movieId"],children:Object(_.jsx)(Wn,{})})]})]})},Rt=Object(x.b)(qt||(qt=Object(h.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, menu, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmain, menu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, main, menu, nav, section {\n  display: block;\n}\n/* HTML5 hidden-attribute fix for newer browsers */\n*[hidden] {\n    display: none;\n}\nbody {\n  line-height: 1;\n}\nmenu, ol, ul {\n  list-style: none;\n}\nblockquote, q {\n  quotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none;\n}\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n* {\n  box-sizing: border-box;\n}\nbody {\n  font-weight: 300;\n  font-family: 'Source Sans Pro', sans-serif;\n  color:",";\n  line-height: 1.2;\n  background-color: black;\n}\na {\n  text-decoration:none;\n  color:inherit;\n}\n"])),(function(n){return n.theme.white.darker})),Ft=new E.QueryClient;p.a.render(Object(_.jsx)(b.a.StrictMode,{children:Object(_.jsx)(v.a,{children:Object(_.jsx)(E.QueryClientProvider,{client:Ft,children:Object(_.jsxs)(x.a,{theme:{red:"#E51013",black:{veryDark:"#141414",darker:"#181818",lighter:"#2F2F2F"},white:{lighter:"#fff",darker:"#e5e5e5"}},children:[Object(_.jsx)(Rt,{}),Object(_.jsx)(Ht,{})]})})})}),document.getElementById("root"))}},[[127,1,2]]]);
//# sourceMappingURL=main.01966b2f.chunk.js.map