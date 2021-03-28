(this.webpackJsonpwebapp=this.webpackJsonpwebapp||[]).push([[0],{147:function(e,r,t){},148:function(e,r,t){},349:function(e,r,t){},350:function(e,r,t){"use strict";t.r(r);var n=t(1),c=t.n(n),i=t(57),s=t.n(i),a=(t(147),t(13)),l=(t(148),t(84),t(0));function d(e){var r=e.driver;return Object(l.jsx)("div",{className:"DriverSelect-wrapper",children:Object(l.jsx)("p",{className:"DriverSelect-name",children:(null===r||void 0===r?void 0:r.driverName)||"No driver"})})}function v(e){var r=e.currentDriver,t=e.drivers,n=e.clickHandler,c=t.map((function(e,t){return Object(l.jsx)("li",{className:"DriverList-Selector button "+(e.driverId===(null===r||void 0===r?void 0:r.driverId)?"selected":""),onClick:function(){return n(e,!0)},children:Object(l.jsx)(d,{driver:e})},e.driverName+t)})),i=Object(l.jsx)("li",{className:"DriverList-Selector",children:Object(l.jsx)(d,{})});return Object(l.jsx)("ul",{className:"DriverList-Wrapper",children:c.length?c:i})}var j=t(37),o=(t(85),t(20));function b(e){var r=e.driver,t=e.clickHandler,c=Object(n.useState)(!1),i=Object(a.a)(c,2),s=i[0],d=i[1];return Object(l.jsx)(o.Marker,{position:r.events[0].pos,onClick:function(){d(!s),t(r,!1)},children:s&&Object(l.jsx)(o.InfoWindow,{onCloseClick:function(){return d(!1)},children:Object(l.jsx)("p",{children:r.driverName})})})}var u={url:"http://maps.google.com/mapfiles/kml/pushpin/ylw-pushpin.png",origin:{x:-12,y:0}};function O(e){var r=e.event;return Object(l.jsx)(o.Marker,{position:null===r||void 0===r?void 0:r.pos,icon:u})}var h={lat:35.191766965947394,lng:-90.0439453125},m={containerElement:Object(l.jsx)("div",{style:{height:"50vh"}}),mapElement:Object(l.jsx)("div",{style:{height:"100%"}})};var x=Object(o.withGoogleMap)((function(e){var r=e.recenter,t=e.currentDriver,n=e.drivers,c=e.clickHandler,i=e.event;return Object(l.jsxs)(o.GoogleMap,Object(j.a)(Object(j.a)({defaultZoom:5,defaultCenter:h,options:{gestureHandling:"greedy"}},r&&t?{center:t.events[0].pos}:{}),{},{children:[Object(l.jsx)(l.Fragment,{children:n.map((function(e,r){return e.events[0].pos!==(null===i||void 0===i?void 0:i.pos)&&Object(l.jsx)(b,{driver:e,clickHandler:c},e.driverName+r)}))}),Object(l.jsx)(O,{event:i})]}))}));t(349);function p(e){var r=e.event,t=e.clickHandle,n=e.selected,c=new Date(r.eventTime),i=60*c.getTimezoneOffset()*1e3,s=new Date(c.getTime()-i).toISOString().slice(0,19).replace(/-/g,"/").replace("T"," ");return Object(l.jsxs)("tr",{onClick:t,className:"button "+(n?"selected":""),children:[Object(l.jsx)("td",{className:"driverEvent-big",children:s}),Object(l.jsx)("td",{className:"driverEvent-small",children:r.routeId}),Object(l.jsx)("td",{className:"driverEvent-big",children:r.routeName}),Object(l.jsx)("td",{className:"driverEvent-small",children:r.speed}),Object(l.jsx)("td",{className:"driverEvent-big",children:r.eventType}),Object(l.jsx)("td",{className:"driverEvent-small",children:r.foggy?"True":"False"}),Object(l.jsx)("td",{className:"driverEvent-small",children:r.rainy?"True":"False"}),Object(l.jsx)("td",{className:"driverEvent-small",children:r.windy?"True":"False"}),Object(l.jsx)("td",{className:"driverEvent-last",children:r.congestionLevel})]})}function g(e){var r=e.events,t=e.eventSelectHandle,c=e.currentDriver,i=Object(n.useState)(void 0),s=Object(a.a)(i,2),d=s[0],v=s[1],j=Object(n.useState)(c),o=Object(a.a)(j,2),b=o[0],u=o[1];c.driverId!==b.driverId&&(u(c),v(void 0));return Object(l.jsxs)("table",{children:[Object(l.jsx)("thead",{children:Object(l.jsxs)("tr",{children:[Object(l.jsx)("th",{className:"driverEvent-big",children:"Date :"}),Object(l.jsx)("th",{className:"driverEvent-small",children:"Route ID :"}),Object(l.jsx)("th",{className:"driverEvent-big",children:"Route name :"}),Object(l.jsx)("th",{className:"driverEvent-small",children:"Speed :"}),Object(l.jsx)("th",{className:"driverEvent-big",children:"Event type :"}),Object(l.jsx)("th",{className:"driverEvent-small",children:"Foggy :"}),Object(l.jsx)("th",{className:"driverEvent-small",children:"Rainy :"}),Object(l.jsx)("th",{className:"driverEvent-small",children:"Windy :"}),Object(l.jsx)("th",{className:"driverEvent-big",children:"Congestion level :"})]})}),Object(l.jsx)("tbody",{children:r.map((function(e,r){return Object(l.jsx)(p,{selected:r===d,event:e,clickHandle:function(){!function(e,r){v(r),t(e)}(e,r)}})}))})]})}function f(e){var r=e.recenter,t=e.currentDriver,c=e.drivers,i=e.changeDriverHandler,s=e.changePageHandler,d=Object(n.useState)(void 0),v=Object(a.a)(d,2),o=v[0],b=v[1];return Object(l.jsxs)("div",{className:"DriverPage-wrapper",children:[Object(l.jsxs)("div",{className:"DriverPage-info-wrapper",children:[Object(l.jsx)("div",{className:"DriverPage-info",children:Object(l.jsxs)("p",{children:["Driver Name : ",void 0===t?"No driver selected.":t.driverName,Object(l.jsx)("br",{}),"Truck ID : ",null===t||void 0===t?void 0:t.truckId]})}),t&&Object(l.jsx)("div",{className:"DriverPage-switch-button button",onClick:s,children:Object(l.jsx)("p",{children:"Driver Info Page"})})]}),Object(l.jsx)(x,Object(j.a)({recenter:r,currentDriver:t,drivers:c,clickHandler:i,event:o},m)),t&&Object(l.jsx)(g,{currentDriver:t,events:t.events,eventSelectHandle:function(e){b(e)}})]})}function N(e){var r=e.currentDriver,t=e.changePageHandler;return Object(l.jsx)("div",{className:"DriverPage-wrapper",children:Object(l.jsxs)("div",{className:"DriverPage-info-wrapper",children:[Object(l.jsx)("div",{className:"DriverPage-info",children:Object(l.jsxs)("p",{children:["Driver Name : ",r.driverName,Object(l.jsx)("br",{}),"Truck ID : ",r.truckId]})}),Object(l.jsx)("div",{className:"DriverPage-switch-button button",onClick:t,children:Object(l.jsx)("p",{children:"Driver Map Page"})})]})})}var D=function(){var e=Object(n.useState)([]),r=Object(a.a)(e,2),t=r[0],c=r[1],i=Object(n.useState)(void 0),s=Object(a.a)(i,2),d=s[0],j=s[1],o=Object(n.useState)(!1),b=Object(a.a)(o,2),u=b[0],O=b[1],h=Object(n.useState)(!1),m=Object(a.a)(h,2),x=m[0],p=m[1],g=function(){return p(!x)};Object(n.useEffect)((function(){var e,r;e=window.location.href+"/drivers.json",r=c,fetch(e).then((function(e){return e.json()}),(function(e){console.log(e)})).then((function(e){r(e)}),(function(e){console.log(e)}))}),[]);var D=function(e,r){O(r),j(e)};return Object(l.jsxs)("div",{className:"app-wrapper",children:[Object(l.jsx)("div",{className:"app-driverList",children:Object(l.jsx)(v,{currentDriver:d,drivers:t,clickHandler:D})}),Object(l.jsx)("div",{className:"app-driverPage",children:x&&d?Object(l.jsx)(N,{currentDriver:d,changePageHandler:g}):Object(l.jsx)(f,{recenter:u,currentDriver:d,drivers:t,changeDriverHandler:D,changePageHandler:g})})]})},k=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,351)).then((function(r){var t=r.getCLS,n=r.getFID,c=r.getFCP,i=r.getLCP,s=r.getTTFB;t(e),n(e),c(e),i(e),s(e)}))};s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(D,{})}),document.getElementById("root")),k()},84:function(e,r,t){},85:function(e,r,t){}},[[350,1,2]]]);
//# sourceMappingURL=main.12553f8b.chunk.js.map