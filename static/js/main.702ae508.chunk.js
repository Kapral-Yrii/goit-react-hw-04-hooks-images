(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{11:function(e,t,a){e.exports={overlay:"Modal_overlay__MFkIy",modal:"Modal_modal__1fUse",button:"Modal_button__1apxr"}},15:function(e,t,a){e.exports={imageGalleryItem:"ImageGalleryItem_imageGalleryItem__ErZK8",image:"ImageGalleryItem_image__ol7wB"}},25:function(e,t,a){e.exports={app:"App_app__RLvf3"}},29:function(e,t,a){e.exports={searchbar:"Searchbar_searchbar__3sEUm"}},30:function(e,t,a){e.exports={imageGallery:"ImageGallery_imageGallery__rym3V"}},32:function(e,t,a){e.exports={loader:"FetchLoader_loader__1rmIs"}},33:function(e,t,a){e.exports={button:"Button_button__E979T"}},38:function(e,t,a){},6:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__1Fk87",button:"SearchForm_button__2I_2X",buttonLabel:"SearchForm_buttonLabel__1U1PY",input:"SearchForm_input__3Vd1U"}},79:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(9),s=a.n(r),o=(a(38),a(16)),u=a(4),i=a(25),l=a.n(i),b=a(13),h=a.n(b),m=a(26),j=a(27),d=a(28),f=a(14),p=a.n(f),g=function(){function e(t,a){Object(j.a)(this,e),this.baseURL=t,this.apiKey=a,this._searchQuery="",this._searchPage=1,this.searchPerPage=12}return Object(d.a)(e,[{key:"searchQuery",get:function(){return this._searchQuery},set:function(e){return this._searchQuery=e}},{key:"searchPage",get:function(){return this._searchPage},set:function(e){return this._searchPage=e}},{key:"searchPhoto",value:function(){var e=Object(m.a)(h.a.mark((function e(){var t,a,c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return p.a.defaults.baseURL=this.baseURL,this.searchPerPage=window.innerWidth>1700?15:12,t="?key=".concat(this.apiKey,"&q=").concat(this.searchQuery,"&page=").concat(this.searchPage,"&per_page=").concat(this.searchPerPage),e.prev=3,e.next=6,p.a.get(t);case 6:return a=e.sent,e.next=9,a.data.hits;case 9:return c=e.sent,e.abrupt("return",c);case 13:e.prev=13,e.t0=e.catch(3),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,this,[[3,13]])})));return function(){return e.apply(this,arguments)}}()}]),e}(),O=a(29),_=a.n(O),v=a(6),x=a.n(v),y=a(1);function k(e){var t=e.onSubmit;return Object(y.jsxs)("form",{className:x.a.searchForm,onSubmit:t,children:[Object(y.jsx)("button",{type:"submit",className:x.a.button,children:Object(y.jsx)("span",{className:x.a.buttonLabel,children:"Search"})}),Object(y.jsx)("input",{className:x.a.input,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})}function w(e){var t=e.onSubmit;return Object(y.jsx)("header",{className:_.a.searchbar,children:Object(y.jsx)(k,{onSubmit:t})})}var S=a(30),I=a.n(S),P=a(15),N=a.n(P),L=a(81);function M(e){var t=e.images,a=e.openModal;return Object(y.jsx)(y.Fragment,{children:t.map((function(e){return Object(y.jsx)("li",{className:N.a.imageGalleryItem,children:Object(y.jsx)("img",{src:e.webformatURL,alt:e.tags,"data-url":e.largeImageURL,className:N.a.image,onClick:a})},Object(L.a)())}))})}function C(e){var t=e.images,a=e.openModal;return Object(y.jsx)("ul",{className:I.a.imageGallery,children:Object(y.jsx)(M,{images:t,openModal:a})})}var E=a(31),F=a.n(E),G=a(32),R=a.n(G);function U(e){var t=e.visible;return Object(y.jsx)("div",{className:R.a.loader,children:Object(y.jsx)(F.a,{visible:t,type:"Oval",color:"#3f51b5",height:50,width:50})})}var Q=a(33),B=a.n(Q);function D(e){var t=e.loadMoreImages;return Object(y.jsx)("button",{type:"button",onClick:t,className:B.a.button,children:"Load more"})}var K=a(11),T=a.n(K);function J(e){var t=e.image,a=e.modalImageDescription,n=e.closeModal,s=Object(c.useCallback)((function(e){"Escape"===e.key&&n()}),[n]),o=Object(c.useCallback)((function(e){e.currentTarget===e.target&&n()}),[n]);return Object(c.useEffect)((function(){return window.addEventListener("keydown",s),function(){window.removeEventListener("keydown",s)}}),[s]),Object(r.createPortal)(Object(y.jsxs)("div",{className:T.a.overlay,onClick:o,children:[Object(y.jsx)("div",{className:T.a.modal,children:Object(y.jsx)("img",{src:t,alt:a})}),Object(y.jsx)("button",{className:T.a.button,type:"button",onClick:n,children:"X"})]}),document.getElementById("modalRoot"))}var V=function(e){var t=Object(c.useState)(e),a=Object(u.a)(t,2),n=a[0],r=a[1];return[n,function(){r((function(e){return!e}))}]},X=new g("https://pixabay.com/api","23140827-84799927bd5cf84c72c1ef99f");var q=function(){var e=Object(c.useState)([]),t=Object(u.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(1),s=Object(u.a)(r,2),i=s[0],b=s[1],h=Object(c.useState)(""),m=Object(u.a)(h,2),j=m[0],d=m[1],f=V(!1),p=Object(u.a)(f,2),g=p[0],O=p[1],_=V(!1),v=Object(u.a)(_,2),x=v[0],k=v[1],S=Object(c.useState)(""),I=Object(u.a)(S,2),P=I[0],N=I[1],L=Object(c.useState)(""),M=Object(u.a)(L,2),E=M[0],F=M[1],G=Object(c.useRef)(!1),R=Object(c.useRef)(!1),Q=Object(c.useCallback)((function(e){N(e.target.dataset.url),F(e.target.alt),k(!x)}),[N,F,k,x]),B=Object(c.useCallback)((function(){N(""),F(""),k(!x)}),[N,F,k,x]),K=Object(c.useCallback)((function(e){e.preventDefault(),d(e.target[1].value),b(1),G.current=!G.current}),[]),T=Object(c.useCallback)((function(){b((function(e){return e+1})),R.current=!R.current}),[]),q=Object(c.useCallback)((function(){return O(!g)}),[]);return Object(c.useEffect)((function(){G.current&&(X.searchQuery=j,X.searchPage=i,q(),X.searchPhoto().then((function(e){n(e),G.current=!G.current,q()})))}),[q,j,i]),Object(c.useEffect)((function(){R.current&&(X.searchPage=i,q(),X.searchPhoto().then((function(e){n((function(t){return[].concat(Object(o.a)(t),Object(o.a)(e))})),R.current=!R.current,q(),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})})))}),[q,i]),Object(y.jsxs)("div",{className:l.a.app,children:[Object(y.jsx)(w,{onSubmit:K}),Object(y.jsx)(C,{images:a,openModal:Q}),Object(y.jsx)(U,{visible:g}),a.length>0&&Object(y.jsx)(D,{loadMoreImages:T}),x&&Object(y.jsx)(J,{image:P,closeModal:B,modalImageDescription:E})]})};s.a.render(Object(y.jsx)(n.a.StrictMode,{children:Object(y.jsx)(q,{})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.702ae508.chunk.js.map