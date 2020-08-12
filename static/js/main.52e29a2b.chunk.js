(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{182:function(e,t,n){e.exports=n(386)},187:function(e,t,n){},188:function(e,t,n){},189:function(e,t,n){},386:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(55),s=n.n(o),c=(n(187),n(9)),i=n(13),l=n(11),u=n(10),m=(n(188),n(189),n(83)),f=n.n(m),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={showDetails:!1},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t=this.props.event,n=t.summary,a=t.location,o=t.start,s=t.htmlLink,c=t.description,i=f()(o.dateTime,"YYYY-MM-DD HH:mm").toDate(),l=this.state.showDetails;return r.a.createElement("div",{className:"event"},r.a.createElement("div",{className:"event__Overview"},r.a.createElement("h2",{className:"event__Overview--name"},n),r.a.createElement("p",{className:"event__Overview--localDate"},"".concat(i)),a&&r.a.createElement("p",{className:"event__Overview--venue"},"@",n," | ",a),l&&r.a.createElement("button",{className:"details-btn",onClick:function(){return e.setState({showDetails:!l})}},"hide details"),!l&&r.a.createElement("button",{className:"details-btn",onClick:function(){return e.setState({showDetails:!l})}},"show details")),l&&r.a.createElement("div",{className:"event__Details"},r.a.createElement("h3",null,"About event:"),r.a.createElement("h4",null,r.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"},"See details on Google Calendar")),r.a.createElement("p",{className:"event__Details--description",dangerouslySetInnerHTML:{__html:c}})))}}]),n}(a.Component),d=function(e){var t=e.events;return t?r.a.createElement("ul",{className:"EventList"},t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement(h,{event:e}))}))):null},v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Alert"},r.a.createElement("p",{style:this.getStyle()},this.props.text))}}]),n}(a.Component),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a}return n}(v),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a}return n}(v),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={locations:e.props.locations,query:"",suggestions:[],showSuggestions:!1},e.handleInputChanged=function(t){var n=t.target.value;e.setState({showSuggestions:!0});var a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));return console.log(e.state.query),0===a.length?e.setState({query:n,infoText:"We can not find the city you are looking for. Please try another city"}):e.setState({query:n,suggestions:a,infoText:""})},e.handleItemClicked=function(t){e.setState({query:t,suggestions:[],showSuggestions:!1,infoText:""}),e.props.updateEvents(t)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return console.log(this.state.query),r.a.createElement("div",{className:"CitySearch"},r.a.createElement(p,{text:this.state.infoText}),r.a.createElement("input",{type:"text",className:"city",value:this.state.query,onChange:this.handleInputChanged}),r.a.createElement("ul",{className:this.state.showSuggestions?"suggestions showSuggestions":"display-none"},this.state.suggestions.map((function(t){return r.a.createElement("li",{key:t,onClick:function(){return e.handleItemClicked(t)}},t)})),r.a.createElement("li",{onClick:function(){return e.handleItemClicked("all")}},r.a.createElement("b",null,"See all cities"))))}}]),n}(a.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32},e.handleInputChanged=function(t){var n=t.target.value;e.props.updateEvents(null,n),e.setState({numberOfEvents:n}),n<1?e.setState({infoText:"Select number from 1 to 32"}):e.setState({infoText:""})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.state.numberOfEvents;return r.a.createElement("div",{className:"numberOfEvents"},r.a.createElement("label",null,"Number of Events: "),r.a.createElement("input",{type:"text",id:"numberOfEvents__input",value:e,onChange:this.handleInputChanged}),r.a.createElement(g,{text:this.state.infoText}))}}]),n}(a.Component),y=n(155),E=n(17),k=n.n(E),S=n(41),O=[{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200622T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA2MjJUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-22T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-22T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-06-22T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0}},{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200623T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA2MjNUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-06-23T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-06-23T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-06-23T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0}}],j=n(36),x=n.n(j),T=n(85),C=n.n(T),N=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},Z=function(){var e=Object(S.a)(k.a.mark((function e(t){var n;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),D=function(e){var t=e.map((function(e){return e.location}));return Object(y.a)(new Set(t))},_=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a,r,o,s,c,i=arguments;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=i.length>0&&void 0!==i[0]?i[0]:32,x.a.start(),navigator.onLine){e.next=6;break}return n=localStorage.getItem("lastEvents"),x.a.done(),e.abrupt("return",{events:JSON.parse(n),locations:D(n)});case 6:if(!window.location.href.startsWith("http://localhost")){e.next=9;break}return x.a.done(),e.abrupt("return",{events:O,locations:D(O)});case 9:if(navigator.onLine){e.next=13;break}return a=localStorage.getItem("lastEvents"),x.a.done(),e.abrupt("return",{events:JSON.parse(a),locations:D(a)});case 13:return e.next=15,A();case 15:if(!(r=e.sent)){e.next=25;break}return N(),o="https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/get-events/".concat(r,"/").concat(t),e.next=21,C.a.get(o);case 21:return(s=e.sent).data&&(c=D(s.data.events),localStorage.setItem("lastEvents",JSON.stringify(s.data)),localStorage.setItem("locations",JSON.stringify(c))),x.a.done(),e.abrupt("return",{events:s.data.events,locations:c});case 25:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),A=function(){var e=Object(S.a)(k.a.mark((function e(){var t,n,a,r,o,s;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("access_token");case 2:if(t=e.sent,e.t0=t,!e.t0){e.next=8;break}return e.next=7,Z(t);case 7:e.t0=e.sent;case 8:if(n=e.t0,t&&!n.error){e.next=23;break}return e.next=12,localStorage.removeItem("access_token");case 12:return a=new URLSearchParams(window.location.search),e.next=15,a.get("code");case 15:if(r=e.sent){e.next=22;break}return e.next=19,C.a.get("https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url");case 19:return o=e.sent,s=o.data.authUrl,e.abrupt("return",window.location.href=s);case 22:return e.abrupt("return",r&&I(r));case 23:return e.abrupt("return",t);case 24:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(S.a)(k.a.mark((function e(t){var n,a,r;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=encodeURIComponent(t),e.next=3,fetch("https://f1k17pnw2a.execute-api.us-east-1.amazonaws.com/dev/api/token/".concat(n)).then((function(e){return e.json()})).catch((function(e){return e}));case 3:return a=e.sent,(r=a.access_token)&&localStorage.setItem("access_token",r),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=n(21),M=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],page:null,currentLocation:"all",offlineText:"",numberOfEvents:32,locations:[]},e.getData=function(){var t=e.state,n=t.locations,a=t.events;return n.map((function(e){var t=a.filter((function(t){return t.location===e})).length;return{city:e.split(" ").shift(),number:t}}))},e.updateEvents=function(t,n){var a=e.state,r=a.currentLocation,o=a.numberOfEvents;t?_().then((function(n){var a=("all"===t?n.events:n.events.filter((function(e){return e.location===t}))).slice(0,o);return e.setState({events:a,currentLocation:t})})):_().then((function(t){var a=("all"===r?t.events:t.events.filter((function(e){return e.location===r}))).slice(0,n);return e.setState({events:a,numberOfEvents:n})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;_().then((function(t){e.setState({events:t.events,locations:t.locations})}))}},{key:"render",value:function(){var e=this.state,t=e.locations,n=e.numberOfEvents,a=e.events;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Meet App"),r.a.createElement("h4",null,"Choose your nearest city"),r.a.createElement(w,{updateEvents:this.updateEvents,locations:t}),r.a.createElement(b,{updateEvents:this.updateEvents,numberOfEvents:n}),r.a.createElement("h4",null,"Events in each city"),r.a.createElement(W.b,{height:400},r.a.createElement(W.d,{margin:{top:20,right:20,bottom:20,left:20}},r.a.createElement(W.a,null),r.a.createElement(W.f,{type:"category",dataKey:"city",name:"city"}),r.a.createElement(W.g,{allowDecimals:!1,type:"number",dataKey:"number",name:"number of events"}),r.a.createElement(W.e,{cursor:{strokeDasharray:"3 3"}}),r.a.createElement(W.c,{data:this.getData(),fill:"#8884d8"}))),r.a.createElement(d,{events:a}))}}]),n}(a.Component),q=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function L(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var J=n(154);s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(M,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");q?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):L(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):L(t,e)}))}}(),J.config("fb85af9c856b456b89253eb0c34d9a66").install()}},[[182,1,2]]]);
//# sourceMappingURL=main.52e29a2b.chunk.js.map