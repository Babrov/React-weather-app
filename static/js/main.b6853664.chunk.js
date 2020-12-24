(this["webpackJsonpreact-weather-app"]=this["webpackJsonpreact-weather-app"]||[]).push([[0],{13:function(e,t,a){e.exports={wrapper:"CardsContainer_wrapper__3VPhE",form:"CardsContainer_form__H11qz",input:"CardsContainer_input__23kot",location:"CardsContainer_location__3jkWK",getButton:"CardsContainer_getButton__iKbRp",button_animation:"CardsContainer_button_animation__3zzm7",icon:"CardsContainer_icon__2g24r",cards_holder:"CardsContainer_cards_holder__3tuEt"}},226:function(e,t,a){},227:function(e,t,a){"use strict";a.r(t);var c=a(3),n=a(0),r=a.n(n),o=a(44),i=a.n(o),s=a(13),d=a.n(s),l=a(101),j=a(6),_=a.n(j),u=a(20),h=a(21),b=function(e){var t=e.info,a=e.onRemove,r=Object(n.useState)(!1),o=Object(l.a)(r,2),i=o[0],s=o[1],d=t.name,j=t.main,b=t.weather,m=t.dt,p=t.wind,O=t.sys,f=new Date(1e3*m),C=f.toLocaleString("en-US",{weekday:"short",month:"short",day:"numeric"}),x=function(e){return e.toLocaleString("en-US",{hour:"2-digit",minute:"2-digit"})},w="http://openweathermap.org/img/wn/".concat(b[0].icon,"@2x.png"),y=function(){s(!i)};return Object(c.jsx)("div",{className:" ".concat(_.a.card),children:Object(c.jsxs)("div",{className:" ".concat(_.a.inner,"  ").concat(i?_.a.isFlipped:"","  "),children:[Object(c.jsxs)("div",{className:"".concat(j.temp<=15?_.a.card_cold:_.a.card_warm," ").concat(_.a.side," ").concat(_.a.front_side),children:[Object(c.jsx)("span",{className:_.a.close,onClick:a,children:Object(c.jsx)(u.a,{icon:h.d})}),Object(c.jsx)("h2",{className:_.a.city,children:d}),Object(c.jsx)("img",{className:_.a.icon,src:w,alt:"weather icon"}),Object(c.jsx)("h2",{className:_.a.temp,children:"".concat(Math.round(j.temp)," \xb0\u0421")}),Object(c.jsx)("p",{className:_.a.descr,children:b[0].description.charAt(0).toUpperCase()+b[0].description.slice(1)}),Object(c.jsx)("h3",{className:_.a.time,children:x(f)}),Object(c.jsx)("p",{className:_.a.date,children:C}),Object(c.jsxs)("label",{className:"".concat(_.a.navButtons," ").concat(_.a.moreInfo),children:["5 days forecast",Object(c.jsx)("button",{onClick:y,children:Object(c.jsx)(u.a,{icon:h.b})})]})]}),Object(c.jsxs)("div",{className:"".concat(j.temp<=15?_.a.card_cold:_.a.card_warm," ").concat(_.a.side," ").concat(_.a.back_side),children:[Object(c.jsx)("span",{className:_.a.close,onClick:a,children:Object(c.jsx)(u.a,{icon:h.d})}),Object(c.jsx)("h2",{className:_.a.city,children:d}),Object(c.jsxs)("div",{className:_.a.moreData,children:[Object(c.jsxs)("h3",{children:["Feels :",Object(c.jsx)("span",{children:"".concat(Math.round(j.feels_like)," \xb0\u0421")})]}),Object(c.jsxs)("h3",{children:["Pressure :",Object(c.jsx)("span",{children:"".concat(j.pressure," hPa")})]}),Object(c.jsxs)("h3",{children:["Wind :",Object(c.jsx)("span",{children:"".concat(p.speed," m/s")})]}),Object(c.jsxs)("h3",{children:["Sunrise :",Object(c.jsx)("span",{children:"".concat(x(new Date(1e3*O.sunrise)))})]}),Object(c.jsxs)("h3",{children:["Sunset :",Object(c.jsx)("span",{children:"".concat(x(new Date(1e3*O.sunset)))})]})]}),Object(c.jsxs)("label",{className:"".concat(_.a.navButtons," ").concat(_.a.backButton),children:[Object(c.jsx)("button",{onClick:y,children:Object(c.jsx)(u.a,{icon:h.a})}),"Back"]})]})]})})},m=a(17),p=a(65),O=a.n(p),f="FETCH_CITY",C="FETCH_LOCATION",x="ADD_CARD",w="05f7911bd80b989d6f1878b5b3f72620",y="REMOVE_CARD",g=a(229),N=a(228),v=function(e){return Object(c.jsxs)("div",{className:d.a.form,children:[Object(c.jsxs)("form",{name:"city",onSubmit:e.handleSubmit,children:[Object(c.jsxs)("label",{className:d.a.input,children:["City:",Object(c.jsx)(g.a,{name:"city",component:"input",id:"cityName"})]}),Object(c.jsx)("button",{className:d.a.getButton,onSubmit:function(){return document.getElementById("cityName").value=""},children:"Get Weather"})]}),Object(c.jsxs)("button",{className:d.a.location,onClick:e.getLocation,children:["Current location",Object(c.jsx)(u.a,{className:d.a.icon,icon:h.c})]})]})},k=v=Object(N.a)({form:"AddWeather"})(v),S=Object(m.b)((function(e){return{weatherArray:e.weather.weatherArray}}),{getCityWeather:function(e){return function(t){O.a.get("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&appid=").concat(w,"&units=metric")).then((function(e){t({type:f,payload:e.data})})).catch((function(){alert("Please write correct city")}))}},getCoordsWeather:function(e,t){return function(a){O.a.get("https://api.openweathermap.org/data/2.5/weather?lat=".concat(e,"&lon=").concat(t,"&appid=").concat(w,"&units=metric")).then((function(e){a({type:C,payload:e.data})}))}},addCard:function(){return function(e){e({type:x})}},removeCard:function(e){return function(t){t({type:y,payload:e})}}})((function(e){var t=e.getCoordsWeather,a=e.getCityWeather,r=e.weatherArray,o=e.addCard,i=e.removeCard;Object(n.useEffect)((function(){r.length>0&&o()}),[]);return Object(c.jsxs)("div",{className:d.a.wrapper,children:[Object(c.jsx)(k,{getLocation:function(){navigator.geolocation.getCurrentPosition((function(e){var a={lat:e.coords.latitude,lng:e.coords.longitude};t(a.lat,a.lng)}))},onSubmit:function(){a(document.getElementById("cityName").value)}}),Object(c.jsx)("div",{className:d.a.cards_holder,children:r.map((function(e,t){return Object(c.jsx)(b,{info:e,onRemove:function(){return i(t)}},e.id)}))})]})}));a(226);var A=function(){return Object(c.jsx)(S,{})},B=a(7),E=a(100),I=a(14),D=a(22),W={weatherArray:[]},F=function(e){return Array.from(new Set(Object(D.a)(e).map((function(e){return e.id})))).map((function(t){return Object(D.a)(e).find((function(e){return e.id===t}))}))},R=a(230),H=Object(B.c)({weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:case C:return Object(I.a)(Object(I.a)({},e),{},{weatherArray:F([t.payload].concat(Object(D.a)(e.weatherArray)))});case x:return Object(I.a)(Object(I.a)({},e),{},{weatherArray:F(Object(D.a)(e.weatherArray))});case y:return Object(I.a)(Object(I.a)({},e),{},{weatherArray:Object(D.a)(e.weatherArray).filter((function(e,a){return a!==t.payload}))});default:return e}},form:R.a}),L=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||B.d,P=Object(B.e)(H,L(Object(B.a)(E.a)));i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(m.a,{store:P,children:Object(c.jsx)(A,{})})}),document.getElementById("root"))},6:function(e,t,a){e.exports={card:"Card_card__3jwRS",inner:"Card_inner__2meLe",side:"Card_side__1X1rg",front_side:"Card_front_side__2bIJ5",icon:"Card_icon__1HmIJ",temp:"Card_temp__1lf-U",descr:"Card_descr__2NJgT",time:"Card_time__3w9HG",date:"Card_date__3UsHx",moreInfo:"Card_moreInfo__1GxGO",navButtons:"Card_navButtons__3sH0x",city:"Card_city__2S8IB",back_side:"Card_back_side__j5atY",moreData:"Card_moreData__Wsy0m",backButton:"Card_backButton__3PWFx",isFlipped:"Card_isFlipped__WmxU8",close:"Card_close__OlhbI",card_cold:"Card_card_cold__3wuFn",card_warm:"Card_card_warm__7zr2d"}}},[[227,1,2]]]);
//# sourceMappingURL=main.b6853664.chunk.js.map