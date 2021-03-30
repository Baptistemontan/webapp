(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{146:function(e,t,r){},147:function(e,t,r){},148:function(e,t,r){},349:function(e,t,r){},351:function(e,t,r){"use strict";r.r(t);var n=r(1),c=r.n(n),i=r(57),s=r.n(i),l=(r(146),r(14)),a=(r(147),r(148),r(0));function d(e){var t=e.driver;return Object(a.jsx)("div",{className:"DriverSelect-wrapper",children:Object(a.jsx)("p",{className:"DriverSelect-name",children:(null===t||void 0===t?void 0:t.driverName)||"No driver"})})}function j(e){var t=e.currentDriver,r=e.drivers,n=e.clickHandler,c=r.map((function(e,r){return Object(a.jsx)("li",{className:"DriverList-Selector button "+(e.driverId===(null===t||void 0===t?void 0:t.driverId)?"selected":""),onClick:function(){return n(e,!0)},children:Object(a.jsx)(d,{driver:e})},e.driverName+r)})),i=Object(a.jsx)("li",{className:"DriverList-Selector",children:Object(a.jsx)(d,{})});return Object(a.jsx)("ul",{className:"DriverList-Wrapper",children:c.length?c:i})}function v(e){var t=new Date(e),r=60*t.getTimezoneOffset()*1e3;return new Date(t.getTime()-r).toISOString().slice(0,19).replace(/-/g,"/").replace("T"," ")}var o=r(37),u=(r(84),r(20));function b(e){var t=e.driver,r=e.clickHandler,c=Object(n.useState)(!1),i=Object(l.a)(c,2),s=i[0],d=i[1];return Object(a.jsx)(u.Marker,{position:t.events[0].pos,onClick:function(){d(!s),r(t,!1)},children:s&&Object(a.jsx)(u.InfoWindow,{onCloseClick:function(){return d(!1)},children:Object(a.jsx)("p",{children:t.driverName})})})}var O={url:"http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png",origin:{x:-12,y:0}};function h(e){var t=e.event;return Object(a.jsx)(u.Marker,{position:null===t||void 0===t?void 0:t.pos,icon:O})}var p={lat:35.191766965947394,lng:-90.0439453125},m=function(e){return{height:e?"50vh":"0"}},x={height:"100%"};var f=Object(u.withGoogleMap)((function(e){var t=e.recenter,r=e.currentDriver,n=e.drivers,c=e.clickHandler,i=e.event;return Object(a.jsxs)(u.GoogleMap,Object(o.a)(Object(o.a)({defaultZoom:5,defaultCenter:p,options:{gestureHandling:"greedy"}},t&&r?{center:r.events[0].pos}:{}),{},{children:[Object(a.jsx)(a.Fragment,{children:n.map((function(e,t){return e.events[0].pos!==(null===i||void 0===i?void 0:i.pos)&&Object(a.jsx)(b,{driver:e,clickHandler:c},e.driverName+t)}))}),Object(a.jsx)(h,{event:i})]}))}));r(349);function g(e){var t=e.event,r=e.clickHandle,n=e.selected;return Object(a.jsxs)("tr",{onClick:r,className:"button "+(n?"selected":""),children:[Object(a.jsx)("td",{className:"driverEvent-big",children:v(t.eventTime)}),Object(a.jsx)("td",{className:"driverEvent-small",children:t.routeId}),Object(a.jsx)("td",{className:"driverEvent-big",children:t.routeName}),Object(a.jsx)("td",{className:"driverEvent-small",children:t.speed}),Object(a.jsx)("td",{className:"driverEvent-big",children:t.eventType}),Object(a.jsx)("td",{className:"driverEvent-small",children:t.foggy?"True":"False"}),Object(a.jsx)("td",{className:"driverEvent-small",children:t.rainy?"True":"False"}),Object(a.jsx)("td",{className:"driverEvent-small",children:t.windy?"True":"False"}),Object(a.jsx)("td",{className:"driverEvent-last",children:t.congestionLevel})]})}function N(e){var t=e.eventSelectHandle,r=e.currentDriver,c=Object(n.useState)(void 0),i=Object(l.a)(c,2),s=i[0],d=i[1],j=Object(n.useRef)(null);Object(n.useEffect)((function(){var e;d(void 0),null===(e=j.current)||void 0===e||e.scrollIntoView()}),[r]);return Object(a.jsxs)("table",{children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{className:"driverEvent-big",children:"Date :"}),Object(a.jsx)("th",{className:"driverEvent-small",children:"Route ID :"}),Object(a.jsx)("th",{className:"driverEvent-big",children:"Route name :"}),Object(a.jsx)("th",{className:"driverEvent-small",children:"Speed :"}),Object(a.jsx)("th",{className:"driverEvent-big",children:"Event type :"}),Object(a.jsx)("th",{className:"driverEvent-small",children:"Foggy :"}),Object(a.jsx)("th",{className:"driverEvent-small",children:"Rainy :"}),Object(a.jsx)("th",{className:"driverEvent-small",children:"Windy :"}),Object(a.jsx)("th",{className:"driverEvent-big",children:"Congestion level :"})]})}),Object(a.jsxs)("tbody",{children:[Object(a.jsx)("tr",{ref:j}),Object(a.jsx)(a.Fragment,{children:r.events.map((function(e,r){return Object(a.jsx)(g,{selected:r===s,event:e,clickHandle:function(){!function(e,r){d(r),t(e)}(e,r)}},e.routeName+r)}))})]})]})}var E=r(350);function D(e){var t=e.event;return Object(a.jsxs)("div",{children:[Object(a.jsxs)("p",{children:["Date : ",v(t.eventTime)]}),Object(a.jsxs)("p",{children:["Route ID : ",t.routeId]}),Object(a.jsxs)("p",{children:["Route Name : ",t.routeName]}),Object(a.jsxs)("p",{children:["Speed : ",t.speed]}),Object(a.jsxs)("p",{children:["Event type : ",t.eventType]}),Object(a.jsxs)("p",{children:["Foggy : ",t.foggy?"True":"False"]}),Object(a.jsxs)("p",{children:["Rainy : ",t.rainy?"True":"False"]}),Object(a.jsxs)("p",{children:["Windy : ",t.windy?"True":"False"]}),Object(a.jsxs)("p",{children:["Congestion level : ",t.congestionLevel]}),Object(a.jsxs)("p",{children:["Event position : ",E(t.pos.lat,t.pos.lng).format()]})]})}function y(e){var t,r=e.currentDriver,c=e.drivers,i=e.recenter,s=e.currentDriverHandler,d=Object(n.useState)(!1),j=Object(l.a)(d,2),v=j[0],u=j[1],b=Object(n.useState)(void 0),O=Object(l.a)(b,2),h=O[0],p=O[1];return Object(n.useEffect)((function(){p(void 0)}),[r]),Object(a.jsxs)("div",{className:"DriverPage-wrapper",children:[Object(a.jsxs)("div",{className:"DriverPage-info-wrapper",children:[Object(a.jsx)("div",{className:"DriverPage-info",children:Object(a.jsxs)("p",{children:["Driver Name : ",void 0===r?"No driver selected.":r.driverName,Object(a.jsx)("br",{}),"Truck ID : ",null===r||void 0===r?void 0:r.truckId]})}),r&&Object(a.jsx)("div",{className:"DriverPage-switch-button button",onClick:function(){return u(!v)},children:Object(a.jsx)("p",{children:v?"Events Map Page":"Events Info Page"})})]}),Object(a.jsx)(f,Object(o.a)({recenter:i,currentDriver:r,drivers:c,clickHandler:s,event:h},(t=!v,{containerElement:Object(a.jsx)("div",{style:m(t)}),mapElement:Object(a.jsx)("div",{style:x})}))),r&&Object(a.jsx)(N,{currentDriver:r,eventSelectHandle:p}),v&&h&&Object(a.jsx)(D,{event:h})]})}var k=function(){var e=Object(n.useState)([]),t=Object(l.a)(e,2),r=t[0],c=t[1],i=Object(n.useState)(void 0),s=Object(l.a)(i,2),d=s[0],v=s[1],o=Object(n.useState)(!1),u=Object(l.a)(o,2),b=u[0],O=u[1];Object(n.useEffect)((function(){var e,t;e=window.location.href+"/drivers.json",t=c,fetch(e).then((function(e){return e.json()}),(function(e){console.log(e)})).then((function(e){t(e)}),(function(e){console.log(e)}))}),[]);var h=function(e,t){O(t),v(e)};return Object(a.jsxs)("div",{className:"app-wrapper",children:[Object(a.jsx)("div",{className:"app-driverList",children:Object(a.jsx)(j,{currentDriver:d,drivers:r,clickHandler:h})}),Object(a.jsx)("div",{className:"app-driverPage",children:Object(a.jsx)(y,{currentDriver:d,drivers:r,currentDriverHandler:h,recenter:b})})]})},w=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,352)).then((function(t){var r=t.getCLS,n=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;r(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(k,{})}),document.getElementById("root")),w()},84:function(e,t,r){}},[[351,1,2]]]);
//# sourceMappingURL=main.09f16841.chunk.js.map