(this.webpackJsonpprojfrontend=this.webpackJsonpprojfrontend||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){e.exports=a.p+"static/media/coming-soon.663ce55d.png"},38:function(e,t,a){e.exports=a.p+"static/media/heading-video.0747b35f.mp4"},39:function(e,t,a){e.exports=a.p+"static/media/logo-1x.6d7e667d.png"},40:function(e,t,a){e.exports=a.p+"static/media/kronplatz-prices.a8ca9c09.png"},44:function(e,t,a){e.exports=a(84)},83:function(e,t,a){},84:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(17),o=a.n(r),l=a(3),i=a(5),s=a(2),m=a(42),u=a(32),d="https://104.236.16.18/",p=a(1),_=function(e){if(void 0!==typeof windows){localStorage.removeItem("cart");localStorage.setItem("cart",JSON.stringify([])),e()}},E=function(){return void 0!=typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},g=function(e){var t=E()&&E().user.id;if(console.log("USERID: ",t),void 0!==typeof window)return localStorage.removeItem("jwt"),_((function(){})),fetch("".concat(d,"user/logout/").concat(t),{method:"GET"}).then((function(t){console.log("Signout success"),e()})).catch((function(e){return console.log(e)}))},f=function(e){var t=e.component,a=Object(m.a)(e,["component"]);return c.a.createElement(s.b,Object.assign({},a,{render:function(e){return E()?c.a.createElement(t,e):c.a.createElement(s.a,{to:{pathname:"/signin",state:{from:e.location}}})}}))},v=(a(13),function(e){var t=e.title,a=void 0===t?"My Title":t,n=e.description,r=void 0===n?"My description":n,o=e.className,l=void 0===o?"":o,i=e.children;return c.a.createElement("div",null,c.a.createElement("div",null,c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Lato:100,300,400,700,900",rel:"stylesheet"}),c.a.createElement("div",null,c.a.createElement("h2",{class:"title"},a),c.a.createElement("p",null,r)),c.a.createElement("div",{className:l},i)),c.a.createElement("footer",null,c.a.createElement("div",null,c.a.createElement("h4",null,"If you got any questions, reach me out at instagram."))))}),b=function(e){var t=e.product,a=t?t.image:"https://images.pexels.com/photos/3561339/pexels-photo-3561339.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";return c.a.createElement("div",{class:"card__image"},c.a.createElement("img",{src:a,style:{maxHeight:"100%",maxWidth:"100%"},alt:""}))},h=function(e){var t=e.product,a=(e.addtoCart,e.removeFromCart,e.reload,e.setReload,Object(n.useState)(!1)),r=Object(l.a)(a,2),o=r[0];r[1];console.log(t);var i=t?t.name:"A photo from pexels",m=t?t.description:"Default description",u=t?t.price:"Default";return c.a.createElement("div",{class:"card"},c.a.createElement("div",{className:"card__body"},function(e){if(e)return c.a.createElement(s.a,{to:"/cart"})}(o),c.a.createElement(b,{product:t}),c.a.createElement("div",{className:"card__header"},i),c.a.createElement("p",{class:"card__description"},m),c.a.createElement("p",{class:"card__price"},"$ ",u),c.a.createElement("div",null,"See details")))},N=a(34),y=a.n(N),O=function(e){var t=e.products,a=e.reload,r=void 0===a?void 0:a,o=e.setReload,i=void 0===o?function(e){return e}:o,m=Object(n.useState)({loading:!1,success:!1,clientToken:null,error:"",instance:{}}),u=Object(l.a)(m,2),f=u[0],v=u[1],b=E&&E().user.id,h=E&&E().token,N=function(){var e=0;return t.map((function(t){e+=parseInt(t.price)})),e},O=function(){v({loading:!0});f.instance.requestPaymentMethod().then((function(e){console.log("MYDATA",e);var a={paymentMethodNonce:e.nonce,amount:N()};(function(e,t,a){var n=new FormData;for(var c in a)n.append(c,a[c]);return fetch("".concat(d,"payment/process/").concat(e,"/").concat(t,"/"),{method:"POST",body:n}).then((function(e){return console.log("p-0",e),e.json()}))})(b,h,a).then((function(e){if(console.log("POINT-1",e),e.error)"1"==e.code&&(console.log("PAYMENT Failed!"),g((function(){return c.a.createElement(s.a,{to:"/"})})));else{v(Object(p.a)(Object(p.a)({},f),{},{success:e.success,loading:!1})),console.log("PAYMENT SUCCESS");var a="";t.forEach((function(e){a+=e.name+", "}));var n={products:a,transaction_id:e.transaction.id,amount:e.transaction.amount};(function(e,t,a){var n=new FormData;for(var c in a)n.append(c,a[c]);return fetch("".concat(d,"order/add/").concat(e,"/").concat(t,"/"),{method:"POST",body:n}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))})(b,h,n).then((function(e){e.error?"1"==e.code&&(console.log("Order Failed!"),g((function(){return c.a.createElement(s.a,{to:"/"})}))):1==e.success&&console.log("ORDER PLACED!!")})).catch((function(e){v({loading:!1,success:!1}),console.log("Order FAILED",e)})),_((function(){console.log("Did we got a crash?")})),i(!r)}})).catch((function(e){v({loading:!1,success:!1}),console.log("PAYMENT FAILED",e)}))}))};return c.a.createElement("div",null,c.a.createElement("h3",null,"Your bill is $ ",N()),c.a.createElement("div",null,null!==f.clientToken&&t.length>0?c.a.createElement("div",null,c.a.createElement(y.a,{options:{authorization:f.clientToken},onInstance:function(e){return f.instance=e}}),c.a.createElement("button",{onClick:O,className:"btn btn-block btn-success"},"Buy Now")):c.a.createElement("h3",null,"Please login first or add something in cart")))},j=function(){var e=Object(n.useState)(!1),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),i=Object(l.a)(o,2),s=i[0],m=i[1];Object(n.useEffect)((function(){m(function(){if(void 0!==typeof window&&localStorage.getItem("cart"))return JSON.parse(localStorage.getItem("cart"))}())}),[a]);return c.a.createElement(v,{title:"Cart page",description:"Welcome to checkout"},c.a.createElement("div",{className:"row text-center"},c.a.createElement("div",{className:"col-6"},s.length>0?function(e){return c.a.createElement("div",null,e.map((function(e,t){return c.a.createElement(h,{key:t,product:e,removeFromCart:!0,addtoCart:!1,reload:a,setReload:r})})))}(s):c.a.createElement("h4",null,"No products")),c.a.createElement("div",{className:"col-6"},s.length>0?c.a.createElement(O,{products:s,setReload:r}):c.a.createElement("h3",null,"Please login or add something in cart"))))},w=function(){return fetch("".concat(d,"product"),{method:"GET"}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))},S=a(35),k=a(36),x=a(43),C=a(41),D=a(37),q=a.n(D),A=function(e){var t=e.results.map((function(e){return c.a.createElement("li",{key:e.id},e.name)}));return c.a.createElement("ul",null,t)},T=function(e){Object(x.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(S.a)(this,a);for(var n=arguments.length,c=new Array(n),r=0;r<n;r++)c[r]=arguments[r];return(e=t.call.apply(t,[this].concat(c))).state={query:"",results:[]},e.getQuery=function(){q.a.get("".concat(d,"product/search/?search=").concat(e.state.query)).then((function(t){e.setState({results:t.data})}))},e.handleInputChange=function(){e.setState({query:e.search.value},(function(){e.state.query&&e.state.query.length>1?e.state.query.length%2===0&&e.getQuery():e.state.query}))},e}return Object(k.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{class:"search"},c.a.createElement("form",{class:"search__box"},c.a.createElement("input",{placeholder:"Search by activity, name or country ...",ref:function(t){return e.search=t},onChange:this.handleInputChange,class:"search__input"}),c.a.createElement("i",{class:"fas fa-search search__icon"}),c.a.createElement(A,{results:this.state.results})))}}]),a}(n.Component),I=a(38),P=a.n(I),R=a(39),F=a.n(R),L=function(e,t){return e.location.pathname===t?{color:"#00EDF9"}:{color:"#000000"}},M=Object(s.g)((function(e){var t=e.history;e.path;return c.a.createElement("div",{className:"navigation"},c.a.createElement("div",{class:"navigation__logo-box"},c.a.createElement(i.b,{style:L(t,"/"),to:"/"},c.a.createElement("img",{src:F.a,alt:"Logo",className:"navigation__logo"}))),c.a.createElement("ul",{class:"navigation__list"},c.a.createElement("li",{class:"navigation__item"},c.a.createElement(i.b,{style:L(t,"/"),class:"navigation__link",to:"/"},"Home")),c.a.createElement("li",{class:"navigation__item"},c.a.createElement(i.b,{style:L(t,"/discover"),className:"navigation__link",to:"/"},"Discover")),c.a.createElement("li",{class:"navigation__item"},c.a.createElement(i.b,{style:L(t,"/winter"),class:"navigation__link",to:"/"},"Winter")),c.a.createElement("li",{class:"navigation__item"},c.a.createElement(i.b,{style:L(t,"/summer"),class:"navigation__link",to:"/"},"Summer"))),c.a.createElement("div",{class:"navigation__buttons"},c.a.createElement("li",{class:"navigation__item"},c.a.createElement(i.b,{style:L(t,"/cart"),class:"navigation__link",to:"/cart"},c.a.createElement("i",{class:"fas fa-shopping-cart navigation__cart"}))),!E()&&c.a.createElement(n.Fragment,null,c.a.createElement("li",null,c.a.createElement(i.b,{class:"navigation__link navigation__buttons--white",to:"/signin"},"Login")),c.a.createElement("li",null,c.a.createElement(i.b,{class:"navigation__link navigation__buttons--blue",to:"/signup"},"Signup"))),E()&&c.a.createElement("li",{class:"button button--blue"},c.a.createElement("span",{onClick:function(){g((function(){t.push("/")}))},class:"button--blue"},"Signout"))))}));function Y(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),i=Object(l.a)(o,2),s=i[0],m=i[1];return Object(n.useEffect)((function(){w().then((function(e){e.error?(m(e.error),console.log(s)):r(e)}))}),[]),c.a.createElement("div",{className:"main"},c.a.createElement(M,null),c.a.createElement(v,{title:"Enjoy your day. We provide the fun!",description:"",class:"title"},c.a.createElement("div",{class:"bg-video"},c.a.createElement("video",{class:"bg-video__content",src:P.a,type:"video/mp4",autoPlay:!0,muted:!0})),c.a.createElement(T,null),c.a.createElement("div",{class:"section-discover"},c.a.createElement("h1",{class:"heading-primary"},"Discover"),c.a.createElement("div",{class:"row"},a.map((function(e,t){return c.a.createElement("div",{key:t,className:"col-1-of-3"},c.a.createElement(h,{product:e}))}))))))}var J=a(12),U=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),t=Object(l.a)(e,2),a=t[0],r=t[1],o=a.name,i=a.email,s=a.password,m=(a.error,a.success,function(e){return function(t){r(Object(p.a)(Object(p.a)({},a),{},Object(J.a)({error:!1},e,t.target.value)))}}),u=function(e){var t;e.preventDefault(),r(Object(p.a)(Object(p.a)({},a),{},{error:!1})),(t={name:o,email:i,password:s},fetch("".concat(d,"user/"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){return console.log(e)}))).then((function(e){console.log("DATA",e),e.email===i?r(Object(p.a)(Object(p.a)({},a),{},{name:"",email:"",password:"",error:"",success:!0})):r(Object(p.a)(Object(p.a)({},a),{},{error:!0,success:!1}))})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",null,c.a.createElement(M,null),c.a.createElement(v,{title:"Welcome to registration page!",description:""},c.a.createElement("div",{className:"signin"},c.a.createElement("div",{className:"signin__form"},c.a.createElement("form",{className:"form"},c.a.createElement("div",{className:"form__group"},c.a.createElement("input",{type:"text",className:"form__input",value:o,onChange:m("name"),placeholder:"Name",id:"name",required:!0}),c.a.createElement("label",{for:"name",className:"form__label"},"Name")),c.a.createElement("div",{className:"form__group"},c.a.createElement("input",{type:"email",className:"form__input",value:i,onChange:m("email"),placeholder:"Email address",id:"email",required:!0}),c.a.createElement("label",{for:"email",className:"form__label"},"Email Address")),c.a.createElement("div",{className:"form__group"},c.a.createElement("input",{name:"password",type:"password",className:"form__input",value:s,onChange:m("password"),placeholder:"Password",id:"email",required:!0}),c.a.createElement("label",{for:"password",className:"form__label"},"Password")),c.a.createElement("div",{className:"signin__form__button"},c.a.createElement("button",{onClick:u,className:"button navigation__buttons--blue button--page"},"Submit"))))),c.a.createElement("p",{className:"text-white text-center"},JSON.stringify(a))))},W=(a(83),a(40)),B=a.n(W),G=a(15),H=a.n(G),z=function(e){return function(e){for(var t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],o=a[1],i=Object(n.useState)(!1),m=Object(l.a)(i,2),u=m[0],d=m[1],p=(e="",0);p<r.length;p++)"Plan de Corones"==r[p].name&&(e=r[p]);for(p=0;p<r.length;p++)console.log(r[p].prod);return console.log(r),Object(n.useEffect)((function(){w().then((function(e){e.error?(d(e.error),console.log(u)):o(e)}))}),[]),c.a.createElement("div",null,c.a.createElement(M,null),c.a.createElement("div",{class:"product"},c.a.createElement("div",{class:"product__header"},c.a.createElement("img",{src:e.image,class:"product__image",alt:"".concat(e.name," mountain")}),c.a.createElement("div",{class:"product__info"},c.a.createElement("div",{class:"product__heading"},c.a.createElement("div",{class:"product__heading--name"},e.name)),c.a.createElement("div",{class:"product__basic"},c.a.createElement("div",{class:"product__heading--location"},c.a.createElement("i",{class:"flaticon-location"}),e.country,", ",e.mountains),c.a.createElement("div",{class:"product__heading--peak"},c.a.createElement("i",{class:"flaticon-mountain"}),e.peak_altitude," m"),c.a.createElement("div",{class:"product__heading--load"},c.a.createElement("i",{class:"flaticon-attachment"}),"Download your map!")),c.a.createElement("div",{class:"product__slopes"},c.a.createElement("div",{class:"product__slopes--easy"},"Easy \u2013 ",e.slopes_easy," km"),c.a.createElement("div",{class:"product__slopes--medium"},"Medium \u2013   ",e.slopes_medium," km"),c.a.createElement("div",{class:"product__slopes--hard"},"Hard \u2013   ",e.slopes_hard," km"),c.a.createElement("div",{class:"product__slopes--total"},"ALL \u2013  ",e.slopes_total," km")),c.a.createElement("div",{className:"product__title"},"RATINGS"),c.a.createElement("div",{class:"product__ratings"},c.a.createElement("div",{class:"product__ratings--resort"},c.a.createElement("div",{class:"product__ratings--rating"},e.rating_resort),"RESORT"),c.a.createElement("div",{class:"product__ratings--family"},c.a.createElement("div",{class:"product__ratings--rating"},e.rating_family),"FAMILY FRIENDLY"),c.a.createElement("div",{class:"product__ratings--scenery"},c.a.createElement("div",{class:"product__ratings--rating"},e.rating_scenery),"SCENERY")),c.a.createElement("div",{class:"product__text"},e.description_long),c.a.createElement("div",{className:"product__buy"},c.a.createElement("div",{class:"product__price"},e.price," EUR"),c.a.createElement("div",{className:"product__buttons"},c.a.createElement("div",{className:"signin__form__button"},c.a.createElement("button",{className:"button navigation__buttons--blue button--page product__button--cart"},"Add To cart")),c.a.createElement("div",{className:"signin__form__button"},c.a.createElement("button",{className:"button navigation__buttons--blue button--page product__button--buy"},"Buy Now")))))),c.a.createElement("div",{className:"product__prices"},c.a.createElement("h2",{className:"product__prices--heading"},"prices per season"),c.a.createElement("img",{src:B.a,alt:"Seasonal prices",className:"product__prices--table"})),c.a.createElement("div",{className:"product__description"},c.a.createElement("h2",{className:"product__description--heading"},"description"),c.a.createElement("div",{className:"product__description--block"},c.a.createElement("div",{className:"product__description--title"},"Accessbility"),c.a.createElement("div",{className:"product__description--text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ")),c.a.createElement("div",{className:"product__description--block"},c.a.createElement("div",{className:"product__description--title"},"Food / Drink"),c.a.createElement("div",{className:"product__description--text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ")),c.a.createElement("div",{className:"product__description--block"},c.a.createElement("div",{className:"product__description--title"},"Offpiste"),c.a.createElement("div",{className:"product__description--text"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. "))),c.a.createElement("div",{className:"product__prices"},c.a.createElement("h2",{className:"product__prices--heading"},"weather")),c.a.createElement("div",{className:"product__description"},c.a.createElement("h2",{className:"product__description--heading"},"cameras"),c.a.createElement("div",{className:"product__description--block"},c.a.createElement("img",{src:H.a,alt:"Cameras",className:"product__description--soon"}),c.a.createElement("img",{src:H.a,alt:"Cameras",className:"product__description--soon"}),c.a.createElement("img",{src:H.a,alt:"Cameras",className:"product__description--soon"}))),c.a.createElement("div",{className:"product__prices"},c.a.createElement("h2",{className:"product__prices--heading"},"community"),c.a.createElement("p",null,"Add a comment about your experience!"),c.a.createElement("p",null,"This feature will be enabled soon!"))),r.map((function(e){return c.a.createElement(s.b,{exact:!0,path:"/".concat(e.name),component:U})})))}(e.product)},K=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1,loading:!1}),t=Object(l.a)(e,2),a=t[0],r=t[1],o=(a.name,a.email),i=a.password,s=(a.error,a.success,a.loading),m=(a.didRedirect,function(e){return function(t){r(Object(p.a)(Object(p.a)({},a),{},Object(J.a)({error:!1},e,t.target.value)))}}),_=function(e){e.preventDefault(),r(Object(p.a)(Object(p.a)({},a),{},{error:!1,loading:!0})),function(e){var t=new FormData;for(var a in e)console.log(e[a]),t.append(a,e[a]);var n,c=Object(u.a)(t.keys());try{for(c.s();!(n=c.n()).done;){var r=n.value;console.log("MYKEY: ",r)}}catch(o){c.e(o)}finally{c.f()}return fetch("".concat(d,"user/login/"),{method:"POST",body:t}).then((function(e){return console.log("SUCCESS",e),e.json()})).catch((function(e){return console.log(e)}))}({email:o,password:i}).then((function(e){e.token?function(e,t){void 0!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),t())}(e,(function(){console.log("TOKEN ADDED"),r(Object(p.a)(Object(p.a)({},a),{},{didRedirect:!0}))})):r(Object(p.a)(Object(p.a)({},a),{},{loading:!1}))})).catch((function(e){return console.log(e)}))};return c.a.createElement("div",null,c.a.createElement(M,null),c.a.createElement(v,{title:"Welcome to sign in page!",description:""},s&&c.a.createElement("div",{className:"alert alert-info"},c.a.createElement("h2",null,"Loading...")),c.a.createElement("div",{className:"signin"}," ",c.a.createElement("div",{className:"signin__form"},c.a.createElement("form",{className:"form"},c.a.createElement("div",{className:"form__group"}," ",c.a.createElement("input",{type:"email",className:"form__input",value:o,onChange:m("email"),placeholder:"Email address",id:"email",required:!0}),c.a.createElement("label",{for:"email",className:"form__label"},"Email Address")),c.a.createElement("div",{className:"form__group"}," ",c.a.createElement("input",{name:"password",type:"password",className:"form__input",value:i,onChange:m("password"),placeholder:"Password",id:"email",required:!0}),c.a.createElement("label",{for:"password",className:"form__label"},"Password")),c.a.createElement("div",{className:"signin__form__button"},c.a.createElement("button",{onClick:_,className:"button navigation__buttons--blue button--page"},"Submit")))))))},Q=function(){return c.a.createElement(v,{title:"User dashboard"},c.a.createElement("h1",null,"Welcome to user dashboard page!"))},$=function(e){var t=Object(n.useState)([]),a=Object(l.a)(t,2),r=a[0],o=a[1],m=Object(n.useState)(!1),u=Object(l.a)(m,2),d=u[0],p=u[1];return Object(n.useEffect)((function(){w().then((function(e){e.error?(p(e.error),console.log(d)):o(e)}))}),[]),c.a.createElement(i.a,null,c.a.createElement(s.d,null,c.a.createElement(s.b,{path:"/",exact:!0,component:Y}),c.a.createElement(s.b,{path:"/signup",exact:!0,component:U}),c.a.createElement(s.b,{path:"/signin",exact:!0,component:K}),r.map((function(e){return c.a.createElement(s.b,{exact:!0,path:"/".concat(e.product_url),component:z})})),c.a.createElement(s.b,{path:"/cart",exact:!0,component:j}),c.a.createElement(f,{path:"/user/dashboard",exact:!0,component:Q})))};o.a.render(c.a.createElement($,null),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.1d17481b.chunk.js.map